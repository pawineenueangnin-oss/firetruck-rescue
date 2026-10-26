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
