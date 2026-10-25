// Dev tool: reverse-construction level drafter (then filtered by the solver + hand review).
const B=require('./logic.js'),fs=require('fs');
function rng(s){return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};}
function gen(sp,seed){const r=rng(seed);const {w,h}=sp;const g=Array.from({length:h},()=>Array(w).fill('..'));
 (sp.fixed||[]).forEach(([x,y,t])=>g[y][x]=t);
 const cells=[];for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(g[y][x]==='..')cells.push([x,y]);
 const target=Math.round(cells.length*sp.fill);let n=0;const grid=()=>({w,h,grid:g.map(a=>a.join(''))});
 for(let it=0;it<3000&&n<target;it++){const [x,y]=cells[Math.floor(r()*cells.length)];if(g[y][x]!=='..')continue;
  let best=null,bl=-1;for(const d of ['U','D','L','R']){g[y][x]='E'+d;const st=B.parse({w,h,grid:g.map(a=>a.map(t=>t==='gg'?'..':t).join(''))});const v=st.veh.find(q=>q.x===x&&q.y===y);const t=B.ray(st,v,x,y,d);
   if(t.ok){const l=t.path.length+r()*sp.rand;if(l>bl){bl=l;best=d;}}g[y][x]='..';}
  if(best){g[y][x]='E'+best;n++;}}
 // assign vehicle types
 const pool=sp.types||'EEETKA';
 for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(g[y][x][0]==='E'&&!(sp.fixed||[]).some(f=>f[0]===x&&f[1]===y))g[y][x]=pool[Math.floor(r()*pool.length)]+g[y][x][1];
 return grid();}
const specs=JSON.parse(fs.readFileSync(process.argv[2]));const out=[];const only=process.argv[3]?+process.argv[3]:null;
function okC(sp,L,S){if(!S.solvable)return false;if(!(sp.needTow||sp.needGate))return true;const st=B.parse(L);const s2=B.parse(L);let tow=0;S.order.forEach(o=>{const v=s2.veh.find(q=>!q.gone&&q.x===o.x&&q.y===o.y);const t=B.trace(s2,v);if(t.tow)tow++;B.apply(s2,v,t);});if(sp.needTow&&!tow)return false;if(sp.needGate&&!s2.gatesOpen)return false;
 if(sp.needGate&&!st.veh.some(v=>{const t=B.trace(st,v);return !t.ok&&t.blocker&&t.blocker.kind==='gate';}))return false;return true;}
function sc(sp,S){return -Math.abs(S.avgFree-sp.avg)*6-Math.abs(S.startFree-sp.start)*2+S.total*.3+S.oneChoice*(sp.hard?1:0);}
function climb(sp,L,seed){const r=rng(seed);let cur=L,cs=sc(sp,B.solve(L));const fx=new Set((sp.fixed||[]).map(f=>f[0]+','+f[1]));
 for(let it=0;it<600;it++){const g=cur.grid.map(row=>row.match(/../g));const y=Math.floor(r()*cur.h),x=Math.floor(r()*cur.w);if(fx.has(x+','+y)||!'EKTAVPCW'.includes(g[y][x][0]))continue;
  g[y][x]=g[y][x][0]+'UDLR'[Math.floor(r()*4)];const N={w:cur.w,h:cur.h,grid:g.map(a=>a.join(''))};const S=B.solve(N);if(!okC(sp,N,S))continue;const v=sc(sp,S);if(v>=cs){cs=v;cur=N;}}
 return cur;}
specs.forEach((sp,i)=>{if(only!==null&&i!==only)return;let best=null;for(let s=1;s<(sp.tries||500);s++){const L=gen(sp,s*7919+i*31);const S=B.solve(L);if(!S.solvable)continue;
  const st=B.parse(L);
  if(sp.needTow||sp.needGate){const s2=B.parse(L);let tow=0;S.order.forEach(o=>{const v=s2.veh.find(q=>!q.gone&&q.x===o.x&&q.y===o.y);const t=B.trace(s2,v);if(t.tow)tow++;B.apply(s2,v,t);});if(sp.needTow&&!tow)continue;if(sp.needGate&&!s2.gatesOpen)continue;
   // gate must matter: initially at least one vehicle blocked by a gate
   if(sp.needGate&&!st.veh.some(v=>{const t=B.trace(st,v);return !t.ok&&t.blocker&&t.blocker.kind==='gate';}))continue;}
  const score=-Math.abs(S.avgFree-sp.avg)*6-Math.abs(S.startFree-sp.start)*2+S.total*.3+S.oneChoice*(sp.hard?1:0);
  if(!best||score>best.score)best={score,L,S};}
 if(!best){console.log('L'+(i+1),'FAILED');return;}best.L=climb(sp,best.L,i+5);best.S=B.solve(best.L);
 console.log('L'+(i+1),best.L.w+'x'+best.L.h,'n',best.S.total,'start',best.S.startFree,'avg',best.S.avgFree.toFixed(2),'one',best.S.oneChoice);out[i]=best.L;});
fs.writeFileSync(only!==null?'draft'+only+'.json':'draft.json',JSON.stringify(out));
