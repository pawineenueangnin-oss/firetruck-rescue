// Firetruck Rescue v9 — real-time 3D menu / level-complete / rank-up screens (three.js).
// Uses the shared offscreen renderer (prep+blit), so no extra WebGL context. Everything is built in code.
import * as THREE from 'three';
export function makeUI3(X){
const {R,prep,blit,ENV,model,instance,siren,figure,pose,flameMat,glowMat,SOFT,SMOKE,hi,skyTex,buildBuilding,CH,SM,tierOf3}=X;
const TAU=Math.PI*2,cl=(v,a,b)=>v<a?a:v>b?b:v,rnd=Math.random;
const eOut=u=>1-Math.pow(1-u,3),eBack=u=>{const c=1.70158;return 1+(c+1)*Math.pow(u-1,3)+c*Math.pow(u-1,2);};
const U={off:false,low:false};let fpsA=1/60,slowT=0;
const prr=()=>(hi()&&!U.low)?Math.min(window.devicePixelRatio||1,1.5,(window.R3&&R3.prCap)||2):1;
function perf(dt){fpsA=fpsA*.95+dt*.05;if(fpsA>1/38){slowT+=dt;if(slowT>2.5&&!U.low){U.low=true;console.log('[R3] ui3 low-res');}}else slowT=0;}
function disp(o){if(!o)return;if(o.userData&&o.userData.keep){if(o.parent)o.parent.remove(o);return;}o.children.slice().forEach(disp);if(o.geometry)o.geometry.dispose();const m=o.material;
 if(m)(Array.isArray(m)?m:[m]).forEach(mm=>{for(const k in mm){const v=mm[k];if(v&&v.isTexture&&!(v.userData&&v.userData.keep))v.dispose();}mm.dispose();});}
function dispScene(s){if(!s)return;if(s.background&&s.background.isTexture)s.background.dispose();s.children.slice().forEach(disp);s.clear();}
function render(c,w,h,passes,prFix){const pr=prFix||prr();const pw=Math.max(8,Math.round(w*pr)),ph=Math.max(8,Math.round(h*pr));prep(pw,ph);const ac=R.autoClear,tm=R.toneMapping,te=R.toneMappingExposure;R.autoClear=false;R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=1.12;
 passes.forEach((p,i)=>{if(i)R.clearDepth();R.render(p[0],p[1]);});R.autoClear=ac;R.toneMapping=tm;R.toneMappingExposure=te;blit(c,pw,ph,0,0,w,h);}
function cvTex(w,h,f,keep){const c=document.createElement('canvas');c.width=w;c.height=h;f(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;if(keep)t.userData.keep=1;return t;}
const RAYS=cvTex(512,512,g=>{g.translate(256,256);for(let i=0;i<28;i++){g.rotate(TAU/28);const gr=g.createLinearGradient(0,0,256,0);gr.addColorStop(0,'rgba(255,255,255,.9)');gr.addColorStop(.6,'rgba(255,255,255,.25)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.beginPath();g.moveTo(0,0);const a=i%2?.04:.085;g.lineTo(256,-256*a);g.lineTo(256,256*a);g.fill();}},1);
const SHAD=cvTex(128,128,g=>{const gr=g.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'rgba(0,0,0,.9)');gr.addColorStop(.5,'rgba(0,0,0,.45)');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(0,0,128,128);},1);
const FLARE=cvTex(256,32,g=>{const gr=g.createLinearGradient(0,0,256,0);gr.addColorStop(0,'rgba(255,255,255,0)');gr.addColorStop(.5,'rgba(255,255,255,1)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,256,32);const v=g.createLinearGradient(0,0,0,32);v.addColorStop(0,'rgba(0,0,0,1)');v.addColorStop(.5,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,1)');g.globalCompositeOperation='destination-out';g.fillStyle=v;g.fillRect(0,0,256,32);},1);
const addM=(map,col,op)=>new THREE.SpriteMaterial({map,color:col,transparent:true,opacity:op,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false});
const shadowM=op=>new THREE.MeshBasicMaterial({map:SHAD,transparent:true,opacity:op,depthWrite:false});
function blob(sx,sz,op){const m=new THREE.Mesh(new THREE.PlaneGeometry(1,1),shadowM(op));m.rotation.x=-Math.PI/2;m.scale.set(sx,sz,1);m.position.y=.02;return m;}
// soft volumetric light cone: base at origin (wide), tip at +y*len (narrow)
const BEAM_V=`varying float vY;varying vec3 vN,vV;void main(){vY=uv.y;vec4 mv=modelViewMatrix*vec4(position,1.);vV=normalize(-mv.xyz);vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*mv;}`;
const BEAM_F=`uniform vec3 col;uniform float op;varying float vY;varying vec3 vN,vV;void main(){float f=abs(dot(normalize(vN),normalize(vV)));float a=pow(f,2.2)*op*pow(vY,1.6);gl_FragColor=vec4(col*a,a);}`;
function beam(col,op,r0,r1){const ge=new THREE.CylinderGeometry(r0,r1,1,28,1,true);ge.translate(0,.5,0);const m=new THREE.Mesh(ge,new THREE.ShaderMaterial({uniforms:{col:{value:new THREE.Color(col)},op:{value:op}},vertexShader:BEAM_V,fragmentShader:BEAM_F,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide}));m.renderOrder=5;return m;}
const _a=new THREE.Vector3(),_b=new THREE.Vector3(),UP=new THREE.Vector3(0,1,0);
function aim(m,far,src){m.position.copy(far);_a.copy(src).sub(far);m.scale.set(1,_a.length(),1);m.quaternion.setFromUnitVectors(UP,_a.normalize());}
function camFit(cam,w,h,hfDeg,ycFrac){cam.aspect=w/h;const hf=hfDeg*Math.PI/180;cam.fov=cl(2*Math.atan(Math.tan(hf/2)/cam.aspect)*180/Math.PI,30,100);cam.setViewOffset(w,h,0,h/2-h*ycFrac,w,h);cam.updateProjectionMatrix();}
function pts(n,col,size,map){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(new Float32Array(n*3),3));const p=new THREE.Points(g,new THREE.PointsMaterial({map:map||SOFT,color:col,size,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));p.frustumCulled=false;return p;}
function starShape(r,ri){const s=new THREE.Shape();for(let k=0;k<10;k++){const rr=k%2?r*ri:r,a=Math.PI/2+k*Math.PI/5;const x=Math.cos(a)*rr,y=Math.sin(a)*rr;k?s.lineTo(x,y):s.moveTo(x,y);}s.closePath();return s;}
function hexShape(r){const s=new THREE.Shape();for(let k=0;k<6;k++){const a=Math.PI/2+k*TAU/6;const x=Math.cos(a)*r,y=Math.sin(a)*r;k?s.lineTo(x,y):s.moveTo(x,y);}s.closePath();return s;}
function chevShape(w,hh,th){const s=new THREE.Shape();s.moveTo(-w,0);s.lineTo(0,hh);s.lineTo(w,0);s.lineTo(w,-th);s.lineTo(0,hh-th);s.lineTo(-w,-th);s.closePath();return s;}
function ex(sh,d,b,seg){const ge=new THREE.ExtrudeGeometry(sh,{depth:d,bevelEnabled:true,bevelThickness:b,bevelSize:b,bevelSegments:seg||3,curveSegments:10});ge.translate(0,0,-d/2);ge.computeVertexNormals();return ge;}
const metal=(c,r,o)=>new THREE.MeshPhysicalMaterial(Object.assign({color:c,metalness:1,roughness:r,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.4},o||{}));
function smokeSys(s,n,col){const a=[];for(let i=0;i<n;i++){const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:SMOKE,color:col,transparent:true,depthWrite:false,opacity:0}));sp.userData={life:1+rnd()*9,max:1};s.add(sp);a.push(sp);}return a;}
function smokeStep(a,src,dt,o){a.forEach(sp=>{const u=sp.userData;u.life+=dt/u.max;if(u.life>=1){const p=src[(rnd()*src.length)|0];u.life=0;u.max=o.life*(0.7+rnd()*.6);sp.position.set(p.x+(rnd()-.5)*o.sp,p.y,p.z);u.vx=o.wind+(rnd()-.5)*.6;u.vy=o.rise*(0.7+rnd()*.6);u.s0=o.s0*(0.7+rnd()*.6);}
 sp.position.x+=u.vx*dt;sp.position.y+=u.vy*dt;const s=u.s0*(1+u.life*o.grow);sp.scale.set(s,s,1);sp.material.opacity=o.op*Math.sin(Math.min(1,u.life)*Math.PI);sp.material.rotation+=dt*.2;});}
function emberSys(n,col,size){const p=pts(n,col,size);p.userData.d=Array.from({length:n},()=>({life:1+rnd(),v:new THREE.Vector3()}));return p;}
function emberStep(p,src,dt,o){const a=p.geometry.attributes.position;p.userData.d.forEach((d,i)=>{d.life+=dt/(o.life);if(d.life>=1){const s=src[(rnd()*src.length)|0];d.life=rnd()*.2;a.setXYZ(i,s.x+(rnd()-.5)*o.sp,s.y,s.z);d.v.set(o.wind+(rnd()-.5)*1.5,o.rise*(0.6+rnd()*.8),(rnd()-.5)*.6);}
 a.setXYZ(i,a.getX(i)+(d.v.x+Math.sin(d.life*12+i)*.6)*dt,a.getY(i)+d.v.y*dt,a.getZ(i)+d.v.z*dt);});a.needsUpdate=true;}
function flame(s,p,sc,seed){const m=new THREE.Mesh(new THREE.PlaneGeometry(1,1),flameMat(seed));m.geometry.translate(0,.5,0);m.position.copy(p);m.scale.set(sc*.8,sc*1.35,1);m.userData.sc=sc;s.add(m);
 const gl=new THREE.Sprite(glowMat(0xff6a1a,.55));gl.position.copy(p).add(new THREE.Vector3(0,sc*.45,.3));gl.scale.setScalar(sc*2.8);s.add(gl);m.userData.gl=gl;return m;}
function flameStep(fl,cam,t){fl.forEach((m,i)=>{m.material.uniforms.t.value=t+i;m.material.uniforms.amp.value=.92+.08*Math.sin(t*13+i);m.quaternion.copy(cam.quaternion);const k=1+.07*Math.sin(t*7+i*2);m.scale.set(m.userData.sc*.8*k,m.userData.sc*1.35*k,1);m.userData.gl.material.opacity=.45+.15*Math.sin(t*9+i*3);});}
function winTex(){return cvTex(64,128,(g,w,h)=>{g.fillStyle='#0d0f15';g.fillRect(0,0,w,h);for(let y=4;y<h-4;y+=12)for(let x=4;x<w-4;x+=10){const r=rnd();g.fillStyle=r<.28?`rgba(255,${190+(rnd()*50)|0},${110+(rnd()*60)|0},${.6+rnd()*.4})`:r<.36?'rgba(140,180,255,.35)':'rgba(20,24,34,1)';g.fillRect(x,y,6,8);}});}

// ============ MAIN MENU ============
let TI=null;
function titleBuild(){const q=hi()&&!U.low;const s=new THREE.Scene();s.background=skyTex('#02040a','#6a2410');s.environment=ENV;s.environmentIntensity=.8;s.fog=new THREE.Fog(0x2a120c,26,95);
 s.add(new THREE.HemisphereLight(0x50608f,0x140808,.75));const moon=new THREE.DirectionalLight(0xa8bcff,1.3);moon.position.set(-8,14,12);s.add(moon);
 const rim=new THREE.DirectionalLight(0xff7a30,2.2);rim.position.set(5,7,-14);s.add(rim);const fireL=new THREE.PointLight(0xff5a18,90,90,1.05);fireL.position.set(-2,8,-22);s.add(fireL);
 const gm=new THREE.MeshStandardMaterial({color:0x07080b,roughness:.06,metalness:.9,transparent:true,opacity:q?.86:.95,envMapIntensity:.9});const gr=new THREE.Mesh(new THREE.PlaneGeometry(300,300),gm);gr.rotation.x=-Math.PI/2;gr.renderOrder=1;s.add(gr);
 const lm=new THREE.MeshBasicMaterial({color:0xb89a40,transparent:true,opacity:.5});for(let i=-6;i<=6;i++){const l=new THREE.Mesh(new THREE.PlaneGeometry(2.4,.16),lm);l.rotation.x=-Math.PI/2;l.position.set(i*5,.012,5.5);l.renderOrder=2;s.add(l);}
 // skyline with lit windows; some towers burning
 const wt=winTex();const F=[];const nB=q?26:18;for(let i=0;i<nB;i++){const w=4+rnd()*6,h=(i%7===3?26:8)+rnd()*22,d=6;const t=wt.clone();t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(Math.max(1,Math.round(w/4)),Math.max(1,Math.round(h/6)));t.needsUpdate=true;
  const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color:0x1a1d26,roughness:.8,emissive:0xffffff,emissiveMap:t,emissiveIntensity:.85,map:t}));const x=-62+i*(124/nB)+rnd()*2,z=-30-rnd()*22;m.position.set(x,h/2,z);s.add(m);
  if(i%5===2||i%7===3){const n=2+((rnd()*3)|0);for(let k=0;k<n;k++)F.push(new THREE.Vector3(x+(rnd()-.5)*w*.7,h*(k?(.45+rnd()*.5):1)-.2,z+d/2+.3));}}
 // a big blaze on a nearer block (right side)
 const bm=new THREE.Mesh(new THREE.BoxGeometry(9,16,7),new THREE.MeshStandardMaterial({color:0x1a1416,roughness:.9,emissive:0xffffff,emissiveMap:wt,emissiveIntensity:.5,map:wt}));bm.position.set(13,8,-17);s.add(bm);for(let k=0;k<(q?9:5);k++)F.push(new THREE.Vector3(9.5+rnd()*7,6+rnd()*10.5,-13.2));F.push(new THREE.Vector3(12,16,-15),new THREE.Vector3(15,16,-16));
 const fl=F.map((p,i)=>flame(s,p,(p.x>8&&p.z>-20?5:4)+rnd()*4,i*1.37));const bl=new THREE.PointLight(0xff6a20,45,40,1.3);bl.position.set(12,9,-10);s.add(bl);const halo=new THREE.Sprite(addM(SOFT,0xff4a10,.55));halo.position.set(-2,10,-45);halo.scale.set(110,40,1);s.add(halo);
 const smoke=smokeSys(s,q?40:18,0x2a2422),emb=emberSys(q?220:90,0xffa040,.32);s.add(emb);
 // hero truck + mirror reflection on the wet road
 const tier=tierOf3('E');const tr=instance(model('E',tier),[8.6,8.6]);tr.userData.keep=1;tr.rotation.y=-.62;s.add(tr);tr.userData.glows.forEach(g=>g.scale.multiplyScalar(4.5));
 let mr=null;if(q){mr=instance(model('E',tier),[8.6,8.6]);mr.userData.keep=1;mr.rotation.y=-.62;mr.scale.y=-.5;s.add(mr);mr.userData.glows.forEach(g=>g.scale.multiplyScalar(1.6));}
 const sh=blob(10,4.6,.85);sh.rotation.z=.62;sh.renderOrder=3;s.add(sh);
 const red=new THREE.PointLight(0xff2a1a,0,22,1.3),blu=new THREE.PointLight(0x2a5aff,0,22,1.3);red.position.set(-1.6,3.6,1);blu.position.set(1.6,3.6,-1);s.add(red,blu);
 const streak=[0xff2a1a,0x3a6cff].map((c,i)=>{const sp=new THREE.Sprite(addM(SOFT,c,0));sp.position.set(i?2.2:-2.2,.05,3.2);sp.scale.set(1.4,6,1);s.add(sp);return sp;});
 // headlights + volumetric beams (truck front is +x in model space)
 const fwd=new THREE.Vector3(Math.cos(.62),0,Math.sin(.62)),side=new THREE.Vector3(-fwd.z,0,fwd.x);const heads=[-1,1].map(k=>new THREE.Vector3().copy(fwd).multiplyScalar(4.25).addScaledVector(side,k*1.05).setY(1.05));
 const hb=heads.map(p=>{const b=beam(0xfff1d0,q?.55:.4,.12,2.6);aim(b,new THREE.Vector3().copy(p).addScaledVector(fwd,11).setY(.1),p);s.add(b);const g=new THREE.Sprite(addM(SOFT,0xfff4dc,.95));g.position.copy(p);g.scale.setScalar(1.3);s.add(g);return b;});
 const search=[];
 // firefighters
 const f1=figure({ff:1,coat:0x3a3226,pants:0x3a3226,helmet:0xffc21a}),f2=figure({ff:1,coat:0x3a3226,pants:0x3a3226,helmet:0xd8261c});
 f1.position.set(4.3,0,1.6);f1.rotation.y=.2;f2.position.set(-3.6,0,4.2);f2.rotation.y=.5;[f1,f2].forEach(f=>{f.scale.setScalar(1.02);s.add(f);const b=blob(1.2,1.2,.7);b.position.set(f.position.x,.03,f.position.z);s.add(b);});
 // rain
 const RN=q?900:380;const rg=new THREE.BufferGeometry();const rp=new Float32Array(RN*6);for(let i=0;i<RN;i++){const x=(rnd()-.5)*40,y=rnd()*24,z=-8+rnd()*22;rp.set([x,y,z,x+.06,y+.7,z],i*6);}rg.setAttribute('position',new THREE.BufferAttribute(rp,3));
 const rain=new THREE.LineSegments(rg,new THREE.LineBasicMaterial({color:0xa8c4e8,transparent:true,opacity:.38,depthWrite:false}));rain.frustumCulled=false;s.add(rain);
 const splash=pts(q?60:24,0xc8dcff,.18);s.add(splash);splash.userData.d=Array.from({length:splash.geometry.attributes.position.count},()=>({t:rnd()}));
 const cam=new THREE.PerspectiveCamera(50,1,.3,260);
 return {s,cam,fl,F,smoke,emb,tr,mr,red,blu,streak,search,f1,f2,rain,splash,t:0};}
