// Vehicle / prop 3D models (shared with the sprite generator), runtime version.
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const TOP=false;
const M=(c,o={})=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.45,metalness:.1},o));
export const mat={red:M(0xc8141a,{roughness:.32,metalness:.25}),redD:M(0x8a0d10,{roughness:.5}),white:M(0xf2f2f0,{roughness:.35}),chrome:M(0xdddddd,{metalness:1,roughness:.18}),
 alu:M(0xb8bcc4,{metalness:.85,roughness:.35}),black:M(0x18181b,{roughness:.8}),tire:M(0x141416,{roughness:.9}),glass:M(0x3c5a78,{metalness:.9,roughness:.06,envMapIntensity:2.2}),
 head:M(0xffffff,{emissive:0xfff4cc,emissiveIntensity:2.2}),tail:M(0x660000,{emissive:0xff1a10,emissiveIntensity:1.4}),lr:M(0x550000,{emissive:0xff2020,emissiveIntensity:1.6}),lb:M(0x000855,{emissive:0x2050ff,emissiveIntensity:1.8}),
 yel:M(0xffc21a,{roughness:.4}),refl:M(0xf5f0c8,{emissive:0x403a10,roughness:.3}),hose:M(0xe6d27a,{roughness:.7}),grey:M(0x5c6068,{roughness:.6}),orange:M(0xff7a12,{roughness:.35,metalness:.2}),
 blue:M(0x1d3f9a,{roughness:.35,metalness:.2}),navy:M(0x14213d,{roughness:.4}),cone:M(0xff5a10,{roughness:.55})};
const BASE={red:[0xc8141a,.32,.25],redD:[0x8a0d10,.5,.1],refl:[0xf5f0c8,.3,.1],chrome:[0xdddddd,.18,1],alu:[0xb8bcc4,.35,.85],white:[0xf2f2f0,.35,.1],hose:[0xe6d27a,.7,.1]};
function setM(k,c,r,m,e){const x=mat[k];x.color.setHex(c);x.roughness=r;x.metalness=m;x.emissive.setHex(e||0);x.emissiveIntensity=e?.35:1;}
let LBS=1;function TIER(t){for(const k in BASE)setM(k,...BASE[k]);LBS=1;
 if(t===1){setM('red',0xd8161c,.22,.35);setM('redD',0xf2f2f0,.3,.1);setM('alu',0xe4e4e4,.15,1);}
 if(t===2){setM('red',0x9e0912,.16,.65);setM('redD',0x1a1a1e,.4,.3);setM('refl',0xe0b030,.25,.9,0x3a2a00);setM('alu',0xf0f0f0,.1,1);LBS=1.25;setM('white',0xf6f3ea,.18,.35);}
 if(t===3){setM('red',0x121317,.16,.75);setM('redD',0xd9a52a,.2,1);setM('refl',0xffcf4a,.2,1,0x4a3200);setM('chrome',0xffd36a,.12,1);setM('alu',0xc9a040,.18,1);LBS=1.35;setM('white',0xfaf6ec,.15,.3);setM('hose',0xffd36a,.3,.8);}};
