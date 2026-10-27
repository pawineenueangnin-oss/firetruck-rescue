// v21 music: original procedural score (Web Audio). Tracks: menu, game (layers follow fire level, zone variants), story, boss, win/lose stingers.
// All notes enveloped (>=6ms attack, >=25ms release), polyphony capped, lookahead scheduler, plays through AU.m -> v19 limiter chain.
(function(){
const PC={C:0,D:2,E:4,F:5,G:7,A:9,B:11};
const CH=s=>{let r=PC[s[0]],i=1;if(s[1]==='b'){r--;i++;}else if(s[1]==='#'){r++;i++;}return{r:(r+12)%12,t:s[i]==='m'?[0,3,7]:[0,4,7]};};
const mf=m=>440*Math.pow(2,(m-69)/12);
const inR=(pc,lo)=>{let m=lo+((pc-lo)%12+12)%12;return m;};// lowest midi >= lo with pitch class pc
function impulse(ac,sec){const n=Math.floor(ac.sampleRate*sec),b=ac.createBuffer(2,n,ac.sampleRate);for(let c=0;c<2;c++){const a=b.getChannelData(c);let s=12345+c*999;for(let i=0;i<n;i++){s=(s*1103515245+12345)&0x7fffffff;const u=i/n;a[i]=((s/0x7fffffff)*2-1)*Math.pow(1-u,2.6)*(i<64?i/64:1)*.5;}}return b;}
function Eng(ac,out){this.ac=ac;this.out=out;this.v=[];this.max=22;this.nodes=0;this.peakV=0;
 const nb=ac.createBuffer(1,ac.sampleRate,ac.sampleRate),a=nb.getChannelData(0);let s=7;for(let i=0;i<a.length;i++){s=(s*1103515245+12345)&0x7fffffff;a[i]=(s/0x7fffffff)*2-1;}this.nb=nb;
 const cv=ac.createConvolver();cv.normalize=true;cv.buffer=impulse(ac,1.6);const rs=ac.createGain();rs.gain.value=.22;rs.connect(cv);cv.connect(out);this.rev=rs;}
const P=Eng.prototype;
P.track=function(){const g=this.ac.createGain();g.gain.value=1;g.connect(this.out);g.connect(this.rev);return g;};
P.ok=function(t,len,pri){this.v=this.v.filter(e=>e>t);if(this.v.length>=this.max&&!pri)return false;this.v.push(t+len);if(this.v.length>this.peakV)this.peakV=this.v.length;return true;};
P.mk=function(k,...a){this.nodes++;return this.ac['create'+k](...a);};
P.fin=function(srcs,all,stop){srcs.forEach(s=>s.stop(stop));srcs[0].onended=()=>all.forEach(n=>{try{n.disconnect();}catch(e){}});};
// percussive envelope: attack a, exp decay to dec, linear to 0 (+.03)
P.penv=function(g,t,a,v,dec){g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+a);g.gain.exponentialRampToValueAtTime(v*.001+1e-5,t+dec);g.gain.linearRampToValueAtTime(0,t+dec+.03);};
// sustained envelope: attack a, hold to len, release r
P.senv=function(g,t,a,v,len,r){g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+a);g.gain.setValueAtTime(v,t+Math.max(a,len));g.gain.linearRampToValueAtTime(0,t+Math.max(a,len)+r);};
P.pad=function(d,t,len,notes,v,cut){if(!this.ok(t,len+.8,1))return;const f=this.mk('BiquadFilter'),g=this.mk('Gain');f.type='lowpass';f.frequency.value=cut||1200;f.Q.value=.5;const os=[];
 notes.forEach(m=>[-7,7].forEach(dt=>{const o=this.mk('Oscillator');o.type='sawtooth';o.frequency.value=mf(m);o.detune.value=dt;o.connect(f);o.start(t);os.push(o);}));
 this.senv(g,t,.35,v/notes.length,len,.7);f.connect(g);g.connect(d);this.fin(os,[...os,f,g],t+len+.75);};
