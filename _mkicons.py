from PIL import Image,ImageFilter,ImageDraw,ImageChops
import os
S='store/';R=S+'src/';os.makedirs(S+'icon/android',exist_ok=True)
bg=Image.open(R+'bg_raw.jpg').convert('RGB');bg=bg.crop((60,60,964,964)).resize((1024,1024),Image.LANCZOS);bg.save(R+'bg_1024.png')
tr=Image.open(R+'truck_cut.png').convert('RGBA')
def place(canvas,frac,cy=0.5):
  W=canvas.size[0];h=int(W*frac);w=int(tr.size[0]*h/tr.size[1]);t=tr.resize((w,h),Image.LANCZOS)
  x=(W-w)//2;y=int(W*cy-h/2)
  sh=Image.new('RGBA',canvas.size,(0,0,0,0));a=t.split()[3].point(lambda v:int(v*.45));blk=Image.new('RGBA',t.size,(60,0,0,255));blk.putalpha(a);sh.paste(blk,(x,y+int(W*.025)),blk);sh=sh.filter(ImageFilter.GaussianBlur(W*.018))
  canvas.alpha_composite(sh);canvas.alpha_composite(t,(x,y));return canvas
def full(N,frac=.84):
  c=bg.convert('RGBA');place(c,frac,.52);return c.resize((N,N),Image.LANCZOS)
ic=full(1024);ic.convert('RGB').resize((512,512),Image.LANCZOS).save(S+'icon/play-icon-512.png',optimize=True)
# adaptive: 108dp canvas, safe zone 66dp circle -> truck height ~ 0.56
fg=Image.new('RGBA',(1024,1024),(0,0,0,0));place(fg,.56,.5);fg.save(S+'icon/adaptive-foreground-1024.png')
bg.save(S+'icon/adaptive-background-1024.png')
m=Image.new('RGBA',(1024,1024),(0,0,0,0));a=fg.split()[3].point(lambda v:255 if v>100 else 0)
# monochrome: silhouette with inner detail cut-outs from dark areas
g=fg.convert('L');detail=g.point(lambda v:255 if v>70 else 0);mask=ImageChops.multiply(a,detail).filter(ImageFilter.MedianFilter(5))
m.paste((255,255,255,255),(0,0),mask);m.save(S+'icon/adaptive-monochrome-1024.png')
# preview composite of adaptive with circle and squircle masks
def maskshape(img,shape):
  N=img.size[0];mk=Image.new('L',(N*4,N*4),0);d=ImageDraw.Draw(mk)
  if shape=='circle':d.ellipse((0,0,N*4,N*4),255)
  else:d.rounded_rectangle((0,0,N*4,N*4),int(N*4*.3),255)
  mk=mk.resize((N,N),Image.LANCZOS);o=Image.new('RGBA',(N,N),(0,0,0,0));o.paste(img,(0,0),mk);return o
ad=bg.convert('RGBA');ad.alpha_composite(fg)
# 108dp layer shown at 72dp viewport -> crop centre 2/3
crop=lambda im:im.crop((171,171,853,853))
dens={'mdpi':1,'hdpi':1.5,'xhdpi':2,'xxhdpi':3,'xxxhdpi':4}
for d,k in dens.items():
  p=S+f'icon/android/res/mipmap-{d}/';os.makedirs(p,exist_ok=True);n=int(48*k);L=int(108*k)
  leg=maskshape(full(1024,.80),'sq').resize((n,n),Image.LANCZOS);leg.save(p+'ic_launcher.png',optimize=True)
  maskshape(crop(ad),'circle').resize((n,n),Image.LANCZOS).save(p+'ic_launcher_round.png',optimize=True)
  fg.resize((L,L),Image.LANCZOS).save(p+'ic_launcher_foreground.png',optimize=True)
  bg.resize((L,L),Image.LANCZOS).save(p+'ic_launcher_background.png',optimize=True)
  m.resize((L,L),Image.LANCZOS).save(p+'ic_launcher_monochrome.png',optimize=True)
p=S+'icon/android/res/mipmap-anydpi-v26/';os.makedirs(p,exist_ok=True)
x='<?xml version="1.0" encoding="utf-8"?>\n<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n  <background android:drawable="@mipmap/ic_launcher_background"/>\n  <foreground android:drawable="@mipmap/ic_launcher_foreground"/>\n  <monochrome android:drawable="@mipmap/ic_launcher_monochrome"/>\n</adaptive-icon>\n'
open(p+'ic_launcher.xml','w').write(x);open(p+'ic_launcher_round.xml','w').write(x)
# PWA
full(1024,.84).convert('RGB').resize((512,512),Image.LANCZOS).save('icon-512.png',optimize=True)
full(1024,.84).convert('RGB').resize((192,192),Image.LANCZOS).save('icon-192.png',optimize=True)
mk=bg.convert('RGBA');place(mk,.62,.5)  # maskable: within 80% safe circle
mk.convert('RGB').resize((512,512),Image.LANCZOS).save('icon-maskable-512.png',optimize=True);mk.convert('RGB').resize((192,192),Image.LANCZOS).save('icon-maskable-192.png',optimize=True)
# preview sheet
sheet=Image.new('RGBA',(1400,420),(240,240,245,255));dd=ImageDraw.Draw(sheet)
items=[maskshape(full(1024,.84),'sq'),maskshape(crop(ad),'circle'),maskshape(crop(ad),'sq'),maskshape(mk,'circle')]
for i,it in enumerate(items):sheet.alpha_composite(it.resize((300,300),Image.LANCZOS),(30+i*340,20))
mono=Image.new('RGBA',(1024,1024),(40,70,60,255));mono.alpha_composite(m.copy());mono=maskshape(crop(mono),'circle')
for i,s in enumerate([96,72,48]):
  sheet.alpha_composite(full(1024,.84).resize((s,s),Image.LANCZOS),(60+i*120,330));sheet.alpha_composite(mono.resize((s,s),Image.LANCZOS),(700+i*120,330))
sheet.save(S+'icon/icon-preview.png')
