// Firetruck Rescue — original game by P-Prece Studio (พีพีช Studio). All art is procedural canvas drawing; all sound is WebAudio synthesis.
'use strict';
const $=id=>document.getElementById(id);
const cv=$('c'),cx=cv.getContext('2d');
let W=360,H=640,DPR=1;
// ================= AD CONFIG (edit here before release) =================
// Exactly 3 AdMob ad units. The values below are GOOGLE'S PUBLIC TEST IDs only.
// >>> Replace with this app's own AdMob unit IDs in the Android project before publishing. <<<
// The Android side reads them via AndroidAds.configure(json) if it implements it.
window.FT_AD_UNITS=window.FT_AD_UNITS||{
 banner:      'ca-app-pub-3940256099942544/6300978111', // ft_banner_map_game  (TEST ID)
 interstitial:'ca-app-pub-3940256099942544/1033173712', // ft_inter_level_end  (TEST ID)
 rewarded:    'ca-app-pub-3940256099942544/5224354917'  // ft_reward_help_x2   (TEST ID)
};
// Ad preview mode: ?test=1 shows labelled mock ads at each placement (no real ads).
// ?test=1&fill=fail|nofill simulates failures.
(function(){const q=new URLSearchParams(location.search);if(q.get('test')!=='1'||window.AndroidAds)return;const fill=q.get('fill')||'ok';
 const box=(cls,txt)=>{const d=document.createElement('div');d.className='adMock '+cls;d.innerHTML=txt;document.body.appendChild(d);return d;};let bn=null;
 window.__adLog=[];const lg=k=>window.__adLog.push([k,Date.now()]);
 window.AndroidAds={configure(){},
  showBanner(){lg('banner');if(fill!=='ok')return;if(!bn)bn=box('adB','AD · Banner &nbsp;<b>ft_banner_map_game</b>&nbsp; 320×50');bn.style.display='flex';},
  hideBanner(){if(bn)bn.style.display='none';},
  showInterstitial(){lg('inter');if(fill!=='ok')return;const d=box('adI','<div>AD · Interstitial<br><b>ft_inter_level_end</b><br><small>full screen · after level end</small></div><button>✕</button>');d.querySelector('button').onclick=()=>d.remove();},
  isRewardedReady(){return fill!=='nofill';},
  showRewarded(){lg('reward');if(fill==='fail'){setTimeout(()=>window.onRewardedFailed&&window.onRewardedFailed(),200);return true;}
   const d=box('adI','<div>AD · Rewarded<br><b>ft_reward_help_x2</b><br><small>watch to get the reward</small></div><button>✓</button>');d.querySelector('button').onclick=()=>{d.remove();window.onRewardEarned&&window.onRewardEarned();window.onRewardedClosed&&window.onRewardedClosed();};return true;}};
 const st=document.createElement('style');st.textContent='.adMock{position:fixed;z-index:999;display:flex;align-items:center;justify-content:center;text-align:center;font:600 13px system-ui;color:#fff}.adB{left:0;right:0;bottom:env(safe-area-inset-bottom);height:56px;background:repeating-linear-gradient(45deg,#2a7a3a,#2a7a3a 10px,#2f8a42 10px,#2f8a42 20px);border-top:2px dashed #fff;pointer-events:none}.adI{inset:0;background:rgba(10,40,20,.96);font-size:18px}.adI button{position:absolute;top:14px;right:14px;width:44px;height:44px;border-radius:22px;border:0;font-size:20px}';document.head.appendChild(st);})();
try{window.AndroidAds&&AndroidAds.configure&&AndroidAds.configure(JSON.stringify(window.FT_AD_UNITS));}catch(e){}
const BANNER=()=>(window.AndroidAds&&window.AndroidAds.showBanner?56:0);
const LOG=(...a)=>{try{console.log('[FiretruckRescue]',...a);}catch(e){}};
const FL=FTLogic;
// ---------- Save ----------
const SAVE=(()=>{let s={};try{s=JSON.parse(localStorage.getItem('ft_save')||'{}');}catch(e){}
  s.stars=s.stars||[];s.seen=s.seen||{};if(s.snd===undefined)s.snd=1;if(s.mus===undefined)s.mus=1;return s;})();
function persist(){try{localStorage.setItem('ft_save',JSON.stringify(SAVE));}catch(e){}}
// ---------- Ads (AndroidAds bridge, same conventions as earlier P-Prece games; web stub grants rewards) ----------
const Ads={lastInter:Date.now(),minGap:90000,cleared:0,
 banner(show){try{if(window.AndroidAds){show?AndroidAds.showBanner&&AndroidAds.showBanner():AndroidAds.hideBanner&&AndroidAds.hideBanner();}}catch(e){}},
 maybeInterstitial(levelNo){if(levelNo<3)return false;this.cleared++;const n=Date.now();
  if(this.cleared<2||n-this.lastInter<this.minGap)return false;this.cleared=0;this.lastInter=n;
  try{if(window.AndroidAds&&AndroidAds.showInterstitial){AndroidAds.showInterstitial();}else LOG('AdsStub: interstitial (no ad on web)');}catch(e){}return true;},
 rewarded(){return new Promise(res=>{if(!(window.AndroidAds&&AndroidAds.showRewarded)){LOG('AdsStub: rewarded granted without ad');setTimeout(()=>res(true),300);return;}
   let done=false,earned=false,tm=0;const fin=ok=>{if(done)return;done=true;clearTimeout(tm);['onRewardedResult','onRewardEarned','onRewardedClosed','onRewardedFailed'].forEach(k=>window[k]=null);res(!!ok);};
   try{if(AndroidAds.isRewardedReady&&!AndroidAds.isRewardedReady()){fin(false);return;}}catch(e){}
   window.onRewardedResult=ok=>fin(ok);window.onRewardEarned=()=>{earned=true;};window.onRewardedClosed=()=>setTimeout(()=>fin(earned),50);window.onRewardedFailed=()=>fin(false);
   tm=setTimeout(()=>fin(earned),90000);try{const r=AndroidAds.showRewarded();if(r===false)fin(false);}catch(e){fin(false);}});}};
// ---------- Audio ----------
const AU={ac:null,m:null,s:null,next:0,step:0,roar:null,sirenUntil:0,nb:null,
 init(){if(!this.ac){try{const A=window.AudioContext||window.webkitAudioContext;this.ac=new A();const ac=this.ac;
   this.s=ac.createGain();this.s.gain.value=SAVE.snd?.6:0;this.s.connect(ac.destination);this.m=ac.createGain();this.m.gain.value=SAVE.mus?.14:0;this.m.connect(ac.destination);
   const b=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate),a=b.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=Math.random()*2-1;this.nb=b;
   const src=ac.createBufferSource();src.buffer=b;src.loop=true;const lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=380;const g=ac.createGain();g.gain.value=0;src.connect(lp);lp.connect(g);g.connect(this.s);src.start();this.roar=g;}catch(e){}}
  if(this.ac&&this.ac.state==='suspended')this.ac.resume();},
 out(pan){if(!pan||!this.ac.createStereoPanner)return this.s;const p=this.ac.createStereoPanner();p.pan.value=pan;p.connect(this.s);return p;},
 tone(f,d,type,v,slide,delay,dest){if(!this.ac)return;const t=this.ac.currentTime+(delay||0);const o=this.ac.createOscillator(),g=this.ac.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+d);
  g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(v||.3,t+.012);g.gain.exponentialRampToValueAtTime(0.0001,t+d);o.connect(g);g.connect(dest||this.s);o.start(t);o.stop(t+d+.05);},
 noise(d,f,v,delay,type,dest){if(!this.ac)return;const t=this.ac.currentTime+(delay||0);const s=this.ac.createBufferSource();s.buffer=this.nb;
  const fl=this.ac.createBiquadFilter();fl.type=type||'bandpass';fl.frequency.value=f;const g=this.ac.createGain();g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(0.0001,t+d);s.connect(fl);fl.connect(g);g.connect(dest||this.s);s.start(t,Math.random()*1.5);s.stop(t+d+.05);},
 siren(dur,p0,p1){if(!this.ac||!SAVE.snd)return;const now=this.ac.currentTime;if(now<this.sirenUntil-.3)return;this.sirenUntil=now+dur;const ac=this.ac;
  const o=ac.createOscillator(),o2=ac.createOscillator(),g=ac.createGain();o.type='triangle';o2.type='sawtooth';let dest=this.s,pn=null;
  if(ac.createStereoPanner){pn=ac.createStereoPanner();pn.pan.setValueAtTime(p0,now);pn.pan.linearRampToValueAtTime(p1,now+dur);pn.connect(this.s);dest=pn;}
  const lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2200;
  for(let k=0,t=now;t<now+dur;k++,t+=.42){const dop=t>now+dur*.55?.86:1;o.frequency.setValueAtTime((k%2?960:720)*dop,t);o2.frequency.setValueAtTime((k%2?480:360)*dop,t);}
  g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.16,now+.08);g.gain.setValueAtTime(.16,now+dur*.5);g.gain.exponentialRampToValueAtTime(.0001,now+dur);
  const g2=ac.createGain();g2.gain.value=.25;o.connect(g);o2.connect(g2);g2.connect(g);g.connect(lp);lp.connect(dest);o.start(now);o2.start(now);o.stop(now+dur+.05);o2.stop(now+dur+.05);},
 horn(pan){const d=this.out(pan);[233,294,349].forEach(f=>this.tone(f,.38,'sawtooth',.09,f*.97,0,d));},
 engine(){this.tone(48,.6,'sawtooth',.18,95);this.tone(72,.5,'square',.05,120);},
 crash(){this.noise(.35,700,.6,0,'lowpass');this.tone(110,.3,'square',.25,40);this.tone(1250,.18,'triangle',.12,700,.02);this.tone(1650,.12,'triangle',.08,900,.05);},
 water(){this.noise(1.1,3200,.12,0,'highpass');this.noise(.6,900,.06,.1);},
 hydrant(){[520,700,920,1240].forEach((f,i)=>this.tone(f,.12,'sine',.2,f*1.3,i*.05));this.noise(.4,2500,.08,0,'highpass');},
 gate(){this.tone(300,.25,'square',.06,600);this.tone(900,.12,'triangle',.15,0,.18);},
 rescue(){[784,988,1175].forEach((f,i)=>this.tone(f,.16,'triangle',.18,0,i*.07));},
 click(){this.tone(820,.05,'sine',.15,1050);},
 thud(){this.tone(180,.1,'triangle',.25,120);},
 star(i){this.tone([784,988,1319][i],.25,'triangle',.25,0);},
 win(){[523,659,784,1047,784,1047,1319].forEach((f,i)=>this.tone(f,.3,'triangle',.22,0,i*.1));this.tone(262,1,'sawtooth',.05,0,.2);},
 lose(){[392,349,311,262].forEach((f,i)=>this.tone(f,.38,'triangle',.22,f*.92,i*.17));},
 heart(){[660,880,1100].forEach((f,i)=>this.tone(f,.18,'sine',.2,0,i*.07));},
 bell(d){for(let i=0;i<d*14;i++)this.tone(1500+(i%2)*80,.06,'square',.06,0,i/14);},
 ring(){for(let k=0;k<2;k++)for(let i=0;i<10;i++)this.tone(1200+(i%2)*200,.04,'sine',.12,0,k*.9+i*.045);},
 crackle(v){if(!this.ac||!SAVE.snd)return;this.noise(.03+Math.random()*.03,1500+Math.random()*3000,v*(.3+Math.random()*.7),Math.random()*.05);},
 setRoar(v){if(this.roar)this.roar.gain.setTargetAtTime(SAVE.snd?v:0,this.ac.currentTime,.25);},
 setSound(on){SAVE.snd=on?1:0;persist();if(this.s)this.s.gain.setTargetAtTime(on?.6:0,this.ac.currentTime,.05);},
 setMusic(on){SAVE.mus=on?1:0;persist();if(this.m)this.m.gain.setTargetAtTime(on?.14:0,this.ac.currentTime,.1);},
 mood:'tense',
 music(){if(!this.ac)return;const bpm=this.mood==='hero'?120:132,st=60/bpm/2;const now=this.ac.currentTime;if(this.next<now)this.next=now+.05;
  const tense={mel:[69,0,72,0,76,0,72,0,65,0,69,0,72,0,69,0,67,0,71,0,74,0,71,0,64,0,68,0,71,0,76,0],bass:[45,45,41,41,43,43,40,40]};
  const hero={mel:[72,0,72,76,79,0,76,0,77,0,81,0,79,0,76,74,72,0,76,79,84,0,83,81,79,0,77,76,74,0,72,0],bass:[48,48,53,53,55,55,48,48]};
  while(this.next<now+.25){const P=this.mood==='hero'?hero:tense;const s=this.step%32;const t0=this.next-now;
   if(P.mel[s])this.tone(440*Math.pow(2,(P.mel[s]-69)/12),st*1.5,this.mood==='hero'?'square':'triangle',this.mood==='hero'?.12:.3,0,t0,this.m);
   if(s%4===0)this.tone(440*Math.pow(2,(P.bass[(s/4)%8]-69)/12),st*3.6,'sawtooth',.18,0,t0,this.m);
   if(s%4===0)this.tone(70,.12,'sine',.5,40,t0,this.m);
   if(s%2===1)this.tone(5000,.02,'square',.03,0,t0,this.m);
   this.next+=st;this.step++;}}};
