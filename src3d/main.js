// Firetruck Rescue — real-time WebGL 3D renderer (board, fire scene, garage turntable).
// Plugs into the existing 2D game: game logic/state stays in game.js/v2/v3; this file only replaces drawing.
// Falls back to the 2D renderer when WebGL is missing, the context is lost, or ?r=2d.
import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import * as MD from './models.js';

const TAU=Math.PI*2, cl=(v,a,b)=>Math.max(a,Math.min(b,v)), lp=(a,b,u)=>a+(b-a)*u;
const Q=new URLSearchParams(location.search);
const R3=window.R3={ok:false,lost:false,frames:0,ms:0};
function init(){
 if(Q.get('r')==='2d'||(window.SAVE&&SAVE.r2d))return LOG3('2D renderer forced');
 let R;try{R=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance',premultipliedAlpha:true,stencil:false});}catch(e){return LOG3('WebGL unavailable → 2D',e&&e.message);}
 if(!R.getContext())return;
 R.setPixelRatio(1);R.outputColorSpace=THREE.SRGBColorSpace;R.toneMapping=THREE.NeutralToneMapping;R.toneMappingExposure=1.0;
 R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;R.autoClear=false;
 const cvs=R.domElement;cvs.addEventListener('webglcontextlost',e=>{e.preventDefault();R3.lost=true;LOG3('context lost → 2D fallback');});
 cvs.addEventListener('webglcontextrestored',()=>{R3.lost=false;LOG3('context restored');});
 R3.R=R;R3.ok=true;
 const pm=new THREE.PMREMGenerator(R);const ENV=pm.fromScene(new RoomEnvironment(),.04).texture;
 // ---------- helpers ----------
 const hi=()=>!(SAVE.gfx==='low'||(SAVE.gfx==='auto'&&window.V2&&V2.lowAuto));
 function ensure(pw,ph){const s=new THREE.Vector2();R.getSize(s);if(s.x<pw||s.y<ph)R.setSize(Math.max(s.x,pw,8),Math.max(s.y,ph,8),false);}
 function prep(pw,ph){ensure(pw,ph);R.setViewport(0,0,pw,ph);R.setScissor(0,0,pw,ph);R.setScissorTest(true);R.setClearColor(0,0);R.clear(true,true,true);}
 function blit(c,pw,ph,dx,dy,dw,dh){c.drawImage(cvs,0,cvs.height-ph,pw,ph,dx,dy,dw,dh);}
 const prRatio=()=>hi()?Math.min(DPR,R3.prCap||2):Math.min(DPR,1.1);
 function radTex(stops,n=128){const c=document.createElement('canvas');c.width=c.height=n;const g=c.getContext('2d');const gr=g.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);stops.forEach(([o,col])=>gr.addColorStop(o,col));g.fillStyle=gr;g.fillRect(0,0,n,n);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
 const GLOW=radTex([[0,'rgba(255,255,255,1)'],[.25,'rgba(255,255,255,.55)'],[1,'rgba(255,255,255,0)']]);
 const SOFT=radTex([[0,'rgba(255,255,255,1)'],[.5,'rgba(255,255,255,.4)'],[1,'rgba(255,255,255,0)']],64);
 const SMOKE=(()=>{const n=128,c=document.createElement('canvas');c.width=c.height=n;const g=c.getContext('2d');for(let i=0;i<26;i++){const x=n/2+(Math.random()-.5)*n*.45,y=n/2+(Math.random()-.5)*n*.45,r=n*(.12+Math.random()*.2);const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba(255,255,255,.35)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,n,n);}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
 const glowMat=(col,op=1)=>new THREE.SpriteMaterial({map:GLOW,color:col,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true,opacity:op,toneMapped:false});
 // ---------- vehicle models: tiered materials, paint skins, merged per material ----------
 const PCOL=[null,0x1d3478,0x1a6e34,0xd6a018];
 const MC=new Map(),MATC=new Map();
 function skinOf(type){try{return /^[EKT]$/.test(type)&&SAVE.v3?SAVE.v3.skin|0:0;}catch(e){return 0;}}
 function mergeGroup(g){g.updateMatrixWorld(true);const inv=new THREE.Matrix4().copy(g.matrixWorld).invert();const by=new Map();
  g.traverse(o=>{if(!o.isMesh)return;let geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv,o.matrixWorld));
   for(const k of Object.keys(geo.attributes))if(!['position','normal','uv'].includes(k))geo.deleteAttribute(k);if(!geo.attributes.uv)geo.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count*2),2));
   const m=o.material;if(!by.has(m))by.set(m,[]);by.get(m).push(geo);});
  const out=new THREE.Group();by.forEach((gs,m)=>{const me=new THREE.Mesh(mergeGeometries(gs,false),m);me.castShadow=true;me.receiveShadow=true;out.add(me);gs.forEach(x=>x.dispose());});return out;}
 function buildModel(key,make,tier,skin){MD.tier(tier);const g=make();
  g.traverse(o=>{if(!o.isMesh)return;const m=o.material;const k=tier+'|'+skin+'|'+m.uuid;let c=MATC.get(k);if(!c){c=m.clone();c.envMap=null;if(skin&&m===MD.mat.red&&tier<3)c.color.setHex(PCOL[skin]);if(m===MD.mat.lr)c.name='lr';if(m===MD.mat.lb)c.name='lb';MATC.set(k,c);}o.material=c;});
  const lb=g.userData.lb||[];let lad=null,ladT=null;g.traverse(o=>{if(o.userData&&o.userData.ladder)lad=o;});
  if(lad){ladT={p:lad.position.clone(),r:lad.rotation.clone()};g.remove(lad);}
  const out=mergeGroup(g);if(lad){lad.position.set(0,0,0);lad.rotation.set(0,0,0);const lm=mergeGroup(lad);lm.position.copy(ladT.p);lm.rotation.copy(ladT.r);lm.userData.ladder=1;out.add(lm);out.userData.lad=lm;}
  const bb=new THREE.Box3().setFromObject(out);out.userData={...out.userData,lb,bb,L:bb.max.x-bb.min.x,Wd:bb.max.z-bb.min.z,cx:(bb.max.x+bb.min.x)/2,cz:(bb.max.z+bb.min.z)/2};MD.tier(0);return out;}
 function model(type,tier){const veh='EKTA'.includes(type);const skin=veh?skinOf(type):0;const key=type+(veh?tier:'')+'|'+skin;let m=MC.get(key);if(m)return m;
  let make;if(MD.B[type])make=MD.B[type];else if(type.startsWith('car'))make=()=>MD.sedan(+type.slice(3));else make={cone:MD.cone,bar:MD.barrier,hyd:MD.hydrant}[type];
  m=buildModel(key,make,veh?tier:0,skin);MC.set(key,m);return m;}
 function sedanHex(h){const key='sed'+h;let m=MC.get(key);if(!m){m=buildModel(key,()=>MD.sedan(h),0,0);MC.set(key,m);}return m;}
 function instance(m,fit){const root=new THREE.Group();const yaw=new THREE.Group();const body=m.clone();root.add(yaw);yaw.add(body);const u=m.userData;
  if(fit){const f=Math.min(fit[0]/u.L,fit[1]/u.Wd);body.scale.setScalar(f);body.position.set(-u.cx*f,0,-u.cz*f);root.userData.f=f;}else root.userData.f=1;
  const lr=[],lb=[];body.traverse(o=>{if(o.isMesh&&(o.material.name==='lr'||o.material.name==='lb')){o.material=o.material.clone();(o.material.name==='lr'?lr:lb).push(o.material);}});
  root.userData.lr=lr;root.userData.lb=lb;root.userData.yaw=yaw;root.userData.body=body;
  const gl=[];(u.lb||[]).forEach((p,i)=>{const s=new THREE.Sprite(glowMat(i?0x3a6cff:0xff2a1a,0));s.position.set(p[0],p[1]+.02,p[2]);s.scale.setScalar(.34);s.visible=false;body.add(s);gl.push(s);});root.userData.glows=gl;
  if(u.lad)root.userData.lad=body.children.find(c=>c.userData.ladder);return root;}
 function siren(inst,on,t,ph=0){const a=Math.sin(t*14+ph)>0;inst.userData.lr.forEach(m=>m.emissiveIntensity=on?(a?5:.25):.5);inst.userData.lb.forEach(m=>m.emissiveIntensity=on?(a?.25:6):.5);
  inst.userData.glows.forEach((s,i)=>{s.visible=on;s.material.opacity=on?((i?!a:a)?1:.08):0;});}

 // ====================== BOARD ======================
 const B3={scene:new THREE.Scene(),cam:new THREE.PerspectiveCamera(30,1,.5,80),objs:new Map(),key:null,tex:null};
 {const s=B3.scene;s.environment=ENV;s.environmentIntensity=.45;
  B3.hemi=new THREE.HemisphereLight(0xc8d6ff,0x2a2e36,.75);s.add(B3.hemi);
  const k=B3.key=new THREE.DirectionalLight(0xfff0dc,2.4);k.position.set(-6,8,-2.5);k.castShadow=true;k.shadow.mapSize.set(1024,1024);k.shadow.bias=-.0006;k.shadow.normalBias=.02;k.shadow.radius=4;s.add(k);s.add(k.target);
  B3.fireL=new THREE.DirectionalLight(0xff7a2a,0);B3.fireL.position.set(0,4,-8);s.add(B3.fireL);
  const gm=new THREE.MeshStandardMaterial({color:0xb8b8bc,roughness:.38,metalness:.2,transparent:true,envMapIntensity:.7});
  B3.apron=new THREE.Mesh(new THREE.PlaneGeometry(80,80),new THREE.MeshStandardMaterial({color:0x2a2d34,roughness:.9}));B3.apron.rotation.x=-Math.PI/2;B3.apron.position.y=-.02;B3.apron.receiveShadow=true;s.add(B3.apron);
  B3.ground=new THREE.Mesh(new THREE.PlaneGeometry(1,1),gm);B3.ground.rotation.x=-Math.PI/2;B3.ground.receiveShadow=true;s.add(B3.ground);
  B3.ring=new THREE.Mesh(new THREE.RingGeometry(.42,.52,40),new THREE.MeshBasicMaterial({color:0xffe24a,transparent:true,toneMapped:false,depthWrite:false}));B3.ring.rotation.x=-Math.PI/2;B3.ring.position.y=.015;s.add(B3.ring);
  const ag=new THREE.Shape();ag.moveTo(.08,0);ag.lineTo(-.05,-.075);ag.lineTo(-.05,.075);ag.closePath();B3.arrowGeo=new THREE.ShapeGeometry(ag);B3.arrowGeo.rotateX(-Math.PI/2);
  B3.arrowMat=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.75,toneMapped:false,depthWrite:false});B3.hintMat=new THREE.MeshBasicMaterial({color:0xffd23f,transparent:true,opacity:1,toneMapped:false,depthWrite:false,depthTest:false});
  B3.headTex=(()=>{const c=document.createElement('canvas');c.width=128;c.height=64;const g=c.getContext('2d');const gr=g.createLinearGradient(0,0,128,0);gr.addColorStop(0,'rgba(255,240,200,.55)');gr.addColorStop(1,'rgba(255,240,200,0)');g.fillStyle=gr;g.beginPath();g.moveTo(0,26);g.lineTo(128,0);g.lineTo(128,64);g.lineTo(0,38);g.fill();const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;})();
  B3.headMat=new THREE.MeshBasicMaterial({map:B3.headTex,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false});
  B3.poolMat=new THREE.MeshBasicMaterial({map:SOFT,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false});
  B3.root=new THREE.Group();s.add(B3.root);}
 function lamp(){const g=new THREE.Group();const m=new THREE.MeshStandardMaterial({color:0x3a3e46,metalness:.7,roughness:.35});
  const p=new THREE.Mesh(new THREE.CylinderGeometry(.035,.05,1.1,10),m);p.position.y=.55;p.castShadow=true;g.add(p);
  const arm=new THREE.Mesh(new THREE.BoxGeometry(.32,.04,.05),m);arm.position.set(.14,1.08,0);g.add(arm);
  const bulb=new THREE.Mesh(new THREE.SphereGeometry(.06,12,8),new THREE.MeshBasicMaterial({color:0xfff0c0,toneMapped:false}));bulb.position.set(.28,1.04,0);g.add(bulb);
  const s=new THREE.Sprite(glowMat(0xffd890,.55));s.scale.setScalar(.45);s.position.copy(bulb.position);g.add(s);
  const pool=new THREE.Mesh(new THREE.PlaneGeometry(1.6,1.6),B3.poolMat.clone());pool.material.color.setHex(0x8a6a30);pool.rotation.x=-Math.PI/2;pool.position.set(.28,.01,0);g.add(pool);return g;}
 function setupBoard(){const L=G.L;B3.key2=G;B3.L=L;B3.root.clear();B3.objs.clear();
  const bx=BOARD;B3.board=bx;if(B3.tex)B3.tex.dispose();B3.tex=new THREE.CanvasTexture(bx.c);B3.tex.colorSpace=THREE.SRGBColorSpace;B3.tex.anisotropy=4;B3.ground.material.map=B3.tex;B3.ground.material.needsUpdate=true;
  const cs=G.cs;const w=bx.w/cs,h=bx.h/cs;B3.ground.scale.set(w,h,1);B3.ground.position.set((bx.ox+bx.w/2-G.bx)/cs-L.w/2,0,(bx.oy+bx.h/2-G.by)/cs-L.h/2);
  B3.reg={w,h,cx:B3.ground.position.x,cz:B3.ground.position.z};
  const kc=B3.key.shadow.camera;const m=Math.max(L.w,L.h)/2+1.5;Object.assign(kc,{left:-m,right:m,top:m,bottom:-m,near:1,far:30});kc.updateProjectionMatrix();
  const ex=L.w/2+.55,ez=L.h/2+.55;[[-ex,-ez,0],[ex,-ez,Math.PI],[-ex,ez,0],[ex,ez,Math.PI]].forEach(([x,z,r])=>{const l=lamp();l.position.set(x,0,z);l.rotation.y=r+(z<0?-.6:.6)*(r?-1:1);B3.root.add(l);});
  B3.shadowDirty=3;}
 const W2=(x,y)=>[x+.5-B3.L.w/2,y+.5-B3.L.h/2];
 function getObj(id,make){let o=B3.objs.get(id);if(!o){o=make();o.userData.id=id;B3.objs.set(id,o);B3.root.add(o);}o.userData.seen=B3.frame;return o;}
 const FIT=[.9,.66];
 function vehObj(vv){return getObj('v'+vv.v.id+'_'+tierOf3(vv.v.type)+'_'+skinOf(vv.v.type),()=>{const o=instance(model(vv.v.type,tierOf3(vv.v.type)),FIT);
   const hl=new THREE.Mesh(new THREE.PlaneGeometry(1.3,.7),B3.headMat);hl.rotation.x=-Math.PI/2;hl.position.set(1.05,.012,0);hl.visible=false;o.userData.yaw.add(hl);o.userData.hl=hl;
   const ar=new THREE.Mesh(B3.arrowGeo,B3.arrowMat);ar.position.y=.02;B3.root.add(ar);o.userData.arrow=ar;o.userData.prevAng=vv.ang;o.userData.roll=0;return o;});}
 function tierOf3(t){try{return 'EKTA'.includes(t)?(SAVE.v3.fleet[t]||0):0;}catch(e){return 0;}}
 function propObj(id,type,fit){return getObj(id,()=>instance(model(type,0),fit));}
 function gateObj(id){return getObj(id,()=>{const g=new THREE.Group();const pm=new THREE.MeshStandardMaterial({color:0x4a4f5a,metalness:.6,roughness:.4});
   const post=new THREE.Mesh(new THREE.BoxGeometry(.14,.32,.14),pm);post.position.set(-.38,.16,0);post.castShadow=true;g.add(post);
   const armP=new THREE.Group();armP.position.set(-.38,.28,0);g.add(armP);
   const c=document.createElement('canvas');c.width=128;c.height=16;const x=c.getContext('2d');for(let i=0;i<8;i++){x.fillStyle=i%2?'#fff':'#e01818';x.fillRect(i*16,0,16,16);}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;
   const arm=new THREE.Mesh(new THREE.BoxGeometry(.86,.06,.06),new THREE.MeshStandardMaterial({map:t,roughness:.4}));arm.position.x=.43;arm.castShadow=true;armP.add(arm);g.userData.arm=armP;
   const l=new THREE.Mesh(new THREE.SphereGeometry(.035,8,6),new THREE.MeshBasicMaterial({color:0xff3020,toneMapped:false}));l.position.set(-.38,.34,0);g.add(l);return g;});}
 function switchObj(id){return getObj(id,()=>{const g=new THREE.Group();const base=new THREE.Mesh(new THREE.CylinderGeometry(.3,.34,.06,28),new THREE.MeshStandardMaterial({color:0x2a2d33,metalness:.5,roughness:.5}));base.position.y=.03;base.receiveShadow=true;g.add(base);
   const btn=new THREE.Mesh(new THREE.CylinderGeometry(.2,.22,.08,28),new THREE.MeshStandardMaterial({color:0xffc21a,emissive:0x664400,roughness:.3}));btn.position.y=.09;g.add(btn);g.userData.btn=btn;
   const s=new THREE.Sprite(glowMat(0xffd23f,.0));s.scale.setScalar(.9);s.position.y=.15;g.add(s);g.userData.gl=s;return g;});}
 // v6: ~58° elevation (32° from vertical) camera into the play viewport (G.view); board anchored to the top of the viewport,
 // spare room below is filled with street props; spare room above goes to the live fire scene (layout below).
 const TILT=32*Math.PI/180;const _c=new THREE.Vector3();const VP=()=>(G&&G.view)||BOARD;
 function camPose(c,L,tilt,orb){const hx=L.w/2+.12,hz=L.h/2+.2;const D=Math.max(hx,hz*1.15)*4+4;
  c.position.set(Math.sin(orb)*Math.sin(tilt)*D,Math.cos(tilt)*D,Math.cos(orb)*Math.sin(tilt)*D);c.up.set(0,1,0);c.lookAt(0,0,0);c.updateMatrixWorld();
  let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;const inv=c.matrixWorldInverse;
  for(const sx of [-1,1])for(const sz of [-1,1])for(const y of [0,.42]){_c.set(sx*hx,y,sz*hz).applyMatrix4(inv);const dz=-_c.z;const tx=_c.x/dz,ty=_c.y/dz;x0=Math.min(x0,tx);x1=Math.max(x1,tx);y0=Math.min(y0,ty);y1=Math.max(y1,ty);}
  return{x0,x1,y0,y1,D};}
 const _fc=new THREE.PerspectiveCamera();
 window.R3boardRatio=function(L){const f=camPose(_fc,L,TILT,0);return (f.y1-f.y0)/(f.x1-f.x0);};// on-screen height / width of the fitted board
 function boardCam(){const L=B3.L,c=B3.cam;const vp=VP();const asp=vp.w/vp.h;
  let tilt=TILT,orb=0;if(G.state==='win'){const u=cl(G.winT/1.6,0,1),e=u*u*(3-2*u);tilt=TILT+e*.1;orb=G.winT*.1*e;}
  let {x0,x1,y0,y1,D}=camPose(c,L,tilt,orb);
  let w=x1-x0,h=y1-y0;if(w/h<asp){const nw=h*asp;x0-=(nw-w)/2;x1=x0+nw;}else{const nh=w/asp;y0=y1-nh;}// extra height → below the board (props)
  const n=D*.3,f=D*3;c.near=n;c.far=f;c.aspect=asp;c.projectionMatrix.makePerspective(x0*n,x1*n,y1*n,y0*n,n,f);c.projectionMatrixInverse.copy(c.projectionMatrix).invert();B3.camOK=true;}
 // street life in the strip below the board: hydrants, cones, barriers and a small crowd of onlookers (all procedural)
 const PPL=[0x2f6fd6,0xe0a020,0x3aa05a,0xc8406a,0x8a5ad0,0xe07030,0x4ab0c8];
 function person(i){return getObj('pp'+i,()=>{const g=new THREE.Group();const body=new THREE.Mesh(new THREE.CapsuleGeometry(.09,.18,4,10),new THREE.MeshStandardMaterial({color:PPL[i%PPL.length],roughness:.7}));body.position.y=.2;body.castShadow=true;g.add(body);
   const head=new THREE.Mesh(new THREE.SphereGeometry(.075,12,10),new THREE.MeshStandardMaterial({color:[0xf0c8a0,0xc89060,0x8a5a3a][i%3],roughness:.6}));head.position.y=.42;head.castShadow=true;g.add(head);return g;});}
 function decor(t){const L=B3.L,vp=VP();const hz=L.h/2,hx=L.w/2;// only when the viewport has spare room under the board
  const ez=hz+.45;let k=0;const sp=Math.max(1.2,(L.w+2)/6);
  for(let x=-hx-.4;x<=hx+.4;x+=sp,k++){const z=ez+.2+((k*37)%3)*.08;const o=k%3===0?propObj('dh'+k,'hyd',[.5,.5]):propObj('dc'+k,'cone',[.45,.45]);o.position.set(x,0,z);}
  for(let i=0;i<Math.max(6,L.w+3);i++){const p=person(i);const x=-hx+((i*0.61803)%1)*L.w*1.05,z=ez+.55+((i*7)%3)*.2;p.position.set(x,Math.abs(Math.sin(t*3+i*1.7))*.05,z);p.rotation.y=Math.PI+Math.sin(i)*.4;}}
 const _r=new THREE.Raycaster(),_n=new THREE.Vector2(),_pl=new THREE.Plane(new THREE.Vector3(0,1,0),-.12),_h=new THREE.Vector3();
 // screen -> cell: raycast through the 3D camera onto the street (at car-body height); generous: snap to nearest occupied cell within .75
 window.pickCell=function(px,py){if(!live()||!B3.camOK||!G||B3.key2!==G)return null;const bx=VP();_n.set((px-bx.ox)/bx.w*2-1,-((py-bx.oy)/bx.h*2-1));_r.setFromCamera(_n,B3.cam);if(!_r.ray.intersectPlane(_pl,_h))return null;
  const gx=_h.x+B3.L.w/2-.5,gy=_h.z+B3.L.h/2-.5;let x=Math.round(gx),y=Math.round(gy);if(G.st.occ[x+','+y])return[x,y];let best=null,bd=.75;
  for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++){const k=(x+dx)+','+(y+dy);if(!G.st.occ[k])continue;const d=Math.hypot(gx-x-dx,gy-y-dy);if(d<bd){bd=d;best=[x+dx,y+dy];}}return best||[x,y];};
 // cell -> screen (used by 2D particles, hints, impacts) through the same 3D camera
 const _cxy=window.cellXY;window.cellXY=function(x,y){if(!live()||!B3.camOK||!G||B3.key2!==G)return _cxy(x,y);_c.set(x+.5-B3.L.w/2,.15,y+.5-B3.L.h/2).project(B3.cam);const bx=VP();return[bx.ox+(_c.x+1)/2*bx.w,bx.oy+(1-_c.y)/2*bx.h];};
 function drawBoard3D(){const t0=performance.now();if(B3.key2!==G||B3.board!==BOARD)setupBoard();B3.frame=(B3.frame||0)+1;const t=G.t,cs=G.cs;const H=hi();
  B3.key.castShadow=H;let moving=B3.shadowDirty>0;if(B3.shadowDirty>0)B3.shadowDirty--;
  const fr=G.state==='win'?0:cl(G.fire/G.fireMax,0,1.3);B3.fireL.intensity=fr*(1.1+.25*Math.sin(t*9)+.1*Math.sin(t*23));
  // vehicles
  for(const vv of Object.values(G.vv)){if(vv.done||vv.scale<=0)continue;const o=vehObj(vv);const [x,z]=W2(vv.px,vv.py);const mv=vv.segs.length>0;
   const u=o.userData;const dA=angDiff(u.prevAng,vv.ang);u.prevAng=vv.ang;u.roll=lp(u.roll,cl(dA*6,-.12,.12),.25);if(mv||Math.abs(dA)>1e-4||vv.scale<1||Math.abs(vv.sq)>.01||(vv.wob||0)>.01)moving=true;
   const sc=E.back?E.back(cl(vv.scale,0,1)):vv.scale;o.position.set(x,mv?Math.abs(Math.sin(t*22+vv.v.id))*.012:0,z);o.rotation.y=-vv.ang;o.scale.set(sc*(1+vv.sq*.5),sc*(1-vv.sq),sc*(1+vv.sq*.3));
   u.yaw.rotation.x=u.roll+(vv.wob?Math.sin(t*40)*vv.wob*.3:0);u.yaw.rotation.z=mv?-.025:0;
   siren(o,!!vv.siren,t,vv.v.id);u.hl.visible=!!vv.siren&&H;
   const hn=!!(G.hint&&G.hint.id===vv.v.id&&!mv);const idle=!mv&&vv.scale>=1&&G.state==='play';u.arrow.visible=idle;u.arrow.material=hn?B3.hintMat:B3.arrowMat;u.arrow.renderOrder=hn?10:0;
   if(hn){const hp=.5+.5*Math.sin(G.hint.t*6);o.position.y=Math.abs(Math.sin(G.hint.t*5))*.07;moving=true;const [dx,dy]=FL.DIRS[vv.v.d];const k=.62+hp*.14;u.arrow.position.set(x+dx*k,.03,z+dy*k);u.arrow.rotation.y=-ANG[vv.v.d];u.arrow.scale.setScalar(2.1+hp*.35);}
   else if(idle){u.arrow.scale.setScalar(1);const [dx,dy]=FL.DIRS[vv.v.d];u.arrow.position.set(x+dx*.5,.02,z+dy*.5);u.arrow.rotation.y=-ANG[vv.v.d];u.arrow.material.opacity=.55+.2*Math.sin(t*4);}
   u.arrow.userData.seen=B3.frame;}
  // civilian cars (tow-able), cones, barriers
  G.st.blk.forEach(b=>{const k=b.x+','+b.y;const j=G.blkJ[k]||0;if(b.sub==='#'){const car=G.cars[k];if(!car||car.done)return;const hex=parseInt((car.col&&car.col[1]||'#4a8fd6').slice(1),16);
    const o=getObj('c'+k+'_'+hex,()=>instance(sedanHex(hex),FIT));const [x,z]=W2(car.px,car.py);o.position.set(x+Math.sin(j*40)*.05*j,0,z);o.rotation.y=-car.ang;if(car.attached||j>0)moving=true;}
   else if(!b.gone){const o=propObj('b'+k,b.sub==='x'?'bar':'cone',b.sub==='x'?[.8,.8]:[.62,.62]);const [x,z]=W2(b.x,b.y);o.position.set(x+Math.sin(j*40)*.06*j,0,z);if(b.sub==='x')o.rotation.y=Math.PI/2*((b.x+b.y)%2);if(j>0)moving=true;}});
  G.st.hyd.forEach((h,i)=>{if(G.hydVis[i].gone)return;const o=propObj('h'+i,'hyd',[.55,.55]);const [x,z]=W2(h.x,h.y);o.position.set(x,0,z);});
  G.st.sw.forEach((s,i)=>{const o=switchObj('s'+i);const [x,z]=W2(s.x,s.y);o.position.set(x,0,z);const on=G.gateA>0;o.userData.btn.position.y=on?.06:.09;o.userData.gl.material.opacity=on?.2:.35+.25*Math.sin(t*5);});
  G.st.gates.forEach((g,i)=>{const o=gateObj('g'+i);const [x,z]=W2(g.x,g.y);o.position.set(x,0,z);o.userData.arm.rotation.z=G.gateA*1.35;if(G.gateA>0&&G.gateA<1)moving=true;});
  // hint ring
  const hv=G.hint&&G.st.veh[G.hint.id];B3.ring.visible=!!(hv&&!hv.gone);if(B3.ring.visible){const [x,z]=W2(hv.x,hv.y);const p=.5+.5*Math.sin(G.hint.t*6);B3.ring.position.set(x,.015,z);B3.ring.scale.setScalar(1+p*.12);B3.ring.material.opacity=.5+p*.5;}
  decor(t);
  // sweep unused objects
  for(const [id,o] of B3.objs)if(o.userData.seen!==B3.frame){B3.root.remove(o);if(o.userData.arrow)B3.root.remove(o.userData.arrow);B3.objs.delete(id);moving=true;}
  if(G.state==='win')moving=true;
  R.shadowMap.autoUpdate=false;R.shadowMap.needsUpdate=H&&moving;
  boardCam();const bx=VP();const pr=prRatio();const pw=Math.round(bx.w*pr),ph=Math.round(bx.h*pr);prep(pw,ph);R.render(B3.scene,B3.cam);blit(cx,pw,ph,bx.ox,bx.oy,bx.w,bx.h);
  R3.ms=lp(R3.ms,performance.now()-t0,.1);}

 // ====================== FIRE SCENE ======================
 const CH={1:{sky:['#0b1430','#2a3f6e'],fog:0x1a2440,amb:0x8090c0,ambI:.9,key:0x9fb4ff,keyI:1.2,keyP:[-6,10,8],build:'apt'},
  2:{sky:['#2a1438','#c8604a'],fog:0x4a2840,amb:0xffb090,ambI:1,key:0xffa070,keyI:1.6,keyP:[-10,5,6],build:'market'},
  3:{sky:['#2a3038','#6a6058'],fog:0x3a4048,amb:0xc8d0dc,ambI:1.2,key:0xe8ecf0,keyI:1.4,keyP:[6,10,6],build:'factory'},
  4:{sky:['#3a1a10','#ff9a40'],fog:0x6a3a20,amb:0xffc090,ambI:1.0,key:0xffb060,keyI:2.0,keyP:[-10,4,4],build:'cabin'},
  5:{sky:['#05070e','#1a2236'],fog:0x0a0e18,amb:0x6070a0,ambI:.8,key:0x8090c0,keyI:.9,keyP:[5,10,8],build:'tower'}};
 const S3D={ch:0};
 const FLAME_V=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
 const FLAME_F=`uniform float t,seed,amp;varying vec2 vUv;
 float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
 float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p*=2.03;a*=.5;}return v;}
 void main(){vec2 uv=vUv;float y=uv.y;float x=(uv.x-.5)*2.;
  float nz=fbm(vec2(uv.x*3.2+seed,y*2.6-t*2.4));float nz2=fbm(vec2(uv.x*6.+seed*2.,y*5.-t*4.));
  float w=mix(.95,.05,pow(y,.8));float d=abs(x+(nz-.5)*.9*y);
  float shape=1.-smoothstep(w*.45,w,d);float body=shape*smoothstep(1.02,.2,y+(nz2-.5)*.55)*smoothstep(0.,.1,y);
  float core=1.-smoothstep(0.,.55,d/w+y*.9);
  vec3 c=mix(vec3(1.,.55,.12),vec3(1.,.95,.7),core);c=mix(c,vec3(.75,.12,.02),smoothstep(.45,.95,y));
  float a=body*amp;gl_FragColor=vec4(c*a*1.5,a);}`;
 function flameMat(seed){return new THREE.ShaderMaterial({uniforms:{t:{value:0},seed:{value:seed},amp:{value:1}},vertexShader:FLAME_V,fragmentShader:FLAME_F,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});}
 function skyTex(a,b){const c=document.createElement('canvas');c.width=4;c.height=256;const g=c.getContext('2d');const gr=g.createLinearGradient(0,0,0,256);gr.addColorStop(0,a);gr.addColorStop(1,b);g.fillStyle=gr;g.fillRect(0,0,4,256);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
 function facade(w,h,o){const c=document.createElement('canvas');const px=64;c.width=Math.round(w*px/4)*4;c.height=Math.round(h*px/4)*4;const g=c.getContext('2d');g.fillStyle=o.wall;g.fillRect(0,0,c.width,c.height);
  if(o.brick){g.globalAlpha=.18;for(let y=0;y<c.height;y+=6)for(let x=(y/6%2)*8;x<c.width;x+=16){g.fillStyle=Math.random()<.5?'#000':'#fff';g.fillRect(x,y,15,5);}g.globalAlpha=1;}
  if(o.logs){for(let y=0;y<c.height;y+=14){const gr=g.createLinearGradient(0,y,0,y+14);gr.addColorStop(0,'#8a5a32');gr.addColorStop(.5,'#6a4024');gr.addColorStop(1,'#3a2210');g.fillStyle=gr;g.fillRect(0,y,c.width,14);}}
  if(o.panels){g.strokeStyle='rgba(0,0,0,.25)';g.lineWidth=2;for(let x=0;x<c.width;x+=12){g.beginPath();g.moveTo(x,0);g.lineTo(x,c.height);g.stroke();}}
  const cols=o.cols,rows=o.rows;const cw=c.width/cols,rh=c.height/rows;const lit=[];
  for(let r=0;r<rows;r++)for(let k=0;k<cols;k++){if(o.door&&r===rows-1&&k===Math.floor(cols/2))continue;const x=k*cw+cw*o.mx,y=r*rh+rh*o.my,ww=cw*(1-2*o.mx),hh=rh*(1-2*o.my);
   g.fillStyle=o.frame||'#d8d0c0';g.fillRect(x-2,y-2,ww+4,hh+4);const on=Math.random()<(o.lit||.35);g.fillStyle=on?'#ffcf7a':(o.glass||'#1a2230');g.fillRect(x,y,ww,hh);if(on)lit.push([x,y,ww,hh]);
   if(o.sill){g.fillStyle='rgba(255,255,255,.35)';g.fillRect(x-3,y+hh+1,ww+6,3);}if(!o.noMul){g.fillStyle='rgba(0,0,0,.35)';g.fillRect(x+ww/2-1,y,2,hh);}}
  if(o.door){const k=Math.floor(cols/2),r=rows-1;g.fillStyle='#3a2416';g.fillRect(k*cw+cw*.25,r*rh+rh*.2,cw*.5,rh*.8);g.fillStyle='#ffcf7a';g.fillRect(k*cw+cw*.3,r*rh+rh*.25,cw*.4,rh*.15);}
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=4;
  const e=document.createElement('canvas');e.width=c.width;e.height=c.height;const eg=e.getContext('2d');eg.fillStyle='#000';eg.fillRect(0,0,e.width,e.height);eg.fillStyle='#ffb050';lit.forEach(([x,y,w2,h2])=>eg.fillRect(x,y,w2,h2));
  const em=new THREE.CanvasTexture(e);em.colorSpace=THREE.SRGBColorSpace;
  const anchors=[];for(let r=0;r<rows;r++)for(let k=0;k<cols;k++)anchors.push([(k+.5)/cols*w-w/2,h-(r+o.my+.45*(1-2*o.my))/rows*h]);
  return {mat:new THREE.MeshStandardMaterial({map,emissiveMap:em,emissive:0xffffff,emissiveIntensity:.55,roughness:.85}),anchors};}
 function boxB(g,w,h,d,mat,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y+h/2,z);m.castShadow=true;m.receiveShadow=true;g.add(m);return m;}
 function prism(w,h,d,mat){const s=new THREE.Shape();s.moveTo(-w/2,0);s.lineTo(w/2,0);s.lineTo(0,h);s.closePath();const ge=new THREE.ExtrudeGeometry(s,{depth:d,bevelEnabled:false});ge.translate(0,0,-d/2);const m=new THREE.Mesh(ge,mat);m.castShadow=true;return m;}
 const SM=(c,o={})=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.8},o));
 function buildBuilding(kind){const g=new THREE.Group();const F=[];let P=[];const side=SM(0x3a2a24);
  if(kind==='apt'){const f=facade(12,13,{wall:'#7a3a2a',brick:1,cols:6,rows:5,mx:.22,my:.2,sill:1,door:1,lit:.25});const ms=[side,side,SM(0x2a1a14),side,f.mat,side];
   const b=new THREE.Mesh(new THREE.BoxGeometry(12,13,5),ms);b.position.y=6.5;b.castShadow=b.receiveShadow=true;g.add(b);boxB(g,12.4,.5,5.4,SM(0x5a2a1e),0,13,0);
   for(let r=1;r<5;r++)boxB(g,1.8,.12,.8,SM(0x2a2a2e,{metalness:.6}),-3.7,r*2.6,2.9);
   F.push(...f.anchors.filter((a,i)=>[1,4,7,8,10,13,15,20,22].includes(i)).map(a=>[a[0],a[1]-.6,2.55]),[-2,13.6,1],[3,13.6,0]);P=[[-1,13.3,2.4],[4,13.3,2.4],[f.anchors[2][0],f.anchors[2][1]-1,2.6],[f.anchors[9][0],f.anchors[9][1]-1,2.6]];}
  else if(kind==='market'){const cols=[0xd8b080,0xc89a70,0xe0c8a0];const aw=[0xd8261c,0x1e7ad8,0x2aa04a];for(let i=0;i<3;i++){const x=(i-1)*4.6;const f=facade(4.4,7,{wall:'#'+cols[i].toString(16),cols:2,rows:2,mx:.18,my:.2,lit:.6,frame:'#6a4a2a'});
    const b=new THREE.Mesh(new THREE.BoxGeometry(4.4,7,4),[side,side,side,side,f.mat,side]);b.position.set(x,3.5,0);b.castShadow=b.receiveShadow=true;g.add(b);
    const rf=prism(4.8,2.2,4.4,SM(0x6a2a1a));rf.position.set(x,7,0);g.add(rf);
    const a=new THREE.Mesh(new THREE.BoxGeometry(4.2,.08,1.6),SM(aw[i]));a.position.set(x,2.9,2.7);a.rotation.x=.35;a.castShadow=true;g.add(a);
    for(let k=0;k<3;k++){const l=new THREE.Mesh(new THREE.SphereGeometry(.22,10,8),new THREE.MeshBasicMaterial({color:0xff5030,toneMapped:false}));l.position.set(x-1.4+k*1.4,2.5,3.4);g.add(l);}
    boxB(g,3.4,.9,1.2,SM(0x8a6a3a),x,0,3);F.push(...f.anchors.map(a=>[x+a[0],a[1]-.4,2.1]),[x,8.6,0]);}P=[[-4.6,4.6,2.2],[0,4.6,2.2],[4.6,4.6,2.2]];}
  else if(kind==='factory'){const f=facade(16,6,{wall:'#8a9098',panels:1,cols:8,rows:2,mx:.15,my:.28,lit:.25,glass:'#2a3440',frame:'#5a6068'});
   const b=new THREE.Mesh(new THREE.BoxGeometry(16,6,7),[side,side,side,side,f.mat,side]);b.position.y=3;b.castShadow=b.receiveShadow=true;g.add(b);
   for(let i=0;i<4;i++){const p=prism(4,1.8,7,SM(0x6a7078,{metalness:.4,roughness:.5}));p.position.set(-6+i*4,6,0);p.rotation.z=0;g.add(p);}
   [[-5,1],[4.5,-1.2]].forEach(([x,z])=>{const c=new THREE.Mesh(new THREE.CylinderGeometry(.6,.75,11,16),SM(0x7a4a3a));c.position.set(x,5.5,z);c.castShadow=true;g.add(c);boxB(g,1.6,.4,1.6,SM(0x2a2a2a),x,10.8,z);});
   const tank=new THREE.Mesh(new THREE.CylinderGeometry(1.6,1.6,4,20),SM(0xb0b8c0,{metalness:.7,roughness:.3}));tank.position.set(9.6,2,1);tank.castShadow=true;g.add(tank);
   F.push(...f.anchors.map(a=>[a[0],a[1]-.3,3.55]),[-5,11.5,1],[4.5,11.6,-1.2],[-2,7.4,1],[2,7.4,1]);P=[[-6,6.5,3.2],[6,6.5,3.2]];}
  else if(kind==='cabin'){const f=facade(9,4.2,{logs:1,wall:'#6a4024',cols:3,rows:1,mx:.3,my:.25,lit:.7,frame:'#3a2010',door:0});
   const b=new THREE.Mesh(new THREE.BoxGeometry(9,4.2,6),[SM(0x5a3a20),SM(0x5a3a20),side,side,f.mat,SM(0x5a3a20)]);b.position.y=2.1;b.castShadow=b.receiveShadow=true;g.add(b);
   const rf=prism(10.4,3.6,7,SM(0x3a2418));rf.position.y=4.2;g.add(rf);boxB(g,9.6,.25,2.2,SM(0x7a5030),0,0,3.9);for(let k=-2;k<=2;k++)boxB(g,.2,1.9,.2,SM(0x5a3a20),k*2.2,.25,4.8);
   boxB(g,1,3,1,SM(0x6a6a70),3,5.2,0);
   const tm=SM(0x1a3a22,{roughness:.9});const tk=SM(0x3a2414);for(let i=0;i<16;i++){const x=(i<8?-1:1)*(7+Math.random()*9),z=-6+Math.random()*9,s=2+Math.random()*2.5;const tr=new THREE.Group();const c1=new THREE.Mesh(new THREE.ConeGeometry(s*.55,s*2,8),tm);c1.position.y=s*1.4;c1.castShadow=true;tr.add(c1);const c2=new THREE.Mesh(new THREE.ConeGeometry(s*.42,s*1.5,8),tm);c2.position.y=s*2.3;tr.add(c2);const k2=new THREE.Mesh(new THREE.CylinderGeometry(.15,.2,s*.6,6),tk);k2.position.y=s*.3;tr.add(k2);tr.position.set(x,0,z);g.add(tr);if(i%3===0)F.push([x,s*2,z+1]);}
   F.push(...f.anchors.map(a=>[a[0],a[1]-.3,3.05]),[-2,6,1.5],[2.4,6.4,1.2],[0,7.2,0],[-3.6,5.2,2.5]);P=[[0,1.2,4.6],[-2.2,1.2,4.6]];}
  else {const f=facade(7,26,{wall:'#2a3442',cols:5,rows:12,mx:.08,my:.12,lit:.3,glass:'#1a2a3c',frame:'#8090a0',noMul:1});
   const b=new THREE.Mesh(new THREE.BoxGeometry(7,26,6),[SM(0x222a36),SM(0x222a36),side,side,new THREE.MeshStandardMaterial({map:f.mat.map,emissiveMap:f.mat.emissiveMap,emissive:0xffffff,emissiveIntensity:.9,roughness:.25,metalness:.5}),SM(0x222a36)]);b.position.y=13;b.castShadow=b.receiveShadow=true;g.add(b);
   boxB(g,4,2,4,SM(0x3a4250),0,26,0);const an=new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,5),SM(0x999999,{metalness:1}));an.position.set(0,30.5,0);g.add(an);
   const bl=new THREE.Mesh(new THREE.SphereGeometry(.2,8,6),new THREE.MeshBasicMaterial({color:0xff2020,toneMapped:false}));bl.position.set(0,33,0);g.add(bl);
   [[-9,14,-4],[9,18,-3],[-15,10,-6],[15,22,-7]].forEach(([x,h,z])=>{const f2=facade(5,h,{wall:'#1e2632',cols:3,rows:Math.round(h/2.4),mx:.12,my:.15,lit:.25,glass:'#121a26',frame:'#4a5462',noMul:1});const t=new THREE.Mesh(new THREE.BoxGeometry(5,h,5),[SM(0x1a2230),SM(0x1a2230),side,side,f2.mat,SM(0x1a2230)]);t.position.set(x,h/2,z);g.add(t);});
   F.push(...f.anchors.filter((a,i)=>[6,8,12,17,21,23,27,31,33,36,38,42].includes(i)).map(a=>[a[0],a[1]-.4,3.05]));P=[[f.anchors[7][0],f.anchors[7][1]-.8,3.1],[f.anchors[16][0],f.anchors[16][1]-.8,3.1],[0,27.2,1.5]];}
  return {g,F,P};}
 function figure(o){// articulated human (~1.8 units): hips, legs, torso, arms, head, helmet
  const g=new THREE.Group();const coat=SM(o.coat,{roughness:.75}),dark=SM(o.pants||0x2a2a2e),skin=SM(0xe0b08a,{roughness:.6}),boot=SM(0x111111),refl=new THREE.MeshStandardMaterial({color:0xe8e070,emissive:0x5a5410,roughness:.3});
  const cyl=(r1,r2,l,m)=>{const me=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,l,10),m);me.castShadow=true;return me;};
  const leg=s=>{const p=new THREE.Group();p.position.set(s*.11,.92,0);const th=cyl(.085,.075,.48,dark);th.position.y=-.24;p.add(th);const kn=new THREE.Group();kn.position.y=-.47;p.add(kn);const sh=cyl(.075,.065,.42,dark);sh.position.y=-.21;kn.add(sh);const b=new THREE.Mesh(new THREE.BoxGeometry(.13,.1,.24),boot);b.position.set(0,-.43,.04);kn.add(b);if(o.ff){const r=cyl(.078,.078,.04,refl);r.position.y=-.3;kn.add(r);}g.add(p);return{p,kn};};
  const L=leg(-1),Rg=leg(1);const torso=new THREE.Group();torso.position.y=.92;g.add(torso);
  const ch=new THREE.Mesh(new THREE.CylinderGeometry(.19,.17,.62,12),coat);ch.position.y=.33;ch.scale.z=.75;ch.castShadow=true;torso.add(ch);
  if(o.ff){const r1=cyl(.195,.195,.05,refl);r1.position.y=.12;r1.scale.z=.76;torso.add(r1);const r2=cyl(.195,.195,.05,refl);r2.position.y=.42;r2.scale.z=.76;torso.add(r2);
   const tank=cyl(.08,.08,.42,SM(0xd8d8d8,{metalness:.8,roughness:.3}));tank.position.set(0,.4,-.17);torso.add(tank);}
  const head=new THREE.Group();head.position.y=.74;torso.add(head);const hd=new THREE.Mesh(new THREE.SphereGeometry(.11,14,10),skin);hd.position.y=.07;head.add(hd);
  if(o.ff){const hm=SM(o.helmet||0xd8261c,{roughness:.3,metalness:.2});const h1=new THREE.Mesh(new THREE.SphereGeometry(.135,14,8,0,TAU,0,Math.PI/2),hm);h1.position.y=.1;head.add(h1);const br=new THREE.Mesh(new THREE.CylinderGeometry(.2,.21,.03,16),hm);br.position.set(0,.1,-.03);br.scale.z=1.2;head.add(br);}
  else{const hr=new THREE.Mesh(new THREE.SphereGeometry(.118,12,8,0,TAU,0,Math.PI/2),SM(o.hair||0x2a1a10));hr.position.y=.09;head.add(hr);}
  const arm=s=>{const p=new THREE.Group();p.position.set(s*.22,.58,0);torso.add(p);const u=cyl(.06,.055,.32,coat);u.position.y=-.16;p.add(u);const el=new THREE.Group();el.position.y=-.31;p.add(el);const f=cyl(.05,.045,.28,coat);f.position.y=-.14;el.add(f);const hnd=new THREE.Mesh(new THREE.SphereGeometry(.05,8,6),o.ff?SM(0x222222):skin);hnd.position.y=-.3;el.add(hnd);return{p,el};};
  const A=arm(-1),Bm=arm(1);let noz=null;if(o.ff){noz=new THREE.Group();const n1=cyl(.04,.03,.36,SM(0xc0c0c0,{metalness:1,roughness:.2}));n1.rotation.x=Math.PI/2;n1.position.z=.18;noz.add(n1);noz.position.set(0,.5,.3);torso.add(noz);}
  g.userData={L,R:Rg,A,B:Bm,torso,head,noz};return g;}
 function pose(f,mode,t,ph){const u=f.userData;const s=Math.sin(t*8+ph);
  if(mode==='walk'){u.L.p.rotation.x=s*.6;u.R.p.rotation.x=-s*.6;u.L.kn.rotation.x=Math.max(0,-s)*.8;u.R.kn.rotation.x=Math.max(0,s)*.8;u.A.p.rotation.x=-s*.5;u.B.p.rotation.x=s*.5;u.torso.position.y=.92+Math.abs(s)*.03;}
  else if(mode==='spray'){u.L.p.rotation.x=.25;u.R.p.rotation.x=-.35;u.L.kn.rotation.x=.2;u.R.kn.rotation.x=.45;u.torso.rotation.x=.12+Math.sin(t*20+ph)*.01;u.A.p.rotation.x=-1.25;u.B.p.rotation.x=-1.05;u.A.p.rotation.z=.25;u.B.p.rotation.z=-.35;u.A.el.rotation.x=-.3;u.B.el.rotation.x=-.5;}
  else if(mode==='wave'){u.B.p.rotation.z=-2.6+Math.sin(t*9+ph)*.35;u.A.p.rotation.z=.1;}
  else if(mode==='cheer'){const j=Math.abs(Math.sin(t*6+ph));f.position.y=(f.userData.y0||0)+j*.35;u.A.p.rotation.z=2.7;u.B.p.rotation.z=-2.7;}
  else{u.L.p.rotation.x=u.R.p.rotation.x=0;u.L.kn.rotation.x=u.R.kn.rotation.x=0;u.A.p.rotation.set(0,0,.08);u.B.p.rotation.set(0,0,-.08);}}
 // ====================== v8 INCIDENT SCENES (crash / injured / cat) ======================
 function catModel(col,stripe){// cute original cat, ~1 unit long, sits facing +z
  const g=new THREE.Group();const fur=SM(col,{roughness:.9}),st=SM(stripe||col,{roughness:.9}),wh=SM(0xf6f0e6,{roughness:.9}),pink=SM(0xff8aa8,{roughness:.6}),blk=new THREE.MeshStandardMaterial({color:0x111111,roughness:.15,metalness:.1});
  const sp=(r,m,x,y,z,sx=1,sy=1,sz=1)=>{const e=new THREE.Mesh(new THREE.SphereGeometry(r,16,12),m);e.position.set(x,y,z);e.scale.set(sx,sy,sz);e.castShadow=true;g.add(e);return e;};
  sp(.3,fur,0,.3,-.05,1,1.05,1.25);sp(.2,wh,0,.3,.18,1,1.1,.6);// body + chest
  [-.15,.15].forEach(x=>{sp(.09,wh,x,.07,.26,1,.7,1.3);sp(.1,fur,x*1.4,.12,-.25,1,.8,1.4);});// paws + haunches
  const hd=new THREE.Group();hd.position.set(0,.72,.08);g.add(hd);const h=new THREE.Mesh(new THREE.SphereGeometry(.26,18,14),fur);h.scale.set(1.12,.95,1);h.castShadow=true;hd.add(h);
  const mz=new THREE.Mesh(new THREE.SphereGeometry(.12,14,10),wh);mz.position.set(0,-.07,.19);mz.scale.set(1.3,.8,.8);hd.add(mz);
  const ns=new THREE.Mesh(new THREE.SphereGeometry(.035,8,6),pink);ns.position.set(0,-.02,.27);hd.add(ns);
  [-1,1].forEach(s=>{const e=new THREE.Mesh(new THREE.SphereGeometry(.06,12,10),blk);e.position.set(s*.1,.04,.22);e.scale.set(1,1.25,.6);hd.add(e);
   const hl=new THREE.Mesh(new THREE.SphereGeometry(.018,6,6),new THREE.MeshBasicMaterial({color:0xffffff}));hl.position.set(s*.1+.02,.07,.26);hd.add(hl);
   const ear=new THREE.Mesh(new THREE.ConeGeometry(.1,.2,4),fur);ear.position.set(s*.15,.22,0);ear.rotation.z=-s*.35;ear.castShadow=true;hd.add(ear);
   const ie=new THREE.Mesh(new THREE.ConeGeometry(.055,.12,4),pink);ie.position.set(s*.15,.21,.035);ie.rotation.z=-s*.35;hd.add(ie);
   for(let k=0;k<2;k++){const w=new THREE.Mesh(new THREE.CylinderGeometry(.004,.004,.22,3),wh);w.rotation.z=Math.PI/2+s*(k?.2:-.1);w.position.set(s*.2,-.06+k*.03,.2);hd.add(w);}});
  if(stripe)[0,1,2].forEach(k=>{const b=new THREE.Mesh(new THREE.TorusGeometry(.27,.025,6,20,Math.PI),st);b.rotation.set(Math.PI/2,0,0);b.position.set(0,.45-k*.13,-.08);b.scale.set(1,1.25,1);g.add(b);});
  const tc=new THREE.CatmullRomCurve3([new THREE.Vector3(0,.12,-.38),new THREE.Vector3(.18,.2,-.55),new THREE.Vector3(.3,.5,-.5),new THREE.Vector3(.26,.75,-.42)]);
  const tail=new THREE.Mesh(new THREE.TubeGeometry(tc,16,.05,8),fur);tail.castShadow=true;const tg=new THREE.Group();tg.add(tail);g.add(tg);
  g.userData={hd,tg};return g;}
 function dogModel(){const g=new THREE.Group();const f=SM(0xc08040,{roughness:.9}),d=SM(0x5a3a20);const sp=(r,m,x,y,z,sx=1,sy=1,sz=1)=>{const e=new THREE.Mesh(new THREE.SphereGeometry(r,14,10),m);e.position.set(x,y,z);e.scale.set(sx,sy,sz);e.castShadow=true;g.add(e);return e;};
  sp(.28,f,0,.42,0,1,.85,1.6);sp(.2,f,0,.72,.42);sp(.1,f,0,.66,.6,1,.8,1.3);sp(.04,SM(0x111111),0,.68,.72);[-1,1].forEach(s=>{sp(.09,d,s*.17,.82,.38,.6,1.4,.8);[-.25,.25].forEach(z=>{const l=new THREE.Mesh(new THREE.CylinderGeometry(.06,.06,.32,8),f);l.position.set(s*.13,.16,z);g.add(l);});});
  const t=new THREE.Mesh(new THREE.CylinderGeometry(.03,.05,.35,6),f);t.position.set(0,.6,-.48);t.rotation.x=-.7;g.add(t);g.userData.tail=t;return g;}
 function wreck(hex,o){o=o||{};const w=instance(sedanHex(hex),null);w.scale.setScalar(4.4);const g=new THREE.Group();g.add(w);
  const ch=SM(0x15120f,{roughness:1}),gl=new THREE.MeshStandardMaterial({color:0xbfe6ff,roughness:.05,metalness:.3,transparent:true,opacity:.7});
  // crumpled front: dark dented panels and a bent bumper
  const dn=new THREE.Mesh(new THREE.IcosahedronGeometry(.55,0),ch);dn.position.set(1.25,.55,0);dn.scale.set(.8,.45,1.1);g.add(dn);
  const bb=new THREE.Mesh(new THREE.BoxGeometry(.12,.18,1.5),SM(0x9aa0a8,{metalness:.9,roughness:.3}));bb.position.set(1.55,.3,.3);bb.rotation.y=.5;bb.rotation.z=.3;bb.castShadow=true;g.add(bb);
  for(let i=0;i<14;i++){const s=new THREE.Mesh(new THREE.TetrahedronGeometry(.05+Math.random()*.06),gl);s.position.set(1.4+Math.random()*1.6,.03,(Math.random()-.5)*2.2);s.rotation.set(Math.random()*3,Math.random()*3,0);g.add(s);}
  if(o.tire){const t=new THREE.Mesh(new THREE.TorusGeometry(.32,.13,8,18),SM(0x111111,{roughness:.9}));t.rotation.x=Math.PI/2;t.position.set(2.6,.13,1.2);g.add(t);}
  g.userData.front=new THREE.Vector3(1.2,.9,0);return g;}
 function cone3(g,x,z){const c=new THREE.Mesh(new THREE.ConeGeometry(.22,.6,14),SM(0xff6a10,{roughness:.5}));c.position.set(x,.3,z);c.castShadow=true;g.add(c);const b=new THREE.Mesh(new THREE.CylinderGeometry(.13,.15,.1,14),SM(0xffffff));b.position.set(x,.36,z);g.add(b);}
 function stretcher(g,x,z,ry){const s=new THREE.Group();const fr=SM(0xd0d4da,{metalness:.8,roughness:.3});const pad=SM(0xe8edf2,{roughness:.6}),or=SM(0xff7a1a,{roughness:.5});
  const p=new THREE.Mesh(new THREE.BoxGeometry(2,.12,.65),pad);p.position.y=.8;p.castShadow=true;s.add(p);const st=new THREE.Mesh(new THREE.BoxGeometry(.25,.13,.66),or);st.position.set(.3,.81,0);s.add(st);
  const pl=new THREE.Mesh(new THREE.BoxGeometry(.4,.1,.5),SM(0xffffff));pl.position.set(-.75,.9,0);s.add(pl);
  [[-.8,-.25],[-.8,.25],[.8,-.25],[.8,.25]].forEach(([a,b])=>{const l=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,.75,6),fr);l.position.set(a,.38,b);s.add(l);const w=new THREE.Mesh(new THREE.CylinderGeometry(.07,.07,.05,10),SM(0x222222));w.rotation.x=Math.PI/2;w.position.set(a,.07,b);s.add(w);});
  s.position.set(x,0,z);s.rotation.y=ry||0;g.add(s);return s;}
 function medkit(g,x,z){const b=new THREE.Mesh(new THREE.BoxGeometry(.6,.4,.3),SM(0xf4f4f4,{roughness:.4}));b.position.set(x,.2,z);b.castShadow=true;g.add(b);const r=SM(0xe0202a);[[.32,.08],[.08,.32]].forEach(([w,h])=>{const c=new THREE.Mesh(new THREE.BoxGeometry(w,h,.02),r);c.position.set(x,.22,z+.16);g.add(c);});}
 function warnTri(g,x,z){const t=new THREE.Mesh(new THREE.TorusGeometry(.32,.05,4,3),new THREE.MeshStandardMaterial({color:0xff2020,emissive:0x601010,roughness:.3}));t.position.set(x,.36,z);t.rotation.z=Math.PI/2;g.add(t);}
 function treeBig(g){const bark=SM(0x5a3a22,{roughness:1}),leaf=[SM(0x2e7a34,{roughness:.9,flatShading:true}),SM(0x3a9440,{roughness:.9,flatShading:true}),SM(0x24622a,{roughness:.9,flatShading:true})];const ends=[];
  const tr=new THREE.Mesh(new THREE.CylinderGeometry(.5,.95,7.5,12),bark);tr.position.y=3.75;tr.castShadow=true;g.add(tr);
  const br=(x0,y0,ang,len,tilt)=>{const b=new THREE.Mesh(new THREE.CylinderGeometry(.14,.3,len,8),bark);b.geometry.translate(0,len/2,0);b.position.set(x0,y0,0);b.rotation.z=ang;b.rotation.x=tilt||0;b.castShadow=true;g.add(b);
   const e=new THREE.Vector3(0,len,0).applyEuler(b.rotation).add(b.position);ends.push(e);};
  br(0,4.2,1.05,4.2,.15);br(0,5,-1.0,4,-.1);br(0,6,.55,3.4,.2);br(0,6.4,-.6,3.2,.15);br(0,7,.1,2.6,.25);br(0,3.4,-1.25,3.2,.3);
  const cl=[[0,9.6,-.5,3.2],[-3.6,8.2,-.4,2.6],[3.6,8,-.3,2.7],[-2,10.2,-.8,2.4],[2.2,10.3,-.8,2.3],[0,7.6,-1.6,2.8],[-4.4,6.4,-.6,2],[4.4,6.6,-.2,2],[0,11.3,-.6,1.9]];
  cl.forEach(([x,y,z,r],i)=>{const m=new THREE.Mesh(new THREE.IcosahedronGeometry(r,1),leaf[i%3]);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;g.add(m);});
  const rt=new THREE.Mesh(new THREE.ConeGeometry(1.6,.8,10),bark);rt.position.y=.2;g.add(rt);return ends;}
 function buildIncident(scn,ch){const g=new THREE.Group();const F=[],P=[],mode=[];const cols=[0x3a7bd5,0xe0e0e0,0x2a2a2e,0x7a4ad8,0xd8a020];
  if(scn==='crash'){const a=wreck(cols[ch%5],{tire:1});a.position.set(-2.6,0,1.2);a.rotation.y=.55;g.add(a);const b=wreck(cols[(ch+2)%5]);b.position.set(1.8,0,.4);b.rotation.y=Math.PI+.75;g.add(b);
    if(ch>=3){const c=wreck(cols[(ch+3)%5]);c.position.set(6.4,1.05,-1.6);c.rotation.set(0,-.4,Math.PI/2*.98);g.add(c);F.push([6.2,2.4,-1]);}
    [a,b].forEach(w=>{w.updateMatrixWorld(true);const p=w.userData.front.clone().applyMatrix4(w.matrixWorld);F.push([p.x,p.y,p.z+.3]);});
    const oil=new THREE.Mesh(new THREE.CircleGeometry(1.6,24),new THREE.MeshStandardMaterial({color:0x050505,roughness:.05,metalness:.6}));oil.rotation.x=-Math.PI/2;oil.position.set(-.2,.02,2);oil.scale.x=1.6;g.add(oil);
    const sk=new THREE.MeshBasicMaterial({color:0x0a0a0a,transparent:true,opacity:.6,depthWrite:false});[[-7,2.2,.08],[-7,3,.12]].forEach(([x,z,r])=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(5,.25),sk);m.rotation.set(-Math.PI/2,0,r);m.position.set(x,.015,z);g.add(m);});
    [-5.5,-4.6,4.6,5.5].forEach((x,i)=>cone3(g,x,3.4+(i%2)*.3));warnTri(g,-6.6,3.6);
    P.push([-4.6,0,3.2],[-.6,0,3.4],[3.6,0,3],[1,0,3.6],[-3,0,3.8],[4.6,0,3.8]);mode.push('sit','lie','sit','lie','sit','lie');}
  else if(scn==='hurt'){const pipe=SM(0xb8bec6,{metalness:.8,roughness:.35}),plank=SM(0xb08040,{roughness:.9});
    const pp=(x,y,z,l,rx,rz)=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(.07,.07,l,8),pipe);m.position.set(x,y,z);m.rotation.set(rx||0,0,rz||0);m.castShadow=true;g.add(m);};
    for(let i=0;i<4;i++)pp(-6+i*2.4,3,-1.2,6);pp(-2.4,6,-1.2,7.4,0,Math.PI/2);pp(-2.4,3,-1.2,7.4,0,Math.PI/2);pp(1.2,2.2,0,5,0,.9);pp(2.6,1.2,.6,4,.3,1.35);
    [[-2.4,6.1,-1.2,0,0],[-2.4,3.1,-1.2,0,0],[1.4,.3,1.4,.1,.15],[3.4,.6,.8,.2,-.5]].forEach(([x,y,z,rx,rz])=>{const p=new THREE.Mesh(new THREE.BoxGeometry(4,.12,.7),plank);p.position.set(x,y,z);p.rotation.set(rx,rz,rz*.4);p.castShadow=true;g.add(p);});
    for(let i=0;i<5;i++){const b=new THREE.Mesh(new THREE.BoxGeometry(.6,.6,.6),SM(0xc8a060));b.position.set(4+Math.random()*2,.3+(i>2?.6:0),-.5+Math.random());b.rotation.y=Math.random();b.castShadow=true;g.add(b);}
    stretcher(g,-4.6,2.6,.2);stretcher(g,5.4,3,-.25);medkit(g,-1.6,3.6);medkit(g,2.2,3.8);
    F.push([2,1,.8],[-1,1,.2],[4.6,1,0]);
    P.push([-2.8,0,2.6],[.6,0,2.8],[3.2,0,2.4],[-4.6,.85,2.6],[5.4,.85,3],[-.9,0,3.8]);mode.push('lie','lie','sit','lie','lie','sit');}
  else {const ends=treeBig(g);g.position.set(0,0,0);ends.sort((a,b)=>b.y-a.y);ends.forEach(e=>P.push([e.x*.9,e.y-.35,Math.max(e.z,0)+1.7]));mode.push('cat');
    const fence=SM(0xf0ead8);for(let i=-10;i<=10;i++){const p=new THREE.Mesh(new THREE.BoxGeometry(.18,1.3,.1),fence);p.position.set(i*.8,.65,-2.6);g.add(p);}const rail=new THREE.Mesh(new THREE.BoxGeometry(17,.12,.08),fence);rail.position.set(0,1,-2.55);g.add(rail);
    const grass=new THREE.Mesh(new THREE.CircleGeometry(5,30),SM(0x2f6a2a,{roughness:1}));grass.rotation.x=-Math.PI/2;grass.position.set(0,.03,.4);grass.receiveShadow=true;g.add(grass);}
  return {g,F,P,mode};}
 function hurtPose(f,mode,t,ph){const u=f.userData;
  if(mode==='lie'){u.L.p.rotation.x=0;u.R.p.rotation.x=.15;u.A.p.rotation.set(0,0,.5);u.B.p.rotation.set(-.4+Math.sin(t*1.5+ph)*.35,0,-.3);u.torso.scale.y=1+Math.sin(t*2+ph)*.015;}
  else {u.L.p.rotation.x=-1.45;u.R.p.rotation.x=-1.35;u.L.kn.rotation.x=1.2;u.R.kn.rotation.x=.9;u.A.p.rotation.set(-2.5,0,.35);u.A.el.rotation.x=-1.4;u.B.p.rotation.set(-.5+Math.sin(t*3+ph)*.25,0,-.2);u.head.rotation.z=Math.sin(t*1.2+ph)*.12;}}
 function setupScene(ch){const d=CH[ch]||CH[1];const s=new THREE.Scene();S3D.scene=s;S3D.ch=ch;S3D.G=G;s.background=skyTex(d.sky[0],d.sky[1]);s.environment=ENV;s.environmentIntensity=.35;s.fog=new THREE.Fog(d.fog,30,75);
  s.add(new THREE.HemisphereLight(d.amb,0x202020,d.ambI));const k=new THREE.DirectionalLight(d.key,d.keyI);k.position.set(...d.keyP).multiplyScalar(3);k.castShadow=true;k.shadow.mapSize.set(1024,1024);Object.assign(k.shadow.camera,{left:-22,right:22,top:30,bottom:-6,near:1,far:120});k.shadow.bias=-.0008;s.add(k);S3D.key=k;
  const fl=new THREE.PointLight(0xff7a2a,0,40,1.4);s.add(fl);S3D.fireL=fl;
  // street: wet asphalt + sidewalk + kerb
  const st=new THREE.Mesh(new THREE.PlaneGeometry(140,40),new THREE.MeshStandardMaterial({color:0x22252b,roughness:.28,metalness:.4,envMapIntensity:.6}));st.rotation.x=-Math.PI/2;st.position.z=12;st.receiveShadow=true;s.add(st);
  const sw=new THREE.Mesh(new THREE.BoxGeometry(140,.25,5),SM(0x6a6a70));sw.position.set(0,.12,4.5);sw.receiveShadow=true;s.add(sw);
  const lm=new THREE.MeshBasicMaterial({color:0xd8c060,toneMapped:false});for(let i=-8;i<=8;i++){const l=new THREE.Mesh(new THREE.PlaneGeometry(2,.18),lm);l.rotation.x=-Math.PI/2;l.position.set(i*5,.01,12);s.add(l);}
  const back=new THREE.Mesh(new THREE.PlaneGeometry(200,60),new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:0}));back.position.z=-40;s.add(back);
  // distant skyline silhouettes
  const sk=SM(new THREE.Color(d.fog).multiplyScalar(.6).getHex(),{roughness:1});for(let i=0;i<22;i++){const w=3+Math.random()*5,h=ch===4?0:4+Math.random()*(ch===5?26:12);if(!h)continue;const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,3),sk);m.position.set(-55+i*5+Math.random()*2,h/2,-18-Math.random()*8);s.add(m);}
  if(ch===4){const tm=SM(0x10241a);for(let i=0;i<40;i++){const sz=3+Math.random()*4;const c=new THREE.Mesh(new THREE.ConeGeometry(sz*.5,sz*2.2,7),tm);c.position.set(-50+i*2.6,sz*1.1,-14-Math.random()*10);s.add(c);}}
  const scn=S3D.scn=(G&&G.scn)||'fire';S3D.flameK=1;S3D.spray=true;S3D.pmode=null;S3D.cats=null;
  if(scn==='fire'){const b=buildBuilding(d.build);b.g.position.z=-1;s.add(b.g);S3D.F=b.F.map(p=>new THREE.Vector3(p[0],p[1],p[2]-1));S3D.P=b.P.map(p=>new THREE.Vector3(p[0],p[1],p[2]-1));}
  else{const b=buildBuilding(d.build);b.g.position.set(0,0,-14);b.g.scale.setScalar(.85);s.add(b.g);const inc=buildIncident(scn,ch);s.add(inc.g);S3D.F=inc.F.map(p=>new THREE.Vector3(...p));S3D.P=inc.P.map(p=>new THREE.Vector3(...p));S3D.pmode=inc.mode;
   if(scn==='crash'){S3D.flameK=.42;}else{S3D.flameK=0;S3D.spray=false;}
   const amb=new THREE.PointLight(scn==='cat'?0xfff0d0:0xffffff,scn==='cat'?30:12,30,1.2);amb.position.set(0,8,8);s.add(amb);}
  // flames (billboards) + glows
  S3D.flames=S3D.F.map((p,i)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(1,1),flameMat(i*1.7+ch));m.geometry.translate(0,.5,0);m.position.copy(p);const sc=(ch===5?2.4:3.2)*(.8+((i*37)%10)/25)*(S3D.flameK||1);m.scale.set(sc*.8,sc*1.35,1);m.userData.sc=sc;s.add(m);
   const gl=new THREE.Sprite(glowMat(0xff6a1a,.6));gl.position.copy(p).add(new THREE.Vector3(0,sc*.4,.2));gl.scale.setScalar(sc*2.6);s.add(gl);m.userData.gl=gl;return m;});
  // smoke & embers pools
  S3D.smoke=[];for(let i=0;i<26;i++){const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:SMOKE,color:0x2a2628,transparent:true,depthWrite:false,opacity:0}));sp.userData={life:99};s.add(sp);S3D.smoke.push(sp);}
  S3D.steam=[];for(let i=0;i<16;i++){const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:SMOKE,color:0xe8eef4,transparent:true,depthWrite:false,opacity:0}));sp.userData={life:99};s.add(sp);S3D.steam.push(sp);}
  const EN=90;const eg=new THREE.BufferGeometry();eg.setAttribute('position',new THREE.BufferAttribute(new Float32Array(EN*3),3));S3D.emb=new THREE.Points(eg,new THREE.PointsMaterial({map:SOFT,color:0xffa040,size:.28,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));S3D.emb.frustumCulled=false;S3D.embD=Array.from({length:EN},()=>({life:9,v:new THREE.Vector3()}));s.add(S3D.emb);
  const WN=420;const wg=new THREE.BufferGeometry();wg.setAttribute('position',new THREE.BufferAttribute(new Float32Array(WN*3),3));S3D.wat=new THREE.Points(wg,new THREE.PointsMaterial({map:SOFT,color:0xb8e0ff,size:.32,transparent:true,opacity:.85,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));S3D.wat.frustumCulled=false;S3D.watD=Array.from({length:WN},()=>({life:9,v:new THREE.Vector3(),p:new THREE.Vector3()}));S3D.wi=0;s.add(S3D.wat);
  // firefighters (articulated), people waiting at windows/roof
  S3D.ff=[0,1,2,3].map(i=>{const f=figure({ff:1,coat:0x3a3226,pants:0x3a3226,helmet:i%2?0xffc21a:0xd8261c});f.scale.setScalar(1.15);f.visible=false;s.add(f);return f;});
  const shirts=[0x4aa8ff,0xff7ab0,0x7ad65a,0xffb000,0xb38aff,0x5ad6d6];S3D.ppl=S3D.P.concat(S3D.P).map((p,i)=>{const f=figure({coat:shirts[i%6],pants:0x2a3a5a,hair:[0x2a1a10,0x6a3a1a,0x101010][i%3]});f.scale.setScalar(1.1);f.position.copy(p);f.position.x+=i>=S3D.P.length?.7:0;f.visible=false;s.add(f);return f;});
  if(S3D.scn==='cat'){S3D.ppl.forEach(f=>s.remove(f));const cc=[[0xf08a2a,0xc0601a],[0x9aa0a8,0x6a7078],[0x2a2a2e,0],[0xf2e2c8,0xd8b890],[0xf08a2a,0xc0601a],[0x9aa0a8,0]];
   S3D.ppl=S3D.P.slice(0,6).map((p,i)=>{const c=catModel(cc[i][0],cc[i][1]||0);c.scale.setScalar(i===0?2.0:1.6);c.position.copy(p);c.rotation.y=(i%2?-.3:.3);c.visible=false;s.add(c);return c;});
   S3D.cats=cc.map((k,i)=>{const c=catModel(k[0],k[1]||0);c.scale.setScalar(1.3);c.position.set(-6.5+i*1.2,.25,5.6);c.visible=false;s.add(c);return c;});
   S3D.dog=dogModel();S3D.dog.position.set(5.6,.25,5.2);S3D.dog.rotation.y=-.6;s.add(S3D.dog);
   S3D.kid=figure({coat:0x4aa8ff,pants:0x2a3a5a,hair:0x2a1a10});S3D.kid.scale.setScalar(.8);S3D.kid.position.set(2.4,.03,2.4);S3D.kid.rotation.y=-.3;s.add(S3D.kid);}
  else if(S3D.pmode){S3D.ppl.forEach((f,i)=>{const p=S3D.P[i%S3D.P.length];const m=S3D.pmode[i%S3D.pmode.length];f.userData.mode=m;f.position.copy(p);if(i>=S3D.P.length){f.position.x+=.9;f.position.z+=.5;}
    if(m==='lie'){f.rotation.set(-Math.PI/2,0,(i%2?.4:-.3));f.position.y+=.2;}else{f.position.y+=-.35+(p.y>0?0:.25);f.rotation.y=(i%2?.5:-.4);}});}
  S3D.crowd=Array.from({length:6},(_,i)=>{const f=figure({coat:shirts[i],pants:0x2a3a5a,hair:[0x2a1a10,0x6a3a1a,0x101010][i%3]});f.position.set(-7+i*2.8,.25,4.6);f.userData.y0=.25;f.rotation.y=Math.PI*0;f.visible=false;s.add(f);return f;});
  S3D.veh=new Map();S3D.cam=new THREE.PerspectiveCamera(42,1,.5,200);S3D.t=0;
  S3D.camCfg={4:{p:[0,3,18],l:[0,3.8,0]},5:{p:[0,3,24],l:[0,11,0]},3:{p:[0,3.4,21],l:[0,4.6,0]},2:{p:[0,3,17],l:[0,4.4,0]},1:{p:[0,3.5,19.5],l:[0,6.4,0]}}[ch];
  if(S3D.scn==='crash'||S3D.scn==='hurt')S3D.camCfg={p:[0,4.2,15.5],l:[0,1.9,0]};else if(S3D.scn==='cat')S3D.camCfg={p:[0,3.4,18.5],l:[0,6.2,0]};}
 const _v=new THREE.Vector3();
 function drawScene3D(){const Sr=G.S;if(S3D.G!==G||S3D.scn!==(G.scn||'fire'))setupScene(G.ch);const s=S3D.scene,t=G.t,dt=Math.min(.05,DT||.016);S3D.t+=dt;const H=hi();
  const fr=G.state==='win'?0:cl(G.fire/G.fireMax+(G.flare||0)*.15,0,1.3);
  // camera: subtle handheld motion, slight push-in on win
  const cc=S3D.camCfg,cam=S3D.cam;cam.aspect=Sr.w/Sr.h;const wz=G.state==='win'?Math.min(1,G.winT/3):0;
  cam.position.set(cc.p[0]+Math.sin(t*.23)*.8,cc.p[1]+Math.sin(t*.31)*.25,cc.p[2]-wz*3+Math.sin(t*.17)*.4);cam.lookAt(cc.l[0]+Math.sin(t*.19)*.3,cc.l[1]+wz*.8,cc.l[2]);
  if(CAM.sh>0)cam.position.x+=(Math.random()-.5)*CAM.sh*.6;cam.updateProjectionMatrix();cam.updateMatrixWorld();
  S3D.key.castShadow=H;
  // storm lightning on chapter 5
  if(G.ch===5){if(Math.random()<.004)S3D.flash=1;S3D.flash=Math.max(0,(S3D.flash||0)-dt*3);S3D.key.intensity=CH[5].keyI+S3D.flash*6;}
  // flames: number active scales with fire level
  const nAct=S3D.flameK?Math.ceil(S3D.flames.length*Math.min(1,fr)):0;const fpts=[];
  S3D.flames.forEach((m,i)=>{const on=i<nAct;const a=m.userData.a=lp(m.userData.a||0,on?1:0,dt*2.5);m.visible=a>.02;m.userData.gl.visible=m.visible;if(!m.visible)return;
   m.material.uniforms.t.value=S3D.t+i;m.material.uniforms.amp.value=a*(.9+.1*Math.sin(S3D.t*13+i));m.quaternion.copy(cam.quaternion);const sc=m.userData.sc*(.85+.15*a)*(1+.06*Math.sin(S3D.t*7+i*2));m.scale.set(sc*.8,sc*1.35,1);
   m.userData.gl.material.opacity=.45*a*(.85+.15*Math.sin(S3D.t*11+i));if(on)fpts.push(m.position);});
  S3D.fireL.intensity=fr*(H?110:80)*(.85+.15*Math.sin(S3D.t*9)+.06*Math.sin(S3D.t*23));if(fpts.length){_v.set(0,0,0);fpts.forEach(p=>_v.add(p));_v.divideScalar(fpts.length);S3D.fireL.position.copy(_v).add(new THREE.Vector3(0,1,4));}
  // flame screen positions for the 2D water/steam particle code
  G.flames=fpts.map(p=>{_v.copy(p).add(new THREE.Vector3(0,.8,0)).project(cam);return[Sr.x+(_v.x+1)/2*Sr.w,Sr.y+(1-_v.y)/2*Sr.h];});
  // smoke
  S3D.smoke.forEach((sp,i)=>{const u=sp.userData;u.life+=dt;if(u.life>u.max){const sp0=fpts.length?fpts:(S3D.scn==='hurt'?S3D.F:[]);if(sp0.length&&Math.random()<.5*fr+.05){const p=sp0[i%sp0.length];u.life=0;u.max=3+Math.random()*2.5;sp.position.copy(p).add(new THREE.Vector3((Math.random()-.5),2,-.3));u.vx=(Math.random()-.2)*.8;u.s0=2+Math.random()*2;}else{sp.material.opacity=0;return;}}
   const k=u.life/u.max;sp.position.y+=dt*(2.2-k);sp.position.x+=u.vx*dt;sp.scale.setScalar(u.s0*(1+k*2.6));sp.material.opacity=Math.sin(k*Math.PI)*.55*Math.min(1,fr+.2);sp.material.rotation+=dt*.2;});
  const stm=Math.max(G.steam,G.state==='win'?1-Math.min(1,G.winT/3):0);
  S3D.steam.forEach((sp,i)=>{const u=sp.userData;u.life+=dt;if(u.life>u.max){if(stm>.1&&S3D.F.length&&Math.random()<stm*.4){const p=S3D.F[(i*5)%S3D.F.length];u.life=0;u.max=2+Math.random();sp.position.copy(p).add(new THREE.Vector3(0,.5,.5));u.s0=1.5+Math.random();}else{sp.material.opacity=0;return;}}
   const k=u.life/u.max;sp.position.y+=dt*2.6;sp.scale.setScalar(u.s0*(1+k*3));sp.material.opacity=Math.sin(k*Math.PI)*.5;});
  // embers
  {const a=S3D.emb.geometry.attributes.position;S3D.embD.forEach((e,i)=>{e.life+=dt;if(e.life>e.max){if(fpts.length&&Math.random()<fr*.25){const p=fpts[Math.floor(Math.random()*fpts.length)];e.life=0;e.max=1.5+Math.random()*2;a.setXYZ(i,p.x+(Math.random()-.5),p.y+1,p.z+.3);e.v.set((Math.random()-.5)*1.5,2+Math.random()*2.5,(Math.random()-.5)*.5);}else{a.setXYZ(i,0,-99,0);return;}}
   a.setXYZ(i,a.getX(i)+e.v.x*dt+Math.sin(S3D.t*3+i)*dt*.6,a.getY(i)+e.v.y*dt,a.getZ(i)+e.v.z*dt);});a.needsUpdate=true;}
  // arriving fleet: real 3D vehicles driving in along the street
  const span=(()=>{const dz=cam.position.z-9;return 2*Math.tan(cam.fov*Math.PI/360)*dz*cam.aspect;})();const seen=new Set();let sprayers=[];
  G.sv.forEach((v,i)=>{const key=v.id+'_'+v.type;seen.add(key);let o=S3D.veh.get(key);if(!o){o=instance(model(v.type,tierOf3(v.type)),null);o.scale.setScalar(4.4);s.add(o);S3D.veh.set(key,o);}
   const X=(v.x/Sr.w-.5)*span*.92;const z=8.6+(i%2)*1.6;o.position.set(X,0,z);const drv=v.state==='drive';o.rotation.y=v.dir>0?0:Math.PI;o.userData.yaw.rotation.z=drv?-.02:0;o.position.y=drv?Math.abs(Math.sin(t*18+i))*.04:0;siren(o,true,t,i);
   const lad=o.userData.lad;if(lad){const u=cl((v.work||0)/1.6,0,1);lad.rotation.z=-.03+(v.state==='work'?u*.75:0);}
   if(v.state==='work'&&WATER[v.type]&&G.state!=='win'&&S3D.spray)sprayers.push({x:X,z,i});});
  for(const [k,o] of S3D.veh)if(!seen.has(k)){s.remove(o);S3D.veh.delete(k);}
  // firefighters next to working engines spray hoses (3D water particles)
  const W=S3D.watD,wa=S3D.wat.geometry.attributes.position;
  S3D.ff.forEach((f,i)=>{const sp=sprayers[i];f.visible=!!sp||(G.state==='win'&&i<sprayers.length+2&&G.sv.length>i);if(!f.visible)return;
   const tgt=fpts.length?fpts[i%fpts.length]:S3D.F[i%S3D.F.length];const x=sp?sp.x+(i%2?2.4:-2.4):(-3+i*3);f.position.set(x,.25,5.2-i*.3);
   if(sp&&tgt&&fr>0){f.lookAt(tgt.x,f.position.y,tgt.z);pose(f,'spray',t,i);
    const nz=f.userData.noz;nz.getWorldPosition(_v);const tg=tgt.clone().add(new THREE.Vector3(Math.sin(t*2+i)*.6,.6,0));const T=.9;
    for(let q=0;q<(H?6:3);q++){const d=W[S3D.wi=(S3D.wi+1)%W.length];d.life=0;d.max=T*(.9+Math.random()*.25);d.p.copy(_v);d.v.set((tg.x-_v.x)/T+(Math.random()-.5)*.6,(tg.y-_v.y)/T+4.9*T+(Math.random()-.5)*.6,(tg.z-_v.z)/T+(Math.random()-.5)*.4);}}
   else pose(f,G.state==='win'?'cheer':'idle',t,i);});
  W.forEach((d,i)=>{if(d.life>d.max){wa.setXYZ(i,0,-99,0);return;}d.life+=dt;d.v.y-=9.8*dt;d.p.addScaledVector(d.v,dt);wa.setXYZ(i,d.p.x,d.p.y,d.p.z);});wa.needsUpdate=true;
  // people: waiting at windows (waving), rescued crowd cheers on the sidewalk
  const waiting=Math.max(0,G.people-G.rescued);S3D.ppl.forEach((f,i)=>{f.visible=i<Math.min(waiting,S3D.ppl.length)&&G.state!=='win';if(!f.visible)return;
   if(S3D.scn==='cat'){const u=f.userData;u.hd.rotation.z=Math.sin(t*2+i)*.18;u.hd.rotation.x=-.25+Math.sin(t*1.3+i)*.08;u.tg.rotation.y=Math.sin(t*3+i)*.4;f.scale.y=f.scale.x*(1+Math.sin(t*4+i)*.03);}
   else if(f.userData.mode)hurtPose(f,f.userData.mode,t,i);else pose(f,'wave',t,i);});
  if(S3D.cats){const n=G.state==='win'?G.people:G.rescued;S3D.cats.forEach((c,i)=>{c.visible=i<n;if(c.visible){c.userData.tg.rotation.y=Math.sin(t*4+i)*.5;c.position.y=.25+(G.state==='win'?Math.abs(Math.sin(t*5+i))*.25:0);}});
   S3D.dog.userData.tail.rotation.z=Math.sin(t*14)*.5;S3D.dog.position.y=.25+(G.state==='win'?Math.abs(Math.sin(t*6))*.2:0);pose(S3D.kid,G.state==='win'?'cheer':'wave',t,0);if(G.state!=='win')S3D.kid.userData.B.p.rotation.z=-2.9;}
  S3D.crowd.forEach((f,i)=>{f.visible=i<(G.state==='win'?G.people:G.rescued);if(f.visible)pose(f,G.state==='win'?'cheer':'wave',t,i*1.3);});
  const pr=prRatio();const pw=Math.round(Sr.w*pr),ph=Math.round(Sr.h*pr);prep(pw,ph);R.shadowMap.autoUpdate=true;R.render(s,cam);R.shadowMap.autoUpdate=false;blit(cx,pw,ph,Sr.x,Sr.y,Sr.w,Sr.h);}

 // ====================== GARAGE / TURNTABLE ======================
 const T3={scene:new THREE.Scene(),cam:new THREE.PerspectiveCamera(26,1,.1,50),objs:new Map()};
 {const s=T3.scene;s.environment=ENV;s.environmentIntensity=1;s.add(new THREE.HemisphereLight(0xe8eeff,0x303038,.9));const k=new THREE.DirectionalLight(0xfff4e8,3);k.position.set(-2,4,3);k.castShadow=true;k.shadow.mapSize.set(1024,1024);Object.assign(k.shadow.camera,{left:-1,right:1,top:1,bottom:-1,near:.5,far:12});k.shadow.radius=5;s.add(k);
  const rim=new THREE.DirectionalLight(0x9fc0ff,1.6);rim.position.set(3,2,-3);s.add(rim);
  const plat=new THREE.Mesh(new THREE.CylinderGeometry(.62,.66,.04,64),new THREE.MeshStandardMaterial({color:0x4a4e5c,metalness:.85,roughness:.22}));plat.position.y=-.02;plat.receiveShadow=true;s.add(plat);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(.64,.008,8,96),new THREE.MeshBasicMaterial({color:0xffd27a,toneMapped:false}));ring.rotation.x=Math.PI/2;ring.position.y=.002;s.add(ring);T3.plat=plat;T3.ring=ring;}
 function drawTT3(c,type,tier,x,y,s,ang,o){o=o||{};if(!R3.ok||R3.lost)return null;const key=type+tier+'|'+skinOf(type);let m=T3.objs.get(key);
  if(!m){m=instance(model(type,tier),[1,1]);T3.objs.set(key,m);}T3.scene.children.forEach(ch=>{if(ch.userData&&ch.userData.f!==undefined&&ch!==m)ch.visible=false;});if(!m.parent)T3.scene.add(m);m.visible=true;
  m.rotation.y=-ang-Math.PI/2;siren(m,!!o.siren,o.t||TT,0);const plat=o.plat!==false&&s>90;T3.plat.visible=T3.ring.visible=plat;if(plat)T3.plat.rotation.y=m.rotation.y;
  const cam=T3.cam;const d=2.45;const pitch=.42;cam.aspect=1.4;cam.position.set(0,Math.sin(pitch)*d+.12,Math.cos(pitch)*d);cam.lookAt(0,.16,0);cam.updateProjectionMatrix();
  const pr=Math.min(DPR,2)*(c.canvas&&c.canvas.width>c.canvas.clientWidth*1.2?1:1);const vw=s*1.75,vh=vw/1.4;const pw=Math.round(vw*pr),ph=Math.round(vh*pr);prep(pw,ph);R.shadowMap.autoUpdate=true;R.render(T3.scene,cam);R.shadowMap.autoUpdate=false;
  c.save();if(o.filter)c.filter=o.filter;blit(c,pw,ph,x-vw/2,y-vh*.66,vw,vh);c.restore();return true;}

 // ====================== hook into the 2D game ======================
 const _rb=window.renderBoard,_rs=window.renderScene,_tt=window.drawTT;
 const live=()=>R3.ok&&!R3.lost&&!R3.off;
 let fpsT=0,fpsN=0,slow=0;
 window.renderBoard=function(){if(!live())return _rb();try{drawBoard3D();
   if(G.hint&&window.drawHint)window.drawHint();if(G.i===0&&!G.firstTap&&G.state==='play')drawHand();drawImpacts();R3.frames++;}catch(e){LOG3('board3d error → 2D',e&&e.stack);R3.off=true;_rb();}};
 window.renderScene=function(){if(!live())return _rs();try{drawScene3D();}catch(e){LOG3('scene3d error → 2D',e&&e.stack);R3.off=true;_rs();}};
 R3.tt=drawTT3;
 R3.shot=function(w,h,back,fov){drawScene3D();const cam=S3D.cam,a0=cam.aspect,f0=cam.fov;const d=new THREE.Vector3();cam.getWorldDirection(d);cam.position.addScaledVector(d,-(back||0));cam.aspect=w/h;if(fov)cam.fov=fov;cam.updateProjectionMatrix();cam.updateMatrixWorld();R.setSize(w,h,false);R.setViewport(0,0,w,h);R.setScissorTest(false);R.setClearColor(0x000000,1);R.clear(true,true,true);R.render(S3D.scene,cam);const u=R.domElement.toDataURL('image/jpeg',.88);cam.aspect=a0;cam.fov=f0;cam.updateProjectionMatrix();return u;};
 window.drawTT=function(c,type,tier,x,y,s,ang,o){if(live()&&'EKTA'.includes(type)){try{if(drawTT3(c,type,tier,x,y,s,ang,o))return true;}catch(e){LOG3('tt3d error',e&&e.message);}}return _tt(c,type,tier,x,y,s,ang,o);};
 // adaptive resolution: drop pixel ratio if frames are slow
 const _u=window.update;window.update=function(dt){_u(dt);fpsT+=dt;fpsN++;if(fpsT>2){const f=fpsN/fpsT;R3.fps=f;fpsT=0;fpsN=0;if(live()&&MODE==='game'){if(f<45){slow++;if(slow>=2&&(R3.prCap||2)>1){R3.prCap=Math.max(1,(R3.prCap||2)-.5);slow=0;LOG3('adaptive pr',R3.prCap);}}else slow=0;}}};
 R3.flags={setup:()=>{}};LOG3('3D renderer on',R.capabilities.isWebGL2?'webgl2':'webgl1');}
function LOG3(...a){try{console.log('[R3]',...a);}catch(e){}}
try{init();}catch(e){LOG3('init failed → 2D',e&&e.stack);window.R3.ok=false;}