P.brass=function(d,t,len,m,v){if(!this.ok(t,len+.15,1))return;const o=this.mk('Oscillator'),o2=this.mk('Oscillator'),f=this.mk('BiquadFilter'),g=this.mk('Gain');o.type=o2.type='sawtooth';o.frequency.value=o2.frequency.value=mf(m);o2.detune.value=6;
 f.type='lowpass';f.Q.value=1.2;f.frequency.setValueAtTime(500,t);f.frequency.linearRampToValueAtTime(2600,t+.07);f.frequency.setTargetAtTime(1300,t+.07,.15);
 this.senv(g,t,.03,v*.5,len,.12);o.connect(f);o2.connect(f);f.connect(g);g.connect(d);o.start(t);o2.start(t);this.fin([o,o2],[o,o2,f,g],t+len+.16);};
P.pluck=function(d,t,m,v,dec,pri,soft){dec=dec||.4;if(!this.ok(t,dec,pri))return;const o=this.mk('Oscillator'),o2=this.mk('Oscillator'),g2=this.mk('Gain'),f=this.mk('BiquadFilter'),g=this.mk('Gain');
 o.type=soft?'sine':'triangle';o2.type='sine';o.frequency.value=mf(m);o2.frequency.value=mf(m)*2;g2.gain.value=soft?.35:.25;f.type='lowpass';f.frequency.setValueAtTime(soft?2600:3800,t);f.frequency.exponentialRampToValueAtTime(soft?700:1200,t+dec);
 this.penv(g,t,.006,v,dec);o.connect(f);o2.connect(g2);g2.connect(f);f.connect(g);g.connect(d);o.start(t);o2.start(t);this.fin([o,o2],[o,o2,g2,f,g],t+dec+.05);};
P.bell=function(d,t,len,m,v){const dec=Math.max(.5,len+.4);if(!this.ok(t,dec,1))return;const o=this.mk('Oscillator'),o2=this.mk('Oscillator'),g2=this.mk('Gain'),g=this.mk('Gain');o.type='sine';o2.type='triangle';o.frequency.value=mf(m);o2.frequency.value=mf(m)*2.001;g2.gain.value=.12;
 this.penv(g,t,.008,v,dec);o.connect(g);o2.connect(g2);g2.connect(g);g.connect(d);o.start(t);o2.start(t);this.fin([o,o2],[o,o2,g2,g],t+dec+.05);};
P.bass=function(d,t,len,m,v){if(!this.ok(t,len+.1,1))return;const o=this.mk('Oscillator'),o2=this.mk('Oscillator'),g2=this.mk('Gain'),f=this.mk('BiquadFilter'),g=this.mk('Gain');o.type='triangle';o2.type='sine';o.frequency.value=mf(m);o2.frequency.value=mf(m)/2;g2.gain.value=.5;
 f.type='lowpass';f.frequency.value=650;this.senv(g,t,.012,v,len,.08);o.connect(f);o2.connect(g2);g2.connect(f);f.connect(g);g.connect(d);o.start(t);o2.start(t);this.fin([o,o2],[o,o2,g2,f,g],t+len+.1);};
P.pulse=function(d,t,m,v,cut){if(!this.ok(t,.22))return;const o=this.mk('Oscillator'),f=this.mk('BiquadFilter'),g=this.mk('Gain');o.type='sawtooth';o.frequency.value=mf(m);f.type='lowpass';f.frequency.value=cut||520;f.Q.value=3;
 this.penv(g,t,.006,v,.18);o.connect(f);f.connect(g);g.connect(d);o.start(t);this.fin([o],[o,f,g],t+.23);};