// ---------- Helpers ----------
const E={io:u=>.5-.5*Math.cos(Math.PI*u),out:u=>1-(1-u)*(1-u),in:u=>u*u,back:u=>{const c=1.7;return 1+(c+1)*Math.pow(u-1,3)+c*Math.pow(u-1,2);}};
const lerp=(a,b,u)=>a+(b-a)*u, clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function ell(c,x,y,rx,ry,rot){c.beginPath();c.ellipse(x,y,Math.max(.1,rx),Math.max(.1,ry),rot||0,0,Math.PI*2);}
function rr(c,x,y,w,h,r){r=Math.min(r,Math.abs(w)/2,Math.abs(h)/2);c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
function lg(c,x0,y0,x1,y1,stops){const g=c.createLinearGradient(x0,y0,x1,y1);stops.forEach((s,i)=>g.addColorStop(i/(stops.length-1),s));return g;}
function seeded(s){return()=>(s=(s*9301+49297)%233280)/233280;}
const ANG={R:0,D:Math.PI/2,L:Math.PI,U:-Math.PI/2};
let FLAME=null,SMOKE=null;
function buildSprites(){FLAME=document.createElement('canvas');FLAME.width=FLAME.height=64;let g=FLAME.getContext('2d');let gr=g.createRadialGradient(32,32,0,32,32,32);
 gr.addColorStop(0,'rgba(255,250,200,1)');gr.addColorStop(.25,'rgba(255,200,60,.95)');gr.addColorStop(.55,'rgba(255,90,20,.6)');gr.addColorStop(1,'rgba(200,30,0,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);
 SMOKE=document.createElement('canvas');SMOKE.width=SMOKE.height=64;g=SMOKE.getContext('2d');gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'rgba(70,70,80,.55)');gr.addColorStop(.6,'rgba(60,60,70,.25)');gr.addColorStop(1,'rgba(60,60,70,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);}
// ---------- Vehicles ----------
const VSTYLE={E:['#ff6a50','#e8322a','#a8170f'],K:['#ff6a50','#e02a22','#9a140c'],T:['#ff6a50','#e8322a','#a8170f'],A:['#ffffff','#eef2f7','#b9c3d1'],V:['#ffcf5a','#ff9a1e','#b8600a'],P:['#ffffff','#e9eef6','#aeb9c9'],C:['#ff7a6a','#d8281e','#8a120a'],W:['#ffe36a','#f5c518','#a87d00']};
function drawVeh(c,x,y,s,type,ang,o){o=o||{};const B=VSTYLE[type]||VSTYLE.E;const t=o.t||0;
 const L=type==='K'?s*.92:type==='C'||type==='P'?s*.74:s*.86, Wd=type==='C'||type==='P'?s*.48:s*.56;
 c.save();c.translate(x,y);
 c.save();c.rotate(ang);c.fillStyle='rgba(0,0,0,.35)';rr(c,-L/2+s*.04,-Wd/2+s*.07,L,Wd,s*.12);c.fill();c.restore();
 c.translate(0,-(o.z||0));c.rotate(ang+(o.wob||0));const sq=o.sq||0;c.scale(1+sq,1-sq*.6);
 c.fillStyle='#16181d';[[-L*.3,-1],[-L*.3,1],[L*.28,-1],[L*.28,1]].forEach(([wx,k])=>{rr(c,wx-s*.08,k*Wd/2-s*.045,s*.16,s*.09,s*.03);c.fill();});
 c.fillStyle=B[2];rr(c,-L/2,-Wd/2+s*.03,L,Wd,s*.11);c.fill();
 c.fillStyle=lg(c,0,-Wd/2,0,Wd/2,B);rr(c,-L/2,-Wd/2,L,Wd-s*.03,s*.11);c.fill();
 const cabX=L/2-s*.24;
 if(type==='T'){c.fillStyle=lg(c,0,-Wd/2,0,Wd/2,['#ffffff','#c9d1dc','#7d8797']);rr(c,-L/2+s*.05,-Wd/2+s*.05,L*.62,Wd-s*.13,s*.16);c.fill();c.strokeStyle='rgba(80,90,105,.6)';c.lineWidth=1.2;[-.2,0,.2].forEach(k=>{c.beginPath();c.moveTo(-L/2+s*.05+L*.31+k*L,-Wd/2+s*.06);c.lineTo(-L/2+s*.05+L*.31+k*L,Wd/2-s*.09);c.stroke();});
  c.fillStyle='#4aa8ff';ell(c,-L*.08,0,s*.05,s*.05);c.fill();}
 else if(type==='K'){c.strokeStyle='#e8edf3';c.lineWidth=s*.035;c.beginPath();c.moveTo(-L/2+s*.03,-Wd*.2);c.lineTo(cabX+s*.05,-Wd*.2);c.moveTo(-L/2+s*.03,Wd*.12);c.lineTo(cabX+s*.05,Wd*.12);c.stroke();
  c.lineWidth=s*.022;for(let k=0;k<7;k++){const lx=-L/2+s*.06+k*(L*.6/6);c.beginPath();c.moveTo(lx,-Wd*.2);c.lineTo(lx,Wd*.12);c.stroke();}
  c.fillStyle='#9aa4b2';ell(c,-L*.32,-Wd*.04,s*.07,s*.07);c.fill();}
 else if(type==='E'){c.fillStyle='rgba(255,255,255,.9)';c.fillRect(-L/2+s*.04,-s*.03,L*.62,s*.05);c.fillStyle='#ffd23f';ell(c,-L*.18,-Wd*.22,s*.08,s*.06);c.fill();c.strokeStyle='#b88a00';c.lineWidth=1.5;ell(c,-L*.18,-Wd*.22,s*.05,s*.035);c.stroke();
  c.fillStyle='#c9d1dc';rr(c,-L/2+s*.05,Wd*.08,L*.45,s*.08,s*.03);c.fill();}
 else if(type==='A'){c.fillStyle='#e8322a';c.fillRect(-L/2+s*.02,Wd/2-s*.13,L-s*.04,s*.06);const cxp=-L*.12;c.fillRect(cxp-s*.12,-s*.04,s*.24,s*.08);c.fillRect(cxp-s*.04,-s*.12,s*.08,s*.24);}
 else if(type==='V'){c.fillStyle='rgba(255,255,255,.85)';[-.15,.15].forEach(k=>{c.save();c.translate(-L*.1+k*L,0);c.rotate(.6);c.fillRect(-s*.02,-Wd*.38,s*.05,Wd*.7);c.restore();});c.fillStyle='#5a6070';rr(c,-L/2+s*.06,-Wd*.3,L*.5,s*.08,s*.02);c.fill();}
 else if(type==='P'){c.fillStyle='#1d3a8a';rr(c,-L/2+s*.02,-Wd/2,L*.28,Wd-s*.03,s*.1);c.fill();rr(c,L/2-L*.22,-Wd/2,L*.22-s*.02,Wd-s*.03,s*.1);c.fill();c.fillStyle='#ffd23f';ell(c,-L*.02,0,s*.06,s*.06);c.fill();}
 else if(type==='C'){c.fillStyle='#fff';c.fillRect(-L*.3,-s*.025,L*.5,s*.05);}
 else if(type==='W'){c.fillStyle='#4a4f5a';rr(c,-L/2+s*.03,-s*.08,L*.55,s*.16,s*.04);c.fill();c.strokeStyle='#2a2d33';c.lineWidth=s*.035;c.beginPath();c.moveTo(L*.1,0);c.lineTo(L/2+s*.08,0);c.stroke();
  c.strokeStyle='#c9d1dc';c.lineWidth=s*.03;c.beginPath();c.arc(L/2+s*.08,s*.04,s*.04,-Math.PI/2,Math.PI,true);c.stroke();c.fillStyle='#ff8a1e';[-1,1].forEach(k=>{c.fillRect(-L*.05,k*Wd*.33-s*.02,s*.1,s*.04);});}
 if(type!=='C'&&type!=='P'){c.fillStyle=lg(c,0,-Wd/2,0,Wd/2,B);rr(c,cabX-s*.05,-Wd/2+s*.01,s*.3,Wd-s*.05,s*.1);c.fill();}
 c.fillStyle=lg(c,cabX,0,cabX+s*.2,0,['#9fd8ff','#3a6fa8']);rr(c,cabX+s*.08,-Wd/2+s*.07,s*.1,Wd-s*.17,s*.04);c.fill();
 c.fillStyle='rgba(255,255,255,.55)';rr(c,cabX+s*.1,-Wd/2+s*.09,s*.03,Wd*.4,s*.01);c.fill();
 c.fillStyle='#fff7c2';[-1,1].forEach(k=>{ell(c,L/2-s*.02,k*(Wd/2-s*.09),s*.03,s*.045);c.fill();});
 if(o.lights){c.save();const hg=c.createLinearGradient(L/2,0,L/2+s*.7,0);hg.addColorStop(0,'rgba(255,240,170,.45)');hg.addColorStop(1,'rgba(255,240,170,0)');c.fillStyle=hg;[-1,1].forEach(k=>{c.beginPath();c.moveTo(L/2,k*(Wd/2-s*.09));c.lineTo(L/2+s*.7,k*(Wd/2-s*.09)-s*.18);c.lineTo(L/2+s*.7,k*(Wd/2-s*.09)+s*.18);c.fill();});c.restore();}
 const lb=cabX-s*.02;const flash=o.siren?Math.floor(t*8)%2:-1;
 [[-1,'#ff2a2a'],[1,type==='A'||type==='V'||type==='W'?'#ffb000':'#2a7bff']].forEach(([k,col],i)=>{c.fillStyle=col;rr(c,lb-s*.04,k>0?s*.01:-s*.11,s*.08,s*.1,s*.03);c.fill();
  if(o.siren&&flash===i){c.save();c.globalCompositeOperation='lighter';const gr=c.createRadialGradient(lb,k*s*.06,0,lb,k*s*.06,s*.55);gr.addColorStop(0,col);gr.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=gr;c.globalAlpha=.75;ell(c,lb,k*s*.06,s*.55,s*.55);c.fill();c.restore();}});
 c.fillStyle=o.hint?'#ffe14a':'rgba(255,255,255,.95)';c.strokeStyle='rgba(0,0,0,.35)';c.lineWidth=1.5;const ax=-L*.1;c.beginPath();c.moveTo(ax+s*.13,0);c.lineTo(ax-s*.05,-s*.12);c.lineTo(ax-s*.01,0);c.lineTo(ax-s*.05,s*.12);c.closePath();c.fill();c.stroke();
 c.restore();}
function drawCivCar(c,x,y,s,ang,col,o){o=o||{};c.save();c.translate(x,y);c.fillStyle='rgba(0,0,0,.33)';c.save();c.rotate(ang);rr(c,-s*.36+s*.04,-s*.24+s*.07,s*.72,s*.48,s*.14);c.fill();c.restore();
 c.translate(Math.sin((o.jig||0)*40)*s*.04*(o.jig||0),0);c.rotate(ang);c.fillStyle='#16181d';[[-.22,-1],[-.22,1],[.22,-1],[.22,1]].forEach(([wx,k])=>{rr(c,wx*s-s*.07,k*s*.22-s*.04,s*.14,s*.08,s*.03);c.fill();});
 c.fillStyle=lg(c,0,-s*.24,0,s*.24,col);rr(c,-s*.36,-s*.24,s*.72,s*.46,s*.15);c.fill();
 c.fillStyle=lg(c,0,-s*.2,0,s*.2,['#bfe3ff','#3d5f86']);rr(c,-s*.14,-s*.18,s*.3,s*.34,s*.08);c.fill();c.fillStyle=col[1];rr(c,-s*.08,-s*.15,s*.16,s*.28,s*.05);c.fill();
 if(o.hazard&&Math.floor((o.t||0)*3)%2){c.fillStyle='#ffb000';[-1,1].forEach(k=>{ell(c,-s*.34,k*s*.17,s*.035,s*.035);c.fill();ell(c,s*.34,k*s*.17,s*.035,s*.035);c.fill();});}
 c.restore();}
const CIV=[['#9fd0ff','#4a8fd6','#24548f'],['#b8f0a0','#5fbf4a','#2e7a22'],['#e0e4ec','#9aa4b4','#5a6474'],['#ffd0e6','#e676a8','#9a3a68'],['#d8c4ff','#8a6ae0','#4a3290']];
function drawCone(c,x,y,s,j){c.save();c.translate(x+Math.sin((j||0)*40)*3*(j||0),y);c.fillStyle='rgba(0,0,0,.3)';ell(c,s*.04,s*.2,s*.22,s*.08);c.fill();c.fillStyle='#3a3d44';rr(c,-s*.2,s*.08,s*.4,s*.12,s*.03);c.fill();
 c.fillStyle=lg(c,-s*.15,0,s*.15,0,['#ffb066','#ff6a00','#c24a00']);c.beginPath();c.moveTo(-s*.15,s*.12);c.lineTo(-s*.035,-s*.3);c.lineTo(s*.035,-s*.3);c.lineTo(s*.15,s*.12);c.closePath();c.fill();
 c.fillStyle='#fff';c.beginPath();c.moveTo(-s*.1,-.02*s);c.lineTo(-s*.075,-s*.12);c.lineTo(s*.075,-s*.12);c.lineTo(s*.1,-s*.02);c.closePath();c.fill();c.restore();}
function drawDebris(c,x,y,s,j){c.save();c.translate(x+Math.sin((j||0)*40)*3*(j||0),y);c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(0,s*.16,s*.42,s*.1,0,0,7);c.fill();
 const slab=(px,py,w,h,a,col)=>{c.save();c.translate(px*s,py*s);c.rotate(a);c.fillStyle=col;rr(c,-w*s/2,-h*s/2,w*s,h*s,s*.03);c.fill();c.fillStyle='rgba(255,255,255,.18)';c.fillRect(-w*s/2,-h*s/2,w*s,h*s*.25);c.restore();};
 slab(-.08,.06,.56,.16,.08,'#8a8780');slab(.12,-.04,.4,.14,-.35,'#6c6a66');slab(-.16,-.08,.3,.12,.6,'#9a968e');
 slab(0,-.12,.74,.07,.42,'#3a2414');slab(.04,.02,.6,.06,-.3,'#2e1d12');c.fillStyle='#ff6a1a';c.globalAlpha=.75;c.beginPath();c.arc(s*.22,s*.05,s*.035,0,7);c.fill();c.globalAlpha=1;
 c.save();c.beginPath();c.rect(-s*.44,s*.17,s*.88,s*.06);c.clip();for(let k=-6;k<7;k++){c.fillStyle=k%2?'#111':'#ffd21a';c.fillRect(k*s*.08,s*.17,s*.08,s*.06);}c.restore();c.restore();}
function drawBarrier(c,x,y,s,j){c.save();c.translate(x+Math.sin((j||0)*40)*3*(j||0),y);c.fillStyle='rgba(0,0,0,.3)';rr(c,-s*.38,s*.1,s*.8,s*.12,s*.05);c.fill();
 c.fillStyle='#555b66';c.fillRect(-s*.32,-s*.05,s*.06,s*.24);c.fillRect(s*.26,-s*.05,s*.06,s*.24);
 c.save();rr(c,-s*.42,-s*.2,s*.84,s*.2,s*.05);c.clip();c.fillStyle='#fff';c.fillRect(-s*.42,-s*.2,s*.84,s*.2);c.fillStyle='#e8322a';for(let k=-5;k<6;k++){c.beginPath();c.moveTo(k*s*.16,-s*.2);c.lineTo(k*s*.16+s*.08,-s*.2);c.lineTo(k*s*.16-s*.02,0);c.lineTo(k*s*.16-s*.1,0);c.fill();}c.restore();
 c.fillStyle='#ffb000';ell(c,-s*.29,-s*.25,s*.045,s*.045);c.fill();ell(c,s*.29,-s*.25,s*.045,s*.045);c.fill();c.restore();}
function drawHydrant(c,x,y,s,t){c.save();c.translate(x,y);c.fillStyle='rgba(0,0,0,.3)';ell(c,s*.04,s*.17,s*.16,s*.07);c.fill();
 c.save();c.globalCompositeOperation='lighter';c.globalAlpha=.25+.15*Math.sin(t*4);const gr=c.createRadialGradient(0,0,0,0,0,s*.42);gr.addColorStop(0,'#5ac8ff');gr.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=gr;ell(c,0,0,s*.42,s*.42);c.fill();c.restore();
 c.fillStyle=lg(c,-s*.12,0,s*.12,0,['#ff8a7a','#e8322a','#9a140c']);rr(c,-s*.1,-s*.18,s*.2,s*.34,s*.05);c.fill();c.fillRect(-s*.17,-s*.04,s*.34,s*.09);ell(c,0,-s*.18,s*.11,s*.07);c.fill();
 c.fillStyle='#ffd23f';ell(c,0,-s*.22,s*.04,s*.03);c.fill();c.fillStyle='rgba(255,255,255,.5)';rr(c,-s*.07,-s*.14,s*.03,s*.22,s*.01);c.fill();c.restore();}
function drawSwitch(c,x,y,s,on,t){c.save();c.translate(x,y);c.fillStyle='#2a2d33';ell(c,0,s*.03,s*.27,s*.2);c.fill();c.fillStyle=on?'#7a7f8a':lg(c,0,-s*.2,0,s*.1,['#fff3a0','#ffc800','#b88a00']);ell(c,0,on?s*.02:-s*.02,s*.2,s*.14);c.fill();
 if(!on){c.strokeStyle=`rgba(255,230,80,${.4+.3*Math.sin(t*5)})`;c.lineWidth=3;ell(c,0,0,s*.32+Math.sin(t*5)*2,s*.24+Math.sin(t*5)*2);c.stroke();}c.restore();}
function drawGate(c,x,y,s,open,t){c.save();c.translate(x,y);c.fillStyle='rgba(0,0,0,.3)';ell(c,-s*.38,s*.12,s*.1,s*.05);c.fill();c.fillStyle='#4a4f5a';rr(c,-s*.45,-s*.15,s*.14,s*.28,s*.04);c.fill();
 const a=-open*Math.PI*.45;c.save();c.translate(-s*.38,-s*.05);c.rotate(a);if(open<.5){c.fillStyle='rgba(0,0,0,.25)';rr(c,s*.02,s*.1,s*.8,s*.09,s*.04);c.fill();}
 rr(c,0,-s*.05,s*.82,s*.1,s*.05);c.save();c.clip();c.fillStyle='#ffd23f';c.fillRect(0,-s*.05,s*.82,s*.1);c.fillStyle='#22252b';for(let k=0;k<6;k++){c.fillRect(k*s*.16,-s*.05,s*.07,s*.1);}c.restore();c.restore();
 c.fillStyle=open>.5?'#4cff6a':(Math.floor(t*2)%2?'#ff3b30':'#7a1a10');ell(c,-s*.38,-s*.12,s*.035,s*.035);c.fill();c.restore();}
function drawTurn(c,x,y,s,d){c.save();c.translate(x,y);c.rotate(ANG[d]);c.fillStyle='rgba(255,255,255,.85)';c.beginPath();c.moveTo(s*.3,0);c.lineTo(s*.06,-s*.22);c.lineTo(s*.06,-s*.09);c.lineTo(-s*.3,-s*.09);c.lineTo(-s*.3,s*.09);c.lineTo(s*.06,s*.09);c.lineTo(s*.06,s*.22);c.closePath();c.fill();c.restore();}
function drawPerson(c,x,y,s,o){o=o||{};const t=o.t||0;const jump=o.cheer?Math.abs(Math.sin(t*6+(o.ph||0)))*s*.35:0;c.save();c.translate(x,y);
 c.fillStyle='rgba(0,0,0,.25)';ell(c,0,0,s*.22,s*.06);c.fill();c.translate(0,-jump);
 const sk=o.skin||'#ffd2a8',sh=o.shirt||'#4aa8ff';c.strokeStyle=sk;c.lineCap='round';c.lineWidth=s*.09;
 const up=o.wave||o.cheer;const wave=up?Math.sin(t*10+(o.ph||0))*.5:0;c.beginPath();c.moveTo(-s*.12,-s*.55);c.lineTo(-s*.28,-s*(up?.95:.3)+wave*s*.1);c.moveTo(s*.12,-s*.55);c.lineTo(s*.28,-s*(o.cheer?.95:.3)-wave*s*.1);c.stroke();
 c.strokeStyle='#2a3550';c.beginPath();c.moveTo(-s*.07,-s*.25);c.lineTo(-s*.09,0);c.moveTo(s*.07,-s*.25);c.lineTo(s*.09,0);c.stroke();
 c.fillStyle=sh;rr(c,-s*.15,-s*.62,s*.3,s*.4,s*.1);c.fill();c.fillStyle=sk;ell(c,0,-s*.78,s*.16,s*.16);c.fill();c.fillStyle=o.hair||'#3a2418';ell(c,0,-s*.86,s*.16,s*.09);c.fill();
 if(o.helmet){c.fillStyle='#ffc800';ell(c,0,-s*.86,s*.2,s*.11);c.fill();c.fillRect(-s*.24,-s*.84,s*.48,s*.04);}
 c.fillStyle='#2a1a12';ell(c,-s*.05,-s*.78,s*.02,s*.025);c.fill();ell(c,s*.05,-s*.78,s*.02,s*.025);c.fill();
 c.strokeStyle='#8a3020';c.lineWidth=s*.025;c.beginPath();if(o.cheer||o.happy)c.arc(0,-s*.73,s*.05,.2,Math.PI-.2);else c.arc(0,-s*.68,s*.04,Math.PI+.4,-.4);c.stroke();c.restore();}
function drawDog(c,x,y,s,t,cheer){const j=cheer?Math.abs(Math.sin(t*7))*s*.3:0;c.save();c.translate(x,y);c.fillStyle='rgba(0,0,0,.25)';ell(c,0,0,s*.3,s*.06);c.fill();c.translate(0,-j);
 c.strokeStyle='#f4f0e8';c.lineWidth=s*.07;c.lineCap='round';c.beginPath();c.moveTo(-s*.18,-s*.12);c.lineTo(-s*.32,-s*.3+Math.sin(t*14)*s*.06);c.stroke();
 c.fillStyle='#f4f0e8';ell(c,0,-s*.18,s*.24,s*.12);c.fill();[-.14,-.04,.08,.16].forEach(k=>{c.fillRect(k*s-s*.03,-s*.12,s*.06,s*.12);});
 c.fillStyle='#2a2a30';ell(c,-s*.06,-s*.2,s*.06,s*.04);c.fill();ell(c,s*.08,-s*.15,s*.04,s*.03);c.fill();
 c.fillStyle='#f4f0e8';ell(c,s*.24,-s*.32,s*.13,s*.11);c.fill();c.fillStyle='#2a2a30';ell(c,s*.18,-s*.4,s*.05,s*.09,.5);c.fill();ell(c,s*.35,-s*.3,s*.03,s*.025);c.fill();ell(c,s*.26,-s*.34,s*.02,s*.02);c.fill();
 c.fillStyle='#e8322a';c.fillRect(s*.12,-s*.26,s*.12,s*.035);c.restore();}
// ---------- Backgrounds & fire scenes ----------
let BG=null,SKY=null;
function buildBG(){const c=document.createElement('canvas');c.width=Math.ceil(W*DPR);c.height=Math.ceil(H*DPR);const g=c.getContext('2d');g.scale(DPR,DPR);
 g.fillStyle=lg(g,0,0,0,H,['#0b1030','#1b2350','#2a2448','#141a33']);g.fillRect(0,0,W,H);
 const R=seeded(11);for(let i=0;i<90;i++){g.fillStyle=`rgba(255,255,255,${.3+R()*.6})`;const r=R()*1.3+.3;ell(g,R()*W,R()*H*.45,r,r);g.fill();}
 const mg=g.createRadialGradient(W*.82,H*.08,2,W*.82,H*.08,W*.3);mg.addColorStop(0,'rgba(255,250,220,1)');mg.addColorStop(.08,'rgba(255,248,210,.95)');mg.addColorStop(.12,'rgba(200,210,255,.25)');mg.addColorStop(1,'rgba(150,160,255,0)');g.fillStyle=mg;g.fillRect(0,0,W,H*.5);
 BG=c;}
function buildSkyline(){const w=W*1.2,h=H;const c=document.createElement('canvas');c.width=Math.ceil(w*DPR);c.height=Math.ceil(h*DPR);const g=c.getContext('2d');g.scale(DPR,DPR);const R=seeded(5);
 [[.55,'#1d2550',.35],[.75,'#151b3c',.6]].forEach(([base,col,wp])=>{let x=0;while(x<w){const bw=18+R()*34,bh=H*(.06+R()*.16);const y=H*base-bh;g.fillStyle=col;g.fillRect(x,y,bw,H-y);
  for(let wy=y+5;wy<H*base-4;wy+=8)for(let wx=x+4;wx<x+bw-4;wx+=7)if(R()<wp*.5){g.fillStyle=`rgba(255,${200+R()*40|0},${100+R()*60|0},${.5+R()*.4})`;g.fillRect(wx,wy,3,4);}
  x+=bw+2;}});SKY={c,w,h};}
function drawBack(t,par){cx.drawImage(BG,0,0,W,H);if(SKY){const off=-(W*.1)+Math.sin(t*.05)*W*.05+(par||0);cx.drawImage(SKY.c,off,0,SKY.w,SKY.h);}}
function bdef(ch,w,h){const gy=h*.88;const F=[],P=[];let draw;
 if(ch===1){const bw=Math.min(w*.46,h*1.1),bx=w/2-bw/2,top=h*.12,bh=gy-top;draw=g=>{g.fillStyle=lg(g,bx,0,bx+bw,0,['#c98a6a','#b0705a','#8a5040']);g.fillRect(bx,top,bw,bh);g.fillStyle='#6a3a2a';g.fillRect(bx-4,top-6,bw+8,8);
   for(let r=0;r<4;r++)for(let k=0;k<4;k++){const wx=bx+bw*(.1+k*.22),wy=top+bh*(.08+r*.22);g.fillStyle='#2a2040';g.fillRect(wx,wy,bw*.14,bh*.13);g.fillStyle='#7a4a3a';g.fillRect(wx-2,wy+bh*.13,bw*.14+4,3);}
   g.fillStyle='#4a2a20';g.fillRect(w/2-bw*.08,gy-bh*.16,bw*.16,bh*.16);};
  for(let r=0;r<3;r++)for(let k=0;k<4;k++)F.push([bx+bw*(.17+k*.22),top+bh*(.14+r*.22),1]);[[1,0],[2,1],[0,1],[3,2],[1,2],[2,0]].forEach(([k,r])=>P.push([bx+bw*(.17+k*.22),top+bh*(.21+r*.22)]));}
 else if(ch===2){draw=g=>{g.fillStyle=lg(g,0,h*.3,0,gy,['#7a6a9a','#5a4a7a']);g.fillRect(w*.22,h*.3,w*.56,gy-h*.3);g.fillStyle='#4a3a6a';g.beginPath();g.moveTo(w*.18,h*.32);g.lineTo(w*.5,h*.12);g.lineTo(w*.82,h*.32);g.fill();
   for(let k=0;k<5;k++){g.fillStyle='#2a2040';g.fillRect(w*(.27+k*.1),h*.4,w*.05,h*.12);}
   for(let k=0;k<4;k++){const sx=w*(.1+k*.22),sw=w*.18;g.fillStyle='#6a4a30';g.fillRect(sx+3,gy-h*.28,3,h*.28);g.fillRect(sx+sw-6,gy-h*.28,3,h*.28);g.fillStyle='#8a5a3a';g.fillRect(sx,gy-h*.1,sw,h*.1);
    for(let s=0;s<6;s++){g.fillStyle=s%2?'#fff':['#e8322a','#2a95e8','#4cc23a','#ff9a1e'][k];g.beginPath();g.moveTo(sx+s*sw/6,gy-h*.3);g.lineTo(sx+(s+1)*sw/6,gy-h*.3);g.lineTo(sx+(s+1)*sw/6,gy-h*.22);g.quadraticCurveTo(sx+(s+.5)*sw/6,gy-h*.18,sx+s*sw/6,gy-h*.22);g.fill();}
    g.fillStyle=['#ffd23f','#ff7a5a','#9ef07c','#ffb0c4'][k];for(let q=0;q<3;q++){ell(g,sx+sw*(.25+q*.25),gy-h*.12,sw*.08,h*.025);g.fill();}}};
  for(let k=0;k<4;k++)F.push([w*(.19+k*.22),gy-h*.3,1]);F.push([w*.4,h*.33,1],[w*.62,h*.33,1]);[0,2,4,1,3].forEach(k=>P.push([w*(.295+k*.1),h*.52]));}
 else if(ch===3){draw=g=>{g.fillStyle=lg(g,0,h*.3,0,gy,['#8a8f9a','#5a5f6a']);g.fillRect(w*.15,h*.34,w*.7,gy-h*.34);g.fillStyle='#4a4f5a';for(let k=0;k<5;k++){g.beginPath();g.moveTo(w*(.15+k*.14),h*.34);g.lineTo(w*(.15+k*.14),h*.22);g.lineTo(w*(.29+k*.14),h*.34);g.fill();}
   g.fillStyle='#6a4a40';g.fillRect(w*.74,h*.02,w*.06,h*.3);g.fillStyle='#e8322a';g.fillRect(w*.74,h*.06,w*.06,h*.03);
   for(let k=0;k<6;k++){g.fillStyle='#2a2a40';g.fillRect(w*(.19+k*.11),h*.44,w*.07,h*.16);}g.fillStyle='#ffd23f';g.fillRect(w*.42,gy-h*.18,w*.16,h*.18);g.fillStyle='#22252b';for(let k=0;k<4;k++)g.fillRect(w*.42+k*w*.04,gy-h*.18,w*.02,h*.18);};
  for(let k=0;k<6;k++)F.push([w*(.225+k*.11),h*.47,1]);F.push([w*.3,h*.26,1.2]);[1,4,0,2,3,5].forEach(k=>P.push([w*(.225+k*.11),h*.6]));}
 else if(ch===4){draw=g=>{const R=seeded(9);for(let i=0;i<9;i++){const tx=w*(.04+i*.115)+R()*8,th=h*(.32+R()*.25);g.fillStyle='#4a2e1c';g.fillRect(tx-2,gy-th*.25,4,th*.25);g.fillStyle=lg(g,0,gy-th,0,gy,['#2f7a3a','#1d5a2a']);
    for(let k=0;k<3;k++){g.beginPath();g.moveTo(tx-th*(.28-k*.05),gy-th*(.2+k*.25));g.lineTo(tx,gy-th*(.55+k*.18));g.lineTo(tx+th*(.28-k*.05),gy-th*(.2+k*.25));g.fill();}}
   g.fillStyle=lg(g,0,h*.45,0,gy,['#a8743a','#7a4a20']);g.fillRect(w*.36,h*.5,w*.28,gy-h*.5);g.fillStyle='#5a2e1a';g.beginPath();g.moveTo(w*.32,h*.52);g.lineTo(w*.5,h*.34);g.lineTo(w*.68,h*.52);g.fill();
   g.fillStyle='#2a2040';g.fillRect(w*.4,h*.6,w*.07,h*.1);g.fillRect(w*.53,h*.6,w*.07,h*.1);g.fillStyle='#4a2a14';g.fillRect(w*.47,gy-h*.18,w*.06,h*.18);};
  F.push([w*.08,gy-h*.32,1.1],[w*.2,gy-h*.38,1],[w*.8,gy-h*.36,1.1],[w*.92,gy-h*.3,1],[w*.5,h*.4,1],[w*.43,h*.62,.8]);P.push([w*.435,h*.7],[w*.565,h*.7],[w*.3,gy],[w*.7,gy]);}
 else{const bw=Math.min(w*.34,h*.8),bx=w/2-bw/2;draw=g=>{g.fillStyle='#3a5a88';g.fillRect(bx-w*.12,h*.55,w*.12,gy-h*.55);g.fillRect(bx+bw,h*.5,w*.1,gy-h*.5);
   g.fillStyle=lg(g,bx,0,bx+bw,0,['#6a8ab8','#4a6a98','#2a4a78']);g.fillRect(bx,-4,bw,gy+4);
   for(let r=0;r<9;r++)for(let k=0;k<4;k++){g.fillStyle=(r*3+k)%5?'#1c2a48':'#ffd27a';g.fillRect(bx+bw*(.08+k*.23),h*(.02+r*.095),bw*.16,h*.06);}};
  for(let r=0;r<5;r++)for(let k=0;k<3;k++)F.push([bx+bw*(.2+k*.3),h*(.07+r*.14),1]);[[0,1],[2,2],[1,4],[3,6],[0,7],[2,8]].forEach(([k,r])=>P.push([bx+bw*(.16+k*.23),h*(.08+r*.095)+h*.06]));}
 return{gy,F,P,draw};}
const BCACHE={};
function buildingImg(ch,w,h){const k=ch+'_'+Math.round(w)+'_'+Math.round(h)+'_'+DPR;if(BCACHE[k])return BCACHE[k];const c=document.createElement('canvas');c.width=Math.ceil(w*DPR);c.height=Math.ceil(h*DPR);const g=c.getContext('2d');g.scale(DPR,DPR);
 const d=bdef(ch,w,h);d.draw(g);g.fillStyle=lg(g,0,d.gy,0,h,['#3a3f4a','#22252c']);g.fillRect(0,d.gy,w,h-d.gy);g.fillStyle='#5a5f6a';g.fillRect(0,d.gy,w,2);
 return BCACHE[k]={c,d};}
function drawFlames(c,x,y,s,t,ph,int){c.save();c.globalCompositeOperation='lighter';for(let k=0;k<4;k++){const u=(t*1.6+ph+k*.25)%1;const fx=x+Math.sin(t*5+ph*3+k)*s*.15,fy=y-u*s*1.1;const r=s*(.55-u*.4)*int;c.globalAlpha=(1-u)*.9;c.drawImage(FLAME,fx-r,fy-r,r*2,r*2);}
 const fl=Math.sin(t*9+ph)*.15;c.fillStyle='#ffef9a';c.beginPath();c.moveTo(x-s*.2*int,y);c.quadraticCurveTo(x-s*.2*int,y-s*.4*int,x+fl*s,y-s*(.75+fl)*int);c.quadraticCurveTo(x+s*.2*int,y-s*.4*int,x+s*.2*int,y);c.closePath();c.globalAlpha=.55;c.fill();c.restore();}
const SHIRTS=['#4aa8ff','#ff7ab0','#7ad65a','#ffb000','#b38aff','#5ad6d6'];
function drawScene(c,ch,x,y,w,h,t,fire,o){o=o||{};const B=buildingImg(ch,w,h),d=B.d;c.save();c.translate(x,y);c.beginPath();c.rect(0,0,w,h);c.clip();
 if(fire>0){c.save();c.globalCompositeOperation='lighter';const gr=c.createRadialGradient(w/2,h*.45,0,w/2,h*.45,w*.6);gr.addColorStop(0,`rgba(255,110,30,${.35*Math.min(1,fire)})`);gr.addColorStop(1,'rgba(255,60,0,0)');c.fillStyle=gr;c.fillRect(0,0,w,h);c.restore();}
 c.drawImage(B.c,0,0,w,h);const s=Math.min(w,h*1.6)*.11*(o.boss?1.25:1);const n=fire>0?Math.ceil(d.F.length*Math.min(1,fire)):0;
 for(let i=0;i<n;i++){const [fx,fy]=d.F[i];for(let k=0;k<2;k++){const u=(t*.25+i*.37+k*.5)%1;const r=s*(.6+u*1.6);c.globalAlpha=(1-u)*.7;c.drawImage(SMOKE,fx-r+u*s*1.2,fy-s*.6-u*h*.5-r,r*2,r*2);}}c.globalAlpha=1;
  for(let i=0;i<n;i++){const [fx,fy,sc]=d.F[i];const int=clamp(fire*1.2-i/d.F.length*.4,.35,1.3)*sc;drawFlames(c,fx,fy,s,t,i*1.7,int);}
 const waiting=o.waiting||0;for(let i=0;i<Math.min(waiting,d.P.length);i++){const [px,py]=d.P[i];drawPerson(c,px,py,s*.75,{wave:true,t,ph:i,shirt:SHIRTS[i%6]});}
 if(o.steam>0){for(let k=0;k<6;k++){const u=(t*.4+k/6)%1;const r=s*(.5+u);c.globalAlpha=o.steam*(1-u)*.6;c.fillStyle='#fff';ell(c,w*(.3+k*.08),h*.5-u*h*.4,r,r*.7);c.fill();}c.globalAlpha=1;}
 const resc=o.rescued||0;for(let i=0;i<resc;i++){drawPerson(c,w*(.08+((i*.13)%.5)),d.gy+(h-d.gy)*.85,s*.8,{cheer:o.cheer,happy:true,t,ph:i*1.3,shirt:SHIRTS[i%6]});}
 if(o.dog)drawDog(c,w*.9,d.gy+(h-d.gy)*.85,s*.9,t,o.cheer);
 c.restore();return d;}
// ---------- Particles ----------
const parts=[];
function P(o){parts.push(Object.assign({life:0,g:0,vx:0,vy:0},o));}
function puff(x,y,n,col,sz,sp,up){for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=(sp||40)*(.5+Math.random());P({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v*.5-(up||0),r:(sz||5)*(.6+Math.random()*.6),max:.45+Math.random()*.3,col:col||'rgba(200,200,210,.7)',kind:'puff'});}}
function sparkle(x,y,n,cols){for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=60+Math.random()*120;P({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-60,r:3+Math.random()*4,max:.6+Math.random()*.4,col:cols[i%cols.length],g:260,kind:'star',rot:Math.random()*6});}}
function drops(x,y,tx,ty,n){for(let i=0;i<n;i++){const T=.55+Math.random()*.2;const vx=(tx-x)/T+(Math.random()-.5)*30,vy=(ty-y)/T-.5*380*T+(Math.random()-.5)*30;P({x,y,vx,vy,g:380,r:1.4+Math.random()*1.6,max:T,col:'rgba(150,215,255,.95)',kind:'drop',delay:Math.random()*.2});}}
function embers(x,y,n){for(let i=0;i<n;i++)P({x:x+(Math.random()-.5)*20,y,vx:(Math.random()-.5)*30,vy:-40-Math.random()*60,r:1+Math.random()*1.5,max:1+Math.random(),col:'#ffcf5a',kind:'ember',g:-10});}
function steam(x,y,n){for(let i=0;i<n;i++)P({x:x+(Math.random()-.5)*24,y,vx:(Math.random()-.5)*20,vy:-30-Math.random()*30,r:6+Math.random()*6,max:1.2,col:'rgba(240,245,255,.55)',kind:'puff'});}
function confetti(){const cols=['#ff5a3c','#ffd23f','#4cc23a','#2a95e8','#ff9ab3','#ff8a1e'];for(let i=0;i<110;i++)P({x:Math.random()*W,y:-20-Math.random()*H*.4,vx:(Math.random()-.5)*60,vy:80+Math.random()*120,r:4+Math.random()*4,max:4,col:cols[i%6],g:30,kind:'conf',rot:Math.random()*6,vr:(Math.random()-.5)*10});}
function drawParts(c){for(const p of parts){if(p.delay>0)continue;const u=p.life/p.max;c.save();c.globalAlpha=p.kind==='conf'?Math.min(1,(1-u)*3):1-u;c.fillStyle=p.col;
 if(p.kind==='puff'){ell(c,p.x,p.y,p.r*(1+u),p.r*(1+u)*.8);c.fill();}
 else if(p.kind==='star'){c.translate(p.x,p.y);c.rotate(p.rot+u*4);c.beginPath();for(let k=0;k<10;k++){const r=k%2?p.r*.45:p.r;c.lineTo(Math.cos(k*Math.PI/5)*r,Math.sin(k*Math.PI/5)*r);}c.fill();}
 else if(p.kind==='drop'||p.kind==='ember'){if(p.kind==='ember')c.globalCompositeOperation='lighter';ell(c,p.x,p.y,p.r,p.r);c.fill();}
 else{c.translate(p.x,p.y);c.rotate(p.rot);c.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);}c.restore();}}
