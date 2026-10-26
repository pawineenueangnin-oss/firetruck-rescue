// Firetruck Rescue v3 — true top-down (90°) pre-rendered vehicles with real-time rotation, richer street board,
// grand level-complete / game-over screens, player level + ranks, fleet upgrades (garage), serialized story beat after
// every level, story log. Loaded after v2.js; overrides globals.
(function(){
const TAU=Math.PI*2,LOW=()=>SAVE.gfx==='low'||(SAVE.gfx==='auto'&&V2.lowAuto);
const imgs=V2.imgs;function IMG(n){let i=imgs[n];if(!i){i=new Image();i.decoding='async';i.src=n;imgs[n]=i;}return i;}
const ok=i=>i&&i.complete&&i.naturalWidth>0;
const V2VEH=window.drawVeh;const TD=SPR3.td,TQ=SPR3.tt;IMG('sprites/td.webp');
const ttImg=()=>IMG('sprites/tt.webp');
// ---------- Save (v3 fields + migration from v1/v2 progress) ----------
const UPC=[80,200,420];
function lvlInfo(xp){let L=1,need=110;while(xp>=need){xp-=need;L++;need=80+L*30;}return{L,cur:xp,need};}
const rankOf=L=>L>=40?7:L>=30?6:L>=21?5:L>=14?4:L>=10?3:L>=6?2:L>=3?1:0;
const SKIN_LV=[1,3,6,10],SIREN_LV=[1,2,5];
function migrate(){const v={ver:3,xp:0,coins:0,fleet:{E:0,K:0,T:0,A:0},skin:0,siren:0,beats:{},boss:{},dbl:{},seenNew:{}};
 (SAVE.stars||[]).forEach((s,i)=>{if(s>0){v.xp+=60+s*35+(LEVELS[i]&&LEVELS[i].boss?60:0);v.coins+=25+s*10;v.beats[i]=1;}});
 return v;}
if(!SAVE.v3||SAVE.v3.ver!==3){SAVE.v3=migrate();persist();LOG('v3 save migrated',JSON.stringify(SAVE.v3).slice(0,120));}
const S3=SAVE.v3;if(!S3.pfix){S3.pfix=1;S3.skin=0;persist();}['fleet','beats','boss','dbl','seenNew'].forEach(k=>{S3[k]=S3[k]||(k==='fleet'?{E:0,K:0,T:0,A:0}:{});});
const PERK={E:[1,.75,.55,.4],T:[1,1.5,2,2.5],K:[0,.1,.2,.35]};
const tierOf=t=>S3.fleet[t]||0;
// ---------- Top-down sprites: pre-scaled, mip-stepped cache (no blur), real-time rotation ----------
const SKF=['none','hue-rotate(205deg) saturate(.7) brightness(.78)','hue-rotate(100deg) saturate(.6) brightness(.82)','hue-rotate(36deg) saturate(1.3) brightness(1.18)'];
// paint recolour: only body-paint pixels (red hue, saturated, not bright light/glass) take the new colour; keeps shading
const PCOL=[null,[29,52,120],[24,110,52],[214,160,24]];
function repaint(c,sk){try{const g=c.getContext('2d'),d=g.getImageData(0,0,c.width,c.height),a=d.data,P=PCOL[sk];for(let i=0;i<a.length;i+=4){if(a[i+3]<20)continue;const r=a[i],G=a[i+1],b=a[i+2],mx=Math.max(r,G,b),mn=Math.min(r,G,b);if(mx!==r||mx<40||mx>245&&mn>120)continue;const sat=(mx-mn)/mx;if(sat<.45)continue;const hd=(G-b)/(mx-mn);if(hd<-.35||hd>.5)continue;const l=(r*.6+G*.3+b*.1)/150;a[i]=Math.min(255,P[0]*l);a[i+1]=Math.min(255,P[1]*l);a[i+2]=Math.min(255,P[2]*l);}g.putImageData(d,0,0);}catch(e){}}
const CACHE=new Map();const CELLU=.9;
function sname(type){return 'EKTA'.includes(type)?type+tierOf(type):type;}
function skinFor(name){return /^[EKT]/.test(name)&&name.length===2?S3.skin:0;}
function spr(name,px){const sk=skinFor(name);const key=name+'|'+px+'|'+sk;let e=CACHE.get(key);if(e)return e;const im=IMG('sprites/td.webp');if(!ok(im))return null;
 if(CACHE.size>260)CACHE.clear();const FS=TD.FS,i=TD.idx[name];if(i==null)return null;const sx=(i%TD.C)*FS,sy=Math.floor(i/TD.C)*FS;
 let src=document.createElement('canvas');src.width=src.height=FS;let g=src.getContext('2d');g.drawImage(im,sx,sy,FS,FS,0,0,FS,FS);let size=FS;
 while(size/2>=px*1.05){const n=document.createElement('canvas');const ns=Math.round(size/2);n.width=n.height=ns;const ng=n.getContext('2d');ng.imageSmoothingQuality='high';ng.drawImage(src,0,0,ns,ns);src=n;size=ns;}
 const c=document.createElement('canvas');c.width=c.height=px;g=c.getContext('2d');g.imageSmoothingQuality='high';g.drawImage(src,0,0,px,px);if(sk)repaint(c,sk);
 const sh=document.createElement('canvas');sh.width=sh.height=px;const sg=sh.getContext('2d');sg.filter=`brightness(0) blur(${Math.max(1,px*.022)}px)`;sg.globalAlpha=.62;sg.drawImage(c,0,0);
 e={c,sh};CACHE.set(key,e);return e;}
// light-bar positions in model units [x, halfWidth], front x
const LB={E:[.316,.089],K:[.378,.089],T:[.33,.089],A:[.31,.08],V:[.18,.076],P:[-.03,.068],C:[-.02,.072],W:[.06,.08]};
const FRONT={E:.43,K:.48,T:.44,A:.43,V:.35,P:.33,C:.34,W:.42};
const AMBER={A:0,V:1,W:1};
const BB={};let bbDone=false;
function calcBB(){const im=IMG('sprites/td.webp');if(bbDone||!ok(im))return;bbDone=true;const FS=TD.FS,cv2=document.createElement('canvas');cv2.width=FS;cv2.height=FS;const g=cv2.getContext('2d',{willReadFrequently:true});
 for(const n in TD.idx){const i=TD.idx[n];g.clearRect(0,0,FS,FS);g.drawImage(im,(i%TD.C)*FS,Math.floor(i/TD.C)*FS,FS,FS,0,0,FS,FS);const d=g.getImageData(0,0,FS,FS).data;let x0=FS,x1=-1,y0=FS,y1=-1;
  for(let y=0;y<FS;y+=2)for(let x=0;x<FS;x+=2)if(d[(y*FS+x)*4+3]>40){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y;}
  if(x1>0)BB[n]={L:x1-x0+2,Wd:y1-y0+2,cx:(x0+x1)/2-TD.anchor[0],cy:(y0+y1)/2-TD.anchor[1]};}}
const FITL=.9,FITW=.66;const isVehName=n=>/^([EKTA]\d|[VPCW]|car\d)$/.test(n);
function fitOf(n){calcBB();const b=BB[n];if(!b||!isVehName(n))return null;const base=CELLU*TD.scale;return {f:Math.min(FITL*base/b.L,FITW*base/b.Wd),b};}
window.__fitOf=fitOf;
function drawTD(c,name,x,y,s,ang,o){o=o||{};const FT=o.fit!==false?fitOf(name):null;if(FT)s*=FT.f;const k=s/(CELLU*TD.scale);const dw=TD.FS*k;const dpr=Math.max(DPR,o.dpr||1);let px=Math.ceil(dw*dpr/8)*8;px=clamp(px,16,TD.FS);
 const e=spr(name,px);if(!e)return false;const ax=TD.anchor[0]*k,ay=TD.anchor[1]*k;
 if(o.shadow!==false){c.save();c.translate(x+s*.05,y+s*.085);c.rotate(ang);c.drawImage(e.sh,-ax-(FT?FT.b.cx*k:0),-ay-(FT?FT.b.cy*k:0),dw,dw);c.restore();}
 c.save();c.translate(x,y-(o.z||0));c.rotate(ang+(o.wob?Math.sin((o.t||TT)*40)*o.wob*.25:0));const sq=o.sq||0;if(sq)c.scale(1-sq*.3,1+sq*.25);c.drawImage(e.c,-ax-(FT?FT.b.cx*k:0),-ay-(FT?FT.b.cy*k:0),dw,dw);c.restore();return true;}
window.drawVeh=function(c,x,y,s,type,ang,o){o=Object.assign({},o||{});{const FT=fitOf(sname(type));if(FT){s*=FT.f;const k0=s/(CELLU*TD.scale),cs_=Math.cos(ang),sn_=Math.sin(ang);x-=(FT.b.cx*cs_-FT.b.cy*sn_)*k0;y-=(FT.b.cx*sn_+FT.b.cy*cs_)*k0;}o.fit=false;}const t=o.t!=null?o.t:TT;const k=s/(CELLU*TD.scale)*TD.scale;// px per model unit
 const ca=Math.cos(ang),sa=Math.sin(ang);const W2=(lx,lz)=>[x+ca*lx*k-sa*lz*k,y+sa*lx*k+ca*lz*k];
 if(o.lights&&o.cone!==false&&!LOW()){const f=FRONT[type]||.4;const L=s*1.5,sw=s*.42;const [ax1,ay1]=W2(f,-.12),[ax2,ay2]=W2(f,.12);const [fx,fy]=W2(f,0);c.save();c.globalCompositeOperation='lighter';
  const g=c.createLinearGradient(fx,fy,fx+ca*L,fy+sa*L);g.addColorStop(0,'rgba(255,246,210,.36)');g.addColorStop(1,'rgba(255,246,210,0)');c.fillStyle=g;
  c.beginPath();c.moveTo(ax1,ay1);c.lineTo(ax1+ca*L+sa*sw,ay1+sa*L-ca*sw);c.lineTo(ax2+ca*L-sa*sw,ay2+sa*L+ca*sw);c.lineTo(ax2,ay2);c.closePath();c.fill();c.restore();}
 if(!drawTD(c,sname(type),x,y,s,ang,o))return;
 if(o.siren&&LB[type]){const [lx,hw]=LB[type];const ph=Math.floor(t*8+(o.ph||0))%2;c.save();c.globalCompositeOperation='lighter';
  [[-hw,'255,40,30'],[hw,AMBER[type]?'255,170,20':'40,110,255']].forEach(([lz,col],i)=>{const [px,py]=W2(lx,lz);const on=i===ph;
   if(!LOW()&&o.beams!==false){const a=t*7+i*Math.PI+(o.ph||0);const L=s*1.35;const g=c.createRadialGradient(px,py,0,px,py,L);g.addColorStop(0,`rgba(${col},.30)`);g.addColorStop(1,`rgba(${col},0)`);c.fillStyle=g;c.beginPath();c.moveTo(px,py);c.arc(px,py,L,a-.32,a+.32);c.closePath();c.fill();}
   const r=s*(on?.55:.18);const g=c.createRadialGradient(px,py,0,px,py,r);g.addColorStop(0,`rgba(255,255,255,${on?.95:.45})`);g.addColorStop(.18,`rgba(${col},${on?.75:.4})`);g.addColorStop(1,`rgba(${col},0)`);c.fillStyle=g;c.fillRect(px-r,py-r,r*2,r*2);});
  c.restore();}};
window.drawCivCar=function(c,x,y,s,ang,col,o){o=o||{};let i=CIV.indexOf(col);if(i<0)i=typeof col==='number'?col:0;const j=o.j||0;drawTD(c,'car'+(i%6),x+(j?Math.sin(j*40)*3*j:0),y,s,ang,{});};
window.drawCone=function(c,x,y,s,j){drawTD(c,'cone',x+(j?Math.sin(j*40)*3*j:0),y,s*1.25,0,{});};
window.drawBarrier=function(c,x,y,s,j){drawTD(c,'bar',x+(j?Math.sin(j*40)*3*j:0),y,s*1.08,Math.PI/2,{});};
window.drawHydrant=function(c,x,y,s,t){const p=.5+.5*Math.sin((t||0)*4);c.save();c.globalCompositeOperation='lighter';const g=c.createRadialGradient(x,y,0,x,y,s*.5);g.addColorStop(0,`rgba(90,190,255,${.22+p*.14})`);g.addColorStop(1,'rgba(90,190,255,0)');c.fillStyle=g;c.fillRect(x-s*.5,y-s*.5,s,s);c.restore();drawTD(c,'hyd',x,y,s*1.55,0,{});};
// 3/4 turntable sprite (garage, scene strip, result lineup)
const _veh3q=window.__v2drawVeh||null;
function _drawTT2(c,type,tier,x,y,s,ang,o){o=o||{};let im=ttImg();const key=type+tier;let row=TQ.rows[key];if(row==null)return false;const N=TQ.N;let FS=TQ.FS,R=1;
 const devPx=s*(o.dpr||DPR)*1.6;if(o.hd||devPx>FS){const h=IMG('sprites/hd/'+key+'.webp');if(ok(h)){im=h;row=0;R=448/TQ.FS;FS=448;}}if(!ok(im))return false;
 let a=((ang%TAU)+TAU)%TAU;const f=a/(TAU/N);const f0=Math.floor(f)%N,f1=(f0+1)%N,u=f-Math.floor(f);const k=s/(CELLU*TQ.scale*R),ax=TQ.anchor[0]*R*k,ay=TQ.anchor[1]*R*k;
 c.save();if(o.filter&&o.filter!=='none')c.filter=o.filter;if(o.alpha!=null)c.globalAlpha=o.alpha;
 if(o.smooth&&u>.86){const u2=(u-.86)/.14;c.globalAlpha=(o.alpha??1);c.drawImage(im,f0*FS,row*FS,FS,FS,x-ax,y-ay,FS*k,FS*k);c.globalAlpha=(o.alpha??1)*u2;c.drawImage(im,f1*FS,row*FS,FS,FS,x-ax,y-ay,FS*k,FS*k);}
 else{const fi=(o.smooth?f0:Math.round(f))%N;c.drawImage(im,fi*FS,row*FS,FS,FS,x-ax,y-ay,FS*k,FS*k);}c.restore();
 if(o.siren){const fi=(o.smooth&&u<=.86?f0:Math.round(f))%N;const lb=(TQ.lb[key]||[])[fi]||[];const t=o.t||TT;const ph=Math.floor(t*8+(o.ph||0))%2;c.save();c.globalCompositeOperation='lighter';
  lb.forEach((p,i)=>{const px=x+(p[0]-TQ.anchor[0])*R*k,py=y+(p[1]-TQ.anchor[1])*R*k;const col=i===0?'255,40,30':'40,110,255';const on=i===ph;const r=s*(on?.38:.1);const g=c.createRadialGradient(px,py,0,px,py,r);g.addColorStop(0,`rgba(255,255,255,${on?.95:.5})`);g.addColorStop(.15,`rgba(${col},${on?.8:.4})`);g.addColorStop(1,`rgba(${col},0)`);c.fillStyle=g;c.fillRect(px-r,py-r,r*2,r*2);});c.restore();}
 return true;}
window.drawTT=_drawTT2;function drawTT(...a){return window.drawTT(...a);}
// ---------- Street board (top-down city asphalt) ----------
window.buildBoard=function(){const cs=G.cs,pad=cs*1.3;const w=G.bw+pad*2,h=G.bh+pad*2;const c=document.createElement('canvas');c.width=Math.ceil(w*DPR);c.height=Math.ceil(h*DPR);const g=c.getContext('2d');g.scale(DPR,DPR);const ox=pad,oy=pad,bw=G.bw,bh=G.bh,R=seeded(11+G.i);
 // sidewalk slabs
 g.save();g.shadowColor='rgba(0,0,0,.7)';g.shadowBlur=26;g.shadowOffsetY=12;g.fillStyle='#4d525b';rr(g,ox-cs*.42,oy-cs*.42,bw+cs*.84,bh+cs*.84,cs*.22);g.fill();g.restore();
 g.fillStyle=lg(g,0,oy-cs*.42,0,oy+bh+cs*.42,['#7c818b','#5a5f68']);rr(g,ox-cs*.42,oy-cs*.42,bw+cs*.84,bh+cs*.84,cs*.22);g.fill();
 g.strokeStyle='rgba(20,22,28,.35)';g.lineWidth=1;const st=cs*.33;
 for(let X=ox-cs*.42;X<=ox+bw+cs*.42;X+=st){g.beginPath();g.moveTo(X,oy-cs*.42);g.lineTo(X,oy-cs*.1);g.moveTo(X,oy+bh+cs*.1);g.lineTo(X,oy+bh+cs*.42);g.stroke();}
 for(let Y=oy-cs*.42;Y<=oy+bh+cs*.42;Y+=st){g.beginPath();g.moveTo(ox-cs*.42,Y);g.lineTo(ox-cs*.1,Y);g.moveTo(ox+bw+cs*.1,Y);g.lineTo(ox+bw+cs*.42,Y);g.stroke();}
 // curb (granite) with highlight
 g.fillStyle='#b9bdc4';rr(g,ox-cs*.1,oy-cs*.1,bw+cs*.2,bh+cs*.2,cs*.12);g.fill();g.fillStyle='#8e939b';rr(g,ox-cs*.06,oy-cs*.06,bw+cs*.12,bh+cs*.12,cs*.09);g.fill();
 // asphalt base + grain
 const ag=g.createLinearGradient(0,oy,0,oy+bh);ag.addColorStop(0,'#2b2f37');ag.addColorStop(1,'#1d2026');g.fillStyle=ag;rr(g,ox,oy,bw,bh,cs*.06);g.fill();
 g.save();rr(g,ox,oy,bw,bh,cs*.06);g.clip();
 for(let i=0;i<G.L.w*G.L.h*70;i++){const v=R();g.fillStyle=v<.45?'rgba(255,255,255,.045)':v<.9?'rgba(0,0,0,.16)':'rgba(140,130,120,.08)';const r=.6+R()*1.3;g.fillRect(ox+R()*bw,oy+R()*bh,r,r);}
 // repair patches + cracks
 for(let i=0;i<G.L.w*G.L.h/6;i++){g.fillStyle=`rgba(${R()<.5?'12,13,16':'44,47,54'},.35)`;const px=ox+R()*bw,py=oy+R()*bh;g.fillRect(px,py,cs*(.4+R()*.7),cs*(.25+R()*.5));}
 g.strokeStyle='rgba(8,9,12,.55)';g.lineWidth=1;for(let i=0;i<G.L.w*G.L.h/5;i++){let x=ox+R()*bw,y=oy+R()*bh;g.beginPath();g.moveTo(x,y);for(let k=0;k<5;k++){x+=(R()-.5)*cs*.5;y+=(R()-.5)*cs*.5;g.lineTo(x,y);}g.stroke();}
 // wet puddles reflecting sky + street lights
 for(let i=0;i<Math.max(3,G.L.w*G.L.h/5);i++){const px=ox+R()*bw,py=oy+R()*bh,r=cs*(.3+R()*.55);g.save();g.translate(px,py);g.rotate(R()*3);g.scale(1.7,.75);const pg=g.createRadialGradient(-r*.2,-r*.2,0,0,0,r);pg.addColorStop(0,'rgba(150,175,215,.2)');pg.addColorStop(.6,'rgba(90,110,150,.1)');pg.addColorStop(1,'rgba(90,110,150,0)');g.fillStyle=pg;g.beginPath();g.arc(0,0,r,0,TAU);g.fill();g.restore();}
 // lane grid: crisp dashed white lines between cells, solid edge lines
 g.strokeStyle='rgba(240,240,232,.26)';g.lineWidth=Math.max(1.5,cs*.03);g.setLineDash([cs*.24,cs*.18]);g.lineDashOffset=-cs*.06;
 for(let i=1;i<G.L.w;i++){g.beginPath();g.moveTo(ox+i*cs,oy);g.lineTo(ox+i*cs,oy+bh);g.stroke();}for(let j=1;j<G.L.h;j++){g.beginPath();g.moveTo(ox,oy+j*cs);g.lineTo(ox+bw,oy+j*cs);g.stroke();}g.setLineDash([]);
 g.strokeStyle='rgba(255,206,60,.55)';g.lineWidth=Math.max(1.5,cs*.035);g.strokeRect(ox+cs*.07,oy+cs*.07,bw-cs*.14,bh-cs*.14);
 // manholes / drains on random cells
 for(let i=0;i<Math.max(2,G.L.w*G.L.h/9);i++){const cxm=ox+(Math.floor(R()*G.L.w)+.5)*cs,cym=oy+(Math.floor(R()*G.L.h)+.5)*cs;const r=cs*.17;g.fillStyle='#16181d';g.beginPath();g.arc(cxm,cym,r,0,TAU);g.fill();g.strokeStyle='#3a3e46';g.lineWidth=1.5;g.beginPath();g.arc(cxm,cym,r*.82,0,TAU);g.stroke();g.strokeStyle='rgba(90,95,105,.6)';g.lineWidth=1;for(let k=-2;k<=2;k++){g.beginPath();g.moveTo(cxm-r*.6,cym+k*r*.25);g.lineTo(cxm+r*.6,cym+k*r*.25);g.stroke();}}
 g.restore();
 // crosswalks on the sidewalk entrances (between curb and slabs) — zebra across each edge mid
 g.fillStyle='rgba(235,235,228,.55)';const zb=(x,y,vert,len)=>{for(let k=0;k<len/(cs*.16);k++){if(vert)g.fillRect(x,y+k*cs*.16,cs*.22,cs*.09);else g.fillRect(x+k*cs*.16,y,cs*.09,cs*.22);}};
 zb(ox+bw/2-cs*.6,oy-cs*.36,false,cs*1.2);zb(ox+bw/2-cs*.6,oy+bh+cs*.14,false,cs*1.2);
 // street lamps (top view) with warm light pools
 const lamps=[[ox-cs*.26,oy-cs*.26],[ox+bw+cs*.26,oy-cs*.26],[ox-cs*.26,oy+bh+cs*.26],[ox+bw+cs*.26,oy+bh+cs*.26],[ox-cs*.26,oy+bh/2],[ox+bw+cs*.26,oy+bh/2]];
 lamps.forEach(([x,y])=>{g.save();g.globalCompositeOperation='lighter';const gr=g.createRadialGradient(x,y,0,x,y,cs*2.2);gr.addColorStop(0,'rgba(255,205,130,.34)');gr.addColorStop(.45,'rgba(255,170,90,.1)');gr.addColorStop(1,'rgba(255,170,90,0)');g.fillStyle=gr;g.fillRect(x-cs*2.2,y-cs*2.2,cs*4.4,cs*4.4);g.restore();
  g.fillStyle='rgba(0,0,0,.4)';ell(g,x+3,y+4,cs*.13,cs*.13);g.fill();g.fillStyle='#2a2d33';ell(g,x,y,cs*.12,cs*.12);g.fill();g.fillStyle='#fff3cf';ell(g,x,y,cs*.065,cs*.065);g.fill();});
 for(const k in G.st.turn){const [x,y]=k.split(',').map(Number);g.save();g.globalAlpha=.9;drawTurn(g,ox+(x+.5)*cs,oy+(y+.5)*cs,cs,G.st.turn[k]);g.restore();}
 BOARD={c,ox:G.bx-ox,oy:G.by-oy,w,h};};
const _renderBoard=window.renderBoard;
window.renderBoard=function(){
 // fire glow cast onto the street from the burning building above
 const fr=G.state==='win'?0:clamp(G.fire/G.fireMax,0,1.3);_renderBoard();
 if(fr>0&&!LOW()){const fl=.85+.15*Math.sin(G.t*9)+.07*Math.sin(G.t*23);cx.save();cx.globalCompositeOperation='lighter';const y0=G.by-G.cs*1.2;const gr=cx.createLinearGradient(0,y0,0,y0+G.bh*.6);gr.addColorStop(0,`rgba(255,110,30,${.2*fr*fl})`);gr.addColorStop(1,'rgba(255,90,20,0)');cx.fillStyle=gr;cx.fillRect(G.bx-G.cs*1.3,y0,G.bw+G.cs*2.6,G.bh*.6);cx.restore();}};
// ---------- Fire scene: taller, parallax, backlit firefighters spraying water ----------
window.sceneRect=function(){const top=56;const h=Math.round(clamp(H*.13,78,130));return{x:0,y:top,w:W,h};};
function ffSil(c,x,y,h,dir,t,ph,spray,tx,ty){const u=h/7.5;c.save();c.translate(x,y);c.scale(dir,1);
 c.fillStyle='#0d0b0c';// legs, coat, tank, helmet
 c.beginPath();c.moveTo(-u*.7,0);c.lineTo(-u*.5,-u*3.4);c.lineTo(u*.5,-u*3.4);c.lineTo(u*.75,0);c.lineTo(u*.25,0);c.lineTo(0,-u*2.2);c.lineTo(-u*.25,0);c.closePath();c.fill();
 rr(c,-u*.95,-u*6,u*1.9,u*2.8,u*.5);c.fill();rr(c,-u*1.35,-u*5.8,u*.6,u*2,u*.25);c.fill();
 c.beginPath();c.arc(0,-u*6.6,u*.62,0,TAU);c.fill();c.beginPath();c.ellipse(u*.1,-u*6.75,u*1.05,u*.28,0,0,TAU);c.fill();c.beginPath();c.arc(0,-u*6.9,u*.68,Math.PI,0);c.fill();
 // arms forward holding nozzle
 c.lineWidth=u*.55;c.lineCap='round';c.strokeStyle='#0d0b0c';c.beginPath();c.moveTo(0,-u*5.2);c.lineTo(u*1.6,-u*4.6);c.lineTo(u*2.4,-u*4.9);c.stroke();
 // rim light from fire
 c.strokeStyle='rgba(255,150,60,.75)';c.lineWidth=Math.max(1,u*.22);c.beginPath();c.moveTo(u*.95,-u*5.8);c.lineTo(u*.95,-u*3.4);c.moveTo(u*.62,-u*6.6);c.arc(0,-u*6.6,u*.62,-.6,.6);c.stroke();
 c.fillStyle='#e8d34a';c.fillRect(-u*.95,-u*3.9,u*1.9,u*.25);c.restore();
 if(spray){const nx=x+dir*u*2.5,ny=y-u*4.9;const mx=(nx+tx)/2,my=Math.min(ny,ty)-h*.9;c.save();c.globalCompositeOperation='lighter';c.lineCap='round';
  for(let k=0;k<3;k++){c.strokeStyle=`rgba(${190+k*20},${225+k*10},255,${.38-k*.1})`;c.lineWidth=u*(1.1-k*.3);c.setLineDash([u*2,u*1.2]);c.lineDashOffset=-t*u*30-k*u;c.beginPath();c.moveTo(nx,ny);c.quadraticCurveTo(mx,my,tx+Math.sin(t*3+ph)*u,ty);c.stroke();}
  c.setLineDash([]);const g=c.createRadialGradient(tx,ty,0,tx,ty,u*4);g.addColorStop(0,'rgba(230,240,255,.4)');g.addColorStop(1,'rgba(230,240,255,0)');c.fillStyle=g;c.fillRect(tx-u*4,ty-u*4,u*8,u*8);c.restore();}}
window.renderScene=function(){const S=G.S,t=G.t;const fr=G.state==='win'?0:G.fire/G.fireMax;
 cx.save();cx.fillStyle='rgba(0,0,0,.35)';cx.fillRect(S.x,S.y,S.w,S.h);
 const d=drawScene(cx,G.ch,S.x,S.y,S.w,S.h,t,fr+(G.flare||0)*.15,{waiting:Math.max(0,G.people-G.rescued),rescued:0,steam:Math.max(G.steam,G.state==='win'?1-Math.min(1,G.winT/3):0),cheer:G.state==='win',dog:false,boss:G.L.boss,zoom:1.1});
 G.flames=fr>0?d.F.slice(0,Math.ceil(d.F.length*Math.min(1,fr))).map(([x,y])=>[S.x+x,S.y+y]):[];
 cx.save();cx.beginPath();cx.rect(S.x,S.y,S.w,S.h);cx.clip();
 const vs=S.h*.5,gy=S.y+S.h*.9;
 G.sv.forEach((v,i)=>{const X=S.x+v.x;const tier='EKTA'.includes(v.type)?tierOf(v.type):0;
  if(!('EKTA'.includes(v.type)&&drawTT(cx,v.type,tier,X,gy,vs,v.dir>0?0:Math.PI,{t,siren:true})))_v2veh(cx,X,gy,vs*.9,v.type,v.dir>0?0:Math.PI,{t,siren:true,lights:true});
  if(v.state==='work'&&WATER[v.type]&&G.flames.length&&v.work<6){const f=G.flames[i%G.flames.length];ffSil(cx,X+(v.dir>0?vs*.55:-vs*.55),gy+2,S.h*.3,X<f[0]?1:-1,t,i,v.work>.4&&G.state==='play',f[0],f[1]);}
  if(v.state==='work'&&v.type==='K'&&d.P.length){const pi=Math.min(i%d.P.length,d.P.length-1);const [px,py]=d.P[pi];const u=Math.min(1,v.work/1);cx.strokeStyle='#d8dde6';cx.lineWidth=3;cx.beginPath();cx.moveTo(X,gy-vs*.35);cx.lineTo(lerp(X,S.x+px,u),lerp(gy-vs*.35,S.y+py,u));cx.stroke();}});
 // rescued people gather (backlit) bottom-left
 for(let i=0;i<G.rescued;i++)drawHuman(cx,S.x+S.w*(.04+i*.055),gy,S.h*.24,{cheer:G.state==='win',t,ph:i*1.3,shirt:SHIRTS[i%6]});
 // drifting embers foreground parallax
 if(fr>0&&!LOW()){cx.globalCompositeOperation='lighter';for(let k=0;k<14;k++){const u=((t*.18+k*.137)%1);const ex=S.x+((k*97.3+t*12*(1+k%3))%S.w),ey=S.y+S.h*(1-u);cx.fillStyle=`rgba(255,${150+k*6},60,${(1-u)*.8*Math.min(1,fr)})`;cx.beginPath();cx.arc(ex,ey,1+(k%3)*.6,0,TAU);cx.fill();}cx.globalCompositeOperation='source-over';}
 cx.restore();
 // bottom edge: wet-road reflection band + fade into board
 const fg=cx.createLinearGradient(0,S.y+S.h-12,0,S.y+S.h+14);fg.addColorStop(0,'rgba(0,0,0,0)');fg.addColorStop(1,'rgba(6,8,14,.9)');cx.fillStyle=fg;cx.fillRect(S.x,S.y+S.h-12,S.w,26);
 cx.restore();};
const _v2veh=V2VEH;
// ---------- Perks (never affect solvability; only soften mistakes) ----------
const _onBump=window.onBump;window.onBump=function(vv,s){const f0=G.fire;_onBump(vv,s);const d=G.fire-f0;if(d>0){G.fire=f0+d*PERK.E[tierOf('E')];updHUD();}};
const _checkPass=window.checkPass;window.checkPass=function(vv){const f0=G.fire;_checkPass(vv);const d=f0-G.fire;if(d>0){G.fire=Math.max(0,G.fire-d*(PERK.T[tierOf('T')]-1));updHUD();}};
const _sl=window.startLevel;window.startLevel=function(i,sk){const prev=G;closeOv();_sl(i,sk);if(G&&G!==prev){const a=tierOf('A');G.freeHints=a>=3?2:a>=1?1:0;G.shield=a>=2?1:0;G.hydUsed=0;updHUD();ttImg();}};
const _uh=window.useHelp;window.useHelp=function(kind){if(kind==='hint'&&G&&G.state==='play'&&G.freeHints>0){const f=FL.free(G.st);if(G.hint){G.hint.t=0;toast(T('hintOn'));return;}if(f[0]){G.freeHints--;G.hint={id:f[0].id,t:0};AU.rescue();toast(T('freeHint'));updHUD();}else toast(T('noHint'));return;}_uh(kind);};
const _uhud=window.updHUD;window.updHUD=function(){_uhud();if(!G)return;const b=$('bHint');if(b){const fh=G.freeHints>0;b.classList.toggle('free',fh);if(fh)b.disabled=false;}};
const _tap3=window.tapCell;window.tapCell=function(x,y){const r=_tap3(x,y);if(r==='bump'&&G&&G.shield>0){G.shield--;G.hearts++;toast(T('shield'));updHUD();}return r;};
window.__ft.tap=window.tapCell;
// ---------- Siren cosmetics ----------
const _sir=AU.siren;AU.siren=function(dur,p0,p1){if(!S3.siren)return _sir.call(AU,dur,p0,p1);if(!this.ac||!SAVE.snd)return;const now=this.ac.currentTime;if(now<this.sirenUntil-.3)return;this.sirenUntil=now+dur;
 const ac=this.ac,o=ac.createOscillator(),g=ac.createGain(),lp=ac.createBiquadFilter();o.type='square';lp.type='lowpass';lp.frequency.value=1700;o.connect(lp);lp.connect(g);g.connect(this.s);
 g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(.045,now+.05);g.gain.setValueAtTime(.045,now+Math.max(.1,dur-.25));g.gain.linearRampToValueAtTime(0,now+dur);
 if(S3.siren===1){for(let k=0;k*.17<dur;k++){o.frequency.setValueAtTime(720,now+k*.17);o.frequency.linearRampToValueAtTime(1500,now+k*.17+.16);}}else{for(let k=0;k*.48<dur;k++)o.frequency.setValueAtTime(k%2?640:960,now+k*.48);}
 o.start(now);o.stop(now+dur+.05);};
// ---------- Rewards ----------
function calcRew(g,first){const stars=clamp(g.hearts,1,3),people=g.people,hyd=g.hydVis?g.hydVis.filter(h=>h.gone).length:0,boss=!!g.L.boss;const em=g.L.endless?1.1+Math.min(.9,(g.L.zone||0)*.05):1;const m=(1+PERK.K[tierOf('K')])*(first?1:.5)*em;
 const parts=[['bonusStar',stars*25],['bonusPpl',people*6],['bonusHrt',stars*10],['bonusHyd',hyd*8]];if(boss)parts.push(['bossB',60]);
 const xp=Math.round((60+parts.reduce((a,p)=>a+p[1],0))*m);const coins=Math.round((20+stars*10+people*2+(boss?40:0))*(first?1:.5)*em);return{stars,people,hyd,boss,first,xp,coins,parts,m};}
const _win=window.win;window.win=function(){const g=G;const first=!(SAVE.stars[g.i]>0);_win();const r=calcRew(g,first);r.xp0=S3.xp;r.c0=S3.coins;S3.xp+=r.xp;S3.coins+=r.coins;persist();g.rew=r;LOG('reward',JSON.stringify({xp:r.xp,coins:r.coins,lv:lvlInfo(S3.xp).L}));};
function newItems(xp0,xp1){const a=lvlInfo(xp0).L,b=lvlInfo(xp1).L,out=[];if(rankOf(b)>rankOf(a))out.push(['rank',T('rk'+(rankOf(b)+1))]);
 SKIN_LV.forEach((l,i)=>{if(i&&a<l&&b>=l)out.push(['skin',T('sk'+i)]);});SIREN_LV.forEach((l,i)=>{if(i&&a<l&&b>=l)out.push(['siren',T('sr'+i)]);});
 if('EKTA'.split('').some(k=>tierOf(k)<3&&S3.coins>=UPC[tierOf(k)]))out.push(['up',T('upReady')]);return out;}
// ---------- Overlay helpers ----------
function ovEl(id){let e=$(id);if(!e){e=document.createElement('div');e.id=id;e.className='ov3';document.body.appendChild(e);}return e;}
function closeOv(){if(OV.h3){try{OV.h3.dispose();}catch(e){}OV.h3=null;}['res','gar','slog'].forEach(id=>{const e=$(id);if(e){e.style.display='none';e.innerHTML='';}});OV.loop=null;}
const OV={loop:null,h3:null};const UI3=()=>window.R3&&R3.ui&&R3.ui.ok();
function ovLoop(cvs,f){const g=cvs.getContext('2d');const t0=performance.now();let last=t0;const me={};OV.loop=me;
 (function a(now){if(OV.loop!==me||!document.body.contains(cvs))return;const dpr=Math.min(LOW()?1.5:3,window.devicePixelRatio||1);const w=cvs.clientWidth,h=cvs.clientHeight;if(cvs.width!==Math.round(w*dpr)||cvs.height!==Math.round(h*dpr)){cvs.width=Math.round(w*dpr);cvs.height=Math.round(h*dpr);}
  const dt=Math.min(.05,(now-last)/1000);last=now;g.setTransform(dpr,0,0,dpr,0,0);f(g,w,h,dt,dpr);requestAnimationFrame(a);})(t0);}
// tiny particle system for overlays
function PS(){const ps=[];return{ps,add(o){ps.push(Object.assign({t:0,vx:0,vy:0,g:0,r:2,max:1,col:'#fff'},o));},
 step(dt){for(let i=ps.length-1;i>=0;i--){const p=ps[i];p.t+=dt;p.vy+=p.g*dt;p.vx*=p.drag||1;p.vy*=p.drag||1;p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.t>=p.max)ps.splice(i,1);}},
 draw(c){for(const p of ps){const u=p.t/p.max;c.save();c.globalAlpha=Math.max(0,1-u);if(p.add)c.globalCompositeOperation='lighter';c.fillStyle=p.col;
  if(p.kind==='conf'){c.translate(p.x,p.y);c.rotate(p.t*6+p.r);c.fillRect(-p.r,-p.r*.4,p.r*2,p.r*.8);}else if(p.kind==='streak'){c.strokeStyle=p.col;c.lineWidth=p.r;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(p.x-p.vx*.05,p.y-p.vy*.05);c.stroke();}
  else{c.beginPath();c.arc(p.x,p.y,p.r*(p.grow?1+u*p.grow:1),0,TAU);c.fill();}c.restore();}}};}
function firework(ps,x,y,cols){const n=LOW()?28:56;for(let i=0;i<n;i++){const a=i/n*TAU,v=90+Math.random()*80;ps.add({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:60,drag:.985,r:1.6,max:1.3+Math.random()*.5,col:cols[i%cols.length],add:1,kind:'streak'});}ps.add({x,y,r:30,grow:1,max:.35,col:'rgba(255,240,200,.5)',add:1});}
function star5(c,x,y,r,ri){c.beginPath();for(let k=0;k<10;k++){const rr2=k%2?r*(ri||.45):r,a=-Math.PI/2+k*Math.PI/5;c.lineTo(x+Math.cos(a)*rr2,y+Math.sin(a)*rr2);}c.closePath();}
function goldStar(c,x,y,r,on,glow){c.save();if(on){if(glow){c.globalCompositeOperation='lighter';const g=c.createRadialGradient(x,y,0,x,y,r*2.4);g.addColorStop(0,`rgba(255,210,80,${.55*glow})`);g.addColorStop(1,'rgba(255,160,20,0)');c.fillStyle=g;c.fillRect(x-r*2.4,y-r*2.4,r*4.8,r*4.8);c.globalCompositeOperation='source-over';}
  star5(c,x,y+r*.06,r*1.06);c.fillStyle='#7a4a00';c.fill();star5(c,x,y,r);const g=c.createLinearGradient(x,y-r,x,y+r);g.addColorStop(0,'#fff6b0');g.addColorStop(.45,'#ffd23f');g.addColorStop(1,'#e08a00');c.fillStyle=g;c.fill();c.lineWidth=Math.max(1.5,r*.07);c.strokeStyle='#fff3c0';c.stroke();
  star5(c,x-r*.08,y-r*.12,r*.45);c.fillStyle='rgba(255,255,255,.35)';c.fill();}
 else{star5(c,x,y,r);c.fillStyle='rgba(30,34,46,.85)';c.fill();c.lineWidth=Math.max(1.5,r*.06);c.strokeStyle='rgba(255,255,255,.25)';c.stroke();}c.restore();}
function medal(c,x,y,r,kind,t){const M={3:['#fff2a8','#ffcc33','#b37400'],2:['#ffffff','#c9d3e0','#6f7c8f'],1:['#ffd2a8','#d98a4a','#7a3f12']}[kind]||['#fff2a8','#ffcc33','#b37400'];c.save();
 // ribbon
 c.fillStyle='#c4161c';c.beginPath();c.moveTo(x-r*.75,y-r*2.1);c.lineTo(x-r*.05,y-r*.6);c.lineTo(x-r*.55,y-r*.5);c.lineTo(x-r*1.2,y-r*2.1);c.fill();c.fillStyle='#1d4fb8';c.beginPath();c.moveTo(x+r*.75,y-r*2.1);c.lineTo(x+r*.05,y-r*.6);c.lineTo(x+r*.55,y-r*.5);c.lineTo(x+r*1.2,y-r*2.1);c.fill();
 c.shadowColor='rgba(0,0,0,.5)';c.shadowBlur=r*.4;c.shadowOffsetY=r*.12;const g=c.createLinearGradient(x-r,y-r,x+r,y+r);g.addColorStop(0,M[0]);g.addColorStop(.5,M[1]);g.addColorStop(1,M[2]);c.fillStyle=g;c.beginPath();c.arc(x,y,r,0,TAU);c.fill();c.shadowColor='transparent';
 c.lineWidth=r*.1;c.strokeStyle=M[2];c.beginPath();c.arc(x,y,r*.82,0,TAU);c.stroke();star5(c,x,y,r*.5);c.fillStyle=M[2];c.fill();star5(c,x,y-r*.04,r*.46);c.fillStyle=M[0];c.fill();
 // shine sweep
 c.save();c.beginPath();c.arc(x,y,r,0,TAU);c.clip();const sx=x-r*2+((t*.6)%2)*r*4;const sg=c.createLinearGradient(sx-r*.3,0,sx+r*.3,0);sg.addColorStop(0,'rgba(255,255,255,0)');sg.addColorStop(.5,'rgba(255,255,255,.55)');sg.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=sg;c.fillRect(x-r,y-r,r*2,r*2);c.restore();c.restore();}
function rankBadge(c,x,y,r,rk){c.save();const cols=[['#9aa3b2','#5b6475'],['#e0533a','#8f1d10'],['#3a8ee0','#123f80'],['#ffcc33','#a06a00'],['#ffe680','#c48a00'],['#b070ff','#3e1484'],['#36e0a6','#0a5e40'],['#ff5a7a','#6e0a24']][Math.max(0,Math.min(7,rk))];
 c.beginPath();for(let k=0;k<6;k++){const a=-Math.PI/2+k*TAU/6;c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r);}c.closePath();const g=c.createLinearGradient(x,y-r,x,y+r);g.addColorStop(0,cols[0]);g.addColorStop(1,cols[1]);c.fillStyle=g;c.fill();c.lineWidth=r*.12;c.strokeStyle='rgba(255,255,255,.8)';c.stroke();
 c.fillStyle='#fff';for(let k=0;k<=Math.min(rk,4);k++){const yy=y+r*.35-k*r*.28;c.beginPath();c.moveTo(x-r*.5,yy);c.lineTo(x,yy-r*.22);c.lineTo(x+r*.5,yy);c.lineTo(x+r*.5,yy+r*.1);c.lineTo(x,yy-r*.12);c.lineTo(x-r*.5,yy+r*.1);c.fill();}
 if(rk>=4){const ns=rk-3;for(let q=0;q<ns;q++){star5(c,x+(q-(ns-1)/2)*r*.42,y-r*.62,r*(ns>1?.17:.22));c.fillStyle='#fff';c.fill();}}c.restore();}