P.kick=function(d,t,v){if(!this.ok(t,.35,1))return;const o=this.mk('Oscillator'),g=this.mk('Gain');o.type='sine';o.frequency.setValueAtTime(130,t);o.frequency.exponentialRampToValueAtTime(45,t+.13);this.penv(g,t,.006,v,.3);o.connect(g);g.connect(d);o.start(t);this.fin([o],[o,g],t+.35);};
P.tom=function(d,t,m,v){if(!this.ok(t,.42,1))return;const o=this.mk('Oscillator'),g=this.mk('Gain');o.type='sine';o.frequency.setValueAtTime(mf(m),t);o.frequency.exponentialRampToValueAtTime(mf(m)*.65,t+.35);this.penv(g,t,.006,v,.38);o.connect(g);g.connect(d);o.start(t);this.fin([o],[o,g],t+.42);};
P.nz=function(d,t,v,dec,type,fr,q,pri){if(!this.ok(t,dec,pri))return;const s=this.mk('BufferSource'),f=this.mk('BiquadFilter'),g=this.mk('Gain');s.buffer=this.nb;s.loop=true;f.type=type;f.frequency.value=fr;f.Q.value=q||.7;
 this.penv(g,t,.006,v,dec);s.connect(f);f.connect(g);g.connect(d);s.start(t,(t*7.13)%.9);this.fin([s],[s,f,g],t+dec+.05);};
P.snare=function(d,t,v){this.nz(d,t,v,.16,'bandpass',1900,.8,1);this.pluck(d,t,54,v*.5,.1,1,1);};
P.hat=function(d,t,v,open){this.nz(d,t,v,open?.18:.045,'highpass',7500);};
P.shaker=function(d,t,v){this.nz(d,t,v,.07,'bandpass',6200,1.2);};
P.cym=function(d,t,v){this.nz(d,t,v,1.6,'highpass',5200,.7,1);};
P.swell=function(d,t,len,v){if(!this.ok(t,len,1))return;const s=this.mk('BufferSource'),f=this.mk('BiquadFilter'),g=this.mk('Gain');s.buffer=this.nb;s.loop=true;f.type='lowpass';f.frequency.setValueAtTime(300,t);f.frequency.exponentialRampToValueAtTime(4000,t+len);
 g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+len-.03);g.gain.linearRampToValueAtTime(0,t+len+.03);s.connect(f);f.connect(g);g.connect(d);s.start(t);this.fin([s],[s,f,g],t+len+.05);};