function stepParts(dt){for(let i=parts.length-1;i>=0;i--){const p=parts[i];if(p.delay>0){p.delay-=dt;continue;}p.life+=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=p.g*dt;if(p.kind==='puff'){p.vx*=.95;p.vy*=.97;}if(p.rot!==undefined)p.rot+=(p.vr||0)*dt;if(p.life>=p.max)parts.splice(i,1);}}
// ---------- Layout ----------
let G=null,MODE='splash',DT=0,TT=0,CAM={sh:0};
function sceneRect(){const top=58;const h=Math.round(clamp(H*.2,104,176));return{x:0,y:top,w:W,h};}
function layout(){if(!G)return;const L=G.L;const S=sceneRect();G.S=S;document.documentElement.style.setProperty('--sh',S.h+'px');const top=S.y+S.h+26,bot=78+BANNER();const availW=W-14,availH=H-top-bot;
 G.cs=Math.floor(Math.min(availW/L.w,availH/L.h,96));G.bw=G.cs*L.w;G.bh=G.cs*L.h;G.bx=Math.round((W-G.bw)/2);G.by=Math.round(top+(availH-G.bh)/2);G.view={ox:0,oy:top-4,w:W,h:Math.max(80,availH+8)};
 if(window.R3boardRatio&&window.R3&&R3.ok&&!R3.off&&!R3.lost){const btm=H-bot,need=W*R3boardRatio(L)+Math.min(96,H*.11),mx=btm-(S.y+78+26);const vh=Math.max(120,Math.min(mx,need));const vt=btm-vh;S.h=Math.max(78,vt-26-S.y);G.S=S;document.documentElement.style.setProperty('--sh',S.h+'px');G.view={ox:0,oy:vt-4,w:W,h:vh+8};}
 buildBoard();}