function box(g,w,h,d,m,x,y,z,r=0.02){const me=new THREE.Mesh(r?new RoundedBoxGeometry(w,h,d,2,r):new THREE.BoxGeometry(w,h,d),m);me.position.set(x,y,z);me.castShadow=true;me.receiveShadow=true;g.add(me);return me;}
function cyl(g,r,l,m,x,y,z,axis='z',seg=24){const me=new THREE.Mesh(new THREE.CylinderGeometry(r,r,l,seg),m);if(axis==='z')me.rotation.x=Math.PI/2;else if(axis==='x')me.rotation.z=Math.PI/2;me.position.set(x,y,z);me.castShadow=true;g.add(me);return me;}
function wheel(g,x,z,r=.075,w=.06){cyl(g,r,w,mat.tire,x,r,z);const rim=cyl(g,r*.6,w+.004,mat.chrome,x,r,z);cyl(g,r*.22,w+.01,mat.grey,x,r,z);}
function wheels(g,xs,W,r){xs.forEach(x=>{wheel(g,x,W/2-.025,r);wheel(g,x,-W/2+.025,r);});}
function lightbar(g,x,y,w,len=.05){len*=LBS*(TOP?.5:1);box(g,len*.9,.012,w,mat.chrome,x,y,0,.004);box(g,len*.7,.018,w*.44,mat.lr,x,y+.012,-w*.24,.008);box(g,len*.7,.018,w*.44,mat.lb,x,y+.012,w*.24,.008);g.userData.lb=[[x,y+.02,-w*.25],[x,y+.02,w*.25]];}
function headlights(g,x,y,W){box(g,.012,.022,.05,mat.head,x,y,W/2-.06,.005);box(g,.012,.022,.05,mat.head,x,y,-W/2+.06,.005);}
function taillights(g,x,y,W){box(g,.01,.03,.03,mat.tail,x,y,W/2-.03,.004);box(g,.01,.03,.03,mat.tail,x,y,-W/2+.03,.004);}
function cab(g,x0,x1,W,H,body,roofLb=true){const L=x1-x0,cx=(x0+x1)/2;box(g,L,H-.06,W,body,cx,.06+(H-.06)/2,0,.035);
 // windshield
 box(g,.014,H*.36,W*.9,mat.glass,x1+.002,H*.7,0,.006);box(g,L*.6,H*.3,.008,mat.glass,x1-L*.33,H*.7,W/2+.002,.003);box(g,L*.6,H*.3,.008,mat.glass,x1-L*.33,H*.7,-W/2-.002,.003);box(g,.006,.03,.02,mat.chrome,x1-.02,H*.62,W/2+.02,0);box(g,.006,.03,.02,mat.chrome,x1-.02,H*.62,-W/2-.02,0);box(g,.012,.03,W*.6,mat.black,x1+.006,H*.2,0,.004);
 box(g,.02,.04,W*.95,mat.chrome,x1+.008,.08,0,.01);box(g,.008,H*.18,W*.5,mat.chrome,x1+.004,H*.38,0,.004);headlights(g,x1+.006,H*.36,W);
 if(roofLb)lightbar(g,cx+L*.1,H+.012,W*.85,L*.4);}
function stripe(g,x0,x1,y,W,m=mat.refl){box(g,x1-x0,.018,W+.004,m,(x0+x1)/2,y,0,0);}
const B={};
B.E=()=>{const g=new THREE.Group(),W=.42,H=.27;cab(g,.16,.42,W,H+.02,mat.red);box(g,.58,H-.04,W,mat.red,-.13,.06+(H-.04)/2,0,.03);
 for(let i=0;i<3;i++){box(g,.15,H*.5,.006,mat.alu,-.36+i*.17,.17,W/2+.002,.004);box(g,.15,H*.5,.006,mat.alu,-.36+i*.17,.17,-W/2-.002,.004);}
 stripe(g,-.42,.42,.1,W);box(g,.5,.03,W*.8,mat.redD,-.13,H+.03,0,.01);
 for(let i=0;i<4;i++)cyl(g,.03,W*.6,mat.hose,-.32+i*.065,H+.06,0,'z',16);
 [-1,1].forEach(s=>box(g,.6,.012,.012,mat.alu,-.1,H+.1,s*W*.33,0));for(let i=0;i<9;i++)box(g,.01,.01,W*.66,mat.alu,-.38+i*.07,H+.1,0,0);
 taillights(g,-.425,.17,W);wheels(g,[.3,-.22,-.33],W,.07);return g;};
B.K=()=>{const g=new THREE.Group(),W=.42,H=.25;cab(g,.24,.47,W,H+.04,mat.red);box(g,.7,H-.06,W,mat.red,-.12,.06+(H-.06)/2,0,.03);stripe(g,-.47,.47,.1,W);
 for(let i=0;i<3;i++){box(g,.18,H*.45,.006,mat.alu,-.38+i*.2,.15,W/2+.002,.004);box(g,.18,H*.45,.006,mat.alu,-.38+i*.2,.15,-W/2-.002,.004);}
 cyl(g,.07,.06,mat.alu,-.36,H+.02,0,'y');const lad=new THREE.Group();lad.position.set(-.36,H+.08,0);lad.rotation.z=-.03;g.add(lad);lad.userData.ladder=1;
 [-1,1].forEach(s=>{box(lad,.9,.035,.025,mat.alu,.4,0,s*.11,.005);});for(let i=0;i<14;i++)box(lad,.012,.012,.2,mat.chrome,-.02+i*.065,.0,0,0);
 box(lad,.12,.06,.18,mat.redD,.0,-.03,0,.01);taillights(g,-.475,.15,W);wheels(g,[.36,-.25,-.37],W,.07);return g;};