function titleDraw(c,w,h,dt){if(!TI)TI=titleBuild();const T=TI;dt=Math.min(.05,dt||.016);perf(dt);T.t+=dt;const t=T.t;const cam=T.cam;
 const a=.5+Math.sin(t*.09)*.26;const Rr=9.2-Math.sin(t*.13)*.4;cam.position.set(Math.sin(a)*Rr+1.2,1.35+Math.sin(t*.21)*.12,Math.cos(a)*Rr+.4);cam.lookAt(1.2,2.4,0);const asp=w/h;camFit(cam,w,h,asp<.6?66:56,asp<.6?.5:.5);
 flameStep(T.fl,cam,t);smokeStep(T.smoke,T.F,dt,{life:6,sp:3,wind:1.2,rise:2.4,s0:5,grow:2.2,op:.55});emberStep(T.emb,T.F,dt,{life:3,sp:3,wind:.8,rise:4});
 siren(T.tr,true,t,0);if(T.mr)siren(T.mr,true,t,0);const on=Math.sin(t*14)>0;T.red.intensity=on?60:4;T.blu.intensity=on?4:70;T.streak[0].material.opacity=on?.5:.05;T.streak[1].material.opacity=on?.05:.55;
 T.tr.position.y=Math.sin(t*1.7)*.012;
 T.search.forEach((b,i)=>{const ang=Math.sin(t*.25+i*2.1)*.45+(i?.35:-.35);aim(b,new THREE.Vector3(Math.sin(ang)*40+(i?18:-22),40,-40),new THREE.Vector3(i?20:-24,0,-26));});
 pose(T.f1,'idle',t,0);T.f1.userData.torso.rotation.x=Math.sin(t*1.6)*.02;const wv=(t%9)<2.4;pose(T.f2,wv?'wave':'idle',t,1);if(!wv){T.f2.userData.B.p.rotation.z=-.08;}
 const rp=T.rain.geometry.attributes.position;const n=rp.count/2;const sp=24*dt;for(let i=0;i<n;i++){let y=rp.getY(i*2)-sp;if(y<0){y+=24;}rp.setY(i*2,y);rp.setY(i*2+1,y+.7);}rp.needsUpdate=true;
 const sa=T.splash.geometry.attributes.position;T.splash.userData.d.forEach((d,i)=>{d.t+=dt*3;if(d.t>1){d.t=0;sa.setXYZ(i,(rnd()-.5)*24,.05,-2+rnd()*12);}});sa.needsUpdate=true;T.splash.material.opacity=.7;
 render(c,w,h,[[T.s,cam]]);
 // cinematic grade: vignette + top darkening for the logo
 c.save();const vg=c.createRadialGradient(w/2,h*.55,Math.min(w,h)*.3,w/2,h*.55,Math.max(w,h)*.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.62)');c.fillStyle=vg;c.fillRect(0,0,w,h);
 const tg=c.createLinearGradient(0,0,0,h*.32);tg.addColorStop(0,'rgba(0,0,6,.55)');tg.addColorStop(1,'rgba(0,0,6,0)');c.fillStyle=tg;c.fillRect(0,0,w,h*.32);c.restore();}