let BOARD=null;
function buildBoard(){const cs=G.cs,pad=cs*1.3;const w=G.bw+pad*2,h=G.bh+pad*2;const c=document.createElement('canvas');c.width=Math.ceil(w*DPR);c.height=Math.ceil(h*DPR);const g=c.getContext('2d');g.scale(DPR,DPR);const ox=pad,oy=pad;
 g.save();g.shadowColor='rgba(0,0,0,.55)';g.shadowBlur=18;g.shadowOffsetY=8;g.fillStyle='#8a8f9c';rr(g,ox-cs*.22,oy-cs*.22,G.bw+cs*.44,G.bh+cs*.44,cs*.22);g.fill();g.restore();
 g.fillStyle=lg(g,0,oy-cs*.22,0,oy+G.bh+cs*.22,['#b4b9c6','#8e94a2']);rr(g,ox-cs*.22,oy-cs*.22,G.bw+cs*.44,G.bh+cs*.38,cs*.22);g.fill();
 g.fillStyle=lg(g,0,oy,0,oy+G.bh,['#3d424e','#2d313a']);rr(g,ox,oy,G.bw,G.bh,cs*.08);g.fill();
 const R=seeded(3);g.fillStyle='rgba(255,255,255,.05)';for(let i=0;i<G.L.w*G.L.h*14;i++)g.fillRect(ox+R()*G.bw,oy+R()*G.bh,1.2,1.2);
 g.strokeStyle='rgba(255,255,255,.14)';g.lineWidth=2;g.setLineDash([cs*.18,cs*.18]);for(let i=1;i<G.L.w;i++){g.beginPath();g.moveTo(ox+i*cs,oy+4);g.lineTo(ox+i*cs,oy+G.bh-4);g.stroke();}for(let j=1;j<G.L.h;j++){g.beginPath();g.moveTo(ox+4,oy+j*cs);g.lineTo(ox+G.bw-4,oy+j*cs);g.stroke();}g.setLineDash([]);
 g.fillStyle='rgba(255,255,255,.2)';for(let i=0;i<G.L.w;i++)for(let k=0;k<4;k++){g.fillRect(ox+i*cs+cs*.12+k*cs*.2,oy+2,cs*.1,cs*.1);g.fillRect(ox+i*cs+cs*.12+k*cs*.2,oy+G.bh-cs*.12,cs*.1,cs*.1);}
 for(let j=0;j<G.L.h;j++)for(let k=0;k<4;k++){g.fillRect(ox+2,oy+j*cs+cs*.12+k*cs*.2,cs*.1,cs*.1);g.fillRect(ox+G.bw-cs*.12,oy+j*cs+cs*.12+k*cs*.2,cs*.1,cs*.1);}
 [[ox-cs*.12,oy-cs*.12],[ox+G.bw+cs*.12,oy-cs*.12],[ox-cs*.12,oy+G.bh+cs*.12],[ox+G.bw+cs*.12,oy+G.bh+cs*.12]].forEach(([x,y])=>{const gr=g.createRadialGradient(x,y,0,x,y,cs*1.2);gr.addColorStop(0,'rgba(255,220,140,.28)');gr.addColorStop(1,'rgba(255,220,140,0)');g.fillStyle=gr;g.fillRect(x-cs*1.2,y-cs*1.2,cs*2.4,cs*2.4);g.fillStyle='#ffe9a8';ell(g,x,y,cs*.06,cs*.06);g.fill();});
 for(const k in G.st.turn){const [x,y]=k.split(',').map(Number);drawTurn(g,ox+(x+.5)*cs,oy+(y+.5)*cs,cs,G.st.turn[k]);}
 BOARD={c,ox:G.bx-ox,oy:G.by-oy,w,h};}
