(()=>{var _d=0,fh=1,yd=2;var Tu=1,Bl=2,mi=3,Ni=0,_n=1,An=2,Di=0,Us=1,yn=2,ph=3,mh=4,vd=5,Qi=100,Md=101,Ed=102,Sd=103,wd=104,bd=200,Td=201,Ad=202,Rd=203,dc=204,fc=205,Cd=206,Pd=207,Id=208,Dd=209,Ld=210,Ud=211,Nd=212,Fd=213,Od=214,pc=0,mc=1,gc=2,Bs=3,xc=4,_c=5,yc=6,vc=7,Au=0,Bd=1,Hd=2,Li=0,zd=1,kd=2,Gd=3,Hl=4,Vd=5,Wd=6,zl=7;var Ru=300,Hs=301,zs=302,Mc=303,Ec=304,ua=306,ks=1e3,ts=1001,Sc=1002,Rn=1003,Xd=1004;var Xr=1005;var Yn=1006,Ra=1007;var es=1008;var _i=1009,Cu=1010,Pu=1011,vr=1012,kl=1013,ns=1014,si=1015,Fr=1016,Gl=1017,Vl=1018,Gs=1020,Iu=35902,Du=1021,Lu=1022,Zn=1023,Uu=1024,Nu=1025,Ns=1026,Vs=1027,Wl=1028,Xl=1029,Fu=1030,ql=1031;var Yl=1033,bo=33776,To=33777,Ao=33778,Ro=33779,wc=35840,bc=35841,Tc=35842,Ac=35843,Rc=36196,Cc=37492,Pc=37496,Ic=37808,Dc=37809,Lc=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,Bc=37815,Hc=37816,zc=37817,kc=37818,Gc=37819,Vc=37820,Wc=37821,Co=36492,Xc=36494,qc=36495,Ou=36283,Yc=36284,Zc=36285,Jc=36286;var Io=2300,$c=2301,Ca=2302,gh=2400,xh=2401,_h=2402;var qd=3200,Yd=3201;var Bu=0,Zd=1,Pi="",Ze="srgb",zi="srgb-linear",Zl="display-p3",da="display-p3-linear",Do="linear",$e="srgb",Lo="rec709",Uo="p3";var fs=7680;var yh=519,Jd=512,$d=513,Kd=514,Hu=515,Qd=516,jd=517,tf=518,ef=519,Kc=35044;var vh="300 es",gi=2e3,No=2001,Fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pa=Math.PI/180,Qc=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function dn(i,t,e){return Math.max(t,Math.min(e,i))}function nf(i,t){return(i%t+t)%t}function Ia(i,t,e){return(1-e)*i+e*t}function ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ae=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],p=s[3],m=s[6],b=s[1],v=s[4],w=s[7],$=s[2],A=s[5],k=s[8];return r[0]=o*y+a*b+c*$,r[3]=o*p+a*v+c*A,r[6]=o*m+a*w+c*k,r[1]=l*y+h*b+u*$,r[4]=l*p+h*v+u*A,r[7]=l*m+h*w+u*k,r[2]=d*y+f*b+g*$,r[5]=d*p+f*v+g*A,r[8]=d*m+f*w+g*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Da=new Ae;function zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){let i=Fo("canvas");return i.style.display="block",i}var Mh={};function Po(i){i in Mh||(Mh[i]=!0,console.warn(i))}function rf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function of(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function af(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Eh=new Ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sh=new Ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sr={[zi]:{transfer:Do,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ze]:{transfer:$e,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[da]:{transfer:Do,primaries:Uo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Sh),fromReference:i=>i.applyMatrix3(Eh)},[Zl]:{transfer:$e,primaries:Uo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Sh),fromReference:i=>i.applyMatrix3(Eh).convertLinearToSRGB()}},cf=new Set([zi,da]),He={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=sr[t].toReference,s=sr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return sr[i].primaries},getTransfer:function(i){return i===Pi?Do:sr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(sr[t].luminanceCoefficients)}};function Fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function La(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,jc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ps===void 0&&(ps=Fo("canvas")),ps.width=t.width,ps.height=t.height;let n=ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Fo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fs(e[n]/255)*255):e[n]=Fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lf=0,Oo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ua(s[o].image)):r.push(Ua(s[o]))}else r=Ua(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ua(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hf=0,vn=class i extends Fi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ts,s=ts,r=Yn,o=es,a=Zn,c=_i,l=i.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=xi(),this.name="",this.source=new Oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case Sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case Sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Ru;vn.DEFAULT_ANISOTROPY=1;var We=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,w=(f+1)/2,$=(m+1)/2,A=(h+d)/4,k=(u+y)/4,R=(g+p)/4;return v>w&&v>$?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=k/n):w>$?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=A/s,r=R/s):$<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt($),n=k/r,s=R/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-y)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends Fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Oo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends tl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Bo=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==d||l!==f||h!==g){let p=1-a,m=c*d+l*f+h*g+u*y,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let $=Math.sqrt(v),A=Math.atan2($,m*b);p=Math.sin(p*A)/$,a=Math.sin(a*A)/$}let w=a*b;if(c=c*p+d*w,l=l*p+f*w,h=h*p+g*w,u=u*p+y*w,p===1-a){let $=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=$,l*=$,h*=$,u*=$}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Na=new I,wh=new Oi,Jn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Yr.subVectors(this.max,rr),ms.subVectors(t.a,rr),gs.subVectors(t.b,rr),xs.subVectors(t.c,rr),wi.subVectors(gs,ms),bi.subVectors(xs,gs),Xi.subVectors(ms,xs);let e=[0,-wi.z,wi.y,0,-bi.z,bi.y,0,-Xi.z,Xi.y,wi.z,0,-wi.x,bi.z,0,-bi.x,Xi.z,0,-Xi.x,-wi.y,wi.x,0,-bi.y,bi.x,0,-Xi.y,Xi.x,0];return!Fa(e,ms,gs,xs,Yr)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,ms,gs,xs,Yr))?!1:(Zr.crossVectors(wi,bi),e=[Zr.x,Zr.y,Zr.z],Fa(e,ms,gs,xs,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},hi=[new I,new I,new I,new I,new I,new I,new I,new I],Vn=new I,qr=new Jn,ms=new I,gs=new I,xs=new I,wi=new I,bi=new I,Xi=new I,rr=new I,Yr=new I,Zr=new I,qi=new I;function Fa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);let a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),c=t.dot(qi),l=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var uf=new Jn,or=new I,Oa=new I,vi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):uf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);let e=or.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(Oa)),this.expandByPoint(or.copy(t.center).sub(Oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new I,Ba=new I,Jr=new I,Ti=new I,Ha=new I,$r=new I,za=new I,Ws=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ba.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(Ba);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Jr),a=Ti.dot(this.direction),c=-Ti.dot(Jr),l=Ti.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ba).addScaledVector(Jr,d),f}intersectSphere(t,e){ui.subVectors(t.center,this.origin);let n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,s,r){Ha.subVectors(e,t),$r.subVectors(n,t),za.crossVectors(Ha,$r);let o=this.direction.dot(za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);let c=a*this.direction.dot($r.crossVectors(Ti,$r));if(c<0)return null;let l=a*this.direction.dot(Ha.cross(Ti));if(l<0||c+l>o)return null;let h=-a*Ti.dot(za);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,y,p)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-y*l,e[9]=-a*c,e[2]=y-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,y=l*u;e[0]=d+y*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,y=l*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(df,t,ff)}lookAt(t,e,n){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ai.crossVectors(n,Ln),Ai.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ai.crossVectors(n,Ln)),Ai.normalize(),Kr.crossVectors(Ln,Ai),s[0]=Ai.x,s[4]=Kr.x,s[8]=Ln.x,s[1]=Ai.y,s[5]=Kr.y,s[9]=Ln.y,s[2]=Ai.z,s[6]=Kr.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],p=n[10],m=n[14],b=n[3],v=n[7],w=n[11],$=n[15],A=s[0],k=s[4],R=s[8],gt=s[12],_=s[1],T=s[5],ut=s[9],dt=s[13],ft=s[2],wt=s[6],ht=s[10],Ct=s[14],yt=s[3],Xt=s[7],Vt=s[11],Ht=s[15];return r[0]=o*A+a*_+c*ft+l*yt,r[4]=o*k+a*T+c*wt+l*Xt,r[8]=o*R+a*ut+c*ht+l*Vt,r[12]=o*gt+a*dt+c*Ct+l*Ht,r[1]=h*A+u*_+d*ft+f*yt,r[5]=h*k+u*T+d*wt+f*Xt,r[9]=h*R+u*ut+d*ht+f*Vt,r[13]=h*gt+u*dt+d*Ct+f*Ht,r[2]=g*A+y*_+p*ft+m*yt,r[6]=g*k+y*T+p*wt+m*Xt,r[10]=g*R+y*ut+p*ht+m*Vt,r[14]=g*gt+y*dt+p*Ct+m*Ht,r[3]=b*A+v*_+w*ft+$*yt,r[7]=b*k+v*T+w*wt+$*Xt,r[11]=b*R+v*ut+w*ht+$*Vt,r[15]=b*gt+v*dt+w*Ct+$*Ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+y*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],b=u*p*l-y*d*l+y*c*f-a*p*f-u*c*m+a*d*m,v=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,w=h*y*l-g*u*l+g*a*f-o*y*f-h*a*m+o*u*m,$=g*u*c-h*y*c-g*a*d+o*y*d+h*a*p-o*u*p,A=e*b+n*v+s*w+r*$;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/A;return t[0]=b*k,t[1]=(y*d*r-u*p*r-y*s*f+n*p*f+u*s*m-n*d*m)*k,t[2]=(a*p*r-y*c*r+y*s*l-n*p*l-a*s*m+n*c*m)*k,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*k,t[4]=v*k,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*k,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*m-e*c*m)*k,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*k,t[8]=w*k,t[9]=(g*u*r-h*y*r-g*n*f+e*y*f+h*n*m-e*u*m)*k,t[10]=(o*y*r-g*a*r+g*n*l-e*y*l-o*n*m+e*a*m)*k,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*k,t[12]=$*k,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*p+e*u*p)*k,t[14]=(g*a*s-o*y*s-g*n*c+e*y*c+o*n*p-e*a*p)*k,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,y=o*h,p=o*u,m=a*u,b=c*l,v=c*h,w=c*u,$=n.x,A=n.y,k=n.z;return s[0]=(1-(y+m))*$,s[1]=(f+w)*$,s[2]=(g-v)*$,s[3]=0,s[4]=(f-w)*A,s[5]=(1-(d+m))*A,s[6]=(p+b)*A,s[7]=0,s[8]=(g+v)*k,s[9]=(p-b)*k,s[10]=(1-(d+y))*k,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);let l=1/r,h=1/o,u=1/a;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,e.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=gi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===gi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===No)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=gi){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,g,y;if(a===gi)g=(o+r)*u,y=-2*u;else if(a===No)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_s=new I,Wn=new Le,df=new I(0,0,0),ff=new I(1,1,1),Ai=new I,Kr=new I,Ln=new I,bh=new Le,Th=new Oi,On=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pf=0,Ah=new I,ys=new Oi,di=new Le,Qr=new I,ar=new I,mf=new I,gf=new Oi,Rh=new I(1,0,0),Ch=new I(0,1,0),Ph=new I(0,0,1),Ih={type:"added"},xf={type:"removed"},vs={type:"childadded",child:null},ka={type:"childremoved",child:null},on=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new On,n=new Oi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ae}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return Ah.copy(t).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ar,Qr,this.up):di.lookAt(Qr,ar,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(di),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ih),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xf),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ih),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};on.DEFAULT_UP=new I(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new I,fi=new I,Ga=new I,pi=new I,Ms=new I,Es=new I,Dh=new I,Va=new I,Wa=new I,Xa=new I,qa=new We,Ya=new We,Za=new We,Ii=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),fi.subVectors(n,e),Ga.subVectors(t,e);let o=Xn.dot(Xn),a=Xn.dot(fi),c=Xn.dot(Ga),l=fi.dot(fi),h=fi.dot(Ga),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(o,pi.y),c.addScaledVector(a,pi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return qa.setScalar(0),Ya.setScalar(0),Za.setScalar(0),qa.fromBufferAttribute(t,e),Ya.fromBufferAttribute(t,n),Za.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qa,r.x),o.addScaledVector(Ya,r.y),o.addScaledVector(Za,r.z),o}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),fi.subVectors(t,e),Xn.cross(fi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Xn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ms.subVectors(s,n),Es.subVectors(r,n),Va.subVectors(t,n);let c=Ms.dot(Va),l=Es.dot(Va);if(c<=0&&l<=0)return e.copy(n);Wa.subVectors(t,s);let h=Ms.dot(Wa),u=Es.dot(Wa);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ms,o);Xa.subVectors(t,r);let f=Ms.dot(Xa),g=Es.dot(Xa);if(g>=0&&f<=g)return e.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Es,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Dh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Dh,a);let m=1/(p+y+d);return o=y*m,a=d*m,e.copy(n).addScaledVector(Ms,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var fe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=He.workingColorSpace){return this.r=t,this.g=e,this.b=n,He.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=He.workingColorSpace){if(t=nf(t,1),e=dn(e,0,1),n=dn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ja(o,r,t+1/3),this.g=Ja(o,r,t),this.b=Ja(o,r,t-1/3)}return He.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let n=ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}copyLinearToSRGB(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return He.fromWorkingColorSpace(xn.copy(this),t),Math.round(dn(xn.r*255,0,255))*65536+Math.round(dn(xn.g*255,0,255))*256+Math.round(dn(xn.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=He.workingColorSpace){He.fromWorkingColorSpace(xn.copy(this),e);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=He.workingColorSpace){return He.fromWorkingColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Ze){He.fromWorkingColorSpace(xn.copy(this),t);let e=xn.r,n=xn.g,s=xn.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(jr);let n=Ia(Ri.h,jr.h,e),s=Ia(Ri.s,jr.s,e),r=Ia(Ri.l,jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new fe;fe.NAMES=ku;var _f=0,ri=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Us,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xe=class extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var rn=new I,to=new It,en=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),t}};var Ho=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zo=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Se=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},yf=0,Fn=new Le,$a=new on,Ss=new I,Un=new Jn,cr=new Jn,un=new I,qe=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zu(t)?zo:Ho)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Un.min,cr.min),Un.expandByPoint(un),un.addVectors(Un.max,cr.max),Un.expandByPoint(un)):(Un.expandByPoint(cr.min),Un.expandByPoint(cr.max))}Un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)un.fromBufferAttribute(a,l),c&&(Ss.fromBufferAttribute(t,l),un.add(Ss)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new I,c[R]=new I;let l=new I,h=new I,u=new I,d=new It,f=new It,g=new It,y=new I,p=new I;function m(R,gt,_){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,gt),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,gt),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),a[R].add(y),a[gt].add(y),a[_].add(y),c[R].add(p),c[gt].add(p),c[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,gt=b.length;R<gt;++R){let _=b[R],T=_.start,ut=_.count;for(let dt=T,ft=T+ut;dt<ft;dt+=3)m(t.getX(dt+0),t.getX(dt+1),t.getX(dt+2))}let v=new I,w=new I,$=new I,A=new I;function k(R){$.fromBufferAttribute(s,R),A.copy($);let gt=a[R];v.copy(gt),v.sub($.multiplyScalar($.dot(gt))).normalize(),w.crossVectors(A,gt);let T=w.dot(c[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,T)}for(let R=0,gt=b.length;R<gt;++R){let _=b[R],T=_.start,ut=_.count;for(let dt=T,ft=T+ut;dt<ft;dt+=3)k(t.getX(dt+0)),k(t.getX(dt+1)),k(t.getX(dt+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new en(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lh=new Le,Yi=new Ws,eo=new vi,Uh=new I,no=new I,io=new I,so=new I,Ka=new I,ro=new I,Nh=new I,oo=new I,nt=class extends on{constructor(t=new qe,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ka.fromBufferAttribute(u,t),o?ro.addScaledVector(Ka,h):ro.addScaledVector(Ka.sub(e),h))}e.add(ro)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(eo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(eo,Uh)===null||Yi.origin.distanceToSquared(Uh)>(t.far-t.near)**2))&&(Lh.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let w=b,$=v;w<$;w+=3){let A=a.getX(w),k=a.getX(w+1),R=a.getX(w+2);s=ao(this,m,t,n,l,h,u,A,k,R),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let b=a.getX(p),v=a.getX(p+1),w=a.getX(p+2);s=ao(this,o,t,n,l,h,u,b,v,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let w=b,$=v;w<$;w+=3){let A=w,k=w+1,R=w+2;s=ao(this,m,t,n,l,h,u,A,k,R),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let b=p,v=p+1,w=p+2;s=ao(this,o,t,n,l,h,u,b,v,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function vf(i,t,e,n,s,r,o,a){let c;if(t.side===_n?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ni,a),c===null)return null;oo.copy(a),oo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(oo);return l<e.near||l>e.far?null:{distance:l,point:oo.clone(),object:i}}function ao(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,no),i.getVertexPosition(c,io),i.getVertexPosition(l,so);let h=vf(i,t,e,n,no,io,so,Nh);if(h){let u=new I;Ii.getBarycoord(Nh,no,io,so,u),s&&(h.uv=Ii.getInterpolatedAttribute(s,a,c,l,u,new It)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,c,l,u,new It)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};Ii.getNormal(no,io,so,d.normal),h.face=d,h.barycoord=u}return h}var ce=class i extends qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2));function g(y,p,m,b,v,w,$,A,k,R,gt){let _=w/k,T=$/R,ut=w/2,dt=$/2,ft=A/2,wt=k+1,ht=R+1,Ct=0,yt=0,Xt=new I;for(let Vt=0;Vt<ht;Vt++){let Ht=Vt*T-dt;for(let Me=0;Me<wt;Me++){let Re=Me*_-ut;Xt[y]=Re*b,Xt[p]=Ht*v,Xt[m]=ft,l.push(Xt.x,Xt.y,Xt.z),Xt[y]=0,Xt[p]=0,Xt[m]=A>0?1:-1,h.push(Xt.x,Xt.y,Xt.z),u.push(Me/k),u.push(1-Vt/R),Ct+=1}}for(let Vt=0;Vt<R;Vt++)for(let Ht=0;Ht<k;Ht++){let Me=d+Ht+wt*Vt,Re=d+Ht+wt*(Vt+1),St=d+(Ht+1)+wt*(Vt+1),Dt=d+(Ht+1)+wt*Vt;c.push(Me,Re,Dt),c.push(Re,St,Dt),yt+=6}a.addGroup(f,yt,gt),f+=yt,d+=Ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let n=Xs(i[e]);for(let s in n)t[s]=n[s]}return t}function Mf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:He.workingColorSpace}var Ef={clone:Xs,merge:Sn},Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ko=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ci=new I,Fh=new It,Oh=new It,Ke=class extends ko{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,Fh,Oh),e.subVectors(Oh,Fh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ws=-90,bs=1,nl=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(ws,bs,t,e);s.layers=this.layers,this.add(s);let r=new Ke(ws,bs,t,e);r.layers=this.layers,this.add(r);let o=new Ke(ws,bs,t,e);o.layers=this.layers,this.add(o);let a=new Ke(ws,bs,t,e);a.layers=this.layers,this.add(a);let c=new Ke(ws,bs,t,e);c.layers=this.layers,this.add(c);let l=new Ke(ws,bs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Go=class extends vn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},il=class extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Go(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ce(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Di});r.uniforms.tEquirect.value=e;let o=new nt(s,r),a=e.minFilter;return e.minFilter===es&&(e.minFilter=Yn),new nl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Qa=new I,bf=new I,Tf=new Ae,qn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qa.subVectors(n,e).cross(bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tf.getNormalMatrix(t),s=this.coplanarPoint(Qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new vi,co=new I,Er=class{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],p=s[11],m=s[12],b=s[13],v=s[14],w=s[15];if(n[0].setComponents(c-r,d-l,p-f,w-m).normalize(),n[1].setComponents(c+r,d+l,p+f,w+m).normalize(),n[2].setComponents(c+o,d+h,p+g,w+b).normalize(),n[3].setComponents(c-o,d-h,p-g,w-b).normalize(),n[4].setComponents(c-a,d-u,p-y,w-v).normalize(),e===gi)n[5].setComponents(c+a,d+u,p+y,w+v).normalize();else if(e===No)n[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(co.x=s.normal.x>0?t.max.x:t.min.x,co.y=s.normal.y>0?t.max.y:t.min.y,co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Af(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Oe=class i extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let b=m*d-o;for(let v=0;v<l;v++){let w=v*u-r;g.push(w,-b,0),y.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let v=b+l*m,w=b+l*(m+1),$=b+1+l*(m+1),A=b+1+l*m;f.push(v,w,A),f.push(w,$,A)}this.setIndex(f),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(y,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cf=`#ifdef USE_ALPHAHASH
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
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ff=`#ifdef USE_BATCHING
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
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,Qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",rp=`
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
}`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
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
}`,gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
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
#endif`,Tp=`struct PhysicalMaterial {
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
}`,Ap=`
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
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
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dm=`float getShadowMask() {
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
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rm=`uniform sampler2D t2D;
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
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
}`,Um=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Vm=`#define LAMBERT
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define MATCAP
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
}`,Ym=`#define NORMAL
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
}`,Zm=`#define NORMAL
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
}`,Jm=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,Qm=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,t0=`#define TOON
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
}`,e0=`uniform float size;
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,s0=`uniform vec3 color;
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
}`,r0=`uniform float rotation;
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
}`,o0=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:Rf,alphahash_pars_fragment:Cf,alphamap_fragment:Pf,alphamap_pars_fragment:If,alphatest_fragment:Df,alphatest_pars_fragment:Lf,aomap_fragment:Uf,aomap_pars_fragment:Nf,batching_pars_vertex:Ff,batching_vertex:Of,begin_vertex:Bf,beginnormal_vertex:Hf,bsdfs:zf,iridescence_fragment:kf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:qf,color_fragment:Yf,color_pars_fragment:Zf,color_pars_vertex:Jf,color_vertex:$f,common:Kf,cube_uv_reflection_fragment:Qf,defaultnormal_vertex:jf,displacementmap_pars_vertex:tp,displacementmap_vertex:ep,emissivemap_fragment:np,emissivemap_pars_fragment:ip,colorspace_fragment:sp,colorspace_pars_fragment:rp,envmap_fragment:op,envmap_common_pars_fragment:ap,envmap_pars_fragment:cp,envmap_pars_vertex:lp,envmap_physical_pars_fragment:vp,envmap_vertex:hp,fog_vertex:up,fog_pars_vertex:dp,fog_fragment:fp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_pars_fragment:gp,lights_lambert_fragment:xp,lights_lambert_pars_fragment:_p,lights_pars_begin:yp,lights_toon_fragment:Mp,lights_toon_pars_fragment:Ep,lights_phong_fragment:Sp,lights_phong_pars_fragment:wp,lights_physical_fragment:bp,lights_physical_pars_fragment:Tp,lights_fragment_begin:Ap,lights_fragment_maps:Rp,lights_fragment_end:Cp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Lp,map_fragment:Up,map_pars_fragment:Np,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:zp,morphcolor_vertex:kp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:Yp,normal_pars_vertex:Zp,normal_vertex:Jp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:tm,opaque_fragment:em,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:om,roughnessmap_fragment:am,roughnessmap_pars_fragment:cm,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:hm,shadowmap_vertex:um,shadowmask_pars_fragment:dm,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:xm,specularmap_pars_fragment:_m,tonemapping_fragment:ym,tonemapping_pars_fragment:vm,transmission_fragment:Mm,transmission_pars_fragment:Em,uv_pars_fragment:Sm,uv_pars_vertex:wm,uv_vertex:bm,worldpos_vertex:Tm,background_vert:Am,background_frag:Rm,backgroundCube_vert:Cm,backgroundCube_frag:Pm,cube_vert:Im,cube_frag:Dm,depth_vert:Lm,depth_frag:Um,distanceRGBA_vert:Nm,distanceRGBA_frag:Fm,equirect_vert:Om,equirect_frag:Bm,linedashed_vert:Hm,linedashed_frag:zm,meshbasic_vert:km,meshbasic_frag:Gm,meshlambert_vert:Vm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:qm,meshnormal_vert:Ym,meshnormal_frag:Zm,meshphong_vert:Jm,meshphong_frag:$m,meshphysical_vert:Km,meshphysical_frag:Qm,meshtoon_vert:jm,meshtoon_frag:t0,points_vert:e0,points_frag:n0,shadow_vert:i0,shadow_frag:s0,sprite_vert:r0,sprite_frag:o0},qt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},envMapRotation:{value:new Ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},ni={basic:{uniforms:Sn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Sn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Sn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Sn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Sn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Sn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Sn([qt.points,qt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Sn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Sn([qt.common,qt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Sn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Sn([qt.sprite,qt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ae}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Sn([qt.common,qt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Sn([qt.lights,qt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};ni.physical={uniforms:Sn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};var lo={r:0,b:0,g:0},Ji=new On,a0=new Le;function c0(i,t,e,n,s,r,o){let a=new fe(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function y(b){let v=!1,w=g(b);w===null?m(a,c):w&&w.isColor&&(m(w,1),v=!0);let $=i.xr.getEnvironmentBlendMode();$==="additive"?n.buffers.color.setClear(0,0,0,1,o):$==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,v){let w=g(v);w&&(w.isCubeTexture||w.mapping===ua)?(h===void 0&&(h=new nt(new ce(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Xs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function($,A,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ji.copy(v.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(Ji)),h.material.toneMapped=He.getTransfer(w.colorSpace)!==$e,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new nt(new Oe(2,2),new Cn({name:"BackgroundMaterial",uniforms:Xs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=He.getTransfer(w.colorSpace)!==$e,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,v){b.getRGB(lo,Gu(i)),n.buffers.color.setClear(lo.r,lo.g,lo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:y,addToRenderList:p}}function l0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(_,T,ut,dt,ft){let wt=!1,ht=u(dt,ut,T);r!==ht&&(r=ht,l(r.object)),wt=f(_,dt,ut,ft),wt&&g(_,dt,ut,ft),ft!==null&&t.update(ft,i.ELEMENT_ARRAY_BUFFER),(wt||o)&&(o=!1,w(_,T,ut,dt),ft!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,T,ut){let dt=ut.wireframe===!0,ft=n[_.id];ft===void 0&&(ft={},n[_.id]=ft);let wt=ft[T.id];wt===void 0&&(wt={},ft[T.id]=wt);let ht=wt[dt];return ht===void 0&&(ht=d(c()),wt[dt]=ht),ht}function d(_){let T=[],ut=[],dt=[];for(let ft=0;ft<e;ft++)T[ft]=0,ut[ft]=0,dt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:ut,attributeDivisors:dt,object:_,attributes:{},index:null}}function f(_,T,ut,dt){let ft=r.attributes,wt=T.attributes,ht=0,Ct=ut.getAttributes();for(let yt in Ct)if(Ct[yt].location>=0){let Vt=ft[yt],Ht=wt[yt];if(Ht===void 0&&(yt==="instanceMatrix"&&_.instanceMatrix&&(Ht=_.instanceMatrix),yt==="instanceColor"&&_.instanceColor&&(Ht=_.instanceColor)),Vt===void 0||Vt.attribute!==Ht||Ht&&Vt.data!==Ht.data)return!0;ht++}return r.attributesNum!==ht||r.index!==dt}function g(_,T,ut,dt){let ft={},wt=T.attributes,ht=0,Ct=ut.getAttributes();for(let yt in Ct)if(Ct[yt].location>=0){let Vt=wt[yt];Vt===void 0&&(yt==="instanceMatrix"&&_.instanceMatrix&&(Vt=_.instanceMatrix),yt==="instanceColor"&&_.instanceColor&&(Vt=_.instanceColor));let Ht={};Ht.attribute=Vt,Vt&&Vt.data&&(Ht.data=Vt.data),ft[yt]=Ht,ht++}r.attributes=ft,r.attributesNum=ht,r.index=dt}function y(){let _=r.newAttributes;for(let T=0,ut=_.length;T<ut;T++)_[T]=0}function p(_){m(_,0)}function m(_,T){let ut=r.newAttributes,dt=r.enabledAttributes,ft=r.attributeDivisors;ut[_]=1,dt[_]===0&&(i.enableVertexAttribArray(_),dt[_]=1),ft[_]!==T&&(i.vertexAttribDivisor(_,T),ft[_]=T)}function b(){let _=r.newAttributes,T=r.enabledAttributes;for(let ut=0,dt=T.length;ut<dt;ut++)T[ut]!==_[ut]&&(i.disableVertexAttribArray(ut),T[ut]=0)}function v(_,T,ut,dt,ft,wt,ht){ht===!0?i.vertexAttribIPointer(_,T,ut,ft,wt):i.vertexAttribPointer(_,T,ut,dt,ft,wt)}function w(_,T,ut,dt){y();let ft=dt.attributes,wt=ut.getAttributes(),ht=T.defaultAttributeValues;for(let Ct in wt){let yt=wt[Ct];if(yt.location>=0){let Xt=ft[Ct];if(Xt===void 0&&(Ct==="instanceMatrix"&&_.instanceMatrix&&(Xt=_.instanceMatrix),Ct==="instanceColor"&&_.instanceColor&&(Xt=_.instanceColor)),Xt!==void 0){let Vt=Xt.normalized,Ht=Xt.itemSize,Me=t.get(Xt);if(Me===void 0)continue;let Re=Me.buffer,St=Me.type,Dt=Me.bytesPerElement,$t=St===i.INT||St===i.UNSIGNED_INT||Xt.gpuType===kl;if(Xt.isInterleavedBufferAttribute){let zt=Xt.data,ae=zt.stride,re=Xt.offset;if(zt.isInstancedInterleavedBuffer){for(let le=0;le<yt.locationSize;le++)m(yt.location+le,zt.meshPerAttribute);_.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let le=0;le<yt.locationSize;le++)p(yt.location+le);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let le=0;le<yt.locationSize;le++)v(yt.location+le,Ht/yt.locationSize,St,Vt,ae*Dt,(re+Ht/yt.locationSize*le)*Dt,$t)}else{if(Xt.isInstancedBufferAttribute){for(let zt=0;zt<yt.locationSize;zt++)m(yt.location+zt,Xt.meshPerAttribute);_.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=Xt.meshPerAttribute*Xt.count)}else for(let zt=0;zt<yt.locationSize;zt++)p(yt.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let zt=0;zt<yt.locationSize;zt++)v(yt.location+zt,Ht/yt.locationSize,St,Vt,Ht*Dt,Ht/yt.locationSize*zt*Dt,$t)}}else if(ht!==void 0){let Vt=ht[Ct];if(Vt!==void 0)switch(Vt.length){case 2:i.vertexAttrib2fv(yt.location,Vt);break;case 3:i.vertexAttrib3fv(yt.location,Vt);break;case 4:i.vertexAttrib4fv(yt.location,Vt);break;default:i.vertexAttrib1fv(yt.location,Vt)}}}}b()}function $(){R();for(let _ in n){let T=n[_];for(let ut in T){let dt=T[ut];for(let ft in dt)h(dt[ft].object),delete dt[ft];delete T[ut]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;let T=n[_.id];for(let ut in T){let dt=T[ut];for(let ft in dt)h(dt[ft].object),delete dt[ft];delete T[ut]}delete n[_.id]}function k(_){for(let T in n){let ut=n[T];if(ut[_.id]===void 0)continue;let dt=ut[_.id];for(let ft in dt)h(dt[ft].object),delete dt[ft];delete ut[_.id]}}function R(){gt(),o=!0,r!==s&&(r=s,l(r.object))}function gt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:gt,dispose:$,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:p,disableUnusedAttributes:b}}function h0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];for(let y=0;y<d.length;y++)e.update(g,n,d[y])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function u0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let k=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(k){return!(k!==Zn&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(k){let R=k===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==_i&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==si&&!R)}function c(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let k=t.get("EXT_clip_control");k.clipControlEXT(k.LOWER_LEFT_EXT,k.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),$=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:$,maxSamples:A}}function d0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new qn,a=new Ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let b=r?0:n,v=b*4,w=m.clippingState||null;c.value=w,w=h(g,d,v,f);for(let $=0;$!==v;++$)w[$]=e[$];m.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=f+y*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,w=f;v!==y;++v,w+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function f0(i){let t=new WeakMap;function e(o,a){return a===Mc?o.mapping=Hs:a===Ec&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mc||a===Ec)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new il(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vo=class extends ko{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ds=4,Bh=[.125,.215,.35,.446,.526,.582],ji=20,ja=new Vo,Hh=new fe,tc=null,ec=0,nc=0,ic=!1,Ki=(1+Math.sqrt(5))/2,Ts=1/Ki,zh=[new I(-Ki,Ts,0),new I(Ki,Ts,0),new I(-Ts,0,Ki),new I(Ts,0,Ki),new I(0,Ki,-Ts),new I(0,Ki,Ts),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],qs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tc,ec,nc),this._renderer.xr.enabled=ic,t.scissorTest=!1,ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Fr,format:Zn,colorSpace:zi,depthBuffer:!1},s=kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p0(r)),this._blurMaterial=m0(r,t,e)}return s}_compileMaterial(t){let e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,s){let a=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hh),h.toneMapping=Li,h.autoClear=!1;let f=new Xe({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new nt(new ce,f),y=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,y=!0):(f.color.copy(Hh),y=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let v=this._cubeSize;ho(s,b*v,m>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Hs||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ho(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zh[(s-r-1)%zh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new nt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):ji;p>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);let m=[],b=0;for(let k=0;k<ji;++k){let R=k/y,gt=Math.exp(-R*R/2);m.push(gt),k===0?b+=gt:k<p&&(b+=2*gt)}for(let k=0;k<m.length;k++)m[k]=m[k]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let w=this._sizeLods[s],$=3*w*(s>v-Ds?s-v+Ds:0),A=4*(this._cubeSize-w);ho(e,$,A,3*w,2*w),c.setRenderTarget(e),c.render(u,ja)}};function p0(i){let t=[],e=[],n=[],s=i,r=i-Ds+1+Bh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ds?c=Bh[o-i+Ds-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,p=2,m=1,b=new Float32Array(y*g*f),v=new Float32Array(p*g*f),w=new Float32Array(m*g*f);for(let A=0;A<f;A++){let k=A%3*2/3-1,R=A>2?0:-1,gt=[k,R,0,k+2/3,R,0,k+2/3,R+1,0,k,R,0,k+2/3,R+1,0,k,R+1,0];b.set(gt,y*g*A),v.set(d,p*g*A);let _=[A,A,A,A,A,A];w.set(_,m*g*A)}let $=new qe;$.setAttribute("position",new en(b,y)),$.setAttribute("uv",new en(v,p)),$.setAttribute("faceIndex",new en(w,m)),t.push($),s>Ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kh(i,t,e){let n=new yi(i,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function m0(i,t,e){let n=new Float32Array(ji),s=new I(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Gh(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Vh(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function g0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Mc||c===Ec,h=c===Hs||c===zs;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new qs(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new qs(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function x0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Po("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let p=0,m=y.length;p<m;p++)t.update(y[p],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let b=f.array;y=f.version;for(let v=0,w=b.length;v<w;v+=3){let $=b[v+0],A=b[v+1],k=b[v+2];d.push($,A,A,k,k,$)}}else if(g!==void 0){let b=g.array;y=g.version;for(let v=0,w=b.length/3-1;v<w;v+=3){let $=v+0,A=v+1,k=v+2;d.push($,A,A,k,k,$)}}else return;let p=new(zu(d)?zo:Ho)(d,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function y0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,y){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,g);let m=0;for(let b=0;b<g;b++)m+=f[b];for(let b=0;b<y.length;b++)e.update(m,n,y[b])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function v0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function M0(i,t,e){let n=new WeakMap,s=new We;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let gt=function(){k.dispose(),n.delete(a),a.removeEventListener("dispose",gt)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let w=a.attributes.position.count*v,$=1;w>t.maxTextureSize&&($=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let A=new Float32Array(w*$*4*u),k=new Bo(A,w,$,u);k.type=si,k.needsUpdate=!0;let R=v*4;for(let _=0;_<u;_++){let T=p[_],ut=m[_],dt=b[_],ft=w*$*4*_;for(let wt=0;wt<T.count;wt++){let ht=wt*R;f===!0&&(s.fromBufferAttribute(T,wt),A[ft+ht+0]=s.x,A[ft+ht+1]=s.y,A[ft+ht+2]=s.z,A[ft+ht+3]=0),g===!0&&(s.fromBufferAttribute(ut,wt),A[ft+ht+4]=s.x,A[ft+ht+5]=s.y,A[ft+ht+6]=s.z,A[ft+ht+7]=0),y===!0&&(s.fromBufferAttribute(dt,wt),A[ft+ht+8]=s.x,A[ft+ht+9]=s.y,A[ft+ht+10]=s.z,A[ft+ht+11]=dt.itemSize===4?s.w:1)}}d={count:u,texture:k,size:new It(w,$)},n.set(a,d),a.addEventListener("dispose",gt)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function E0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Wo=class extends vn{constructor(t,e,n,s,r,o,a,c,l,h=Ns){if(h!==Ns&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ns&&(n=ns),n===void 0&&h===Vs&&(n=Gs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Rn,this.minFilter=c!==void 0?c:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wu=new vn,Wh=new Wo(1,1),Xu=new Bo,qu=new el,Yu=new Go,Xh=[],qh=[],Yh=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function Js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xh[s];if(r===void 0&&(r=new Float32Array(s),Xh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fa(i,t){let e=qh[t];e===void 0&&(e=new Int32Array(t),qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function S0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function A0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),ln(e,n)}}function R0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Zh.set(n),i.uniformMatrix3fv(this.addr,!1,Zh),ln(e,n)}}function C0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Yh.set(n),i.uniformMatrix4fv(this.addr,!1,Yh),ln(e,n)}}function P0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function U0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function B0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wh.compareFunction=Hu,r=Wh):r=Wu,e.setTexture2D(t||r,s)}function H0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qu,s)}function z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yu,s)}function k0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xu,s)}function G0(i){switch(i){case 5126:return S0;case 35664:return w0;case 35665:return b0;case 35666:return T0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return P0;case 35667:case 35671:return I0;case 35668:case 35672:return D0;case 35669:case 35673:return L0;case 5125:return U0;case 36294:return N0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}function V0(i,t){i.uniform1fv(this.addr,t)}function W0(i,t){let e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function X0(i,t){let e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function q0(i,t){let e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function Y0(i,t){let e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Z0(i,t){let e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function J0(i,t){let e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $0(i,t){i.uniform1iv(this.addr,t)}function K0(i,t){i.uniform2iv(this.addr,t)}function Q0(i,t){i.uniform3iv(this.addr,t)}function j0(i,t){i.uniform4iv(this.addr,t)}function tg(i,t){i.uniform1uiv(this.addr,t)}function eg(i,t){i.uniform2uiv(this.addr,t)}function ng(i,t){i.uniform3uiv(this.addr,t)}function ig(i,t){i.uniform4uiv(this.addr,t)}function sg(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wu,r[o])}function rg(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qu,r[o])}function og(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yu,r[o])}function ag(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xu,r[o])}function cg(i){switch(i){case 5126:return V0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return $0;case 35667:case 35671:return K0;case 35668:case 35672:return Q0;case 35669:case 35673:return j0;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}var sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=G0(e.type)}},rl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}},ol=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},sc=/(\w+)(\])?(\[|\.)?/g;function $h(i,t){i.seq.push(t),i.map[t.id]=t}function lg(i,t,e){let n=i.name,s=n.length;for(sc.lastIndex=0;;){let r=sc.exec(n),o=sc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$h(e,l===void 0?new sl(a,i,t):new rl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ol(a),$h(e,u)),e=u}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);lg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Kh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hg=37297,ug=0;function dg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function fg(i){let t=He.getPrimaries(He.workingColorSpace),e=He.getPrimaries(i),n;switch(t===e?n="":t===Uo&&e===Lo?n="LinearDisplayP3ToLinearSRGB":t===Lo&&e===Uo&&(n="LinearSRGBToLinearDisplayP3"),i){case zi:case da:return[n,"LinearTransferOETF"];case Ze:case Zl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dg(i.getShaderSource(t),o)}else return s}function pg(i,t){let e=fg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mg(i,t){let e;switch(t){case zd:e="Linear";break;case kd:e="Reinhard";break;case Gd:e="Cineon";break;case Hl:e="ACESFilmic";break;case Wd:e="AgX";break;case zl:e="Neutral";break;case Vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uo=new I;function gg(){He.getLuminanceCoefficients(uo);let i=uo.x.toFixed(4),t=uo.y.toFixed(4),e=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function _g(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gr(i){return i!==""}function jh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(vg,Eg)}var Mg=new Map;function Eg(i,t){let e=Te[t];if(e===void 0){let n=Mg.get(t);if(n!==void 0)e=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return al(e)}var Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(i){return i.replace(Sg,wg)}function wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function bg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Tg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case zs:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ag(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===zs&&(t="ENVMAP_MODE_REFRACTION"),t}function Rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Au:t="ENVMAP_BLENDING_MULTIPLY";break;case Bd:t="ENVMAP_BLENDING_MIX";break;case Hd:t="ENVMAP_BLENDING_ADD";break}return t}function Cg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Pg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=bg(e),l=Tg(e),h=Ag(e),u=Rg(e),d=Cg(e),f=xg(e),g=_g(r),y=s.createProgram(),p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`)):(p=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),m=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?Te.tonemapping_pars_fragment:"",e.toneMapping!==Li?mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,pg("linearToOutputTexel",e.outputColorSpace),gg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),o=al(o),o=jh(o,e),o=tu(o,e),a=al(a),a=jh(a,e),a=tu(a,e),o=eu(o),a=eu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=b+p+o,w=b+m+a,$=Kh(s,s.VERTEX_SHADER,v),A=Kh(s,s.FRAGMENT_SHADER,w);s.attachShader(y,$),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function k(T){if(i.debug.checkShaderErrors){let ut=s.getProgramInfoLog(y).trim(),dt=s.getShaderInfoLog($).trim(),ft=s.getShaderInfoLog(A).trim(),wt=!0,ht=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(wt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,$,A);else{let Ct=Qh(s,$,"vertex"),yt=Qh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+ut+`
`+Ct+`
`+yt)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(dt===""||ft==="")&&(ht=!1);ht&&(T.diagnostics={runnable:wt,programLog:ut,vertexShader:{log:dt,prefix:p},fragmentShader:{log:ft,prefix:m}})}s.deleteShader($),s.deleteShader(A),R=new Os(s,y),gt=yg(s,y)}let R;this.getUniforms=function(){return R===void 0&&k(this),R};let gt;this.getAttributes=function(){return gt===void 0&&k(this),gt};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,hg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ug++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=$,this.fragmentShader=A,this}var Ig=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ll(t),e.set(t,n)),n}},ll=class{constructor(t){this.id=Ig++,this.code=t,this.usedTimes=0}};function Dg(i,t,e,n,s,r,o){let a=new Mr,c=new cl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,T,ut,dt,ft){let wt=dt.fog,ht=ft.geometry,Ct=_.isMeshStandardMaterial?dt.environment:null,yt=(_.isMeshStandardMaterial?e:t).get(_.envMap||Ct),Xt=yt&&yt.mapping===ua?yt.image.height:null,Vt=y[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let Ht=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Me=Ht!==void 0?Ht.length:0,Re=0;ht.morphAttributes.position!==void 0&&(Re=1),ht.morphAttributes.normal!==void 0&&(Re=2),ht.morphAttributes.color!==void 0&&(Re=3);let St,Dt,$t,zt;if(Vt){let jt=ni[Vt];St=jt.vertexShader,Dt=jt.fragmentShader}else St=_.vertexShader,Dt=_.fragmentShader,c.update(_),$t=c.getVertexShaderID(_),zt=c.getFragmentShaderID(_);let ae=i.getRenderTarget(),re=ft.isInstancedMesh===!0,le=ft.isBatchedMesh===!0,ge=!!_.map,bt=!!_.matcap,F=!!yt,Bt=!!_.aoMap,J=!!_.lightMap,Rt=!!_.bumpMap,Ot=!!_.normalMap,ee=!!_.displacementMap,Yt=!!_.emissiveMap,D=!!_.metalnessMap,M=!!_.roughnessMap,ot=_.anisotropy>0,et=_.clearcoat>0,Tt=_.dispersion>0,vt=_.iridescence>0,Kt=_.sheen>0,kt=_.transmission>0,Jt=ot&&!!_.anisotropyMap,Ee=et&&!!_.clearcoatMap,Nt=et&&!!_.clearcoatNormalMap,Wt=et&&!!_.clearcoatRoughnessMap,he=vt&&!!_.iridescenceMap,ue=vt&&!!_.iridescenceThicknessMap,Qt=Kt&&!!_.sheenColorMap,we=Kt&&!!_.sheenRoughnessMap,xe=!!_.specularMap,Ue=!!_.specularColorMap,K=!!_.specularIntensityMap,Zt=kt&&!!_.transmissionMap,pt=kt&&!!_.thicknessMap,C=!!_.gradientMap,V=!!_.alphaMap,Y=_.alphaTest>0,ct=!!_.alphaHash,lt=!!_.extensions,Et=Li;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Et=i.toneMapping);let Lt={shaderID:Vt,shaderType:_.type,shaderName:_.name,vertexShader:St,fragmentShader:Dt,defines:_.defines,customVertexShaderID:$t,customFragmentShaderID:zt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:le,batchingColor:le&&ft._colorsTexture!==null,instancing:re,instancingColor:re&&ft.instanceColor!==null,instancingMorph:re&&ft.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:zi,alphaToCoverage:!!_.alphaToCoverage,map:ge,matcap:bt,envMap:F,envMapMode:F&&yt.mapping,envMapCubeUVHeight:Xt,aoMap:Bt,lightMap:J,bumpMap:Rt,normalMap:Ot,displacementMap:f&&ee,emissiveMap:Yt,normalMapObjectSpace:Ot&&_.normalMapType===Zd,normalMapTangentSpace:Ot&&_.normalMapType===Bu,metalnessMap:D,roughnessMap:M,anisotropy:ot,anisotropyMap:Jt,clearcoat:et,clearcoatMap:Ee,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Wt,dispersion:Tt,iridescence:vt,iridescenceMap:he,iridescenceThicknessMap:ue,sheen:Kt,sheenColorMap:Qt,sheenRoughnessMap:we,specularMap:xe,specularColorMap:Ue,specularIntensityMap:K,transmission:kt,transmissionMap:Zt,thicknessMap:pt,gradientMap:C,opaque:_.transparent===!1&&_.blending===Us&&_.alphaToCoverage===!1,alphaMap:V,alphaTest:Y,alphaHash:ct,combine:_.combine,mapUv:ge&&p(_.map.channel),aoMapUv:Bt&&p(_.aoMap.channel),lightMapUv:J&&p(_.lightMap.channel),bumpMapUv:Rt&&p(_.bumpMap.channel),normalMapUv:Ot&&p(_.normalMap.channel),displacementMapUv:ee&&p(_.displacementMap.channel),emissiveMapUv:Yt&&p(_.emissiveMap.channel),metalnessMapUv:D&&p(_.metalnessMap.channel),roughnessMapUv:M&&p(_.roughnessMap.channel),anisotropyMapUv:Jt&&p(_.anisotropyMap.channel),clearcoatMapUv:Ee&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(_.sheenRoughnessMap.channel),specularMapUv:xe&&p(_.specularMap.channel),specularColorMapUv:Ue&&p(_.specularColorMap.channel),specularIntensityMapUv:K&&p(_.specularIntensityMap.channel),transmissionMapUv:Zt&&p(_.transmissionMap.channel),thicknessMapUv:pt&&p(_.thicknessMap.channel),alphaMapUv:V&&p(_.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Ot||ot),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!ht.attributes.uv&&(ge||V),fog:!!wt,useFog:_.fog===!0,fogExp2:!!wt&&wt.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:ft.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&ut.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:ge&&_.map.isVideoTexture===!0&&He.getTransfer(_.map.colorSpace)===$e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===An,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:lt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&_.extensions.multiDraw===!0||le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function b(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let ut in _.defines)T.push(ut),T.push(_.defines[ut]);return _.isRawShaderMaterial===!1&&(v(T,_),w(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function v(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),_.push(a.mask)}function $(_){let T=y[_.type],ut;if(T){let dt=ni[T];ut=Ef.clone(dt.uniforms)}else ut=_.uniforms;return ut}function A(_,T){let ut;for(let dt=0,ft=h.length;dt<ft;dt++){let wt=h[dt];if(wt.cacheKey===T){ut=wt,++ut.usedTimes;break}}return ut===void 0&&(ut=new Pg(i,T,_,r),h.push(ut)),ut}function k(_){if(--_.usedTimes===0){let T=h.indexOf(_);h[T]=h[h.length-1],h.pop(),_.destroy()}}function R(_){c.remove(_)}function gt(){c.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:$,acquireProgram:A,releaseProgram:k,releaseShaderCache:R,programs:h,dispose:gt}}function Lg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ug(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function iu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function su(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,y,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=p),t++,m}function a(u,d,f,g,y,p){let m=o(u,d,f,g,y,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(u,d,f,g,y,p){let m=o(u,d,f,g,y,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Ug),n.length>1&&n.sort(d||iu),s.length>1&&s.sort(d||iu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ng(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new su,i.set(n,[o])):s>=r.length?(o=new su,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new fe};break;case"SpotLight":e={position:new I,direction:new I,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Og(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Bg=0;function Hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zg(i){let t=new Fg,e=Og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new Le,o=new Le;function a(l){let h=0,u=0,d=0;for(let gt=0;gt<9;gt++)n.probe[gt].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,b=0,v=0,w=0,$=0,A=0,k=0;l.sort(Hg);for(let gt=0,_=l.length;gt<_;gt++){let T=l[gt],ut=T.color,dt=T.intensity,ft=T.distance,wt=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=ut.r*dt,u+=ut.g*dt,d+=ut.b*dt;else if(T.isLightProbe){for(let ht=0;ht<9;ht++)n.probe[ht].addScaledVector(T.sh.coefficients[ht],dt);k++}else if(T.isDirectionalLight){let ht=t.get(T);if(ht.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Ct=T.shadow,yt=e.get(T);yt.shadowIntensity=Ct.intensity,yt.shadowBias=Ct.bias,yt.shadowNormalBias=Ct.normalBias,yt.shadowRadius=Ct.radius,yt.shadowMapSize=Ct.mapSize,n.directionalShadow[f]=yt,n.directionalShadowMap[f]=wt,n.directionalShadowMatrix[f]=T.shadow.matrix,b++}n.directional[f]=ht,f++}else if(T.isSpotLight){let ht=t.get(T);ht.position.setFromMatrixPosition(T.matrixWorld),ht.color.copy(ut).multiplyScalar(dt),ht.distance=ft,ht.coneCos=Math.cos(T.angle),ht.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),ht.decay=T.decay,n.spot[y]=ht;let Ct=T.shadow;if(T.map&&(n.spotLightMap[$]=T.map,$++,Ct.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[y]=Ct.matrix,T.castShadow){let yt=e.get(T);yt.shadowIntensity=Ct.intensity,yt.shadowBias=Ct.bias,yt.shadowNormalBias=Ct.normalBias,yt.shadowRadius=Ct.radius,yt.shadowMapSize=Ct.mapSize,n.spotShadow[y]=yt,n.spotShadowMap[y]=wt,w++}y++}else if(T.isRectAreaLight){let ht=t.get(T);ht.color.copy(ut).multiplyScalar(dt),ht.halfWidth.set(T.width*.5,0,0),ht.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=ht,p++}else if(T.isPointLight){let ht=t.get(T);if(ht.color.copy(T.color).multiplyScalar(T.intensity),ht.distance=T.distance,ht.decay=T.decay,T.castShadow){let Ct=T.shadow,yt=e.get(T);yt.shadowIntensity=Ct.intensity,yt.shadowBias=Ct.bias,yt.shadowNormalBias=Ct.normalBias,yt.shadowRadius=Ct.radius,yt.shadowMapSize=Ct.mapSize,yt.shadowCameraNear=Ct.camera.near,yt.shadowCameraFar=Ct.camera.far,n.pointShadow[g]=yt,n.pointShadowMap[g]=wt,n.pointShadowMatrix[g]=T.shadow.matrix,v++}n.point[g]=ht,g++}else if(T.isHemisphereLight){let ht=t.get(T);ht.skyColor.copy(T.color).multiplyScalar(dt),ht.groundColor.copy(T.groundColor).multiplyScalar(dt),n.hemi[m]=ht,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qt.LTC_FLOAT_1,n.rectAreaLTC2=qt.LTC_FLOAT_2):(n.rectAreaLTC1=qt.LTC_HALF_1,n.rectAreaLTC2=qt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==b||R.numPointShadows!==v||R.numSpotShadows!==w||R.numSpotMaps!==$||R.numLightProbes!==k)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=w+$-A,n.spotLightMap.length=$,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=k,R.directionalLength=f,R.pointLength=g,R.spotLength=y,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=b,R.numPointShadows=v,R.numSpotShadows=w,R.numSpotMaps=$,R.numLightProbes=k,n.version=Bg++)}function c(l,h){let u=0,d=0,f=0,g=0,y=0,p=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){let v=l[m];if(v.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(v.isSpotLight){let w=n.spot[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(v.isRectAreaLight){let w=n.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let w=n.hemi[y];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),y++}}}return{setup:a,setupView:c,state:n}}function ru(i){let t=new zg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function kg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ru(i),t.set(s,[a])):r>=o.length?(a=new ru(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var hl=class extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
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
}`;function Wg(i,t,e){let n=new Er,s=new It,r=new It,o=new We,a=new hl({depthPacking:Yd}),c=new ul,l={},h=e.maxTextureSize,u={[Ni]:_n,[_n]:Ni,[An]:An},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Gg,fragmentShader:Vg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new qe;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new nt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let m=this.type;this.render=function(A,k,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let gt=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),ut=i.state;ut.setBlending(Di),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);let dt=m!==mi&&this.type===mi,ft=m===mi&&this.type!==mi;for(let wt=0,ht=A.length;wt<ht;wt++){let Ct=A[wt],yt=Ct.shadow;if(yt===void 0){console.warn("THREE.WebGLShadowMap:",Ct,"has no shadow.");continue}if(yt.autoUpdate===!1&&yt.needsUpdate===!1)continue;s.copy(yt.mapSize);let Xt=yt.getFrameExtents();if(s.multiply(Xt),r.copy(yt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Xt.x),s.x=r.x*Xt.x,yt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Xt.y),s.y=r.y*Xt.y,yt.mapSize.y=r.y)),yt.map===null||dt===!0||ft===!0){let Ht=this.type!==mi?{minFilter:Rn,magFilter:Rn}:{};yt.map!==null&&yt.map.dispose(),yt.map=new yi(s.x,s.y,Ht),yt.map.texture.name=Ct.name+".shadowMap",yt.camera.updateProjectionMatrix()}i.setRenderTarget(yt.map),i.clear();let Vt=yt.getViewportCount();for(let Ht=0;Ht<Vt;Ht++){let Me=yt.getViewport(Ht);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),ut.viewport(o),yt.updateMatrices(Ct,Ht),n=yt.getFrustum(),w(k,R,yt.camera,Ct,this.type)}yt.isPointLightShadow!==!0&&this.type===mi&&b(yt,R),yt.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(gt,_,T)};function b(A,k){let R=t.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(k,null,R,d,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(k,null,R,f,y,null)}function v(A,k,R,gt){let _=null,T=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)_=T;else if(_=R.isPointLight===!0?c:a,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){let ut=_.uuid,dt=k.uuid,ft=l[ut];ft===void 0&&(ft={},l[ut]=ft);let wt=ft[dt];wt===void 0&&(wt=_.clone(),ft[dt]=wt,k.addEventListener("dispose",$)),_=wt}if(_.visible=k.visible,_.wireframe=k.wireframe,gt===mi?_.side=k.shadowSide!==null?k.shadowSide:k.side:_.side=k.shadowSide!==null?k.shadowSide:u[k.side],_.alphaMap=k.alphaMap,_.alphaTest=k.alphaTest,_.map=k.map,_.clipShadows=k.clipShadows,_.clippingPlanes=k.clippingPlanes,_.clipIntersection=k.clipIntersection,_.displacementMap=k.displacementMap,_.displacementScale=k.displacementScale,_.displacementBias=k.displacementBias,_.wireframeLinewidth=k.wireframeLinewidth,_.linewidth=k.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let ut=i.properties.get(_);ut.light=R}return _}function w(A,k,R,gt,_){if(A.visible===!1)return;if(A.layers.test(k.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let dt=t.update(A),ft=A.material;if(Array.isArray(ft)){let wt=dt.groups;for(let ht=0,Ct=wt.length;ht<Ct;ht++){let yt=wt[ht],Xt=ft[yt.materialIndex];if(Xt&&Xt.visible){let Vt=v(A,Xt,gt,_);A.onBeforeShadow(i,A,k,R,dt,Vt,yt),i.renderBufferDirect(R,null,dt,Vt,A,yt),A.onAfterShadow(i,A,k,R,dt,Vt,yt)}}}else if(ft.visible){let wt=v(A,ft,gt,_);A.onBeforeShadow(i,A,k,R,dt,wt,null),i.renderBufferDirect(R,null,dt,wt,A,null),A.onAfterShadow(i,A,k,R,dt,wt,null)}}let ut=A.children;for(let dt=0,ft=ut.length;dt<ft;dt++)w(ut[dt],k,R,gt,_)}function $(A){A.target.removeEventListener("dispose",$);for(let R in l){let gt=l[R],_=A.target.uuid;_ in gt&&(gt[_].dispose(),delete gt[_])}}}var Xg={[pc]:mc,[gc]:yc,[xc]:vc,[Bs]:_c,[mc]:pc,[yc]:gc,[vc]:xc,[_c]:Bs};function qg(i){function t(){let K=!1,Zt=new We,pt=null,C=new We(0,0,0,0);return{setMask:function(V){pt!==V&&!K&&(i.colorMask(V,V,V,V),pt=V)},setLocked:function(V){K=V},setClear:function(V,Y,ct,lt,Et){Et===!0&&(V*=lt,Y*=lt,ct*=lt),Zt.set(V,Y,ct,lt),C.equals(Zt)===!1&&(i.clearColor(V,Y,ct,lt),C.copy(Zt))},reset:function(){K=!1,pt=null,C.set(-1,0,0,0)}}}function e(){let K=!1,Zt=!1,pt=null,C=null,V=null;return{setReversed:function(Y){Zt=Y},setTest:function(Y){Y?$t(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(Y){pt!==Y&&!K&&(i.depthMask(Y),pt=Y)},setFunc:function(Y){if(Zt&&(Y=Xg[Y]),C!==Y){switch(Y){case pc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case gc:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case xc:i.depthFunc(i.EQUAL);break;case _c:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}C=Y}},setLocked:function(Y){K=Y},setClear:function(Y){V!==Y&&(i.clearDepth(Y),V=Y)},reset:function(){K=!1,pt=null,C=null,V=null}}}function n(){let K=!1,Zt=null,pt=null,C=null,V=null,Y=null,ct=null,lt=null,Et=null;return{setTest:function(Lt){K||(Lt?$t(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Lt){Zt!==Lt&&!K&&(i.stencilMask(Lt),Zt=Lt)},setFunc:function(Lt,jt,se){(pt!==Lt||C!==jt||V!==se)&&(i.stencilFunc(Lt,jt,se),pt=Lt,C=jt,V=se)},setOp:function(Lt,jt,se){(Y!==Lt||ct!==jt||lt!==se)&&(i.stencilOp(Lt,jt,se),Y=Lt,ct=jt,lt=se)},setLocked:function(Lt){K=Lt},setClear:function(Lt){Et!==Lt&&(i.clearStencil(Lt),Et=Lt)},reset:function(){K=!1,Zt=null,pt=null,C=null,V=null,Y=null,ct=null,lt=null,Et=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,p=null,m=null,b=null,v=null,w=null,$=null,A=new fe(0,0,0),k=0,R=!1,gt=null,_=null,T=null,ut=null,dt=null,ft=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),wt=!1,ht=0,Ct=i.getParameter(i.VERSION);Ct.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Ct)[1]),wt=ht>=1):Ct.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Ct)[1]),wt=ht>=2);let yt=null,Xt={},Vt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Me=new We().fromArray(Vt),Re=new We().fromArray(Ht);function St(K,Zt,pt,C){let V=new Uint8Array(4),Y=i.createTexture();i.bindTexture(K,Y),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<pt;ct++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Zt,0,i.RGBA,1,1,C,0,i.RGBA,i.UNSIGNED_BYTE,V):i.texImage2D(Zt+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,V);return Y}let Dt={};Dt[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),$t(i.DEPTH_TEST),r.setFunc(Bs),J(!1),Rt(fh),$t(i.CULL_FACE),F(Di);function $t(K){l[K]!==!0&&(i.enable(K),l[K]=!0)}function zt(K){l[K]!==!1&&(i.disable(K),l[K]=!1)}function ae(K,Zt){return h[K]!==Zt?(i.bindFramebuffer(K,Zt),h[K]=Zt,K===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Zt),K===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Zt),!0):!1}function re(K,Zt){let pt=d,C=!1;if(K){pt=u.get(Zt),pt===void 0&&(pt=[],u.set(Zt,pt));let V=K.textures;if(pt.length!==V.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,ct=V.length;Y<ct;Y++)pt[Y]=i.COLOR_ATTACHMENT0+Y;pt.length=V.length,C=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,C=!0);C&&i.drawBuffers(pt)}function le(K){return f!==K?(i.useProgram(K),f=K,!0):!1}let ge={[Qi]:i.FUNC_ADD,[Md]:i.FUNC_SUBTRACT,[Ed]:i.FUNC_REVERSE_SUBTRACT};ge[Sd]=i.MIN,ge[wd]=i.MAX;let bt={[bd]:i.ZERO,[Td]:i.ONE,[Ad]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[Ld]:i.SRC_ALPHA_SATURATE,[Id]:i.DST_COLOR,[Cd]:i.DST_ALPHA,[Rd]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Pd]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Nd]:i.ONE_MINUS_CONSTANT_COLOR,[Fd]:i.CONSTANT_ALPHA,[Od]:i.ONE_MINUS_CONSTANT_ALPHA};function F(K,Zt,pt,C,V,Y,ct,lt,Et,Lt){if(K===Di){g===!0&&(zt(i.BLEND),g=!1);return}if(g===!1&&($t(i.BLEND),g=!0),K!==vd){if(K!==y||Lt!==R){if((p!==Qi||v!==Qi)&&(i.blendEquation(i.FUNC_ADD),p=Qi,v=Qi),Lt)switch(K){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.ONE,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}m=null,b=null,w=null,$=null,A.set(0,0,0),k=0,y=K,R=Lt}return}V=V||Zt,Y=Y||pt,ct=ct||C,(Zt!==p||V!==v)&&(i.blendEquationSeparate(ge[Zt],ge[V]),p=Zt,v=V),(pt!==m||C!==b||Y!==w||ct!==$)&&(i.blendFuncSeparate(bt[pt],bt[C],bt[Y],bt[ct]),m=pt,b=C,w=Y,$=ct),(lt.equals(A)===!1||Et!==k)&&(i.blendColor(lt.r,lt.g,lt.b,Et),A.copy(lt),k=Et),y=K,R=!1}function Bt(K,Zt){K.side===An?zt(i.CULL_FACE):$t(i.CULL_FACE);let pt=K.side===_n;Zt&&(pt=!pt),J(pt),K.blending===Us&&K.transparent===!1?F(Di):F(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),r.setFunc(K.depthFunc),r.setTest(K.depthTest),r.setMask(K.depthWrite),s.setMask(K.colorWrite);let C=K.stencilWrite;o.setTest(C),C&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ee(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?$t(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(K){gt!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),gt=K)}function Rt(K){K!==_d?($t(i.CULL_FACE),K!==_&&(K===fh?i.cullFace(i.BACK):K===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),_=K}function Ot(K){K!==T&&(wt&&i.lineWidth(K),T=K)}function ee(K,Zt,pt){K?($t(i.POLYGON_OFFSET_FILL),(ut!==Zt||dt!==pt)&&(i.polygonOffset(Zt,pt),ut=Zt,dt=pt)):zt(i.POLYGON_OFFSET_FILL)}function Yt(K){K?$t(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function D(K){K===void 0&&(K=i.TEXTURE0+ft-1),yt!==K&&(i.activeTexture(K),yt=K)}function M(K,Zt,pt){pt===void 0&&(yt===null?pt=i.TEXTURE0+ft-1:pt=yt);let C=Xt[pt];C===void 0&&(C={type:void 0,texture:void 0},Xt[pt]=C),(C.type!==K||C.texture!==Zt)&&(yt!==pt&&(i.activeTexture(pt),yt=pt),i.bindTexture(K,Zt||Dt[K]),C.type=K,C.texture=Zt)}function ot(){let K=Xt[yt];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function vt(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Kt(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function kt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Jt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ee(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Nt(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Wt(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ue(K){Me.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Me.copy(K))}function Qt(K){Re.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Re.copy(K))}function we(K,Zt){let pt=c.get(Zt);pt===void 0&&(pt=new WeakMap,c.set(Zt,pt));let C=pt.get(K);C===void 0&&(C=i.getUniformBlockIndex(Zt,K.name),pt.set(K,C))}function xe(K,Zt){let C=c.get(Zt).get(K);a.get(Zt)!==C&&(i.uniformBlockBinding(Zt,C,K.__bindingPointIndex),a.set(Zt,C))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},yt=null,Xt={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,p=null,m=null,b=null,v=null,w=null,$=null,A=new fe(0,0,0),k=0,R=!1,gt=null,_=null,T=null,ut=null,dt=null,Me.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:$t,disable:zt,bindFramebuffer:ae,drawBuffers:re,useProgram:le,setBlending:F,setMaterial:Bt,setFlipSided:J,setCullFace:Rt,setLineWidth:Ot,setPolygonOffset:ee,setScissorTest:Yt,activeTexture:D,bindTexture:M,unbindTexture:ot,compressedTexImage2D:et,compressedTexImage3D:Tt,texImage2D:Wt,texImage3D:he,updateUBOMapping:we,uniformBlockBinding:xe,texStorage2D:Ee,texStorage3D:Nt,texSubImage2D:vt,texSubImage3D:Kt,compressedTexSubImage2D:kt,compressedTexSubImage3D:Jt,scissor:ue,viewport:Qt,reset:Ue}}function ou(i,t,e,n){let s=Yg(n);switch(e){case Du:return i*t;case Uu:return i*t;case Nu:return i*t*2;case Wl:return i*t/s.components*s.byteLength;case Xl:return i*t/s.components*s.byteLength;case Fu:return i*t*2/s.components*s.byteLength;case ql:return i*t*2/s.components*s.byteLength;case Lu:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case Yl:return i*t*4/s.components*s.byteLength;case bo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bc:case Ac:return Math.max(i,16)*Math.max(t,8)/4;case wc:case Tc:return Math.max(i,8)*Math.max(t,8)/2;case Rc:case Cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Co:case Xc:case qc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ou:case Yc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zc:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yg(i){switch(i){case _i:case Cu:return{byteLength:1,components:1};case vr:case Pu:case Fr:return{byteLength:2,components:1};case Gl:case Vl:return{byteLength:2,components:4};case ns:case kl:case si:return{byteLength:4,components:1};case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Zg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new It,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,M){return f?new OffscreenCanvas(D,M):Fo("canvas")}function y(D,M,ot){let et=1,Tt=Yt(D);if((Tt.width>ot||Tt.height>ot)&&(et=ot/Math.max(Tt.width,Tt.height)),et<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let vt=Math.floor(et*Tt.width),Kt=Math.floor(et*Tt.height);u===void 0&&(u=g(vt,Kt));let kt=M?g(vt,Kt):u;return kt.width=vt,kt.height=Kt,kt.getContext("2d").drawImage(D,0,0,vt,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+vt+"x"+Kt+")."),kt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==Rn&&D.minFilter!==Yn}function m(D){i.generateMipmap(D)}function b(D,M,ot,et,Tt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let vt=M;if(M===i.RED&&(ot===i.FLOAT&&(vt=i.R32F),ot===i.HALF_FLOAT&&(vt=i.R16F),ot===i.UNSIGNED_BYTE&&(vt=i.R8)),M===i.RED_INTEGER&&(ot===i.UNSIGNED_BYTE&&(vt=i.R8UI),ot===i.UNSIGNED_SHORT&&(vt=i.R16UI),ot===i.UNSIGNED_INT&&(vt=i.R32UI),ot===i.BYTE&&(vt=i.R8I),ot===i.SHORT&&(vt=i.R16I),ot===i.INT&&(vt=i.R32I)),M===i.RG&&(ot===i.FLOAT&&(vt=i.RG32F),ot===i.HALF_FLOAT&&(vt=i.RG16F),ot===i.UNSIGNED_BYTE&&(vt=i.RG8)),M===i.RG_INTEGER&&(ot===i.UNSIGNED_BYTE&&(vt=i.RG8UI),ot===i.UNSIGNED_SHORT&&(vt=i.RG16UI),ot===i.UNSIGNED_INT&&(vt=i.RG32UI),ot===i.BYTE&&(vt=i.RG8I),ot===i.SHORT&&(vt=i.RG16I),ot===i.INT&&(vt=i.RG32I)),M===i.RGB_INTEGER&&(ot===i.UNSIGNED_BYTE&&(vt=i.RGB8UI),ot===i.UNSIGNED_SHORT&&(vt=i.RGB16UI),ot===i.UNSIGNED_INT&&(vt=i.RGB32UI),ot===i.BYTE&&(vt=i.RGB8I),ot===i.SHORT&&(vt=i.RGB16I),ot===i.INT&&(vt=i.RGB32I)),M===i.RGBA_INTEGER&&(ot===i.UNSIGNED_BYTE&&(vt=i.RGBA8UI),ot===i.UNSIGNED_SHORT&&(vt=i.RGBA16UI),ot===i.UNSIGNED_INT&&(vt=i.RGBA32UI),ot===i.BYTE&&(vt=i.RGBA8I),ot===i.SHORT&&(vt=i.RGBA16I),ot===i.INT&&(vt=i.RGBA32I)),M===i.RGB&&ot===i.UNSIGNED_INT_5_9_9_9_REV&&(vt=i.RGB9_E5),M===i.RGBA){let Kt=Tt?Do:He.getTransfer(et);ot===i.FLOAT&&(vt=i.RGBA32F),ot===i.HALF_FLOAT&&(vt=i.RGBA16F),ot===i.UNSIGNED_BYTE&&(vt=Kt===$e?i.SRGB8_ALPHA8:i.RGBA8),ot===i.UNSIGNED_SHORT_4_4_4_4&&(vt=i.RGBA4),ot===i.UNSIGNED_SHORT_5_5_5_1&&(vt=i.RGB5_A1)}return(vt===i.R16F||vt===i.R32F||vt===i.RG16F||vt===i.RG32F||vt===i.RGBA16F||vt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function v(D,M){let ot;return D?M===null||M===ns||M===Gs?ot=i.DEPTH24_STENCIL8:M===si?ot=i.DEPTH32F_STENCIL8:M===vr&&(ot=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ns||M===Gs?ot=i.DEPTH_COMPONENT24:M===si?ot=i.DEPTH_COMPONENT32F:M===vr&&(ot=i.DEPTH_COMPONENT16),ot}function w(D,M){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==Yn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function $(D){let M=D.target;M.removeEventListener("dispose",$),k(M),M.isVideoTexture&&h.delete(M)}function A(D){let M=D.target;M.removeEventListener("dispose",A),gt(M)}function k(D){let M=n.get(D);if(M.__webglInit===void 0)return;let ot=D.source,et=d.get(ot);if(et){let Tt=et[M.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&R(D),Object.keys(et).length===0&&d.delete(ot)}n.remove(D)}function R(D){let M=n.get(D);i.deleteTexture(M.__webglTexture);let ot=D.source,et=d.get(ot);delete et[M.__cacheKey],o.memory.textures--}function gt(D){let M=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(M.__webglFramebuffer[et]))for(let Tt=0;Tt<M.__webglFramebuffer[et].length;Tt++)i.deleteFramebuffer(M.__webglFramebuffer[et][Tt]);else i.deleteFramebuffer(M.__webglFramebuffer[et]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[et])}else{if(Array.isArray(M.__webglFramebuffer))for(let et=0;et<M.__webglFramebuffer.length;et++)i.deleteFramebuffer(M.__webglFramebuffer[et]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let et=0;et<M.__webglColorRenderbuffer.length;et++)M.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[et]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ot=D.textures;for(let et=0,Tt=ot.length;et<Tt;et++){let vt=n.get(ot[et]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(ot[et])}n.remove(D)}let _=0;function T(){_=0}function ut(){let D=_;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),_+=1,D}function dt(D){let M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function ft(D,M){let ot=n.get(D);if(D.isVideoTexture&&Ot(D),D.isRenderTargetTexture===!1&&D.version>0&&ot.__version!==D.version){let et=D.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(ot,D,M);return}}e.bindTexture(i.TEXTURE_2D,ot.__webglTexture,i.TEXTURE0+M)}function wt(D,M){let ot=n.get(D);if(D.version>0&&ot.__version!==D.version){Re(ot,D,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ot.__webglTexture,i.TEXTURE0+M)}function ht(D,M){let ot=n.get(D);if(D.version>0&&ot.__version!==D.version){Re(ot,D,M);return}e.bindTexture(i.TEXTURE_3D,ot.__webglTexture,i.TEXTURE0+M)}function Ct(D,M){let ot=n.get(D);if(D.version>0&&ot.__version!==D.version){St(ot,D,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture,i.TEXTURE0+M)}let yt={[ks]:i.REPEAT,[ts]:i.CLAMP_TO_EDGE,[Sc]:i.MIRRORED_REPEAT},Xt={[Rn]:i.NEAREST,[Xd]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},Vt={[Jd]:i.NEVER,[ef]:i.ALWAYS,[$d]:i.LESS,[Hu]:i.LEQUAL,[Kd]:i.EQUAL,[tf]:i.GEQUAL,[Qd]:i.GREATER,[jd]:i.NOTEQUAL};function Ht(D,M){if(M.type===si&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Yn||M.magFilter===Ra||M.magFilter===Xr||M.magFilter===es||M.minFilter===Yn||M.minFilter===Ra||M.minFilter===Xr||M.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,yt[M.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,yt[M.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,yt[M.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Xt[M.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Xt[M.minFilter]),M.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Vt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rn||M.minFilter!==Xr&&M.minFilter!==es||M.type===si&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let ot=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Me(D,M){let ot=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",$));let et=M.source,Tt=d.get(et);Tt===void 0&&(Tt={},d.set(et,Tt));let vt=dt(M);if(vt!==D.__cacheKey){Tt[vt]===void 0&&(Tt[vt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ot=!0),Tt[vt].usedTimes++;let Kt=Tt[D.__cacheKey];Kt!==void 0&&(Tt[D.__cacheKey].usedTimes--,Kt.usedTimes===0&&R(M)),D.__cacheKey=vt,D.__webglTexture=Tt[vt].texture}return ot}function Re(D,M,ot){let et=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=i.TEXTURE_3D);let Tt=Me(D,M),vt=M.source;e.bindTexture(et,D.__webglTexture,i.TEXTURE0+ot);let Kt=n.get(vt);if(vt.version!==Kt.__version||Tt===!0){e.activeTexture(i.TEXTURE0+ot);let kt=He.getPrimaries(He.workingColorSpace),Jt=M.colorSpace===Pi?null:He.getPrimaries(M.colorSpace),Ee=M.colorSpace===Pi||kt===Jt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Nt=y(M.image,!1,s.maxTextureSize);Nt=ee(M,Nt);let Wt=r.convert(M.format,M.colorSpace),he=r.convert(M.type),ue=b(M.internalFormat,Wt,he,M.colorSpace,M.isVideoTexture);Ht(et,M);let Qt,we=M.mipmaps,xe=M.isVideoTexture!==!0,Ue=Kt.__version===void 0||Tt===!0,K=vt.dataReady,Zt=w(M,Nt);if(M.isDepthTexture)ue=v(M.format===Vs,M.type),Ue&&(xe?e.texStorage2D(i.TEXTURE_2D,1,ue,Nt.width,Nt.height):e.texImage2D(i.TEXTURE_2D,0,ue,Nt.width,Nt.height,0,Wt,he,null));else if(M.isDataTexture)if(we.length>0){xe&&Ue&&e.texStorage2D(i.TEXTURE_2D,Zt,ue,we[0].width,we[0].height);for(let pt=0,C=we.length;pt<C;pt++)Qt=we[pt],xe?K&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Qt.width,Qt.height,Wt,he,Qt.data):e.texImage2D(i.TEXTURE_2D,pt,ue,Qt.width,Qt.height,0,Wt,he,Qt.data);M.generateMipmaps=!1}else xe?(Ue&&e.texStorage2D(i.TEXTURE_2D,Zt,ue,Nt.width,Nt.height),K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Nt.width,Nt.height,Wt,he,Nt.data)):e.texImage2D(i.TEXTURE_2D,0,ue,Nt.width,Nt.height,0,Wt,he,Nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){xe&&Ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,ue,we[0].width,we[0].height,Nt.depth);for(let pt=0,C=we.length;pt<C;pt++)if(Qt=we[pt],M.format!==Zn)if(Wt!==null)if(xe){if(K)if(M.layerUpdates.size>0){let V=ou(Qt.width,Qt.height,M.format,M.type);for(let Y of M.layerUpdates){let ct=Qt.data.subarray(Y*V/Qt.data.BYTES_PER_ELEMENT,(Y+1)*V/Qt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Y,Qt.width,Qt.height,1,Wt,ct,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Qt.width,Qt.height,Nt.depth,Wt,Qt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,ue,Qt.width,Qt.height,Nt.depth,0,Qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Qt.width,Qt.height,Nt.depth,Wt,he,Qt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,ue,Qt.width,Qt.height,Nt.depth,0,Wt,he,Qt.data)}else{xe&&Ue&&e.texStorage2D(i.TEXTURE_2D,Zt,ue,we[0].width,we[0].height);for(let pt=0,C=we.length;pt<C;pt++)Qt=we[pt],M.format!==Zn?Wt!==null?xe?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Qt.width,Qt.height,Wt,Qt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,ue,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?K&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Qt.width,Qt.height,Wt,he,Qt.data):e.texImage2D(i.TEXTURE_2D,pt,ue,Qt.width,Qt.height,0,Wt,he,Qt.data)}else if(M.isDataArrayTexture)if(xe){if(Ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,ue,Nt.width,Nt.height,Nt.depth),K)if(M.layerUpdates.size>0){let pt=ou(Nt.width,Nt.height,M.format,M.type);for(let C of M.layerUpdates){let V=Nt.data.subarray(C*pt/Nt.data.BYTES_PER_ELEMENT,(C+1)*pt/Nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,C,Nt.width,Nt.height,1,Wt,he,V)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Nt.width,Nt.height,Nt.depth,Wt,he,Nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,Nt.width,Nt.height,Nt.depth,0,Wt,he,Nt.data);else if(M.isData3DTexture)xe?(Ue&&e.texStorage3D(i.TEXTURE_3D,Zt,ue,Nt.width,Nt.height,Nt.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Nt.width,Nt.height,Nt.depth,Wt,he,Nt.data)):e.texImage3D(i.TEXTURE_3D,0,ue,Nt.width,Nt.height,Nt.depth,0,Wt,he,Nt.data);else if(M.isFramebufferTexture){if(Ue)if(xe)e.texStorage2D(i.TEXTURE_2D,Zt,ue,Nt.width,Nt.height);else{let pt=Nt.width,C=Nt.height;for(let V=0;V<Zt;V++)e.texImage2D(i.TEXTURE_2D,V,ue,pt,C,0,Wt,he,null),pt>>=1,C>>=1}}else if(we.length>0){if(xe&&Ue){let pt=Yt(we[0]);e.texStorage2D(i.TEXTURE_2D,Zt,ue,pt.width,pt.height)}for(let pt=0,C=we.length;pt<C;pt++)Qt=we[pt],xe?K&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Wt,he,Qt):e.texImage2D(i.TEXTURE_2D,pt,ue,Wt,he,Qt);M.generateMipmaps=!1}else if(xe){if(Ue){let pt=Yt(Nt);e.texStorage2D(i.TEXTURE_2D,Zt,ue,pt.width,pt.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,he,Nt)}else e.texImage2D(i.TEXTURE_2D,0,ue,Wt,he,Nt);p(M)&&m(et),Kt.__version=vt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function St(D,M,ot){if(M.image.length!==6)return;let et=Me(D,M),Tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ot);let vt=n.get(Tt);if(Tt.version!==vt.__version||et===!0){e.activeTexture(i.TEXTURE0+ot);let Kt=He.getPrimaries(He.workingColorSpace),kt=M.colorSpace===Pi?null:He.getPrimaries(M.colorSpace),Jt=M.colorSpace===Pi||Kt===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,Nt=M.image[0]&&M.image[0].isDataTexture,Wt=[];for(let C=0;C<6;C++)!Ee&&!Nt?Wt[C]=y(M.image[C],!0,s.maxCubemapSize):Wt[C]=Nt?M.image[C].image:M.image[C],Wt[C]=ee(M,Wt[C]);let he=Wt[0],ue=r.convert(M.format,M.colorSpace),Qt=r.convert(M.type),we=b(M.internalFormat,ue,Qt,M.colorSpace),xe=M.isVideoTexture!==!0,Ue=vt.__version===void 0||et===!0,K=Tt.dataReady,Zt=w(M,he);Ht(i.TEXTURE_CUBE_MAP,M);let pt;if(Ee){xe&&Ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,we,he.width,he.height);for(let C=0;C<6;C++){pt=Wt[C].mipmaps;for(let V=0;V<pt.length;V++){let Y=pt[V];M.format!==Zn?ue!==null?xe?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,V,0,0,Y.width,Y.height,ue,Y.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,V,we,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,V,0,0,Y.width,Y.height,ue,Qt,Y.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,V,we,Y.width,Y.height,0,ue,Qt,Y.data)}}}else{if(pt=M.mipmaps,xe&&Ue){pt.length>0&&Zt++;let C=Yt(Wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,we,C.width,C.height)}for(let C=0;C<6;C++)if(Nt){xe?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Wt[C].width,Wt[C].height,ue,Qt,Wt[C].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,we,Wt[C].width,Wt[C].height,0,ue,Qt,Wt[C].data);for(let V=0;V<pt.length;V++){let ct=pt[V].image[C].image;xe?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,V+1,0,0,ct.width,ct.height,ue,Qt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,V+1,we,ct.width,ct.height,0,ue,Qt,ct.data)}}else{xe?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,ue,Qt,Wt[C]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,we,ue,Qt,Wt[C]);for(let V=0;V<pt.length;V++){let Y=pt[V];xe?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,V+1,0,0,ue,Qt,Y.image[C]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,V+1,we,ue,Qt,Y.image[C])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),vt.__version=Tt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Dt(D,M,ot,et,Tt,vt){let Kt=r.convert(ot.format,ot.colorSpace),kt=r.convert(ot.type),Jt=b(ot.internalFormat,Kt,kt,ot.colorSpace);if(!n.get(M).__hasExternalTextures){let Nt=Math.max(1,M.width>>vt),Wt=Math.max(1,M.height>>vt);Tt===i.TEXTURE_3D||Tt===i.TEXTURE_2D_ARRAY?e.texImage3D(Tt,vt,Jt,Nt,Wt,M.depth,0,Kt,kt,null):e.texImage2D(Tt,vt,Jt,Nt,Wt,0,Kt,kt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Tt,n.get(ot).__webglTexture,0,J(M)):(Tt===i.TEXTURE_2D||Tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,Tt,n.get(ot).__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(D,M,ot){if(i.bindRenderbuffer(i.RENDERBUFFER,D),M.depthBuffer){let et=M.depthTexture,Tt=et&&et.isDepthTexture?et.type:null,vt=v(M.stencilBuffer,Tt),Kt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=J(M);Rt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,vt,M.width,M.height):ot?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,vt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,vt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Kt,i.RENDERBUFFER,D)}else{let et=M.textures;for(let Tt=0;Tt<et.length;Tt++){let vt=et[Tt],Kt=r.convert(vt.format,vt.colorSpace),kt=r.convert(vt.type),Jt=b(vt.internalFormat,Kt,kt,vt.colorSpace),Ee=J(M);ot&&Rt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Jt,M.width,M.height):Rt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Jt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Jt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ft(M.depthTexture,0);let et=n.get(M.depthTexture).__webglTexture,Tt=J(M);if(M.depthTexture.format===Ns)Rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(M.depthTexture.format===Vs)Rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function ae(D){let M=n.get(D),ot=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){let et=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){let Tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",Tt)};et.addEventListener("dispose",Tt),M.__depthDisposeCallback=Tt}M.__boundDepthTexture=et}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");zt(M.__webglFramebuffer,D)}else if(ot){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=i.createRenderbuffer(),$t(M.__webglDepthbuffer[et],D,!1);else{let Tt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=M.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,vt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),$t(M.__webglDepthbuffer,D,!1);else{let et=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(D,M,ot){let et=n.get(D);M!==void 0&&Dt(et.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ot!==void 0&&ae(D)}function le(D){let M=D.texture,ot=n.get(D),et=n.get(M);D.addEventListener("dispose",A);let Tt=D.textures,vt=D.isWebGLCubeRenderTarget===!0,Kt=Tt.length>1;if(Kt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=M.version,o.memory.textures++),vt){ot.__webglFramebuffer=[];for(let kt=0;kt<6;kt++)if(M.mipmaps&&M.mipmaps.length>0){ot.__webglFramebuffer[kt]=[];for(let Jt=0;Jt<M.mipmaps.length;Jt++)ot.__webglFramebuffer[kt][Jt]=i.createFramebuffer()}else ot.__webglFramebuffer[kt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ot.__webglFramebuffer=[];for(let kt=0;kt<M.mipmaps.length;kt++)ot.__webglFramebuffer[kt]=i.createFramebuffer()}else ot.__webglFramebuffer=i.createFramebuffer();if(Kt)for(let kt=0,Jt=Tt.length;kt<Jt;kt++){let Ee=n.get(Tt[kt]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Rt(D)===!1){ot.__webglMultisampledFramebuffer=i.createFramebuffer(),ot.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let kt=0;kt<Tt.length;kt++){let Jt=Tt[kt];ot.__webglColorRenderbuffer[kt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ot.__webglColorRenderbuffer[kt]);let Ee=r.convert(Jt.format,Jt.colorSpace),Nt=r.convert(Jt.type),Wt=b(Jt.internalFormat,Ee,Nt,Jt.colorSpace,D.isXRRenderTarget===!0),he=J(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Wt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[kt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ot.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(ot.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,M);for(let kt=0;kt<6;kt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Jt=0;Jt<M.mipmaps.length;Jt++)Dt(ot.__webglFramebuffer[kt][Jt],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Jt);else Dt(ot.__webglFramebuffer[kt],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0);p(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Kt){for(let kt=0,Jt=Tt.length;kt<Jt;kt++){let Ee=Tt[kt],Nt=n.get(Ee);e.bindTexture(i.TEXTURE_2D,Nt.__webglTexture),Ht(i.TEXTURE_2D,Ee),Dt(ot.__webglFramebuffer,D,Ee,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,0),p(Ee)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let kt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(kt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(kt,et.__webglTexture),Ht(kt,M),M.mipmaps&&M.mipmaps.length>0)for(let Jt=0;Jt<M.mipmaps.length;Jt++)Dt(ot.__webglFramebuffer[Jt],D,M,i.COLOR_ATTACHMENT0,kt,Jt);else Dt(ot.__webglFramebuffer,D,M,i.COLOR_ATTACHMENT0,kt,0);p(M)&&m(kt),e.unbindTexture()}D.depthBuffer&&ae(D)}function ge(D){let M=D.textures;for(let ot=0,et=M.length;ot<et;ot++){let Tt=M[ot];if(p(Tt)){let vt=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Kt=n.get(Tt).__webglTexture;e.bindTexture(vt,Kt),m(vt),e.unbindTexture()}}}let bt=[],F=[];function Bt(D){if(D.samples>0){if(Rt(D)===!1){let M=D.textures,ot=D.width,et=D.height,Tt=i.COLOR_BUFFER_BIT,vt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Kt=n.get(D),kt=M.length>1;if(kt)for(let Jt=0;Jt<M.length;Jt++)e.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Jt=0;Jt<M.length;Jt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Tt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Tt|=i.STENCIL_BUFFER_BIT)),kt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Kt.__webglColorRenderbuffer[Jt]);let Ee=n.get(M[Jt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,ot,et,0,0,ot,et,Tt,i.NEAREST),c===!0&&(bt.length=0,F.length=0,bt.push(i.COLOR_ATTACHMENT0+Jt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(bt.push(vt),F.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),kt)for(let Jt=0;Jt<M.length;Jt++){e.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.RENDERBUFFER,Kt.__webglColorRenderbuffer[Jt]);let Ee=n.get(M[Jt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.TEXTURE_2D,Ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let M=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function J(D){return Math.min(s.maxSamples,D.samples)}function Rt(D){let M=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ot(D){let M=o.render.frame;h.get(D)!==M&&(h.set(D,M),D.update())}function ee(D,M){let ot=D.colorSpace,et=D.format,Tt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ot!==zi&&ot!==Pi&&(He.getTransfer(ot)===$e?(et!==Zn||Tt!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),M}function Yt(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=ut,this.resetTextureUnits=T,this.setTexture2D=ft,this.setTexture2DArray=wt,this.setTexture3D=ht,this.setTextureCube=Ct,this.rebindTextures=re,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Rt}function Jg(i,t){function e(n,s=Pi){let r,o=He.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return i.BYTE;if(n===Pu)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===ns)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===Du)return i.ALPHA;if(n===Lu)return i.RGB;if(n===Zn)return i.RGBA;if(n===Uu)return i.LUMINANCE;if(n===Nu)return i.LUMINANCE_ALPHA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===Fu)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Yl)return i.RGBA_INTEGER;if(n===bo||n===To||n===Ao||n===Ro)if(o===$e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===bc||n===Tc||n===Ac)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Cc||n===Pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rc||n===Cc)return o===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ic||n===Dc||n===Lc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===Hc||n===zc||n===kc||n===Gc||n===Vc||n===Wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ic)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return o===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Xc||n===qc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return o===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ou||n===Yc||n===Zc||n===Jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dl=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},$g={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($g)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`,fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new vn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:Kg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new Oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pl=class extends Fi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,y=new fl,p=e.getContextAttributes(),m=null,b=null,v=[],w=[],$=new It,A=null,k=new Ke;k.layers.enable(1),k.viewport=new We;let R=new Ke;R.layers.enable(2),R.viewport=new We;let gt=[k,R],_=new dl;_.layers.enable(1),_.layers.enable(2);let T=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(St){let Dt=v[St];return Dt===void 0&&(Dt=new xr,v[St]=Dt),Dt.getTargetRaySpace()},this.getControllerGrip=function(St){let Dt=v[St];return Dt===void 0&&(Dt=new xr,v[St]=Dt),Dt.getGripSpace()},this.getHand=function(St){let Dt=v[St];return Dt===void 0&&(Dt=new xr,v[St]=Dt),Dt.getHandSpace()};function dt(St){let Dt=w.indexOf(St.inputSource);if(Dt===-1)return;let $t=v[Dt];$t!==void 0&&($t.update(St.inputSource,St.frame,l||o),$t.dispatchEvent({type:St.type,data:St.inputSource}))}function ft(){s.removeEventListener("select",dt),s.removeEventListener("selectstart",dt),s.removeEventListener("selectend",dt),s.removeEventListener("squeeze",dt),s.removeEventListener("squeezestart",dt),s.removeEventListener("squeezeend",dt),s.removeEventListener("end",ft),s.removeEventListener("inputsourceschange",wt);for(let St=0;St<v.length;St++){let Dt=w[St];Dt!==null&&(w[St]=null,v[St].disconnect(Dt))}T=null,ut=null,y.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,b=null,Re.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize($.width,$.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(St){r=St,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(St){a=St,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(St){l=St},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(St){if(s=St,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",dt),s.addEventListener("selectstart",dt),s.addEventListener("selectend",dt),s.addEventListener("squeeze",dt),s.addEventListener("squeezestart",dt),s.addEventListener("squeezeend",dt),s.addEventListener("end",ft),s.addEventListener("inputsourceschange",wt),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize($),s.renderState.layers===void 0){let Dt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new yi(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Dt=null,$t=null,zt=null;p.depth&&(zt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=p.stencil?Vs:Ns,$t=p.stencil?Gs:ns);let ae={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new yi(d.textureWidth,d.textureHeight,{format:Zn,type:_i,depthTexture:new Wo(d.textureWidth,d.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function wt(St){for(let Dt=0;Dt<St.removed.length;Dt++){let $t=St.removed[Dt],zt=w.indexOf($t);zt>=0&&(w[zt]=null,v[zt].disconnect($t))}for(let Dt=0;Dt<St.added.length;Dt++){let $t=St.added[Dt],zt=w.indexOf($t);if(zt===-1){for(let re=0;re<v.length;re++)if(re>=w.length){w.push($t),zt=re;break}else if(w[re]===null){w[re]=$t,zt=re;break}if(zt===-1)break}let ae=v[zt];ae&&ae.connect($t)}}let ht=new I,Ct=new I;function yt(St,Dt,$t){ht.setFromMatrixPosition(Dt.matrixWorld),Ct.setFromMatrixPosition($t.matrixWorld);let zt=ht.distanceTo(Ct),ae=Dt.projectionMatrix.elements,re=$t.projectionMatrix.elements,le=ae[14]/(ae[10]-1),ge=ae[14]/(ae[10]+1),bt=(ae[9]+1)/ae[5],F=(ae[9]-1)/ae[5],Bt=(ae[8]-1)/ae[0],J=(re[8]+1)/re[0],Rt=le*Bt,Ot=le*J,ee=zt/(-Bt+J),Yt=ee*-Bt;if(Dt.matrixWorld.decompose(St.position,St.quaternion,St.scale),St.translateX(Yt),St.translateZ(ee),St.matrixWorld.compose(St.position,St.quaternion,St.scale),St.matrixWorldInverse.copy(St.matrixWorld).invert(),ae[10]===-1)St.projectionMatrix.copy(Dt.projectionMatrix),St.projectionMatrixInverse.copy(Dt.projectionMatrixInverse);else{let D=le+ee,M=ge+ee,ot=Rt-Yt,et=Ot+(zt-Yt),Tt=bt*ge/M*D,vt=F*ge/M*D;St.projectionMatrix.makePerspective(ot,et,Tt,vt,D,M),St.projectionMatrixInverse.copy(St.projectionMatrix).invert()}}function Xt(St,Dt){Dt===null?St.matrixWorld.copy(St.matrix):St.matrixWorld.multiplyMatrices(Dt.matrixWorld,St.matrix),St.matrixWorldInverse.copy(St.matrixWorld).invert()}this.updateCamera=function(St){if(s===null)return;let Dt=St.near,$t=St.far;y.texture!==null&&(y.depthNear>0&&(Dt=y.depthNear),y.depthFar>0&&($t=y.depthFar)),_.near=R.near=k.near=Dt,_.far=R.far=k.far=$t,(T!==_.near||ut!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,ut=_.far);let zt=St.parent,ae=_.cameras;Xt(_,zt);for(let re=0;re<ae.length;re++)Xt(ae[re],zt);ae.length===2?yt(_,k,R):_.projectionMatrix.copy(k.projectionMatrix),Vt(St,_,zt)};function Vt(St,Dt,$t){$t===null?St.matrix.copy(Dt.matrixWorld):(St.matrix.copy($t.matrixWorld),St.matrix.invert(),St.matrix.multiply(Dt.matrixWorld)),St.matrix.decompose(St.position,St.quaternion,St.scale),St.updateMatrixWorld(!0),St.projectionMatrix.copy(Dt.projectionMatrix),St.projectionMatrixInverse.copy(Dt.projectionMatrixInverse),St.isPerspectiveCamera&&(St.fov=Qc*2*Math.atan(1/St.projectionMatrix.elements[5]),St.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(St){c=St,d!==null&&(d.fixedFoveation=St),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=St)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let Ht=null;function Me(St,Dt){if(h=Dt.getViewerPose(l||o),g=Dt,h!==null){let $t=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let zt=!1;$t.length!==_.cameras.length&&(_.cameras.length=0,zt=!0);for(let re=0;re<$t.length;re++){let le=$t[re],ge=null;if(f!==null)ge=f.getViewport(le);else{let F=u.getViewSubImage(d,le);ge=F.viewport,re===0&&(t.setRenderTargetTextures(b,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(b))}let bt=gt[re];bt===void 0&&(bt=new Ke,bt.layers.enable(re),bt.viewport=new We,gt[re]=bt),bt.matrix.fromArray(le.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(le.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(ge.x,ge.y,ge.width,ge.height),re===0&&(_.matrix.copy(bt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),zt===!0&&_.cameras.push(bt)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")){let re=u.getDepthInformation($t[0]);re&&re.isValid&&re.texture&&y.init(t,re,s.renderState)}}for(let $t=0;$t<v.length;$t++){let zt=w[$t],ae=v[$t];zt!==null&&ae!==void 0&&ae.update(zt,Dt,l||o)}Ht&&Ht(St,Dt),Dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Dt}),g=null}let Re=new Vu;Re.setAnimationLoop(Me),this.setAnimationLoop=function(St){Ht=St},this.dispose=function(){}}},$i=new On,jg=new Le;function tx(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Gu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,b,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=t.get(m),v=b.envMap,w=b.envMapRotation;v&&(p.envMap.value=v,$i.copy(w),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),p.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler($i)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ex(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){let w=v.program;n.uniformBlockBinding(b,w)}function l(b,v){let w=s[b.id];w===void 0&&(g(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",p));let $=v.program;n.updateUBOMapping(b,$);let A=t.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function h(b){let v=u();b.__bindingPointIndex=v;let w=i.createBuffer(),$=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,$,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let v=s[b.id],w=b.uniforms,$=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,k=w.length;A<k;A++){let R=Array.isArray(w[A])?w[A]:[w[A]];for(let gt=0,_=R.length;gt<_;gt++){let T=R[gt];if(f(T,A,gt,$)===!0){let ut=T.__offset,dt=Array.isArray(T.value)?T.value:[T.value],ft=0;for(let wt=0;wt<dt.length;wt++){let ht=dt[wt],Ct=y(ht);typeof ht=="number"||typeof ht=="boolean"?(T.__data[0]=ht,i.bufferSubData(i.UNIFORM_BUFFER,ut+ft,T.__data)):ht.isMatrix3?(T.__data[0]=ht.elements[0],T.__data[1]=ht.elements[1],T.__data[2]=ht.elements[2],T.__data[3]=0,T.__data[4]=ht.elements[3],T.__data[5]=ht.elements[4],T.__data[6]=ht.elements[5],T.__data[7]=0,T.__data[8]=ht.elements[6],T.__data[9]=ht.elements[7],T.__data[10]=ht.elements[8],T.__data[11]=0):(ht.toArray(T.__data,ft),ft+=Ct.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ut,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,v,w,$){let A=b.value,k=v+"_"+w;if($[k]===void 0)return typeof A=="number"||typeof A=="boolean"?$[k]=A:$[k]=A.clone(),!0;{let R=$[k];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return $[k]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(b){let v=b.uniforms,w=0,$=16;for(let k=0,R=v.length;k<R;k++){let gt=Array.isArray(v[k])?v[k]:[v[k]];for(let _=0,T=gt.length;_<T;_++){let ut=gt[_],dt=Array.isArray(ut.value)?ut.value:[ut.value];for(let ft=0,wt=dt.length;ft<wt;ft++){let ht=dt[ft],Ct=y(ht),yt=w%$,Xt=yt%Ct.boundary,Vt=yt+Xt;w+=Xt,Vt!==0&&$-Vt<Ct.storage&&(w+=$-Vt),ut.__data=new Float32Array(Ct.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=w,w+=Ct.storage}}}let A=w%$;return A>0&&(w+=$-A),b.__size=w,b.__cache={},this}function y(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){let v=b.target;v.removeEventListener("dispose",p);let w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Xo=class{constructor(t={}){let{canvas:e=sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=Li,this.toneMappingExposure=1;let v=this,w=!1,$=0,A=0,k=null,R=-1,gt=null,_=new We,T=new We,ut=null,dt=new fe(0),ft=0,wt=e.width,ht=e.height,Ct=1,yt=null,Xt=null,Vt=new We(0,0,wt,ht),Ht=new We(0,0,wt,ht),Me=!1,Re=new Er,St=!1,Dt=!1,$t=new Le,zt=new Le,ae=new I,re=new We,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function bt(){return k===null?Ct:1}let F=n;function Bt(x,S){return e.getContext(x,S)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",C,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",Y,!1),F===null){let S="webgl2";if(F=Bt(S,x),F===null)throw Bt(S)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let J,Rt,Ot,ee,Yt,D,M,ot,et,Tt,vt,Kt,kt,Jt,Ee,Nt,Wt,he,ue,Qt,we,xe,Ue,K;function Zt(){J=new x0(F),J.init(),xe=new Jg(F,J),Rt=new u0(F,J,t,xe),Ot=new qg(F),Rt.reverseDepthBuffer&&Ot.buffers.depth.setReversed(!0),ee=new v0(F),Yt=new Lg,D=new Zg(F,J,Ot,Yt,Rt,xe,ee),M=new f0(v),ot=new g0(v),et=new Af(F),Ue=new l0(F,et),Tt=new _0(F,et,ee,Ue),vt=new E0(F,Tt,et,ee),ue=new M0(F,Rt,D),Nt=new d0(Yt),Kt=new Dg(v,M,ot,J,Rt,Ue,Nt),kt=new tx(v,Yt),Jt=new Ng,Ee=new kg(J),he=new c0(v,M,ot,Ot,vt,d,c),Wt=new Wg(v,vt,Rt),K=new ex(F,ee,Rt,Ot),Qt=new h0(F,J,ee),we=new y0(F,J,ee),ee.programs=Kt.programs,v.capabilities=Rt,v.extensions=J,v.properties=Yt,v.renderLists=Jt,v.shadowMap=Wt,v.state=Ot,v.info=ee}Zt();let pt=new pl(v,F);this.xr=pt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let x=J.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=J.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ct},this.setPixelRatio=function(x){x!==void 0&&(Ct=x,this.setSize(wt,ht,!1))},this.getSize=function(x){return x.set(wt,ht)},this.setSize=function(x,S,B=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}wt=x,ht=S,e.width=Math.floor(x*Ct),e.height=Math.floor(S*Ct),B===!0&&(e.style.width=x+"px",e.style.height=S+"px"),this.setViewport(0,0,x,S)},this.getDrawingBufferSize=function(x){return x.set(wt*Ct,ht*Ct).floor()},this.setDrawingBufferSize=function(x,S,B){wt=x,ht=S,Ct=B,e.width=Math.floor(x*B),e.height=Math.floor(S*B),this.setViewport(0,0,x,S)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(Vt)},this.setViewport=function(x,S,B,N){x.isVector4?Vt.set(x.x,x.y,x.z,x.w):Vt.set(x,S,B,N),Ot.viewport(_.copy(Vt).multiplyScalar(Ct).round())},this.getScissor=function(x){return x.copy(Ht)},this.setScissor=function(x,S,B,N){x.isVector4?Ht.set(x.x,x.y,x.z,x.w):Ht.set(x,S,B,N),Ot.scissor(T.copy(Ht).multiplyScalar(Ct).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(x){Ot.setScissorTest(Me=x)},this.setOpaqueSort=function(x){yt=x},this.setTransparentSort=function(x){Xt=x},this.getClearColor=function(x){return x.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(x=!0,S=!0,B=!0){let N=0;if(x){let z=!1;if(k!==null){let at=k.texture.format;z=at===Yl||at===ql||at===Xl}if(z){let at=k.texture.type,q=at===_i||at===ns||at===vr||at===Gs||at===Gl||at===Vl,j=he.getClearColor(),mt=he.getClearAlpha(),_t=j.r,Pt=j.g,tt=j.b;q?(f[0]=_t,f[1]=Pt,f[2]=tt,f[3]=mt,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=_t,g[1]=Pt,g[2]=tt,g[3]=mt,F.clearBufferiv(F.COLOR,0,g))}else N|=F.COLOR_BUFFER_BIT}S&&(N|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(N|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",C,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",Y,!1),Jt.dispose(),Ee.dispose(),Yt.dispose(),M.dispose(),ot.dispose(),vt.dispose(),Ue.dispose(),K.dispose(),Kt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Ne),pt.removeEventListener("sessionend",Pe),Ce.stop()};function C(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let x=ee.autoReset,S=Wt.enabled,B=Wt.autoUpdate,N=Wt.needsUpdate,z=Wt.type;Zt(),ee.autoReset=x,Wt.enabled=S,Wt.autoUpdate=B,Wt.needsUpdate=N,Wt.type=z}function Y(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ct(x){let S=x.target;S.removeEventListener("dispose",ct),lt(S)}function lt(x){Et(x),Yt.remove(x)}function Et(x){let S=Yt.get(x).programs;S!==void 0&&(S.forEach(function(B){Kt.releaseProgram(B)}),x.isShaderMaterial&&Kt.releaseShaderCache(x))}this.renderBufferDirect=function(x,S,B,N,z,at){S===null&&(S=le);let q=z.isMesh&&z.matrixWorld.determinant()<0,j=rt(x,S,B,N,z);Ot.setMaterial(N,q);let mt=B.index,_t=1;if(N.wireframe===!0){if(mt=Tt.getWireframeAttribute(B),mt===void 0)return;_t=2}let Pt=B.drawRange,tt=B.attributes.position,Mt=Pt.start*_t,Ut=(Pt.start+Pt.count)*_t;at!==null&&(Mt=Math.max(Mt,at.start*_t),Ut=Math.min(Ut,(at.start+at.count)*_t)),mt!==null?(Mt=Math.max(Mt,0),Ut=Math.min(Ut,mt.count)):tt!=null&&(Mt=Math.max(Mt,0),Ut=Math.min(Ut,tt.count));let At=Ut-Mt;if(At<0||At===1/0)return;Ue.setup(z,N,j,B,mt);let ie,ne=Qt;if(mt!==null&&(ie=et.get(mt),ne=we,ne.setIndex(ie)),z.isMesh)N.wireframe===!0?(Ot.setLineWidth(N.wireframeLinewidth*bt()),ne.setMode(F.LINES)):ne.setMode(F.TRIANGLES);else if(z.isLine){let Gt=N.linewidth;Gt===void 0&&(Gt=1),Ot.setLineWidth(Gt*bt()),z.isLineSegments?ne.setMode(F.LINES):z.isLineLoop?ne.setMode(F.LINE_LOOP):ne.setMode(F.LINE_STRIP)}else z.isPoints?ne.setMode(F.POINTS):z.isSprite&&ne.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ne.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ne.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Gt=z._multiDrawStarts,me=z._multiDrawCounts,be=z._multiDrawCount,nn=mt?et.get(mt).bytesPerElement:1,mn=Yt.get(N).currentProgram.getUniforms();for(let sn=0;sn<be;sn++)mn.setValue(F,"_gl_DrawID",sn),ne.render(Gt[sn]/nn,me[sn])}else if(z.isInstancedMesh)ne.renderInstances(Mt,At,z.count);else if(B.isInstancedBufferGeometry){let Gt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,me=Math.min(B.instanceCount,Gt);ne.renderInstances(Mt,At,me)}else ne.render(Mt,At)};function Lt(x,S,B){x.transparent===!0&&x.side===An&&x.forceSinglePass===!1?(x.side=_n,x.needsUpdate=!0,O(x,S,B),x.side=Ni,x.needsUpdate=!0,O(x,S,B),x.side=An):O(x,S,B)}this.compile=function(x,S,B=null){B===null&&(B=x),p=Ee.get(B),p.init(S),b.push(p),B.traverseVisible(function(z){z.isLight&&z.layers.test(S.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),x!==B&&x.traverseVisible(function(z){z.isLight&&z.layers.test(S.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let N=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let at=z.material;if(at)if(Array.isArray(at))for(let q=0;q<at.length;q++){let j=at[q];Lt(j,B,z),N.add(j)}else Lt(at,B,z),N.add(at)}),b.pop(),p=null,N},this.compileAsync=function(x,S,B=null){let N=this.compile(x,S,B);return new Promise(z=>{function at(){if(N.forEach(function(q){Yt.get(q).currentProgram.isReady()&&N.delete(q)}),N.size===0){z(x);return}setTimeout(at,10)}J.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let jt=null;function se(x){jt&&jt(x)}function Ne(){Ce.stop()}function Pe(){Ce.start()}let Ce=new Vu;Ce.setAnimationLoop(se),typeof self!="undefined"&&Ce.setContext(self),this.setAnimationLoop=function(x){jt=x,pt.setAnimationLoop(x),x===null?Ce.stop():Ce.start()},pt.addEventListener("sessionstart",Ne),pt.addEventListener("sessionend",Pe),this.render=function(x,S){if(S!==void 0&&S.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(S),S=pt.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,S,k),p=Ee.get(x,b.length),p.init(S),b.push(p),zt.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),Re.setFromProjectionMatrix(zt),Dt=this.localClippingEnabled,St=Nt.init(this.clippingPlanes,Dt),y=Jt.get(x,m.length),y.init(),m.push(y),pt.enabled===!0&&pt.isPresenting===!0){let at=v.xr.getDepthSensingMesh();at!==null&&ve(at,S,-1/0,v.sortObjects)}ve(x,S,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(yt,Xt),ge=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,ge&&he.addToRenderList(y,x),this.info.render.frame++,St===!0&&Nt.beginShadows();let B=p.state.shadowsArray;Wt.render(B,x,S),St===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let N=y.opaque,z=y.transmissive;if(p.setupLights(),S.isArrayCamera){let at=S.cameras;if(z.length>0)for(let q=0,j=at.length;q<j;q++){let mt=at[q];U(N,z,x,mt)}ge&&he.render(x);for(let q=0,j=at.length;q<j;q++){let mt=at[q];L(y,x,mt,mt.viewport)}}else z.length>0&&U(N,z,x,S),ge&&he.render(x),L(y,x,S);k!==null&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),x.isScene===!0&&x.onAfterRender(v,x,S),Ue.resetDefaultState(),R=-1,gt=null,b.pop(),b.length>0?(p=b[b.length-1],St===!0&&Nt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function ve(x,S,B,N){if(x.visible===!1)return;if(x.layers.test(S.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(S);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Re.intersectsSprite(x)){N&&re.setFromMatrixPosition(x.matrixWorld).applyMatrix4(zt);let q=vt.update(x),j=x.material;j.visible&&y.push(x,q,j,B,re.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Re.intersectsObject(x))){let q=vt.update(x),j=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),re.copy(x.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),re.copy(q.boundingSphere.center)),re.applyMatrix4(x.matrixWorld).applyMatrix4(zt)),Array.isArray(j)){let mt=q.groups;for(let _t=0,Pt=mt.length;_t<Pt;_t++){let tt=mt[_t],Mt=j[tt.materialIndex];Mt&&Mt.visible&&y.push(x,q,Mt,B,re.z,tt)}}else j.visible&&y.push(x,q,j,B,re.z,null)}}let at=x.children;for(let q=0,j=at.length;q<j;q++)ve(at[q],S,B,N)}function L(x,S,B,N){let z=x.opaque,at=x.transmissive,q=x.transparent;p.setupLightsView(B),St===!0&&Nt.setGlobalState(v.clippingPlanes,B),N&&Ot.viewport(_.copy(N)),z.length>0&&P(z,S,B),at.length>0&&P(at,S,B),q.length>0&&P(q,S,B),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function U(x,S,B,N){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[N.id]===void 0&&(p.state.transmissionRenderTarget[N.id]=new yi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Fr:_i,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));let at=p.state.transmissionRenderTarget[N.id],q=N.viewport||_;at.setSize(q.z,q.w);let j=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(dt),ft=v.getClearAlpha(),ft<1&&v.setClearColor(16777215,.5),v.clear(),ge&&he.render(B);let mt=v.toneMapping;v.toneMapping=Li;let _t=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),p.setupLightsView(N),St===!0&&Nt.setGlobalState(v.clippingPlanes,N),P(x,B,N),D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at),J.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let tt=0,Mt=S.length;tt<Mt;tt++){let Ut=S[tt],At=Ut.object,ie=Ut.geometry,ne=Ut.material,Gt=Ut.group;if(ne.side===An&&At.layers.test(N.layers)){let me=ne.side;ne.side=_n,ne.needsUpdate=!0,Z(At,B,N,ie,ne,Gt),ne.side=me,ne.needsUpdate=!0,Pt=!0}}Pt===!0&&(D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at))}v.setRenderTarget(j),v.setClearColor(dt,ft),_t!==void 0&&(N.viewport=_t),v.toneMapping=mt}function P(x,S,B){let N=S.isScene===!0?S.overrideMaterial:null;for(let z=0,at=x.length;z<at;z++){let q=x[z],j=q.object,mt=q.geometry,_t=N===null?q.material:N,Pt=q.group;j.layers.test(B.layers)&&Z(j,S,B,mt,_t,Pt)}}function Z(x,S,B,N,z,at){x.onBeforeRender(v,S,B,N,z,at),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(v,S,B,N,x,at),z.transparent===!0&&z.side===An&&z.forceSinglePass===!1?(z.side=_n,z.needsUpdate=!0,v.renderBufferDirect(B,S,N,z,x,at),z.side=Ni,z.needsUpdate=!0,v.renderBufferDirect(B,S,N,z,x,at),z.side=An):v.renderBufferDirect(B,S,N,z,x,at),x.onAfterRender(v,S,B,N,z,at)}function O(x,S,B){S.isScene!==!0&&(S=le);let N=Yt.get(x),z=p.state.lights,at=p.state.shadowsArray,q=z.state.version,j=Kt.getParameters(x,z.state,at,S,B),mt=Kt.getProgramCacheKey(j),_t=N.programs;N.environment=x.isMeshStandardMaterial?S.environment:null,N.fog=S.fog,N.envMap=(x.isMeshStandardMaterial?ot:M).get(x.envMap||N.environment),N.envMapRotation=N.environment!==null&&x.envMap===null?S.environmentRotation:x.envMapRotation,_t===void 0&&(x.addEventListener("dispose",ct),_t=new Map,N.programs=_t);let Pt=_t.get(mt);if(Pt!==void 0){if(N.currentProgram===Pt&&N.lightsStateVersion===q)return it(x,j),Pt}else j.uniforms=Kt.getUniforms(x),x.onBeforeCompile(j,v),Pt=Kt.acquireProgram(j,mt),_t.set(mt,Pt),N.uniforms=j.uniforms;let tt=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(tt.clippingPlanes=Nt.uniform),it(x,j),N.needsLights=st(x),N.lightsStateVersion=q,N.needsLights&&(tt.ambientLightColor.value=z.state.ambient,tt.lightProbe.value=z.state.probe,tt.directionalLights.value=z.state.directional,tt.directionalLightShadows.value=z.state.directionalShadow,tt.spotLights.value=z.state.spot,tt.spotLightShadows.value=z.state.spotShadow,tt.rectAreaLights.value=z.state.rectArea,tt.ltc_1.value=z.state.rectAreaLTC1,tt.ltc_2.value=z.state.rectAreaLTC2,tt.pointLights.value=z.state.point,tt.pointLightShadows.value=z.state.pointShadow,tt.hemisphereLights.value=z.state.hemi,tt.directionalShadowMap.value=z.state.directionalShadowMap,tt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,tt.spotShadowMap.value=z.state.spotShadowMap,tt.spotLightMatrix.value=z.state.spotLightMatrix,tt.spotLightMap.value=z.state.spotLightMap,tt.pointShadowMap.value=z.state.pointShadowMap,tt.pointShadowMatrix.value=z.state.pointShadowMatrix),N.currentProgram=Pt,N.uniformsList=null,Pt}function X(x){if(x.uniformsList===null){let S=x.currentProgram.getUniforms();x.uniformsList=Os.seqWithValue(S.seq,x.uniforms)}return x.uniformsList}function it(x,S){let B=Yt.get(x);B.outputColorSpace=S.outputColorSpace,B.batching=S.batching,B.batchingColor=S.batchingColor,B.instancing=S.instancing,B.instancingColor=S.instancingColor,B.instancingMorph=S.instancingMorph,B.skinning=S.skinning,B.morphTargets=S.morphTargets,B.morphNormals=S.morphNormals,B.morphColors=S.morphColors,B.morphTargetsCount=S.morphTargetsCount,B.numClippingPlanes=S.numClippingPlanes,B.numIntersection=S.numClipIntersection,B.vertexAlphas=S.vertexAlphas,B.vertexTangents=S.vertexTangents,B.toneMapping=S.toneMapping}function rt(x,S,B,N,z){S.isScene!==!0&&(S=le),D.resetTextureUnits();let at=S.fog,q=N.isMeshStandardMaterial?S.environment:null,j=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:zi,mt=(N.isMeshStandardMaterial?ot:M).get(N.envMap||q),_t=N.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),tt=!!B.morphAttributes.position,Mt=!!B.morphAttributes.normal,Ut=!!B.morphAttributes.color,At=Li;N.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(At=v.toneMapping);let ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=ie!==void 0?ie.length:0,Gt=Yt.get(N),me=p.state.lights;if(St===!0&&(Dt===!0||x!==gt)){let bn=x===gt&&N.id===R;Nt.setState(N,x,bn)}let be=!1;N.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==me.state.version||Gt.outputColorSpace!==j||z.isBatchedMesh&&Gt.batching===!1||!z.isBatchedMesh&&Gt.batching===!0||z.isBatchedMesh&&Gt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Gt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Gt.instancing===!1||!z.isInstancedMesh&&Gt.instancing===!0||z.isSkinnedMesh&&Gt.skinning===!1||!z.isSkinnedMesh&&Gt.skinning===!0||z.isInstancedMesh&&Gt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Gt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Gt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Gt.instancingMorph===!1&&z.morphTexture!==null||Gt.envMap!==mt||N.fog===!0&&Gt.fog!==at||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Nt.numPlanes||Gt.numIntersection!==Nt.numIntersection)||Gt.vertexAlphas!==_t||Gt.vertexTangents!==Pt||Gt.morphTargets!==tt||Gt.morphNormals!==Mt||Gt.morphColors!==Ut||Gt.toneMapping!==At||Gt.morphTargetsCount!==ne)&&(be=!0):(be=!0,Gt.__version=N.version);let nn=Gt.currentProgram;be===!0&&(nn=O(N,S,z));let mn=!1,sn=!1,Gn=!1,Qe=nn.getUniforms(),wn=Gt.uniforms;if(Ot.useProgram(nn.program)&&(mn=!0,sn=!0,Gn=!0),N.id!==R&&(R=N.id,sn=!0),mn||gt!==x){Rt.reverseDepthBuffer?($t.copy(x.projectionMatrix),of($t),af($t),Qe.setValue(F,"projectionMatrix",$t)):Qe.setValue(F,"projectionMatrix",x.projectionMatrix),Qe.setValue(F,"viewMatrix",x.matrixWorldInverse);let bn=Qe.map.cameraPosition;bn!==void 0&&bn.setValue(F,ae.setFromMatrixPosition(x.matrixWorld)),Rt.logarithmicDepthBuffer&&Qe.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Qe.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),gt!==x&&(gt=x,sn=!0,Gn=!0)}if(z.isSkinnedMesh){Qe.setOptional(F,z,"bindMatrix"),Qe.setOptional(F,z,"bindMatrixInverse");let bn=z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Qe.setValue(F,"boneTexture",bn.boneTexture,D))}z.isBatchedMesh&&(Qe.setOptional(F,z,"batchingTexture"),Qe.setValue(F,"batchingTexture",z._matricesTexture,D),Qe.setOptional(F,z,"batchingIdTexture"),Qe.setValue(F,"batchingIdTexture",z._indirectTexture,D),Qe.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&Qe.setValue(F,"batchingColorTexture",z._colorsTexture,D));let ai=B.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&ue.update(z,B,nn),(sn||Gt.receiveShadow!==z.receiveShadow)&&(Gt.receiveShadow=z.receiveShadow,Qe.setValue(F,"receiveShadow",z.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(wn.envMap.value=mt,wn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&S.environment!==null&&(wn.envMapIntensity.value=S.environmentIntensity),sn&&(Qe.setValue(F,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&Q(wn,Gn),at&&N.fog===!0&&kt.refreshFogUniforms(wn,at),kt.refreshMaterialUniforms(wn,N,Ct,ht,p.state.transmissionRenderTarget[x.id]),Os.upload(F,X(Gt),wn,D)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Os.upload(F,X(Gt),wn,D),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Qe.setValue(F,"center",z.center),Qe.setValue(F,"modelViewMatrix",z.modelViewMatrix),Qe.setValue(F,"normalMatrix",z.normalMatrix),Qe.setValue(F,"modelMatrix",z.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){let bn=N.uniformsGroups;for(let cs=0,Sa=bn.length;cs<Sa;cs++){let ls=bn[cs];K.update(ls,nn),K.bind(ls,nn)}}return nn}function Q(x,S){x.ambientLightColor.needsUpdate=S,x.lightProbe.needsUpdate=S,x.directionalLights.needsUpdate=S,x.directionalLightShadows.needsUpdate=S,x.pointLights.needsUpdate=S,x.pointLightShadows.needsUpdate=S,x.spotLights.needsUpdate=S,x.spotLightShadows.needsUpdate=S,x.rectAreaLights.needsUpdate=S,x.hemisphereLights.needsUpdate=S}function st(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(x,S,B){Yt.get(x.texture).__webglTexture=S,Yt.get(x.depthTexture).__webglTexture=B;let N=Yt.get(x);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=B===void 0,N.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,S){let B=Yt.get(x);B.__webglFramebuffer=S,B.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(x,S=0,B=0){k=x,$=S,A=B;let N=!0,z=null,at=!1,q=!1;if(x){let mt=Yt.get(x);if(mt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(F.FRAMEBUFFER,null),N=!1;else if(mt.__webglFramebuffer===void 0)D.setupRenderTarget(x);else if(mt.__hasExternalTextures)D.rebindTextures(x,Yt.get(x.texture).__webglTexture,Yt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let tt=x.depthTexture;if(mt.__boundDepthTexture!==tt){if(tt!==null&&Yt.has(tt)&&(x.width!==tt.image.width||x.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(x)}}let _t=x.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(q=!0);let Pt=Yt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pt[S])?z=Pt[S][B]:z=Pt[S],at=!0):x.samples>0&&D.useMultisampledRTT(x)===!1?z=Yt.get(x).__webglMultisampledFramebuffer:Array.isArray(Pt)?z=Pt[B]:z=Pt,_.copy(x.viewport),T.copy(x.scissor),ut=x.scissorTest}else _.copy(Vt).multiplyScalar(Ct).floor(),T.copy(Ht).multiplyScalar(Ct).floor(),ut=Me;if(Ot.bindFramebuffer(F.FRAMEBUFFER,z)&&N&&Ot.drawBuffers(x,z),Ot.viewport(_),Ot.scissor(T),Ot.setScissorTest(ut),at){let mt=Yt.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+S,mt.__webglTexture,B)}else if(q){let mt=Yt.get(x.texture),_t=S||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,mt.__webglTexture,B||0,_t)}R=-1},this.readRenderTargetPixels=function(x,S,B,N,z,at,q){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let j=Yt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&q!==void 0&&(j=j[q]),j){Ot.bindFramebuffer(F.FRAMEBUFFER,j);try{let mt=x.texture,_t=mt.format,Pt=mt.type;if(!Rt.textureFormatReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=x.width-N&&B>=0&&B<=x.height-z&&F.readPixels(S,B,N,z,xe.convert(_t),xe.convert(Pt),at)}finally{let mt=k!==null?Yt.get(k).__webglFramebuffer:null;Ot.bindFramebuffer(F.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(x,S,B,N,z,at,q){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let j=Yt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&q!==void 0&&(j=j[q]),j){let mt=x.texture,_t=mt.format,Pt=mt.type;if(!Rt.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(S>=0&&S<=x.width-N&&B>=0&&B<=x.height-z){Ot.bindFramebuffer(F.FRAMEBUFFER,j);let tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.bufferData(F.PIXEL_PACK_BUFFER,at.byteLength,F.STREAM_READ),F.readPixels(S,B,N,z,xe.convert(_t),xe.convert(Pt),0);let Mt=k!==null?Yt.get(k).__webglFramebuffer:null;Ot.bindFramebuffer(F.FRAMEBUFFER,Mt);let Ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await rf(F,Ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,at),F.deleteBuffer(tt),F.deleteSync(Ut),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,S=null,B=0){x.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),S=arguments[0]||null,x=arguments[1]);let N=Math.pow(2,-B),z=Math.floor(x.image.width*N),at=Math.floor(x.image.height*N),q=S!==null?S.x:0,j=S!==null?S.y:0;D.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,q,j,z,at),Ot.unbindTexture()},this.copyTextureToTexture=function(x,S,B=null,N=null,z=0){x.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,x=arguments[1],S=arguments[2],z=arguments[3]||0,B=null);let at,q,j,mt,_t,Pt;B!==null?(at=B.max.x-B.min.x,q=B.max.y-B.min.y,j=B.min.x,mt=B.min.y):(at=x.image.width,q=x.image.height,j=0,mt=0),N!==null?(_t=N.x,Pt=N.y):(_t=0,Pt=0);let tt=xe.convert(S.format),Mt=xe.convert(S.type);D.setTexture2D(S,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,S.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,S.unpackAlignment);let Ut=F.getParameter(F.UNPACK_ROW_LENGTH),At=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ie=F.getParameter(F.UNPACK_SKIP_PIXELS),ne=F.getParameter(F.UNPACK_SKIP_ROWS),Gt=F.getParameter(F.UNPACK_SKIP_IMAGES),me=x.isCompressedTexture?x.mipmaps[z]:x.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,me.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,j),F.pixelStorei(F.UNPACK_SKIP_ROWS,mt),x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,_t,Pt,at,q,tt,Mt,me.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,_t,Pt,me.width,me.height,tt,me.data):F.texSubImage2D(F.TEXTURE_2D,z,_t,Pt,at,q,tt,Mt,me),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gt),z===0&&S.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ot.unbindTexture()},this.copyTextureToTexture3D=function(x,S,B=null,N=null,z=0){x.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,N=arguments[1]||null,x=arguments[2],S=arguments[3],z=arguments[4]||0);let at,q,j,mt,_t,Pt,tt,Mt,Ut,At=x.isCompressedTexture?x.mipmaps[z]:x.image;B!==null?(at=B.max.x-B.min.x,q=B.max.y-B.min.y,j=B.max.z-B.min.z,mt=B.min.x,_t=B.min.y,Pt=B.min.z):(at=At.width,q=At.height,j=At.depth,mt=0,_t=0,Pt=0),N!==null?(tt=N.x,Mt=N.y,Ut=N.z):(tt=0,Mt=0,Ut=0);let ie=xe.convert(S.format),ne=xe.convert(S.type),Gt;if(S.isData3DTexture)D.setTexture3D(S,0),Gt=F.TEXTURE_3D;else if(S.isDataArrayTexture||S.isCompressedArrayTexture)D.setTexture2DArray(S,0),Gt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,S.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,S.unpackAlignment);let me=F.getParameter(F.UNPACK_ROW_LENGTH),be=F.getParameter(F.UNPACK_IMAGE_HEIGHT),nn=F.getParameter(F.UNPACK_SKIP_PIXELS),mn=F.getParameter(F.UNPACK_SKIP_ROWS),sn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,_t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pt),x.isDataTexture||x.isData3DTexture?F.texSubImage3D(Gt,z,tt,Mt,Ut,at,q,j,ie,ne,At.data):S.isCompressedArrayTexture?F.compressedTexSubImage3D(Gt,z,tt,Mt,Ut,at,q,j,ie,At.data):F.texSubImage3D(Gt,z,tt,Mt,Ut,at,q,j,ie,ne,At),F.pixelStorei(F.UNPACK_ROW_LENGTH,me),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be),F.pixelStorei(F.UNPACK_SKIP_PIXELS,nn),F.pixelStorei(F.UNPACK_SKIP_ROWS,mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,sn),z===0&&S.generateMipmaps&&F.generateMipmap(Gt),Ot.unbindTexture()},this.initRenderTarget=function(x){Yt.get(x).__webglFramebuffer===void 0&&D.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?D.setTextureCube(x,0):x.isData3DTexture?D.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?D.setTexture2DArray(x,0):D.setTexture2D(x,0),Ot.unbindTexture()},this.resetState=function(){$=0,A=0,k=null,Ot.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Zl?"display-p3":"srgb",e.unpackColorSpace=He.workingColorSpace===da?"display-p3":"srgb"}};var is=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pn=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},qo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},En=new I,Sr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},oi=class extends ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},As,lr=new I,Rs=new I,Cs=new I,Ps=new It,hr=new It,Zu=new Le,fo=new I,ur=new I,po=new I,au=new It,rc=new It,cu=new It,an=class extends on{constructor(t=new oi){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qo(e,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Sr(n,3,0,!1)),As.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=As,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),Zu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;mo(fo.set(-.5,-.5,0),Cs,o,Rs,s,r),mo(ur.set(.5,-.5,0),Cs,o,Rs,s,r),mo(po.set(.5,.5,0),Cs,o,Rs,s,r),au.set(0,0),rc.set(1,0),cu.set(1,1);let a=t.ray.intersectTriangle(fo,ur,po,!1,lr);if(a===null&&(mo(ur.set(-.5,.5,0),Cs,o,Rs,s,r),rc.set(0,1),a=t.ray.intersectTriangle(fo,po,ur,!1,lr),a===null))return;let c=t.ray.origin.distanceTo(lr);c<t.near||c>t.far||e.push({distance:c,point:lr.clone(),uv:Ii.getInterpolation(lr,fo,ur,po,au,rc,cu,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mo(i,t,e,n,s,r){Ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(hr.x=r*Ps.x-s*Ps.y,hr.y=s*Ps.x+r*Ps.y):hr.copy(Ps),i.copy(t),i.x+=hr.x,i.y+=hr.y,i.applyMatrix4(Zu)}var ml=class extends vn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Rn,h=Rn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wr=class extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Is=new Le,lu=new Le,go=[],hu=new Jn,nx=new Le,dr=new nt,fr=new vi,Yo=class extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),hu.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(hu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),fr.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),t.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),lu.multiplyMatrices(n,Is),dr.matrixWorld=lu,dr.raycast(t,go);for(let o=0,a=go.length;o<a;o++){let c=go[o];c.instanceId=r,c.object=this,e.push(c)}go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ml(new Float32Array(s*this.count),s,this.count,Wl,si));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var br=class extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zo=new I,Jo=new I,uu=new Le,pr=new Ws,xo=new vi,oc=new I,du=new I,gl=class extends on{constructor(t=new qe,e=new br){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Zo.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Zo.distanceTo(Jo);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;uu.copy(s).invert(),pr.copy(t.ray).applyMatrix4(uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,p=g-1;y<p;y+=l){let m=h.getX(y),b=h.getX(y+1),v=_o(this,t,pr,c,m,b);v&&e.push(v)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(f),m=_o(this,t,pr,c,y,p);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=f,p=g-1;y<p;y+=l){let m=_o(this,t,pr,c,y,y+1);m&&e.push(m)}if(this.isLineLoop){let y=_o(this,t,pr,c,g-1,f);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _o(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Zo.fromBufferAttribute(o,s),Jo.fromBufferAttribute(o,r),e.distanceSqToSegment(Zo,Jo,oc,du)>n)return;oc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oc);if(!(c<t.near||c>t.far))return{distance:c,point:du.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var fu=new I,pu=new I,$o=class extends gl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)fu.fromBufferAttribute(e,s),pu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fu.distanceTo(pu);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Bi=class extends ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mu=new Le,xl=new Ws,yo=new vi,vo=new I,ss=class extends on{constructor(t=new qe,e=new Bi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;mu.copy(s).invert(),xl.copy(t.ray).applyMatrix4(mu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let p=l.getX(g);vo.fromBufferAttribute(u,p),gu(vo,p,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)vo.fromBufferAttribute(u,g),gu(vo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gu(i,t,e,n,s,r,o){let a=xl.distanceSqToPoint(i);if(a<e){let c=new I;xl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var fn=class extends vn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new It:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],o=[],a=new I,c=new Le;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(dn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(dn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Tr=class extends Bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_l=class extends Tr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $l(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Mo=new I,ac=new $l,cc=new $l,lc=new $l,Ar=class extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Mo.subVectors(s[0],s[1]).add(s[0]),l=Mo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),ac.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,p),cc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,p),lc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),cc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),lc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ac.calc(c),cc.calc(c),lc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function ix(i,t){let e=1-i;return e*e*t}function sx(i,t){return 2*(1-i)*i*t}function rx(i,t){return i*i*t}function _r(i,t,e,n){return ix(i,t)+sx(i,e)+rx(i,n)}function ox(i,t){let e=1-i;return e*e*e*t}function ax(i,t){let e=1-i;return 3*e*e*i*t}function lx(i,t){return 3*(1-i)*i*i*t}function hx(i,t){return i*i*i*t}function yr(i,t,e,n,s){return ox(i,t)+ax(i,e)+lx(i,n)+hx(i,s)}var Ko=class extends Bn{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yl=class extends Bn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y),yr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends Bn{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vl=class extends Bn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends Bn{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends Bn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(xu(a,c.x,l.x,h.x,u.x),xu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},na=Object.freeze({__proto__:null,ArcCurve:_l,CatmullRomCurve3:Ar,CubicBezierCurve:Ko,CubicBezierCurve3:yl,EllipseCurve:Tr,LineCurve:Qo,LineCurve3:vl,QuadraticBezierCurve:jo,QuadraticBezierCurve3:ta,SplineCurve:ea}),Ml=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new na[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new na[s.type]().fromJSON(s))}return this}},Rr=class extends Ml{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Qo(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new jo(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ko(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Tr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},El=class i extends qe{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=dn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new I,d=new It,f=new I,g=new I,y=new I,p=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-p,f.z=m*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(g)}for(let b=0;b<=e;b++){let v=n+b*h*s,w=Math.sin(v),$=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*w,u.y=t[A].y,u.z=t[A].x*$,o.push(u.x,u.y,u.z),d.x=b/e,d.y=A/(t.length-1),a.push(d.x,d.y);let k=c[3*A+0]*w,R=c[3*A+1],gt=c[3*A+0]*$;l.push(k,R,gt)}}for(let b=0;b<e;b++)for(let v=0;v<t.length-1;v++){let w=v+b*t.length,$=w,A=w+t.length,k=w+t.length+1,R=w+1;r.push($,A,R),r.push(k,R,A)}this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("uv",new Se(a,2)),this.setAttribute("normal",new Se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Hi=class i extends El{constructor(t=1,e=1,n=4,s=8){let r=new Rr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Cr=class i extends qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new I,h=new It;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(a,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ie=class i extends qe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],p=n/2,m=0;b(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(f,2));function b(){let w=new I,$=new I,A=0,k=(e-t)/n;for(let R=0;R<=r;R++){let gt=[],_=R/r,T=_*(e-t)+t;for(let ut=0;ut<=s;ut++){let dt=ut/s,ft=dt*c+a,wt=Math.sin(ft),ht=Math.cos(ft);$.x=T*wt,$.y=-_*n+p,$.z=T*ht,u.push($.x,$.y,$.z),w.set(wt,k,ht).normalize(),d.push(w.x,w.y,w.z),f.push(dt,1-_),gt.push(g++)}y.push(gt)}for(let R=0;R<s;R++)for(let gt=0;gt<r;gt++){let _=y[gt][R],T=y[gt+1][R],ut=y[gt+1][R+1],dt=y[gt][R+1];t>0&&(h.push(_,T,dt),A+=3),e>0&&(h.push(T,ut,dt),A+=3)}l.addGroup(m,A,0),m+=A}function v(w){let $=g,A=new It,k=new I,R=0,gt=w===!0?t:e,_=w===!0?1:-1;for(let ut=1;ut<=s;ut++)u.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),g++;let T=g;for(let ut=0;ut<=s;ut++){let ft=ut/s*c+a,wt=Math.cos(ft),ht=Math.sin(ft);k.x=gt*ht,k.y=p*_,k.z=gt*wt,u.push(k.x,k.y,k.z),d.push(0,_,0),A.x=wt*.5+.5,A.y=ht*.5*_+.5,f.push(A.x,A.y),g++}for(let ut=0;ut<s;ut++){let dt=$+ut,ft=T+ut;w===!0?h.push(ft,ft+1,dt):h.push(ft+1,ft,dt),R+=3}l.addGroup(m,R,w===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hn=class i extends Ie{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pr=class i extends qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let v=new I,w=new I,$=new I;for(let A=0;A<e.length;A+=3)f(e[A+0],v),f(e[A+1],w),f(e[A+2],$),c(v,w,$,b)}function c(b,v,w,$){let A=$+1,k=[];for(let R=0;R<=A;R++){k[R]=[];let gt=b.clone().lerp(w,R/A),_=v.clone().lerp(w,R/A),T=A-R;for(let ut=0;ut<=T;ut++)ut===0&&R===A?k[R][ut]=gt:k[R][ut]=gt.clone().lerp(_,ut/T)}for(let R=0;R<A;R++)for(let gt=0;gt<2*(A-R)-1;gt++){let _=Math.floor(gt/2);gt%2===0?(d(k[R][_+1]),d(k[R+1][_]),d(k[R][_])):(d(k[R][_+1]),d(k[R+1][_+1]),d(k[R+1][_]))}}function l(b){let v=new I;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(b),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function h(){let b=new I;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];let w=p(b)/2/Math.PI+.5,$=m(b)/Math.PI+.5;o.push(w,1-$)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let v=o[b+0],w=o[b+2],$=o[b+4],A=Math.max(v,w,$),k=Math.min(v,w,$);A>.9&&k<.1&&(v<.2&&(o[b+0]+=1),w<.2&&(o[b+2]+=1),$<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,v){let w=b*3;v.x=t[w+0],v.y=t[w+1],v.z=t[w+2]}function g(){let b=new I,v=new I,w=new I,$=new I,A=new It,k=new It,R=new It;for(let gt=0,_=0;gt<r.length;gt+=9,_+=6){b.set(r[gt+0],r[gt+1],r[gt+2]),v.set(r[gt+3],r[gt+4],r[gt+5]),w.set(r[gt+6],r[gt+7],r[gt+8]),A.set(o[_+0],o[_+1]),k.set(o[_+2],o[_+3]),R.set(o[_+4],o[_+5]),$.copy(b).add(v).add(w).divideScalar(3);let T=p($);y(A,_+0,b,T),y(k,_+2,v,T),y(R,_+4,w,T)}}function y(b,v,w,$){$<0&&b.x===1&&(o[v]=b.x-1),w.x===0&&w.z===0&&(o[v]=$/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},ia=class i extends Pr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var $n=class extends Rr{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Rr().fromJSON(s))}return this}},ux={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ju(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=gx(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ir(r,o,e,a,c,f,0),o}};function Ju(i,t,e,n,s){let r,o;if(s===Ax(i,t,e,n)>0)for(r=t;r<e;r+=n)o=_u(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=_u(r,i[r],i[r+1],o);return o&&pa(o,o.next)&&(Lr(o),o=o.next),o}function rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pa(e,e.next)||tn(e.prev,e,e.next)===0)){if(Lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Mx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?fx(i,n,s,r):dx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Lr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=px(rs(i),t,e),Ir(i,t,e,n,s,r,2)):o===2&&mx(i,t,e,n,s,r):Ir(rs(i),t,e,n,s,r,1);break}}}function dx(i){let t=i.prev,e=i,n=i.next;if(tn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ls(s,a,r,c,o,l,g.x,g.y)&&tn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(tn(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,y=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=Sl(f,g,t,e,n),b=Sl(y,p,t,e,n),v=i.prevZ,w=i.nextZ;for(;v&&v.z>=m&&w&&w.z<=b;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Ls(a,h,c,u,l,d,v.x,v.y)&&tn(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=f&&w.x<=y&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&Ls(a,h,c,u,l,d,w.x,w.y)&&tn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Ls(a,h,c,u,l,d,v.x,v.y)&&tn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=b;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&Ls(a,h,c,u,l,d,w.x,w.y)&&tn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function px(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!pa(s,r)&&$u(s,n,n.next,r)&&Dr(s,r)&&Dr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Lr(n),Lr(n.next),n=i=r),n=n.next}while(n!==i);return rs(n)}function mx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wx(o,a)){let c=Ku(o,a);o=rs(o,o.next),c=rs(c,c.next),Ir(o,t,e,n,s,r,0),Ir(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gx(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ju(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Sx(l));for(s.sort(xx),r=0;r<s.length;r++)e=_x(s[r],e);return e}function xx(i,t){return i.x-t.x}function _x(i,t){let e=yx(i,t);if(!e)return t;let n=Ku(e,i);return rs(n,n.next),rs(e,e.next)}function yx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ls(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Dr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&vx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function vx(i,t){return tn(i.prev,i,t.prev)<0&&tn(t.next,i,i.next)<0}function Mx(i,t,e,n){let s=i;do s.z===0&&(s.z=Sl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ex(s)}function Ex(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Sl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ls(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function wx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bx(i,t)&&(Dr(i,t)&&Dr(t,i)&&Tx(i,t)&&(tn(i.prev,i,t.prev)||tn(i,t.prev,t))||pa(i,t)&&tn(i.prev,i,i.next)>0&&tn(t.prev,t,t.next)>0)}function tn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pa(i,t){return i.x===t.x&&i.y===t.y}function $u(i,t,e,n){let s=So(tn(i,t,e)),r=So(tn(i,t,n)),o=So(tn(e,n,i)),a=So(tn(e,n,t));return!!(s!==r&&o!==a||s===0&&Eo(i,e,t)||r===0&&Eo(i,n,t)||o===0&&Eo(e,i,n)||a===0&&Eo(e,t,n))}function Eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function So(i){return i>0?1:i<0?-1:0}function bx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$u(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Dr(i,t){return tn(i.prev,i,i.next)<0?tn(i,t,i.next)>=0&&tn(i,i.prev,t)>=0:tn(i,t,i.prev)<0||tn(i,i.next,t)<0}function Tx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ku(i,t){let e=new wl(i.i,i.x,i.y),n=new wl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _u(i,t,e,n){let s=new wl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ax(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ui=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];yu(t),vu(n,t);let o=t.length;e.forEach(yu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,vu(n,e[c]);let a=ux.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function yu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ys=class i extends qe{constructor(t=new $n([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Rx,v,w=!1,$,A,k,R;m&&(v=m.getSpacedPoints(h),w=!0,d=!1,$=m.computeFrenetFrames(h,!1),A=new I,k=new I,R=new I),d||(p=0,f=0,g=0,y=0);let gt=a.extractPoints(l),_=gt.shape,T=gt.holes;if(!Ui.isClockWise(_)){_=_.reverse();for(let bt=0,F=T.length;bt<F;bt++){let Bt=T[bt];Ui.isClockWise(Bt)&&(T[bt]=Bt.reverse())}}let dt=Ui.triangulateShape(_,T),ft=_;for(let bt=0,F=T.length;bt<F;bt++){let Bt=T[bt];_=_.concat(Bt)}function wt(bt,F,Bt){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),bt.clone().addScaledVector(F,Bt)}let ht=_.length,Ct=dt.length;function yt(bt,F,Bt){let J,Rt,Ot,ee=bt.x-F.x,Yt=bt.y-F.y,D=Bt.x-bt.x,M=Bt.y-bt.y,ot=ee*ee+Yt*Yt,et=ee*M-Yt*D;if(Math.abs(et)>Number.EPSILON){let Tt=Math.sqrt(ot),vt=Math.sqrt(D*D+M*M),Kt=F.x-Yt/Tt,kt=F.y+ee/Tt,Jt=Bt.x-M/vt,Ee=Bt.y+D/vt,Nt=((Jt-Kt)*M-(Ee-kt)*D)/(ee*M-Yt*D);J=Kt+ee*Nt-bt.x,Rt=kt+Yt*Nt-bt.y;let Wt=J*J+Rt*Rt;if(Wt<=2)return new It(J,Rt);Ot=Math.sqrt(Wt/2)}else{let Tt=!1;ee>Number.EPSILON?D>Number.EPSILON&&(Tt=!0):ee<-Number.EPSILON?D<-Number.EPSILON&&(Tt=!0):Math.sign(Yt)===Math.sign(M)&&(Tt=!0),Tt?(J=-Yt,Rt=ee,Ot=Math.sqrt(ot)):(J=ee,Rt=Yt,Ot=Math.sqrt(ot/2))}return new It(J/Ot,Rt/Ot)}let Xt=[];for(let bt=0,F=ft.length,Bt=F-1,J=bt+1;bt<F;bt++,Bt++,J++)Bt===F&&(Bt=0),J===F&&(J=0),Xt[bt]=yt(ft[bt],ft[Bt],ft[J]);let Vt=[],Ht,Me=Xt.concat();for(let bt=0,F=T.length;bt<F;bt++){let Bt=T[bt];Ht=[];for(let J=0,Rt=Bt.length,Ot=Rt-1,ee=J+1;J<Rt;J++,Ot++,ee++)Ot===Rt&&(Ot=0),ee===Rt&&(ee=0),Ht[J]=yt(Bt[J],Bt[Ot],Bt[ee]);Vt.push(Ht),Me=Me.concat(Ht)}for(let bt=0;bt<p;bt++){let F=bt/p,Bt=f*Math.cos(F*Math.PI/2),J=g*Math.sin(F*Math.PI/2)+y;for(let Rt=0,Ot=ft.length;Rt<Ot;Rt++){let ee=wt(ft[Rt],Xt[Rt],J);zt(ee.x,ee.y,-Bt)}for(let Rt=0,Ot=T.length;Rt<Ot;Rt++){let ee=T[Rt];Ht=Vt[Rt];for(let Yt=0,D=ee.length;Yt<D;Yt++){let M=wt(ee[Yt],Ht[Yt],J);zt(M.x,M.y,-Bt)}}}let Re=g+y;for(let bt=0;bt<ht;bt++){let F=d?wt(_[bt],Me[bt],Re):_[bt];w?(k.copy($.normals[0]).multiplyScalar(F.x),A.copy($.binormals[0]).multiplyScalar(F.y),R.copy(v[0]).add(k).add(A),zt(R.x,R.y,R.z)):zt(F.x,F.y,0)}for(let bt=1;bt<=h;bt++)for(let F=0;F<ht;F++){let Bt=d?wt(_[F],Me[F],Re):_[F];w?(k.copy($.normals[bt]).multiplyScalar(Bt.x),A.copy($.binormals[bt]).multiplyScalar(Bt.y),R.copy(v[bt]).add(k).add(A),zt(R.x,R.y,R.z)):zt(Bt.x,Bt.y,u/h*bt)}for(let bt=p-1;bt>=0;bt--){let F=bt/p,Bt=f*Math.cos(F*Math.PI/2),J=g*Math.sin(F*Math.PI/2)+y;for(let Rt=0,Ot=ft.length;Rt<Ot;Rt++){let ee=wt(ft[Rt],Xt[Rt],J);zt(ee.x,ee.y,u+Bt)}for(let Rt=0,Ot=T.length;Rt<Ot;Rt++){let ee=T[Rt];Ht=Vt[Rt];for(let Yt=0,D=ee.length;Yt<D;Yt++){let M=wt(ee[Yt],Ht[Yt],J);w?zt(M.x,M.y+v[h-1].y,v[h-1].x+Bt):zt(M.x,M.y,u+Bt)}}}St(),Dt();function St(){let bt=s.length/3;if(d){let F=0,Bt=ht*F;for(let J=0;J<Ct;J++){let Rt=dt[J];ae(Rt[2]+Bt,Rt[1]+Bt,Rt[0]+Bt)}F=h+p*2,Bt=ht*F;for(let J=0;J<Ct;J++){let Rt=dt[J];ae(Rt[0]+Bt,Rt[1]+Bt,Rt[2]+Bt)}}else{for(let F=0;F<Ct;F++){let Bt=dt[F];ae(Bt[2],Bt[1],Bt[0])}for(let F=0;F<Ct;F++){let Bt=dt[F];ae(Bt[0]+ht*h,Bt[1]+ht*h,Bt[2]+ht*h)}}n.addGroup(bt,s.length/3-bt,0)}function Dt(){let bt=s.length/3,F=0;$t(ft,F),F+=ft.length;for(let Bt=0,J=T.length;Bt<J;Bt++){let Rt=T[Bt];$t(Rt,F),F+=Rt.length}n.addGroup(bt,s.length/3-bt,1)}function $t(bt,F){let Bt=bt.length;for(;--Bt>=0;){let J=Bt,Rt=Bt-1;Rt<0&&(Rt=bt.length-1);for(let Ot=0,ee=h+p*2;Ot<ee;Ot++){let Yt=ht*Ot,D=ht*(Ot+1),M=F+J+Yt,ot=F+Rt+Yt,et=F+Rt+D,Tt=F+J+D;re(M,ot,et,Tt)}}}function zt(bt,F,Bt){c.push(bt),c.push(F),c.push(Bt)}function ae(bt,F,Bt){le(bt),le(F),le(Bt);let J=s.length/3,Rt=b.generateTopUV(n,s,J-3,J-2,J-1);ge(Rt[0]),ge(Rt[1]),ge(Rt[2])}function re(bt,F,Bt,J){le(bt),le(F),le(J),le(F),le(Bt),le(J);let Rt=s.length/3,Ot=b.generateSideWallUV(n,s,Rt-6,Rt-3,Rt-2,Rt-1);ge(Ot[0]),ge(Ot[1]),ge(Ot[3]),ge(Ot[1]),ge(Ot[2]),ge(Ot[3])}function le(bt){s.push(c[bt*3+0]),s.push(c[bt*3+1]),s.push(c[bt*3+2])}function ge(bt){r.push(bt.x),r.push(bt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Cx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new na[s.type]().fromJSON(s)),new i(n,t.options)}},Rx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new It(r,o),new It(a,c),new It(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new It(o,1-c),new It(l,1-u),new It(d,1-g),new It(y,1-m)]:[new It(a,1-c),new It(h,1-u),new It(f,1-g),new It(p,1-m)]}};function Cx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ur=class i extends Pr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var sa=class i extends qe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new I,g=new It;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let p=y*(n+1);for(let m=0;m<n;m++){let b=m+p,v=b,w=b+n+1,$=b+n+2,A=b+1;a.push(v,w,A),a.push(w,$,A)}}this.setIndex(a),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ra=class i extends qe{constructor(t=new $n([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(r,3)),this.setAttribute("uv",new Se(o,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Ui.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let b=g[p];Ui.isClockWise(b)===!0&&(g[p]=b.reverse())}let y=Ui.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let b=g[p];f=f.concat(b)}for(let p=0,m=f.length;p<m;p++){let b=f[p];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,m=y.length;p<m;p++){let b=y[p],v=b[0]+u,w=b[1]+u,$=b[2]+u;n.push(v,w,$),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Px(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Px(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ze=class i extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,f=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let b=[],v=m/n,w=0;m===0&&o===0?w=.5/e:m===n&&c===Math.PI&&(w=-.5/e);for(let $=0;$<=e;$++){let A=$/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(A+w,1-v),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let v=h[m][b+1],w=h[m][b],$=h[m+1][b],A=h[m+1][b+1];(m!==0||o>0)&&f.push(v,w,A),(m!==n-1||c<Math.PI)&&f.push(w,$,A)}this.setIndex(f),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(y,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},oa=class i extends Pr{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Nn=class i extends qe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let y=g/s*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(y),u.y=(t+e*Math.cos(p))*Math.sin(y),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(y,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var aa=class i extends qe{constructor(t=new ta(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new It,h=new I,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(f,2));function y(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),b(),m()}function p(v){h=t.getPointAt(v/e,h);let w=o.normals[v],$=o.binormals[v];for(let A=0;A<=s;A++){let k=A/s*Math.PI*2,R=Math.sin(k),gt=-Math.cos(k);c.x=gt*w.x+R*$.x,c.y=gt*w.y+R*$.y,c.z=gt*w.z+R*$.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let w=1;w<=s;w++){let $=(s+1)*(v-1)+(w-1),A=(s+1)*v+(w-1),k=(s+1)*v+w,R=(s+1)*(v-1)+w;g.push($,A,R),g.push(A,k,R)}}function b(){for(let v=0;v<=e;v++)for(let w=0;w<=s;w++)l.x=v/e,l.y=w/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new na[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ye=class extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bu,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},In=class extends ye{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function wo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ix(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:r=t,a=2*e-n;break;case _h:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xh:o=t,c=2*n-e;break;case _h:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-d*p+2*d*y-d*g,b=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,v=(-1-f)*p+(1.5+f)*y+.5*g,w=f*p-f*y;for(let $=0;$!==a;++$)r[$]=m*o[h+$]+b*o[l+$]+v*o[c+$]+w*o[u+$];return r}},Tl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Al=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wo(e,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wo(t.times,Array),values:wo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Io:e=this.InterpolantFactoryMethodDiscrete;break;case $c:e=this.InterpolantFactoryMethodLinear;break;case Ca:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return $c;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Ix(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ca,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=$c;var os=class extends Kn{constructor(t,e,n){super(t,e,n)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Io;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends Kn{};Rl.prototype.ValueTypeName="color";var Cl=class extends Kn{};Cl.prototype.ValueTypeName="number";var Pl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Oi.slerpFlat(r,0,o,l-a,o,l,c);return r}},ca=class extends Kn{InterpolantFactoryMethodLinear(t){return new Pl(this.times,this.values,this.getValueSize(),t)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Kn{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Io;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Kn{};Il.prototype.ValueTypeName="vector";var Dl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Dx=new Dl,Ll=class{constructor(t){this.manager=t!==void 0?t:Dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},zn=class extends Nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},hc=new Le,Mu=new I,Eu=new I,la=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mu),Eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eu),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Su=new Le,mr=new I,uc=new I,Ul=class extends la{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(mr),uc.copy(n.position),uc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(uc),n.updateMatrixWorld(),s.makeTranslation(-mr.x,-mr.y,-mr.z),Su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su)}},Dn=class extends Nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ul}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Nl=class extends la{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pn=class extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Nl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Kl="\\[\\]\\.:\\/",Lx=new RegExp("["+Kl+"]","g"),Ql="[^"+Kl+"]",Ux="[^"+Kl.replace("\\.","")+"]",Nx=/((?:WC+[\/:])*)/.source.replace("WC",Ql),Fx=/(WCOD+)?/.source.replace("WCOD",Ux),Ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),Bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),Hx=new RegExp("^"+Nx+Fx+Ox+Bx+"$"),zx=["material","materials","bones","map"],Fl=class{constructor(t,e,n){let s=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lx,"")}static parseTrackName(t){let e=Hx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=Fl;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yx=new Float32Array(1);var wu=new Le,ha=class{constructor(t,e,n=0,s=1/0){this.ray=new Ws(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wu),this}intersectObject(t,e=!0,n=[]){return Ol(t,this,n,e),n.sort(bu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ol(t[s],this,n,e);return n.sort(bu),n}};function bu(i,t){return i.distance-t.distance}function Ol(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ol(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function Qu(i){let{R:t,prep:e,blit:n,ENV:s,model:r,instance:o,siren:a,figure:c,pose:l,flameMat:h,glowMat:u,SOFT:d,SMOKE:f,hi:g,skyTex:y,buildBuilding:p,CH:m,SM:b,tierOf3:v}=i,w=Math.PI*2,$=(C,V,Y)=>C<V?V:C>Y?Y:C,A=Math.random,k=C=>1-Math.pow(1-C,3),R=C=>1+(1.70158+1)*Math.pow(C-1,3)+1.70158*Math.pow(C-1,2),gt={off:!1,low:!1},_=1/60,T=0,ut=()=>g()&&!gt.low?Math.min(window.devicePixelRatio||1,1.5,window.R3&&R3.prCap||2):Math.min(window.devicePixelRatio||1,1.25);function dt(C){_=_*.95+C*.05,_>1/38?(T+=C,T>2.5&&!gt.low&&(gt.low=!0,console.log("[R3] ui3 low-res"))):T=0}function ft(C){if(!C)return;if(C.userData&&C.userData.keep){C.parent&&C.parent.remove(C);return}C.children.slice().forEach(ft),C.geometry&&C.geometry.dispose();let V=C.material;V&&(Array.isArray(V)?V:[V]).forEach(Y=>{for(let ct in Y){let lt=Y[ct];lt&&lt.isTexture&&!(lt.userData&&lt.userData.keep)&&lt.dispose()}Y.dispose()})}function wt(C){C&&(C.background&&C.background.isTexture&&C.background.dispose(),C.children.slice().forEach(ft),C.clear())}function ht(C,V,Y,ct,lt){let Et=lt||ut(),Lt=Math.max(8,Math.round(V*Et)),jt=Math.max(8,Math.round(Y*Et));e(Lt,jt);let se=t.autoClear,Ne=t.toneMapping,Pe=t.toneMappingExposure;t.autoClear=!1,t.toneMapping=Hl,t.toneMappingExposure=1.12,ct.forEach((Ce,ve)=>{ve&&t.clearDepth(),t.render(Ce[0],Ce[1])}),t.autoClear=se,t.toneMapping=Ne,t.toneMappingExposure=Pe,n(C,Lt,jt,0,0,V,Y)}function Ct(C,V,Y,ct){let lt=document.createElement("canvas");lt.width=C,lt.height=V,Y(lt.getContext("2d"),C,V);let Et=new fn(lt);return Et.colorSpace=Ze,ct&&(Et.userData.keep=1),Et}let yt=Ct(512,512,C=>{C.translate(256,256);for(let V=0;V<28;V++){C.rotate(w/28);let Y=C.createLinearGradient(0,0,256,0);Y.addColorStop(0,"rgba(255,255,255,.9)"),Y.addColorStop(.6,"rgba(255,255,255,.25)"),Y.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=Y,C.beginPath(),C.moveTo(0,0);let ct=V%2?.04:.085;C.lineTo(256,-256*ct),C.lineTo(256,256*ct),C.fill()}},1),Xt=Ct(128,128,C=>{let V=C.createRadialGradient(64,64,0,64,64,64);V.addColorStop(0,"rgba(0,0,0,.9)"),V.addColorStop(.5,"rgba(0,0,0,.45)"),V.addColorStop(1,"rgba(0,0,0,0)"),C.fillStyle=V,C.fillRect(0,0,128,128)},1),Vt=Ct(256,32,C=>{let V=C.createLinearGradient(0,0,256,0);V.addColorStop(0,"rgba(255,255,255,0)"),V.addColorStop(.5,"rgba(255,255,255,1)"),V.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=V,C.fillRect(0,0,256,32);let Y=C.createLinearGradient(0,0,0,32);Y.addColorStop(0,"rgba(0,0,0,1)"),Y.addColorStop(.5,"rgba(0,0,0,0)"),Y.addColorStop(1,"rgba(0,0,0,1)"),C.globalCompositeOperation="destination-out",C.fillStyle=Y,C.fillRect(0,0,256,32)},1),Ht=(C,V,Y)=>new oi({map:C,color:V,transparent:!0,opacity:Y,blending:yn,depthWrite:!1,toneMapped:!1}),Me=C=>new Xe({map:Xt,transparent:!0,opacity:C,depthWrite:!1});function Re(C,V,Y){let ct=new nt(new Oe(1,1),Me(Y));return ct.rotation.x=-Math.PI/2,ct.scale.set(C,V,1),ct.position.y=.02,ct}let St="varying float vY;varying vec3 vN,vV;void main(){vY=uv.y;vec4 mv=modelViewMatrix*vec4(position,1.);vV=normalize(-mv.xyz);vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*mv;}",Dt="uniform vec3 col;uniform float op;varying float vY;varying vec3 vN,vV;void main(){float f=abs(dot(normalize(vN),normalize(vV)));float a=pow(f,2.2)*op*pow(vY,1.6);gl_FragColor=vec4(col*a,a);}";function $t(C,V,Y,ct){let lt=new Ie(Y,ct,1,28,1,!0);lt.translate(0,.5,0);let Et=new nt(lt,new Cn({uniforms:{col:{value:new fe(C)},op:{value:V}},vertexShader:St,fragmentShader:Dt,transparent:!0,depthWrite:!1,blending:yn,side:An}));return Et.renderOrder=5,Et}let zt=new I,ae=new I,re=new I(0,1,0);function le(C,V,Y){C.position.copy(V),zt.copy(Y).sub(V),C.scale.set(1,zt.length(),1),C.quaternion.setFromUnitVectors(re,zt.normalize())}function ge(C,V,Y,ct,lt){C.aspect=V/Y;let Et=ct*Math.PI/180;C.fov=$(2*Math.atan(Math.tan(Et/2)/C.aspect)*180/Math.PI,30,100),C.setViewOffset(V,Y,0,Y/2-Y*lt,V,Y),C.updateProjectionMatrix()}function bt(C,V,Y,ct){let lt=new qe;lt.setAttribute("position",new en(new Float32Array(C*3),3));let Et=new ss(lt,new Bi({map:ct||d,color:V,size:Y,transparent:!0,blending:yn,depthWrite:!1,toneMapped:!1}));return Et.frustumCulled=!1,Et}function F(C,V){let Y=new $n;for(let ct=0;ct<10;ct++){let lt=ct%2?C*V:C,Et=Math.PI/2+ct*Math.PI/5,Lt=Math.cos(Et)*lt,jt=Math.sin(Et)*lt;ct?Y.lineTo(Lt,jt):Y.moveTo(Lt,jt)}return Y.closePath(),Y}function Bt(C){let V=new $n;for(let Y=0;Y<6;Y++){let ct=Math.PI/2+Y*w/6,lt=Math.cos(ct)*C,Et=Math.sin(ct)*C;Y?V.lineTo(lt,Et):V.moveTo(lt,Et)}return V.closePath(),V}function J(C,V,Y){let ct=new $n;return ct.moveTo(-C,0),ct.lineTo(0,V),ct.lineTo(C,0),ct.lineTo(C,-Y),ct.lineTo(0,V-Y),ct.lineTo(-C,-Y),ct.closePath(),ct}function Rt(C,V,Y,ct){let lt=new Ys(C,{depth:V,bevelEnabled:!0,bevelThickness:Y,bevelSize:Y,bevelSegments:ct||3,curveSegments:10});return lt.translate(0,0,-V/2),lt.computeVertexNormals(),lt}let Ot=(C,V,Y)=>new In(Object.assign({color:C,metalness:1,roughness:V,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.4},Y||{}));function ee(C,V,Y){let ct=[];for(let lt=0;lt<V;lt++){let Et=new an(new oi({map:f,color:Y,transparent:!0,depthWrite:!1,opacity:0}));Et.userData={life:1+A()*9,max:1},C.add(Et),ct.push(Et)}return ct}function Yt(C,V,Y,ct){C.forEach(lt=>{let Et=lt.userData;if(Et.life+=Y/Et.max,Et.life>=1){let jt=V[A()*V.length|0];Et.life=0,Et.max=ct.life*(.7+A()*.6),lt.position.set(jt.x+(A()-.5)*ct.sp,jt.y,jt.z),Et.vx=ct.wind+(A()-.5)*.6,Et.vy=ct.rise*(.7+A()*.6),Et.s0=ct.s0*(.7+A()*.6)}lt.position.x+=Et.vx*Y,lt.position.y+=Et.vy*Y;let Lt=Et.s0*(1+Et.life*ct.grow);lt.scale.set(Lt,Lt,1),lt.material.opacity=ct.op*Math.sin(Math.min(1,Et.life)*Math.PI),lt.material.rotation+=Y*.2})}function D(C,V,Y){let ct=bt(C,V,Y);return ct.userData.d=Array.from({length:C},()=>({life:1+A(),v:new I})),ct}function M(C,V,Y,ct){let lt=C.geometry.attributes.position;C.userData.d.forEach((Et,Lt)=>{if(Et.life+=Y/ct.life,Et.life>=1){let jt=V[A()*V.length|0];Et.life=A()*.2,lt.setXYZ(Lt,jt.x+(A()-.5)*ct.sp,jt.y,jt.z),Et.v.set(ct.wind+(A()-.5)*1.5,ct.rise*(.6+A()*.8),(A()-.5)*.6)}lt.setXYZ(Lt,lt.getX(Lt)+(Et.v.x+Math.sin(Et.life*12+Lt)*.6)*Y,lt.getY(Lt)+Et.v.y*Y,lt.getZ(Lt)+Et.v.z*Y)}),lt.needsUpdate=!0}function ot(C,V,Y,ct){let lt=new nt(new Oe(1,1),h(ct));lt.geometry.translate(0,.5,0),lt.position.copy(V),lt.scale.set(Y*.8,Y*1.35,1),lt.userData.sc=Y,C.add(lt);let Et=new an(u(16738842,.55));return Et.position.copy(V).add(new I(0,Y*.45,.3)),Et.scale.setScalar(Y*2.8),C.add(Et),lt.userData.gl=Et,lt}function et(C,V,Y){C.forEach((ct,lt)=>{ct.material.uniforms.t.value=Y+lt,ct.material.uniforms.amp.value=.92+.08*Math.sin(Y*13+lt),ct.quaternion.copy(V.quaternion);let Et=1+.07*Math.sin(Y*7+lt*2);ct.scale.set(ct.userData.sc*.8*Et,ct.userData.sc*1.35*Et,1),ct.userData.gl.material.opacity=.45+.15*Math.sin(Y*9+lt*3)})}function Tt(){return Ct(64,128,(C,V,Y)=>{C.fillStyle="#0d0f15",C.fillRect(0,0,V,Y);for(let ct=4;ct<Y-4;ct+=12)for(let lt=4;lt<V-4;lt+=10){let Et=A();C.fillStyle=Et<.28?`rgba(255,${190+A()*50|0},${110+A()*60|0},${.6+A()*.4})`:Et<.36?"rgba(140,180,255,.35)":"rgba(20,24,34,1)",C.fillRect(lt,ct,6,8)}})}let vt=null;function Kt(){let C=g()&&!gt.low,V=new Pn;V.background=y("#02040a","#6a2410"),V.environment=s,V.environmentIntensity=.8,V.fog=new is(2757132,26,95),V.add(new zn(5267599,1312776,.75));let Y=new pn(11058431,1.3);Y.position.set(-8,14,12),V.add(Y);let ct=new pn(16742960,2.2);ct.position.set(5,7,-14),V.add(ct);let lt=new Dn(16734744,90,90,1.05);lt.position.set(-2,8,-22),V.add(lt);let Et=new ye({color:460811,roughness:.55,metalness:.25,transparent:!0,opacity:.97,envMapIntensity:.35}),Lt=new nt(new Oe(300,300),Et);Lt.rotation.x=-Math.PI/2,Lt.renderOrder=1,V.add(Lt);let jt=new Xe({color:12098112,transparent:!0,opacity:.5});for(let At=-6;At<=6;At++){let ie=new nt(new Oe(2.4,.16),jt);ie.rotation.x=-Math.PI/2,ie.position.set(At*5,.012,5.5),ie.renderOrder=2,V.add(ie)}let se=Tt(),Ne=[],Pe=C?26:18;for(let At=0;At<Pe;At++){let ie=4+A()*6,ne=(At%7===3?26:8)+A()*22,Gt=6,me=se.clone();me.wrapS=me.wrapT=ks,me.repeat.set(Math.max(1,Math.round(ie/4)),Math.max(1,Math.round(ne/6))),me.needsUpdate=!0;let be=new nt(new ce(ie,ne,Gt),new ye({color:1711398,roughness:.8,emissive:16777215,emissiveMap:me,emissiveIntensity:.85,map:me})),nn=-62+At*(124/Pe)+A()*2,mn=-30-A()*22;if(be.position.set(nn,ne/2,mn),V.add(be),At%5===2||At%7===3){let sn=2+(A()*3|0);for(let Gn=0;Gn<sn;Gn++)Ne.push(new I(nn+(A()-.5)*ie*.7,ne*(Gn?.45+A()*.5:1)-.2,mn+Gt/2+.3))}}let Ce=new nt(new ce(9,16,7),new ye({color:1709078,roughness:.9,emissive:16777215,emissiveMap:se,emissiveIntensity:.5,map:se}));Ce.position.set(13,8,-17),V.add(Ce);for(let At=0;At<(C?9:5);At++)Ne.push(new I(9.5+A()*7,6+A()*10.5,-13.2));Ne.push(new I(12,16,-15),new I(15,16,-16));let ve=Ne.map((At,ie)=>ot(V,At,(At.x>8&&At.z>-20?5:4)+A()*4,ie*1.37)),L=new Dn(16738848,45,40,1.3);L.position.set(12,9,-10),V.add(L);let U=new an(Ht(d,16730640,.55));U.position.set(-2,10,-45),U.scale.set(110,40,1),V.add(U);let P=ee(V,C?40:18,2761762),Z=D(C?220:90,16752704,.32);V.add(Z);let O=v("E"),X=Zt(o(r("E",O),[8.6,8.6]));X.userData.keep=1,X.rotation.y=-.62,V.add(X),X.userData.glows.forEach(At=>At.scale.multiplyScalar(4.5));let it=null,rt=Re(10,4.6,.85);rt.rotation.z=.62,rt.renderOrder=3,V.add(rt);let Q=new Dn(16722458,0,22,1.3),st=new Dn(2775807,0,22,1.3);Q.position.set(-1.6,3.6,1),st.position.set(1.6,3.6,-1),V.add(Q,st);let x=[16722458,3828991].map((At,ie)=>{let ne=new an(Ht(d,At,0));return ne.position.set(ie?2.2:-2.2,-50,3.2),ne.scale.set(1.4,6,1),V.add(ne),ne}),S=new I(Math.cos(.62),0,Math.sin(.62)),B=new I(-S.z,0,S.x),z=[-1,1].map(At=>new I().copy(S).multiplyScalar(4.25).addScaledVector(B,At*1.05).setY(1.05)).map(At=>{let ie=$t(16773584,C?.16:.12,.12,2.2);le(ie,new I().copy(At).addScaledVector(S,11).setY(.1),At),V.add(ie);let ne=new an(Ht(d,16774364,.95));return ne.position.copy(At),ne.scale.setScalar(.9),V.add(ne),ie}),at=[],q=Ue({helmet:15249440,s:1.55}),j=Ue({helmet:1842204,s:1.55});q.position.set(3.1,0,4.9),q.rotation.y=1.1,j.position.set(-3.6,0,4.2),j.rotation.y=.5,[q,j].forEach(At=>{V.add(At);let ie=Re(1.2,1.2,.7);ie.position.set(At.position.x,.03,At.position.z),V.add(ie)});let mt=C?900:380,_t=new qe,Pt=new Float32Array(mt*6);for(let At=0;At<mt;At++){let ie=(A()-.5)*40,ne=A()*24,Gt=-8+A()*22;Pt.set([ie,ne,Gt,ie+.06,ne+.7,Gt],At*6)}_t.setAttribute("position",new en(Pt,3));let tt=new $o(_t,new br({color:11060456,transparent:!0,opacity:.38,depthWrite:!1}));tt.frustumCulled=!1,V.add(tt);let Mt=bt(C?60:24,13163775,.18);V.add(Mt),Mt.userData.d=Array.from({length:Mt.geometry.attributes.position.count},()=>({t:A()}));let Ut=new Ke(50,1,.3,260);return{s:V,cam:Ut,fl:ve,F:Ne,smoke:P,emb:Z,tr:X,mr:it,red:Q,blu:st,streak:x,search:at,f1:q,f2:j,rain:tt,splash:Mt,t:0}}function kt(C,V,Y,ct){vt||(vt=Kt());let lt=vt;ct=Math.min(.05,ct||.016),dt(ct),lt.t+=ct;let Et=lt.t,Lt=lt.cam,jt=V/Y,se=.62-.42+Math.sin(Et*.11)*.12,Ne=(jt<.6?11:11.2)-Math.sin(Et*.13)*.25;Lt.position.set(Math.cos(se)*Ne,1.35+Math.sin(Et*.21)*.08,Math.sin(se)*Ne),Lt.lookAt(-.2,1.45,1.3),ge(Lt,V,Y,jt<.6?60:50,.5),et(lt.fl,Lt,Et),Yt(lt.smoke,lt.F,ct,{life:6,sp:3,wind:1.2,rise:2.4,s0:5,grow:2.2,op:.55}),M(lt.emb,lt.F,ct,{life:3,sp:3,wind:.8,rise:4}),a(lt.tr,!0,Et,0),lt.mr&&a(lt.mr,!0,Et,0);let Pe=Math.sin(Et*14)>0;lt.red.intensity=Pe?60:4,lt.blu.intensity=Pe?4:70,lt.streak[0].material.opacity=Pe?.5:.05,lt.streak[1].material.opacity=Pe?.05:.55,lt.tr.position.y=Math.sin(Et*1.7)*.012,lt.search.forEach((O,X)=>{let it=Math.sin(Et*.25+X*2.1)*.45+(X?.35:-.35);le(O,new I(Math.sin(it)*40+(X?18:-22),40,-40),new I(X?20:-24,0,-26))}),K(lt.f1,Et,0,"idle"),K(lt.f2,Et,1,Et%9<2.4?"cheer":"idle");let Ce=lt.rain.geometry.attributes.position,ve=Ce.count/2,L=24*ct;for(let O=0;O<ve;O++){let X=Ce.getY(O*2)-L;X<0&&(X+=24),Ce.setY(O*2,X),Ce.setY(O*2+1,X+.7)}Ce.needsUpdate=!0;let U=lt.splash.geometry.attributes.position;lt.splash.userData.d.forEach((O,X)=>{O.t+=ct*3,O.t>1&&(O.t=0,U.setXYZ(X,(A()-.5)*24,.05,-2+A()*12))}),U.needsUpdate=!0,lt.splash.material.opacity=.7,ht(C,V,Y,[[lt.s,Lt]]),C.save();let P=C.createRadialGradient(V/2,Y*.55,Math.min(V,Y)*.3,V/2,Y*.55,Math.max(V,Y)*.75);P.addColorStop(0,"rgba(0,0,0,0)"),P.addColorStop(1,"rgba(0,0,0,.62)"),C.fillStyle=P,C.fillRect(0,0,V,Y);let Z=C.createLinearGradient(0,0,0,Y*.32);Z.addColorStop(0,"rgba(0,0,6,.55)"),Z.addColorStop(1,"rgba(0,0,6,0)"),C.fillStyle=Z,C.fillRect(0,0,V,Y*.32),C.restore()}function Jt(){vt&&(wt(vt.s),vt=null)}let Ee=[[10134450,5989493],[14701370,9379088],[3837664,1195904],[16763955,10512896],[16770688,12880384],[11563263,4068484],[3596454,679488],[16734842,7211556]];function Nt(C){C=$(C|0,0,7);let V=new te,Y=Ee[C],ct=new nt(Rt(Bt(1.13),.24,.07),Ot(C>=3?16766842:15001839,.18));V.add(ct);let lt=new nt(Rt(Bt(.93),.3,.05),new In({color:Y[0],metalness:.55,roughness:.28,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.2}));lt.position.z=.05,V.add(lt);let Et=new nt(Rt(Bt(.8),.02,.01,1),new In({color:Y[1],metalness:.4,roughness:.35,clearcoat:1}));Et.position.z=.24,V.add(Et);let Lt=Ot(16185596,.1),jt=Math.min(C,4)+1,se=.25,Ne=-((jt-1)*se)/2-.08;for(let Pe=0;Pe<jt;Pe++){let Ce=new nt(Rt(J(.5,.24,.12),.08,.025,2),Lt);Ce.position.set(0,Ne+Pe*se,.32),V.add(Ce)}if(C>=4){let Pe=C-3;for(let Ce=0;Ce<Pe;Ce++){let ve=new nt(Rt(F(.15,.34),.05,.02,2),Ot(16765503,.15));ve.position.set((Ce-(Pe-1)/2)*.36,.66,.32),V.add(ve)}}return V}let Wt={};function he(){if(Wt.s)return Wt;let C=new Pn;C.environment=s,C.environmentIntensity=1,C.add(new zn(16777215,4210768,1));let V=new pn(16777215,2.4);return V.position.set(2,3,5),C.add(V),Wt.s=C,Wt.cam=new Ke(30,1,.1,50),Wt.cam.position.set(0,0,5.2),Wt.cam.lookAt(0,0,0),Wt}function ue(C,V,Y,ct){let lt=he();lt.rk!==Y&&(lt.g&&(lt.s.remove(lt.g),ft(lt.g)),lt.g=Nt(Y),lt.rk=Y,lt.s.add(lt.g)),lt.g.rotation.set(-.12,ct||-.32,0),C.clearRect(0,0,V,V),ht(C,V,V,[[lt.s,lt.cam]],1)}function Qt(C){let V=g()&&!gt.low,Y=C.ch||1,ct=new Pn;ct.background=y("#1b2350","#f2a066"),ct.environment=s,ct.environmentIntensity=.45,ct.fog=new is(6965850,26,90),ct.add(new zn(16769728,2367018,1.15));let lt=new pn(16753752,3.2);lt.position.set(-3,6,-14),ct.add(lt);let Et=new pn(16761466,2.2);Et.position.set(5,4,-12),ct.add(Et);let Lt=new pn(14082815,1.25);Lt.position.set(2,7,14),ct.add(Lt);let jt=new ye({color:9079440,map:xe(),roughness:.93,metalness:0}),se=new nt(new Oe(200,200),jt);se.rotation.x=-Math.PI/2,se.receiveShadow=!0,ct.add(se),lt.castShadow=!!V,lt.shadow.mapSize.set(1024,1024),Object.assign(lt.shadow.camera,{left:-12,right:12,top:10,bottom:-6,near:1,far:40}),lt.shadow.bias=-6e-4,lt.shadow.radius=4;for(let pe=0;pe<5;pe++){let oe=new an(Ht(d,pe%2?16763040:14203080,.13));oe.position.set((A()-.5)*30,2+A()*4,-8-pe*4),oe.scale.set(40,8,1),ct.add(oe)}let Ne=new an(Ht(d,16756832,.55));Ne.position.set(-4,4,-60),Ne.scale.set(70,30,1),ct.add(Ne);let Pe=[];[[3812676,-34,26,7],[2761012,-22,20,5]].forEach(([pe,oe,de,De])=>{let Ge=new ye({color:pe,roughness:1});for(let hn=0;hn<de;hn++){let Ye=2.5+A()*4,Tn=De+A()*De*1.6,hs=-48+hn*(96/de)+A()*1.5,Si=new nt(new ce(Ye,Tn,3),Ge);Si.position.set(hs,Tn/2,oe-A()*3),ct.add(Si),oe>-30&&hn%6===2&&Pe.push(new I(hs,Tn,oe+1))}}),Pe.length||Pe.push(new I(-6,8,-21),new I(7,9,-21));let Ce=ee(ct,V?16:8,12104896),ve=(C.types&&C.types.length?C.types:[["E",0]]).slice(0,3),L=ve.length,U=[0,-1,1],P=ve.map(([pe,oe],de)=>{let De=U[de],Ge=De===0,hn=Zt(o(r(pe,oe),Ge?[6.4,6.4]:[5,5]));hn.userData.keep=1;let Ye=De*4.9;hn.position.set(Ye,0,Ge?1.2:-1.6),hn.rotation.y=-Math.PI/2-De*.38,ct.add(hn);let Tn=Re(Ge?7.6:6,Ge?3.8:3.1,V?.45:.8);return Tn.position.set(Ye,.02,hn.position.z),Tn.rotation.z=hn.rotation.y,ct.add(Tn),hn.userData.x0=Ye,hn}),Z=[0,1,2,3].slice(0,V?4:2).map(pe=>{let oe=Ue({helmet:pe%2?15249440:1842204,s:1.18}),de=pe<2?-1:1;oe.position.set(de*(2.25+pe%2*1),0,4.9-pe%2*.9),oe.rotation.y=de*-.25,oe.userData.y0=0,ct.add(oe);let De=Re(1.1,1.1,V?.3:.6);return De.position.set(oe.position.x,.03,oe.position.z),ct.add(De),oe}),O=[],X=new Ke(45,1,.3,200),it=new Pn;it.environment=s,it.environmentIntensity=1.1,it.add(new zn(16777215,3813440,.9));let rt=new pn(16773852,2.6);rt.position.set(-.4,1,1.2),it.add(rt);let Q=new Dn(16777215,0,0,0);it.add(Q);let st=new Ke(30,1,1,6e3),x=new nt(new Oe(1,1),new Xe({map:yt,color:16764784,transparent:!0,opacity:0,blending:yn,depthWrite:!1,toneMapped:!1}));x.position.z=-60,it.add(x);let S=Ot(16761402,.2),B=new In({color:2304056,metalness:.4,roughness:.35,clearcoat:1,transparent:!0,opacity:.92}),N=Rt(F(1,.47),.34,.1,3),z=[0,1,2].map(pe=>{let oe=pe<C.stars,de=new te,De=new nt(N,oe?S:B);if(de.add(De),oe){let Ge=new an(Ht(d,16758832,0));Ge.position.z=-10,de.add(Ge),de.userData.gl=Ge}return de.userData.on=oe,de.visible=!oe,it.add(de),de}),at={3:[16763706,11760640],2:[14673648,8029848],1:[14256714,8011538]}[C.stars]||[16763706,11760640],q=new te,j=new te;q.add(j);let mt=Ot(at[0],.22),_t=new nt(new Ie(1,1,.2,56),mt);_t.rotation.x=Math.PI/2,j.add(_t);let Pt=new nt(new Nn(.95,.08,14,56),Ot(at[0],.12));Pt.position.z=.1,j.add(Pt);let tt=Pt.clone();tt.position.z=-.1,j.add(tt);let Mt=new nt(new Nn(.74,.035,10,48),Ot(at[1],.3));Mt.position.z=.11,j.add(Mt);let Ut=new nt(Rt(F(.5,.46),.1,.04,2),Ot(at[0],.12));Ut.position.z=.16,j.add(Ut);let At=Ut.clone();At.position.z=-.16,At.rotation.y=Math.PI,j.add(At);let ie=new nt(new Nn(.14,.04,8,20),Ot(at[0],.2));ie.position.y=1.08,j.add(ie);let ne=new te;q.add(ne),[[14163494,-1],[2056144,1]].forEach(([pe,oe])=>{let de=new nt(new ce(.62,2.5,.04),new In({color:pe,roughness:.45,sheen:1,sheenColor:new fe(16777215),sheenRoughness:.4}));de.position.set(oe*.42,1.7,-.25),de.scale.y=.62,de.rotation.z=oe*.38,ne.add(de);let De=new nt(new ce(.14,2.5,.045),new ye({color:16777215,roughness:.5}));De.position.copy(de.position),De.position.z+=.005,De.rotation.z=de.rotation.z,De.scale.y=.62,ne.add(De)}),q.visible=!1,it.add(q);let Gt=new te,me=new te;Gt.add(me),Gt.visible=!1,it.add(Gt);let be=new ye({color:16184040,roughness:.75}),nn=new nt(new ce(1,1.12,.05),be);me.add(nn);let mn=new vn;mn.colorSpace=Ze;let sn=C.img&&C.img.im,Gn=()=>{if(!sn||!sn.naturalWidth)return!1;let pe=C.img.crop,oe=sn.naturalWidth,de=sn.naturalHeight,De=.88,Ge=.82,hn=Math.max(De/oe,Ge/de)*pe[2],Ye=oe*hn,Tn=de*hn,hs=(Ye-De)*pe[0],Si=(Tn-Ge)*pe[1];return mn.image=sn,mn.repeat.set(De/Ye,Ge/Tn),mn.offset.set(hs/Ye,1-(Si+Ge)/Tn),mn.needsUpdate=!0,!0},Qe=Gn(),wn=new nt(new Oe(.88,.82),new ye({map:mn,roughness:.35,color:Qe?16777215:3355443}));wn.position.set(0,.56-.06-.41,.03),me.add(wn);let ai=new nt(new Oe(.88,.82),new Xe({map:Vt,transparent:!0,opacity:.18,blending:yn,depthWrite:!1}));ai.position.copy(wn.position),ai.position.z+=.002,ai.rotation.z=.7,ai.scale.set(1.6,.5,1),me.add(ai);let bn=Ct(512,96,(pe,oe,de)=>{pe.fillStyle="#2a2d36",pe.font="800 52px GameFont,system-ui,sans-serif",pe.textAlign="center",pe.textBaseline="middle";let De=48;for(pe.font=`800 ${De}px GameFont,system-ui,sans-serif`;pe.measureText(C.label||"").width>oe-30&&De>20;)De-=2,pe.font=`800 ${De}px GameFont,system-ui,sans-serif`;pe.fillText(C.label||"",oe/2,de/2+2)}),cs=new nt(new Oe(.9,.17),new Xe({map:bn,transparent:!0}));cs.position.set(0,-.43,.03),me.add(cs);let Sa=new ye({color:14206090,roughness:.9,transparent:!0,opacity:.85}),ls=new nt(new Oe(.32,.1),Sa);ls.position.set(0,.56,.035),ls.rotation.z=-.08,me.add(ls);let ud=new ye({color:9071168,roughness:.8});[-1,1].forEach(pe=>{let oe=new nt(new Ie(.008,.008,1,5),ud);oe.userData.s=pe,me.add(oe)});let dd=new nt(new ze(.05,14,10),new In({color:14688304,roughness:.2,clearcoat:1}));me.add(dd);let ch=new nt(new Oe(1,1.12),Me(.75));ch.scale.set(1.35,1.3,1),Gt.add(ch);let wa=V?90:45,fd=new Oe(1,.5),Vi=new Yo(fd,new ye({side:An,roughness:.4,metalness:.35}),wa);Vi.frustumCulled=!1,it.add(Vi);let lh=[16765503,16730730,3854847,8050266,16777215,16751162,11766527].map(pe=>new fe(pe)),hh=Array.from({length:wa},(pe,oe)=>({live:!1,p:new I,v:new I,r:new On,w:new I(A()*8,A()*8,A()*8),s:3+A()*3.2}));for(let pe=0;pe<wa;pe++)Vi.setColorAt(pe,lh[pe%lh.length]);let ci=new on,ti={bg:ct,cam:X,fg:it,fcam:st,veh:P,crew:Z,spots:O,steam:Ce,F:Pe,stars:z,medal:q,disc:j,frame:Gt,fb:me,rays:x,conf:Vi,cd:hh,sweep:Q,uvOK:Qe,setUV:Gn,photo:wn,t:0,burst:[0,0,0],ps:[],sGeo:N};ti.draw=function(pe,oe,de,De,Ge,hn){Ge=Math.min(.05,Ge||.016),dt(Ge);let Ye=ti.t+=Ge;!ti.uvOK&&(ti.uvOK=Gn())&&wn.material.color.set(16777215);let Tn=k(Math.min(1,De/6));X.position.set(Math.sin(Ye*.12)*.8,1.25-Tn*.15,14.5-Tn*2.2),X.lookAt(0,1.9,0);let hs=Math.min(de*.62,(hn||de)-de*.03);ge(X,oe,de,L>1?50:40,$((hs-de*.1)/de,.35,.8)),P.forEach((_e,Be)=>{a(_e,!0,Ye,Be*1.3)}),Z.forEach((_e,Be)=>K(_e,Ye,Be*1.7,"cheer")),O.forEach((_e,Be)=>{let tr=Math.sin(Ye*.4+Be*2)*.5;le(_e,new I((Be-1)*5+Math.sin(tr)*4,0,2+Math.cos(tr)*2),new I((Be-1)*9,22,-6)),_e.material.uniforms.op.value=(.25+.1*Math.sin(Ye*2+Be))*Math.min(1,De)}),Yt(Ce,Pe,Ge,{life:5,sp:2,wind:.6,rise:2,s0:3.5,grow:2,op:.4}),st.aspect=oe/de,st.fov=30;let Si=de/2/Math.tan(15*Math.PI/180);st.position.set(0,0,Si),st.near=Si*.3,st.far=Si*3,st.updateProjectionMatrix();let zr=(_e,Be)=>[_e-oe/2,de/2-Be],us=Math.min(oe*.085,44),kr=de*.2,[md,gd]=zr(oe/2,kr);x.position.set(md,gd,-80);let uh=Math.min(oe,de)*1.25;x.scale.set(uh,uh,1),x.rotation.z=Ye*.15,x.material.opacity=Math.min(1,$((De-.5)/.6,0,1))*.16,z.forEach((_e,Be)=>{let tr=oe/2+(Be-1)*us*2.5,er=kr-(Be===1?us*.35:0),[Wr,nr]=zr(tr,er);_e.position.set(Wr,nr,0);let ir=us*(Be===1?1.18:1);if(_e.userData.on){let ei=.5+Be*.28,li=$((De-ei)/.45,0,1);_e.visible=li>0;let Wi=ir*Math.max(.01,R(li));_e.scale.set(Wi,Wi,Wi),_e.rotation.y=(1-k(li))*w*1.25+Math.sin(Ye*1.2+Be)*.32,_e.rotation.x=Math.sin(Ye*.9+Be)*.12,li>0&&!ti.burst[Be]&&(ti.burst[Be]=1,pd(Wr,nr,us)),_e.userData.gl.material.opacity=(.55+.25*Math.sin(Ye*3+Be))*Math.min(1,li*2),_e.userData.gl.scale.setScalar(2.6+.2*Math.sin(Ye*3+Be))}else _e.visible=!0,_e.scale.setScalar(ir*.95),_e.rotation.y=Math.sin(Ye*.8+Be)*.15});let dh=Math.min(oe*.085,40),Gr=$((De-1.4)/.5,0,1);if(q.visible=Gr>0,Gr>0){let[_e,Be]=zr(oe*.15,kr+us*2.2+dh*1.4);q.position.set(_e,Be+(1-R(Gr))*de*.22,10),q.scale.setScalar(dh*.82),q.rotation.z=Math.sin(Ye*1.3)*.05,j.rotation.y=Math.sin(Ye*1.05)*.85+(1-Gr)*w}let ds=Math.min(oe*.25,118),ba=$((De-1.7)/.5,0,1);if(Gt.visible=ba>0,ba>0){let[_e,Be]=zr(oe*.84+(1-k(ba))*oe*.5,kr+us*1.9+ds*.75),er=ds*1.12*.5+ds*.32;Gt.position.set(_e,Be+er,6),Gt.scale.setScalar(ds);let Wr=.07+Math.sin(Ye*1.5)*.035;me.position.set(0,-er/ds,0),Gt.rotation.set(0,0,0),me.rotation.set(.04,-.28+Math.sin(Ye*.7)*.08,0),Gt.rotation.z=Wr,me.children.forEach(ei=>{if(ei.userData.s){let li=ei.userData.s*.36,Wi=.56,Ta=0,Aa=.56+.32;ei.position.set((li+Ta)/2,(Wi+Aa)/2,.04),ei.scale.y=Math.hypot(li-Ta,Wi-Aa),ei.rotation.z=Math.atan2(-(Ta-li),Aa-Wi)}});let nr=me.children.find(ei=>ei.geometry&&ei.geometry.type==="SphereGeometry");nr&&nr.position.set(0,.88,.05);let ir=Gt.children[1];ir.position.set(.12,-er/ds-.1,-.25),ir.rotation.z=0}Q.position.set(Math.sin(Ye*.8)*oe*.6,de*.2,400),Q.intensity=0;let xd=De>.7&&De<9;hh.forEach((_e,Be)=>{if(!_e.live)if(xd&&A()<Ge*(V?9:4))_e.live=!0,_e.p.set((A()-.5)*oe,de*.55+A()*40,(A()-.5)*200),_e.v.set((A()-.5)*60,-(60+A()*80),0);else{ci.position.set(0,-1e5,0),ci.scale.setScalar(.001),ci.updateMatrix(),Vi.setMatrixAt(Be,ci.matrix);return}_e.p.addScaledVector(_e.v,Ge),_e.v.x+=Math.sin(Ye*2+Be)*30*Ge,_e.r.x+=_e.w.x*Ge,_e.r.y+=_e.w.y*Ge,_e.r.z+=_e.w.z*Ge*.3,_e.p.y<-de*.6&&(_e.live=!1),ci.position.copy(_e.p),ci.rotation.copy(_e.r),ci.scale.setScalar(_e.s),ci.updateMatrix(),Vi.setMatrixAt(Be,ci.matrix)}),Vi.instanceMatrix.needsUpdate=!0,ti.ps=ti.ps.filter(_e=>(_e.t+=Ge)<_e.max),V&&(t.shadowMap.needsUpdate=!0),ht(pe,oe,de,[[ct,X],[it,st]]),pe.save();let Vr=pe.createLinearGradient(0,de*.45,0,de);Vr.addColorStop(0,"rgba(6,8,14,0)"),Vr.addColorStop(.5,"rgba(6,8,14,.55)"),Vr.addColorStop(1,"rgba(6,8,14,.9)"),pe.fillStyle=Vr,pe.fillRect(0,de*.45,oe,de*.55),pe.restore()};function pd(pe,oe,de){rt.intensity=5,setTimeout(()=>rt.intensity=2.6,120)}return ti.dispose=function(){wt(ct),wt(it)},ti}let we=null;function xe(){if(we)return we;let C=Ct(512,512,(V,Y,ct)=>{V.fillStyle="#3a3a3e",V.fillRect(0,0,Y,ct);let lt=V.getImageData(0,0,Y,ct),Et=lt.data;for(let Lt=0;Lt<Et.length;Lt+=4){let jt=(A()-.5)*38+(A()<.04?40:0);Et[Lt]=$(Et[Lt]+jt,0,255),Et[Lt+1]=$(Et[Lt+1]+jt,0,255),Et[Lt+2]=$(Et[Lt+2]+jt*1.05,0,255)}V.putImageData(lt,0,0),V.globalAlpha=.18;for(let Lt=0;Lt<26;Lt++)V.fillStyle=Lt%2?"#1c1c20":"#55555a",V.beginPath(),V.ellipse(A()*Y,A()*ct,10+A()*60,6+A()*30,A()*3,0,w),V.fill();V.globalAlpha=1},!0);return C.wrapS=C.wrapT=ks,C.repeat.set(14,14),C.anisotropy=4,we=C,C}function Ue(C){C=C||{};let V=new te,Y=(Q,st,x)=>new ye({color:Q,roughness:st,metalness:x||0}),ct=Y(C.coat||7232056,.88),lt=Y(5917232,.9),Et=Y(1579035,.6),Lt=Y(13212284,.6),jt=Y(2761760,.85),se=Y(1709072,.4),Ne=new ye({color:14279290,roughness:.25,metalness:.55,emissive:2763784}),Pe=new ye({color:13159634,roughness:.2,metalness:1}),Ce=new In({color:C.helmet||15249440,roughness:.3,clearcoat:1,clearcoatRoughness:.15}),ve=(Q,st,x,S,B)=>(Q.position.set(st,x,S),Q.castShadow=!0,(B||V).add(Q),Q),L=(Q,st,x,S,B)=>new nt(new Ie(Q,st,x,B||16),S);[-1,1].forEach(Q=>{ve(L(.085,.095,.66,lt),Q*.1,.5,0),ve(new nt(new Ie(.098,.098,.045,14,1,!0),Ne),Q*.1,.36,0);let st=ve(new nt(new ce(.13,.2,.24),Et),Q*.1,.1,.03);ve(new nt(new ce(.14,.03,.26),Y(789516,.9)),0,-.1,0,st)});let U=ve(L(.2,.235,.66,ct,20),0,1.06,0);U.scale.z=.68,ve(new nt(new ze(.2,20,12),ct),0,1.37,0).scale.set(1.3,.42,.72),[[.84,.231],[1.2,.21]].forEach(([Q,st])=>{let x=ve(new nt(new Ie(st+.006,st+.006,.045,20,1,!0),Ne),0,Q,0);x.scale.z=.7}),[-1,1].forEach(Q=>ve(new nt(new ce(.04,.62,.012),Ne),Q*.07,1.06,.155)),ve(new nt(new ce(.012,.6,.01),Et),0,1.06,.16);let Z=ve(new nt(new Hi(.075,.32,4,12),Pe),0,1.12,-.2);ve(new nt(new ce(.3,.4,.03),Et),0,1.12,-.15),ve(L(.085,.1,.08,Et),0,1.46,0),ve(L(.055,.06,.06,Lt),0,1.5,0),ve(new nt(new ze(.118,22,16),Lt),0,1.6,.01).scale.set(.92,1.08,.98),[-1,1].forEach(Q=>ve(new nt(new ze(.014,8,6),se),Q*.04,1.615,.118)),ve(new nt(new ze(.02,8,6),Lt),0,1.585,.125),ve(new nt(new ce(.05,.008,.01),Y(8014394,.6)),0,1.548,.112),ve(new nt(new ze(.135,24,12,0,w,0,Math.PI/2),Ce),0,1.655,-.005).scale.set(1,.95,1.12);let it=ve(L(.17,.19,.016,Ce,28),0,1.66,-.04);it.scale.z=1.3,ve(new nt(new ce(.08,.07,.012),new In({color:9050644,roughness:.3,clearcoat:1})),0,1.74,.135).rotation.x=-.35;let rt=[-1,1].map(Q=>{let st=new te;st.position.set(Q*.25,1.36,0);let x=new nt(new Hi(.07,.24,4,12),ct);x.position.y=-.16,x.castShadow=!0,st.add(x);let S=new te;S.position.y=-.32,st.add(S);let B=new nt(new Hi(.064,.22,4,12),ct);B.position.y=-.14,B.castShadow=!0,S.add(B);let N=new nt(new Ie(.068,.068,.035,12,1,!0),Ne);N.position.y=-.1,S.add(N);let z=new nt(new ze(.062,12,10),jt);return z.scale.set(.9,1.2,.8),z.position.y=-.31,S.add(z),V.add(st),st.userData.k=Q,st.userData.fa=S,st});return V.userData.arms=rt,V.scale.setScalar(C.s||1),V}function K(C,V,Y,ct){let lt=C.userData.arms,Et=ct==="cheer";lt.forEach(Lt=>{let jt=Lt.userData.k,se=Lt.userData.fa;Et&&jt>0==(Math.floor(Y*10)%2===0)?(Lt.rotation.z=jt*(2.35+.12*Math.sin(V*4+Y)),Lt.rotation.x=-.1,se.rotation.z=jt*(.35+.35*Math.sin(V*6+Y))):Et?(Lt.rotation.z=jt*.35,Lt.rotation.x=-.5,se.rotation.x=-1.1,se.rotation.z=0):(Lt.rotation.z=jt*(.12+.03*Math.sin(V*1.4+Y)),Lt.rotation.x=0,se.rotation.x=-.15,se.rotation.z=0)}),C.position.y=0}function Zt(C){return C.scale.set(1.22,.94,1),C.traverse(V=>{if(V.isMesh){V.castShadow=!0;let Y=V.material;Y&&Y.isMeshStandardMaterial&&!Y.transparent&&Y.roughness<.5&&Y.color&&Y.color.r>.5&&Y.color.g<.2&&(Y.envMapIntensity=1.1)}}),C}function pt(C){let V=g()&&!gt.low,Y=new Pn;Y.environment=s,Y.environmentIntensity=1.2,Y.add(new zn(16774368,3153936,.9));let ct=new pn(16777215,2.6);ct.position.set(2,3,6),Y.add(ct);let lt=new Dn(16769184,0,30,1);Y.add(lt);let Et=Nt(C);Y.add(Et);let Lt=Ee[$(C,0,4)][0],jt=new nt(new Oe(1,1),new Xe({map:yt,color:16765056,transparent:!0,opacity:0,blending:yn,depthWrite:!1,toneMapped:!1}));jt.position.z=-2,jt.scale.setScalar(13),Y.add(jt);let se=jt.clone();se.material=jt.material.clone(),se.material.color.set(Lt),se.position.z=-1.9,se.scale.setScalar(9),Y.add(se);let Ne=new an(Ht(d,16762976,0));Ne.position.z=-1.5,Ne.scale.setScalar(5.5),Y.add(Ne);let Pe=[0,1].map(O=>{let X=new an(Ht(Vt,O?10146047:16777215,0));return X.position.z=.6,Y.add(X),X}),Ce=[];for(let O=0;O<(V?8:5);O++){let X=$t(O%2?16769184:16774880,V?.4:.3,1.8,.05);X.userData.a=O/(V?8:5)*w,Y.add(X),Ce.push(X)}let ve=bt(V?160:70,16767120,.12);Y.add(ve);let L=ve.geometry.attributes.position,U=Array.from({length:L.count},()=>({life:A(),v:new I})),P=new Ke(40,1,.1,100),Z={t:0};return Z.draw=function(O,X,it,rt){rt=Math.min(.05,rt||.016),dt(rt);let Q=Z.t+=rt,st=10-k(Math.min(1,Q/2.4))*2.6;P.position.set(Math.sin(Q*.3)*.25,Math.sin(Q*.4)*.12,st),P.lookAt(0,0,0),ge(P,X,it,X/it<.7?34:30,.4);let x=Math.min(1,Q/1.7);Et.rotation.y=(1-k(x))*w*2.5+(x>=1?Math.sin((Q-1.7)*1.1)*.4:0),Et.rotation.x=-.08+Math.sin(Q*.7)*.05,Et.scale.setScalar(Math.max(.01,R(Math.min(1,Q*1.5))));let S=Math.min(1,Q*1.2);jt.rotation.z=Q*.18,se.rotation.z=-Q*.11,jt.material.opacity=.5*S,se.material.opacity=.32*S,Ne.material.opacity=(.6+.15*Math.sin(Q*3))*S;let B=x>=1?Math.max(0,1-(Q-1.7)*1.4):0;Pe[0].material.opacity=.9*B+.25*S,Pe[0].scale.set(7*(.7+B),.45,1),Pe[1].material.opacity=.4*B+.1*S,Pe[1].scale.set(4.5,.18,1),Pe[1].material.rotation=0,lt.position.set(Math.sin(Q*1.4)*2.5,1.2,2.5),lt.intensity=12,Ce.forEach((N,z)=>{let at=N.userData.a+Q*.12;le(N,new I(Math.cos(at)*9,Math.sin(at)*9,-2.5),new I(0,0,-1)),N.material.uniforms.op.value=(.22+.1*Math.sin(Q*2+z))*S}),U.forEach((N,z)=>{if(N.life+=rt*.5,N.life>=1){N.life=0;let at=A()*w,q=1+A()*1.6;L.setXYZ(z,Math.cos(at)*q,Math.sin(at)*q-.4,(A()-.5)*1.5),N.v.set(Math.cos(at)*.5,.7+A()*.8,0)}L.setXYZ(z,L.getX(z)+N.v.x*rt,L.getY(z)+N.v.y*rt,L.getZ(z))}),L.needsUpdate=!0,ve.material.opacity=S,ht(O,X,it,[[Y,P]])},Z.dispose=function(){wt(Y)},Z}return{get off(){return gt.off},set off(C){gt.off=C},U:gt,title:kt,titleDispose:Jt,get tOn(){return!!vt},badge:ue,res:Qt,rank:pt}}var ma=class extends Pn{constructor(){super();let t=new ce;t.deleteAttribute("uv");let e=new ye({side:_n}),n=new ye,s=new Dn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new nt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new nt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new nt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new nt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new nt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new nt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new nt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new nt(t,$s(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new nt(t,$s(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new nt(t,$s(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new nt(t,$s(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let p=new nt(t,$s(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new nt(t,$s(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function $s(i){let t=new Xe;return t.color.setScalar(i),t}function td(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new qe,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=ju(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let g=ju(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function ju(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new en(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);a.setComponent(d+u,g,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Or=new I;function kn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Or.copy(t),Or[n]=0,Or.normalize();let l=.5*o/(o+a),h=1-Or.angleTo(i)/c;return Math.sign(Or[e])===1?h*l:a/(o+a)+l+l*(1-h)}var ga=class extends ce{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,c=new I,l=new I(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new I,y=.5/s;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(a.fromArray(h,p),c.copy(a),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),h[p+0]=l.x*Math.sign(a.x)+c.x*r,h[p+1]=l.y*Math.sign(a.y)+c.y*r,h[p+2]=l.z*Math.sign(a.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/f)){case 0:g.set(1,0,0),d[m+0]=kn(g,c,"z","y",r,n),d[m+1]=1-kn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[m+0]=1-kn(g,c,"z","y",r,n),d[m+1]=1-kn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[m+0]=1-kn(g,c,"x","z",r,t),d[m+1]=kn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[m+0]=1-kn(g,c,"x","z",r,t),d[m+1]=1-kn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[m+0]=1-kn(g,c,"x","y",r,t),d[m+1]=1-kn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[m+0]=kn(g,c,"x","y",r,t),d[m+1]=1-kn(g,c,"y","x",r,e);break}}};var kx=!1,Je=(i,t={})=>new ye(Object.assign({color:i,roughness:.45,metalness:.1},t)),Mi=(i,t={})=>new In(Object.assign({color:i,roughness:.3,metalness:.08,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.15},t)),Ks=(i,t,e)=>{let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new fn(n);return s.colorSpace=Ze,s.anisotropy=4,s},Br={grille:Ks(64,64,(i,t,e)=>{i.fillStyle="#1a1b1f",i.fillRect(0,0,t,e);for(let n=4;n<e;n+=9){let s=i.createLinearGradient(0,n,0,n+5);s.addColorStop(0,"#f4f6fa"),s.addColorStop(1,"#7b8090"),i.fillStyle=s,i.fillRect(3,n,t-6,5)}i.strokeStyle="#cfd3da",i.lineWidth=4,i.strokeRect(2,2,t-4,e-4)}),roll:Ks(64,128,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"#9aa0aa"),n.addColorStop(.5,"#eef0f4"),n.addColorStop(1,"#a3a9b3"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(40,44,52,.55)";for(let s=0;s<e;s+=8)i.fillRect(0,s,t,1.6);i.fillStyle="#3a3e46",i.fillRect(t*.38,e-14,t*.24,6),i.strokeStyle="#5b616c",i.lineWidth=3,i.strokeRect(1,1,t-2,e-2)}),tread:Ks(64,16,(i,t,e)=>{i.fillStyle="#17171a",i.fillRect(0,0,t,e),i.fillStyle="#0b0b0d";for(let n=0;n<t;n+=6)i.fillRect(n,0,3,e)}),gauge:Ks(128,64,(i,t,e)=>{i.fillStyle="#2b2f37",i.fillRect(0,0,t,e);for(let n=0;n<3;n++){let s=22+n*42;i.fillStyle="#d9dde3",i.beginPath(),i.arc(s,24,15,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(s,24,12,0,7),i.fill(),i.strokeStyle="#d01818",i.lineWidth=2,i.beginPath(),i.moveTo(s,24),i.lineTo(s+8*Math.cos(n-2.2),24+8*Math.sin(n-2.2)),i.stroke()}["#e83030","#3070e8","#f0c020","#30b050"].forEach((n,s)=>{i.fillStyle="#bfc4cc",i.beginPath(),i.arc(16+s*32,52,7,0,7),i.fill(),i.fillStyle=n,i.beginPath(),i.arc(16+s*32,52,4.5,0,7),i.fill()})}),plate:Ks(64,24,(i,t,e)=>{i.fillStyle="#f4f4ee",i.fillRect(0,0,t,e),i.strokeStyle="#333",i.lineWidth=2,i.strokeRect(1,1,t-2,e-2),i.fillStyle="#222",i.font="bold 15px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("FR 07",t/2,e/2+1)})};function th(i,t,e,n,s,r,o){i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip();for(let a=-2;a<n/s*2+2;a++)i.fillStyle=a%2?r:o,i.beginPath(),i.moveTo(t+a*s*.6,e+s),i.lineTo(t+a*s*.6+s*.6,e+s),i.lineTo(t+a*s*.6+s*1.2,e),i.lineTo(t+a*s*.6+s*.6,e),i.fill();i.restore()}function eh(i,t,e,n,s){i.save(),i.translate(t,e),i.fillStyle="#f3c63a",i.beginPath();for(let r=0;r<10;r++){let o=r*Math.PI/5-Math.PI/2,a=r%2?n*.55:n;i.lineTo(Math.cos(o)*a,Math.sin(o)*a)}i.closePath(),i.fill(),i.fillStyle=s,i.beginPath(),i.arc(0,0,n*.42,0,7),i.fill(),i.fillStyle="#ffd23f",i.beginPath(),i.moveTo(0,-n*.32),i.quadraticCurveTo(n*.28,0,0,n*.3),i.quadraticCurveTo(-n*.28,0,0,-n*.32),i.fill(),i.restore()}var xa={};function Gx(i){if(xa[i])return xa[i];let t=i==="door"?256:512,e=i==="door"?192:128,n=Ks(t,e,s=>{s.clearRect(0,0,t,e);let r=(o,a,c)=>{s.fillStyle="rgba(0,0,0,.35)",s.fillRect(o,a,2,c-a),s.fillStyle="rgba(255,255,255,.18)",s.fillRect(o+2,a,1,c-a)};if(i==="fire"&&(s.fillStyle="#f6f1d0",s.fillRect(0,86,t,14),s.fillStyle="#ffd23f",s.fillRect(0,100,t,4),th(s,0,86,70,14,"#f6f1d0","#c8141a"),r(t-150,14,112),r(t-60,14,112),s.fillStyle="rgba(0,0,0,.4)",s.fillRect(t-145,58,16,4),eh(s,t-104,48,26,"#9a0e14"),s.fillStyle="#fff",s.font="900 30px sans-serif",s.textAlign="center",s.fillText("7",t-104,122),s.font="900 26px sans-serif",s.fillStyle="rgba(255,255,255,.95)",s.textAlign="left",s.fillText("RESCUE \xB7 7",20,72)),i==="door"&&(eh(s,128,78,62,"#9a0e14"),s.fillStyle="#fff",s.strokeStyle="rgba(60,0,0,.8)",s.lineWidth=6,s.font="900 46px sans-serif",s.textAlign="center",s.strokeText("7",128,176),s.fillText("7",128,176),s.fillStyle="rgba(0,0,0,.4)",s.fillRect(10,6,3,180),s.fillRect(232,100,22,6)),i==="amb"){s.fillStyle="#d4161c",s.fillRect(0,78,t,18),s.fillStyle="#ff8a1e",s.fillRect(0,98,t,6),s.fillStyle="#1d56c8",s.fillRect(0,40,t*.62,6);let o=t*.36,a=50;s.fillStyle="#fff",s.fillRect(o-11,a-30,22,60),s.fillRect(o-30,a-11,60,22),s.fillStyle="#14a046",s.fillRect(o-8,a-27,16,54),s.fillRect(o-27,a-8,54,16),r(t-150,14,112),r(t*.72,14,112),s.fillStyle="#1d3f9a",s.font="800 22px sans-serif",s.textAlign="left",s.fillText("AMBULANCE",t*.47,70)}i==="police"&&(s.fillStyle="#1d3f9a",s.fillRect(0,64,t,30),s.fillStyle="#ffffff",s.fillRect(0,94,t,5),s.fillStyle="#fff",s.font="900 26px sans-serif",s.textAlign="center",s.fillText("PATROL",t/2,88),r(t*.5,8,120),r(t*.24,8,120)),i==="van"&&(th(s,0,80,t,16,"#1a1a1e","#ffd23f"),r(t*.62,10,118),s.fillStyle="#1a1a1e",s.font="800 22px sans-serif",s.textAlign="left",s.fillText("CITY WORKS",22,62)),i==="tow"&&(th(s,0,84,t,14,"#1a1a1e","#ffd23f"),r(t-130,10,118),s.fillStyle="#1a1a1e",s.font="900 24px sans-serif",s.textAlign="left",s.fillText("TOW 24/7",20,64)),i==="chief"&&(s.fillStyle="#f6f1d0",s.fillRect(0,78,t,10),s.fillStyle="#ffd23f",s.fillRect(0,90,t,4),r(t*.5,8,120),eh(s,t*.36,48,22,"#9a0e14"),s.fillStyle="#fff",s.font="900 22px sans-serif",s.textAlign="left",s.fillText("CHIEF",t*.5+14,60)),i==="car"&&(r(t*.5,10,120),r(t*.26,10,120),s.fillStyle="rgba(0,0,0,.45)",s.fillRect(t*.55,60,18,4),s.fillRect(t*.31,60,18,4),s.fillStyle="rgba(255,255,255,.22)",s.fillRect(0,46,t,2))});return xa[i]=new ye({map:n,transparent:!0,roughness:.35,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),xa[i]}var xt={red:Mi(13112346),redD:Mi(9047312,{roughness:.45,clearcoat:.4}),white:Mi(15987696,{roughness:.28}),chrome:Je(15659252,{metalness:1,roughness:.08,envMapIntensity:1.6}),alu:Je(12896464,{metalness:.9,roughness:.28}),black:Je(1513499,{roughness:.7}),trim:Je(987154,{roughness:.45,metalness:.2}),tire:Je(1710621,{roughness:.88,map:Br.tread}),rubber:Je(1052690,{roughness:.95}),glass:new In({color:1056814,metalness:.1,roughness:.03,clearcoat:1,clearcoatRoughness:0,envMapIntensity:2.6,reflectivity:1}),head:Je(16777215,{emissive:16773832,emissiveIntensity:2.6,roughness:.1}),tail:Je(5898240,{emissive:16718352,emissiveIntensity:1.6,roughness:.15}),amber:Je(6961664,{emissive:16751120,emissiveIntensity:1.3,roughness:.2}),lr:Je(5570560,{emissive:16719904,emissiveIntensity:1.6,roughness:.15}),lb:Je(2133,{emissive:2117887,emissiveIntensity:1.8,roughness:.15}),yel:Mi(16760596),refl:Je(16117960,{emissive:4209168,roughness:.3}),hose:Je(15258746,{roughness:.75}),hoseR:Je(13122090,{roughness:.7}),grey:Je(6053992,{roughness:.55,metalness:.3}),orange:Mi(16742930),blue:Mi(1916826),navy:Mi(1319229),cone:Je(16734736,{roughness:.55}),grille:Je(16777215,{map:Br.grille,metalness:.6,roughness:.25}),roll:Je(16777215,{map:Br.roll,metalness:.55,roughness:.35}),gauge:Je(16777215,{map:Br.gauge,roughness:.4}),plate:Je(16777215,{map:Br.plate,roughness:.5}),seat:Je(2763825,{roughness:.8})},ed={red:[13112346,.3,.08],redD:[9047312,.45,.08],refl:[16117960,.3,.1],chrome:[15659252,.08,1],alu:[12896464,.28,.9],white:[15987696,.28,.08],hose:[15258746,.75,.1]};function Mn(i,t,e,n,s){let r=xt[i];r.color.setHex(t),r.roughness=e,r.metalness=n,r.emissive.setHex(s||0),r.emissiveIntensity=s?.35:1}var _a=1;function Vx(i){for(let t in ed)Mn(t,...ed[t]);_a=1,i===1&&(Mn("red",14161436,.22,.12),Mn("redD",15921904,.3,.1),Mn("alu",15000804,.15,1)),i===2&&(Mn("red",10357010,.16,.45),Mn("redD",1710622,.4,.3),Mn("refl",14725168,.25,.9,3811840),Mn("alu",15790320,.1,1),_a=1.25,Mn("white",16184298,.18,.35)),i===3&&(Mn("red",10686490,.12,.55),Mn("redD",14263594,.2,1),Mn("refl",16764746,.2,1,4862464),Mn("chrome",16765802,.1,1),Mn("alu",13213760,.18,1),_a=1.35,Mn("white",16447212,.15,.3),Mn("hose",16765802,.3,.8))}function ya(i,t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t.receiveShadow=!0,i.add(t),t}function Ft(i,t,e,n,s,r,o,a,c=.02){let l=Math.min(c,t/2-1e-4,e/2-1e-4,n/2-1e-4);return ya(i,new nt(l>.001?new ga(t,e,n,3,l):new ce(t,e,n),s),r,o,a)}function ke(i,t,e,n,s,r,o,a="z",c=24,l){let h=new nt(new Ie(t,l==null?t:l,e,c),n);return a==="z"?h.rotation.x=Math.PI/2:a==="x"&&(h.rotation.z=Math.PI/2),ya(i,h,s,r,o)}function nd(i,t,e,n,s,r,o,a=0,c=0){let l=new nt(new Oe(t,e),n);return l.rotation.set(c,a,0),l.castShadow=!1,l.receiveShadow=!0,l.position.set(s,r,o),i.add(l),l}function sh(i,t,e,n,s,r,o,a="z"){let c=new nt(new Nn(t,e,10,28),n);return a==="y"?c.rotation.x=Math.PI/2:a==="x"&&(c.rotation.y=Math.PI/2),ya(i,c,s,r,o)}function id(i,t,e,n=.075,s=.06){let r=Math.sign(e)||1,o=s*.78;ke(i,n*.96,o,xt.tire,t,n,e,"z",28),[-1,1].forEach(a=>sh(i,n*.8,n*.17,xt.rubber,t,n,e+a*o/2,"z")),ke(i,n*.6,.006,xt.trim,t,n,e+r*(s/2-.004),"z",24),ke(i,n*.56,.008,xt.chrome,t,n,e+r*(s/2),"z",24);for(let a=0;a<6;a++){let c=Ft(i,n*.5,n*.11,.006,xt.alu,t,n,e+r*(s/2+.003),0);c.rotation.z=a*Math.PI/3,c.position.x=t+Math.cos(a*Math.PI/3)*n*.22,c.position.y=n+Math.sin(a*Math.PI/3)*n*.22}ke(i,n*.17,.014,xt.chrome,t,n,e+r*(s/2+.004),"z",16)}function ki(i,t,e,n){t.forEach(s=>{id(i,s,e/2-.03,n),id(i,s,-e/2+.03,n)}),t.forEach(s=>{[-1,1].forEach(r=>ke(i,n*1.14,.012,xt.trim,s,n*1.02,r*(e/2-.004),"z",24))})}function Qs(i,t,e,n,s=.05){s*=_a*(kx?.5:1),Ft(i,s*1.05,.012,n*1.02,xt.trim,t,e,0,.005),Ft(i,s*.85,.02,n*.46,xt.lr,t,e+.014,-n*.25,.009),Ft(i,s*.85,.02,n*.46,xt.lb,t,e+.014,n*.25,.009),Ft(i,s*.5,.016,n*.06,xt.chrome,t,e+.012,0,.004),i.userData.lb=[[t,e+.02,-n*.25],[t,e+.02,n*.25]]}function va(i,t,e,n,s=.02){[-1,1].forEach(r=>{let o=r*(n/2-.055);ke(i,s*1.25,.01,xt.chrome,t,e,o,"x",20),ke(i,s,.012,xt.head,t+.002,e,o,"x",20),Ft(i,.008,s*.7,s*1.4,xt.amber,t,e-s*1.9,o,.003)})}function Gi(i,t,e,n){[-1,1].forEach(s=>{let r=s*(n/2-.035);Ft(i,.01,.034,.034,xt.tail,t,e,r,.006),Ft(i,.01,.018,.034,xt.amber,t,e-.032,r,.004)})}function Ma(i,t,e,n){[-1,1].forEach(s=>{Ft(i,.01,.008,.05,xt.chrome,t,e,s*(n/2+.02),0),Ft(i,.014,.05,.024,xt.trim,t-.004,e,s*(n/2+.044),.006)})}function Ei(i,t,e,n,s,r,o){let a=Gx(t),c=n-e,l=r-s;nd(i,c,l,a,(e+n)/2,(s+r)/2,o/2+.0025,0),nd(i,c,l,a,(e+n)/2,(s+r)/2,-o/2-.0025,Math.PI)}function Hr(i,t,e,n,s,r,o=!0){let a=e-t,c=(t+e)/2;Ft(i,a,s*.62,n,r,c,.07+s*.31,0,.04),Ft(i,a*.86,s*.4,n*.97,r,c-a*.05,.07+s*.62+s*.18-.01,0,.045);let l=Ft(i,.012,s*.32,n*.86,xt.glass,e-a*.09,.07+s*.74,0,.006);l.rotation.z=.18,[-1,1].forEach(h=>{Ft(i,a*.58,s*.27,.006,xt.glass,c-a*.08,.07+s*.76,h*(n*.485+.002),.003),Ft(i,.006,s*.26,.008,r,c+a*.1,.07+s*.76,h*(n*.485+.003),0),Ft(i,.04,.006,.003,xt.chrome,c-a*.2,.07+s*.5,h*(n/2+.002),0)}),Ft(i,.012,s*.24,n*.66,xt.grille,e+.002,.07+s*.3,0,.004),Ft(i,.035,.045,n*1.01,xt.chrome,e+.012,.08,0,.018),Ft(i,.01,.012,n*.3,xt.plate,e+.03,.08,0,0),va(i,e+.004,.07+s*.32,n),Ma(i,e-a*.15,.07+s*.66,n),[-1,1].forEach(h=>Ft(i,a*.3,.012,.03,xt.alu,c,.06,h*(n/2+.008),.004)),o&&Qs(i,c-a*.05,.07+s+.006,n*.82,a*.42)}function Ea(i,t,e,n,s,r=xt.refl){Ft(i,e-t,.016,s+.004,r,(t+e)/2,n,0,.004)}function sd(i,t,e,n,s,r,o){let a=(e-t)/o;for(let c=0;c<o;c++)[-1,1].forEach(l=>{Ft(i,a*.9,s-n,.006,xt.roll,t+a*(c+.5),(n+s)/2,l*(r/2+.002),.003),Ft(i,a*.92,.008,.01,xt.chrome,t+a*(c+.5),s+.004,l*(r/2+.004),.002)})}function nh(i,t,e,n,s,r){for(let o=0;o<3;o++)sh(i,s,s*.28,r,t,e+o*s*.55,n,"y")}function ih(i,t,e,n=0){[-1,1].forEach(r=>{Ft(i,t,.022,.018,xt.alu,t/2-.02,n,r*e/2,.006),Ft(i,t*.96,.008,.008,xt.chrome,t/2-.02,n+.018,r*e/2,0)});let s=Math.round(t/.05);for(let r=0;r<s;r++)ke(i,.0055,e,xt.chrome,r*t/s,n,0,"z",8)}var Qn={};Qn.E=()=>{let i=new te,t=.42,e=.27;Hr(i,.16,.44,t,e+.03,xt.red),Ft(i,.6,e-.04,t,xt.red,-.13,.07+(e-.04)/2,0,.035),sd(i,-.4,-.02,.1,.25,t,3),[-1,1].forEach(s=>{Ft(i,.1,.13,.008,xt.gauge,.08,.19,s*(t/2+.002),.004),Ft(i,.1,.014,.012,xt.chrome,.08,.26,s*(t/2+.005),.003),ke(i,.014,.03,xt.chrome,.06,.12,s*(t/2+.012),"z",12),ke(i,.014,.03,xt.yel,.1,.12,s*(t/2+.012),"z",12)}),Ei(i,"door",.2,.36,.1,.22,t*.97),Ea(i,-.43,.45,.085,t),Ft(i,.5,.03,t*.86,xt.redD,-.14,e+.075,0,.01),nh(i,-.25,e+.1,-.08,.045,xt.hose),nh(i,-.25,e+.1,.08,.045,xt.hoseR),nh(i,-.08,e+.1,0,.05,xt.hose),[-1,1].forEach(s=>Ft(i,.5,.014,.014,xt.chrome,-.14,e+.12,s*t*.44,.004));let n=new te;return n.position.set(-.38,.08+e+.07,t*.3),i.add(n),ih(n,.42,.08,0),ke(i,.05,.12,xt.chrome,-.43,.2,0,"z",20),ke(i,.04,.13,xt.hoseR,-.43,.2,0,"z",20),Ft(i,.05,.02,t*.95,xt.alu,-.45,.07,0,.006),Gi(i,-.432,.2,t),Ft(i,.004,.02,.06,xt.plate,-.434,.11,0,0),ki(i,[.31,-.22,-.34],t,.072),i};Qn.K=()=>{let i=new te,t=.42,e=.25;Hr(i,.24,.48,t,e+.05,xt.red),Ft(i,.7,e-.06,t,xt.red,-.12,.07+(e-.06)/2,0,.035),sd(i,-.44,.2,.1,.22,t,4),Ei(i,"door",.27,.42,.1,.215,t*.97),Ea(i,-.47,.49,.085,t),[-1,1].forEach(r=>{Ft(i,.03,.05,.05,xt.alu,.18,.06,r*(t/2+.02),.008),Ft(i,.03,.05,.05,xt.alu,-.42,.06,r*(t/2+.02),.008)}),ke(i,.085,.04,xt.alu,-.36,e+.035,0,"y",28),ke(i,.06,.05,xt.redD,-.36,e+.07,0,"y",24);let n=new te;n.position.set(-.36,e+.11,0),n.rotation.z=-.03,i.add(n),n.userData.ladder=1,ih(n,.86,.2,0);let s=new te;return s.position.set(.08,.03,0),n.add(s),ih(s,.74,.15,0),Ft(n,.12,.06,.2,xt.redD,0,-.03,0,.012),Ft(n,.06,.04,.12,xt.yel,.84,.02,0,.006),ke(n,.012,.5,xt.chrome,.4,-.015,0,"x",8),Gi(i,-.475,.16,t),ki(i,[.37,-.25,-.37],t,.072),i};Qn.T=()=>{let i=new te,t=.42;Hr(i,.18,.44,t,.27+.03,xt.red),Ft(i,.62,.06,t*.92,xt.redD,-.12,.09,0,.012),ke(i,.135,.5,xt.chrome,-.13,.25,0,"x",40),[-1,1].forEach(n=>{let s=new nt(new ze(.135,32,16),xt.chrome);s.scale.set(.32,1,1),ya(i,s,-.13+n*.25,.25,0)}),[-.33,-.13,.07].forEach(n=>ke(i,.141,.022,xt.red,n,.25,0,"x",40)),Ft(i,.36,.012,.07,xt.alu,-.13,.39,0,.003),[-1,1].forEach(n=>Ft(i,.36,.01,.006,xt.chrome,-.13,.42,n*.05,0));for(let n=0;n<4;n++)ke(i,.004,.03,xt.chrome,-.29+n*.105,.405,0,"y",6);return ke(i,.03,.02,xt.alu,-.05,.395,0,"y",16),[-1,1].forEach(n=>{Ft(i,.18,.05,.008,xt.roll,.06,.12,n*(t*.46+.002),.004),ke(i,.016,.03,xt.yel,-.02,.12,n*(t*.46+.012),"z",12)}),ke(i,.05,.1,xt.chrome,-.44,.2,0,"z",20),ke(i,.04,.11,xt.hoseR,-.44,.2,0,"z",20),Ea(i,-.43,.18,.085,t*.92),Ei(i,"door",.21,.37,.1,.22,t*.97),Gi(i,-.432,.14,t*.92),ki(i,[.31,-.23,-.35],t,.072),i};Qn.A=()=>{let i=new te,t=.4,e=.31;return Hr(i,.2,.43,t,e*.78,xt.white,!1),Ft(i,.6,e-.04,t,xt.white,-.1,.07+(e-.04)/2,0,.045),Ei(i,"amb",-.4,.2,.07,.33,t),[-1,1].forEach(n=>Ft(i,.08,.06,.006,xt.glass,-.03,.25,n*(t/2+.002),.006)),Ft(i,.006,.1,.12,xt.glass,-.403,.24,0,.004),Ft(i,.006,.24,.004,xt.trim,-.403,.17,0,0),Qs(i,.31,e*.78+.07+.006,t*.8,.06),[-1,1].forEach(n=>{Ft(i,.03,.025,.03,n>0?xt.lb:xt.lr,-.38,e+.08,n*(t/2-.03),.008),Ft(i,.03,.025,.03,n>0?xt.lr:xt.lb,.18,e+.08,n*(t/2-.03),.008)}),Ft(i,.5,.012,.06,xt.alu,-.1,e+.075,0,.004),Ft(i,.05,.02,t*.95,xt.alu,-.405,.07,0,.006),Gi(i,-.405,.16,t),ki(i,[.3,-.26],t,.066),i};Qn.V=()=>{let i=new te,t=.38,e=.28;Ft(i,.68,e-.06,t,xt.orange,0,.06+(e-.06)/2,0,.06);let n=Ft(i,.012,.1,t*.86,xt.glass,.3,.2,0,.004);n.rotation.z=.35,[-1,1].forEach(s=>Ft(i,.2,.08,.006,xt.glass,.18,.21,s*(t/2+.002),.003)),Ei(i,"van",-.33,.33,.06,.2,t),Ft(i,.012,.05,t*.5,xt.grille,.342,.11,0,.004),va(i,.342,.14,t,.016),Ft(i,.03,.04,t*1.01,xt.trim,.35,.07,0,.015),Qs(i,.18,e+.006,t*.8,.05),Gi(i,-.343,.15,t),[-1,1].forEach(s=>Ft(i,.36,.008,.008,xt.chrome,-.08,e+.025,s*t*.38,0));for(let s=0;s<5;s++)Ft(i,.008,.008,t*.76,xt.chrome,-.24+s*.08,e+.025,0,0);return Ma(i,.24,.2,t),ki(i,[.22,-.22],t,.062),i};Qn.P=()=>{let i=new te,t=.34;return rd(i,t,xt.white,xt.navy),Ei(i,"police",-.3,.3,.07,.17,t),Qs(i,-.03,.255,t*.82,.05),Ft(i,.02,.06,t*.7,xt.trim,.34,.09,0,.01),i};Qn.C=()=>{let i=new te,t=.36;Ft(i,.66,.13,t,xt.red,0,.12,0,.05);let e=Ft(i,.42,.11,t*.9,xt.red,-.05,.235,0,.04),n=Ft(i,.012,.09,t*.8,xt.glass,.17,.23,0,.004);return n.rotation.z=.4,Ft(i,.012,.08,t*.78,xt.glass,-.262,.23,0,.004),[-1,1].forEach(s=>{Ft(i,.36,.075,.006,xt.glass,-.05,.235,s*(t*.45+.002),.003),Ft(i,.006,.075,.008,xt.red,-.05,.235,s*(t*.45+.003),0)}),Ei(i,"chief",-.32,.32,.06,.18,t),Ft(i,.012,.05,t*.5,xt.grille,.332,.12,0,.004),va(i,.333,.14,t,.016),Ft(i,.03,.035,t*1.01,xt.chrome,.34,.075,0,.014),Qs(i,-.02,.295,t*.8,.045),Ft(i,.22,.01,t*.84,xt.trim,-.1,.293,0,.003),[-1,1].forEach(s=>Ft(i,.3,.008,.008,xt.chrome,-.06,.3,s*t*.38,0)),Ma(i,.15,.2,t),Gi(i,-.333,.15,t),ki(i,[.21,-.21],t,.065),i};Qn.W=()=>{let i=new te,t=.4,e=.26;Hr(i,-.08,.2,t,e,xt.yel),Ft(i,.1,.06,t*.6,xt.grey,.25,.09,0,.01),Ft(i,.32,.06,t*.9,xt.alu,-.24,.1,0,.02),Ei(i,"tow",-.08,.2,.06,.14,t);let n=new te;n.position.set(-.3,.13,0),n.rotation.z=.5,i.add(n),Ft(n,.3,.04,.06,xt.yel,.12,0,0,.01),Ft(n,.24,.03,.045,xt.alu,.2,.02,0,.008),ke(i,.03,.08,xt.chrome,-.3,.14,0,"z",16);let s=ke(i,.004,.12,xt.trim,-.04,.2,0,"y",6);return sh(i,.015,.004,xt.chrome,-.04,.13,0,"z"),Ft(i,.06,.02,t*.8,xt.trim,-.41,.07,0,.006),Ea(i,-.4,-.08,.1,t*.9,xt.grey),Gi(i,-.405,.13,t*.9),Qs(i,.06,e+.07+.006,t*.8,.05),ki(i,[.13,-.27],t,.07),i};function rd(i,t,e,n){Ft(i,.66,.1,t,e,0,.11,0,.045),Ft(i,.6,.03,t*.98,e,0,.165,0,.012);let s=Ft(i,.34,.085,t*.86,n||e,-.03,.215,0,.04),r=Ft(i,.012,.075,t*.76,xt.glass,.15,.21,0,.004);r.rotation.z=.55;let o=Ft(i,.012,.07,t*.76,xt.glass,-.21,.21,0,.004);o.rotation.z=-.5,[-1,1].forEach(a=>{Ft(i,.28,.058,.006,xt.glass,-.03,.215,a*(t*.43+.002),.003),Ft(i,.006,.058,.008,n||e,-.03,.215,a*(t*.43+.003),0),Ft(i,.03,.006,.003,xt.chrome,.02,.14,a*(t/2+.002),0),Ft(i,.03,.006,.003,xt.chrome,-.1,.14,a*(t/2+.002),0)}),Ft(i,.012,.04,t*.45,xt.grille,.332,.11,0,.004),va(i,.331,.125,t,.015),Ft(i,.02,.03,t*1,xt.chrome,.336,.075,0,.012),Ft(i,.02,.03,t*1,xt.chrome,-.336,.075,0,.012),Ft(i,.004,.018,.06,xt.plate,.347,.08,0,0),Ft(i,.004,.018,.06,xt.plate,-.347,.09,0,0),Gi(i,-.332,.12,t),Ma(i,.1,.17,t),ki(i,[.21,-.21],t,.058)}function rh(i){let t=new te,e=.34,n=Mi(i,{roughness:.25,metalness:.25});return rd(t,e,n),Ei(t,"car",-.3,.3,.07,.17,e),t}function od(){let i=new te;Ft(i,.24,.02,.24,xt.black,0,.01,0,.02);let t=new nt(new Hn(.09,.32,28),xt.cone);t.position.y=.18,t.castShadow=!0,i.add(t);let e=new nt(new Ie(.052,.068,.06,28,1,!0),Je(16777215,{emissive:3355443}));return e.position.y=.17,i.add(e),i}function ad(){let i=new te;[-1,1].forEach(s=>{Ft(i,.04,.22,.04,xt.alu,0,.11,s*.32,.01),Ft(i,.2,.02,.05,xt.grey,0,.01,s*.32,.005)});let t=document.createElement("canvas");t.width=256,t.height=32;let e=t.getContext("2d");for(let s=0;s<8;s++)e.fillStyle=s%2?"#fff":"#e01818",e.beginPath(),e.moveTo(s*32,0),e.lineTo(s*32+32,0),e.lineTo(s*32+16,32),e.lineTo(s*32-16,32),e.fill();let n=new fn(t);return n.colorSpace=Ze,Ft(i,.04,.08,.76,new ye({map:n,roughness:.4}),0,.2,0,0),Ft(i,.012,.012,.012,xt.lr,0,.27,-.32,0),Ft(i,.012,.012,.012,xt.lr,0,.27,.32,0),i}function cd(){let i=new te,t=Mi(14161944,{roughness:.35});ke(i,.065,.2,t,0,.12,0,"y"),ke(i,.08,.03,t,0,.02,0,"y");let e=new nt(new ze(.068,24,12,0,Math.PI*2,0,Math.PI/2),t);return e.position.y=.22,i.add(e),ke(i,.02,.03,xt.chrome,0,.29,0,"y"),ke(i,.03,.2,xt.chrome,0,.15,0,"x"),ke(i,.035,.05,xt.chrome,0,.15,.07,"z"),i}function ld(){let i=new te,t=Je(9078656,{roughness:.95}),e=Je(7105126,{roughness:.95}),n=Je(3022098,{roughness:.9}),s=Je(3805188,{emissive:16734736,emissiveIntensity:.9,roughness:.8}),r=(h,u,d,f,g,y,p,m,b,v)=>{let w=new nt(new ce(h,u,d),f);return w.position.set(g,y,p),w.rotation.set(m,b,v),w.castShadow=!0,w.receiveShadow=!0,i.add(w),w};r(.42,.07,.3,t,-.06,.04,.02,0,.3,.05),r(.3,.06,.24,e,.12,.1,-.06,.25,-.4,-.2),r(.22,.05,.18,t,-.14,.12,-.1,-.3,.9,.25),r(.6,.06,.06,n,0,.15,.06,0,.7,.32),r(.5,.05,.05,n,.04,.09,-.14,.1,-.5,-.18),r(.12,.045,.045,s,.2,.06,.12,0,.2,0);for(let h=0;h<5;h++){let u=new nt(new ia(.03+Math.random()*.03,0),h%2?t:e);u.position.set((Math.random()-.5)*.6,.03,(Math.random()-.5)*.5),i.add(u)}let o=document.createElement("canvas");o.width=128,o.height=16;let a=o.getContext("2d");for(let h=0;h<8;h++)a.fillStyle=h%2?"#111":"#ffd21a",a.beginPath(),a.moveTo(h*16,0),a.lineTo(h*16+16,0),a.lineTo(h*16+8,16),a.lineTo(h*16-8,16),a.fill();let c=new fn(o);c.colorSpace=Ze;let l=new nt(new Oe(.8,.05),new ye({map:c,side:An,roughness:.5}));return l.position.set(0,.2,.24),i.add(l),[-.38,.38].forEach(h=>{let u=new nt(new Ie(.012,.012,.24,8),xt.grey);u.position.set(h,.12,.24),i.add(u)}),i}function oh(i){Vx(i)}var hd=Math.PI*2,js=(i,t,e)=>Math.max(t,Math.min(e,i)),ah=(i,t,e)=>i+(t-i)*e,Xx=new URLSearchParams(location.search),Fe=window.R3={ok:!1,lost:!1,frames:0,ms:0};function qx(){if(Xx.get("r")==="2d"||window.SAVE&&SAVE.r2d)return jn("2D renderer forced");let i;try{i=new Xo({antialias:!0,alpha:!0,powerPreference:"high-performance",premultipliedAlpha:!0,stencil:!1})}catch(L){return jn("WebGL unavailable \u2192 2D",L&&L.message)}if(!i.getContext())return;i.setPixelRatio(1),i.outputColorSpace=Ze,i.toneMapping=zl,i.toneMappingExposure=1,i.shadowMap.enabled=!0,i.shadowMap.type=Bl,i.autoClear=!1;let t=i.domElement;t.addEventListener("webglcontextlost",L=>{L.preventDefault(),Fe.lost=!0,jn("context lost \u2192 2D fallback")}),t.addEventListener("webglcontextrestored",()=>{Fe.lost=!1,jn("context restored")}),Fe.R=i,Fe.ok=!0;let n=new qs(i).fromScene(new ma,.04).texture,s=()=>!(SAVE.gfx==="low"||SAVE.gfx==="auto"&&window.V2&&V2.lowAuto);function r(L,U){let P=new It;i.getSize(P),(P.x<L||P.y<U)&&i.setSize(Math.max(P.x,L,8),Math.max(P.y,U,8),!1)}function o(L,U){r(L,U),i.setViewport(0,0,L,U),i.setScissor(0,0,L,U),i.setScissorTest(!0),i.setClearColor(0,0),i.clear(!0,!0,!0)}function a(L,U,P,Z,O,X,it){L.drawImage(t,0,t.height-P,U,P,Z,O,X,it)}let c=()=>s()?Math.min(DPR,Fe.prCap||2):Math.min(DPR,1.35);function l(L,U=128){let P=document.createElement("canvas");P.width=P.height=U;let Z=P.getContext("2d"),O=Z.createRadialGradient(U/2,U/2,0,U/2,U/2,U/2);L.forEach(([it,rt])=>O.addColorStop(it,rt)),Z.fillStyle=O,Z.fillRect(0,0,U,U);let X=new fn(P);return X.colorSpace=Ze,X}let h=l([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,.55)"],[1,"rgba(255,255,255,0)"]]),u=l([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,.4)"],[1,"rgba(255,255,255,0)"]],64),d=(()=>{let U=document.createElement("canvas");U.width=U.height=128;let P=U.getContext("2d");for(let O=0;O<26;O++){let X=64+(Math.random()-.5)*128*.45,it=128/2+(Math.random()-.5)*128*.45,rt=128*(.12+Math.random()*.2),Q=P.createRadialGradient(X,it,0,X,it,rt);Q.addColorStop(0,"rgba(255,255,255,.35)"),Q.addColorStop(1,"rgba(255,255,255,0)"),P.fillStyle=Q,P.fillRect(0,0,128,128)}let Z=new fn(U);return Z.colorSpace=Ze,Z})(),f=(L,U=1)=>new oi({map:h,color:L,blending:yn,depthWrite:!1,transparent:!0,opacity:U,toneMapped:!1}),g=[null,1913976,1732148,14065688],y=new Map,p=new Map;function m(L){try{return/^[EKT]$/.test(L)&&SAVE.v3?SAVE.v3.skin|0:0}catch{return 0}}function b(L){L.updateMatrixWorld(!0);let U=new Le().copy(L.matrixWorld).invert(),P=new Map;L.traverse(O=>{if(!O.isMesh)return;let X=O.geometry.index?O.geometry.toNonIndexed():O.geometry.clone();X.applyMatrix4(new Le().multiplyMatrices(U,O.matrixWorld));for(let rt of Object.keys(X.attributes))["position","normal","uv"].includes(rt)||X.deleteAttribute(rt);X.attributes.uv||X.setAttribute("uv",new en(new Float32Array(X.attributes.position.count*2),2));let it=O.material;P.has(it)||P.set(it,[]),P.get(it).push(X)});let Z=new te;return P.forEach((O,X)=>{let it=new nt(td(O,!1),X);it.castShadow=!0,it.receiveShadow=!0,Z.add(it),O.forEach(rt=>rt.dispose())}),Z}function v(L,U,P,Z){oh(P);let O=U();O.traverse(x=>{if(!x.isMesh)return;let S=x.material,B=P+"|"+Z+"|"+S.uuid,N=p.get(B);N||(N=S.clone(),N.envMap=null,Z&&S===xt.red&&P<3&&N.color.setHex(g[Z]),S===xt.lr&&(N.name="lr"),S===xt.lb&&(N.name="lb"),p.set(B,N)),x.material=N});let X=O.userData.lb||[],it=null,rt=null;O.traverse(x=>{x.userData&&x.userData.ladder&&(it=x)}),it&&(rt={p:it.position.clone(),r:it.rotation.clone()},O.remove(it));let Q=b(O);if(it){it.position.set(0,0,0),it.rotation.set(0,0,0);let x=b(it);x.position.copy(rt.p),x.rotation.copy(rt.r),x.userData.ladder=1,Q.add(x),Q.userData.lad=x}let st=new Jn().setFromObject(Q);return Q.userData={...Q.userData,lb:X,bb:st,L:st.max.x-st.min.x,Wd:st.max.z-st.min.z,cx:(st.max.x+st.min.x)/2,cz:(st.max.z+st.min.z)/2},oh(0),Q}function w(L,U){let P="EKTA".includes(L),Z=P?m(L):0,O=L+(P?U:"")+"|"+Z,X=y.get(O);if(X)return X;let it;return Qn[L]?it=Qn[L]:L.startsWith("car")?it=()=>rh(+L.slice(3)):it={cone:od,bar:ad,hyd:cd,deb:ld}[L],X=v(O,it,P?U:0,Z),y.set(O,X),X}function $(L){let U="sed"+L,P=y.get(U);return P||(P=v(U,()=>rh(L),0,0),y.set(U,P)),P}function A(L,U){let P=new te,Z=new te,O=L.clone();P.add(Z),Z.add(O);let X=L.userData;if(U){let st=Math.min(U[0]/X.L,U[1]/X.Wd);O.scale.setScalar(st),O.position.set(-X.cx*st,0,-X.cz*st),P.userData.f=st}else P.userData.f=1;let it=[],rt=[];O.traverse(st=>{st.isMesh&&(st.material.name==="lr"||st.material.name==="lb")&&(st.material=st.material.clone(),(st.material.name==="lr"?it:rt).push(st.material))}),P.userData.lr=it,P.userData.lb=rt,P.userData.yaw=Z,P.userData.body=O;let Q=[];return(X.lb||[]).forEach((st,x)=>{let S=new an(f(x?3828991:16722458,0));S.position.set(st[0],st[1]+.02,st[2]),S.scale.setScalar(.34),S.visible=!1,O.add(S),Q.push(S)}),P.userData.glows=Q,X.lad&&(P.userData.lad=O.children.find(st=>st.userData.ladder)),P}function k(L,U,P,Z=0){let O=Math.sin(P*14+Z)>0;L.userData.lr.forEach(X=>X.emissiveIntensity=U?O?5:.25:.5),L.userData.lb.forEach(X=>X.emissiveIntensity=U?O?.25:6:.5),L.userData.glows.forEach((X,it)=>{X.visible=U,X.material.opacity=U?(it?!O:O)?1:.08:0})}let R={scene:new Pn,cam:new Ke(30,1,.5,80),objs:new Map,key:null,tex:null};{let L=R.scene;L.environment=n,L.environmentIntensity=.45,R.hemi=new zn(13162239,2764342,.75),L.add(R.hemi);let U=R.key=new pn(16773340,2.4);U.position.set(-6,8,-2.5),U.castShadow=!0,U.shadow.mapSize.set(1024,1024),U.shadow.bias=-6e-4,U.shadow.normalBias=.02,U.shadow.radius=4,L.add(U),L.add(U.target),R.fireL=new pn(16742954,0),R.fireL.position.set(0,4,-8),L.add(R.fireL);let P=new ye({color:12105916,roughness:.38,metalness:.2,transparent:!0,envMapIntensity:.7});R.apron=new nt(new Oe(80,80),new ye({color:2764084,roughness:.9})),R.apron.rotation.x=-Math.PI/2,R.apron.position.y=-.02,R.apron.receiveShadow=!0,L.add(R.apron),R.ground=new nt(new Oe(1,1),P),R.ground.rotation.x=-Math.PI/2,R.ground.receiveShadow=!0,L.add(R.ground),R.ring=new nt(new sa(.42,.52,40),new Xe({color:16769610,transparent:!0,toneMapped:!1,depthWrite:!1})),R.ring.rotation.x=-Math.PI/2,R.ring.position.y=.015,L.add(R.ring);let Z=new $n;Z.moveTo(.08,0),Z.lineTo(-.05,-.075),Z.lineTo(-.05,.075),Z.closePath(),R.arrowGeo=new ra(Z),R.arrowGeo.rotateX(-Math.PI/2),R.arrowMat=new Xe({color:16777215,transparent:!0,opacity:.75,toneMapped:!1,depthWrite:!1}),R.hintMat=new Xe({color:16765503,transparent:!0,opacity:1,toneMapped:!1,depthWrite:!1,depthTest:!1}),R.headTex=(()=>{let O=document.createElement("canvas");O.width=128,O.height=64;let X=O.getContext("2d"),it=X.createLinearGradient(0,0,128,0);it.addColorStop(0,"rgba(255,240,200,.55)"),it.addColorStop(1,"rgba(255,240,200,0)"),X.fillStyle=it,X.beginPath(),X.moveTo(0,26),X.lineTo(128,0),X.lineTo(128,64),X.lineTo(0,38),X.fill();let rt=new fn(O);return rt.colorSpace=Ze,rt})(),R.headMat=new Xe({map:R.headTex,transparent:!0,blending:yn,depthWrite:!1,toneMapped:!1}),R.poolMat=new Xe({map:u,transparent:!0,blending:yn,depthWrite:!1,toneMapped:!1}),R.root=new te,L.add(R.root)}function gt(){let L=new te,U=new ye({color:3817030,metalness:.7,roughness:.35}),P=new nt(new Ie(.035,.05,1.1,10),U);P.position.y=.55,P.castShadow=!0,L.add(P);let Z=new nt(new ce(.32,.04,.05),U);Z.position.set(.14,1.08,0),L.add(Z);let O=new nt(new ze(.06,12,8),new Xe({color:16773312,toneMapped:!1}));O.position.set(.28,1.04,0),L.add(O);let X=new an(f(16767120,.55));X.scale.setScalar(.45),X.position.copy(O.position),L.add(X);let it=new nt(new Oe(1.6,1.6),R.poolMat.clone());return it.material.color.setHex(9071152),it.rotation.x=-Math.PI/2,it.position.set(.28,.01,0),L.add(it),L}function _(){let L=G.L;R.key2=G,R.L=L,R.root.clear(),R.objs.clear();let U=BOARD;R.board=U,R.tex&&R.tex.dispose(),R.tex=new fn(U.c),R.tex.colorSpace=Ze,R.tex.anisotropy=4,R.ground.material.map=R.tex,R.ground.material.needsUpdate=!0;let P=G.cs,Z=U.w/P,O=U.h/P;R.ground.scale.set(Z,O,1),R.ground.position.set((U.ox+U.w/2-G.bx)/P-L.w/2,0,(U.oy+U.h/2-G.by)/P-L.h/2),R.reg={w:Z,h:O,cx:R.ground.position.x,cz:R.ground.position.z};let X=R.key.shadow.camera,it=Math.max(L.w,L.h)/2+1.5;Object.assign(X,{left:-it,right:it,top:it,bottom:-it,near:1,far:30}),X.updateProjectionMatrix();let rt=L.w/2+.55,Q=L.h/2+.55;[[-rt,-Q,0],[rt,-Q,Math.PI],[-rt,Q,0],[rt,Q,Math.PI]].forEach(([st,x,S])=>{let B=gt();B.position.set(st,0,x),B.rotation.y=S+(x<0?-.6:.6)*(S?-1:1),R.root.add(B)}),R.shadowDirty=3}let T=(L,U)=>[L+.5-R.L.w/2,U+.5-R.L.h/2];function ut(L,U){let P=R.objs.get(L);return P||(P=U(),P.userData.id=L,R.objs.set(L,P),R.root.add(P)),P.userData.seen=R.frame,P}let dt=[.9,.66];function ft(L){return ut("v"+L.v.id+"_"+wt(L.v.type)+"_"+m(L.v.type),()=>{let U=A(w(L.v.type,wt(L.v.type)),dt),P=new nt(new Oe(1.3,.7),R.headMat);P.rotation.x=-Math.PI/2,P.position.set(1.05,.012,0),P.visible=!1,U.userData.yaw.add(P),U.userData.hl=P;let Z=new nt(R.arrowGeo,R.arrowMat);return Z.position.y=.02,R.root.add(Z),U.userData.arrow=Z,U.userData.prevAng=L.ang,U.userData.roll=0,U})}function wt(L){try{return"EKTA".includes(L)&&SAVE.v3.fleet[L]||0}catch{return 0}}function ht(L,U,P){return ut(L,()=>A(w(U,0),P))}function Ct(L){return ut(L,()=>{let U=new te,P=new ye({color:4869978,metalness:.6,roughness:.4}),Z=new nt(new ce(.14,.32,.14),P);Z.position.set(-.38,.16,0),Z.castShadow=!0,U.add(Z);let O=new te;O.position.set(-.38,.28,0),U.add(O);let X=document.createElement("canvas");X.width=128,X.height=16;let it=X.getContext("2d");for(let x=0;x<8;x++)it.fillStyle=x%2?"#fff":"#e01818",it.fillRect(x*16,0,16,16);let rt=new fn(X);rt.colorSpace=Ze;let Q=new nt(new ce(.86,.06,.06),new ye({map:rt,roughness:.4}));Q.position.x=.43,Q.castShadow=!0,O.add(Q),U.userData.arm=O;let st=new nt(new ze(.035,8,6),new Xe({color:16724e3,toneMapped:!1}));return st.position.set(-.38,.34,0),U.add(st),U})}function yt(L){return ut(L,()=>{let U=new te,P=new nt(new Ie(.3,.34,.06,28),new ye({color:2764083,metalness:.5,roughness:.5}));P.position.y=.03,P.receiveShadow=!0,U.add(P);let Z=new nt(new Ie(.2,.22,.08,28),new ye({color:16761370,emissive:6702080,roughness:.3}));Z.position.y=.09,U.add(Z),U.userData.btn=Z;let O=new an(f(16765503,0));return O.scale.setScalar(.9),O.position.y=.15,U.add(O),U.userData.gl=O,U})}let Xt=32*Math.PI/180,Vt=new I,Ht=()=>G&&G.view||BOARD;function Me(L,U,P,Z){let O=U.w/2+.12,X=U.h/2+.2,it=Math.max(O,X*1.15)*4+4;L.position.set(Math.sin(Z)*Math.sin(P)*it,Math.cos(P)*it,Math.cos(Z)*Math.sin(P)*it),L.up.set(0,1,0),L.lookAt(0,0,0),L.updateMatrixWorld();let rt=1e9,Q=-1e9,st=1e9,x=-1e9,S=L.matrixWorldInverse;for(let B of[-1,1])for(let N of[-1,1])for(let z of[0,.42]){Vt.set(B*O,z,N*X).applyMatrix4(S);let at=-Vt.z,q=Vt.x/at,j=Vt.y/at;rt=Math.min(rt,q),Q=Math.max(Q,q),st=Math.min(st,j),x=Math.max(x,j)}return{x0:rt,x1:Q,y0:st,y1:x,D:it}}let Re=new Ke;window.R3boardRatio=function(L){let U=Me(Re,L,Xt,0);return(U.y1-U.y0)/(U.x1-U.x0)};function St(){let L=R.L,U=R.cam,P=Ht(),Z=P.w/P.h,O=Xt,X=0;if(G.state==="win"){let at=js(G.winT/1.6,0,1),q=at*at*(3-2*at);O=Xt+q*.1,X=G.winT*.1*q}let{x0:it,x1:rt,y0:Q,y1:st,D:x}=Me(U,L,O,X),S=rt-it,B=st-Q;if(S/B<Z){let at=B*Z;it-=(at-S)/2,rt=it+at}else{let at=S/Z;Q=st-at}let N=x*.3,z=x*3;U.near=N,U.far=z,U.aspect=Z,U.projectionMatrix.makePerspective(it*N,rt*N,st*N,Q*N,N,z),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),R.camOK=!0}let Dt=[3108822,14721056,3842138,13123690,9067216,14708784,4894920];function $t(L){return ut("pp"+L,()=>{let U=new te,P=new nt(new Hi(.09,.18,4,10),new ye({color:Dt[L%Dt.length],roughness:.7}));P.position.y=.2,P.castShadow=!0,U.add(P);let Z=new nt(new ze(.075,12,10),new ye({color:[1578e4,13144160,9067066][L%3],roughness:.6}));return Z.position.y=.42,Z.castShadow=!0,U.add(Z),U})}function zt(L){let U=R.L,P=Ht(),Z=U.h/2,O=U.w/2,X=Z+.45,it=0,rt=Math.max(1.2,(U.w+2)/6);for(let Q=-O-.4;Q<=O+.4;Q+=rt,it++){let st=X+.2+it*37%3*.08;(it%3===0?ht("dh"+it,"hyd",[.5,.5]):ht("dc"+it,"cone",[.45,.45])).position.set(Q,0,st)}for(let Q=0;Q<Math.max(6,U.w+3);Q++){let st=$t(Q),x=-O+Q*.61803%1*U.w*1.05,S=X+.55+Q*7%3*.2;st.position.set(x,Math.abs(Math.sin(L*3+Q*1.7))*.05,S),st.rotation.y=Math.PI+Math.sin(Q)*.4}}let ae=new ha,re=new It,le=new qn(new I(0,1,0),-.12),ge=new I;window.pickCell=function(L,U){if(!lt()||!R.camOK||!G||R.key2!==G)return null;let P=Ht();if(re.set((L-P.ox)/P.w*2-1,-((U-P.oy)/P.h*2-1)),ae.setFromCamera(re,R.cam),!ae.ray.intersectPlane(le,ge))return null;let Z=ge.x+R.L.w/2-.5,O=ge.z+R.L.h/2-.5,X=Math.round(Z),it=Math.round(O);if(G.st.occ[X+","+it])return[X,it];let rt=null,Q=.75;for(let st=-1;st<=1;st++)for(let x=-1;x<=1;x++){let S=X+st+","+(it+x);if(!G.st.occ[S])continue;let B=Math.hypot(Z-X-st,O-it-x);B<Q&&(Q=B,rt=[X+st,it+x])}return rt||[X,it]};let bt=window.cellXY;window.cellXY=function(L,U){if(!lt()||!R.camOK||!G||R.key2!==G)return bt(L,U);Vt.set(L+.5-R.L.w/2,.15,U+.5-R.L.h/2).project(R.cam);let P=Ht();return[P.ox+(Vt.x+1)/2*P.w,P.oy+(1-Vt.y)/2*P.h]};function F(){let L=performance.now();(R.key2!==G||R.board!==BOARD)&&_(),R.frame=(R.frame||0)+1;let U=G.t,P=G.cs,Z=s();R.key.castShadow=Z;let O=R.shadowDirty>0;R.shadowDirty>0&&R.shadowDirty--;let X=G.state==="win"?0:js(G.fire/G.fireMax,0,1.3);R.fireL.intensity=X*(1.1+.25*Math.sin(U*9)+.1*Math.sin(U*23));for(let S of Object.values(G.vv)){if(S.done||S.scale<=0)continue;let B=ft(S),[N,z]=T(S.px,S.py),at=S.segs.length>0,q=B.userData,j=angDiff(q.prevAng,S.ang);q.prevAng=S.ang,q.roll=ah(q.roll,js(j*6,-.12,.12),.25),(at||Math.abs(j)>1e-4||S.scale<1||Math.abs(S.sq)>.01||(S.wob||0)>.01)&&(O=!0);let mt=E.back?E.back(js(S.scale,0,1)):S.scale;B.position.set(N,at?Math.abs(Math.sin(U*22+S.v.id))*.012:0,z),B.rotation.y=-S.ang,B.scale.set(mt*(1+S.sq*.5),mt*(1-S.sq),mt*(1+S.sq*.3)),q.yaw.rotation.x=q.roll+(S.wob?Math.sin(U*40)*S.wob*.3:0),q.yaw.rotation.z=at?-.025:0,k(B,!!S.siren,U,S.v.id),q.hl.visible=!!S.siren&&Z;let _t=!!(G.hint&&G.hint.id===S.v.id&&!at),Pt=!at&&S.scale>=1&&G.state==="play";if(q.arrow.visible=Pt,q.arrow.material=_t?R.hintMat:R.arrowMat,q.arrow.renderOrder=_t?10:0,_t){let tt=.5+.5*Math.sin(G.hint.t*6);B.position.y=Math.abs(Math.sin(G.hint.t*5))*.07,O=!0;let[Mt,Ut]=FL.DIRS[S.v.d],At=.62+tt*.14;q.arrow.position.set(N+Mt*At,.03,z+Ut*At),q.arrow.rotation.y=-ANG[S.v.d],q.arrow.scale.setScalar(2.1+tt*.35)}else if(Pt){q.arrow.scale.setScalar(1);let[tt,Mt]=FL.DIRS[S.v.d];q.arrow.position.set(N+tt*.5,.02,z+Mt*.5),q.arrow.rotation.y=-ANG[S.v.d],q.arrow.material.opacity=.55+.2*Math.sin(U*4)}q.arrow.userData.seen=R.frame}G.st.blk.forEach(S=>{let B=S.x+","+S.y,N=G.blkJ[B]||0;if(S.sub==="#"){let z=G.cars[B];if(!z||z.done)return;let at=parseInt((z.col&&z.col[1]||"#4a8fd6").slice(1),16),q=ut("c"+B+"_"+at,()=>A($(at),dt)),[j,mt]=T(z.px,z.py);q.position.set(j+Math.sin(N*40)*.05*N,0,mt),q.rotation.y=-z.ang,(z.attached||N>0)&&(O=!0)}else if(!S.gone){let z=ht("b"+B,S.sub==="x"?"bar":S.sub==="d"?"deb":"cone",S.sub==="x"?[.8,.8]:S.sub==="d"?[.84,.84]:[.62,.62]),[at,q]=T(S.x,S.y);z.position.set(at+Math.sin(N*40)*.06*N,0,q),S.sub==="x"&&(z.rotation.y=Math.PI/2*((S.x+S.y)%2)),N>0&&(O=!0)}}),G.st.hyd.forEach((S,B)=>{if(G.hydVis[B].gone)return;let N=ht("h"+B,"hyd",[.55,.55]),[z,at]=T(S.x,S.y);N.position.set(z,0,at)}),G.st.sw.forEach((S,B)=>{let N=yt("s"+B),[z,at]=T(S.x,S.y);N.position.set(z,0,at);let q=G.gateA>0;N.userData.btn.position.y=q?.06:.09,N.userData.gl.material.opacity=q?.2:.35+.25*Math.sin(U*5)}),G.st.gates.forEach((S,B)=>{let N=Ct("g"+B),[z,at]=T(S.x,S.y);N.position.set(z,0,at),N.userData.arm.rotation.z=G.gateA*1.35,G.gateA>0&&G.gateA<1&&(O=!0)});let it=G.hint&&G.st.veh[G.hint.id];if(R.ring.visible=!!(it&&!it.gone),R.ring.visible){let[S,B]=T(it.x,it.y),N=.5+.5*Math.sin(G.hint.t*6);R.ring.position.set(S,.015,B),R.ring.scale.setScalar(1+N*.12),R.ring.material.opacity=.5+N*.5}zt(U);for(let[S,B]of R.objs)B.userData.seen!==R.frame&&(R.root.remove(B),B.userData.arrow&&R.root.remove(B.userData.arrow),R.objs.delete(S),O=!0);G.state==="win"&&(O=!0),i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=Z&&O,St();let rt=Ht(),Q=c(),st=Math.round(rt.w*Q),x=Math.round(rt.h*Q);o(st,x),i.render(R.scene,R.cam),a(cx,st,x,rt.ox,rt.oy,rt.w,rt.h),Fe.ms=ah(Fe.ms,performance.now()-L,.1)}let Bt={1:{sky:["#0b1430","#2a3f6e"],fog:1713216,amb:8425664,ambI:.9,key:10466559,keyI:1.2,keyP:[-6,10,8],build:"apt"},2:{sky:["#2a1438","#c8604a"],fog:4859968,amb:16756880,ambI:1,key:16752752,keyI:1.6,keyP:[-10,5,6],build:"market"},3:{sky:["#2a3038","#6a6058"],fog:3817544,amb:13160668,ambI:1.2,key:15265008,keyI:1.4,keyP:[6,10,6],build:"factory"},4:{sky:["#3a1a10","#ff9a40"],fog:6961696,amb:16760976,ambI:1,key:16756832,keyI:2,keyP:[-10,4,4],build:"cabin"},5:{sky:["#05070e","#1a2236"],fog:658968,amb:6320288,ambI:.8,key:8425664,keyI:.9,keyP:[5,10,8],build:"tower"}},J={ch:0},Rt="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",Ot=`uniform float t,seed,amp;varying vec2 vUv;
 float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
 float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p*=2.03;a*=.5;}return v;}
 void main(){vec2 uv=vUv;float y=uv.y;float x=(uv.x-.5)*2.;
  float nz=fbm(vec2(uv.x*3.2+seed,y*2.6-t*2.4));float nz2=fbm(vec2(uv.x*6.+seed*2.,y*5.-t*4.));
  float w=mix(.95,.05,pow(y,.8));float d=abs(x+(nz-.5)*.9*y);
  float shape=1.-smoothstep(w*.45,w,d);float body=shape*smoothstep(1.02,.2,y+(nz2-.5)*.55)*smoothstep(0.,.1,y);
  float core=1.-smoothstep(0.,.55,d/w+y*.9);
  vec3 c=mix(vec3(1.,.55,.12),vec3(1.,.95,.7),core);c=mix(c,vec3(.75,.12,.02),smoothstep(.45,.95,y));
  float a=body*amp;gl_FragColor=vec4(c*a*1.5,a);}`;function ee(L){return new Cn({uniforms:{t:{value:0},seed:{value:L},amp:{value:1}},vertexShader:Rt,fragmentShader:Ot,transparent:!0,depthWrite:!1,blending:yn})}function Yt(L,U){let P=document.createElement("canvas");P.width=4,P.height=256;let Z=P.getContext("2d"),O=Z.createLinearGradient(0,0,0,256);O.addColorStop(0,L),O.addColorStop(1,U),Z.fillStyle=O,Z.fillRect(0,0,4,256);let X=new fn(P);return X.colorSpace=Ze,X}function D(L,U,P){let Z=document.createElement("canvas"),O=64;Z.width=Math.round(L*O/4)*4,Z.height=Math.round(U*O/4)*4;let X=Z.getContext("2d");if(X.fillStyle=P.wall,X.fillRect(0,0,Z.width,Z.height),P.brick){X.globalAlpha=.18;for(let q=0;q<Z.height;q+=6)for(let j=q/6%2*8;j<Z.width;j+=16)X.fillStyle=Math.random()<.5?"#000":"#fff",X.fillRect(j,q,15,5);X.globalAlpha=1}if(P.logs)for(let q=0;q<Z.height;q+=14){let j=X.createLinearGradient(0,q,0,q+14);j.addColorStop(0,"#8a5a32"),j.addColorStop(.5,"#6a4024"),j.addColorStop(1,"#3a2210"),X.fillStyle=j,X.fillRect(0,q,Z.width,14)}if(P.panels){X.strokeStyle="rgba(0,0,0,.25)",X.lineWidth=2;for(let q=0;q<Z.width;q+=12)X.beginPath(),X.moveTo(q,0),X.lineTo(q,Z.height),X.stroke()}let it=P.cols,rt=P.rows,Q=Z.width/it,st=Z.height/rt,x=[];for(let q=0;q<rt;q++)for(let j=0;j<it;j++){if(P.door&&q===rt-1&&j===Math.floor(it/2))continue;let mt=j*Q+Q*P.mx,_t=q*st+st*P.my,Pt=Q*(1-2*P.mx),tt=st*(1-2*P.my);X.fillStyle=P.frame||"#d8d0c0",X.fillRect(mt-2,_t-2,Pt+4,tt+4);let Mt=Math.random()<(P.lit||.35);X.fillStyle=Mt?"#ffcf7a":P.glass||"#1a2230",X.fillRect(mt,_t,Pt,tt),Mt&&x.push([mt,_t,Pt,tt]),P.sill&&(X.fillStyle="rgba(255,255,255,.35)",X.fillRect(mt-3,_t+tt+1,Pt+6,3)),P.noMul||(X.fillStyle="rgba(0,0,0,.35)",X.fillRect(mt+Pt/2-1,_t,2,tt))}if(P.door){let q=Math.floor(it/2),j=rt-1;X.fillStyle="#3a2416",X.fillRect(q*Q+Q*.25,j*st+st*.2,Q*.5,st*.8),X.fillStyle="#ffcf7a",X.fillRect(q*Q+Q*.3,j*st+st*.25,Q*.4,st*.15)}let S=new fn(Z);S.colorSpace=Ze,S.anisotropy=4;let B=document.createElement("canvas");B.width=Z.width,B.height=Z.height;let N=B.getContext("2d");N.fillStyle="#000",N.fillRect(0,0,B.width,B.height),N.fillStyle="#ffb050",x.forEach(([q,j,mt,_t])=>N.fillRect(q,j,mt,_t));let z=new fn(B);z.colorSpace=Ze;let at=[];for(let q=0;q<rt;q++)for(let j=0;j<it;j++)at.push([(j+.5)/it*L-L/2,U-(q+P.my+.45*(1-2*P.my))/rt*U]);return{mat:new ye({map:S,emissiveMap:z,emissive:16777215,emissiveIntensity:.55,roughness:.85}),anchors:at}}function M(L,U,P,Z,O,X,it,rt){let Q=new nt(new ce(U,P,Z),O);return Q.position.set(X,it+P/2,rt),Q.castShadow=!0,Q.receiveShadow=!0,L.add(Q),Q}function ot(L,U,P,Z){let O=new $n;O.moveTo(-L/2,0),O.lineTo(L/2,0),O.lineTo(0,U),O.closePath();let X=new Ys(O,{depth:P,bevelEnabled:!1});X.translate(0,0,-P/2);let it=new nt(X,Z);return it.castShadow=!0,it}let et=(L,U={})=>new ye(Object.assign({color:L,roughness:.8},U));function Tt(L){let U=new te,P=[],Z=[],O=et(3811876);if(L==="apt"){let X=D(12,13,{wall:"#7a3a2a",brick:1,cols:6,rows:5,mx:.22,my:.2,sill:1,door:1,lit:.25}),it=[O,O,et(2759188),O,X.mat,O],rt=new nt(new ce(12,13,5),it);rt.position.y=6.5,rt.castShadow=rt.receiveShadow=!0,U.add(rt),M(U,12.4,.5,5.4,et(5909022),0,13,0);for(let Q=1;Q<5;Q++)M(U,1.8,.12,.8,et(2763310,{metalness:.6}),-3.7,Q*2.6,2.9);P.push(...X.anchors.filter((Q,st)=>[1,4,7,8,10,13,15,20,22].includes(st)).map(Q=>[Q[0],Q[1]-.6,2.55]),[-2,13.6,1],[3,13.6,0]),Z=[[-1,13.3,2.4],[4,13.3,2.4],[X.anchors[2][0],X.anchors[2][1]-1,2.6],[X.anchors[9][0],X.anchors[9][1]-1,2.6]]}else if(L==="market"){let X=[14200960,13146736,14731424],it=[14165532,1997528,2793546];for(let rt=0;rt<3;rt++){let Q=(rt-1)*4.6,st=D(4.4,7,{wall:"#"+X[rt].toString(16),cols:2,rows:2,mx:.18,my:.2,lit:.6,frame:"#6a4a2a"}),x=new nt(new ce(4.4,7,4),[O,O,O,O,st.mat,O]);x.position.set(Q,3.5,0),x.castShadow=x.receiveShadow=!0,U.add(x);let S=ot(4.8,2.2,4.4,et(6957594));S.position.set(Q,7,0),U.add(S);let B=new nt(new ce(4.2,.08,1.6),et(it[rt]));B.position.set(Q,2.9,2.7),B.rotation.x=.35,B.castShadow=!0,U.add(B);for(let N=0;N<3;N++){let z=new nt(new ze(.22,10,8),new Xe({color:16732208,toneMapped:!1}));z.position.set(Q-1.4+N*1.4,2.5,3.4),U.add(z)}M(U,3.4,.9,1.2,et(9071162),Q,0,3),P.push(...st.anchors.map(N=>[Q+N[0],N[1]-.4,2.1]),[Q,8.6,0])}Z=[[-4.6,4.6,2.2],[0,4.6,2.2],[4.6,4.6,2.2]]}else if(L==="factory"){let X=D(16,6,{wall:"#8a9098",panels:1,cols:8,rows:2,mx:.15,my:.28,lit:.25,glass:"#2a3440",frame:"#5a6068"}),it=new nt(new ce(16,6,7),[O,O,O,O,X.mat,O]);it.position.y=3,it.castShadow=it.receiveShadow=!0,U.add(it);for(let Q=0;Q<4;Q++){let st=ot(4,1.8,7,et(6975608,{metalness:.4,roughness:.5}));st.position.set(-6+Q*4,6,0),st.rotation.z=0,U.add(st)}[[-5,1],[4.5,-1.2]].forEach(([Q,st])=>{let x=new nt(new Ie(.6,.75,11,16),et(8014394));x.position.set(Q,5.5,st),x.castShadow=!0,U.add(x),M(U,1.6,.4,1.6,et(2763306),Q,10.8,st)});let rt=new nt(new Ie(1.6,1.6,4,20),et(11581632,{metalness:.7,roughness:.3}));rt.position.set(9.6,2,1),rt.castShadow=!0,U.add(rt),P.push(...X.anchors.map(Q=>[Q[0],Q[1]-.3,3.55]),[-5,11.5,1],[4.5,11.6,-1.2],[-2,7.4,1],[2,7.4,1]),Z=[[-6,6.5,3.2],[6,6.5,3.2]]}else if(L==="cabin"){let X=D(9,4.2,{logs:1,wall:"#6a4024",cols:3,rows:1,mx:.3,my:.25,lit:.7,frame:"#3a2010",door:0}),it=new nt(new ce(9,4.2,6),[et(5913120),et(5913120),O,O,X.mat,et(5913120)]);it.position.y=2.1,it.castShadow=it.receiveShadow=!0,U.add(it);let rt=ot(10.4,3.6,7,et(3810328));rt.position.y=4.2,U.add(rt),M(U,9.6,.25,2.2,et(8015920),0,0,3.9);for(let x=-2;x<=2;x++)M(U,.2,1.9,.2,et(5913120),x*2.2,.25,4.8);M(U,1,3,1,et(6974064),3,5.2,0);let Q=et(1718818,{roughness:.9}),st=et(3810324);for(let x=0;x<16;x++){let S=(x<8?-1:1)*(7+Math.random()*9),B=-6+Math.random()*9,N=2+Math.random()*2.5,z=new te,at=new nt(new Hn(N*.55,N*2,8),Q);at.position.y=N*1.4,at.castShadow=!0,z.add(at);let q=new nt(new Hn(N*.42,N*1.5,8),Q);q.position.y=N*2.3,z.add(q);let j=new nt(new Ie(.15,.2,N*.6,6),st);j.position.y=N*.3,z.add(j),z.position.set(S,0,B),U.add(z),x%3===0&&P.push([S,N*2,B+1])}P.push(...X.anchors.map(x=>[x[0],x[1]-.3,3.05]),[-2,6,1.5],[2.4,6.4,1.2],[0,7.2,0],[-3.6,5.2,2.5]),Z=[[0,1.2,4.6],[-2.2,1.2,4.6]]}else{let X=D(7,26,{wall:"#2a3442",cols:5,rows:12,mx:.08,my:.12,lit:.3,glass:"#1a2a3c",frame:"#8090a0",noMul:1}),it=new nt(new ce(7,26,6),[et(2239030),et(2239030),O,O,new ye({map:X.mat.map,emissiveMap:X.mat.emissiveMap,emissive:16777215,emissiveIntensity:.9,roughness:.25,metalness:.5}),et(2239030)]);it.position.y=13,it.castShadow=it.receiveShadow=!0,U.add(it),M(U,4,2,4,et(3818064),0,26,0);let rt=new nt(new Ie(.08,.08,5),et(10066329,{metalness:1}));rt.position.set(0,30.5,0),U.add(rt);let Q=new nt(new ze(.2,8,6),new Xe({color:16719904,toneMapped:!1}));Q.position.set(0,33,0),U.add(Q),[[-9,14,-4],[9,18,-3],[-15,10,-6],[15,22,-7]].forEach(([st,x,S])=>{let B=D(5,x,{wall:"#1e2632",cols:3,rows:Math.round(x/2.4),mx:.12,my:.15,lit:.25,glass:"#121a26",frame:"#4a5462",noMul:1}),N=new nt(new ce(5,x,5),[et(1712688),et(1712688),O,O,B.mat,et(1712688)]);N.position.set(st,x/2,S),U.add(N)}),P.push(...X.anchors.filter((st,x)=>[6,8,12,17,21,23,27,31,33,36,38,42].includes(x)).map(st=>[st[0],st[1]-.4,3.05])),Z=[[X.anchors[7][0],X.anchors[7][1]-.8,3.1],[X.anchors[16][0],X.anchors[16][1]-.8,3.1],[0,27.2,1.5]]}return{g:U,F:P,P:Z}}function vt(L){let U=new te,P=et(L.coat,{roughness:.75}),Z=et(L.pants||2763310),O=et(14725258,{roughness:.6}),X=et(1118481),it=new ye({color:15261808,emissive:5919760,roughness:.3}),rt=(_t,Pt,tt,Mt)=>{let Ut=new nt(new Ie(_t,Pt,tt,10),Mt);return Ut.castShadow=!0,Ut},Q=_t=>{let Pt=new te;Pt.position.set(_t*.11,.92,0);let tt=rt(.085,.075,.48,Z);tt.position.y=-.24,Pt.add(tt);let Mt=new te;Mt.position.y=-.47,Pt.add(Mt);let Ut=rt(.075,.065,.42,Z);Ut.position.y=-.21,Mt.add(Ut);let At=new nt(new ce(.13,.1,.24),X);if(At.position.set(0,-.43,.04),Mt.add(At),L.ff){let ie=rt(.078,.078,.04,it);ie.position.y=-.3,Mt.add(ie)}return U.add(Pt),{p:Pt,kn:Mt}},st=Q(-1),x=Q(1),S=new te;S.position.y=.92,U.add(S);let B=new nt(new Ie(.19,.17,.62,12),P);if(B.position.y=.33,B.scale.z=.75,B.castShadow=!0,S.add(B),L.ff){let _t=rt(.195,.195,.05,it);_t.position.y=.12,_t.scale.z=.76,S.add(_t);let Pt=rt(.195,.195,.05,it);Pt.position.y=.42,Pt.scale.z=.76,S.add(Pt);let tt=rt(.08,.08,.42,et(14211288,{metalness:.8,roughness:.3}));tt.position.set(0,.4,-.17),S.add(tt)}let N=new te;N.position.y=.74,S.add(N);let z=new nt(new ze(.11,14,10),O);if(z.position.y=.07,N.add(z),L.ff){let _t=et(L.helmet||14165532,{roughness:.3,metalness:.2}),Pt=new nt(new ze(.135,14,8,0,hd,0,Math.PI/2),_t);Pt.position.y=.1,N.add(Pt);let tt=new nt(new Ie(.2,.21,.03,16),_t);tt.position.set(0,.1,-.03),tt.scale.z=1.2,N.add(tt)}else{let _t=new nt(new ze(.118,12,8,0,hd,0,Math.PI/2),et(L.hair||2759184));_t.position.y=.09,N.add(_t)}let at=_t=>{let Pt=new te;Pt.position.set(_t*.22,.58,0),S.add(Pt);let tt=rt(.06,.055,.32,P);tt.position.y=-.16,Pt.add(tt);let Mt=new te;Mt.position.y=-.31,Pt.add(Mt);let Ut=rt(.05,.045,.28,P);Ut.position.y=-.14,Mt.add(Ut);let At=new nt(new ze(.05,8,6),L.ff?et(2236962):O);return At.position.y=-.3,Mt.add(At),{p:Pt,el:Mt}},q=at(-1),j=at(1),mt=null;if(L.ff){mt=new te;let _t=rt(.04,.03,.36,et(12632256,{metalness:1,roughness:.2}));_t.rotation.x=Math.PI/2,_t.position.z=.18,mt.add(_t),mt.position.set(0,.5,.3),S.add(mt)}return U.userData={L:st,R:x,A:q,B:j,torso:S,head:N,noz:mt},U}function Kt(L,U,P,Z){let O=L.userData,X=Math.sin(P*8+Z);if(U==="walk")O.L.p.rotation.x=X*.6,O.R.p.rotation.x=-X*.6,O.L.kn.rotation.x=Math.max(0,-X)*.8,O.R.kn.rotation.x=Math.max(0,X)*.8,O.A.p.rotation.x=-X*.5,O.B.p.rotation.x=X*.5,O.torso.position.y=.92+Math.abs(X)*.03;else if(U==="spray")O.L.p.rotation.x=.25,O.R.p.rotation.x=-.35,O.L.kn.rotation.x=.2,O.R.kn.rotation.x=.45,O.torso.rotation.x=.12+Math.sin(P*20+Z)*.01,O.A.p.rotation.x=-1.25,O.B.p.rotation.x=-1.05,O.A.p.rotation.z=.25,O.B.p.rotation.z=-.35,O.A.el.rotation.x=-.3,O.B.el.rotation.x=-.5;else if(U==="wave")O.B.p.rotation.z=-2.6+Math.sin(P*9+Z)*.35,O.A.p.rotation.z=.1;else if(U==="cheer"){let it=Math.abs(Math.sin(P*6+Z));L.position.y=(L.userData.y0||0)+it*.35,O.A.p.rotation.z=2.7,O.B.p.rotation.z=-2.7}else O.L.p.rotation.x=O.R.p.rotation.x=0,O.L.kn.rotation.x=O.R.kn.rotation.x=0,O.A.p.rotation.set(0,0,.08),O.B.p.rotation.set(0,0,-.08)}function kt(L,U){let P=new te,Z=et(L,{roughness:.9}),O=et(U||L,{roughness:.9}),X=et(16183526,{roughness:.9}),it=et(16747176,{roughness:.6}),rt=new ye({color:1118481,roughness:.15,metalness:.1}),Q=(q,j,mt,_t,Pt,tt=1,Mt=1,Ut=1)=>{let At=new nt(new ze(q,16,12),j);return At.position.set(mt,_t,Pt),At.scale.set(tt,Mt,Ut),At.castShadow=!0,P.add(At),At};Q(.3,Z,0,.3,-.05,1,1.05,1.25),Q(.2,X,0,.3,.18,1,1.1,.6),[-.15,.15].forEach(q=>{Q(.09,X,q,.07,.26,1,.7,1.3),Q(.1,Z,q*1.4,.12,-.25,1,.8,1.4)});let st=new te;st.position.set(0,.72,.08),P.add(st);let x=new nt(new ze(.26,18,14),Z);x.scale.set(1.12,.95,1),x.castShadow=!0,st.add(x);let S=new nt(new ze(.12,14,10),X);S.position.set(0,-.07,.19),S.scale.set(1.3,.8,.8),st.add(S);let B=new nt(new ze(.035,8,6),it);B.position.set(0,-.02,.27),st.add(B),[-1,1].forEach(q=>{let j=new nt(new ze(.06,12,10),rt);j.position.set(q*.1,.04,.22),j.scale.set(1,1.25,.6),st.add(j);let mt=new nt(new ze(.018,6,6),new Xe({color:16777215}));mt.position.set(q*.1+.02,.07,.26),st.add(mt);let _t=new nt(new Hn(.1,.2,4),Z);_t.position.set(q*.15,.22,0),_t.rotation.z=-q*.35,_t.castShadow=!0,st.add(_t);let Pt=new nt(new Hn(.055,.12,4),it);Pt.position.set(q*.15,.21,.035),Pt.rotation.z=-q*.35,st.add(Pt);for(let tt=0;tt<2;tt++){let Mt=new nt(new Ie(.004,.004,.22,3),X);Mt.rotation.z=Math.PI/2+q*(tt?.2:-.1),Mt.position.set(q*.2,-.06+tt*.03,.2),st.add(Mt)}}),U&&[0,1,2].forEach(q=>{let j=new nt(new Nn(.27,.025,6,20,Math.PI),O);j.rotation.set(Math.PI/2,0,0),j.position.set(0,.45-q*.13,-.08),j.scale.set(1,1.25,1),P.add(j)});let N=new Ar([new I(0,.12,-.38),new I(.18,.2,-.55),new I(.3,.5,-.5),new I(.26,.75,-.42)]),z=new nt(new aa(N,16,.05,8),Z);z.castShadow=!0;let at=new te;return at.add(z),P.add(at),P.userData={hd:st,tg:at},P}function Jt(){let L=new te,U=et(12615744,{roughness:.9}),P=et(5913120),Z=(X,it,rt,Q,st,x=1,S=1,B=1)=>{let N=new nt(new ze(X,14,10),it);return N.position.set(rt,Q,st),N.scale.set(x,S,B),N.castShadow=!0,L.add(N),N};Z(.28,U,0,.42,0,1,.85,1.6),Z(.2,U,0,.72,.42),Z(.1,U,0,.66,.6,1,.8,1.3),Z(.04,et(1118481),0,.68,.72),[-1,1].forEach(X=>{Z(.09,P,X*.17,.82,.38,.6,1.4,.8),[-.25,.25].forEach(it=>{let rt=new nt(new Ie(.06,.06,.32,8),U);rt.position.set(X*.13,.16,it),L.add(rt)})});let O=new nt(new Ie(.03,.05,.35,6),U);return O.position.set(0,.6,-.48),O.rotation.x=-.7,L.add(O),L.userData.tail=O,L}function Ee(L,U){U=U||{};let P=A($(L),null);P.scale.setScalar(4.4);let Z=new te;Z.add(P);let O=et(1380879,{roughness:1}),X=new ye({color:12576511,roughness:.05,metalness:.3,transparent:!0,opacity:.7}),it=new nt(new Ur(.55,0),O);it.position.set(1.25,.55,0),it.scale.set(.8,.45,1.1),Z.add(it);let rt=new nt(new ce(.12,.18,1.5),et(10133672,{metalness:.9,roughness:.3}));rt.position.set(1.55,.3,.3),rt.rotation.y=.5,rt.rotation.z=.3,rt.castShadow=!0,Z.add(rt);for(let Q=0;Q<14;Q++){let st=new nt(new oa(.05+Math.random()*.06),X);st.position.set(1.4+Math.random()*1.6,.03,(Math.random()-.5)*2.2),st.rotation.set(Math.random()*3,Math.random()*3,0),Z.add(st)}if(U.tire){let Q=new nt(new Nn(.32,.13,8,18),et(1118481,{roughness:.9}));Q.rotation.x=Math.PI/2,Q.position.set(2.6,.13,1.2),Z.add(Q)}return Z.userData.front=new I(1.2,.9,0),Z}function Nt(L,U,P){let Z=new nt(new Hn(.22,.6,14),et(16738832,{roughness:.5}));Z.position.set(U,.3,P),Z.castShadow=!0,L.add(Z);let O=new nt(new Ie(.13,.15,.1,14),et(16777215));O.position.set(U,.36,P),L.add(O)}function Wt(L,U,P,Z){let O=new te,X=et(13685978,{metalness:.8,roughness:.3}),it=et(15265266,{roughness:.6}),rt=et(16742938,{roughness:.5}),Q=new nt(new ce(2,.12,.65),it);Q.position.y=.8,Q.castShadow=!0,O.add(Q);let st=new nt(new ce(.25,.13,.66),rt);st.position.set(.3,.81,0),O.add(st);let x=new nt(new ce(.4,.1,.5),et(16777215));return x.position.set(-.75,.9,0),O.add(x),[[-.8,-.25],[-.8,.25],[.8,-.25],[.8,.25]].forEach(([S,B])=>{let N=new nt(new Ie(.03,.03,.75,6),X);N.position.set(S,.38,B),O.add(N);let z=new nt(new Ie(.07,.07,.05,10),et(2236962));z.rotation.x=Math.PI/2,z.position.set(S,.07,B),O.add(z)}),O.position.set(U,0,P),O.rotation.y=Z||0,L.add(O),O}function he(L,U,P){let Z=new nt(new ce(.6,.4,.3),et(16053492,{roughness:.4}));Z.position.set(U,.2,P),Z.castShadow=!0,L.add(Z);let O=et(1351750);[[.32,.08],[.08,.32]].forEach(([X,it])=>{let rt=new nt(new ce(X,it,.02),O);rt.position.set(U,.22,P+.16),L.add(rt)})}function ue(L,U,P){let Z=new nt(new Nn(.32,.05,4,3),new ye({color:16719904,emissive:6295568,roughness:.3}));Z.position.set(U,.36,P),Z.rotation.z=Math.PI/2,L.add(Z)}function Qt(L){let U=et(5913122,{roughness:1}),P=[et(3045940,{roughness:.9,flatShading:!0}),et(3839040,{roughness:.9,flatShading:!0}),et(2384426,{roughness:.9,flatShading:!0})],Z=[],O=new nt(new Ie(.5,.95,7.5,12),U);O.position.y=3.75,O.castShadow=!0,L.add(O);let X=(Q,st,x,S,B)=>{let N=new nt(new Ie(.14,.3,S,8),U);N.geometry.translate(0,S/2,0),N.position.set(Q,st,0),N.rotation.z=x,N.rotation.x=B||0,N.castShadow=!0,L.add(N);let z=new I(0,S,0).applyEuler(N.rotation).add(N.position);Z.push(z)};X(0,4.2,1.05,4.2,.15),X(0,5,-1,4,-.1),X(0,6,.55,3.4,.2),X(0,6.4,-.6,3.2,.15),X(0,7,.1,2.6,.25),X(0,3.4,-1.25,3.2,.3),[[0,9.6,-.5,3.2],[-3.6,8.2,-.4,2.6],[3.6,8,-.3,2.7],[-2,10.2,-.8,2.4],[2.2,10.3,-.8,2.3],[0,7.6,-1.6,2.8],[-4.4,6.4,-.6,2],[4.4,6.6,-.2,2],[0,11.3,-.6,1.9]].forEach(([Q,st,x,S],B)=>{let N=new nt(new Ur(S,1),P[B%3]);N.position.set(Q,st,x),N.castShadow=!0,N.receiveShadow=!0,L.add(N)});let rt=new nt(new Hn(1.6,.8,10),U);return rt.position.y=.2,L.add(rt),Z}function we(L,U){let P=new te,Z=[],O=[],X=[],it=[3832789,14737632,2763310,8014552,14196768];if(L==="crash"){let rt=Ee(it[U%5],{tire:1});rt.position.set(-2.6,0,1.2),rt.rotation.y=.55,P.add(rt);let Q=Ee(it[(U+2)%5]);if(Q.position.set(1.8,0,.4),Q.rotation.y=Math.PI+.75,P.add(Q),U>=3){let S=Ee(it[(U+3)%5]);S.position.set(6.4,1.05,-1.6),S.rotation.set(0,-.4,Math.PI/2*.98),P.add(S),Z.push([6.2,2.4,-1])}[rt,Q].forEach(S=>{S.updateMatrixWorld(!0);let B=S.userData.front.clone().applyMatrix4(S.matrixWorld);Z.push([B.x,B.y,B.z+.3])});let st=new nt(new Cr(1.6,24),new ye({color:328965,roughness:.05,metalness:.6}));st.rotation.x=-Math.PI/2,st.position.set(-.2,.02,2),st.scale.x=1.6,P.add(st);let x=new Xe({color:657930,transparent:!0,opacity:.6,depthWrite:!1});[[-7,2.2,.08],[-7,3,.12]].forEach(([S,B,N])=>{let z=new nt(new Oe(5,.25),x);z.rotation.set(-Math.PI/2,0,N),z.position.set(S,.015,B),P.add(z)}),[-5.5,-4.6,4.6,5.5].forEach((S,B)=>Nt(P,S,3.4+B%2*.3)),ue(P,-6.6,3.6),O.push([-4.6,0,3.2],[-.6,0,3.4],[3.6,0,3],[1,0,3.6],[-3,0,3.8],[4.6,0,3.8]),X.push("sit","lie","sit","lie","sit","lie")}else if(L==="hurt"){let rt=et(12107462,{metalness:.8,roughness:.35}),Q=et(11567168,{roughness:.9}),st=(x,S,B,N,z,at)=>{let q=new nt(new Ie(.07,.07,N,8),rt);q.position.set(x,S,B),q.rotation.set(z||0,0,at||0),q.castShadow=!0,P.add(q)};for(let x=0;x<4;x++)st(-6+x*2.4,3,-1.2,6);st(-2.4,6,-1.2,7.4,0,Math.PI/2),st(-2.4,3,-1.2,7.4,0,Math.PI/2),st(1.2,2.2,0,5,0,.9),st(2.6,1.2,.6,4,.3,1.35),[[-2.4,6.1,-1.2,0,0],[-2.4,3.1,-1.2,0,0],[1.4,.3,1.4,.1,.15],[3.4,.6,.8,.2,-.5]].forEach(([x,S,B,N,z])=>{let at=new nt(new ce(4,.12,.7),Q);at.position.set(x,S,B),at.rotation.set(N,z,z*.4),at.castShadow=!0,P.add(at)});for(let x=0;x<5;x++){let S=new nt(new ce(.6,.6,.6),et(13148256));S.position.set(4+Math.random()*2,.3+(x>2?.6:0),-.5+Math.random()),S.rotation.y=Math.random(),S.castShadow=!0,P.add(S)}Wt(P,-4.6,2.6,.2),Wt(P,5.4,3,-.25),he(P,-1.6,3.6),he(P,2.2,3.8),Z.push([2,1,.8],[-1,1,.2],[4.6,1,0]),O.push([-2.8,0,2.6],[.6,0,2.8],[3.2,0,2.4],[-4.6,.85,2.6],[5.4,.85,3],[-.9,0,3.8]),X.push("lie","lie","sit","lie","lie","sit")}else{let rt=Qt(P);P.position.set(0,0,0),rt.sort((S,B)=>B.y-S.y),rt.forEach(S=>O.push([S.x*.9,S.y-.35,Math.max(S.z,0)+1.7])),X.push("cat");let Q=et(15788760);for(let S=-10;S<=10;S++){let B=new nt(new ce(.18,1.3,.1),Q);B.position.set(S*.8,.65,-2.6),P.add(B)}let st=new nt(new ce(17,.12,.08),Q);st.position.set(0,1,-2.55),P.add(st);let x=new nt(new Cr(5,30),et(3107370,{roughness:1}));x.rotation.x=-Math.PI/2,x.position.set(0,.03,.4),x.receiveShadow=!0,P.add(x)}return{g:P,F:Z,P:O,mode:X}}function xe(L,U,P,Z){let O=L.userData;U==="lie"?(O.L.p.rotation.x=0,O.R.p.rotation.x=.15,O.A.p.rotation.set(0,0,.5),O.B.p.rotation.set(-.4+Math.sin(P*1.5+Z)*.35,0,-.3),O.torso.scale.y=1+Math.sin(P*2+Z)*.015):(O.L.p.rotation.x=-1.45,O.R.p.rotation.x=-1.35,O.L.kn.rotation.x=1.2,O.R.kn.rotation.x=.9,O.A.p.rotation.set(-2.5,0,.35),O.A.el.rotation.x=-1.4,O.B.p.rotation.set(-.5+Math.sin(P*3+Z)*.25,0,-.2),O.head.rotation.z=Math.sin(P*1.2+Z)*.12)}function Ue(L){let U=Bt[L]||Bt[1],P=new Pn;J.scene=P,J.ch=L,J.G=G,P.background=Yt(U.sky[0],U.sky[1]),P.environment=n,P.environmentIntensity=.35,P.fog=new is(U.fog,30,75),P.add(new zn(U.amb,2105376,U.ambI));let Z=new pn(U.key,U.keyI);if(Z.position.set(...U.keyP).multiplyScalar(3),Z.castShadow=!0,Z.shadow.mapSize.set(1024,1024),Object.assign(Z.shadow.camera,{left:-22,right:22,top:30,bottom:-6,near:1,far:120}),Z.shadow.bias=-8e-4,P.add(Z),J.key=Z,G&&G.L&&G.L.endless){let q=G.L.zt|0,j=[[9414911,.9],[16756848,1.1],[10533072,.85],[16748464,1]][q];Z.color.lerp(new fe(j[0]),.45),Z.intensity*=j[1],P.fog.color.lerp(new fe(j[0]),.25)}let O=new Dn(16742954,0,40,1.4);P.add(O),J.fireL=O;let X=new nt(new Oe(140,40),new ye({color:2237739,roughness:.28,metalness:.4,envMapIntensity:.6}));X.rotation.x=-Math.PI/2,X.position.z=12,X.receiveShadow=!0,P.add(X);let it=new nt(new ce(140,.25,5),et(6974064));it.position.set(0,.12,4.5),it.receiveShadow=!0,P.add(it);let rt=new Xe({color:14205024,toneMapped:!1});for(let q=-8;q<=8;q++){let j=new nt(new Oe(2,.18),rt);j.rotation.x=-Math.PI/2,j.position.set(q*5,.01,12),P.add(j)}let Q=new nt(new Oe(200,60),new Xe({color:0,transparent:!0,opacity:0}));Q.position.z=-40,P.add(Q);let st=et(new fe(U.fog).multiplyScalar(.6).getHex(),{roughness:1});for(let q=0;q<22;q++){let j=3+Math.random()*5,mt=L===4?0:4+Math.random()*(L===5?26:12);if(!mt)continue;let _t=new nt(new ce(j,mt,3),st);_t.position.set(-55+q*5+Math.random()*2,mt/2,-18-Math.random()*8),P.add(_t)}if(L===4){let q=et(1057818);for(let j=0;j<40;j++){let mt=3+Math.random()*4,_t=new nt(new Hn(mt*.5,mt*2.2,7),q);_t.position.set(-50+j*2.6,mt*1.1,-14-Math.random()*10),P.add(_t)}}let x=J.scn=G&&G.scn||"fire";if(J.flameK=1,J.spray=!0,J.pmode=null,J.cats=null,x==="fire"){let q=Tt(U.build);q.g.position.z=-1,P.add(q.g),J.F=q.F.map(j=>new I(j[0],j[1],j[2]-1)),J.P=q.P.map(j=>new I(j[0],j[1],j[2]-1))}else{let q=Tt(U.build);q.g.position.set(0,0,-14),q.g.scale.setScalar(.85),P.add(q.g);let j=we(x,L);P.add(j.g),J.F=j.F.map(_t=>new I(..._t)),J.P=j.P.map(_t=>new I(..._t)),J.pmode=j.mode,x==="crash"?J.flameK=.42:(J.flameK=0,J.spray=!1);let mt=new Dn(x==="cat"?16773328:16777215,x==="cat"?30:12,30,1.2);mt.position.set(0,8,8),P.add(mt)}J.flames=J.F.map((q,j)=>{let mt=new nt(new Oe(1,1),ee(j*1.7+L));mt.geometry.translate(0,.5,0),mt.position.copy(q);let _t=(L===5?2.4:3.2)*(.8+j*37%10/25)*(J.flameK||1);mt.scale.set(_t*.8,_t*1.35,1),mt.userData.sc=_t,P.add(mt);let Pt=new an(f(16738842,.6));return Pt.position.copy(q).add(new I(0,_t*.4,.2)),Pt.scale.setScalar(_t*2.6),P.add(Pt),mt.userData.gl=Pt,mt}),J.smoke=[];for(let q=0;q<26;q++){let j=new an(new oi({map:d,color:2762280,transparent:!0,depthWrite:!1,opacity:0}));j.userData={life:99},P.add(j),J.smoke.push(j)}J.steam=[];for(let q=0;q<16;q++){let j=new an(new oi({map:d,color:15265524,transparent:!0,depthWrite:!1,opacity:0}));j.userData={life:99},P.add(j),J.steam.push(j)}let S=90,B=new qe;B.setAttribute("position",new en(new Float32Array(S*3),3)),J.emb=new ss(B,new Bi({map:u,color:16752704,size:.28,transparent:!0,blending:yn,depthWrite:!1,toneMapped:!1})),J.emb.frustumCulled=!1,J.embD=Array.from({length:S},()=>({life:9,v:new I})),P.add(J.emb);let N=420,z=new qe;z.setAttribute("position",new en(new Float32Array(N*3),3)),J.wat=new ss(z,new Bi({map:u,color:12116223,size:.32,transparent:!0,opacity:.85,blending:yn,depthWrite:!1,toneMapped:!1})),J.wat.frustumCulled=!1,J.watD=Array.from({length:N},()=>({life:9,v:new I,p:new I})),J.wi=0,P.add(J.wat),J.ff=[0,1,2,3].map(q=>{let j=vt({ff:1,coat:3813926,pants:3813926,helmet:q%2?16761370:14165532});return j.scale.setScalar(1.15),j.visible=!1,P.add(j),j});let at=[4892927,16743088,8050266,16756736,11766527,5953238];if(J.ppl=J.P.concat(J.P).map((q,j)=>{let mt=vt({coat:at[j%6],pants:2767450,hair:[2759184,6961690,1052688][j%3]});return mt.scale.setScalar(1.1),mt.position.copy(q),mt.position.x+=j>=J.P.length?.7:0,mt.visible=!1,P.add(mt),mt}),J.scn==="cat"){J.ppl.forEach(j=>P.remove(j));let q=[[15764010,12607514],[10133672,6975608],[2763310,0],[15917768,14203024],[15764010,12607514],[10133672,0]];J.ppl=J.P.slice(0,6).map((j,mt)=>{let _t=kt(q[mt][0],q[mt][1]||0);return _t.scale.setScalar(mt===0?2:1.6),_t.position.copy(j),_t.rotation.y=mt%2?-.3:.3,_t.visible=!1,P.add(_t),_t}),J.cats=q.map((j,mt)=>{let _t=kt(j[0],j[1]||0);return _t.scale.setScalar(1.3),_t.position.set(-6.5+mt*1.2,.25,5.6),_t.visible=!1,P.add(_t),_t}),J.dog=Jt(),J.dog.position.set(5.6,.25,5.2),J.dog.rotation.y=-.6,P.add(J.dog),J.kid=vt({coat:4892927,pants:2767450,hair:2759184}),J.kid.scale.setScalar(.8),J.kid.position.set(2.4,.03,2.4),J.kid.rotation.y=-.3,P.add(J.kid)}else J.pmode&&J.ppl.forEach((q,j)=>{let mt=J.P[j%J.P.length],_t=J.pmode[j%J.pmode.length];q.userData.mode=_t,q.position.copy(mt),j>=J.P.length&&(q.position.x+=.9,q.position.z+=.5),_t==="lie"?(q.rotation.set(-Math.PI/2,0,j%2?.4:-.3),q.position.y+=.2):(q.position.y+=-.35+(mt.y>0?0:.25),q.rotation.y=j%2?.5:-.4)});J.crowd=Array.from({length:6},(q,j)=>{let mt=vt({coat:at[j],pants:2767450,hair:[2759184,6961690,1052688][j%3]});return mt.position.set(-7+j*2.8,.25,4.6),mt.userData.y0=.25,mt.rotation.y=Math.PI*0,mt.visible=!1,P.add(mt),mt}),J.veh=new Map,J.cam=new Ke(42,1,.5,200),J.t=0,J.camCfg={4:{p:[0,3,18],l:[0,3.8,0]},5:{p:[0,3,24],l:[0,11,0]},3:{p:[0,3.4,21],l:[0,4.6,0]},2:{p:[0,3,17],l:[0,4.4,0]},1:{p:[0,3.5,19.5],l:[0,6.4,0]}}[L],J.scn==="crash"||J.scn==="hurt"?J.camCfg={p:[0,4.2,15.5],l:[0,1.9,0]}:J.scn==="cat"&&(J.camCfg={p:[0,3.4,18.5],l:[0,6.2,0]})}let K=new I;function Zt(){let L=G.S;(J.G!==G||J.scn!==(G.scn||"fire"))&&Ue(G.ch);let U=J.scene,P=G.t,Z=Math.min(.05,DT||.016);J.t+=Z;let O=s(),X=G.state==="win"?0:js(G.fire/G.fireMax+(G.flare||0)*.15,0,1.3),it=J.camCfg,rt=J.cam;rt.aspect=L.w/L.h;let Q=G.state==="win"?Math.min(1,G.winT/3):0;rt.position.set(it.p[0]+Math.sin(P*.23)*.8,it.p[1]+Math.sin(P*.31)*.25,it.p[2]-Q*3+Math.sin(P*.17)*.4),rt.lookAt(it.l[0]+Math.sin(P*.19)*.3,it.l[1]+Q*.8,it.l[2]),CAM.sh>0&&(rt.position.x+=(Math.random()-.5)*CAM.sh*.6),rt.updateProjectionMatrix(),rt.updateMatrixWorld(),J.key.castShadow=O,G.ch===5&&(Math.random()<.004&&(J.flash=1),J.flash=Math.max(0,(J.flash||0)-Z*3),J.key.intensity=Bt[5].keyI+J.flash*6);let st=J.flameK?Math.ceil(J.flames.length*Math.min(1,X)):0,x=[];J.flames.forEach((tt,Mt)=>{let Ut=Mt<st,At=tt.userData.a=ah(tt.userData.a||0,Ut?1:0,Z*2.5);if(tt.visible=At>.02,tt.userData.gl.visible=tt.visible,!tt.visible)return;tt.material.uniforms.t.value=J.t+Mt,tt.material.uniforms.amp.value=At*(.9+.1*Math.sin(J.t*13+Mt)),tt.quaternion.copy(rt.quaternion);let ie=tt.userData.sc*(.85+.15*At)*(1+.06*Math.sin(J.t*7+Mt*2));tt.scale.set(ie*.8,ie*1.35,1),tt.userData.gl.material.opacity=.45*At*(.85+.15*Math.sin(J.t*11+Mt)),Ut&&x.push(tt.position)}),J.fireL.intensity=X*(O?110:80)*(.85+.15*Math.sin(J.t*9)+.06*Math.sin(J.t*23)),x.length&&(K.set(0,0,0),x.forEach(tt=>K.add(tt)),K.divideScalar(x.length),J.fireL.position.copy(K).add(new I(0,1,4))),G.flames=x.map(tt=>(K.copy(tt).add(new I(0,.8,0)).project(rt),[L.x+(K.x+1)/2*L.w,L.y+(1-K.y)/2*L.h])),J.smoke.forEach((tt,Mt)=>{let Ut=tt.userData;if(Ut.life+=Z,Ut.life>Ut.max){let ie=x.length?x:J.scn==="hurt"?J.F:[];if(ie.length&&Math.random()<.5*X+.05){let ne=ie[Mt%ie.length];Ut.life=0,Ut.max=3+Math.random()*2.5,tt.position.copy(ne).add(new I(Math.random()-.5,2,-.3)),Ut.vx=(Math.random()-.2)*.8,Ut.s0=2+Math.random()*2}else{tt.material.opacity=0;return}}let At=Ut.life/Ut.max;tt.position.y+=Z*(2.2-At),tt.position.x+=Ut.vx*Z,tt.scale.setScalar(Ut.s0*(1+At*2.6)),tt.material.opacity=Math.sin(At*Math.PI)*.55*Math.min(1,X+.2),tt.material.rotation+=Z*.2});let S=Math.max(G.steam,G.state==="win"?1-Math.min(1,G.winT/3):0);J.steam.forEach((tt,Mt)=>{let Ut=tt.userData;if(Ut.life+=Z,Ut.life>Ut.max)if(S>.1&&J.F.length&&Math.random()<S*.4){let ie=J.F[Mt*5%J.F.length];Ut.life=0,Ut.max=2+Math.random(),tt.position.copy(ie).add(new I(0,.5,.5)),Ut.s0=1.5+Math.random()}else{tt.material.opacity=0;return}let At=Ut.life/Ut.max;tt.position.y+=Z*2.6,tt.scale.setScalar(Ut.s0*(1+At*3)),tt.material.opacity=Math.sin(At*Math.PI)*.5});{let tt=J.emb.geometry.attributes.position;J.embD.forEach((Mt,Ut)=>{if(Mt.life+=Z,Mt.life>Mt.max)if(x.length&&Math.random()<X*.25){let At=x[Math.floor(Math.random()*x.length)];Mt.life=0,Mt.max=1.5+Math.random()*2,tt.setXYZ(Ut,At.x+(Math.random()-.5),At.y+1,At.z+.3),Mt.v.set((Math.random()-.5)*1.5,2+Math.random()*2.5,(Math.random()-.5)*.5)}else{tt.setXYZ(Ut,0,-99,0);return}tt.setXYZ(Ut,tt.getX(Ut)+Mt.v.x*Z+Math.sin(J.t*3+Ut)*Z*.6,tt.getY(Ut)+Mt.v.y*Z,tt.getZ(Ut)+Mt.v.z*Z)}),tt.needsUpdate=!0}let B=(()=>{let tt=rt.position.z-9;return 2*Math.tan(rt.fov*Math.PI/360)*tt*rt.aspect})(),N=new Set,z=[];G.sv.forEach((tt,Mt)=>{let Ut=tt.id+"_"+tt.type;N.add(Ut);let At=J.veh.get(Ut);At||(At=A(w(tt.type,wt(tt.type)),null),At.scale.setScalar(4.4),U.add(At),J.veh.set(Ut,At));let ie=(tt.x/L.w-.5)*B*.92,ne=8.6+Mt%2*1.6;At.position.set(ie,0,ne);let Gt=tt.state==="drive";At.rotation.y=tt.dir>0?0:Math.PI,At.userData.yaw.rotation.z=Gt?-.02:0,At.position.y=Gt?Math.abs(Math.sin(P*18+Mt))*.04:0,k(At,!0,P,Mt);let me=At.userData.lad;if(me){let be=js((tt.work||0)/1.6,0,1);me.rotation.z=-.03+(tt.state==="work"?be*.75:0)}tt.state==="work"&&WATER[tt.type]&&G.state!=="win"&&J.spray&&z.push({x:ie,z:ne,i:Mt})});for(let[tt,Mt]of J.veh)N.has(tt)||(U.remove(Mt),J.veh.delete(tt));let at=J.watD,q=J.wat.geometry.attributes.position;J.ff.forEach((tt,Mt)=>{let Ut=z[Mt];if(tt.visible=!!Ut||G.state==="win"&&Mt<z.length+2&&G.sv.length>Mt,!tt.visible)return;let At=x.length?x[Mt%x.length]:J.F[Mt%J.F.length],ie=Ut?Ut.x+(Mt%2?2.4:-2.4):-3+Mt*3;if(tt.position.set(ie,.25,5.2-Mt*.3),Ut&&At&&X>0){tt.lookAt(At.x,tt.position.y,At.z),Kt(tt,"spray",P,Mt),tt.userData.noz.getWorldPosition(K);let Gt=At.clone().add(new I(Math.sin(P*2+Mt)*.6,.6,0)),me=.9;for(let be=0;be<(O?6:3);be++){let nn=at[J.wi=(J.wi+1)%at.length];nn.life=0,nn.max=me*(.9+Math.random()*.25),nn.p.copy(K),nn.v.set((Gt.x-K.x)/me+(Math.random()-.5)*.6,(Gt.y-K.y)/me+4.9*me+(Math.random()-.5)*.6,(Gt.z-K.z)/me+(Math.random()-.5)*.4)}}else Kt(tt,G.state==="win"?"cheer":"idle",P,Mt)}),at.forEach((tt,Mt)=>{if(tt.life>tt.max){q.setXYZ(Mt,0,-99,0);return}tt.life+=Z,tt.v.y-=9.8*Z,tt.p.addScaledVector(tt.v,Z),q.setXYZ(Mt,tt.p.x,tt.p.y,tt.p.z)}),q.needsUpdate=!0;let j=Math.max(0,G.people-G.rescued);if(J.ppl.forEach((tt,Mt)=>{if(tt.visible=Mt<Math.min(j,J.ppl.length)&&G.state!=="win",!!tt.visible)if(J.scn==="cat"){let Ut=tt.userData;Ut.hd.rotation.z=Math.sin(P*2+Mt)*.18,Ut.hd.rotation.x=-.25+Math.sin(P*1.3+Mt)*.08,Ut.tg.rotation.y=Math.sin(P*3+Mt)*.4,tt.scale.y=tt.scale.x*(1+Math.sin(P*4+Mt)*.03)}else tt.userData.mode?xe(tt,tt.userData.mode,P,Mt):Kt(tt,"wave",P,Mt)}),J.cats){let tt=G.state==="win"?G.people:G.rescued;J.cats.forEach((Mt,Ut)=>{Mt.visible=Ut<tt,Mt.visible&&(Mt.userData.tg.rotation.y=Math.sin(P*4+Ut)*.5,Mt.position.y=.25+(G.state==="win"?Math.abs(Math.sin(P*5+Ut))*.25:0))}),J.dog.userData.tail.rotation.z=Math.sin(P*14)*.5,J.dog.position.y=.25+(G.state==="win"?Math.abs(Math.sin(P*6))*.2:0),Kt(J.kid,G.state==="win"?"cheer":"wave",P,0),G.state!=="win"&&(J.kid.userData.B.p.rotation.z=-2.9)}J.crowd.forEach((tt,Mt)=>{tt.visible=Mt<(G.state==="win"?G.people:G.rescued),tt.visible&&Kt(tt,G.state==="win"?"cheer":"wave",P,Mt*1.3)});let mt=c(),_t=Math.round(L.w*mt),Pt=Math.round(L.h*mt);o(_t,Pt),i.shadowMap.autoUpdate=!0,i.render(U,rt),i.shadowMap.autoUpdate=!1,a(cx,_t,Pt,L.x,L.y,L.w,L.h)}let pt={scene:new Pn,cam:new Ke(26,1,.1,50),objs:new Map};{let L=pt.scene;L.environment=n,L.environmentIntensity=1,L.add(new zn(15265535,3158072,.9));let U=new pn(16774376,3);U.position.set(-2,4,3),U.castShadow=!0,U.shadow.mapSize.set(1024,1024),Object.assign(U.shadow.camera,{left:-1,right:1,top:1,bottom:-1,near:.5,far:12}),U.shadow.radius=5,L.add(U);let P=new pn(10469631,1.6);P.position.set(3,2,-3),L.add(P);let Z=new nt(new Ie(.62,.66,.04,64),new ye({color:4869724,metalness:.85,roughness:.22}));Z.position.y=-.02,Z.receiveShadow=!0,L.add(Z);let O=new nt(new Nn(.64,.008,8,96),new Xe({color:16765562,toneMapped:!1}));O.rotation.x=Math.PI/2,O.position.y=.002,L.add(O),pt.plat=Z,pt.ring=O}function C(L,U,P,Z,O,X,it,rt){if(rt=rt||{},!Fe.ok||Fe.lost)return null;let Q=U+P+"|"+m(U),st=pt.objs.get(Q);st||(st=A(w(U,P),[1,1]),pt.objs.set(Q,st)),pt.scene.children.forEach(_t=>{_t.userData&&_t.userData.f!==void 0&&_t!==st&&(_t.visible=!1)}),st.parent||pt.scene.add(st),st.visible=!0,st.rotation.y=-it-Math.PI/2,k(st,!!rt.siren,rt.t||TT,0);let x=rt.plat!==!1&&X>90;pt.plat.visible=pt.ring.visible=x,x&&(pt.plat.rotation.y=st.rotation.y);let S=pt.cam,B=2.45,N=.42;S.aspect=1.4,S.position.set(0,Math.sin(N)*B+.12,Math.cos(N)*B),S.lookAt(0,.16,0),S.updateProjectionMatrix();let z=Math.min(DPR,2)*(L.canvas&&L.canvas.width>L.canvas.clientWidth*1.2,1),at=X*1.75,q=at/1.4,j=Math.round(at*z),mt=Math.round(q*z);return o(j,mt),i.shadowMap.autoUpdate=!0,i.render(pt.scene,S),i.shadowMap.autoUpdate=!1,L.save(),rt.filter&&(L.filter=rt.filter),a(L,j,mt,Z-at/2,O-q*.66,at,q),L.restore(),!0}let V=window.renderBoard,Y=window.renderScene,ct=window.drawTT,lt=()=>Fe.ok&&!Fe.lost&&!Fe.off,Et=0,Lt=0,jt=0;window.renderBoard=function(){if(!lt())return V();if(se.tOn&&se.titleDispose(),!Pe())try{F(),G.hint&&window.drawHint&&window.drawHint(),G.i===0&&!G.firstTap&&G.state==="play"&&drawHand(),drawImpacts(),Fe.frames++}catch(L){jn("board3d error \u2192 2D",L&&L.stack),Fe.off=!0,V()}},window.renderScene=function(){if(!lt())return Y();if(!Pe())try{Zt()}catch(L){jn("scene3d error \u2192 2D",L&&L.stack),Fe.off=!0,Y()}},Fe.tt=C,[h,u,d,n].forEach(L=>{L&&L.userData&&(L.userData.keep=1)});let se=Qu({R:i,prep:o,blit:a,ENV:n,model:w,instance:A,siren:k,figure:vt,pose:Kt,flameMat:ee,glowMat:f,SOFT:u,SMOKE:d,hi:s,skyTex:Yt,buildBuilding:Tt,CH:Bt,SM:et,tierOf3:wt});Fe.ui={ok:()=>lt()&&!se.off&&!/ui=2d/.test(location.search),fail(L){jn("ui3 error \u2192 2D",L&&L.stack),se.off=!0},badge(L,U,P,Z){try{return se.badge(L,U,P,Z),!0}catch(O){return Fe.ui.fail(O),!1}},res(L){try{return se.res(L)}catch(U){return Fe.ui.fail(U),null}},rank(L){try{return se.rank(L)}catch(U){return Fe.ui.fail(U),null}},U:se.U,titleDispose:()=>se.titleDispose()};let Ne=window.drawTitleScene;window.drawTitleScene=function(){if(MODE==="title"&&Fe.ui.ok())try{se.title(cx,W,H,DT);return}catch(L){Fe.ui.fail(L)}return se.tOn&&se.titleDispose(),Ne()};let Pe=()=>{let L=document.getElementById("res");return L&&L.style.display==="block"};Fe.shot=function(L,U,P,Z){Zt();let O=J.cam,X=O.aspect,it=O.fov,rt=new I;O.getWorldDirection(rt),O.position.addScaledVector(rt,-(P||0)),O.aspect=L/U,Z&&(O.fov=Z),O.updateProjectionMatrix(),O.updateMatrixWorld(),i.setSize(L,U,!1),i.setViewport(0,0,L,U),i.setScissorTest(!1),i.setClearColor(0,1),i.clear(!0,!0,!0),i.render(J.scene,O);let Q=i.domElement.toDataURL("image/jpeg",.88);return O.aspect=X,O.fov=it,O.updateProjectionMatrix(),Q},window.drawTT=function(L,U,P,Z,O,X,it,rt){if(lt()&&"EKTA".includes(U))try{if(C(L,U,P,Z,O,X,it,rt))return!0}catch(Q){jn("tt3d error",Q&&Q.message)}return ct(L,U,P,Z,O,X,it,rt)};let Ce=window.update;window.update=function(L){if(Ce(L),Et+=L,Lt++,Et>2){let U=Lt/Et;Fe.fps=U,Et=0,Lt=0,lt()&&MODE==="game"&&performance.now()-(window.__resumeT||0)>4e3&&(U<40?(jt++,ve=0,jt>=2&&(Fe.prCap||2)>1.25&&(Fe.prCap=Math.max(1.25,(Fe.prCap||2)-.25),jt=0,jn("adaptive pr",Fe.prCap))):(jt=0,U>54&&++ve>=3&&(Fe.prCap||2)<2&&(Fe.prCap=Math.min(2,(Fe.prCap||2)+.25),ve=0)))}};let ve=0;Fe.flags={setup:()=>{}},jn("3D renderer on",i.capabilities.isWebGL2?"webgl2":"webgl1")}function jn(...i){try{console.log("[R3]",...i)}catch{}}try{qx()}catch(i){jn("init failed \u2192 2D",i&&i.stack),window.R3.ok=!1}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