function titleDispose(){if(!TI)return;dispScene(TI.s);TI=null;}

// ============ RANK BADGE ============
const RKC=[[0x9aa3b2,0x5b6475],[0xe0533a,0x8f1d10],[0x3a8ee0,0x123f80],[0xffcc33,0xa06a00],[0xffe680,0xc48a00]];
function badge(rk){rk=cl(rk|0,0,4);const g=new THREE.Group();const c=RKC[rk];
 const rim=new THREE.Mesh(ex(hexShape(1.13),.24,.07),metal(rk>=3?0xffd77a:0xe4e8ef,.18));g.add(rim);
 const face=new THREE.Mesh(ex(hexShape(.93),.3,.05),new THREE.MeshPhysicalMaterial({color:c[0],metalness:.55,roughness:.28,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.2}));face.position.z=.05;g.add(face);
 const inner=new THREE.Mesh(ex(hexShape(.8),.02,.01,1),new THREE.MeshPhysicalMaterial({color:c[1],metalness:.4,roughness:.35,clearcoat:1}));inner.position.z=.24;g.add(inner);
 const chm=metal(0xf6f8fc,.1);const n=rk+1,sp=.25,y0=-((n-1)*sp)/2-.08;for(let k=0;k<n;k++){const m=new THREE.Mesh(ex(chevShape(.5,.24,.12),.08,.025,2),chm);m.position.set(0,y0+k*sp,.32);g.add(m);}
 if(rk===4){const st=new THREE.Mesh(ex(starShape(.2,.45),.06,.02,2),metal(0xffd23f,.15));st.position.set(0,.66,.32);g.add(st);}
 return g;}