function cellXY(x,y){return[G.bx+(x+.5)*G.cs,G.by+(y+.5)*G.cs];}
// ---------- Level ----------
const WATER={E:1,T:2,K:1};
function startLevel(i,skipCard){AU.init();if(window.FTX)FTX.ensure(i);const L=LEVELS[i];const ch=L.ch;$('pop').style.display='none';
 if(!skipCard&&i<30&&(i%6===0)&&!SAVE.seen['ch'+ch]){SAVE.seen['ch'+ch]=1;persist();chapterCard(ch,()=>startLevel(i,true));return;}
 const st=FL.parse(L);const fireMax=Math.max(1,st.veh.reduce((a,v)=>a+(WATER[v.type]||0),0));
 const people=clamp(st.veh.filter(v=>v.type==='A'||v.type==='K').length,1,ch===4?4:ch===2?5:6);
 G={i,L,ch,st,hearts:3,help:0,hist:[],state:'play',t:0,hint:null,pending:0,vv:{},firstTap:false,tips:[],fireMax,fire:fireMax,people,rescued:0,sv:[],gateA:0,cars:{},blkJ:{},imp:[],endT:0,steam:0,winT:0,flames:[]};
 st.veh.forEach(v=>{G.vv[v.id]={v,px:v.x,py:v.y,ang:ANG[v.d],segs:[],scale:0,in:.04*(v.x+v.y)+.15,done:false,sq:0,siren:false};});
 st.blk.forEach(b=>{if(b.sub==='#')G.cars[b.x+','+b.y]={b,px:b.x,py:b.y,ang:((b.x*7+b.y*3)%2)?0:Math.PI/2,col:CIV[(b.x*3+b.y*5)%CIV.length],attached:null,done:false};});
 G.hydVis=st.hyd.map(()=>({gone:false}));parts.length=0;
 layout();setMode('game');updHUD();showTips();AU.engine();SAVE.last=i;persist();LOG('level',i+1);}
function showTips(){const L=G.L;const list=[];if(G.i===0)list.push('tTap','tBump','tSave');else if(L.tip&&(!SAVE.seen[L.tip]||L.tip==='tBoss'))list.push(L.tip);if(L.tip)SAVE.seen[L.tip]=1;persist();G.tips=list;nextTip(.6);}
let tipH=null;function nextTip(delay){clearTimeout(tipH);const el=$('tip');if(!G||!G.tips.length){el.classList.remove('on');return;}tipH=setTimeout(()=>{if(!G)return;const k=G.tips.shift();el.textContent=T(k);el.classList.add('on');tipH=setTimeout(()=>{el.classList.remove('on');nextTip(.5);},4200);},delay*1000);}
function snapshot(){return{v:G.st.veh.map(v=>v.gone),b:G.st.blk.map(b=>b.gone),h:G.st.hyd.map(h=>h.got),go:G.st.gatesOpen,hearts:G.hearts,fire:G.fire,resc:G.rescued,svn:G.sv.length};}
function rebuildOcc(){const st=G.st;st.occ={};st.veh.forEach(v=>{if(!v.gone)st.occ[v.x+','+v.y]=v;});st.blk.forEach(b=>{if(!b.gone)st.occ[b.x+','+b.y]=b;});if(!st.gatesOpen)st.gates.forEach(g=>st.occ[g.x+','+g.y]=g);}
function busy(){return Object.values(G.vv).some(v=>v.segs.length&&!v.done);}
function tapCell(x,y){if(!G||G.state!=='play')return'nostate';const o=G.st.occ[x+','+y];if(!o)return'empty';
 if(o.kind==='blk'||o.kind==='gate'){G.blkJ[x+','+y]=1;AU.thud();return'blk';}
 const vv=G.vv[o.id];if(vv.segs.length)return'busy';G.firstTap=true;G.hint=null;
 const tr=FL.trace(G.st,o);G.hist.push(snapshot());
 if(tr.ok){FL.apply(G.st,o,tr);const segs=[];
  if(tr.tow){const f=[[o.x,o.y],...tr.fwd.map(p=>[p.x,p.y])];if(f.length>1)segs.push({k:'move',pts:f,rev:false,vmax:5});const car=G.cars[tr.tow.x+','+tr.tow.y];segs.push({k:'hook',car});
   const back=[f[f.length-1],...f.slice(0,-1).reverse(),...tr.path.map(p=>[p.x,p.y])];const [dx,dy]=FL.DIRS[tr.d];const e=back[back.length-1];for(let k=1;k<=3;k++)back.push([e[0]+dx*k,e[1]+dy*k]);segs.push({k:'move',pts:back,rev:true,vmax:6,exit:true});}
  else{const pts=[[o.x,o.y],...tr.path.map(p=>[p.x,p.y])];const [dx,dy]=FL.DIRS[tr.d];const e=pts[pts.length-1];for(let k=1;k<=3;k++)pts.push([e[0]+dx*k,e[1]+dy*k]);segs.push({k:'move',pts,rev:false,vmax:9,exit:true});}
  vv.hyds=tr.hyd.slice();vv.sw=tr.sw;vv.segs=segs;vv.siren=true;G.pending++;AU.horn((o.x/Math.max(1,G.L.w-1))*1.6-.8);AU.engine();return'go';}
 const pts=[[o.x,o.y],...tr.path.map(p=>[p.x,p.y])];const segs=[];if(pts.length>1)segs.push({k:'move',pts,rev:false,vmax:7});
 const last=pts[pts.length-1];const d=tr.path.length?tr.path[tr.path.length-1].d:o.d;const [dx,dy]=FL.DIRS[d];
 segs.push({k:'lunge',x0:last[0],y0:last[1],dx,dy,d:.32,blk:tr.blocker});if(pts.length>1)segs.push({k:'move',pts:pts.slice().reverse(),rev:true,vmax:5});segs.push({k:'end'});vv.segs=segs;vv.siren=true;
 G.hearts--;return'bump';}
function useHelp(kind){if(!G||G.state==='win')return;if(G.help>=2){toast(T('limit'));return;}
 if(kind==='undo'&&(!G.hist.length||busy())){if(!G.hist.length)toast(T('noUndo'));return;}if(kind==='heart'&&G.hearts>=3)return;
 if(kind==='hint'){if(G.state!=='play')return;if(G.hint){G.hint.t=0;toast(T('hintOn'));return;}if(!FL.free(G.st).length){toast(T('noHint'));return;}}
 if(G.adBusy)return;G.adBusy=1;const g0=G;
 Ads.rewarded().then(ok=>{if(g0)g0.adBusy=0;if(!G||G!==g0)return;if(!ok){toast(T('adFail'));return;}G.help++;
  if(kind==='hint'){const f=FL.free(G.st);if(f[0]){G.hint={id:f[0].id,t:0};AU.rescue();toast(T('hintOn'));}else toast(T('noHint'));}
  else if(kind==='undo'){restore(G.hist.pop());AU.heart();}
  else if(kind==='heart'){G.hearts=Math.min(3,G.hearts+1);AU.heart();if(G.state==='lose'){G.state='play';$('pop').style.display='none';}markHeart('gain');}
  updHUD();});}
