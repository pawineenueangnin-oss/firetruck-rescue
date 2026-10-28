// Credits & open-source licences overlay (settings → Licences). EN/TH, other languages fall back to EN.
(function(){
const L={en:{t:'Credits & Licences',b:'Licences',c:'Close'},th:{t:'เครดิตและสัญญาอนุญาต',b:'สัญญาอนุญาต',c:'ปิด'}};
window.licT=k=>{const l=(typeof LANG!=='undefined'&&LANG)||'en';return (L[l]||L.en)[k];};
window.showLicenses=function(){let o=document.getElementById('licOv');if(!o){o=document.createElement('div');o.id='licOv';
 o.style.cssText='position:fixed;inset:0;z-index:9999;background:rgba(10,8,20,.78);display:flex;align-items:center;justify-content:center;padding:max(12px,env(safe-area-inset-top)) 12px 12px';
 document.body.appendChild(o);}
 const lang=(typeof LANG!=='undefined'&&LANG==='th')?'th':'en';
 o.innerHTML=`<div style="background:#fff8ef;border-radius:18px;width:min(560px,100%);height:min(86vh,900px);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.5)">
 <div style="font:900 20px GameFont,system-ui,sans-serif;color:#3a0a04;padding:14px 16px 6px;text-align:center">${licT('t')}</div>
 <iframe src="licenses.html?embed=1&lang=${lang}" style="flex:1;border:0;width:100%;background:#fff8ef" title="licences"></iframe>
 <button class="btn green" id="lcClose" style="margin:10px auto 14px">${licT('c')}</button></div>`;
 o.style.display='flex';document.getElementById('lcClose').onclick=()=>{o.style.display='none';o.innerHTML='';};};
})();