window.rankBadge=rankBadge;
const FAM={1:['b1',.45,.42,1.25],2:['b2',.5,.45,1.2],3:['b3',.5,.5,1.15],4:['b4',.45,.5,1.2],5:['e3',.5,.45,1.15]};
function polaroid(c,x,y,w,ch,t,label){const f=FAM[ch]||FAM[1];const im=IMG('img/'+f[0]+'.jpg');const h=w*1.12;c.save();c.translate(x,y);c.rotate(.07);c.shadowColor='rgba(0,0,0,.6)';c.shadowBlur=18;c.shadowOffsetY=8;c.fillStyle='#f7f3ea';c.fillRect(-w/2,-h/2,w,h);c.shadowColor='transparent';
 const iw=w*.88,ih=w*.82;if(ok(im)){const sc=Math.max(iw/im.naturalWidth,ih/im.naturalHeight)*f[3];const dw=im.naturalWidth*sc,dh=im.naturalHeight*sc;c.save();c.beginPath();c.rect(-iw/2,-h/2+w*.06,iw,ih);c.clip();c.drawImage(im,-iw/2-(dw-iw)*f[1],-h/2+w*.06-(dh-ih)*f[2],dw,dh);c.restore();}
 c.fillStyle='#2a2d36';c.font=`800 ${Math.round(w*.1)}px GameFont,system-ui,sans-serif`;c.textAlign='center';c.textBaseline='middle';c.fillText(label,0,h/2-w*.12);c.restore();}