const BD={};function badgeScene(){if(BD.s)return BD;const s=new THREE.Scene();s.environment=ENV;s.environmentIntensity=1;s.add(new THREE.HemisphereLight(0xffffff,0x404050,1));const k=new THREE.DirectionalLight(0xffffff,2.4);k.position.set(2,3,5);s.add(k);
 BD.s=s;BD.cam=new THREE.PerspectiveCamera(30,1,.1,50);BD.cam.position.set(0,0,5.2);BD.cam.lookAt(0,0,0);return BD;}
function badgeDraw(c,size,rk,ang){const B=badgeScene();if(B.rk!==rk){if(B.g){B.s.remove(B.g);disp(B.g);}B.g=badge(rk);B.rk=rk;B.s.add(B.g);}B.g.rotation.set(-.12,ang||-.32,0);
 c.clearRect(0,0,size,size);render(c,size,size,[[B.s,B.cam]],1);}

// ============ LEVEL COMPLETE ============
function resStart(o){const q=hi()&&!U.low;const ch=o.ch||1;
 const bg=new THREE.Scene();bg.background=skyTex('#141c3a','#e88a50');bg.environment=ENV;bg.environmentIntensity=.6;bg.fog=new THREE.Fog(0x4a3040,22,80);
 bg.add(new THREE.HemisphereLight(0xffd8b0,0x202030,1.1));const sun=new THREE.DirectionalLight(0xffc890,2.2);sun.position.set(-6,5,-10);bg.add(sun);const fr=new THREE.DirectionalLight(0xbcd0ff,1.3);fr.position.set(4,8,12);bg.add(fr);
 const gm=new THREE.MeshStandardMaterial({color:0x14161c,roughness:.14,metalness:.75,envMapIntensity:.8});const gr=new THREE.Mesh(new THREE.PlaneGeometry(200,200),gm);gr.rotation.x=-Math.PI/2;bg.add(gr);
 let F=[];try{const d=CH[ch]||CH[1];const b=buildBuilding(d.build);b.g.position.set(0,0,-13);b.g.scale.setScalar(.9);bg.add(b.g);F=b.F.map(p=>new THREE.Vector3(p[0]*.9,p[1]*.9,p[2]*.9-13));}catch(e){}
 if(!F.length)F=[new THREE.Vector3(0,6,-12)];const steam=smokeSys(bg,q?26:12,0xe8eef6);
 const types=(o.types&&o.types.length?o.types:[['E',0]]).slice(0,4);const n=types.length;const veh=types.map(([ty,ti],i)=>{const v=instance(model(ty,ti),[5.2,5.2]);v.userData.keep=1;const x=(i-(n-1)/2)*4.3;v.position.set(x,0,2+Math.abs(i-(n-1)/2)*-.8);v.rotation.y=-Math.PI/2+(i-(n-1)/2)*-.28+.12;bg.add(v);const b=blob(6.2,3.2,.8);b.position.set(x,.02,v.position.z);b.rotation.z=v.rotation.y;bg.add(b);v.userData.x0=x;return v;});
 const crew=[0,1,2,3].slice(0,q?4:2).map(i=>{const f=figure({ff:1,coat:0x3a3226,pants:0x3a3226,helmet:i%2?0xffc21a:0xd8261c});f.position.set((i-1.5)*2.6+(i%2?.6:-.6),0,5.3);f.userData.y0=0;f.scale.setScalar(.9);bg.add(f);return f;});
 const spots=[0,1,2].map(i=>{const b=beam(0xffe6b8,q?.36:.26,.2,4.2);bg.add(b);return b;});
 const cam=new THREE.PerspectiveCamera(45,1,.3,200);
 // ---- foreground (pixel space) ----
 const fg=new THREE.Scene();fg.environment=ENV;fg.environmentIntensity=1.1;fg.add(new THREE.HemisphereLight(0xffffff,0x3a3040,.9));const key=new THREE.DirectionalLight(0xfff2dc,2.6);key.position.set(-.4,1,1.2);fg.add(key);
 const sweep=new THREE.PointLight(0xffffff,0,0,0);fg.add(sweep);
 const fcam=new THREE.PerspectiveCamera(30,1,1,6000);
 const rays=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({map:RAYS,color:0xffcf70,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));rays.position.z=-60;fg.add(rays);
 const gold=metal(0xffc23a,.2),dark=new THREE.MeshPhysicalMaterial({color:0x232838,metalness:.4,roughness:.35,clearcoat:1,transparent:true,opacity:.92});const sGeo=ex(starShape(1,.47),.34,.1,3);
 const stars=[0,1,2].map(k=>{const on=k<o.stars;const g=new THREE.Group();const m=new THREE.Mesh(sGeo,on?gold:dark);g.add(m);if(on){const gl=new THREE.Sprite(addM(SOFT,0xffb830,0));gl.position.z=-10;g.add(gl);g.userData.gl=gl;}g.userData.on=on;g.visible=!on;fg.add(g);return g;});
 const MK={3:[0xffcb3a,0xb37400],2:[0xdfe6f0,0x7a8698],1:[0xd98a4a,0x7a3f12]}[o.stars]||[0xffcb3a,0xb37400];
 const medal=new THREE.Group();const disc=new THREE.Group();medal.add(disc);
 const dm=metal(MK[0],.22);const d1=new THREE.Mesh(new THREE.CylinderGeometry(1,1,.2,56),dm);d1.rotation.x=Math.PI/2;disc.add(d1);
 const rimG=new THREE.Mesh(new THREE.TorusGeometry(.95,.08,14,56),metal(MK[0],.12));rimG.position.z=.1;disc.add(rimG);const rimB=rimG.clone();rimB.position.z=-.1;disc.add(rimB);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(.74,.035,10,48),metal(MK[1],.3));ring.position.z=.11;disc.add(ring);
 const ms=new THREE.Mesh(ex(starShape(.5,.46),.1,.04,2),metal(MK[0],.12));ms.position.z=.16;disc.add(ms);const ms2=ms.clone();ms2.position.z=-.16;ms2.rotation.y=Math.PI;disc.add(ms2);
 const loop=new THREE.Mesh(new THREE.TorusGeometry(.14,.04,8,20),metal(MK[0],.2));loop.position.y=1.08;disc.add(loop);
 const rib=new THREE.Group();medal.add(rib);[[0xd81e26,-1],[0x1f5fd0,1]].forEach(([c,s])=>{const r=new THREE.Mesh(new THREE.BoxGeometry(.62,2.5,.04),new THREE.MeshPhysicalMaterial({color:c,roughness:.45,sheen:1,sheenColor:new THREE.Color(0xffffff),sheenRoughness:.4}));r.position.set(s*.42,1.7,-.25);r.scale.y=.62;r.rotation.z=s*.38;rib.add(r);const st=new THREE.Mesh(new THREE.BoxGeometry(.14,2.5,.045),new THREE.MeshStandardMaterial({color:0xffffff,roughness:.5}));st.position.copy(r.position);st.position.z+=.005;st.rotation.z=r.rotation.z;st.scale.y=.62;rib.add(st);});
 medal.visible=false;fg.add(medal);
 // hanging photo frame
 const frame=new THREE.Group();const fb=new THREE.Group();frame.add(fb);frame.visible=false;fg.add(frame);
 const paper=new THREE.MeshStandardMaterial({color:0xf6f2e8,roughness:.75});const fbox=new THREE.Mesh(new THREE.BoxGeometry(1,1.12,.05),paper);fb.add(fbox);
 const ptex=new THREE.Texture();ptex.colorSpace=THREE.SRGBColorSpace;const im=o.img&&o.img.im;const setUV=()=>{if(!im||!im.naturalWidth)return false;const cr=o.img.crop;const W0=im.naturalWidth,H0=im.naturalHeight,iw=.88,ih=.82;const sc=Math.max(iw/W0,ih/H0)*cr[2];const dw=W0*sc,dh=H0*sc;const ox=(dw-iw)*cr[0],oy=(dh-ih)*cr[1];
  ptex.image=im;ptex.repeat.set(iw/dw,ih/dh);ptex.offset.set(ox/dw,1-(oy+ih)/dh);ptex.needsUpdate=true;return true;};let uvOK=setUV();
 const photo=new THREE.Mesh(new THREE.PlaneGeometry(.88,.82),new THREE.MeshStandardMaterial({map:ptex,roughness:.35,color:uvOK?0xffffff:0x333333}));photo.position.set(0,.56-.06-.41,.03);fb.add(photo);
 const gloss=new THREE.Mesh(new THREE.PlaneGeometry(.88,.82),new THREE.MeshBasicMaterial({map:FLARE,transparent:true,opacity:.18,blending:THREE.AdditiveBlending,depthWrite:false}));gloss.position.copy(photo.position);gloss.position.z+=.002;gloss.rotation.z=.7;gloss.scale.set(1.6,.5,1);fb.add(gloss);
 const lt=cvTex(512,96,(g,w,h)=>{g.fillStyle='#2a2d36';g.font='800 52px GameFont,system-ui,sans-serif';g.textAlign='center';g.textBaseline='middle';let s=48;g.font=`800 ${s}px GameFont,system-ui,sans-serif`;while(g.measureText(o.label||'').width>w-30&&s>20){s-=2;g.font=`800 ${s}px GameFont,system-ui,sans-serif`;}g.fillText(o.label||'',w/2,h/2+2);});
 const lab=new THREE.Mesh(new THREE.PlaneGeometry(.9,.17),new THREE.MeshBasicMaterial({map:lt,transparent:true}));lab.position.set(0,-.43,.03);fb.add(lab);
 const tape=new THREE.MeshStandardMaterial({color:0xd8c48a,roughness:.9,transparent:true,opacity:.85});const tp=new THREE.Mesh(new THREE.PlaneGeometry(.32,.1),tape);tp.position.set(0,.56,.035);tp.rotation.z=-.08;fb.add(tp);
 const strM=new THREE.MeshStandardMaterial({color:0x8a6a40,roughness:.8});[-1,1].forEach(s=>{const st=new THREE.Mesh(new THREE.CylinderGeometry(.008,.008,1,5),strM);st.userData.s=s;fb.add(st);});
 const pin=new THREE.Mesh(new THREE.SphereGeometry(.05,14,10),new THREE.MeshPhysicalMaterial({color:0xe02030,roughness:.2,clearcoat:1}));fb.add(pin);
 const fsh=new THREE.Mesh(new THREE.PlaneGeometry(1,1.12),shadowM(.75));fsh.scale.set(1.35,1.3,1);frame.add(fsh);
 // confetti (instanced)
 const CN=q?150:60;const cg=new THREE.PlaneGeometry(1,.5);const conf=new THREE.InstancedMesh(cg,new THREE.MeshStandardMaterial({side:THREE.DoubleSide,roughness:.4,metalness:.35}),CN);conf.frustumCulled=false;fg.add(conf);
 const CC=[0xffd23f,0xff4a6a,0x3ad1ff,0x7ad65a,0xffffff,0xff9a3a,0xb38aff].map(c=>new THREE.Color(c));const cd=Array.from({length:CN},(_,i)=>({live:false,p:new THREE.Vector3(),v:new THREE.Vector3(),r:new THREE.Euler(),w:new THREE.Vector3(rnd()*8,rnd()*8,rnd()*8),s:6+rnd()*6}));
 for(let i=0;i<CN;i++)conf.setColorAt(i,CC[i%CC.length]);const dm4=new THREE.Object3D();
 const H={bg,cam,fg,fcam,veh,crew,spots,steam,F,stars,medal,disc,frame,fb,rays,conf,cd,sweep,uvOK,setUV,photo,t:0,burst:[0,0,0],ps:[],sGeo};
 H.draw=function(c,w,h,t,dt,pt){dt=Math.min(.05,dt||.016);perf(dt);const tt=H.t+=dt;
  if(!H.uvOK&&(H.uvOK=setUV()))photo.material.color.set(0xffffff);
  // background diorama
  const push=eOut(Math.min(1,t/6));cam.position.set(Math.sin(tt*.12)*1.2,3.1-push*.3,17.5-push*3.2);cam.lookAt(0,2.2,0);const y0=Math.min(h*.6,(pt||h)-h*.02);camFit(cam,w,h,Math.min(64,40+n*7),cl((y0-h*.07)/h,.35,.8));
  veh.forEach((v,i)=>{siren(v,true,tt,i*1.3);});crew.forEach((f,i)=>pose(f,'cheer',tt,i*1.7));
  spots.forEach((b,i)=>{const a=Math.sin(tt*.4+i*2)*.5;aim(b,new THREE.Vector3((i-1)*5+Math.sin(a)*4,0,2+Math.cos(a)*2),new THREE.Vector3((i-1)*9,22,-6));b.material.uniforms.op.value=(.25+.1*Math.sin(tt*2+i))*Math.min(1,t);});
  smokeStep(steam,F,dt,{life:5,sp:2,wind:.6,rise:2,s0:3.5,grow:2,op:.4});
  // foreground in css-pixel space
  fcam.aspect=w/h;fcam.fov=30;const z=(h/2)/Math.tan(15*Math.PI/180);fcam.position.set(0,0,z);fcam.near=z*.3;fcam.far=z*3;fcam.updateProjectionMatrix();
  const P=(x,y)=>[x-w/2,h/2-y];const sr=Math.min(w*.085,44),sy=h*.2;
  const [rx,ry]=P(w/2,sy);rays.position.set(rx,ry,-80);const rs=Math.min(w,h)*1.25;rays.scale.set(rs,rs,1);rays.rotation.z=tt*.15;rays.material.opacity=Math.min(1,cl((t-.5)/.6,0,1))*.42*(H.stars?1:1);
  stars.forEach((g,k)=>{const x=w/2+(k-1)*sr*2.5,y=sy-(k===1?sr*.35:0);const [px,py]=P(x,y);g.position.set(px,py,0);const base=sr*(k===1?1.18:1);
   if(g.userData.on){const ts=.5+k*.28,u=cl((t-ts)/.45,0,1);g.visible=u>0;const sc=base*Math.max(.01,eBack(u));g.scale.set(sc,sc,sc);g.rotation.y=(1-eOut(u))*TAU*1.25+Math.sin(tt*1.2+k)*.32;g.rotation.x=Math.sin(tt*.9+k)*.12;
    if(u>0&&!H.burst[k]){H.burst[k]=1;burst(px,py,sr);}g.userData.gl.material.opacity=(.55+.25*Math.sin(tt*3+k))*Math.min(1,u*2);g.userData.gl.scale.setScalar(2.6+.2*Math.sin(tt*3+k));}
   else{g.visible=true;g.scale.setScalar(base*.95);g.rotation.y=Math.sin(tt*.8+k)*.15;}});
  const mr=Math.min(w*.1,46),mu=cl((t-1.4)/.5,0,1);medal.visible=mu>0;if(mu>0){const [mx,my]=P(w*.24,h*.36);medal.position.set(mx,my+(1-eBack(mu))*h*.22,10);medal.scale.setScalar(mr*.82);medal.rotation.z=Math.sin(tt*1.3)*.05;disc.rotation.y=Math.sin(tt*1.05)*.85+(1-mu)*TAU;}
  const pw=Math.min(w*.32,150),pu=cl((t-1.7)/.5,0,1);frame.visible=pu>0;if(pu>0){const [fx,fy]=P(w*.72+(1-eOut(pu))*w*.5,h*.37);const fh=pw*1.12;const pinY=fh*.5+pw*.32;
   frame.position.set(fx,fy+pinY,6);frame.scale.setScalar(pw);const sw=.07+Math.sin(tt*1.5)*.035;fb.position.set(0,-pinY/pw,0);frame.rotation.set(0,0,0);fb.rotation.set(.04,-.28+Math.sin(tt*.7)*.08,0);frame.rotation.z=sw;
   fb.children.forEach(o=>{if(o.userData.s){const ax=o.userData.s*.36,ay=.56,bx=0,by=.56+.32;o.position.set((ax+bx)/2,(ay+by)/2,.04);o.scale.y=Math.hypot(ax-bx,ay-by);o.rotation.z=Math.atan2(-(bx-ax),(by-ay));}});
   const pinM=fb.children.find(o=>o.geometry&&o.geometry.type==='SphereGeometry');if(pinM)pinM.position.set(0,.88,.05);
   const sh=frame.children[1];sh.position.set(.12,-pinY/pw-.1,-.25);sh.rotation.z=0;}
  sweep.position.set(Math.sin(tt*.8)*w*.6,h*.2,400);sweep.intensity=0;
  // confetti
  const live=t>.7&&t<9;cd.forEach((d,i)=>{if(!d.live){if(live&&rnd()<dt*(q?9:4)){d.live=true;d.p.set((rnd()-.5)*w,h*.55+rnd()*40,(rnd()-.5)*200);d.v.set((rnd()-.5)*60,-(60+rnd()*80),0);}else{dm4.position.set(0,-1e5,0);dm4.scale.setScalar(.001);dm4.updateMatrix();conf.setMatrixAt(i,dm4.matrix);return;}}
   d.p.addScaledVector(d.v,dt);d.v.x+=Math.sin(tt*2+i)*30*dt;d.r.x+=d.w.x*dt;d.r.y+=d.w.y*dt;d.r.z+=d.w.z*dt*.3;if(d.p.y<-h*.6)d.live=false;dm4.position.copy(d.p);dm4.rotation.copy(d.r);dm4.scale.setScalar(d.s);dm4.updateMatrix();conf.setMatrixAt(i,dm4.matrix);});conf.instanceMatrix.needsUpdate=true;
  H.ps=H.ps.filter(p=>(p.t+=dt)<p.max);
  render(c,w,h,[[bg,cam],[fg,fcam]]);
  // soft vignette for readability
  c.save();const vg=c.createLinearGradient(0,h*.45,0,h);vg.addColorStop(0,'rgba(6,8,14,0)');vg.addColorStop(.5,'rgba(6,8,14,.55)');vg.addColorStop(1,'rgba(6,8,14,.9)');c.fillStyle=vg;c.fillRect(0,h*.45,w,h*.55);c.restore();};
 function burst(px,py,sr){/* visual burst handled by 2D sparkles; flash the key light */key.intensity=5;setTimeout(()=>key.intensity=2.6,120);}
 H.dispose=function(){dispScene(bg);dispScene(fg);};
 return H;}

