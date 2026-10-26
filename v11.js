// Firetruck Rescue v11 — endless mode glue (zone story beats, pre-generation, save migration).
(function(){
window.isLastLv=i=>i===29&&!(SAVE.seen&&SAVE.seen.ending);
if(!SAVE.v11){SAVE.v11=1;try{persist();}catch(e){}}// migration: old saves keep stars/xp; endless unlocks after level 30
const ZFX=['embers','fireflies','rain','embers','lanterns'];
const _sl=window.startLevel;
window.startLevel=function(i,sk){
 if(i>=30&&window.FTX){FTX.ensure(i);const L=LEVELS[i];const z=L.zone;
  if(!sk&&(i-30)%10===0&&!SAVE.seen['z'+z]){SAVE.seen['z'+z]=1;persist();const S=window.__ft.SEQS;const im='c'+L.ch;
   S['z'+z]=[{im,cap:['zb'+(z%10)],d:4.8,kb:[.5,.45,1.02,.5,.5,1.22],fx:ZFX[z%5],grade:['night','dawn','storm','dusk'][L.zt]}];
   playSeq('z'+z,()=>window.startLevel(i,true));return;}}
 _sl(i,sk);
 if(G&&G.i===i&&window.FTX)setTimeout(()=>{try{FTX.ensure(i+1);}catch(e){}},1200);};
window.__ft.start=(i,sk)=>window.startLevel(i,sk);
})();

// v19: continuous endless story — one ~4s beat after EVERY endless level (4 rotating 10-beat arcs, one per zone),
// plus a boss pre-scene before each zone's boss level. Built lazily (no pre-generation); played once per level via S3.beats[i].
(function(){
 const ARC=[{im:['c2','c2','sc_cat1','i3','c2','c2','i4','sc_cat2','c1','e2'],fx:['lanterns','embers','lanterns','embers','fireflies','lanterns','alarm','lanterns','embers','sparkle'],gr:['night','night','warm','dusk','warm','dusk','night','warm','night','dawn'],boss:'b2'},
  {im:['c5','i5','sc_crash2','bg3','sc_cat3','sc_hurt2','i4','c5','c5','e1'],fx:['rain','rain','sparks','rain','rain','alarm','rain','fog','rain','sparkle'],gr:['storm','storm','storm','cool','warm','storm','storm','fog','storm','dawn'],boss:'b4'},
  {im:['bg1','sc_cat4','c4','c4','sc_cat2','c4','sc_hurt3','c4','c4','e3'],fx:['ash','embers','ash','ash','fireflies','embers','ash','embers','embers','sparkle'],gr:['warm','warm','dusk','dusk','warm','dusk','warm','night','dusk','dawn'],boss:'b3'},
  {im:['c3','sc_crash1','sc_crash3','bg2','i2','c3','sc_hurt1','c3','c3','e2'],fx:['sparks','sparks','fog','sparkle','embers','alarm','sparks','fog','sparks','confetti'],gr:['night','warm','cool','dawn','warm','night','night','fog','night','dawn'],boss:'b1'}];
 const KBS=[[.5,.45,1.02,.5,.5,1.22],[.35,.6,1.3,.55,.45,1.05],[.65,.4,1.1,.4,.55,1.32],[.5,.7,1.35,.5,.35,1.08],[.4,.5,1.05,.6,.5,1.28]];
 const arcOf=i=>Math.floor((i-30)/10)%4,kOf=i=>(i-30)%10;
 const sfx=(a,k)=>k===9?[[.4,()=>AU.win&&AU.win()]]:(k===8?[[.3,()=>AU.siren&&AU.siren(2,0,0)]]:[]);
 window.FT_ENDLESS_BEAT=function(i){const a=arcOf(i),k=kOf(i),A=ARC[a];const name='s'+(i+1);
  window.__ft.SEQS[name]=[{im:A.im[k],cap:['eb'+(a*10+k)],d:4.2,kb:KBS[(i*7+k)%5],fx:A.fx[k],grade:A.gr[k],sfx:sfx(a,k)}];return name;};
 window.FT_BOSS_PRE=function(i){const a=arcOf(i),name='bp'+(i+1);window.__ft.SEQS[name]=[{im:['c1','c5','c4','c3'][a],cap:['ebb'+a],d:4.4,kb:[.5,.5,1.3,.5,.45,1.05],fx:'embers',grade:'night',sfx:[[.2,()=>AU.siren&&AU.siren(2.2,0,0)]]}];return name;};
 const _ps=window.playSeq;
 window.playSeq=function(name,done){const m=/^s(\d+)$/.exec(name||'');if(m&&+m[1]>30&&!window.__ft.SEQS[name])window.FT_ENDLESS_BEAT(+m[1]-1);return _ps(name,done);};
 const _st=window.startLevel;
 window.startLevel=function(i,sk){if(i>=30&&!sk&&window.FTX){FTX.ensure(i);const L=LEVELS[i];const S3=window.__ft.S3;
   if(L&&L.boss&&S3&&!(S3.boss&&S3.boss['p'+i])&&!((i-30)%10===0&&!SAVE.seen['z'+L.zone])){S3.boss['p'+i]=1;persist();playSeq(window.FT_BOSS_PRE(i),()=>_st(i,true));return;}}
  return _st(i,sk);};
 window.__ft.start=(i,sk)=>window.startLevel(i,sk);
})();
// v19: never start a story beat underneath an interstitial (web preview overlay or hidden page while a native ad is up); wait until it closes.
(function(){const _ps=window.playSeq;window.playSeq=function(n,d){const busy=()=>document.querySelector('.adI')||document.hidden;if(!busy())return _ps(n,d);let k=0;const w=()=>{if(busy()&&k++<600){setTimeout(w,150);return;}setTimeout(()=>_ps(n,d),250);};w();};})();