// ---------- Grand level-complete screen ----------
const coinSvg='<svg class="coin" viewBox="0 0 24 24"><use href="#i-coin"/></svg>';
function showResult(g){try{clearTimeout(tipH);if(G)G.tips=[];}catch(e){}try{const tp=document.getElementById("tip");if(tp){tp.classList.remove("on","show");tp.style.display="none";setTimeout(()=>{tp.style.display=""},50);}}catch(e){}const r=g.rew||calcRew(g,true);const ch=g.ch;const el=ovEl('res');el.className='ov3 res';el.style.display='block';$('pop').style.display='none';
 const li0=lvlInfo(r.xp0??S3.xp-r.xp),last=isLastLv(g.i);const types=[...new Set(g.st.veh.map(v=>v.type).filter(t=>'EKTA'.includes(t)))];if(!types.length)types.push('E');
 const done=!!S3.dbl[g.i]||(g.help||0)>=2;// rewarded cap: max 2 rewarded ads per level (hint/undo/heart/x2 combined)
 el.innerHTML=`<canvas id="rcv"></canvas><div class="rtop"><div class="rt">${T('win')}</div><div class="rs">${T('winSub')}</div></div>
 <div class="rpanel"><div class="rrow"><canvas id="rbadge" width="96" height="96"></canvas><div class="rk"><b id="rRank">${T('rk'+(rankOf(li0.L)+1))}</b><span id="rLv">${T('lvl')} ${li0.L}</span></div><div class="rcoins">${coinSvg}<b id="rCoin">${r.c0??S3.coins-r.coins}</b></div></div>
 <div class="xpb"><i id="rXp" style="width:${li0.cur/li0.need*100}%"></i><span id="rXpT">+0 ${T('xp')}</span></div>
 <div class="chips">${r.parts.filter(p=>p[1]>0).map(p=>`<span>${T(p[0])} <b>+${Math.round(p[1]*r.m)}</b></span>`).join('')}<span class="cc">${coinSvg}<b>+${r.coins}</b></span></div>
 <div class="newrow" id="rNew"></div>
 <div class="row2"><button class="btn green big" id="rGo">${T('cont')}</button>${done?'':`<button class="btn pink sm" id="rDbl"><svg class="ad" viewBox="0 0 24 24"><use href="#i-play"/></svg>${T('dbl')}</button>`}</div>
 <div class="row4"><button class="btn blue sm" id="rRe">${T('retry')}</button><button class="btn gold sm" id="rGar">${T('garage')}</button><button class="btn gold sm" id="rMap">${T('map')}</button></div></div>
 <div class="tapsp">${T('tapSkip')}</div>`;
 let h3=null;if(UI3()){const f=FAM[ch]||FAM[1];h3=R3.ui.res({ch,stars:r.stars,types:types.map(ty=>[ty,tierOf(ty)]),img:{im:IMG('img/'+f[0]+'.jpg'),crop:[f[1],f[2],f[3]]},label:`${T('saved')} ${r.people}/${r.people}`});OV.h3=h3;}
 const cvs=$('rcv'),ps=PS();let T0=0,spd=1;const st=[0,0,0];let medalOn=false,xpDone=false,fwT=0;AU.win();
 el.onpointerdown=e=>{if(e.target.closest('button'))return;spd=8;};try{el.querySelector('.chips').onclick=e=>{e.currentTarget.classList.toggle('open');};}catch(e){}
 const bc=$('rbadge').getContext('2d');const drawB=rk=>{if(UI3()&&R3.ui.badge(bc,96,rk))return;bc.clearRect(0,0,96,96);rankBadge(bc,48,48,40,rk);};drawB(rankOf(li0.L));
 const anXp=(from,to,dur,cb)=>{let t=0;const lab=$('rXpT');const step=()=>{if(!document.body.contains(lab))return;t+=1/60*spd;const u=Math.min(1,t/dur);const v=from+(to-from)*E.out(u);const li=lvlInfo(v);
   $('rXp').style.width=(li.cur/li.need*100)+'%';$('rLv').textContent=T('lvl')+' '+li.L;lab.textContent='+'+Math.round(v-from+(xpBase))+' '+T('xp');const rk=rankOf(li.L);if($('rRank').dataset.rk!=rk){$('rRank').dataset.rk=rk;$('rRank').textContent=T('rk'+(rk+1));drawB(rk);}
   $('rCoin').textContent=Math.round(cFrom+(cTo-cFrom)*E.out(u));if(li.L>curL){curL=li.L;levelUp(li.L);}if(u<1)requestAnimationFrame(step);else cb&&cb();};step();};
 let xpBase=0,cFrom=r.c0??S3.coins-r.coins,cTo=S3.coins,curL=li0.L;const xp0=r.xp0??S3.xp-r.xp;
 function levelUp(L){AU.bell(1);const rk=rankOf(L),prk=rankOf(L-1);el.querySelectorAll('.lvup:not(.rank)').forEach(x=>x.remove());if(el.querySelector('.lvup.rank'))return;const b=document.createElement('div');b.className='lvup'+(rk>prk?' rank':'');
  b.innerHTML=rk>prk?`<canvas width="240" height="240"></canvas><div class="lt">${T('rankUp')}</div><div class="ln">${T('rk'+(rk+1))}</div><div class="ls">${T('tapGo')}</div>`:`<div class="lt">${T('levelUp')}</div><div class="ln">${T('lvl')} ${L}</div>`;el.appendChild(b);
  if(rk>prk&&UI3()){const cv=b.querySelector('canvas');const c=cv.getContext('2d');const hr=R3.ui.rank(rk);if(hr){cv.className='r3';let last=performance.now();(function a(now){if(!document.body.contains(b)){hr.dispose();return;}const w=cv.clientWidth,hh=cv.clientHeight,dpr=Math.min(2,window.devicePixelRatio||1);if(cv.width!==Math.round(w*dpr)){cv.width=Math.round(w*dpr);cv.height=Math.round(hh*dpr);}c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,hh);const dt=Math.min(.05,((now||last)-last)/1000);last=now||last;try{hr.draw(c,w,hh,dt);}catch(e){R3.ui.fail(e);b.remove();return;}requestAnimationFrame(a);})();}}
  if(rk>prk){if(!b.querySelector('canvas.r3')){const c=b.querySelector('canvas').getContext('2d');let t=0;(function a(){if(!document.body.contains(b))return;t+=1/60;c.setTransform(2,0,0,2,0,0);c.clearRect(0,0,120,120);c.save();c.translate(60,60);c.rotate(t*.6);c.globalCompositeOperation='lighter';for(let k=0;k<12;k++){c.rotate(TAU/12);c.fillStyle='rgba(255,200,80,.18)';c.beginPath();c.moveTo(0,0);c.lineTo(70,-8);c.lineTo(70,8);c.fill();}c.restore();rankBadge(c,60,60,34*Math.min(1,E.back(Math.min(1,t*2))),rk);requestAnimationFrame(a);})();}
   for(let k=0;k<3;k++)setTimeout(()=>firework(ps,Math.random()*innerWidth,innerHeight*(.15+Math.random()*.2),['#ffd23f','#fff','#ff8a3c']),k*250);b.onpointerdown=e=>{e.stopPropagation();b.remove();};AU.win();}
  else setTimeout(()=>b.remove(),1600);}
 const newShow=()=>{const items=newItems(xp0,S3.xp);$('rNew').innerHTML=items.map(([k,txt])=>`<span class="nb"><i>${T('newU')}</i>${txt}</span>`).join('');};
 ovLoop(cvs,(c,w,h,dt)=>{T0+=dt*spd;const t=T0;ps.step(dt*Math.min(spd,2));
  // scene: extinguished building, push-in, steam, clearing sky
  const pnl0=el.querySelector('.rpanel'),pt0=pnl0?pnl0.offsetTop:h;if(h3&&!el.querySelector('.lvup.rank')){try{h3.draw(c,w,h,t,dt,pt0);}catch(e){R3.ui.fail(e);try{h3.dispose();}catch(_){}h3=null;OV.h3=null;}}else if(h3){c.fillStyle='#06080e';c.fillRect(0,0,w,h);}
  if(!h3){const sh=h*.64;const fire=Math.max(0,.7-t*.5);drawScene(c,ch,0,0,w,sh,TT,fire,{steam:1,zoom:1.12+Math.min(1,t/7)*.16,noVig:true});
  const dawn=Math.min(1,t/3);c.save();c.globalCompositeOperation='screen';const sg=c.createLinearGradient(0,0,0,sh);sg.addColorStop(0,`rgba(255,190,110,${.32*dawn})`);sg.addColorStop(.6,`rgba(255,140,80,${.1*dawn})`);sg.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=sg;c.fillRect(0,0,w,sh);c.restore();
  if(!LOW()){c.save();c.globalCompositeOperation='lighter';c.translate(w*.5,-h*.05);for(let k=0;k<7;k++){const a=Math.PI/2+Math.sin(TT*.2+k)*.05+(k-3)*.17;c.save();c.rotate(a-Math.PI/2);const g=c.createLinearGradient(0,0,0,sh*1.1);g.addColorStop(0,`rgba(255,225,170,${.1*dawn})`);g.addColorStop(1,'rgba(255,225,170,0)');c.fillStyle=g;c.beginPath();c.moveTo(-6,0);c.lineTo(-w*.12,sh*1.1);c.lineTo(w*.12,sh*1.1);c.lineTo(6,0);c.fill();c.restore();}c.restore();}
  // steam plumes
  for(let k=0;k<8;k++){const u=((TT*.12+k/8)%1);const x=w*(.15+k*.1)+Math.sin(TT*.5+k)*10,y=sh*(.62-u*.55),r=w*(.05+u*.12);const sg2=c.createRadialGradient(x,y,0,x,y,r);sg2.addColorStop(0,`rgba(238,242,247,${(1-u)*.22})`);sg2.addColorStop(1,'rgba(238,242,247,0)');c.fillStyle=sg2;c.fillRect(x-r,y-r,r*2,r*2);}
  const fg=c.createLinearGradient(0,sh*.55,0,h);fg.addColorStop(0,'rgba(6,8,14,0)');fg.addColorStop(.35,'rgba(6,8,14,.75)');fg.addColorStop(1,'#06080e');c.fillStyle=fg;c.fillRect(0,sh*.55,w,h-sh*.55);
  // vehicle lineup with flashing lights + wet reflections
  const pnl=el.querySelector('.rpanel'),pt=pnl?pnl.getBoundingClientRect().top:h;const y0=Math.min(sh*.9,pt+4),n=types.length,vs=Math.max(40,Math.min(w*.2,sh*.3,(y0-h*.3)*.75));types.forEach((ty,i)=>{const u=clamp((t-.2-i*.12)/.6,0,1);const x=w*(.5+(i-(n-1)/2)*.24)+(1-E.out(u))*w*(i%2?1:-1);const tier=tierOf(ty);
   c.save();c.fillStyle='rgba(0,0,0,.5)';c.beginPath();c.ellipse(x,y0+vs*.02,vs*.48,vs*.12,0,0,TAU);c.fill();c.restore();
   drawTT(c,ty,tier,x,y0,vs,TAU*6/16,{siren:true,t:TT,ph:i});});}
  // stars
  const sr=Math.min(w*.085,44),sy=h*.2;[0,1,2].forEach(k=>{const ts=.5+k*.28;const u=clamp((t-ts)/.45,0,1);const on=k<r.stars;if(on&&u>0&&!st[k]){st[k]=1;AU.star(k);for(let q=0;q<22;q++){const a=Math.random()*TAU,v=80+Math.random()*160;ps.add({x:w/2+(k-1)*sr*2.5,y:sy-(k===1?sr*.35:0),vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:120,r:1.5+Math.random()*2,max:.8,col:q%2?'#ffd23f':'#fff',add:1});}}
   const sc=on?E.back(u):1;const x=w/2+(k-1)*sr*2.5,y=sy-(k===1?sr*.35:0);if(h3)return;if(on&&u>0&&!LOW()){c.save();c.translate(x,y);c.rotate(TT*.4);c.globalCompositeOperation='lighter';for(let q=0;q<10;q++){c.rotate(TAU/10);c.fillStyle='rgba(255,210,90,.10)';c.beginPath();c.moveTo(0,0);c.lineTo(sr*2.2,-sr*.22);c.lineTo(sr*2.2,sr*.22);c.fill();}c.restore();}
   goldStar(c,x,y,sr*(k===1?1.18:1)*(on?Math.max(.01,sc):1),on&&u>0,on?.6+.4*Math.sin(TT*3+k):0);});
  // medal + rescued polaroid
  const mu=clamp((t-1.4)/.5,0,1);if(mu>0){if(!medalOn){medalOn=true;AU.bell(.6);}const mr=Math.min(w*.1,46);if(!h3)medal(c,w*.24,h*.36+(1-E.back(mu))*-h*.2,mr,r.stars,TT);}
  const pu=clamp((t-1.7)/.5,0,1);if(pu>0&&!h3)polaroid(c,w*.72+(1-E.out(pu))*w*.5,h*.37,Math.min(w*.32,150),ch,TT,`${T('saved')} ${r.people}/${r.people}`);
  // fireworks
  fwT-=dt;if(t>.9&&t<7&&fwT<=0){fwT=.55+Math.random()*.4;firework(ps,w*(.15+Math.random()*.7),h*(.06+Math.random()*.2),[['#ffd23f','#fff4c0','#ff9a3a'],['#7ad0ff','#fff','#3a8ee0'],['#ff6a8a','#fff','#ffd23f']][Math.floor(Math.random()*3)]);if(Math.random()<.5)AU.tone(90+Math.random()*40,.25,'sawtooth',.04);}
  ps.draw(c);
  if(!xpDone&&t>2){xpDone=true;anXp(xp0,S3.xp,1.4,()=>{newShow();});}});
 const go=()=>{AU.click();closeOv();afterLevel(g);};
 $('rGo').onclick=go;$('rRe').onclick=()=>{AU.click();closeOv();Ads.maybeInterstitial(g.i+1);startLevel(g.i);};$('rMap').onclick=()=>{AU.click();closeOv();Ads.maybeInterstitial(g.i+1);showMap();};
 $('rGar').onclick=()=>{AU.click();showGarage(()=>showResultStatic(g));};
 const db=$('rDbl');if(db)db.onclick=()=>{if(db.disabled)return;AU.click();db.disabled=true;Ads.rewarded().then(okk=>{db.disabled=false;if(!okk){toast(T('adFail'));return;}g.help=(g.help||0)+1;S3.dbl[g.i]=1;const c0=S3.coins;S3.xp+=r.xp;S3.coins+=r.coins;persist();db.remove();spd=1;xpBase=r.xp;cFrom=c0;cTo=S3.coins;const x0=S3.xp-r.xp;anXp(x0,S3.xp,1.2,newShow);});};}
