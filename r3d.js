(()=>{var Zh=0,el=1,Jh=2;var ch=1,Dc=2,Un=3,ri=0,Ke=1,Nn=2,ni=0,Qi=1,zn=2,nl=3,il=4,$h=5,Mi=100,Kh=101,Qh=102,jh=103,tu=104,eu=200,nu=201,iu=202,su=203,so=204,ro=205,ru=206,au=207,ou=208,cu=209,lu=210,hu=211,uu=212,fu=213,du=214,ao=0,oo=1,co=2,ns=3,lo=4,ho=5,uo=6,fo=7,lh=0,pu=1,mu=2,ii=0,gu=1,_u=2,xu=3,yu=4,vu=5,Mu=6,Uc=7;var hh=300,is=301,ss=302,po=303,mo=304,aa=306,go=1e3,Ei=1001,_o=1002,fn=1003,Su=1004;var $s=1005;var Mn=1006,Ma=1007;var bi=1008;var Hn=1009,uh=1010,fh=1011,Ds=1012,Nc=1013,wi=1014,Fn=1015,qs=1016,Fc=1017,Oc=1018,rs=1020,dh=35902,ph=1021,mh=1022,Sn=1023,gh=1024,_h=1025,ji=1026,as=1027,xh=1028,Bc=1029,yh=1030,zc=1031;var Hc=1033,Tr=33776,Ar=33777,Rr=33778,Cr=33779,xo=35840,yo=35841,vo=35842,Mo=35843,So=36196,Eo=37492,bo=37496,wo=37808,To=37809,Ao=37810,Ro=37811,Co=37812,Po=37813,Io=37814,Lo=37815,Do=37816,Uo=37817,No=37818,Fo=37819,Oo=37820,Bo=37821,Pr=36492,zo=36494,Ho=36495,vh=36283,ko=36284,Go=36285,Vo=36286;var Lr=2300,Wo=2301,Sa=2302,sl=2400,rl=2401,al=2402;var Eu=3200,bu=3201;var Mh=0,wu=1,ti="",Ie="srgb",ui="srgb-linear",kc="display-p3",oa="display-p3-linear",Dr="linear",Ce="srgb",Ur="rec709",Nr="p3";var Li=7680;var ol=519,Tu=512,Au=513,Ru=514,Sh=515,Cu=516,Pu=517,Iu=518,Lu=519,Xo=35044;var cl="300 es",On=2e3,Fr=2001,ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ea=Math.PI/180,qo=180/Math.PI;function Bn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Du(i,t){return(i%t+t)%t}function ba(i,t,e){return(1-e)*i+e*t}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _t=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ue=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=s[0],p=s[3],m=s[6],A=s[1],S=s[4],T=s[7],k=s[2],L=s[5],D=s[8];return r[0]=a*y+o*A+c*k,r[3]=a*p+o*S+c*L,r[6]=a*m+o*T+c*D,r[1]=l*y+h*A+u*k,r[4]=l*p+h*S+u*L,r[7]=l*m+h*T+u*D,r[2]=f*y+d*A+g*k,r[5]=f*p+d*S+g*L,r[8]=f*m+d*T+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=f*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wa=new ue;function Eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uu(){let i=Or("canvas");return i.style.display="block",i}var ll={};function Ir(i){i in ll||(ll[i]=!0,console.warn(i))}function Nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Fu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ou(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var hl=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ul=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vs={[ui]:{transfer:Dr,primaries:Ur,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ie]:{transfer:Ce,primaries:Ur,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[oa]:{transfer:Dr,primaries:Nr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ul),fromReference:i=>i.applyMatrix3(hl)},[kc]:{transfer:Ce,primaries:Nr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ul),fromReference:i=>i.applyMatrix3(hl).convertLinearToSRGB()}},Bu=new Set([ui,oa]),ye={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=vs[t].toReference,s=vs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return vs[i].primaries},getTransfer:function(i){return i===ti?Dr:vs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(vs[t].luminanceCoefficients)}};function ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Di,Yo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Or("canvas")),Di.width=t.width,Di.height=t.height;let n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ts(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ts(e[n]/255)*255):e[n]=ts(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zu=0,Br=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Aa(s[a].image)):r.push(Aa(s[a]))}else r=Aa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Aa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hu=0,ln=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ei,s=Ei,r=Mn,a=bi,o=Sn,c=Hn,l=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Bn(),this.name="",this.source=new Br(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case go:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case go:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=hh;ln.DEFAULT_ANISOTROPY=1;var we=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,T=(d+1)/2,k=(m+1)/2,L=(h+f)/4,D=(u+y)/4,P=(g+p)/4;return S>T&&S>k?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=L/n,r=D/n):T>k?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=L/s,r=P/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=D/r,s=P/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(u-y)/A,this.z=(f-h)/A,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Br(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zr=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==f||l!==d||h!==g){let p=1-o,m=c*f+l*d+h*g+u*y,A=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){let k=Math.sqrt(S),L=Math.atan2(k,m*A);p=Math.sin(p*L)/k,o=Math.sin(o*L)/k}let T=o*A;if(c=c*p+f*T,l=l*p+d*T,h=h*p+g*T,u=u*p+y*T,p===1-o){let k=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=k,l*=k,h*=k,u*=k}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ra=new U,fl=new oi,Gn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),Qs.subVectors(this.max,Ms),Ui.subVectors(t.a,Ms),Ni.subVectors(t.b,Ms),Fi.subVectors(t.c,Ms),Zn.subVectors(Ni,Ui),Jn.subVectors(Fi,Ni),pi.subVectors(Ui,Fi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-pi.z,pi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,pi.z,0,-pi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-pi.y,pi.x,0];return!Ca(e,Ui,Ni,Fi,Qs)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Ui,Ni,Fi,Qs))?!1:(js.crossVectors(Zn,Jn),e=[js.x,js.y,js.z],Ca(e,Ui,Ni,Fi,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new U,new U,new U,new U,new U,new U,new U,new U],_n=new U,Ks=new Gn,Ui=new U,Ni=new U,Fi=new U,Zn=new U,Jn=new U,pi=new U,Ms=new U,Qs=new U,js=new U,mi=new U;function Ca(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ku=new Gn,Ss=new U,Pa=new U,os=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ku.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);let e=Ss.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(Pa)),this.expandByPoint(Ss.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new U,Ia=new U,tr=new U,$n=new U,La=new U,er=new U,Da=new U,Us=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ia.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Ia);let r=t.distanceTo(e)*.5,a=-this.direction.dot(tr),o=$n.dot(this.direction),c=-$n.dot(tr),l=$n.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ia).addScaledVector(tr,f),d}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,r){La.subVectors(e,t),er.subVectors(n,t),Da.crossVectors(La,er);let a=this.direction.dot(Da),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);let c=o*this.direction.dot(er.crossVectors($n,er));if(c<0)return null;let l=o*this.direction.dot(La.cross($n));if(l<0||c+l>a)return null;let h=-o*$n.dot(Da);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,f,d,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,y,p)}set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,y=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-o*c,e[2]=y-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f+y*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=y+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f-y*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,y=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=a*c,d=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gu,t,Vu)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Kn.crossVectors(n,on),Kn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Kn.crossVectors(n,on)),Kn.normalize(),nr.crossVectors(on,Kn),s[0]=Kn.x,s[4]=nr.x,s[8]=on.x,s[1]=Kn.y,s[5]=nr.y,s[9]=on.y,s[2]=Kn.z,s[6]=nr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],p=n[10],m=n[14],A=n[3],S=n[7],T=n[11],k=n[15],L=s[0],D=s[4],P=s[8],ft=s[12],_=s[1],w=s[5],Q=s[9],$=s[13],j=s[2],ct=s[6],Z=s[10],yt=s[14],et=s[3],Dt=s[7],Ct=s[11],Ut=s[15];return r[0]=a*L+o*_+c*j+l*et,r[4]=a*D+o*w+c*ct+l*Dt,r[8]=a*P+o*Q+c*Z+l*Ct,r[12]=a*ft+o*$+c*yt+l*Ut,r[1]=h*L+u*_+f*j+d*et,r[5]=h*D+u*w+f*ct+d*Dt,r[9]=h*P+u*Q+f*Z+d*Ct,r[13]=h*ft+u*$+f*yt+d*Ut,r[2]=g*L+y*_+p*j+m*et,r[6]=g*D+y*w+p*ct+m*Dt,r[10]=g*P+y*Q+p*Z+m*Ct,r[14]=g*ft+y*$+p*yt+m*Ut,r[3]=A*L+S*_+T*j+k*et,r[7]=A*D+S*w+T*ct+k*Dt,r[11]=A*P+S*Q+T*Z+k*Ct,r[15]=A*ft+S*$+T*yt+k*Ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+y*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+p*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+m*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],A=u*p*l-y*f*l+y*c*d-o*p*d-u*c*m+o*f*m,S=g*f*l-h*p*l-g*c*d+a*p*d+h*c*m-a*f*m,T=h*y*l-g*u*l+g*o*d-a*y*d-h*o*m+a*u*m,k=g*u*c-h*y*c-g*o*f+a*y*f+h*o*p-a*u*p,L=e*A+n*S+s*T+r*k;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return t[0]=A*D,t[1]=(y*f*r-u*p*r-y*s*d+n*p*d+u*s*m-n*f*m)*D,t[2]=(o*p*r-y*c*r+y*s*l-n*p*l-o*s*m+n*c*m)*D,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*D,t[4]=S*D,t[5]=(h*p*r-g*f*r+g*s*d-e*p*d-h*s*m+e*f*m)*D,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*m-e*c*m)*D,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*d+e*c*d)*D,t[8]=T*D,t[9]=(g*u*r-h*y*r-g*n*d+e*y*d+h*n*m-e*u*m)*D,t[10]=(a*y*r-g*o*r+g*n*l-e*y*l-a*n*m+e*o*m)*D,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*D,t[12]=k*D,t[13]=(h*y*s-g*u*s+g*n*f-e*y*f-h*n*p+e*u*p)*D,t[14]=(g*o*s-a*y*s-g*n*c+e*y*c+a*n*p-e*o*p)*D,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,y=a*h,p=a*u,m=o*u,A=c*l,S=c*h,T=c*u,k=n.x,L=n.y,D=n.z;return s[0]=(1-(y+m))*k,s[1]=(d+T)*k,s[2]=(g-S)*k,s[3]=0,s[4]=(d-T)*L,s[5]=(1-(f+m))*L,s[6]=(p+A)*L,s[7]=0,s[8]=(g+S)*D,s[9]=(p-A)*D,s[10]=(1-(f+y))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Oi.set(s[0],s[1],s[2]).length(),a=Oi.set(s[4],s[5],s[6]).length(),o=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let l=1/r,h=1/a,u=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=On){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(o===On)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fr)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*l,d=(n+s)*h,g,y;if(o===On)g=(a+r)*u,y=-2*u;else if(o===Fr)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Oi=new U,xn=new Se,Gu=new U(0,0,0),Vu=new U(1,1,1),Kn=new U,nr=new U,on=new U,dl=new Se,pl=new oi,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ns=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wu=0,ml=new U,Bi=new oi,In=new Se,ir=new U,Es=new U,Xu=new U,qu=new oi,gl=new U(1,0,0),_l=new U(0,1,0),xl=new U(0,0,1),yl={type:"added"},Yu={type:"removed"},zi={type:"childadded",child:null},Ua={type:"childremoved",child:null},Ze=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new An,n=new oi,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new ue}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Es,ir,this.up):In.lookAt(ir,Es,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(In),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yl),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yu),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yl),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,Xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ze.DEFAULT_UP=new U(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new U,Ln=new U,Na=new U,Dn=new U,Hi=new U,ki=new U,vl=new U,Fa=new U,Oa=new U,Ba=new U,za=new we,Ha=new we,ka=new we,ei=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Ln.subVectors(n,e),Na.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(Ln),c=yn.dot(Na),l=Ln.dot(Ln),h=Ln.dot(Na),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return za.setScalar(0),Ha.setScalar(0),ka.setScalar(0),za.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,n),ka.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(za,r.x),a.addScaledVector(Ha,r.y),a.addScaledVector(ka,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Ln.subVectors(t,e),yn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),yn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Hi.subVectors(s,n),ki.subVectors(r,n),Fa.subVectors(t,n);let c=Hi.dot(Fa),l=ki.dot(Fa);if(c<=0&&l<=0)return e.copy(n);Oa.subVectors(t,s);let h=Hi.dot(Oa),u=ki.dot(Oa);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Hi,a);Ba.subVectors(t,r);let d=Hi.dot(Ba),g=ki.dot(Ba);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ki,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return vl.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(vl,o);let m=1/(p+y+f);return a=y*m,o=f*m,e.copy(n).addScaledVector(Hi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ce=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=Du(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ga(a,r,t+1/3),this.g=Ga(a,r,t),this.b=Ga(a,r,t-1/3)}return ye.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ye.fromWorkingColorSpace($e.copy(this),t),Math.round(We($e.r*255,0,255))*65536+Math.round(We($e.g*255,0,255))*256+Math.round(We($e.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ie){ye.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(sr);let n=ba(Qn.h,sr.h,e),s=ba(Qn.s,sr.s,e),r=ba(Qn.l,sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new ce;ce.NAMES=bh;var Zu=0,Vn=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Qi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xe=class extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new U,rr=new _t,He=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xo,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xo&&(t.usage=this.usage),t}};var Hr=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var kr=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ve=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ju=0,un=new Se,Va=new Ze,Gi=new U,cn=new Gn,bs=new Gn,Ve=new U,Oe=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?kr:Hr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(cn.min,bs.min),cn.expandByPoint(Ve),Ve.addVectors(cn.max,bs.max),cn.expandByPoint(Ve)):(cn.expandByPoint(bs.min),cn.expandByPoint(bs.max))}cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ve.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(t,l),Ve.add(Gi)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new U,c[P]=new U;let l=new U,h=new U,u=new U,f=new _t,d=new _t,g=new _t,y=new U,p=new U;function m(P,ft,_){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,ft),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,ft),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(w),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),o[P].add(y),o[ft].add(y),o[_].add(y),c[P].add(p),c[ft].add(p),c[_].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let P=0,ft=A.length;P<ft;++P){let _=A[P],w=_.start,Q=_.count;for(let $=w,j=w+Q;$<j;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}let S=new U,T=new U,k=new U,L=new U;function D(P){k.fromBufferAttribute(s,P),L.copy(k);let ft=o[P];S.copy(ft),S.sub(k.multiplyScalar(k.dot(ft))).normalize(),T.crossVectors(L,ft);let w=T.dot(c[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,w)}for(let P=0,ft=A.length;P<ft;++P){let _=A[P],w=_.start,Q=_.count;for(let $=w,j=w+Q;$<j;$+=3)D(t.getX($+0)),D(t.getX($+1)),D(t.getX($+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?d=c[y]*o.data.stride+o.offset:d=c[y]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new He(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ml=new Se,gi=new Us,ar=new os,Sl=new U,or=new U,cr=new U,lr=new U,Wa=new U,hr=new U,El=new U,ur=new U,Mt=class extends Ze{constructor(t=new Oe,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Wa.fromBufferAttribute(u,t),a?hr.addScaledVector(Wa,h):hr.addScaledVector(Wa.sub(e),h))}e.add(hr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(ar.containsPoint(gi.origin)===!1&&(gi.intersectSphere(ar,Sl)===null||gi.origin.distanceToSquared(Sl)>(t.far-t.near)**2))&&(Ml.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=a[p.materialIndex],A=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let T=A,k=S;T<k;T+=3){let L=o.getX(T),D=o.getX(T+1),P=o.getX(T+2);s=fr(this,m,t,n,l,h,u,L,D,P),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let A=o.getX(p),S=o.getX(p+1),T=o.getX(p+2);s=fr(this,a,t,n,l,h,u,A,S,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=a[p.materialIndex],A=Math.max(p.start,d.start),S=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let T=A,k=S;T<k;T+=3){let L=T,D=T+1,P=T+2;s=fr(this,m,t,n,l,h,u,L,D,P),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let A=p,S=p+1,T=p+2;s=fr(this,a,t,n,l,h,u,A,S,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function $u(i,t,e,n,s,r,a,o){let c;if(t.side===Ke?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ri,o),c===null)return null;ur.copy(o),ur.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ur);return l<e.near||l>e.far?null:{distance:l,point:ur.clone(),object:i}}function fr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,or),i.getVertexPosition(c,cr),i.getVertexPosition(l,lr);let h=$u(i,t,e,n,or,cr,lr,El);if(h){let u=new U;ei.getBarycoord(El,or,cr,lr,u),s&&(h.uv=ei.getInterpolatedAttribute(s,o,c,l,u,new _t)),r&&(h.uv1=ei.getInterpolatedAttribute(r,o,c,l,u,new _t)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new U,materialIndex:0};ei.getNormal(or,cr,lr,f.normal),h.face=f,h.barycoord=u}return h}var Te=class i extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(u,2));function g(y,p,m,A,S,T,k,L,D,P,ft){let _=T/D,w=k/P,Q=T/2,$=k/2,j=L/2,ct=D+1,Z=P+1,yt=0,et=0,Dt=new U;for(let Ct=0;Ct<Z;Ct++){let Ut=Ct*w-$;for(let fe=0;fe<ct;fe++){let me=fe*_-Q;Dt[y]=me*A,Dt[p]=Ut*S,Dt[m]=j,l.push(Dt.x,Dt.y,Dt.z),Dt[y]=0,Dt[p]=0,Dt[m]=L>0?1:-1,h.push(Dt.x,Dt.y,Dt.z),u.push(fe/D),u.push(1-Ct/P),yt+=1}}for(let Ct=0;Ct<P;Ct++)for(let Ut=0;Ut<D;Ut++){let fe=f+Ut+ct*Ct,me=f+Ut+ct*(Ct+1),st=f+(Ut+1)+ct*(Ct+1),mt=f+(Ut+1)+ct*Ct;c.push(fe,me,mt),c.push(me,st,mt),et+=6}o.addGroup(d,et,ft),d+=et,f+=yt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ku(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var Qu={clone:cs,merge:tn},ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ju,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Gr=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jn=new U,bl=new _t,wl=new _t,ze=class extends Gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,bl,wl),e.subVectors(wl,bl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vi=-90,Wi=1,$o=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(Vi,Wi,t,e);s.layers=this.layers,this.add(s);let r=new ze(Vi,Wi,t,e);r.layers=this.layers,this.add(r);let a=new ze(Vi,Wi,t,e);a.layers=this.layers,this.add(a);let o=new ze(Vi,Wi,t,e);o.layers=this.layers,this.add(o);let c=new ze(Vi,Wi,t,e);c.layers=this.layers,this.add(c);let l=new ze(Vi,Wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vr=class extends ln{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ko=class extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:ni});r.uniforms.tEquirect.value=e;let a=new Mt(s,r),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=Mn),new $o(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Xa=new U,ef=new U,nf=new ue,vn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Xa.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nf.getNormalMatrix(t),s=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new os,dr=new U,Fs=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],y=s[10],p=s[11],m=s[12],A=s[13],S=s[14],T=s[15];if(n[0].setComponents(c-r,f-l,p-d,T-m).normalize(),n[1].setComponents(c+r,f+l,p+d,T+m).normalize(),n[2].setComponents(c+a,f+h,p+g,T+A).normalize(),n[3].setComponents(c-a,f-h,p-g,T-A).normalize(),n[4].setComponents(c-o,f-u,p-y,T-S).normalize(),e===On)n[5].setComponents(c+o,f+u,p+y,T+S).normalize();else if(e===Fr)n[5].setComponents(o,u,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Th(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sf(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var en=class i extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let A=m*f-a;for(let S=0;S<l;S++){let T=S*u-r;g.push(T,-A,0),y.push(0,0,1),p.push(S/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let A=0;A<o;A++){let S=A+l*m,T=A+l*(m+1),k=A+1+l*(m+1),L=A+1+l*m;d.push(S,T,L),d.push(T,k,L)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
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
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
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
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
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
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xf=`#ifdef USE_IRIDESCENCE
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
#endif`,yf=`#ifdef USE_BUMPMAP
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rf=`#define PI 3.141592653589793
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
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pf=`vec3 transformedNormal = objectNormal;
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
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`
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
}`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
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
}`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
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
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
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
#endif`,id=`struct PhysicalMaterial {
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
}`,sd=`
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pd=`#if defined( USE_POINTS_UV )
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
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
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
#endif`,Md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
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
#endif`,Rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vd=`float getShadowMask() {
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
}`,Wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xd=`#ifdef USE_SKINNING
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
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`#include <common>
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
}`,up=`#if DEPTH_PACKING == 3200
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
}`,fp=`#define DISTANCE
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
}`,dp=`#define DISTANCE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
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
}`,_p=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,yp=`uniform vec3 diffuse;
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
}`,vp=`#define LAMBERT
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
}`,Mp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,Ep=`#define MATCAP
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
}`,bp=`#define NORMAL
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
}`,wp=`#define NORMAL
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
}`,Tp=`#define PHONG
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
}`,Ap=`#define PHONG
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
}`,Rp=`#define STANDARD
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
}`,Cp=`#define STANDARD
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
}`,Pp=`#define TOON
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
}`,Ip=`#define TOON
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
}`,Lp=`uniform float size;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Np=`uniform vec3 color;
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
}`,Fp=`uniform float rotation;
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
}`,Op=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:rf,alphahash_pars_fragment:af,alphamap_fragment:of,alphamap_pars_fragment:cf,alphatest_fragment:lf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:ff,batching_pars_vertex:df,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:xf,bumpmap_pars_fragment:yf,clipping_planes_fragment:vf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:Ef,color_fragment:bf,color_pars_fragment:wf,color_pars_vertex:Tf,color_vertex:Af,common:Rf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:If,displacementmap_vertex:Lf,emissivemap_fragment:Df,emissivemap_pars_fragment:Uf,colorspace_fragment:Nf,colorspace_pars_fragment:Ff,envmap_fragment:Of,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:Kf,envmap_vertex:kf,fog_vertex:Gf,fog_pars_vertex:Vf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Jf,lights_pars_begin:$f,lights_toon_fragment:Qf,lights_toon_pars_fragment:jf,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:rd,lights_fragment_end:ad,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:hd,map_fragment:ud,map_pars_fragment:fd,map_particle_fragment:dd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphinstance_vertex:_d,morphcolor_vertex:xd,morphnormal_vertex:yd,morphtarget_pars_vertex:vd,morphtarget_vertex:Md,normal_fragment_begin:Sd,normal_fragment_maps:Ed,normal_pars_fragment:bd,normal_pars_vertex:wd,normal_vertex:Td,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:Rd,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Pd,iridescence_pars_fragment:Id,opaque_fragment:Ld,packing:Dd,premultiplied_alpha_fragment:Ud,project_vertex:Nd,dithering_fragment:Fd,dithering_pars_fragment:Od,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Hd,shadowmap_pars_vertex:kd,shadowmap_vertex:Gd,shadowmask_pars_fragment:Vd,skinbase_vertex:Wd,skinning_pars_vertex:Xd,skinning_vertex:qd,skinnormal_vertex:Yd,specularmap_fragment:Zd,specularmap_pars_fragment:Jd,tonemapping_fragment:$d,tonemapping_pars_fragment:Kd,transmission_fragment:Qd,transmission_pars_fragment:jd,uv_pars_fragment:tp,uv_pars_vertex:ep,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:rp,backgroundCube_vert:ap,backgroundCube_frag:op,cube_vert:cp,cube_frag:lp,depth_vert:hp,depth_frag:up,distanceRGBA_vert:fp,distanceRGBA_frag:dp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:_p,meshbasic_vert:xp,meshbasic_frag:yp,meshlambert_vert:vp,meshlambert_frag:Mp,meshmatcap_vert:Sp,meshmatcap_frag:Ep,meshnormal_vert:bp,meshnormal_frag:wp,meshphong_vert:Tp,meshphong_frag:Ap,meshphysical_vert:Rp,meshphysical_frag:Cp,meshtoon_vert:Pp,meshtoon_frag:Ip,points_vert:Lp,points_frag:Dp,shadow_vert:Up,shadow_frag:Np,sprite_vert:Fp,sprite_frag:Op},It={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},wn={basic:{uniforms:tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ce(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:tn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:tn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ce(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:tn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:tn([It.points,It.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:tn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:tn([It.common,It.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:tn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:tn([It.sprite,It.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:tn([It.common,It.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:tn([It.lights,It.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};wn.physical={uniforms:tn([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var pr={r:0,b:0,g:0},xi=new An,Bp=new Se;function zp(i,t,e,n,s,r,a){let o=new ce(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?e:t).get(S)),S}function y(A){let S=!1,T=g(A);T===null?m(o,c):T&&T.isColor&&(m(T,1),S=!0);let k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,S){let T=g(S);T&&(T.isCubeTexture||T.mapping===aa)?(h===void 0&&(h=new Mt(new Te(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:cs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(S.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(xi)),h.material.toneMapped=ye.getTransfer(T.colorSpace)!==Ce,(u!==T||f!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Mt(new en(2,2),new dn({name:"BackgroundMaterial",uniforms:cs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ye.getTransfer(T.colorSpace)!==Ce,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,d=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,S){A.getRGB(pr,wh(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(A,S=1){o.set(A),c=S,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,m(o,c)},render:y,addToRenderList:p}}function Hp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(_,w,Q,$,j){let ct=!1,Z=u($,Q,w);r!==Z&&(r=Z,l(r.object)),ct=d(_,$,Q,j),ct&&g(_,$,Q,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,T(_,w,Q,$),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,Q){let $=Q.wireframe===!0,j=n[_.id];j===void 0&&(j={},n[_.id]=j);let ct=j[w.id];ct===void 0&&(ct={},j[w.id]=ct);let Z=ct[$];return Z===void 0&&(Z=f(c()),ct[$]=Z),Z}function f(_){let w=[],Q=[],$=[];for(let j=0;j<e;j++)w[j]=0,Q[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:Q,attributeDivisors:$,object:_,attributes:{},index:null}}function d(_,w,Q,$){let j=r.attributes,ct=w.attributes,Z=0,yt=Q.getAttributes();for(let et in yt)if(yt[et].location>=0){let Ct=j[et],Ut=ct[et];if(Ut===void 0&&(et==="instanceMatrix"&&_.instanceMatrix&&(Ut=_.instanceMatrix),et==="instanceColor"&&_.instanceColor&&(Ut=_.instanceColor)),Ct===void 0||Ct.attribute!==Ut||Ut&&Ct.data!==Ut.data)return!0;Z++}return r.attributesNum!==Z||r.index!==$}function g(_,w,Q,$){let j={},ct=w.attributes,Z=0,yt=Q.getAttributes();for(let et in yt)if(yt[et].location>=0){let Ct=ct[et];Ct===void 0&&(et==="instanceMatrix"&&_.instanceMatrix&&(Ct=_.instanceMatrix),et==="instanceColor"&&_.instanceColor&&(Ct=_.instanceColor));let Ut={};Ut.attribute=Ct,Ct&&Ct.data&&(Ut.data=Ct.data),j[et]=Ut,Z++}r.attributes=j,r.attributesNum=Z,r.index=$}function y(){let _=r.newAttributes;for(let w=0,Q=_.length;w<Q;w++)_[w]=0}function p(_){m(_,0)}function m(_,w){let Q=r.newAttributes,$=r.enabledAttributes,j=r.attributeDivisors;Q[_]=1,$[_]===0&&(i.enableVertexAttribArray(_),$[_]=1),j[_]!==w&&(i.vertexAttribDivisor(_,w),j[_]=w)}function A(){let _=r.newAttributes,w=r.enabledAttributes;for(let Q=0,$=w.length;Q<$;Q++)w[Q]!==_[Q]&&(i.disableVertexAttribArray(Q),w[Q]=0)}function S(_,w,Q,$,j,ct,Z){Z===!0?i.vertexAttribIPointer(_,w,Q,j,ct):i.vertexAttribPointer(_,w,Q,$,j,ct)}function T(_,w,Q,$){y();let j=$.attributes,ct=Q.getAttributes(),Z=w.defaultAttributeValues;for(let yt in ct){let et=ct[yt];if(et.location>=0){let Dt=j[yt];if(Dt===void 0&&(yt==="instanceMatrix"&&_.instanceMatrix&&(Dt=_.instanceMatrix),yt==="instanceColor"&&_.instanceColor&&(Dt=_.instanceColor)),Dt!==void 0){let Ct=Dt.normalized,Ut=Dt.itemSize,fe=t.get(Dt);if(fe===void 0)continue;let me=fe.buffer,st=fe.type,mt=fe.bytesPerElement,zt=st===i.INT||st===i.UNSIGNED_INT||Dt.gpuType===Nc;if(Dt.isInterleavedBufferAttribute){let Pt=Dt.data,jt=Pt.stride,Qt=Dt.offset;if(Pt.isInstancedInterleavedBuffer){for(let re=0;re<et.locationSize;re++)m(et.location+re,Pt.meshPerAttribute);_.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let re=0;re<et.locationSize;re++)p(et.location+re);i.bindBuffer(i.ARRAY_BUFFER,me);for(let re=0;re<et.locationSize;re++)S(et.location+re,Ut/et.locationSize,st,Ct,jt*mt,(Qt+Ut/et.locationSize*re)*mt,zt)}else{if(Dt.isInstancedBufferAttribute){for(let Pt=0;Pt<et.locationSize;Pt++)m(et.location+Pt,Dt.meshPerAttribute);_.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Pt=0;Pt<et.locationSize;Pt++)p(et.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Pt=0;Pt<et.locationSize;Pt++)S(et.location+Pt,Ut/et.locationSize,st,Ct,Ut*mt,Ut/et.locationSize*Pt*mt,zt)}}else if(Z!==void 0){let Ct=Z[yt];if(Ct!==void 0)switch(Ct.length){case 2:i.vertexAttrib2fv(et.location,Ct);break;case 3:i.vertexAttrib3fv(et.location,Ct);break;case 4:i.vertexAttrib4fv(et.location,Ct);break;default:i.vertexAttrib1fv(et.location,Ct)}}}}A()}function k(){P();for(let _ in n){let w=n[_];for(let Q in w){let $=w[Q];for(let j in $)h($[j].object),delete $[j];delete w[Q]}delete n[_]}}function L(_){if(n[_.id]===void 0)return;let w=n[_.id];for(let Q in w){let $=w[Q];for(let j in $)h($[j].object),delete $[j];delete w[Q]}delete n[_.id]}function D(_){for(let w in n){let Q=n[w];if(Q[_.id]===void 0)continue;let $=Q[_.id];for(let j in $)h($[j].object),delete $[j];delete Q[_.id]}}function P(){ft(),a=!0,r!==s&&(r=s,l(r.object))}function ft(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:ft,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:p,disableUnusedAttributes:A}}function kp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];for(let y=0;y<f.length;y++)e.update(g,n,f[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Gp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Sn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let P=D===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Hn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Fn&&!P)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let D=t.get("EXT_clip_control");D.clipControlEXT(D.LOWER_LEFT_EXT,D.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:k,maxSamples:L}}function Vp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vn,o=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let A=r?0:n,S=A*4,T=m.clippingState||null;c.value=T,T=h(g,f,S,d);for(let k=0;k!==S;++k)T[k]=e[k];m.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=d+y*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,T=d;S!==y;++S,T+=4)a.copy(u[S]).applyMatrix4(A,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function Wp(i){let t=new WeakMap;function e(a,o){return o===po?a.mapping=is:o===mo&&(a.mapping=ss),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===po||o===mo)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ko(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wr=class extends Gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$i=4,Tl=[.125,.215,.35,.446,.526,.582],Si=20,qa=new Wr,Al=new ce,Ya=null,Za=0,Ja=0,$a=!1,vi=(1+Math.sqrt(5))/2,Xi=1/vi,Rl=[new U(-vi,Xi,0),new U(vi,Xi,0),new U(-Xi,0,vi),new U(Xi,0,vi),new U(0,vi,-Xi),new U(0,vi,Xi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],ls=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ya=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,Za,Ja),this._renderer.xr.enabled=$a,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:qs,format:Sn,colorSpace:ui,depthBuffer:!1},s=Cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xp(r)),this._blurMaterial=qp(r,t,e)}return s}_compileMaterial(t){let e=new Mt(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,n,s){let o=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Al),h.toneMapping=ii,h.autoClear=!1;let d=new Xe({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new Mt(new Te,d),y=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,y=!0):(d.color.copy(Al),y=!0);for(let m=0;m<6;m++){let A=m%3;A===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):A===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let S=this._cubeSize;mr(s,A*S,m>2?S:0,S,S),h.setRenderTarget(s),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Mt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;mr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,qa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rl[(s-r-1)%Rl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Mt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Si-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):Si;p>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);let m=[],A=0;for(let D=0;D<Si;++D){let P=D/y,ft=Math.exp(-P*P/2);m.push(ft),D===0?A+=ft:D<p&&(A+=2*ft)}for(let D=0;D<m.length;D++)m[D]=m[D]/A;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let T=this._sizeLods[s],k=3*T*(s>S-$i?s-S+$i:0),L=4*(this._cubeSize-T);mr(e,k,L,3*T,2*T),c.setRenderTarget(e),c.render(u,qa)}};function Xp(i){let t=[],e=[],n=[],s=i,r=i-$i+1+Tl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-$i?c=Tl[a-i+$i-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,p=2,m=1,A=new Float32Array(y*g*d),S=new Float32Array(p*g*d),T=new Float32Array(m*g*d);for(let L=0;L<d;L++){let D=L%3*2/3-1,P=L>2?0:-1,ft=[D,P,0,D+2/3,P,0,D+2/3,P+1,0,D,P,0,D+2/3,P+1,0,D,P+1,0];A.set(ft,y*g*L),S.set(f,p*g*L);let _=[L,L,L,L,L,L];T.set(_,m*g*L)}let k=new Oe;k.setAttribute("position",new He(A,y)),k.setAttribute("uv",new He(S,p)),k.setAttribute("faceIndex",new He(T,m)),t.push(k),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cl(i,t,e){let n=new kn(i,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qp(i,t,e){let n=new Float32Array(Si),s=new U(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Pl(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Il(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function Yp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===po||c===mo,h=c===is||c===ss;if(l||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ls(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new ls(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Zp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jp(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let y=d[g];for(let p=0,m=y.length;p<m;p++)t.update(y[p],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let A=d.array;y=d.version;for(let S=0,T=A.length;S<T;S+=3){let k=A[S+0],L=A[S+1],D=A[S+2];f.push(k,L,L,D,D,k)}}else if(g!==void 0){let A=g.array;y=g.version;for(let S=0,T=A.length/3-1;S<T;S+=3){let k=S+0,L=S+1,D=S+2;f.push(k,L,L,D,D,k)}}else return;let p=new(Eh(f)?kr:Hr)(f,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function $p(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function u(f,d,g,y){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/a,d[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,y,0,g);let m=0;for(let A=0;A<g;A++)m+=d[A];for(let A=0;A<y.length;A++)e.update(m,n,y[A])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qp(i,t,e){let n=new WeakMap,s=new we;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let ft=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",ft)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let T=o.attributes.position.count*S,k=1;T>t.maxTextureSize&&(k=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let L=new Float32Array(T*k*4*u),D=new zr(L,T,k,u);D.type=Fn,D.needsUpdate=!0;let P=S*4;for(let _=0;_<u;_++){let w=p[_],Q=m[_],$=A[_],j=T*k*4*_;for(let ct=0;ct<w.count;ct++){let Z=ct*P;d===!0&&(s.fromBufferAttribute(w,ct),L[j+Z+0]=s.x,L[j+Z+1]=s.y,L[j+Z+2]=s.z,L[j+Z+3]=0),g===!0&&(s.fromBufferAttribute(Q,ct),L[j+Z+4]=s.x,L[j+Z+5]=s.y,L[j+Z+6]=s.z,L[j+Z+7]=0),y===!0&&(s.fromBufferAttribute($,ct),L[j+Z+8]=s.x,L[j+Z+9]=s.y,L[j+Z+10]=s.z,L[j+Z+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new _t(T,k)},n.set(o,f),o.addEventListener("dispose",ft)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function jp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Xr=class extends ln{constructor(t,e,n,s,r,a,o,c,l,h=ji){if(h!==ji&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=wi),n===void 0&&h===as&&(n=rs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ah=new ln,Ll=new Xr(1,1),Rh=new zr,Ch=new Jo,Ph=new Vr,Dl=[],Ul=[],Nl=new Float32Array(16),Fl=new Float32Array(9),Ol=new Float32Array(4);function ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Dl[s];if(r===void 0&&(r=new Float32Array(s),Dl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ca(i,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function sm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;Ol.set(n),i.uniformMatrix2fv(this.addr,!1,Ol),Ge(e,n)}}function rm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;Fl.set(n),i.uniformMatrix3fv(this.addr,!1,Fl),Ge(e,n)}}function am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;Nl.set(n),i.uniformMatrix4fv(this.addr,!1,Nl),Ge(e,n)}}function om(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function um(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ll.compareFunction=Sh,r=Ll):r=Ah,e.setTexture2D(t||r,s)}function gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ch,s)}function _m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ph,s)}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rh,s)}function ym(i){switch(i){case 5126:return tm;case 35664:return em;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return rm;case 35676:return am;case 5124:case 35670:return om;case 35667:case 35671:return cm;case 35668:case 35672:return lm;case 35669:case 35673:return hm;case 5125:return um;case 36294:return fm;case 36295:return dm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return xm}}function vm(i,t){i.uniform1fv(this.addr,t)}function Mm(i,t){let e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function Sm(i,t){let e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Em(i,t){let e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function bm(i,t){let e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wm(i,t){let e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tm(i,t){let e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Am(i,t){i.uniform1iv(this.addr,t)}function Rm(i,t){i.uniform2iv(this.addr,t)}function Cm(i,t){i.uniform3iv(this.addr,t)}function Pm(i,t){i.uniform4iv(this.addr,t)}function Im(i,t){i.uniform1uiv(this.addr,t)}function Lm(i,t){i.uniform2uiv(this.addr,t)}function Dm(i,t){i.uniform3uiv(this.addr,t)}function Um(i,t){i.uniform4uiv(this.addr,t)}function Nm(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ah,r[a])}function Fm(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ch,r[a])}function Om(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ph,r[a])}function Bm(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Rh,r[a])}function zm(i){switch(i){case 5126:return vm;case 35664:return Mm;case 35665:return Sm;case 35666:return Em;case 35674:return bm;case 35675:return wm;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Pm;case 5125:return Im;case 36294:return Lm;case 36295:return Dm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}var Qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ym(e.type)}},jo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zm(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ka=/(\w+)(\])?(\[|\.)?/g;function Bl(i,t){i.seq.push(t),i.map[t.id]=t}function Hm(i,t,e){let n=i.name,s=n.length;for(Ka.lastIndex=0;;){let r=Ka.exec(n),a=Ka.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Bl(e,l===void 0?new Qo(o,i,t):new jo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new tc(o),Bl(e,u)),e=u}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Hm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function zl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var km=37297,Gm=0;function Vm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Wm(i){let t=ye.getPrimaries(ye.workingColorSpace),e=ye.getPrimaries(i),n;switch(t===e?n="":t===Nr&&e===Ur?n="LinearDisplayP3ToLinearSRGB":t===Ur&&e===Nr&&(n="LinearSRGBToLinearDisplayP3"),i){case ui:case oa:return[n,"LinearTransferOETF"];case Ie:case kc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vm(i.getShaderSource(t),a)}else return s}function Xm(i,t){let e=Wm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qm(i,t){let e;switch(t){case gu:e="Linear";break;case _u:e="Reinhard";break;case xu:e="Cineon";break;case yu:e="ACESFilmic";break;case Mu:e="AgX";break;case Uc:e="Neutral";break;case vu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gr=new U;function Ym(){ye.getLuminanceCoefficients(gr);let i=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function Jm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Cs(i){return i!==""}function kl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(Km,jm)}var Qm=new Map;function jm(i,t){let e=he[t];if(e===void 0){let n=Qm.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ec(e)}var t0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(i){return i.replace(t0,e0)}function e0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function n0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function i0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ss&&(t="ENVMAP_MODE_REFRACTION"),t}function r0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lh:t="ENVMAP_BLENDING_MULTIPLY";break;case pu:t="ENVMAP_BLENDING_MIX";break;case mu:t="ENVMAP_BLENDING_ADD";break}return t}function a0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function o0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=n0(e),l=i0(e),h=s0(e),u=r0(e),f=a0(e),d=Zm(e),g=Jm(r),y=s.createProgram(),p,m,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`)):(p=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),m=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?he.tonemapping_pars_fragment:"",e.toneMapping!==ii?qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Xm("linearToOutputTexel",e.outputColorSpace),Ym(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),a=ec(a),a=kl(a,e),a=Gl(a,e),o=ec(o),o=kl(o,e),o=Gl(o,e),a=Vl(a),o=Vl(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=A+p+a,T=A+m+o,k=zl(s,s.VERTEX_SHADER,S),L=zl(s,s.FRAGMENT_SHADER,T);s.attachShader(y,k),s.attachShader(y,L),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function D(w){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(y).trim(),$=s.getShaderInfoLog(k).trim(),j=s.getShaderInfoLog(L).trim(),ct=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,k,L);else{let yt=Hl(s,k,"vertex"),et=Hl(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+Q+`
`+yt+`
`+et)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||j==="")&&(Z=!1);Z&&(w.diagnostics={runnable:ct,programLog:Q,vertexShader:{log:$,prefix:p},fragmentShader:{log:j,prefix:m}})}s.deleteShader(k),s.deleteShader(L),P=new es(s,y),ft=$m(s,y)}let P;this.getUniforms=function(){return P===void 0&&D(this),P};let ft;this.getAttributes=function(){return ft===void 0&&D(this),ft};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,km)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gm++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=k,this.fragmentShader=L,this}var c0=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ic(t),e.set(t,n)),n}},ic=class{constructor(t){this.id=c0++,this.code=t,this.usedTimes=0}};function l0(i,t,e,n,s,r,a){let o=new Ns,c=new nc,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,w,Q,$,j){let ct=$.fog,Z=j.geometry,yt=_.isMeshStandardMaterial?$.environment:null,et=(_.isMeshStandardMaterial?e:t).get(_.envMap||yt),Dt=et&&et.mapping===aa?et.image.height:null,Ct=y[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let Ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=Ut!==void 0?Ut.length:0,me=0;Z.morphAttributes.position!==void 0&&(me=1),Z.morphAttributes.normal!==void 0&&(me=2),Z.morphAttributes.color!==void 0&&(me=3);let st,mt,zt,Pt;if(Ct){let nt=wn[Ct];st=nt.vertexShader,mt=nt.fragmentShader}else st=_.vertexShader,mt=_.fragmentShader,c.update(_),zt=c.getVertexShaderID(_),Pt=c.getFragmentShaderID(_);let jt=i.getRenderTarget(),Qt=j.isInstancedMesh===!0,re=j.isBatchedMesh===!0,oe=!!_.map,ht=!!_.matcap,I=!!et,Et=!!_.aoMap,W=!!_.lightMap,gt=!!_.bumpMap,wt=!!_.normalMap,Xt=!!_.displacementMap,Nt=!!_.emissiveMap,R=!!_.metalnessMap,x=!!_.roughnessMap,V=_.anisotropy>0,X=_.clearcoat>0,ut=_.dispersion>0,it=_.iridescence>0,kt=_.sheen>0,Tt=_.transmission>0,bt=V&&!!_.anisotropyMap,pe=X&&!!_.clearcoatMap,dt=X&&!!_.clearcoatNormalMap,Ft=X&&!!_.clearcoatRoughnessMap,te=it&&!!_.iridescenceMap,ee=it&&!!_.iridescenceThicknessMap,Ht=kt&&!!_.sheenColorMap,le=kt&&!!_.sheenRoughnessMap,ne=!!_.specularMap,ge=!!_.specularColorMap,B=!!_.specularIntensityMap,Ot=Tt&&!!_.transmissionMap,M=Tt&&!!_.thicknessMap,b=!!_.gradientMap,C=!!_.alphaMap,N=_.alphaTest>0,F=!!_.alphaHash,z=!!_.extensions,J=ii;_.toneMapped&&(jt===null||jt.isXRRenderTarget===!0)&&(J=i.toneMapping);let K={shaderID:Ct,shaderType:_.type,shaderName:_.name,vertexShader:st,fragmentShader:mt,defines:_.defines,customVertexShaderID:zt,customFragmentShaderID:Pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:re,batchingColor:re&&j._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&j.instanceColor!==null,instancingMorph:Qt&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:jt===null?i.outputColorSpace:jt.isXRRenderTarget===!0?jt.texture.colorSpace:ui,alphaToCoverage:!!_.alphaToCoverage,map:oe,matcap:ht,envMap:I,envMapMode:I&&et.mapping,envMapCubeUVHeight:Dt,aoMap:Et,lightMap:W,bumpMap:gt,normalMap:wt,displacementMap:d&&Xt,emissiveMap:Nt,normalMapObjectSpace:wt&&_.normalMapType===wu,normalMapTangentSpace:wt&&_.normalMapType===Mh,metalnessMap:R,roughnessMap:x,anisotropy:V,anisotropyMap:bt,clearcoat:X,clearcoatMap:pe,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ft,dispersion:ut,iridescence:it,iridescenceMap:te,iridescenceThicknessMap:ee,sheen:kt,sheenColorMap:Ht,sheenRoughnessMap:le,specularMap:ne,specularColorMap:ge,specularIntensityMap:B,transmission:Tt,transmissionMap:Ot,thicknessMap:M,gradientMap:b,opaque:_.transparent===!1&&_.blending===Qi&&_.alphaToCoverage===!1,alphaMap:C,alphaTest:N,alphaHash:F,combine:_.combine,mapUv:oe&&p(_.map.channel),aoMapUv:Et&&p(_.aoMap.channel),lightMapUv:W&&p(_.lightMap.channel),bumpMapUv:gt&&p(_.bumpMap.channel),normalMapUv:wt&&p(_.normalMap.channel),displacementMapUv:Xt&&p(_.displacementMap.channel),emissiveMapUv:Nt&&p(_.emissiveMap.channel),metalnessMapUv:R&&p(_.metalnessMap.channel),roughnessMapUv:x&&p(_.roughnessMap.channel),anisotropyMapUv:bt&&p(_.anisotropyMap.channel),clearcoatMapUv:pe&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:le&&p(_.sheenRoughnessMap.channel),specularMapUv:ne&&p(_.specularMap.channel),specularColorMapUv:ge&&p(_.specularColorMap.channel),specularIntensityMapUv:B&&p(_.specularIntensityMap.channel),transmissionMapUv:Ot&&p(_.transmissionMap.channel),thicknessMapUv:M&&p(_.thicknessMap.channel),alphaMapUv:C&&p(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(wt||V),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Z.attributes.uv&&(oe||C),fog:!!ct,useFog:_.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:me,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:J,decodeVideoTexture:oe&&_.map.isVideoTexture===!0&&ye.getTransfer(_.map.colorSpace)===Ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nn,flipSided:_.side===Ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:z&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(z&&_.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return K.vertexUv1s=l.has(1),K.vertexUv2s=l.has(2),K.vertexUv3s=l.has(3),l.clear(),K}function A(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let Q in _.defines)w.push(Q),w.push(_.defines[Q]);return _.isRawShaderMaterial===!1&&(S(w,_),T(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function S(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function T(_,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),_.push(o.mask)}function k(_){let w=y[_.type],Q;if(w){let $=wn[w];Q=Qu.clone($.uniforms)}else Q=_.uniforms;return Q}function L(_,w){let Q;for(let $=0,j=h.length;$<j;$++){let ct=h[$];if(ct.cacheKey===w){Q=ct,++Q.usedTimes;break}}return Q===void 0&&(Q=new o0(i,w,_,r),h.push(Q)),Q}function D(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function P(_){c.remove(_)}function ft(){c.dispose()}return{getParameters:m,getProgramCacheKey:A,getUniforms:k,acquireProgram:L,releaseProgram:D,releaseShaderCache:P,programs:h,dispose:ft}}function h0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ql(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,y,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=p),t++,m}function o(u,f,d,g,y,p){let m=a(u,f,d,g,y,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(u,f,d,g,y,p){let m=a(u,f,d,g,y,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||u0),n.length>1&&n.sort(f||Xl),s.length>1&&s.sort(f||Xl)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function f0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ql,i.set(n,[a])):s>=r.length?(a=new ql,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new ce};break;case"SpotLight":e={position:new U,direction:new U,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function p0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var m0=0;function g0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _0(i){let t=new d0,e=p0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new Se,a=new Se;function o(l){let h=0,u=0,f=0;for(let ft=0;ft<9;ft++)n.probe[ft].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,A=0,S=0,T=0,k=0,L=0,D=0;l.sort(g0);for(let ft=0,_=l.length;ft<_;ft++){let w=l[ft],Q=w.color,$=w.intensity,j=w.distance,ct=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=Q.r*$,u+=Q.g*$,f+=Q.b*$;else if(w.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(w.sh.coefficients[Z],$);D++}else if(w.isDirectionalLight){let Z=t.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let yt=w.shadow,et=e.get(w);et.shadowIntensity=yt.intensity,et.shadowBias=yt.bias,et.shadowNormalBias=yt.normalBias,et.shadowRadius=yt.radius,et.shadowMapSize=yt.mapSize,n.directionalShadow[d]=et,n.directionalShadowMap[d]=ct,n.directionalShadowMatrix[d]=w.shadow.matrix,A++}n.directional[d]=Z,d++}else if(w.isSpotLight){let Z=t.get(w);Z.position.setFromMatrixPosition(w.matrixWorld),Z.color.copy(Q).multiplyScalar($),Z.distance=j,Z.coneCos=Math.cos(w.angle),Z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Z.decay=w.decay,n.spot[y]=Z;let yt=w.shadow;if(w.map&&(n.spotLightMap[k]=w.map,k++,yt.updateMatrices(w),w.castShadow&&L++),n.spotLightMatrix[y]=yt.matrix,w.castShadow){let et=e.get(w);et.shadowIntensity=yt.intensity,et.shadowBias=yt.bias,et.shadowNormalBias=yt.normalBias,et.shadowRadius=yt.radius,et.shadowMapSize=yt.mapSize,n.spotShadow[y]=et,n.spotShadowMap[y]=ct,T++}y++}else if(w.isRectAreaLight){let Z=t.get(w);Z.color.copy(Q).multiplyScalar($),Z.halfWidth.set(w.width*.5,0,0),Z.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=Z,p++}else if(w.isPointLight){let Z=t.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),Z.distance=w.distance,Z.decay=w.decay,w.castShadow){let yt=w.shadow,et=e.get(w);et.shadowIntensity=yt.intensity,et.shadowBias=yt.bias,et.shadowNormalBias=yt.normalBias,et.shadowRadius=yt.radius,et.shadowMapSize=yt.mapSize,et.shadowCameraNear=yt.camera.near,et.shadowCameraFar=yt.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=ct,n.pointShadowMatrix[g]=w.shadow.matrix,S++}n.point[g]=Z,g++}else if(w.isHemisphereLight){let Z=t.get(w);Z.skyColor.copy(w.color).multiplyScalar($),Z.groundColor.copy(w.groundColor).multiplyScalar($),n.hemi[m]=Z,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==A||P.numPointShadows!==S||P.numSpotShadows!==T||P.numSpotMaps!==k||P.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=T+k-L,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=D,P.directionalLength=d,P.pointLength=g,P.spotLength=y,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=A,P.numPointShadows=S,P.numSpotShadows=T,P.numSpotMaps=k,P.numLightProbes=D,n.version=m0++)}function c(l,h){let u=0,f=0,d=0,g=0,y=0,p=h.matrixWorldInverse;for(let m=0,A=l.length;m<A;m++){let S=l[m];if(S.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(S.isSpotLight){let T=n.spot[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(S.isRectAreaLight){let T=n.rectArea[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let T=n.hemi[y];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),y++}}}return{setup:o,setupView:c,state:n}}function Yl(i){let t=new _0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function x0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Yl(i),t.set(s,[o])):r>=a.length?(o=new Yl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var sc=class extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rc=class extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
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
}`;function M0(i,t,e){let n=new Fs,s=new _t,r=new _t,a=new we,o=new sc({depthPacking:bu}),c=new rc,l={},h=e.maxTextureSize,u={[ri]:Ke,[Ke]:ri,[Nn]:Nn},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:y0,fragmentShader:v0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Mt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let m=this.type;this.render=function(L,D,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;let ft=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(ni),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let $=m!==Un&&this.type===Un,j=m===Un&&this.type!==Un;for(let ct=0,Z=L.length;ct<Z;ct++){let yt=L[ct],et=yt.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",yt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);let Dt=et.getFrameExtents();if(s.multiply(Dt),r.copy(et.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Dt.x),s.x=r.x*Dt.x,et.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Dt.y),s.y=r.y*Dt.y,et.mapSize.y=r.y)),et.map===null||$===!0||j===!0){let Ut=this.type!==Un?{minFilter:fn,magFilter:fn}:{};et.map!==null&&et.map.dispose(),et.map=new kn(s.x,s.y,Ut),et.map.texture.name=yt.name+".shadowMap",et.camera.updateProjectionMatrix()}i.setRenderTarget(et.map),i.clear();let Ct=et.getViewportCount();for(let Ut=0;Ut<Ct;Ut++){let fe=et.getViewport(Ut);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),Q.viewport(a),et.updateMatrices(yt,Ut),n=et.getFrustum(),T(D,P,et.camera,yt,this.type)}et.isPointLightShadow!==!0&&this.type===Un&&A(et,P),et.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(ft,_,w)};function A(L,D){let P=t.update(y);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new kn(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(D,null,P,f,y,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(D,null,P,d,y,null)}function S(L,D,P,ft){let _=null,w=P.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let Q=_.uuid,$=D.uuid,j=l[Q];j===void 0&&(j={},l[Q]=j);let ct=j[$];ct===void 0&&(ct=_.clone(),j[$]=ct,D.addEventListener("dispose",k)),_=ct}if(_.visible=D.visible,_.wireframe=D.wireframe,ft===Un?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:u[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let Q=i.properties.get(_);Q.light=P}return _}function T(L,D,P,ft,_){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&_===Un)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,L.matrixWorld);let $=t.update(L),j=L.material;if(Array.isArray(j)){let ct=$.groups;for(let Z=0,yt=ct.length;Z<yt;Z++){let et=ct[Z],Dt=j[et.materialIndex];if(Dt&&Dt.visible){let Ct=S(L,Dt,ft,_);L.onBeforeShadow(i,L,D,P,$,Ct,et),i.renderBufferDirect(P,null,$,Ct,L,et),L.onAfterShadow(i,L,D,P,$,Ct,et)}}}else if(j.visible){let ct=S(L,j,ft,_);L.onBeforeShadow(i,L,D,P,$,ct,null),i.renderBufferDirect(P,null,$,ct,L,null),L.onAfterShadow(i,L,D,P,$,ct,null)}}let Q=L.children;for(let $=0,j=Q.length;$<j;$++)T(Q[$],D,P,ft,_)}function k(L){L.target.removeEventListener("dispose",k);for(let P in l){let ft=l[P],_=L.target.uuid;_ in ft&&(ft[_].dispose(),delete ft[_])}}}var S0={[ao]:oo,[co]:uo,[lo]:fo,[ns]:ho,[oo]:ao,[uo]:co,[fo]:lo,[ho]:ns};function E0(i){function t(){let B=!1,Ot=new we,M=null,b=new we(0,0,0,0);return{setMask:function(C){M!==C&&!B&&(i.colorMask(C,C,C,C),M=C)},setLocked:function(C){B=C},setClear:function(C,N,F,z,J){J===!0&&(C*=z,N*=z,F*=z),Ot.set(C,N,F,z),b.equals(Ot)===!1&&(i.clearColor(C,N,F,z),b.copy(Ot))},reset:function(){B=!1,M=null,b.set(-1,0,0,0)}}}function e(){let B=!1,Ot=!1,M=null,b=null,C=null;return{setReversed:function(N){Ot=N},setTest:function(N){N?zt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(N){M!==N&&!B&&(i.depthMask(N),M=N)},setFunc:function(N){if(Ot&&(N=S0[N]),b!==N){switch(N){case ao:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case lo:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case uo:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}b=N}},setLocked:function(N){B=N},setClear:function(N){C!==N&&(i.clearDepth(N),C=N)},reset:function(){B=!1,M=null,b=null,C=null}}}function n(){let B=!1,Ot=null,M=null,b=null,C=null,N=null,F=null,z=null,J=null;return{setTest:function(K){B||(K?zt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(K){Ot!==K&&!B&&(i.stencilMask(K),Ot=K)},setFunc:function(K,nt,at){(M!==K||b!==nt||C!==at)&&(i.stencilFunc(K,nt,at),M=K,b=nt,C=at)},setOp:function(K,nt,at){(N!==K||F!==nt||z!==at)&&(i.stencilOp(K,nt,at),N=K,F=nt,z=at)},setLocked:function(K){B=K},setClear:function(K){J!==K&&(i.clearStencil(K),J=K)},reset:function(){B=!1,Ot=null,M=null,b=null,C=null,N=null,F=null,z=null,J=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,f=[],d=null,g=!1,y=null,p=null,m=null,A=null,S=null,T=null,k=null,L=new ce(0,0,0),D=0,P=!1,ft=null,_=null,w=null,Q=null,$=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ct=!1,Z=0,yt=i.getParameter(i.VERSION);yt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(yt)[1]),ct=Z>=1):yt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(yt)[1]),ct=Z>=2);let et=null,Dt={},Ct=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),fe=new we().fromArray(Ct),me=new we().fromArray(Ut);function st(B,Ot,M,b){let C=new Uint8Array(4),N=i.createTexture();i.bindTexture(B,N),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let F=0;F<M;F++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Ot,0,i.RGBA,1,1,b,0,i.RGBA,i.UNSIGNED_BYTE,C):i.texImage2D(Ot+F,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,C);return N}let mt={};mt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),zt(i.DEPTH_TEST),r.setFunc(ns),W(!1),gt(el),zt(i.CULL_FACE),I(ni);function zt(B){l[B]!==!0&&(i.enable(B),l[B]=!0)}function Pt(B){l[B]!==!1&&(i.disable(B),l[B]=!1)}function jt(B,Ot){return h[B]!==Ot?(i.bindFramebuffer(B,Ot),h[B]=Ot,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ot),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Qt(B,Ot){let M=f,b=!1;if(B){M=u.get(Ot),M===void 0&&(M=[],u.set(Ot,M));let C=B.textures;if(M.length!==C.length||M[0]!==i.COLOR_ATTACHMENT0){for(let N=0,F=C.length;N<F;N++)M[N]=i.COLOR_ATTACHMENT0+N;M.length=C.length,b=!0}}else M[0]!==i.BACK&&(M[0]=i.BACK,b=!0);b&&i.drawBuffers(M)}function re(B){return d!==B?(i.useProgram(B),d=B,!0):!1}let oe={[Mi]:i.FUNC_ADD,[Kh]:i.FUNC_SUBTRACT,[Qh]:i.FUNC_REVERSE_SUBTRACT};oe[jh]=i.MIN,oe[tu]=i.MAX;let ht={[eu]:i.ZERO,[nu]:i.ONE,[iu]:i.SRC_COLOR,[so]:i.SRC_ALPHA,[lu]:i.SRC_ALPHA_SATURATE,[ou]:i.DST_COLOR,[ru]:i.DST_ALPHA,[su]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[cu]:i.ONE_MINUS_DST_COLOR,[au]:i.ONE_MINUS_DST_ALPHA,[hu]:i.CONSTANT_COLOR,[uu]:i.ONE_MINUS_CONSTANT_COLOR,[fu]:i.CONSTANT_ALPHA,[du]:i.ONE_MINUS_CONSTANT_ALPHA};function I(B,Ot,M,b,C,N,F,z,J,K){if(B===ni){g===!0&&(Pt(i.BLEND),g=!1);return}if(g===!1&&(zt(i.BLEND),g=!0),B!==$h){if(B!==y||K!==P){if((p!==Mi||S!==Mi)&&(i.blendEquation(i.FUNC_ADD),p=Mi,S=Mi),K)switch(B){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.ONE,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,A=null,T=null,k=null,L.set(0,0,0),D=0,y=B,P=K}return}C=C||Ot,N=N||M,F=F||b,(Ot!==p||C!==S)&&(i.blendEquationSeparate(oe[Ot],oe[C]),p=Ot,S=C),(M!==m||b!==A||N!==T||F!==k)&&(i.blendFuncSeparate(ht[M],ht[b],ht[N],ht[F]),m=M,A=b,T=N,k=F),(z.equals(L)===!1||J!==D)&&(i.blendColor(z.r,z.g,z.b,J),L.copy(z),D=J),y=B,P=!1}function Et(B,Ot){B.side===Nn?Pt(i.CULL_FACE):zt(i.CULL_FACE);let M=B.side===Ke;Ot&&(M=!M),W(M),B.blending===Qi&&B.transparent===!1?I(ni):I(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);let b=B.stencilWrite;a.setTest(b),b&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Xt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?zt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function W(B){ft!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),ft=B)}function gt(B){B!==Zh?(zt(i.CULL_FACE),B!==_&&(B===el?i.cullFace(i.BACK):B===Jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),_=B}function wt(B){B!==w&&(ct&&i.lineWidth(B),w=B)}function Xt(B,Ot,M){B?(zt(i.POLYGON_OFFSET_FILL),(Q!==Ot||$!==M)&&(i.polygonOffset(Ot,M),Q=Ot,$=M)):Pt(i.POLYGON_OFFSET_FILL)}function Nt(B){B?zt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function R(B){B===void 0&&(B=i.TEXTURE0+j-1),et!==B&&(i.activeTexture(B),et=B)}function x(B,Ot,M){M===void 0&&(et===null?M=i.TEXTURE0+j-1:M=et);let b=Dt[M];b===void 0&&(b={type:void 0,texture:void 0},Dt[M]=b),(b.type!==B||b.texture!==Ot)&&(et!==M&&(i.activeTexture(M),et=M),i.bindTexture(B,Ot||mt[B]),b.type=B,b.texture=Ot)}function V(){let B=Dt[et];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(B){fe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),fe.copy(B))}function Ht(B){me.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),me.copy(B))}function le(B,Ot){let M=c.get(Ot);M===void 0&&(M=new WeakMap,c.set(Ot,M));let b=M.get(B);b===void 0&&(b=i.getUniformBlockIndex(Ot,B.name),M.set(B,b))}function ne(B,Ot){let b=c.get(Ot).get(B);o.get(Ot)!==b&&(i.uniformBlockBinding(Ot,b,B.__bindingPointIndex),o.set(Ot,b))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},et=null,Dt={},h={},u=new WeakMap,f=[],d=null,g=!1,y=null,p=null,m=null,A=null,S=null,T=null,k=null,L=new ce(0,0,0),D=0,P=!1,ft=null,_=null,w=null,Q=null,$=null,fe.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:zt,disable:Pt,bindFramebuffer:jt,drawBuffers:Qt,useProgram:re,setBlending:I,setMaterial:Et,setFlipSided:W,setCullFace:gt,setLineWidth:wt,setPolygonOffset:Xt,setScissorTest:Nt,activeTexture:R,bindTexture:x,unbindTexture:V,compressedTexImage2D:X,compressedTexImage3D:ut,texImage2D:Ft,texImage3D:te,updateUBOMapping:le,uniformBlockBinding:ne,texStorage2D:pe,texStorage3D:dt,texSubImage2D:it,texSubImage3D:kt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:bt,scissor:ee,viewport:Ht,reset:ge}}function Zl(i,t,e,n){let s=b0(n);switch(e){case ph:return i*t;case gh:return i*t;case _h:return i*t*2;case xh:return i*t/s.components*s.byteLength;case Bc:return i*t/s.components*s.byteLength;case yh:return i*t*2/s.components*s.byteLength;case zc:return i*t*2/s.components*s.byteLength;case mh:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case Hc:return i*t*4/s.components*s.byteLength;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:case Mo:return Math.max(i,16)*Math.max(t,8)/4;case xo:case vo:return Math.max(i,8)*Math.max(t,8)/2;case So:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pr:case zo:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vh:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Go:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b0(i){switch(i){case Hn:case uh:return{byteLength:1,components:1};case Ds:case fh:case qs:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case wi:case Nc:case Fn:return{byteLength:4,components:1};case dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function w0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return d?new OffscreenCanvas(R,x):Or("canvas")}function y(R,x,V){let X=1,ut=Nt(R);if((ut.width>V||ut.height>V)&&(X=V/Math.max(ut.width,ut.height)),X<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let it=Math.floor(X*ut.width),kt=Math.floor(X*ut.height);u===void 0&&(u=g(it,kt));let Tt=x?g(it,kt):u;return Tt.width=it,Tt.height=kt,Tt.getContext("2d").drawImage(R,0,0,it,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+it+"x"+kt+")."),Tt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==fn&&R.minFilter!==Mn}function m(R){i.generateMipmap(R)}function A(R,x,V,X,ut=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let it=x;if(x===i.RED&&(V===i.FLOAT&&(it=i.R32F),V===i.HALF_FLOAT&&(it=i.R16F),V===i.UNSIGNED_BYTE&&(it=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.R8UI),V===i.UNSIGNED_SHORT&&(it=i.R16UI),V===i.UNSIGNED_INT&&(it=i.R32UI),V===i.BYTE&&(it=i.R8I),V===i.SHORT&&(it=i.R16I),V===i.INT&&(it=i.R32I)),x===i.RG&&(V===i.FLOAT&&(it=i.RG32F),V===i.HALF_FLOAT&&(it=i.RG16F),V===i.UNSIGNED_BYTE&&(it=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RG8UI),V===i.UNSIGNED_SHORT&&(it=i.RG16UI),V===i.UNSIGNED_INT&&(it=i.RG32UI),V===i.BYTE&&(it=i.RG8I),V===i.SHORT&&(it=i.RG16I),V===i.INT&&(it=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RGB8UI),V===i.UNSIGNED_SHORT&&(it=i.RGB16UI),V===i.UNSIGNED_INT&&(it=i.RGB32UI),V===i.BYTE&&(it=i.RGB8I),V===i.SHORT&&(it=i.RGB16I),V===i.INT&&(it=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),V===i.UNSIGNED_INT&&(it=i.RGBA32UI),V===i.BYTE&&(it=i.RGBA8I),V===i.SHORT&&(it=i.RGBA16I),V===i.INT&&(it=i.RGBA32I)),x===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),x===i.RGBA){let kt=ut?Dr:ye.getTransfer(X);V===i.FLOAT&&(it=i.RGBA32F),V===i.HALF_FLOAT&&(it=i.RGBA16F),V===i.UNSIGNED_BYTE&&(it=kt===Ce?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(R,x){let V;return R?x===null||x===wi||x===rs?V=i.DEPTH24_STENCIL8:x===Fn?V=i.DEPTH32F_STENCIL8:x===Ds&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wi||x===rs?V=i.DEPTH_COMPONENT24:x===Fn?V=i.DEPTH_COMPONENT32F:x===Ds&&(V=i.DEPTH_COMPONENT16),V}function T(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==Mn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function k(R){let x=R.target;x.removeEventListener("dispose",k),D(x),x.isVideoTexture&&h.delete(x)}function L(R){let x=R.target;x.removeEventListener("dispose",L),ft(x)}function D(R){let x=n.get(R);if(x.__webglInit===void 0)return;let V=R.source,X=f.get(V);if(X){let ut=X[x.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&P(R),Object.keys(X).length===0&&f.delete(V)}n.remove(R)}function P(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let V=R.source,X=f.get(V);delete X[x.__cacheKey],a.memory.textures--}function ft(R){let x=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let ut=0;ut<x.__webglFramebuffer[X].length;ut++)i.deleteFramebuffer(x.__webglFramebuffer[X][ut]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=R.textures;for(let X=0,ut=V.length;X<ut;X++){let it=n.get(V[X]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(V[X])}n.remove(R)}let _=0;function w(){_=0}function Q(){let R=_;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),_+=1,R}function $(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function j(R,x){let V=n.get(R);if(R.isVideoTexture&&wt(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){let X=R.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,R,x);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function ct(R,x){let V=n.get(R);if(R.version>0&&V.__version!==R.version){me(V,R,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function Z(R,x){let V=n.get(R);if(R.version>0&&V.__version!==R.version){me(V,R,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function yt(R,x){let V=n.get(R);if(R.version>0&&V.__version!==R.version){st(V,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let et={[go]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},Dt={[fn]:i.NEAREST,[Su]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},Ct={[Tu]:i.NEVER,[Lu]:i.ALWAYS,[Au]:i.LESS,[Sh]:i.LEQUAL,[Ru]:i.EQUAL,[Iu]:i.GEQUAL,[Cu]:i.GREATER,[Pu]:i.NOTEQUAL};function Ut(R,x){if(x.type===Fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Mn||x.magFilter===Ma||x.magFilter===$s||x.magFilter===bi||x.minFilter===Mn||x.minFilter===Ma||x.minFilter===$s||x.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,et[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,et[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,et[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Dt[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Dt[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ct[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==$s&&x.minFilter!==bi||x.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function fe(R,x){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",k));let X=x.source,ut=f.get(X);ut===void 0&&(ut={},f.set(X,ut));let it=$(x);if(it!==R.__cacheKey){ut[it]===void 0&&(ut[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ut[it].usedTimes++;let kt=ut[R.__cacheKey];kt!==void 0&&(ut[R.__cacheKey].usedTimes--,kt.usedTimes===0&&P(x)),R.__cacheKey=it,R.__webglTexture=ut[it].texture}return V}function me(R,x,V){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let ut=fe(R,x),it=x.source;e.bindTexture(X,R.__webglTexture,i.TEXTURE0+V);let kt=n.get(it);if(it.version!==kt.__version||ut===!0){e.activeTexture(i.TEXTURE0+V);let Tt=ye.getPrimaries(ye.workingColorSpace),bt=x.colorSpace===ti?null:ye.getPrimaries(x.colorSpace),pe=x.colorSpace===ti||Tt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let dt=y(x.image,!1,s.maxTextureSize);dt=Xt(x,dt);let Ft=r.convert(x.format,x.colorSpace),te=r.convert(x.type),ee=A(x.internalFormat,Ft,te,x.colorSpace,x.isVideoTexture);Ut(X,x);let Ht,le=x.mipmaps,ne=x.isVideoTexture!==!0,ge=kt.__version===void 0||ut===!0,B=it.dataReady,Ot=T(x,dt);if(x.isDepthTexture)ee=S(x.format===as,x.type),ge&&(ne?e.texStorage2D(i.TEXTURE_2D,1,ee,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,ee,dt.width,dt.height,0,Ft,te,null));else if(x.isDataTexture)if(le.length>0){ne&&ge&&e.texStorage2D(i.TEXTURE_2D,Ot,ee,le[0].width,le[0].height);for(let M=0,b=le.length;M<b;M++)Ht=le[M],ne?B&&e.texSubImage2D(i.TEXTURE_2D,M,0,0,Ht.width,Ht.height,Ft,te,Ht.data):e.texImage2D(i.TEXTURE_2D,M,ee,Ht.width,Ht.height,0,Ft,te,Ht.data);x.generateMipmaps=!1}else ne?(ge&&e.texStorage2D(i.TEXTURE_2D,Ot,ee,dt.width,dt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Ft,te,dt.data)):e.texImage2D(i.TEXTURE_2D,0,ee,dt.width,dt.height,0,Ft,te,dt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ne&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,ee,le[0].width,le[0].height,dt.depth);for(let M=0,b=le.length;M<b;M++)if(Ht=le[M],x.format!==Sn)if(Ft!==null)if(ne){if(B)if(x.layerUpdates.size>0){let C=Zl(Ht.width,Ht.height,x.format,x.type);for(let N of x.layerUpdates){let F=Ht.data.subarray(N*C/Ht.data.BYTES_PER_ELEMENT,(N+1)*C/Ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,M,0,0,N,Ht.width,Ht.height,1,Ft,F,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,M,0,0,0,Ht.width,Ht.height,dt.depth,Ft,Ht.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,M,ee,Ht.width,Ht.height,dt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,M,0,0,0,Ht.width,Ht.height,dt.depth,Ft,te,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,M,ee,Ht.width,Ht.height,dt.depth,0,Ft,te,Ht.data)}else{ne&&ge&&e.texStorage2D(i.TEXTURE_2D,Ot,ee,le[0].width,le[0].height);for(let M=0,b=le.length;M<b;M++)Ht=le[M],x.format!==Sn?Ft!==null?ne?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,M,0,0,Ht.width,Ht.height,Ft,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,M,ee,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?B&&e.texSubImage2D(i.TEXTURE_2D,M,0,0,Ht.width,Ht.height,Ft,te,Ht.data):e.texImage2D(i.TEXTURE_2D,M,ee,Ht.width,Ht.height,0,Ft,te,Ht.data)}else if(x.isDataArrayTexture)if(ne){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,ee,dt.width,dt.height,dt.depth),B)if(x.layerUpdates.size>0){let M=Zl(dt.width,dt.height,x.format,x.type);for(let b of x.layerUpdates){let C=dt.data.subarray(b*M/dt.data.BYTES_PER_ELEMENT,(b+1)*M/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,b,dt.width,dt.height,1,Ft,te,C)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ft,te,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,dt.width,dt.height,dt.depth,0,Ft,te,dt.data);else if(x.isData3DTexture)ne?(ge&&e.texStorage3D(i.TEXTURE_3D,Ot,ee,dt.width,dt.height,dt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ft,te,dt.data)):e.texImage3D(i.TEXTURE_3D,0,ee,dt.width,dt.height,dt.depth,0,Ft,te,dt.data);else if(x.isFramebufferTexture){if(ge)if(ne)e.texStorage2D(i.TEXTURE_2D,Ot,ee,dt.width,dt.height);else{let M=dt.width,b=dt.height;for(let C=0;C<Ot;C++)e.texImage2D(i.TEXTURE_2D,C,ee,M,b,0,Ft,te,null),M>>=1,b>>=1}}else if(le.length>0){if(ne&&ge){let M=Nt(le[0]);e.texStorage2D(i.TEXTURE_2D,Ot,ee,M.width,M.height)}for(let M=0,b=le.length;M<b;M++)Ht=le[M],ne?B&&e.texSubImage2D(i.TEXTURE_2D,M,0,0,Ft,te,Ht):e.texImage2D(i.TEXTURE_2D,M,ee,Ft,te,Ht);x.generateMipmaps=!1}else if(ne){if(ge){let M=Nt(dt);e.texStorage2D(i.TEXTURE_2D,Ot,ee,M.width,M.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,te,dt)}else e.texImage2D(i.TEXTURE_2D,0,ee,Ft,te,dt);p(x)&&m(X),kt.__version=it.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function st(R,x,V){if(x.image.length!==6)return;let X=fe(R,x),ut=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let it=n.get(ut);if(ut.version!==it.__version||X===!0){e.activeTexture(i.TEXTURE0+V);let kt=ye.getPrimaries(ye.workingColorSpace),Tt=x.colorSpace===ti?null:ye.getPrimaries(x.colorSpace),bt=x.colorSpace===ti||kt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let pe=x.isCompressedTexture||x.image[0].isCompressedTexture,dt=x.image[0]&&x.image[0].isDataTexture,Ft=[];for(let b=0;b<6;b++)!pe&&!dt?Ft[b]=y(x.image[b],!0,s.maxCubemapSize):Ft[b]=dt?x.image[b].image:x.image[b],Ft[b]=Xt(x,Ft[b]);let te=Ft[0],ee=r.convert(x.format,x.colorSpace),Ht=r.convert(x.type),le=A(x.internalFormat,ee,Ht,x.colorSpace),ne=x.isVideoTexture!==!0,ge=it.__version===void 0||X===!0,B=ut.dataReady,Ot=T(x,te);Ut(i.TEXTURE_CUBE_MAP,x);let M;if(pe){ne&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,le,te.width,te.height);for(let b=0;b<6;b++){M=Ft[b].mipmaps;for(let C=0;C<M.length;C++){let N=M[C];x.format!==Sn?ee!==null?ne?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,C,0,0,N.width,N.height,ee,N.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,C,le,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,C,0,0,N.width,N.height,ee,Ht,N.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,C,le,N.width,N.height,0,ee,Ht,N.data)}}}else{if(M=x.mipmaps,ne&&ge){M.length>0&&Ot++;let b=Nt(Ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,le,b.width,b.height)}for(let b=0;b<6;b++)if(dt){ne?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,Ft[b].width,Ft[b].height,ee,Ht,Ft[b].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,le,Ft[b].width,Ft[b].height,0,ee,Ht,Ft[b].data);for(let C=0;C<M.length;C++){let F=M[C].image[b].image;ne?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,C+1,0,0,F.width,F.height,ee,Ht,F.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,C+1,le,F.width,F.height,0,ee,Ht,F.data)}}else{ne?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,ee,Ht,Ft[b]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,le,ee,Ht,Ft[b]);for(let C=0;C<M.length;C++){let N=M[C];ne?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,C+1,0,0,ee,Ht,N.image[b]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,C+1,le,ee,Ht,N.image[b])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),it.__version=ut.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function mt(R,x,V,X,ut,it){let kt=r.convert(V.format,V.colorSpace),Tt=r.convert(V.type),bt=A(V.internalFormat,kt,Tt,V.colorSpace);if(!n.get(x).__hasExternalTextures){let dt=Math.max(1,x.width>>it),Ft=Math.max(1,x.height>>it);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,it,bt,dt,Ft,x.depth,0,kt,Tt,null):e.texImage2D(ut,it,bt,dt,Ft,0,kt,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ut,n.get(V).__webglTexture,0,W(x)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ut,n.get(V).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(R,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let X=x.depthTexture,ut=X&&X.isDepthTexture?X.type:null,it=S(x.stencilBuffer,ut),kt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=W(x);gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,it,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,it,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,it,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,R)}else{let X=x.textures;for(let ut=0;ut<X.length;ut++){let it=X[ut],kt=r.convert(it.format,it.colorSpace),Tt=r.convert(it.type),bt=A(it.internalFormat,kt,Tt,it.colorSpace),pe=W(x);V&&gt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,bt,x.width,x.height):gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,bt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,bt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);let X=n.get(x.depthTexture).__webglTexture,ut=W(x);if(x.depthTexture.format===ji)gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(x.depthTexture.format===as)gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function jt(R){let x=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let X=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let ut=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",ut)};X.addEventListener("dispose",ut),x.__depthDisposeCallback=ut}x.__boundDepthTexture=X}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Pt(x.__webglFramebuffer,R)}else if(V){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),zt(x.__webglDepthbuffer[X],R,!1);else{let ut=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),zt(x.__webglDepthbuffer,R,!1);else{let X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(R,x,V){let X=n.get(R);x!==void 0&&mt(X.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&jt(R)}function re(R){let x=R.texture,V=n.get(R),X=n.get(x);R.addEventListener("dispose",L);let ut=R.textures,it=R.isWebGLCubeRenderTarget===!0,kt=ut.length>1;if(kt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),it){V.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[Tt]=[];for(let bt=0;bt<x.mipmaps.length;bt++)V.__webglFramebuffer[Tt][bt]=i.createFramebuffer()}else V.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let Tt=0;Tt<x.mipmaps.length;Tt++)V.__webglFramebuffer[Tt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(kt)for(let Tt=0,bt=ut.length;Tt<bt;Tt++){let pe=n.get(ut[Tt]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&gt(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Tt=0;Tt<ut.length;Tt++){let bt=ut[Tt];V.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Tt]);let pe=r.convert(bt.format,bt.colorSpace),dt=r.convert(bt.type),Ft=A(bt.internalFormat,pe,dt,bt.colorSpace,R.isXRRenderTarget===!0),te=W(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,V.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,x);for(let Tt=0;Tt<6;Tt++)if(x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)mt(V.__webglFramebuffer[Tt][bt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,bt);else mt(V.__webglFramebuffer[Tt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);p(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let Tt=0,bt=ut.length;Tt<bt;Tt++){let pe=ut[Tt],dt=n.get(pe);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Ut(i.TEXTURE_2D,pe),mt(V.__webglFramebuffer,R,pe,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),p(pe)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Tt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,X.__webglTexture),Ut(Tt,x),x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)mt(V.__webglFramebuffer[bt],R,x,i.COLOR_ATTACHMENT0,Tt,bt);else mt(V.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,Tt,0);p(x)&&m(Tt),e.unbindTexture()}R.depthBuffer&&jt(R)}function oe(R){let x=R.textures;for(let V=0,X=x.length;V<X;V++){let ut=x[V];if(p(ut)){let it=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,kt=n.get(ut).__webglTexture;e.bindTexture(it,kt),m(it),e.unbindTexture()}}}let ht=[],I=[];function Et(R){if(R.samples>0){if(gt(R)===!1){let x=R.textures,V=R.width,X=R.height,ut=i.COLOR_BUFFER_BIT,it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(R),Tt=x.length>1;if(Tt)for(let bt=0;bt<x.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[bt]);let pe=n.get(x[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,V,X,0,0,V,X,ut,i.NEAREST),c===!0&&(ht.length=0,I.length=0,ht.push(i.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ht.push(it),I.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let bt=0;bt<x.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,kt.__webglColorRenderbuffer[bt]);let pe=n.get(x[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,pe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function W(R){return Math.min(s.maxSamples,R.samples)}function gt(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Xt(R,x){let V=R.colorSpace,X=R.format,ut=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==ui&&V!==ti&&(ye.getTransfer(V)===Ce?(X!==Sn||ut!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Nt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=w,this.setTexture2D=j,this.setTexture2DArray=ct,this.setTexture3D=Z,this.setTextureCube=yt,this.rebindTextures=Qt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=gt}function T0(i,t){function e(n,s=ti){let r,a=ye.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uh)return i.BYTE;if(n===fh)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===Nc)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===qs)return i.HALF_FLOAT;if(n===ph)return i.ALPHA;if(n===mh)return i.RGB;if(n===Sn)return i.RGBA;if(n===gh)return i.LUMINANCE;if(n===_h)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===xh)return i.RED;if(n===Bc)return i.RED_INTEGER;if(n===yh)return i.RG;if(n===zc)return i.RG_INTEGER;if(n===Hc)return i.RGBA_INTEGER;if(n===Tr||n===Ar||n===Rr||n===Cr)if(a===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===yo||n===vo||n===Mo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===Eo||n===bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===So||n===Eo)return a===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pr||n===zo||n===Ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pr)return a===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vh||n===ko||n===Go||n===Vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ac=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ae=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},A0={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C0=`
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

}`,oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new dn({vertexShader:R0,fragmentShader:C0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mt(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,y=new oc,p=e.getContextAttributes(),m=null,A=null,S=[],T=[],k=new _t,L=null,D=new ze;D.layers.enable(1),D.viewport=new we;let P=new ze;P.layers.enable(2),P.viewport=new we;let ft=[D,P],_=new ac;_.layers.enable(1),_.layers.enable(2);let w=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let mt=S[st];return mt===void 0&&(mt=new Ps,S[st]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(st){let mt=S[st];return mt===void 0&&(mt=new Ps,S[st]=mt),mt.getGripSpace()},this.getHand=function(st){let mt=S[st];return mt===void 0&&(mt=new Ps,S[st]=mt),mt.getHandSpace()};function $(st){let mt=T.indexOf(st.inputSource);if(mt===-1)return;let zt=S[mt];zt!==void 0&&(zt.update(st.inputSource,st.frame,l||a),zt.dispatchEvent({type:st.type,data:st.inputSource}))}function j(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ct);for(let st=0;st<S.length;st++){let mt=T[st];mt!==null&&(T[st]=null,S[st].disconnect(mt))}w=null,Q=null,y.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,A=null,me.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(st){l=st},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ct),p.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){let mt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new kn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let mt=null,zt=null,Pt=null;p.depth&&(Pt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=p.stencil?as:ji,zt=p.stencil?rs:wi);let jt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new kn(f.textureWidth,f.textureHeight,{format:Sn,type:Hn,depthTexture:new Xr(f.textureWidth,f.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ct(st){for(let mt=0;mt<st.removed.length;mt++){let zt=st.removed[mt],Pt=T.indexOf(zt);Pt>=0&&(T[Pt]=null,S[Pt].disconnect(zt))}for(let mt=0;mt<st.added.length;mt++){let zt=st.added[mt],Pt=T.indexOf(zt);if(Pt===-1){for(let Qt=0;Qt<S.length;Qt++)if(Qt>=T.length){T.push(zt),Pt=Qt;break}else if(T[Qt]===null){T[Qt]=zt,Pt=Qt;break}if(Pt===-1)break}let jt=S[Pt];jt&&jt.connect(zt)}}let Z=new U,yt=new U;function et(st,mt,zt){Z.setFromMatrixPosition(mt.matrixWorld),yt.setFromMatrixPosition(zt.matrixWorld);let Pt=Z.distanceTo(yt),jt=mt.projectionMatrix.elements,Qt=zt.projectionMatrix.elements,re=jt[14]/(jt[10]-1),oe=jt[14]/(jt[10]+1),ht=(jt[9]+1)/jt[5],I=(jt[9]-1)/jt[5],Et=(jt[8]-1)/jt[0],W=(Qt[8]+1)/Qt[0],gt=re*Et,wt=re*W,Xt=Pt/(-Et+W),Nt=Xt*-Et;if(mt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Nt),st.translateZ(Xt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),jt[10]===-1)st.projectionMatrix.copy(mt.projectionMatrix),st.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let R=re+Xt,x=oe+Xt,V=gt-Nt,X=wt+(Pt-Nt),ut=ht*oe/x*R,it=I*oe/x*R;st.projectionMatrix.makePerspective(V,X,ut,it,R,x),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Dt(st,mt){mt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(mt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let mt=st.near,zt=st.far;y.texture!==null&&(y.depthNear>0&&(mt=y.depthNear),y.depthFar>0&&(zt=y.depthFar)),_.near=P.near=D.near=mt,_.far=P.far=D.far=zt,(w!==_.near||Q!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,Q=_.far);let Pt=st.parent,jt=_.cameras;Dt(_,Pt);for(let Qt=0;Qt<jt.length;Qt++)Dt(jt[Qt],Pt);jt.length===2?et(_,D,P):_.projectionMatrix.copy(D.projectionMatrix),Ct(st,_,Pt)};function Ct(st,mt,zt){zt===null?st.matrix.copy(mt.matrixWorld):(st.matrix.copy(zt.matrixWorld),st.matrix.invert(),st.matrix.multiply(mt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(mt.projectionMatrix),st.projectionMatrixInverse.copy(mt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=qo*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(st){c=st,f!==null&&(f.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let Ut=null;function fe(st,mt){if(h=mt.getViewerPose(l||a),g=mt,h!==null){let zt=h.views;d!==null&&(t.setRenderTargetFramebuffer(A,d.framebuffer),t.setRenderTarget(A));let Pt=!1;zt.length!==_.cameras.length&&(_.cameras.length=0,Pt=!0);for(let Qt=0;Qt<zt.length;Qt++){let re=zt[Qt],oe=null;if(d!==null)oe=d.getViewport(re);else{let I=u.getViewSubImage(f,re);oe=I.viewport,Qt===0&&(t.setRenderTargetTextures(A,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(A))}let ht=ft[Qt];ht===void 0&&(ht=new ze,ht.layers.enable(Qt),ht.viewport=new we,ft[Qt]=ht),ht.matrix.fromArray(re.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(re.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(oe.x,oe.y,oe.width,oe.height),Qt===0&&(_.matrix.copy(ht.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Pt===!0&&_.cameras.push(ht)}let jt=s.enabledFeatures;if(jt&&jt.includes("depth-sensing")){let Qt=u.getDepthInformation(zt[0]);Qt&&Qt.isValid&&Qt.texture&&y.init(t,Qt,s.renderState)}}for(let zt=0;zt<S.length;zt++){let Pt=T[zt],jt=S[zt];Pt!==null&&jt!==void 0&&jt.update(Pt,mt,l||a)}Ut&&Ut(st,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}let me=new Th;me.setAnimationLoop(fe),this.setAnimationLoop=function(st){Ut=st},this.dispose=function(){}}},yi=new An,P0=new Se;function I0(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,wh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,A,S,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,A,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let A=t.get(m),S=A.envMap,T=A.envMapRotation;S&&(p.envMap.value=S,yi.copy(T),yi.x*=-1,yi.y*=-1,yi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),p.envMapRotation.value.setFromMatrix4(P0.makeRotationFromEuler(yi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,A,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,A){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let A=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,S){let T=S.program;n.uniformBlockBinding(A,T)}function l(A,S){let T=s[A.id];T===void 0&&(g(A),T=h(A),s[A.id]=T,A.addEventListener("dispose",p));let k=S.program;n.updateUBOMapping(A,k);let L=t.render.frame;r[A.id]!==L&&(f(A),r[A.id]=L)}function h(A){let S=u();A.__bindingPointIndex=S;let T=i.createBuffer(),k=A.__size,L=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,k,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let S=s[A.id],T=A.uniforms,k=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let L=0,D=T.length;L<D;L++){let P=Array.isArray(T[L])?T[L]:[T[L]];for(let ft=0,_=P.length;ft<_;ft++){let w=P[ft];if(d(w,L,ft,k)===!0){let Q=w.__offset,$=Array.isArray(w.value)?w.value:[w.value],j=0;for(let ct=0;ct<$.length;ct++){let Z=$[ct],yt=y(Z);typeof Z=="number"||typeof Z=="boolean"?(w.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Q+j,w.__data)):Z.isMatrix3?(w.__data[0]=Z.elements[0],w.__data[1]=Z.elements[1],w.__data[2]=Z.elements[2],w.__data[3]=0,w.__data[4]=Z.elements[3],w.__data[5]=Z.elements[4],w.__data[6]=Z.elements[5],w.__data[7]=0,w.__data[8]=Z.elements[6],w.__data[9]=Z.elements[7],w.__data[10]=Z.elements[8],w.__data[11]=0):(Z.toArray(w.__data,j),j+=yt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,S,T,k){let L=A.value,D=S+"_"+T;if(k[D]===void 0)return typeof L=="number"||typeof L=="boolean"?k[D]=L:k[D]=L.clone(),!0;{let P=k[D];if(typeof L=="number"||typeof L=="boolean"){if(P!==L)return k[D]=L,!0}else if(P.equals(L)===!1)return P.copy(L),!0}return!1}function g(A){let S=A.uniforms,T=0,k=16;for(let D=0,P=S.length;D<P;D++){let ft=Array.isArray(S[D])?S[D]:[S[D]];for(let _=0,w=ft.length;_<w;_++){let Q=ft[_],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let j=0,ct=$.length;j<ct;j++){let Z=$[j],yt=y(Z),et=T%k,Dt=et%yt.boundary,Ct=et+Dt;T+=Dt,Ct!==0&&k-Ct<yt.storage&&(T+=k-Ct),Q.__data=new Float32Array(yt.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=yt.storage}}}let L=T%k;return L>0&&(T+=k-L),A.__size=T,A.__cache={},this}function y(A){let S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function p(A){let S=A.target;S.removeEventListener("dispose",p);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}var qr=class{constructor(t={}){let{canvas:e=Uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let d=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,m=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=ii,this.toneMappingExposure=1;let S=this,T=!1,k=0,L=0,D=null,P=-1,ft=null,_=new we,w=new we,Q=null,$=new ce(0),j=0,ct=e.width,Z=e.height,yt=1,et=null,Dt=null,Ct=new we(0,0,ct,Z),Ut=new we(0,0,ct,Z),fe=!1,me=new Fs,st=!1,mt=!1,zt=new Se,Pt=new Se,jt=new U,Qt=new we,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function ht(){return D===null?yt:1}let I=n;function Et(v,O){return e.getContext(v,O)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",b,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",N,!1),I===null){let O="webgl2";if(I=Et(O,v),I===null)throw Et(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let W,gt,wt,Xt,Nt,R,x,V,X,ut,it,kt,Tt,bt,pe,dt,Ft,te,ee,Ht,le,ne,ge,B;function Ot(){W=new Zp(I),W.init(),ne=new T0(I,W),gt=new Gp(I,W,t,ne),wt=new E0(I),gt.reverseDepthBuffer&&wt.buffers.depth.setReversed(!0),Xt=new Kp(I),Nt=new h0,R=new w0(I,W,wt,Nt,gt,ne,Xt),x=new Wp(S),V=new Yp(S),X=new sf(I),ge=new Hp(I,X),ut=new Jp(I,X,Xt,ge),it=new jp(I,ut,X,Xt),ee=new Qp(I,gt,R),dt=new Vp(Nt),kt=new l0(S,x,V,W,gt,ge,dt),Tt=new I0(S,Nt),bt=new f0,pe=new x0(W),te=new zp(S,x,V,wt,it,f,c),Ft=new M0(S,it,gt),B=new L0(I,Xt,gt,wt),Ht=new kp(I,W,Xt),le=new $p(I,W,Xt),Xt.programs=kt.programs,S.capabilities=gt,S.extensions=W,S.properties=Nt,S.renderLists=bt,S.shadowMap=Ft,S.state=wt,S.info=Xt}Ot();let M=new cc(S,I);this.xr=M,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=W.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=W.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(v){v!==void 0&&(yt=v,this.setSize(ct,Z,!1))},this.getSize=function(v){return v.set(ct,Z)},this.setSize=function(v,O,q=!0){if(M.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=v,Z=O,e.width=Math.floor(v*yt),e.height=Math.floor(O*yt),q===!0&&(e.style.width=v+"px",e.style.height=O+"px"),this.setViewport(0,0,v,O)},this.getDrawingBufferSize=function(v){return v.set(ct*yt,Z*yt).floor()},this.setDrawingBufferSize=function(v,O,q){ct=v,Z=O,yt=q,e.width=Math.floor(v*q),e.height=Math.floor(O*q),this.setViewport(0,0,v,O)},this.getCurrentViewport=function(v){return v.copy(_)},this.getViewport=function(v){return v.copy(Ct)},this.setViewport=function(v,O,q,Y){v.isVector4?Ct.set(v.x,v.y,v.z,v.w):Ct.set(v,O,q,Y),wt.viewport(_.copy(Ct).multiplyScalar(yt).round())},this.getScissor=function(v){return v.copy(Ut)},this.setScissor=function(v,O,q,Y){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,O,q,Y),wt.scissor(w.copy(Ut).multiplyScalar(yt).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(v){wt.setScissorTest(fe=v)},this.setOpaqueSort=function(v){et=v},this.setTransparentSort=function(v){Dt=v},this.getClearColor=function(v){return v.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(v=!0,O=!0,q=!0){let Y=0;if(v){let H=!1;if(D!==null){let vt=D.texture.format;H=vt===Hc||vt===zc||vt===Bc}if(H){let vt=D.texture.type,Lt=vt===Hn||vt===wi||vt===Ds||vt===rs||vt===Fc||vt===Oc,Gt=te.getClearColor(),Wt=te.getClearAlpha(),ie=Gt.r,se=Gt.g,qt=Gt.b;Lt?(d[0]=ie,d[1]=se,d[2]=qt,d[3]=Wt,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=ie,g[1]=se,g[2]=qt,g[3]=Wt,I.clearBufferiv(I.COLOR,0,g))}else Y|=I.COLOR_BUFFER_BIT}O&&(Y|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",b,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",N,!1),bt.dispose(),pe.dispose(),Nt.dispose(),x.dispose(),V.dispose(),it.dispose(),ge.dispose(),B.dispose(),kt.dispose(),M.dispose(),M.removeEventListener("sessionstart",pt),M.removeEventListener("sessionend",rt),At.stop()};function b(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let v=Xt.autoReset,O=Ft.enabled,q=Ft.autoUpdate,Y=Ft.needsUpdate,H=Ft.type;Ot(),Xt.autoReset=v,Ft.enabled=O,Ft.autoUpdate=q,Ft.needsUpdate=Y,Ft.type=H}function N(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function F(v){let O=v.target;O.removeEventListener("dispose",F),z(O)}function z(v){J(v),Nt.remove(v)}function J(v){let O=Nt.get(v).programs;O!==void 0&&(O.forEach(function(q){kt.releaseProgram(q)}),v.isShaderMaterial&&kt.releaseShaderCache(v))}this.renderBufferDirect=function(v,O,q,Y,H,vt){O===null&&(O=re);let Lt=H.isMesh&&H.matrixWorld.determinant()<0,Gt=ot(v,O,q,Y,H);wt.setMaterial(Y,Lt);let Wt=q.index,ie=1;if(Y.wireframe===!0){if(Wt=ut.getWireframeAttribute(q),Wt===void 0)return;ie=2}let se=q.drawRange,qt=q.attributes.position,Me=se.start*ie,Re=(se.start+se.count)*ie;vt!==null&&(Me=Math.max(Me,vt.start*ie),Re=Math.min(Re,(vt.start+vt.count)*ie)),Wt!==null?(Me=Math.max(Me,0),Re=Math.min(Re,Wt.count)):qt!=null&&(Me=Math.max(Me,0),Re=Math.min(Re,qt.count));let De=Re-Me;if(De<0||De===1/0)return;ge.setup(H,Y,Gt,q,Wt);let rn,_e=Ht;if(Wt!==null&&(rn=X.get(Wt),_e=le,_e.setIndex(rn)),H.isMesh)Y.wireframe===!0?(wt.setLineWidth(Y.wireframeLinewidth*ht()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(H.isLine){let Yt=Y.linewidth;Yt===void 0&&(Yt=1),wt.setLineWidth(Yt*ht()),H.isLineSegments?_e.setMode(I.LINES):H.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else H.isPoints?_e.setMode(I.POINTS):H.isSprite&&_e.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)_e.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))_e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Yt=H._multiDrawStarts,Ye=H._multiDrawCounts,xe=H._multiDrawCount,gn=Wt?X.get(Wt).bytesPerElement:1,Ii=Nt.get(Y).currentProgram.getUniforms();for(let an=0;an<xe;an++)Ii.setValue(I,"_gl_DrawID",an),_e.render(Yt[an]/gn,Ye[an])}else if(H.isInstancedMesh)_e.renderInstances(Me,De,H.count);else if(q.isInstancedBufferGeometry){let Yt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ye=Math.min(q.instanceCount,Yt);_e.renderInstances(Me,De,Ye)}else _e.render(Me,De)};function K(v,O,q){v.transparent===!0&&v.side===Nn&&v.forceSinglePass===!1?(v.side=Ke,v.needsUpdate=!0,Vt(v,O,q),v.side=ri,v.needsUpdate=!0,Vt(v,O,q),v.side=Nn):Vt(v,O,q)}this.compile=function(v,O,q=null){q===null&&(q=v),p=pe.get(q),p.init(O),A.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),v!==q&&v.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let Y=new Set;return v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let vt=H.material;if(vt)if(Array.isArray(vt))for(let Lt=0;Lt<vt.length;Lt++){let Gt=vt[Lt];K(Gt,q,H),Y.add(Gt)}else K(vt,q,H),Y.add(vt)}),A.pop(),p=null,Y},this.compileAsync=function(v,O,q=null){let Y=this.compile(v,O,q);return new Promise(H=>{function vt(){if(Y.forEach(function(Lt){Nt.get(Lt).currentProgram.isReady()&&Y.delete(Lt)}),Y.size===0){H(v);return}setTimeout(vt,10)}W.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let nt=null;function at(v){nt&&nt(v)}function pt(){At.stop()}function rt(){At.start()}let At=new Th;At.setAnimationLoop(at),typeof self!="undefined"&&At.setContext(self),this.setAnimationLoop=function(v){nt=v,M.setAnimationLoop(v),v===null?At.stop():At.start()},M.addEventListener("sessionstart",pt),M.addEventListener("sessionend",rt),this.render=function(v,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),M.enabled===!0&&M.isPresenting===!0&&(M.cameraAutoUpdate===!0&&M.updateCamera(O),O=M.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,O,D),p=pe.get(v,A.length),p.init(O),A.push(p),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),me.setFromProjectionMatrix(Pt),mt=this.localClippingEnabled,st=dt.init(this.clippingPlanes,mt),y=bt.get(v,m.length),y.init(),m.push(y),M.enabled===!0&&M.isPresenting===!0){let vt=S.xr.getDepthSensingMesh();vt!==null&&St(vt,O,-1/0,S.sortObjects)}St(v,O,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(et,Dt),oe=M.enabled===!1||M.isPresenting===!1||M.hasDepthSensing()===!1,oe&&te.addToRenderList(y,v),this.info.render.frame++,st===!0&&dt.beginShadows();let q=p.state.shadowsArray;Ft.render(q,v,O),st===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=y.opaque,H=y.transmissive;if(p.setupLights(),O.isArrayCamera){let vt=O.cameras;if(H.length>0)for(let Lt=0,Gt=vt.length;Lt<Gt;Lt++){let Wt=vt[Lt];$t(Y,H,v,Wt)}oe&&te.render(v);for(let Lt=0,Gt=vt.length;Lt<Gt;Lt++){let Wt=vt[Lt];Zt(y,v,Wt,Wt.viewport)}}else H.length>0&&$t(Y,H,v,O),oe&&te.render(v),Zt(y,v,O);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),v.isScene===!0&&v.onAfterRender(S,v,O),ge.resetDefaultState(),P=-1,ft=null,A.pop(),A.length>0?(p=A[A.length-1],st===!0&&dt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function St(v,O,q,Y){if(v.visible===!1)return;if(v.layers.test(O.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(O);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||me.intersectsSprite(v)){Y&&Qt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Pt);let Lt=it.update(v),Gt=v.material;Gt.visible&&y.push(v,Lt,Gt,q,Qt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||me.intersectsObject(v))){let Lt=it.update(v),Gt=v.material;if(Y&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Qt.copy(v.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Qt.copy(Lt.boundingSphere.center)),Qt.applyMatrix4(v.matrixWorld).applyMatrix4(Pt)),Array.isArray(Gt)){let Wt=Lt.groups;for(let ie=0,se=Wt.length;ie<se;ie++){let qt=Wt[ie],Me=Gt[qt.materialIndex];Me&&Me.visible&&y.push(v,Lt,Me,q,Qt.z,qt)}}else Gt.visible&&y.push(v,Lt,Gt,q,Qt.z,null)}}let vt=v.children;for(let Lt=0,Gt=vt.length;Lt<Gt;Lt++)St(vt[Lt],O,q,Y)}function Zt(v,O,q,Y){let H=v.opaque,vt=v.transmissive,Lt=v.transparent;p.setupLightsView(q),st===!0&&dt.setGlobalState(S.clippingPlanes,q),Y&&wt.viewport(_.copy(Y)),H.length>0&&lt(H,O,q),vt.length>0&&lt(vt,O,q),Lt.length>0&&lt(Lt,O,q),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function $t(v,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new kn(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?qs:Hn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));let vt=p.state.transmissionRenderTarget[Y.id],Lt=Y.viewport||_;vt.setSize(Lt.z,Lt.w);let Gt=S.getRenderTarget();S.setRenderTarget(vt),S.getClearColor($),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),oe&&te.render(q);let Wt=S.toneMapping;S.toneMapping=ii;let ie=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),st===!0&&dt.setGlobalState(S.clippingPlanes,Y),lt(v,q,Y),R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt),W.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let qt=0,Me=O.length;qt<Me;qt++){let Re=O[qt],De=Re.object,rn=Re.geometry,_e=Re.material,Yt=Re.group;if(_e.side===Nn&&De.layers.test(Y.layers)){let Ye=_e.side;_e.side=Ke,_e.needsUpdate=!0,Rt(De,q,Y,rn,_e,Yt),_e.side=Ye,_e.needsUpdate=!0,se=!0}}se===!0&&(R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt))}S.setRenderTarget(Gt),S.setClearColor($,j),ie!==void 0&&(Y.viewport=ie),S.toneMapping=Wt}function lt(v,O,q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let H=0,vt=v.length;H<vt;H++){let Lt=v[H],Gt=Lt.object,Wt=Lt.geometry,ie=Y===null?Lt.material:Y,se=Lt.group;Gt.layers.test(q.layers)&&Rt(Gt,O,q,Wt,ie,se)}}function Rt(v,O,q,Y,H,vt){v.onBeforeRender(S,O,q,Y,H,vt),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(S,O,q,Y,v,vt),H.transparent===!0&&H.side===Nn&&H.forceSinglePass===!1?(H.side=Ke,H.needsUpdate=!0,S.renderBufferDirect(q,O,Y,H,v,vt),H.side=ri,H.needsUpdate=!0,S.renderBufferDirect(q,O,Y,H,v,vt),H.side=Nn):S.renderBufferDirect(q,O,Y,H,v,vt),v.onAfterRender(S,O,q,Y,H,vt)}function Vt(v,O,q){O.isScene!==!0&&(O=re);let Y=Nt.get(v),H=p.state.lights,vt=p.state.shadowsArray,Lt=H.state.version,Gt=kt.getParameters(v,H.state,vt,O,q),Wt=kt.getProgramCacheKey(Gt),ie=Y.programs;Y.environment=v.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(v.isMeshStandardMaterial?V:x).get(v.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&v.envMap===null?O.environmentRotation:v.envMapRotation,ie===void 0&&(v.addEventListener("dispose",F),ie=new Map,Y.programs=ie);let se=ie.get(Wt);if(se!==void 0){if(Y.currentProgram===se&&Y.lightsStateVersion===Lt)return de(v,Gt),se}else Gt.uniforms=kt.getUniforms(v),v.onBeforeCompile(Gt,S),se=kt.acquireProgram(Gt,Wt),ie.set(Wt,se),Y.uniforms=Gt.uniforms;let qt=Y.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(qt.clippingPlanes=dt.uniform),de(v,Gt),Y.needsLights=Kt(v),Y.lightsStateVersion=Lt,Y.needsLights&&(qt.ambientLightColor.value=H.state.ambient,qt.lightProbe.value=H.state.probe,qt.directionalLights.value=H.state.directional,qt.directionalLightShadows.value=H.state.directionalShadow,qt.spotLights.value=H.state.spot,qt.spotLightShadows.value=H.state.spotShadow,qt.rectAreaLights.value=H.state.rectArea,qt.ltc_1.value=H.state.rectAreaLTC1,qt.ltc_2.value=H.state.rectAreaLTC2,qt.pointLights.value=H.state.point,qt.pointLightShadows.value=H.state.pointShadow,qt.hemisphereLights.value=H.state.hemi,qt.directionalShadowMap.value=H.state.directionalShadowMap,qt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,qt.spotShadowMap.value=H.state.spotShadowMap,qt.spotLightMatrix.value=H.state.spotLightMatrix,qt.spotLightMap.value=H.state.spotLightMap,qt.pointShadowMap.value=H.state.pointShadowMap,qt.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=se,Y.uniformsList=null,se}function Jt(v){if(v.uniformsList===null){let O=v.currentProgram.getUniforms();v.uniformsList=es.seqWithValue(O.seq,v.uniforms)}return v.uniformsList}function de(v,O){let q=Nt.get(v);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function ot(v,O,q,Y,H){O.isScene!==!0&&(O=re),R.resetTextureUnits();let vt=O.fog,Lt=Y.isMeshStandardMaterial?O.environment:null,Gt=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ui,Wt=(Y.isMeshStandardMaterial?V:x).get(Y.envMap||Lt),ie=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,se=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),qt=!!q.morphAttributes.position,Me=!!q.morphAttributes.normal,Re=!!q.morphAttributes.color,De=ii;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(De=S.toneMapping);let rn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_e=rn!==void 0?rn.length:0,Yt=Nt.get(Y),Ye=p.state.lights;if(st===!0&&(mt===!0||v!==ft)){let hn=v===ft&&Y.id===P;dt.setState(Y,v,hn)}let xe=!1;Y.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ye.state.version||Yt.outputColorSpace!==Gt||H.isBatchedMesh&&Yt.batching===!1||!H.isBatchedMesh&&Yt.batching===!0||H.isBatchedMesh&&Yt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Yt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Yt.instancing===!1||!H.isInstancedMesh&&Yt.instancing===!0||H.isSkinnedMesh&&Yt.skinning===!1||!H.isSkinnedMesh&&Yt.skinning===!0||H.isInstancedMesh&&Yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Yt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Yt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Yt.instancingMorph===!1&&H.morphTexture!==null||Yt.envMap!==Wt||Y.fog===!0&&Yt.fog!==vt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==dt.numPlanes||Yt.numIntersection!==dt.numIntersection)||Yt.vertexAlphas!==ie||Yt.vertexTangents!==se||Yt.morphTargets!==qt||Yt.morphNormals!==Me||Yt.morphColors!==Re||Yt.toneMapping!==De||Yt.morphTargetsCount!==_e)&&(xe=!0):(xe=!0,Yt.__version=Y.version);let gn=Yt.currentProgram;xe===!0&&(gn=Vt(Y,O,H));let Ii=!1,an=!1,xa=!1,Fe=gn.getUniforms(),Yn=Yt.uniforms;if(wt.useProgram(gn.program)&&(Ii=!0,an=!0,xa=!0),Y.id!==P&&(P=Y.id,an=!0),Ii||ft!==v){gt.reverseDepthBuffer?(zt.copy(v.projectionMatrix),Fu(zt),Ou(zt),Fe.setValue(I,"projectionMatrix",zt)):Fe.setValue(I,"projectionMatrix",v.projectionMatrix),Fe.setValue(I,"viewMatrix",v.matrixWorldInverse);let hn=Fe.map.cameraPosition;hn!==void 0&&hn.setValue(I,jt.setFromMatrixPosition(v.matrixWorld)),gt.logarithmicDepthBuffer&&Fe.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Fe.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),ft!==v&&(ft=v,an=!0,xa=!0)}if(H.isSkinnedMesh){Fe.setOptional(I,H,"bindMatrix"),Fe.setOptional(I,H,"bindMatrixInverse");let hn=H.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Fe.setValue(I,"boneTexture",hn.boneTexture,R))}H.isBatchedMesh&&(Fe.setOptional(I,H,"batchingTexture"),Fe.setValue(I,"batchingTexture",H._matricesTexture,R),Fe.setOptional(I,H,"batchingIdTexture"),Fe.setValue(I,"batchingIdTexture",H._indirectTexture,R),Fe.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Fe.setValue(I,"batchingColorTexture",H._colorsTexture,R));let ya=q.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0)&&ee.update(H,q,gn),(an||Yt.receiveShadow!==H.receiveShadow)&&(Yt.receiveShadow=H.receiveShadow,Fe.setValue(I,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Yn.envMap.value=Wt,Yn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Yn.envMapIntensity.value=O.environmentIntensity),an&&(Fe.setValue(I,"toneMappingExposure",S.toneMappingExposure),Yt.needsLights&&Bt(Yn,xa),vt&&Y.fog===!0&&Tt.refreshFogUniforms(Yn,vt),Tt.refreshMaterialUniforms(Yn,Y,yt,Z,p.state.transmissionRenderTarget[v.id]),es.upload(I,Jt(Yt),Yn,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(es.upload(I,Jt(Yt),Yn,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Fe.setValue(I,"center",H.center),Fe.setValue(I,"modelViewMatrix",H.modelViewMatrix),Fe.setValue(I,"normalMatrix",H.normalMatrix),Fe.setValue(I,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let hn=Y.uniformsGroups;for(let va=0,Yh=hn.length;va<Yh;va++){let tl=hn[va];B.update(tl,gn),B.bind(tl,gn)}}return gn}function Bt(v,O){v.ambientLightColor.needsUpdate=O,v.lightProbe.needsUpdate=O,v.directionalLights.needsUpdate=O,v.directionalLightShadows.needsUpdate=O,v.pointLights.needsUpdate=O,v.pointLightShadows.needsUpdate=O,v.spotLights.needsUpdate=O,v.spotLightShadows.needsUpdate=O,v.rectAreaLights.needsUpdate=O,v.hemisphereLights.needsUpdate=O}function Kt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(v,O,q){Nt.get(v.texture).__webglTexture=O,Nt.get(v.depthTexture).__webglTexture=q;let Y=Nt.get(v);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,O){let q=Nt.get(v);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(v,O=0,q=0){D=v,k=O,L=q;let Y=!0,H=null,vt=!1,Lt=!1;if(v){let Wt=Nt.get(v);if(Wt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Wt.__webglFramebuffer===void 0)R.setupRenderTarget(v);else if(Wt.__hasExternalTextures)R.rebindTextures(v,Nt.get(v.texture).__webglTexture,Nt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let qt=v.depthTexture;if(Wt.__boundDepthTexture!==qt){if(qt!==null&&Nt.has(qt)&&(v.width!==qt.image.width||v.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(v)}}let ie=v.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Lt=!0);let se=Nt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(se[O])?H=se[O][q]:H=se[O],vt=!0):v.samples>0&&R.useMultisampledRTT(v)===!1?H=Nt.get(v).__webglMultisampledFramebuffer:Array.isArray(se)?H=se[q]:H=se,_.copy(v.viewport),w.copy(v.scissor),Q=v.scissorTest}else _.copy(Ct).multiplyScalar(yt).floor(),w.copy(Ut).multiplyScalar(yt).floor(),Q=fe;if(wt.bindFramebuffer(I.FRAMEBUFFER,H)&&Y&&wt.drawBuffers(v,H),wt.viewport(_),wt.scissor(w),wt.setScissorTest(Q),vt){let Wt=Nt.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Wt.__webglTexture,q)}else if(Lt){let Wt=Nt.get(v.texture),ie=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.__webglTexture,q||0,ie)}P=-1},this.readRenderTargetPixels=function(v,O,q,Y,H,vt,Lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Nt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Lt!==void 0&&(Gt=Gt[Lt]),Gt){wt.bindFramebuffer(I.FRAMEBUFFER,Gt);try{let Wt=v.texture,ie=Wt.format,se=Wt.type;if(!gt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=v.width-Y&&q>=0&&q<=v.height-H&&I.readPixels(O,q,Y,H,ne.convert(ie),ne.convert(se),vt)}finally{let Wt=D!==null?Nt.get(D).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(v,O,q,Y,H,vt,Lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Nt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Lt!==void 0&&(Gt=Gt[Lt]),Gt){let Wt=v.texture,ie=Wt.format,se=Wt.type;if(!gt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=v.width-Y&&q>=0&&q<=v.height-H){wt.bindFramebuffer(I.FRAMEBUFFER,Gt);let qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.bufferData(I.PIXEL_PACK_BUFFER,vt.byteLength,I.STREAM_READ),I.readPixels(O,q,Y,H,ne.convert(ie),ne.convert(se),0);let Me=D!==null?Nt.get(D).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,Me);let Re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Nu(I,Re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,vt),I.deleteBuffer(qt),I.deleteSync(Re),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,O=null,q=0){v.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1]);let Y=Math.pow(2,-q),H=Math.floor(v.image.width*Y),vt=Math.floor(v.image.height*Y),Lt=O!==null?O.x:0,Gt=O!==null?O.y:0;R.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,Lt,Gt,H,vt),wt.unbindTexture()},this.copyTextureToTexture=function(v,O,q=null,Y=null,H=0){v.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,v=arguments[1],O=arguments[2],H=arguments[3]||0,q=null);let vt,Lt,Gt,Wt,ie,se;q!==null?(vt=q.max.x-q.min.x,Lt=q.max.y-q.min.y,Gt=q.min.x,Wt=q.min.y):(vt=v.image.width,Lt=v.image.height,Gt=0,Wt=0),Y!==null?(ie=Y.x,se=Y.y):(ie=0,se=0);let qt=ne.convert(O.format),Me=ne.convert(O.type);R.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let Re=I.getParameter(I.UNPACK_ROW_LENGTH),De=I.getParameter(I.UNPACK_IMAGE_HEIGHT),rn=I.getParameter(I.UNPACK_SKIP_PIXELS),_e=I.getParameter(I.UNPACK_SKIP_ROWS),Yt=I.getParameter(I.UNPACK_SKIP_IMAGES),Ye=v.isCompressedTexture?v.mipmaps[H]:v.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ye.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,ie,se,vt,Lt,qt,Me,Ye.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,ie,se,Ye.width,Ye.height,qt,Ye.data):I.texSubImage2D(I.TEXTURE_2D,H,ie,se,vt,Lt,qt,Me,Ye),I.pixelStorei(I.UNPACK_ROW_LENGTH,Re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,De),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,_e),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Yt),H===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(v,O,q=null,Y=null,H=0){v.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,v=arguments[2],O=arguments[3],H=arguments[4]||0);let vt,Lt,Gt,Wt,ie,se,qt,Me,Re,De=v.isCompressedTexture?v.mipmaps[H]:v.image;q!==null?(vt=q.max.x-q.min.x,Lt=q.max.y-q.min.y,Gt=q.max.z-q.min.z,Wt=q.min.x,ie=q.min.y,se=q.min.z):(vt=De.width,Lt=De.height,Gt=De.depth,Wt=0,ie=0,se=0),Y!==null?(qt=Y.x,Me=Y.y,Re=Y.z):(qt=0,Me=0,Re=0);let rn=ne.convert(O.format),_e=ne.convert(O.type),Yt;if(O.isData3DTexture)R.setTexture3D(O,0),Yt=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)R.setTexture2DArray(O,0),Yt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let Ye=I.getParameter(I.UNPACK_ROW_LENGTH),xe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ii=I.getParameter(I.UNPACK_SKIP_ROWS),an=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,De.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,De.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,se),v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Yt,H,qt,Me,Re,vt,Lt,Gt,rn,_e,De.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Yt,H,qt,Me,Re,vt,Lt,Gt,rn,De.data):I.texSubImage3D(Yt,H,qt,Me,Re,vt,Lt,Gt,rn,_e,De),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ii),I.pixelStorei(I.UNPACK_SKIP_IMAGES,an),H===0&&O.generateMipmaps&&I.generateMipmap(Yt),wt.unbindTexture()},this.initRenderTarget=function(v){Nt.get(v).__webglFramebuffer===void 0&&R.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?R.setTextureCube(v,0):v.isData3DTexture?R.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?R.setTexture2DArray(v,0):R.setTexture2D(v,0),wt.unbindTexture()},this.resetState=function(){k=0,L=0,D=null,wt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===kc?"display-p3":"srgb",e.unpackColorSpace=ye.workingColorSpace===oa?"display-p3":"srgb"}};var Yr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ce(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ci=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Zr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xo,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new U,Os=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ti=class extends Vn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qi,ws=new U,Yi=new U,Zi=new U,Ji=new _t,Ts=new _t,Ih=new Se,_r=new U,As=new U,xr=new U,Jl=new _t,Qa=new _t,$l=new _t,Wn=class extends Ze{constructor(t=new Ti){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new Oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zr(e,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Os(n,3,0,!1)),qi.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=qi,this.material=t,this.center=new _t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),Ih.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-Zi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;yr(_r.set(-.5,-.5,0),Zi,a,Yi,s,r),yr(As.set(.5,-.5,0),Zi,a,Yi,s,r),yr(xr.set(.5,.5,0),Zi,a,Yi,s,r),Jl.set(0,0),Qa.set(1,0),$l.set(1,1);let o=t.ray.intersectTriangle(_r,As,xr,!1,ws);if(o===null&&(yr(As.set(-.5,.5,0),Zi,a,Yi,s,r),Qa.set(0,1),o=t.ray.intersectTriangle(_r,xr,As,!1,ws),o===null))return;let c=t.ray.origin.distanceTo(ws);c<t.near||c>t.far||e.push({distance:c,point:ws.clone(),uv:ei.getInterpolation(ws,_r,As,xr,Jl,Qa,$l,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function yr(i,t,e,n,s,r){Ji.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*Ji.x-s*Ji.y,Ts.y=s*Ji.x+r*Ji.y):Ts.copy(Ji),i.copy(t),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(Ih)}var hs=class extends Vn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kl=new Se,lc=new Us,vr=new os,Mr=new U,Bs=class extends Ze{constructor(t=new Oe,e=new hs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),vr.radius+=r,t.ray.intersectsSphere(vr)===!1)return;Kl.copy(s).invert(),lc.copy(t.ray).applyMatrix4(Kl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,y=d;g<y;g++){let p=l.getX(g);Mr.fromBufferAttribute(u,p),Ql(Mr,p,c,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,y=d;g<y;g++)Mr.fromBufferAttribute(u,g),Ql(Mr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ql(i,t,e,n,s,r,a){let o=lc.distanceSqToPoint(i);if(o<e){let c=new U;lc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var sn=class extends ln{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new _t:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],a=[],o=new U,c=new Se;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(We(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(We(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zs=class extends pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hc=class extends zs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Sr=new U,ja=new Vc,to=new Vc,eo=new Vc,uc=class extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Sr.subVectors(s[0],s[1]).add(s[0]),l=Sr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),ja.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,y,p),to.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,y,p),eo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),to.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),eo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(ja.calc(c),to.calc(c),eo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function jl(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function D0(i,t){let e=1-i;return e*e*t}function U0(i,t){return 2*(1-i)*i*t}function N0(i,t){return i*i*t}function Is(i,t,e,n){return D0(i,t)+U0(i,e)+N0(i,n)}function F0(i,t){let e=1-i;return e*e*e*t}function O0(i,t){let e=1-i;return 3*e*e*i*t}function B0(i,t){return 3*(1-i)*i*i*t}function z0(i,t){return i*i*i*t}function Ls(i,t,e,n,s){return F0(i,t)+O0(i,e)+B0(i,n)+z0(i,s)}var Jr=class extends pn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fc=class extends pn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y),Ls(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$r=class extends pn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dc=class extends pn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kr=class extends pn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(t,s.x,r.x,a.x),Is(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pc=class extends pn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(t,s.x,r.x,a.x),Is(t,s.y,r.y,a.y),Is(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(jl(o,c.x,l.x,h.x,u.x),jl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},mc=Object.freeze({__proto__:null,ArcCurve:hc,CatmullRomCurve3:uc,CubicBezierCurve:Jr,CubicBezierCurve3:fc,EllipseCurve:zs,LineCurve:$r,LineCurve3:dc,QuadraticBezierCurve:Kr,QuadraticBezierCurve3:pc,SplineCurve:Qr}),gc=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new mc[s.type]().fromJSON(s))}return this}},Hs=class extends gc{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new $r(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Kr(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Jr(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new zs(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},_c=class i extends Oe{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new U,f=new _t,d=new U,g=new U,y=new U,p=0,m=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:p=t[A+1].x-t[A].x,m=t[A+1].y-t[A].y,d.x=m*1,d.y=-p,d.z=m*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:p=t[A+1].x-t[A].x,m=t[A+1].y-t[A].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let A=0;A<=e;A++){let S=n+A*h*s,T=Math.sin(S),k=Math.cos(S);for(let L=0;L<=t.length-1;L++){u.x=t[L].x*T,u.y=t[L].y,u.z=t[L].x*k,a.push(u.x,u.y,u.z),f.x=A/e,f.y=L/(t.length-1),o.push(f.x,f.y);let D=c[3*L+0]*T,P=c[3*L+1],ft=c[3*L+0]*k;l.push(D,P,ft)}}for(let A=0;A<e;A++)for(let S=0;S<t.length-1;S++){let T=S+A*t.length,k=T,L=T+t.length,D=T+t.length+1,P=T+1;r.push(k,L,P),r.push(D,P,L)}this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("uv",new ve(o,2)),this.setAttribute("normal",new ve(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},jr=class i extends _c{constructor(t=1,e=1,n=4,s=8){let r=new Hs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var qe=class i extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],p=n/2,m=0;A(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(f,3)),this.setAttribute("uv",new ve(d,2));function A(){let T=new U,k=new U,L=0,D=(e-t)/n;for(let P=0;P<=r;P++){let ft=[],_=P/r,w=_*(e-t)+t;for(let Q=0;Q<=s;Q++){let $=Q/s,j=$*c+o,ct=Math.sin(j),Z=Math.cos(j);k.x=w*ct,k.y=-_*n+p,k.z=w*Z,u.push(k.x,k.y,k.z),T.set(ct,D,Z).normalize(),f.push(T.x,T.y,T.z),d.push($,1-_),ft.push(g++)}y.push(ft)}for(let P=0;P<s;P++)for(let ft=0;ft<r;ft++){let _=y[ft][P],w=y[ft+1][P],Q=y[ft+1][P+1],$=y[ft][P+1];t>0&&(h.push(_,w,$),L+=3),e>0&&(h.push(w,Q,$),L+=3)}l.addGroup(m,L,0),m+=L}function S(T){let k=g,L=new _t,D=new U,P=0,ft=T===!0?t:e,_=T===!0?1:-1;for(let Q=1;Q<=s;Q++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),g++;let w=g;for(let Q=0;Q<=s;Q++){let j=Q/s*c+o,ct=Math.cos(j),Z=Math.sin(j);D.x=ft*Z,D.y=p*_,D.z=ft*ct,u.push(D.x,D.y,D.z),f.push(0,_,0),L.x=ct*.5+.5,L.y=Z*.5*_+.5,d.push(L.x,L.y),g++}for(let Q=0;Q<s;Q++){let $=k+Q,j=w+Q;T===!0?h.push(j,j+1,$):h.push(j+1,j,$),P+=3}l.addGroup(m,P,T===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},li=class i extends qe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ai=class extends Hs{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Hs().fromJSON(s))}return this}},H0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Lh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,d;if(n&&(r=X0(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return ks(r,a,e,o,c,d,0),a}};function Lh(i,t,e,n,s){let r,a;if(s===ng(i,t,e,n)>0)for(r=t;r<e;r+=n)a=th(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=th(r,i[r],i[r+1],a);return a&&la(a,a.next)&&(Vs(a),a=a.next),a}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(la(e,e.next)||Le(e.prev,e,e.next)===0)){if(Vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ks(i,t,e,n,s,r,a){if(!i)return;!a&&r&&$0(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?G0(i,n,s,r):k0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Vs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=V0(Ri(i),t,e),ks(i,t,e,n,s,r,2)):a===2&&W0(i,t,e,n,s,r):ks(Ri(i),t,e,n,s,r,1);break}}}function k0(i){let t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ki(s,o,r,c,a,l,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function G0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Le(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,y=o>c?o>l?o:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,m=xc(d,g,t,e,n),A=xc(y,p,t,e,n),S=i.prevZ,T=i.nextZ;for(;S&&S.z>=m&&T&&T.z<=A;){if(S.x>=d&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&Ki(o,h,c,u,l,f,S.x,S.y)&&Le(S.prev,S,S.next)>=0||(S=S.prevZ,T.x>=d&&T.x<=y&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&Ki(o,h,c,u,l,f,T.x,T.y)&&Le(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&Ki(o,h,c,u,l,f,S.x,S.y)&&Le(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;T&&T.z<=A;){if(T.x>=d&&T.x<=y&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&Ki(o,h,c,u,l,f,T.x,T.y)&&Le(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function V0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!la(s,r)&&Dh(s,n,n.next,r)&&Gs(s,r)&&Gs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Vs(n),Vs(n.next),n=i=r),n=n.next}while(n!==i);return Ri(n)}function W0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&j0(a,o)){let c=Uh(a,o);a=Ri(a,a.next),c=Ri(c,c.next),ks(a,t,e,n,s,r,0),ks(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function X0(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Lh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Q0(l));for(s.sort(q0),r=0;r<s.length;r++)e=Y0(s[r],e);return e}function q0(i,t){return i.x-t.x}function Y0(i,t){let e=Z0(i,t);if(!e)return t;let n=Uh(e,i);return Ri(n,n.next),Ri(e,e.next)}function Z0(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ki(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Gs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&J0(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function J0(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function $0(i,t,e,n){let s=i;do s.z===0&&(s.z=xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,K0(s)}function K0(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Q0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ki(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function j0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!tg(i,t)&&(Gs(i,t)&&Gs(t,i)&&eg(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||la(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function la(i,t){return i.x===t.x&&i.y===t.y}function Dh(i,t,e,n){let s=br(Le(i,t,e)),r=br(Le(i,t,n)),a=br(Le(e,n,i)),o=br(Le(e,n,t));return!!(s!==r&&a!==o||s===0&&Er(i,e,t)||r===0&&Er(i,n,t)||a===0&&Er(e,i,n)||o===0&&Er(e,t,n))}function Er(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function br(i){return i>0?1:i<0?-1:0}function tg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Dh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gs(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function eg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Uh(i,t){let e=new yc(i.i,i.x,i.y),n=new yc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function th(i,t,e,n){let s=new yc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ng(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var si=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];eh(t),nh(n,t);let a=t.length;e.forEach(eh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,nh(n,e[c]);let o=H0.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function eh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function nh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ta=class i extends Oe{constructor(t=new Ai([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new ve(s,3)),this.setAttribute("uv",new ve(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:ig,S,T=!1,k,L,D,P;m&&(S=m.getSpacedPoints(h),T=!0,f=!1,k=m.computeFrenetFrames(h,!1),L=new U,D=new U,P=new U),f||(p=0,d=0,g=0,y=0);let ft=o.extractPoints(l),_=ft.shape,w=ft.holes;if(!si.isClockWise(_)){_=_.reverse();for(let ht=0,I=w.length;ht<I;ht++){let Et=w[ht];si.isClockWise(Et)&&(w[ht]=Et.reverse())}}let $=si.triangulateShape(_,w),j=_;for(let ht=0,I=w.length;ht<I;ht++){let Et=w[ht];_=_.concat(Et)}function ct(ht,I,Et){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(I,Et)}let Z=_.length,yt=$.length;function et(ht,I,Et){let W,gt,wt,Xt=ht.x-I.x,Nt=ht.y-I.y,R=Et.x-ht.x,x=Et.y-ht.y,V=Xt*Xt+Nt*Nt,X=Xt*x-Nt*R;if(Math.abs(X)>Number.EPSILON){let ut=Math.sqrt(V),it=Math.sqrt(R*R+x*x),kt=I.x-Nt/ut,Tt=I.y+Xt/ut,bt=Et.x-x/it,pe=Et.y+R/it,dt=((bt-kt)*x-(pe-Tt)*R)/(Xt*x-Nt*R);W=kt+Xt*dt-ht.x,gt=Tt+Nt*dt-ht.y;let Ft=W*W+gt*gt;if(Ft<=2)return new _t(W,gt);wt=Math.sqrt(Ft/2)}else{let ut=!1;Xt>Number.EPSILON?R>Number.EPSILON&&(ut=!0):Xt<-Number.EPSILON?R<-Number.EPSILON&&(ut=!0):Math.sign(Nt)===Math.sign(x)&&(ut=!0),ut?(W=-Nt,gt=Xt,wt=Math.sqrt(V)):(W=Xt,gt=Nt,wt=Math.sqrt(V/2))}return new _t(W/wt,gt/wt)}let Dt=[];for(let ht=0,I=j.length,Et=I-1,W=ht+1;ht<I;ht++,Et++,W++)Et===I&&(Et=0),W===I&&(W=0),Dt[ht]=et(j[ht],j[Et],j[W]);let Ct=[],Ut,fe=Dt.concat();for(let ht=0,I=w.length;ht<I;ht++){let Et=w[ht];Ut=[];for(let W=0,gt=Et.length,wt=gt-1,Xt=W+1;W<gt;W++,wt++,Xt++)wt===gt&&(wt=0),Xt===gt&&(Xt=0),Ut[W]=et(Et[W],Et[wt],Et[Xt]);Ct.push(Ut),fe=fe.concat(Ut)}for(let ht=0;ht<p;ht++){let I=ht/p,Et=d*Math.cos(I*Math.PI/2),W=g*Math.sin(I*Math.PI/2)+y;for(let gt=0,wt=j.length;gt<wt;gt++){let Xt=ct(j[gt],Dt[gt],W);Pt(Xt.x,Xt.y,-Et)}for(let gt=0,wt=w.length;gt<wt;gt++){let Xt=w[gt];Ut=Ct[gt];for(let Nt=0,R=Xt.length;Nt<R;Nt++){let x=ct(Xt[Nt],Ut[Nt],W);Pt(x.x,x.y,-Et)}}}let me=g+y;for(let ht=0;ht<Z;ht++){let I=f?ct(_[ht],fe[ht],me):_[ht];T?(D.copy(k.normals[0]).multiplyScalar(I.x),L.copy(k.binormals[0]).multiplyScalar(I.y),P.copy(S[0]).add(D).add(L),Pt(P.x,P.y,P.z)):Pt(I.x,I.y,0)}for(let ht=1;ht<=h;ht++)for(let I=0;I<Z;I++){let Et=f?ct(_[I],fe[I],me):_[I];T?(D.copy(k.normals[ht]).multiplyScalar(Et.x),L.copy(k.binormals[ht]).multiplyScalar(Et.y),P.copy(S[ht]).add(D).add(L),Pt(P.x,P.y,P.z)):Pt(Et.x,Et.y,u/h*ht)}for(let ht=p-1;ht>=0;ht--){let I=ht/p,Et=d*Math.cos(I*Math.PI/2),W=g*Math.sin(I*Math.PI/2)+y;for(let gt=0,wt=j.length;gt<wt;gt++){let Xt=ct(j[gt],Dt[gt],W);Pt(Xt.x,Xt.y,u+Et)}for(let gt=0,wt=w.length;gt<wt;gt++){let Xt=w[gt];Ut=Ct[gt];for(let Nt=0,R=Xt.length;Nt<R;Nt++){let x=ct(Xt[Nt],Ut[Nt],W);T?Pt(x.x,x.y+S[h-1].y,S[h-1].x+Et):Pt(x.x,x.y,u+Et)}}}st(),mt();function st(){let ht=s.length/3;if(f){let I=0,Et=Z*I;for(let W=0;W<yt;W++){let gt=$[W];jt(gt[2]+Et,gt[1]+Et,gt[0]+Et)}I=h+p*2,Et=Z*I;for(let W=0;W<yt;W++){let gt=$[W];jt(gt[0]+Et,gt[1]+Et,gt[2]+Et)}}else{for(let I=0;I<yt;I++){let Et=$[I];jt(Et[2],Et[1],Et[0])}for(let I=0;I<yt;I++){let Et=$[I];jt(Et[0]+Z*h,Et[1]+Z*h,Et[2]+Z*h)}}n.addGroup(ht,s.length/3-ht,0)}function mt(){let ht=s.length/3,I=0;zt(j,I),I+=j.length;for(let Et=0,W=w.length;Et<W;Et++){let gt=w[Et];zt(gt,I),I+=gt.length}n.addGroup(ht,s.length/3-ht,1)}function zt(ht,I){let Et=ht.length;for(;--Et>=0;){let W=Et,gt=Et-1;gt<0&&(gt=ht.length-1);for(let wt=0,Xt=h+p*2;wt<Xt;wt++){let Nt=Z*wt,R=Z*(wt+1),x=I+W+Nt,V=I+gt+Nt,X=I+gt+R,ut=I+W+R;Qt(x,V,X,ut)}}}function Pt(ht,I,Et){c.push(ht),c.push(I),c.push(Et)}function jt(ht,I,Et){re(ht),re(I),re(Et);let W=s.length/3,gt=A.generateTopUV(n,s,W-3,W-2,W-1);oe(gt[0]),oe(gt[1]),oe(gt[2])}function Qt(ht,I,Et,W){re(ht),re(I),re(W),re(I),re(Et),re(W);let gt=s.length/3,wt=A.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);oe(wt[0]),oe(wt[1]),oe(wt[3]),oe(wt[1]),oe(wt[2]),oe(wt[3])}function re(ht){s.push(c[ht*3+0]),s.push(c[ht*3+1]),s.push(c[ht*3+2])}function oe(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new mc[s.type]().fromJSON(s)),new i(n,t.options)}},ig={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new _t(r,a),new _t(o,c),new _t(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new _t(a,1-c),new _t(l,1-u),new _t(f,1-g),new _t(y,1-m)]:[new _t(o,1-c),new _t(h,1-u),new _t(d,1-g),new _t(p,1-m)]}};function sg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ea=class i extends Oe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new U,g=new _t;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){let m=r+p/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let y=0;y<s;y++){let p=y*(n+1);for(let m=0;m<n;m++){let A=m+p,S=A,T=A+n+1,k=A+n+2,L=A+1;o.push(S,T,L),o.push(T,k,L)}}this.setIndex(o),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},na=class i extends Oe{constructor(t=new Ai([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(r,3)),this.setAttribute("uv",new ve(a,2));function l(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;si.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let A=g[p];si.isClockWise(A)===!0&&(g[p]=A.reverse())}let y=si.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let A=g[p];d=d.concat(A)}for(let p=0,m=d.length;p<m;p++){let A=d[p];s.push(A.x,A.y,0),r.push(0,0,1),a.push(A.x,A.y)}for(let p=0,m=y.length;p<m;p++){let A=y[p],S=A[0]+u,T=A[1]+u,k=A[2]+u;n.push(S,T,k),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return rg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function rg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var nn=class i extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new U,f=new U,d=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let A=[],S=m/n,T=0;m===0&&a===0?T=.5/e:m===n&&c===Math.PI&&(T=-.5/e);for(let k=0;k<=e;k++){let L=k/e;u.x=-t*Math.cos(s+L*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+L*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),p.push(L+T,1-S),A.push(l++)}h.push(A)}for(let m=0;m<n;m++)for(let A=0;A<e;A++){let S=h[m][A+1],T=h[m][A],k=h[m+1][A],L=h[m+1][A+1];(m!==0||a>0)&&d.push(S,T,L),(m!==n-1||c<Math.PI)&&d.push(T,k,L)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var us=class i extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new U,u=new U,f=new U;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let y=g/s*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(y),u.y=(t+e*Math.cos(p))*Math.sin(y),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let y=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,A=(s+1)*d+g;a.push(y,p,A),a.push(p,m,A)}this.setIndex(a),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ae=class extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ws=class extends Ae{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function wr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ag(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sl,endingEnd:sl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rl:r=t,o=2*e-n;break;case al:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rl:a=t,c=2*n-e;break;case al:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,A=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,S=(-1-d)*p+(1.5+d)*y+.5*g,T=d*p-d*y;for(let k=0;k!==o;++k)r[k]=m*a[h+k]+A*a[l+k]+S*a[c+k]+T*a[u+k];return r}},Mc=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},Sc=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wr(e,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wr(t.times,Array),values:wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case Wo:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&ag(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Wo;var Ci=class extends En{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Lr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends En{};Ec.prototype.ValueTypeName="color";var bc=class extends En{};bc.prototype.ValueTypeName="number";var wc=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)oi.slerpFlat(r,0,a,l-o,a,l,c);return r}},ia=class extends En{InterpolantFactoryMethodLinear(t){return new wc(this.times,this.values,this.getValueSize(),t)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends En{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Lr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends En{};Tc.prototype.ValueTypeName="vector";var Ac=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},og=new Ac,Rc=class{constructor(t){this.manager=t!==void 0?t:og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Rc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ds=class extends Xs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},no=new Se,ih=new U,sh=new U,sa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(ih),sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sh),e.updateMatrixWorld(),no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(no)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var rh=new Se,Rs=new U,io=new U,Cc=class extends sa{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Rs),io.copy(n.position),io.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(io),n.updateMatrixWorld(),s.makeTranslation(-Rs.x,-Rs.y,-Rs.z),rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh)}},ps=class extends Xs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Pc=class extends sa{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hi=class extends Xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Pc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wc="\\[\\]\\.:\\/",cg=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",lg="[^"+Wc.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",Xc),ug=/(WCOD+)?/.source.replace("WCOD",lg),fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),pg=new RegExp("^"+hg+ug+fg+dg+"$"),mg=["material","materials","bones","map"],Ic=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cg,"")}static parseTrackName(t){let e=pg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=Ic;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sg=new Float32Array(1);var ah=new Se,ra=class{constructor(t,e,n=0,s=1/0){this.ray=new Us(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(t,e=!0,n=[]){return Lc(t,this,n,e),n.sort(oh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Lc(t[s],this,n,e);return n.sort(oh),n}};function oh(i,t){return i.distance-t.distance}function Lc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Lc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var ha=class extends ci{constructor(){super();let t=new Te;t.deleteAttribute("uv");let e=new Ae({side:Ke}),n=new Ae,s=new ps(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Mt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Mt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Mt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let c=new Mt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Mt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Mt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Mt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new Mt(t,gs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Mt(t,gs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new Mt(t,gs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new Mt(t,gs(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let p=new Mt(t,gs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new Mt(t,gs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function gs(i){let t=new Xe;return t.color.setScalar(i),t}function Oh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Oe,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Fh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<a[h].length;++y)d.push(a[h][y][f]);let g=Fh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Fh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new He(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);o.setComponent(f+u,g,y)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Ys=new U;function mn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ys.copy(t),Ys[n]=0,Ys.normalize();let l=.5*a/(a+o),h=1-Ys.angleTo(i)/c;return Math.sign(Ys[e])===1?h*l:o/(a+o)+l+l*(1-h)}var ua=class extends Te{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new U,c=new U,l=new U(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new U,y=.5/s;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(o.fromArray(h,p),c.copy(o),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),h[p+0]=l.x*Math.sign(o.x)+c.x*r,h[p+1]=l.y*Math.sign(o.y)+c.y*r,h[p+2]=l.z*Math.sign(o.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/d)){case 0:g.set(1,0,0),f[m+0]=mn(g,c,"z","y",r,n),f[m+1]=1-mn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),f[m+0]=1-mn(g,c,"z","y",r,n),f[m+1]=1-mn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),f[m+0]=1-mn(g,c,"x","z",r,t),f[m+1]=mn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[m+0]=1-mn(g,c,"x","z",r,t),f[m+1]=1-mn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[m+0]=1-mn(g,c,"x","y",r,t),f[m+1]=1-mn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),f[m+0]=mn(g,c,"x","y",r,t),f[m+1]=1-mn(g,c,"y","x",r,e);break}}};var gg=!1,Ue=(i,t={})=>new Ae(Object.assign({color:i,roughness:.45,metalness:.1},t)),Xn=(i,t={})=>new Ws(Object.assign({color:i,roughness:.3,metalness:.08,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.15},t)),_s=(i,t,e)=>{let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new sn(n);return s.colorSpace=Ie,s.anisotropy=4,s},Zs={grille:_s(64,64,(i,t,e)=>{i.fillStyle="#1a1b1f",i.fillRect(0,0,t,e);for(let n=4;n<e;n+=9){let s=i.createLinearGradient(0,n,0,n+5);s.addColorStop(0,"#f4f6fa"),s.addColorStop(1,"#7b8090"),i.fillStyle=s,i.fillRect(3,n,t-6,5)}i.strokeStyle="#cfd3da",i.lineWidth=4,i.strokeRect(2,2,t-4,e-4)}),roll:_s(64,128,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"#9aa0aa"),n.addColorStop(.5,"#eef0f4"),n.addColorStop(1,"#a3a9b3"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(40,44,52,.55)";for(let s=0;s<e;s+=8)i.fillRect(0,s,t,1.6);i.fillStyle="#3a3e46",i.fillRect(t*.38,e-14,t*.24,6),i.strokeStyle="#5b616c",i.lineWidth=3,i.strokeRect(1,1,t-2,e-2)}),tread:_s(64,16,(i,t,e)=>{i.fillStyle="#17171a",i.fillRect(0,0,t,e),i.fillStyle="#0b0b0d";for(let n=0;n<t;n+=6)i.fillRect(n,0,3,e)}),gauge:_s(128,64,(i,t,e)=>{i.fillStyle="#2b2f37",i.fillRect(0,0,t,e);for(let n=0;n<3;n++){let s=22+n*42;i.fillStyle="#d9dde3",i.beginPath(),i.arc(s,24,15,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(s,24,12,0,7),i.fill(),i.strokeStyle="#d01818",i.lineWidth=2,i.beginPath(),i.moveTo(s,24),i.lineTo(s+8*Math.cos(n-2.2),24+8*Math.sin(n-2.2)),i.stroke()}["#e83030","#3070e8","#f0c020","#30b050"].forEach((n,s)=>{i.fillStyle="#bfc4cc",i.beginPath(),i.arc(16+s*32,52,7,0,7),i.fill(),i.fillStyle=n,i.beginPath(),i.arc(16+s*32,52,4.5,0,7),i.fill()})}),plate:_s(64,24,(i,t,e)=>{i.fillStyle="#f4f4ee",i.fillRect(0,0,t,e),i.strokeStyle="#333",i.lineWidth=2,i.strokeRect(1,1,t-2,e-2),i.fillStyle="#222",i.font="bold 15px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("FR 07",t/2,e/2+1)})};function qc(i,t,e,n,s,r,a){i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip();for(let o=-2;o<n/s*2+2;o++)i.fillStyle=o%2?r:a,i.beginPath(),i.moveTo(t+o*s*.6,e+s),i.lineTo(t+o*s*.6+s*.6,e+s),i.lineTo(t+o*s*.6+s*1.2,e),i.lineTo(t+o*s*.6+s*.6,e),i.fill();i.restore()}function Yc(i,t,e,n,s){i.save(),i.translate(t,e),i.fillStyle="#f3c63a",i.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,o=r%2?n*.55:n;i.lineTo(Math.cos(a)*o,Math.sin(a)*o)}i.closePath(),i.fill(),i.fillStyle=s,i.beginPath(),i.arc(0,0,n*.42,0,7),i.fill(),i.fillStyle="#ffd23f",i.beginPath(),i.moveTo(0,-n*.32),i.quadraticCurveTo(n*.28,0,0,n*.3),i.quadraticCurveTo(-n*.28,0,0,-n*.32),i.fill(),i.restore()}var fa={};function _g(i){if(fa[i])return fa[i];let t=i==="door"?256:512,e=i==="door"?192:128,n=_s(t,e,s=>{s.clearRect(0,0,t,e);let r=(a,o,c)=>{s.fillStyle="rgba(0,0,0,.35)",s.fillRect(a,o,2,c-o),s.fillStyle="rgba(255,255,255,.18)",s.fillRect(a+2,o,1,c-o)};if(i==="fire"&&(s.fillStyle="#f6f1d0",s.fillRect(0,86,t,14),s.fillStyle="#ffd23f",s.fillRect(0,100,t,4),qc(s,0,86,70,14,"#f6f1d0","#c8141a"),r(t-150,14,112),r(t-60,14,112),s.fillStyle="rgba(0,0,0,.4)",s.fillRect(t-145,58,16,4),Yc(s,t-104,48,26,"#9a0e14"),s.fillStyle="#fff",s.font="900 30px sans-serif",s.textAlign="center",s.fillText("7",t-104,122),s.font="900 26px sans-serif",s.fillStyle="rgba(255,255,255,.95)",s.textAlign="left",s.fillText("RESCUE \xB7 7",20,72)),i==="door"&&(Yc(s,128,78,62,"#9a0e14"),s.fillStyle="#fff",s.strokeStyle="rgba(60,0,0,.8)",s.lineWidth=6,s.font="900 46px sans-serif",s.textAlign="center",s.strokeText("7",128,176),s.fillText("7",128,176),s.fillStyle="rgba(0,0,0,.4)",s.fillRect(10,6,3,180),s.fillRect(232,100,22,6)),i==="amb"){s.fillStyle="#d4161c",s.fillRect(0,78,t,18),s.fillStyle="#ff8a1e",s.fillRect(0,98,t,6),s.fillStyle="#1d56c8",s.fillRect(0,40,t*.62,6);let a=t*.36,o=50;s.fillStyle="#d4161c",s.fillRect(a-9,o-28,18,56),s.fillRect(a-28,o-9,56,18),s.fillStyle="#fff",s.fillRect(a-5,o-24,10,48),s.fillRect(a-24,o-5,48,10),r(t-150,14,112),r(t*.72,14,112),s.fillStyle="#1d3f9a",s.font="800 22px sans-serif",s.textAlign="left",s.fillText("MEDIC 7",t*.47,70)}i==="police"&&(s.fillStyle="#1d3f9a",s.fillRect(0,64,t,30),s.fillStyle="#ffffff",s.fillRect(0,94,t,5),s.fillStyle="#fff",s.font="900 26px sans-serif",s.textAlign="center",s.fillText("PATROL",t/2,88),r(t*.5,8,120),r(t*.24,8,120)),i==="van"&&(qc(s,0,80,t,16,"#1a1a1e","#ffd23f"),r(t*.62,10,118),s.fillStyle="#1a1a1e",s.font="800 22px sans-serif",s.textAlign="left",s.fillText("CITY WORKS",22,62)),i==="tow"&&(qc(s,0,84,t,14,"#1a1a1e","#ffd23f"),r(t-130,10,118),s.fillStyle="#1a1a1e",s.font="900 24px sans-serif",s.textAlign="left",s.fillText("TOW 24/7",20,64)),i==="chief"&&(s.fillStyle="#f6f1d0",s.fillRect(0,78,t,10),s.fillStyle="#ffd23f",s.fillRect(0,90,t,4),r(t*.5,8,120),Yc(s,t*.36,48,22,"#9a0e14"),s.fillStyle="#fff",s.font="900 22px sans-serif",s.textAlign="left",s.fillText("CHIEF",t*.5+14,60)),i==="car"&&(r(t*.5,10,120),r(t*.26,10,120),s.fillStyle="rgba(0,0,0,.45)",s.fillRect(t*.55,60,18,4),s.fillRect(t*.31,60,18,4),s.fillStyle="rgba(255,255,255,.22)",s.fillRect(0,46,t,2))});return fa[i]=new Ae({map:n,transparent:!0,roughness:.35,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),fa[i]}var tt={red:Xn(13112346),redD:Xn(9047312,{roughness:.45,clearcoat:.4}),white:Xn(15987696,{roughness:.28}),chrome:Ue(15659252,{metalness:1,roughness:.08,envMapIntensity:1.6}),alu:Ue(12896464,{metalness:.9,roughness:.28}),black:Ue(1513499,{roughness:.7}),trim:Ue(987154,{roughness:.45,metalness:.2}),tire:Ue(1710621,{roughness:.88,map:Zs.tread}),rubber:Ue(1052690,{roughness:.95}),glass:new Ws({color:1056814,metalness:.1,roughness:.03,clearcoat:1,clearcoatRoughness:0,envMapIntensity:2.6,reflectivity:1}),head:Ue(16777215,{emissive:16773832,emissiveIntensity:2.6,roughness:.1}),tail:Ue(5898240,{emissive:16718352,emissiveIntensity:1.6,roughness:.15}),amber:Ue(6961664,{emissive:16751120,emissiveIntensity:1.3,roughness:.2}),lr:Ue(5570560,{emissive:16719904,emissiveIntensity:1.6,roughness:.15}),lb:Ue(2133,{emissive:2117887,emissiveIntensity:1.8,roughness:.15}),yel:Xn(16760596),refl:Ue(16117960,{emissive:4209168,roughness:.3}),hose:Ue(15258746,{roughness:.75}),hoseR:Ue(13122090,{roughness:.7}),grey:Ue(6053992,{roughness:.55,metalness:.3}),orange:Xn(16742930),blue:Xn(1916826),navy:Xn(1319229),cone:Ue(16734736,{roughness:.55}),grille:Ue(16777215,{map:Zs.grille,metalness:.6,roughness:.25}),roll:Ue(16777215,{map:Zs.roll,metalness:.55,roughness:.35}),gauge:Ue(16777215,{map:Zs.gauge,roughness:.4}),plate:Ue(16777215,{map:Zs.plate,roughness:.5}),seat:Ue(2763825,{roughness:.8})},Bh={red:[13112346,.3,.08],redD:[9047312,.45,.08],refl:[16117960,.3,.1],chrome:[15659252,.08,1],alu:[12896464,.28,.9],white:[15987696,.28,.08],hose:[15258746,.75,.1]};function Qe(i,t,e,n,s){let r=tt[i];r.color.setHex(t),r.roughness=e,r.metalness=n,r.emissive.setHex(s||0),r.emissiveIntensity=s?.35:1}var da=1;function xg(i){for(let t in Bh)Qe(t,...Bh[t]);da=1,i===1&&(Qe("red",14161436,.22,.12),Qe("redD",15921904,.3,.1),Qe("alu",15000804,.15,1)),i===2&&(Qe("red",10357010,.16,.45),Qe("redD",1710622,.4,.3),Qe("refl",14725168,.25,.9,3811840),Qe("alu",15790320,.1,1),da=1.25,Qe("white",16184298,.18,.35)),i===3&&(Qe("red",1184535,.14,.6),Qe("redD",14263594,.2,1),Qe("refl",16764746,.2,1,4862464),Qe("chrome",16765802,.1,1),Qe("alu",13213760,.18,1),da=1.35,Qe("white",16447212,.15,.3),Qe("hose",16765802,.3,.8))}function pa(i,t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t.receiveShadow=!0,i.add(t),t}function xt(i,t,e,n,s,r,a,o,c=.02){let l=Math.min(c,t/2-1e-4,e/2-1e-4,n/2-1e-4);return pa(i,new Mt(l>.001?new ua(t,e,n,3,l):new Te(t,e,n),s),r,a,o)}function Ee(i,t,e,n,s,r,a,o="z",c=24,l){let h=new Mt(new qe(t,l==null?t:l,e,c),n);return o==="z"?h.rotation.x=Math.PI/2:o==="x"&&(h.rotation.z=Math.PI/2),pa(i,h,s,r,a)}function zh(i,t,e,n,s,r,a,o=0,c=0){let l=new Mt(new en(t,e),n);return l.rotation.set(c,o,0),l.castShadow=!1,l.receiveShadow=!0,l.position.set(s,r,a),i.add(l),l}function $c(i,t,e,n,s,r,a,o="z"){let c=new Mt(new us(t,e,10,28),n);return o==="y"?c.rotation.x=Math.PI/2:o==="x"&&(c.rotation.y=Math.PI/2),pa(i,c,s,r,a)}function Hh(i,t,e,n=.075,s=.06){let r=Math.sign(e)||1,a=s*.78;Ee(i,n*.96,a,tt.tire,t,n,e,"z",28),[-1,1].forEach(o=>$c(i,n*.8,n*.17,tt.rubber,t,n,e+o*a/2,"z")),Ee(i,n*.6,.006,tt.trim,t,n,e+r*(s/2-.004),"z",24),Ee(i,n*.56,.008,tt.chrome,t,n,e+r*(s/2),"z",24);for(let o=0;o<6;o++){let c=xt(i,n*.5,n*.11,.006,tt.alu,t,n,e+r*(s/2+.003),0);c.rotation.z=o*Math.PI/3,c.position.x=t+Math.cos(o*Math.PI/3)*n*.22,c.position.y=n+Math.sin(o*Math.PI/3)*n*.22}Ee(i,n*.17,.014,tt.chrome,t,n,e+r*(s/2+.004),"z",16)}function fi(i,t,e,n){t.forEach(s=>{Hh(i,s,e/2-.03,n),Hh(i,s,-e/2+.03,n)}),t.forEach(s=>{[-1,1].forEach(r=>Ee(i,n*1.14,.012,tt.trim,s,n*1.02,r*(e/2-.004),"z",24))})}function xs(i,t,e,n,s=.05){s*=da*(gg?.5:1),xt(i,s*1.05,.012,n*1.02,tt.trim,t,e,0,.005),xt(i,s*.85,.02,n*.46,tt.lr,t,e+.014,-n*.25,.009),xt(i,s*.85,.02,n*.46,tt.lb,t,e+.014,n*.25,.009),xt(i,s*.5,.016,n*.06,tt.chrome,t,e+.012,0,.004),i.userData.lb=[[t,e+.02,-n*.25],[t,e+.02,n*.25]]}function ma(i,t,e,n,s=.02){[-1,1].forEach(r=>{let a=r*(n/2-.055);Ee(i,s*1.25,.01,tt.chrome,t,e,a,"x",20),Ee(i,s,.012,tt.head,t+.002,e,a,"x",20),xt(i,.008,s*.7,s*1.4,tt.amber,t,e-s*1.9,a,.003)})}function di(i,t,e,n){[-1,1].forEach(s=>{let r=s*(n/2-.035);xt(i,.01,.034,.034,tt.tail,t,e,r,.006),xt(i,.01,.018,.034,tt.amber,t,e-.032,r,.004)})}function ga(i,t,e,n){[-1,1].forEach(s=>{xt(i,.01,.008,.05,tt.chrome,t,e,s*(n/2+.02),0),xt(i,.014,.05,.024,tt.trim,t-.004,e,s*(n/2+.044),.006)})}function qn(i,t,e,n,s,r,a){let o=_g(t),c=n-e,l=r-s;zh(i,c,l,o,(e+n)/2,(s+r)/2,a/2+.0025,0),zh(i,c,l,o,(e+n)/2,(s+r)/2,-a/2-.0025,Math.PI)}function Js(i,t,e,n,s,r,a=!0){let o=e-t,c=(t+e)/2;xt(i,o,s*.62,n,r,c,.07+s*.31,0,.04),xt(i,o*.86,s*.4,n*.97,r,c-o*.05,.07+s*.62+s*.18-.01,0,.045);let l=xt(i,.012,s*.32,n*.86,tt.glass,e-o*.09,.07+s*.74,0,.006);l.rotation.z=.18,[-1,1].forEach(h=>{xt(i,o*.58,s*.27,.006,tt.glass,c-o*.08,.07+s*.76,h*(n*.485+.002),.003),xt(i,.006,s*.26,.008,r,c+o*.1,.07+s*.76,h*(n*.485+.003),0),xt(i,.04,.006,.003,tt.chrome,c-o*.2,.07+s*.5,h*(n/2+.002),0)}),xt(i,.012,s*.24,n*.66,tt.grille,e+.002,.07+s*.3,0,.004),xt(i,.035,.045,n*1.01,tt.chrome,e+.012,.08,0,.018),xt(i,.01,.012,n*.3,tt.plate,e+.03,.08,0,0),ma(i,e+.004,.07+s*.32,n),ga(i,e-o*.15,.07+s*.66,n),[-1,1].forEach(h=>xt(i,o*.3,.012,.03,tt.alu,c,.06,h*(n/2+.008),.004)),a&&xs(i,c-o*.05,.07+s+.006,n*.82,o*.42)}function _a(i,t,e,n,s,r=tt.refl){xt(i,e-t,.016,s+.004,r,(t+e)/2,n,0,.004)}function kh(i,t,e,n,s,r,a){let o=(e-t)/a;for(let c=0;c<a;c++)[-1,1].forEach(l=>{xt(i,o*.9,s-n,.006,tt.roll,t+o*(c+.5),(n+s)/2,l*(r/2+.002),.003),xt(i,o*.92,.008,.01,tt.chrome,t+o*(c+.5),s+.004,l*(r/2+.004),.002)})}function Zc(i,t,e,n,s,r){for(let a=0;a<3;a++)$c(i,s,s*.28,r,t,e+a*s*.55,n,"y")}function Jc(i,t,e,n=0){[-1,1].forEach(r=>{xt(i,t,.022,.018,tt.alu,t/2-.02,n,r*e/2,.006),xt(i,t*.96,.008,.008,tt.chrome,t/2-.02,n+.018,r*e/2,0)});let s=Math.round(t/.05);for(let r=0;r<s;r++)Ee(i,.0055,e,tt.chrome,r*t/s,n,0,"z",8)}var bn={};bn.E=()=>{let i=new ae,t=.42,e=.27;Js(i,.16,.44,t,e+.03,tt.red),xt(i,.6,e-.04,t,tt.red,-.13,.07+(e-.04)/2,0,.035),kh(i,-.4,-.02,.1,.25,t,3),[-1,1].forEach(s=>{xt(i,.1,.13,.008,tt.gauge,.08,.19,s*(t/2+.002),.004),xt(i,.1,.014,.012,tt.chrome,.08,.26,s*(t/2+.005),.003),Ee(i,.014,.03,tt.chrome,.06,.12,s*(t/2+.012),"z",12),Ee(i,.014,.03,tt.yel,.1,.12,s*(t/2+.012),"z",12)}),qn(i,"door",.2,.36,.1,.22,t*.97),_a(i,-.43,.45,.085,t),xt(i,.5,.03,t*.86,tt.redD,-.14,e+.075,0,.01),Zc(i,-.25,e+.1,-.08,.045,tt.hose),Zc(i,-.25,e+.1,.08,.045,tt.hoseR),Zc(i,-.08,e+.1,0,.05,tt.hose),[-1,1].forEach(s=>xt(i,.5,.014,.014,tt.chrome,-.14,e+.12,s*t*.44,.004));let n=new ae;return n.position.set(-.38,.08+e+.07,t*.3),i.add(n),Jc(n,.42,.08,0),Ee(i,.05,.12,tt.chrome,-.43,.2,0,"z",20),Ee(i,.04,.13,tt.hoseR,-.43,.2,0,"z",20),xt(i,.05,.02,t*.95,tt.alu,-.45,.07,0,.006),di(i,-.432,.2,t),xt(i,.004,.02,.06,tt.plate,-.434,.11,0,0),fi(i,[.31,-.22,-.34],t,.072),i};bn.K=()=>{let i=new ae,t=.42,e=.25;Js(i,.24,.48,t,e+.05,tt.red),xt(i,.7,e-.06,t,tt.red,-.12,.07+(e-.06)/2,0,.035),kh(i,-.44,.2,.1,.22,t,4),qn(i,"door",.27,.42,.1,.215,t*.97),_a(i,-.47,.49,.085,t),[-1,1].forEach(r=>{xt(i,.03,.05,.05,tt.alu,.18,.06,r*(t/2+.02),.008),xt(i,.03,.05,.05,tt.alu,-.42,.06,r*(t/2+.02),.008)}),Ee(i,.085,.04,tt.alu,-.36,e+.035,0,"y",28),Ee(i,.06,.05,tt.redD,-.36,e+.07,0,"y",24);let n=new ae;n.position.set(-.36,e+.11,0),n.rotation.z=-.03,i.add(n),n.userData.ladder=1,Jc(n,.86,.2,0);let s=new ae;return s.position.set(.08,.03,0),n.add(s),Jc(s,.74,.15,0),xt(n,.12,.06,.2,tt.redD,0,-.03,0,.012),xt(n,.06,.04,.12,tt.yel,.84,.02,0,.006),Ee(n,.012,.5,tt.chrome,.4,-.015,0,"x",8),di(i,-.475,.16,t),fi(i,[.37,-.25,-.37],t,.072),i};bn.T=()=>{let i=new ae,t=.42;Js(i,.18,.44,t,.27+.03,tt.red),xt(i,.62,.06,t*.92,tt.redD,-.12,.09,0,.012),Ee(i,.135,.5,tt.chrome,-.13,.25,0,"x",40),[-1,1].forEach(n=>{let s=new Mt(new nn(.135,32,16),tt.chrome);s.scale.set(.32,1,1),pa(i,s,-.13+n*.25,.25,0)}),[-.33,-.13,.07].forEach(n=>Ee(i,.141,.022,tt.red,n,.25,0,"x",40)),xt(i,.36,.012,.07,tt.alu,-.13,.39,0,.003),[-1,1].forEach(n=>xt(i,.36,.01,.006,tt.chrome,-.13,.42,n*.05,0));for(let n=0;n<4;n++)Ee(i,.004,.03,tt.chrome,-.29+n*.105,.405,0,"y",6);return Ee(i,.03,.02,tt.alu,-.05,.395,0,"y",16),[-1,1].forEach(n=>{xt(i,.18,.05,.008,tt.roll,.06,.12,n*(t*.46+.002),.004),Ee(i,.016,.03,tt.yel,-.02,.12,n*(t*.46+.012),"z",12)}),Ee(i,.05,.1,tt.chrome,-.44,.2,0,"z",20),Ee(i,.04,.11,tt.hoseR,-.44,.2,0,"z",20),_a(i,-.43,.18,.085,t*.92),qn(i,"door",.21,.37,.1,.22,t*.97),di(i,-.432,.14,t*.92),fi(i,[.31,-.23,-.35],t,.072),i};bn.A=()=>{let i=new ae,t=.4,e=.31;return Js(i,.2,.43,t,e*.78,tt.white,!1),xt(i,.6,e-.04,t,tt.white,-.1,.07+(e-.04)/2,0,.045),qn(i,"amb",-.4,.2,.07,.33,t),[-1,1].forEach(n=>xt(i,.08,.06,.006,tt.glass,-.03,.25,n*(t/2+.002),.006)),xt(i,.006,.1,.12,tt.glass,-.403,.24,0,.004),xt(i,.006,.24,.004,tt.trim,-.403,.17,0,0),xs(i,.31,e*.78+.07+.006,t*.8,.06),[-1,1].forEach(n=>{xt(i,.03,.025,.03,n>0?tt.lb:tt.lr,-.38,e+.08,n*(t/2-.03),.008),xt(i,.03,.025,.03,n>0?tt.lr:tt.lb,.18,e+.08,n*(t/2-.03),.008)}),xt(i,.5,.012,.06,tt.alu,-.1,e+.075,0,.004),xt(i,.05,.02,t*.95,tt.alu,-.405,.07,0,.006),di(i,-.405,.16,t),fi(i,[.3,-.26],t,.066),i};bn.V=()=>{let i=new ae,t=.38,e=.28;xt(i,.68,e-.06,t,tt.orange,0,.06+(e-.06)/2,0,.06);let n=xt(i,.012,.1,t*.86,tt.glass,.3,.2,0,.004);n.rotation.z=.35,[-1,1].forEach(s=>xt(i,.2,.08,.006,tt.glass,.18,.21,s*(t/2+.002),.003)),qn(i,"van",-.33,.33,.06,.2,t),xt(i,.012,.05,t*.5,tt.grille,.342,.11,0,.004),ma(i,.342,.14,t,.016),xt(i,.03,.04,t*1.01,tt.trim,.35,.07,0,.015),xs(i,.18,e+.006,t*.8,.05),di(i,-.343,.15,t),[-1,1].forEach(s=>xt(i,.36,.008,.008,tt.chrome,-.08,e+.025,s*t*.38,0));for(let s=0;s<5;s++)xt(i,.008,.008,t*.76,tt.chrome,-.24+s*.08,e+.025,0,0);return ga(i,.24,.2,t),fi(i,[.22,-.22],t,.062),i};bn.P=()=>{let i=new ae,t=.34;return Gh(i,t,tt.white,tt.navy),qn(i,"police",-.3,.3,.07,.17,t),xs(i,-.03,.255,t*.82,.05),xt(i,.02,.06,t*.7,tt.trim,.34,.09,0,.01),i};bn.C=()=>{let i=new ae,t=.36;xt(i,.66,.13,t,tt.red,0,.12,0,.05);let e=xt(i,.42,.11,t*.9,tt.red,-.05,.235,0,.04),n=xt(i,.012,.09,t*.8,tt.glass,.17,.23,0,.004);return n.rotation.z=.4,xt(i,.012,.08,t*.78,tt.glass,-.262,.23,0,.004),[-1,1].forEach(s=>{xt(i,.36,.075,.006,tt.glass,-.05,.235,s*(t*.45+.002),.003),xt(i,.006,.075,.008,tt.red,-.05,.235,s*(t*.45+.003),0)}),qn(i,"chief",-.32,.32,.06,.18,t),xt(i,.012,.05,t*.5,tt.grille,.332,.12,0,.004),ma(i,.333,.14,t,.016),xt(i,.03,.035,t*1.01,tt.chrome,.34,.075,0,.014),xs(i,-.02,.295,t*.8,.045),xt(i,.22,.01,t*.84,tt.trim,-.1,.293,0,.003),[-1,1].forEach(s=>xt(i,.3,.008,.008,tt.chrome,-.06,.3,s*t*.38,0)),ga(i,.15,.2,t),di(i,-.333,.15,t),fi(i,[.21,-.21],t,.065),i};bn.W=()=>{let i=new ae,t=.4,e=.26;Js(i,-.08,.2,t,e,tt.yel),xt(i,.1,.06,t*.6,tt.grey,.25,.09,0,.01),xt(i,.32,.06,t*.9,tt.alu,-.24,.1,0,.02),qn(i,"tow",-.08,.2,.06,.14,t);let n=new ae;n.position.set(-.3,.13,0),n.rotation.z=.5,i.add(n),xt(n,.3,.04,.06,tt.yel,.12,0,0,.01),xt(n,.24,.03,.045,tt.alu,.2,.02,0,.008),Ee(i,.03,.08,tt.chrome,-.3,.14,0,"z",16);let s=Ee(i,.004,.12,tt.trim,-.04,.2,0,"y",6);return $c(i,.015,.004,tt.chrome,-.04,.13,0,"z"),xt(i,.06,.02,t*.8,tt.trim,-.41,.07,0,.006),_a(i,-.4,-.08,.1,t*.9,tt.grey),di(i,-.405,.13,t*.9),xs(i,.06,e+.07+.006,t*.8,.05),fi(i,[.13,-.27],t,.07),i};function Gh(i,t,e,n){xt(i,.66,.1,t,e,0,.11,0,.045),xt(i,.6,.03,t*.98,e,0,.165,0,.012);let s=xt(i,.34,.085,t*.86,n||e,-.03,.215,0,.04),r=xt(i,.012,.075,t*.76,tt.glass,.15,.21,0,.004);r.rotation.z=.55;let a=xt(i,.012,.07,t*.76,tt.glass,-.21,.21,0,.004);a.rotation.z=-.5,[-1,1].forEach(o=>{xt(i,.28,.058,.006,tt.glass,-.03,.215,o*(t*.43+.002),.003),xt(i,.006,.058,.008,n||e,-.03,.215,o*(t*.43+.003),0),xt(i,.03,.006,.003,tt.chrome,.02,.14,o*(t/2+.002),0),xt(i,.03,.006,.003,tt.chrome,-.1,.14,o*(t/2+.002),0)}),xt(i,.012,.04,t*.45,tt.grille,.332,.11,0,.004),ma(i,.331,.125,t,.015),xt(i,.02,.03,t*1,tt.chrome,.336,.075,0,.012),xt(i,.02,.03,t*1,tt.chrome,-.336,.075,0,.012),xt(i,.004,.018,.06,tt.plate,.347,.08,0,0),xt(i,.004,.018,.06,tt.plate,-.347,.09,0,0),di(i,-.332,.12,t),ga(i,.1,.17,t),fi(i,[.21,-.21],t,.058)}function Kc(i){let t=new ae,e=.34,n=Xn(i,{roughness:.25,metalness:.25});return Gh(t,e,n),qn(t,"car",-.3,.3,.07,.17,e),t}function Vh(){let i=new ae;xt(i,.24,.02,.24,tt.black,0,.01,0,.02);let t=new Mt(new li(.09,.32,28),tt.cone);t.position.y=.18,t.castShadow=!0,i.add(t);let e=new Mt(new qe(.052,.068,.06,28,1,!0),Ue(16777215,{emissive:3355443}));return e.position.y=.17,i.add(e),i}function Wh(){let i=new ae;[-1,1].forEach(s=>{xt(i,.04,.22,.04,tt.alu,0,.11,s*.32,.01),xt(i,.2,.02,.05,tt.grey,0,.01,s*.32,.005)});let t=document.createElement("canvas");t.width=256,t.height=32;let e=t.getContext("2d");for(let s=0;s<8;s++)e.fillStyle=s%2?"#fff":"#e01818",e.beginPath(),e.moveTo(s*32,0),e.lineTo(s*32+32,0),e.lineTo(s*32+16,32),e.lineTo(s*32-16,32),e.fill();let n=new sn(t);return n.colorSpace=Ie,xt(i,.04,.08,.76,new Ae({map:n,roughness:.4}),0,.2,0,0),xt(i,.012,.012,.012,tt.lr,0,.27,-.32,0),xt(i,.012,.012,.012,tt.lr,0,.27,.32,0),i}function Xh(){let i=new ae,t=Xn(14161944,{roughness:.35});Ee(i,.065,.2,t,0,.12,0,"y"),Ee(i,.08,.03,t,0,.02,0,"y");let e=new Mt(new nn(.068,24,12,0,Math.PI*2,0,Math.PI/2),t);return e.position.y=.22,i.add(e),Ee(i,.02,.03,tt.chrome,0,.29,0,"y"),Ee(i,.03,.2,tt.chrome,0,.15,0,"x"),Ee(i,.035,.05,tt.chrome,0,.15,.07,"z"),i}function Qc(i){xg(i)}var qh=Math.PI*2,ys=(i,t,e)=>Math.max(t,Math.min(e,i)),jc=(i,t,e)=>i+(t-i)*e,vg=new URLSearchParams(location.search),Ne=window.R3={ok:!1,lost:!1,frames:0,ms:0};function Mg(){if(vg.get("r")==="2d"||window.SAVE&&SAVE.r2d)return Rn("2D renderer forced");let i;try{i=new qr({antialias:!0,alpha:!0,powerPreference:"high-performance",premultipliedAlpha:!0,stencil:!1})}catch(M){return Rn("WebGL unavailable \u2192 2D",M&&M.message)}if(!i.getContext())return;i.setPixelRatio(1),i.outputColorSpace=Ie,i.toneMapping=Uc,i.toneMappingExposure=1,i.shadowMap.enabled=!0,i.shadowMap.type=Dc,i.autoClear=!1;let t=i.domElement;t.addEventListener("webglcontextlost",M=>{M.preventDefault(),Ne.lost=!0,Rn("context lost \u2192 2D fallback")}),t.addEventListener("webglcontextrestored",()=>{Ne.lost=!1,Rn("context restored")}),Ne.R=i,Ne.ok=!0;let n=new ls(i).fromScene(new ha,.04).texture,s=()=>!(SAVE.gfx==="low"||SAVE.gfx==="auto"&&window.V2&&V2.lowAuto);function r(M,b){let C=new _t;i.getSize(C),(C.x<M||C.y<b)&&i.setSize(Math.max(C.x,M,8),Math.max(C.y,b,8),!1)}function a(M,b){r(M,b),i.setViewport(0,0,M,b),i.setScissor(0,0,M,b),i.setScissorTest(!0),i.setClearColor(0,0),i.clear(!0,!0,!0)}function o(M,b,C,N,F,z,J){M.drawImage(t,0,t.height-C,b,C,N,F,z,J)}let c=()=>s()?Math.min(DPR,Ne.prCap||2):Math.min(DPR,1.1);function l(M,b=128){let C=document.createElement("canvas");C.width=C.height=b;let N=C.getContext("2d"),F=N.createRadialGradient(b/2,b/2,0,b/2,b/2,b/2);M.forEach(([J,K])=>F.addColorStop(J,K)),N.fillStyle=F,N.fillRect(0,0,b,b);let z=new sn(C);return z.colorSpace=Ie,z}let h=l([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,.55)"],[1,"rgba(255,255,255,0)"]]),u=l([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,.4)"],[1,"rgba(255,255,255,0)"]],64),f=(()=>{let b=document.createElement("canvas");b.width=b.height=128;let C=b.getContext("2d");for(let F=0;F<26;F++){let z=64+(Math.random()-.5)*128*.45,J=128/2+(Math.random()-.5)*128*.45,K=128*(.12+Math.random()*.2),nt=C.createRadialGradient(z,J,0,z,J,K);nt.addColorStop(0,"rgba(255,255,255,.35)"),nt.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=nt,C.fillRect(0,0,128,128)}let N=new sn(b);return N.colorSpace=Ie,N})(),d=(M,b=1)=>new Ti({map:h,color:M,blending:zn,depthWrite:!1,transparent:!0,opacity:b,toneMapped:!1}),g=[null,1913976,1732148,14065688],y=new Map,p=new Map;function m(M){try{return/^[EKT]$/.test(M)&&SAVE.v3?SAVE.v3.skin|0:0}catch{return 0}}function A(M){M.updateMatrixWorld(!0);let b=new Se().copy(M.matrixWorld).invert(),C=new Map;M.traverse(F=>{if(!F.isMesh)return;let z=F.geometry.index?F.geometry.toNonIndexed():F.geometry.clone();z.applyMatrix4(new Se().multiplyMatrices(b,F.matrixWorld));for(let K of Object.keys(z.attributes))["position","normal","uv"].includes(K)||z.deleteAttribute(K);z.attributes.uv||z.setAttribute("uv",new He(new Float32Array(z.attributes.position.count*2),2));let J=F.material;C.has(J)||C.set(J,[]),C.get(J).push(z)});let N=new ae;return C.forEach((F,z)=>{let J=new Mt(Oh(F,!1),z);J.castShadow=!0,J.receiveShadow=!0,N.add(J),F.forEach(K=>K.dispose())}),N}function S(M,b,C,N){Qc(C);let F=b();F.traverse(pt=>{if(!pt.isMesh)return;let rt=pt.material,At=C+"|"+N+"|"+rt.uuid,St=p.get(At);St||(St=rt.clone(),St.envMap=null,N&&rt===tt.red&&C<3&&St.color.setHex(g[N]),rt===tt.lr&&(St.name="lr"),rt===tt.lb&&(St.name="lb"),p.set(At,St)),pt.material=St});let z=F.userData.lb||[],J=null,K=null;F.traverse(pt=>{pt.userData&&pt.userData.ladder&&(J=pt)}),J&&(K={p:J.position.clone(),r:J.rotation.clone()},F.remove(J));let nt=A(F);if(J){J.position.set(0,0,0),J.rotation.set(0,0,0);let pt=A(J);pt.position.copy(K.p),pt.rotation.copy(K.r),pt.userData.ladder=1,nt.add(pt),nt.userData.lad=pt}let at=new Gn().setFromObject(nt);return nt.userData={...nt.userData,lb:z,bb:at,L:at.max.x-at.min.x,Wd:at.max.z-at.min.z,cx:(at.max.x+at.min.x)/2,cz:(at.max.z+at.min.z)/2},Qc(0),nt}function T(M,b){let C="EKTA".includes(M),N=C?m(M):0,F=M+(C?b:"")+"|"+N,z=y.get(F);if(z)return z;let J;return bn[M]?J=bn[M]:M.startsWith("car")?J=()=>Kc(+M.slice(3)):J={cone:Vh,bar:Wh,hyd:Xh}[M],z=S(F,J,C?b:0,N),y.set(F,z),z}function k(M){let b="sed"+M,C=y.get(b);return C||(C=S(b,()=>Kc(M),0,0),y.set(b,C)),C}function L(M,b){let C=new ae,N=new ae,F=M.clone();C.add(N),N.add(F);let z=M.userData;if(b){let at=Math.min(b[0]/z.L,b[1]/z.Wd);F.scale.setScalar(at),F.position.set(-z.cx*at,0,-z.cz*at),C.userData.f=at}else C.userData.f=1;let J=[],K=[];F.traverse(at=>{at.isMesh&&(at.material.name==="lr"||at.material.name==="lb")&&(at.material=at.material.clone(),(at.material.name==="lr"?J:K).push(at.material))}),C.userData.lr=J,C.userData.lb=K,C.userData.yaw=N,C.userData.body=F;let nt=[];return(z.lb||[]).forEach((at,pt)=>{let rt=new Wn(d(pt?3828991:16722458,0));rt.position.set(at[0],at[1]+.02,at[2]),rt.scale.setScalar(.34),rt.visible=!1,F.add(rt),nt.push(rt)}),C.userData.glows=nt,z.lad&&(C.userData.lad=F.children.find(at=>at.userData.ladder)),C}function D(M,b,C,N=0){let F=Math.sin(C*14+N)>0;M.userData.lr.forEach(z=>z.emissiveIntensity=b?F?5:.25:.5),M.userData.lb.forEach(z=>z.emissiveIntensity=b?F?.25:6:.5),M.userData.glows.forEach((z,J)=>{z.visible=b,z.material.opacity=b?(J?!F:F)?1:.08:0})}let P={scene:new ci,cam:new ze(30,1,.5,80),objs:new Map,key:null,tex:null};{let M=P.scene;M.environment=n,M.environmentIntensity=.45,P.hemi=new ds(13162239,2764342,.75),M.add(P.hemi);let b=P.key=new hi(16773340,2.4);b.position.set(-6,8,-2.5),b.castShadow=!0,b.shadow.mapSize.set(1024,1024),b.shadow.bias=-6e-4,b.shadow.normalBias=.02,b.shadow.radius=4,M.add(b),M.add(b.target),P.fireL=new hi(16742954,0),P.fireL.position.set(0,4,-8),M.add(P.fireL);let C=new Ae({color:12105916,roughness:.38,metalness:.2,transparent:!0,envMapIntensity:.7});P.apron=new Mt(new en(80,80),new Ae({color:2764084,roughness:.9})),P.apron.rotation.x=-Math.PI/2,P.apron.position.y=-.02,P.apron.receiveShadow=!0,M.add(P.apron),P.ground=new Mt(new en(1,1),C),P.ground.rotation.x=-Math.PI/2,P.ground.receiveShadow=!0,M.add(P.ground),P.ring=new Mt(new ea(.42,.52,40),new Xe({color:16769610,transparent:!0,toneMapped:!1,depthWrite:!1})),P.ring.rotation.x=-Math.PI/2,P.ring.position.y=.015,M.add(P.ring);let N=new Ai;N.moveTo(.08,0),N.lineTo(-.05,-.075),N.lineTo(-.05,.075),N.closePath(),P.arrowGeo=new na(N),P.arrowGeo.rotateX(-Math.PI/2),P.arrowMat=new Xe({color:16777215,transparent:!0,opacity:.75,toneMapped:!1,depthWrite:!1}),P.headTex=(()=>{let F=document.createElement("canvas");F.width=128,F.height=64;let z=F.getContext("2d"),J=z.createLinearGradient(0,0,128,0);J.addColorStop(0,"rgba(255,240,200,.55)"),J.addColorStop(1,"rgba(255,240,200,0)"),z.fillStyle=J,z.beginPath(),z.moveTo(0,26),z.lineTo(128,0),z.lineTo(128,64),z.lineTo(0,38),z.fill();let K=new sn(F);return K.colorSpace=Ie,K})(),P.headMat=new Xe({map:P.headTex,transparent:!0,blending:zn,depthWrite:!1,toneMapped:!1}),P.poolMat=new Xe({map:u,transparent:!0,blending:zn,depthWrite:!1,toneMapped:!1}),P.root=new ae,M.add(P.root)}function ft(){let M=new ae,b=new Ae({color:3817030,metalness:.7,roughness:.35}),C=new Mt(new qe(.035,.05,1.1,10),b);C.position.y=.55,C.castShadow=!0,M.add(C);let N=new Mt(new Te(.32,.04,.05),b);N.position.set(.14,1.08,0),M.add(N);let F=new Mt(new nn(.06,12,8),new Xe({color:16773312,toneMapped:!1}));F.position.set(.28,1.04,0),M.add(F);let z=new Wn(d(16767120,.55));z.scale.setScalar(.45),z.position.copy(F.position),M.add(z);let J=new Mt(new en(1.6,1.6),P.poolMat.clone());return J.material.color.setHex(9071152),J.rotation.x=-Math.PI/2,J.position.set(.28,.01,0),M.add(J),M}function _(){let M=G.L;P.key2=G,P.L=M,P.root.clear(),P.objs.clear();let b=BOARD;P.board=b,P.tex&&P.tex.dispose(),P.tex=new sn(b.c),P.tex.colorSpace=Ie,P.tex.anisotropy=4,P.ground.material.map=P.tex,P.ground.material.needsUpdate=!0;let C=G.cs,N=b.w/C,F=b.h/C;P.ground.scale.set(N,F,1),P.ground.position.set((b.ox+b.w/2-G.bx)/C-M.w/2,0,(b.oy+b.h/2-G.by)/C-M.h/2),P.reg={w:N,h:F,cx:P.ground.position.x,cz:P.ground.position.z};let z=P.key.shadow.camera,J=Math.max(M.w,M.h)/2+1.5;Object.assign(z,{left:-J,right:J,top:J,bottom:-J,near:1,far:30}),z.updateProjectionMatrix();let K=M.w/2+.55,nt=M.h/2+.55;[[-K,-nt,0],[K,-nt,Math.PI],[-K,nt,0],[K,nt,Math.PI]].forEach(([at,pt,rt])=>{let At=ft();At.position.set(at,0,pt),At.rotation.y=rt+(pt<0?-.6:.6)*(rt?-1:1),P.root.add(At)}),P.shadowDirty=3}let w=(M,b)=>[M+.5-P.L.w/2,b+.5-P.L.h/2];function Q(M,b){let C=P.objs.get(M);return C||(C=b(),C.userData.id=M,P.objs.set(M,C),P.root.add(C)),C.userData.seen=P.frame,C}let $=[.9,.66];function j(M){return Q("v"+M.v.id+"_"+ct(M.v.type)+"_"+m(M.v.type),()=>{let b=L(T(M.v.type,ct(M.v.type)),$),C=new Mt(new en(1.3,.7),P.headMat);C.rotation.x=-Math.PI/2,C.position.set(1.05,.012,0),C.visible=!1,b.userData.yaw.add(C),b.userData.hl=C;let N=new Mt(P.arrowGeo,P.arrowMat);return N.position.y=.02,P.root.add(N),b.userData.arrow=N,b.userData.prevAng=M.ang,b.userData.roll=0,b})}function ct(M){try{return"EKTA".includes(M)&&SAVE.v3.fleet[M]||0}catch{return 0}}function Z(M,b,C){return Q(M,()=>L(T(b,0),C))}function yt(M){return Q(M,()=>{let b=new ae,C=new Ae({color:4869978,metalness:.6,roughness:.4}),N=new Mt(new Te(.14,.32,.14),C);N.position.set(-.38,.16,0),N.castShadow=!0,b.add(N);let F=new ae;F.position.set(-.38,.28,0),b.add(F);let z=document.createElement("canvas");z.width=128,z.height=16;let J=z.getContext("2d");for(let pt=0;pt<8;pt++)J.fillStyle=pt%2?"#fff":"#e01818",J.fillRect(pt*16,0,16,16);let K=new sn(z);K.colorSpace=Ie;let nt=new Mt(new Te(.86,.06,.06),new Ae({map:K,roughness:.4}));nt.position.x=.43,nt.castShadow=!0,F.add(nt),b.userData.arm=F;let at=new Mt(new nn(.035,8,6),new Xe({color:16724e3,toneMapped:!1}));return at.position.set(-.38,.34,0),b.add(at),b})}function et(M){return Q(M,()=>{let b=new ae,C=new Mt(new qe(.3,.34,.06,28),new Ae({color:2764083,metalness:.5,roughness:.5}));C.position.y=.03,C.receiveShadow=!0,b.add(C);let N=new Mt(new qe(.2,.22,.08,28),new Ae({color:16761370,emissive:6702080,roughness:.3}));N.position.y=.09,b.add(N),b.userData.btn=N;let F=new Wn(d(16765503,0));return F.scale.setScalar(.9),F.position.y=.15,b.add(F),b.userData.gl=F,b})}let Dt=32*Math.PI/180,Ct=new U,Ut=()=>G&&G.view||BOARD;function fe(M,b,C,N){let F=b.w/2+.12,z=b.h/2+.2,J=Math.max(F,z*1.15)*4+4;M.position.set(Math.sin(N)*Math.sin(C)*J,Math.cos(C)*J,Math.cos(N)*Math.sin(C)*J),M.up.set(0,1,0),M.lookAt(0,0,0),M.updateMatrixWorld();let K=1e9,nt=-1e9,at=1e9,pt=-1e9,rt=M.matrixWorldInverse;for(let At of[-1,1])for(let St of[-1,1])for(let Zt of[0,.42]){Ct.set(At*F,Zt,St*z).applyMatrix4(rt);let $t=-Ct.z,lt=Ct.x/$t,Rt=Ct.y/$t;K=Math.min(K,lt),nt=Math.max(nt,lt),at=Math.min(at,Rt),pt=Math.max(pt,Rt)}return{x0:K,x1:nt,y0:at,y1:pt,D:J}}let me=new ze;window.R3boardRatio=function(M){let b=fe(me,M,Dt,0);return(b.y1-b.y0)/(b.x1-b.x0)};function st(){let M=P.L,b=P.cam,C=Ut(),N=C.w/C.h,F=Dt,z=0;if(G.state==="win"){let $t=ys(G.winT/1.6,0,1),lt=$t*$t*(3-2*$t);F=Dt+lt*.1,z=G.winT*.1*lt}let{x0:J,x1:K,y0:nt,y1:at,D:pt}=fe(b,M,F,z),rt=K-J,At=at-nt;if(rt/At<N){let $t=At*N;J-=($t-rt)/2,K=J+$t}else{let $t=rt/N;nt=at-$t}let St=pt*.3,Zt=pt*3;b.near=St,b.far=Zt,b.aspect=N,b.projectionMatrix.makePerspective(J*St,K*St,at*St,nt*St,St,Zt),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),P.camOK=!0}let mt=[3108822,14721056,3842138,13123690,9067216,14708784,4894920];function zt(M){return Q("pp"+M,()=>{let b=new ae,C=new Mt(new jr(.09,.18,4,10),new Ae({color:mt[M%mt.length],roughness:.7}));C.position.y=.2,C.castShadow=!0,b.add(C);let N=new Mt(new nn(.075,12,10),new Ae({color:[1578e4,13144160,9067066][M%3],roughness:.6}));return N.position.y=.42,N.castShadow=!0,b.add(N),b})}function Pt(M){let b=P.L,C=Ut(),N=b.h/2,F=b.w/2,z=N+.45,J=0,K=Math.max(1.2,(b.w+2)/6);for(let nt=-F-.4;nt<=F+.4;nt+=K,J++){let at=z+.2+J*37%3*.08;(J%3===0?Z("dh"+J,"hyd",[.5,.5]):Z("dc"+J,"cone",[.45,.45])).position.set(nt,0,at)}for(let nt=0;nt<Math.max(6,b.w+3);nt++){let at=zt(nt),pt=-F+nt*.61803%1*b.w*1.05,rt=z+.55+nt*7%3*.2;at.position.set(pt,Math.abs(Math.sin(M*3+nt*1.7))*.05,rt),at.rotation.y=Math.PI+Math.sin(nt)*.4}}let jt=new ra,Qt=new _t,re=new vn(new U(0,1,0),-.12),oe=new U;window.pickCell=function(M,b){if(!le()||!P.camOK||!G||P.key2!==G)return null;let C=Ut();if(Qt.set((M-C.ox)/C.w*2-1,-((b-C.oy)/C.h*2-1)),jt.setFromCamera(Qt,P.cam),!jt.ray.intersectPlane(re,oe))return null;let N=oe.x+P.L.w/2-.5,F=oe.z+P.L.h/2-.5,z=Math.round(N),J=Math.round(F);if(G.st.occ[z+","+J])return[z,J];let K=null,nt=.75;for(let at=-1;at<=1;at++)for(let pt=-1;pt<=1;pt++){let rt=z+at+","+(J+pt);if(!G.st.occ[rt])continue;let At=Math.hypot(N-z-at,F-J-pt);At<nt&&(nt=At,K=[z+at,J+pt])}return K||[z,J]};let ht=window.cellXY;window.cellXY=function(M,b){if(!le()||!P.camOK||!G||P.key2!==G)return ht(M,b);Ct.set(M+.5-P.L.w/2,.15,b+.5-P.L.h/2).project(P.cam);let C=Ut();return[C.ox+(Ct.x+1)/2*C.w,C.oy+(1-Ct.y)/2*C.h]};function I(){let M=performance.now();(P.key2!==G||P.board!==BOARD)&&_(),P.frame=(P.frame||0)+1;let b=G.t,C=G.cs,N=s();P.key.castShadow=N;let F=P.shadowDirty>0;P.shadowDirty>0&&P.shadowDirty--;let z=G.state==="win"?0:ys(G.fire/G.fireMax,0,1.3);P.fireL.intensity=z*(1.1+.25*Math.sin(b*9)+.1*Math.sin(b*23));for(let rt of Object.values(G.vv)){if(rt.done||rt.scale<=0)continue;let At=j(rt),[St,Zt]=w(rt.px,rt.py),$t=rt.segs.length>0,lt=At.userData,Rt=angDiff(lt.prevAng,rt.ang);lt.prevAng=rt.ang,lt.roll=jc(lt.roll,ys(Rt*6,-.12,.12),.25),($t||Math.abs(Rt)>1e-4||rt.scale<1||Math.abs(rt.sq)>.01||(rt.wob||0)>.01)&&(F=!0);let Vt=E.back?E.back(ys(rt.scale,0,1)):rt.scale;At.position.set(St,$t?Math.abs(Math.sin(b*22+rt.v.id))*.012:0,Zt),At.rotation.y=-rt.ang,At.scale.set(Vt*(1+rt.sq*.5),Vt*(1-rt.sq),Vt*(1+rt.sq*.3)),lt.yaw.rotation.x=lt.roll+(rt.wob?Math.sin(b*40)*rt.wob*.3:0),lt.yaw.rotation.z=$t?-.025:0,D(At,!!rt.siren,b,rt.v.id),lt.hl.visible=!!rt.siren&&N;let Jt=!$t&&rt.scale>=1&&!(G.hint&&G.hint.id===rt.v.id)&&G.state==="play";if(lt.arrow.visible=Jt,Jt){let[de,ot]=FL.DIRS[rt.v.d];lt.arrow.position.set(St+de*.5,.02,Zt+ot*.5),lt.arrow.rotation.y=-ANG[rt.v.d],lt.arrow.material.opacity=.55+.2*Math.sin(b*4)}lt.arrow.userData.seen=P.frame}G.st.blk.forEach(rt=>{let At=rt.x+","+rt.y,St=G.blkJ[At]||0;if(rt.sub==="#"){let Zt=G.cars[At];if(!Zt||Zt.done)return;let $t=parseInt((Zt.col&&Zt.col[1]||"#4a8fd6").slice(1),16),lt=Q("c"+At+"_"+$t,()=>L(k($t),$)),[Rt,Vt]=w(Zt.px,Zt.py);lt.position.set(Rt+Math.sin(St*40)*.05*St,0,Vt),lt.rotation.y=-Zt.ang,(Zt.attached||St>0)&&(F=!0)}else if(!rt.gone){let Zt=Z("b"+At,rt.sub==="x"?"bar":"cone",rt.sub==="x"?[.8,.8]:[.62,.62]),[$t,lt]=w(rt.x,rt.y);Zt.position.set($t+Math.sin(St*40)*.06*St,0,lt),rt.sub==="x"&&(Zt.rotation.y=Math.PI/2*((rt.x+rt.y)%2)),St>0&&(F=!0)}}),G.st.hyd.forEach((rt,At)=>{if(G.hydVis[At].gone)return;let St=Z("h"+At,"hyd",[.55,.55]),[Zt,$t]=w(rt.x,rt.y);St.position.set(Zt,0,$t)}),G.st.sw.forEach((rt,At)=>{let St=et("s"+At),[Zt,$t]=w(rt.x,rt.y);St.position.set(Zt,0,$t);let lt=G.gateA>0;St.userData.btn.position.y=lt?.06:.09,St.userData.gl.material.opacity=lt?.2:.35+.25*Math.sin(b*5)}),G.st.gates.forEach((rt,At)=>{let St=yt("g"+At),[Zt,$t]=w(rt.x,rt.y);St.position.set(Zt,0,$t),St.userData.arm.rotation.z=G.gateA*1.35,G.gateA>0&&G.gateA<1&&(F=!0)});let J=G.hint&&G.st.veh[G.hint.id];if(P.ring.visible=!!(J&&!J.gone),P.ring.visible){let[rt,At]=w(J.x,J.y),St=.5+.5*Math.sin(G.hint.t*6);P.ring.position.set(rt,.015,At),P.ring.scale.setScalar(1+St*.12),P.ring.material.opacity=.5+St*.5}Pt(b);for(let[rt,At]of P.objs)At.userData.seen!==P.frame&&(P.root.remove(At),At.userData.arrow&&P.root.remove(At.userData.arrow),P.objs.delete(rt),F=!0);G.state==="win"&&(F=!0),i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=N&&F,st();let K=Ut(),nt=c(),at=Math.round(K.w*nt),pt=Math.round(K.h*nt);a(at,pt),i.render(P.scene,P.cam),o(cx,at,pt,K.ox,K.oy,K.w,K.h),Ne.ms=jc(Ne.ms,performance.now()-M,.1)}let Et={1:{sky:["#0b1430","#2a3f6e"],fog:1713216,amb:8425664,ambI:.9,key:10466559,keyI:1.2,keyP:[-6,10,8],build:"apt"},2:{sky:["#2a1438","#c8604a"],fog:4859968,amb:16756880,ambI:1,key:16752752,keyI:1.6,keyP:[-10,5,6],build:"market"},3:{sky:["#2a3038","#6a6058"],fog:3817544,amb:13160668,ambI:1.2,key:15265008,keyI:1.4,keyP:[6,10,6],build:"factory"},4:{sky:["#3a1a10","#ff9a40"],fog:6961696,amb:16760976,ambI:1,key:16756832,keyI:2,keyP:[-10,4,4],build:"cabin"},5:{sky:["#05070e","#1a2236"],fog:658968,amb:6320288,ambI:.8,key:8425664,keyI:.9,keyP:[5,10,8],build:"tower"}},W={ch:0},gt="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",wt=`uniform float t,seed,amp;varying vec2 vUv;
 float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
 float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p*=2.03;a*=.5;}return v;}
 void main(){vec2 uv=vUv;float y=uv.y;float x=(uv.x-.5)*2.;
  float nz=fbm(vec2(uv.x*3.2+seed,y*2.6-t*2.4));float nz2=fbm(vec2(uv.x*6.+seed*2.,y*5.-t*4.));
  float w=mix(.95,.05,pow(y,.8));float d=abs(x+(nz-.5)*.9*y);
  float shape=1.-smoothstep(w*.45,w,d);float body=shape*smoothstep(1.02,.2,y+(nz2-.5)*.55)*smoothstep(0.,.1,y);
  float core=1.-smoothstep(0.,.55,d/w+y*.9);
  vec3 c=mix(vec3(1.,.55,.12),vec3(1.,.95,.7),core);c=mix(c,vec3(.75,.12,.02),smoothstep(.45,.95,y));
  float a=body*amp;gl_FragColor=vec4(c*a*1.5,a);}`;function Xt(M){return new dn({uniforms:{t:{value:0},seed:{value:M},amp:{value:1}},vertexShader:gt,fragmentShader:wt,transparent:!0,depthWrite:!1,blending:zn})}function Nt(M,b){let C=document.createElement("canvas");C.width=4,C.height=256;let N=C.getContext("2d"),F=N.createLinearGradient(0,0,0,256);F.addColorStop(0,M),F.addColorStop(1,b),N.fillStyle=F,N.fillRect(0,0,4,256);let z=new sn(C);return z.colorSpace=Ie,z}function R(M,b,C){let N=document.createElement("canvas"),F=64;N.width=Math.round(M*F/4)*4,N.height=Math.round(b*F/4)*4;let z=N.getContext("2d");if(z.fillStyle=C.wall,z.fillRect(0,0,N.width,N.height),C.brick){z.globalAlpha=.18;for(let lt=0;lt<N.height;lt+=6)for(let Rt=lt/6%2*8;Rt<N.width;Rt+=16)z.fillStyle=Math.random()<.5?"#000":"#fff",z.fillRect(Rt,lt,15,5);z.globalAlpha=1}if(C.logs)for(let lt=0;lt<N.height;lt+=14){let Rt=z.createLinearGradient(0,lt,0,lt+14);Rt.addColorStop(0,"#8a5a32"),Rt.addColorStop(.5,"#6a4024"),Rt.addColorStop(1,"#3a2210"),z.fillStyle=Rt,z.fillRect(0,lt,N.width,14)}if(C.panels){z.strokeStyle="rgba(0,0,0,.25)",z.lineWidth=2;for(let lt=0;lt<N.width;lt+=12)z.beginPath(),z.moveTo(lt,0),z.lineTo(lt,N.height),z.stroke()}let J=C.cols,K=C.rows,nt=N.width/J,at=N.height/K,pt=[];for(let lt=0;lt<K;lt++)for(let Rt=0;Rt<J;Rt++){if(C.door&&lt===K-1&&Rt===Math.floor(J/2))continue;let Vt=Rt*nt+nt*C.mx,Jt=lt*at+at*C.my,de=nt*(1-2*C.mx),ot=at*(1-2*C.my);z.fillStyle=C.frame||"#d8d0c0",z.fillRect(Vt-2,Jt-2,de+4,ot+4);let Bt=Math.random()<(C.lit||.35);z.fillStyle=Bt?"#ffcf7a":C.glass||"#1a2230",z.fillRect(Vt,Jt,de,ot),Bt&&pt.push([Vt,Jt,de,ot]),C.sill&&(z.fillStyle="rgba(255,255,255,.35)",z.fillRect(Vt-3,Jt+ot+1,de+6,3)),C.noMul||(z.fillStyle="rgba(0,0,0,.35)",z.fillRect(Vt+de/2-1,Jt,2,ot))}if(C.door){let lt=Math.floor(J/2),Rt=K-1;z.fillStyle="#3a2416",z.fillRect(lt*nt+nt*.25,Rt*at+at*.2,nt*.5,at*.8),z.fillStyle="#ffcf7a",z.fillRect(lt*nt+nt*.3,Rt*at+at*.25,nt*.4,at*.15)}let rt=new sn(N);rt.colorSpace=Ie,rt.anisotropy=4;let At=document.createElement("canvas");At.width=N.width,At.height=N.height;let St=At.getContext("2d");St.fillStyle="#000",St.fillRect(0,0,At.width,At.height),St.fillStyle="#ffb050",pt.forEach(([lt,Rt,Vt,Jt])=>St.fillRect(lt,Rt,Vt,Jt));let Zt=new sn(At);Zt.colorSpace=Ie;let $t=[];for(let lt=0;lt<K;lt++)for(let Rt=0;Rt<J;Rt++)$t.push([(Rt+.5)/J*M-M/2,b-(lt+C.my+.45*(1-2*C.my))/K*b]);return{mat:new Ae({map:rt,emissiveMap:Zt,emissive:16777215,emissiveIntensity:.55,roughness:.85}),anchors:$t}}function x(M,b,C,N,F,z,J,K){let nt=new Mt(new Te(b,C,N),F);return nt.position.set(z,J+C/2,K),nt.castShadow=!0,nt.receiveShadow=!0,M.add(nt),nt}function V(M,b,C,N){let F=new Ai;F.moveTo(-M/2,0),F.lineTo(M/2,0),F.lineTo(0,b),F.closePath();let z=new ta(F,{depth:C,bevelEnabled:!1});z.translate(0,0,-C/2);let J=new Mt(z,N);return J.castShadow=!0,J}let X=(M,b={})=>new Ae(Object.assign({color:M,roughness:.8},b));function ut(M){let b=new ae,C=[],N=[],F=X(3811876);if(M==="apt"){let z=R(12,13,{wall:"#7a3a2a",brick:1,cols:6,rows:5,mx:.22,my:.2,sill:1,door:1,lit:.25}),J=[F,F,X(2759188),F,z.mat,F],K=new Mt(new Te(12,13,5),J);K.position.y=6.5,K.castShadow=K.receiveShadow=!0,b.add(K),x(b,12.4,.5,5.4,X(5909022),0,13,0);for(let nt=1;nt<5;nt++)x(b,1.8,.12,.8,X(2763310,{metalness:.6}),-3.7,nt*2.6,2.9);C.push(...z.anchors.filter((nt,at)=>[1,4,7,8,10,13,15,20,22].includes(at)).map(nt=>[nt[0],nt[1]-.6,2.55]),[-2,13.6,1],[3,13.6,0]),N=[[-1,13.3,2.4],[4,13.3,2.4],[z.anchors[2][0],z.anchors[2][1]-1,2.6],[z.anchors[9][0],z.anchors[9][1]-1,2.6]]}else if(M==="market"){let z=[14200960,13146736,14731424],J=[14165532,1997528,2793546];for(let K=0;K<3;K++){let nt=(K-1)*4.6,at=R(4.4,7,{wall:"#"+z[K].toString(16),cols:2,rows:2,mx:.18,my:.2,lit:.6,frame:"#6a4a2a"}),pt=new Mt(new Te(4.4,7,4),[F,F,F,F,at.mat,F]);pt.position.set(nt,3.5,0),pt.castShadow=pt.receiveShadow=!0,b.add(pt);let rt=V(4.8,2.2,4.4,X(6957594));rt.position.set(nt,7,0),b.add(rt);let At=new Mt(new Te(4.2,.08,1.6),X(J[K]));At.position.set(nt,2.9,2.7),At.rotation.x=.35,At.castShadow=!0,b.add(At);for(let St=0;St<3;St++){let Zt=new Mt(new nn(.22,10,8),new Xe({color:16732208,toneMapped:!1}));Zt.position.set(nt-1.4+St*1.4,2.5,3.4),b.add(Zt)}x(b,3.4,.9,1.2,X(9071162),nt,0,3),C.push(...at.anchors.map(St=>[nt+St[0],St[1]-.4,2.1]),[nt,8.6,0])}N=[[-4.6,4.6,2.2],[0,4.6,2.2],[4.6,4.6,2.2]]}else if(M==="factory"){let z=R(16,6,{wall:"#8a9098",panels:1,cols:8,rows:2,mx:.15,my:.28,lit:.25,glass:"#2a3440",frame:"#5a6068"}),J=new Mt(new Te(16,6,7),[F,F,F,F,z.mat,F]);J.position.y=3,J.castShadow=J.receiveShadow=!0,b.add(J);for(let nt=0;nt<4;nt++){let at=V(4,1.8,7,X(6975608,{metalness:.4,roughness:.5}));at.position.set(-6+nt*4,6,0),at.rotation.z=0,b.add(at)}[[-5,1],[4.5,-1.2]].forEach(([nt,at])=>{let pt=new Mt(new qe(.6,.75,11,16),X(8014394));pt.position.set(nt,5.5,at),pt.castShadow=!0,b.add(pt),x(b,1.6,.4,1.6,X(2763306),nt,10.8,at)});let K=new Mt(new qe(1.6,1.6,4,20),X(11581632,{metalness:.7,roughness:.3}));K.position.set(9.6,2,1),K.castShadow=!0,b.add(K),C.push(...z.anchors.map(nt=>[nt[0],nt[1]-.3,3.55]),[-5,11.5,1],[4.5,11.6,-1.2],[-2,7.4,1],[2,7.4,1]),N=[[-6,6.5,3.2],[6,6.5,3.2]]}else if(M==="cabin"){let z=R(9,4.2,{logs:1,wall:"#6a4024",cols:3,rows:1,mx:.3,my:.25,lit:.7,frame:"#3a2010",door:0}),J=new Mt(new Te(9,4.2,6),[X(5913120),X(5913120),F,F,z.mat,X(5913120)]);J.position.y=2.1,J.castShadow=J.receiveShadow=!0,b.add(J);let K=V(10.4,3.6,7,X(3810328));K.position.y=4.2,b.add(K),x(b,9.6,.25,2.2,X(8015920),0,0,3.9);for(let pt=-2;pt<=2;pt++)x(b,.2,1.9,.2,X(5913120),pt*2.2,.25,4.8);x(b,1,3,1,X(6974064),3,5.2,0);let nt=X(1718818,{roughness:.9}),at=X(3810324);for(let pt=0;pt<16;pt++){let rt=(pt<8?-1:1)*(7+Math.random()*9),At=-6+Math.random()*9,St=2+Math.random()*2.5,Zt=new ae,$t=new Mt(new li(St*.55,St*2,8),nt);$t.position.y=St*1.4,$t.castShadow=!0,Zt.add($t);let lt=new Mt(new li(St*.42,St*1.5,8),nt);lt.position.y=St*2.3,Zt.add(lt);let Rt=new Mt(new qe(.15,.2,St*.6,6),at);Rt.position.y=St*.3,Zt.add(Rt),Zt.position.set(rt,0,At),b.add(Zt),pt%3===0&&C.push([rt,St*2,At+1])}C.push(...z.anchors.map(pt=>[pt[0],pt[1]-.3,3.05]),[-2,6,1.5],[2.4,6.4,1.2],[0,7.2,0],[-3.6,5.2,2.5]),N=[[0,1.2,4.6],[-2.2,1.2,4.6]]}else{let z=R(7,26,{wall:"#2a3442",cols:5,rows:12,mx:.08,my:.12,lit:.3,glass:"#1a2a3c",frame:"#8090a0",noMul:1}),J=new Mt(new Te(7,26,6),[X(2239030),X(2239030),F,F,new Ae({map:z.mat.map,emissiveMap:z.mat.emissiveMap,emissive:16777215,emissiveIntensity:.9,roughness:.25,metalness:.5}),X(2239030)]);J.position.y=13,J.castShadow=J.receiveShadow=!0,b.add(J),x(b,4,2,4,X(3818064),0,26,0);let K=new Mt(new qe(.08,.08,5),X(10066329,{metalness:1}));K.position.set(0,30.5,0),b.add(K);let nt=new Mt(new nn(.2,8,6),new Xe({color:16719904,toneMapped:!1}));nt.position.set(0,33,0),b.add(nt),[[-9,14,-4],[9,18,-3],[-15,10,-6],[15,22,-7]].forEach(([at,pt,rt])=>{let At=R(5,pt,{wall:"#1e2632",cols:3,rows:Math.round(pt/2.4),mx:.12,my:.15,lit:.25,glass:"#121a26",frame:"#4a5462",noMul:1}),St=new Mt(new Te(5,pt,5),[X(1712688),X(1712688),F,F,At.mat,X(1712688)]);St.position.set(at,pt/2,rt),b.add(St)}),C.push(...z.anchors.filter((at,pt)=>[6,8,12,17,21,23,27,31,33,36,38,42].includes(pt)).map(at=>[at[0],at[1]-.4,3.05])),N=[[z.anchors[7][0],z.anchors[7][1]-.8,3.1],[z.anchors[16][0],z.anchors[16][1]-.8,3.1],[0,27.2,1.5]]}return{g:b,F:C,P:N}}function it(M){let b=new ae,C=X(M.coat,{roughness:.75}),N=X(M.pants||2763310),F=X(14725258,{roughness:.6}),z=X(1118481),J=new Ae({color:15261808,emissive:5919760,roughness:.3}),K=(Jt,de,ot,Bt)=>{let Kt=new Mt(new qe(Jt,de,ot,10),Bt);return Kt.castShadow=!0,Kt},nt=Jt=>{let de=new ae;de.position.set(Jt*.11,.92,0);let ot=K(.085,.075,.48,N);ot.position.y=-.24,de.add(ot);let Bt=new ae;Bt.position.y=-.47,de.add(Bt);let Kt=K(.075,.065,.42,N);Kt.position.y=-.21,Bt.add(Kt);let v=new Mt(new Te(.13,.1,.24),z);if(v.position.set(0,-.43,.04),Bt.add(v),M.ff){let O=K(.078,.078,.04,J);O.position.y=-.3,Bt.add(O)}return b.add(de),{p:de,kn:Bt}},at=nt(-1),pt=nt(1),rt=new ae;rt.position.y=.92,b.add(rt);let At=new Mt(new qe(.19,.17,.62,12),C);if(At.position.y=.33,At.scale.z=.75,At.castShadow=!0,rt.add(At),M.ff){let Jt=K(.195,.195,.05,J);Jt.position.y=.12,Jt.scale.z=.76,rt.add(Jt);let de=K(.195,.195,.05,J);de.position.y=.42,de.scale.z=.76,rt.add(de);let ot=K(.08,.08,.42,X(14211288,{metalness:.8,roughness:.3}));ot.position.set(0,.4,-.17),rt.add(ot)}let St=new ae;St.position.y=.74,rt.add(St);let Zt=new Mt(new nn(.11,14,10),F);if(Zt.position.y=.07,St.add(Zt),M.ff){let Jt=X(M.helmet||14165532,{roughness:.3,metalness:.2}),de=new Mt(new nn(.135,14,8,0,qh,0,Math.PI/2),Jt);de.position.y=.1,St.add(de);let ot=new Mt(new qe(.2,.21,.03,16),Jt);ot.position.set(0,.1,-.03),ot.scale.z=1.2,St.add(ot)}else{let Jt=new Mt(new nn(.118,12,8,0,qh,0,Math.PI/2),X(M.hair||2759184));Jt.position.y=.09,St.add(Jt)}let $t=Jt=>{let de=new ae;de.position.set(Jt*.22,.58,0),rt.add(de);let ot=K(.06,.055,.32,C);ot.position.y=-.16,de.add(ot);let Bt=new ae;Bt.position.y=-.31,de.add(Bt);let Kt=K(.05,.045,.28,C);Kt.position.y=-.14,Bt.add(Kt);let v=new Mt(new nn(.05,8,6),M.ff?X(2236962):F);return v.position.y=-.3,Bt.add(v),{p:de,el:Bt}},lt=$t(-1),Rt=$t(1),Vt=null;if(M.ff){Vt=new ae;let Jt=K(.04,.03,.36,X(12632256,{metalness:1,roughness:.2}));Jt.rotation.x=Math.PI/2,Jt.position.z=.18,Vt.add(Jt),Vt.position.set(0,.5,.3),rt.add(Vt)}return b.userData={L:at,R:pt,A:lt,B:Rt,torso:rt,head:St,noz:Vt},b}function kt(M,b,C,N){let F=M.userData,z=Math.sin(C*8+N);if(b==="walk")F.L.p.rotation.x=z*.6,F.R.p.rotation.x=-z*.6,F.L.kn.rotation.x=Math.max(0,-z)*.8,F.R.kn.rotation.x=Math.max(0,z)*.8,F.A.p.rotation.x=-z*.5,F.B.p.rotation.x=z*.5,F.torso.position.y=.92+Math.abs(z)*.03;else if(b==="spray")F.L.p.rotation.x=.25,F.R.p.rotation.x=-.35,F.L.kn.rotation.x=.2,F.R.kn.rotation.x=.45,F.torso.rotation.x=.12+Math.sin(C*20+N)*.01,F.A.p.rotation.x=-1.25,F.B.p.rotation.x=-1.05,F.A.p.rotation.z=.25,F.B.p.rotation.z=-.35,F.A.el.rotation.x=-.3,F.B.el.rotation.x=-.5;else if(b==="wave")F.B.p.rotation.z=-2.6+Math.sin(C*9+N)*.35,F.A.p.rotation.z=.1;else if(b==="cheer"){let J=Math.abs(Math.sin(C*6+N));M.position.y=(M.userData.y0||0)+J*.35,F.A.p.rotation.z=2.7,F.B.p.rotation.z=-2.7}else F.L.p.rotation.x=F.R.p.rotation.x=0,F.L.kn.rotation.x=F.R.kn.rotation.x=0,F.A.p.rotation.set(0,0,.08),F.B.p.rotation.set(0,0,-.08)}function Tt(M){let b=Et[M]||Et[1],C=new ci;W.scene=C,W.ch=M,W.G=G,C.background=Nt(b.sky[0],b.sky[1]),C.environment=n,C.environmentIntensity=.35,C.fog=new Yr(b.fog,30,75),C.add(new ds(b.amb,2105376,b.ambI));let N=new hi(b.key,b.keyI);N.position.set(...b.keyP).multiplyScalar(3),N.castShadow=!0,N.shadow.mapSize.set(1024,1024),Object.assign(N.shadow.camera,{left:-22,right:22,top:30,bottom:-6,near:1,far:120}),N.shadow.bias=-8e-4,C.add(N),W.key=N;let F=new ps(16742954,0,40,1.4);C.add(F),W.fireL=F;let z=new Mt(new en(140,40),new Ae({color:2237739,roughness:.28,metalness:.4,envMapIntensity:.6}));z.rotation.x=-Math.PI/2,z.position.z=12,z.receiveShadow=!0,C.add(z);let J=new Mt(new Te(140,.25,5),X(6974064));J.position.set(0,.12,4.5),J.receiveShadow=!0,C.add(J);let K=new Xe({color:14205024,toneMapped:!1});for(let lt=-8;lt<=8;lt++){let Rt=new Mt(new en(2,.18),K);Rt.rotation.x=-Math.PI/2,Rt.position.set(lt*5,.01,12),C.add(Rt)}let nt=new Mt(new en(200,60),new Xe({color:0,transparent:!0,opacity:0}));nt.position.z=-40,C.add(nt);let at=X(new ce(b.fog).multiplyScalar(.6).getHex(),{roughness:1});for(let lt=0;lt<22;lt++){let Rt=3+Math.random()*5,Vt=M===4?0:4+Math.random()*(M===5?26:12);if(!Vt)continue;let Jt=new Mt(new Te(Rt,Vt,3),at);Jt.position.set(-55+lt*5+Math.random()*2,Vt/2,-18-Math.random()*8),C.add(Jt)}if(M===4){let lt=X(1057818);for(let Rt=0;Rt<40;Rt++){let Vt=3+Math.random()*4,Jt=new Mt(new li(Vt*.5,Vt*2.2,7),lt);Jt.position.set(-50+Rt*2.6,Vt*1.1,-14-Math.random()*10),C.add(Jt)}}let pt=ut(b.build);pt.g.position.z=-1,C.add(pt.g),W.F=pt.F.map(lt=>new U(lt[0],lt[1],lt[2]-1)),W.P=pt.P.map(lt=>new U(lt[0],lt[1],lt[2]-1)),W.flames=W.F.map((lt,Rt)=>{let Vt=new Mt(new en(1,1),Xt(Rt*1.7+M));Vt.geometry.translate(0,.5,0),Vt.position.copy(lt);let Jt=(M===5?2.4:3.2)*(.8+Rt*37%10/25);Vt.scale.set(Jt*.8,Jt*1.35,1),Vt.userData.sc=Jt,C.add(Vt);let de=new Wn(d(16738842,.6));return de.position.copy(lt).add(new U(0,Jt*.4,.2)),de.scale.setScalar(Jt*2.6),C.add(de),Vt.userData.gl=de,Vt}),W.smoke=[];for(let lt=0;lt<26;lt++){let Rt=new Wn(new Ti({map:f,color:2762280,transparent:!0,depthWrite:!1,opacity:0}));Rt.userData={life:99},C.add(Rt),W.smoke.push(Rt)}W.steam=[];for(let lt=0;lt<16;lt++){let Rt=new Wn(new Ti({map:f,color:15265524,transparent:!0,depthWrite:!1,opacity:0}));Rt.userData={life:99},C.add(Rt),W.steam.push(Rt)}let rt=90,At=new Oe;At.setAttribute("position",new He(new Float32Array(rt*3),3)),W.emb=new Bs(At,new hs({map:u,color:16752704,size:.28,transparent:!0,blending:zn,depthWrite:!1,toneMapped:!1})),W.emb.frustumCulled=!1,W.embD=Array.from({length:rt},()=>({life:9,v:new U})),C.add(W.emb);let St=420,Zt=new Oe;Zt.setAttribute("position",new He(new Float32Array(St*3),3)),W.wat=new Bs(Zt,new hs({map:u,color:12116223,size:.32,transparent:!0,opacity:.85,blending:zn,depthWrite:!1,toneMapped:!1})),W.wat.frustumCulled=!1,W.watD=Array.from({length:St},()=>({life:9,v:new U,p:new U})),W.wi=0,C.add(W.wat),W.ff=[0,1,2,3].map(lt=>{let Rt=it({ff:1,coat:3813926,pants:3813926,helmet:lt%2?16761370:14165532});return Rt.scale.setScalar(1.15),Rt.visible=!1,C.add(Rt),Rt});let $t=[4892927,16743088,8050266,16756736,11766527,5953238];W.ppl=W.P.concat(W.P).map((lt,Rt)=>{let Vt=it({coat:$t[Rt%6],pants:2767450,hair:[2759184,6961690,1052688][Rt%3]});return Vt.scale.setScalar(1.1),Vt.position.copy(lt),Vt.position.x+=Rt>=W.P.length?.7:0,Vt.visible=!1,C.add(Vt),Vt}),W.crowd=Array.from({length:6},(lt,Rt)=>{let Vt=it({coat:$t[Rt],pants:2767450,hair:[2759184,6961690,1052688][Rt%3]});return Vt.position.set(-7+Rt*2.8,.25,4.6),Vt.userData.y0=.25,Vt.rotation.y=Math.PI*0,Vt.visible=!1,C.add(Vt),Vt}),W.veh=new Map,W.cam=new ze(42,1,.5,200),W.t=0,W.camCfg={4:{p:[0,3,18],l:[0,3.8,0]},5:{p:[0,3,24],l:[0,11,0]},3:{p:[0,3.4,21],l:[0,4.6,0]},2:{p:[0,3,17],l:[0,4.4,0]},1:{p:[0,3.5,19.5],l:[0,6.4,0]}}[M]}let bt=new U;function pe(){let M=G.S;W.G!==G&&Tt(G.ch);let b=W.scene,C=G.t,N=Math.min(.05,DT||.016);W.t+=N;let F=s(),z=G.state==="win"?0:ys(G.fire/G.fireMax+(G.flare||0)*.15,0,1.3),J=W.camCfg,K=W.cam;K.aspect=M.w/M.h;let nt=G.state==="win"?Math.min(1,G.winT/3):0;K.position.set(J.p[0]+Math.sin(C*.23)*.8,J.p[1]+Math.sin(C*.31)*.25,J.p[2]-nt*3+Math.sin(C*.17)*.4),K.lookAt(J.l[0]+Math.sin(C*.19)*.3,J.l[1]+nt*.8,J.l[2]),CAM.sh>0&&(K.position.x+=(Math.random()-.5)*CAM.sh*.6),K.updateProjectionMatrix(),K.updateMatrixWorld(),W.key.castShadow=F,G.ch===5&&(Math.random()<.004&&(W.flash=1),W.flash=Math.max(0,(W.flash||0)-N*3),W.key.intensity=Et[5].keyI+W.flash*6);let at=Math.ceil(W.flames.length*Math.min(1,z)),pt=[];W.flames.forEach((ot,Bt)=>{let Kt=Bt<at,v=ot.userData.a=jc(ot.userData.a||0,Kt?1:0,N*2.5);if(ot.visible=v>.02,ot.userData.gl.visible=ot.visible,!ot.visible)return;ot.material.uniforms.t.value=W.t+Bt,ot.material.uniforms.amp.value=v*(.9+.1*Math.sin(W.t*13+Bt)),ot.quaternion.copy(K.quaternion);let O=ot.userData.sc*(.85+.15*v)*(1+.06*Math.sin(W.t*7+Bt*2));ot.scale.set(O*.8,O*1.35,1),ot.userData.gl.material.opacity=.45*v*(.85+.15*Math.sin(W.t*11+Bt)),Kt&&pt.push(ot.position)}),W.fireL.intensity=z*(F?110:80)*(.85+.15*Math.sin(W.t*9)+.06*Math.sin(W.t*23)),pt.length&&(bt.set(0,0,0),pt.forEach(ot=>bt.add(ot)),bt.divideScalar(pt.length),W.fireL.position.copy(bt).add(new U(0,1,4))),G.flames=pt.map(ot=>(bt.copy(ot).add(new U(0,.8,0)).project(K),[M.x+(bt.x+1)/2*M.w,M.y+(1-bt.y)/2*M.h])),W.smoke.forEach((ot,Bt)=>{let Kt=ot.userData;if(Kt.life+=N,Kt.life>Kt.max)if(pt.length&&Math.random()<.5*z+.05){let O=pt[Bt%pt.length];Kt.life=0,Kt.max=3+Math.random()*2.5,ot.position.copy(O).add(new U(Math.random()-.5,2,-.3)),Kt.vx=(Math.random()-.2)*.8,Kt.s0=2+Math.random()*2}else{ot.material.opacity=0;return}let v=Kt.life/Kt.max;ot.position.y+=N*(2.2-v),ot.position.x+=Kt.vx*N,ot.scale.setScalar(Kt.s0*(1+v*2.6)),ot.material.opacity=Math.sin(v*Math.PI)*.55*Math.min(1,z+.2),ot.material.rotation+=N*.2});let rt=Math.max(G.steam,G.state==="win"?1-Math.min(1,G.winT/3):0);W.steam.forEach((ot,Bt)=>{let Kt=ot.userData;if(Kt.life+=N,Kt.life>Kt.max)if(rt>.1&&W.F.length&&Math.random()<rt*.4){let O=W.F[Bt*5%W.F.length];Kt.life=0,Kt.max=2+Math.random(),ot.position.copy(O).add(new U(0,.5,.5)),Kt.s0=1.5+Math.random()}else{ot.material.opacity=0;return}let v=Kt.life/Kt.max;ot.position.y+=N*2.6,ot.scale.setScalar(Kt.s0*(1+v*3)),ot.material.opacity=Math.sin(v*Math.PI)*.5});{let ot=W.emb.geometry.attributes.position;W.embD.forEach((Bt,Kt)=>{if(Bt.life+=N,Bt.life>Bt.max)if(pt.length&&Math.random()<z*.25){let v=pt[Math.floor(Math.random()*pt.length)];Bt.life=0,Bt.max=1.5+Math.random()*2,ot.setXYZ(Kt,v.x+(Math.random()-.5),v.y+1,v.z+.3),Bt.v.set((Math.random()-.5)*1.5,2+Math.random()*2.5,(Math.random()-.5)*.5)}else{ot.setXYZ(Kt,0,-99,0);return}ot.setXYZ(Kt,ot.getX(Kt)+Bt.v.x*N+Math.sin(W.t*3+Kt)*N*.6,ot.getY(Kt)+Bt.v.y*N,ot.getZ(Kt)+Bt.v.z*N)}),ot.needsUpdate=!0}let At=(()=>{let ot=K.position.z-9;return 2*Math.tan(K.fov*Math.PI/360)*ot*K.aspect})(),St=new Set,Zt=[];G.sv.forEach((ot,Bt)=>{let Kt=ot.id+"_"+ot.type;St.add(Kt);let v=W.veh.get(Kt);v||(v=L(T(ot.type,ct(ot.type)),null),v.scale.setScalar(4.4),b.add(v),W.veh.set(Kt,v));let O=(ot.x/M.w-.5)*At*.92,q=8.6+Bt%2*1.6;v.position.set(O,0,q);let Y=ot.state==="drive";v.rotation.y=ot.dir>0?0:Math.PI,v.userData.yaw.rotation.z=Y?-.02:0,v.position.y=Y?Math.abs(Math.sin(C*18+Bt))*.04:0,D(v,!0,C,Bt);let H=v.userData.lad;if(H){let vt=ys((ot.work||0)/1.6,0,1);H.rotation.z=-.03+(ot.state==="work"?vt*.75:0)}ot.state==="work"&&WATER[ot.type]&&G.state!=="win"&&Zt.push({x:O,z:q,i:Bt})});for(let[ot,Bt]of W.veh)St.has(ot)||(b.remove(Bt),W.veh.delete(ot));let $t=W.watD,lt=W.wat.geometry.attributes.position;W.ff.forEach((ot,Bt)=>{let Kt=Zt[Bt];if(ot.visible=!!Kt||G.state==="win"&&Bt<Zt.length+2&&G.sv.length>Bt,!ot.visible)return;let v=pt.length?pt[Bt%pt.length]:W.F[Bt%W.F.length],O=Kt?Kt.x+(Bt%2?2.4:-2.4):-3+Bt*3;if(ot.position.set(O,.25,5.2-Bt*.3),Kt&&v&&z>0){ot.lookAt(v.x,ot.position.y,v.z),kt(ot,"spray",C,Bt),ot.userData.noz.getWorldPosition(bt);let Y=v.clone().add(new U(Math.sin(C*2+Bt)*.6,.6,0)),H=.9;for(let vt=0;vt<(F?6:3);vt++){let Lt=$t[W.wi=(W.wi+1)%$t.length];Lt.life=0,Lt.max=H*(.9+Math.random()*.25),Lt.p.copy(bt),Lt.v.set((Y.x-bt.x)/H+(Math.random()-.5)*.6,(Y.y-bt.y)/H+4.9*H+(Math.random()-.5)*.6,(Y.z-bt.z)/H+(Math.random()-.5)*.4)}}else kt(ot,G.state==="win"?"cheer":"idle",C,Bt)}),$t.forEach((ot,Bt)=>{if(ot.life>ot.max){lt.setXYZ(Bt,0,-99,0);return}ot.life+=N,ot.v.y-=9.8*N,ot.p.addScaledVector(ot.v,N),lt.setXYZ(Bt,ot.p.x,ot.p.y,ot.p.z)}),lt.needsUpdate=!0;let Rt=Math.max(0,G.people-G.rescued);W.ppl.forEach((ot,Bt)=>{ot.visible=Bt<Math.min(Rt,W.ppl.length)&&G.state!=="win",ot.visible&&kt(ot,"wave",C,Bt)}),W.crowd.forEach((ot,Bt)=>{ot.visible=Bt<(G.state==="win"?G.people:G.rescued),ot.visible&&kt(ot,G.state==="win"?"cheer":"wave",C,Bt*1.3)});let Vt=c(),Jt=Math.round(M.w*Vt),de=Math.round(M.h*Vt);a(Jt,de),i.shadowMap.autoUpdate=!0,i.render(b,K),i.shadowMap.autoUpdate=!1,o(cx,Jt,de,M.x,M.y,M.w,M.h)}let dt={scene:new ci,cam:new ze(26,1,.1,50),objs:new Map};{let M=dt.scene;M.environment=n,M.environmentIntensity=1,M.add(new ds(15265535,3158072,.9));let b=new hi(16774376,3);b.position.set(-2,4,3),b.castShadow=!0,b.shadow.mapSize.set(1024,1024),Object.assign(b.shadow.camera,{left:-1,right:1,top:1,bottom:-1,near:.5,far:12}),b.shadow.radius=5,M.add(b);let C=new hi(10469631,1.6);C.position.set(3,2,-3),M.add(C);let N=new Mt(new qe(.62,.66,.04,64),new Ae({color:4869724,metalness:.85,roughness:.22}));N.position.y=-.02,N.receiveShadow=!0,M.add(N);let F=new Mt(new us(.64,.008,8,96),new Xe({color:16765562,toneMapped:!1}));F.rotation.x=Math.PI/2,F.position.y=.002,M.add(F),dt.plat=N,dt.ring=F}function Ft(M,b,C,N,F,z,J,K){if(K=K||{},!Ne.ok||Ne.lost)return null;let nt=b+C+"|"+m(b),at=dt.objs.get(nt);at||(at=L(T(b,C),[1,1]),dt.objs.set(nt,at)),dt.scene.children.forEach(Jt=>{Jt.userData&&Jt.userData.f!==void 0&&Jt!==at&&(Jt.visible=!1)}),at.parent||dt.scene.add(at),at.visible=!0,at.rotation.y=-J-Math.PI/2,D(at,!!K.siren,K.t||TT,0);let pt=K.plat!==!1&&z>90;dt.plat.visible=dt.ring.visible=pt,pt&&(dt.plat.rotation.y=at.rotation.y);let rt=dt.cam,At=2.45,St=.42;rt.aspect=1.4,rt.position.set(0,Math.sin(St)*At+.12,Math.cos(St)*At),rt.lookAt(0,.16,0),rt.updateProjectionMatrix();let Zt=Math.min(DPR,2)*(M.canvas&&M.canvas.width>M.canvas.clientWidth*1.2,1),$t=z*1.75,lt=$t/1.4,Rt=Math.round($t*Zt),Vt=Math.round(lt*Zt);return a(Rt,Vt),i.shadowMap.autoUpdate=!0,i.render(dt.scene,rt),i.shadowMap.autoUpdate=!1,M.save(),K.filter&&(M.filter=K.filter),o(M,Rt,Vt,N-$t/2,F-lt*.66,$t,lt),M.restore(),!0}let te=window.renderBoard,ee=window.renderScene,Ht=window.drawTT,le=()=>Ne.ok&&!Ne.lost&&!Ne.off,ne=0,ge=0,B=0;window.renderBoard=function(){if(!le())return te();try{I(),G.i===0&&!G.firstTap&&G.state==="play"&&drawHand(),drawImpacts(),Ne.frames++}catch(M){Rn("board3d error \u2192 2D",M&&M.stack),Ne.off=!0,te()}},window.renderScene=function(){if(!le())return ee();try{pe()}catch(M){Rn("scene3d error \u2192 2D",M&&M.stack),Ne.off=!0,ee()}},Ne.tt=Ft,window.drawTT=function(M,b,C,N,F,z,J,K){if(le()&&"EKTA".includes(b))try{if(Ft(M,b,C,N,F,z,J,K))return!0}catch(nt){Rn("tt3d error",nt&&nt.message)}return Ht(M,b,C,N,F,z,J,K)};let Ot=window.update;window.update=function(M){if(Ot(M),ne+=M,ge++,ne>2){let b=ge/ne;Ne.fps=b,ne=0,ge=0,le()&&MODE==="game"&&(b<45?(B++,B>=2&&(Ne.prCap||2)>1&&(Ne.prCap=Math.max(1,(Ne.prCap||2)-.5),B=0,Rn("adaptive pr",Ne.prCap))):B=0)}},Ne.flags={setup:()=>{}},Rn("3D renderer on",i.capabilities.isWebGL2?"webgl2":"webgl1")}function Rn(...i){try{console.log("[R3]",...i)}catch{}}try{Mg()}catch(i){Rn("init failed \u2192 2D",i&&i.stack),window.R3.ok=!1}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