function restore(s){const st=G.st;s.v.forEach((g,i)=>{const v=st.veh[i];if(v.gone&&!g){const vv=G.vv[v.id];if(!vv.done)G.pending--;Object.assign(vv,{px:v.x,py:v.y,ang:ANG[v.d],segs:[],done:false,scale:0,in:0,siren:false,attached:null});}v.gone=g;});
 s.b.forEach((g,i)=>{const b=st.blk[i];if(b.gone&&!g){const car=G.cars[b.x+','+b.y];if(car)Object.assign(car,{px:b.x,py:b.y,done:false,attached:null,ang:((b.x*7+b.y*3)%2)?0:Math.PI/2});}b.gone=g;});
 s.h.forEach((g,i)=>{st.hyd[i].got=g;G.hydVis[i].gone=g;});st.gatesOpen=s.go;G.gateA=s.go?1:0;G.gateOpening=false;rebuildOcc();G.hearts=s.hearts;G.fire=s.fire;G.rescued=s.resc;G.sv.length=Math.min(G.sv.length,s.svn);
 if(G.state==='lose'){G.state='play';$('pop').style.display='none';}}
// ---------- Update ----------
function angDiff(a,b){let d=b-a;while(d>Math.PI)d-=Math.PI*2;while(d<-Math.PI)d+=Math.PI*2;return d;}
function updVeh(vv,dt){if(vv.scale<1&&!vv.segs.length){if(vv.in>0)vv.in-=dt;else vv.scale=Math.min(1,vv.scale+dt*3);}
 vv.sq*=.85;vv.wob=(vv.wob||0)*.88;
 while(vv.segs.length){const s=vv.segs[0];
  if(s.k==='move'){if(!s.init){s.init=1;s.len=s.pts.length-1;s.p=0;s.v=0;}s.v=Math.min(s.vmax,s.v+dt*16);s.p+=s.v*dt;const p=Math.min(s.p,s.len);const i=Math.max(0,Math.min(Math.floor(p),s.len-1)),u=p-i;
   const a=s.pts[i],b=s.pts[i+1]||a;vv.px=lerp(a[0],b[0],u);vv.py=lerp(a[1],b[1],u);let ta=Math.atan2(b[1]-a[1],b[0]-a[0]);if(s.rev)ta+=Math.PI;if(a[0]!==b[0]||a[1]!==b[1])vv.ang+=angDiff(vv.ang,ta)*Math.min(1,dt*16);
   if(vv.attached){const car=vv.attached;car.px=vv.px+Math.cos(vv.ang)*.95;car.py=vv.py+Math.sin(vv.ang)*.95;car.ang=vv.ang;}
   checkPass(vv);if(Math.random()<.3)puff(...cellXY(vv.px-Math.cos(vv.ang)*.45,vv.py-Math.sin(vv.ang)*.45),1,'rgba(160,165,180,.35)',G.cs*.05,12);
   if(s.exit&&(vv.px<-1.2||vv.py<-1.2||vv.px>G.L.w+.2||vv.py>G.L.h+.2)){vv.segs=[];onExit(vv);break;}
   if(s.p<s.len)break;vv.sq=-.1;}
  else if(s.k==='hook'){s.t=(s.t||0)+dt;if(!s.did){s.did=1;vv.attached=s.car;s.car.attached=vv;AU.tone(500,.12,'square',.08,900);AU.tone(260,.2,'triangle',.18,0,.1);puff(...cellXY(s.car.px,s.car.py),6,'rgba(200,200,210,.6)',G.cs*.06,40);}if(s.t<.3)break;}
  else if(s.k==='lunge'){s.t=(s.t||0)+dt;const u=clamp(s.t/s.d,0,1);const f=u<.3?E.in(u/.3)*.38:.38*Math.exp(-(u-.3)*8)*Math.cos((u-.3)*28);vv.px=s.x0+s.dx*f;vv.py=s.y0+s.dy*f;
   if(!s.hit&&u>=.3){s.hit=true;onBump(vv,s);}if(u<1)break;}
  else if(s.k==='end'){vv.siren=false;vv.px=vv.v.x;vv.py=vv.v.y;vv.ang=ANG[vv.v.d];if(G.hearts<=0&&G.state==='play'){G.state='lose';setTimeout(()=>{if(G&&G.state==='lose')endPopup(false);},600);AU.lose();}}
  vv.segs.shift();}}
function checkPass(vv){(vv.hyds||[]).forEach(hi=>{const h=G.st.hyd[hi];if(Math.abs(vv.px-h.x)+Math.abs(vv.py-h.y)<.35&&!G.hydVis[hi].gone){G.hydVis[hi].gone=true;const [x,y]=cellXY(h.x,h.y);
  for(let i=0;i<16;i++)P({x,y,vx:(Math.random()-.5)*120,vy:-120-Math.random()*120,g:420,r:2+Math.random()*2,max:.9,col:'rgba(150,215,255,.95)',kind:'drop'});sparkle(x,y,8,['#9fd8ff','#fff','#5ac8ff']);AU.hydrant();
  G.fire=Math.max(0,G.fire-1);G.steam=1;updHUD();bumpEl('fireHud');}});
 if(vv.sw){const s=G.st.sw[0];if(s&&Math.abs(vv.px-s.x)+Math.abs(vv.py-s.y)<.4){vv.sw=false;G.gateOpening=true;AU.gate();sparkle(...cellXY(s.x,s.y),10,['#ffd23f','#fff']);}}}
function onExit(vv){vv.done=true;vv.siren=false;G.pending--;if(G.st.gatesOpen&&G.gateA<1)G.gateOpening=true;const side=vv.px<0?-1:vv.px>G.L.w-1?1:0;AU.siren(2.2,side||(Math.random()-.5),-(side||0)*.3);
 if(vv.attached)vv.attached.done=true;
 const S=G.S;const n=G.sv.length;const slot=n%7;const fromLeft=n%2===0;G.sv.push({type:vv.v.type,x:fromLeft?-S.w*.15:S.w*1.15,tx:S.w*(.07+slot*.143),t:0,state:'drive',work:0,dir:fromLeft?1:-1,id:vv.v.id});}
function onBump(vv,s){const cs=G.cs;AU.crash();CAM.sh=.4;vv.wob=.25;vv.sq=.15;const [x,y]=cellXY(vv.px+s.dx*.45,vv.py+s.dy*.45);sparkle(x,y,12,['#fff','#ffd23f','#ff8a1e']);puff(x,y,8,'rgba(180,180,190,.7)',cs*.08,60);
 G.imp.push({x,y,t:0},{x:cellXY(vv.v.x,vv.v.y)[0],y:cellXY(vv.v.x,vv.v.y)[1]-cs*.6,t:0,ex:true});
 const b=s.blk;if(b){if(b.kind==='veh'){const w=G.vv[b.id];w.wob=.3;w.sq=.1;}else G.blkJ[b.x+','+b.y]=1;}
 G.fire=Math.min(G.fireMax*1.5,G.fire+(G.L.endless?Math.min(1.6,1.1+(G.L.zone||0)*.06):1));G.flare=1;markHeart('lose');updHUD();bumpEl('fireHud');if(navigator.vibrate)try{navigator.vibrate(40);}catch(e){}}
function updScene(dt){const S=G.S;G.steam=Math.max(0,G.steam-dt*.4);G.flare=Math.max(0,(G.flare||0)-dt);
 G.sv.forEach(v=>{v.t+=dt;if(v.state==='drive'){const d=v.tx-v.x;v.x+=Math.sign(d)*Math.min(Math.abs(d),dt*S.w*.9);if(Math.abs(d)<2){v.state='work';v.work=0;onArrive(v);}}
  else{v.work+=dt;if(WATER[v.type]&&v.work<2.6&&G.flames.length){if(Math.random()<.7){const f=G.flames[Math.floor(Math.random()*G.flames.length)];drops(v.x,S.y+S.h*.78,f[0],f[1],2);}
    if(Math.random()<.12){const f=G.flames[Math.floor(Math.random()*G.flames.length)];steam(f[0],f[1],1);}}}});
 const fr=G.fire/G.fireMax;AU.mood=fr<.35||G.state==='win'?'hero':'tense';
 if(G.state==='play'){if(Math.random()<fr*.5)AU.crackle(.12*Math.min(1.3,fr));if(AU.ac)AU.setRoar(.09*Math.min(1.3,fr));if(G.flames.length&&Math.random()<fr*.4){const f=G.flames[Math.floor(Math.random()*G.flames.length)];embers(f[0],f[1],1);}}
 else if(AU.ac)AU.setRoar(0);}
function onArrive(v){const p=WATER[v.type]||0;if(p&&G.state==='play'){G.fire=Math.max(0,G.fire-p);AU.water();G.steam=Math.min(1,G.steam+.6);}
 if((v.type==='A'||v.type==='K')&&G.rescued<G.people){G.rescued++;AU.rescue();sparkle(v.x,G.S.y+G.S.h*.7,10,['#fff','#ffd23f','#7ad65a']);}
 updHUD();}
function update(dt){TT+=dt;DT=dt;stepParts(dt);CAM.sh=Math.max(0,CAM.sh-dt);
 if(MODE==='game'&&G){G.t+=dt;Object.values(G.vv).forEach(v=>{if(!v.done)updVeh(v,dt);});for(const k in G.blkJ)G.blkJ[k]=Math.max(0,G.blkJ[k]-dt*2.5);
  if(G.gateOpening){G.gateA=Math.min(1,G.gateA+dt*2.5);if(G.gateA>=1)G.gateOpening=false;}
  if(G.hint)G.hint.t+=dt;if(G.state==='win')G.winT+=dt;updScene(dt);
  if(G.state==='play'&&G.st.veh.every(v=>v.gone)&&G.pending<=0&&!busy()){G.endT+=dt;if(G.endT>1.1)win();}}
 else if(MODE==='story')storyUpd(dt);
 if(MODE!=='game'&&AU.ac)AU.setRoar(MODE==='story'&&STORY.scene>=1&&STORY.scene<=2?.05:0);
 if(SAVE.mus&&AU.ac&&MODE!=='story')AU.music();}
// ---------- Render ----------
function renderScene(){const S=G.S,t=G.t;const fr=G.state==='win'?0:G.fire/G.fireMax;
 cx.save();cx.fillStyle='rgba(0,0,0,.35)';cx.fillRect(S.x,S.y,S.w,S.h);
 const d=drawScene(cx,G.ch,S.x,S.y,S.w,S.h,t,fr+(G.flare||0)*.15,{waiting:Math.max(0,G.people-G.rescued),rescued:G.rescued,steam:Math.max(G.steam,G.state==='win'?1-Math.min(1,G.winT/3):0),cheer:G.state==='win',dog:G.state==='win'||G.rescued>0,boss:G.L.boss});
 G.flames=fr>0?d.F.slice(0,Math.ceil(d.F.length*Math.min(1,fr))).map(([x,y])=>[S.x+x,S.y+y]):[];
 const vs=S.h*.42;G.sv.forEach((v,i)=>{const y=S.y+S.h*.86;drawVeh(cx,S.x+v.x,y,vs,v.type,v.dir>0?0:Math.PI,{t,siren:true,lights:true});
  if(v.state==='work'&&v.type==='K'&&d.P.length){const pi=Math.min(i%d.P.length,d.P.length-1);const [px,py]=d.P[pi];const u=Math.min(1,v.work/1);cx.strokeStyle='#d8dde6';cx.lineWidth=3;cx.beginPath();cx.moveTo(S.x+v.x,y-vs*.2);cx.lineTo(lerp(S.x+v.x,S.x+px,u),lerp(y-vs*.2,S.y+py,u));cx.stroke();}});
 cx.restore();}
function render(){cx.setTransform(DPR,0,0,DPR,0,0);const sh=CAM.sh>0?CAM.sh*14:0;cx.save();if(sh)cx.translate((Math.random()-.5)*sh,(Math.random()-.5)*sh);
 drawBack(TT,G&&MODE==='game'?0:Math.sin(TT*.2)*20);
 if(MODE==='game'&&G){renderScene();renderBoard();}
 else if(MODE==='story')drawStory();
 else if(MODE==='title'||MODE==='map'||MODE==='card')drawTitleScene();
 drawParts(cx);cx.restore();
 if(MODE==='game'&&G&&Object.values(G.vv).some(v=>v.siren&&!v.done)){const a=(Math.sin(TT*14)>0)?'rgba(255,40,40,.06)':'rgba(40,90,255,.06)';cx.fillStyle=a;cx.fillRect(0,0,W,H);}}