function showResultStatic(g){closeOv();const r=g.rew;if(r){r.xp0=S3.xp-0;r.c0=S3.coins;}g.rew=Object.assign({},r||calcRew(g,true),{xp:0,coins:0,xp0:S3.xp,c0:S3.coins});showResult(g);}
// ---------- Game-over screen ----------
function showGameOver(g){const el=ovEl('res');el.className='ov3 res lose';el.style.display='block';$('pop').style.display='none';
 el.innerHTML=`<canvas id="rcv"></canvas><div class="rtop"><div class="rt">${T('lose')}</div><div class="rs">${T('loseSub')}</div></div><div class="rpanel">
 ${g.help<2?`<button class="btn pink big" id="gHeart"><svg class="ad" viewBox="0 0 24 24"><use href="#i-play"/></svg><span>${T('heart')}<small>${T('video')}</small></span></button>`:''}
 <button class="btn green big" id="gRe">${T('retry')}</button><div class="row4"><button class="btn gold sm" id="gGar">${T('garage')}</button><button class="btn gold sm" id="gMap">${T('map')}</button></div></div>`;
 const cvs=$('rcv'),ps=PS();let t=0;ovLoop(cvs,(c,w,h,dt)=>{t+=dt;ps.step(dt);const sh=h*.7;drawScene(c,g.ch,0,0,w,sh,TT,1.25,{zoom:1.1+Math.min(1,t/6)*.12,noVig:true,waiting:2,boss:true});
  c.save();c.globalCompositeOperation='multiply';c.fillStyle='rgba(200,60,40,.35)';c.fillRect(0,0,w,sh);c.restore();
  if(Math.random()<.6)ps.add({x:Math.random()*w,y:sh,vx:(Math.random()-.4)*30,vy:-60-Math.random()*90,r:1+Math.random()*2,max:2.5,col:Math.random()<.5?'#ffcf5a':'#ff7a2a',add:1});
  const fg=c.createLinearGradient(0,sh*.5,0,h);fg.addColorStop(0,'rgba(10,4,4,0)');fg.addColorStop(.4,'rgba(10,4,4,.8)');fg.addColorStop(1,'#080406');c.fillStyle=fg;c.fillRect(0,sh*.5,w,h);
  const vs=Math.min(w*.26,sh*.36);drawTT(c,'E',tierOf('E'),w*.5,sh*.92,vs,TAU*6/16,{filter:'brightness(.7)'});
  for(let k=0;k<5;k++){const u=((t*.2+k/5)%1);c.globalAlpha=(1-u)*.25;c.fillStyle='#3a3438';c.beginPath();c.arc(w*(.2+k*.15),sh*(.6-u*.5),w*(.06+u*.15),0,TAU);c.fill();}c.globalAlpha=1;ps.draw(c);});
 const on=(id,f)=>{const e=$(id);if(e)e.onclick=()=>{AU.click();f();};};
 on('gHeart',()=>{Ads.rewarded().then(okk=>{if(!okk){toast(T('adFail'));return;}if(!G)return;G.help++;G.hearts=Math.min(3,G.hearts+1);AU.heart();G.state='play';closeOv();updHUD();});});
 on('gRe',()=>{closeOv();startLevel(g.i);});on('gMap',()=>{closeOv();showMap();});on('gGar',()=>showGarage(()=>showGameOver(g)));}
