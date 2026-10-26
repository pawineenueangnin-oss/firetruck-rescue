// Firetruck Rescue v8 — incident scenarios (fire / car crash / injured people / cat in a tree).
// Gameplay, validators and saves are unchanged: the scenario only changes the scene, HUD labels, objective and story beat.
(function(){
const TAU=Math.PI*2;
const SCN=window.SCN=['fire','crash','cat','fire','fire','fire','hurt','fire','cat','fire','fire','fire','crash','hurt','fire','fire','fire','fire','fire','cat','crash','fire','fire','fire','crash','hurt','fire','cat','fire','fire'];
const scnOf=i=>SCN[i]||'fire';window.scnOf=scnOf;
const BAR={fire:['i-flame','fire'],crash:['i-warn','barDanger'],hurt:['i-clock','barTime'],cat:['i-clock','barTime']};
const OBJ={fire:'objFire',crash:'objCrash',hurt:'objHurt',cat:'objCat'};
function setHud(){if(!G)return;const k=G.scn||'fire';const fh=$('fireHud');if(fh){const u=fh.querySelector('use');if(u)u.setAttribute('href','#'+BAR[k][0]);const sp=fh.querySelector('span[data-t]');if(sp){sp.dataset.t=BAR[k][1];sp.textContent=T(BAR[k][1]);}fh.dataset.scn=k;}
 const ch=$('carHud');if(ch){const u=ch.querySelector('use');if(u)u.setAttribute('href',k==='cat'?'#i-paw':'#i-person');}}
function objective(){let el=$('objBan');if(!el){el=document.createElement('div');el.id='objBan';document.body.appendChild(el);}
 const k=G.scn||'fire';el.innerHTML=`<svg viewBox="0 0 24 24"><use href="#${BAR[k][0]==='i-clock'?(k==='cat'?'i-paw':'i-cross'):BAR[k][0]}"/></svg><span>${T(OBJ[k])}</span>`;el.dataset.scn=k;
 const fh=$('fireHud');const r=fh?fh.getBoundingClientRect():null;el.style.top=((r&&r.bottom>0?r.bottom:120)+8)+'px';
 el.classList.remove('on');void el.offsetWidth;el.classList.add('on');clearTimeout(el._h);el._h=setTimeout(()=>el.classList.remove('on'),3400);}
const _sl=window.startLevel;window.startLevel=function(i,sk){_sl(i,sk);if(G){G.scn=scnOf(G.i);setHud();if(MODE==='game')setTimeout(()=>{if(G&&G.i===i&&MODE==='game')objective();},450);}};
const _ap=window.applyLang;if(_ap)window.applyLang=function(){_ap.apply(this,arguments);setHud();};
window.__ft.start=(i,sk)=>window.startLevel(i,sk);
const _T=window.T;window.T=function(k){if(k==="tu6"&&G){const s=scnOf(G.i);if(s!=="fire")k=OBJ[s];}return _T.apply(this,[k].concat([].slice.call(arguments,1)));};
window.__ft.scn=()=>G&&G.scn;
// ---------- 2D fallback incident scenes (canvas, original art) ----------
const _ds=window.drawScene;
function car2(c,x,y,s,col,ang,dent){c.save();c.translate(x,y);c.rotate(ang);c.fillStyle='rgba(0,0,0,.35)';ell(c,0,s*.18,s*.62,s*.12);c.fill();
 c.fillStyle=col;rr(c,-s*.55,-s*.18,s*1.1,s*.32,s*.08);c.fill();c.fillStyle='rgba(255,255,255,.25)';rr(c,-s*.5,-s*.16,s*1,s*.06,s*.03);c.fill();
 c.fillStyle=col;rr(c,-s*.3,-s*.4,s*.55,s*.26,s*.08);c.fill();c.fillStyle='#9fd0f0';rr(c,-s*.24,-s*.35,s*.2,s*.16,s*.03);c.fill();rr(c,0,-s*.35,s*.2,s*.16,s*.03);c.fill();
 c.fillStyle='#111';[-.32,.32].forEach(k=>{c.beginPath();c.arc(k*s,s*.14,s*.11,0,TAU);c.fill();});c.fillStyle='#aaa';[-.32,.32].forEach(k=>{c.beginPath();c.arc(k*s,s*.14,s*.05,0,TAU);c.fill();});
 if(dent){c.fillStyle='#1a1410';c.beginPath();c.moveTo(s*.55,-s*.18);c.lineTo(s*.38,-s*.05);c.lineTo(s*.5,s*.02);c.lineTo(s*.36,s*.12);c.lineTo(s*.58,s*.14);c.closePath();c.fill();}c.restore();}
function cat2(c,x,y,s,col,t,ph){c.save();c.translate(x,y);const b=Math.sin(t*3+ph)*.08;c.fillStyle=col;ell(c,0,-s*.3,s*.32,s*.3);c.fill();c.beginPath();c.arc(0,-s*.75,s*.26,0,TAU);c.fill();
 [-1,1].forEach(k=>{c.beginPath();c.moveTo(k*s*.24,-s*.85);c.lineTo(k*s*.2,-s*1.1);c.lineTo(k*s*.06,-s*.95);c.closePath();c.fill();});
 c.strokeStyle=col;c.lineWidth=s*.09;c.lineCap='round';c.beginPath();c.moveTo(s*.25,-s*.15);c.quadraticCurveTo(s*.6,-s*.2+b*s,s*.5,-s*.6);c.stroke();
 c.fillStyle='#111';[-1,1].forEach(k=>{ell(c,k*s*.1,-s*.78,s*.045,s*.06);c.fill();});c.fillStyle='#ff8aa8';c.beginPath();c.arc(0,-s*.68,s*.03,0,TAU);c.fill();c.restore();}
function lying(c,x,y,s,shirt,t,ph){c.save();c.translate(x,y);c.fillStyle='rgba(0,0,0,.3)';ell(c,0,0,s*.55,s*.08);c.fill();c.fillStyle='#2a3a5a';rr(c,-s*.5,-s*.12,s*.4,s*.12,s*.05);c.fill();c.fillStyle=shirt;rr(c,-s*.12,-s*.15,s*.42,s*.16,s*.06);c.fill();
 c.fillStyle='#e0b08a';c.beginPath();c.arc(s*.4,-s*.09,s*.09,0,TAU);c.fill();c.strokeStyle=shirt;c.lineWidth=s*.06;c.beginPath();c.moveTo(s*.1,-s*.12);c.lineTo(s*.18,-s*.3-Math.sin(t*2+ph)*s*.08);c.stroke();c.restore();}
function stretch2(c,x,y,s){c.save();c.translate(x,y);c.strokeStyle='#c8ccd2';c.lineWidth=s*.04;[-.4,.4].forEach(k=>{c.beginPath();c.moveTo(k*s,0);c.lineTo(k*s,-s*.32);c.stroke();});c.fillStyle='#eef2f6';rr(c,-s*.5,-s*.4,s,s*.1,s*.04);c.fill();c.fillStyle='#ff7a1a';c.fillRect(-s*.05,-s*.4,s*.12,s*.1);c.restore();}
function tree2(c,x,gy,h,t){c.save();c.translate(x,gy);c.fillStyle='#5a3a22';c.beginPath();c.moveTo(-h*.06,0);c.lineTo(-h*.035,-h*.6);c.lineTo(h*.035,-h*.6);c.lineTo(h*.06,0);c.closePath();c.fill();
 c.strokeStyle='#5a3a22';c.lineCap='round';c.lineWidth=h*.03;[[-.28,-.62],[.3,-.58],[-.18,-.8],[.2,-.82]].forEach(([dx,dy])=>{c.beginPath();c.moveTo(0,-h*.45);c.lineTo(dx*h,dy*h);c.stroke();});
 const cl=[[0,-.92,.2],[-.3,-.72,.17],[.32,-.7,.17],[-.16,-.98,.15],[.18,-1,.15],[0,-.68,.18]];cl.forEach(([dx,dy,r],i)=>{c.fillStyle=['#2e7a34','#3a9440','#24622a'][i%3];c.beginPath();c.arc(dx*h+Math.sin(t+i)*h*.005,dy*h,r*h,0,TAU);c.fill();});c.restore();
 return [[-.28,-.62],[.3,-.58],[-.18,-.8],[.2,-.82],[0,-.95],[-.05,-.7]].map(([dx,dy])=>[x+dx*h,gy+dy*h]);}
window.drawScene=function(c,ch,x,y,w,h,t,fire,o){const k=G&&MODE==='game'?(G.scn||'fire'):'fire';if(k==='fire')return _ds.apply(this,arguments);o=o||{};
 const B=buildingImg(ch,w,h),d=B.d;c.save();c.translate(x,y);c.beginPath();c.rect(0,0,w,h);c.clip();c.drawImage(B.c,0,0,w,h);c.fillStyle='rgba(8,12,30,.45)';c.fillRect(0,0,w,h);
 const gy=d.gy||h*.8;c.fillStyle='#2a2d34';c.fillRect(0,gy-h*.05,w,h-gy+h*.05);const s=Math.min(w,h*1.6)*.11;const F=[],P=[];
 if(k==='crash'){car2(c,w*.36,gy-h*.03,s*2.2,'#3a7bd5',.12,1);car2(c,w*.62,gy-h*.01,s*2.2,'#e0e0e0',-.2+Math.PI*0,1);F.push([w*.44,gy-h*.12,1],[w*.55,gy-h*.1,1]);
  [[.12,1],[.88,1]].forEach(([u])=>{c.fillStyle='#ff6a10';c.beginPath();c.moveTo(w*u-s*.15,gy+h*.04);c.lineTo(w*u,gy-h*.08);c.lineTo(w*u+s*.15,gy+h*.04);c.fill();});
  const n=fire>0?Math.ceil(F.length*Math.min(1,fire)):0;for(let i=0;i<n;i++){const [fx,fy]=F[i];for(let q=0;q<2;q++){const u=(t*.25+i*.37+q*.5)%1;const r=s*(.5+u*1.4);c.globalAlpha=(1-u)*.65;c.drawImage(SMOKE,fx-r,fy-s*.4-u*h*.45-r,r*2,r*2);}c.globalAlpha=1;drawFlames(c,fx,fy,s*.55,t,i*1.7,clamp(fire,.35,1));}
  const wt=o.waiting||0;for(let i=0;i<Math.min(wt,6);i++){const px=w*(.18+i*.13),py=gy+h*.08;if(i%2)lying(c,px,py,s*1.1,SHIRTS[i%6],t,i);else drawPerson(c,px,py,s*.7,{wave:true,t,ph:i,shirt:SHIRTS[i%6]});P.push([px,py]);}}
 else if(k==='hurt'){c.strokeStyle='#b8bec6';c.lineWidth=Math.max(2,s*.07);for(let i=0;i<4;i++){c.beginPath();c.moveTo(w*(.22+i*.12),gy);c.lineTo(w*(.22+i*.12)+(i===3?s:0),gy-h*.45);c.stroke();}
  c.beginPath();c.moveTo(w*.22,gy-h*.45);c.lineTo(w*.58,gy-h*.42);c.moveTo(w*.6,gy-h*.1);c.lineTo(w*.78,gy-h*.32);c.stroke();c.fillStyle='#b08040';c.save();c.translate(w*.66,gy-h*.04);c.rotate(.2);c.fillRect(-s,-s*.1,s*2,s*.2);c.restore();
  stretch2(c,w*.14,gy+h*.08,s*1.6);stretch2(c,w*.86,gy+h*.08,s*1.6);
  for(let q=0;q<4;q++){const u=(t*.2+q/4)%1;c.globalAlpha=(1-u)*.35*Math.min(1,fire+.2);const r=s*(1+u*1.5);c.drawImage(SMOKE,w*(.4+q*.08)-r,gy-h*.2-u*h*.4-r,r*2,r*2);}c.globalAlpha=1;
  const wt=o.waiting||0;for(let i=0;i<Math.min(wt,6);i++){const px=w*(.25+i*.1),py=gy+h*.1;if(i%3!==2)lying(c,px,py,s*1.1,SHIRTS[i%6],t,i);else drawPerson(c,px,py,s*.7,{wave:true,t,ph:i,shirt:SHIRTS[i%6]});P.push([px,py]);}}
 else {c.fillStyle='#2f6a2a';ell(c,w*.5,gy,w*.3,h*.05);c.fill();const br=tree2(c,w*.5,gy,h*.95,t);const cols=['#f08a2a','#9aa0a8','#2a2a2e','#f2e2c8','#f08a2a','#9aa0a8'];const wt=o.waiting||0;
  for(let i=0;i<Math.min(wt,6);i++){const [px,py]=br[i];cat2(c,px,py,s*.55,cols[i],t,i);P.push([px,py]);}
  drawPerson(c,w*.7,gy+h*.08,s*.7,{wave:true,t,ph:0,shirt:'#4aa8ff'});drawDog(c,w*.82,gy+h*.1,s*.8,t,o.cheer);
  const rs=G?(G.state==='win'?G.people:G.rescued):0;for(let i=0;i<rs;i++)cat2(c,w*(.06+i*.07),gy+h*.12-(o.cheer?Math.abs(Math.sin(t*5+i))*s*.3:0),s*.45,cols[i%6],t,i);}
 if(o.steam>0&&k==='crash'){for(let q=0;q<5;q++){const u=(t*.4+q/5)%1;const r=s*(.5+u);c.globalAlpha=o.steam*(1-u)*.55;c.fillStyle='#fff';ell(c,w*(.38+q*.06),gy-h*.12-u*h*.35,r,r*.7);c.fill();}c.globalAlpha=1;}
 c.restore();return {F,P,gy};};
// ---------- Story beats for the new scenarios (pre-rendered original 3D shots in img/) ----------
const SEQS=window.__ft.SEQS;const NB={2:['sc_crash1','warm','none'],3:['sc_cat1','dawn','sparkle'],7:['sc_hurt1','warm','none'],9:['sc_cat2','warm','sparkle'],13:['sc_crash2','fog','fog'],14:['sc_hurt2','cool','none'],20:['sc_cat3','warm','fireflies'],21:['sc_crash3','warm','none'],25:['sc_crash4','storm','rain'],26:['sc_hurt3','storm','rain'],28:['sc_cat4','storm','sparkle']};
Object.keys(NB).forEach(n=>{const q=SEQS['s'+n];if(!q||!q[0])return;const b=NB[n];Object.assign(q[0],{im:b[0],grade:b[1],fx:b[2],flip:false,kb:[.5,.55,1.25,.5,.45,1.05]});});
})();