function renderBoard(){const cs=G.cs,t=G.t;cx.drawImage(BOARD.c,BOARD.ox,BOARD.oy,BOARD.w,BOARD.h);
 G.st.hyd.forEach((h,i)=>{if(!G.hydVis[i].gone)drawHydrant(cx,...cellXY(h.x,h.y),cs,t);});
 G.st.sw.forEach(s=>drawSwitch(cx,...cellXY(s.x,s.y),cs,G.gateA>0,t));
 G.st.gates.forEach(g=>drawGate(cx,...cellXY(g.x,g.y),cs,G.gateA,t));
 const items=[];G.st.blk.forEach(b=>{if(b.sub==='#'){const car=G.cars[b.x+','+b.y];if(car&&!car.done)items.push({y:car.py,f:()=>drawCivCar(cx,...cellXY(car.px,car.py),cs,car.ang,car.col,{j:G.blkJ[b.x+','+b.y]||0})});}
  else if(!b.gone){const j=G.blkJ[b.x+','+b.y]||0;items.push({y:b.y,f:()=>(b.sub==='x'?drawBarrier:b.sub==='d'?drawDebris:drawCone)(cx,...cellXY(b.x,b.y),cs,j)});}});
 Object.values(G.vv).forEach(vv=>{if(vv.done||vv.scale<=0)return;items.push({y:vv.py,f:()=>{const [x,y]=cellXY(vv.px,vv.py);const hint=G.hint&&G.hint.id===vv.v.id;drawVeh(cx,x,y,cs*vv.scale,vv.v.type,vv.ang,{t,siren:vv.siren,lights:vv.siren,sq:vv.sq,wob:vv.wob,hint:hint?G.hint.t:0});
   if(!vv.segs.length&&vv.scale>=1&&!hint){const [dx,dy]=FL.DIRS[vv.v.d];cx.fillStyle='rgba(255,255,255,.55)';cx.save();cx.translate(x+dx*cs*.5,y+dy*cs*.5);cx.rotate(ANG[vv.v.d]);cx.beginPath();cx.moveTo(cs*.07,0);cx.lineTo(-cs*.05,-cs*.07);cx.lineTo(-cs*.05,cs*.07);cx.fill();cx.restore();}}});});
 cx.save();cx.beginPath();cx.rect(G.bx-cs*1.2,G.by-cs*1.2,G.bw+cs*2.4,G.bh+cs*2.4);cx.clip();items.sort((a,b)=>a.y-b.y).forEach(i=>i.f());cx.restore();
 if(G.hint)drawHint();if(G.i===0&&!G.firstTap&&G.state==='play')drawHand();drawImpacts();}
function drawHint(){const v=G.st.veh[G.hint.id];if(!v||v.gone){G.hint=null;return;}const [x,y]=cellXY(v.x,v.y);const p=.5+.5*Math.sin(G.hint.t*6);cx.strokeStyle=`rgba(255,230,80,${.5+p*.5})`;cx.lineWidth=4;cx.beginPath();cx.arc(x,y,G.cs*(.55+p*.08),0,Math.PI*2);cx.stroke();}
function drawHand(){const f=FL.free(G.st)[0];if(!f)return;const [x,y]=cellXY(f.x,f.y);const u=(G.t%1.4)/1.4;const s=G.cs*.5;const py=y+s*.3+Math.sin(u*Math.PI*2)*s*.15;
 cx.save();cx.globalAlpha=.6*(1-Math.abs(u-.5));cx.strokeStyle='#fff';cx.lineWidth=3;cx.beginPath();cx.arc(x,y,G.cs*.3*(1+u),0,Math.PI*2);cx.stroke();cx.restore();
 cx.save();cx.translate(x+s*.2,py);cx.fillStyle='#ffe0bd';cx.strokeStyle='#5a3a20';cx.lineWidth=2;rr(cx,-s*.15,-s*.1,s*.3,s*.6,s*.12);cx.fill();cx.stroke();rr(cx,-s*.08,-s*.45,s*.16,s*.45,s*.08);cx.fill();cx.stroke();cx.restore();}
function drawImpacts(){for(let i=G.imp.length-1;i>=0;i--){const m=G.imp[i];m.t+=DT;if(m.t>.8){G.imp.splice(i,1);continue;}const u=m.t/.8;cx.save();cx.globalAlpha=1-u;
 if(m.ex){cx.fillStyle='#ff3b30';cx.font=`900 ${G.cs*.6}px sans-serif`;cx.textAlign='center';cx.fillText('!',m.x,m.y-u*20);}else{cx.strokeStyle='#ffd23f';cx.lineWidth=3;for(let k=0;k<8;k++){const a=k*Math.PI/4;cx.beginPath();cx.moveTo(m.x+Math.cos(a)*G.cs*.15*(1+u*2),m.y+Math.sin(a)*G.cs*.15*(1+u*2));cx.lineTo(m.x+Math.cos(a)*G.cs*.3*(1+u*2),m.y+Math.sin(a)*G.cs*.3*(1+u*2));cx.stroke();}}cx.restore();}}
function drawStation(c,x,y,w,h,t,open,alarm){c.save();c.translate(x,y);c.fillStyle='#8a2a22';c.fillRect(0,h*.2,w,h*.8);c.fillStyle='#6a1a14';c.beginPath();c.moveTo(-6,h*.22);c.lineTo(w/2,0);c.lineTo(w+6,h*.22);c.fill();
 c.fillStyle='#fff';c.font=`900 ${h*.09}px sans-serif`;c.textAlign='center';c.fillText('FIRE  STATION',w/2,h*.31);
 for(let k=0;k<3;k++){const dx=w*(.06+k*.31),dw=w*.26,dh=h*.5,dy=h*.5;c.fillStyle='#ffe9a8';c.fillRect(dx,dy,dw,dh);if(k<2&&open>0)drawVeh(c,dx+dw/2,dy+dh*.7,dw*.9,k?'K':'E',Math.PI/2,{t,siren:alarm,lights:alarm});
  c.fillStyle='#c8ccd6';c.fillRect(dx,dy,dw,dh*(1-open));c.strokeStyle='#9aa0ad';for(let j=0;j<6;j++){c.beginPath();c.moveTo(dx,dy+j*dh*(1-open)/6);c.lineTo(dx+dw,dy+j*dh*(1-open)/6);c.stroke();}}
 if(alarm){c.fillStyle=Math.sin(t*16)>0?'#ff3b30':'#5a1010';ell(c,w/2,h*.13,h*.04,h*.04);c.fill();}c.restore();}
function drawTitleScene(){const s=Math.min(W,H*.6);drawScene(cx,1,W*.08,H*.5,W*.84,H*.3,TT,.45,{waiting:2});
 const u=(TT*.18)%1;drawVeh(cx,lerp(-60,W+60,u),H*.86,s*.2,'E',0,{t:TT,siren:true,lights:true});drawVeh(cx,lerp(W+60,-60,(u+.5)%1),H*.93,s*.2,'K',Math.PI,{t:TT,siren:true,lights:true});}
// ---------- HUD / DOM ----------
function updHUD(){if(!G)return;$('lvl').textContent=T('level')+' '+(G.i+1);const hs=$('hearts');if(hs.children.length!==3){hs.innerHTML='';for(let i=0;i<3;i++)hs.insertAdjacentHTML('beforeend','<svg viewBox="0 0 24 24"><use href="#i-heart"/></svg>');}
 [...hs.children].forEach((h,i)=>h.classList.toggle('off',i>=G.hearts));
 $('carN').textContent=G.rescued+'/'+G.people;const fb=$('fireBar');if(fb){const f=G.state==='win'?0:clamp(G.fire/G.fireMax,0,1.5);fb.style.width=Math.min(100,f*100)+'%';fb.style.background=f>1?'#ff2a1a':f>.5?'#ff7a1e':'#ffc83a';}
 const lim=G.help>=2;$('bHint').disabled=lim;$('bUndo').disabled=lim||!G.hist.length;$('bHeart').disabled=lim;$('bHeart').style.display=G.hearts<3?'flex':'none';}
function markHeart(k){const hs=$('hearts');const idx=k==='lose'?G.hearts:G.hearts-1;const h=hs.children[idx];if(h){h.classList.remove('lose','gain');void h.offsetWidth;h.classList.add(k);}}
function bumpEl(id){const e=$(id);if(e&&e.animate)e.animate([{transform:'scale(1)'},{transform:'scale(1.18)'},{transform:'scale(1)'}],{duration:350,easing:'cubic-bezier(.3,1.6,.6,1)'});}
function toast(s){const t=$('toast');t.textContent=s;t.classList.add('on');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('on'),2200);}
function setMode(m){MODE=m;{const t=$('toast');t.classList.remove('on');const tp=$('tip');tp.style.transition='none';tp.classList.remove('on');void tp.offsetWidth;tp.style.transition='';}$('hud').style.display=m==='game'?'block':'none';$('title').style.display=m==='title'?'flex':'none';$('map').style.display=m==='map'?'flex':'none';$('story').style.display=m==='story'?'flex':'none';
 if(m!=='game'){$('tip').classList.remove('on');clearTimeout(tipH);}document.documentElement.style.setProperty('--banner',BANNER()+'px');Ads.banner(m==='game'||m==='map');}
function win(){G.state='win';const stars=G.hearts;const i=G.i;SAVE.stars[i]=Math.max(SAVE.stars[i]||0,stars);persist();G.rescued=G.people;G.fire=0;updHUD();
 AU.win();confetti();for(let k=0;k<5;k++)steam(W*(.2+k*.15),G.S.y+G.S.h*.5,3);setTimeout(()=>{if(G&&G.state==='win'&&MODE==='game')endPopup(true);},1500);LOG('win level',i+1,'stars',stars);}
function endPopup(winb){const p=$('pop');p.style.display='flex';const g=G;let h='<div class="card">';
 if(winb){h+=`<h2>${T('win')}</h2><div class="sub">${T('winSub')}</div><div class="stars">${[0,1,2].map(k=>`<svg viewBox="0 0 24 24" class="${k<g.hearts?'on':''}" style="animation-delay:${.15+k*.22}s"><use href="#i-star"/></svg>`).join('')}</div>`;
  h+=`<canvas id="ecv" width="440" height="220"></canvas><div class="cline"><svg viewBox="0 0 24 24"><use href="#i-person"/></svg>${T('saved')} ${g.people}/${g.people}</div>`;
  const last=window.isLastLv?isLastLv(g.i):g.i>=LEVELS.length-1;if(last)h+=`<div style="font-weight:800;margin:4px 0">${T('allDone')}</div>`;
  h+=(last?'':`<button class="btn green" id="pNext">${T('next')}</button>`)+`<div class="row"><button class="btn blue" id="pRetry">${T('retry')}</button><button class="btn gold" id="pMap">${T('map')}</button></div>`;}
 else{h+=`<h2 class="lose">${T('lose')}</h2><div class="sub">${T('loseSub')}</div><canvas id="ecv" width="440" height="220"></canvas>`;
  if(g.help<2)h+=`<button class="btn pink" id="pHeart"><svg class="ad" viewBox="0 0 24 24"><use href="#i-play"/></svg><span>${T('heart')}<small>${T('video')}</small></span></button>`;
  h+=`<button class="btn green" id="pRetry">${T('retry')}</button><button class="btn gold" id="pMap">${T('map')}</button>`;}
 p.innerHTML=h+'</div>';
 if(winb)[0,1,2].forEach(k=>{if(k<g.hearts)setTimeout(()=>AU.star(k),150+k*220);});
 const ecv=$('ecv'),ec=ecv.getContext('2d'),t0=performance.now();
 (function anim(){if(!document.body.contains(ecv))return;const t=(performance.now()-t0)/1000;ec.setTransform(2,0,0,2,0,0);ec.clearRect(0,0,220,110);
  if(winb){drawVeh(ec,40,80,60,'E',0,{t,siren:true,lights:true});for(let k=0;k<3;k++)drawPerson(ec,95+k*28,98,34,{cheer:true,happy:true,t,ph:k,shirt:SHIRTS[k]});drawPerson(ec,180,98,36,{cheer:true,helmet:true,t,ph:2});drawDog(ec,205,98,30,t,true);}
  else{drawScene(ec,g.ch,10,0,200,110,t,1,{waiting:2});drawVeh(ec,110,96,46,'E',0,{t,sq:Math.sin(t*3)*.03});}
  requestAnimationFrame(anim);})();
 const on=(id,f)=>{const e=$(id);if(e)e.onclick=()=>{AU.click();f();};};
 on('pNext',()=>{p.style.display='none';Ads.maybeInterstitial(g.i+1);startLevel(g.i+1);});
 on('pRetry',()=>{p.style.display='none';if(winb)Ads.maybeInterstitial(g.i+1);startLevel(g.i);});
 on('pMap',()=>{p.style.display='none';if(winb)Ads.maybeInterstitial(g.i+1);showMap();});
 on('pHeart',()=>useHelp('heart'));}
