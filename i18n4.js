// Firetruck Rescue v8 — hint feedback strings (21 languages). Merged into I18N.
const I18N4_KEYS=['hintOn','noHint','adFail'];
const I18N4_RAW={
en:["Tap the glowing vehicle!","No move available right now","Video not available. Try again later."],
th:["แตะรถที่เรืองแสง!","ตอนนี้ไม่มีรถที่ออกได้","วิดีโอยังไม่พร้อม ลองใหม่ภายหลัง"],
zh:["点击发光的车辆！","现在没有可走的车","视频暂不可用，请稍后再试"],
ja:["光っている車をタップ！","今は動かせる車がありません","動画を再生できません。後でもう一度"],
ko:["빛나는 차량을 탭하세요!","지금은 움직일 수 있는 차가 없어요","영상을 볼 수 없어요. 나중에 다시 시도하세요"],
vi:["Chạm vào xe đang phát sáng!","Hiện không có nước đi nào","Video chưa sẵn sàng. Thử lại sau."],
id:["Ketuk kendaraan yang bersinar!","Belum ada langkah yang bisa","Video tidak tersedia. Coba lagi nanti."],
ms:["Ketik kenderaan yang bercahaya!","Tiada langkah buat masa ini","Video tidak tersedia. Cuba lagi nanti."],
hi:["चमकती गाड़ी पर टैप करें!","अभी कोई चाल उपलब्ध नहीं","वीडियो उपलब्ध नहीं। बाद में फिर कोशिश करें।"],
es:["¡Toca el vehículo que brilla!","Ahora no hay ningún movimiento","Vídeo no disponible. Inténtalo más tarde."],
pt:["Toque no veículo brilhante!","Nenhum movimento disponível agora","Vídeo indisponível. Tente mais tarde."],
fr:["Touche le véhicule qui brille !","Aucun coup possible pour l'instant","Vidéo indisponible. Réessaie plus tard."],
de:["Tippe auf das leuchtende Fahrzeug!","Gerade ist kein Zug möglich","Video nicht verfügbar. Später erneut versuchen."],
it:["Tocca il veicolo che brilla!","Nessuna mossa disponibile ora","Video non disponibile. Riprova più tardi."],
ru:["Нажми на светящуюся машину!","Сейчас нет доступных ходов","Видео недоступно. Попробуй позже."],
tr:["Parlayan araca dokun!","Şu an yapılacak hamle yok","Video kullanılamıyor. Sonra tekrar dene."],
ar:["المس المركبة المتوهجة!","لا توجد حركة متاحة الآن","الفيديو غير متاح. حاول لاحقًا."],
nl:["Tik op het oplichtende voertuig!","Nu is er geen zet mogelijk","Video niet beschikbaar. Probeer later opnieuw."],
pl:["Dotknij świecącego pojazdu!","Teraz brak możliwego ruchu","Wideo niedostępne. Spróbuj później."],
lo:["ແຕະລົດທີ່ເຫຼື້ອມແສງ!","ຕອນນີ້ບໍ່ມີລົດທີ່ອອກໄດ້","ວິດີໂອຍັງບໍ່ພ້ອມ ລອງໃໝ່ພາຍຫຼັງ"],
fil:["I-tap ang kumikinang na sasakyan!","Walang puwedeng galaw ngayon","Walang video. Subukan ulit mamaya."]
};
for(const l in I18N4_RAW){if(I18N4_RAW[l].length!==I18N4_KEYS.length)console.warn('i18n4 len',l);if(!I18N[l])I18N[l]={};I18N4_KEYS.forEach((k,i)=>I18N[l][k]=I18N4_RAW[l][i]);}
