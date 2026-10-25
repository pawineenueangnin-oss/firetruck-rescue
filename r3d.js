(()=>{var Ph=0,Hc=1,Ih=2;var Yl=1,Ec=2,Ln=3,si=0,Ye=1,Dn=2,ei=0,$i=1,On=2,kc=3,Gc=4,Lh=5,vi=100,Dh=101,Uh=102,Nh=103,Fh=104,Oh=200,Bh=201,zh=202,Hh=203,Ja=204,$a=205,kh=206,Gh=207,Vh=208,Wh=209,Xh=210,qh=211,Yh=212,Zh=213,Jh=214,Ka=0,Qa=1,ja=2,ts=3,to=4,eo=5,no=6,io=7,Zl=0,$h=1,Kh=2,ni=0,Qh=1,jh=2,tu=3,eu=4,nu=5,iu=6,bc=7;var Jl=300,es=301,ns=302,so=303,ro=304,na=306,ao=1e3,Mi=1001,oo=1002,cn=1003,su=1004;var Xs=1005;var xn=1006,da=1007;var Si=1008;var Bn=1009,$l=1010,Kl=1011,Ps=1012,wc=1013,Ei=1014,Un=1015,ks=1016,Tc=1017,Ac=1018,is=1020,Ql=35902,jl=1021,th=1022,vn=1023,eh=1024,nh=1025,Ki=1026,ss=1027,ih=1028,Rc=1029,sh=1030,Cc=1031;var Pc=1033,Mr=33776,Sr=33777,Er=33778,br=33779,co=35840,lo=35841,ho=35842,uo=35843,fo=36196,po=37492,mo=37496,go=37808,_o=37809,xo=37810,vo=37811,yo=37812,Mo=37813,So=37814,Eo=37815,bo=37816,wo=37817,To=37818,Ao=37819,Ro=37820,Co=37821,wr=36492,Po=36494,Io=36495,rh=36283,Lo=36284,Do=36285,Uo=36286;var Ar=2300,No=2301,fa=2302,Vc=2400,Wc=2401,Xc=2402;var ru=3200,au=3201;var ah=0,ou=1,jn="",Re="srgb",hi="srgb-linear",Ic="display-p3",ia="display-p3-linear",Rr="linear",Ee="srgb",Cr="rec709",Pr="p3";var Pi=7680;var qc=519,cu=512,lu=513,hu=514,oh=515,uu=516,du=517,fu=518,pu=519,Fo=35044;var Yc="300 es",Nn=2e3,Ir=2001,ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pa=Math.PI/180,Oo=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function mu(i,t){return(i%t+t)%t}function ma(i,t,e){return(1-e)*i+e*t}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var yt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oe=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],C=s[1],b=s[4],T=s[7],V=s[2],B=s[5],N=s[8];return r[0]=a*v+o*C+c*V,r[3]=a*p+o*b+c*B,r[6]=a*m+o*T+c*N,r[1]=l*v+h*C+u*V,r[4]=l*p+h*b+u*B,r[7]=l*m+h*T+u*N,r[2]=d*v+f*C+g*V,r[5]=d*p+f*b+g*B,r[8]=d*m+f*T+g*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ga=new oe;function ch(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gu(){let i=Lr("canvas");return i.style.display="block",i}var Zc={};function Tr(i){i in Zc||(Zc[i]=!0,console.warn(i))}function _u(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function xu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Jc=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$c=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_s={[hi]:{transfer:Rr,primaries:Cr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Re]:{transfer:Ee,primaries:Cr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ia]:{transfer:Rr,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3($c),fromReference:i=>i.applyMatrix3(Jc)},[Ic]:{transfer:Ee,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3($c),fromReference:i=>i.applyMatrix3(Jc).convertLinearToSRGB()}},yu=new Set([hi,ia]),me={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=_s[t].toReference,s=_s[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return _s[i].primaries},getTransfer:function(i){return i===jn?Rr:_s[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(_s[t].luminanceCoefficients)}};function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _a(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ii,Bo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ii===void 0&&(Ii=Lr("canvas")),Ii.width=t.width,Ii.height=t.height;let n=Ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mu=0,Dr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xa(s[a].image)):r.push(xa(s[a]))}else r=xa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Su=0,en=class i extends ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=xn,a=Si,o=vn,c=Bn,l=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Fn(),this.name="",this.source=new Dr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ao:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ao:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Jl;en.DEFAULT_ANISOTROPY=1;var ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,T=(f+1)/2,V=(m+1)/2,B=(h+d)/4,N=(u+v)/4,P=(g+p)/4;return b>T&&b>V?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=B/n,r=N/n):T>V?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=B/s,r=P/s):V<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),n=N/r,s=P/r),this.set(n,s,r,e),this}let C=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(p-g)/C,this.y=(u-v)/C,this.z=(d-h)/C,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zo=class extends ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Dr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ur=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ho=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let p=1-o,m=c*d+l*f+h*g+u*v,C=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let V=Math.sqrt(b),B=Math.atan2(V,m*C);p=Math.sin(p*B)/V,o=Math.sin(o*B)/V}let T=o*C;if(c=c*p+d*T,l=l*p+f*T,h=h*p+g*T,u=u*p+v*T,p===1-o){let V=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=V,l*=V,h*=V,u*=V}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new F,Kc=new ai,Hn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),Ys.subVectors(this.max,xs),Li.subVectors(t.a,xs),Di.subVectors(t.b,xs),Ui.subVectors(t.c,xs),Yn.subVectors(Di,Li),Zn.subVectors(Ui,Di),di.subVectors(Li,Ui);let e=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-di.z,di.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,di.z,0,-di.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-di.y,di.x,0];return!ya(e,Li,Di,Ui,Ys)||(e=[1,0,0,0,1,0,0,0,1],!ya(e,Li,Di,Ui,Ys))?!1:(Zs.crossVectors(Yn,Zn),e=[Zs.x,Zs.y,Zs.z],ya(e,Li,Di,Ui,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},An=[new F,new F,new F,new F,new F,new F,new F,new F],pn=new F,qs=new Hn,Li=new F,Di=new F,Ui=new F,Yn=new F,Zn=new F,di=new F,xs=new F,Ys=new F,Zs=new F,fi=new F;function ya(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);let o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),c=t.dot(fi),l=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Eu=new Hn,vs=new F,Ma=new F,rs=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Eu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);let e=vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Ma)),this.expandByPoint(vs.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new F,Sa=new F,Js=new F,Jn=new F,Ea=new F,$s=new F,ba=new F,Is=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sa.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Sa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Js),o=Jn.dot(this.direction),c=-Jn.dot(Js),l=Jn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sa).addScaledVector(Js,d),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){Ea.subVectors(e,t),$s.subVectors(n,t),ba.crossVectors(Ea,$s);let a=this.direction.dot(ba),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);let c=o*this.direction.dot($s.crossVectors(Jn,$s));if(c<0)return null;let l=o*this.direction.dot(Ea.cross(Jn));if(l<0||c+l>a)return null;let h=-o*Jn.dot(ba);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,p)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bu,t,wu)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),$n.crossVectors(n,je),$n.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),$n.crossVectors(n,je)),$n.normalize(),Ks.crossVectors(je,$n),s[0]=$n.x,s[4]=Ks.x,s[8]=je.x,s[1]=$n.y,s[5]=Ks.y,s[9]=je.y,s[2]=$n.z,s[6]=Ks.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],C=n[3],b=n[7],T=n[11],V=n[15],B=s[0],N=s[4],P=s[8],dt=s[12],_=s[1],S=s[5],$=s[9],Y=s[13],K=s[2],ot=s[6],q=s[10],_t=s[14],j=s[3],Lt=s[7],Rt=s[11],Dt=s[15];return r[0]=a*B+o*_+c*K+l*j,r[4]=a*N+o*S+c*ot+l*Lt,r[8]=a*P+o*$+c*q+l*Rt,r[12]=a*dt+o*Y+c*_t+l*Dt,r[1]=h*B+u*_+d*K+f*j,r[5]=h*N+u*S+d*ot+f*Lt,r[9]=h*P+u*$+d*q+f*Rt,r[13]=h*dt+u*Y+d*_t+f*Dt,r[2]=g*B+v*_+p*K+m*j,r[6]=g*N+v*S+p*ot+m*Lt,r[10]=g*P+v*$+p*q+m*Rt,r[14]=g*dt+v*Y+p*_t+m*Dt,r[3]=C*B+b*_+T*K+V*j,r[7]=C*N+b*S+T*ot+V*Lt,r[11]=C*P+b*$+T*q+V*Rt,r[15]=C*dt+b*Y+T*_t+V*Dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+v*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+p*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+m*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],C=u*p*l-v*d*l+v*c*f-o*p*f-u*c*m+o*d*m,b=g*d*l-h*p*l-g*c*f+a*p*f+h*c*m-a*d*m,T=h*v*l-g*u*l+g*o*f-a*v*f-h*o*m+a*u*m,V=g*u*c-h*v*c-g*o*d+a*v*d+h*o*p-a*u*p,B=e*C+n*b+s*T+r*V;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/B;return t[0]=C*N,t[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*m-n*d*m)*N,t[2]=(o*p*r-v*c*r+v*s*l-n*p*l-o*s*m+n*c*m)*N,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*N,t[4]=b*N,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*N,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*m-e*c*m)*N,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*N,t[8]=T*N,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*m-e*u*m)*N,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*m+e*o*m)*N,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*N,t[12]=V*N,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*p+e*u*p)*N,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*p-e*o*p)*N,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,v=a*h,p=a*u,m=o*u,C=c*l,b=c*h,T=c*u,V=n.x,B=n.y,N=n.z;return s[0]=(1-(v+m))*V,s[1]=(f+T)*V,s[2]=(g-b)*V,s[3]=0,s[4]=(f-T)*B,s[5]=(1-(d+m))*B,s[6]=(p+C)*B,s[7]=0,s[8]=(g+b)*N,s[9]=(p-C)*N,s[10]=(1-(d+v))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ni.set(s[0],s[1],s[2]).length(),a=Ni.set(s[4],s[5],s[6]).length(),o=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);let l=1/r,h=1/a,u=1/o;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Nn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Nn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ir)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Nn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h,g,v;if(o===Nn)g=(a+r)*u,v=-2*u;else if(o===Ir)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ni=new F,mn=new _e,bu=new F(0,0,0),wu=new F(1,1,1),$n=new F,Ks=new F,je=new F,Qc=new _e,jc=new ai,wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jc.setFromEuler(this),this.setFromQuaternion(jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tu=0,tl=new F,Fi=new ai,Cn=new _e,Qs=new F,ys=new F,Au=new F,Ru=new ai,el=new F(1,0,0),nl=new F(0,1,0),il=new F(0,0,1),sl={type:"added"},Cu={type:"removed"},Oi={type:"childadded",child:null},wa={type:"childremoved",child:null},Ve=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new wn,n=new ai,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new oe}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(nl,t)}rotateZ(t){return this.rotateOnAxis(il,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(nl,t)}translateZ(t){return this.translateOnAxis(il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ys,Qs,this.up):Cn.lookAt(Qs,ys,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cu),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new F(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new F,Pn=new F,Ta=new F,In=new F,Bi=new F,zi=new F,rl=new F,Aa=new F,Ra=new F,Ca=new F,Pa=new ve,Ia=new ve,La=new ve,ti=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Pn.subVectors(n,e),Ta.subVectors(t,e);let a=gn.dot(gn),o=gn.dot(Pn),c=gn.dot(Ta),l=Pn.dot(Pn),h=Pn.dot(Ta),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,In.x),c.addScaledVector(a,In.y),c.addScaledVector(o,In.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Pa.setScalar(0),Ia.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Pa,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(La,r.z),a}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Pn.subVectors(t,e),gn.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),gn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Bi.subVectors(s,n),zi.subVectors(r,n),Aa.subVectors(t,n);let c=Bi.dot(Aa),l=zi.dot(Aa);if(c<=0&&l<=0)return e.copy(n);Ra.subVectors(t,s);let h=Bi.dot(Ra),u=zi.dot(Ra);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Bi,a);Ca.subVectors(t,r);let f=Bi.dot(Ca),g=zi.dot(Ca);if(g>=0&&f<=g)return e.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(zi,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return rl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(rl,o);let m=1/(p+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},js={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ce=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=mu(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Da(a,r,t+1/3),this.g=Da(a,r,t),this.b=Da(a,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return me.fromWorkingColorSpace(Xe.copy(this),t),Math.round(qe(Xe.r*255,0,255))*65536+Math.round(qe(Xe.g*255,0,255))*256+Math.round(qe(Xe.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Re){me.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(js);let n=ma(Kn.h,js.h,e),s=ma(Kn.s,js.s,e),r=ma(Kn.l,js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new ce;ce.NAMES=lh;var Pu=0,kn=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=$i,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=$a,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ze=class extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new F,tr=new yt,Ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fo&&(t.usage=this.usage),t}};var Nr=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fr=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},Iu=0,on=new _e,Ua=new Ve,Hi=new F,tn=new Hn,Ms=new Hn,Oe=new F,De=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ch(t)?Fr:Nr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(tn.min,Ms.min),tn.expandByPoint(Oe),Oe.addVectors(tn.max,Ms.max),tn.expandByPoint(Oe)):(tn.expandByPoint(Ms.min),tn.expandByPoint(Ms.max))}tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Oe.fromBufferAttribute(o,l),c&&(Hi.fromBufferAttribute(t,l),Oe.add(Hi)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new F,c[P]=new F;let l=new F,h=new F,u=new F,d=new yt,f=new yt,g=new yt,v=new F,p=new F;function m(P,dt,_){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,dt),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,dt),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[P].add(v),o[dt].add(v),o[_].add(v),c[P].add(p),c[dt].add(p),c[_].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let P=0,dt=C.length;P<dt;++P){let _=C[P],S=_.start,$=_.count;for(let Y=S,K=S+$;Y<K;Y+=3)m(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let b=new F,T=new F,V=new F,B=new F;function N(P){V.fromBufferAttribute(s,P),B.copy(V);let dt=o[P];b.copy(dt),b.sub(V.multiplyScalar(V.dot(dt))).normalize(),T.crossVectors(B,dt);let S=T.dot(c[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,S)}for(let P=0,dt=C.length;P<dt;++P){let _=C[P],S=_.start,$=_.count;for(let Y=S,K=S+$;Y<K;Y+=3)N(t.getX(Y+0)),N(t.getX(Y+1)),N(t.getX(Y+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,u=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},al=new _e,pi=new Is,er=new rs,ol=new F,nr=new F,ir=new F,sr=new F,Na=new F,rr=new F,cl=new F,ar=new F,bt=class extends Ve{constructor(t=new De,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Na.fromBufferAttribute(u,t),a?rr.addScaledVector(Na,h):rr.addScaledVector(Na.sub(e),h))}e.add(rr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(er.containsPoint(pi.origin)===!1&&(pi.intersectSphere(er,ol)===null||pi.origin.distanceToSquared(ol)>(t.far-t.near)**2))&&(al.copy(r).invert(),pi.copy(t.ray).applyMatrix4(al),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],C=Math.max(p.start,f.start),b=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let T=C,V=b;T<V;T+=3){let B=o.getX(T),N=o.getX(T+1),P=o.getX(T+2);s=or(this,m,t,n,l,h,u,B,N,P),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let C=o.getX(p),b=o.getX(p+1),T=o.getX(p+2);s=or(this,a,t,n,l,h,u,C,b,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],C=Math.max(p.start,f.start),b=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let T=C,V=b;T<V;T+=3){let B=T,N=T+1,P=T+2;s=or(this,m,t,n,l,h,u,B,N,P),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let C=p,b=p+1,T=p+2;s=or(this,a,t,n,l,h,u,C,b,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Lu(i,t,e,n,s,r,a,o){let c;if(t.side===Ye?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===si,o),c===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ar);return l<e.near||l>e.far?null:{distance:l,point:ar.clone(),object:i}}function or(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,nr),i.getVertexPosition(c,ir),i.getVertexPosition(l,sr);let h=Lu(i,t,e,n,nr,ir,sr,cl);if(h){let u=new F;ti.getBarycoord(cl,nr,ir,sr,u),s&&(h.uv=ti.getInterpolatedAttribute(s,o,c,l,u,new yt)),r&&(h.uv1=ti.getInterpolatedAttribute(r,o,c,l,u,new yt)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,c,l,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new F,materialIndex:0};ti.getNormal(nr,ir,sr,d.normal),h.face=d,h.barycoord=u}return h}var Me=class i extends De{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function g(v,p,m,C,b,T,V,B,N,P,dt){let _=T/N,S=V/P,$=T/2,Y=V/2,K=B/2,ot=N+1,q=P+1,_t=0,j=0,Lt=new F;for(let Rt=0;Rt<q;Rt++){let Dt=Rt*S-Y;for(let he=0;he<ot;he++){let de=he*_-$;Lt[v]=de*C,Lt[p]=Dt*b,Lt[m]=K,l.push(Lt.x,Lt.y,Lt.z),Lt[v]=0,Lt[p]=0,Lt[m]=B>0?1:-1,h.push(Lt.x,Lt.y,Lt.z),u.push(he/N),u.push(1-Rt/P),_t+=1}}for(let Rt=0;Rt<P;Rt++)for(let Dt=0;Dt<N;Dt++){let he=d+Dt+ot*Rt,de=d+Dt+ot*(Rt+1),st=d+(Dt+1)+ot*(Rt+1),xt=d+(Dt+1)+ot*Rt;c.push(he,de,xt),c.push(de,st,xt),j+=6}o.addGroup(f,j,dt),f+=j,d+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function as(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=as(i[e]);for(let s in n)t[s]=n[s]}return t}function Du(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Uu={clone:as,merge:$e},Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Du(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Or=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qn=new F,ll=new yt,hl=new yt,Be=class extends Or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,ll,hl),e.subVectors(hl,ll)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ki=-90,Gi=1,ko=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(ki,Gi,t,e);s.layers=this.layers,this.add(s);let r=new Be(ki,Gi,t,e);r.layers=this.layers,this.add(r);let a=new Be(ki,Gi,t,e);a.layers=this.layers,this.add(a);let o=new Be(ki,Gi,t,e);o.layers=this.layers,this.add(o);let c=new Be(ki,Gi,t,e);c.layers=this.layers,this.add(c);let l=new Be(ki,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Br=class extends en{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Go=class extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Br(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Me(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:ei});r.uniforms.tEquirect.value=e;let a=new bt(s,r),o=e.minFilter;return e.minFilter===Si&&(e.minFilter=xn),new ko(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Fa=new F,Ou=new F,Bu=new oe,_n=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fa.subVectors(n,e).cross(Ou.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bu.getNormalMatrix(t),s=this.coplanarPoint(Fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},mi=new rs,cr=new F,Ds=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],C=s[13],b=s[14],T=s[15];if(n[0].setComponents(c-r,d-l,p-f,T-m).normalize(),n[1].setComponents(c+r,d+l,p+f,T+m).normalize(),n[2].setComponents(c+a,d+h,p+g,T+C).normalize(),n[3].setComponents(c-a,d-h,p-g,T-C).normalize(),n[4].setComponents(c-o,d-u,p-v,T-b).normalize(),e===Nn)n[5].setComponents(c+o,d+u,p+v,T+b).normalize();else if(e===Ir)n[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zu(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var nn=class i extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let C=m*d-a;for(let b=0;b<l;b++){let T=b*u-r;g.push(T,-C,0),v.push(0,0,1),p.push(b/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let C=0;C<o;C++){let b=C+l*m,T=C+l*(m+1),V=C+1+l*(m+1),B=C+1+l*m;f.push(b,T,B),f.push(T,V,B)}this.setIndex(f),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ku=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ld=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",_d=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Od=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,If=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,up=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:Hu,alphahash_pars_fragment:ku,alphamap_fragment:Gu,alphamap_pars_fragment:Vu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:qu,aomap_pars_fragment:Yu,batching_pars_vertex:Zu,batching_vertex:Ju,begin_vertex:$u,beginnormal_vertex:Ku,bsdfs:Qu,iridescence_fragment:ju,bumpmap_pars_fragment:td,clipping_planes_fragment:ed,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:ad,color_pars_vertex:od,color_vertex:cd,common:ld,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:dd,displacementmap_vertex:fd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,colorspace_fragment:gd,colorspace_pars_fragment:_d,envmap_fragment:xd,envmap_common_pars_fragment:vd,envmap_pars_fragment:yd,envmap_pars_vertex:Md,envmap_physical_pars_fragment:Ld,envmap_vertex:Sd,fog_vertex:Ed,fog_pars_vertex:bd,fog_fragment:wd,fog_pars_fragment:Td,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:Rd,lights_lambert_fragment:Cd,lights_lambert_pars_fragment:Pd,lights_pars_begin:Id,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Od,lights_physical_pars_fragment:Bd,lights_fragment_begin:zd,lights_fragment_maps:Hd,lights_fragment_end:kd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Kd,morphinstance_vertex:Qd,morphcolor_vertex:jd,morphnormal_vertex:tf,morphtarget_pars_vertex:ef,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:af,normal_pars_vertex:of,normal_vertex:cf,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:_f,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:Sf,shadowmap_pars_vertex:Ef,shadowmap_vertex:bf,shadowmask_pars_fragment:wf,skinbase_vertex:Tf,skinning_pars_vertex:Af,skinning_vertex:Rf,skinnormal_vertex:Cf,specularmap_fragment:Pf,specularmap_pars_fragment:If,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:Uf,transmission_pars_fragment:Nf,uv_pars_fragment:Ff,uv_pars_vertex:Of,uv_vertex:Bf,worldpos_vertex:zf,background_vert:Hf,background_frag:kf,backgroundCube_vert:Gf,backgroundCube_frag:Vf,cube_vert:Wf,cube_frag:Xf,depth_vert:qf,depth_frag:Yf,distanceRGBA_vert:Zf,distanceRGBA_frag:Jf,equirect_vert:$f,equirect_frag:Kf,linedashed_vert:Qf,linedashed_frag:jf,meshbasic_vert:tp,meshbasic_frag:ep,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:ap,meshnormal_frag:op,meshphong_vert:cp,meshphong_frag:lp,meshphysical_vert:hp,meshphysical_frag:up,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:xp,sprite_frag:vp},Pt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},En={basic:{uniforms:$e([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:$e([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:$e([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:$e([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:$e([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:$e([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:$e([Pt.points,Pt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:$e([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:$e([Pt.common,Pt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:$e([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:$e([Pt.sprite,Pt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:$e([Pt.common,Pt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:$e([Pt.lights,Pt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};En.physical={uniforms:$e([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var lr={r:0,b:0,g:0},gi=new wn,yp=new _e;function Mp(i,t,e,n,s,r,a){let o=new ce(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?e:t).get(b)),b}function v(C){let b=!1,T=g(C);T===null?m(o,c):T&&T.isColor&&(m(T,1),b=!0);let V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(C,b){let T=g(b);T&&(T.isCubeTexture||T.mapping===na)?(h===void 0&&(h=new bt(new Me(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:as(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,B,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(b.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(gi)),h.material.toneMapped=me.getTransfer(T.colorSpace)!==Ee,(u!==T||d!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new bt(new nn(2,2),new ln({name:"BackgroundMaterial",uniforms:as(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=me.getTransfer(T.colorSpace)!==Ee,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function m(C,b){C.getRGB(lr,hh(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(C,b=1){o.set(C),c=b,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,m(o,c)},render:v,addToRenderList:p}}function Sp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,S,$,Y,K){let ot=!1,q=u(Y,$,S);r!==q&&(r=q,l(r.object)),ot=f(_,Y,$,K),ot&&g(_,Y,$,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ot||a)&&(a=!1,T(_,S,$,Y),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,S,$){let Y=$.wireframe===!0,K=n[_.id];K===void 0&&(K={},n[_.id]=K);let ot=K[S.id];ot===void 0&&(ot={},K[S.id]=ot);let q=ot[Y];return q===void 0&&(q=d(c()),ot[Y]=q),q}function d(_){let S=[],$=[],Y=[];for(let K=0;K<e;K++)S[K]=0,$[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:$,attributeDivisors:Y,object:_,attributes:{},index:null}}function f(_,S,$,Y){let K=r.attributes,ot=S.attributes,q=0,_t=$.getAttributes();for(let j in _t)if(_t[j].location>=0){let Rt=K[j],Dt=ot[j];if(Dt===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(Dt=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(Dt=_.instanceColor)),Rt===void 0||Rt.attribute!==Dt||Dt&&Rt.data!==Dt.data)return!0;q++}return r.attributesNum!==q||r.index!==Y}function g(_,S,$,Y){let K={},ot=S.attributes,q=0,_t=$.getAttributes();for(let j in _t)if(_t[j].location>=0){let Rt=ot[j];Rt===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(Rt=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(Rt=_.instanceColor));let Dt={};Dt.attribute=Rt,Rt&&Rt.data&&(Dt.data=Rt.data),K[j]=Dt,q++}r.attributes=K,r.attributesNum=q,r.index=Y}function v(){let _=r.newAttributes;for(let S=0,$=_.length;S<$;S++)_[S]=0}function p(_){m(_,0)}function m(_,S){let $=r.newAttributes,Y=r.enabledAttributes,K=r.attributeDivisors;$[_]=1,Y[_]===0&&(i.enableVertexAttribArray(_),Y[_]=1),K[_]!==S&&(i.vertexAttribDivisor(_,S),K[_]=S)}function C(){let _=r.newAttributes,S=r.enabledAttributes;for(let $=0,Y=S.length;$<Y;$++)S[$]!==_[$]&&(i.disableVertexAttribArray($),S[$]=0)}function b(_,S,$,Y,K,ot,q){q===!0?i.vertexAttribIPointer(_,S,$,K,ot):i.vertexAttribPointer(_,S,$,Y,K,ot)}function T(_,S,$,Y){v();let K=Y.attributes,ot=$.getAttributes(),q=S.defaultAttributeValues;for(let _t in ot){let j=ot[_t];if(j.location>=0){let Lt=K[_t];if(Lt===void 0&&(_t==="instanceMatrix"&&_.instanceMatrix&&(Lt=_.instanceMatrix),_t==="instanceColor"&&_.instanceColor&&(Lt=_.instanceColor)),Lt!==void 0){let Rt=Lt.normalized,Dt=Lt.itemSize,he=t.get(Lt);if(he===void 0)continue;let de=he.buffer,st=he.type,xt=he.bytesPerElement,Ht=st===i.INT||st===i.UNSIGNED_INT||Lt.gpuType===wc;if(Lt.isInterleavedBufferAttribute){let Ct=Lt.data,Qt=Ct.stride,$t=Lt.offset;if(Ct.isInstancedInterleavedBuffer){for(let it=0;it<j.locationSize;it++)m(j.location+it,Ct.meshPerAttribute);_.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let it=0;it<j.locationSize;it++)p(j.location+it);i.bindBuffer(i.ARRAY_BUFFER,de);for(let it=0;it<j.locationSize;it++)b(j.location+it,Dt/j.locationSize,st,Rt,Qt*xt,($t+Dt/j.locationSize*it)*xt,Ht)}else{if(Lt.isInstancedBufferAttribute){for(let Ct=0;Ct<j.locationSize;Ct++)m(j.location+Ct,Lt.meshPerAttribute);_.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let Ct=0;Ct<j.locationSize;Ct++)p(j.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Ct=0;Ct<j.locationSize;Ct++)b(j.location+Ct,Dt/j.locationSize,st,Rt,Dt*xt,Dt/j.locationSize*Ct*xt,Ht)}}else if(q!==void 0){let Rt=q[_t];if(Rt!==void 0)switch(Rt.length){case 2:i.vertexAttrib2fv(j.location,Rt);break;case 3:i.vertexAttrib3fv(j.location,Rt);break;case 4:i.vertexAttrib4fv(j.location,Rt);break;default:i.vertexAttrib1fv(j.location,Rt)}}}}C()}function V(){P();for(let _ in n){let S=n[_];for(let $ in S){let Y=S[$];for(let K in Y)h(Y[K].object),delete Y[K];delete S[$]}delete n[_]}}function B(_){if(n[_.id]===void 0)return;let S=n[_.id];for(let $ in S){let Y=S[$];for(let K in Y)h(Y[K].object),delete Y[K];delete S[$]}delete n[_.id]}function N(_){for(let S in n){let $=n[S];if($[_.id]===void 0)continue;let Y=$[_.id];for(let K in Y)h(Y[K].object),delete Y[K];delete $[_.id]}}function P(){dt(),a=!0,r!==s&&(r=s,l(r.object))}function dt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:dt,dispose:V,releaseStatesOfGeometry:B,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:p,disableUnusedAttributes:C}}function Ep(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function bp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==vn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){let P=N===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Bn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Un&&!P)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let N=t.get("EXT_clip_control");N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=g>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:C,maxVaryings:b,maxFragmentUniforms:T,vertexTextures:V,maxSamples:B}}function wp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let C=r?0:n,b=C*4,T=m.clippingState||null;c.value=T,T=h(g,d,b,f);for(let V=0;V!==b;++V)T[V]=e[V];m.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let m=f+v*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,T=f;b!==v;++b,T+=4)a.copy(u[b]).applyMatrix4(C,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Tp(i){let t=new WeakMap;function e(a,o){return o===so?a.mapping=es:o===ro&&(a.mapping=ns),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===so||o===ro)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Go(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zr=class extends Or{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zi=4,ul=[.125,.215,.35,.446,.526,.582],yi=20,Oa=new zr,dl=new ce,Ba=null,za=0,Ha=0,ka=!1,xi=(1+Math.sqrt(5))/2,Vi=1/xi,fl=[new F(-xi,Vi,0),new F(xi,Vi,0),new F(-Vi,0,xi),new F(Vi,0,xi),new F(0,xi,-Vi),new F(0,xi,Vi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],os=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,za,Ha),this._renderer.xr.enabled=ka,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:ks,format:vn,colorSpace:hi,depthBuffer:!1},s=pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ap(r)),this._blurMaterial=Rp(r,t,e)}return s}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,s){let o=new Be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(dl),h.toneMapping=ni,h.autoClear=!1;let f=new ze({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new bt(new Me,f),v=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(dl),v=!0);for(let m=0;m<6;m++){let C=m%3;C===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):C===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let b=this._cubeSize;hr(s,C*b,m>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;hr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fl[(s-r-1)%fl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new bt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):yi;p>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yi}`);let m=[],C=0;for(let N=0;N<yi;++N){let P=N/v,dt=Math.exp(-P*P/2);m.push(dt),N===0?C+=dt:N<p&&(C+=2*dt)}for(let N=0;N<m.length;N++)m[N]=m[N]/C;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let T=this._sizeLods[s],V=3*T*(s>b-Zi?s-b+Zi:0),B=4*(this._cubeSize-T);hr(e,V,B,3*T,2*T),c.setRenderTarget(e),c.render(u,Oa)}};function Ap(i){let t=[],e=[],n=[],s=i,r=i-Zi+1+ul.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Zi?c=ul[a-i+Zi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,C=new Float32Array(v*g*f),b=new Float32Array(p*g*f),T=new Float32Array(m*g*f);for(let B=0;B<f;B++){let N=B%3*2/3-1,P=B>2?0:-1,dt=[N,P,0,N+2/3,P,0,N+2/3,P+1,0,N,P,0,N+2/3,P+1,0,N,P+1,0];C.set(dt,v*g*B),b.set(d,p*g*B);let _=[B,B,B,B,B,B];T.set(_,m*g*B)}let V=new De;V.setAttribute("position",new Ue(C,v)),V.setAttribute("uv",new Ue(b,p)),V.setAttribute("faceIndex",new Ue(T,m)),t.push(V),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pl(i,t,e){let n=new zn(i,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rp(i,t,e){let n=new Float32Array(yi),s=new F(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ml(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function gl(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===so||c===ro,h=c===es||c===ns;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new os(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new os(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Pp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ip(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let C=f.array;v=f.version;for(let b=0,T=C.length;b<T;b+=3){let V=C[b+0],B=C[b+1],N=C[b+2];d.push(V,B,B,N,N,V)}}else if(g!==void 0){let C=g.array;v=g.version;for(let b=0,T=C.length/3-1;b<T;b+=3){let V=b+0,B=b+1,N=b+2;d.push(V,B,B,N,N,V)}}else return;let p=new(ch(d)?Fr:Nr)(d,1);p.version=v;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Lp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,v){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/a,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let m=0;for(let C=0;C<g;C++)m+=f[C];for(let C=0;C<v.length;C++)e.update(m,n,v[C])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Dp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Up(i,t,e){let n=new WeakMap,s=new ve;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let dt=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",dt)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let T=o.attributes.position.count*b,V=1;T>t.maxTextureSize&&(V=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let B=new Float32Array(T*V*4*u),N=new Ur(B,T,V,u);N.type=Un,N.needsUpdate=!0;let P=b*4;for(let _=0;_<u;_++){let S=p[_],$=m[_],Y=C[_],K=T*V*4*_;for(let ot=0;ot<S.count;ot++){let q=ot*P;f===!0&&(s.fromBufferAttribute(S,ot),B[K+q+0]=s.x,B[K+q+1]=s.y,B[K+q+2]=s.z,B[K+q+3]=0),g===!0&&(s.fromBufferAttribute($,ot),B[K+q+4]=s.x,B[K+q+5]=s.y,B[K+q+6]=s.z,B[K+q+7]=0),v===!0&&(s.fromBufferAttribute(Y,ot),B[K+q+8]=s.x,B[K+q+9]=s.y,B[K+q+10]=s.z,B[K+q+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new yt(T,V)},n.set(o,d),o.addEventListener("dispose",dt)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Np(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Hr=class extends en{constructor(t,e,n,s,r,a,o,c,l,h=Ki){if(h!==Ki&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=Ei),n===void 0&&h===ss&&(n=is),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},dh=new en,_l=new Hr(1,1),fh=new Ur,ph=new Ho,mh=new Br,xl=[],vl=[],yl=new Float32Array(16),Ml=new Float32Array(9),Sl=new Float32Array(4);function ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xl[s];if(r===void 0&&(r=new Float32Array(s),xl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sa(i,t){let e=vl[t];e===void 0&&(e=new Int32Array(t),vl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Sl.set(n),i.uniformMatrix2fv(this.addr,!1,Sl),Fe(e,n)}}function kp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Ml.set(n),i.uniformMatrix3fv(this.addr,!1,Ml),Fe(e,n)}}function Gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;yl.set(n),i.uniformMatrix4fv(this.addr,!1,yl),Fe(e,n)}}function Vp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Yp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_l.compareFunction=oh,r=_l):r=dh,e.setTexture2D(t||r,s)}function Qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ph,s)}function jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mh,s)}function tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fh,s)}function em(i){switch(i){case 5126:return Fp;case 35664:return Op;case 35665:return Bp;case 35666:return zp;case 35674:return Hp;case 35675:return kp;case 35676:return Gp;case 5124:case 35670:return Vp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return Zp;case 36295:return Jp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return tm}}function nm(i,t){i.uniform1fv(this.addr,t)}function im(i,t){let e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function sm(i,t){let e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function rm(i,t){let e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){let e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function om(i,t){let e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cm(i,t){let e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lm(i,t){i.uniform1iv(this.addr,t)}function hm(i,t){i.uniform2iv(this.addr,t)}function um(i,t){i.uniform3iv(this.addr,t)}function dm(i,t){i.uniform4iv(this.addr,t)}function fm(i,t){i.uniform1uiv(this.addr,t)}function pm(i,t){i.uniform2uiv(this.addr,t)}function mm(i,t){i.uniform3uiv(this.addr,t)}function gm(i,t){i.uniform4uiv(this.addr,t)}function _m(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||dh,r[a])}function xm(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ph,r[a])}function vm(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||mh,r[a])}function ym(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fh,r[a])}function Mm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return cm;case 5124:case 35670:return lm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return ym}}var Vo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=em(e.type)}},Wo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mm(e.type)}},Xo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ga=/(\w+)(\])?(\[|\.)?/g;function El(i,t){i.seq.push(t),i.map[t.id]=t}function Sm(i,t,e){let n=i.name,s=n.length;for(Ga.lastIndex=0;;){let r=Ga.exec(n),a=Ga.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){El(e,l===void 0?new Vo(o,i,t):new Wo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Xo(o),El(e,u)),e=u}}}var ji=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Sm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function bl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Em=37297,bm=0;function wm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Tm(i){let t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(i),n;switch(t===e?n="":t===Pr&&e===Cr?n="LinearDisplayP3ToLinearSRGB":t===Cr&&e===Pr&&(n="LinearSRGBToLinearDisplayP3"),i){case hi:case ia:return[n,"LinearTransferOETF"];case Re:case Ic:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+wm(i.getShaderSource(t),a)}else return s}function Am(i,t){let e=Tm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Rm(i,t){let e;switch(t){case Qh:e="Linear";break;case jh:e="Reinhard";break;case tu:e="Cineon";break;case eu:e="ACESFilmic";break;case iu:e="AgX";break;case bc:e="Neutral";break;case nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ur=new F;function Cm(){me.getLuminanceCoefficients(ur);let i=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Im(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ts(i){return i!==""}function Tl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Al(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(i){return i.replace(Dm,Nm)}var Um=new Map;function Nm(i,t){let e=ae[t];if(e===void 0){let n=Um.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qo(e)}var Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(i){return i.replace(Fm,Om)}function Om(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function zm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ns&&(t="ENVMAP_MODE_REFRACTION"),t}function km(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zl:t="ENVMAP_BLENDING_MULTIPLY";break;case $h:t="ENVMAP_BLENDING_MIX";break;case Kh:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Bm(e),l=zm(e),h=Hm(e),u=km(e),d=Gm(e),f=Pm(e),g=Im(r),v=s.createProgram(),p,m,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`)):(p=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),m=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?ae.tonemapping_pars_fragment:"",e.toneMapping!==ni?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Am("linearToOutputTexel",e.outputColorSpace),Cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=qo(a),a=Tl(a,e),a=Al(a,e),o=qo(o),o=Tl(o,e),o=Al(o,e),a=Rl(a),o=Rl(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=C+p+a,T=C+m+o,V=bl(s,s.VERTEX_SHADER,b),B=bl(s,s.FRAGMENT_SHADER,T);s.attachShader(v,V),s.attachShader(v,B),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function N(S){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(v).trim(),Y=s.getShaderInfoLog(V).trim(),K=s.getShaderInfoLog(B).trim(),ot=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,V,B);else{let _t=wl(s,V,"vertex"),j=wl(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+$+`
`+_t+`
`+j)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Y===""||K==="")&&(q=!1);q&&(S.diagnostics={runnable:ot,programLog:$,vertexShader:{log:Y,prefix:p},fragmentShader:{log:K,prefix:m}})}s.deleteShader(V),s.deleteShader(B),P=new ji(s,v),dt=Lm(s,v)}let P;this.getUniforms=function(){return P===void 0&&N(this),P};let dt;this.getAttributes=function(){return dt===void 0&&N(this),dt};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Em)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=V,this.fragmentShader=B,this}var Wm=0,Yo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zo(t),e.set(t,n)),n}},Zo=class{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}};function Xm(i,t,e,n,s,r,a){let o=new Ls,c=new Yo,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,S,$,Y,K){let ot=Y.fog,q=K.geometry,_t=_.isMeshStandardMaterial?Y.environment:null,j=(_.isMeshStandardMaterial?e:t).get(_.envMap||_t),Lt=j&&j.mapping===na?j.image.height:null,Rt=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let Dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=Dt!==void 0?Dt.length:0,de=0;q.morphAttributes.position!==void 0&&(de=1),q.morphAttributes.normal!==void 0&&(de=2),q.morphAttributes.color!==void 0&&(de=3);let st,xt,Ht,Ct;if(Rt){let vt=En[Rt];st=vt.vertexShader,xt=vt.fragmentShader}else st=_.vertexShader,xt=_.fragmentShader,c.update(_),Ht=c.getVertexShaderID(_),Ct=c.getFragmentShaderID(_);let Qt=i.getRenderTarget(),$t=K.isInstancedMesh===!0,it=K.isBatchedMesh===!0,re=!!_.map,ct=!!_.matcap,R=!!j,Tt=!!_.aoMap,Mt=!!_.lightMap,ft=!!_.bumpMap,wt=!!_.normalMap,mt=!!_.displacementMap,Ot=!!_.emissiveMap,A=!!_.metalnessMap,x=!!_.roughnessMap,X=_.anisotropy>0,tt=_.clearcoat>0,lt=_.dispersion>0,et=_.iridescence>0,Gt=_.sheen>0,At=_.transmission>0,Bt=X&&!!_.anisotropyMap,ue=tt&&!!_.clearcoatMap,gt=tt&&!!_.clearcoatNormalMap,Ut=tt&&!!_.clearcoatRoughnessMap,jt=et&&!!_.iridescenceMap,Kt=et&&!!_.iridescenceThicknessMap,kt=Gt&&!!_.sheenColorMap,U=Gt&&!!_.sheenRoughnessMap,I=!!_.specularMap,O=!!_.specularColorMap,M=!!_.specularIntensityMap,L=At&&!!_.transmissionMap,w=At&&!!_.thicknessMap,D=!!_.gradientMap,H=!!_.alphaMap,W=_.alphaTest>0,Q=!!_.alphaHash,at=!!_.extensions,nt=ni;_.toneMapped&&(Qt===null||Qt.isXRRenderTarget===!0)&&(nt=i.toneMapping);let ut={shaderID:Rt,shaderType:_.type,shaderName:_.name,vertexShader:st,fragmentShader:xt,defines:_.defines,customVertexShaderID:Ht,customFragmentShaderID:Ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:it,batchingColor:it&&K._colorsTexture!==null,instancing:$t,instancingColor:$t&&K.instanceColor!==null,instancingMorph:$t&&K.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Qt===null?i.outputColorSpace:Qt.isXRRenderTarget===!0?Qt.texture.colorSpace:hi,alphaToCoverage:!!_.alphaToCoverage,map:re,matcap:ct,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:Lt,aoMap:Tt,lightMap:Mt,bumpMap:ft,normalMap:wt,displacementMap:f&&mt,emissiveMap:Ot,normalMapObjectSpace:wt&&_.normalMapType===ou,normalMapTangentSpace:wt&&_.normalMapType===ah,metalnessMap:A,roughnessMap:x,anisotropy:X,anisotropyMap:Bt,clearcoat:tt,clearcoatMap:ue,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ut,dispersion:lt,iridescence:et,iridescenceMap:jt,iridescenceThicknessMap:Kt,sheen:Gt,sheenColorMap:kt,sheenRoughnessMap:U,specularMap:I,specularColorMap:O,specularIntensityMap:M,transmission:At,transmissionMap:L,thicknessMap:w,gradientMap:D,opaque:_.transparent===!1&&_.blending===$i&&_.alphaToCoverage===!1,alphaMap:H,alphaTest:W,alphaHash:Q,combine:_.combine,mapUv:re&&p(_.map.channel),aoMapUv:Tt&&p(_.aoMap.channel),lightMapUv:Mt&&p(_.lightMap.channel),bumpMapUv:ft&&p(_.bumpMap.channel),normalMapUv:wt&&p(_.normalMap.channel),displacementMapUv:mt&&p(_.displacementMap.channel),emissiveMapUv:Ot&&p(_.emissiveMap.channel),metalnessMapUv:A&&p(_.metalnessMap.channel),roughnessMapUv:x&&p(_.roughnessMap.channel),anisotropyMapUv:Bt&&p(_.anisotropyMap.channel),clearcoatMapUv:ue&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:gt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:U&&p(_.sheenRoughnessMap.channel),specularMapUv:I&&p(_.specularMap.channel),specularColorMapUv:O&&p(_.specularColorMap.channel),specularIntensityMapUv:M&&p(_.specularIntensityMap.channel),transmissionMapUv:L&&p(_.transmissionMap.channel),thicknessMapUv:w&&p(_.thicknessMap.channel),alphaMapUv:H&&p(_.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(wt||X),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!q.attributes.uv&&(re||H),fog:!!ot,useFog:_.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:re&&_.map.isVideoTexture===!0&&me.getTransfer(_.map.colorSpace)===Ee,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===Ye,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:at&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&_.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function C(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let $ in _.defines)S.push($),S.push(_.defines[$]);return _.isRawShaderMaterial===!1&&(b(S,_),T(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function b(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function T(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function V(_){let S=v[_.type],$;if(S){let Y=En[S];$=Uu.clone(Y.uniforms)}else $=_.uniforms;return $}function B(_,S){let $;for(let Y=0,K=h.length;Y<K;Y++){let ot=h[Y];if(ot.cacheKey===S){$=ot,++$.usedTimes;break}}return $===void 0&&($=new Vm(i,S,_,r),h.push($)),$}function N(_){if(--_.usedTimes===0){let S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function P(_){c.remove(_)}function dt(){c.dispose()}return{getParameters:m,getProgramCacheKey:C,getUniforms:V,acquireProgram:B,releaseProgram:N,releaseShaderCache:P,programs:h,dispose:dt}}function qm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ym(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Il(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),t++,m}function o(u,d,f,g,v,p){let m=a(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(u,d,f,g,v,p){let m=a(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Ym),n.length>1&&n.sort(d||Pl),s.length>1&&s.sort(d||Pl)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Zm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Il,i.set(n,[a])):s>=r.length?(a=new Il,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new ce};break;case"SpotLight":e={position:new F,direction:new F,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Km=0;function Qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jm(i){let t=new Jm,e=$m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new _e,a=new _e;function o(l){let h=0,u=0,d=0;for(let dt=0;dt<9;dt++)n.probe[dt].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,C=0,b=0,T=0,V=0,B=0,N=0;l.sort(Qm);for(let dt=0,_=l.length;dt<_;dt++){let S=l[dt],$=S.color,Y=S.intensity,K=S.distance,ot=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=$.r*Y,u+=$.g*Y,d+=$.b*Y;else if(S.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(S.sh.coefficients[q],Y);N++}else if(S.isDirectionalLight){let q=t.get(S);if(q.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let _t=S.shadow,j=e.get(S);j.shadowIntensity=_t.intensity,j.shadowBias=_t.bias,j.shadowNormalBias=_t.normalBias,j.shadowRadius=_t.radius,j.shadowMapSize=_t.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=ot,n.directionalShadowMatrix[f]=S.shadow.matrix,C++}n.directional[f]=q,f++}else if(S.isSpotLight){let q=t.get(S);q.position.setFromMatrixPosition(S.matrixWorld),q.color.copy($).multiplyScalar(Y),q.distance=K,q.coneCos=Math.cos(S.angle),q.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),q.decay=S.decay,n.spot[v]=q;let _t=S.shadow;if(S.map&&(n.spotLightMap[V]=S.map,V++,_t.updateMatrices(S),S.castShadow&&B++),n.spotLightMatrix[v]=_t.matrix,S.castShadow){let j=e.get(S);j.shadowIntensity=_t.intensity,j.shadowBias=_t.bias,j.shadowNormalBias=_t.normalBias,j.shadowRadius=_t.radius,j.shadowMapSize=_t.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=ot,T++}v++}else if(S.isRectAreaLight){let q=t.get(S);q.color.copy($).multiplyScalar(Y),q.halfWidth.set(S.width*.5,0,0),q.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=q,p++}else if(S.isPointLight){let q=t.get(S);if(q.color.copy(S.color).multiplyScalar(S.intensity),q.distance=S.distance,q.decay=S.decay,S.castShadow){let _t=S.shadow,j=e.get(S);j.shadowIntensity=_t.intensity,j.shadowBias=_t.bias,j.shadowNormalBias=_t.normalBias,j.shadowRadius=_t.radius,j.shadowMapSize=_t.mapSize,j.shadowCameraNear=_t.camera.near,j.shadowCameraFar=_t.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=ot,n.pointShadowMatrix[g]=S.shadow.matrix,b++}n.point[g]=q,g++}else if(S.isHemisphereLight){let q=t.get(S);q.skyColor.copy(S.color).multiplyScalar(Y),q.groundColor.copy(S.groundColor).multiplyScalar(Y),n.hemi[m]=q,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==C||P.numPointShadows!==b||P.numSpotShadows!==T||P.numSpotMaps!==V||P.numLightProbes!==N)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=T+V-B,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=N,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=C,P.numPointShadows=b,P.numSpotShadows=T,P.numSpotMaps=V,P.numLightProbes=N,n.version=Km++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0,p=h.matrixWorldInverse;for(let m=0,C=l.length;m<C;m++){let b=l[m];if(b.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(b.isSpotLight){let T=n.spot[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(b.isRectAreaLight){let T=n.rectArea[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let T=n.hemi[v];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:n}}function Ll(i){let t=new jm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function tg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ll(i),t.set(s,[o])):r>=a.length?(o=new Ll(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Jo=class extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$o=class extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ig(i,t,e){let n=new Ds,s=new yt,r=new yt,a=new ve,o=new Jo({depthPacking:au}),c=new $o,l={},h=e.maxTextureSize,u={[si]:Ye,[Ye]:si,[Dn]:Dn},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new bt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let m=this.type;this.render=function(B,N,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||B.length===0)return;let dt=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),$=i.state;$.setBlending(ei),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let Y=m!==Ln&&this.type===Ln,K=m===Ln&&this.type!==Ln;for(let ot=0,q=B.length;ot<q;ot++){let _t=B[ot],j=_t.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",_t,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let Lt=j.getFrameExtents();if(s.multiply(Lt),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Lt.x),s.x=r.x*Lt.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Lt.y),s.y=r.y*Lt.y,j.mapSize.y=r.y)),j.map===null||Y===!0||K===!0){let Dt=this.type!==Ln?{minFilter:cn,magFilter:cn}:{};j.map!==null&&j.map.dispose(),j.map=new zn(s.x,s.y,Dt),j.map.texture.name=_t.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let Rt=j.getViewportCount();for(let Dt=0;Dt<Rt;Dt++){let he=j.getViewport(Dt);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),$.viewport(a),j.updateMatrices(_t,Dt),n=j.getFrustum(),T(N,P,j.camera,_t,this.type)}j.isPointLightShadow!==!0&&this.type===Ln&&C(j,P),j.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(dt,_,S)};function C(B,N){let P=t.update(v);d.defines.VSM_SAMPLES!==B.blurSamples&&(d.defines.VSM_SAMPLES=B.blurSamples,f.defines.VSM_SAMPLES=B.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new zn(s.x,s.y)),d.uniforms.shadow_pass.value=B.map.texture,d.uniforms.resolution.value=B.mapSize,d.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(N,null,P,d,v,null),f.uniforms.shadow_pass.value=B.mapPass.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(N,null,P,f,v,null)}function b(B,N,P,dt){let _=null,S=P.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(S!==void 0)_=S;else if(_=P.isPointLight===!0?c:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let $=_.uuid,Y=N.uuid,K=l[$];K===void 0&&(K={},l[$]=K);let ot=K[Y];ot===void 0&&(ot=_.clone(),K[Y]=ot,N.addEventListener("dispose",V)),_=ot}if(_.visible=N.visible,_.wireframe=N.wireframe,dt===Ln?_.side=N.shadowSide!==null?N.shadowSide:N.side:_.side=N.shadowSide!==null?N.shadowSide:u[N.side],_.alphaMap=N.alphaMap,_.alphaTest=N.alphaTest,_.map=N.map,_.clipShadows=N.clipShadows,_.clippingPlanes=N.clippingPlanes,_.clipIntersection=N.clipIntersection,_.displacementMap=N.displacementMap,_.displacementScale=N.displacementScale,_.displacementBias=N.displacementBias,_.wireframeLinewidth=N.wireframeLinewidth,_.linewidth=N.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let $=i.properties.get(_);$.light=P}return _}function T(B,N,P,dt,_){if(B.visible===!1)return;if(B.layers.test(N.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&_===Ln)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,B.matrixWorld);let Y=t.update(B),K=B.material;if(Array.isArray(K)){let ot=Y.groups;for(let q=0,_t=ot.length;q<_t;q++){let j=ot[q],Lt=K[j.materialIndex];if(Lt&&Lt.visible){let Rt=b(B,Lt,dt,_);B.onBeforeShadow(i,B,N,P,Y,Rt,j),i.renderBufferDirect(P,null,Y,Rt,B,j),B.onAfterShadow(i,B,N,P,Y,Rt,j)}}}else if(K.visible){let ot=b(B,K,dt,_);B.onBeforeShadow(i,B,N,P,Y,ot,null),i.renderBufferDirect(P,null,Y,ot,B,null),B.onAfterShadow(i,B,N,P,Y,ot,null)}}let $=B.children;for(let Y=0,K=$.length;Y<K;Y++)T($[Y],N,P,dt,_)}function V(B){B.target.removeEventListener("dispose",V);for(let P in l){let dt=l[P],_=B.target.uuid;_ in dt&&(dt[_].dispose(),delete dt[_])}}}var sg={[Ka]:Qa,[ja]:no,[to]:io,[ts]:eo,[Qa]:Ka,[no]:ja,[io]:to,[eo]:ts};function rg(i){function t(){let M=!1,L=new ve,w=null,D=new ve(0,0,0,0);return{setMask:function(H){w!==H&&!M&&(i.colorMask(H,H,H,H),w=H)},setLocked:function(H){M=H},setClear:function(H,W,Q,at,nt){nt===!0&&(H*=at,W*=at,Q*=at),L.set(H,W,Q,at),D.equals(L)===!1&&(i.clearColor(H,W,Q,at),D.copy(L))},reset:function(){M=!1,w=null,D.set(-1,0,0,0)}}}function e(){let M=!1,L=!1,w=null,D=null,H=null;return{setReversed:function(W){L=W},setTest:function(W){W?Ht(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(W){w!==W&&!M&&(i.depthMask(W),w=W)},setFunc:function(W){if(L&&(W=sg[W]),D!==W){switch(W){case Ka:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case to:i.depthFunc(i.EQUAL);break;case eo:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}D=W}},setLocked:function(W){M=W},setClear:function(W){H!==W&&(i.clearDepth(W),H=W)},reset:function(){M=!1,w=null,D=null,H=null}}}function n(){let M=!1,L=null,w=null,D=null,H=null,W=null,Q=null,at=null,nt=null;return{setTest:function(ut){M||(ut?Ht(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ut){L!==ut&&!M&&(i.stencilMask(ut),L=ut)},setFunc:function(ut,vt,Wt){(w!==ut||D!==vt||H!==Wt)&&(i.stencilFunc(ut,vt,Wt),w=ut,D=vt,H=Wt)},setOp:function(ut,vt,Wt){(W!==ut||Q!==vt||at!==Wt)&&(i.stencilOp(ut,vt,Wt),W=ut,Q=vt,at=Wt)},setLocked:function(ut){M=ut},setClear:function(ut){nt!==ut&&(i.clearStencil(ut),nt=ut)},reset:function(){M=!1,L=null,w=null,D=null,H=null,W=null,Q=null,at=null,nt=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,C=null,b=null,T=null,V=null,B=new ce(0,0,0),N=0,P=!1,dt=null,_=null,S=null,$=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ot=!1,q=0,_t=i.getParameter(i.VERSION);_t.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(_t)[1]),ot=q>=1):_t.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(_t)[1]),ot=q>=2);let j=null,Lt={},Rt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),he=new ve().fromArray(Rt),de=new ve().fromArray(Dt);function st(M,L,w,D){let H=new Uint8Array(4),W=i.createTexture();i.bindTexture(M,W),i.texParameteri(M,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(M,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Q=0;Q<w;Q++)M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,D,0,i.RGBA,i.UNSIGNED_BYTE,H):i.texImage2D(L+Q,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,H);return W}let xt={};xt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Ht(i.DEPTH_TEST),r.setFunc(ts),Mt(!1),ft(Hc),Ht(i.CULL_FACE),R(ei);function Ht(M){l[M]!==!0&&(i.enable(M),l[M]=!0)}function Ct(M){l[M]!==!1&&(i.disable(M),l[M]=!1)}function Qt(M,L){return h[M]!==L?(i.bindFramebuffer(M,L),h[M]=L,M===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=L),M===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=L),!0):!1}function $t(M,L){let w=d,D=!1;if(M){w=u.get(L),w===void 0&&(w=[],u.set(L,w));let H=M.textures;if(w.length!==H.length||w[0]!==i.COLOR_ATTACHMENT0){for(let W=0,Q=H.length;W<Q;W++)w[W]=i.COLOR_ATTACHMENT0+W;w.length=H.length,D=!0}}else w[0]!==i.BACK&&(w[0]=i.BACK,D=!0);D&&i.drawBuffers(w)}function it(M){return f!==M?(i.useProgram(M),f=M,!0):!1}let re={[vi]:i.FUNC_ADD,[Dh]:i.FUNC_SUBTRACT,[Uh]:i.FUNC_REVERSE_SUBTRACT};re[Nh]=i.MIN,re[Fh]=i.MAX;let ct={[Oh]:i.ZERO,[Bh]:i.ONE,[zh]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[Xh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[kh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[Wh]:i.ONE_MINUS_DST_COLOR,[Gh]:i.ONE_MINUS_DST_ALPHA,[qh]:i.CONSTANT_COLOR,[Yh]:i.ONE_MINUS_CONSTANT_COLOR,[Zh]:i.CONSTANT_ALPHA,[Jh]:i.ONE_MINUS_CONSTANT_ALPHA};function R(M,L,w,D,H,W,Q,at,nt,ut){if(M===ei){g===!0&&(Ct(i.BLEND),g=!1);return}if(g===!1&&(Ht(i.BLEND),g=!0),M!==Lh){if(M!==v||ut!==P){if((p!==vi||b!==vi)&&(i.blendEquation(i.FUNC_ADD),p=vi,b=vi),ut)switch(M){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case On:i.blendFunc(i.ONE,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case On:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}m=null,C=null,T=null,V=null,B.set(0,0,0),N=0,v=M,P=ut}return}H=H||L,W=W||w,Q=Q||D,(L!==p||H!==b)&&(i.blendEquationSeparate(re[L],re[H]),p=L,b=H),(w!==m||D!==C||W!==T||Q!==V)&&(i.blendFuncSeparate(ct[w],ct[D],ct[W],ct[Q]),m=w,C=D,T=W,V=Q),(at.equals(B)===!1||nt!==N)&&(i.blendColor(at.r,at.g,at.b,nt),B.copy(at),N=nt),v=M,P=!1}function Tt(M,L){M.side===Dn?Ct(i.CULL_FACE):Ht(i.CULL_FACE);let w=M.side===Ye;L&&(w=!w),Mt(w),M.blending===$i&&M.transparent===!1?R(ei):R(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),r.setFunc(M.depthFunc),r.setTest(M.depthTest),r.setMask(M.depthWrite),s.setMask(M.colorWrite);let D=M.stencilWrite;a.setTest(D),D&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),mt(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?Ht(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(M){dt!==M&&(M?i.frontFace(i.CW):i.frontFace(i.CCW),dt=M)}function ft(M){M!==Ph?(Ht(i.CULL_FACE),M!==_&&(M===Hc?i.cullFace(i.BACK):M===Ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),_=M}function wt(M){M!==S&&(ot&&i.lineWidth(M),S=M)}function mt(M,L,w){M?(Ht(i.POLYGON_OFFSET_FILL),($!==L||Y!==w)&&(i.polygonOffset(L,w),$=L,Y=w)):Ct(i.POLYGON_OFFSET_FILL)}function Ot(M){M?Ht(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function A(M){M===void 0&&(M=i.TEXTURE0+K-1),j!==M&&(i.activeTexture(M),j=M)}function x(M,L,w){w===void 0&&(j===null?w=i.TEXTURE0+K-1:w=j);let D=Lt[w];D===void 0&&(D={type:void 0,texture:void 0},Lt[w]=D),(D.type!==M||D.texture!==L)&&(j!==w&&(i.activeTexture(w),j=w),i.bindTexture(M,L||xt[M]),D.type=M,D.texture=L)}function X(){let M=Lt[j];M!==void 0&&M.type!==void 0&&(i.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function At(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ue(){try{i.texStorage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function jt(){try{i.texImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Kt(M){he.equals(M)===!1&&(i.scissor(M.x,M.y,M.z,M.w),he.copy(M))}function kt(M){de.equals(M)===!1&&(i.viewport(M.x,M.y,M.z,M.w),de.copy(M))}function U(M,L){let w=c.get(L);w===void 0&&(w=new WeakMap,c.set(L,w));let D=w.get(M);D===void 0&&(D=i.getUniformBlockIndex(L,M.name),w.set(M,D))}function I(M,L){let D=c.get(L).get(M);o.get(L)!==D&&(i.uniformBlockBinding(L,D,M.__bindingPointIndex),o.set(L,D))}function O(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},j=null,Lt={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,C=null,b=null,T=null,V=null,B=new ce(0,0,0),N=0,P=!1,dt=null,_=null,S=null,$=null,Y=null,he.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Ht,disable:Ct,bindFramebuffer:Qt,drawBuffers:$t,useProgram:it,setBlending:R,setMaterial:Tt,setFlipSided:Mt,setCullFace:ft,setLineWidth:wt,setPolygonOffset:mt,setScissorTest:Ot,activeTexture:A,bindTexture:x,unbindTexture:X,compressedTexImage2D:tt,compressedTexImage3D:lt,texImage2D:Ut,texImage3D:jt,updateUBOMapping:U,uniformBlockBinding:I,texStorage2D:ue,texStorage3D:gt,texSubImage2D:et,texSubImage3D:Gt,compressedTexSubImage2D:At,compressedTexSubImage3D:Bt,scissor:Kt,viewport:kt,reset:O}}function Dl(i,t,e,n){let s=ag(n);switch(e){case jl:return i*t;case eh:return i*t;case nh:return i*t*2;case ih:return i*t/s.components*s.byteLength;case Rc:return i*t/s.components*s.byteLength;case sh:return i*t*2/s.components*s.byteLength;case Cc:return i*t*2/s.components*s.byteLength;case th:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Pc:return i*t*4/s.components*s.byteLength;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:case uo:return Math.max(i,16)*Math.max(t,8)/4;case co:case ho:return Math.max(i,8)*Math.max(t,8)/2;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wr:case Po:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rh:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Do:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ag(i){switch(i){case Bn:case $l:return{byteLength:1,components:1};case Ps:case Kl:case ks:return{byteLength:2,components:1};case Tc:case Ac:return{byteLength:2,components:4};case Ei:case wc:case Un:return{byteLength:4,components:1};case Ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function og(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return f?new OffscreenCanvas(A,x):Lr("canvas")}function v(A,x,X){let tt=1,lt=Ot(A);if((lt.width>X||lt.height>X)&&(tt=X/Math.max(lt.width,lt.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let et=Math.floor(tt*lt.width),Gt=Math.floor(tt*lt.height);u===void 0&&(u=g(et,Gt));let At=x?g(et,Gt):u;return At.width=et,At.height=Gt,At.getContext("2d").drawImage(A,0,0,et,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+et+"x"+Gt+")."),At}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==cn&&A.minFilter!==xn}function m(A){i.generateMipmap(A)}function C(A,x,X,tt,lt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=x;if(x===i.RED&&(X===i.FLOAT&&(et=i.R32F),X===i.HALF_FLOAT&&(et=i.R16F),X===i.UNSIGNED_BYTE&&(et=i.R8)),x===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.R8UI),X===i.UNSIGNED_SHORT&&(et=i.R16UI),X===i.UNSIGNED_INT&&(et=i.R32UI),X===i.BYTE&&(et=i.R8I),X===i.SHORT&&(et=i.R16I),X===i.INT&&(et=i.R32I)),x===i.RG&&(X===i.FLOAT&&(et=i.RG32F),X===i.HALF_FLOAT&&(et=i.RG16F),X===i.UNSIGNED_BYTE&&(et=i.RG8)),x===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RG8UI),X===i.UNSIGNED_SHORT&&(et=i.RG16UI),X===i.UNSIGNED_INT&&(et=i.RG32UI),X===i.BYTE&&(et=i.RG8I),X===i.SHORT&&(et=i.RG16I),X===i.INT&&(et=i.RG32I)),x===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGB8UI),X===i.UNSIGNED_SHORT&&(et=i.RGB16UI),X===i.UNSIGNED_INT&&(et=i.RGB32UI),X===i.BYTE&&(et=i.RGB8I),X===i.SHORT&&(et=i.RGB16I),X===i.INT&&(et=i.RGB32I)),x===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),X===i.UNSIGNED_INT&&(et=i.RGBA32UI),X===i.BYTE&&(et=i.RGBA8I),X===i.SHORT&&(et=i.RGBA16I),X===i.INT&&(et=i.RGBA32I)),x===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),x===i.RGBA){let Gt=lt?Rr:me.getTransfer(tt);X===i.FLOAT&&(et=i.RGBA32F),X===i.HALF_FLOAT&&(et=i.RGBA16F),X===i.UNSIGNED_BYTE&&(et=Gt===Ee?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function b(A,x){let X;return A?x===null||x===Ei||x===is?X=i.DEPTH24_STENCIL8:x===Un?X=i.DEPTH32F_STENCIL8:x===Ps&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ei||x===is?X=i.DEPTH_COMPONENT24:x===Un?X=i.DEPTH_COMPONENT32F:x===Ps&&(X=i.DEPTH_COMPONENT16),X}function T(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==xn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function V(A){let x=A.target;x.removeEventListener("dispose",V),N(x),x.isVideoTexture&&h.delete(x)}function B(A){let x=A.target;x.removeEventListener("dispose",B),dt(x)}function N(A){let x=n.get(A);if(x.__webglInit===void 0)return;let X=A.source,tt=d.get(X);if(tt){let lt=tt[x.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&P(A),Object.keys(tt).length===0&&d.delete(X)}n.remove(A)}function P(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let X=A.source,tt=d.get(X);delete tt[x.__cacheKey],a.memory.textures--}function dt(A){let x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let lt=0;lt<x.__webglFramebuffer[tt].length;lt++)i.deleteFramebuffer(x.__webglFramebuffer[tt][lt]);else i.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[tt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let X=A.textures;for(let tt=0,lt=X.length;tt<lt;tt++){let et=n.get(X[tt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(X[tt])}n.remove(A)}let _=0;function S(){_=0}function $(){let A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function Y(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function K(A,x){let X=n.get(A);if(A.isVideoTexture&&wt(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(X,A,x);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+x)}function ot(A,x){let X=n.get(A);if(A.version>0&&X.__version!==A.version){de(X,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+x)}function q(A,x){let X=n.get(A);if(A.version>0&&X.__version!==A.version){de(X,A,x);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+x)}function _t(A,x){let X=n.get(A);if(A.version>0&&X.__version!==A.version){st(X,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+x)}let j={[ao]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[oo]:i.MIRRORED_REPEAT},Lt={[cn]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},Rt={[cu]:i.NEVER,[pu]:i.ALWAYS,[lu]:i.LESS,[oh]:i.LEQUAL,[hu]:i.EQUAL,[fu]:i.GEQUAL,[uu]:i.GREATER,[du]:i.NOTEQUAL};function Dt(A,x){if(x.type===Un&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===xn||x.magFilter===da||x.magFilter===Xs||x.magFilter===Si||x.minFilter===xn||x.minFilter===da||x.minFilter===Xs||x.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,j[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,j[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,j[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Lt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Lt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==Xs&&x.minFilter!==Si||x.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function he(A,x){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",V));let tt=x.source,lt=d.get(tt);lt===void 0&&(lt={},d.set(tt,lt));let et=Y(x);if(et!==A.__cacheKey){lt[et]===void 0&&(lt[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),lt[et].usedTimes++;let Gt=lt[A.__cacheKey];Gt!==void 0&&(lt[A.__cacheKey].usedTimes--,Gt.usedTimes===0&&P(x)),A.__cacheKey=et,A.__webglTexture=lt[et].texture}return X}function de(A,x,X){let tt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=i.TEXTURE_3D);let lt=he(A,x),et=x.source;e.bindTexture(tt,A.__webglTexture,i.TEXTURE0+X);let Gt=n.get(et);if(et.version!==Gt.__version||lt===!0){e.activeTexture(i.TEXTURE0+X);let At=me.getPrimaries(me.workingColorSpace),Bt=x.colorSpace===jn?null:me.getPrimaries(x.colorSpace),ue=x.colorSpace===jn||At===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let gt=v(x.image,!1,s.maxTextureSize);gt=mt(x,gt);let Ut=r.convert(x.format,x.colorSpace),jt=r.convert(x.type),Kt=C(x.internalFormat,Ut,jt,x.colorSpace,x.isVideoTexture);Dt(tt,x);let kt,U=x.mipmaps,I=x.isVideoTexture!==!0,O=Gt.__version===void 0||lt===!0,M=et.dataReady,L=T(x,gt);if(x.isDepthTexture)Kt=b(x.format===ss,x.type),O&&(I?e.texStorage2D(i.TEXTURE_2D,1,Kt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Kt,gt.width,gt.height,0,Ut,jt,null));else if(x.isDataTexture)if(U.length>0){I&&O&&e.texStorage2D(i.TEXTURE_2D,L,Kt,U[0].width,U[0].height);for(let w=0,D=U.length;w<D;w++)kt=U[w],I?M&&e.texSubImage2D(i.TEXTURE_2D,w,0,0,kt.width,kt.height,Ut,jt,kt.data):e.texImage2D(i.TEXTURE_2D,w,Kt,kt.width,kt.height,0,Ut,jt,kt.data);x.generateMipmaps=!1}else I?(O&&e.texStorage2D(i.TEXTURE_2D,L,Kt,gt.width,gt.height),M&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Ut,jt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Kt,gt.width,gt.height,0,Ut,jt,gt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&O&&e.texStorage3D(i.TEXTURE_2D_ARRAY,L,Kt,U[0].width,U[0].height,gt.depth);for(let w=0,D=U.length;w<D;w++)if(kt=U[w],x.format!==vn)if(Ut!==null)if(I){if(M)if(x.layerUpdates.size>0){let H=Dl(kt.width,kt.height,x.format,x.type);for(let W of x.layerUpdates){let Q=kt.data.subarray(W*H/kt.data.BYTES_PER_ELEMENT,(W+1)*H/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,w,0,0,W,kt.width,kt.height,1,Ut,Q,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,w,0,0,0,kt.width,kt.height,gt.depth,Ut,kt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,w,Kt,kt.width,kt.height,gt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?M&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,w,0,0,0,kt.width,kt.height,gt.depth,Ut,jt,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,w,Kt,kt.width,kt.height,gt.depth,0,Ut,jt,kt.data)}else{I&&O&&e.texStorage2D(i.TEXTURE_2D,L,Kt,U[0].width,U[0].height);for(let w=0,D=U.length;w<D;w++)kt=U[w],x.format!==vn?Ut!==null?I?M&&e.compressedTexSubImage2D(i.TEXTURE_2D,w,0,0,kt.width,kt.height,Ut,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,w,Kt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?M&&e.texSubImage2D(i.TEXTURE_2D,w,0,0,kt.width,kt.height,Ut,jt,kt.data):e.texImage2D(i.TEXTURE_2D,w,Kt,kt.width,kt.height,0,Ut,jt,kt.data)}else if(x.isDataArrayTexture)if(I){if(O&&e.texStorage3D(i.TEXTURE_2D_ARRAY,L,Kt,gt.width,gt.height,gt.depth),M)if(x.layerUpdates.size>0){let w=Dl(gt.width,gt.height,x.format,x.type);for(let D of x.layerUpdates){let H=gt.data.subarray(D*w/gt.data.BYTES_PER_ELEMENT,(D+1)*w/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,D,gt.width,gt.height,1,Ut,jt,H)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Ut,jt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Kt,gt.width,gt.height,gt.depth,0,Ut,jt,gt.data);else if(x.isData3DTexture)I?(O&&e.texStorage3D(i.TEXTURE_3D,L,Kt,gt.width,gt.height,gt.depth),M&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Ut,jt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Kt,gt.width,gt.height,gt.depth,0,Ut,jt,gt.data);else if(x.isFramebufferTexture){if(O)if(I)e.texStorage2D(i.TEXTURE_2D,L,Kt,gt.width,gt.height);else{let w=gt.width,D=gt.height;for(let H=0;H<L;H++)e.texImage2D(i.TEXTURE_2D,H,Kt,w,D,0,Ut,jt,null),w>>=1,D>>=1}}else if(U.length>0){if(I&&O){let w=Ot(U[0]);e.texStorage2D(i.TEXTURE_2D,L,Kt,w.width,w.height)}for(let w=0,D=U.length;w<D;w++)kt=U[w],I?M&&e.texSubImage2D(i.TEXTURE_2D,w,0,0,Ut,jt,kt):e.texImage2D(i.TEXTURE_2D,w,Kt,Ut,jt,kt);x.generateMipmaps=!1}else if(I){if(O){let w=Ot(gt);e.texStorage2D(i.TEXTURE_2D,L,Kt,w.width,w.height)}M&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,jt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Kt,Ut,jt,gt);p(x)&&m(tt),Gt.__version=et.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function st(A,x,X){if(x.image.length!==6)return;let tt=he(A,x),lt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let et=n.get(lt);if(lt.version!==et.__version||tt===!0){e.activeTexture(i.TEXTURE0+X);let Gt=me.getPrimaries(me.workingColorSpace),At=x.colorSpace===jn?null:me.getPrimaries(x.colorSpace),Bt=x.colorSpace===jn||Gt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let ue=x.isCompressedTexture||x.image[0].isCompressedTexture,gt=x.image[0]&&x.image[0].isDataTexture,Ut=[];for(let D=0;D<6;D++)!ue&&!gt?Ut[D]=v(x.image[D],!0,s.maxCubemapSize):Ut[D]=gt?x.image[D].image:x.image[D],Ut[D]=mt(x,Ut[D]);let jt=Ut[0],Kt=r.convert(x.format,x.colorSpace),kt=r.convert(x.type),U=C(x.internalFormat,Kt,kt,x.colorSpace),I=x.isVideoTexture!==!0,O=et.__version===void 0||tt===!0,M=lt.dataReady,L=T(x,jt);Dt(i.TEXTURE_CUBE_MAP,x);let w;if(ue){I&&O&&e.texStorage2D(i.TEXTURE_CUBE_MAP,L,U,jt.width,jt.height);for(let D=0;D<6;D++){w=Ut[D].mipmaps;for(let H=0;H<w.length;H++){let W=w[H];x.format!==vn?Kt!==null?I?M&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,H,0,0,W.width,W.height,Kt,W.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,H,U,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?M&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,H,0,0,W.width,W.height,Kt,kt,W.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,H,U,W.width,W.height,0,Kt,kt,W.data)}}}else{if(w=x.mipmaps,I&&O){w.length>0&&L++;let D=Ot(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,L,U,D.width,D.height)}for(let D=0;D<6;D++)if(gt){I?M&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Ut[D].width,Ut[D].height,Kt,kt,Ut[D].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,U,Ut[D].width,Ut[D].height,0,Kt,kt,Ut[D].data);for(let H=0;H<w.length;H++){let Q=w[H].image[D].image;I?M&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,H+1,0,0,Q.width,Q.height,Kt,kt,Q.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,H+1,U,Q.width,Q.height,0,Kt,kt,Q.data)}}else{I?M&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Kt,kt,Ut[D]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,U,Kt,kt,Ut[D]);for(let H=0;H<w.length;H++){let W=w[H];I?M&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,H+1,0,0,Kt,kt,W.image[D]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,H+1,U,Kt,kt,W.image[D])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),et.__version=lt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function xt(A,x,X,tt,lt,et){let Gt=r.convert(X.format,X.colorSpace),At=r.convert(X.type),Bt=C(X.internalFormat,Gt,At,X.colorSpace);if(!n.get(x).__hasExternalTextures){let gt=Math.max(1,x.width>>et),Ut=Math.max(1,x.height>>et);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,et,Bt,gt,Ut,x.depth,0,Gt,At,null):e.texImage2D(lt,et,Bt,gt,Ut,0,Gt,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ft(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,lt,n.get(X).__webglTexture,0,Mt(x)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,lt,n.get(X).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(A,x,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let tt=x.depthTexture,lt=tt&&tt.isDepthTexture?tt.type:null,et=b(x.stencilBuffer,lt),Gt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=Mt(x);ft(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,et,x.width,x.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Gt,i.RENDERBUFFER,A)}else{let tt=x.textures;for(let lt=0;lt<tt.length;lt++){let et=tt[lt],Gt=r.convert(et.format,et.colorSpace),At=r.convert(et.type),Bt=C(et.internalFormat,Gt,At,et.colorSpace),ue=Mt(x);X&&ft(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Bt,x.width,x.height):ft(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Bt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Bt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let tt=n.get(x.depthTexture).__webglTexture,lt=Mt(x);if(x.depthTexture.format===Ki)ft(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===ss)ft(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Qt(A){let x=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let tt=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),tt){let lt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,tt.removeEventListener("dispose",lt)};tt.addEventListener("dispose",lt),x.__depthDisposeCallback=lt}x.__boundDepthTexture=tt}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ct(x.__webglFramebuffer,A)}else if(X){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]===void 0)x.__webglDepthbuffer[tt]=i.createRenderbuffer(),Ht(x.__webglDepthbuffer[tt],A,!1);else{let lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ht(x.__webglDepthbuffer,A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(A,x,X){let tt=n.get(A);x!==void 0&&xt(tt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Qt(A)}function it(A){let x=A.texture,X=n.get(A),tt=n.get(x);A.addEventListener("dispose",B);let lt=A.textures,et=A.isWebGLCubeRenderTarget===!0,Gt=lt.length>1;if(Gt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=x.version,a.memory.textures++),et){X.__webglFramebuffer=[];for(let At=0;At<6;At++)if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[At]=[];for(let Bt=0;Bt<x.mipmaps.length;Bt++)X.__webglFramebuffer[At][Bt]=i.createFramebuffer()}else X.__webglFramebuffer[At]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let At=0;At<x.mipmaps.length;At++)X.__webglFramebuffer[At]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Gt)for(let At=0,Bt=lt.length;At<Bt;At++){let ue=n.get(lt[At]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ft(A)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let At=0;At<lt.length;At++){let Bt=lt[At];X.__webglColorRenderbuffer[At]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[At]);let ue=r.convert(Bt.format,Bt.colorSpace),gt=r.convert(Bt.type),Ut=C(Bt.internalFormat,ue,gt,Bt.colorSpace,A.isXRRenderTarget===!0),jt=Mt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Ut,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,X.__webglColorRenderbuffer[At])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,x);for(let At=0;At<6;At++)if(x.mipmaps&&x.mipmaps.length>0)for(let Bt=0;Bt<x.mipmaps.length;Bt++)xt(X.__webglFramebuffer[At][Bt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Bt);else xt(X.__webglFramebuffer[At],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);p(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Gt){for(let At=0,Bt=lt.length;At<Bt;At++){let ue=lt[At],gt=n.get(ue);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),Dt(i.TEXTURE_2D,ue),xt(X.__webglFramebuffer,A,ue,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,0),p(ue)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let At=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(At=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,tt.__webglTexture),Dt(At,x),x.mipmaps&&x.mipmaps.length>0)for(let Bt=0;Bt<x.mipmaps.length;Bt++)xt(X.__webglFramebuffer[Bt],A,x,i.COLOR_ATTACHMENT0,At,Bt);else xt(X.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,At,0);p(x)&&m(At),e.unbindTexture()}A.depthBuffer&&Qt(A)}function re(A){let x=A.textures;for(let X=0,tt=x.length;X<tt;X++){let lt=x[X];if(p(lt)){let et=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Gt=n.get(lt).__webglTexture;e.bindTexture(et,Gt),m(et),e.unbindTexture()}}}let ct=[],R=[];function Tt(A){if(A.samples>0){if(ft(A)===!1){let x=A.textures,X=A.width,tt=A.height,lt=i.COLOR_BUFFER_BIT,et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Gt=n.get(A),At=x.length>1;if(At)for(let Bt=0;Bt<x.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Bt=0;Bt<x.length;Bt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),At){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);let ue=n.get(x[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,X,tt,0,0,X,tt,lt,i.NEAREST),c===!0&&(ct.length=0,R.length=0,ct.push(i.COLOR_ATTACHMENT0+Bt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ct.push(et),R.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),At)for(let Bt=0;Bt<x.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);let ue=n.get(x[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,ue,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Mt(A){return Math.min(s.maxSamples,A.samples)}function ft(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function mt(A,x){let X=A.colorSpace,tt=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==hi&&X!==jn&&(me.getTransfer(X)===Ee?(tt!==vn||lt!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),x}function Ot(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=S,this.setTexture2D=K,this.setTexture2DArray=ot,this.setTexture3D=q,this.setTextureCube=_t,this.rebindTextures=$t,this.setupRenderTarget=it,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ft}function cg(i,t){function e(n,s=jn){let r,a=me.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===Tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return i.BYTE;if(n===Kl)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===wc)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===jl)return i.ALPHA;if(n===th)return i.RGB;if(n===vn)return i.RGBA;if(n===eh)return i.LUMINANCE;if(n===nh)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===ih)return i.RED;if(n===Rc)return i.RED_INTEGER;if(n===sh)return i.RG;if(n===Cc)return i.RG_INTEGER;if(n===Pc)return i.RGBA_INTEGER;if(n===Mr||n===Sr||n===Er||n===br)if(a===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===lo||n===ho||n===uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===po||n===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fo||n===po)return a===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===go||n===_o||n===xo||n===vo||n===yo||n===Mo||n===So||n===Eo||n===bo||n===wo||n===To||n===Ao||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===go)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_o)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wr||n===Po||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wr)return a===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===Lo||n===Do||n===Uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ko=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},le=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},lg={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jo=class extends ri{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,v=new Qo,p=e.getContextAttributes(),m=null,C=null,b=[],T=[],V=new yt,B=null,N=new Be;N.layers.enable(1),N.viewport=new ve;let P=new Be;P.layers.enable(2),P.viewport=new ve;let dt=[N,P],_=new Ko;_.layers.enable(1),_.layers.enable(2);let S=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let xt=b[st];return xt===void 0&&(xt=new As,b[st]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(st){let xt=b[st];return xt===void 0&&(xt=new As,b[st]=xt),xt.getGripSpace()},this.getHand=function(st){let xt=b[st];return xt===void 0&&(xt=new As,b[st]=xt),xt.getHandSpace()};function Y(st){let xt=T.indexOf(st.inputSource);if(xt===-1)return;let Ht=b[xt];Ht!==void 0&&(Ht.update(st.inputSource,st.frame,l||a),Ht.dispatchEvent({type:st.type,data:st.inputSource}))}function K(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ot);for(let st=0;st<b.length;st++){let xt=T[st];xt!==null&&(T[st]=null,b[st].disconnect(xt))}S=null,$=null,v.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,C=null,de.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(st){l=st},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ot),p.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(V),s.renderState.layers===void 0){let xt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),C=new zn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let xt=null,Ht=null,Ct=null;p.depth&&(Ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=p.stencil?ss:Ki,Ht=p.stencil?is:Ei);let Qt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),C=new zn(d.textureWidth,d.textureHeight,{format:vn,type:Bn,depthTexture:new Hr(d.textureWidth,d.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ot(st){for(let xt=0;xt<st.removed.length;xt++){let Ht=st.removed[xt],Ct=T.indexOf(Ht);Ct>=0&&(T[Ct]=null,b[Ct].disconnect(Ht))}for(let xt=0;xt<st.added.length;xt++){let Ht=st.added[xt],Ct=T.indexOf(Ht);if(Ct===-1){for(let $t=0;$t<b.length;$t++)if($t>=T.length){T.push(Ht),Ct=$t;break}else if(T[$t]===null){T[$t]=Ht,Ct=$t;break}if(Ct===-1)break}let Qt=b[Ct];Qt&&Qt.connect(Ht)}}let q=new F,_t=new F;function j(st,xt,Ht){q.setFromMatrixPosition(xt.matrixWorld),_t.setFromMatrixPosition(Ht.matrixWorld);let Ct=q.distanceTo(_t),Qt=xt.projectionMatrix.elements,$t=Ht.projectionMatrix.elements,it=Qt[14]/(Qt[10]-1),re=Qt[14]/(Qt[10]+1),ct=(Qt[9]+1)/Qt[5],R=(Qt[9]-1)/Qt[5],Tt=(Qt[8]-1)/Qt[0],Mt=($t[8]+1)/$t[0],ft=it*Tt,wt=it*Mt,mt=Ct/(-Tt+Mt),Ot=mt*-Tt;if(xt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Ot),st.translateZ(mt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Qt[10]===-1)st.projectionMatrix.copy(xt.projectionMatrix),st.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{let A=it+mt,x=re+mt,X=ft-Ot,tt=wt+(Ct-Ot),lt=ct*re/x*A,et=R*re/x*A;st.projectionMatrix.makePerspective(X,tt,lt,et,A,x),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Lt(st,xt){xt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(xt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let xt=st.near,Ht=st.far;v.texture!==null&&(v.depthNear>0&&(xt=v.depthNear),v.depthFar>0&&(Ht=v.depthFar)),_.near=P.near=N.near=xt,_.far=P.far=N.far=Ht,(S!==_.near||$!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,$=_.far);let Ct=st.parent,Qt=_.cameras;Lt(_,Ct);for(let $t=0;$t<Qt.length;$t++)Lt(Qt[$t],Ct);Qt.length===2?j(_,N,P):_.projectionMatrix.copy(N.projectionMatrix),Rt(st,_,Ct)};function Rt(st,xt,Ht){Ht===null?st.matrix.copy(xt.matrixWorld):(st.matrix.copy(Ht.matrixWorld),st.matrix.invert(),st.matrix.multiply(xt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(xt.projectionMatrix),st.projectionMatrixInverse.copy(xt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Oo*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(st){c=st,d!==null&&(d.fixedFoveation=st),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=st)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Dt=null;function he(st,xt){if(h=xt.getViewerPose(l||a),g=xt,h!==null){let Ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(C,f.framebuffer),t.setRenderTarget(C));let Ct=!1;Ht.length!==_.cameras.length&&(_.cameras.length=0,Ct=!0);for(let $t=0;$t<Ht.length;$t++){let it=Ht[$t],re=null;if(f!==null)re=f.getViewport(it);else{let R=u.getViewSubImage(d,it);re=R.viewport,$t===0&&(t.setRenderTargetTextures(C,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(C))}let ct=dt[$t];ct===void 0&&(ct=new Be,ct.layers.enable($t),ct.viewport=new ve,dt[$t]=ct),ct.matrix.fromArray(it.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(it.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(re.x,re.y,re.width,re.height),$t===0&&(_.matrix.copy(ct.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ct===!0&&_.cameras.push(ct)}let Qt=s.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")){let $t=u.getDepthInformation(Ht[0]);$t&&$t.isValid&&$t.texture&&v.init(t,$t,s.renderState)}}for(let Ht=0;Ht<b.length;Ht++){let Ct=T[Ht],Qt=b[Ht];Ct!==null&&Qt!==void 0&&Qt.update(Ct,xt,l||a)}Dt&&Dt(st,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),g=null}let de=new uh;de.setAnimationLoop(he),this.setAnimationLoop=function(st){Dt=st},this.dispose=function(){}}},_i=new wn,dg=new _e;function fg(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,hh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,C,b,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,C,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ye&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ye&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let C=t.get(m),b=C.envMap,T=C.envMapRotation;b&&(p.envMap.value=b,_i.copy(T),_i.x*=-1,_i.y*=-1,_i.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),p.envMapRotation.value.setFromMatrix4(dg.makeRotationFromEuler(_i)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,C,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*C,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,C){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ye&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let C=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,b){let T=b.program;n.uniformBlockBinding(C,T)}function l(C,b){let T=s[C.id];T===void 0&&(g(C),T=h(C),s[C.id]=T,C.addEventListener("dispose",p));let V=b.program;n.updateUBOMapping(C,V);let B=t.render.frame;r[C.id]!==B&&(d(C),r[C.id]=B)}function h(C){let b=u();C.__bindingPointIndex=b;let T=i.createBuffer(),V=C.__size,B=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,V,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function u(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let b=s[C.id],T=C.uniforms,V=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let B=0,N=T.length;B<N;B++){let P=Array.isArray(T[B])?T[B]:[T[B]];for(let dt=0,_=P.length;dt<_;dt++){let S=P[dt];if(f(S,B,dt,V)===!0){let $=S.__offset,Y=Array.isArray(S.value)?S.value:[S.value],K=0;for(let ot=0;ot<Y.length;ot++){let q=Y[ot],_t=v(q);typeof q=="number"||typeof q=="boolean"?(S.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,$+K,S.__data)):q.isMatrix3?(S.__data[0]=q.elements[0],S.__data[1]=q.elements[1],S.__data[2]=q.elements[2],S.__data[3]=0,S.__data[4]=q.elements[3],S.__data[5]=q.elements[4],S.__data[6]=q.elements[5],S.__data[7]=0,S.__data[8]=q.elements[6],S.__data[9]=q.elements[7],S.__data[10]=q.elements[8],S.__data[11]=0):(q.toArray(S.__data,K),K+=_t.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(C,b,T,V){let B=C.value,N=b+"_"+T;if(V[N]===void 0)return typeof B=="number"||typeof B=="boolean"?V[N]=B:V[N]=B.clone(),!0;{let P=V[N];if(typeof B=="number"||typeof B=="boolean"){if(P!==B)return V[N]=B,!0}else if(P.equals(B)===!1)return P.copy(B),!0}return!1}function g(C){let b=C.uniforms,T=0,V=16;for(let N=0,P=b.length;N<P;N++){let dt=Array.isArray(b[N])?b[N]:[b[N]];for(let _=0,S=dt.length;_<S;_++){let $=dt[_],Y=Array.isArray($.value)?$.value:[$.value];for(let K=0,ot=Y.length;K<ot;K++){let q=Y[K],_t=v(q),j=T%V,Lt=j%_t.boundary,Rt=j+Lt;T+=Lt,Rt!==0&&V-Rt<_t.storage&&(T+=V-Rt),$.__data=new Float32Array(_t.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=_t.storage}}}let B=T%V;return B>0&&(T+=V-B),C.__size=T,C.__cache={},this}function v(C){let b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function p(C){let b=C.target;b.removeEventListener("dispose",p);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let C in s)i.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}var kr=class{constructor(t={}){let{canvas:e=gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,m=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=ni,this.toneMappingExposure=1;let b=this,T=!1,V=0,B=0,N=null,P=-1,dt=null,_=new ve,S=new ve,$=null,Y=new ce(0),K=0,ot=e.width,q=e.height,_t=1,j=null,Lt=null,Rt=new ve(0,0,ot,q),Dt=new ve(0,0,ot,q),he=!1,de=new Ds,st=!1,xt=!1,Ht=new _e,Ct=new _e,Qt=new F,$t=new ve,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function ct(){return N===null?_t:1}let R=n;function Tt(y,z){return e.getContext(y,z)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",H,!1),e.addEventListener("webglcontextcreationerror",W,!1),R===null){let z="webgl2";if(R=Tt(z,y),R===null)throw Tt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Mt,ft,wt,mt,Ot,A,x,X,tt,lt,et,Gt,At,Bt,ue,gt,Ut,jt,Kt,kt,U,I,O,M;function L(){Mt=new Pp(R),Mt.init(),I=new cg(R,Mt),ft=new bp(R,Mt,t,I),wt=new rg(R),ft.reverseDepthBuffer&&wt.buffers.depth.setReversed(!0),mt=new Dp(R),Ot=new qm,A=new og(R,Mt,wt,Ot,ft,I,mt),x=new Tp(b),X=new Cp(b),tt=new zu(R),O=new Sp(R,tt),lt=new Ip(R,tt,mt,O),et=new Np(R,lt,tt,mt),Kt=new Up(R,ft,A),gt=new wp(Ot),Gt=new Xm(b,x,X,Mt,ft,O,gt),At=new fg(b,Ot),Bt=new Zm,ue=new tg(Mt),jt=new Mp(b,x,X,wt,et,d,c),Ut=new ig(b,et,ft),M=new pg(R,mt,ft,wt),kt=new Ep(R,Mt,mt),U=new Lp(R,Mt,mt),mt.programs=Gt.programs,b.capabilities=ft,b.extensions=Mt,b.properties=Ot,b.renderLists=Bt,b.shadowMap=Ut,b.state=wt,b.info=mt}L();let w=new jo(b,R);this.xr=w,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let y=Mt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Mt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(y){y!==void 0&&(_t=y,this.setSize(ot,q,!1))},this.getSize=function(y){return y.set(ot,q)},this.setSize=function(y,z,Z=!0){if(w.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=y,q=z,e.width=Math.floor(y*_t),e.height=Math.floor(z*_t),Z===!0&&(e.style.width=y+"px",e.style.height=z+"px"),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y.set(ot*_t,q*_t).floor()},this.setDrawingBufferSize=function(y,z,Z){ot=y,q=z,_t=Z,e.width=Math.floor(y*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,y,z)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(Rt)},this.setViewport=function(y,z,Z,J){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,z,Z,J),wt.viewport(_.copy(Rt).multiplyScalar(_t).round())},this.getScissor=function(y){return y.copy(Dt)},this.setScissor=function(y,z,Z,J){y.isVector4?Dt.set(y.x,y.y,y.z,y.w):Dt.set(y,z,Z,J),wt.scissor(S.copy(Dt).multiplyScalar(_t).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(y){wt.setScissorTest(he=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){Lt=y},this.getClearColor=function(y){return y.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(y=!0,z=!0,Z=!0){let J=0;if(y){let k=!1;if(N!==null){let St=N.texture.format;k=St===Pc||St===Cc||St===Rc}if(k){let St=N.texture.type,zt=St===Bn||St===Ei||St===Ps||St===is||St===Tc||St===Ac,Vt=jt.getClearColor(),Xt=jt.getClearAlpha(),te=Vt.r,ee=Vt.g,Zt=Vt.b;zt?(f[0]=te,f[1]=ee,f[2]=Zt,f[3]=Xt,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=te,g[1]=ee,g[2]=Zt,g[3]=Xt,R.clearBufferiv(R.COLOR,0,g))}else J|=R.COLOR_BUFFER_BIT}z&&(J|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",H,!1),e.removeEventListener("webglcontextcreationerror",W,!1),Bt.dispose(),ue.dispose(),Ot.dispose(),x.dispose(),X.dispose(),et.dispose(),O.dispose(),M.dispose(),Gt.dispose(),w.dispose(),w.removeEventListener("sessionstart",ne),w.removeEventListener("sessionend",ht),Et.stop()};function D(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let y=mt.autoReset,z=Ut.enabled,Z=Ut.autoUpdate,J=Ut.needsUpdate,k=Ut.type;L(),mt.autoReset=y,Ut.enabled=z,Ut.autoUpdate=Z,Ut.needsUpdate=J,Ut.type=k}function W(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Q(y){let z=y.target;z.removeEventListener("dispose",Q),at(z)}function at(y){nt(y),Ot.remove(y)}function nt(y){let z=Ot.get(y).programs;z!==void 0&&(z.forEach(function(Z){Gt.releaseProgram(Z)}),y.isShaderMaterial&&Gt.releaseShaderCache(y))}this.renderBufferDirect=function(y,z,Z,J,k,St){z===null&&(z=it);let zt=k.isMesh&&k.matrixWorld.determinant()<0,Vt=gs(y,z,Z,J,k);wt.setMaterial(J,zt);let Xt=Z.index,te=1;if(J.wireframe===!0){if(Xt=lt.getWireframeAttribute(Z),Xt===void 0)return;te=2}let ee=Z.drawRange,Zt=Z.attributes.position,ge=ee.start*te,Se=(ee.start+ee.count)*te;St!==null&&(ge=Math.max(ge,St.start*te),Se=Math.min(Se,(St.start+St.count)*te)),Xt!==null?(ge=Math.max(ge,0),Se=Math.min(Se,Xt.count)):Zt!=null&&(ge=Math.max(ge,0),Se=Math.min(Se,Zt.count));let Ae=Se-ge;if(Ae<0||Ae===1/0)return;O.setup(k,J,Vt,Z,Xt);let Ke,fe=kt;if(Xt!==null&&(Ke=tt.get(Xt),fe=U,fe.setIndex(Ke)),k.isMesh)J.wireframe===!0?(wt.setLineWidth(J.wireframeLinewidth*ct()),fe.setMode(R.LINES)):fe.setMode(R.TRIANGLES);else if(k.isLine){let Jt=J.linewidth;Jt===void 0&&(Jt=1),wt.setLineWidth(Jt*ct()),k.isLineSegments?fe.setMode(R.LINES):k.isLineLoop?fe.setMode(R.LINE_LOOP):fe.setMode(R.LINE_STRIP)}else k.isPoints?fe.setMode(R.POINTS):k.isSprite&&fe.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)fe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))fe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Jt=k._multiDrawStarts,Ge=k._multiDrawCounts,pe=k._multiDrawCount,fn=Xt?tt.get(Xt).bytesPerElement:1,Ci=Ot.get(J).currentProgram.getUniforms();for(let Qe=0;Qe<pe;Qe++)Ci.setValue(R,"_gl_DrawID",Qe),fe.render(Jt[Qe]/fn,Ge[Qe])}else if(k.isInstancedMesh)fe.renderInstances(ge,Ae,k.count);else if(Z.isInstancedBufferGeometry){let Jt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ge=Math.min(Z.instanceCount,Jt);fe.renderInstances(ge,Ae,Ge)}else fe.render(ge,Ae)};function ut(y,z,Z){y.transparent===!0&&y.side===Dn&&y.forceSinglePass===!1?(y.side=Ye,y.needsUpdate=!0,Yt(y,z,Z),y.side=si,y.needsUpdate=!0,Yt(y,z,Z),y.side=Dn):Yt(y,z,Z)}this.compile=function(y,z,Z=null){Z===null&&(Z=y),p=ue.get(Z),p.init(z),C.push(p),Z.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),y!==Z&&y.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let J=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let St=k.material;if(St)if(Array.isArray(St))for(let zt=0;zt<St.length;zt++){let Vt=St[zt];ut(Vt,Z,k),J.add(Vt)}else ut(St,Z,k),J.add(St)}),C.pop(),p=null,J},this.compileAsync=function(y,z,Z=null){let J=this.compile(y,z,Z);return new Promise(k=>{function St(){if(J.forEach(function(zt){Ot.get(zt).currentProgram.isReady()&&J.delete(zt)}),J.size===0){k(y);return}setTimeout(St,10)}Mt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let vt=null;function Wt(y){vt&&vt(y)}function ne(){Et.stop()}function ht(){Et.start()}let Et=new uh;Et.setAnimationLoop(Wt),typeof self!="undefined"&&Et.setContext(self),this.setAnimationLoop=function(y){vt=y,w.setAnimationLoop(y),y===null?Et.stop():Et.start()},w.addEventListener("sessionstart",ne),w.addEventListener("sessionend",ht),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),w.enabled===!0&&w.isPresenting===!0&&(w.cameraAutoUpdate===!0&&w.updateCamera(z),z=w.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,z,N),p=ue.get(y,C.length),p.init(z),C.push(p),Ct.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),de.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,st=gt.init(this.clippingPlanes,xt),v=Bt.get(y,m.length),v.init(),m.push(v),w.enabled===!0&&w.isPresenting===!0){let St=b.xr.getDepthSensingMesh();St!==null&&Nt(St,z,-1/0,b.sortObjects)}Nt(y,z,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(j,Lt),re=w.enabled===!1||w.isPresenting===!1||w.hasDepthSensing()===!1,re&&jt.addToRenderList(v,y),this.info.render.frame++,st===!0&&gt.beginShadows();let Z=p.state.shadowsArray;Ut.render(Z,y,z),st===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=v.opaque,k=v.transmissive;if(p.setupLights(),z.isArrayCamera){let St=z.cameras;if(k.length>0)for(let zt=0,Vt=St.length;zt<Vt;zt++){let Xt=St[zt];ie(J,k,y,Xt)}re&&jt.render(y);for(let zt=0,Vt=St.length;zt<Vt;zt++){let Xt=St[zt];qt(v,y,Xt,Xt.viewport)}}else k.length>0&&ie(J,k,y,z),re&&jt.render(y),qt(v,y,z);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(b,y,z),O.resetDefaultState(),P=-1,dt=null,C.pop(),C.length>0?(p=C[C.length-1],st===!0&&gt.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Nt(y,z,Z,J){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||de.intersectsSprite(y)){J&&$t.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ct);let zt=et.update(y),Vt=y.material;Vt.visible&&v.push(y,zt,Vt,Z,$t.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||de.intersectsObject(y))){let zt=et.update(y),Vt=y.material;if(J&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),$t.copy(y.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),$t.copy(zt.boundingSphere.center)),$t.applyMatrix4(y.matrixWorld).applyMatrix4(Ct)),Array.isArray(Vt)){let Xt=zt.groups;for(let te=0,ee=Xt.length;te<ee;te++){let Zt=Xt[te],ge=Vt[Zt.materialIndex];ge&&ge.visible&&v.push(y,zt,ge,Z,$t.z,Zt)}}else Vt.visible&&v.push(y,zt,Vt,Z,$t.z,null)}}let St=y.children;for(let zt=0,Vt=St.length;zt<Vt;zt++)Nt(St[zt],z,Z,J)}function qt(y,z,Z,J){let k=y.opaque,St=y.transmissive,zt=y.transparent;p.setupLightsView(Z),st===!0&&gt.setGlobalState(b.clippingPlanes,Z),J&&wt.viewport(_.copy(J)),k.length>0&&rt(k,z,Z),St.length>0&&rt(St,z,Z),zt.length>0&&rt(zt,z,Z),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function ie(y,z,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new zn(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?ks:Bn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let St=p.state.transmissionRenderTarget[J.id],zt=J.viewport||_;St.setSize(zt.z,zt.w);let Vt=b.getRenderTarget();b.setRenderTarget(St),b.getClearColor(Y),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear(),re&&jt.render(Z);let Xt=b.toneMapping;b.toneMapping=ni;let te=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),st===!0&&gt.setGlobalState(b.clippingPlanes,J),rt(y,Z,J),A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Zt=0,ge=z.length;Zt<ge;Zt++){let Se=z[Zt],Ae=Se.object,Ke=Se.geometry,fe=Se.material,Jt=Se.group;if(fe.side===Dn&&Ae.layers.test(J.layers)){let Ge=fe.side;fe.side=Ye,fe.needsUpdate=!0,Ft(Ae,Z,J,Ke,fe,Jt),fe.side=Ge,fe.needsUpdate=!0,ee=!0}}ee===!0&&(A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St))}b.setRenderTarget(Vt),b.setClearColor(Y,K),te!==void 0&&(J.viewport=te),b.toneMapping=Xt}function rt(y,z,Z){let J=z.isScene===!0?z.overrideMaterial:null;for(let k=0,St=y.length;k<St;k++){let zt=y[k],Vt=zt.object,Xt=zt.geometry,te=J===null?zt.material:J,ee=zt.group;Vt.layers.test(Z.layers)&&Ft(Vt,z,Z,Xt,te,ee)}}function Ft(y,z,Z,J,k,St){y.onBeforeRender(b,z,Z,J,k,St),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(b,z,Z,J,y,St),k.transparent===!0&&k.side===Dn&&k.forceSinglePass===!1?(k.side=Ye,k.needsUpdate=!0,b.renderBufferDirect(Z,z,J,k,y,St),k.side=si,k.needsUpdate=!0,b.renderBufferDirect(Z,z,J,k,y,St),k.side=Dn):b.renderBufferDirect(Z,z,J,k,y,St),y.onAfterRender(b,z,Z,J,k,St)}function Yt(y,z,Z){z.isScene!==!0&&(z=it);let J=Ot.get(y),k=p.state.lights,St=p.state.shadowsArray,zt=k.state.version,Vt=Gt.getParameters(y,k.state,St,z,Z),Xt=Gt.getProgramCacheKey(Vt),te=J.programs;J.environment=y.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(y.isMeshStandardMaterial?X:x).get(y.envMap||J.environment),J.envMapRotation=J.environment!==null&&y.envMap===null?z.environmentRotation:y.envMapRotation,te===void 0&&(y.addEventListener("dispose",Q),te=new Map,J.programs=te);let ee=te.get(Xt);if(ee!==void 0){if(J.currentProgram===ee&&J.lightsStateVersion===zt)return ke(y,Vt),ee}else Vt.uniforms=Gt.getUniforms(y),y.onBeforeCompile(Vt,b),ee=Gt.acquireProgram(Vt,Xt),te.set(Xt,ee),J.uniforms=Vt.uniforms;let Zt=J.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Zt.clippingPlanes=gt.uniform),ke(y,Vt),J.needsLights=Sn(y),J.lightsStateVersion=zt,J.needsLights&&(Zt.ambientLightColor.value=k.state.ambient,Zt.lightProbe.value=k.state.probe,Zt.directionalLights.value=k.state.directional,Zt.directionalLightShadows.value=k.state.directionalShadow,Zt.spotLights.value=k.state.spot,Zt.spotLightShadows.value=k.state.spotShadow,Zt.rectAreaLights.value=k.state.rectArea,Zt.ltc_1.value=k.state.rectAreaLTC1,Zt.ltc_2.value=k.state.rectAreaLTC2,Zt.pointLights.value=k.state.point,Zt.pointLightShadows.value=k.state.pointShadow,Zt.hemisphereLights.value=k.state.hemi,Zt.directionalShadowMap.value=k.state.directionalShadowMap,Zt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Zt.spotShadowMap.value=k.state.spotShadowMap,Zt.spotLightMatrix.value=k.state.spotLightMatrix,Zt.spotLightMap.value=k.state.spotLightMap,Zt.pointShadowMap.value=k.state.pointShadowMap,Zt.pointShadowMatrix.value=k.state.pointShadowMatrix),J.currentProgram=ee,J.uniformsList=null,ee}function se(y){if(y.uniformsList===null){let z=y.currentProgram.getUniforms();y.uniformsList=ji.seqWithValue(z.seq,y.uniforms)}return y.uniformsList}function ke(y,z){let Z=Ot.get(y);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function gs(y,z,Z,J,k){z.isScene!==!0&&(z=it),A.resetTextureUnits();let St=z.fog,zt=J.isMeshStandardMaterial?z.environment:null,Vt=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:hi,Xt=(J.isMeshStandardMaterial?X:x).get(J.envMap||zt),te=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ee=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Zt=!!Z.morphAttributes.position,ge=!!Z.morphAttributes.normal,Se=!!Z.morphAttributes.color,Ae=ni;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ae=b.toneMapping);let Ke=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=Ke!==void 0?Ke.length:0,Jt=Ot.get(J),Ge=p.state.lights;if(st===!0&&(xt===!0||y!==dt)){let an=y===dt&&J.id===P;gt.setState(J,y,an)}let pe=!1;J.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ge.state.version||Jt.outputColorSpace!==Vt||k.isBatchedMesh&&Jt.batching===!1||!k.isBatchedMesh&&Jt.batching===!0||k.isBatchedMesh&&Jt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Jt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Jt.instancing===!1||!k.isInstancedMesh&&Jt.instancing===!0||k.isSkinnedMesh&&Jt.skinning===!1||!k.isSkinnedMesh&&Jt.skinning===!0||k.isInstancedMesh&&Jt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Jt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Jt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Jt.instancingMorph===!1&&k.morphTexture!==null||Jt.envMap!==Xt||J.fog===!0&&Jt.fog!==St||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==gt.numPlanes||Jt.numIntersection!==gt.numIntersection)||Jt.vertexAlphas!==te||Jt.vertexTangents!==ee||Jt.morphTargets!==Zt||Jt.morphNormals!==ge||Jt.morphColors!==Se||Jt.toneMapping!==Ae||Jt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Jt.__version=J.version);let fn=Jt.currentProgram;pe===!0&&(fn=Yt(J,z,k));let Ci=!1,Qe=!1,la=!1,Pe=fn.getUniforms(),qn=Jt.uniforms;if(wt.useProgram(fn.program)&&(Ci=!0,Qe=!0,la=!0),J.id!==P&&(P=J.id,Qe=!0),Ci||dt!==y){ft.reverseDepthBuffer?(Ht.copy(y.projectionMatrix),xu(Ht),vu(Ht),Pe.setValue(R,"projectionMatrix",Ht)):Pe.setValue(R,"projectionMatrix",y.projectionMatrix),Pe.setValue(R,"viewMatrix",y.matrixWorldInverse);let an=Pe.map.cameraPosition;an!==void 0&&an.setValue(R,Qt.setFromMatrixPosition(y.matrixWorld)),ft.logarithmicDepthBuffer&&Pe.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pe.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),dt!==y&&(dt=y,Qe=!0,la=!0)}if(k.isSkinnedMesh){Pe.setOptional(R,k,"bindMatrix"),Pe.setOptional(R,k,"bindMatrixInverse");let an=k.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Pe.setValue(R,"boneTexture",an.boneTexture,A))}k.isBatchedMesh&&(Pe.setOptional(R,k,"batchingTexture"),Pe.setValue(R,"batchingTexture",k._matricesTexture,A),Pe.setOptional(R,k,"batchingIdTexture"),Pe.setValue(R,"batchingIdTexture",k._indirectTexture,A),Pe.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&Pe.setValue(R,"batchingColorTexture",k._colorsTexture,A));let ha=Z.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0)&&Kt.update(k,Z,fn),(Qe||Jt.receiveShadow!==k.receiveShadow)&&(Jt.receiveShadow=k.receiveShadow,Pe.setValue(R,"receiveShadow",k.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(qn.envMap.value=Xt,qn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(qn.envMapIntensity.value=z.environmentIntensity),Qe&&(Pe.setValue(R,"toneMappingExposure",b.toneMappingExposure),Jt.needsLights&&Xn(qn,la),St&&J.fog===!0&&At.refreshFogUniforms(qn,St),At.refreshMaterialUniforms(qn,J,_t,q,p.state.transmissionRenderTarget[y.id]),ji.upload(R,se(Jt),qn,A)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ji.upload(R,se(Jt),qn,A),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pe.setValue(R,"center",k.center),Pe.setValue(R,"modelViewMatrix",k.modelViewMatrix),Pe.setValue(R,"normalMatrix",k.normalMatrix),Pe.setValue(R,"modelMatrix",k.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let an=J.uniformsGroups;for(let ua=0,Ch=an.length;ua<Ch;ua++){let zc=an[ua];M.update(zc,fn),M.bind(zc,fn)}}return fn}function Xn(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function Sn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,z,Z){Ot.get(y.texture).__webglTexture=z,Ot.get(y.depthTexture).__webglTexture=Z;let J=Ot.get(y);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,z){let Z=Ot.get(y);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(y,z=0,Z=0){N=y,V=z,B=Z;let J=!0,k=null,St=!1,zt=!1;if(y){let Xt=Ot.get(y);if(Xt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(R.FRAMEBUFFER,null),J=!1;else if(Xt.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Xt.__hasExternalTextures)A.rebindTextures(y,Ot.get(y.texture).__webglTexture,Ot.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Zt=y.depthTexture;if(Xt.__boundDepthTexture!==Zt){if(Zt!==null&&Ot.has(Zt)&&(y.width!==Zt.image.width||y.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}let te=y.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(zt=!0);let ee=Ot.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ee[z])?k=ee[z][Z]:k=ee[z],St=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?k=Ot.get(y).__webglMultisampledFramebuffer:Array.isArray(ee)?k=ee[Z]:k=ee,_.copy(y.viewport),S.copy(y.scissor),$=y.scissorTest}else _.copy(Rt).multiplyScalar(_t).floor(),S.copy(Dt).multiplyScalar(_t).floor(),$=he;if(wt.bindFramebuffer(R.FRAMEBUFFER,k)&&J&&wt.drawBuffers(y,k),wt.viewport(_),wt.scissor(S),wt.setScissorTest($),St){let Xt=Ot.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+z,Xt.__webglTexture,Z)}else if(zt){let Xt=Ot.get(y.texture),te=z||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Xt.__webglTexture,Z||0,te)}P=-1},this.readRenderTargetPixels=function(y,z,Z,J,k,St,zt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&zt!==void 0&&(Vt=Vt[zt]),Vt){wt.bindFramebuffer(R.FRAMEBUFFER,Vt);try{let Xt=y.texture,te=Xt.format,ee=Xt.type;if(!ft.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=y.width-J&&Z>=0&&Z<=y.height-k&&R.readPixels(z,Z,J,k,I.convert(te),I.convert(ee),St)}finally{let Xt=N!==null?Ot.get(N).__webglFramebuffer:null;wt.bindFramebuffer(R.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(y,z,Z,J,k,St,zt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&zt!==void 0&&(Vt=Vt[zt]),Vt){let Xt=y.texture,te=Xt.format,ee=Xt.type;if(!ft.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=y.width-J&&Z>=0&&Z<=y.height-k){wt.bindFramebuffer(R.FRAMEBUFFER,Vt);let Zt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Zt),R.bufferData(R.PIXEL_PACK_BUFFER,St.byteLength,R.STREAM_READ),R.readPixels(z,Z,J,k,I.convert(te),I.convert(ee),0);let ge=N!==null?Ot.get(N).__webglFramebuffer:null;wt.bindFramebuffer(R.FRAMEBUFFER,ge);let Se=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await _u(R,Se,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Zt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,St),R.deleteBuffer(Zt),R.deleteSync(Se),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,z=null,Z=0){y.isTexture!==!0&&(Tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1]);let J=Math.pow(2,-Z),k=Math.floor(y.image.width*J),St=Math.floor(y.image.height*J),zt=z!==null?z.x:0,Vt=z!==null?z.y:0;A.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,zt,Vt,k,St),wt.unbindTexture()},this.copyTextureToTexture=function(y,z,Z=null,J=null,k=0){y.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,y=arguments[1],z=arguments[2],k=arguments[3]||0,Z=null);let St,zt,Vt,Xt,te,ee;Z!==null?(St=Z.max.x-Z.min.x,zt=Z.max.y-Z.min.y,Vt=Z.min.x,Xt=Z.min.y):(St=y.image.width,zt=y.image.height,Vt=0,Xt=0),J!==null?(te=J.x,ee=J.y):(te=0,ee=0);let Zt=I.convert(z.format),ge=I.convert(z.type);A.setTexture2D(z,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);let Se=R.getParameter(R.UNPACK_ROW_LENGTH),Ae=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ke=R.getParameter(R.UNPACK_SKIP_PIXELS),fe=R.getParameter(R.UNPACK_SKIP_ROWS),Jt=R.getParameter(R.UNPACK_SKIP_IMAGES),Ge=y.isCompressedTexture?y.mipmaps[k]:y.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ge.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ge.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Vt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xt),y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,k,te,ee,St,zt,Zt,ge,Ge.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,k,te,ee,Ge.width,Ge.height,Zt,Ge.data):R.texSubImage2D(R.TEXTURE_2D,k,te,ee,St,zt,Zt,ge,Ge),R.pixelStorei(R.UNPACK_ROW_LENGTH,Se),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ae),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ke),R.pixelStorei(R.UNPACK_SKIP_ROWS,fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Jt),k===0&&z.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(y,z,Z=null,J=null,k=0){y.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,y=arguments[2],z=arguments[3],k=arguments[4]||0);let St,zt,Vt,Xt,te,ee,Zt,ge,Se,Ae=y.isCompressedTexture?y.mipmaps[k]:y.image;Z!==null?(St=Z.max.x-Z.min.x,zt=Z.max.y-Z.min.y,Vt=Z.max.z-Z.min.z,Xt=Z.min.x,te=Z.min.y,ee=Z.min.z):(St=Ae.width,zt=Ae.height,Vt=Ae.depth,Xt=0,te=0,ee=0),J!==null?(Zt=J.x,ge=J.y,Se=J.z):(Zt=0,ge=0,Se=0);let Ke=I.convert(z.format),fe=I.convert(z.type),Jt;if(z.isData3DTexture)A.setTexture3D(z,0),Jt=R.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)A.setTexture2DArray(z,0),Jt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);let Ge=R.getParameter(R.UNPACK_ROW_LENGTH),pe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),fn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ci=R.getParameter(R.UNPACK_SKIP_ROWS),Qe=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ae.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ae.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Xt),R.pixelStorei(R.UNPACK_SKIP_ROWS,te),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ee),y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Jt,k,Zt,ge,Se,St,zt,Vt,Ke,fe,Ae.data):z.isCompressedArrayTexture?R.compressedTexSubImage3D(Jt,k,Zt,ge,Se,St,zt,Vt,Ke,Ae.data):R.texSubImage3D(Jt,k,Zt,ge,Se,St,zt,Vt,Ke,fe,Ae),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ge),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ci),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Qe),k===0&&z.generateMipmaps&&R.generateMipmap(Jt),wt.unbindTexture()},this.initRenderTarget=function(y){Ot.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),wt.unbindTexture()},this.resetState=function(){V=0,B=0,N=null,wt.reset(),O.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ic?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===ia?"display-p3":"srgb"}};var Gr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ce(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},oi=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fo,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Je=new F,Us=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},bi=class extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wi,Ss=new F,Xi=new F,qi=new F,Yi=new yt,Es=new yt,gh=new _e,dr=new F,bs=new F,fr=new F,Ul=new yt,Va=new yt,Nl=new yt,Gn=class extends Ve{constructor(t=new bi){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vr(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Us(n,3,0,!1)),Wi.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),gh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;pr(dr.set(-.5,-.5,0),qi,a,Xi,s,r),pr(bs.set(.5,-.5,0),qi,a,Xi,s,r),pr(fr.set(.5,.5,0),qi,a,Xi,s,r),Ul.set(0,0),Va.set(1,0),Nl.set(1,1);let o=t.ray.intersectTriangle(dr,bs,fr,!1,Ss);if(o===null&&(pr(bs.set(-.5,.5,0),qi,a,Xi,s,r),Va.set(0,1),o=t.ray.intersectTriangle(dr,fr,bs,!1,Ss),o===null))return;let c=t.ray.origin.distanceTo(Ss);c<t.near||c>t.far||e.push({distance:c,point:Ss.clone(),uv:ti.getInterpolation(Ss,dr,bs,fr,Ul,Va,Nl,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pr(i,t,e,n,s,r){Yi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Es.x=r*Yi.x-s*Yi.y,Es.y=s*Yi.x+r*Yi.y):Es.copy(Yi),i.copy(t),i.x+=Es.x,i.y+=Es.y,i.applyMatrix4(gh)}var cs=class extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fl=new _e,tc=new Is,mr=new rs,gr=new F,Ns=class extends Ve{constructor(t=new De,e=new cs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;Fl.copy(s).invert(),tc.copy(t.ray).applyMatrix4(Fl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let p=l.getX(g);gr.fromBufferAttribute(u,p),Ol(gr,p,c,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)gr.fromBufferAttribute(u,g),Ol(gr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ol(i,t,e,n,s,r,a){let o=tc.distanceSqToPoint(i);if(o<e){let c=new F;tc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var sn=class extends en{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new yt:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new F,s=[],r=[],a=[],o=new F,c=new _e;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(qe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fs=class extends hn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new yt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ec=class extends Fs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var _r=new F,Wa=new Dc,Xa=new Dc,qa=new Dc,nc=class extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(_r.subVectors(s[0],s[1]).add(s[0]),l=_r);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_r.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_r),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Wa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,p),Xa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,p),qa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Xa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),qa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Wa.calc(c),Xa.calc(c),qa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bl(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function mg(i,t){let e=1-i;return e*e*t}function gg(i,t){return 2*(1-i)*i*t}function _g(i,t){return i*i*t}function Rs(i,t,e,n){return mg(i,t)+gg(i,e)+_g(i,n)}function xg(i,t){let e=1-i;return e*e*e*t}function vg(i,t){let e=1-i;return 3*e*e*i*t}function yg(i,t){return 3*(1-i)*i*i*t}function Mg(i,t){return i*i*i*t}function Cs(i,t,e,n,s){return xg(i,t)+vg(i,e)+yg(i,n)+Mg(i,s)}var Wr=class extends hn{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ic=class extends hn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y),Cs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xr=class extends hn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends hn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends hn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,s.x,r.x,a.x),Rs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rc=class extends hn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,s.x,r.x,a.x),Rs(t,s.y,r.y,a.y),Rs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Bl(o,c.x,l.x,h.x,u.x),Bl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new yt().fromArray(s))}return this}},ac=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:nc,CubicBezierCurve:Wr,CubicBezierCurve3:ic,EllipseCurve:Fs,LineCurve:Xr,LineCurve3:sc,QuadraticBezierCurve:qr,QuadraticBezierCurve3:rc,SplineCurve:Yr}),oc=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ac[s.type]().fromJSON(s))}return this}},Zr=class extends oc{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Xr(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new qr(this.currentPoint.clone(),new yt(t,e),new yt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Wr(this.currentPoint.clone(),new yt(t,e),new yt(n,s),new yt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Yr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Fs(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var He=class i extends De{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],p=n/2,m=0;C(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function C(){let T=new F,V=new F,B=0,N=(e-t)/n;for(let P=0;P<=r;P++){let dt=[],_=P/r,S=_*(e-t)+t;for(let $=0;$<=s;$++){let Y=$/s,K=Y*c+o,ot=Math.sin(K),q=Math.cos(K);V.x=S*ot,V.y=-_*n+p,V.z=S*q,u.push(V.x,V.y,V.z),T.set(ot,N,q).normalize(),d.push(T.x,T.y,T.z),f.push(Y,1-_),dt.push(g++)}v.push(dt)}for(let P=0;P<s;P++)for(let dt=0;dt<r;dt++){let _=v[dt][P],S=v[dt+1][P],$=v[dt+1][P+1],Y=v[dt][P+1];t>0&&(h.push(_,S,Y),B+=3),e>0&&(h.push(S,$,Y),B+=3)}l.addGroup(m,B,0),m+=B}function b(T){let V=g,B=new yt,N=new F,P=0,dt=T===!0?t:e,_=T===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),g++;let S=g;for(let $=0;$<=s;$++){let K=$/s*c+o,ot=Math.cos(K),q=Math.sin(K);N.x=dt*q,N.y=p*_,N.z=dt*ot,u.push(N.x,N.y,N.z),d.push(0,_,0),B.x=ot*.5+.5,B.y=q*.5*_+.5,f.push(B.x,B.y),g++}for(let $=0;$<s;$++){let Y=V+$,K=S+$;T===!0?h.push(K,K+1,Y):h.push(K+1,K,Y),P+=3}l.addGroup(m,P,T===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ci=class i extends He{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var wi=class extends Zr{constructor(t){super(t),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Zr().fromJSON(s))}return this}},Sg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_h(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=Ag(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Os(r,a,e,o,c,f,0),a}};function _h(i,t,e,n,s){let r,a;if(s===Bg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=zl(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=zl(r,i[r],i[r+1],a);return a&&ra(a,a.next)&&(zs(a),a=a.next),a}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ra(e,e.next)||we(e.prev,e,e.next)===0)){if(zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Os(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Lg(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?bg(i,n,s,r):Eg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),zs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=wg(Ti(i),t,e),Os(i,t,e,n,s,r,2)):a===2&&Tg(i,t,e,n,s,r):Os(Ti(i),t,e,n,s,r,1);break}}}function Eg(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ji(s,o,r,c,a,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(we(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=o>c?o>l?o:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=cc(f,g,t,e,n),C=cc(v,p,t,e,n),b=i.prevZ,T=i.nextZ;for(;b&&b.z>=m&&T&&T.z<=C;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&Ji(o,h,c,u,l,d,b.x,b.y)&&we(b.prev,b,b.next)>=0||(b=b.prevZ,T.x>=f&&T.x<=v&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&Ji(o,h,c,u,l,d,T.x,T.y)&&we(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&Ji(o,h,c,u,l,d,b.x,b.y)&&we(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;T&&T.z<=C;){if(T.x>=f&&T.x<=v&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&Ji(o,h,c,u,l,d,T.x,T.y)&&we(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function wg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ra(s,r)&&xh(s,n,n.next,r)&&Bs(s,r)&&Bs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),zs(n),zs(n.next),n=i=r),n=n.next}while(n!==i);return Ti(n)}function Tg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ng(a,o)){let c=vh(a,o);a=Ti(a,a.next),c=Ti(c,c.next),Os(a,t,e,n,s,r,0),Os(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ag(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=_h(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Ug(l));for(s.sort(Rg),r=0;r<s.length;r++)e=Cg(s[r],e);return e}function Rg(i,t){return i.x-t.x}function Cg(i,t){let e=Pg(i,t);if(!e)return t;let n=vh(e,i);return Ti(n,n.next),Ti(e,e.next)}function Pg(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ji(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Bs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Ig(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Ig(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function Lg(i,t,e,n){let s=i;do s.z===0&&(s.z=cc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dg(s)}function Dg(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function cc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ug(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ji(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ng(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Fg(i,t)&&(Bs(i,t)&&Bs(t,i)&&Og(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||ra(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ra(i,t){return i.x===t.x&&i.y===t.y}function xh(i,t,e,n){let s=vr(we(i,t,e)),r=vr(we(i,t,n)),a=vr(we(e,n,i)),o=vr(we(e,n,t));return!!(s!==r&&a!==o||s===0&&xr(i,e,t)||r===0&&xr(i,n,t)||a===0&&xr(e,i,n)||o===0&&xr(e,t,n))}function xr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vr(i){return i>0?1:i<0?-1:0}function Fg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Bs(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function Og(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vh(i,t){let e=new lc(i.i,i.x,i.y),n=new lc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zl(i,t,e,n){let s=new lc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ii=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Hl(t),kl(n,t);let a=t.length;e.forEach(Hl);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,kl(n,e[c]);let o=Sg.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Hl(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Jr=class i extends De{constructor(t=new wi([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,C=e.UVGenerator!==void 0?e.UVGenerator:zg,b,T=!1,V,B,N,P;m&&(b=m.getSpacedPoints(h),T=!0,d=!1,V=m.computeFrenetFrames(h,!1),B=new F,N=new F,P=new F),d||(p=0,f=0,g=0,v=0);let dt=o.extractPoints(l),_=dt.shape,S=dt.holes;if(!ii.isClockWise(_)){_=_.reverse();for(let ct=0,R=S.length;ct<R;ct++){let Tt=S[ct];ii.isClockWise(Tt)&&(S[ct]=Tt.reverse())}}let Y=ii.triangulateShape(_,S),K=_;for(let ct=0,R=S.length;ct<R;ct++){let Tt=S[ct];_=_.concat(Tt)}function ot(ct,R,Tt){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(R,Tt)}let q=_.length,_t=Y.length;function j(ct,R,Tt){let Mt,ft,wt,mt=ct.x-R.x,Ot=ct.y-R.y,A=Tt.x-ct.x,x=Tt.y-ct.y,X=mt*mt+Ot*Ot,tt=mt*x-Ot*A;if(Math.abs(tt)>Number.EPSILON){let lt=Math.sqrt(X),et=Math.sqrt(A*A+x*x),Gt=R.x-Ot/lt,At=R.y+mt/lt,Bt=Tt.x-x/et,ue=Tt.y+A/et,gt=((Bt-Gt)*x-(ue-At)*A)/(mt*x-Ot*A);Mt=Gt+mt*gt-ct.x,ft=At+Ot*gt-ct.y;let Ut=Mt*Mt+ft*ft;if(Ut<=2)return new yt(Mt,ft);wt=Math.sqrt(Ut/2)}else{let lt=!1;mt>Number.EPSILON?A>Number.EPSILON&&(lt=!0):mt<-Number.EPSILON?A<-Number.EPSILON&&(lt=!0):Math.sign(Ot)===Math.sign(x)&&(lt=!0),lt?(Mt=-Ot,ft=mt,wt=Math.sqrt(X)):(Mt=mt,ft=Ot,wt=Math.sqrt(X/2))}return new yt(Mt/wt,ft/wt)}let Lt=[];for(let ct=0,R=K.length,Tt=R-1,Mt=ct+1;ct<R;ct++,Tt++,Mt++)Tt===R&&(Tt=0),Mt===R&&(Mt=0),Lt[ct]=j(K[ct],K[Tt],K[Mt]);let Rt=[],Dt,he=Lt.concat();for(let ct=0,R=S.length;ct<R;ct++){let Tt=S[ct];Dt=[];for(let Mt=0,ft=Tt.length,wt=ft-1,mt=Mt+1;Mt<ft;Mt++,wt++,mt++)wt===ft&&(wt=0),mt===ft&&(mt=0),Dt[Mt]=j(Tt[Mt],Tt[wt],Tt[mt]);Rt.push(Dt),he=he.concat(Dt)}for(let ct=0;ct<p;ct++){let R=ct/p,Tt=f*Math.cos(R*Math.PI/2),Mt=g*Math.sin(R*Math.PI/2)+v;for(let ft=0,wt=K.length;ft<wt;ft++){let mt=ot(K[ft],Lt[ft],Mt);Ct(mt.x,mt.y,-Tt)}for(let ft=0,wt=S.length;ft<wt;ft++){let mt=S[ft];Dt=Rt[ft];for(let Ot=0,A=mt.length;Ot<A;Ot++){let x=ot(mt[Ot],Dt[Ot],Mt);Ct(x.x,x.y,-Tt)}}}let de=g+v;for(let ct=0;ct<q;ct++){let R=d?ot(_[ct],he[ct],de):_[ct];T?(N.copy(V.normals[0]).multiplyScalar(R.x),B.copy(V.binormals[0]).multiplyScalar(R.y),P.copy(b[0]).add(N).add(B),Ct(P.x,P.y,P.z)):Ct(R.x,R.y,0)}for(let ct=1;ct<=h;ct++)for(let R=0;R<q;R++){let Tt=d?ot(_[R],he[R],de):_[R];T?(N.copy(V.normals[ct]).multiplyScalar(Tt.x),B.copy(V.binormals[ct]).multiplyScalar(Tt.y),P.copy(b[ct]).add(N).add(B),Ct(P.x,P.y,P.z)):Ct(Tt.x,Tt.y,u/h*ct)}for(let ct=p-1;ct>=0;ct--){let R=ct/p,Tt=f*Math.cos(R*Math.PI/2),Mt=g*Math.sin(R*Math.PI/2)+v;for(let ft=0,wt=K.length;ft<wt;ft++){let mt=ot(K[ft],Lt[ft],Mt);Ct(mt.x,mt.y,u+Tt)}for(let ft=0,wt=S.length;ft<wt;ft++){let mt=S[ft];Dt=Rt[ft];for(let Ot=0,A=mt.length;Ot<A;Ot++){let x=ot(mt[Ot],Dt[Ot],Mt);T?Ct(x.x,x.y+b[h-1].y,b[h-1].x+Tt):Ct(x.x,x.y,u+Tt)}}}st(),xt();function st(){let ct=s.length/3;if(d){let R=0,Tt=q*R;for(let Mt=0;Mt<_t;Mt++){let ft=Y[Mt];Qt(ft[2]+Tt,ft[1]+Tt,ft[0]+Tt)}R=h+p*2,Tt=q*R;for(let Mt=0;Mt<_t;Mt++){let ft=Y[Mt];Qt(ft[0]+Tt,ft[1]+Tt,ft[2]+Tt)}}else{for(let R=0;R<_t;R++){let Tt=Y[R];Qt(Tt[2],Tt[1],Tt[0])}for(let R=0;R<_t;R++){let Tt=Y[R];Qt(Tt[0]+q*h,Tt[1]+q*h,Tt[2]+q*h)}}n.addGroup(ct,s.length/3-ct,0)}function xt(){let ct=s.length/3,R=0;Ht(K,R),R+=K.length;for(let Tt=0,Mt=S.length;Tt<Mt;Tt++){let ft=S[Tt];Ht(ft,R),R+=ft.length}n.addGroup(ct,s.length/3-ct,1)}function Ht(ct,R){let Tt=ct.length;for(;--Tt>=0;){let Mt=Tt,ft=Tt-1;ft<0&&(ft=ct.length-1);for(let wt=0,mt=h+p*2;wt<mt;wt++){let Ot=q*wt,A=q*(wt+1),x=R+Mt+Ot,X=R+ft+Ot,tt=R+ft+A,lt=R+Mt+A;$t(x,X,tt,lt)}}}function Ct(ct,R,Tt){c.push(ct),c.push(R),c.push(Tt)}function Qt(ct,R,Tt){it(ct),it(R),it(Tt);let Mt=s.length/3,ft=C.generateTopUV(n,s,Mt-3,Mt-2,Mt-1);re(ft[0]),re(ft[1]),re(ft[2])}function $t(ct,R,Tt,Mt){it(ct),it(R),it(Mt),it(R),it(Tt),it(Mt);let ft=s.length/3,wt=C.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);re(wt[0]),re(wt[1]),re(wt[3]),re(wt[1]),re(wt[2]),re(wt[3])}function it(ct){s.push(c[ct*3+0]),s.push(c[ct*3+1]),s.push(c[ct*3+2])}function re(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ac[s.type]().fromJSON(s)),new i(n,t.options)}},zg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new yt(r,a),new yt(o,c),new yt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new yt(a,1-c),new yt(l,1-u),new yt(d,1-g),new yt(v,1-m)]:[new yt(o,1-c),new yt(h,1-u),new yt(f,1-g),new yt(p,1-m)]}};function Hg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $r=class i extends De{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new F,g=new yt;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){let p=v*(n+1);for(let m=0;m<n;m++){let C=m+p,b=C,T=C+n+1,V=C+n+2,B=C+1;o.push(b,T,B),o.push(T,V,B)}}this.setIndex(o),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Kr=class i extends De{constructor(t=new wi([new yt(0,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(a,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;ii.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let C=g[p];ii.isClockWise(C)===!0&&(g[p]=C.reverse())}let v=ii.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let C=g[p];f=f.concat(C)}for(let p=0,m=f.length;p<m;p++){let C=f[p];s.push(C.x,C.y,0),r.push(0,0,1),a.push(C.x,C.y)}for(let p=0,m=v.length;p<m;p++){let C=v[p],b=C[0]+u,T=C[1]+u,V=C[2]+u;n.push(b,T,V),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return kg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function kg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var rn=class i extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new F,d=new F,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let C=[],b=m/n,T=0;m===0&&a===0?T=.5/e:m===n&&c===Math.PI&&(T=-.5/e);for(let V=0;V<=e;V++){let B=V/e;u.x=-t*Math.cos(s+B*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+B*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(B+T,1-b),C.push(l++)}h.push(C)}for(let m=0;m<n;m++)for(let C=0;C<e;C++){let b=h[m][C+1],T=h[m][C],V=h[m+1][C],B=h[m+1][C+1];(m!==0||a>0)&&f.push(b,T,B),(m!==n-1||c<Math.PI)&&f.push(T,V,B)}this.setIndex(f),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qr=class i extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new F,u=new F,d=new F;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,C=(s+1)*f+g;a.push(v,p,C),a.push(p,m,C)}this.setIndex(a),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ce=class extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function yr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wc:r=t,o=2*e-n;break;case Xc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wc:a=t,c=2*n-e;break;case Xc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,C=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*p+(1.5+f)*v+.5*g,T=f*p-f*v;for(let V=0;V!==o;++V)r[V]=m*a[h+V]+C*a[l+V]+b*a[c+V]+T*a[u+V];return r}},uc=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},dc=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case No:e=this.InterpolantFactoryMethodLinear;break;case fa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return No;case this.InterpolantFactoryMethodSmooth:return fa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Gg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=No;var Ai=class extends yn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Ar;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends yn{};fc.prototype.ValueTypeName="color";var pc=class extends yn{};pc.prototype.ValueTypeName="number";var mc=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)ai.slerpFlat(r,0,a,l-o,a,l,c);return r}},jr=class extends yn{InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}};jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends yn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Ar;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends yn{};gc.prototype.ValueTypeName="vector";var _c=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Vg=new _c,xc=class{constructor(t){this.manager=t!==void 0?t:Vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hs=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},hs=class extends Hs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ya=new _e,Gl=new F,Vl=new F,ta=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Gl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gl),Vl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vl),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Wl=new _e,ws=new F,Za=new F,vc=class extends ta{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),Za.copy(n.position),Za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Za),n.updateMatrixWorld(),s.makeTranslation(-ws.x,-ws.y,-ws.z),Wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl)}},us=class extends Hs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},yc=class extends ta{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},li=class extends Hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new yc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Uc="\\[\\]\\.:\\/",Wg=new RegExp("["+Uc+"]","g"),Nc="[^"+Uc+"]",Xg="[^"+Uc.replace("\\.","")+"]",qg=/((?:WC+[\/:])*)/.source.replace("WC",Nc),Yg=/(WCOD+)?/.source.replace("WCOD",Xg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),$g=new RegExp("^"+qg+Yg+Zg+Jg+"$"),Kg=["material","materials","bones","map"],Mc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wg,"")}static parseTrackName(t){let e=$g.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Mc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i0=new Float32Array(1);var Xl=new _e,ea=class{constructor(t,e,n=0,s=1/0){this.ray=new Is(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xl),this}intersectObject(t,e=!0,n=[]){return Sc(t,this,n,e),n.sort(ql),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Sc(t[s],this,n,e);return n.sort(ql),n}};function ql(i,t){return i.distance-t.distance}function Sc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Sc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var aa=class extends oi{constructor(){super();let t=new Me;t.deleteAttribute("uv");let e=new Ce({side:Ye}),n=new Ce,s=new us(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new bt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new bt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new bt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let c=new bt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new bt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new bt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new bt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new bt(t,fs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new bt(t,fs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new bt(t,fs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new bt(t,fs(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let p=new bt(t,fs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new bt(t,fs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function fs(i){let t=new ze;return t.color.setScalar(i),t}function Sh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new De,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Mh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let g=Mh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Mh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ue(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let v=h.getComponent(d,g);o.setComponent(d+u,g,v)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Gs=new F;function un(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Gs.copy(t),Gs[n]=0,Gs.normalize();let l=.5*a/(a+o),h=1-Gs.angleTo(i)/c;return Math.sign(Gs[e])===1?h*l:o/(a+o)+l+l*(1-h)}var oa=class extends Me{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new F,c=new F,l=new F(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new F,v=.5/s;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(o.fromArray(h,p),c.copy(o),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[p+0]=l.x*Math.sign(o.x)+c.x*r,h[p+1]=l.y*Math.sign(o.y)+c.y*r,h[p+2]=l.z*Math.sign(o.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/f)){case 0:g.set(1,0,0),d[m+0]=un(g,c,"z","y",r,n),d[m+1]=1-un(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[m+0]=1-un(g,c,"z","y",r,n),d[m+1]=1-un(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[m+0]=1-un(g,c,"x","z",r,t),d[m+1]=un(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[m+0]=1-un(g,c,"x","z",r,t),d[m+1]=1-un(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[m+0]=1-un(g,c,"x","y",r,t),d[m+1]=1-un(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[m+0]=un(g,c,"x","y",r,t),d[m+1]=1-un(g,c,"y","x",r,e);break}}};var Qg=!1,Te=(i,t={})=>new Ce(Object.assign({color:i,roughness:.45,metalness:.1},t)),pt={red:Te(13112346,{roughness:.32,metalness:.25}),redD:Te(9047312,{roughness:.5}),white:Te(15921904,{roughness:.35}),chrome:Te(14540253,{metalness:1,roughness:.18}),alu:Te(12106948,{metalness:.85,roughness:.35}),black:Te(1579035,{roughness:.8}),tire:Te(1315862,{roughness:.9}),glass:Te(3955320,{metalness:.9,roughness:.06,envMapIntensity:2.2}),head:Te(16777215,{emissive:16774348,emissiveIntensity:2.2}),tail:Te(6684672,{emissive:16718352,emissiveIntensity:1.4}),lr:Te(5570560,{emissive:16719904,emissiveIntensity:1.6}),lb:Te(2133,{emissive:2117887,emissiveIntensity:1.8}),yel:Te(16761370,{roughness:.4}),refl:Te(16117960,{emissive:4209168,roughness:.3}),hose:Te(15127162,{roughness:.7}),grey:Te(6053992,{roughness:.6}),orange:Te(16742930,{roughness:.35,metalness:.2}),blue:Te(1916826,{roughness:.35,metalness:.2}),navy:Te(1319229,{roughness:.4}),cone:Te(16734736,{roughness:.55})},Eh={red:[13112346,.32,.25],redD:[9047312,.5,.1],refl:[16117960,.3,.1],chrome:[14540253,.18,1],alu:[12106948,.35,.85],white:[15921904,.35,.1],hose:[15127162,.7,.1]};function Ze(i,t,e,n,s){let r=pt[i];r.color.setHex(t),r.roughness=e,r.metalness=n,r.emissive.setHex(s||0),r.emissiveIntensity=s?.35:1}var ca=1;function jg(i){for(let t in Eh)Ze(t,...Eh[t]);ca=1,i===1&&(Ze("red",14161436,.22,.35),Ze("redD",15921904,.3,.1),Ze("alu",15000804,.15,1)),i===2&&(Ze("red",10357010,.16,.65),Ze("redD",1710622,.4,.3),Ze("refl",14725168,.25,.9,3811840),Ze("alu",15790320,.1,1),ca=1.25,Ze("white",16184298,.18,.35)),i===3&&(Ze("red",1184535,.16,.75),Ze("redD",14263594,.2,1),Ze("refl",16764746,.2,1,4862464),Ze("chrome",16765802,.12,1),Ze("alu",13213760,.18,1),ca=1.35,Ze("white",16447212,.15,.3),Ze("hose",16765802,.3,.8))}function It(i,t,e,n,s,r,a,o,c=.02){let l=new bt(c?new oa(t,e,n,2,c):new Me(t,e,n),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function dn(i,t,e,n,s,r,a,o="z",c=24){let l=new bt(new He(t,t,e,c),n);return o==="z"?l.rotation.x=Math.PI/2:o==="x"&&(l.rotation.z=Math.PI/2),l.position.set(s,r,a),l.castShadow=!0,i.add(l),l}function bh(i,t,e,n=.075,s=.06){dn(i,n,s,pt.tire,t,n,e);let r=dn(i,n*.6,s+.004,pt.chrome,t,n,e);dn(i,n*.22,s+.01,pt.grey,t,n,e)}function Vn(i,t,e,n){t.forEach(s=>{bh(i,s,e/2-.025,n),bh(i,s,-e/2+.025,n)})}function ps(i,t,e,n,s=.05){s*=ca*(Qg?.5:1),It(i,s*.9,.012,n,pt.chrome,t,e,0,.004),It(i,s*.7,.018,n*.44,pt.lr,t,e+.012,-n*.24,.008),It(i,s*.7,.018,n*.44,pt.lb,t,e+.012,n*.24,.008),i.userData.lb=[[t,e+.02,-n*.25],[t,e+.02,n*.25]]}function Vs(i,t,e,n){It(i,.012,.022,.05,pt.head,t,e,n/2-.06,.005),It(i,.012,.022,.05,pt.head,t,e,-n/2+.06,.005)}function Wn(i,t,e,n){It(i,.01,.03,.03,pt.tail,t,e,n/2-.03,.004),It(i,.01,.03,.03,pt.tail,t,e,-n/2+.03,.004)}function Ws(i,t,e,n,s,r,a=!0){let o=e-t,c=(t+e)/2;It(i,o,s-.06,n,r,c,.06+(s-.06)/2,0,.035),It(i,.014,s*.36,n*.9,pt.glass,e+.002,s*.7,0,.006),It(i,o*.6,s*.3,.008,pt.glass,e-o*.33,s*.7,n/2+.002,.003),It(i,o*.6,s*.3,.008,pt.glass,e-o*.33,s*.7,-n/2-.002,.003),It(i,.006,.03,.02,pt.chrome,e-.02,s*.62,n/2+.02,0),It(i,.006,.03,.02,pt.chrome,e-.02,s*.62,-n/2-.02,0),It(i,.012,.03,n*.6,pt.black,e+.006,s*.2,0,.004),It(i,.02,.04,n*.95,pt.chrome,e+.008,.08,0,.01),It(i,.008,s*.18,n*.5,pt.chrome,e+.004,s*.38,0,.004),Vs(i,e+.006,s*.36,n),a&&ps(i,c+o*.1,s+.012,n*.85,o*.4)}function ui(i,t,e,n,s,r=pt.refl){It(i,e-t,.018,s+.004,r,(t+e)/2,n,0,0)}var Mn={};Mn.E=()=>{let i=new le,t=.42,e=.27;Ws(i,.16,.42,t,e+.02,pt.red),It(i,.58,e-.04,t,pt.red,-.13,.06+(e-.04)/2,0,.03);for(let n=0;n<3;n++)It(i,.15,e*.5,.006,pt.alu,-.36+n*.17,.17,t/2+.002,.004),It(i,.15,e*.5,.006,pt.alu,-.36+n*.17,.17,-t/2-.002,.004);ui(i,-.42,.42,.1,t),It(i,.5,.03,t*.8,pt.redD,-.13,e+.03,0,.01);for(let n=0;n<4;n++)dn(i,.03,t*.6,pt.hose,-.32+n*.065,e+.06,0,"z",16);[-1,1].forEach(n=>It(i,.6,.012,.012,pt.alu,-.1,e+.1,n*t*.33,0));for(let n=0;n<9;n++)It(i,.01,.01,t*.66,pt.alu,-.38+n*.07,e+.1,0,0);return Wn(i,-.425,.17,t),Vn(i,[.3,-.22,-.33],t,.07),i};Mn.K=()=>{let i=new le,t=.42,e=.25;Ws(i,.24,.47,t,e+.04,pt.red),It(i,.7,e-.06,t,pt.red,-.12,.06+(e-.06)/2,0,.03),ui(i,-.47,.47,.1,t);for(let s=0;s<3;s++)It(i,.18,e*.45,.006,pt.alu,-.38+s*.2,.15,t/2+.002,.004),It(i,.18,e*.45,.006,pt.alu,-.38+s*.2,.15,-t/2-.002,.004);dn(i,.07,.06,pt.alu,-.36,e+.02,0,"y");let n=new le;n.position.set(-.36,e+.08,0),n.rotation.z=-.03,i.add(n),n.userData.ladder=1,[-1,1].forEach(s=>{It(n,.9,.035,.025,pt.alu,.4,0,s*.11,.005)});for(let s=0;s<14;s++)It(n,.012,.012,.2,pt.chrome,-.02+s*.065,0,0,0);return It(n,.12,.06,.18,pt.redD,0,-.03,0,.01),Wn(i,-.475,.15,t),Vn(i,[.36,-.25,-.37],t,.07),i};Mn.T=()=>{let i=new le,t=.42;Ws(i,.18,.43,t,.27+.02,pt.red),It(i,.6,.05,t*.9,pt.redD,-.12,.08,0,.01);let n=dn(i,.135,.56,pt.chrome,-.13,.24,0,"x",32);return[-.38,-.13,.12].forEach(s=>dn(i,.142,.02,pt.red,s,.24,0,"x",32)),It(i,.05,.03,.1,pt.alu,-.1,.385,0,.01),ui(i,-.42,.18,.09,t*.9),Wn(i,-.42,.14,t*.9),Vn(i,[.31,-.23,-.34],t,.07),i};Mn.A=()=>{let i=new le,t=.4,e=.3;return Ws(i,.2,.42,t,e*.8,pt.white,!1),It(i,.6,e-.04,t,pt.white,-.1,.06+(e-.04)/2,0,.035),ui(i,-.4,.42,.13,t,pt.red),ui(i,-.4,.2,.27,t,pt.orange),[-1,1].forEach(n=>{It(i,.08,.025,.006,pt.red,-.1,.2,n*(t/2+.003),0),It(i,.025,.08,.006,pt.red,-.1,.2,n*(t/2+.003),0)}),It(i,.08,.006,.025,pt.red,-.1,e+.024,0,0),It(i,.025,.006,.08,pt.red,-.1,e+.024,0,0),ps(i,.31,e*.8+.012,t*.8,.06),It(i,.02,.03,t*.9,pt.lr,-.39,e+.01,0,.006),Wn(i,-.405,.15,t),Vn(i,[.3,-.26],t,.065),i};Mn.V=()=>{let i=new le,t=.38,e=.27;return It(i,.68,e-.05,t,pt.orange,0,.05+(e-.05)/2,0,.06),It(i,.15,.1,t*.9,pt.glass,.27,.2,0,.02),It(i,.012,.09,t*.8,pt.glass,.342,.2,0,.004),It(i,.3,.08,.006,pt.glass,0,.2,t/2+.001,.003),It(i,.3,.08,.006,pt.glass,0,.2,-t/2-.001,.003),ui(i,-.34,.34,.11,t,pt.refl),Vs(i,.343,.12,t),It(i,.02,.03,t*.95,pt.chrome,.345,.07,0,.01),ps(i,.18,e+.012,t*.8,.05),Wn(i,-.343,.14,t),It(i,.3,.012,t*.7,pt.alu,-.1,e+.01,0,0),Vn(i,[.22,-.22],t,.06),i};Mn.P=()=>{let i=new le,t=.34,e=.2;return It(i,.64,.1,t,pt.white,0,.1,0,.04),It(i,.32,.09,t*.86,pt.navy,-.03,.19,0,.035),It(i,.012,.075,t*.76,pt.glass,.13,.19,0,.004),It(i,.012,.07,t*.76,pt.glass,-.19,.19,0,.004),It(i,.26,.06,.006,pt.glass,-.03,.19,t*.43+.001,.003),It(i,.26,.06,.006,pt.glass,-.03,.19,-t*.43-.001,.003),[-1,1].forEach(n=>It(i,.36,.04,.006,pt.blue,0,.1,n*(t/2+.002),0)),ps(i,-.03,.24,t*.8,.045),Vs(i,.322,.11,t),Wn(i,-.322,.11,t),It(i,.02,.03,t*.9,pt.black,.33,.07,0,.01),Vn(i,[.2,-.2],t,.055),i};Mn.C=()=>{let i=new le,t=.36,e=.22;return It(i,.66,.13,t,pt.red,0,.115,0,.045),It(i,.4,.1,t*.9,pt.red,-.06,.22,0,.035),It(i,.012,.08,t*.8,pt.glass,.145,.22,0,.004),It(i,.34,.07,.006,pt.glass,-.06,.225,t*.45+.001,.003),It(i,.34,.07,.006,pt.glass,-.06,.225,-t*.45-.001,.003),ui(i,-.33,.33,.12,t,pt.refl),ps(i,-.02,.28,t*.8,.045),Vs(i,.332,.13,t),Wn(i,-.332,.14,t),It(i,.02,.04,t*.95,pt.chrome,.335,.08,0,.01),It(i,.2,.012,t*.8,pt.black,-.1,.276,0,0),Vn(i,[.21,-.21],t,.062),i};Mn.W=()=>{let i=new le,t=.4,e=.26;Ws(i,-.08,.2,t,e,pt.yel),It(i,.1,.06,t*.6,pt.grey,.25,.09,0,.01);let n=It(i,.36,.04,.06,pt.alu,.16,.25,0,.01);return n.rotation.z=.35,It(i,.03,.12,.03,pt.chrome,.34,.24,0,.005),It(i,.32,.06,t*.9,pt.alu,-.24,.1,0,.02),ui(i,-.4,-.08,.1,t*.9,pt.grey),Wn(i,-.405,.13,t*.9),ps(i,.06,e+.012,t*.8,.05),Vn(i,[.13,-.27],t,.07),i.children.forEach(s=>{}),i};function Fc(i){let t=new le,e=.34,n=Te(i,{roughness:.28,metalness:.35});return It(t,.66,.1,e,n,0,.1,0,.045),It(t,.34,.09,e*.86,n,-.03,.19,0,.04),It(t,.012,.075,e*.76,pt.glass,.135,.19,0,.004),It(t,.012,.07,e*.76,pt.glass,-.195,.19,0,.004),It(t,.27,.06,.006,pt.glass,-.03,.19,e*.43+.001,.003),It(t,.27,.06,.006,pt.glass,-.03,.19,-e*.43-.001,.003),Vs(t,.332,.11,e),Wn(t,-.332,.11,e),Vn(t,[.21,-.21],e,.055),t}function wh(){let i=new le;It(i,.26,.02,.26,pt.black,0,.01,0,.01);let t=new bt(new ci(.09,.32,24),pt.cone);t.position.y=.18,t.castShadow=!0,i.add(t);let e=new bt(new He(.052,.068,.06,24,1,!0),Te(16777215,{emissive:3355443}));return e.position.y=.17,i.add(e),i}function Th(){let i=new le;[-1,1].forEach(s=>{It(i,.04,.22,.04,pt.alu,0,.11,s*.32,.01),It(i,.2,.02,.05,pt.grey,0,.01,s*.32,.005)});let t=document.createElement("canvas");t.width=256,t.height=32;let e=t.getContext("2d");for(let s=0;s<8;s++)e.fillStyle=s%2?"#fff":"#e01818",e.beginPath(),e.moveTo(s*32,0),e.lineTo(s*32+32,0),e.lineTo(s*32+16,32),e.lineTo(s*32-16,32),e.fill();let n=new sn(t);return n.colorSpace=Re,It(i,.04,.08,.76,new Ce({map:n,roughness:.4}),0,.2,0,0),It(i,.012,.012,.012,pt.lr,0,.27,-.32,0),It(i,.012,.012,.012,pt.lr,0,.27,.32,0),i}function Ah(){let i=new le,t=Te(14161944,{roughness:.35,metalness:.3});dn(i,.065,.2,t,0,.12,0,"y"),dn(i,.08,.03,t,0,.02,0,"y");let e=new bt(new rn(.068,24,12,0,Math.PI*2,0,Math.PI/2),t);return e.position.y=.22,i.add(e),dn(i,.02,.03,pt.chrome,0,.29,0,"y"),dn(i,.03,.2,pt.chrome,0,.15,0,"x"),dn(i,.035,.05,pt.chrome,0,.15,.07,"z"),i}function Oc(i){jg(i)}var Rh=Math.PI*2,ms=(i,t,e)=>Math.max(t,Math.min(e,i)),Bc=(i,t,e)=>i+(t-i)*e,e0=new URLSearchParams(location.search),Ie=window.R3={ok:!1,lost:!1,frames:0,ms:0};function n0(){if(e0.get("r")==="2d"||window.SAVE&&SAVE.r2d)return Tn("2D renderer forced");let i;try{i=new kr({antialias:!0,alpha:!0,powerPreference:"high-performance",premultipliedAlpha:!0,stencil:!1})}catch(U){return Tn("WebGL unavailable \u2192 2D",U&&U.message)}if(!i.getContext())return;i.setPixelRatio(1),i.outputColorSpace=Re,i.toneMapping=bc,i.toneMappingExposure=1,i.shadowMap.enabled=!0,i.shadowMap.type=Ec,i.autoClear=!1;let t=i.domElement;t.addEventListener("webglcontextlost",U=>{U.preventDefault(),Ie.lost=!0,Tn("context lost \u2192 2D fallback")}),t.addEventListener("webglcontextrestored",()=>{Ie.lost=!1,Tn("context restored")}),Ie.R=i,Ie.ok=!0;let n=new os(i).fromScene(new aa,.04).texture,s=()=>!(SAVE.gfx==="low"||SAVE.gfx==="auto"&&window.V2&&V2.lowAuto);function r(U,I){let O=new yt;i.getSize(O),(O.x<U||O.y<I)&&i.setSize(Math.max(O.x,U,8),Math.max(O.y,I,8),!1)}function a(U,I){r(U,I),i.setViewport(0,0,U,I),i.setScissor(0,0,U,I),i.setScissorTest(!0),i.setClearColor(0,0),i.clear(!0,!0,!0)}function o(U,I,O,M,L,w,D){U.drawImage(t,0,t.height-O,I,O,M,L,w,D)}let c=()=>s()?Math.min(DPR,Ie.prCap||2):Math.min(DPR,1.1);function l(U,I=128){let O=document.createElement("canvas");O.width=O.height=I;let M=O.getContext("2d"),L=M.createRadialGradient(I/2,I/2,0,I/2,I/2,I/2);U.forEach(([D,H])=>L.addColorStop(D,H)),M.fillStyle=L,M.fillRect(0,0,I,I);let w=new sn(O);return w.colorSpace=Re,w}let h=l([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,.55)"],[1,"rgba(255,255,255,0)"]]),u=l([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,.4)"],[1,"rgba(255,255,255,0)"]],64),d=(()=>{let I=document.createElement("canvas");I.width=I.height=128;let O=I.getContext("2d");for(let L=0;L<26;L++){let w=64+(Math.random()-.5)*128*.45,D=128/2+(Math.random()-.5)*128*.45,H=128*(.12+Math.random()*.2),W=O.createRadialGradient(w,D,0,w,D,H);W.addColorStop(0,"rgba(255,255,255,.35)"),W.addColorStop(1,"rgba(255,255,255,0)"),O.fillStyle=W,O.fillRect(0,0,128,128)}let M=new sn(I);return M.colorSpace=Re,M})(),f=(U,I=1)=>new bi({map:h,color:U,blending:On,depthWrite:!1,transparent:!0,opacity:I,toneMapped:!1}),g=[null,1913976,1732148,14065688],v=new Map,p=new Map;function m(U){try{return/^[EKT]$/.test(U)&&SAVE.v3?SAVE.v3.skin|0:0}catch{return 0}}function C(U){U.updateMatrixWorld(!0);let I=new _e().copy(U.matrixWorld).invert(),O=new Map;U.traverse(L=>{if(!L.isMesh)return;let w=L.geometry.index?L.geometry.toNonIndexed():L.geometry.clone();w.applyMatrix4(new _e().multiplyMatrices(I,L.matrixWorld));for(let H of Object.keys(w.attributes))["position","normal","uv"].includes(H)||w.deleteAttribute(H);w.attributes.uv||w.setAttribute("uv",new Ue(new Float32Array(w.attributes.position.count*2),2));let D=L.material;O.has(D)||O.set(D,[]),O.get(D).push(w)});let M=new le;return O.forEach((L,w)=>{let D=new bt(Sh(L,!1),w);D.castShadow=!0,D.receiveShadow=!0,M.add(D),L.forEach(H=>H.dispose())}),M}function b(U,I,O,M){Oc(O);let L=I();L.traverse(at=>{if(!at.isMesh)return;let nt=at.material,ut=O+"|"+M+"|"+nt.uuid,vt=p.get(ut);vt||(vt=nt.clone(),vt.envMap=null,M&&nt===pt.red&&O<3&&vt.color.setHex(g[M]),nt===pt.lr&&(vt.name="lr"),nt===pt.lb&&(vt.name="lb"),p.set(ut,vt)),at.material=vt});let w=L.userData.lb||[],D=null,H=null;L.traverse(at=>{at.userData&&at.userData.ladder&&(D=at)}),D&&(H={p:D.position.clone(),r:D.rotation.clone()},L.remove(D));let W=C(L);if(D){D.position.set(0,0,0),D.rotation.set(0,0,0);let at=C(D);at.position.copy(H.p),at.rotation.copy(H.r),at.userData.ladder=1,W.add(at),W.userData.lad=at}let Q=new Hn().setFromObject(W);return W.userData={...W.userData,lb:w,bb:Q,L:Q.max.x-Q.min.x,Wd:Q.max.z-Q.min.z,cx:(Q.max.x+Q.min.x)/2,cz:(Q.max.z+Q.min.z)/2},Oc(0),W}function T(U,I){let O="EKTA".includes(U),M=O?m(U):0,L=U+(O?I:"")+"|"+M,w=v.get(L);if(w)return w;let D;return Mn[U]?D=Mn[U]:U.startsWith("car")?D=()=>Fc(+U.slice(3)):D={cone:wh,bar:Th,hyd:Ah}[U],w=b(L,D,O?I:0,M),v.set(L,w),w}function V(U){let I="sed"+U,O=v.get(I);return O||(O=b(I,()=>Fc(U),0,0),v.set(I,O)),O}function B(U,I){let O=new le,M=new le,L=U.clone();O.add(M),M.add(L);let w=U.userData;if(I){let Q=Math.min(I[0]/w.L,I[1]/w.Wd);L.scale.setScalar(Q),L.position.set(-w.cx*Q,0,-w.cz*Q),O.userData.f=Q}else O.userData.f=1;let D=[],H=[];L.traverse(Q=>{Q.isMesh&&(Q.material.name==="lr"||Q.material.name==="lb")&&(Q.material=Q.material.clone(),(Q.material.name==="lr"?D:H).push(Q.material))}),O.userData.lr=D,O.userData.lb=H,O.userData.yaw=M,O.userData.body=L;let W=[];return(w.lb||[]).forEach((Q,at)=>{let nt=new Gn(f(at?3828991:16722458,0));nt.position.set(Q[0],Q[1]+.02,Q[2]),nt.scale.setScalar(.34),nt.visible=!1,L.add(nt),W.push(nt)}),O.userData.glows=W,w.lad&&(O.userData.lad=L.children.find(Q=>Q.userData.ladder)),O}function N(U,I,O,M=0){let L=Math.sin(O*14+M)>0;U.userData.lr.forEach(w=>w.emissiveIntensity=I?L?5:.25:.5),U.userData.lb.forEach(w=>w.emissiveIntensity=I?L?.25:6:.5),U.userData.glows.forEach((w,D)=>{w.visible=I,w.material.opacity=I?(D?!L:L)?1:.08:0})}let P={scene:new oi,cam:new Be(30,1,.5,80),objs:new Map,key:null,tex:null};{let U=P.scene;U.environment=n,U.environmentIntensity=.45,P.hemi=new hs(13162239,2764342,.75),U.add(P.hemi);let I=P.key=new li(16773340,2.4);I.position.set(-6,8,-2.5),I.castShadow=!0,I.shadow.mapSize.set(1024,1024),I.shadow.bias=-6e-4,I.shadow.normalBias=.02,I.shadow.radius=4,U.add(I),U.add(I.target),P.fireL=new li(16742954,0),P.fireL.position.set(0,4,-8),U.add(P.fireL);let O=new Ce({color:12105916,roughness:.38,metalness:.2,transparent:!0,envMapIntensity:.7});P.apron=new bt(new nn(80,80),new Ce({color:2764084,roughness:.9})),P.apron.rotation.x=-Math.PI/2,P.apron.position.y=-.02,P.apron.receiveShadow=!0,U.add(P.apron),P.ground=new bt(new nn(1,1),O),P.ground.rotation.x=-Math.PI/2,P.ground.receiveShadow=!0,U.add(P.ground),P.ring=new bt(new $r(.42,.52,40),new ze({color:16769610,transparent:!0,toneMapped:!1,depthWrite:!1})),P.ring.rotation.x=-Math.PI/2,P.ring.position.y=.015,U.add(P.ring);let M=new wi;M.moveTo(.08,0),M.lineTo(-.05,-.075),M.lineTo(-.05,.075),M.closePath(),P.arrowGeo=new Kr(M),P.arrowGeo.rotateX(-Math.PI/2),P.arrowMat=new ze({color:16777215,transparent:!0,opacity:.75,toneMapped:!1,depthWrite:!1}),P.headTex=(()=>{let L=document.createElement("canvas");L.width=128,L.height=64;let w=L.getContext("2d"),D=w.createLinearGradient(0,0,128,0);D.addColorStop(0,"rgba(255,240,200,.55)"),D.addColorStop(1,"rgba(255,240,200,0)"),w.fillStyle=D,w.beginPath(),w.moveTo(0,26),w.lineTo(128,0),w.lineTo(128,64),w.lineTo(0,38),w.fill();let H=new sn(L);return H.colorSpace=Re,H})(),P.headMat=new ze({map:P.headTex,transparent:!0,blending:On,depthWrite:!1,toneMapped:!1}),P.poolMat=new ze({map:u,transparent:!0,blending:On,depthWrite:!1,toneMapped:!1}),P.root=new le,U.add(P.root)}function dt(){let U=new le,I=new Ce({color:3817030,metalness:.7,roughness:.35}),O=new bt(new He(.035,.05,1.1,10),I);O.position.y=.55,O.castShadow=!0,U.add(O);let M=new bt(new Me(.32,.04,.05),I);M.position.set(.14,1.08,0),U.add(M);let L=new bt(new rn(.06,12,8),new ze({color:16773312,toneMapped:!1}));L.position.set(.28,1.04,0),U.add(L);let w=new Gn(f(16767120,.55));w.scale.setScalar(.45),w.position.copy(L.position),U.add(w);let D=new bt(new nn(1.6,1.6),P.poolMat.clone());return D.material.color.setHex(9071152),D.rotation.x=-Math.PI/2,D.position.set(.28,.01,0),U.add(D),U}function _(){let U=G.L;P.key2=G,P.L=U,P.root.clear(),P.objs.clear();let I=BOARD;P.board=I,P.tex&&P.tex.dispose(),P.tex=new sn(I.c),P.tex.colorSpace=Re,P.tex.anisotropy=4,P.ground.material.map=P.tex,P.ground.material.needsUpdate=!0;let O=G.cs,M=I.w/O,L=I.h/O;P.ground.scale.set(M,L,1),P.ground.position.set((I.ox+I.w/2-G.bx)/O-U.w/2,0,(I.oy+I.h/2-G.by)/O-U.h/2),P.reg={w:M,h:L,cx:P.ground.position.x,cz:P.ground.position.z};let w=P.key.shadow.camera,D=Math.max(U.w,U.h)/2+1.5;Object.assign(w,{left:-D,right:D,top:D,bottom:-D,near:1,far:30}),w.updateProjectionMatrix();let H=U.w/2+.55,W=U.h/2+.55;[[-H,-W,0],[H,-W,Math.PI],[-H,W,0],[H,W,Math.PI]].forEach(([Q,at,nt])=>{let ut=dt();ut.position.set(Q,0,at),ut.rotation.y=nt+(at<0?-.6:.6)*(nt?-1:1),P.root.add(ut)}),P.shadowDirty=3}let S=(U,I)=>[U+.5-P.L.w/2,I+.5-P.L.h/2];function $(U,I){let O=P.objs.get(U);return O||(O=I(),O.userData.id=U,P.objs.set(U,O),P.root.add(O)),O.userData.seen=P.frame,O}let Y=[.9,.66];function K(U){return $("v"+U.v.id+"_"+ot(U.v.type)+"_"+m(U.v.type),()=>{let I=B(T(U.v.type,ot(U.v.type)),Y),O=new bt(new nn(1.3,.7),P.headMat);O.rotation.x=-Math.PI/2,O.position.set(1.05,.012,0),O.visible=!1,I.userData.yaw.add(O),I.userData.hl=O;let M=new bt(P.arrowGeo,P.arrowMat);return M.position.y=.02,P.root.add(M),I.userData.arrow=M,I.userData.prevAng=U.ang,I.userData.roll=0,I})}function ot(U){try{return"EKTA".includes(U)&&SAVE.v3.fleet[U]||0}catch{return 0}}function q(U,I,O){return $(U,()=>B(T(I,0),O))}function _t(U){return $(U,()=>{let I=new le,O=new Ce({color:4869978,metalness:.6,roughness:.4}),M=new bt(new Me(.14,.32,.14),O);M.position.set(-.38,.16,0),M.castShadow=!0,I.add(M);let L=new le;L.position.set(-.38,.28,0),I.add(L);let w=document.createElement("canvas");w.width=128,w.height=16;let D=w.getContext("2d");for(let at=0;at<8;at++)D.fillStyle=at%2?"#fff":"#e01818",D.fillRect(at*16,0,16,16);let H=new sn(w);H.colorSpace=Re;let W=new bt(new Me(.86,.06,.06),new Ce({map:H,roughness:.4}));W.position.x=.43,W.castShadow=!0,L.add(W),I.userData.arm=L;let Q=new bt(new rn(.035,8,6),new ze({color:16724e3,toneMapped:!1}));return Q.position.set(-.38,.34,0),I.add(Q),I})}function j(U){return $(U,()=>{let I=new le,O=new bt(new He(.3,.34,.06,28),new Ce({color:2764083,metalness:.5,roughness:.5}));O.position.y=.03,O.receiveShadow=!0,I.add(O);let M=new bt(new He(.2,.22,.08,28),new Ce({color:16761370,emissive:6702080,roughness:.3}));M.position.y=.09,I.add(M),I.userData.btn=M;let L=new Gn(f(16765503,0));return L.scale.setScalar(.9),L.position.y=.15,I.add(L),I.userData.gl=L,I})}let Lt=Math.PI/4,Rt=new F,Dt=()=>G&&G.view||BOARD;function he(){let U=P.L,I=P.cam,O=Dt(),M=O.w/O.h,L=U.w/2+.12,w=U.h/2+.2,D=Math.max(L,w*1.15)*4+4,H=Lt,W=0;if(G.state==="win"){let Nt=ms(G.winT/1.6,0,1),qt=Nt*Nt*(3-2*Nt);H=Lt+qt*.1,W=G.winT*.1*qt}I.position.set(Math.sin(W)*Math.sin(H)*D,Math.cos(H)*D,Math.cos(W)*Math.sin(H)*D),I.up.set(0,1,0),I.lookAt(0,0,0),I.updateMatrixWorld();let Q=1e9,at=-1e9,nt=1e9,ut=-1e9,vt=I.matrixWorldInverse;for(let Nt of[-1,1])for(let qt of[-1,1])for(let ie of[0,.42]){Rt.set(Nt*L,ie,qt*w).applyMatrix4(vt);let rt=-Rt.z,Ft=Rt.x/rt,Yt=Rt.y/rt;Q=Math.min(Q,Ft),at=Math.max(at,Ft),nt=Math.min(nt,Yt),ut=Math.max(ut,Yt)}let Wt=at-Q,ne=ut-nt;if(Wt/ne<M){let Nt=ne*M;Q-=(Nt-Wt)/2,at=Q+Nt}else{let Nt=Wt/M;nt-=(Nt-ne)/2,ut=nt+Nt}let ht=D*.3,Et=D*3;I.near=ht,I.far=Et,I.aspect=M,I.projectionMatrix.makePerspective(Q*ht,at*ht,ut*ht,nt*ht,ht,Et),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),P.camOK=!0}let de=new ea,st=new yt,xt=new _n(new F(0,1,0),-.12),Ht=new F;window.pickCell=function(U,I){if(!gt()||!P.camOK||!G||P.key2!==G)return null;let O=Dt();if(st.set((U-O.ox)/O.w*2-1,-((I-O.oy)/O.h*2-1)),de.setFromCamera(st,P.cam),!de.ray.intersectPlane(xt,Ht))return null;let M=Ht.x+P.L.w/2-.5,L=Ht.z+P.L.h/2-.5,w=Math.round(M),D=Math.round(L);if(G.st.occ[w+","+D])return[w,D];let H=null,W=.75;for(let Q=-1;Q<=1;Q++)for(let at=-1;at<=1;at++){let nt=w+Q+","+(D+at);if(!G.st.occ[nt])continue;let ut=Math.hypot(M-w-Q,L-D-at);ut<W&&(W=ut,H=[w+Q,D+at])}return H||[w,D]};let Ct=window.cellXY;window.cellXY=function(U,I){if(!gt()||!P.camOK||!G||P.key2!==G)return Ct(U,I);Rt.set(U+.5-P.L.w/2,.15,I+.5-P.L.h/2).project(P.cam);let O=Dt();return[O.ox+(Rt.x+1)/2*O.w,O.oy+(1-Rt.y)/2*O.h]};function Qt(){let U=performance.now();(P.key2!==G||P.board!==BOARD)&&_(),P.frame=(P.frame||0)+1;let I=G.t,O=G.cs,M=s();P.key.castShadow=M;let L=P.shadowDirty>0;P.shadowDirty>0&&P.shadowDirty--;let w=G.state==="win"?0:ms(G.fire/G.fireMax,0,1.3);P.fireL.intensity=w*(1.1+.25*Math.sin(I*9)+.1*Math.sin(I*23));for(let nt of Object.values(G.vv)){if(nt.done||nt.scale<=0)continue;let ut=K(nt),[vt,Wt]=S(nt.px,nt.py),ne=nt.segs.length>0,ht=ut.userData,Et=angDiff(ht.prevAng,nt.ang);ht.prevAng=nt.ang,ht.roll=Bc(ht.roll,ms(Et*6,-.12,.12),.25),(ne||Math.abs(Et)>1e-4||nt.scale<1||Math.abs(nt.sq)>.01||(nt.wob||0)>.01)&&(L=!0);let Nt=E.back?E.back(ms(nt.scale,0,1)):nt.scale;ut.position.set(vt,ne?Math.abs(Math.sin(I*22+nt.v.id))*.012:0,Wt),ut.rotation.y=-nt.ang,ut.scale.set(Nt*(1+nt.sq*.5),Nt*(1-nt.sq),Nt*(1+nt.sq*.3)),ht.yaw.rotation.x=ht.roll+(nt.wob?Math.sin(I*40)*nt.wob*.3:0),ht.yaw.rotation.z=ne?-.025:0,N(ut,!!nt.siren,I,nt.v.id),ht.hl.visible=!!nt.siren&&M;let qt=!ne&&nt.scale>=1&&!(G.hint&&G.hint.id===nt.v.id)&&G.state==="play";if(ht.arrow.visible=qt,qt){let[ie,rt]=FL.DIRS[nt.v.d];ht.arrow.position.set(vt+ie*.5,.02,Wt+rt*.5),ht.arrow.rotation.y=-ANG[nt.v.d],ht.arrow.material.opacity=.55+.2*Math.sin(I*4)}ht.arrow.userData.seen=P.frame}G.st.blk.forEach(nt=>{let ut=nt.x+","+nt.y,vt=G.blkJ[ut]||0;if(nt.sub==="#"){let Wt=G.cars[ut];if(!Wt||Wt.done)return;let ne=parseInt((Wt.col&&Wt.col[1]||"#4a8fd6").slice(1),16),ht=$("c"+ut+"_"+ne,()=>B(V(ne),Y)),[Et,Nt]=S(Wt.px,Wt.py);ht.position.set(Et+Math.sin(vt*40)*.05*vt,0,Nt),ht.rotation.y=-Wt.ang,(Wt.attached||vt>0)&&(L=!0)}else if(!nt.gone){let Wt=q("b"+ut,nt.sub==="x"?"bar":"cone",nt.sub==="x"?[.8,.8]:[.62,.62]),[ne,ht]=S(nt.x,nt.y);Wt.position.set(ne+Math.sin(vt*40)*.06*vt,0,ht),nt.sub==="x"&&(Wt.rotation.y=Math.PI/2*((nt.x+nt.y)%2)),vt>0&&(L=!0)}}),G.st.hyd.forEach((nt,ut)=>{if(G.hydVis[ut].gone)return;let vt=q("h"+ut,"hyd",[.55,.55]),[Wt,ne]=S(nt.x,nt.y);vt.position.set(Wt,0,ne)}),G.st.sw.forEach((nt,ut)=>{let vt=j("s"+ut),[Wt,ne]=S(nt.x,nt.y);vt.position.set(Wt,0,ne);let ht=G.gateA>0;vt.userData.btn.position.y=ht?.06:.09,vt.userData.gl.material.opacity=ht?.2:.35+.25*Math.sin(I*5)}),G.st.gates.forEach((nt,ut)=>{let vt=_t("g"+ut),[Wt,ne]=S(nt.x,nt.y);vt.position.set(Wt,0,ne),vt.userData.arm.rotation.z=G.gateA*1.35,G.gateA>0&&G.gateA<1&&(L=!0)});let D=G.hint&&G.st.veh[G.hint.id];if(P.ring.visible=!!(D&&!D.gone),P.ring.visible){let[nt,ut]=S(D.x,D.y),vt=.5+.5*Math.sin(G.hint.t*6);P.ring.position.set(nt,.015,ut),P.ring.scale.setScalar(1+vt*.12),P.ring.material.opacity=.5+vt*.5}for(let[nt,ut]of P.objs)ut.userData.seen!==P.frame&&(P.root.remove(ut),ut.userData.arrow&&P.root.remove(ut.userData.arrow),P.objs.delete(nt),L=!0);G.state==="win"&&(L=!0),i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=M&&L,he();let H=Dt(),W=c(),Q=Math.round(H.w*W),at=Math.round(H.h*W);a(Q,at),i.render(P.scene,P.cam),o(cx,Q,at,H.ox,H.oy,H.w,H.h),Ie.ms=Bc(Ie.ms,performance.now()-U,.1)}let $t={1:{sky:["#0b1430","#2a3f6e"],fog:1713216,amb:8425664,ambI:.9,key:10466559,keyI:1.2,keyP:[-6,10,8],build:"apt"},2:{sky:["#2a1438","#c8604a"],fog:4859968,amb:16756880,ambI:1,key:16752752,keyI:1.6,keyP:[-10,5,6],build:"market"},3:{sky:["#2a3038","#6a6058"],fog:3817544,amb:13160668,ambI:1.2,key:15265008,keyI:1.4,keyP:[6,10,6],build:"factory"},4:{sky:["#3a1a10","#ff9a40"],fog:6961696,amb:16760976,ambI:1,key:16756832,keyI:2,keyP:[-10,4,4],build:"cabin"},5:{sky:["#05070e","#1a2236"],fog:658968,amb:6320288,ambI:.8,key:8425664,keyI:.9,keyP:[5,10,8],build:"tower"}},it={ch:0},re="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",ct=`uniform float t,seed,amp;varying vec2 vUv;
 float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
 float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p*=2.03;a*=.5;}return v;}
 void main(){vec2 uv=vUv;float y=uv.y;float x=(uv.x-.5)*2.;
  float nz=fbm(vec2(uv.x*3.2+seed,y*2.6-t*2.4));float nz2=fbm(vec2(uv.x*6.+seed*2.,y*5.-t*4.));
  float w=mix(.95,.05,pow(y,.8));float d=abs(x+(nz-.5)*.9*y);
  float shape=1.-smoothstep(w*.45,w,d);float body=shape*smoothstep(1.02,.2,y+(nz2-.5)*.55)*smoothstep(0.,.1,y);
  float core=1.-smoothstep(0.,.55,d/w+y*.9);
  vec3 c=mix(vec3(1.,.55,.12),vec3(1.,.95,.7),core);c=mix(c,vec3(.75,.12,.02),smoothstep(.45,.95,y));
  float a=body*amp;gl_FragColor=vec4(c*a*1.5,a);}`;function R(U){return new ln({uniforms:{t:{value:0},seed:{value:U},amp:{value:1}},vertexShader:re,fragmentShader:ct,transparent:!0,depthWrite:!1,blending:On})}function Tt(U,I){let O=document.createElement("canvas");O.width=4,O.height=256;let M=O.getContext("2d"),L=M.createLinearGradient(0,0,0,256);L.addColorStop(0,U),L.addColorStop(1,I),M.fillStyle=L,M.fillRect(0,0,4,256);let w=new sn(O);return w.colorSpace=Re,w}function Mt(U,I,O){let M=document.createElement("canvas"),L=64;M.width=Math.round(U*L/4)*4,M.height=Math.round(I*L/4)*4;let w=M.getContext("2d");if(w.fillStyle=O.wall,w.fillRect(0,0,M.width,M.height),O.brick){w.globalAlpha=.18;for(let ht=0;ht<M.height;ht+=6)for(let Et=ht/6%2*8;Et<M.width;Et+=16)w.fillStyle=Math.random()<.5?"#000":"#fff",w.fillRect(Et,ht,15,5);w.globalAlpha=1}if(O.logs)for(let ht=0;ht<M.height;ht+=14){let Et=w.createLinearGradient(0,ht,0,ht+14);Et.addColorStop(0,"#8a5a32"),Et.addColorStop(.5,"#6a4024"),Et.addColorStop(1,"#3a2210"),w.fillStyle=Et,w.fillRect(0,ht,M.width,14)}if(O.panels){w.strokeStyle="rgba(0,0,0,.25)",w.lineWidth=2;for(let ht=0;ht<M.width;ht+=12)w.beginPath(),w.moveTo(ht,0),w.lineTo(ht,M.height),w.stroke()}let D=O.cols,H=O.rows,W=M.width/D,Q=M.height/H,at=[];for(let ht=0;ht<H;ht++)for(let Et=0;Et<D;Et++){if(O.door&&ht===H-1&&Et===Math.floor(D/2))continue;let Nt=Et*W+W*O.mx,qt=ht*Q+Q*O.my,ie=W*(1-2*O.mx),rt=Q*(1-2*O.my);w.fillStyle=O.frame||"#d8d0c0",w.fillRect(Nt-2,qt-2,ie+4,rt+4);let Ft=Math.random()<(O.lit||.35);w.fillStyle=Ft?"#ffcf7a":O.glass||"#1a2230",w.fillRect(Nt,qt,ie,rt),Ft&&at.push([Nt,qt,ie,rt]),O.sill&&(w.fillStyle="rgba(255,255,255,.35)",w.fillRect(Nt-3,qt+rt+1,ie+6,3)),O.noMul||(w.fillStyle="rgba(0,0,0,.35)",w.fillRect(Nt+ie/2-1,qt,2,rt))}if(O.door){let ht=Math.floor(D/2),Et=H-1;w.fillStyle="#3a2416",w.fillRect(ht*W+W*.25,Et*Q+Q*.2,W*.5,Q*.8),w.fillStyle="#ffcf7a",w.fillRect(ht*W+W*.3,Et*Q+Q*.25,W*.4,Q*.15)}let nt=new sn(M);nt.colorSpace=Re,nt.anisotropy=4;let ut=document.createElement("canvas");ut.width=M.width,ut.height=M.height;let vt=ut.getContext("2d");vt.fillStyle="#000",vt.fillRect(0,0,ut.width,ut.height),vt.fillStyle="#ffb050",at.forEach(([ht,Et,Nt,qt])=>vt.fillRect(ht,Et,Nt,qt));let Wt=new sn(ut);Wt.colorSpace=Re;let ne=[];for(let ht=0;ht<H;ht++)for(let Et=0;Et<D;Et++)ne.push([(Et+.5)/D*U-U/2,I-(ht+O.my+.45*(1-2*O.my))/H*I]);return{mat:new Ce({map:nt,emissiveMap:Wt,emissive:16777215,emissiveIntensity:.55,roughness:.85}),anchors:ne}}function ft(U,I,O,M,L,w,D,H){let W=new bt(new Me(I,O,M),L);return W.position.set(w,D+O/2,H),W.castShadow=!0,W.receiveShadow=!0,U.add(W),W}function wt(U,I,O,M){let L=new wi;L.moveTo(-U/2,0),L.lineTo(U/2,0),L.lineTo(0,I),L.closePath();let w=new Jr(L,{depth:O,bevelEnabled:!1});w.translate(0,0,-O/2);let D=new bt(w,M);return D.castShadow=!0,D}let mt=(U,I={})=>new Ce(Object.assign({color:U,roughness:.8},I));function Ot(U){let I=new le,O=[],M=[],L=mt(3811876);if(U==="apt"){let w=Mt(12,13,{wall:"#7a3a2a",brick:1,cols:6,rows:5,mx:.22,my:.2,sill:1,door:1,lit:.25}),D=[L,L,mt(2759188),L,w.mat,L],H=new bt(new Me(12,13,5),D);H.position.y=6.5,H.castShadow=H.receiveShadow=!0,I.add(H),ft(I,12.4,.5,5.4,mt(5909022),0,13,0);for(let W=1;W<5;W++)ft(I,1.8,.12,.8,mt(2763310,{metalness:.6}),-3.7,W*2.6,2.9);O.push(...w.anchors.filter((W,Q)=>[1,4,7,8,10,13,15,20,22].includes(Q)).map(W=>[W[0],W[1]-.6,2.55]),[-2,13.6,1],[3,13.6,0]),M=[[-1,13.3,2.4],[4,13.3,2.4],[w.anchors[2][0],w.anchors[2][1]-1,2.6],[w.anchors[9][0],w.anchors[9][1]-1,2.6]]}else if(U==="market"){let w=[14200960,13146736,14731424],D=[14165532,1997528,2793546];for(let H=0;H<3;H++){let W=(H-1)*4.6,Q=Mt(4.4,7,{wall:"#"+w[H].toString(16),cols:2,rows:2,mx:.18,my:.2,lit:.6,frame:"#6a4a2a"}),at=new bt(new Me(4.4,7,4),[L,L,L,L,Q.mat,L]);at.position.set(W,3.5,0),at.castShadow=at.receiveShadow=!0,I.add(at);let nt=wt(4.8,2.2,4.4,mt(6957594));nt.position.set(W,7,0),I.add(nt);let ut=new bt(new Me(4.2,.08,1.6),mt(D[H]));ut.position.set(W,2.9,2.7),ut.rotation.x=.35,ut.castShadow=!0,I.add(ut);for(let vt=0;vt<3;vt++){let Wt=new bt(new rn(.22,10,8),new ze({color:16732208,toneMapped:!1}));Wt.position.set(W-1.4+vt*1.4,2.5,3.4),I.add(Wt)}ft(I,3.4,.9,1.2,mt(9071162),W,0,3),O.push(...Q.anchors.map(vt=>[W+vt[0],vt[1]-.4,2.1]),[W,8.6,0])}M=[[-4.6,4.6,2.2],[0,4.6,2.2],[4.6,4.6,2.2]]}else if(U==="factory"){let w=Mt(16,6,{wall:"#8a9098",panels:1,cols:8,rows:2,mx:.15,my:.28,lit:.25,glass:"#2a3440",frame:"#5a6068"}),D=new bt(new Me(16,6,7),[L,L,L,L,w.mat,L]);D.position.y=3,D.castShadow=D.receiveShadow=!0,I.add(D);for(let W=0;W<4;W++){let Q=wt(4,1.8,7,mt(6975608,{metalness:.4,roughness:.5}));Q.position.set(-6+W*4,6,0),Q.rotation.z=0,I.add(Q)}[[-5,1],[4.5,-1.2]].forEach(([W,Q])=>{let at=new bt(new He(.6,.75,11,16),mt(8014394));at.position.set(W,5.5,Q),at.castShadow=!0,I.add(at),ft(I,1.6,.4,1.6,mt(2763306),W,10.8,Q)});let H=new bt(new He(1.6,1.6,4,20),mt(11581632,{metalness:.7,roughness:.3}));H.position.set(9.6,2,1),H.castShadow=!0,I.add(H),O.push(...w.anchors.map(W=>[W[0],W[1]-.3,3.55]),[-5,11.5,1],[4.5,11.6,-1.2],[-2,7.4,1],[2,7.4,1]),M=[[-6,6.5,3.2],[6,6.5,3.2]]}else if(U==="cabin"){let w=Mt(9,4.2,{logs:1,wall:"#6a4024",cols:3,rows:1,mx:.3,my:.25,lit:.7,frame:"#3a2010",door:0}),D=new bt(new Me(9,4.2,6),[mt(5913120),mt(5913120),L,L,w.mat,mt(5913120)]);D.position.y=2.1,D.castShadow=D.receiveShadow=!0,I.add(D);let H=wt(10.4,3.6,7,mt(3810328));H.position.y=4.2,I.add(H),ft(I,9.6,.25,2.2,mt(8015920),0,0,3.9);for(let at=-2;at<=2;at++)ft(I,.2,1.9,.2,mt(5913120),at*2.2,.25,4.8);ft(I,1,3,1,mt(6974064),3,5.2,0);let W=mt(1718818,{roughness:.9}),Q=mt(3810324);for(let at=0;at<16;at++){let nt=(at<8?-1:1)*(7+Math.random()*9),ut=-6+Math.random()*9,vt=2+Math.random()*2.5,Wt=new le,ne=new bt(new ci(vt*.55,vt*2,8),W);ne.position.y=vt*1.4,ne.castShadow=!0,Wt.add(ne);let ht=new bt(new ci(vt*.42,vt*1.5,8),W);ht.position.y=vt*2.3,Wt.add(ht);let Et=new bt(new He(.15,.2,vt*.6,6),Q);Et.position.y=vt*.3,Wt.add(Et),Wt.position.set(nt,0,ut),I.add(Wt),at%3===0&&O.push([nt,vt*2,ut+1])}O.push(...w.anchors.map(at=>[at[0],at[1]-.3,3.05]),[-2,6,1.5],[2.4,6.4,1.2],[0,7.2,0],[-3.6,5.2,2.5]),M=[[0,1.2,4.6],[-2.2,1.2,4.6]]}else{let w=Mt(7,26,{wall:"#2a3442",cols:5,rows:12,mx:.08,my:.12,lit:.3,glass:"#1a2a3c",frame:"#8090a0",noMul:1}),D=new bt(new Me(7,26,6),[mt(2239030),mt(2239030),L,L,new Ce({map:w.mat.map,emissiveMap:w.mat.emissiveMap,emissive:16777215,emissiveIntensity:.9,roughness:.25,metalness:.5}),mt(2239030)]);D.position.y=13,D.castShadow=D.receiveShadow=!0,I.add(D),ft(I,4,2,4,mt(3818064),0,26,0);let H=new bt(new He(.08,.08,5),mt(10066329,{metalness:1}));H.position.set(0,30.5,0),I.add(H);let W=new bt(new rn(.2,8,6),new ze({color:16719904,toneMapped:!1}));W.position.set(0,33,0),I.add(W),[[-9,14,-4],[9,18,-3],[-15,10,-6],[15,22,-7]].forEach(([Q,at,nt])=>{let ut=Mt(5,at,{wall:"#1e2632",cols:3,rows:Math.round(at/2.4),mx:.12,my:.15,lit:.25,glass:"#121a26",frame:"#4a5462",noMul:1}),vt=new bt(new Me(5,at,5),[mt(1712688),mt(1712688),L,L,ut.mat,mt(1712688)]);vt.position.set(Q,at/2,nt),I.add(vt)}),O.push(...w.anchors.filter((Q,at)=>[6,8,12,17,21,23,27,31,33,36,38,42].includes(at)).map(Q=>[Q[0],Q[1]-.4,3.05])),M=[[w.anchors[7][0],w.anchors[7][1]-.8,3.1],[w.anchors[16][0],w.anchors[16][1]-.8,3.1],[0,27.2,1.5]]}return{g:I,F:O,P:M}}function A(U){let I=new le,O=mt(U.coat,{roughness:.75}),M=mt(U.pants||2763310),L=mt(14725258,{roughness:.6}),w=mt(1118481),D=new Ce({color:15261808,emissive:5919760,roughness:.3}),H=(qt,ie,rt,Ft)=>{let Yt=new bt(new He(qt,ie,rt,10),Ft);return Yt.castShadow=!0,Yt},W=qt=>{let ie=new le;ie.position.set(qt*.11,.92,0);let rt=H(.085,.075,.48,M);rt.position.y=-.24,ie.add(rt);let Ft=new le;Ft.position.y=-.47,ie.add(Ft);let Yt=H(.075,.065,.42,M);Yt.position.y=-.21,Ft.add(Yt);let se=new bt(new Me(.13,.1,.24),w);if(se.position.set(0,-.43,.04),Ft.add(se),U.ff){let ke=H(.078,.078,.04,D);ke.position.y=-.3,Ft.add(ke)}return I.add(ie),{p:ie,kn:Ft}},Q=W(-1),at=W(1),nt=new le;nt.position.y=.92,I.add(nt);let ut=new bt(new He(.19,.17,.62,12),O);if(ut.position.y=.33,ut.scale.z=.75,ut.castShadow=!0,nt.add(ut),U.ff){let qt=H(.195,.195,.05,D);qt.position.y=.12,qt.scale.z=.76,nt.add(qt);let ie=H(.195,.195,.05,D);ie.position.y=.42,ie.scale.z=.76,nt.add(ie);let rt=H(.08,.08,.42,mt(14211288,{metalness:.8,roughness:.3}));rt.position.set(0,.4,-.17),nt.add(rt)}let vt=new le;vt.position.y=.74,nt.add(vt);let Wt=new bt(new rn(.11,14,10),L);if(Wt.position.y=.07,vt.add(Wt),U.ff){let qt=mt(U.helmet||14165532,{roughness:.3,metalness:.2}),ie=new bt(new rn(.135,14,8,0,Rh,0,Math.PI/2),qt);ie.position.y=.1,vt.add(ie);let rt=new bt(new He(.2,.21,.03,16),qt);rt.position.set(0,.1,-.03),rt.scale.z=1.2,vt.add(rt)}else{let qt=new bt(new rn(.118,12,8,0,Rh,0,Math.PI/2),mt(U.hair||2759184));qt.position.y=.09,vt.add(qt)}let ne=qt=>{let ie=new le;ie.position.set(qt*.22,.58,0),nt.add(ie);let rt=H(.06,.055,.32,O);rt.position.y=-.16,ie.add(rt);let Ft=new le;Ft.position.y=-.31,ie.add(Ft);let Yt=H(.05,.045,.28,O);Yt.position.y=-.14,Ft.add(Yt);let se=new bt(new rn(.05,8,6),U.ff?mt(2236962):L);return se.position.y=-.3,Ft.add(se),{p:ie,el:Ft}},ht=ne(-1),Et=ne(1),Nt=null;if(U.ff){Nt=new le;let qt=H(.04,.03,.36,mt(12632256,{metalness:1,roughness:.2}));qt.rotation.x=Math.PI/2,qt.position.z=.18,Nt.add(qt),Nt.position.set(0,.5,.3),nt.add(Nt)}return I.userData={L:Q,R:at,A:ht,B:Et,torso:nt,head:vt,noz:Nt},I}function x(U,I,O,M){let L=U.userData,w=Math.sin(O*8+M);if(I==="walk")L.L.p.rotation.x=w*.6,L.R.p.rotation.x=-w*.6,L.L.kn.rotation.x=Math.max(0,-w)*.8,L.R.kn.rotation.x=Math.max(0,w)*.8,L.A.p.rotation.x=-w*.5,L.B.p.rotation.x=w*.5,L.torso.position.y=.92+Math.abs(w)*.03;else if(I==="spray")L.L.p.rotation.x=.25,L.R.p.rotation.x=-.35,L.L.kn.rotation.x=.2,L.R.kn.rotation.x=.45,L.torso.rotation.x=.12+Math.sin(O*20+M)*.01,L.A.p.rotation.x=-1.25,L.B.p.rotation.x=-1.05,L.A.p.rotation.z=.25,L.B.p.rotation.z=-.35,L.A.el.rotation.x=-.3,L.B.el.rotation.x=-.5;else if(I==="wave")L.B.p.rotation.z=-2.6+Math.sin(O*9+M)*.35,L.A.p.rotation.z=.1;else if(I==="cheer"){let D=Math.abs(Math.sin(O*6+M));U.position.y=(U.userData.y0||0)+D*.35,L.A.p.rotation.z=2.7,L.B.p.rotation.z=-2.7}else L.L.p.rotation.x=L.R.p.rotation.x=0,L.L.kn.rotation.x=L.R.kn.rotation.x=0,L.A.p.rotation.set(0,0,.08),L.B.p.rotation.set(0,0,-.08)}function X(U){let I=$t[U]||$t[1],O=new oi;it.scene=O,it.ch=U,it.G=G,O.background=Tt(I.sky[0],I.sky[1]),O.environment=n,O.environmentIntensity=.35,O.fog=new Gr(I.fog,30,75),O.add(new hs(I.amb,2105376,I.ambI));let M=new li(I.key,I.keyI);M.position.set(...I.keyP).multiplyScalar(3),M.castShadow=!0,M.shadow.mapSize.set(1024,1024),Object.assign(M.shadow.camera,{left:-22,right:22,top:30,bottom:-6,near:1,far:120}),M.shadow.bias=-8e-4,O.add(M),it.key=M;let L=new us(16742954,0,40,1.4);O.add(L),it.fireL=L;let w=new bt(new nn(140,40),new Ce({color:2237739,roughness:.28,metalness:.4,envMapIntensity:.6}));w.rotation.x=-Math.PI/2,w.position.z=12,w.receiveShadow=!0,O.add(w);let D=new bt(new Me(140,.25,5),mt(6974064));D.position.set(0,.12,4.5),D.receiveShadow=!0,O.add(D);let H=new ze({color:14205024,toneMapped:!1});for(let ht=-8;ht<=8;ht++){let Et=new bt(new nn(2,.18),H);Et.rotation.x=-Math.PI/2,Et.position.set(ht*5,.01,12),O.add(Et)}let W=new bt(new nn(200,60),new ze({color:0,transparent:!0,opacity:0}));W.position.z=-40,O.add(W);let Q=mt(new ce(I.fog).multiplyScalar(.6).getHex(),{roughness:1});for(let ht=0;ht<22;ht++){let Et=3+Math.random()*5,Nt=U===4?0:4+Math.random()*(U===5?26:12);if(!Nt)continue;let qt=new bt(new Me(Et,Nt,3),Q);qt.position.set(-55+ht*5+Math.random()*2,Nt/2,-18-Math.random()*8),O.add(qt)}if(U===4){let ht=mt(1057818);for(let Et=0;Et<40;Et++){let Nt=3+Math.random()*4,qt=new bt(new ci(Nt*.5,Nt*2.2,7),ht);qt.position.set(-50+Et*2.6,Nt*1.1,-14-Math.random()*10),O.add(qt)}}let at=Ot(I.build);at.g.position.z=-1,O.add(at.g),it.F=at.F.map(ht=>new F(ht[0],ht[1],ht[2]-1)),it.P=at.P.map(ht=>new F(ht[0],ht[1],ht[2]-1)),it.flames=it.F.map((ht,Et)=>{let Nt=new bt(new nn(1,1),R(Et*1.7+U));Nt.geometry.translate(0,.5,0),Nt.position.copy(ht);let qt=(U===5?2.4:3.2)*(.8+Et*37%10/25);Nt.scale.set(qt*.8,qt*1.35,1),Nt.userData.sc=qt,O.add(Nt);let ie=new Gn(f(16738842,.6));return ie.position.copy(ht).add(new F(0,qt*.4,.2)),ie.scale.setScalar(qt*2.6),O.add(ie),Nt.userData.gl=ie,Nt}),it.smoke=[];for(let ht=0;ht<26;ht++){let Et=new Gn(new bi({map:d,color:2762280,transparent:!0,depthWrite:!1,opacity:0}));Et.userData={life:99},O.add(Et),it.smoke.push(Et)}it.steam=[];for(let ht=0;ht<16;ht++){let Et=new Gn(new bi({map:d,color:15265524,transparent:!0,depthWrite:!1,opacity:0}));Et.userData={life:99},O.add(Et),it.steam.push(Et)}let nt=90,ut=new De;ut.setAttribute("position",new Ue(new Float32Array(nt*3),3)),it.emb=new Ns(ut,new cs({map:u,color:16752704,size:.28,transparent:!0,blending:On,depthWrite:!1,toneMapped:!1})),it.emb.frustumCulled=!1,it.embD=Array.from({length:nt},()=>({life:9,v:new F})),O.add(it.emb);let vt=420,Wt=new De;Wt.setAttribute("position",new Ue(new Float32Array(vt*3),3)),it.wat=new Ns(Wt,new cs({map:u,color:12116223,size:.32,transparent:!0,opacity:.85,blending:On,depthWrite:!1,toneMapped:!1})),it.wat.frustumCulled=!1,it.watD=Array.from({length:vt},()=>({life:9,v:new F,p:new F})),it.wi=0,O.add(it.wat),it.ff=[0,1,2,3].map(ht=>{let Et=A({ff:1,coat:3813926,pants:3813926,helmet:ht%2?16761370:14165532});return Et.scale.setScalar(1.15),Et.visible=!1,O.add(Et),Et});let ne=[4892927,16743088,8050266,16756736,11766527,5953238];it.ppl=it.P.concat(it.P).map((ht,Et)=>{let Nt=A({coat:ne[Et%6],pants:2767450,hair:[2759184,6961690,1052688][Et%3]});return Nt.scale.setScalar(1.1),Nt.position.copy(ht),Nt.position.x+=Et>=it.P.length?.7:0,Nt.visible=!1,O.add(Nt),Nt}),it.crowd=Array.from({length:6},(ht,Et)=>{let Nt=A({coat:ne[Et],pants:2767450,hair:[2759184,6961690,1052688][Et%3]});return Nt.position.set(-7+Et*2.8,.25,4.6),Nt.userData.y0=.25,Nt.rotation.y=Math.PI*0,Nt.visible=!1,O.add(Nt),Nt}),it.veh=new Map,it.cam=new Be(42,1,.5,200),it.t=0,it.camCfg={4:{p:[0,3,18],l:[0,3.8,0]},5:{p:[0,3,24],l:[0,11,0]},3:{p:[0,3.4,21],l:[0,4.6,0]},2:{p:[0,3,17],l:[0,4.4,0]},1:{p:[0,3.5,19.5],l:[0,6.4,0]}}[U]}let tt=new F;function lt(){let U=G.S;it.G!==G&&X(G.ch);let I=it.scene,O=G.t,M=Math.min(.05,DT||.016);it.t+=M;let L=s(),w=G.state==="win"?0:ms(G.fire/G.fireMax+(G.flare||0)*.15,0,1.3),D=it.camCfg,H=it.cam;H.aspect=U.w/U.h;let W=G.state==="win"?Math.min(1,G.winT/3):0;H.position.set(D.p[0]+Math.sin(O*.23)*.8,D.p[1]+Math.sin(O*.31)*.25,D.p[2]-W*3+Math.sin(O*.17)*.4),H.lookAt(D.l[0]+Math.sin(O*.19)*.3,D.l[1]+W*.8,D.l[2]),CAM.sh>0&&(H.position.x+=(Math.random()-.5)*CAM.sh*.6),H.updateProjectionMatrix(),H.updateMatrixWorld(),it.key.castShadow=L,G.ch===5&&(Math.random()<.004&&(it.flash=1),it.flash=Math.max(0,(it.flash||0)-M*3),it.key.intensity=$t[5].keyI+it.flash*6);let Q=Math.ceil(it.flames.length*Math.min(1,w)),at=[];it.flames.forEach((rt,Ft)=>{let Yt=Ft<Q,se=rt.userData.a=Bc(rt.userData.a||0,Yt?1:0,M*2.5);if(rt.visible=se>.02,rt.userData.gl.visible=rt.visible,!rt.visible)return;rt.material.uniforms.t.value=it.t+Ft,rt.material.uniforms.amp.value=se*(.9+.1*Math.sin(it.t*13+Ft)),rt.quaternion.copy(H.quaternion);let ke=rt.userData.sc*(.85+.15*se)*(1+.06*Math.sin(it.t*7+Ft*2));rt.scale.set(ke*.8,ke*1.35,1),rt.userData.gl.material.opacity=.45*se*(.85+.15*Math.sin(it.t*11+Ft)),Yt&&at.push(rt.position)}),it.fireL.intensity=w*(L?110:80)*(.85+.15*Math.sin(it.t*9)+.06*Math.sin(it.t*23)),at.length&&(tt.set(0,0,0),at.forEach(rt=>tt.add(rt)),tt.divideScalar(at.length),it.fireL.position.copy(tt).add(new F(0,1,4))),G.flames=at.map(rt=>(tt.copy(rt).add(new F(0,.8,0)).project(H),[U.x+(tt.x+1)/2*U.w,U.y+(1-tt.y)/2*U.h])),it.smoke.forEach((rt,Ft)=>{let Yt=rt.userData;if(Yt.life+=M,Yt.life>Yt.max)if(at.length&&Math.random()<.5*w+.05){let ke=at[Ft%at.length];Yt.life=0,Yt.max=3+Math.random()*2.5,rt.position.copy(ke).add(new F(Math.random()-.5,2,-.3)),Yt.vx=(Math.random()-.2)*.8,Yt.s0=2+Math.random()*2}else{rt.material.opacity=0;return}let se=Yt.life/Yt.max;rt.position.y+=M*(2.2-se),rt.position.x+=Yt.vx*M,rt.scale.setScalar(Yt.s0*(1+se*2.6)),rt.material.opacity=Math.sin(se*Math.PI)*.55*Math.min(1,w+.2),rt.material.rotation+=M*.2});let nt=Math.max(G.steam,G.state==="win"?1-Math.min(1,G.winT/3):0);it.steam.forEach((rt,Ft)=>{let Yt=rt.userData;if(Yt.life+=M,Yt.life>Yt.max)if(nt>.1&&it.F.length&&Math.random()<nt*.4){let ke=it.F[Ft*5%it.F.length];Yt.life=0,Yt.max=2+Math.random(),rt.position.copy(ke).add(new F(0,.5,.5)),Yt.s0=1.5+Math.random()}else{rt.material.opacity=0;return}let se=Yt.life/Yt.max;rt.position.y+=M*2.6,rt.scale.setScalar(Yt.s0*(1+se*3)),rt.material.opacity=Math.sin(se*Math.PI)*.5});{let rt=it.emb.geometry.attributes.position;it.embD.forEach((Ft,Yt)=>{if(Ft.life+=M,Ft.life>Ft.max)if(at.length&&Math.random()<w*.25){let se=at[Math.floor(Math.random()*at.length)];Ft.life=0,Ft.max=1.5+Math.random()*2,rt.setXYZ(Yt,se.x+(Math.random()-.5),se.y+1,se.z+.3),Ft.v.set((Math.random()-.5)*1.5,2+Math.random()*2.5,(Math.random()-.5)*.5)}else{rt.setXYZ(Yt,0,-99,0);return}rt.setXYZ(Yt,rt.getX(Yt)+Ft.v.x*M+Math.sin(it.t*3+Yt)*M*.6,rt.getY(Yt)+Ft.v.y*M,rt.getZ(Yt)+Ft.v.z*M)}),rt.needsUpdate=!0}let ut=(()=>{let rt=H.position.z-9;return 2*Math.tan(H.fov*Math.PI/360)*rt*H.aspect})(),vt=new Set,Wt=[];G.sv.forEach((rt,Ft)=>{let Yt=rt.id+"_"+rt.type;vt.add(Yt);let se=it.veh.get(Yt);se||(se=B(T(rt.type,ot(rt.type)),null),se.scale.setScalar(4.4),I.add(se),it.veh.set(Yt,se));let ke=(rt.x/U.w-.5)*ut*.92,gs=8.6+Ft%2*1.6;se.position.set(ke,0,gs);let Xn=rt.state==="drive";se.rotation.y=rt.dir>0?0:Math.PI,se.userData.yaw.rotation.z=Xn?-.02:0,se.position.y=Xn?Math.abs(Math.sin(O*18+Ft))*.04:0,N(se,!0,O,Ft);let Sn=se.userData.lad;if(Sn){let y=ms((rt.work||0)/1.6,0,1);Sn.rotation.z=-.03+(rt.state==="work"?y*.75:0)}rt.state==="work"&&WATER[rt.type]&&G.state!=="win"&&Wt.push({x:ke,z:gs,i:Ft})});for(let[rt,Ft]of it.veh)vt.has(rt)||(I.remove(Ft),it.veh.delete(rt));let ne=it.watD,ht=it.wat.geometry.attributes.position;it.ff.forEach((rt,Ft)=>{let Yt=Wt[Ft];if(rt.visible=!!Yt||G.state==="win"&&Ft<Wt.length+2&&G.sv.length>Ft,!rt.visible)return;let se=at.length?at[Ft%at.length]:it.F[Ft%it.F.length],ke=Yt?Yt.x+(Ft%2?2.4:-2.4):-3+Ft*3;if(rt.position.set(ke,.25,5.2-Ft*.3),Yt&&se&&w>0){rt.lookAt(se.x,rt.position.y,se.z),x(rt,"spray",O,Ft),rt.userData.noz.getWorldPosition(tt);let Xn=se.clone().add(new F(Math.sin(O*2+Ft)*.6,.6,0)),Sn=.9;for(let y=0;y<(L?6:3);y++){let z=ne[it.wi=(it.wi+1)%ne.length];z.life=0,z.max=Sn*(.9+Math.random()*.25),z.p.copy(tt),z.v.set((Xn.x-tt.x)/Sn+(Math.random()-.5)*.6,(Xn.y-tt.y)/Sn+4.9*Sn+(Math.random()-.5)*.6,(Xn.z-tt.z)/Sn+(Math.random()-.5)*.4)}}else x(rt,G.state==="win"?"cheer":"idle",O,Ft)}),ne.forEach((rt,Ft)=>{if(rt.life>rt.max){ht.setXYZ(Ft,0,-99,0);return}rt.life+=M,rt.v.y-=9.8*M,rt.p.addScaledVector(rt.v,M),ht.setXYZ(Ft,rt.p.x,rt.p.y,rt.p.z)}),ht.needsUpdate=!0;let Et=Math.max(0,G.people-G.rescued);it.ppl.forEach((rt,Ft)=>{rt.visible=Ft<Math.min(Et,it.ppl.length)&&G.state!=="win",rt.visible&&x(rt,"wave",O,Ft)}),it.crowd.forEach((rt,Ft)=>{rt.visible=Ft<(G.state==="win"?G.people:G.rescued),rt.visible&&x(rt,G.state==="win"?"cheer":"wave",O,Ft*1.3)});let Nt=c(),qt=Math.round(U.w*Nt),ie=Math.round(U.h*Nt);a(qt,ie),i.shadowMap.autoUpdate=!0,i.render(I,H),i.shadowMap.autoUpdate=!1,o(cx,qt,ie,U.x,U.y,U.w,U.h)}let et={scene:new oi,cam:new Be(26,1,.1,50),objs:new Map};{let U=et.scene;U.environment=n,U.environmentIntensity=1,U.add(new hs(15265535,3158072,.9));let I=new li(16774376,3);I.position.set(-2,4,3),I.castShadow=!0,I.shadow.mapSize.set(1024,1024),Object.assign(I.shadow.camera,{left:-1,right:1,top:1,bottom:-1,near:.5,far:12}),I.shadow.radius=5,U.add(I);let O=new li(10469631,1.6);O.position.set(3,2,-3),U.add(O);let M=new bt(new He(.62,.66,.04,64),new Ce({color:4869724,metalness:.85,roughness:.22}));M.position.y=-.02,M.receiveShadow=!0,U.add(M);let L=new bt(new Qr(.64,.008,8,96),new ze({color:16765562,toneMapped:!1}));L.rotation.x=Math.PI/2,L.position.y=.002,U.add(L),et.plat=M,et.ring=L}function Gt(U,I,O,M,L,w,D,H){if(H=H||{},!Ie.ok||Ie.lost)return null;let W=I+O+"|"+m(I),Q=et.objs.get(W);Q||(Q=B(T(I,O),[1,1]),et.objs.set(W,Q)),et.scene.children.forEach(qt=>{qt.userData&&qt.userData.f!==void 0&&qt!==Q&&(qt.visible=!1)}),Q.parent||et.scene.add(Q),Q.visible=!0,Q.rotation.y=-D-Math.PI/2,N(Q,!!H.siren,H.t||TT,0);let at=H.plat!==!1&&w>90;et.plat.visible=et.ring.visible=at,at&&(et.plat.rotation.y=Q.rotation.y);let nt=et.cam,ut=2.45,vt=.42;nt.aspect=1.4,nt.position.set(0,Math.sin(vt)*ut+.12,Math.cos(vt)*ut),nt.lookAt(0,.16,0),nt.updateProjectionMatrix();let Wt=Math.min(DPR,2)*(U.canvas&&U.canvas.width>U.canvas.clientWidth*1.2,1),ne=w*1.75,ht=ne/1.4,Et=Math.round(ne*Wt),Nt=Math.round(ht*Wt);return a(Et,Nt),i.shadowMap.autoUpdate=!0,i.render(et.scene,nt),i.shadowMap.autoUpdate=!1,U.save(),H.filter&&(U.filter=H.filter),o(U,Et,Nt,M-ne/2,L-ht*.66,ne,ht),U.restore(),!0}let At=window.renderBoard,Bt=window.renderScene,ue=window.drawTT,gt=()=>Ie.ok&&!Ie.lost&&!Ie.off,Ut=0,jt=0,Kt=0;window.renderBoard=function(){if(!gt())return At();try{Qt(),G.i===0&&!G.firstTap&&G.state==="play"&&drawHand(),drawImpacts(),Ie.frames++}catch(U){Tn("board3d error \u2192 2D",U&&U.stack),Ie.off=!0,At()}},window.renderScene=function(){if(!gt())return Bt();try{lt()}catch(U){Tn("scene3d error \u2192 2D",U&&U.stack),Ie.off=!0,Bt()}},window.drawTT=function(U,I,O,M,L,w,D,H){if(gt()&&"EKTA".includes(I))try{if(Gt(U,I,O,M,L,w,D,H))return!0}catch(W){Tn("tt3d error",W&&W.message)}return ue(U,I,O,M,L,w,D,H)};let kt=window.update;window.update=function(U){if(kt(U),Ut+=U,jt++,Ut>2){let I=jt/Ut;Ie.fps=I,Ut=0,jt=0,gt()&&MODE==="game"&&(I<45?(Kt++,Kt>=2&&(Ie.prCap||2)>1&&(Ie.prCap=Math.max(1,(Ie.prCap||2)-.5),Kt=0,Tn("adaptive pr",Ie.prCap))):Kt=0)}},Ie.flags={setup:()=>{}},Tn("3D renderer on",i.capabilities.isWebGL2?"webgl2":"webgl1")}function Tn(...i){try{console.log("[R3]",...i)}catch{}}try{n0()}catch(i){Tn("init failed \u2192 2D",i&&i.stack),window.R3.ok=!1}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