window.endPopup=function(winb){if(!G)return;if(winb)showResult(G);else showGameOver(G);};
const _render=window.render;window.render=function(){const r=$('res'),gg=$('gar'),sl=$('slog');if((r&&r.style.display==='block')||(gg&&gg.style.display==='block')||(sl&&sl.style.display==='block'))return;_render();};
// ---------- Serialized story: one beat after every level ----------
const SEQS=window.__ft.SEQS;const SQ=window.SQ;
// [image, kb(cx0,cy0,z0,cx1,cy1,z1), grade, fx, flip]
const BEATS=[
 ['c1',[.4,.72,1.55,.45,.62,1.3],'warm','embers'],['i3',[.5,.4,1.35,.45,.45,1.15],'warm','embers'],['i1',[.35,.7,1.6,.3,.65,1.3],'night','fireflies'],['bg1',[.55,.7,1.9,.5,.75,2.2],'cool','embers',1],['c1',[.6,.25,1.5,.55,.35,1.25],'cool','embers',1],['c2',[.5,.3,1.0,.5,.4,1.25],'dusk','embers'],
 ['bg2',[.4,.5,1.7,.6,.5,1.9],'warm','lanterns'],['b2',[.5,.5,1.25,.55,.45,1.05],'warm','sparkle'],['c2',[.5,.75,1.4,.45,.7,1.2],'warm','lanterns',1],['i4',[.5,.45,1.3,.5,.5,1.1],'cool','alarm'],['e2',[.7,.45,1.5,.75,.4,1.35],'cool','none'],['c3',[.5,.3,1.0,.5,.35,1.25],'dusk','sparks'],
 ['bg3',[.4,.5,1.8,.5,.5,2.1],'fog','fog'],['c3',[.5,.72,1.45,.5,.65,1.25],'fog','fog',1],['b3',[.5,.4,1.3,.5,.5,1.1],'cool','sparks'],['i4',[.3,.6,1.6,.35,.55,1.4],'cool','sparks',1],['bg5',[.5,.4,1.6,.5,.45,1.9],'storm','rain'],['c4',[.5,.35,1.0,.5,.45,1.25],'dusk','ash'],
 ['bg4',[.5,.5,1.7,.5,.55,2.0],'warm','ash'],['i3',[.6,.6,1.6,.55,.55,1.3],'warm','ash',1],['c4',[.5,.6,1.5,.5,.55,1.25],'warm','ash',1],['b4',[.5,.45,1.25,.5,.5,1.05],'warm','sparkle'],['bg4',[.6,.5,1.8,.55,.55,2.1],'night','fireflies',1],['bg5',[.5,.5,1.6,.5,.4,1.3],'storm','rain'],
 ['c5',[.5,.3,1.2,.5,.4,1.0],'storm','rain'],['b1',[.65,.4,1.6,.6,.45,1.35],'storm','rain',1],['c5',[.5,.65,1.5,.5,.5,1.25],'storm','rain'],['i2',[.5,.5,1.3,.5,.45,1.1],'storm','rain'],['bg5',[.5,.6,1.9,.5,.5,1.6],'cool','sparkle'],['e1',[.5,.4,1.3,.5,.5,1.05],'dawn','dawn']];