B.T=()=>{const g=new THREE.Group(),W=.42,H=.27;cab(g,.18,.43,W,H+.02,mat.red);box(g,.6,.05,W*.9,mat.redD,-.12,.08,0,.01);
 const t=cyl(g,.135,.56,mat.chrome,-.13,.24,0,'x',32);[-.38,-.13,.12].forEach(x=>cyl(g,.142,.02,mat.red,x,.24,0,'x',32));box(g,.05,.03,.1,mat.alu,-.1,.385,0,.01);
 stripe(g,-.42,.18,.09,W*.9);taillights(g,-.42,.14,W*.9);wheels(g,[.31,-.23,-.34],W,.07);return g;};
B.A=()=>{const g=new THREE.Group(),W=.4,H=.3;cab(g,.2,.42,W,H*.8,mat.white,false);box(g,.6,H-.04,W,mat.white,-.1,.06+(H-.04)/2,0,.035);
 stripe(g,-.4,.42,.13,W,mat.red);stripe(g,-.4,.2,.27,W,mat.orange);
 [-1,1].forEach(s=>{box(g,.08,.025,.006,mat.red,-.1,.2,s*(W/2+.003),0);box(g,.025,.08,.006,mat.red,-.1,.2,s*(W/2+.003),0);});box(g,.08,.006,.025,mat.red,-.1,H+.024,0,0);box(g,.025,.006,.08,mat.red,-.1,H+.024,0,0);
 lightbar(g,.31,H*.8+.012,W*.8,.06);box(g,.02,.03,W*.9,mat.lr,-.39,H+.01,0,.006);taillights(g,-.405,.15,W);wheels(g,[.3,-.26],W,.065);return g;};
B.V=()=>{const g=new THREE.Group(),W=.38,H=.27;box(g,.68,H-.05,W,mat.orange,0,.05+(H-.05)/2,0,.06);box(g,.15,.1,W*.9,mat.glass,.27,.2,0,.02);
 box(g,.012,.09,W*.8,mat.glass,.342,.2,0,.004);box(g,.3,.08,.006,mat.glass,0,.2,W/2+.001,.003);box(g,.3,.08,.006,mat.glass,0,.2,-W/2-.001,.003);
 stripe(g,-.34,.34,.11,W,mat.refl);headlights(g,.343,.12,W);box(g,.02,.03,W*.95,mat.chrome,.345,.07,0,.01);lightbar(g,.18,H+.012,W*.8,.05);taillights(g,-.343,.14,W);
 box(g,.3,.012,W*.7,mat.alu,-.1,H+.01,0,0);wheels(g,[.22,-.22],W,.06);return g;};
B.P=()=>{const g=new THREE.Group(),W=.34,H=.2;box(g,.64,.1,W,mat.white,0,.1,0,.04);box(g,.32,.09,W*.86,mat.navy,-.03,.19,0,.035);
 box(g,.012,.075,W*.76,mat.glass,.13,.19,0,.004);box(g,.012,.07,W*.76,mat.glass,-.19,.19,0,.004);box(g,.26,.06,.006,mat.glass,-.03,.19,W*.43+.001,.003);box(g,.26,.06,.006,mat.glass,-.03,.19,-W*.43-.001,.003);
 [-1,1].forEach(s=>box(g,.36,.04,.006,mat.blue,.0,.1,s*(W/2+.002),0));lightbar(g,-.03,.24,W*.8,.045);headlights(g,.322,.11,W);taillights(g,-.322,.11,W);box(g,.02,.03,W*.9,mat.black,.33,.07,0,.01);wheels(g,[.2,-.2],W,.055);return g;};
B.C=()=>{const g=new THREE.Group(),W=.36,H=.22;box(g,.66,.13,W,mat.red,0,.115,0,.045);box(g,.4,.1,W*.9,mat.red,-.06,.22,0,.035);
 box(g,.012,.08,W*.8,mat.glass,.145,.22,0,.004);box(g,.34,.07,.006,mat.glass,-.06,.225,W*.45+.001,.003);box(g,.34,.07,.006,mat.glass,-.06,.225,-W*.45-.001,.003);
 stripe(g,-.33,.33,.12,W,mat.refl);lightbar(g,-.02,.28,W*.8,.045);headlights(g,.332,.13,W);taillights(g,-.332,.14,W);box(g,.02,.04,W*.95,mat.chrome,.335,.08,0,.01);box(g,.2,.012,W*.8,mat.black,-.1,.276,0,0);wheels(g,[.21,-.21],W,.062);return g;};
