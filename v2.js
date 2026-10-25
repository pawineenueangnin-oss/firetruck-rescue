// Firetruck Rescue v2 — realistic pre-rendered 3/4 vehicle sprites, painted cinematic story, per-chapter fire scenes,
// interactive tutorial, how-to-play, pause menu, ending + credits, graphics quality. Overrides v1 functions in game.js.
(function(){
const TAU=Math.PI*2;
const V2=window.V2={imgs:{},paused:false,lowAuto:false,fps:60,fpsAcc:0,fpsN:0,fpsBad:0,tut:null};
SAVE.gfx=SAVE.gfx||'auto';
const LOW=()=>SAVE.gfx==='low'||(SAVE.gfx==='auto'&&V2.lowAuto);
function IMG(n){let i=V2.imgs[n];if(!i){i=new Image();i.decoding='async';i.src=n;V2.imgs[n]=i;}return i;}
const ok=i=>i&&i.complete&&i.naturalWidth>0;
['sprites/veh.webp','sprites/props.webp','img/title.jpg','img/bg1.jpg','img/bg2.jpg','img/bg3.jpg','img/bg4.jpg','img/bg5.jpg','img/i1.jpg','img/i2.jpg'].forEach(IMG);
const SM=window.SPR_META,VM=SM.veh,PM=SM.props;
const CELLU=0.86;
function frameOf(a,N){a=((a%TAU)+TAU)%TAU;return Math.round(a/(TAU/N))%N;}
function adiff(a,b){let d=b-a;while(d>Math.PI)d-=TAU;while(d<-Math.PI)d+=TAU;return d;}
const AMBER={A:1,V:1,W:1};
// ---------- Vehicles (pre-rendered three.js sprites, 16 headings) ----------
window.drawVeh=function(c,x,y,s,type,ang,o){o=o||{};const sh=IMG('sprites/veh.webp');const row=VM.meta[type];if(!row)return;
 const N=VM.N,FS=VM.FS,fi=frameOf(ang,N),res=adiff(fi*TAU/N,ang),k=s/(CELLU*VM.scale),ax=VM.anchor[0]*k,ay=VM.anchor[1]*k,t=o.t!=null?o.t:TT;const fr=row.frames[fi];
 c.save();c.translate(x,y-(o.z||0));
 if(o.lights&&!LOW()&&o.cone!==false){const fx=(fr.front[0]-VM.anchor[0])*k,fy=(fr.front[1]-VM.anchor[1])*k+s*.06;const dx=Math.cos(ang),dy=Math.sin(ang)*.8;const L=s*1.25;
  c.save();c.globalCompositeOperation='lighter';const g=c.createLinearGradient(fx,fy,fx+dx*L,fy+dy*L);g.addColorStop(0,'rgba(255,244,200,.34)');g.addColorStop(1,'rgba(255,244,200,0)');c.fillStyle=g;
  const px=-dy,py=dx;c.beginPath();c.moveTo(fx+px*s*.12,fy+py*s*.12);c.lineTo(fx+dx*L+px*s*.42,fy+dy*L+py*s*.42);c.lineTo(fx+dx*L-px*s*.42,fy+dy*L-py*s*.42);c.lineTo(fx-px*s*.12,fy-py*s*.12);c.fill();c.restore();}
 if(ok(sh)){c.save();const sq=o.sq||0;c.rotate(res*.7+(o.wob||0)*.5);c.scale(1+sq*.4,1-sq*.35);c.drawImage(sh,fi*FS,row.row*FS,FS,FS,-ax,-ay,FS*k,FS*k);c.restore();}
 if(o.siren&&fr.lb.length){const ph=Math.floor(t*9+(o.ph||0))%2;c.save();c.globalCompositeOperation='lighter';
  fr.lb.forEach((p,i)=>{const px=(p[0]-VM.anchor[0])*k,py=(p[1]-VM.anchor[1])*k;const col=i===0?'255,40,30':(AMBER[type]?'255,170,20':'40,110,255');const on=i===ph;const r=s*(on?.62:.16);
   const g=c.createRadialGradient(px,py,0,px,py,r);g.addColorStop(0,`rgba(255,255,255,${on?.95:.5})`);g.addColorStop(.12,`rgba(${col},${on?.8:.5})`);g.addColorStop(1,`rgba(${col},0)`);c.fillStyle=g;c.fillRect(px-r,py-r,r*2,r*2);
   if(on&&!LOW()&&o.refl!==false){const ry=s*.42;const g2=c.createRadialGradient(px,ry,0,px,ry,s*.5);g2.addColorStop(0,`rgba(${col},.32)`);g2.addColorStop(1,`rgba(${col},0)`);c.fillStyle=g2;c.save();c.translate(px,ry);c.scale(.6,1.3);c.translate(-px,-ry);c.fillRect(px-s*.5,ry-s*.5,s,s);c.restore();}});
  c.restore();}
 c.restore();};
function prop(c,name,fi,x,y,s,j){const sh=IMG('sprites/props.webp');const m=PM.meta[name];if(!m||!ok(sh))return;const FS=PM.FS,k=s/(CELLU*PM.scale);
 c.save();c.translate(x+(j?Math.sin(j*40)*3*j:0),y);c.drawImage(sh,fi*FS,m.row*FS,FS,FS,-PM.anchor[0]*k,-PM.anchor[1]*k,FS*k,FS*k);c.restore();}
window.drawCivCar=function(c,x,y,s,ang,col,o){o=o||{};let i=CIV.indexOf(col);if(i<0)i=typeof col==='number'?col:0;prop(c,'car'+(i%6),frameOf(ang,4),x,y,s,o.j||0);};
window.drawCone=function(c,x,y,s,j){prop(c,'cone',0,x,y,s*1.15,j);};
window.drawBarrier=function(c,x,y,s,j){prop(c,'barV',1,x,y,s*1.05,j);};
window.drawHydrant=function(c,x,y,s,t){prop(c,'hyd',0,x,y,s*1.2,0);const p=.5+.5*Math.sin((t||0)*4);c.save();c.globalCompositeOperation='lighter';const g=c.createRadialGradient(x,y,0,x,y,s*.45);g.addColorStop(0,`rgba(90,190,255,${.18+p*.12})`);g.addColorStop(1,'rgba(90,190,255,0)');c.fillStyle=g;c.fillRect(x-s*.45,y-s*.45,s*.9,s*.9);c.restore();};
// ---------- Realistic people (consistent proportions, ~7.5 heads tall) ----------
const SKIN=['#f1c7a5','#d9a27c','#b77a52','#8a5636','#f5d3b8','#c68c64'];
window.drawHuman=function(c,x,y,h,o){o=o||{};const t=o.t||0,ph=o.ph||0;const hu=h/7.5;const jump=o.cheer?Math.abs(Math.sin(t*5+ph))*h*.12:0;const ff=o.ff;const skin=o.skin||SKIN[Math.abs(Math.floor(ph*3))%SKIN.length];
 const shirt=ff?'#b88a3a':(o.shirt||'#4a6fa8'),pants=ff?'#8a6a2a':(o.pants||'#2a2f3a');c.save();c.translate(x,y);
 c.fillStyle='rgba(0,0,0,.35)';ell(c,0,0,hu*1.2,hu*.3);c.fill();c.translate(0,-jump);
 const sw=o.walk?Math.sin(t*8+ph)*.35:0;
 // legs
 c.lineCap='round';c.strokeStyle=pants;c.lineWidth=hu*.62;[[-1,sw],[1,-sw]].forEach(([k,a])=>{c.beginPath();c.moveTo(k*hu*.32,-hu*3.6);c.lineTo(k*hu*.32+Math.sin(a)*hu*3.4,-hu*.35);c.stroke();});
 c.fillStyle=ff?'#1b1b1b':'#2a2320';[-1,1].forEach((k,i)=>{const a=i?-sw:sw;rr(c,k*hu*.32+Math.sin(a)*hu*3.4-hu*.35,-hu*.45,hu*.8,hu*.45,hu*.15);c.fill();});
 if(ff){c.fillStyle='#e8f04a';[-1,1].forEach(k=>c.fillRect(k*hu*.32-hu*.34,-hu*1.5,hu*.68,hu*.22));c.fillStyle='rgba(230,235,240,.9)';[-1,1].forEach(k=>c.fillRect(k*hu*.32-hu*.34,-hu*1.28,hu*.68,hu*.1));}
 // torso
 const tg=c.createLinearGradient(-hu,0,hu,0);tg.addColorStop(0,shirt);tg.addColorStop(1,shade(shirt,-.35));c.fillStyle=tg;
 c.beginPath();c.moveTo(-hu*.95,-hu*6.2);c.lineTo(hu*.95,-hu*6.2);c.lineTo(hu*.75,-hu*3.4);c.lineTo(-hu*.75,-hu*3.4);c.closePath();c.fill();
 if(ff){c.fillStyle='#e8f04a';c.fillRect(-hu*.8,-hu*4.2,hu*1.6,hu*.25);c.fillStyle='rgba(235,240,245,.95)';c.fillRect(-hu*.8,-hu*3.97,hu*1.6,hu*.12);c.fillStyle='#e8f04a';c.fillRect(-hu*.3,-hu*6.1,hu*.18,hu*2.6);c.fillRect(hu*.12,-hu*6.1,hu*.18,hu*2.6);}
 // arms
 c.strokeStyle=shade(shirt,-.15);c.lineWidth=hu*.5;const wave=o.wave?Math.sin(t*7+ph)*.5:0;const up=o.cheer||o.wave;
 [[-1,up?-2.4+wave:-.15-sw*.6],[1,o.cheer?2.4-wave:.15+sw*.6]].forEach(([k,a])=>{c.beginPath();c.moveTo(k*hu*.85,-hu*5.9);const ex=k*hu*.85+Math.sin(a)*hu*2.6*k*(a<0?-1:1),ey=-hu*5.9+Math.cos(a)*hu*2.6;c.lineTo(ex,ey);c.stroke();c.fillStyle=ff?'#222':skin;ell(c,ex,ey,hu*.28,hu*.28);c.fill();});
 // head
 c.fillStyle=skin;c.fillRect(-hu*.2,-hu*6.6,hu*.4,hu*.5);ell(c,0,-hu*7,hu*.5,hu*.58);c.fill();
 if(ff){c.fillStyle=o.helm||'#f2c21b';c.beginPath();c.ellipse(0,-hu*7.2,hu*.68,hu*.52,0,Math.PI,0);c.fill();c.fillRect(-hu*.9,-hu*7.25,hu*1.8,hu*.16);c.fillStyle='rgba(255,255,255,.45)';ell(c,-hu*.2,-hu*7.45,hu*.2,hu*.1);c.fill();}
 else{c.fillStyle=o.hair||['#2a1a10','#5a3a1a','#111','#8a5a2a'][Math.abs(Math.floor(ph*7))%4];c.beginPath();c.ellipse(0,-hu*7.15,hu*.54,hu*.45,0,Math.PI*1.05,-.05);c.fill();}
 if(o.rim){c.globalCompositeOperation='lighter';c.fillStyle='rgba(255,120,30,.25)';c.fillRect(hu*.3,-hu*7.6,hu*.6,hu*7.4);}
 c.restore();};
function shade(hex,a){const n=parseInt(hex.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const f=a<0?0:255,p=Math.abs(a);r=Math.round(r+(f-r)*p);g=Math.round(g+(f-g)*p);b=Math.round(b+(f-b)*p);return'#'+((1<<24)|(r<<16)|(g<<8)|b).toString(16).slice(1);}
window.drawPerson=function(c,x,y,s,o){o=o||{};drawHuman(c,x,y,s*1.05,{t:o.t,ph:o.ph,cheer:o.cheer,wave:o.wave,shirt:o.shirt,ff:o.helmet||o.ff});};
window.drawDog=function(c,x,y,s,t,cheer){const j=cheer?Math.abs(Math.sin(t*7))*s*.18:0;c.save();c.translate(x,y);c.fillStyle='rgba(0,0,0,.3)';ell(c,0,0,s*.38,s*.07);c.fill();c.translate(0,-j);
 const fur='#c98a3a',dk='#9a6420';c.strokeStyle=dk;c.lineCap='round';c.lineWidth=s*.08;[[-.22,0],[-.12,.05],[.16,0],[.24,.05]].forEach(([lx,a])=>{c.beginPath();c.moveTo(s*lx,-s*.28);c.lineTo(s*lx+Math.sin(t*9+lx*20)*s*.03*(cheer?1:0),-s*.02);c.stroke();});
 const g=c.createLinearGradient(0,-s*.45,0,-s*.2);g.addColorStop(0,fur);g.addColorStop(1,dk);c.fillStyle=g;ell(c,0,-s*.33,s*.3,s*.12);c.fill();
 c.save();c.translate(s*.28,-s*.42);c.fillStyle=fur;ell(c,0,0,s*.12,s*.1);c.fill();ell(c,s*.12,s*.03,s*.08,s*.05);c.fill();c.fillStyle='#1a1010';ell(c,s*.19,s*.02,s*.025,s*.02);c.fill();c.fillStyle=dk;ell(c,-s*.04,s*.05,s*.04,s*.08,.3);c.fill();c.restore();
 c.strokeStyle=fur;c.lineWidth=s*.06;c.beginPath();c.moveTo(-s*.28,-s*.38);c.quadraticCurveTo(-s*.42,-s*.5+Math.sin(t*12)*s*.05,-s*.46,-s*.58+Math.sin(t*12)*s*.08);c.stroke();c.restore();};
// ---------- Flames & smoke sprites ----------
const FT=document.createElement('canvas');FT.width=64;FT.height=128;{const g=FT.getContext('2d');g.filter='blur(3px)';const gr=g.createLinearGradient(0,128,0,0);gr.addColorStop(0,'rgba(255,250,220,1)');gr.addColorStop(.25,'rgba(255,200,80,1)');gr.addColorStop(.55,'rgba(255,110,20,.9)');gr.addColorStop(.85,'rgba(200,40,10,.5)');gr.addColorStop(1,'rgba(120,20,5,0)');g.fillStyle=gr;
 g.beginPath();g.moveTo(32,6);g.bezierCurveTo(44,40,58,70,56,96);g.bezierCurveTo(54,118,42,124,32,124);g.bezierCurveTo(22,124,10,118,8,96);g.bezierCurveTo(6,70,20,40,32,6);g.fill();}
const SMK=document.createElement('canvas');SMK.width=SMK.height=64;{const g=SMK.getContext('2d');const gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'rgba(38,34,36,.75)');gr.addColorStop(.55,'rgba(45,42,44,.35)');gr.addColorStop(1,'rgba(45,42,44,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);}
function flame(c,x,y,s,t,ph,int){const n=LOW()?2:5;c.save();c.globalCompositeOperation='lighter';
 const gl=c.createRadialGradient(x,y-s*.4,0,x,y-s*.4,s*1.6*int);gl.addColorStop(0,'rgba(255,140,40,.35)');gl.addColorStop(1,'rgba(255,80,0,0)');c.fillStyle=gl;c.fillRect(x-s*1.6,y-s*2,s*3.2,s*3.2);
 for(let k=0;k<n;k++){const p=ph+k*1.7;const fl=.75+.25*Math.sin(t*11+p*3)+.15*Math.sin(t*23+p);const hh=s*(1.1+.5*((k*37)%5)/5)*int*fl,ww=s*.6*(1-k*.08);const sx=Math.sin(t*3+p)*s*.12+(k-n/2)*s*.14;
  c.save();c.translate(x+sx,y);c.rotate(Math.sin(t*4+p)*.12);c.globalAlpha=.85-k*.08;c.drawImage(FT,-ww/2,-hh,ww,hh);c.restore();}
 c.restore();}
function smoke(c,x,y,s,t,ph,int){if(LOW())return;for(let k=0;k<4;k++){const u=(t*.22+ph*.31+k/4)%1;const r=s*(.7+u*2.2);c.globalAlpha=Math.min(1,(1-u)*1.4)*.75*Math.min(1,int);c.drawImage(SMK,x-r+u*s*2.4+Math.sin(t+k)*s*.3,y-s*1.2-u*s*6-r,r*2,r*2);}c.globalAlpha=1;}
// ---------- Fire scene per chapter (painted backdrop + procedural fire) ----------
const BGDEF={1:{fy:.5,F:[[.32,.5],[.45,.36],[.6,.5],[.52,.64],[.38,.7],[.68,.36],[.27,.32]],P:[[.41,.47],[.57,.4],[.5,.29],[.66,.6]],tint:'20,30,70'},
 2:{fy:.42,F:[[.25,.56],[.45,.52],[.66,.55],[.82,.46],[.36,.34],[.6,.28],[.9,.56]],P:[[.56,.22],[.75,.24],[.38,.26]],tint:'60,20,60'},
 3:{fy:.56,F:[[.2,.6],[.33,.55],[.46,.58],[.58,.56],[.75,.5],[.84,.48],[.27,.48]],P:[[.3,.66],[.5,.66],[.62,.62]],tint:'60,60,90'},
 4:{fy:.56,F:[[.42,.46],[.56,.38],[.68,.5],[.2,.55],[.86,.42],[.49,.62],[.62,.62]],P:[[.43,.6],[.56,.6]],tint:'90,40,10'},
 5:{fy:.42,F:[[.45,.4],[.55,.3],[.5,.55],[.43,.22],[.57,.5],[.47,.66],[.53,.15]],P:[[.44,.48],[.56,.38],[.5,.28]],tint:'10,20,50'}};
window.drawScene=function(c,ch,x,y,w,h,t,fire,o){o=o||{};const d=BGDEF[ch]||BGDEF[1];const im=IMG('img/bg'+ch+'.jpg');c.save();c.translate(x,y);c.beginPath();c.rect(0,0,w,h);c.clip();
 const sc=Math.max(w/1280,h/720)*(o.zoom||1.04),dw=1280*sc,dh=720*sc,ox=(w-dw)/2+Math.sin(t*.07)*(dw-w)*.3,oy=clamp(h/2-d.fy*dh,h-dh,0);
 if(ok(im))c.drawImage(im,ox,oy,dw,dh);else{c.fillStyle='#10131c';c.fillRect(0,0,w,h);}
 const mp=([u,v])=>[ox+u*dw,oy+v*dh];const s=dh*.06*(o.boss?1.3:1);const F=d.F.map(mp),Pp=d.P.map(mp);const gy=h*.93;
 const fr=Math.max(0,fire);const n=fr>0?Math.ceil(F.length*Math.min(1,fr)):0;
 if(n){c.save();c.globalCompositeOperation='multiply';c.fillStyle=`rgba(${d.tint},${.25*Math.min(1,fr)})`;c.fillRect(0,0,w,h);c.restore();
  c.save();c.globalCompositeOperation='lighter';let mx=0,my=0;for(let i=0;i<n;i++){mx+=F[i][0];my+=F[i][1];}mx/=n;my/=n;const fl=.85+.15*Math.sin(t*9)+.08*Math.sin(t*23);
  const g=c.createRadialGradient(mx,my,0,mx,my,Math.max(w,h)*.8);g.addColorStop(0,`rgba(255,120,30,${.42*Math.min(1.2,fr)*fl})`);g.addColorStop(.5,`rgba(255,70,10,${.16*Math.min(1.2,fr)*fl})`);g.addColorStop(1,'rgba(255,60,0,0)');c.fillStyle=g;c.fillRect(0,0,w,h);c.restore();}
 const waiting=o.waiting||0;for(let i=0;i<Math.min(waiting,Pp.length);i++){const [px,py]=Pp[i];c.save();c.fillStyle='rgba(255,190,90,.55)';c.fillRect(px-s*.32,py-s*.75,s*.64,s*.9);c.restore();drawHuman(c,px,py+s*.12,s*.85,{wave:true,t,ph:i+.3,shirt:SHIRTS[i%6]});}
 for(let i=0;i<n;i++)smoke(c,F[i][0],F[i][1],s*.8,t,i*1.3,fr);
 for(let i=0;i<n;i++){const int=clamp(fr*1.15-i/F.length*.35,.35,1.3);flame(c,F[i][0],F[i][1],s,t,i*1.9,int);}
 if(o.steam>0){for(let k=0;k<7;k++){const u=(t*.35+k/7)%1;const r=s*(.8+u*1.6);c.globalAlpha=o.steam*(1-u)*.55;c.fillStyle='#e9eef5';ell(c,w*(.25+k*.08),h*.55-u*h*.5,r,r*.7);c.fill();}c.globalAlpha=1;}
 const resc=o.rescued||0;for(let i=0;i<resc;i++)drawHuman(c,w*(.05+((i*.075)%.42)),gy,h*.2,{cheer:o.cheer,t,ph:i*1.3,shirt:SHIRTS[i%6]});
 if(o.dog)drawDog(c,w*.94,gy,h*.22,t,o.cheer);
 if(!o.noVig){const vg=c.createLinearGradient(0,0,0,h);vg.addColorStop(0,'rgba(0,0,0,.25)');vg.addColorStop(.25,'rgba(0,0,0,0)');vg.addColorStop(.8,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.45)');c.fillStyle=vg;c.fillRect(0,0,w,h);}
 c.restore();return{F:F.map(([a,b])=>[a,b,1]),P:Pp,gy};};
// Blurred chapter backdrop behind the board
const BLUR={};
window.drawBack=function(t,par){if(MODE==='game'&&G){const k=G.ch+'_'+W+'_'+H;let b=BLUR[k];const im=IMG('img/bg'+G.ch+'.jpg');
  if(!b&&ok(im)){b=document.createElement('canvas');b.width=Math.ceil(W/2);b.height=Math.ceil(H/2);const g=b.getContext('2d');const sc=Math.max(b.width/1280,b.height/720)*1.1;g.filter='blur(5px) brightness(.42) saturate(.9)';g.drawImage(im,(b.width-1280*sc)/2,(b.height-720*sc)/2,1280*sc,720*sc);g.filter='none';
   const v=g.createRadialGradient(b.width/2,b.height*.6,b.width*.2,b.width/2,b.height*.6,b.height*.8);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.6)');g.fillStyle=v;g.fillRect(0,0,b.width,b.height);BLUR[k]=b;}
  if(b){cx.drawImage(b,0,0,W,H);return;}}
 cx.fillStyle='#0d1020';cx.fillRect(0,0,W,H);};
// Wet-asphalt board
window.buildBoard=function(){const cs=G.cs,pad=cs*1.3;const w=G.bw+pad*2,h=G.bh+pad*2;const c=document.createElement('canvas');c.width=Math.ceil(w*DPR);c.height=Math.ceil(h*DPR);const g=c.getContext('2d');g.scale(DPR,DPR);const ox=pad,oy=pad,bw=G.bw,bh=G.bh;
 // sidewalk / curb
 g.save();g.shadowColor='rgba(0,0,0,.6)';g.shadowBlur=22;g.shadowOffsetY=10;g.fillStyle='#5b5f68';rr(g,ox-cs*.3,oy-cs*.3,bw+cs*.6,bh+cs*.6,cs*.18);g.fill();g.restore();
 g.fillStyle=lg(g,0,oy-cs*.3,0,oy+bh+cs*.3,['#7d828c','#5d616b']);rr(g,ox-cs*.3,oy-cs*.3,bw+cs*.6,bh+cs*.6,cs*.18);g.fill();
 g.strokeStyle='rgba(0,0,0,.18)';g.lineWidth=1;for(let i=0;i<=Math.ceil((bw+cs*.6)/(cs*.3));i++){const X=ox-cs*.3+i*cs*.3;g.beginPath();g.moveTo(X,oy-cs*.3);g.lineTo(X,oy-cs*.05);g.moveTo(X,oy+bh+cs*.05);g.lineTo(X,oy+bh+cs*.3);g.stroke();}
 g.fillStyle='#a9adb5';rr(g,ox-cs*.07,oy-cs*.07,bw+cs*.14,bh+cs*.14,cs*.1);g.fill();
 // asphalt
 const ag=g.createLinearGradient(0,oy,0,oy+bh);ag.addColorStop(0,'#2a2e36');ag.addColorStop(1,'#1c1f25');g.fillStyle=ag;rr(g,ox,oy,bw,bh,cs*.06);g.fill();
 g.save();rr(g,ox,oy,bw,bh,cs*.06);g.clip();const R=seeded(7);
 for(let i=0;i<G.L.w*G.L.h*40;i++){const v=R();g.fillStyle=v<.5?'rgba(255,255,255,.035)':'rgba(0,0,0,.12)';g.fillRect(ox+R()*bw,oy+R()*bh,1+R()*1.4,1+R()*1.4);}
 // puddles (wet sheen reflecting the sky)
 for(let i=0;i<Math.max(3,G.L.w*G.L.h/5);i++){const px=ox+R()*bw,py=oy+R()*bh,r=cs*(.35+R()*.6);g.save();g.translate(px,py);g.scale(1.6,.7);const pg=g.createRadialGradient(0,0,0,0,0,r);pg.addColorStop(0,'rgba(120,150,190,.16)');pg.addColorStop(.7,'rgba(90,110,150,.08)');pg.addColorStop(1,'rgba(90,110,150,0)');g.fillStyle=pg;g.beginPath();g.arc(0,0,r,0,TAU);g.fill();g.restore();}
 // lane markings (worn)
 g.strokeStyle='rgba(235,235,225,.16)';g.lineWidth=Math.max(1.5,cs*.035);g.setLineDash([cs*.22,cs*.2]);for(let i=1;i<G.L.w;i++){g.beginPath();g.moveTo(ox+i*cs,oy+cs*.1);g.lineTo(ox+i*cs,oy+bh-cs*.1);g.stroke();}for(let j=1;j<G.L.h;j++){g.beginPath();g.moveTo(ox+cs*.1,oy+j*cs);g.lineTo(ox+bw-cs*.1,oy+j*cs);g.stroke();}g.setLineDash([]);
 g.fillStyle='rgba(255,255,255,.07)';for(let j=0;j<G.L.h;j++)for(let i=0;i<G.L.w;i++){if((i+j)%2)g.fillRect(ox+i*cs+2,oy+j*cs+2,cs-4,cs-4);}
 g.restore();
 // street lamps: warm pools + streak reflections
 [[ox-cs*.18,oy-cs*.18],[ox+bw+cs*.18,oy-cs*.18],[ox-cs*.18,oy+bh+cs*.18],[ox+bw+cs*.18,oy+bh+cs*.18]].forEach(([x,y])=>{g.save();g.globalCompositeOperation='lighter';const gr=g.createRadialGradient(x,y,0,x,y,cs*2);gr.addColorStop(0,'rgba(255,200,120,.32)');gr.addColorStop(.5,'rgba(255,170,90,.1)');gr.addColorStop(1,'rgba(255,170,90,0)');g.fillStyle=gr;g.fillRect(x-cs*2,y-cs*2,cs*4,cs*4);
  const sg=g.createLinearGradient(x,y,x,y+(y<oy?1:-1)*cs*1.4);sg.addColorStop(0,'rgba(255,210,140,.22)');sg.addColorStop(1,'rgba(255,210,140,0)');g.fillStyle=sg;g.fillRect(x-cs*.08,Math.min(y,y+(y<oy?1:-1)*cs*1.4),cs*.16,cs*1.4);g.restore();
  g.fillStyle='#2a2d33';ell(g,x,y,cs*.11,cs*.11);g.fill();g.fillStyle='#fff3cf';ell(g,x,y,cs*.06,cs*.06);g.fill();});
 for(const k in G.st.turn){const [x,y]=k.split(',').map(Number);g.save();g.globalAlpha=.85;drawTurn(g,ox+(x+.5)*cs,oy+(y+.5)*cs,cs,G.st.turn[k]);g.restore();}
 BOARD={c,ox:G.bx-ox,oy:G.by-oy,w,h};};
// Title/map backdrop
window.drawTitleScene=function(){const im=IMG('img/title.jpg');cx.fillStyle='#0b0e18';cx.fillRect(0,0,W,H);if(!ok(im))return;const z=1.06+Math.sin(TT*.08)*.04;const sc=Math.max(W/720,H/1280)*z;const dw=720*sc,dh=1280*sc;
 cx.drawImage(im,(W-dw)/2+Math.sin(TT*.05)*8,(H-dh)/2,dw,dh);
 if(MODE==='map'||MODE==='card'){cx.fillStyle='rgba(6,8,18,.62)';cx.fillRect(0,0,W,H);}
 if(!LOW()&&Math.random()<.25)embers(Math.random()*W,H*.8,1);};
// ---------- Layout: slightly taller fire scene ----------
window.sceneRect=function(){const top=58;const h=Math.round(clamp(H*.23,118,200));return{x:0,y:top,w:W,h};};
// ---------- Board render with sprite vehicles ----------
window.renderBoard=function(){const cs=G.cs,t=G.t;cx.drawImage(BOARD.c,BOARD.ox,BOARD.oy,BOARD.w,BOARD.h);
 G.st.sw.forEach(s=>drawSwitch(cx,...cellXY(s.x,s.y),cs,G.gateA>0,t));
 const items=[];G.st.hyd.forEach((h,i)=>{if(!G.hydVis[i].gone)items.push({y:h.y,f:()=>drawHydrant(cx,...cellXY(h.x,h.y),cs,t)});});
 G.st.gates.forEach(g=>items.push({y:g.y,f:()=>drawGate(cx,...cellXY(g.x,g.y),cs,G.gateA,t)}));
 G.st.blk.forEach(b=>{if(b.sub==='#'){const car=G.cars[b.x+','+b.y];if(car&&!car.done)items.push({y:car.py,f:()=>drawCivCar(cx,...cellXY(car.px,car.py),cs,car.ang,car.col,{j:G.blkJ[b.x+','+b.y]||0})});}
  else if(!b.gone){const j=G.blkJ[b.x+','+b.y]||0;items.push({y:b.y,f:()=>(b.sub==='x'?drawBarrier:drawCone)(cx,...cellXY(b.x,b.y),cs,j)});}});
 const arrows=[];
 Object.values(G.vv).forEach(vv=>{if(vv.done||vv.scale<=0)return;const [x,y]=cellXY(vv.px,vv.py);const hint=G.hint&&G.hint.id===vv.v.id;
  if(!vv.segs.length&&vv.scale>=1)arrows.push([x,y,vv.v.d,hint]);
  items.push({y:vv.py,f:()=>drawVeh(cx,x,y,cs*vv.scale,vv.v.type,vv.ang,{t,siren:vv.siren,lights:vv.siren,sq:vv.sq,wob:vv.wob,ph:vv.v.id*.5})});});
 // direction chevrons on the asphalt (under vehicles)
 arrows.forEach(([x,y,d,h])=>{const [dx,dy]=FL.DIRS[d];cx.save();cx.translate(x+dx*cs*.47,y+dy*cs*.47);cx.rotate(ANG[d]);cx.fillStyle=h?'#ffe14a':'rgba(255,255,255,.8)';cx.shadowColor='rgba(0,0,0,.6)';cx.shadowBlur=3;
  cx.beginPath();cx.moveTo(cs*.1,0);cx.lineTo(-cs*.05,-cs*.09);cx.lineTo(-cs*.02,0);cx.lineTo(-cs*.05,cs*.09);cx.closePath();cx.fill();cx.restore();});
 cx.save();cx.beginPath();cx.rect(G.bx-cs*1.3,G.by-cs*1.6,G.bw+cs*2.6,G.bh+cs*2.9);cx.clip();items.sort((a,b)=>a.y-b.y).forEach(i=>i.f());cx.restore();
 if(G.hint)drawHint();drawImpacts();drawTut();};
window.drawHint=function(){const v=G.st.veh[G.hint.id];if(!v||v.gone){G.hint=null;return;}const [x,y]=cellXY(v.x,v.y);const t=G.hint.t,p=.5+.5*Math.sin(t*6),cs=G.cs;cx.save();
 // glowing pulsing outline
 cx.strokeStyle=`rgba(255,225,70,${.6+p*.4})`;cx.lineWidth=Math.max(3,cs*.07);cx.shadowColor='#ffd23f';cx.shadowBlur=14+p*10;const r=cs*(.56+p*.06);rr(cx,x-r,y-r,r*2,r*2,cs*.22);cx.stroke();
 // expanding ripple
 const u=(t%1.1)/1.1;cx.shadowBlur=0;cx.strokeStyle=`rgba(255,240,160,${(1-u)*.8})`;cx.lineWidth=2;const r2=r*(1+u*.5);rr(cx,x-r2,y-r2,r2*2,r2*2,cs*.25);cx.stroke();
 // big bouncing arrow in the exit direction
 const [dx,dy]=FL.DIRS[v.d];const off=cs*(.95+.18*Math.abs(Math.sin(t*5)));cx.translate(x+dx*off,y+dy*off);cx.rotate(Math.atan2(dy,dx));const a=cs*.36;
 cx.fillStyle='#ffd23f';cx.strokeStyle='rgba(90,50,0,.9)';cx.lineWidth=Math.max(2,cs*.04);cx.shadowColor='rgba(0,0,0,.45)';cx.shadowBlur=6;
 cx.beginPath();cx.moveTo(a,0);cx.lineTo(0,-a*.75);cx.lineTo(0,-a*.32);cx.lineTo(-a*.8,-a*.32);cx.lineTo(-a*.8,a*.32);cx.lineTo(0,a*.32);cx.lineTo(0,a*.75);cx.closePath();cx.fill();cx.shadowBlur=0;cx.stroke();cx.restore();};
window.drawHand=function(){};
// ---------- Pointing hand ----------
function hand(c,x,y,s,t){const u=(t%1.2)/1.2;const press=u<.25?u/.25:u<.45?1-(u-.25)/.2:0;c.save();c.globalAlpha=.7*(1-u);c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(x,y,s*.25*(1+u*1.4),0,TAU);c.stroke();c.restore();
 c.save();c.translate(x+s*.12,y+s*.1+(1-press)*s*.18);c.rotate(-.35);c.shadowColor='rgba(0,0,0,.5)';c.shadowBlur=8;c.shadowOffsetY=4;c.fillStyle='#fff';c.strokeStyle='#33363d';c.lineWidth=Math.max(1.5,s*.03);
 rr(c,-s*.07,-s*.02,s*.14,s*.42,s*.07);c.fill();c.stroke();rr(c,-s*.2,s*.18,s*.42,s*.42,s*.14);c.fill();c.stroke();c.shadowColor='transparent';
 [[.03,.2],[.12,.22],[-.13,.26]].forEach(([fx,fy])=>{c.beginPath();c.moveTo(s*fx,s*fy);c.lineTo(s*fx,s*(fy+.1));c.stroke();});c.restore();}
// ---------- Tutorial (levels 1-3) ----------
function tutTargetRect(st){if(st.target==='veh'||st.target==='blocked'){const v=st.veh;if(!v)return null;const [x,y]=cellXY(v.x,v.y);return{x:x-G.cs*.62,y:y-G.cs*.7,w:G.cs*1.24,h:G.cs*1.24,cx:x,cy:y,board:true};}
 const el=$(st.target==='hearts'?'hearts':'fireHud');if(!el)return null;const r=el.getBoundingClientRect();return{x:r.left-6,y:r.top-6,w:r.width+12,h:r.height+12,cx:r.left+r.width/2,cy:r.top+r.height/2};}
function tutSteps(i){if(i===0)return[{k:'tu1',target:'veh',lock:true},{k:'tu3',target:'hearts',tap:true},{k:'tu4',target:'fire',tap:true},{k:'tu2',target:'veh',lock:true}];
 if(i===1)return[{k:'tu5',target:'blocked',tap:true},{k:'tu2',target:'veh',lock:true}];
 if(i===2)return[{k:'tu6',target:null,tap:true}];return[];}
function tutStart(){if(!G||G.i>2||window.__ft&&window.__ft.noTut||/notut/.test(location.search)){V2.tut=null;return false;}V2.tut={steps:tutSteps(G.i),i:-1,wait:0};tutNext();return true;}
function tutNext(){const tu=V2.tut;if(!tu)return;tu.i++;const st=tu.steps[tu.i];const b=$('tutb');if(!st){V2.tut=null;b.classList.remove('on');return;}
 if(st.target==='veh'){const f=FL.free(G.st)[0];if(!f){V2.tut=null;b.classList.remove('on');return;}st.veh=f;}
 if(st.target==='blocked'){const bl=G.st.veh.find(v=>!v.gone&&!FL.trace(G.st,v).ok);if(!bl){tutNext();return;}st.veh=bl;}
 st.t=0;b.innerHTML=`<div>${T(st.k)}</div>${st.tap?`<small>${T('tapGo')}</small>`:''}`;b.classList.add('on');tutPlace();}
function tutPlace(){const tu=V2.tut,b=$('tutb');if(!tu)return;const st=tu.steps[tu.i];if(!st)return;const r=st.target?tutTargetRect(st):null;
 const bh=b.offsetHeight||70;let top;if(!r)top=H*.42;else if(r.cy>H*.5)top=r.y-bh-18;else top=r.y+r.h+18;b.style.top=clamp(top,64,H-bh-90)+'px';}
function drawTut(){const tu=V2.tut;if(!tu||MODE!=='game')return;const st=tu.steps[tu.i];if(!st)return;st.t+=DT;const r=st.target?tutTargetRect(st):null;
 cx.save();cx.fillStyle='rgba(4,6,14,.62)';cx.beginPath();cx.rect(0,0,W,H);if(r){rr(cx,r.x,r.y,r.w,r.h,Math.min(r.w,r.h)*.3);}cx.fill('evenodd');
 if(r){const p=.5+.5*Math.sin(st.t*5);cx.strokeStyle=`rgba(255,215,70,${.6+p*.4})`;cx.lineWidth=3;cx.shadowColor='#ffcf3a';cx.shadowBlur=14;rr(cx,r.x,r.y,r.w,r.h,Math.min(r.w,r.h)*.3);cx.stroke();cx.shadowBlur=0;
  hand(cx,r.cx,r.board?r.cy:r.cy+r.h*.3,Math.max(50,(G.cs||60)*1.0),st.t);}
 cx.restore();if(Math.floor(st.t*10)%10===0)tutPlace();}
const _tap=window.tapCell;
window.tapCell=function(x,y){const tu=V2.tut;if(tu&&G&&G.state==='play'){const st=tu.steps[tu.i];if(st){if(st.tap)return'tut';if(st.lock&&st.veh&&(st.veh.x!==x||st.veh.y!==y)){AU.tone(220,.08,'triangle',.15);return'locked';}}}
 if(V2.paused)return'paused';const r=_tap(x,y);if(tu&&r==='go'){const st=tu.steps[tu.i];if(st&&st.lock){$('tutb').classList.remove('on');tu.steps[tu.i]=null;tu.wait=1;}}return r;};
cv.addEventListener('pointerdown',()=>{const tu=V2.tut;if(!tu||MODE!=='game')return;const st=tu.steps[tu.i];if(st&&st.tap&&st.t>.35){AU.click();tutNext();}});
// ---------- Tip cards for new mechanics ----------
const TIPCARD={tCone:1,tTurn:1,tHydrant:1,tGate:1,tTow:1,tSave:1};
window.showTips=function(){const L=G.L;V2.tut=null;$('tutb').classList.remove('on');
 if(tutStart())return;
 const k=L.tip;if(!k)return;if(k==='tBoss'){G.tips=['tBoss'];nextTip(.6);return;}
 if(TIPCARD[k]&&!SAVE.seen[k]&&!(window.__ft&&window.__ft.noTut)){SAVE.seen[k]=1;persist();tipCard(k);return;}
 if(!SAVE.seen[k]){SAVE.seen[k]=1;persist();G.tips=[k];nextTip(.6);}};
function tipCard(k){V2.paused=true;const p=$('pop');p.style.display='flex';p.innerHTML=`<div class="card tipc"><div class="newb">${T('tipNew')}</div><canvas id="tcv" width="480" height="240"></canvas><p>${T(k)}</p><button class="btn green" id="tOk">${T('gotIt')}</button></div>`;
 const cv2=$('tcv');demoLoop(cv2,(g,t)=>demoTip(g,k,t));$('tOk').onclick=()=>{AU.click();p.style.display='none';V2.paused=false;};}
// ---------- Mini demo illustrations (how-to + tip cards) ----------
function demoLoop(cv2,f){const g=cv2.getContext('2d');const t0=performance.now();(function a(){if(!document.body.contains(cv2))return;const t=(performance.now()-t0)/1000;g.setTransform(2,0,0,2,0,0);g.clearRect(0,0,cv2.width/2,cv2.height/2);f(g,t);requestAnimationFrame(a);})();}
function demoRoad(g,w,h,cs){g.fillStyle='#22262d';rr(g,0,0,w,h,14);g.fill();g.strokeStyle='rgba(255,255,255,.14)';g.setLineDash([cs*.2,cs*.2]);g.lineWidth=2;for(let x=cs;x<w;x+=cs){g.beginPath();g.moveTo(x,6);g.lineTo(x,h-6);g.stroke();}for(let y=cs;y<h;y+=cs){g.beginPath();g.moveTo(6,y);g.lineTo(w-6,y);g.stroke();}g.setLineDash([]);}
function demoTip(g,k,t){const w=240,h=120,cs=40;demoRoad(g,w,h,cs);const y=h/2+cs*.5;
 if(k==='tHydrant'){const u=(t%3)/3;const vx=lerp(30,w+40,E.io(Math.min(1,u*1.4)));if(vx<120)drawHydrant(g,120,y,cs,t);else if(u<.6){for(let i=0;i<5;i++){g.fillStyle='rgba(150,215,255,.9)';ell(g,120+Math.sin(i*2+t*9)*10,y-10-((t*80+i*13)%30),2,2);g.fill();}}drawVeh(g,vx,y,cs,'E',0,{t,siren:true});}
 else if(k==='tGate'){const u=(t%3.5)/3.5;const vx=lerp(20,w+40,E.io(Math.min(1,u*1.3)));const open=vx>90?1:0;drawSwitch(g,80,y,cs,open,t);drawGate(g,170,y,cs,open?Math.min(1,(vx-90)/30):0,t);drawVeh(g,vx,y,cs,'V',0,{t,siren:true});}
 else if(k==='tTow'){const u=(t%4)/4;let vx,car=150;if(u<.35)vx=lerp(30,110,E.io(u/.35));else if(u<.45)vx=110;else{vx=lerp(110,-60,E.io((u-.45)/.55));car=vx+40;}drawCivCar(g,car,y,cs,0,CIV[1]);drawVeh(g,vx,y,cs,'W',0,{t,siren:true});}
 else if(k==='tTurn'){drawTurn(g,120,y,cs,'U');const u=(t%3)/3;let x,yy,a;if(u<.45){x=lerp(20,120,u/.45);yy=y;a=0;}else{x=120;yy=lerp(y,-40,(u-.45)/.55);a=-Math.PI/2;}drawVeh(g,x,yy,cs,'E',a,{t,siren:true});}
 else if(k==='tCone'){drawCone(g,90,y,cs,0);drawBarrier(g,140,y,cs,0);drawCivCar(g,190,y,cs,0,CIV[0]);drawCone(g,50,y-cs,cs,0);}
 else if(k==='tSave'){drawScene(g,1,0,0,w,h,t,.6,{waiting:3,noVig:true});drawVeh(g,60,h*.86,cs*1.3,'K',0,{t,siren:true,lights:true,cone:false});drawVeh(g,170,h*.88,cs*1.2,'A',Math.PI,{t,siren:true,cone:false});}}
function demoHow(g,n,t){const w=240,h=120,cs=40;const y=h/2+cs*.5;
 if(n===1){demoRoad(g,w,h,cs);const u=(t%3)/3;const vx=u<.3?60:lerp(60,w+60,E.in((u-.3)/.7));drawVeh(g,vx,y,cs,'E',0,{t,siren:u>.3,lights:u>.3});drawCivCar(g,140,y-cs,cs,Math.PI/2,CIV[2]);if(u<.3)hand(g,60,y,48,u*3);}
 else if(n===2){demoRoad(g,w,h,cs);const u=(t%2.4)/2.4;const f=u<.2?E.in(u/.2)*14:14*Math.exp(-(u-.2)*10)*Math.cos((u-.2)*30);drawCivCar(g,140,y,cs,0,CIV[0]);drawVeh(g,90+f,y,cs,'K',0,{t,siren:true});
  if(u>.2&&u<.7){g.fillStyle='#ff3b30';g.font='900 26px sans-serif';g.textAlign='center';g.fillText('!',115,y-cs*.8);g.fillStyle='#fff';g.font='900 15px sans-serif';g.fillText('−1 ♥',190,30);}}
 else if(n===3){const fr=.9-((t*.25)%1)*.8;drawScene(g,2,0,0,w,h,t,fr,{waiting:2,noVig:true});drawVeh(g,50,h*.86,cs*1.2,'T',0,{t,siren:true,cone:false});drawVeh(g,190,h*.88,cs*1.1,'A',Math.PI,{t,siren:true,cone:false});
  g.fillStyle='rgba(10,14,34,.8)';rr(g,70,6,100,14,7);g.fill();g.fillStyle=fr>.5?'#ff7a1e':'#ffc83a';rr(g,74,10,92*fr,6,3);g.fill();}
 else{demoRoad(g,w,h,cs);drawHydrant(g,30,y-cs*.2,cs,t);drawSwitch(g,85,y-cs*.2,cs,false,t);drawGate(g,130,y-cs*.2,cs,(Math.sin(t*2)+1)/2,t);drawTurn(g,215,y-cs*.2,cs,'U');drawVeh(g,175,y-cs*.1,cs,'W',Math.PI/2,{t,siren:true});}}
window.howTo=function(back){const p=$('pop');p.style.display='flex';const wasP=V2.paused;V2.paused=true;
 p.innerHTML=`<div class="card how"><h2>${T('howto')}</h2>${[1,2,3,4].map(n=>`<div class="hstep"><canvas class="hcv" data-n="${n}" width="480" height="240"></canvas><div class="ht"><b>${n}</b>${T('h'+n)}</div></div>`).join('')}<button class="btn green" id="hOk">${T('gotIt')}</button></div>`;
 p.querySelectorAll('.hcv').forEach(c=>demoLoop(c,(g,t)=>demoHow(g,+c.dataset.n,t)));
 $('hOk').onclick=()=>{AU.click();p.style.display='none';V2.paused=wasP;if(back)back();};};
// ---------- Pause menu ----------
window.pauseMenu=function(){if(!G)return;V2.paused=true;const p=$('pop');p.style.display='flex';
 p.innerHTML=`<div class="card"><h2>${T('pause')}</h2><button class="btn green" id="qRes">${T('resume')}</button><button class="btn blue" id="qHow">${T('howto')}</button><div class="row"><button class="btn gold" id="qRe">${T('restart')}</button><button class="btn gold" id="qMap">${T('map')}</button></div><button class="btn blue" id="qSet">${T('settings')}</button></div>`;
 const on=(id,f)=>{$(id).onclick=()=>{AU.click();f();};};
 on('qRes',()=>{p.style.display='none';V2.paused=false;});on('qHow',()=>howTo(pauseMenu));on('qRe',()=>{p.style.display='none';V2.paused=false;startLevel(G.i,true);});on('qMap',()=>{p.style.display='none';V2.paused=false;showMap();});on('qSet',()=>settings());};
$('bHome').onclick=()=>{AU.click();pauseMenu();};$('bHome').innerHTML='<svg viewBox="0 0 24 24"><use href="#i-pause"/></svg>';$('bHome').setAttribute('aria-label','pause');
// ---------- Settings: graphics quality ----------
const _settings=window.settings;
window.settings=function(){_settings();const card=$('pop').querySelector('.card');if(!card)return;const cr=card.querySelector('.cred');const d=document.createElement('div');d.className='set';
 d.innerHTML=`${T('gfx')}<select id="sGfx"><option value="auto">${T('auto')}</option><option value="high">${T('high')}</option><option value="low">${T('low')}</option></select>`;card.insertBefore(d,cr);const s=$('sGfx');s.value=SAVE.gfx;
 s.onchange=()=>{SAVE.gfx=s.value;V2.lowAuto=false;V2.fpsBad=0;persist();applyGfx();};
 const cl=$('sClose');if(cl&&MODE==='game'){cl.onclick=()=>{AU.click();pauseMenu();};}};
function applyGfx(){const cap=LOW()?1.5:3;const want=Math.min(window.devicePixelRatio||1,cap);if(Math.abs(want-DPR)>.01){DPR=want;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);buildBG();buildSkyline();if(G)layout();for(const k in BLUR)delete BLUR[k];}}
addEventListener('resize',()=>setTimeout(applyGfx,0));
// ---------- Map / title: how-to button ----------
const _showMap=window.showMap;window.showMap=function(){V2.paused=false;V2.tut=null;$('tutb').classList.remove('on');_showMap();const h=$('map').querySelector('.mhead');if(h&&!$('mHow')){const b=document.createElement('button');b.className='rb blue';b.id='mHow';b.setAttribute('aria-label','how to play');b.innerHTML='<svg viewBox="0 0 24 24"><use href="#i-help"/></svg>';h.insertBefore(b,$('mSet'));b.onclick=()=>{AU.click();howTo();};}};
const _showTitle=window.showTitle;window.showTitle=function(){V2.paused=false;V2.tut=null;$('tutb').classList.remove('on');_showTitle();const t=$('title');const b=document.createElement('button');b.className='rb blue corner left';b.id='tHow';b.innerHTML='<svg viewBox="0 0 24 24"><use href="#i-help"/></svg>';t.appendChild(b);b.onclick=()=>{AU.click();howTo();};};
// ---------- Update wrapper: pause + FPS governor ----------
const _upd=window.update;
window.update=function(dt){if(V2.paused&&MODE==='game'){TT+=dt;DT=dt;return;}_upd(dt);
 if(MODE==='game'&&dt>0){V2.fpsAcc+=dt;V2.fpsN++;if(V2.fpsAcc>=2){V2.fps=V2.fpsN/V2.fpsAcc;V2.fpsAcc=0;V2.fpsN=0;if(SAVE.gfx==='auto'&&!V2.lowAuto){if(V2.fps<45){if(++V2.fpsBad>=2){V2.lowAuto=true;applyGfx();toast(T('gfxLow'));LOG('auto low gfx, fps',V2.fps.toFixed(1));}}else V2.fpsBad=0;}}}
 if(MODE==='story')seqUpd(dt);};
window.drawParts=function(c){for(const p of parts){if(p.delay>0)continue;const u=p.life/p.max;c.save();c.globalAlpha=p.kind==='conf'?Math.min(1,(1-u)*3):1-u;c.fillStyle=p.col;
 if(p.kind==='rain'){c.globalAlpha=.6;c.strokeStyle=p.col;c.lineWidth=1;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(p.x-p.vx*.02,p.y-p.vy*.02);c.stroke();}
 else if(p.kind==='puff'){ell(c,p.x,p.y,p.r*(1+u),p.r*(1+u)*.8);c.fill();}
 else if(p.kind==='star'){c.translate(p.x,p.y);c.rotate((p.rot||0)+u*4);c.beginPath();for(let k=0;k<10;k++){const r=k%2?p.r*.45:p.r;c.lineTo(Math.cos(k*Math.PI/5)*r,Math.sin(k*Math.PI/5)*r);}c.fill();}
 else if(p.kind==='drop'||p.kind==='ember'){if(p.kind==='ember')c.globalCompositeOperation='lighter';ell(c,p.x,p.y,p.r,p.r);c.fill();}
 else{c.translate(p.x,p.y);c.rotate(p.rot||0);c.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);}c.restore();}};
// ---------- Cinematic story engine ----------
// shot: {im, cap:[keys], d, kb:[cx0,cy0,z0,cx1,cy1,z1], fx, sfx:[[t,fn]]}
const KB=(a,b,c,d,e,f)=>[a,b,c,d,e,f];
const SEQS={
 intro:[{im:'i1',cap:['s1'],d:5.2,kb:KB(.5,.62,1.25,.5,.5,1.05),fx:'fireflies',sfx:[[.3,()=>AU.tone(392,1.4,'sine',.07)]]},
  {im:'i2',cap:['s2'],d:5.2,kb:KB(.5,.35,1.0,.5,.45,1.3),fx:'embers',sfx:[[.5,()=>AU.crash()]]},
  {im:'i3',cap:['s3'],d:4.8,kb:KB(.35,.55,1.35,.5,.5,1.08),fx:'embers',sfx:[[.4,()=>AU.ring()]]},
  {im:'i4',cap:['s4'],d:5.2,kb:KB(.5,.4,1.05,.55,.62,1.35),fx:'alarm',sfx:[[.2,()=>AU.bell(2)],[2.6,()=>AU.siren(2.4,-.6,.6)]]},
  {im:'i5',cap:['s5'],d:5.4,kb:KB(.5,.6,1.3,.5,.5,1.02),fx:'rain',sfx:[[.3,()=>AU.horn(-.4)],[1.4,()=>AU.horn(.4)],[2.8,()=>AU.siren(2,0,0)]]}],
 c1:[{im:'c1',cap:['c1a'],d:4.6,kb:KB(.5,.4,1.0,.5,.45,1.12),fx:'embers',title:1},{im:'c1',cap:['c1b'],d:4.2,kb:KB(.35,.7,1.5,.45,.62,1.3),fx:'embers'},{im:'c1',cap:['c1c'],d:4.2,kb:KB(.7,.5,1.3,.5,.55,1.05),fx:'embers'}],
 c2:[{im:'c2',cap:['c2a'],d:4.6,kb:KB(.5,.45,1.0,.5,.4,1.12),fx:'lanterns',title:2},{im:'c2',cap:['c2b'],d:4.2,kb:KB(.3,.55,1.45,.5,.55,1.25),fx:'embers'},{im:'c2',cap:['c2c'],d:4.2,kb:KB(.65,.65,1.35,.5,.6,1.05),fx:'embers'}],
 c3:[{im:'c3',cap:['c3a'],d:4.6,kb:KB(.5,.35,1.12,.5,.48,1.0),fx:'fog',title:3},{im:'c3',cap:['c3b'],d:4.2,kb:KB(.3,.65,1.45,.42,.6,1.25),fx:'sparks'},{im:'c3',cap:['c3c'],d:4.2,kb:KB(.6,.3,1.35,.5,.42,1.08),fx:'fog'}],
 c4:[{im:'c4',cap:['c4a'],d:4.6,kb:KB(.5,.3,1.1,.5,.45,1.0),fx:'ash',title:4},{im:'c4',cap:['c4b'],d:4.2,kb:KB(.45,.65,1.5,.5,.6,1.25),fx:'ash'},{im:'c4',cap:['c4c'],d:4.2,kb:KB(.65,.75,1.3,.5,.6,1.05),fx:'embers'}],
 c5:[{im:'c5',cap:['c5a'],d:4.6,kb:KB(.5,.75,1.2,.5,.3,1.05),fx:'rain',title:5,sfx:[[.5,()=>AU.tone(70,1.6,'sawtooth',.06)]]},{im:'c5',cap:['c5b'],d:4.2,kb:KB(.45,.55,1.45,.5,.35,1.3),fx:'rain'},{im:'c5',cap:['c5c'],d:4.2,kb:KB(.5,.5,1.05,.5,.5,1.2),fx:'rain',sfx:[[.3,()=>AU.siren(2.4,0,0)]]}],
 b1:[{im:'b1',cap:['b1'],d:5.2,kb:KB(.5,.5,1.25,.5,.45,1.05),fx:'sparkle'}],
 b2:[{im:'b2',cap:['b2'],d:5.2,kb:KB(.5,.45,1.05,.5,.5,1.25),fx:'sparkle'}],
 b3:[{im:'b3',cap:['b3'],d:5.2,kb:KB(.5,.55,1.25,.5,.45,1.05),fx:'sparkle'}],
 b4:[{im:'b4',cap:['b4'],d:5.2,kb:KB(.5,.5,1.3,.5,.5,1.05),fx:'fireflies'}],
 ending:[{im:'e1',cap:['e1'],d:5.6,kb:KB(.5,.35,1.2,.5,.55,1.0),fx:'dawn',sfx:[[.2,()=>AU.win()]]},{im:'e2',cap:['e2'],d:5.6,kb:KB(.5,.6,1.3,.5,.45,1.05),fx:'confetti',sfx:[[.6,()=>AU.star(0)],[1,()=>AU.star(1)],[1.4,()=>AU.star(2)]]},{im:'e3',cap:['e3'],d:5.6,kb:KB(.5,.45,1.05,.5,.5,1.3),fx:'sparkle'},{credits:true,d:1e9}]};
const SQ=window.SQ={seq:null,name:'',i:0,t:0,done:null,cue:{},prev:null};
function preloadSeq(n){(SEQS[n]||[]).forEach(s=>s.im&&IMG('img/'+s.im+'.jpg'));}
window.playSeq=function(name,done){const seq=SEQS[name];if(!seq){done&&done();return;}AU.init();preloadSeq(name);Object.assign(SQ,{seq,name,i:0,t:0,done,cue:{},prev:null});parts.length=0;
 $('pop').style.display='none';$('credits').style.display='none';setMode('story');$('bSkip').style.display='';setCap(seq[0]);LOG('seq',name);};
function setCap(s){const c=$('cap');if(!s||s.credits){c.classList.remove('on');return;}c.textContent=s.cap.map(T).join(' ');c.classList.add('on');if(window.TTS)TTS.say(c.textContent);c.classList.remove('in');void c.offsetWidth;c.classList.add('in');}
function seqFinish(){if(!SQ.seq)return;if(window.TTS)TTS.stop();const d=SQ.done;SQ.seq=null;$('credits').style.display='none';if(AU.ac)AU.setRoar(0);d?d():showMap();}
function seqUpd(dt){if(!SQ.seq)return;SQ.t+=dt;const s=SQ.seq[SQ.i];if(s.credits){if(!SQ.cue.cr){SQ.cue.cr=1;showCredits();}return;}
 (s.sfx||[]).forEach((f,j)=>{const k=SQ.i+'_'+j;if(!SQ.cue[k]&&SQ.t>=f[0]){SQ.cue[k]=1;try{f[1]();}catch(e){}}});
 if(SQ.t>=s.d&&!SQ.tap&&window.TTS&&TTS.busy()&&SQ.t<s.d+6)return;
 if(SQ.t>=s.d){SQ.tap=0;SQ.prev={s,t:SQ.t};SQ.i++;SQ.t=0;if(SQ.i>=SQ.seq.length){seqFinish();return;}setCap(SQ.seq[SQ.i]);}
 const fx=s.fx;if(LOW()&&Math.random()<.5)return;
 if(fx==='embers'&&Math.random()<.5)P({x:Math.random()*W,y:H+10,vx:(Math.random()-.3)*40,vy:-60-Math.random()*80,r:1+Math.random()*2,max:3,col:Math.random()<.5?'#ffcf5a':'#ff7a2a',kind:'ember',g:-6});
 else if(fx==='fireflies'&&Math.random()<.08)P({x:Math.random()*W,y:H*(.3+Math.random()*.5),vx:(Math.random()-.5)*14,vy:(Math.random()-.5)*10,r:1.6,max:3,col:'#fff2a0',kind:'ember',g:0});
 else if(fx==='rain')for(let k=0;k<3;k++)P({x:Math.random()*W*1.2,y:-10,vx:-120,vy:900,r:1,max:.9,col:'rgba(190,210,255,.55)',kind:'rain'});
 else if(fx==='ash'&&Math.random()<.5)P({x:Math.random()*W,y:-5,vx:20+Math.random()*30,vy:30+Math.random()*30,r:1+Math.random()*1.5,max:5,col:Math.random()<.3?'#ff9a3a':'rgba(200,190,180,.7)',kind:'ember',g:0});
 else if(fx==='lanterns'&&Math.random()<.04)P({x:Math.random()*W,y:H+10,vx:(Math.random()-.5)*10,vy:-30,r:3,max:6,col:'#ffb04a',kind:'ember',g:-2});
 else if(fx==='sparks'&&Math.random()<.3)P({x:W*(.3+Math.random()*.4),y:H*.55,vx:(Math.random()-.5)*160,vy:-120-Math.random()*100,r:1.2,max:1,col:'#ffe08a',kind:'ember',g:300});
 else if(fx==='sparkle'&&Math.random()<.12)sparkle(Math.random()*W,H*(.2+Math.random()*.5),2,['#fff','#ffd23f','#ffe9b0']);
 else if(fx==='confetti'&&Math.random()<.02&&SQ.t<2)confetti();
 else if(fx==='dawn'&&Math.random()<.06)P({x:Math.random()*W,y:H*(.2+Math.random()*.5),vx:6,vy:-4,r:1.4,max:3,col:'rgba(255,240,200,.8)',kind:'ember',g:0});}
function drawShot(s,lt,alpha){if(!s||s.credits)return;const im=IMG('img/'+s.im+'.jpg');if(!ok(im))return;const u=E.io(clamp(lt/s.d,0,1));const k=s.kb;
 const cxn=lerp(k[0],k[3],u),cyn=lerp(k[1],k[4],u),z=lerp(k[2],k[5],u);const iw=im.naturalWidth,ih=im.naturalHeight;const sc=Math.max(W/iw,H/ih)*z;const dw=iw*sc,dh=ih*sc;
 const x=clamp(W/2-cxn*dw,W-dw,0),y=clamp(H/2-cyn*dh,H-dh,0);cx.save();cx.globalAlpha=alpha;cx.drawImage(im,x,y,dw,dh);cx.restore();}
window.drawStory=function(){if(!SQ.seq){cx.fillStyle='#000';cx.fillRect(0,0,W,H);return;}const s=SQ.seq[SQ.i];cx.fillStyle='#000';cx.fillRect(0,0,W,H);
 if(s.credits){drawShot(SQ.seq[SQ.i-1],SQ.seq[SQ.i-1].d,1);cx.fillStyle='rgba(0,0,0,.72)';cx.fillRect(0,0,W,H);return;}
 const fadeIn=clamp(SQ.t/.7,0,1);if(SQ.prev&&fadeIn<1)drawShot(SQ.prev.s,SQ.prev.t,1);else if(!SQ.prev&&fadeIn<1){}
 drawShot(s,SQ.t,SQ.prev?fadeIn:fadeIn);
 const last=SQ.i===SQ.seq.length-1||(SQ.seq[SQ.i+1]&&SQ.seq[SQ.i+1].credits);if(last&&!SQ.seq[SQ.i+1]){const fo=clamp((s.d-SQ.t)/.6,0,1);if(fo<1){cx.fillStyle=`rgba(0,0,0,${1-fo})`;cx.fillRect(0,0,W,H);}}
 // fog / rain / alarm overlays (parallax layers)
 if(s.fx==='fog'&&!LOW()){for(let k=0;k<4;k++){const x=((TT*12*(k+1)+k*W*.4)%(W*1.6))-W*.3,y=H*(.45+k*.1);const g=cx.createRadialGradient(x,y,0,x,y,W*.5);g.addColorStop(0,'rgba(230,230,240,.16)');g.addColorStop(1,'rgba(230,230,240,0)');cx.fillStyle=g;cx.fillRect(x-W*.5,y-W*.5,W,W);}}
 if(s.fx==='alarm'){const a=Math.sin(TT*10)>0;cx.fillStyle=a?'rgba(255,30,30,.12)':'rgba(30,80,255,.08)';cx.fillRect(0,0,W,H);}
 if(s.fx==='rain'){cx.fillStyle='rgba(20,30,60,.12)';cx.fillRect(0,0,W,H);if(Math.random()<.004&&!LOW()){cx.fillStyle='rgba(220,230,255,.5)';cx.fillRect(0,0,W,H);}}
 // letterbox + vignette
 const lb=H*.06;cx.fillStyle='#000';cx.fillRect(0,0,W,lb);cx.fillRect(0,H-lb,W,lb);
 const vg=cx.createRadialGradient(W/2,H/2,Math.min(W,H)*.35,W/2,H/2,Math.max(W,H)*.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.55)');cx.fillStyle=vg;cx.fillRect(0,0,W,H);
 if(s.title){const a=clamp(SQ.t/.6,0,1)*clamp((s.d-SQ.t)/.6,0,1);cx.save();cx.globalAlpha=a;cx.textAlign='center';cx.fillStyle='rgba(255,215,160,.95)';cx.font=`800 ${Math.round(Math.min(W*.045,20))}px GameFont,system-ui,sans-serif`;cx.fillText((T('chapter')+' '+s.title).toUpperCase(),W/2,H*.15);
  cx.font=`900 ${Math.round(Math.min(W*.09,42))}px GameFont,system-ui,sans-serif`;cx.lineWidth=5;cx.strokeStyle='rgba(60,10,0,.85)';cx.strokeText(T('c'+s.title),W/2,H*.15+Math.min(W*.1,46));cx.fillStyle='#ffd23f';cx.fillText(T('c'+s.title),W/2,H*.15+Math.min(W*.1,46));cx.restore();}};
window.startStory=function(){playSeq('intro',()=>{SAVE.seen.story=1;persist();if(!SAVE.stars.some(x=>x>0))startLevel(0);else showMap();});};
window.endStory=function(){if(MODE!=='story')return;seqFinish();};
window.storyUpd=function(){};
window.chapterCard=function(ch,cb){playSeq('c'+ch,cb);};
function showCredits(){$('cap').classList.remove('on');$('bSkip').style.display='none';const c=$('credits');c.style.display='flex';
 c.innerHTML=`<div class="crroll"><div class="te">${T('theEnd')}</div><img src="studio-logo.png" alt=""><div class="sn">P-Prece Studio</div><div class="snt">พีพีช Studio</div><div class="mb">${T('credits')} P-Prece Studio</div><div class="ty">${T('thanks')}</div>
 <div class="row"><button class="btn blue" id="crRe">${T('replay')}</button><button class="btn gold" id="crMap">${T('map')}</button></div></div>`;
 confetti();AU.win();$('crRe').onclick=()=>{AU.click();playEnding();};$('crMap').onclick=()=>{AU.click();SQ.seq=null;c.style.display='none';showMap();};}
window.playEnding=function(){SAVE.seen.ending=1;persist();playSeq('ending',()=>showMap());};
// boss cutscenes + ending hook on win popup
const _endPopup=window.endPopup;
window.endPopup=function(winb){if(winb&&G&&G.L.boss){const g=G,ch=g.ch;if(g.i>=LEVELS.length-1){playEnding();return;}
  if(SEQS['b'+ch]){playSeq('b'+ch,()=>{G=g;setMode('game');_endPopup(true);});return;}}
 _endPopup(winb);};
// keep tutorial bubble placed
addEventListener('resize',()=>setTimeout(tutPlace,50));
// test hooks
Object.assign(window.__ft,{startStory:window.startStory,endStory:window.endStory,showMap:window.showMap,showTitle:window.showTitle,settings:window.settings,tap:window.tapCell,
 seq:window.playSeq,ending:window.playEnding,howTo:window.howTo,pause:window.pauseMenu,V2,SQ,SEQS,tutNext,get tut(){return V2.tut;},noTut:false,skipShot(){if(SQ.seq){SQ.t=SQ.seq[SQ.i].d;SQ.tap=1;}}});
// ?debug=ending | intro | c3 | b2
const dbg=new URLSearchParams(location.search).get('debug');if(dbg)setTimeout(()=>{if(dbg==='ending')playEnding();else if(SEQS[dbg])playSeq(dbg,()=>showMap());},1900);
})();