BEATS.forEach((b,i)=>{SEQS['s'+(i+1)]=[{im:b[0],kb:b[1],grade:b[2],fx:b[3],flip:!!b[4],cap:['s'+String(i+1).padStart(2,'0')],d:4.4,beat:i+1}];});
// epilogue shot before credits
if(!SEQS.ending.some(s=>s.ep)){const ci=SEQS.ending.findIndex(s=>s.credits);SEQS.ending.splice(ci,0,{im:'e1',cap:['ep1'],d:5.4,kb:[.5,.55,1.05,.5,.45,1.25],fx:'confetti',grade:'gold',ep:1});}
function afterLevel(g){const i=g.i;if(!isLastLv(i))Ads.maybeInterstitial(i+1);const next=()=>{if(isLastLv(i)){playEnding();return;}startLevel(i+1);};
 const beat=()=>{if(!S3.beats[i]||window.__ft.alwaysBeat){S3.beats[i]=1;persist();playSeq('s'+(i+1),next);}else next();};
 if(g.L.boss&&!isLastLv(i)&&SEQS['b'+g.ch]&&!S3.boss[g.ch]){S3.boss[g.ch]=1;persist();playSeq('b'+g.ch,beat);}else beat();}
const GRADE={night:[['multiply','rgba(110,130,190,.5)']],dawn:[['screen','rgba(255,170,90,.22)']],warm:[['screen','rgba(255,130,50,.14)'],['multiply','rgba(255,220,190,.9)']],cool:[['multiply','rgba(150,175,215,.7)']],
 storm:[['multiply','rgba(150,165,205,.55)']],fog:[['screen','rgba(200,210,225,.2)']],gold:[['screen','rgba(255,205,120,.2)']],dusk:[['multiply','rgba(200,140,170,.7)'],['screen','rgba(255,120,60,.1)']]};
