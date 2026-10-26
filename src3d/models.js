// Vehicle / prop 3D models — v7 high-detail procedural models (all original). Runtime version.
// Axes: +x = front, y = up, z = width. Models are fitted to the grid cell in main.js (bbox fit), so footprints/picking are unchanged.
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const TOP=false;
const M=(c,o={})=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.45,metalness:.1},o));
const P=(c,o={})=>new THREE.MeshPhysicalMaterial(Object.assign({color:c,roughness:.3,metalness:.08,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.15},o));
const tex=(w,h,draw)=>{const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;};
// procedural textures
const T={
 grille:tex(64,64,(g,w,h)=>{g.fillStyle='#1a1b1f';g.fillRect(0,0,w,h);for(let y=4;y<h;y+=9){const gr=g.createLinearGradient(0,y,0,y+5);gr.addColorStop(0,'#f4f6fa');gr.addColorStop(1,'#7b8090');g.fillStyle=gr;g.fillRect(3,y,w-6,5);}g.strokeStyle='#cfd3da';g.lineWidth=4;g.strokeRect(2,2,w-4,h-4);}),
 roll:tex(64,128,(g,w,h)=>{const gr=g.createLinearGradient(0,0,w,0);gr.addColorStop(0,'#9aa0aa');gr.addColorStop(.5,'#eef0f4');gr.addColorStop(1,'#a3a9b3');g.fillStyle=gr;g.fillRect(0,0,w,h);g.fillStyle='rgba(40,44,52,.55)';for(let y=0;y<h;y+=8)g.fillRect(0,y,w,1.6);g.fillStyle='#3a3e46';g.fillRect(w*.38,h-14,w*.24,6);g.strokeStyle='#5b616c';g.lineWidth=3;g.strokeRect(1,1,w-2,h-2);}),
 tread:tex(64,16,(g,w,h)=>{g.fillStyle='#17171a';g.fillRect(0,0,w,h);g.fillStyle='#0b0b0d';for(let x=0;x<w;x+=6)g.fillRect(x,0,3,h);}),
 gauge:tex(128,64,(g,w,h)=>{g.fillStyle='#2b2f37';g.fillRect(0,0,w,h);for(let i=0;i<3;i++){const x=22+i*42;g.fillStyle='#d9dde3';g.beginPath();g.arc(x,24,15,0,7);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(x,24,12,0,7);g.fill();g.strokeStyle='#d01818';g.lineWidth=2;g.beginPath();g.moveTo(x,24);g.lineTo(x+8*Math.cos(i-2.2),24+8*Math.sin(i-2.2));g.stroke();}
  ['#e83030','#3070e8','#f0c020','#30b050'].forEach((c,i)=>{g.fillStyle='#bfc4cc';g.beginPath();g.arc(16+i*32,52,7,0,7);g.fill();g.fillStyle=c;g.beginPath();g.arc(16+i*32,52,4.5,0,7);g.fill();});}),
 plate:tex(64,24,(g,w,h)=>{g.fillStyle='#f4f4ee';g.fillRect(0,0,w,h);g.strokeStyle='#333';g.lineWidth=2;g.strokeRect(1,1,w-2,h-2);g.fillStyle='#222';g.font='bold 15px sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillText('FR 07',w/2,h/2+1);}),
};
// side decal textures (transparent overlays on the paint): stripes, door seams, unit numbers, original emblems
function chevron(g,x,y,w,h,c1,c2){g.save();g.beginPath();g.rect(x,y,w,h);g.clip();for(let i=-2;i<w/h*2+2;i++){g.fillStyle=i%2?c1:c2;g.beginPath();g.moveTo(x+i*h*.6,y+h);g.lineTo(x+i*h*.6+h*.6,y+h);g.lineTo(x+i*h*.6+h*1.2,y);g.lineTo(x+i*h*.6+h*.6,y);g.fill();}g.restore();}
function emblem(g,x,y,r,col){g.save();g.translate(x,y);g.fillStyle='#f3c63a';g.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,rr=i%2?r*.55:r;g.lineTo(Math.cos(a)*rr,Math.sin(a)*rr);}g.closePath();g.fill();g.fillStyle=col;g.beginPath();g.arc(0,0,r*.42,0,7);g.fill();g.fillStyle='#ffd23f';g.beginPath();g.moveTo(0,-r*.32);g.quadraticCurveTo(r*.28,0,0,r*.3);g.quadraticCurveTo(-r*.28,0,0,-r*.32);g.fill();g.restore();}
const sideTex={};
function side(kind){if(sideTex[kind])return sideTex[kind];const W=kind==='door'?256:512,H=kind==='door'?192:128;const t=tex(W,H,(g)=>{g.clearRect(0,0,W,H);
 const seam=(x,y0,y1)=>{g.fillStyle='rgba(0,0,0,.35)';g.fillRect(x,y0,2,y1-y0);g.fillStyle='rgba(255,255,255,.18)';g.fillRect(x+2,y0,1,y1-y0);};
 if(kind==='fire'){g.fillStyle='#f6f1d0';g.fillRect(0,86,W,14);g.fillStyle='#ffd23f';g.fillRect(0,100,W,4);chevron(g,0,86,70,14,'#f6f1d0','#c8141a');
  seam(W-150,14,112);seam(W-60,14,112);g.fillStyle='rgba(0,0,0,.4)';g.fillRect(W-145,58,16,4);
  emblem(g,W-104,48,26,'#9a0e14');g.fillStyle='#fff';g.font='900 30px sans-serif';g.textAlign='center';g.fillText('7',W-104,122-0);
  g.font='900 26px sans-serif';g.fillStyle='rgba(255,255,255,.95)';g.textAlign='left';g.fillText('RESCUE · 7',20,72);}
 if(kind==='door'){emblem(g,128,78,62,'#9a0e14');g.fillStyle='#fff';g.strokeStyle='rgba(60,0,0,.8)';g.lineWidth=6;g.font='900 46px sans-serif';g.textAlign='center';g.strokeText('7',128,176);g.fillText('7',128,176);g.fillStyle='rgba(0,0,0,.4)';g.fillRect(10,6,3,180);g.fillRect(232,100,22,6);}
 if(kind==='amb'){g.fillStyle='#d4161c';g.fillRect(0,78,W,18);g.fillStyle='#ff8a1e';g.fillRect(0,98,W,6);g.fillStyle='#1d56c8';g.fillRect(0,40,W*.62,6);
  const cx=W*.36,cy=50;g.fillStyle='#d4161c';g.fillRect(cx-9,cy-28,18,56);g.fillRect(cx-28,cy-9,56,18);g.fillStyle='#fff';g.fillRect(cx-5,cy-24,10,48);g.fillRect(cx-24,cy-5,48,10);
  seam(W-150,14,112);seam(W*.72,14,112);g.fillStyle='#1d3f9a';g.font='800 22px sans-serif';g.textAlign='left';g.fillText('MEDIC 7',W*.47,70);}
 if(kind==='police'){g.fillStyle='#1d3f9a';g.fillRect(0,64,W,30);g.fillStyle='#ffffff';g.fillRect(0,94,W,5);g.fillStyle='#fff';g.font='900 26px sans-serif';g.textAlign='center';g.fillText('PATROL',W/2,88);seam(W*.5,8,120);seam(W*.24,8,120);}
 if(kind==='van'){chevron(g,0,80,W,16,'#1a1a1e','#ffd23f');seam(W*.62,10,118);g.fillStyle='#1a1a1e';g.font='800 22px sans-serif';g.textAlign='left';g.fillText('CITY WORKS',22,62);}
 if(kind==='tow'){chevron(g,0,84,W,14,'#1a1a1e','#ffd23f');seam(W-130,10,118);g.fillStyle='#1a1a1e';g.font='900 24px sans-serif';g.textAlign='left';g.fillText('TOW 24/7',20,64);}
 if(kind==='chief'){g.fillStyle='#f6f1d0';g.fillRect(0,78,W,10);g.fillStyle='#ffd23f';g.fillRect(0,90,W,4);seam(W*.5,8,120);emblem(g,W*.36,48,22,'#9a0e14');g.fillStyle='#fff';g.font='900 22px sans-serif';g.textAlign='left';g.fillText('CHIEF',W*.5+14,60);}
 if(kind==='car'){seam(W*.5,10,120);seam(W*.26,10,120);g.fillStyle='rgba(0,0,0,.45)';g.fillRect(W*.55,60,18,4);g.fillRect(W*.31,60,18,4);g.fillStyle='rgba(255,255,255,.22)';g.fillRect(0,46,W,2);}
});sideTex[kind]=new THREE.MeshStandardMaterial({map:t,transparent:true,roughness:.35,metalness:.05,polygonOffset:true,polygonOffsetFactor:-2,depthWrite:false});return sideTex[kind];}
export const mat={red:P(0xc8141a),redD:P(0x8a0d10,{roughness:.45,clearcoat:.4}),white:P(0xf3f3f0,{roughness:.28}),chrome:M(0xeef0f4,{metalness:1,roughness:.08,envMapIntensity:1.6}),
 alu:M(0xc4c8d0,{metalness:.9,roughness:.28}),black:M(0x17181b,{roughness:.7}),trim:M(0x0f1012,{roughness:.45,metalness:.2}),tire:M(0x1a1a1d,{roughness:.88,map:T.tread}),rubber:M(0x101012,{roughness:.95}),
 glass:new THREE.MeshPhysicalMaterial({color:0x10202e,metalness:.1,roughness:.03,clearcoat:1,clearcoatRoughness:0,envMapIntensity:2.6,reflectivity:1}),
 head:M(0xffffff,{emissive:0xfff2c8,emissiveIntensity:2.6,roughness:.1}),tail:M(0x5a0000,{emissive:0xff1a10,emissiveIntensity:1.6,roughness:.15}),amber:M(0x6a3a00,{emissive:0xff9a10,emissiveIntensity:1.3,roughness:.2}),
 lr:M(0x550000,{emissive:0xff2020,emissiveIntensity:1.6,roughness:.15}),lb:M(0x000855,{emissive:0x2050ff,emissiveIntensity:1.8,roughness:.15}),
 yel:P(0xffbf14),refl:M(0xf5f0c8,{emissive:0x403a10,roughness:.3}),hose:M(0xe8d47a,{roughness:.75}),hoseR:M(0xc83a2a,{roughness:.7}),grey:M(0x5c6068,{roughness:.55,metalness:.3}),orange:P(0xff7a12),
 blue:P(0x1d3f9a),navy:P(0x14213d),cone:M(0xff5a10,{roughness:.55}),grille:M(0xffffff,{map:T.grille,metalness:.6,roughness:.25}),roll:M(0xffffff,{map:T.roll,metalness:.55,roughness:.35}),
 gauge:M(0xffffff,{map:T.gauge,roughness:.4}),plate:M(0xffffff,{map:T.plate,roughness:.5}),seat:M(0x2a2c31,{roughness:.8})};
const BASE={red:[0xc8141a,.3,.08],redD:[0x8a0d10,.45,.08],refl:[0xf5f0c8,.3,.1],chrome:[0xeef0f4,.08,1],alu:[0xc4c8d0,.28,.9],white:[0xf3f3f0,.28,.08],hose:[0xe8d47a,.75,.1]};
function setM(k,c,r,m,e){const x=mat[k];x.color.setHex(c);x.roughness=r;x.metalness=m;x.emissive.setHex(e||0);x.emissiveIntensity=e?.35:1;}
let LBS=1;function TIER(t){for(const k in BASE)setM(k,...BASE[k]);LBS=1;
 if(t===1){setM('red',0xd8161c,.22,.12);setM('redD',0xf2f2f0,.3,.1);setM('alu',0xe4e4e4,.15,1);}
 if(t===2){setM('red',0x9e0912,.16,.45);setM('redD',0x1a1a1e,.4,.3);setM('refl',0xe0b030,.25,.9,0x3a2a00);setM('alu',0xf0f0f0,.1,1);LBS=1.25;setM('white',0xf6f3ea,.18,.35);}
 if(t===3){setM('red',0xa3101a,.12,.55);setM('redD',0xd9a52a,.2,1);setM('refl',0xffcf4a,.2,1,0x4a3200);setM('chrome',0xffd36a,.1,1);setM('alu',0xc9a040,.18,1);LBS=1.35;setM('white',0xfaf6ec,.15,.3);setM('hose',0xffd36a,.3,.8);}};
// ---------- geometry helpers ----------
function add(g,me,x,y,z){me.position.set(x,y,z);me.castShadow=true;me.receiveShadow=true;g.add(me);return me;}
function box(g,w,h,d,m,x,y,z,r=0.02){const rr=Math.min(r,w/2-1e-4,h/2-1e-4,d/2-1e-4);return add(g,new THREE.Mesh(rr>0.001?new RoundedBoxGeometry(w,h,d,3,rr):new THREE.BoxGeometry(w,h,d),m),x,y,z);}
function cyl(g,r,l,m,x,y,z,axis='z',seg=24,r2){const me=new THREE.Mesh(new THREE.CylinderGeometry(r,r2==null?r:r2,l,seg),m);if(axis==='z')me.rotation.x=Math.PI/2;else if(axis==='x')me.rotation.z=Math.PI/2;return add(g,me,x,y,z);}
function plane(g,w,h,m,x,y,z,ry=0,rx=0){const me=new THREE.Mesh(new THREE.PlaneGeometry(w,h),m);me.rotation.set(rx,ry,0);me.castShadow=false;me.receiveShadow=true;me.position.set(x,y,z);g.add(me);return me;}
function torus(g,R,r,m,x,y,z,axis='z'){const me=new THREE.Mesh(new THREE.TorusGeometry(R,r,10,28),m);if(axis==='y')me.rotation.x=Math.PI/2;else if(axis==='x')me.rotation.y=Math.PI/2;return add(g,me,x,y,z);}
// wheel: treaded tyre with rounded sidewalls, chrome multi-spoke rim, hub & lug nuts, arch liner
function wheel(g,x,z,r=.075,w=.06){const s=Math.sign(z)||1;const tw=w*.78;
 cyl(g,r*.96,tw,mat.tire,x,r,z,'z',28);[-1,1].forEach(k=>torus(g,r*.8,r*.17,mat.rubber,x,r,z+k*tw/2,'z'));
 cyl(g,r*.6,.006,mat.trim,x,r,z+s*(w/2-.004),'z',24);cyl(g,r*.56,.008,mat.chrome,x,r,z+s*(w/2),'z',24);
 for(let i=0;i<6;i++){const sp=box(g,r*.5,r*.11,.006,mat.alu,x,r,z+s*(w/2+.003),0);sp.rotation.z=i*Math.PI/3;sp.position.x=x+Math.cos(i*Math.PI/3)*r*.22;sp.position.y=r+Math.sin(i*Math.PI/3)*r*.22;}
 cyl(g,r*.17,.014,mat.chrome,x,r,z+s*(w/2+.004),'z',16);}
function wheels(g,xs,W,r){xs.forEach(x=>{wheel(g,x,W/2-.03,r);wheel(g,x,-W/2+.03,r);});xs.forEach(x=>{[-1,1].forEach(s=>cyl(g,r*1.14,.012,mat.trim,x,r*1.02,s*(W/2-.004),'z',24));});}
function lightbar(g,x,y,w,len=.05){len*=LBS*(TOP?.5:1);box(g,len*1.05,.012,w*1.02,mat.trim,x,y,0,.005);
 box(g,len*.85,.02,w*.46,mat.lr,x,y+.014,-w*.25,.009);box(g,len*.85,.02,w*.46,mat.lb,x,y+.014,w*.25,.009);box(g,len*.5,.016,w*.06,mat.chrome,x,y+.012,0,.004);g.userData.lb=[[x,y+.02,-w*.25],[x,y+.02,w*.25]];}
function headlights(g,x,y,W,r=.02){[-1,1].forEach(s=>{const z=s*(W/2-.055);cyl(g,r*1.25,.01,mat.chrome,x,y,z,'x',20);cyl(g,r,.012,mat.head,x+.002,y,z,'x',20);box(g,.008,r*.7,r*1.4,mat.amber,x,y-r*1.9,z,.003);});}
function taillights(g,x,y,W){[-1,1].forEach(s=>{const z=s*(W/2-.035);box(g,.01,.034,.034,mat.tail,x,y,z,.006);box(g,.01,.018,.034,mat.amber,x,y-.032,z,.004);});}
function mirror(g,x,y,W){[-1,1].forEach(s=>{box(g,.01,.008,.05,mat.chrome,x,y,s*(W/2+.02),0);box(g,.014,.05,.024,mat.trim,x-.004,y,s*(W/2+.044),.006);});}
function decal(g,kind,x0,x1,y0,y1,W){const m=side(kind);const w=x1-x0,h=y1-y0;plane(g,w,h,m,(x0+x1)/2,(y0+y1)/2,W/2+.0025,0);plane(g,w,h,m,(x0+x1)/2,(y0+y1)/2,-W/2-.0025,Math.PI);}
// cab with sloped windshield, side windows, grille, bumper, headlights, mirrors, step, roof bar
function cab(g,x0,x1,W,H,body,roofLb=true){const L=x1-x0,cx=(x0+x1)/2;
 box(g,L,H*.62,W,body,cx,.07+H*.31,0,.04);box(g,L*.86,H*.4,W*.97,body,cx-L*.05,.07+H*.62+H*.18-.01,0,.045);
 // glass
 const ws=box(g,.012,H*.32,W*.86,mat.glass,x1-L*.09,.07+H*.74,0,.006);ws.rotation.z=.18;
 [-1,1].forEach(s=>{box(g,L*.58,H*.27,.006,mat.glass,cx-L*.08,.07+H*.76,s*(W*.485+.002),.003);box(g,.006,H*.26,.008,body,cx+L*.1,.07+H*.76,s*(W*.485+.003),0);
  box(g,.04,.006,.003,mat.chrome,cx-L*.2,.07+H*.5,s*(W/2+.002),0);});
 box(g,.012,H*.24,W*.66,mat.grille,x1+.002,.07+H*.3,0,.004);box(g,.035,.045,W*1.01,mat.chrome,x1+.012,.08,0,.018);box(g,.01,.012,W*.3,mat.plate,x1+.03,.08,0,0);
 headlights(g,x1+.004,.07+H*.32,W);mirror(g,x1-L*.15,.07+H*.66,W);[-1,1].forEach(s=>box(g,L*.3,.012,.03,mat.alu,cx,.06,s*(W/2+.008),.004));
 if(roofLb)lightbar(g,cx-L*.05,.07+H+.006,W*.82,L*.42);}
function stripe(g,x0,x1,y,W,m=mat.refl){box(g,x1-x0,.016,W+.004,m,(x0+x1)/2,y,0,.004);}
function lockers(g,x0,x1,y0,y1,W,n){const w=(x1-x0)/n;for(let i=0;i<n;i++){[-1,1].forEach(s=>{box(g,w*.9,y1-y0,.006,mat.roll,x0+w*(i+.5),(y0+y1)/2,s*(W/2+.002),.003);box(g,w*.92,.008,.01,mat.chrome,x0+w*(i+.5),y1+.004,s*(W/2+.004),.002);});}}
function hoseCoil(g,x,y,z,R,m){for(let i=0;i<3;i++)torus(g,R,R*.28,m,x,y+i*R*.55,z,'y');}
function ladderPart(par,len,w,y=0){[-1,1].forEach(s=>{box(par,len,.022,.018,mat.alu,len/2-.02,y,s*w/2,.006);box(par,len*.96,.008,.008,mat.chrome,len/2-.02,y+.018,s*w/2,0);});const n=Math.round(len/.05);for(let i=0;i<n;i++)cyl(par,.0055,w,mat.chrome,i*len/n,y,0,'z',8);}
const B={};
// Fire engine (pumper): cab, compartments with roll-up doors, pump panel with gauges, hose bed + coils, side ladder, hose reel, rear step
B.E=()=>{const g=new THREE.Group(),W=.42,H=.27;cab(g,.16,.44,W,H+.03,mat.red);
 box(g,.6,H-.04,W,mat.red,-.13,.07+(H-.04)/2,0,.035);lockers(g,-.4,-.02,.1,.25,W,3);
 [-1,1].forEach(s=>{box(g,.1,.13,.008,mat.gauge,.08,.19,s*(W/2+.002),.004);box(g,.1,.014,.012,mat.chrome,.08,.26,s*(W/2+.005),.003);cyl(g,.014,.03,mat.chrome,.06,.12,s*(W/2+.012),'z',12);cyl(g,.014,.03,mat.yel,.1,.12,s*(W/2+.012),'z',12);});
 decal(g,'door',.2,.36,.1,.22,W*.97);stripe(g,-.43,.45,.085,W);
 box(g,.5,.03,W*.86,mat.redD,-.14,H+.075,0,.01);hoseCoil(g,-.25,H+.1,-.08,.045,mat.hose);hoseCoil(g,-.25,H+.1,.08,.045,mat.hoseR);hoseCoil(g,-.08,H+.1,0,.05,mat.hose);
 [-1,1].forEach(s=>box(g,.5,.014,.014,mat.chrome,-.14,H+.12,s*W*.44,.004));
 const lad=new THREE.Group();lad.position.set(-.38,.08+H+.07,W*.3);g.add(lad);ladderPart(lad,.42,.08,0);
 cyl(g,.05,.12,mat.chrome,-.43,.2,0,'z',20);cyl(g,.04,.13,mat.hoseR,-.43,.2,0,'z',20);box(g,.05,.02,W*.95,mat.alu,-.45,.07,0,.006);
 taillights(g,-.432,.2,W);box(g,.004,.02,.06,mat.plate,-.434,.11,0,0);wheels(g,[.31,-.22,-.34],W,.072);return g;};
// Aerial ladder truck: long body, turntable, 2-section ladder with rails & rungs, outriggers, basket
B.K=()=>{const g=new THREE.Group(),W=.42,H=.25;cab(g,.24,.48,W,H+.05,mat.red);box(g,.7,H-.06,W,mat.red,-.12,.07+(H-.06)/2,0,.035);
 lockers(g,-.44,.2,.1,.22,W,4);decal(g,'door',.27,.42,.1,.215,W*.97);stripe(g,-.47,.49,.085,W);
 [-1,1].forEach(s=>{box(g,.03,.05,.05,mat.alu,.18,.06,s*(W/2+.02),.008);box(g,.03,.05,.05,mat.alu,-.42,.06,s*(W/2+.02),.008);});
 cyl(g,.085,.04,mat.alu,-.36,H+.035,0,'y',28);cyl(g,.06,.05,mat.redD,-.36,H+.07,0,'y',24);
 const lad=new THREE.Group();lad.position.set(-.36,H+.11,0);lad.rotation.z=-.03;g.add(lad);lad.userData.ladder=1;
 ladderPart(lad,.86,.2,0);const up=new THREE.Group();up.position.set(.08,.03,0);lad.add(up);ladderPart(up,.74,.15,0);
 box(lad,.12,.06,.2,mat.redD,.0,-.03,0,.012);box(lad,.06,.04,.12,mat.yel,.84,.02,0,.006);cyl(lad,.012,.5,mat.chrome,.4,-.015,0,'x',8);
 taillights(g,-.475,.16,W);wheels(g,[.37,-.25,-.37],W,.072);return g;};
// Water tanker: polished tank with end caps & bands, walkway & rails, rear hose reel, valves
B.T=()=>{const g=new THREE.Group(),W=.42,H=.27;cab(g,.18,.44,W,H+.03,mat.red);box(g,.62,.06,W*.92,mat.redD,-.12,.09,0,.012);
 cyl(g,.135,.5,mat.chrome,-.13,.25,0,'x',40);[-1,1].forEach(s=>{const c=new THREE.Mesh(new THREE.SphereGeometry(.135,32,16),mat.chrome);c.scale.set(.32,1,1);add(g,c,-.13+s*.25,.25,0);});
 [-.33,-.13,.07].forEach(x=>cyl(g,.141,.022,mat.red,x,.25,0,'x',40));box(g,.36,.012,.07,mat.alu,-.13,.39,0,.003);[-1,1].forEach(s=>box(g,.36,.01,.006,mat.chrome,-.13,.42,s*.05,0));
 for(let i=0;i<4;i++)cyl(g,.004,.03,mat.chrome,-.29+i*.105,.405,0,'y',6);cyl(g,.03,.02,mat.alu,-.05,.395,0,'y',16);
 [-1,1].forEach(s=>{box(g,.18,.05,.008,mat.roll,.06,.12,s*(W*.46+.002),.004);cyl(g,.016,.03,mat.yel,-.02,.12,s*(W*.46+.012),'z',12);});
 cyl(g,.05,.1,mat.chrome,-.44,.2,0,'z',20);cyl(g,.04,.11,mat.hoseR,-.44,.2,0,'z',20);stripe(g,-.43,.18,.085,W*.92);decal(g,'door',.21,.37,.1,.22,W*.97);taillights(g,-.432,.14,W*.92);wheels(g,[.31,-.23,-.35],W,.072);return g;};
// Ambulance: white cab, box body with rounded corners, rear windows, red/orange stripes, cross decal, corner beacons
B.A=()=>{const g=new THREE.Group(),W=.4,H=.31;cab(g,.2,.43,W,H*.78,mat.white,false);box(g,.6,H-.04,W,mat.white,-.1,.07+(H-.04)/2,0,.045);
 decal(g,'amb',-.4,.2,.07,.33,W);[-1,1].forEach(s=>box(g,.08,.06,.006,mat.glass,-.03,.25,s*(W/2+.002),.006));
 box(g,.006,.1,.12,mat.glass,-.403,.24,0,.004);box(g,.006,.24,.004,mat.trim,-.403,.17,0,0);
 lightbar(g,.31,H*.78+.07+.006,W*.8,.06);[-1,1].forEach(s=>{box(g,.03,.025,.03,s>0?mat.lb:mat.lr,-.38,H+.08,s*(W/2-.03),.008);box(g,.03,.025,.03,s>0?mat.lr:mat.lb,.18,H+.08,s*(W/2-.03),.008);});
 box(g,.5,.012,.06,mat.alu,-.1,H+.075,0,.004);box(g,.05,.02,W*.95,mat.alu,-.405,.07,0,.006);taillights(g,-.405,.16,W);wheels(g,[.3,-.26],W,.066);return g;};
// City works van
B.V=()=>{const g=new THREE.Group(),W=.38,H=.28;box(g,.68,H-.06,W,mat.orange,0,.06+(H-.06)/2,0,.06);
 const ws=box(g,.012,.1,W*.86,mat.glass,.3,.2,0,.004);ws.rotation.z=.35;[-1,1].forEach(s=>box(g,.2,.08,.006,mat.glass,.18,.21,s*(W/2+.002),.003));
 decal(g,'van',-.33,.33,.06,.2,W);box(g,.012,.05,W*.5,mat.grille,.342,.11,0,.004);headlights(g,.342,.14,W,.016);box(g,.03,.04,W*1.01,mat.trim,.35,.07,0,.015);
 lightbar(g,.18,H+.006,W*.8,.05);taillights(g,-.343,.15,W);[-1,1].forEach(s=>box(g,.36,.008,.008,mat.chrome,-.08,H+.025,s*W*.38,0));for(let i=0;i<5;i++)box(g,.008,.008,W*.76,mat.chrome,-.24+i*.08,H+.025,0,0);
 mirror(g,.24,.2,W);wheels(g,[.22,-.22],W,.062);return g;};
// Police patrol car
B.P=()=>{const g=new THREE.Group(),W=.34;sedanBody(g,W,mat.white,mat.navy);decal(g,'police',-.3,.3,.07,.17,W);
 lightbar(g,-.03,.255,W*.82,.05);box(g,.02,.06,W*.7,mat.trim,.34,.09,0,.01);return g;};
// Chief SUV
B.C=()=>{const g=new THREE.Group(),W=.36;box(g,.66,.13,W,mat.red,0,.12,0,.05);const top=box(g,.42,.11,W*.9,mat.red,-.05,.235,0,.04);
 const ws=box(g,.012,.09,W*.8,mat.glass,.17,.23,0,.004);ws.rotation.z=.4;box(g,.012,.08,W*.78,mat.glass,-.262,.23,0,.004);
 [-1,1].forEach(s=>{box(g,.36,.075,.006,mat.glass,-.05,.235,s*(W*.45+.002),.003);box(g,.006,.075,.008,mat.red,-.05,.235,s*(W*.45+.003),0);});
 decal(g,'chief',-.32,.32,.06,.18,W);box(g,.012,.05,W*.5,mat.grille,.332,.12,0,.004);headlights(g,.333,.14,W,.016);box(g,.03,.035,W*1.01,mat.chrome,.34,.075,0,.014);
 lightbar(g,-.02,.295,W*.8,.045);box(g,.22,.01,W*.84,mat.trim,-.1,.293,0,.003);[-1,1].forEach(s=>box(g,.3,.008,.008,mat.chrome,-.06,.3,s*W*.38,0));
 mirror(g,.15,.2,W);taillights(g,-.333,.15,W);wheels(g,[.21,-.21],W,.065);return g;};
// Tow truck
B.W=()=>{const g=new THREE.Group(),W=.4,H=.26;cab(g,-.08,.2,W,H,mat.yel);box(g,.1,.06,W*.6,mat.grey,.25,.09,0,.01);
 box(g,.32,.06,W*.9,mat.alu,-.24,.1,0,.02);decal(g,'tow',-.08,.2,.06,.14,W);
 const boom=new THREE.Group();boom.position.set(-.3,.13,0);boom.rotation.z=.5;g.add(boom);box(boom,.3,.04,.06,mat.yel,.12,0,0,.01);box(boom,.24,.03,.045,mat.alu,.2,.02,0,.008);
 cyl(g,.03,.08,mat.chrome,-.3,.14,0,'z',16);const hk=cyl(g,.004,.12,mat.trim,-.04,.2,0,'y',6);torus(g,.015,.004,mat.chrome,-.04,.13,0,'z');
 box(g,.06,.02,W*.8,mat.trim,-.41,.07,0,.006);stripe(g,-.4,-.08,.1,W*.9,mat.grey);taillights(g,-.405,.13,W*.9);lightbar(g,.06,H+.07+.006,W*.8,.05);wheels(g,[.13,-.27],W,.07);return g;};
// shared sedan body (civilian + police): curved cabin, glass, grille, lights, chrome, plates
function sedanBody(g,W,m,roofM){box(g,.66,.1,W,m,0,.11,0,.045);box(g,.6,.03,W*.98,m,0,.165,0,.012);
 const cab=box(g,.34,.085,W*.86,roofM||m,-.03,.215,0,.04);
 const ws=box(g,.012,.075,W*.76,mat.glass,.15,.21,0,.004);ws.rotation.z=.55;const rw=box(g,.012,.07,W*.76,mat.glass,-.21,.21,0,.004);rw.rotation.z=-.5;
 [-1,1].forEach(s=>{box(g,.28,.058,.006,mat.glass,-.03,.215,s*(W*.43+.002),.003);box(g,.006,.058,.008,roofM||m,-.03,.215,s*(W*.43+.003),0);box(g,.03,.006,.003,mat.chrome,.02,.14,s*(W/2+.002),0);box(g,.03,.006,.003,mat.chrome,-.1,.14,s*(W/2+.002),0);});
 box(g,.012,.04,W*.45,mat.grille,.332,.11,0,.004);headlights(g,.331,.125,W,.015);box(g,.02,.03,W*1.0,mat.chrome,.336,.075,0,.012);box(g,.02,.03,W*1.0,mat.chrome,-.336,.075,0,.012);
 box(g,.004,.018,.06,mat.plate,.347,.08,0,0);box(g,.004,.018,.06,mat.plate,-.347,.09,0,0);taillights(g,-.332,.12,W);mirror(g,.1,.17,W);wheels(g,[.21,-.21],W,.058);}
// civilian sedan
const civC=[0x3a7bd5,0xf0f0f0,0x2ab07a,0x7a4ad5,0x2a2d34,0xd8a21a];
function sedan(col){const g=new THREE.Group(),W=.34;const m=P(col,{roughness:.25,metalness:.25});sedanBody(g,W,m);decal(g,'car',-.3,.3,.07,.17,W);return g;}
function cone(){const g=new THREE.Group();box(g,.24,.02,.24,mat.black,0,.01,0,.02);const c=new THREE.Mesh(new THREE.ConeGeometry(.09,.32,28),mat.cone);c.position.y=.18;c.castShadow=true;g.add(c);
 const s=new THREE.Mesh(new THREE.CylinderGeometry(.052,.068,.06,28,1,true),M(0xffffff,{emissive:0x333333}));s.position.y=.17;g.add(s);return g;}
function barrier(){const g=new THREE.Group();[-1,1].forEach(s=>{box(g,.04,.22,.04,mat.alu,0,.11,s*.32,.01);box(g,.2,.02,.05,mat.grey,0,.01,s*.32,.005);});
 const tc=document.createElement('canvas');tc.width=256;tc.height=32;const t=tc.getContext('2d');for(let i=0;i<8;i++){t.fillStyle=i%2?'#fff':'#e01818';t.beginPath();t.moveTo(i*32,0);t.lineTo(i*32+32,0);t.lineTo(i*32+16,32);t.lineTo(i*32-16,32);t.fill();}
 const tx=new THREE.CanvasTexture(tc);tx.colorSpace=THREE.SRGBColorSpace;box(g,.04,.08,.76,new THREE.MeshStandardMaterial({map:tx,roughness:.4}),0,.2,0,0);box(g,.012,.012,.012,mat.lr,0,.27,-.32,0);box(g,.012,.012,.012,mat.lr,0,.27,.32,0);return g;}
function hydrant(){const g=new THREE.Group();const m=P(0xd81818,{roughness:.35});cyl(g,.065,.2,m,0,.12,0,'y');cyl(g,.08,.03,m,0,.02,0,'y');
 const top=new THREE.Mesh(new THREE.SphereGeometry(.068,24,12,0,Math.PI*2,0,Math.PI/2),m);top.position.y=.22;g.add(top);cyl(g,.02,.03,mat.chrome,0,.29,0,'y');cyl(g,.03,.2,mat.chrome,0,.15,0,'x');cyl(g,.035,.05,mat.chrome,0,.15,.07,'z');return g;}
// fallen debris: broken concrete slabs + charred beams + hazard tape (original, built in code)
function debris(){const g=new THREE.Group();const con=M(0x8a8780,{roughness:.95}),con2=M(0x6c6a66,{roughness:.95}),wood=M(0x2e1d12,{roughness:.9}),ember=M(0x3a1004,{emissive:0xff5a10,emissiveIntensity:.9,roughness:.8});
 const sl=(w,h,d,m,x,y,z,rx,ry,rz)=>{const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);b.position.set(x,y,z);b.rotation.set(rx,ry,rz);b.castShadow=true;b.receiveShadow=true;g.add(b);return b;};
 sl(.42,.07,.3,con,-.06,.04,.02,0,.3,.05);sl(.3,.06,.24,con2,.12,.1,-.06,.25,-.4,-.2);sl(.22,.05,.18,con,-.14,.12,-.1,-.3,.9,.25);
 sl(.6,.06,.06,wood,0,.15,.06,0,.7,.32);sl(.5,.05,.05,wood,.04,.09,-.14,.1,-.5,-.18);sl(.12,.045,.045,ember,.2,.06,.12,0,.2,0);
 for(let i=0;i<5;i++){const r=new THREE.Mesh(new THREE.DodecahedronGeometry(.03+Math.random()*.03,0),i%2?con:con2);r.position.set((Math.random()-.5)*.6,.03,(Math.random()-.5)*.5);g.add(r);}
 const tc=document.createElement('canvas');tc.width=128;tc.height=16;const t=tc.getContext('2d');for(let i=0;i<8;i++){t.fillStyle=i%2?'#111':'#ffd21a';t.beginPath();t.moveTo(i*16,0);t.lineTo(i*16+16,0);t.lineTo(i*16+8,16);t.lineTo(i*16-8,16);t.fill();}
 const tx=new THREE.CanvasTexture(tc);tx.colorSpace=THREE.SRGBColorSpace;const tape=new THREE.Mesh(new THREE.PlaneGeometry(.8,.05),new THREE.MeshStandardMaterial({map:tx,side:THREE.DoubleSide,roughness:.5}));tape.position.set(0,.2,.24);g.add(tape);
 [-.38,.38].forEach(x=>{const p=new THREE.Mesh(new THREE.CylinderGeometry(.012,.012,.24,8),mat.grey);p.position.set(x,.12,.24);g.add(p);});return g;}
export {B,sedan,cone,barrier,hydrant,debris,civC,M,box,cyl,BASE};
export function tier(t){TIER(t);}