function chapterCard(ch,cb){setMode('card');const p=$('pop');p.style.display='flex';p.innerHTML=`<div class="chcard"><canvas id="ccv" width="440" height="220"></canvas><div class="k">${T('chapter')} ${ch}</div><h3>${T('c'+ch)}</h3><p>${T('c'+ch+'d')}</p><button class="btn green" id="cGo">${T('play')}</button></div>`;
 AU.bell(.6);const c=$('ccv'),g=c.getContext('2d'),t0=performance.now();(function a(){if(!document.body.contains(c))return;const t=(performance.now()-t0)/1000;g.setTransform(2,0,0,2,0,0);g.clearRect(0,0,220,110);drawScene(g,ch,0,0,220,110,t,.7,{waiting:3});requestAnimationFrame(a);})();
 $('cGo').onclick=()=>{AU.click();p.style.display='none';cb();};}
function showTitle(){G=null;const t=$('title');t.innerHTML=`<button class="rb green corner" id="tSet" aria-label="settings"><svg><use href="#i-gear"/></svg></button><div class="logo"><span class="l1" data-x="Firetruck">Firetruck</span><span class="l2" data-x="Rescue">Rescue</span></div><div class="tag">${T('tag')}</div><button class="btn green big" id="tPlay">${T('play')}</button><button class="btn blue" id="tStory">${T('story')}</button>`;
 $('tPlay').onclick=()=>{AU.init();AU.click();if(!SAVE.seen.story)startStory();else showMap();};$('tStory').onclick=()=>{AU.init();AU.click();startStory();};$('tSet').onclick=()=>{AU.init();settings();};setMode('title');}
function showMap(){G=null;parts.length=0;const m=$('map');const unlocked=SAVE.stars.filter(x=>x>0).length;const N=window.FTX&&unlocked>=30?Math.max(30,unlocked+4):30;const cur=Math.min(unlocked,N-1);const tot=SAVE.stars.reduce((a,b)=>a+(b||0),0);
 let h=`<div class="mhead"><button class="rb green" id="mBack" aria-label="title"><svg><use href="#i-home"/></svg></button><div class="pill">${T('map')}</div><div class="pill tot"><svg viewBox="0 0 24 24"><use href="#i-star"/></svg>${tot}/${N*3}</div><button class="rb green" id="mSet" aria-label="settings"><svg><use href="#i-gear"/></svg></button></div><div class="path" id="mpath">`;
 for(let i=N-1;i>=0;i--){const lk=i>cur&&!(SAVE.stars[i]>0);const off=Math.sin(i*1.25)*28;const s=SAVE.stars[i]||0;const boss=i>=30?FTX.isBoss(i):LEVELS[i].boss;
  h+=`<div class="wrapn" style="margin-left:calc(50% - 55px + ${off}%)">${boss?`<div class="nl"><svg viewBox="0 0 24 24"><use href="#i-flame"/></svg></div>`:''}<button class="node ${lk?'lock':''} ${i===cur?'cur':''} ${boss?'boss':''}" data-i="${i}">${lk?'<svg viewBox="0 0 24 24"><use href="#i-lock"/></svg>':i+1}</button><div class="ns">${lk?'':[0,1,2].map(k=>`<svg viewBox="0 0 24 24" class="${k<s?'on':''}"><use href="#i-star"/></svg>`).join('')}</div></div>`;
  if(i>=30&&(i-30)%10===0){const z=(i-30)/10,zc=[2,3,1,4,5][z%5];h+=`<div class="chhead"><canvas class="chcv" data-ch="${zc}" width="300" height="120"></canvas><div class="chn">${T('endless')} · ${T('zone')} ${z+1}</div></div>`;}
  else if(i<30&&i%6===0){const ch=i/6+1;h+=`<div class="chhead"><canvas class="chcv" data-ch="${ch}" width="300" height="120"></canvas><div class="chn">${T('chapter')} ${ch} · ${T('c'+ch)}</div></div>`;}}
 m.innerHTML=h+'</div>';setMode('map');
 m.querySelectorAll('.chcv').forEach(c=>{const g=c.getContext('2d');g.setTransform(2,0,0,2,0,0);drawScene(g,+c.dataset.ch,0,0,150,60,1.3,.6,{waiting:2});});
 m.querySelectorAll('.node').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(b.classList.contains('lock')){AU.tone(200,.1,'triangle',.2);b.animate([{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}],{duration:300});return;}AU.click();startLevel(i);});
 $('mBack').onclick=()=>{AU.click();showTitle();};$('mSet').onclick=()=>{AU.click();settings();};
 const c=m.querySelector('.node.cur');if(c)setTimeout(()=>c.scrollIntoView({block:'center'}),30);}
function settings(){const p=$('pop');p.style.display='flex';const opts=['auto',...Object.keys(I18N)].map(l=>`<option value="${l}" ${((l==='auto'&&!localStorage.getItem('ft_lang'))||localStorage.getItem('ft_lang')===l)?'selected':''}>${l==='auto'?T('auto'):LANG_NAMES[l]}</option>`).join('');
 p.innerHTML=`<div class="card"><h2>${T('settings')}</h2><div class="set">${T('sound')}<button class="tg ${SAVE.snd?'on':''}" id="sSnd"></button></div><div class="set">${T('music')}<button class="tg ${SAVE.mus?'on':''}" id="sMus"></button></div><div class="set">${T('language')}<select id="sLang">${opts}</select></div>
 <div class="cred">${T('credits')}<img src="studio-logo.png" alt="">P-Prece Studio<br>พีพีช Studio</div><button class="btn green" id="sClose">${T('close')}</button></div>`;
 $('sSnd').onclick=e=>{AU.init();AU.setSound(!SAVE.snd);e.target.classList.toggle('on',!!SAVE.snd);AU.click();};
 $('sMus').onclick=e=>{AU.init();AU.setMusic(!SAVE.mus);e.target.classList.toggle('on',!!SAVE.mus);};
 $('sLang').onchange=e=>{const v=e.target.value;try{if(v==='auto')localStorage.removeItem('ft_lang');else localStorage.setItem('ft_lang',v);}catch(_){}LANG=v==='auto'?detectLang():v;applyLang();settings();};
 $('sClose').onclick=()=>{AU.click();p.style.display='none';if(MODE==='title')showTitle();else if(MODE==='map')showMap();};}
function applyLang(){document.documentElement.lang=LANG;document.documentElement.dir=LANG==='ar'?'rtl':'ltr';document.querySelectorAll('[data-t]').forEach(e=>e.textContent=T(e.dataset.t));$('bSkip').textContent=T('skip');updHUD();}
// ---------- Story ----------
const STORY={t:0,scene:0,dur:5.2,n:5,cue:{}};
function startStory(){AU.init();STORY.t=0;STORY.scene=0;STORY.cue={};parts.length=0;setMode('story');const c0=$('cap');c0.textContent=T('s1');c0.classList.add('on');}
function endStory(){if(MODE!=='story')return;SAVE.seen.story=1;persist();if(AU.ac)AU.setRoar(0);if(!SAVE.stars.some(x=>x>0))startLevel(0);else showMap();}
function storyUpd(dt){STORY.t+=dt;const sc=Math.floor(STORY.t/STORY.dur);if(sc>=STORY.n){endStory();return;}const lt=STORY.t-sc*STORY.dur;
 if(sc!==STORY.scene){STORY.scene=sc;const c=$('cap');c.textContent=T('s'+(sc+1));c.classList.add('on');c.classList.remove('in');void c.offsetWidth;c.classList.add('in');}
 const cue=(k,at,f)=>{if(!STORY.cue[k]&&lt>=at&&STORY.scene===+k[0]){STORY.cue[k]=1;f();}};
 cue('0a',.3,()=>AU.tone(392,1.2,'sine',.08));cue('1a',.6,()=>AU.crash());cue('2a',.4,()=>AU.ring());cue('3a',.2,()=>AU.bell(2));cue('3b',2.6,()=>AU.siren(2.6,-.6,.6));cue('4a',.3,()=>AU.horn(-.4));cue('4b',1.6,()=>AU.horn(.4));cue('4c',3,()=>AU.siren(2,0,0));
 if((sc===1||sc===2)&&Math.random()<.4)AU.crackle(.1);}
function drawStory(){const sc=STORY.scene,lt=STORY.t-sc*STORY.dur,t=STORY.t;const fade=Math.min(1,lt*2,(STORY.dur-lt)*2);cx.save();cx.globalAlpha=Math.max(0,fade);
 const bw=Math.min(W*.9,H*.5*1.4),bh=bw/1.4,bx=(W-bw)/2,by=H*.18;
 if(sc===0){drawScene(cx,1,bx,by,bw,bh,t,0,{});cx.fillStyle='rgba(255,240,160,.8)';for(let k=0;k<3;k++){ell(cx,bx+bw*(.3+k*.2),by+bh*.25+Math.sin(t*2+k)*6,2,2);cx.fill();}drawDog(cx,bx+bw*.8,by+bh*.92,bw*.1,t,false);}
 else if(sc===1){const f=Math.min(1,lt/2.5);drawScene(cx,1,bx,by,bw,bh,t,f,{waiting:lt>1.5?4:0});if(Math.random()<.3)embers(bx+bw*(.3+Math.random()*.4),by+bh*.3,1);drawDog(cx,bx+bw*.85,by+bh*.92,bw*.1,t,false);}
 else if(sc===2){drawScene(cx,1,bx,by,bw,bh,t,1,{waiting:4});const s2=bw*.22;drawPerson(cx,bx+bw*.14,by+bh*.98,s2,{ph:1,t,shirt:'#7ad65a'});
  cx.fillStyle='#222';rr(cx,bx+bw*.14+s2*.18,by+bh*.98-s2*.95,s2*.12,s2*.2,3);cx.fill();if(Math.sin(t*10)>0){cx.strokeStyle='#fff';cx.lineWidth=2;for(let k=1;k<3;k++){cx.beginPath();cx.arc(bx+bw*.14+s2*.3,by+bh*.98-s2*.95,k*7,-1,.3);cx.stroke();}}if(Math.random()<.3)embers(bx+bw*(.3+Math.random()*.4),by+bh*.3,1);}
 else if(sc===3){const open=clamp((lt-1.2)/1.2,0,1);drawStation(cx,bx,by,bw,bh,t,open,true);if(lt>2.6){const u=E.in(clamp((lt-2.6)/2.4,0,1));drawVeh(cx,bx+bw*.19,by+bh+u*H*.4,bw*.24,'E',Math.PI/2,{t,siren:true,lights:true});}}
 else{cx.fillStyle='#2d313a';cx.fillRect(0,by,W,bh);const cs=bw/5;const cars=[[0,'#3a7bd5'],[1,'#ff9a1e'],[3,'#7a4ad5'],[4,'#2ab07a']];
  for(let j=0;j<3;j++)cars.forEach(([k,col],i)=>drawCivCar(cx,bx+(k+.5)*cs+(j===1&&lt>2.5?Math.min(1,(lt-2.5))*cs*.3*(k<2?-1:1):0),by+(j+.6)*cs*.9,cs,Math.PI/2*(j%2),CIV[(i+j)%CIV.length]));
  drawVeh(cx,bx+2.5*cs,by+bh*.85-(lt>3?(lt-3)*bh*.4:0),cs*1.1,'E',-Math.PI/2,{t,siren:true,lights:true,sq:Math.sin(t*20)*.02});}
 cx.restore();}
// ---------- Input ----------
cv.addEventListener('pointerdown',e=>{AU.init();if(MODE!=='game'||!G)return;const pk=window.pickCell&&window.pickCell(e.clientX,e.clientY);const x=pk?pk[0]:Math.floor((e.clientX-G.bx)/G.cs),y=pk?pk[1]:Math.floor((e.clientY-G.by)/G.cs);if(x<0||y<0||x>=G.L.w||y>=G.L.h)return;tapCell(x,y);updHUD();});
$('bHome').onclick=()=>{AU.click();showMap();};$('bHint').onclick=()=>{AU.click();useHelp('hint');};$('bUndo').onclick=()=>{AU.click();useHelp('undo');};$('bHeart').onclick=()=>{AU.click();useHelp('heart');};$('bSkip').onclick=()=>{AU.click();endStory();};
document.addEventListener('visibilitychange',()=>{if(!AU.ac)return;if(document.hidden)AU.ac.suspend();else AU.ac.resume();});
// ---------- Loop ----------
function resize(){DPR=Math.min(window.devicePixelRatio||1,3);W=innerWidth;H=innerHeight;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);cv.style.width=W+'px';cv.style.height=H+'px';buildBG();buildSkyline();if(G)layout();}
addEventListener('resize',resize);
let last=performance.now();function frame(now){const dt=Math.min(.05,(now-last)/1000);last=now;update(dt);render();requestAnimationFrame(frame);}
buildSprites();resize();applyLang();requestAnimationFrame(frame);
setTimeout(()=>{const s=$('splash');s.style.opacity=0;setTimeout(()=>s.remove(),650);showTitle();},1700);
if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('sw.js').catch(()=>{});
// ---------- Test hooks (used by automated playtests) ----------
window.__ft={start:startLevel,tap:tapCell,get G(){return G;},sim(sec){const n=Math.ceil(sec/(1/60));for(let i=0;i<n;i++)update(1/60);},next(){const f=FL.free(G.st);return f[0]?{x:f[0].x,y:f[0].y}:null;},blocked(){return G.st.veh.find(v=>!v.gone&&!FL.trace(G.st,v).ok);},showMap,showTitle,settings,useHelp,startStory,endStory,mode:()=>MODE,Ads,STORY,render};