// ============ RANK-UP ============
function rankStart(rk){const q=hi()&&!U.low;const s=new THREE.Scene();s.environment=ENV;s.environmentIntensity=1.2;s.add(new THREE.HemisphereLight(0xfff4e0,0x302010,.9));const k=new THREE.DirectionalLight(0xffffff,2.6);k.position.set(2,3,6);s.add(k);
 const pl=new THREE.PointLight(0xffe0a0,0,30,1);s.add(pl);
 const b=badge(rk);s.add(b);const col=RKC[cl(rk,0,4)][0];
 const r1=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({map:RAYS,color:0xffd080,transparent:true,opacity:.0,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));r1.position.z=-2;r1.scale.setScalar(13);s.add(r1);
 const r2=r1.clone();r2.material=r1.material.clone();r2.material.color.set(col);r2.position.z=-1.9;r2.scale.setScalar(9);s.add(r2);
 const halo=new THREE.Sprite(addM(SOFT,0xffc860,0));halo.position.z=-1.5;halo.scale.setScalar(5.5);s.add(halo);
 const fl=[0,1].map(i=>{const f=new THREE.Sprite(addM(FLARE,i?0x9ad0ff:0xffffff,0));f.position.z=.6;s.add(f);return f;});
 const gr=[];for(let i=0;i<(q?8:5);i++){const bm=beam(i%2?0xffe0a0:0xfff6e0,q?.4:.3,1.8,.05);bm.userData.a=i/(q?8:5)*TAU;s.add(bm);gr.push(bm);}
 const sp=pts(q?160:70,0xffd890,.12);s.add(sp);const sa=sp.geometry.attributes.position;const sd=Array.from({length:sa.count},()=>({life:rnd(),v:new THREE.Vector3()}));
 const cam=new THREE.PerspectiveCamera(40,1,.1,100);const H={t:0};
 H.draw=function(c,w,h,dt){dt=Math.min(.05,dt||.016);perf(dt);const t=H.t+=dt;
  const z=10-eOut(Math.min(1,t/2.4))*2.6;cam.position.set(Math.sin(t*.3)*.25,Math.sin(t*.4)*.12,z);cam.lookAt(0,0,0);camFit(cam,w,h,w/h<.7?34:30,.4);
  const u=Math.min(1,t/1.7);b.rotation.y=(1-eOut(u))*TAU*2.5+(u>=1?Math.sin((t-1.7)*1.1)*.4:0);b.rotation.x=-.08+Math.sin(t*.7)*.05;b.scale.setScalar(Math.max(.01,eBack(Math.min(1,t*1.5))));
  const ap=Math.min(1,t*1.2);r1.rotation.z=t*.18;r2.rotation.z=-t*.11;r1.material.opacity=.5*ap;r2.material.opacity=.32*ap;halo.material.opacity=(.6+.15*Math.sin(t*3))*ap;
  const fp=u>=1?Math.max(0,1-(t-1.7)*1.4):0;fl[0].material.opacity=.9*fp+.25*ap;fl[0].scale.set(7*(.7+fp),.45,1);fl[1].material.opacity=.4*fp+.1*ap;fl[1].scale.set(4.5,.18,1);fl[1].material.rotation=.0;
  pl.position.set(Math.sin(t*1.4)*2.5,1.2,2.5);pl.intensity=12;
  gr.forEach((m,i)=>{const a=m.userData.a+t*.12;aim(m,new THREE.Vector3(Math.cos(a)*9,Math.sin(a)*9,-2.5),new THREE.Vector3(0,0,-1));m.material.uniforms.op.value=(.22+.1*Math.sin(t*2+i))*ap;});
  sd.forEach((d,i)=>{d.life+=dt*.5;if(d.life>=1){d.life=0;const a=rnd()*TAU,r=1+rnd()*1.6;sa.setXYZ(i,Math.cos(a)*r,Math.sin(a)*r-.4,(rnd()-.5)*1.5);d.v.set(Math.cos(a)*.5,.7+rnd()*.8,0);}sa.setXYZ(i,sa.getX(i)+d.v.x*dt,sa.getY(i)+d.v.y*dt,sa.getZ(i));});sa.needsUpdate=true;sp.material.opacity=ap;
  render(c,w,h,[[s,cam]]);};
 H.dispose=function(){dispScene(s);};return H;}

return {get off(){return U.off;},set off(v){U.off=v;},U,title:titleDraw,titleDispose,get tOn(){return !!TI;},badge:badgeDraw,res:resStart,rank:rankStart};}
