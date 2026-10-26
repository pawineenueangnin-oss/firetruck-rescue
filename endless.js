// Firetruck Rescue v11 — ENDLESS mode: deterministic procedural levels after the 30 hand-made ones.
// Every level is built by reverse construction, then proven solvable with the same solver (logic.js) the game uses.
// Works in the browser (window.FTX) and in node (module.exports) for offline validation.
(function(root){
const B=root.FTLogic||(typeof require!=='undefined'?require('./logic.js'):null);
const BASE=30;
function rng(s){s=s>>>0||1;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};}
const SC=['fire','crash','fire','cat','fire','hurt','crash','fire','cat','fire'];
const THEME=[2,3,1,4,5];
// difficulty spec for endless index n (0 = level 31). Ramps for ~150 levels, then stays at the cap with varied mechanics.
function spec(n){const z=Math.floor(n/10),boss=n%10===9,d=Math.min(1,n/150);
 const w=Math.min(7,5+Math.floor((n+6)/14)),h=Math.min(9,6+Math.floor((n+4)/9)+(boss?1:0));
 return {n,z,boss,w,h:Math.min(9,h),d,
  fill:Math.min(.8,.52+d*.24+(boss?.04:0)),
  debris:Math.min(4,1+Math.floor(n/12)+(boss?1:0)),
  bars:Math.min(3,(n%4===1?1:0)+Math.floor(n/30)),cones:Math.min(3,(n%3===0?1:0)+Math.floor(n/40)),
  parked:n>=3&&n%3!==1?Math.min(3,1+Math.floor(n/40)):0,
  hyd:1+(n%2),turns:n>=1?Math.min(4,1+Math.floor(n/10)):0,
  gate:n>=5&&(n%3===2||boss),
  avg:Math.max(1.4,2.6-d*1.1-(boss?.25:0)),rnd:Math.max(.6,2.2-d*1.6),start:Math.max(1,3-Math.floor(n/25)),
  types:'EEKKTTA'+(n>=3?'W':'')+(n>=8?'V':'')+(n>=12?'P':'')+(n>=16?'C':'')};}
function build(sp,seed){const r=rng(seed);const {w,h}=sp;const g=Array.from({length:h},()=>Array(w).fill('..'));
 const empty=()=>{const c=[];for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(g[y][x]==='..')c.push([x,y]);return c;};
 const put=(t,ok)=>{const c=empty().filter(p=>!ok||ok(p));if(!c.length)return null;const p=c[Math.floor(r()*c.length)];g[p[1]][p[0]]=t;return p;};
 const inner=p=>p[0]>0&&p[1]>0&&p[0]<w-1&&p[1]<h-1;
 if(sp.gate){const vert=r()<.5;if(vert){const x=1+Math.floor(r()*(w-2)),y=1+Math.floor(r()*(h-3));g[y][x]='gg';g[y+1][x]='gg';}else{const y=1+Math.floor(r()*(h-2)),x=1+Math.floor(r()*(w-3));g[y][x]='gg';g[y][x+1]='gg';}put('s.',inner);}
 for(let i=0;i<sp.debris;i++)put('dd',inner);for(let i=0;i<sp.bars;i++)put('xx');for(let i=0;i<sp.cones;i++)put('oo');
 for(let i=0;i<sp.parked;i++)put('##',inner);for(let i=0;i<sp.hyd;i++)put('h.');
 for(let i=0;i<sp.turns;i++)put('t'+'UDLR'[Math.floor(r()*4)],inner);
 const fixed=new Set();for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(g[y][x]!=='..')fixed.add(x+','+y);
 const cells=empty();const target=Math.round(cells.length*sp.fill);let n=0;
 const L=()=>({w,h,grid:g.map(a=>a.join(''))});const open=()=>({w,h,grid:g.map(a=>a.map(t=>t==='gg'?'..':t).join(''))});
 // greedy "block the free ones": each new vehicle goes on a cell that lies on the exit path of as many currently-free vehicles as possible,
 // and points along a currently clear exit, so reverse placement order is always a valid solution.
 for(let it=0;it<target*3&&n<target;it++){const st=B.parse(open());const cov={};
  st.veh.forEach(v=>{const t=B.ray(st,v,v.x,v.y,v.d);if(t.ok)t.path.forEach(p=>{const k=p.x+','+p.y;cov[k]=(cov[k]||0)+1;});});
  const cand=empty().map(p=>[p,(cov[p[0]+','+p[1]]||0)+r()*sp.rnd]).sort((a,b)=>b[1]-a[1]);let placed=false;
  for(const [[x,y]] of cand.slice(0,10)){let best=null,bl=-1;
   for(const d of 'UDLR'){g[y][x]='E'+d;const s2=B.parse(open());const v=s2.veh.find(q=>q.x===x&&q.y===y);const t=B.ray(s2,v,x,y,d);if(t.ok){const l=t.path.length+r()*2;if(l>bl){bl=l;best=d;}}g[y][x]='..';}
   if(best){g[y][x]='E'+best;n++;placed=true;break;}}
  if(!placed)break;}
 let tow=sp.parked>0;const pool=sp.types;
 for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(g[y][x][0]==='E')g[y][x]=pool[Math.floor(r()*pool.length)]+g[y][x][1];
 if(tow){// a tow truck aimed at each parked car where possible (so the tow mechanic matters)
  const st=B.parse(L());st.blk.filter(b=>b.sub==='#').forEach(b=>{const v=st.veh.find(v=>{const t=B.ray(st,v,v.x,v.y,v.d);return !t.ok&&t.blocker===b;});if(v)g[v.y][v.x]='W'+v.d;});}
 return {L:L(),fixed};}
function check(sp,L,S){if(!S.solvable)return false;if(!(sp.parked||sp.gate))return true;
 const st=B.parse(L);const s2=B.parse(L);let tow=0;S.order.forEach(o=>{const v=s2.veh.find(q=>!q.gone&&q.x===o.x&&q.y===o.y);const t=B.trace(s2,v);if(t.tow)tow++;B.apply(s2,v,t);});
 return true;}
const score=(sp,S)=>-Math.abs(S.avgFree-sp.avg)*6-Math.abs(S.startFree-sp.start)*2+S.total*.35+S.oneChoice*(.4+sp.d);
function climb(sp,L,fixed,seed,its){const r=rng(seed);let cur=L,cs=score(sp,B.solve(L));
 for(let it=0;it<its;it++){const g=cur.grid.map(row=>row.match(/../g));const y=Math.floor(r()*cur.h),x=Math.floor(r()*cur.w);if(fixed.has(x+','+y)||!'EKTAVPCW'.includes(g[y][x][0]))continue;
  g[y][x]=g[y][x][0]+'UDLR'[Math.floor(r()*4)];const N={w:cur.w,h:cur.h,grid:g.map(a=>a.join(''))};const S=B.solve(N);if(!check(sp,N,S))continue;const v=score(sp,S);if(v>=cs){cs=v;cur=N;}}
 return cur;}
const cache={};
function make(i){if(cache[i])return cache[i];const n=i-BASE;const sp=spec(n);let best=null;
 for(let k=0;k<40&&(!best||k<16);k++){const seed=(i*2654435761+k*40503)>>>0;let o=build(sp,seed),S=B.solve(o.L);
  if(!check(sp,o.L,S)){// relax: drop the gate/tow requirement rather than fail
   continue;}
  const sc=score(sp,S);if(!best||sc>best.sc)best={sc,L:o.L,fixed:o.fixed,seed};}
 if(!best){const sp2=Object.assign({},sp,{gate:false,parked:0});for(let k=0;k<200&&!best;k++){const o=build(sp2,(i*7919+k)>>>0);const S=B.solve(o.L);if(S.solvable)best={L:o.L,fixed:o.fixed,seed:k};}}
 let L=climb(sp,best.L,best.fixed,best.seed^0x5bd1,500);
 const out={w:L.w,h:L.h,grid:L.grid,ch:THEME[sp.z%5],boss:sp.boss,endless:1,zone:sp.z,zt:sp.z%4,scn:sp.boss?'fire':SC[(n+sp.z*3)%10]};
 if(n===0)out.tip='tDebris';else if(sp.boss)out.tip='tBoss';
 cache[i]=out;return out;}
// make LEVELS[i] exist on demand (LEVELS is a plain array; endless levels are appended as needed)
function ensure(i){if(typeof LEVELS==='undefined'||i<BASE)return;if(!LEVELS[i])LEVELS[i]=make(i);}// sparse: each endless level is seeded independently
const api={BASE,spec,make,ensure,isBoss:i=>i>=BASE?(i-BASE)%10===9:!!(typeof LEVELS!=='undefined'&&LEVELS[i]&&LEVELS[i].boss),zoneOf:i=>i>=BASE?Math.floor((i-BASE)/10):-1};
if(typeof module!=='undefined')module.exports=api;else root.FTX=api;
})(this);