// ---------- song data ----------
const R=-1;// hold
const voicing=(c,tr)=>{const r=inR((c.r+tr)%12+12,55)%128;return c.t.map(x=>r+x).map(m=>m>67?m-12:m);};
const arpT=(c,tr,lo)=>{const r=inR(((c.r+tr)%12+12)%12,lo);return [r,r+c.t[1],r+c.t[2],r+12];};
function melLen(bar,e){let n=1;while(e+n<8&&bar[e+n]===R)n++;return n;}
const TR={
 menu:{bpm:100,ch:'C G Am F C F G C F G Am Em F C Dm G'.split(' '),
  mel:[[72,R,76,R,79,R,R,77],[76,R,74,R,71,R,74,R],[72,R,76,R,81,R,79,77],[77,R,R,R,76,R,74,R],[72,R,76,R,79,R,84,R],[81,R,79,R,77,R,81,R],[79,R,77,76,74,R,71,R],[72,R,R,R,0,0,67,R],
       [0,0,69,72,77,R,76,R],[74,R,71,74,79,R,R,R],[0,0,72,76,81,R,79,R],[79,R,76,R,71,R,R,R],[77,R,76,77,81,R,79,77],[76,R,72,76,79,R,R,R],[77,R,74,77,81,R,77,R],[79,R,R,R,74,R,71,R]],
  step(E,d,t,i,st){const sp=60/st.bpm/4,b=Math.floor(i/16)%16,s=i%16,c=CH(this.ch[b]),tr=st.tr,B=b>=8,first=i<32&&st.loop===0;
   if(s===0)E.pad(d,t,sp*16,voicing(c,tr),.09,B?1500:1100);
   if(s%2===0){const pat=[0,1,2,1,3,2,1,2];E.pluck(d,t,arpT(c,tr,60)[pat[s/2]],B?.07:.05,.35);}
   if(s===0||s===8)E.bass(d,t,sp*6,inR(((c.r+tr)%12+12)%12,36),.22);if(s===14)E.bass(d,t,sp*1.6,inR(((c.r+tr+7)%12+12)%12,36),.14);
   if(!first){if(s===0||s===8||(B&&s===6))E.kick(d,t,.3);if(s===4||s===12)E.snare(d,t,.08);if(s%4===2)E.hat(d,t,.03,s===14&&b%2);}
   if(b===15&&s>=12)E.snare(d,t,.04+(s-12)*.02);if(b===0&&s===0&&!first)E.cym(d,t,.05);
   if(s%2===0){const bar=this.mel[b],e=s/2,n=bar[e];if(n>0){const L=melLen(bar,e)*sp*2;if(B&&b<12)E.bell(d,t,L,n+tr,.11);else E.brass(d,t,L*.92,n+tr,.15);}}}},
 game:{bpm:96,ch:'Am F C G Am F G E Dm Am F C Dm E Am E'.split(' '),
  mel:[[76,R,0,0,72,R,0,0],[0,0,0,0,0,0,0,0],[79,R,0,0,76,R,74,R],[0,0,0,0,0,0,0,0],[76,R,0,0,81,R,0,0],[0,0,0,0,0,0,0,0],[79,R,77,R,76,R,74,R],[76,R,R,R,0,0,0,0],
       [74,R,77,R,81,R,R,R],[79,R,77,R,76,R,R,R],[72,R,74,R,77,R,76,R],[76,R,R,R,72,R,0,0],[77,R,76,R,74,R,77,R],[80,R,R,R,76,R,R,R],[72,R,76,R,81,R,79,R],[80,R,R,R,83,R,R,R]],
  step(E,d,t,i,st){const sp=60/st.bpm/4,b=Math.floor(i/16)%16,s=i%16,c=CH(this.ch[b]),tr=st.tr,lv=st.lv(t),alt=st.loop%2===1,B=b>=8;
   if(s===0)E.pad(d,t,sp*16,voicing(c,tr),.07,900+lv*600);
   if(s%2===0){const pat=alt?[0,1,2,3,2,1,2,1]:[0,2,1,2,3,2,1,2];E.pluck(d,t,arpT(c,tr,alt?64:57)[pat[s/2]],.06,.3,0,st.soft);}
   if(s===0||s===8)E.bass(d,t,sp*7,inR(((c.r+tr)%12+12)%12,33),.2);
   if(lv>=1&&s%2===0&&s!==0&&s!==8)E.bass(d,t,sp*.9,inR(((c.r+tr)%12+12)%12,33),.1);
   if(s===0||s===8)E.kick(d,t,.24);if(s%4===2)E.hat(d,t,.022);
   if(lv>=1){if(s%2===1)E.shaker(d,t,.018);if(s===12)E.snare(d,t,.06);}
   if(lv>=2){E.pulse(d,t,inR(((c.r+tr)%12+12)%12,45)+(s%8===6?12:0),.045,700);if(b%2===1&&(s===12||s===14))E.tom(d,t,s===12?50:45,.16);}
   if(s%2===0){const bar=this.mel[b],e=s/2,n=bar[e];if(n>0){const L=melLen(bar,e)*sp*2;if(!B&&alt)E.pluck(d,t,n+tr-12,.08,Math.min(1.2,L+.3),1,1);else E.bell(d,t,L,n+tr,.09);}}}},
 story:{bpm:72,ch:'F C Dm Bb F C Bb C Dm Bb F C Dm Bb C C'.split(' '),
  mel:[[81,R,R,R,79,R,77,R],[76,R,R,R,0,0,0,0],[77,R,R,R,74,R,72,R],[74,R,R,R,0,0,0,0],[81,R,R,R,84,R,81,R],[79,R,R,R,0,0,0,0],[77,R,74,R,77,R,79,R],[79,R,R,R,0,0,0,0],
       [77,R,R,R,81,R,R,R],[82,R,R,R,77,R,R,R],[81,R,R,R,77,R,72,R],[76,R,R,R,0,0,0,0],[74,R,77,R,81,R,R,R],[82,R,81,R,79,R,77,R],[76,R,R,R,79,R,R,R],[77,R,R,R,0,0,0,0]],
  step(E,d,t,i,st){const sp=60/st.bpm/4,b=Math.floor(i/16)%16,s=i%16,c=CH(this.ch[b]),tr=st.tr;
   if(s===0){E.pad(d,t,sp*16,voicing(c,tr),.08,1000);E.bass(d,t,sp*14,inR(((c.r+tr)%12+12)%12,36),.12);}
   if(s%2===0){const pat=[0,1,2,3,2,1,2,1];E.pluck(d,t,arpT(c,tr,53)[pat[s/2]],.05,1.2,0,1);}
   if(s%2===0){const bar=this.mel[b],e=s/2,n=bar[e];if(n>0)E.pluck(d,t,n+tr,.1,Math.min(2,melLen(bar,e)*sp*2+.6),1,1);}}},
 boss:{bpm:84,ch:'Dm Dm Bb A Dm Dm Gm A'.split(' '),
  step(E,d,t,i,st){const sp=60/st.bpm/4,b=Math.floor(i/16)%8,s=i%16,c=CH(this.ch[b]),tr=st.tr;const r2=inR(((c.r+tr)%12+12)%12,38);
   if(s===0)E.pad(d,t,sp*16,voicing(c,tr).map(m=>m-12),.08,600);
   if(s%2===0)E.pulse(d,t,r2+(s===6||s===14?7:0),.06,600);
   if(s===0||s===8)E.kick(d,t,.32);if([0,3,6,10].includes(s))E.tom(d,t,s===0?43:s===10?38:40,.2);
   if(b%2===0&&s===0){E.brass(d,t,sp*3,r2+12,.08);E.brass(d,t,sp*3,r2+19,.06);}
   if(b===7){if(s>=8)E.snare(d,t,.03+(s-8)*.012);if(s===0)E.swell(d,t,sp*16,.05);}
   if(b===0&&s===0&&i>0)E.cym(d,t,.04);}}
};
const STING={
 win(E,d,t,tr){const q=.12;[[67,0],[72,1],[76,2],[79,3]].forEach(([m,k])=>E.brass(d,t+k*q,k===3?.22:q*.9,m+tr,.16));const T=t+4*q+.1;
  [72,76,79,84].forEach(m=>E.brass(d,T,1.1,m+tr,.12));E.pad(d,T,1.2,[60,64,67].map(m=>m+tr),.08,1800);E.kick(d,T,.32);E.cym(d,T,.06);E.bass(d,T,1.1,48+tr,.2);
  for(let k=0;k<4;k++)E.snare(d,t+k*q,.03+k*.01);[84,88,91,96].forEach((m,k)=>E.bell(d,T+.15+k*.09,.25,m+tr,.06));return 2.6;},
 lose(E,d,t,tr){const q=.38;[76,74,72,71].forEach((m,k)=>E.pluck(d,t+k*q,m+tr,.11,.9,1,1));E.pluck(d,t+4*q,69+tr,.12,2.2,1,1);E.pad(d,t,4*q+1.4,[57,60,64].map(m=>m+tr),.07,800);E.bass(d,t+4*q,1.6,45+tr,.12);return 3.6;}
};
const ZONE=[{tr:0,bpm:0,soft:0},{tr:2,bpm:4,soft:1},{tr:-3,bpm:-4,soft:0},{tr:3,bpm:6,soft:1},{tr:-2,bpm:2,soft:0},{tr:5,bpm:8,soft:1}];
function mkState(key,t0,opt){opt=opt||{};const z=ZONE[(opt.zone||0)%ZONE.length];const def=TR[key];return{key,def,step:0,loop:0,nextT:t0,bpm:def?def.bpm+(key==='game'?z.bpm:0):100,tr:key==='game'?z.tr:0,soft:z.soft,lv:opt.lv||(()=>0)};}
function run(E,d,st,until,cap){let n=0;cap=cap||256;while(st.nextT<until&&n<cap){st.def.step(E,d,st.nextT,st.step,st);st.nextT+=60/st.bpm/4;st.step++;if(st.step%(16*(st.key==='boss'?8:16))===0)st.loop++;n++;}}
// ---------- live player ----------
const M=window.MUS={E:null,st:null,tg:null,key:null,duck:null,TR,STING,Eng,mkState,run,ZONE};
function want(){if(typeof SAVE==='undefined'||!SAVE.mus)return null;const m=typeof MODE!=='undefined'?MODE:'';
 if(m==='story'){const n=((window.SQ&&SQ.name)||'')+'';return /^(bp\d|b\d)/.test(n)?'boss':'story';}
 if(m==='game'&&typeof G!=='undefined'&&G){if(G.state==='win')return 'win';if(G.state==='lose')return 'lose';return 'game'+((G.L&&G.L.endless)?':'+(G.L.zone||0):'');}
 if(m==='splash'||!m)return null;return 'menu';}
