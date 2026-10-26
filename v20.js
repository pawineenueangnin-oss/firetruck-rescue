// v20: compact tool pills + bigger board + adaptive layout for every phone/tablet/landscape (safe-area aware, live re-fit).
(function(){
const css=`
.tool{height:44px;flex:0 1 104px;flex-direction:row;gap:5px;border-radius:22px;padding:0 10px;font-size:12.5px}
.tool .ic{width:20px;height:20px}.tool .tl{line-height:1}
.tool .ad{top:-6px;right:-4px;width:19px;height:15px}
#bHint.free::after{top:-7px;font-size:9px}
#hud .bottom{bottom:calc(6px + var(--banner,0px) + env(safe-area-inset-bottom));gap:8px;padding:0 8px}
#hud .top{top:calc(6px + env(safe-area-inset-top));left:calc(6px + env(safe-area-inset-left));right:calc(6px + env(safe-area-inset-right))}
#hud .fire{top:calc(var(--ftop,200px))}
@media (max-width:340px){.tool{padding:0 7px;font-size:11.5px;gap:3px}.tool .ic{width:18px;height:18px}}
@media (orientation:landscape) and (max-height:500px){#hud .bottom{left:auto;right:calc(6px + env(safe-area-inset-right));flex-direction:column;align-items:stretch;width:118px;bottom:calc(8px + var(--banner,0px) + env(safe-area-inset-bottom))}.tool{flex:none}
 #hud .fire{top:calc(8px + env(safe-area-inset-top))}}
.scr,#pop{max-width:100vw;max-height:100dvh}
`;const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const probe=document.createElement('div');probe.style.cssText='position:fixed;visibility:hidden;pointer-events:none;top:0;left:0;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)';document.body.appendChild(probe);
const SAFE=()=>{const c=getComputedStyle(probe);return{t:parseFloat(c.paddingTop)||0,r:parseFloat(c.paddingRight)||0,b:parseFloat(c.paddingBottom)||0,l:parseFloat(c.paddingLeft)||0};};
window.FT_SAFE=SAFE;
const LAND=()=>W>H*1.15&&H<520;
const toolsTop=()=>{const t=document.getElementById('bHint');if(!t)return H;const r=t.getBoundingClientRect();return r.height?r.top:H;};
window.sceneRect=function(){const s=SAFE();const top=Math.round(52+s.t);const h=LAND()?Math.round(clamp(H*.16,34,60)):Math.round(clamp(H*.1,56,118));return{x:0,y:top,w:W,h};};
window.layout=function(){if(!G)return;const L=G.L;const s=SAFE();const land=LAND();const S=sceneRect();G.S=S;
 const sideR=land?136+s.r:0,sideL=land?s.l+8:0;const PW=W-sideR-sideL;// play width (landscape: tools column on the right)
 const top=S.y+S.h+(land?6:22);const bot=(land?8+s.b+BANNER():Math.max(60+BANNER()+s.b,H-toolsTop()+12));
 const availW=PW-(land?8:10),availH=H-top-bot;
 G.cs=Math.floor(Math.min(availW/L.w,availH/L.h,150));G.bw=G.cs*L.w;G.bh=G.cs*L.h;G.bx=Math.round(sideL+(PW-G.bw)/2);G.by=Math.round(top+(availH-G.bh)/2);G.view={ox:sideL,oy:top-4,w:PW,h:Math.max(80,availH+8)};
 if(window.R3boardRatio&&window.R3&&R3.ok&&!R3.off&&!R3.lost){const Z=land?1:1.05;// slight zoom: crops only the outer kerb, never the cells
  const vw=PW*Z,vx=sideL-(vw-PW)/2;const btm=H-bot,mx=btm-(S.y+(land?40:64));const need=vw*R3boardRatio(L)+Math.min(34,H*.04);
  let vh=Math.max(110,Math.min(mx,need));const spare=mx-vh;// leftover height: give scene up to 24% of screen, rest stays as street props under the board
  const vt=btm-vh;S.h=Math.max(land?30:56,Math.min(vt-(land?6:22)-S.y,Math.round(H*(land?.2:.24))));const vt2=Math.min(vt,S.y+S.h+(land?6:22));vh=btm-vt2;
  G.S=S;G.view={ox:vx,oy:vt2-4,w:vw,h:vh+8};}
 document.documentElement.style.setProperty('--sh',S.h+'px');document.documentElement.style.setProperty('--ftop',(S.y+S.h+2)+'px');
 buildBoard();};
// live re-fit: rotation, URL-bar show/hide, split-screen, foldables
let rq=0;const refit=()=>{cancelAnimationFrame(rq);rq=requestAnimationFrame(()=>{try{window.dispatchEvent(new Event('resize'));}catch(e){}});};
if(window.visualViewport)visualViewport.addEventListener('resize',()=>{if(Math.abs(visualViewport.height-innerHeight)>2||innerWidth!==W||innerHeight!==H)refit();});
addEventListener('orientationchange',()=>{setTimeout(refit,120);setTimeout(refit,450);});
if(screen.orientation&&screen.orientation.addEventListener)screen.orientation.addEventListener('change',()=>setTimeout(refit,150));
// tools size changes (language/font load) → re-fit once
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{if(G)layout();});
if(G)layout();
})();