B.W=()=>{const g=new THREE.Group(),W=.4,H=.26;cab(g,-.08,.2,W,H,mat.yel);box(g,.1,.06,W*.6,mat.grey,.25,.09,0,.01);
 const arm=box(g,.36,.04,.06,mat.alu,.16,.25,0,.01);arm.rotation.z=.35;box(g,.03,.12,.03,mat.chrome,.34,.24,0,.005);
 box(g,.32,.06,W*.9,mat.alu,-.24,.1,0,.02);stripe(g,-.4,-.08,.1,W*.9,mat.grey);taillights(g,-.405,.13,W*.9);lightbar(g,.06,H+.012,W*.8,.05);wheels(g,[.13,-.27],W,.07);
 g.children.forEach(m=>{});return g;};
// civilian sedan
const civC=[0x3a7bd5,0xf0f0f0,0x2ab07a,0x7a4ad5,0x2a2d34,0xd8a21a];
function sedan(col){const g=new THREE.Group(),W=.34;const m=M(col,{roughness:.28,metalness:.35});box(g,.66,.1,W,m,0,.1,0,.045);box(g,.34,.09,W*.86,m,-.03,.19,0,.04);
 box(g,.012,.075,W*.76,mat.glass,.135,.19,0,.004);box(g,.012,.07,W*.76,mat.glass,-.195,.19,0,.004);box(g,.27,.06,.006,mat.glass,-.03,.19,W*.43+.001,.003);box(g,.27,.06,.006,mat.glass,-.03,.19,-W*.43-.001,.003);
 headlights(g,.332,.11,W);taillights(g,-.332,.11,W);wheels(g,[.21,-.21],W,.055);return g;}
function cone(){const g=new THREE.Group();box(g,.26,.02,.26,mat.black,0,.01,0,.01);const c=new THREE.Mesh(new THREE.ConeGeometry(.09,.32,24),mat.cone);c.position.y=.18;c.castShadow=true;g.add(c);
 const s=new THREE.Mesh(new THREE.CylinderGeometry(.052,.068,.06,24,1,true),M(0xffffff,{emissive:0x333333}));s.position.y=.17;g.add(s);return g;}
function barrier(){const g=new THREE.Group();[-1,1].forEach(s=>{box(g,.04,.22,.04,mat.alu,0,.11,s*.32,.01);box(g,.2,.02,.05,mat.grey,0,.01,s*.32,.005);});
 const tc=document.createElement('canvas');tc.width=256;tc.height=32;const t=tc.getContext('2d');for(let i=0;i<8;i++){t.fillStyle=i%2?'#fff':'#e01818';t.beginPath();t.moveTo(i*32,0);t.lineTo(i*32+32,0);t.lineTo(i*32+16,32);t.lineTo(i*32-16,32);t.fill();}
 const tx=new THREE.CanvasTexture(tc);tx.colorSpace=THREE.SRGBColorSpace;box(g,.04,.08,.76,new THREE.MeshStandardMaterial({map:tx,roughness:.4}),0,.2,0,0);box(g,.012,.012,.012,mat.lr,0,.27,-.32,0);box(g,.012,.012,.012,mat.lr,0,.27,.32,0);return g;}
function hydrant(){const g=new THREE.Group();const m=M(0xd81818,{roughness:.35,metalness:.3});cyl(g,.065,.2,m,0,.12,0,'y');cyl(g,.08,.03,m,0,.02,0,'y');
 const top=new THREE.Mesh(new THREE.SphereGeometry(.068,24,12,0,Math.PI*2,0,Math.PI/2),m);top.position.y=.22;g.add(top);cyl(g,.02,.03,mat.chrome,0,.29,0,'y');cyl(g,.03,.2,mat.chrome,0,.15,0,'x');cyl(g,.035,.05,mat.chrome,0,.15,.07,'z');return g;}
export {B,sedan,cone,barrier,hydrant,civC,M,box,cyl,BASE};
export function tier(t){TIER(t);}