let ttsDuck=false;
M.duckNow=function(lv,hold){if(!M.duck)return;const ac=AU.ac,n=ac.currentTime,g=M.duck.gain;g.cancelScheduledValues(n);g.setValueAtTime(g.value,n);g.linearRampToValueAtTime(lv,n+.04);g.setValueAtTime(lv,n+hold);g.linearRampToValueAtTime(ttsDuck?.5:1,n+hold+.5);};
function tick(){const ac=AU.ac;if(!ac||ac.state!=='running')return;if(!M.E){M.duck=ac.createGain();M.duck.connect(AU.m);M.E=new Eng(ac,M.duck);}
 const sp=!!(window.speechSynthesis&&speechSynthesis.speaking);if(sp!==ttsDuck){ttsDuck=sp;const g=M.duck.gain,n=ac.currentTime;g.cancelScheduledValues(n);g.setValueAtTime(g.value,n);g.linearRampToValueAtTime(sp?.5:1,n+.25);}
 const k=want(),now=ac.currentTime;
 if(k!==M.key){if(M.tg){const o=M.tg;o.gain.cancelScheduledValues(now);o.gain.setValueAtTime(o.gain.value,now);o.gain.linearRampToValueAtTime(0,now+(k==='win'||k==='lose'?.25:.8));setTimeout(()=>{try{o.disconnect();}catch(e){}},3500);}
  M.key=k;M.st=null;M.tg=null;if(k){M.tg=M.E.track();M.tg.gain.setValueAtTime(0,now);M.tg.gain.linearRampToValueAtTime(1,now+.3);
   if(k==='win'||k==='lose'){STING[k](M.E,M.tg,now+.08,0);}
   else{const [base,z]=k.split(':');M.st=mkState(base,now+.1,{zone:+z||0,lv:()=>{if(typeof G==='undefined'||!G||!G.fireMax)return 0;const fr=G.fire/G.fireMax;return fr>.65?2:fr>.35?1:0;}});}}}
 if(M.st){if(M.st.nextT<now-.2)M.st.nextT=now+.05;run(M.E,M.tg,M.st,now+.35);}}
setInterval(tick,50);
AU.music=function(){};
// sidechain-ish ducking under important sfx
[['crash',.45,.25],['win',.35,1.2],['lose',.4,.8],['rescue',.6,.3],['siren',.6,1.2],['hydrant',.6,.3],['heart',.6,.3],['star',.7,.2]].forEach(([k,lv,h])=>{const f=AU[k];if(typeof f!=='function')return;AU[k]=function(){try{M.duckNow(lv,h);}catch(e){}return f.apply(this,arguments);};});
})();