function drawShot3(s,lt,alpha){if(!s||s.credits)return;const im=IMG('img/'+s.im+'.jpg');if(!ok(im))return;const u=E.io(clamp(lt/s.d,0,1));const k=s.kb;
 const cxn=lerp(k[0],k[3],u),cyn=lerp(k[1],k[4],u),z=lerp(k[2],k[5],u);const iw=im.naturalWidth,ih=im.naturalHeight;const sc=Math.max(W/iw,H/ih)*z;const dw=iw*sc,dh=ih*sc;
 const x=clamp(W/2-cxn*dw,W-dw,0),y=clamp(H/2-cyn*dh,H-dh,0);cx.save();cx.globalAlpha=alpha;if(s.flip){cx.translate(W,0);cx.scale(-1,1);}cx.drawImage(im,x,y,dw,dh);
 (GRADE[s.grade]||[]).forEach(([op,col])=>{cx.globalCompositeOperation=op;cx.fillStyle=col;cx.fillRect(0,0,W,H);});cx.restore();}
window.drawStory=function(){cx.fillStyle='#000';cx.fillRect(0,0,W,H);if(!SQ.seq)return;const s=SQ.seq[SQ.i];
 if(s.credits){drawShot3(SQ.seq[SQ.i-1],SQ.seq[SQ.i-1].d,1);cx.fillStyle='rgba(0,0,0,.72)';cx.fillRect(0,0,W,H);return;}
 const fadeIn=clamp(SQ.t/.7,0,1);if(SQ.prev&&fadeIn<1)drawShot3(SQ.prev.s,SQ.prev.t,1);drawShot3(s,SQ.t,fadeIn);
 if(!SQ.seq[SQ.i+1]){const fo=clamp((s.d-SQ.t)/.5,0,1);if(fo<1){cx.fillStyle=`rgba(0,0,0,${1-fo})`;cx.fillRect(0,0,W,H);}}
 if(s.fx==='fog'&&!LOW()){for(let k=0;k<4;k++){const x=((TT*12*(k+1)+k*W*.4)%(W*1.6))-W*.3,y=H*(.45+k*.1);const g=cx.createRadialGradient(x,y,0,x,y,W*.5);g.addColorStop(0,'rgba(230,230,240,.16)');g.addColorStop(1,'rgba(230,230,240,0)');cx.fillStyle=g;cx.fillRect(x-W*.5,y-W*.5,W,W);}}
 if(s.fx==='alarm'){cx.fillStyle=Math.sin(TT*10)>0?'rgba(255,30,30,.12)':'rgba(30,80,255,.08)';cx.fillRect(0,0,W,H);}
 if(s.fx==='rain'||s.grade==='storm'){cx.fillStyle='rgba(20,30,60,.1)';cx.fillRect(0,0,W,H);if(s.grade==='storm'&&!LOW()){const fl=(TT*.7)%3.3;if(fl<.08||(fl>.16&&fl<.21)){cx.fillStyle='rgba(225,235,255,.45)';cx.fillRect(0,0,W,H);}}}
 const lb=H*.065;cx.fillStyle='#000';cx.fillRect(0,0,W,lb);cx.fillRect(0,H-lb,W,lb);
 const vg=cx.createRadialGradient(W/2,H/2,Math.min(W,H)*.35,W/2,H/2,Math.max(W,H)*.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.55)');cx.fillStyle=vg;cx.fillRect(0,0,W,H);
 const a=clamp(SQ.t/.5,0,1);cx.save();cx.globalAlpha=a;cx.textAlign='center';cx.textBaseline='middle';
 if(s.title){cx.fillStyle='rgba(255,215,160,.95)';cx.font=`800 ${Math.round(Math.min(W*.045,20))}px GameFont,system-ui,sans-serif`;cx.fillText((T('chapter')+' '+s.title).toUpperCase(),W/2,H*.15);
  cx.font=`900 ${Math.round(Math.min(W*.09,42))}px GameFont,system-ui,sans-serif`;cx.lineWidth=5;cx.strokeStyle='rgba(60,10,0,.85)';cx.strokeText(T('c'+s.title),W/2,H*.15+Math.min(W*.1,46));cx.fillStyle='#ffd23f';cx.fillText(T('c'+s.title),W/2,H*.15+Math.min(W*.1,46));}
 if(s.beat){const ch=Math.ceil(s.beat/6);cx.font=`800 ${Math.round(Math.min(W*.036,15))}px GameFont,system-ui,sans-serif`;cx.fillStyle='rgba(255,220,170,.9)';cx.fillText(`${T('chapter')} ${ch} · ${T('level')} ${s.beat}`,W/2,lb+H*.035);
  const n=s.beat;cx.fillStyle='rgba(255,255,255,.25)';const dw=Math.min(W*.6,240);rr(cx,W/2-dw/2,lb+H*.06,dw,3,1.5);cx.fill();cx.fillStyle='#ffd23f';rr(cx,W/2-dw/2,lb+H*.06,dw*n/30,3,1.5);cx.fill();
  if(SQ.t>1.4){cx.globalAlpha=.5+.5*Math.sin(TT*4);cx.font=`700 ${Math.round(Math.min(W*.034,14))}px GameFont,system-ui,sans-serif`;cx.fillStyle='#fff';cx.fillText(T('tapGo'),W/2,H-lb-H*.025);}}
 cx.restore();};
// tap during story = next shot
document.addEventListener('pointerdown',e=>{if(e.target.closest&&e.target.closest('button'))return;if(MODE!=='story'||!SQ.seq)return;const s=SQ.seq[SQ.i];if(s&&!s.credits&&SQ.t>.6){SQ.t=s.d;SQ.tap=1;}});
// ---------- Story log / gallery ----------
function logEntries(){const L=[];const cl=i=>SAVE.stars[i]>0;L.push({k:'intro',im:'i1',lab:T('story'),ok:!!SAVE.seen.story||cl(0)});
 for(let ch=1;ch<=5;ch++){L.push({k:'c'+ch,im:'c'+ch,lab:`${T('chapter')} ${ch}`,ok:cl((ch-1)*6)||!!SAVE.seen['ch'+ch],head:T('c'+ch)});
  for(let j=0;j<6;j++){const i=(ch-1)*6+j;L.push({k:'s'+(i+1),im:BEATS[i][0],lab:`${T('level')} ${i+1}`,ok:cl(i),grade:BEATS[i][2],flip:BEATS[i][4]});if(j===5&&ch<5)L.push({k:'b'+ch,im:'b'+ch,lab:'★ '+T('c'+ch),ok:cl(i)});}}
 L.push({k:'ending',im:'e2',lab:T('theEnd'),ok:!!SAVE.seen.ending||cl(29)});return L;}
function showLog(){const el=ovEl('slog');el.className='ov3 slog';el.style.display='block';const L=logEntries();const n=L.filter(e=>e.ok).length;
 el.innerHTML=`<div class="ghead"><button class="rb green" id="lBack" aria-label="back"><svg viewBox="0 0 24 24"><use href="#i-home"/></svg></button><div class="gtitle">${T('storyLog')}</div><div class="pill">${n}/${L.length}</div></div><div class="lgrid">${L.map((e,i)=>(e.head?`<div class="lhead">${e.lab} · ${e.head}</div>`:'')+`<button class="lcard ${e.ok?'':'lock'}" data-i="${i}"><canvas width="200" height="260"></canvas><span>${e.ok?e.lab:'🔒 '+T('locked')}</span></button>`).join('')}</div>`;
 el.querySelectorAll('.lcard').forEach(b=>{const e=L[+b.dataset.i];const c=b.querySelector('canvas'),g=c.getContext('2d');const im=IMG('img/'+e.im+'.jpg');const draw=()=>{g.fillStyle='#111';g.fillRect(0,0,200,260);if(!ok(im))return;const sc=Math.max(200/im.naturalWidth,260/im.naturalHeight);g.save();if(e.flip){g.translate(200,0);g.scale(-1,1);}g.drawImage(im,(200-im.naturalWidth*sc)/2,(260-im.naturalHeight*sc)/2,im.naturalWidth*sc,im.naturalHeight*sc);(GRADE[e.grade]||[]).forEach(([op,col])=>{g.globalCompositeOperation=op;g.fillStyle=col;g.fillRect(0,0,200,260);});g.restore();if(!e.ok){g.fillStyle='rgba(0,0,0,.72)';g.fillRect(0,0,200,260);}};
  if(ok(im))draw();else im.addEventListener('load',draw,{once:true});
  b.onclick=()=>{if(!e.ok){AU.tone(200,.1,'triangle',.2);return;}AU.click();closeOv();if(e.k==='ending')playSeq('ending',()=>showLog());else playSeq(e.k,()=>{showMap();showLog();});};});
 $('lBack').onclick=()=>{AU.click();closeOv();showMap();};}
