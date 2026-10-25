// Firetruck Rescue — shared board logic (browser + node). Original code by P-Prece Studio.
// Cell tokens (2 chars): ".." road, "E?"/"K?"/"T?"/"A?"/"V?"/"P?"/"C?"/"W?" vehicle + dir (U/D/L/R),
// "##" parked car, "xx" barrier, "oo" cone, "h." hydrant, "t?" turn arrow, "gg" gate, "s." gate switch.
(function(root){
const DIRS={U:[0,-1],D:[0,1],L:[-1,0],R:[1,0]},OPP={U:'D',D:'U',L:'R',R:'L'};
const VT='EKTAVPCW';
function parse(L){const st={w:L.w,h:L.h,occ:{},veh:[],blk:[],turn:{},hyd:[],sw:[],gates:[],gatesOpen:false};
 L.grid.forEach((row,y)=>{for(let x=0;x<L.w;x++){const t=row.substr(x*2,2),k=x+','+y,a=t[0],b=t[1];
  if(VT.includes(a)&&'UDLR'.includes(b)){const v={id:st.veh.length,x,y,d:b,type:a,gone:false,kind:'veh'};st.veh.push(v);st.occ[k]=v;}
  else if(t==='##'||t==='xx'||t==='oo'){const o={x,y,kind:'blk',sub:t[0],gone:false};st.blk.push(o);st.occ[k]=o;}
  else if(t==='gg'){const g={x,y,kind:'gate'};st.gates.push(g);st.occ[k]=g;}
  else if(a==='t')st.turn[k]=b;else if(t==='h.')st.hyd.push({x,y,got:false});else if(t==='s.')st.sw.push({x,y});}});
 return st;}
function ray(st,v,x,y,d,ignore){const path=[],seen={};let hyd=[],sw=false;
 for(let i=0;i<200;i++){const [dx,dy]=DIRS[d];x+=dx;y+=dy;
  if(x<0||y<0||x>=st.w||y>=st.h)return{ok:true,path,hyd,sw,d};
  const k=x+','+y,o=st.occ[k];if(o&&o!==v&&o!==ignore)return{ok:false,path,blocker:o,hyd:[],sw:false};
  const hi=st.hyd.findIndex(h=>!h.got&&h.x===x&&h.y===y);if(hi>=0&&!hyd.includes(hi))hyd.push(hi);
  if(st.sw.some(s=>s.x===x&&s.y===y))sw=true;
  if(st.turn[k])d=st.turn[k];const sk=k+d;if(seen[sk])return{ok:false,path,loop:true,blocker:null,hyd:[],sw:false};seen[sk]=1;
  path.push({x,y,d});}
 return{ok:false,path,loop:true,hyd:[],sw:false};}
// trace: what happens when vehicle v is tapped
function trace(st,v){const r=ray(st,v,v.x,v.y,v.d);
 if(!r.ok&&v.type==='W'&&r.blocker&&r.blocker.kind==='blk'&&r.blocker.sub==='#'){ // tow: hook the parked car and haul it out backwards
  const back=ray(st,v,v.x,v.y,OPP[v.d],r.blocker);if(back.ok)return{ok:true,tow:r.blocker,fwd:r.path,path:back.path,hyd:back.hyd.concat(r.hyd),sw:back.sw||r.sw,d:back.d};
  return{ok:false,path:r.path,blocker:r.blocker,towFail:true,hyd:[],sw:false};}
 return r;}
function apply(st,v,t){v.gone=true;delete st.occ[v.x+','+v.y];if(t.tow){t.tow.gone=true;delete st.occ[t.tow.x+','+t.tow.y];}
 t.hyd.forEach(i=>st.hyd[i].got=true);if(t.sw&&!st.gatesOpen){st.gatesOpen=true;st.gates.forEach(g=>delete st.occ[g.x+','+g.y]);}}
function free(st){return st.veh.filter(v=>!v.gone&&trace(st,v).ok);}
// Monotone puzzle (moves only ever open paths) → greedy solve is complete.
function solve(L){const st=parse(L);const order=[],frees=[];
 while(true){const f=free(st);if(!f.length)break;frees.push(f.length);const v=f[0];order.push({x:v.x,y:v.y});apply(st,v,trace(st,v));}
 const left=st.veh.filter(v=>!v.gone).length;
 return{solvable:left===0,order,total:st.veh.length,maxFree:Math.max(...frees),minFree:Math.min(...frees),avgFree:frees.reduce((a,b)=>a+b,0)/frees.length,startFree:frees[0],
  oneChoice:frees.filter(f=>f===1).length};}
const api={DIRS,OPP,parse,ray,trace,apply,free,solve};
if(typeof module!=='undefined')module.exports=api;else root.FTLogic=api;
})(this);