// ---------- Garage: fleet upgrades, paint, sirens ----------
const VK=['E','K','T','A'];
function perkText(k,t){if(k==='E')return t?T('pE').replace('{n}',Math.round((1-PERK.E[t])*100)):T('pBase');if(k==='K')return t?T('pK').replace('{n}',Math.round(PERK.K[t]*100)):T('pBase');if(k==='T')return t?T('pT').replace('{n}',PERK.T[t]):T('pBase');return t?T('pA'+t):T('pBase');}
function showGarage(back){const el=ovEl('gar');el.className='ov3 gar';el.style.display='block';let sel=el.dataset.sel||'E';const L=lvlInfo(S3.xp).L;
 const render=()=>{const t=tierOf(sel),max=t>=3,cost=UPC[t];
  el.innerHTML=`<div class="ghead"><button class="rb green" id="gBack" aria-label="back"><svg viewBox="0 0 24 24"><use href="#i-home"/></svg></button><div class="gtitle">${T('garage')}</div><div class="pill gc">${coinSvg}<b>${S3.coins}</b></div></div>
  <div class="show"><canvas id="gcv"></canvas></div>
  <div class="gtabs">${VK.map(k=>`<button class="gtab ${k===sel?'on':''}" data-k="${k}"><canvas width="120" height="90" data-k="${k}"></canvas><span>${T('v'+k)}</span><i>${'★'.repeat(tierOf(k))}${'☆'.repeat(3-tierOf(k))}</i></button>`).join('')}</div>
  <div class="ginfo"><div class="gname">${T('v'+sel)} <span class="tier">${T('tier')} ${t}/3</span></div>
   <div class="pips">${[1,2,3].map(n=>`<i class="${n<=t?'on':''}"></i>`).join('')}</div>
   <div class="perk"><b>${perkText(sel,t)}</b>${max?'':`<span>→ ${perkText(sel,t+1)}</span>`}</div>
   ${max?`<div class="maxed">${T('maxed')}</div>`:`<button class="btn green big" id="gUp" ${S3.coins<cost?'disabled':''}>${T('upgrade')} ${coinSvg}${cost}</button>`}
   <div class="glab">${T('skins')}</div><div class="sw">${[0,1,2,3].map(i=>{const lk=L<SKIN_LV[i];return `<button class="swb ${S3.skin===i?'on':''} ${lk?'lock':''}" data-s="${i}"><i class="sk${i}"></i><span>${lk?T('lvl')+' '+SKIN_LV[i]:T('sk'+i)}</span></button>`;}).join('')}</div>
   <div class="glab">${T('sirens')}</div><div class="sw">${[0,1,2].map(i=>{const lk=L<SIREN_LV[i];return `<button class="srb ${S3.siren===i?'on':''} ${lk?'lock':''}" data-r="${i}">♪ ${lk?T('lvl')+' '+SIREN_LV[i]:T('sr'+i)}</button>`;}).join('')}</div></div>`;
  el.querySelectorAll('.gtab').forEach(b=>b.onclick=()=>{AU.click();sel=el.dataset.sel=b.dataset.k;render();});
  el.querySelectorAll('.gtab canvas').forEach(c=>{const g=c.getContext('2d');const k=c.dataset.k;const d=()=>{g.clearRect(0,0,120,90);drawTT(g,k,tierOf(k),60,62,64,TAU*6/16,{});};if(ok(ttImg()))d();else ttImg().addEventListener('load',d,{once:true});});
  $('gBack').onclick=()=>{AU.click();closeOv();back?back():showMap();};
  const up=$('gUp');if(up)up.onclick=()=>{if(S3.coins<cost){toast(T('notEnough'));return;}S3.coins-=cost;S3.fleet[sel]=t+1;persist();CACHE.clear();AU.win();UPF=1;render();};
  el.querySelectorAll('.swb').forEach(b=>b.onclick=()=>{const i=+b.dataset.s;if(b.classList.contains('lock')){AU.tone(200,.1,'triangle',.2);return;}AU.click();S3.skin=i;persist();CACHE.clear();render();});
  el.querySelectorAll('.srb').forEach(b=>b.onclick=()=>{const i=+b.dataset.r;if(b.classList.contains('lock')){AU.tone(200,.1,'triangle',.2);return;}AU.init();S3.siren=i;persist();AU.sirenUntil=0;AU.siren(1.6,0,0);render();});
  let rot=0,UPF=0;const ps=PS();ovLoop($('gcv'),(c,w,h,dt)=>{rot+=dt*.55;ps.step(dt);
   const bg=c.createRadialGradient(w/2,h*.3,0,w/2,h*.3,Math.max(w,h)*.8);bg.addColorStop(0,'#3a3f52');bg.addColorStop(.55,'#161922');bg.addColorStop(1,'#07080c');c.fillStyle=bg;c.fillRect(0,0,w,h);
   // showroom floor + spotlight
   const fy=h*.66;const fl=c.createLinearGradient(0,fy-h*.1,0,h);fl.addColorStop(0,'#1c1f28');fl.addColorStop(1,'#0a0b10');c.fillStyle=fl;c.fillRect(0,fy-h*.1,w,h);
   c.save();c.globalCompositeOperation='lighter';const sp=c.createRadialGradient(w/2,fy,0,w/2,fy,w*.45);sp.addColorStop(0,'rgba(255,240,210,.28)');sp.addColorStop(1,'rgba(255,240,210,0)');c.fillStyle=sp;c.save();c.translate(w/2,fy);c.scale(1,.32);c.translate(-w/2,-fy);c.fillRect(0,fy-w*.45,w,w*.9);c.restore();
   const cone=c.createLinearGradient(0,0,0,fy);cone.addColorStop(0,'rgba(255,240,210,.18)');cone.addColorStop(1,'rgba(255,240,210,0)');c.fillStyle=cone;c.beginPath();c.moveTo(w*.44,0);c.lineTo(w*.56,0);c.lineTo(w*.85,fy);c.lineTo(w*.15,fy);c.fill();c.restore();
   const vs=Math.min(w*.4,h*.55);c.save();c.fillStyle='rgba(0,0,0,.55)';c.filter=LOW()?'none':'blur(6px)';c.beginPath();c.ellipse(w/2,fy+vs*.02,vs*.5,vs*.13,0,0,TAU);c.fill();c.restore();
   drawTT(c,sel,tierOf(sel),w/2,fy,vs,rot,{smooth:true,siren:true,t:TT,hd:true});
   if(UPF>0){UPF-=dt;if(UPF>.95)for(let q=0;q<40;q++){const a=Math.random()*TAU,v=60+Math.random()*180;ps.add({x:w/2,y:fy-vs*.2,vx:Math.cos(a)*v,vy:Math.sin(a)*v-60,g:160,r:2+Math.random()*2,max:1,col:q%2?'#ffd23f':'#fff',add:1});}}
   ps.draw(c);});};
 render();}
// ---------- Map: player bar (rank, level, XP, coins) + garage + story log ----------
const _showMap3=window.showMap;window.showMap=function(){closeOv();_showMap3();const m=$('map');if(!m||$('pbar'))return;const li=lvlInfo(S3.xp),rk=rankOf(li.L);const d=document.createElement('div');d.id='pbar';d.className='pbar';
 d.innerHTML=`<canvas width="88" height="88"></canvas><div class="pinfo"><b>${T('rk'+(rk+1))}</b><span>${T('lvl')} ${li.L}</span><div class="xpm"><i style="width:${li.cur/li.need*100}%"></i></div></div><div class="pc">${coinSvg}<b>${S3.coins}</b></div><button class="rb gold" id="mGar" aria-label="garage"><svg viewBox="0 0 24 24"><use href="#i-wrench"/></svg></button><button class="rb blue" id="mLog" aria-label="story log"><svg viewBox="0 0 24 24"><use href="#i-book"/></svg></button>`;
 const h=m.querySelector('.mhead');h.after(d);rankBadge(d.querySelector('canvas').getContext('2d'),44,44,36,rk);
 if(VK.some(k=>tierOf(k)<3&&S3.coins>=UPC[tierOf(k)]))$('mGar').classList.add('dot');
 $('mGar').onclick=()=>{AU.click();showGarage(()=>showMap());};$('mLog').onclick=()=>{AU.click();showLog();};};
const _showTitle3=window.showTitle;window.showTitle=function(){closeOv();_showTitle3();};
// ---------- Test / debug hooks ----------
Object.assign(window.__ft,{S3,lvlInfo,rankOf,calcRew,showResult:()=>G&&showResult(G),showGameOver:()=>G&&showGameOver(G),garage:showGarage,storyLog:showLog,afterLevel:()=>G&&afterLevel(G),BEATS,showMap:window.showMap,showTitle:window.showTitle,startLevel:window.startLevel,closeOv,
 migrate,v3:true,alwaysBeat:false});
const _start=window.__ft.start;if(_start)window.__ft.start=function(i,sk){closeOv();return _start(i,sk);};
const dbg=new URLSearchParams(location.search).get('debug');
if(dbg)setTimeout(()=>{if(/^s\d+$/.test(dbg))playSeq(dbg,()=>showMap());else if(dbg==='garage')showGarage();else if(dbg==='log'){showMap();showLog();}
 else if(dbg==='result'||dbg==='lose'){window.__ft.noTut=true;startLevel(4,true);setTimeout(()=>{G.rew=calcRew(G,true);G.rew.xp0=S3.xp;G.rew.c0=S3.coins;S3.xp+=G.rew.xp;S3.coins+=G.rew.coins;dbg==='lose'?showGameOver(G):showResult(G);},300);}},2000);
})();
// ---------- Read story captions aloud (Web Speech API) in the game's language; speaker toggle saved in localStorage ----------
(function(){const SS=window.speechSynthesis;const LOC={en:'en-US',th:'th-TH',zh:'zh-CN',ja:'ja-JP',ko:'ko-KR',vi:'vi-VN',id:'id-ID',ms:'ms-MY',hi:'hi-IN',es:'es-ES',pt:'pt-BR',fr:'fr-FR',de:'de-DE',it:'it-IT',ru:'ru-RU',tr:'tr-TR',ar:'ar-SA',nl:'nl-NL',pl:'pl-PL',lo:'lo-LA',fil:'fil-PH'};
 let on=true;try{on=localStorage.getItem('ft_tts')!=='0';}catch(e){}
 const base=l=>String(l||'').toLowerCase().replace('_','-').split('-')[0];
 function tag(){const t=LOC[LANG]||'en-US';// prefer the device's own region when it shares the base language (e.g. es-MX, pt-PT, en-GB)
  const dev=[...(navigator.languages||[]),navigator.language].filter(Boolean).find(d=>base(d)===base(t)||(LANG==='fil'&&/^(tl|fil)/i.test(d)));return dev&&dev.includes('-')?dev:t;}
 function voice(t){if(!SS||!SS.getVoices)return null;const vs=SS.getVoices()||[];if(!vs.length)return undefined;const T=t.toLowerCase().replace('_','-'),b=base(t),alt=b==='fil'?['fil','tl']:[b];
  const m=vs.filter(v=>alt.includes(base(v.lang)));if(!m.length)return null;const sc=v=>(v.lang.toLowerCase().replace('_','-')===T?4:0)+(v.lang.toLowerCase().replace('_','-')===(LOC[LANG]||'').toLowerCase()?2:0)+(v.localService?1:0)+(v.default?.5:0);
  return m.sort((a,b2)=>sc(b2)-sc(a))[0];}
 if(SS&&SS.addEventListener)try{SS.addEventListener('voiceschanged',()=>{});SS.getVoices();}catch(e){}
 let cur=null;
 const TTS=window.TTS={get on(){return on;},supported:!!(SS&&window.SpeechSynthesisUtterance),last:null,
  say(text){if(!on||!TTS.supported||!text)return false;try{SS.cancel();const t=tag();const v=voice(t);if(v===null){TTS.last={text,lang:t,voice:null,skipped:true};return false;}// no voice for this language installed: stay silent rather than mispronounce
    const u=new SpeechSynthesisUtterance(text);u.lang=v&&v.lang?v.lang.replace('_','-'):t;if(v)u.voice=v;u.rate=.95;u.pitch=1.05;u.volume=1;u.onend=u.onerror=()=>{if(cur===u)cur=null;};cur=u;
    TTS.last={text,lang:u.lang,voice:v?v.name:''};SS.speak(u);return true;}catch(e){return false;}},
  stop(){cur=null;try{SS&&SS.cancel();}catch(e){}},busy(){try{return !!(on&&cur&&SS&&(SS.speaking||SS.pending));}catch(e){return false;}},
  set(v){on=!!v;try{localStorage.setItem('ft_tts',on?'1':'0');}catch(e){}if(!on)TTS.stop();upd();}};
 const st=$('story');let b=$('bSpk');if(!b&&st){b=document.createElement('button');b.id='bSpk';b.className='spk';st.appendChild(b);}
 const ic=o=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="#fff"/>${o?'<path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>':'<path d="M16 9l5 6M21 9l-5 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>'}</svg>`;
 function upd(){if(!b)return;b.innerHTML=ic(on);b.setAttribute('aria-label',on?'mute voice':'unmute voice');b.style.display=TTS.supported?'':'none';}
 if(b){upd();b.addEventListener('click',e=>{e.stopPropagation();TTS.set(!on);if(on){const c=$('cap');if(c&&c.classList.contains('on'))TTS.say(c.textContent);}});}
 const sm=window.setMode;window.setMode=function(m){if(m!=='story')TTS.stop();return sm.apply(this,arguments);};
 document.addEventListener('visibilitychange',()=>{if(document.hidden)TTS.stop();});window.addEventListener('pagehide',()=>TTS.stop());
 window.__ft.TTS=TTS;})();
