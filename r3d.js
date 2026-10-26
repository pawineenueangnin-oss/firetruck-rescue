(()=>{var cd=0,oh=1,ld=2;var yu=1,Ul=2,ui=3,Di=0,dn=1,In=2,Ci=0,Ts=1,fn=2,ah=3,ch=4,hd=5,Zi=100,ud=101,dd=102,fd=103,pd=104,md=200,gd=201,xd=202,_d=203,cc=204,lc=205,yd=206,vd=207,Md=208,Ed=209,Sd=210,wd=211,bd=212,Td=213,Ad=214,hc=0,uc=1,dc=2,Ps=3,fc=4,pc=5,mc=6,gc=7,vu=0,Rd=1,Cd=2,Pi=0,Pd=1,Id=2,Dd=3,Nl=4,Ld=5,Ud=6,Fl=7;var Mu=300,Is=301,Ds=302,xc=303,_c=304,ca=306,mr=1e3,$i=1001,yc=1002,Sn=1003,Nd=1004;var kr=1005;var Xn=1006,wa=1007;var Ki=1008;var pi=1009,Eu=1010,Su=1011,gr=1012,Ol=1013,Qi=1014,ei=1015,Ir=1016,Bl=1017,Hl=1018,Ls=1020,wu=35902,bu=1021,Tu=1022,qn=1023,Au=1024,Ru=1025,As=1026,Us=1027,zl=1028,kl=1029,Cu=1030,Gl=1031;var Vl=1033,Mo=33776,Eo=33777,So=33778,wo=33779,vc=35840,Mc=35841,Ec=35842,Sc=35843,wc=36196,bc=37492,Tc=37496,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Ic=37812,Dc=37813,Lc=37814,Uc=37815,Nc=37816,Fc=37817,Oc=37818,Bc=37819,Hc=37820,zc=37821,bo=36492,kc=36494,Gc=36495,Pu=36283,Vc=36284,Wc=36285,Xc=36286;var Ao=2300,qc=2301,ba=2302,lh=2400,hh=2401,uh=2402;var Fd=3200,Od=3201;var Iu=0,Bd=1,Ai="",Ve="srgb",Fi="srgb-linear",Wl="display-p3",la="display-p3-linear",Ro="linear",Xe="srgb",Co="rec709",Po="p3";var rs=7680;var dh=519,Hd=512,zd=513,kd=514,Du=515,Gd=516,Vd=517,Wd=518,Xd=519,Yc=35044;var fh="300 es",di=2e3,Io=2001,Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ta=Math.PI/180,Zc=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function an(i,t,e){return Math.max(t,Math.min(e,i))}function qd(i,t){return(i%t+t)%t}function Aa(i,t,e){return(1-e)*i+e*t}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ee=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],y=s[0],p=s[3],m=s[6],w=s[1],v=s[4],S=s[7],K=s[2],R=s[5],z=s[8];return r[0]=o*y+a*w+c*K,r[3]=o*p+a*v+c*R,r[6]=o*m+a*S+c*z,r[1]=l*y+h*w+u*K,r[4]=l*p+h*v+u*R,r[7]=l*m+h*S+u*z,r[2]=d*y+f*w+x*K,r[5]=d*p+f*v+x*R,r[8]=d*m+f*S+x*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,x=e*u+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ra=new Ee;function Lu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Do(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=Do("canvas");return i.style.display="block",i}var ph={};function To(i){i in ph||(ph[i]=!0,console.warn(i))}function Zd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Jd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $d(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var mh=new Ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gh=new Ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[Fi]:{transfer:Ro,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ve]:{transfer:Xe,primaries:Co,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[la]:{transfer:Ro,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(gh),fromReference:i=>i.applyMatrix3(mh)},[Wl]:{transfer:Xe,primaries:Po,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(gh),fromReference:i=>i.applyMatrix3(mh).convertLinearToSRGB()}},Kd=new Set([Fi,la]),Ue={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=js[t].toReference,s=js[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return js[i].primaries},getTransfer:function(i){return i===Ai?Ro:js[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(js[t].luminanceCoefficients)}};function Rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var os,Jc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Do("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Do("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rs(e[n]/255)*255):e[n]=Rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qd=0,Lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pa(s[o].image)):r.push(Pa(s[o]))}else r=Pa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jd=0,pn=class i extends Li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$i,s=$i,r=Xn,o=Ki,a=qn,c=pi,l=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=fi(),this.name="",this.source=new Lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Mu;pn.DEFAULT_ANISOTROPY=1;var He=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],x=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(x+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,S=(f+1)/2,K=(m+1)/2,R=(h+d)/4,z=(u+y)/4,C=(x+p)/4;return v>S&&v>K?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=z/n):S>K?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=C/s):K<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(K),n=z/r,s=C/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-x)*(p-x)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-x)/w,this.y=(u-y)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$c=class extends Li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends $c{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Uo=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kc=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ui=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],x=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=x,t[e+3]=y;return}if(u!==y||c!==d||l!==f||h!==x){let p=1-a,m=c*d+l*f+h*x+u*y,w=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let K=Math.sqrt(v),R=Math.atan2(K,m*w);p=Math.sin(p*R)/K,a=Math.sin(a*R)/K}let S=a*w;if(c=c*p+d*S,l=l*p+f*S,h=h*p+x*S,u=u*p+y*S,p===1-a){let K=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=K,l*=K,h*=K,u*=K}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],x=r[o+3];return t[e]=a*x+h*u+c*f-l*d,t[e+1]=c*x+h*d+l*u-a*f,t[e+2]=l*x+h*f+a*d-c*u,t[e+3]=h*x-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"YZX":this._x=d*h*u+l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u-d*f*x;break;case"XZY":this._x=d*h*u-l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ia=new L,xh=new Ui,Yn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),Vr.subVectors(this.max,tr),as.subVectors(t.a,tr),cs.subVectors(t.b,tr),ls.subVectors(t.c,tr),Mi.subVectors(cs,as),Ei.subVectors(ls,cs),ki.subVectors(as,ls);let e=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-ki.z,ki.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,ki.z,0,-ki.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-ki.y,ki.x,0];return!Da(e,as,cs,ls,Vr)||(e=[1,0,0,0,1,0,0,0,1],!Da(e,as,cs,ls,Vr))?!1:(Wr.crossVectors(Mi,Ei),e=[Wr.x,Wr.y,Wr.z],Da(e,as,cs,ls,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},oi=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,Gr=new Yn,as=new L,cs=new L,ls=new L,Mi=new L,Ei=new L,ki=new L,tr=new L,Vr=new L,Wr=new L,Gi=new L;function Da(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),c=t.dot(Gi),l=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var tf=new Yn,er=new L,La=new L,gi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):tf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(La)),this.expandByPoint(er.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new L,Ua=new L,Xr=new L,Si=new L,Na=new L,qr=new L,Fa=new L,Ns=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ua.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(Ua);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xr),a=Si.dot(this.direction),c=-Si.dot(Xr),l=Si.lengthSq(),h=Math.abs(1-o*o),u,d,f,x;if(h>0)if(u=o*c-a,d=o*a-c,x=r*h,u>=0)if(d>=-x)if(d<=x){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ua).addScaledVector(Xr,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){Na.subVectors(e,t),qr.subVectors(n,t),Fa.crossVectors(Na,qr);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);let c=a*this.direction.dot(qr.crossVectors(Si,qr));if(c<0)return null;let l=a*this.direction.dot(Na.cross(Si));if(l<0||c+l>o)return null;let h=-a*Si.dot(Fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,x,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,x,y,p)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,x,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=x,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,x=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+x*l,e[5]=d-y*l,e[9]=-a*c,e[2]=y-d*l,e[6]=x+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,x=l*h,y=l*u;e[0]=d+y*a,e[4]=x*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-x,e[6]=y+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,x=l*h,y=l*u;e[0]=d-y*a,e[4]=-o*u,e[8]=x+f*a,e[1]=f+x*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,x=a*h,y=a*u;e[0]=c*h,e[4]=x*l-f,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=f*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=y-d*u,e[8]=x*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+x,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*c,f=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-x,e[2]=x*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ef,t,nf)}lookAt(t,e,n){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),wi.crossVectors(n,An),wi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),wi.crossVectors(n,An)),wi.normalize(),Yr.crossVectors(An,wi),s[0]=wi.x,s[4]=Yr.x,s[8]=An.x,s[1]=wi.y,s[5]=Yr.y,s[9]=An.y,s[2]=wi.z,s[6]=Yr.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],y=n[6],p=n[10],m=n[14],w=n[3],v=n[7],S=n[11],K=n[15],R=s[0],z=s[4],C=s[8],_t=s[12],_=s[1],b=s[5],dt=s[9],ft=s[13],pt=s[2],St=s[6],ht=s[10],Pt=s[14],vt=s[3],Vt=s[7],kt=s[11],Bt=s[15];return r[0]=o*R+a*_+c*pt+l*vt,r[4]=o*z+a*b+c*St+l*Vt,r[8]=o*C+a*dt+c*ht+l*kt,r[12]=o*_t+a*ft+c*Pt+l*Bt,r[1]=h*R+u*_+d*pt+f*vt,r[5]=h*z+u*b+d*St+f*Vt,r[9]=h*C+u*dt+d*ht+f*kt,r[13]=h*_t+u*ft+d*Pt+f*Bt,r[2]=x*R+y*_+p*pt+m*vt,r[6]=x*z+y*b+p*St+m*Vt,r[10]=x*C+y*dt+p*ht+m*kt,r[14]=x*_t+y*ft+p*Pt+m*Bt,r[3]=w*R+v*_+S*pt+K*vt,r[7]=w*z+v*b+S*St+K*Vt,r[11]=w*C+v*dt+S*ht+K*kt,r[15]=w*_t+v*ft+S*Pt+K*Bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],x=t[3],y=t[7],p=t[11],m=t[15];return x*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+y*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],x=t[12],y=t[13],p=t[14],m=t[15],w=u*p*l-y*d*l+y*c*f-a*p*f-u*c*m+a*d*m,v=x*d*l-h*p*l-x*c*f+o*p*f+h*c*m-o*d*m,S=h*y*l-x*u*l+x*a*f-o*y*f-h*a*m+o*u*m,K=x*u*c-h*y*c-x*a*d+o*y*d+h*a*p-o*u*p,R=e*w+n*v+s*S+r*K;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/R;return t[0]=w*z,t[1]=(y*d*r-u*p*r-y*s*f+n*p*f+u*s*m-n*d*m)*z,t[2]=(a*p*r-y*c*r+y*s*l-n*p*l-a*s*m+n*c*m)*z,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*z,t[4]=v*z,t[5]=(h*p*r-x*d*r+x*s*f-e*p*f-h*s*m+e*d*m)*z,t[6]=(x*c*r-o*p*r-x*s*l+e*p*l+o*s*m-e*c*m)*z,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*z,t[8]=S*z,t[9]=(x*u*r-h*y*r-x*n*f+e*y*f+h*n*m-e*u*m)*z,t[10]=(o*y*r-x*a*r+x*n*l-e*y*l-o*n*m+e*a*m)*z,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*z,t[12]=K*z,t[13]=(h*y*s-x*u*s+x*n*d-e*y*d-h*n*p+e*u*p)*z,t[14]=(x*a*s-o*y*s-x*n*c+e*y*c+o*n*p-e*a*p)*z,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,x=r*u,y=o*h,p=o*u,m=a*u,w=c*l,v=c*h,S=c*u,K=n.x,R=n.y,z=n.z;return s[0]=(1-(y+m))*K,s[1]=(f+S)*K,s[2]=(x-v)*K,s[3]=0,s[4]=(f-S)*R,s[5]=(1-(d+m))*R,s[6]=(p+w)*R,s[7]=0,s[8]=(x+v)*z,s[9]=(p-w)*z,s[10]=(1-(d+y))*z,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);let l=1/r,h=1/o,u=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=di){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,x;if(a===di)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Io)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=di){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,x,y;if(a===di)x=(o+r)*u,y=-2*u;else if(a===Io)x=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new L,Gn=new Pe,ef=new L(0,0,0),nf=new L(1,1,1),wi=new L,Yr=new L,An=new L,_h=new Pe,yh=new Ui,Dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sf=0,vh=new L,us=new Ui,ci=new Pe,Zr=new L,nr=new L,rf=new L,of=new Ui,Mh=new L(1,0,0),Eh=new L(0,1,0),Sh=new L(0,0,1),wh={type:"added"},af={type:"removed"},ds={type:"childadded",child:null},Oa={type:"childremoved",child:null},nn=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Dn,n=new Ui,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ee}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Mh,t)}rotateY(t){return this.rotateOnAxis(Eh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mh,t)}translateY(t){return this.translateOnAxis(Eh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zr.copy(t):Zr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(nr,Zr,this.up):ci.lookAt(Zr,nr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ci),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(af),Oa.child=t,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};nn.DEFAULT_UP=new L(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new L,li=new L,Ba=new L,hi=new L,fs=new L,ps=new L,bh=new L,Ha=new L,za=new L,ka=new L,Ga=new He,Va=new He,Wa=new He,Ri=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Vn.subVectors(s,e),li.subVectors(n,e),Ba.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(li),c=Vn.dot(Ba),l=li.dot(li),h=li.dot(Ba),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,x=(o*h-a*c)*d;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ga.setScalar(0),Va.setScalar(0),Wa.setScalar(0),Ga.fromBufferAttribute(t,e),Va.fromBufferAttribute(t,n),Wa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ga,r.x),o.addScaledVector(Va,r.y),o.addScaledVector(Wa,r.z),o}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),li.subVectors(t,e),Vn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Vn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;fs.subVectors(s,n),ps.subVectors(r,n),Ha.subVectors(t,n);let c=fs.dot(Ha),l=ps.dot(Ha);if(c<=0&&l<=0)return e.copy(n);za.subVectors(t,s);let h=fs.dot(za),u=ps.dot(za);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(fs,o);ka.subVectors(t,r);let f=fs.dot(ka),x=ps.dot(ka);if(x>=0&&f<=x)return e.copy(r);let y=f*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(ps,a);let p=h*x-f*u;if(p<=0&&u-h>=0&&f-x>=0)return bh.subVectors(r,s),a=(u-h)/(u-h+(f-x)),e.copy(s).addScaledVector(bh,a);let m=1/(p+y+d);return o=y*m,a=d*m,e.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var he=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ue.workingColorSpace){if(t=qd(t,1),e=an(e,0,1),n=an(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xa(o,r,t+1/3),this.g=Xa(o,r,t),this.b=Xa(o,r,t-1/3)}return Ue.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=Uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Ue.fromWorkingColorSpace(un.copy(this),t),Math.round(an(un.r*255,0,255))*65536+Math.round(an(un.g*255,0,255))*256+Math.round(an(un.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.fromWorkingColorSpace(un.copy(this),e);let n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=Ve){Ue.fromWorkingColorSpace(un.copy(this),t);let e=un.r,n=un.g,s=un.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Jr);let n=Aa(bi.h,Jr.h,e),s=Aa(bi.s,Jr.s,e),r=Aa(bi.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new he;he.NAMES=Uu;var cf=0,ni=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Ts,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ze=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var en=new L,$r=new It,Ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yc&&(t.usage=this.usage),t}};var No=class extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fo=class extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},lf=0,Pn=new Pe,qa=new nn,ms=new L,Rn=new Yn,ir=new Yn,on=new L,ke=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lu(t)?Fo:No)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return qa.lookAt(t),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Rn.min,ir.min),Rn.expandByPoint(on),on.addVectors(Rn.max,ir.max),Rn.expandByPoint(on)):(Rn.expandByPoint(ir.min),Rn.expandByPoint(ir.max))}Rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(t,l),on.add(ms)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;let l=new L,h=new L,u=new L,d=new It,f=new It,x=new It,y=new L,p=new L;function m(C,_t,_){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,_t),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,_t),x.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(d),x.sub(d);let b=1/(f.x*x.y-x.x*f.y);isFinite(b)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(b),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(b),a[C].add(y),a[_t].add(y),a[_].add(y),c[C].add(p),c[_t].add(p),c[_].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let C=0,_t=w.length;C<_t;++C){let _=w[C],b=_.start,dt=_.count;for(let ft=b,pt=b+dt;ft<pt;ft+=3)m(t.getX(ft+0),t.getX(ft+1),t.getX(ft+2))}let v=new L,S=new L,K=new L,R=new L;function z(C){K.fromBufferAttribute(s,C),R.copy(K);let _t=a[C];v.copy(_t),v.sub(K.multiplyScalar(K.dot(_t))).normalize(),S.crossVectors(R,_t);let b=S.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,b)}for(let C=0,_t=w.length;C<_t;++C){let _=w[C],b=_.start,dt=_.count;for(let ft=b,pt=b+dt;ft<pt;ft+=3)z(t.getX(ft+0)),z(t.getX(ft+1)),z(t.getX(ft+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let x=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,x=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let m=0;m<h;m++)d[x++]=l[f++]}return new Ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new Pe,Vi=new Ns,Kr=new gi,Ah=new L,Qr=new L,jr=new L,to=new L,Ya=new L,eo=new L,Rh=new L,no=new L,ct=class extends nn{constructor(t=new ke,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ya.fromBufferAttribute(u,t),o?eo.addScaledVector(Ya,h):eo.addScaledVector(Ya.sub(e),h))}e.add(eo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Kr.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Kr,Ah)===null||Vi.origin.distanceToSquared(Ah)>(t.far-t.near)**2))&&(Th.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Th),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){let p=d[x],m=o[p.materialIndex],w=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=w,K=v;S<K;S+=3){let R=a.getX(S),z=a.getX(S+1),C=a.getX(S+2);s=io(this,m,t,n,l,h,u,R,z,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let p=x,m=y;p<m;p+=3){let w=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);s=io(this,o,t,n,l,h,u,w,v,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){let p=d[x],m=o[p.materialIndex],w=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=w,K=v;S<K;S+=3){let R=S,z=S+1,C=S+2;s=io(this,m,t,n,l,h,u,R,z,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let p=x,m=y;p<m;p+=3){let w=p,v=p+1,S=p+2;s=io(this,o,t,n,l,h,u,w,v,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function hf(i,t,e,n,s,r,o,a){let c;if(t.side===dn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Di,a),c===null)return null;no.copy(a),no.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(no);return l<e.near||l>e.far?null:{distance:l,point:no.clone(),object:i}}function io(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Qr),i.getVertexPosition(c,jr),i.getVertexPosition(l,to);let h=hf(i,t,e,n,Qr,jr,to,Rh);if(h){let u=new L;Ri.getBarycoord(Rh,Qr,jr,to,u),s&&(h.uv=Ri.getInterpolatedAttribute(s,a,c,l,u,new It)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,a,c,l,u,new It)),o&&(h.normal=Ri.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};Ri.getNormal(Qr,jr,to,d.normal),h.face=d,h.barycoord=u}return h}var xe=class i extends ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function x(y,p,m,w,v,S,K,R,z,C,_t){let _=S/z,b=K/C,dt=S/2,ft=K/2,pt=R/2,St=z+1,ht=C+1,Pt=0,vt=0,Vt=new L;for(let kt=0;kt<ht;kt++){let Bt=kt*b-ft;for(let ge=0;ge<St;ge++){let Se=ge*_-dt;Vt[y]=Se*w,Vt[p]=Bt*v,Vt[m]=pt,l.push(Vt.x,Vt.y,Vt.z),Vt[y]=0,Vt[p]=0,Vt[m]=R>0?1:-1,h.push(Vt.x,Vt.y,Vt.z),u.push(ge/z),u.push(1-kt/C),Pt+=1}}for(let kt=0;kt<C;kt++)for(let Bt=0;Bt<z;Bt++){let ge=d+Bt+St*kt,Se=d+Bt+St*(kt+1),Et=d+(Bt+1)+St*(kt+1),Dt=d+(Bt+1)+St*kt;c.push(ge,Se,Dt),c.push(Se,Et,Dt),vt+=6}a.addGroup(f,vt,_t),f+=vt,d+=Pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=Fs(i[e]);for(let s in n)t[s]=n[s]}return t}function uf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}var df={clone:Fs,merge:vn},ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ff,this.fragmentShader=pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Oo=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new L,Ch=new It,Ph=new It,qe=class extends Oo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zc*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Ph),e.subVectors(Ph,Ch)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,xs=1,Qc=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(gs,xs,t,e);s.layers=this.layers,this.add(s);let r=new qe(gs,xs,t,e);r.layers=this.layers,this.add(r);let o=new qe(gs,xs,t,e);o.layers=this.layers,this.add(o);let a=new qe(gs,xs,t,e);a.layers=this.layers,this.add(a);let c=new qe(gs,xs,t,e);c.layers=this.layers,this.add(c);let l=new qe(gs,xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Bo=class extends pn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jc=class extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xe(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Ci});r.uniforms.tEquirect.value=e;let o=new ct(s,r),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Xn),new Qc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Za=new L,mf=new L,gf=new Ee,Wn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Za.subVectors(n,e).cross(mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gf.getNormalMatrix(t),s=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new gi,so=new L,_r=class{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],x=s[9],y=s[10],p=s[11],m=s[12],w=s[13],v=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,p-f,S-m).normalize(),n[1].setComponents(c+r,d+l,p+f,S+m).normalize(),n[2].setComponents(c+o,d+h,p+x,S+w).normalize(),n[3].setComponents(c-o,d-h,p-x,S-w).normalize(),n[4].setComponents(c-a,d-u,p-y,S-v).normalize(),e===di)n[5].setComponents(c+a,d+u,p+y,S+v).normalize();else if(e===Io)n[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xf(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],y=u[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let y=u[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ne=class i extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],x=[],y=[],p=[];for(let m=0;m<h;m++){let w=m*d-o;for(let v=0;v<l;v++){let S=v*u-r;x.push(S,-w,0),y.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){let v=w+l*m,S=w+l*(m+1),K=w+1+l*(m+1),R=w+1+l*m;f.push(v,S,R),f.push(S,K,R)}this.setIndex(f),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},_f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
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
#endif`,Af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kf=`#define PI 3.141592653589793
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
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`
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
}`,$f=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
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
#endif`,gp=`struct PhysicalMaterial {
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
}`,xp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
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
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
}`,bm=`#define DISTANCE
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
}`,Tm=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Lm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,Hm=`#define PHONG
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
}`,zm=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:_f,alphahash_pars_fragment:yf,alphamap_fragment:vf,alphamap_pars_fragment:Mf,alphatest_fragment:Ef,alphatest_pars_fragment:Sf,aomap_fragment:wf,aomap_pars_fragment:bf,batching_pars_vertex:Tf,batching_vertex:Af,begin_vertex:Rf,beginnormal_vertex:Cf,bsdfs:Pf,iridescence_fragment:If,bumpmap_pars_fragment:Df,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Ff,color_fragment:Of,color_pars_fragment:Bf,color_pars_vertex:Hf,color_vertex:zf,common:kf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Wf,displacementmap_vertex:Xf,emissivemap_fragment:qf,emissivemap_pars_fragment:Yf,colorspace_fragment:Zf,colorspace_pars_fragment:Jf,envmap_fragment:$f,envmap_common_pars_fragment:Kf,envmap_pars_fragment:Qf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:hp,envmap_vertex:tp,fog_vertex:ep,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_pars_fragment:op,lights_lambert_fragment:ap,lights_lambert_pars_fragment:cp,lights_pars_begin:lp,lights_toon_fragment:up,lights_toon_pars_fragment:dp,lights_phong_fragment:fp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:xp,lights_fragment_maps:_p,lights_fragment_end:yp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:Sp,map_fragment:wp,map_pars_fragment:bp,map_particle_fragment:Tp,map_particle_pars_fragment:Ap,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Pp,morphcolor_vertex:Ip,morphnormal_vertex:Dp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Up,normal_fragment_begin:Np,normal_fragment_maps:Fp,normal_pars_fragment:Op,normal_pars_vertex:Bp,normal_vertex:Hp,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:$p,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:sm,skinning_vertex:rm,skinnormal_vertex:om,specularmap_fragment:am,specularmap_pars_fragment:cm,tonemapping_fragment:lm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:dm,uv_pars_fragment:fm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:xm,background_frag:_m,backgroundCube_vert:ym,backgroundCube_frag:vm,cube_vert:Mm,cube_frag:Em,depth_vert:Sm,depth_frag:wm,distanceRGBA_vert:bm,distanceRGBA_frag:Tm,equirect_vert:Am,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Im,meshbasic_frag:Dm,meshlambert_vert:Lm,meshlambert_frag:Um,meshmatcap_vert:Nm,meshmatcap_frag:Fm,meshnormal_vert:Om,meshnormal_frag:Bm,meshphong_vert:Hm,meshphong_frag:zm,meshphysical_vert:km,meshphysical_frag:Gm,meshtoon_vert:Vm,meshtoon_frag:Wm,points_vert:Xm,points_frag:qm,shadow_vert:Ym,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:$m},Wt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ee}},envmap:{envMap:{value:null},envMapRotation:{value:new Ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ee},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}}},jn={basic:{uniforms:vn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:vn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new he(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:vn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:vn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:vn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new he(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:vn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:vn([Wt.points,Wt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:vn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:vn([Wt.common,Wt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:vn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:vn([Wt.sprite,Wt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ee}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:vn([Wt.common,Wt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:vn([Wt.lights,Wt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};jn.physical={uniforms:vn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ee},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ee},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ee},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ee},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ee},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ee}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};var ro={r:0,b:0,g:0},Xi=new Dn,Km=new Pe;function Qm(i,t,e,n,s,r,o){let a=new he(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function x(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?e:t).get(v)),v}function y(w){let v=!1,S=x(w);S===null?m(a,c):S&&S.isColor&&(m(S,1),v=!0);let K=i.xr.getEnvironmentBlendMode();K==="additive"?n.buffers.color.setClear(0,0,0,1,o):K==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,v){let S=x(v);S&&(S.isCubeTexture||S.mapping===ca)?(h===void 0&&(h=new ct(new xe(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Fs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(K,R,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xi.copy(v.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Xi)),h.material.toneMapped=Ue.getTransfer(S.colorSpace)!==Xe,(u!==S||d!==S.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ct(new Ne(2,2),new wn({name:"BackgroundMaterial",uniforms:Fs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ue.getTransfer(S.colorSpace)!==Xe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,v){w.getRGB(ro,Nu(i)),n.buffers.color.setClear(ro.r,ro.g,ro.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:y,addToRenderList:p}}function jm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(_,b,dt,ft,pt){let St=!1,ht=u(ft,dt,b);r!==ht&&(r=ht,l(r.object)),St=f(_,ft,dt,pt),St&&x(_,ft,dt,pt),pt!==null&&t.update(pt,i.ELEMENT_ARRAY_BUFFER),(St||o)&&(o=!1,S(_,b,dt,ft),pt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,b,dt){let ft=dt.wireframe===!0,pt=n[_.id];pt===void 0&&(pt={},n[_.id]=pt);let St=pt[b.id];St===void 0&&(St={},pt[b.id]=St);let ht=St[ft];return ht===void 0&&(ht=d(c()),St[ft]=ht),ht}function d(_){let b=[],dt=[],ft=[];for(let pt=0;pt<e;pt++)b[pt]=0,dt[pt]=0,ft[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:dt,attributeDivisors:ft,object:_,attributes:{},index:null}}function f(_,b,dt,ft){let pt=r.attributes,St=b.attributes,ht=0,Pt=dt.getAttributes();for(let vt in Pt)if(Pt[vt].location>=0){let kt=pt[vt],Bt=St[vt];if(Bt===void 0&&(vt==="instanceMatrix"&&_.instanceMatrix&&(Bt=_.instanceMatrix),vt==="instanceColor"&&_.instanceColor&&(Bt=_.instanceColor)),kt===void 0||kt.attribute!==Bt||Bt&&kt.data!==Bt.data)return!0;ht++}return r.attributesNum!==ht||r.index!==ft}function x(_,b,dt,ft){let pt={},St=b.attributes,ht=0,Pt=dt.getAttributes();for(let vt in Pt)if(Pt[vt].location>=0){let kt=St[vt];kt===void 0&&(vt==="instanceMatrix"&&_.instanceMatrix&&(kt=_.instanceMatrix),vt==="instanceColor"&&_.instanceColor&&(kt=_.instanceColor));let Bt={};Bt.attribute=kt,kt&&kt.data&&(Bt.data=kt.data),pt[vt]=Bt,ht++}r.attributes=pt,r.attributesNum=ht,r.index=ft}function y(){let _=r.newAttributes;for(let b=0,dt=_.length;b<dt;b++)_[b]=0}function p(_){m(_,0)}function m(_,b){let dt=r.newAttributes,ft=r.enabledAttributes,pt=r.attributeDivisors;dt[_]=1,ft[_]===0&&(i.enableVertexAttribArray(_),ft[_]=1),pt[_]!==b&&(i.vertexAttribDivisor(_,b),pt[_]=b)}function w(){let _=r.newAttributes,b=r.enabledAttributes;for(let dt=0,ft=b.length;dt<ft;dt++)b[dt]!==_[dt]&&(i.disableVertexAttribArray(dt),b[dt]=0)}function v(_,b,dt,ft,pt,St,ht){ht===!0?i.vertexAttribIPointer(_,b,dt,pt,St):i.vertexAttribPointer(_,b,dt,ft,pt,St)}function S(_,b,dt,ft){y();let pt=ft.attributes,St=dt.getAttributes(),ht=b.defaultAttributeValues;for(let Pt in St){let vt=St[Pt];if(vt.location>=0){let Vt=pt[Pt];if(Vt===void 0&&(Pt==="instanceMatrix"&&_.instanceMatrix&&(Vt=_.instanceMatrix),Pt==="instanceColor"&&_.instanceColor&&(Vt=_.instanceColor)),Vt!==void 0){let kt=Vt.normalized,Bt=Vt.itemSize,ge=t.get(Vt);if(ge===void 0)continue;let Se=ge.buffer,Et=ge.type,Dt=ge.bytesPerElement,Zt=Et===i.INT||Et===i.UNSIGNED_INT||Vt.gpuType===Ol;if(Vt.isInterleavedBufferAttribute){let Ht=Vt.data,ne=Ht.stride,ee=Vt.offset;if(Ht.isInstancedInterleavedBuffer){for(let re=0;re<vt.locationSize;re++)m(vt.location+re,Ht.meshPerAttribute);_.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Ht.meshPerAttribute*Ht.count)}else for(let re=0;re<vt.locationSize;re++)p(vt.location+re);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let re=0;re<vt.locationSize;re++)v(vt.location+re,Bt/vt.locationSize,Et,kt,ne*Dt,(ee+Bt/vt.locationSize*re)*Dt,Zt)}else{if(Vt.isInstancedBufferAttribute){for(let Ht=0;Ht<vt.locationSize;Ht++)m(vt.location+Ht,Vt.meshPerAttribute);_.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let Ht=0;Ht<vt.locationSize;Ht++)p(vt.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ht=0;Ht<vt.locationSize;Ht++)v(vt.location+Ht,Bt/vt.locationSize,Et,kt,Bt*Dt,Bt/vt.locationSize*Ht*Dt,Zt)}}else if(ht!==void 0){let kt=ht[Pt];if(kt!==void 0)switch(kt.length){case 2:i.vertexAttrib2fv(vt.location,kt);break;case 3:i.vertexAttrib3fv(vt.location,kt);break;case 4:i.vertexAttrib4fv(vt.location,kt);break;default:i.vertexAttrib1fv(vt.location,kt)}}}}w()}function K(){C();for(let _ in n){let b=n[_];for(let dt in b){let ft=b[dt];for(let pt in ft)h(ft[pt].object),delete ft[pt];delete b[dt]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;let b=n[_.id];for(let dt in b){let ft=b[dt];for(let pt in ft)h(ft[pt].object),delete ft[pt];delete b[dt]}delete n[_.id]}function z(_){for(let b in n){let dt=n[b];if(dt[_.id]===void 0)continue;let ft=dt[_.id];for(let pt in ft)h(ft[pt].object),delete ft[pt];delete dt[_.id]}}function C(){_t(),o=!0,r!==s&&(r=s,l(r.object))}function _t(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:_t,dispose:K,releaseStatesOfGeometry:R,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:p,disableUnusedAttributes:w}}function t0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)o(l[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let x=0;for(let y=0;y<u;y++)x+=h[y];for(let y=0;y<d.length;y++)e.update(x,n,d[y])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function e0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let z=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(z){return!(z!==qn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(z){let C=z===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==pi&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ei&&!C)}function c(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let z=t.get("EXT_clip_control");z.clipControlEXT(z.LOWER_LEFT_EXT,z.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),K=x>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:K,maxSamples:R}}function n0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Wn,a=new Ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||x===null||x.length===0||r&&!p)r?h(null):l();else{let w=r?0:n,v=w*4,S=m.clippingState||null;c.value=S,S=h(x,d,v,f);for(let K=0;K!==v;++K)S[K]=e[K];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,x){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=c.value,x!==!0||p===null){let m=f+y*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=f;v!==y;++v,S+=4)o.copy(u[v]).applyMatrix4(w,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function i0(i){let t=new WeakMap;function e(o,a){return a===xc?o.mapping=Is:a===_c&&(o.mapping=Ds),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xc||a===_c)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new jc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ho=class extends Oo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ws=4,Ih=[.125,.215,.35,.446,.526,.582],Ji=20,Ja=new Ho,Dh=new he,$a=null,Ka=0,Qa=0,ja=!1,Yi=(1+Math.sqrt(5))/2,_s=1/Yi,Lh=[new L(-Yi,_s,0),new L(Yi,_s,0),new L(-_s,0,Yi),new L(_s,0,Yi),new L(0,Yi,-_s),new L(0,Yi,_s),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Os=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Ka,Qa),this._renderer.xr.enabled=ja,t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Ir,format:qn,colorSpace:Fi,depthBuffer:!1},s=Uh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s0(r)),this._blurMaterial=r0(r,t,e)}return s}_compileMaterial(t){let e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,n,s){let a=new qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dh),h.toneMapping=Pi,h.autoClear=!1;let f=new ze({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new ct(new xe,f),y=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,y=!0):(f.color.copy(Dh),y=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let v=this._cubeSize;oo(s,w*v,m>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Is||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;oo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lh[(s-r-1)%Lh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ct(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),y=r/x,p=isFinite(r)?1+Math.floor(h*y):Ji;p>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);let m=[],w=0;for(let z=0;z<Ji;++z){let C=z/y,_t=Math.exp(-C*C/2);m.push(_t),z===0?w+=_t:z<p&&(w+=2*_t)}for(let z=0;z<m.length;z++)m[z]=m[z]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-n;let S=this._sizeLods[s],K=3*S*(s>v-ws?s-v+ws:0),R=4*(this._cubeSize-S);oo(e,K,R,3*S,2*S),c.setRenderTarget(e),c.render(u,Ja)}};function s0(i){let t=[],e=[],n=[],s=i,r=i-ws+1+Ih.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ws?c=Ih[o-i+ws-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,y=3,p=2,m=1,w=new Float32Array(y*x*f),v=new Float32Array(p*x*f),S=new Float32Array(m*x*f);for(let R=0;R<f;R++){let z=R%3*2/3-1,C=R>2?0:-1,_t=[z,C,0,z+2/3,C,0,z+2/3,C+1,0,z,C,0,z+2/3,C+1,0,z,C+1,0];w.set(_t,y*x*R),v.set(d,p*x*R);let _=[R,R,R,R,R,R];S.set(_,m*x*R)}let K=new ke;K.setAttribute("position",new Ke(w,y)),K.setAttribute("uv",new Ke(v,p)),K.setAttribute("faceIndex",new Ke(S,m)),t.push(K),s>ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uh(i,t,e){let n=new mi(i,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function r0(i,t,e){let n=new Float32Array(Ji),s=new L(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Nh(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Fh(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Xl(){return`

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
	`}function o0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===xc||c===_c,h=c===Is||c===Ds;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Os(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Os(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function a0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&To("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function c0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let y=d.morphAttributes[x];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let y=f[x];for(let p=0,m=y.length;p<m;p++)t.update(y[p],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,x=u.attributes.position,y=0;if(f!==null){let w=f.array;y=f.version;for(let v=0,S=w.length;v<S;v+=3){let K=w[v+0],R=w[v+1],z=w[v+2];d.push(K,R,R,z,z,K)}}else if(x!==void 0){let w=x.array;y=x.version;for(let v=0,S=w.length/3-1;v<S;v+=3){let K=v+0,R=v+1,z=v+2;d.push(K,R,R,z,z,K)}}else return;let p=new(Lu(d)?Fo:No)(d,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function l0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,d*o,x),e.update(f,n,x))}function h(d,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let p=0;for(let m=0;m<x;m++)p+=f[m];e.update(p,n,1)}function u(d,f,x,y){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,x);let m=0;for(let w=0;w<x;w++)m+=f[w];for(let w=0;w<y.length;w++)e.update(m,n,y[w])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function h0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function u0(i,t,e){let n=new WeakMap,s=new He;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let _t=function(){z.dispose(),n.delete(a),a.removeEventListener("dispose",_t)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],v=0;f===!0&&(v=1),x===!0&&(v=2),y===!0&&(v=3);let S=a.attributes.position.count*v,K=1;S>t.maxTextureSize&&(K=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let R=new Float32Array(S*K*4*u),z=new Uo(R,S,K,u);z.type=ei,z.needsUpdate=!0;let C=v*4;for(let _=0;_<u;_++){let b=p[_],dt=m[_],ft=w[_],pt=S*K*4*_;for(let St=0;St<b.count;St++){let ht=St*C;f===!0&&(s.fromBufferAttribute(b,St),R[pt+ht+0]=s.x,R[pt+ht+1]=s.y,R[pt+ht+2]=s.z,R[pt+ht+3]=0),x===!0&&(s.fromBufferAttribute(dt,St),R[pt+ht+4]=s.x,R[pt+ht+5]=s.y,R[pt+ht+6]=s.z,R[pt+ht+7]=0),y===!0&&(s.fromBufferAttribute(ft,St),R[pt+ht+8]=s.x,R[pt+ht+9]=s.y,R[pt+ht+10]=s.z,R[pt+ht+11]=ft.itemSize===4?s.w:1)}}d={count:u,texture:z,size:new It(S,K)},n.set(a,d),a.addEventListener("dispose",_t)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let x=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function d0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var zo=class extends pn{constructor(t,e,n,s,r,o,a,c,l,h=As){if(h!==As&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=Qi),n===void 0&&h===Us&&(n=Ls),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ou=new pn,Oh=new zo(1,1),Bu=new Uo,Hu=new Kc,zu=new Bo,Bh=[],Hh=[],zh=new Float32Array(16),kh=new Float32Array(9),Gh=new Float32Array(4);function zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bh[s];if(r===void 0&&(r=new Float32Array(s),Bh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function sn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ha(i,t){let e=Hh[t];e===void 0&&(e=new Int32Array(t),Hh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function f0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2fv(this.addr,t),rn(e,t)}}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;i.uniform3fv(this.addr,t),rn(e,t)}}function g0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4fv(this.addr,t),rn(e,t)}}function x0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;Gh.set(n),i.uniformMatrix2fv(this.addr,!1,Gh),rn(e,n)}}function _0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;kh.set(n),i.uniformMatrix3fv(this.addr,!1,kh),rn(e,n)}}function y0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),rn(e,n)}}function v0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function M0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2iv(this.addr,t),rn(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3iv(this.addr,t),rn(e,t)}}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4iv(this.addr,t),rn(e,t)}}function w0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2uiv(this.addr,t),rn(e,t)}}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3uiv(this.addr,t),rn(e,t)}}function A0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4uiv(this.addr,t),rn(e,t)}}function R0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oh.compareFunction=Du,r=Oh):r=Ou,e.setTexture2D(t||r,s)}function C0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hu,s)}function P0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zu,s)}function I0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bu,s)}function D0(i){switch(i){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return x0;case 35675:return _0;case 35676:return y0;case 5124:case 35670:return v0;case 35667:case 35671:return M0;case 35668:case 35672:return E0;case 35669:case 35673:return S0;case 5125:return w0;case 36294:return b0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}function L0(i,t){i.uniform1fv(this.addr,t)}function U0(i,t){let e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function N0(i,t){let e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function F0(i,t){let e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function O0(i,t){let e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function B0(i,t){let e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function H0(i,t){let e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function z0(i,t){i.uniform1iv(this.addr,t)}function k0(i,t){i.uniform2iv(this.addr,t)}function G0(i,t){i.uniform3iv(this.addr,t)}function V0(i,t){i.uniform4iv(this.addr,t)}function W0(i,t){i.uniform1uiv(this.addr,t)}function X0(i,t){i.uniform2uiv(this.addr,t)}function q0(i,t){i.uniform3uiv(this.addr,t)}function Y0(i,t){i.uniform4uiv(this.addr,t)}function Z0(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ou,r[o])}function J0(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hu,r[o])}function $0(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zu,r[o])}function K0(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bu,r[o])}function Q0(i){switch(i){case 5126:return L0;case 35664:return U0;case 35665:return N0;case 35666:return F0;case 35674:return O0;case 35675:return B0;case 35676:return H0;case 5124:case 35670:return z0;case 35667:case 35671:return k0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return K0}}var tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=D0(e.type)}},el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Q0(e.type)}},nl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function Vh(i,t){i.seq.push(t),i.map[t.id]=t}function j0(i,t,e){let n=i.name,s=n.length;for(tc.lastIndex=0;;){let r=tc.exec(n),o=tc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Vh(e,l===void 0?new tl(a,i,t):new el(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new nl(a),Vh(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);j0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Wh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var tg=37297,eg=0;function ng(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ig(i){let t=Ue.getPrimaries(Ue.workingColorSpace),e=Ue.getPrimaries(i),n;switch(t===e?n="":t===Po&&e===Co?n="LinearDisplayP3ToLinearSRGB":t===Co&&e===Po&&(n="LinearSRGBToLinearDisplayP3"),i){case Fi:case la:return[n,"LinearTransferOETF"];case Ve:case Wl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Xh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ng(i.getShaderSource(t),o)}else return s}function sg(i,t){let e=ig(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rg(i,t){let e;switch(t){case Pd:e="Linear";break;case Id:e="Reinhard";break;case Dd:e="Cineon";break;case Nl:e="ACESFilmic";break;case Ud:e="AgX";break;case Fl:e="Neutral";break;case Ld:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ao=new L;function og(){Ue.getLuminanceCoefficients(ao);let i=ao.x.toFixed(4),t=ao.y.toFixed(4),e=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function cg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ur(i){return i!==""}function qh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(hg,dg)}var ug=new Map;function dg(i,t){let e=Me[t];if(e===void 0){let n=ug.get(t);if(n!==void 0)e=Me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}var fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(i){return i.replace(fg,pg)}function pg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function mg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ul?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Is:case Ds:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ds&&(t="ENVMAP_MODE_REFRACTION"),t}function _g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vu:t="ENVMAP_BLENDING_MULTIPLY";break;case Rd:t="ENVMAP_BLENDING_MIX";break;case Cd:t="ENVMAP_BLENDING_ADD";break}return t}function yg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=mg(e),l=gg(e),h=xg(e),u=_g(e),d=yg(e),f=ag(e),x=cg(r),y=s.createProgram(),p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ur).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ur).join(`
`),m.length>0&&(m+=`
`)):(p=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),m=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?Me.tonemapping_pars_fragment:"",e.toneMapping!==Pi?rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),o=il(o),o=qh(o,e),o=Yh(o,e),a=il(a),a=qh(a,e),a=Yh(a,e),o=Zh(o),a=Zh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=w+p+o,S=w+m+a,K=Wh(s,s.VERTEX_SHADER,v),R=Wh(s,s.FRAGMENT_SHADER,S);s.attachShader(y,K),s.attachShader(y,R),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function z(b){if(i.debug.checkShaderErrors){let dt=s.getProgramInfoLog(y).trim(),ft=s.getShaderInfoLog(K).trim(),pt=s.getShaderInfoLog(R).trim(),St=!0,ht=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(St=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,K,R);else{let Pt=Xh(s,K,"vertex"),vt=Xh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+dt+`
`+Pt+`
`+vt)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(ft===""||pt==="")&&(ht=!1);ht&&(b.diagnostics={runnable:St,programLog:dt,vertexShader:{log:ft,prefix:p},fragmentShader:{log:pt,prefix:m}})}s.deleteShader(K),s.deleteShader(R),C=new Cs(s,y),_t=lg(s,y)}let C;this.getUniforms=function(){return C===void 0&&z(this),C};let _t;this.getAttributes=function(){return _t===void 0&&z(this),_t};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,tg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=K,this.fragmentShader=R,this}var Mg=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rl(t),e.set(t,n)),n}},rl=class{constructor(t){this.id=Mg++,this.code=t,this.usedTimes=0}};function Eg(i,t,e,n,s,r,o){let a=new xr,c=new sl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,x=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,b,dt,ft,pt){let St=ft.fog,ht=pt.geometry,Pt=_.isMeshStandardMaterial?ft.environment:null,vt=(_.isMeshStandardMaterial?e:t).get(_.envMap||Pt),Vt=vt&&vt.mapping===ca?vt.image.height:null,kt=y[_.type];_.precision!==null&&(x=s.getMaxPrecision(_.precision),x!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",x,"instead."));let Bt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,ge=Bt!==void 0?Bt.length:0,Se=0;ht.morphAttributes.position!==void 0&&(Se=1),ht.morphAttributes.normal!==void 0&&(Se=2),ht.morphAttributes.color!==void 0&&(Se=3);let Et,Dt,Zt,Ht;if(kt){let Ae=jn[kt];Et=Ae.vertexShader,Dt=Ae.fragmentShader}else Et=_.vertexShader,Dt=_.fragmentShader,c.update(_),Zt=c.getVertexShaderID(_),Ht=c.getFragmentShaderID(_);let ne=i.getRenderTarget(),ee=pt.isInstancedMesh===!0,re=pt.isBatchedMesh===!0,ue=!!_.map,wt=!!_.matcap,F=!!vt,Ot=!!_.aoMap,Z=!!_.lightMap,Rt=!!_.bumpMap,Nt=!!_.normalMap,Kt=!!_.displacementMap,Xt=!!_.emissiveMap,D=!!_.metalnessMap,M=!!_.roughnessMap,ot=_.anisotropy>0,tt=_.clearcoat>0,bt=_.dispersion>0,Mt=_.iridescence>0,Jt=_.sheen>0,zt=_.transmission>0,Yt=ot&&!!_.anisotropyMap,_e=tt&&!!_.clearcoatMap,Lt=tt&&!!_.clearcoatNormalMap,Gt=tt&&!!_.clearcoatRoughnessMap,oe=Mt&&!!_.iridescenceMap,ae=Mt&&!!_.iridescenceThicknessMap,$t=Jt&&!!_.sheenColorMap,we=Jt&&!!_.sheenRoughnessMap,J=!!_.specularMap,nt=!!_.specularColorMap,T=!!_.specularIntensityMap,et=zt&&!!_.transmissionMap,O=zt&&!!_.thicknessMap,Q=!!_.gradientMap,Tt=!!_.alphaMap,At=_.alphaTest>0,Qt=!!_.alphaHash,ce=!!_.extensions,fe=Pi;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(fe=i.toneMapping);let te={shaderID:kt,shaderType:_.type,shaderName:_.name,vertexShader:Et,fragmentShader:Dt,defines:_.defines,customVertexShaderID:Zt,customFragmentShaderID:Ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:x,batching:re,batchingColor:re&&pt._colorsTexture!==null,instancing:ee,instancingColor:ee&&pt.instanceColor!==null,instancingMorph:ee&&pt.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Fi,alphaToCoverage:!!_.alphaToCoverage,map:ue,matcap:wt,envMap:F,envMapMode:F&&vt.mapping,envMapCubeUVHeight:Vt,aoMap:Ot,lightMap:Z,bumpMap:Rt,normalMap:Nt,displacementMap:f&&Kt,emissiveMap:Xt,normalMapObjectSpace:Nt&&_.normalMapType===Bd,normalMapTangentSpace:Nt&&_.normalMapType===Iu,metalnessMap:D,roughnessMap:M,anisotropy:ot,anisotropyMap:Yt,clearcoat:tt,clearcoatMap:_e,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Gt,dispersion:bt,iridescence:Mt,iridescenceMap:oe,iridescenceThicknessMap:ae,sheen:Jt,sheenColorMap:$t,sheenRoughnessMap:we,specularMap:J,specularColorMap:nt,specularIntensityMap:T,transmission:zt,transmissionMap:et,thicknessMap:O,gradientMap:Q,opaque:_.transparent===!1&&_.blending===Ts&&_.alphaToCoverage===!1,alphaMap:Tt,alphaTest:At,alphaHash:Qt,combine:_.combine,mapUv:ue&&p(_.map.channel),aoMapUv:Ot&&p(_.aoMap.channel),lightMapUv:Z&&p(_.lightMap.channel),bumpMapUv:Rt&&p(_.bumpMap.channel),normalMapUv:Nt&&p(_.normalMap.channel),displacementMapUv:Kt&&p(_.displacementMap.channel),emissiveMapUv:Xt&&p(_.emissiveMap.channel),metalnessMapUv:D&&p(_.metalnessMap.channel),roughnessMapUv:M&&p(_.roughnessMap.channel),anisotropyMapUv:Yt&&p(_.anisotropyMap.channel),clearcoatMapUv:_e&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(_.sheenRoughnessMap.channel),specularMapUv:J&&p(_.specularMap.channel),specularColorMapUv:nt&&p(_.specularColorMap.channel),specularIntensityMapUv:T&&p(_.specularIntensityMap.channel),transmissionMapUv:et&&p(_.transmissionMap.channel),thicknessMapUv:O&&p(_.thicknessMap.channel),alphaMapUv:Tt&&p(_.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Nt||ot),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:pt.isPoints===!0&&!!ht.attributes.uv&&(ue||Tt),fog:!!St,useFog:_.fog===!0,fogExp2:!!St&&St.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:pt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&dt.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:ue&&_.map.isVideoTexture===!0&&Ue.getTransfer(_.map.colorSpace)===Xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===In,flipSided:_.side===dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function w(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let dt in _.defines)b.push(dt),b.push(_.defines[dt]);return _.isRawShaderMaterial===!1&&(v(b,_),S(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function v(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function S(_,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),_.push(a.mask)}function K(_){let b=y[_.type],dt;if(b){let ft=jn[b];dt=df.clone(ft.uniforms)}else dt=_.uniforms;return dt}function R(_,b){let dt;for(let ft=0,pt=h.length;ft<pt;ft++){let St=h[ft];if(St.cacheKey===b){dt=St,++dt.usedTimes;break}}return dt===void 0&&(dt=new vg(i,b,_,r),h.push(dt)),dt}function z(_){if(--_.usedTimes===0){let b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function C(_){c.remove(_)}function _t(){c.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:K,acquireProgram:R,releaseProgram:z,releaseShaderCache:C,programs:h,dispose:_t}}function Sg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,x,y,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:y,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=y,m.group=p),t++,m}function a(u,d,f,x,y,p){let m=o(u,d,f,x,y,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(u,d,f,x,y,p){let m=o(u,d,f,x,y,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||wg),n.length>1&&n.sort(d||$h),s.length>1&&s.sort(d||$h)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function bg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Kh,i.set(n,[o])):s>=r.length?(o=new Kh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new he};break;case"SpotLight":e={position:new L,direction:new L,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Ag(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Rg=0;function Cg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pg(i){let t=new Tg,e=Ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Pe,o=new Pe;function a(l){let h=0,u=0,d=0;for(let _t=0;_t<9;_t++)n.probe[_t].set(0,0,0);let f=0,x=0,y=0,p=0,m=0,w=0,v=0,S=0,K=0,R=0,z=0;l.sort(Cg);for(let _t=0,_=l.length;_t<_;_t++){let b=l[_t],dt=b.color,ft=b.intensity,pt=b.distance,St=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=dt.r*ft,u+=dt.g*ft,d+=dt.b*ft;else if(b.isLightProbe){for(let ht=0;ht<9;ht++)n.probe[ht].addScaledVector(b.sh.coefficients[ht],ft);z++}else if(b.isDirectionalLight){let ht=t.get(b);if(ht.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let Pt=b.shadow,vt=e.get(b);vt.shadowIntensity=Pt.intensity,vt.shadowBias=Pt.bias,vt.shadowNormalBias=Pt.normalBias,vt.shadowRadius=Pt.radius,vt.shadowMapSize=Pt.mapSize,n.directionalShadow[f]=vt,n.directionalShadowMap[f]=St,n.directionalShadowMatrix[f]=b.shadow.matrix,w++}n.directional[f]=ht,f++}else if(b.isSpotLight){let ht=t.get(b);ht.position.setFromMatrixPosition(b.matrixWorld),ht.color.copy(dt).multiplyScalar(ft),ht.distance=pt,ht.coneCos=Math.cos(b.angle),ht.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),ht.decay=b.decay,n.spot[y]=ht;let Pt=b.shadow;if(b.map&&(n.spotLightMap[K]=b.map,K++,Pt.updateMatrices(b),b.castShadow&&R++),n.spotLightMatrix[y]=Pt.matrix,b.castShadow){let vt=e.get(b);vt.shadowIntensity=Pt.intensity,vt.shadowBias=Pt.bias,vt.shadowNormalBias=Pt.normalBias,vt.shadowRadius=Pt.radius,vt.shadowMapSize=Pt.mapSize,n.spotShadow[y]=vt,n.spotShadowMap[y]=St,S++}y++}else if(b.isRectAreaLight){let ht=t.get(b);ht.color.copy(dt).multiplyScalar(ft),ht.halfWidth.set(b.width*.5,0,0),ht.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=ht,p++}else if(b.isPointLight){let ht=t.get(b);if(ht.color.copy(b.color).multiplyScalar(b.intensity),ht.distance=b.distance,ht.decay=b.decay,b.castShadow){let Pt=b.shadow,vt=e.get(b);vt.shadowIntensity=Pt.intensity,vt.shadowBias=Pt.bias,vt.shadowNormalBias=Pt.normalBias,vt.shadowRadius=Pt.radius,vt.shadowMapSize=Pt.mapSize,vt.shadowCameraNear=Pt.camera.near,vt.shadowCameraFar=Pt.camera.far,n.pointShadow[x]=vt,n.pointShadowMap[x]=St,n.pointShadowMatrix[x]=b.shadow.matrix,v++}n.point[x]=ht,x++}else if(b.isHemisphereLight){let ht=t.get(b);ht.skyColor.copy(b.color).multiplyScalar(ft),ht.groundColor.copy(b.groundColor).multiplyScalar(ft),n.hemi[m]=ht,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==x||C.spotLength!==y||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==w||C.numPointShadows!==v||C.numSpotShadows!==S||C.numSpotMaps!==K||C.numLightProbes!==z)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=p,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+K-R,n.spotLightMap.length=K,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=z,C.directionalLength=f,C.pointLength=x,C.spotLength=y,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=w,C.numPointShadows=v,C.numSpotShadows=S,C.numSpotMaps=K,C.numLightProbes=z,n.version=Rg++)}function c(l,h){let u=0,d=0,f=0,x=0,y=0,p=h.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){let v=l[m];if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(v.isSpotLight){let S=n.spot[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),y++}}}return{setup:a,setupView:c,state:n}}function Qh(i){let t=new Pg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ig(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Qh(i),t.set(s,[a])):r>=o.length?(a=new Qh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ol=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},al=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lg=`uniform sampler2D shadow_pass;
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
}`;function Ug(i,t,e){let n=new _r,s=new It,r=new It,o=new He,a=new ol({depthPacking:Od}),c=new al,l={},h=e.maxTextureSize,u={[Di]:dn,[dn]:Di,[In]:In},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Dg,fragmentShader:Lg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new ke;x.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ct(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let m=this.type;this.render=function(R,z,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let _t=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),dt=i.state;dt.setBlending(Ci),dt.buffers.color.setClear(1,1,1,1),dt.buffers.depth.setTest(!0),dt.setScissorTest(!1);let ft=m!==ui&&this.type===ui,pt=m===ui&&this.type!==ui;for(let St=0,ht=R.length;St<ht;St++){let Pt=R[St],vt=Pt.shadow;if(vt===void 0){console.warn("THREE.WebGLShadowMap:",Pt,"has no shadow.");continue}if(vt.autoUpdate===!1&&vt.needsUpdate===!1)continue;s.copy(vt.mapSize);let Vt=vt.getFrameExtents();if(s.multiply(Vt),r.copy(vt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Vt.x),s.x=r.x*Vt.x,vt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Vt.y),s.y=r.y*Vt.y,vt.mapSize.y=r.y)),vt.map===null||ft===!0||pt===!0){let Bt=this.type!==ui?{minFilter:Sn,magFilter:Sn}:{};vt.map!==null&&vt.map.dispose(),vt.map=new mi(s.x,s.y,Bt),vt.map.texture.name=Pt.name+".shadowMap",vt.camera.updateProjectionMatrix()}i.setRenderTarget(vt.map),i.clear();let kt=vt.getViewportCount();for(let Bt=0;Bt<kt;Bt++){let ge=vt.getViewport(Bt);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),dt.viewport(o),vt.updateMatrices(Pt,Bt),n=vt.getFrustum(),S(z,C,vt.camera,Pt,this.type)}vt.isPointLightShadow!==!0&&this.type===ui&&w(vt,C),vt.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(_t,_,b)};function w(R,z){let C=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(z,null,C,d,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(z,null,C,f,y,null)}function v(R,z,C,_t){let _=null,b=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)_=b;else if(_=C.isPointLight===!0?c:a,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){let dt=_.uuid,ft=z.uuid,pt=l[dt];pt===void 0&&(pt={},l[dt]=pt);let St=pt[ft];St===void 0&&(St=_.clone(),pt[ft]=St,z.addEventListener("dispose",K)),_=St}if(_.visible=z.visible,_.wireframe=z.wireframe,_t===ui?_.side=z.shadowSide!==null?z.shadowSide:z.side:_.side=z.shadowSide!==null?z.shadowSide:u[z.side],_.alphaMap=z.alphaMap,_.alphaTest=z.alphaTest,_.map=z.map,_.clipShadows=z.clipShadows,_.clippingPlanes=z.clippingPlanes,_.clipIntersection=z.clipIntersection,_.displacementMap=z.displacementMap,_.displacementScale=z.displacementScale,_.displacementBias=z.displacementBias,_.wireframeLinewidth=z.wireframeLinewidth,_.linewidth=z.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let dt=i.properties.get(_);dt.light=C}return _}function S(R,z,C,_t,_){if(R.visible===!1)return;if(R.layers.test(z.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===ui)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);let ft=t.update(R),pt=R.material;if(Array.isArray(pt)){let St=ft.groups;for(let ht=0,Pt=St.length;ht<Pt;ht++){let vt=St[ht],Vt=pt[vt.materialIndex];if(Vt&&Vt.visible){let kt=v(R,Vt,_t,_);R.onBeforeShadow(i,R,z,C,ft,kt,vt),i.renderBufferDirect(C,null,ft,kt,R,vt),R.onAfterShadow(i,R,z,C,ft,kt,vt)}}}else if(pt.visible){let St=v(R,pt,_t,_);R.onBeforeShadow(i,R,z,C,ft,St,null),i.renderBufferDirect(C,null,ft,St,R,null),R.onAfterShadow(i,R,z,C,ft,St,null)}}let dt=R.children;for(let ft=0,pt=dt.length;ft<pt;ft++)S(dt[ft],z,C,_t,_)}function K(R){R.target.removeEventListener("dispose",K);for(let C in l){let _t=l[C],_=R.target.uuid;_ in _t&&(_t[_].dispose(),delete _t[_])}}}var Ng={[hc]:uc,[dc]:mc,[fc]:gc,[Ps]:pc,[uc]:hc,[mc]:dc,[gc]:fc,[pc]:Ps};function Fg(i){function t(){let T=!1,et=new He,O=null,Q=new He(0,0,0,0);return{setMask:function(Tt){O!==Tt&&!T&&(i.colorMask(Tt,Tt,Tt,Tt),O=Tt)},setLocked:function(Tt){T=Tt},setClear:function(Tt,At,Qt,ce,fe){fe===!0&&(Tt*=ce,At*=ce,Qt*=ce),et.set(Tt,At,Qt,ce),Q.equals(et)===!1&&(i.clearColor(Tt,At,Qt,ce),Q.copy(et))},reset:function(){T=!1,O=null,Q.set(-1,0,0,0)}}}function e(){let T=!1,et=!1,O=null,Q=null,Tt=null;return{setReversed:function(At){et=At},setTest:function(At){At?Zt(i.DEPTH_TEST):Ht(i.DEPTH_TEST)},setMask:function(At){O!==At&&!T&&(i.depthMask(At),O=At)},setFunc:function(At){if(et&&(At=Ng[At]),Q!==At){switch(At){case hc:i.depthFunc(i.NEVER);break;case uc:i.depthFunc(i.ALWAYS);break;case dc:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case fc:i.depthFunc(i.EQUAL);break;case pc:i.depthFunc(i.GEQUAL);break;case mc:i.depthFunc(i.GREATER);break;case gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=At}},setLocked:function(At){T=At},setClear:function(At){Tt!==At&&(i.clearDepth(At),Tt=At)},reset:function(){T=!1,O=null,Q=null,Tt=null}}}function n(){let T=!1,et=null,O=null,Q=null,Tt=null,At=null,Qt=null,ce=null,fe=null;return{setTest:function(te){T||(te?Zt(i.STENCIL_TEST):Ht(i.STENCIL_TEST))},setMask:function(te){et!==te&&!T&&(i.stencilMask(te),et=te)},setFunc:function(te,Ae,be){(O!==te||Q!==Ae||Tt!==be)&&(i.stencilFunc(te,Ae,be),O=te,Q=Ae,Tt=be)},setOp:function(te,Ae,be){(At!==te||Qt!==Ae||ce!==be)&&(i.stencilOp(te,Ae,be),At=te,Qt=Ae,ce=be)},setLocked:function(te){T=te},setClear:function(te){fe!==te&&(i.clearStencil(te),fe=te)},reset:function(){T=!1,et=null,O=null,Q=null,Tt=null,At=null,Qt=null,ce=null,fe=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],f=null,x=!1,y=null,p=null,m=null,w=null,v=null,S=null,K=null,R=new he(0,0,0),z=0,C=!1,_t=null,_=null,b=null,dt=null,ft=null,pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),St=!1,ht=0,Pt=i.getParameter(i.VERSION);Pt.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Pt)[1]),St=ht>=1):Pt.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Pt)[1]),St=ht>=2);let vt=null,Vt={},kt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ge=new He().fromArray(kt),Se=new He().fromArray(Bt);function Et(T,et,O,Q){let Tt=new Uint8Array(4),At=i.createTexture();i.bindTexture(T,At),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<O;Qt++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(et+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return At}let Dt={};Dt[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Zt(i.DEPTH_TEST),r.setFunc(Ps),Z(!1),Rt(oh),Zt(i.CULL_FACE),F(Ci);function Zt(T){l[T]!==!0&&(i.enable(T),l[T]=!0)}function Ht(T){l[T]!==!1&&(i.disable(T),l[T]=!1)}function ne(T,et){return h[T]!==et?(i.bindFramebuffer(T,et),h[T]=et,T===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=et),T===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=et),!0):!1}function ee(T,et){let O=d,Q=!1;if(T){O=u.get(et),O===void 0&&(O=[],u.set(et,O));let Tt=T.textures;if(O.length!==Tt.length||O[0]!==i.COLOR_ATTACHMENT0){for(let At=0,Qt=Tt.length;At<Qt;At++)O[At]=i.COLOR_ATTACHMENT0+At;O.length=Tt.length,Q=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,Q=!0);Q&&i.drawBuffers(O)}function re(T){return f!==T?(i.useProgram(T),f=T,!0):!1}let ue={[Zi]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[dd]:i.FUNC_REVERSE_SUBTRACT};ue[fd]=i.MIN,ue[pd]=i.MAX;let wt={[md]:i.ZERO,[gd]:i.ONE,[xd]:i.SRC_COLOR,[cc]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[yd]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[vd]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[bd]:i.ONE_MINUS_CONSTANT_COLOR,[Td]:i.CONSTANT_ALPHA,[Ad]:i.ONE_MINUS_CONSTANT_ALPHA};function F(T,et,O,Q,Tt,At,Qt,ce,fe,te){if(T===Ci){x===!0&&(Ht(i.BLEND),x=!1);return}if(x===!1&&(Zt(i.BLEND),x=!0),T!==hd){if(T!==y||te!==C){if((p!==Zi||v!==Zi)&&(i.blendEquation(i.FUNC_ADD),p=Zi,v=Zi),te)switch(T){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}m=null,w=null,S=null,K=null,R.set(0,0,0),z=0,y=T,C=te}return}Tt=Tt||et,At=At||O,Qt=Qt||Q,(et!==p||Tt!==v)&&(i.blendEquationSeparate(ue[et],ue[Tt]),p=et,v=Tt),(O!==m||Q!==w||At!==S||Qt!==K)&&(i.blendFuncSeparate(wt[O],wt[Q],wt[At],wt[Qt]),m=O,w=Q,S=At,K=Qt),(ce.equals(R)===!1||fe!==z)&&(i.blendColor(ce.r,ce.g,ce.b,fe),R.copy(ce),z=fe),y=T,C=!1}function Ot(T,et){T.side===In?Ht(i.CULL_FACE):Zt(i.CULL_FACE);let O=T.side===dn;et&&(O=!O),Z(O),T.blending===Ts&&T.transparent===!1?F(Ci):F(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),r.setFunc(T.depthFunc),r.setTest(T.depthTest),r.setMask(T.depthWrite),s.setMask(T.colorWrite);let Q=T.stencilWrite;o.setTest(Q),Q&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Kt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Zt(i.SAMPLE_ALPHA_TO_COVERAGE):Ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(T){_t!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),_t=T)}function Rt(T){T!==cd?(Zt(i.CULL_FACE),T!==_&&(T===oh?i.cullFace(i.BACK):T===ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ht(i.CULL_FACE),_=T}function Nt(T){T!==b&&(St&&i.lineWidth(T),b=T)}function Kt(T,et,O){T?(Zt(i.POLYGON_OFFSET_FILL),(dt!==et||ft!==O)&&(i.polygonOffset(et,O),dt=et,ft=O)):Ht(i.POLYGON_OFFSET_FILL)}function Xt(T){T?Zt(i.SCISSOR_TEST):Ht(i.SCISSOR_TEST)}function D(T){T===void 0&&(T=i.TEXTURE0+pt-1),vt!==T&&(i.activeTexture(T),vt=T)}function M(T,et,O){O===void 0&&(vt===null?O=i.TEXTURE0+pt-1:O=vt);let Q=Vt[O];Q===void 0&&(Q={type:void 0,texture:void 0},Vt[O]=Q),(Q.type!==T||Q.texture!==et)&&(vt!==O&&(i.activeTexture(O),vt=O),i.bindTexture(T,et||Dt[T]),Q.type=T,Q.texture=et)}function ot(){let T=Vt[vt];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Mt(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Jt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function zt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _e(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Lt(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Gt(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function oe(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ae(T){ge.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),ge.copy(T))}function $t(T){Se.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Se.copy(T))}function we(T,et){let O=c.get(et);O===void 0&&(O=new WeakMap,c.set(et,O));let Q=O.get(T);Q===void 0&&(Q=i.getUniformBlockIndex(et,T.name),O.set(T,Q))}function J(T,et){let Q=c.get(et).get(T);a.get(et)!==Q&&(i.uniformBlockBinding(et,Q,T.__bindingPointIndex),a.set(et,Q))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},vt=null,Vt={},h={},u=new WeakMap,d=[],f=null,x=!1,y=null,p=null,m=null,w=null,v=null,S=null,K=null,R=new he(0,0,0),z=0,C=!1,_t=null,_=null,b=null,dt=null,ft=null,ge.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Zt,disable:Ht,bindFramebuffer:ne,drawBuffers:ee,useProgram:re,setBlending:F,setMaterial:Ot,setFlipSided:Z,setCullFace:Rt,setLineWidth:Nt,setPolygonOffset:Kt,setScissorTest:Xt,activeTexture:D,bindTexture:M,unbindTexture:ot,compressedTexImage2D:tt,compressedTexImage3D:bt,texImage2D:Gt,texImage3D:oe,updateUBOMapping:we,uniformBlockBinding:J,texStorage2D:_e,texStorage3D:Lt,texSubImage2D:Mt,texSubImage3D:Jt,compressedTexSubImage2D:zt,compressedTexSubImage3D:Yt,scissor:ae,viewport:$t,reset:nt}}function jh(i,t,e,n){let s=Og(n);switch(e){case bu:return i*t;case Au:return i*t;case Ru:return i*t*2;case zl:return i*t/s.components*s.byteLength;case kl:return i*t/s.components*s.byteLength;case Cu:return i*t*2/s.components*s.byteLength;case Gl:return i*t*2/s.components*s.byteLength;case Tu:return i*t*3/s.components*s.byteLength;case qn:return i*t*4/s.components*s.byteLength;case Vl:return i*t*4/s.components*s.byteLength;case Mo:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mc:case Sc:return Math.max(i,16)*Math.max(t,8)/4;case vc:case Ec:return Math.max(i,8)*Math.max(t,8)/2;case wc:case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bo:case kc:case Gc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pu:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Og(i){switch(i){case pi:case Eu:return{byteLength:1,components:1};case gr:case Su:case Ir:return{byteLength:2,components:1};case Bl:case Hl:return{byteLength:2,components:4};case Qi:case Ol:case ei:return{byteLength:4,components:1};case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new It,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,M){return f?new OffscreenCanvas(D,M):Do("canvas")}function y(D,M,ot){let tt=1,bt=Xt(D);if((bt.width>ot||bt.height>ot)&&(tt=ot/Math.max(bt.width,bt.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let Mt=Math.floor(tt*bt.width),Jt=Math.floor(tt*bt.height);u===void 0&&(u=x(Mt,Jt));let zt=M?x(Mt,Jt):u;return zt.width=Mt,zt.height=Jt,zt.getContext("2d").drawImage(D,0,0,Mt,Jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+Mt+"x"+Jt+")."),zt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==Sn&&D.minFilter!==Xn}function m(D){i.generateMipmap(D)}function w(D,M,ot,tt,bt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Mt=M;if(M===i.RED&&(ot===i.FLOAT&&(Mt=i.R32F),ot===i.HALF_FLOAT&&(Mt=i.R16F),ot===i.UNSIGNED_BYTE&&(Mt=i.R8)),M===i.RED_INTEGER&&(ot===i.UNSIGNED_BYTE&&(Mt=i.R8UI),ot===i.UNSIGNED_SHORT&&(Mt=i.R16UI),ot===i.UNSIGNED_INT&&(Mt=i.R32UI),ot===i.BYTE&&(Mt=i.R8I),ot===i.SHORT&&(Mt=i.R16I),ot===i.INT&&(Mt=i.R32I)),M===i.RG&&(ot===i.FLOAT&&(Mt=i.RG32F),ot===i.HALF_FLOAT&&(Mt=i.RG16F),ot===i.UNSIGNED_BYTE&&(Mt=i.RG8)),M===i.RG_INTEGER&&(ot===i.UNSIGNED_BYTE&&(Mt=i.RG8UI),ot===i.UNSIGNED_SHORT&&(Mt=i.RG16UI),ot===i.UNSIGNED_INT&&(Mt=i.RG32UI),ot===i.BYTE&&(Mt=i.RG8I),ot===i.SHORT&&(Mt=i.RG16I),ot===i.INT&&(Mt=i.RG32I)),M===i.RGB_INTEGER&&(ot===i.UNSIGNED_BYTE&&(Mt=i.RGB8UI),ot===i.UNSIGNED_SHORT&&(Mt=i.RGB16UI),ot===i.UNSIGNED_INT&&(Mt=i.RGB32UI),ot===i.BYTE&&(Mt=i.RGB8I),ot===i.SHORT&&(Mt=i.RGB16I),ot===i.INT&&(Mt=i.RGB32I)),M===i.RGBA_INTEGER&&(ot===i.UNSIGNED_BYTE&&(Mt=i.RGBA8UI),ot===i.UNSIGNED_SHORT&&(Mt=i.RGBA16UI),ot===i.UNSIGNED_INT&&(Mt=i.RGBA32UI),ot===i.BYTE&&(Mt=i.RGBA8I),ot===i.SHORT&&(Mt=i.RGBA16I),ot===i.INT&&(Mt=i.RGBA32I)),M===i.RGB&&ot===i.UNSIGNED_INT_5_9_9_9_REV&&(Mt=i.RGB9_E5),M===i.RGBA){let Jt=bt?Ro:Ue.getTransfer(tt);ot===i.FLOAT&&(Mt=i.RGBA32F),ot===i.HALF_FLOAT&&(Mt=i.RGBA16F),ot===i.UNSIGNED_BYTE&&(Mt=Jt===Xe?i.SRGB8_ALPHA8:i.RGBA8),ot===i.UNSIGNED_SHORT_4_4_4_4&&(Mt=i.RGBA4),ot===i.UNSIGNED_SHORT_5_5_5_1&&(Mt=i.RGB5_A1)}return(Mt===i.R16F||Mt===i.R32F||Mt===i.RG16F||Mt===i.RG32F||Mt===i.RGBA16F||Mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Mt}function v(D,M){let ot;return D?M===null||M===Qi||M===Ls?ot=i.DEPTH24_STENCIL8:M===ei?ot=i.DEPTH32F_STENCIL8:M===gr&&(ot=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qi||M===Ls?ot=i.DEPTH_COMPONENT24:M===ei?ot=i.DEPTH_COMPONENT32F:M===gr&&(ot=i.DEPTH_COMPONENT16),ot}function S(D,M){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Sn&&D.minFilter!==Xn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function K(D){let M=D.target;M.removeEventListener("dispose",K),z(M),M.isVideoTexture&&h.delete(M)}function R(D){let M=D.target;M.removeEventListener("dispose",R),_t(M)}function z(D){let M=n.get(D);if(M.__webglInit===void 0)return;let ot=D.source,tt=d.get(ot);if(tt){let bt=tt[M.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&C(D),Object.keys(tt).length===0&&d.delete(ot)}n.remove(D)}function C(D){let M=n.get(D);i.deleteTexture(M.__webglTexture);let ot=D.source,tt=d.get(ot);delete tt[M.__cacheKey],o.memory.textures--}function _t(D){let M=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let bt=0;bt<M.__webglFramebuffer[tt].length;bt++)i.deleteFramebuffer(M.__webglFramebuffer[tt][bt]);else i.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[tt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ot=D.textures;for(let tt=0,bt=ot.length;tt<bt;tt++){let Mt=n.get(ot[tt]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(ot[tt])}n.remove(D)}let _=0;function b(){_=0}function dt(){let D=_;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),_+=1,D}function ft(D){let M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function pt(D,M){let ot=n.get(D);if(D.isVideoTexture&&Nt(D),D.isRenderTargetTexture===!1&&D.version>0&&ot.__version!==D.version){let tt=D.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(ot,D,M);return}}e.bindTexture(i.TEXTURE_2D,ot.__webglTexture,i.TEXTURE0+M)}function St(D,M){let ot=n.get(D);if(D.version>0&&ot.__version!==D.version){Se(ot,D,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ot.__webglTexture,i.TEXTURE0+M)}function ht(D,M){let ot=n.get(D);if(D.version>0&&ot.__version!==D.version){Se(ot,D,M);return}e.bindTexture(i.TEXTURE_3D,ot.__webglTexture,i.TEXTURE0+M)}function Pt(D,M){let ot=n.get(D);if(D.version>0&&ot.__version!==D.version){Et(ot,D,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture,i.TEXTURE0+M)}let vt={[mr]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[yc]:i.MIRRORED_REPEAT},Vt={[Sn]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},kt={[Hd]:i.NEVER,[Xd]:i.ALWAYS,[zd]:i.LESS,[Du]:i.LEQUAL,[kd]:i.EQUAL,[Wd]:i.GEQUAL,[Gd]:i.GREATER,[Vd]:i.NOTEQUAL};function Bt(D,M){if(M.type===ei&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Xn||M.magFilter===wa||M.magFilter===kr||M.magFilter===Ki||M.minFilter===Xn||M.minFilter===wa||M.minFilter===kr||M.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,vt[M.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,vt[M.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,vt[M.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Vt[M.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Vt[M.minFilter]),M.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,kt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==kr&&M.minFilter!==Ki||M.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let ot=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ge(D,M){let ot=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",K));let tt=M.source,bt=d.get(tt);bt===void 0&&(bt={},d.set(tt,bt));let Mt=ft(M);if(Mt!==D.__cacheKey){bt[Mt]===void 0&&(bt[Mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ot=!0),bt[Mt].usedTimes++;let Jt=bt[D.__cacheKey];Jt!==void 0&&(bt[D.__cacheKey].usedTimes--,Jt.usedTimes===0&&C(M)),D.__cacheKey=Mt,D.__webglTexture=bt[Mt].texture}return ot}function Se(D,M,ot){let tt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=i.TEXTURE_3D);let bt=ge(D,M),Mt=M.source;e.bindTexture(tt,D.__webglTexture,i.TEXTURE0+ot);let Jt=n.get(Mt);if(Mt.version!==Jt.__version||bt===!0){e.activeTexture(i.TEXTURE0+ot);let zt=Ue.getPrimaries(Ue.workingColorSpace),Yt=M.colorSpace===Ai?null:Ue.getPrimaries(M.colorSpace),_e=M.colorSpace===Ai||zt===Yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Lt=y(M.image,!1,s.maxTextureSize);Lt=Kt(M,Lt);let Gt=r.convert(M.format,M.colorSpace),oe=r.convert(M.type),ae=w(M.internalFormat,Gt,oe,M.colorSpace,M.isVideoTexture);Bt(tt,M);let $t,we=M.mipmaps,J=M.isVideoTexture!==!0,nt=Jt.__version===void 0||bt===!0,T=Mt.dataReady,et=S(M,Lt);if(M.isDepthTexture)ae=v(M.format===Us,M.type),nt&&(J?e.texStorage2D(i.TEXTURE_2D,1,ae,Lt.width,Lt.height):e.texImage2D(i.TEXTURE_2D,0,ae,Lt.width,Lt.height,0,Gt,oe,null));else if(M.isDataTexture)if(we.length>0){J&&nt&&e.texStorage2D(i.TEXTURE_2D,et,ae,we[0].width,we[0].height);for(let O=0,Q=we.length;O<Q;O++)$t=we[O],J?T&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,$t.width,$t.height,Gt,oe,$t.data):e.texImage2D(i.TEXTURE_2D,O,ae,$t.width,$t.height,0,Gt,oe,$t.data);M.generateMipmaps=!1}else J?(nt&&e.texStorage2D(i.TEXTURE_2D,et,ae,Lt.width,Lt.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt.width,Lt.height,Gt,oe,Lt.data)):e.texImage2D(i.TEXTURE_2D,0,ae,Lt.width,Lt.height,0,Gt,oe,Lt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){J&&nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,ae,we[0].width,we[0].height,Lt.depth);for(let O=0,Q=we.length;O<Q;O++)if($t=we[O],M.format!==qn)if(Gt!==null)if(J){if(T)if(M.layerUpdates.size>0){let Tt=jh($t.width,$t.height,M.format,M.type);for(let At of M.layerUpdates){let Qt=$t.data.subarray(At*Tt/$t.data.BYTES_PER_ELEMENT,(At+1)*Tt/$t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,At,$t.width,$t.height,1,Gt,Qt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,$t.width,$t.height,Lt.depth,Gt,$t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,ae,$t.width,$t.height,Lt.depth,0,$t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,$t.width,$t.height,Lt.depth,Gt,oe,$t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,ae,$t.width,$t.height,Lt.depth,0,Gt,oe,$t.data)}else{J&&nt&&e.texStorage2D(i.TEXTURE_2D,et,ae,we[0].width,we[0].height);for(let O=0,Q=we.length;O<Q;O++)$t=we[O],M.format!==qn?Gt!==null?J?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,$t.width,$t.height,Gt,$t.data):e.compressedTexImage2D(i.TEXTURE_2D,O,ae,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?T&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,$t.width,$t.height,Gt,oe,$t.data):e.texImage2D(i.TEXTURE_2D,O,ae,$t.width,$t.height,0,Gt,oe,$t.data)}else if(M.isDataArrayTexture)if(J){if(nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,ae,Lt.width,Lt.height,Lt.depth),T)if(M.layerUpdates.size>0){let O=jh(Lt.width,Lt.height,M.format,M.type);for(let Q of M.layerUpdates){let Tt=Lt.data.subarray(Q*O/Lt.data.BYTES_PER_ELEMENT,(Q+1)*O/Lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,Lt.width,Lt.height,1,Gt,oe,Tt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Lt.width,Lt.height,Lt.depth,Gt,oe,Lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,Lt.width,Lt.height,Lt.depth,0,Gt,oe,Lt.data);else if(M.isData3DTexture)J?(nt&&e.texStorage3D(i.TEXTURE_3D,et,ae,Lt.width,Lt.height,Lt.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Lt.width,Lt.height,Lt.depth,Gt,oe,Lt.data)):e.texImage3D(i.TEXTURE_3D,0,ae,Lt.width,Lt.height,Lt.depth,0,Gt,oe,Lt.data);else if(M.isFramebufferTexture){if(nt)if(J)e.texStorage2D(i.TEXTURE_2D,et,ae,Lt.width,Lt.height);else{let O=Lt.width,Q=Lt.height;for(let Tt=0;Tt<et;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,ae,O,Q,0,Gt,oe,null),O>>=1,Q>>=1}}else if(we.length>0){if(J&&nt){let O=Xt(we[0]);e.texStorage2D(i.TEXTURE_2D,et,ae,O.width,O.height)}for(let O=0,Q=we.length;O<Q;O++)$t=we[O],J?T&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,Gt,oe,$t):e.texImage2D(i.TEXTURE_2D,O,ae,Gt,oe,$t);M.generateMipmaps=!1}else if(J){if(nt){let O=Xt(Lt);e.texStorage2D(i.TEXTURE_2D,et,ae,O.width,O.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,oe,Lt)}else e.texImage2D(i.TEXTURE_2D,0,ae,Gt,oe,Lt);p(M)&&m(tt),Jt.__version=Mt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Et(D,M,ot){if(M.image.length!==6)return;let tt=ge(D,M),bt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ot);let Mt=n.get(bt);if(bt.version!==Mt.__version||tt===!0){e.activeTexture(i.TEXTURE0+ot);let Jt=Ue.getPrimaries(Ue.workingColorSpace),zt=M.colorSpace===Ai?null:Ue.getPrimaries(M.colorSpace),Yt=M.colorSpace===Ai||Jt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let _e=M.isCompressedTexture||M.image[0].isCompressedTexture,Lt=M.image[0]&&M.image[0].isDataTexture,Gt=[];for(let Q=0;Q<6;Q++)!_e&&!Lt?Gt[Q]=y(M.image[Q],!0,s.maxCubemapSize):Gt[Q]=Lt?M.image[Q].image:M.image[Q],Gt[Q]=Kt(M,Gt[Q]);let oe=Gt[0],ae=r.convert(M.format,M.colorSpace),$t=r.convert(M.type),we=w(M.internalFormat,ae,$t,M.colorSpace),J=M.isVideoTexture!==!0,nt=Mt.__version===void 0||tt===!0,T=bt.dataReady,et=S(M,oe);Bt(i.TEXTURE_CUBE_MAP,M);let O;if(_e){J&&nt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,et,we,oe.width,oe.height);for(let Q=0;Q<6;Q++){O=Gt[Q].mipmaps;for(let Tt=0;Tt<O.length;Tt++){let At=O[Tt];M.format!==qn?ae!==null?J?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,At.width,At.height,ae,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,we,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,At.width,At.height,ae,$t,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,we,At.width,At.height,0,ae,$t,At.data)}}}else{if(O=M.mipmaps,J&&nt){O.length>0&&et++;let Q=Xt(Gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,et,we,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Lt){J?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Gt[Q].width,Gt[Q].height,ae,$t,Gt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,we,Gt[Q].width,Gt[Q].height,0,ae,$t,Gt[Q].data);for(let Tt=0;Tt<O.length;Tt++){let Qt=O[Tt].image[Q].image;J?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,Qt.width,Qt.height,ae,$t,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,we,Qt.width,Qt.height,0,ae,$t,Qt.data)}}else{J?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae,$t,Gt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,we,ae,$t,Gt[Q]);for(let Tt=0;Tt<O.length;Tt++){let At=O[Tt];J?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,ae,$t,At.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,we,ae,$t,At.image[Q])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),Mt.__version=bt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Dt(D,M,ot,tt,bt,Mt){let Jt=r.convert(ot.format,ot.colorSpace),zt=r.convert(ot.type),Yt=w(ot.internalFormat,Jt,zt,ot.colorSpace);if(!n.get(M).__hasExternalTextures){let Lt=Math.max(1,M.width>>Mt),Gt=Math.max(1,M.height>>Mt);bt===i.TEXTURE_3D||bt===i.TEXTURE_2D_ARRAY?e.texImage3D(bt,Mt,Yt,Lt,Gt,M.depth,0,Jt,zt,null):e.texImage2D(bt,Mt,Yt,Lt,Gt,0,Jt,zt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,bt,n.get(ot).__webglTexture,0,Z(M)):(bt===i.TEXTURE_2D||bt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,bt,n.get(ot).__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(D,M,ot){if(i.bindRenderbuffer(i.RENDERBUFFER,D),M.depthBuffer){let tt=M.depthTexture,bt=tt&&tt.isDepthTexture?tt.type:null,Mt=v(M.stencilBuffer,bt),Jt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=Z(M);Rt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,Mt,M.width,M.height):ot?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Mt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Jt,i.RENDERBUFFER,D)}else{let tt=M.textures;for(let bt=0;bt<tt.length;bt++){let Mt=tt[bt],Jt=r.convert(Mt.format,Mt.colorSpace),zt=r.convert(Mt.type),Yt=w(Mt.internalFormat,Jt,zt,Mt.colorSpace),_e=Z(M);ot&&Rt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Yt,M.width,M.height):Rt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,Yt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Yt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),pt(M.depthTexture,0);let tt=n.get(M.depthTexture).__webglTexture,bt=Z(M);if(M.depthTexture.format===As)Rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Us)Rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ne(D){let M=n.get(D),ot=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){let tt=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),tt){let bt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,tt.removeEventListener("dispose",bt)};tt.addEventListener("dispose",bt),M.__depthDisposeCallback=bt}M.__boundDepthTexture=tt}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");Ht(M.__webglFramebuffer,D)}else if(ot){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]===void 0)M.__webglDepthbuffer[tt]=i.createRenderbuffer(),Zt(M.__webglDepthbuffer[tt],D,!1);else{let bt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=M.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,Mt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Zt(M.__webglDepthbuffer,D,!1);else{let tt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(D,M,ot){let tt=n.get(D);M!==void 0&&Dt(tt.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ot!==void 0&&ne(D)}function re(D){let M=D.texture,ot=n.get(D),tt=n.get(M);D.addEventListener("dispose",R);let bt=D.textures,Mt=D.isWebGLCubeRenderTarget===!0,Jt=bt.length>1;if(Jt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=M.version,o.memory.textures++),Mt){ot.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(M.mipmaps&&M.mipmaps.length>0){ot.__webglFramebuffer[zt]=[];for(let Yt=0;Yt<M.mipmaps.length;Yt++)ot.__webglFramebuffer[zt][Yt]=i.createFramebuffer()}else ot.__webglFramebuffer[zt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ot.__webglFramebuffer=[];for(let zt=0;zt<M.mipmaps.length;zt++)ot.__webglFramebuffer[zt]=i.createFramebuffer()}else ot.__webglFramebuffer=i.createFramebuffer();if(Jt)for(let zt=0,Yt=bt.length;zt<Yt;zt++){let _e=n.get(bt[zt]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Rt(D)===!1){ot.__webglMultisampledFramebuffer=i.createFramebuffer(),ot.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let zt=0;zt<bt.length;zt++){let Yt=bt[zt];ot.__webglColorRenderbuffer[zt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ot.__webglColorRenderbuffer[zt]);let _e=r.convert(Yt.format,Yt.colorSpace),Lt=r.convert(Yt.type),Gt=w(Yt.internalFormat,_e,Lt,Yt.colorSpace,D.isXRRenderTarget===!0),oe=Z(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Gt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[zt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ot.__webglDepthRenderbuffer=i.createRenderbuffer(),Zt(ot.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,M);for(let zt=0;zt<6;zt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Yt=0;Yt<M.mipmaps.length;Yt++)Dt(ot.__webglFramebuffer[zt][Yt],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Yt);else Dt(ot.__webglFramebuffer[zt],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);p(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Jt){for(let zt=0,Yt=bt.length;zt<Yt;zt++){let _e=bt[zt],Lt=n.get(_e);e.bindTexture(i.TEXTURE_2D,Lt.__webglTexture),Bt(i.TEXTURE_2D,_e),Dt(ot.__webglFramebuffer,D,_e,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,0),p(_e)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let zt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(zt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(zt,tt.__webglTexture),Bt(zt,M),M.mipmaps&&M.mipmaps.length>0)for(let Yt=0;Yt<M.mipmaps.length;Yt++)Dt(ot.__webglFramebuffer[Yt],D,M,i.COLOR_ATTACHMENT0,zt,Yt);else Dt(ot.__webglFramebuffer,D,M,i.COLOR_ATTACHMENT0,zt,0);p(M)&&m(zt),e.unbindTexture()}D.depthBuffer&&ne(D)}function ue(D){let M=D.textures;for(let ot=0,tt=M.length;ot<tt;ot++){let bt=M[ot];if(p(bt)){let Mt=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Jt=n.get(bt).__webglTexture;e.bindTexture(Mt,Jt),m(Mt),e.unbindTexture()}}}let wt=[],F=[];function Ot(D){if(D.samples>0){if(Rt(D)===!1){let M=D.textures,ot=D.width,tt=D.height,bt=i.COLOR_BUFFER_BIT,Mt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Jt=n.get(D),zt=M.length>1;if(zt)for(let Yt=0;Yt<M.length;Yt++)e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let Yt=0;Yt<M.length;Yt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(bt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(bt|=i.STENCIL_BUFFER_BIT)),zt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[Yt]);let _e=n.get(M[Yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,ot,tt,0,0,ot,tt,bt,i.NEAREST),c===!0&&(wt.length=0,F.length=0,wt.push(i.COLOR_ATTACHMENT0+Yt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(wt.push(Mt),F.push(Mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),zt)for(let Yt=0;Yt<M.length;Yt++){e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Yt,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[Yt]);let _e=n.get(M[Yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Yt,i.TEXTURE_2D,_e,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let M=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Z(D){return Math.min(s.maxSamples,D.samples)}function Rt(D){let M=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Nt(D){let M=o.render.frame;h.get(D)!==M&&(h.set(D,M),D.update())}function Kt(D,M){let ot=D.colorSpace,tt=D.format,bt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ot!==Fi&&ot!==Ai&&(Ue.getTransfer(ot)===Xe?(tt!==qn||bt!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),M}function Xt(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=dt,this.resetTextureUnits=b,this.setTexture2D=pt,this.setTexture2DArray=St,this.setTexture3D=ht,this.setTextureCube=Pt,this.rebindTextures=ee,this.setupRenderTarget=re,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Rt}function Hg(i,t){function e(n,s=Ai){let r,o=Ue.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return i.BYTE;if(n===Su)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===Ol)return i.INT;if(n===Qi)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===bu)return i.ALPHA;if(n===Tu)return i.RGB;if(n===qn)return i.RGBA;if(n===Au)return i.LUMINANCE;if(n===Ru)return i.LUMINANCE_ALPHA;if(n===As)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===zl)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===Cu)return i.RG;if(n===Gl)return i.RG_INTEGER;if(n===Vl)return i.RGBA_INTEGER;if(n===Mo||n===Eo||n===So||n===wo)if(o===Xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vc||n===Mc||n===Ec||n===Sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===bc||n===Tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===bc)return o===Xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===Hc||n===zc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zc)return o===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===kc||n===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return o===Xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pu||n===Vc||n===Wc||n===Xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var cl=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},zg={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;l.inputState.pinching&&d>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gg=`
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

}`,ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:kg,fragmentShader:Gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new Ne(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hl=class extends Li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,x=null,y=new ll,p=e.getContextAttributes(),m=null,w=null,v=[],S=[],K=new It,R=null,z=new qe;z.layers.enable(1),z.viewport=new He;let C=new qe;C.layers.enable(2),C.viewport=new He;let _t=[z,C],_=new cl;_.layers.enable(1),_.layers.enable(2);let b=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Et){let Dt=v[Et];return Dt===void 0&&(Dt=new dr,v[Et]=Dt),Dt.getTargetRaySpace()},this.getControllerGrip=function(Et){let Dt=v[Et];return Dt===void 0&&(Dt=new dr,v[Et]=Dt),Dt.getGripSpace()},this.getHand=function(Et){let Dt=v[Et];return Dt===void 0&&(Dt=new dr,v[Et]=Dt),Dt.getHandSpace()};function ft(Et){let Dt=S.indexOf(Et.inputSource);if(Dt===-1)return;let Zt=v[Dt];Zt!==void 0&&(Zt.update(Et.inputSource,Et.frame,l||o),Zt.dispatchEvent({type:Et.type,data:Et.inputSource}))}function pt(){s.removeEventListener("select",ft),s.removeEventListener("selectstart",ft),s.removeEventListener("selectend",ft),s.removeEventListener("squeeze",ft),s.removeEventListener("squeezestart",ft),s.removeEventListener("squeezeend",ft),s.removeEventListener("end",pt),s.removeEventListener("inputsourceschange",St);for(let Et=0;Et<v.length;Et++){let Dt=S[Et];Dt!==null&&(S[Et]=null,v[Et].disconnect(Dt))}b=null,dt=null,y.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,w=null,Se.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(K.width,K.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Et){r=Et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Et){a=Et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Et){l=Et},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Et){if(s=Et,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",ft),s.addEventListener("selectstart",ft),s.addEventListener("selectend",ft),s.addEventListener("squeeze",ft),s.addEventListener("squeezestart",ft),s.addEventListener("squeezeend",ft),s.addEventListener("end",pt),s.addEventListener("inputsourceschange",St),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(K),s.renderState.layers===void 0){let Dt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new mi(f.framebufferWidth,f.framebufferHeight,{format:qn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Dt=null,Zt=null,Ht=null;p.depth&&(Ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=p.stencil?Us:As,Zt=p.stencil?Ls:Qi);let ne={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ne),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new mi(d.textureWidth,d.textureHeight,{format:qn,type:pi,depthTexture:new zo(d.textureWidth,d.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function St(Et){for(let Dt=0;Dt<Et.removed.length;Dt++){let Zt=Et.removed[Dt],Ht=S.indexOf(Zt);Ht>=0&&(S[Ht]=null,v[Ht].disconnect(Zt))}for(let Dt=0;Dt<Et.added.length;Dt++){let Zt=Et.added[Dt],Ht=S.indexOf(Zt);if(Ht===-1){for(let ee=0;ee<v.length;ee++)if(ee>=S.length){S.push(Zt),Ht=ee;break}else if(S[ee]===null){S[ee]=Zt,Ht=ee;break}if(Ht===-1)break}let ne=v[Ht];ne&&ne.connect(Zt)}}let ht=new L,Pt=new L;function vt(Et,Dt,Zt){ht.setFromMatrixPosition(Dt.matrixWorld),Pt.setFromMatrixPosition(Zt.matrixWorld);let Ht=ht.distanceTo(Pt),ne=Dt.projectionMatrix.elements,ee=Zt.projectionMatrix.elements,re=ne[14]/(ne[10]-1),ue=ne[14]/(ne[10]+1),wt=(ne[9]+1)/ne[5],F=(ne[9]-1)/ne[5],Ot=(ne[8]-1)/ne[0],Z=(ee[8]+1)/ee[0],Rt=re*Ot,Nt=re*Z,Kt=Ht/(-Ot+Z),Xt=Kt*-Ot;if(Dt.matrixWorld.decompose(Et.position,Et.quaternion,Et.scale),Et.translateX(Xt),Et.translateZ(Kt),Et.matrixWorld.compose(Et.position,Et.quaternion,Et.scale),Et.matrixWorldInverse.copy(Et.matrixWorld).invert(),ne[10]===-1)Et.projectionMatrix.copy(Dt.projectionMatrix),Et.projectionMatrixInverse.copy(Dt.projectionMatrixInverse);else{let D=re+Kt,M=ue+Kt,ot=Rt-Xt,tt=Nt+(Ht-Xt),bt=wt*ue/M*D,Mt=F*ue/M*D;Et.projectionMatrix.makePerspective(ot,tt,bt,Mt,D,M),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert()}}function Vt(Et,Dt){Dt===null?Et.matrixWorld.copy(Et.matrix):Et.matrixWorld.multiplyMatrices(Dt.matrixWorld,Et.matrix),Et.matrixWorldInverse.copy(Et.matrixWorld).invert()}this.updateCamera=function(Et){if(s===null)return;let Dt=Et.near,Zt=Et.far;y.texture!==null&&(y.depthNear>0&&(Dt=y.depthNear),y.depthFar>0&&(Zt=y.depthFar)),_.near=C.near=z.near=Dt,_.far=C.far=z.far=Zt,(b!==_.near||dt!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,dt=_.far);let Ht=Et.parent,ne=_.cameras;Vt(_,Ht);for(let ee=0;ee<ne.length;ee++)Vt(ne[ee],Ht);ne.length===2?vt(_,z,C):_.projectionMatrix.copy(z.projectionMatrix),kt(Et,_,Ht)};function kt(Et,Dt,Zt){Zt===null?Et.matrix.copy(Dt.matrixWorld):(Et.matrix.copy(Zt.matrixWorld),Et.matrix.invert(),Et.matrix.multiply(Dt.matrixWorld)),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.updateMatrixWorld(!0),Et.projectionMatrix.copy(Dt.projectionMatrix),Et.projectionMatrixInverse.copy(Dt.projectionMatrixInverse),Et.isPerspectiveCamera&&(Et.fov=Zc*2*Math.atan(1/Et.projectionMatrix.elements[5]),Et.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Et){c=Et,d!==null&&(d.fixedFoveation=Et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let Bt=null;function ge(Et,Dt){if(h=Dt.getViewerPose(l||o),x=Dt,h!==null){let Zt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let Ht=!1;Zt.length!==_.cameras.length&&(_.cameras.length=0,Ht=!0);for(let ee=0;ee<Zt.length;ee++){let re=Zt[ee],ue=null;if(f!==null)ue=f.getViewport(re);else{let F=u.getViewSubImage(d,re);ue=F.viewport,ee===0&&(t.setRenderTargetTextures(w,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(w))}let wt=_t[ee];wt===void 0&&(wt=new qe,wt.layers.enable(ee),wt.viewport=new He,_t[ee]=wt),wt.matrix.fromArray(re.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(re.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(ue.x,ue.y,ue.width,ue.height),ee===0&&(_.matrix.copy(wt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ht===!0&&_.cameras.push(wt)}let ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")){let ee=u.getDepthInformation(Zt[0]);ee&&ee.isValid&&ee.texture&&y.init(t,ee,s.renderState)}}for(let Zt=0;Zt<v.length;Zt++){let Ht=S[Zt],ne=v[Zt];Ht!==null&&ne!==void 0&&ne.update(Ht,Dt,l||o)}Bt&&Bt(Et,Dt),Dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Dt}),x=null}let Se=new Fu;Se.setAnimationLoop(ge),this.setAnimationLoop=function(Et){Bt=Et},this.dispose=function(){}}},qi=new Dn,Vg=new Pe;function Wg(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Nu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,w,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,w,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let w=t.get(m),v=w.envMap,S=w.envMapRotation;v&&(p.envMap.value=v,qi.copy(S),qi.x*=-1,qi.y*=-1,qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),p.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(qi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,w,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,v){let S=v.program;n.uniformBlockBinding(w,S)}function l(w,v){let S=s[w.id];S===void 0&&(x(w),S=h(w),s[w.id]=S,w.addEventListener("dispose",p));let K=v.program;n.updateUBOMapping(w,K);let R=t.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function h(w){let v=u();w.__bindingPointIndex=v;let S=i.createBuffer(),K=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,K,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let v=s[w.id],S=w.uniforms,K=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,z=S.length;R<z;R++){let C=Array.isArray(S[R])?S[R]:[S[R]];for(let _t=0,_=C.length;_t<_;_t++){let b=C[_t];if(f(b,R,_t,K)===!0){let dt=b.__offset,ft=Array.isArray(b.value)?b.value:[b.value],pt=0;for(let St=0;St<ft.length;St++){let ht=ft[St],Pt=y(ht);typeof ht=="number"||typeof ht=="boolean"?(b.__data[0]=ht,i.bufferSubData(i.UNIFORM_BUFFER,dt+pt,b.__data)):ht.isMatrix3?(b.__data[0]=ht.elements[0],b.__data[1]=ht.elements[1],b.__data[2]=ht.elements[2],b.__data[3]=0,b.__data[4]=ht.elements[3],b.__data[5]=ht.elements[4],b.__data[6]=ht.elements[5],b.__data[7]=0,b.__data[8]=ht.elements[6],b.__data[9]=ht.elements[7],b.__data[10]=ht.elements[8],b.__data[11]=0):(ht.toArray(b.__data,pt),pt+=Pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,dt,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,v,S,K){let R=w.value,z=v+"_"+S;if(K[z]===void 0)return typeof R=="number"||typeof R=="boolean"?K[z]=R:K[z]=R.clone(),!0;{let C=K[z];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return K[z]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function x(w){let v=w.uniforms,S=0,K=16;for(let z=0,C=v.length;z<C;z++){let _t=Array.isArray(v[z])?v[z]:[v[z]];for(let _=0,b=_t.length;_<b;_++){let dt=_t[_],ft=Array.isArray(dt.value)?dt.value:[dt.value];for(let pt=0,St=ft.length;pt<St;pt++){let ht=ft[pt],Pt=y(ht),vt=S%K,Vt=vt%Pt.boundary,kt=vt+Vt;S+=Vt,kt!==0&&K-kt<Pt.storage&&(S+=K-kt),dt.__data=new Float32Array(Pt.storage/Float32Array.BYTES_PER_ELEMENT),dt.__offset=S,S+=Pt.storage}}}let R=S%K;return R>0&&(S+=K-R),w.__size=S,w.__cache={},this}function y(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function p(w){let v=w.target;v.removeEventListener("dispose",p);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var ko=class{constructor(t={}){let{canvas:e=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),x=new Int32Array(4),y=null,p=null,m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Pi,this.toneMappingExposure=1;let v=this,S=!1,K=0,R=0,z=null,C=-1,_t=null,_=new He,b=new He,dt=null,ft=new he(0),pt=0,St=e.width,ht=e.height,Pt=1,vt=null,Vt=null,kt=new He(0,0,St,ht),Bt=new He(0,0,St,ht),ge=!1,Se=new _r,Et=!1,Dt=!1,Zt=new Pe,Ht=new Pe,ne=new L,ee=new He,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function wt(){return z===null?Pt:1}let F=n;function Ot(g,I){return e.getContext(g,I)}try{let g={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",At,!1),F===null){let I="webgl2";if(F=Ot(I,g),F===null)throw Ot(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Z,Rt,Nt,Kt,Xt,D,M,ot,tt,bt,Mt,Jt,zt,Yt,_e,Lt,Gt,oe,ae,$t,we,J,nt,T;function et(){Z=new a0(F),Z.init(),J=new Hg(F,Z),Rt=new e0(F,Z,t,J),Nt=new Fg(F),Rt.reverseDepthBuffer&&Nt.buffers.depth.setReversed(!0),Kt=new h0(F),Xt=new Sg,D=new Bg(F,Z,Nt,Xt,Rt,J,Kt),M=new i0(v),ot=new o0(v),tt=new xf(F),nt=new jm(F,tt),bt=new c0(F,tt,Kt,nt),Mt=new d0(F,bt,tt,Kt),ae=new u0(F,Rt,D),Lt=new n0(Xt),Jt=new Eg(v,M,ot,Z,Rt,nt,Lt),zt=new Wg(v,Xt),Yt=new bg,_e=new Ig(Z),oe=new Qm(v,M,ot,Nt,Mt,d,c),Gt=new Ug(v,Mt,Rt),T=new Xg(F,Kt,Rt,Nt),$t=new t0(F,Z,Kt),we=new l0(F,Z,Kt),Kt.programs=Jt.programs,v.capabilities=Rt,v.extensions=Z,v.properties=Xt,v.renderLists=Yt,v.shadowMap=Gt,v.state=Nt,v.info=Kt}et();let O=new hl(v,F);this.xr=O,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let g=Z.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){let g=Z.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(g){g!==void 0&&(Pt=g,this.setSize(St,ht,!1))},this.getSize=function(g){return g.set(St,ht)},this.setSize=function(g,I,N=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}St=g,ht=I,e.width=Math.floor(g*Pt),e.height=Math.floor(I*Pt),N===!0&&(e.style.width=g+"px",e.style.height=I+"px"),this.setViewport(0,0,g,I)},this.getDrawingBufferSize=function(g){return g.set(St*Pt,ht*Pt).floor()},this.setDrawingBufferSize=function(g,I,N){St=g,ht=I,Pt=N,e.width=Math.floor(g*N),e.height=Math.floor(I*N),this.setViewport(0,0,g,I)},this.getCurrentViewport=function(g){return g.copy(_)},this.getViewport=function(g){return g.copy(kt)},this.setViewport=function(g,I,N,q){g.isVector4?kt.set(g.x,g.y,g.z,g.w):kt.set(g,I,N,q),Nt.viewport(_.copy(kt).multiplyScalar(Pt).round())},this.getScissor=function(g){return g.copy(Bt)},this.setScissor=function(g,I,N,q){g.isVector4?Bt.set(g.x,g.y,g.z,g.w):Bt.set(g,I,N,q),Nt.scissor(b.copy(Bt).multiplyScalar(Pt).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(g){Nt.setScissorTest(ge=g)},this.setOpaqueSort=function(g){vt=g},this.setTransparentSort=function(g){Vt=g},this.getClearColor=function(g){return g.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(g=!0,I=!0,N=!0){let q=0;if(g){let k=!1;if(z!==null){let V=z.texture.format;k=V===Vl||V===Gl||V===kl}if(k){let V=z.texture.type,j=V===pi||V===Qi||V===gr||V===Ls||V===Bl||V===Hl,gt=oe.getClearColor(),mt=oe.getClearAlpha(),xt=gt.r,Y=gt.g,at=gt.b;j?(f[0]=xt,f[1]=Y,f[2]=at,f[3]=mt,F.clearBufferuiv(F.COLOR,0,f)):(x[0]=xt,x[1]=Y,x[2]=at,x[3]=mt,F.clearBufferiv(F.COLOR,0,x))}else q|=F.COLOR_BUFFER_BIT}I&&(q|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),N&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Yt.dispose(),_e.dispose(),Xt.dispose(),M.dispose(),ot.dispose(),Mt.dispose(),nt.dispose(),T.dispose(),Jt.dispose(),O.dispose(),O.removeEventListener("sessionstart",_n),O.removeEventListener("sessionend",je),Re.stop()};function Q(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let g=Kt.autoReset,I=Gt.enabled,N=Gt.autoUpdate,q=Gt.needsUpdate,k=Gt.type;et(),Kt.autoReset=g,Gt.enabled=I,Gt.autoUpdate=N,Gt.needsUpdate=q,Gt.type=k}function At(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function Qt(g){let I=g.target;I.removeEventListener("dispose",Qt),ce(I)}function ce(g){fe(g),Xt.remove(g)}function fe(g){let I=Xt.get(g).programs;I!==void 0&&(I.forEach(function(N){Jt.releaseProgram(N)}),g.isShaderMaterial&&Jt.releaseShaderCache(g))}this.renderBufferDirect=function(g,I,N,q,k,V){I===null&&(I=re);let j=k.isMesh&&k.matrixWorld.determinant()<0,gt=lt(g,I,N,q,k);Nt.setMaterial(q,j);let mt=N.index,xt=1;if(q.wireframe===!0){if(mt=bt.getWireframeAttribute(N),mt===void 0)return;xt=2}let Y=N.drawRange,at=N.attributes.position,Ct=Y.start*xt,Ft=(Y.start+Y.count)*xt;V!==null&&(Ct=Math.max(Ct,V.start*xt),Ft=Math.min(Ft,(V.start+V.count)*xt)),mt!==null?(Ct=Math.max(Ct,0),Ft=Math.min(Ft,mt.count)):at!=null&&(Ct=Math.max(Ct,0),Ft=Math.min(Ft,at.count));let le=Ft-Ct;if(le<0||le===1/0)return;nt.setup(k,q,gt,N,mt);let Ge,me=$t;if(mt!==null&&(Ge=tt.get(mt),me=we,me.setIndex(Ge)),k.isMesh)q.wireframe===!0?(Nt.setLineWidth(q.wireframeLinewidth*wt()),me.setMode(F.LINES)):me.setMode(F.TRIANGLES);else if(k.isLine){let qt=q.linewidth;qt===void 0&&(qt=1),Nt.setLineWidth(qt*wt()),k.isLineSegments?me.setMode(F.LINES):k.isLineLoop?me.setMode(F.LINE_LOOP):me.setMode(F.LINE_STRIP)}else k.isPoints?me.setMode(F.POINTS):k.isSprite&&me.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)me.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let qt=k._multiDrawStarts,Ie=k._multiDrawCounts,Te=k._multiDrawCount,Mn=mt?tt.get(mt).bytesPerElement:1,yi=Xt.get(q).currentProgram.getUniforms();for(let ln=0;ln<Te;ln++)yi.setValue(F,"_gl_DrawID",ln),me.render(qt[ln]/Mn,Ie[ln])}else if(k.isInstancedMesh)me.renderInstances(Ct,le,k.count);else if(N.isInstancedBufferGeometry){let qt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Ie=Math.min(N.instanceCount,qt);me.renderInstances(Ct,le,Ie)}else me.render(Ct,le)};function te(g,I,N){g.transparent===!0&&g.side===In&&g.forceSinglePass===!1?(g.side=dn,g.needsUpdate=!0,$(g,I,N),g.side=Di,g.needsUpdate=!0,$(g,I,N),g.side=In):$(g,I,N)}this.compile=function(g,I,N=null){N===null&&(N=g),p=_e.get(N),p.init(I),w.push(p),N.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),g!==N&&g.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let q=new Set;return g.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let V=k.material;if(V)if(Array.isArray(V))for(let j=0;j<V.length;j++){let gt=V[j];te(gt,N,k),q.add(gt)}else te(V,N,k),q.add(V)}),w.pop(),p=null,q},this.compileAsync=function(g,I,N=null){let q=this.compile(g,I,N);return new Promise(k=>{function V(){if(q.forEach(function(j){Xt.get(j).currentProgram.isReady()&&q.delete(j)}),q.size===0){k(g);return}setTimeout(V,10)}Z.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let Ae=null;function be(g){Ae&&Ae(g)}function _n(){Re.stop()}function je(){Re.start()}let Re=new Fu;Re.setAnimationLoop(be),typeof self!="undefined"&&Re.setContext(self),this.setAnimationLoop=function(g){Ae=g,O.setAnimationLoop(g),g===null?Re.stop():Re.start()},O.addEventListener("sessionstart",_n),O.addEventListener("sessionend",je),this.render=function(g,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(I),I=O.getCamera()),g.isScene===!0&&g.onBeforeRender(v,g,I,z),p=_e.get(g,w.length),p.init(I),w.push(p),Ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Se.setFromProjectionMatrix(Ht),Dt=this.localClippingEnabled,Et=Lt.init(this.clippingPlanes,Dt),y=Yt.get(g,m.length),y.init(),m.push(y),O.enabled===!0&&O.isPresenting===!0){let V=v.xr.getDepthSensingMesh();V!==null&&U(V,I,-1/0,v.sortObjects)}U(g,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(vt,Vt),ue=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,ue&&oe.addToRenderList(y,g),this.info.render.frame++,Et===!0&&Lt.beginShadows();let N=p.state.shadowsArray;Gt.render(N,g,I),Et===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=y.opaque,k=y.transmissive;if(p.setupLights(),I.isArrayCamera){let V=I.cameras;if(k.length>0)for(let j=0,gt=V.length;j<gt;j++){let mt=V[j];A(q,k,g,mt)}ue&&oe.render(g);for(let j=0,gt=V.length;j<gt;j++){let mt=V[j];P(y,g,mt,mt.viewport)}}else k.length>0&&A(q,k,g,I),ue&&oe.render(g),P(y,g,I);z!==null&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),g.isScene===!0&&g.onAfterRender(v,g,I),nt.resetDefaultState(),C=-1,_t=null,w.pop(),w.length>0?(p=w[w.length-1],Et===!0&&Lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function U(g,I,N,q){if(g.visible===!1)return;if(g.layers.test(I.layers)){if(g.isGroup)N=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(I);else if(g.isLight)p.pushLight(g),g.castShadow&&p.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Se.intersectsSprite(g)){q&&ee.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Ht);let j=Mt.update(g),gt=g.material;gt.visible&&y.push(g,j,gt,N,ee.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Se.intersectsObject(g))){let j=Mt.update(g),gt=g.material;if(q&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),ee.copy(g.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),ee.copy(j.boundingSphere.center)),ee.applyMatrix4(g.matrixWorld).applyMatrix4(Ht)),Array.isArray(gt)){let mt=j.groups;for(let xt=0,Y=mt.length;xt<Y;xt++){let at=mt[xt],Ct=gt[at.materialIndex];Ct&&Ct.visible&&y.push(g,j,Ct,N,ee.z,at)}}else gt.visible&&y.push(g,j,gt,N,ee.z,null)}}let V=g.children;for(let j=0,gt=V.length;j<gt;j++)U(V[j],I,N,q)}function P(g,I,N,q){let k=g.opaque,V=g.transmissive,j=g.transparent;p.setupLightsView(N),Et===!0&&Lt.setGlobalState(v.clippingPlanes,N),q&&Nt.viewport(_.copy(q)),k.length>0&&X(k,I,N),V.length>0&&X(V,I,N),j.length>0&&X(j,I,N),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function A(g,I,N,q){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new mi(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Ir:pi,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));let V=p.state.transmissionRenderTarget[q.id],j=q.viewport||_;V.setSize(j.z,j.w);let gt=v.getRenderTarget();v.setRenderTarget(V),v.getClearColor(ft),pt=v.getClearAlpha(),pt<1&&v.setClearColor(16777215,.5),v.clear(),ue&&oe.render(N);let mt=v.toneMapping;v.toneMapping=Pi;let xt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Et===!0&&Lt.setGlobalState(v.clippingPlanes,q),X(g,N,q),D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Y=!1;for(let at=0,Ct=I.length;at<Ct;at++){let Ft=I[at],le=Ft.object,Ge=Ft.geometry,me=Ft.material,qt=Ft.group;if(me.side===In&&le.layers.test(q.layers)){let Ie=me.side;me.side=dn,me.needsUpdate=!0,B(le,N,q,Ge,me,qt),me.side=Ie,me.needsUpdate=!0,Y=!0}}Y===!0&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V))}v.setRenderTarget(gt),v.setClearColor(ft,pt),xt!==void 0&&(q.viewport=xt),v.toneMapping=mt}function X(g,I,N){let q=I.isScene===!0?I.overrideMaterial:null;for(let k=0,V=g.length;k<V;k++){let j=g[k],gt=j.object,mt=j.geometry,xt=q===null?j.material:q,Y=j.group;gt.layers.test(N.layers)&&B(gt,I,N,mt,xt,Y)}}function B(g,I,N,q,k,V){g.onBeforeRender(v,I,N,q,k,V),g.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),k.onBeforeRender(v,I,N,q,g,V),k.transparent===!0&&k.side===In&&k.forceSinglePass===!1?(k.side=dn,k.needsUpdate=!0,v.renderBufferDirect(N,I,q,k,g,V),k.side=Di,k.needsUpdate=!0,v.renderBufferDirect(N,I,q,k,g,V),k.side=In):v.renderBufferDirect(N,I,q,k,g,V),g.onAfterRender(v,I,N,q,k,V)}function $(g,I,N){I.isScene!==!0&&(I=re);let q=Xt.get(g),k=p.state.lights,V=p.state.shadowsArray,j=k.state.version,gt=Jt.getParameters(g,k.state,V,I,N),mt=Jt.getProgramCacheKey(gt),xt=q.programs;q.environment=g.isMeshStandardMaterial?I.environment:null,q.fog=I.fog,q.envMap=(g.isMeshStandardMaterial?ot:M).get(g.envMap||q.environment),q.envMapRotation=q.environment!==null&&g.envMap===null?I.environmentRotation:g.envMapRotation,xt===void 0&&(g.addEventListener("dispose",Qt),xt=new Map,q.programs=xt);let Y=xt.get(mt);if(Y!==void 0){if(q.currentProgram===Y&&q.lightsStateVersion===j)return st(g,gt),Y}else gt.uniforms=Jt.getUniforms(g),g.onBeforeCompile(gt,v),Y=Jt.acquireProgram(gt,mt),xt.set(mt,Y),q.uniforms=gt.uniforms;let at=q.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(at.clippingPlanes=Lt.uniform),st(g,gt),q.needsLights=ut(g),q.lightsStateVersion=j,q.needsLights&&(at.ambientLightColor.value=k.state.ambient,at.lightProbe.value=k.state.probe,at.directionalLights.value=k.state.directional,at.directionalLightShadows.value=k.state.directionalShadow,at.spotLights.value=k.state.spot,at.spotLightShadows.value=k.state.spotShadow,at.rectAreaLights.value=k.state.rectArea,at.ltc_1.value=k.state.rectAreaLTC1,at.ltc_2.value=k.state.rectAreaLTC2,at.pointLights.value=k.state.point,at.pointLightShadows.value=k.state.pointShadow,at.hemisphereLights.value=k.state.hemi,at.directionalShadowMap.value=k.state.directionalShadowMap,at.directionalShadowMatrix.value=k.state.directionalShadowMatrix,at.spotShadowMap.value=k.state.spotShadowMap,at.spotLightMatrix.value=k.state.spotLightMatrix,at.spotLightMap.value=k.state.spotLightMap,at.pointShadowMap.value=k.state.pointShadowMap,at.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Y,q.uniformsList=null,Y}function it(g){if(g.uniformsList===null){let I=g.currentProgram.getUniforms();g.uniformsList=Cs.seqWithValue(I.seq,g.uniforms)}return g.uniformsList}function st(g,I){let N=Xt.get(g);N.outputColorSpace=I.outputColorSpace,N.batching=I.batching,N.batchingColor=I.batchingColor,N.instancing=I.instancing,N.instancingColor=I.instancingColor,N.instancingMorph=I.instancingMorph,N.skinning=I.skinning,N.morphTargets=I.morphTargets,N.morphNormals=I.morphNormals,N.morphColors=I.morphColors,N.morphTargetsCount=I.morphTargetsCount,N.numClippingPlanes=I.numClippingPlanes,N.numIntersection=I.numClipIntersection,N.vertexAlphas=I.vertexAlphas,N.vertexTangents=I.vertexTangents,N.toneMapping=I.toneMapping}function lt(g,I,N,q,k){I.isScene!==!0&&(I=re),D.resetTextureUnits();let V=I.fog,j=q.isMeshStandardMaterial?I.environment:null,gt=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Fi,mt=(q.isMeshStandardMaterial?ot:M).get(q.envMap||j),xt=q.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Y=!!N.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),at=!!N.morphAttributes.position,Ct=!!N.morphAttributes.normal,Ft=!!N.morphAttributes.color,le=Pi;q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(le=v.toneMapping);let Ge=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,me=Ge!==void 0?Ge.length:0,qt=Xt.get(q),Ie=p.state.lights;if(Et===!0&&(Dt===!0||g!==_t)){let En=g===_t&&q.id===C;Lt.setState(q,g,En)}let Te=!1;q.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ie.state.version||qt.outputColorSpace!==gt||k.isBatchedMesh&&qt.batching===!1||!k.isBatchedMesh&&qt.batching===!0||k.isBatchedMesh&&qt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&qt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&qt.instancing===!1||!k.isInstancedMesh&&qt.instancing===!0||k.isSkinnedMesh&&qt.skinning===!1||!k.isSkinnedMesh&&qt.skinning===!0||k.isInstancedMesh&&qt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&qt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&qt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&qt.instancingMorph===!1&&k.morphTexture!==null||qt.envMap!==mt||q.fog===!0&&qt.fog!==V||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Lt.numPlanes||qt.numIntersection!==Lt.numIntersection)||qt.vertexAlphas!==xt||qt.vertexTangents!==Y||qt.morphTargets!==at||qt.morphNormals!==Ct||qt.morphColors!==Ft||qt.toneMapping!==le||qt.morphTargetsCount!==me)&&(Te=!0):(Te=!0,qt.__version=q.version);let Mn=qt.currentProgram;Te===!0&&(Mn=$(q,I,k));let yi=!1,ln=!1,Xs=!1,Je=Mn.getUniforms(),Bn=qt.uniforms;if(Nt.useProgram(Mn.program)&&(yi=!0,ln=!0,Xs=!0),q.id!==C&&(C=q.id,ln=!0),yi||_t!==g){Rt.reverseDepthBuffer?(Zt.copy(g.projectionMatrix),Jd(Zt),$d(Zt),Je.setValue(F,"projectionMatrix",Zt)):Je.setValue(F,"projectionMatrix",g.projectionMatrix),Je.setValue(F,"viewMatrix",g.matrixWorldInverse);let En=Je.map.cameraPosition;En!==void 0&&En.setValue(F,ne.setFromMatrixPosition(g.matrixWorld)),Rt.logarithmicDepthBuffer&&Je.setValue(F,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Je.setValue(F,"isOrthographic",g.isOrthographicCamera===!0),_t!==g&&(_t=g,ln=!0,Xs=!0)}if(k.isSkinnedMesh){Je.setOptional(F,k,"bindMatrix"),Je.setOptional(F,k,"bindMatrixInverse");let En=k.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Je.setValue(F,"boneTexture",En.boneTexture,D))}k.isBatchedMesh&&(Je.setOptional(F,k,"batchingTexture"),Je.setValue(F,"batchingTexture",k._matricesTexture,D),Je.setOptional(F,k,"batchingIdTexture"),Je.setValue(F,"batchingIdTexture",k._indirectTexture,D),Je.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&Je.setValue(F,"batchingColorTexture",k._colorsTexture,D));let Hi=N.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&ae.update(k,N,Mn),(ln||qt.receiveShadow!==k.receiveShadow)&&(qt.receiveShadow=k.receiveShadow,Je.setValue(F,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Bn.envMap.value=mt,Bn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&I.environment!==null&&(Bn.envMapIntensity.value=I.environmentIntensity),ln&&(Je.setValue(F,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&rt(Bn,Xs),V&&q.fog===!0&&zt.refreshFogUniforms(Bn,V),zt.refreshMaterialUniforms(Bn,q,Pt,ht,p.state.transmissionRenderTarget[g.id]),Cs.upload(F,it(qt),Bn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Cs.upload(F,it(qt),Bn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Je.setValue(F,"center",k.center),Je.setValue(F,"modelViewMatrix",k.modelViewMatrix),Je.setValue(F,"normalMatrix",k.normalMatrix),Je.setValue(F,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let En=q.uniformsGroups;for(let Hn=0,Nr=En.length;Hn<Nr;Hn++){let qs=En[Hn];T.update(qs,Mn),T.bind(qs,Mn)}}return Mn}function rt(g,I){g.ambientLightColor.needsUpdate=I,g.lightProbe.needsUpdate=I,g.directionalLights.needsUpdate=I,g.directionalLightShadows.needsUpdate=I,g.pointLights.needsUpdate=I,g.pointLightShadows.needsUpdate=I,g.spotLights.needsUpdate=I,g.spotLightShadows.needsUpdate=I,g.rectAreaLights.needsUpdate=I,g.hemisphereLights.needsUpdate=I}function ut(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(g,I,N){Xt.get(g.texture).__webglTexture=I,Xt.get(g.depthTexture).__webglTexture=N;let q=Xt.get(g);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=N===void 0,q.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,I){let N=Xt.get(g);N.__webglFramebuffer=I,N.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(g,I=0,N=0){z=g,K=I,R=N;let q=!0,k=null,V=!1,j=!1;if(g){let mt=Xt.get(g);if(mt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(mt.__webglFramebuffer===void 0)D.setupRenderTarget(g);else if(mt.__hasExternalTextures)D.rebindTextures(g,Xt.get(g.texture).__webglTexture,Xt.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){let at=g.depthTexture;if(mt.__boundDepthTexture!==at){if(at!==null&&Xt.has(at)&&(g.width!==at.image.width||g.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(g)}}let xt=g.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(j=!0);let Y=Xt.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Y[I])?k=Y[I][N]:k=Y[I],V=!0):g.samples>0&&D.useMultisampledRTT(g)===!1?k=Xt.get(g).__webglMultisampledFramebuffer:Array.isArray(Y)?k=Y[N]:k=Y,_.copy(g.viewport),b.copy(g.scissor),dt=g.scissorTest}else _.copy(kt).multiplyScalar(Pt).floor(),b.copy(Bt).multiplyScalar(Pt).floor(),dt=ge;if(Nt.bindFramebuffer(F.FRAMEBUFFER,k)&&q&&Nt.drawBuffers(g,k),Nt.viewport(_),Nt.scissor(b),Nt.setScissorTest(dt),V){let mt=Xt.get(g.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,N)}else if(j){let mt=Xt.get(g.texture),xt=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,mt.__webglTexture,N||0,xt)}C=-1},this.readRenderTargetPixels=function(g,I,N,q,k,V,j){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Xt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&j!==void 0&&(gt=gt[j]),gt){Nt.bindFramebuffer(F.FRAMEBUFFER,gt);try{let mt=g.texture,xt=mt.format,Y=mt.type;if(!Rt.textureFormatReadable(xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Y)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=g.width-q&&N>=0&&N<=g.height-k&&F.readPixels(I,N,q,k,J.convert(xt),J.convert(Y),V)}finally{let mt=z!==null?Xt.get(z).__webglFramebuffer:null;Nt.bindFramebuffer(F.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(g,I,N,q,k,V,j){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Xt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&j!==void 0&&(gt=gt[j]),gt){let mt=g.texture,xt=mt.format,Y=mt.type;if(!Rt.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Y))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=g.width-q&&N>=0&&N<=g.height-k){Nt.bindFramebuffer(F.FRAMEBUFFER,gt);let at=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.bufferData(F.PIXEL_PACK_BUFFER,V.byteLength,F.STREAM_READ),F.readPixels(I,N,q,k,J.convert(xt),J.convert(Y),0);let Ct=z!==null?Xt.get(z).__webglFramebuffer:null;Nt.bindFramebuffer(F.FRAMEBUFFER,Ct);let Ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zd(F,Ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,V),F.deleteBuffer(at),F.deleteSync(Ft),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,I=null,N=0){g.isTexture!==!0&&(To("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,g=arguments[1]);let q=Math.pow(2,-N),k=Math.floor(g.image.width*q),V=Math.floor(g.image.height*q),j=I!==null?I.x:0,gt=I!==null?I.y:0;D.setTexture2D(g,0),F.copyTexSubImage2D(F.TEXTURE_2D,N,0,0,j,gt,k,V),Nt.unbindTexture()},this.copyTextureToTexture=function(g,I,N=null,q=null,k=0){g.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,g=arguments[1],I=arguments[2],k=arguments[3]||0,N=null);let V,j,gt,mt,xt,Y;N!==null?(V=N.max.x-N.min.x,j=N.max.y-N.min.y,gt=N.min.x,mt=N.min.y):(V=g.image.width,j=g.image.height,gt=0,mt=0),q!==null?(xt=q.x,Y=q.y):(xt=0,Y=0);let at=J.convert(I.format),Ct=J.convert(I.type);D.setTexture2D(I,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);let Ft=F.getParameter(F.UNPACK_ROW_LENGTH),le=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ge=F.getParameter(F.UNPACK_SKIP_PIXELS),me=F.getParameter(F.UNPACK_SKIP_ROWS),qt=F.getParameter(F.UNPACK_SKIP_IMAGES),Ie=g.isCompressedTexture?g.mipmaps[k]:g.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gt),F.pixelStorei(F.UNPACK_SKIP_ROWS,mt),g.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,xt,Y,V,j,at,Ct,Ie.data):g.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,xt,Y,Ie.width,Ie.height,at,Ie.data):F.texSubImage2D(F.TEXTURE_2D,k,xt,Y,V,j,at,Ct,Ie),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ge),F.pixelStorei(F.UNPACK_SKIP_ROWS,me),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt),k===0&&I.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Nt.unbindTexture()},this.copyTextureToTexture3D=function(g,I,N=null,q=null,k=0){g.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,q=arguments[1]||null,g=arguments[2],I=arguments[3],k=arguments[4]||0);let V,j,gt,mt,xt,Y,at,Ct,Ft,le=g.isCompressedTexture?g.mipmaps[k]:g.image;N!==null?(V=N.max.x-N.min.x,j=N.max.y-N.min.y,gt=N.max.z-N.min.z,mt=N.min.x,xt=N.min.y,Y=N.min.z):(V=le.width,j=le.height,gt=le.depth,mt=0,xt=0,Y=0),q!==null?(at=q.x,Ct=q.y,Ft=q.z):(at=0,Ct=0,Ft=0);let Ge=J.convert(I.format),me=J.convert(I.type),qt;if(I.isData3DTexture)D.setTexture3D(I,0),qt=F.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)D.setTexture2DArray(I,0),qt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);let Ie=F.getParameter(F.UNPACK_ROW_LENGTH),Te=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Mn=F.getParameter(F.UNPACK_SKIP_PIXELS),yi=F.getParameter(F.UNPACK_SKIP_ROWS),ln=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,le.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,xt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Y),g.isDataTexture||g.isData3DTexture?F.texSubImage3D(qt,k,at,Ct,Ft,V,j,gt,Ge,me,le.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(qt,k,at,Ct,Ft,V,j,gt,Ge,le.data):F.texSubImage3D(qt,k,at,Ct,Ft,V,j,gt,Ge,me,le),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Mn),F.pixelStorei(F.UNPACK_SKIP_ROWS,yi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ln),k===0&&I.generateMipmaps&&F.generateMipmap(qt),Nt.unbindTexture()},this.initRenderTarget=function(g){Xt.get(g).__webglFramebuffer===void 0&&D.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?D.setTextureCube(g,0):g.isData3DTexture?D.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?D.setTexture2DArray(g,0):D.setTexture2D(g,0),Nt.unbindTexture()},this.resetState=function(){K=0,R=0,z=null,Nt.reset(),nt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Wl?"display-p3":"srgb",e.unpackColorSpace=Ue.workingColorSpace===la?"display-p3":"srgb"}};var ji=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bn=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Go=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new L,yr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ii=class extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ys,sr=new L,vs=new L,Ms=new L,Es=new It,rr=new It,ku=new Pe,co=new L,or=new L,lo=new L,tu=new It,ec=new It,eu=new It,cn=class extends nn{constructor(t=new ii){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Go(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new yr(n,3,0,!1)),ys.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),ku.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-Ms.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ho(co.set(-.5,-.5,0),Ms,o,vs,s,r),ho(or.set(.5,-.5,0),Ms,o,vs,s,r),ho(lo.set(.5,.5,0),Ms,o,vs,s,r),tu.set(0,0),ec.set(1,0),eu.set(1,1);let a=t.ray.intersectTriangle(co,or,lo,!1,sr);if(a===null&&(ho(or.set(-.5,.5,0),Ms,o,vs,s,r),ec.set(0,1),a=t.ray.intersectTriangle(co,lo,or,!1,sr),a===null))return;let c=t.ray.origin.distanceTo(sr);c<t.near||c>t.far||e.push({distance:c,point:sr.clone(),uv:Ri.getInterpolation(sr,co,or,lo,tu,ec,eu,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ho(i,t,e,n,s,r){Es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(rr.x=r*Es.x-s*Es.y,rr.y=s*Es.x+r*Es.y):rr.copy(Es),i.copy(t),i.x+=rr.x,i.y+=rr.y,i.applyMatrix4(ku)}var ul=class extends pn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Sn,h=Sn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends Ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ss=new Pe,nu=new Pe,uo=[],iu=new Yn,qg=new Pe,ar=new ct,cr=new gi,Vo=class extends ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),iu.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(iu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),cr.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),nu.multiplyMatrices(n,Ss),ar.matrixWorld=nu,ar.raycast(t,uo);for(let o=0,a=uo.length;o<a;o++){let c=uo[o];c.instanceId=r,c.object=this,e.push(c)}uo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ul(new Float32Array(s*this.count),s,this.count,zl,ei));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Mr=class extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Wo=new L,Xo=new L,su=new Pe,lr=new Ns,fo=new gi,nc=new L,ru=new L,dl=class extends nn{constructor(t=new ke,e=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Wo.fromBufferAttribute(e,s-1),Xo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Wo.distanceTo(Xo);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,t.ray.intersectsSphere(fo)===!1)return;su.copy(s).invert(),lr.copy(t.ray).applyMatrix4(su);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let y=f,p=x-1;y<p;y+=l){let m=h.getX(y),w=h.getX(y+1),v=po(this,t,lr,c,m,w);v&&e.push(v)}if(this.isLineLoop){let y=h.getX(x-1),p=h.getX(f),m=po(this,t,lr,c,y,p);m&&e.push(m)}}else{let f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let y=f,p=x-1;y<p;y+=l){let m=po(this,t,lr,c,y,y+1);m&&e.push(m)}if(this.isLineLoop){let y=po(this,t,lr,c,x-1,f);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function po(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Wo.fromBufferAttribute(o,s),Xo.fromBufferAttribute(o,r),e.distanceSqToSegment(Wo,Xo,nc,ru)>n)return;nc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(nc);if(!(c<t.near||c>t.far))return{distance:c,point:ru.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ou=new L,au=new L,qo=class extends dl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ou.fromBufferAttribute(e,s),au.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ou.distanceTo(au);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ni=class extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cu=new Pe,fl=new Ns,mo=new gi,go=new L,ts=class extends nn{constructor(t=new ke,e=new Ni){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;cu.copy(s).invert(),fl.copy(t.ray).applyMatrix4(cu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let x=d,y=f;x<y;x++){let p=l.getX(x);go.fromBufferAttribute(u,p),lu(go,p,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let x=d,y=f;x<y;x++)go.fromBufferAttribute(u,x),lu(go,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lu(i,t,e,n,s,r,o){let a=fl.distanceSqToPoint(i);if(a<e){let c=new L;fl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var mn=class extends pn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new It:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,c=new Pe;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(an(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(an(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Er=class extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},pl=class extends Er{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ql(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var xo=new L,ic=new ql,sc=new ql,rc=new ql,Sr=class extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(xo.subVectors(s[0],s[1]).add(s[0]),l=xo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),x<1e-4&&(x=y),p<1e-4&&(p=y),ic.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,x,y,p),sc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,x,y,p),rc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,x,y,p)}else this.curveType==="catmullrom"&&(ic.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),sc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),rc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ic.calc(c),sc.calc(c),rc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Yg(i,t){let e=1-i;return e*e*t}function Zg(i,t){return 2*(1-i)*i*t}function Jg(i,t){return i*i*t}function fr(i,t,e,n){return Yg(i,t)+Zg(i,e)+Jg(i,n)}function $g(i,t){let e=1-i;return e*e*e*t}function Kg(i,t){let e=1-i;return 3*e*e*i*t}function Qg(i,t){return 3*(1-i)*i*i*t}function jg(i,t){return i*i*i*t}function pr(i,t,e,n,s){return $g(i,t)+Kg(i,e)+Qg(i,n)+jg(i,s)}var Yo=class extends Ln{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(t,s.x,r.x,o.x,a.x),pr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ml=class extends Ln{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(t,s.x,r.x,o.x,a.x),pr(t,s.y,r.y,o.y,a.y),pr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zo=class extends Ln{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gl=class extends Ln{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends Ln{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(t,s.x,r.x,o.x),fr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends Ln{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(t,s.x,r.x,o.x),fr(t,s.y,r.y,o.y),fr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(hu(a,c.x,l.x,h.x,u.x),hu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},Qo=Object.freeze({__proto__:null,ArcCurve:pl,CatmullRomCurve3:Sr,CubicBezierCurve:Yo,CubicBezierCurve3:ml,EllipseCurve:Er,LineCurve:Zo,LineCurve3:gl,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:$o,SplineCurve:Ko}),xl=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Qo[s.type]().fromJSON(s))}return this}},wr=class extends xl{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zo(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Jo(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Yo(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ko(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Er(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},_l=class i extends ke{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=an(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new L,d=new It,f=new L,x=new L,y=new L,p=0,m=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:p=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,f.x=m*1,f.y=-p,f.z=m*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:p=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(x)}for(let w=0;w<=e;w++){let v=n+w*h*s,S=Math.sin(v),K=Math.cos(v);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*S,u.y=t[R].y,u.z=t[R].x*K,o.push(u.x,u.y,u.z),d.x=w/e,d.y=R/(t.length-1),a.push(d.x,d.y);let z=c[3*R+0]*S,C=c[3*R+1],_t=c[3*R+0]*K;l.push(z,C,_t)}}for(let w=0;w<e;w++)for(let v=0;v<t.length-1;v++){let S=v+w*t.length,K=S,R=S+t.length,z=S+t.length+1,C=S+1;r.push(K,R,C),r.push(z,C,R)}this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("uv",new ye(a,2)),this.setAttribute("normal",new ye(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},jo=class i extends _l{constructor(t=1,e=1,n=4,s=8){let r=new wr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},br=class i extends ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new It;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},De=class i extends ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],x=0,y=[],p=n/2,m=0;w(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function w(){let S=new L,K=new L,R=0,z=(e-t)/n;for(let C=0;C<=r;C++){let _t=[],_=C/r,b=_*(e-t)+t;for(let dt=0;dt<=s;dt++){let ft=dt/s,pt=ft*c+a,St=Math.sin(pt),ht=Math.cos(pt);K.x=b*St,K.y=-_*n+p,K.z=b*ht,u.push(K.x,K.y,K.z),S.set(St,z,ht).normalize(),d.push(S.x,S.y,S.z),f.push(ft,1-_),_t.push(x++)}y.push(_t)}for(let C=0;C<s;C++)for(let _t=0;_t<r;_t++){let _=y[_t][C],b=y[_t+1][C],dt=y[_t+1][C+1],ft=y[_t][C+1];t>0&&(h.push(_,b,ft),R+=3),e>0&&(h.push(b,dt,ft),R+=3)}l.addGroup(m,R,0),m+=R}function v(S){let K=x,R=new It,z=new L,C=0,_t=S===!0?t:e,_=S===!0?1:-1;for(let dt=1;dt<=s;dt++)u.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),x++;let b=x;for(let dt=0;dt<=s;dt++){let pt=dt/s*c+a,St=Math.cos(pt),ht=Math.sin(pt);z.x=_t*ht,z.y=p*_,z.z=_t*St,u.push(z.x,z.y,z.z),d.push(0,_,0),R.x=St*.5+.5,R.y=ht*.5*_+.5,f.push(R.x,R.y),x++}for(let dt=0;dt<s;dt++){let ft=K+dt,pt=b+dt;S===!0?h.push(pt,pt+1,ft):h.push(pt+1,pt,ft),C+=3}l.addGroup(m,C,S===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Un=class i extends De{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=class i extends ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let v=new L,S=new L,K=new L;for(let R=0;R<e.length;R+=3)f(e[R+0],v),f(e[R+1],S),f(e[R+2],K),c(v,S,K,w)}function c(w,v,S,K){let R=K+1,z=[];for(let C=0;C<=R;C++){z[C]=[];let _t=w.clone().lerp(S,C/R),_=v.clone().lerp(S,C/R),b=R-C;for(let dt=0;dt<=b;dt++)dt===0&&C===R?z[C][dt]=_t:z[C][dt]=_t.clone().lerp(_,dt/b)}for(let C=0;C<R;C++)for(let _t=0;_t<2*(R-C)-1;_t++){let _=Math.floor(_t/2);_t%2===0?(d(z[C][_+1]),d(z[C+1][_]),d(z[C][_])):(d(z[C][_+1]),d(z[C+1][_+1]),d(z[C+1][_]))}}function l(w){let v=new L;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(w),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){let w=new L;for(let v=0;v<r.length;v+=3){w.x=r[v+0],w.y=r[v+1],w.z=r[v+2];let S=p(w)/2/Math.PI+.5,K=m(w)/Math.PI+.5;o.push(S,1-K)}x(),u()}function u(){for(let w=0;w<o.length;w+=6){let v=o[w+0],S=o[w+2],K=o[w+4],R=Math.max(v,S,K),z=Math.min(v,S,K);R>.9&&z<.1&&(v<.2&&(o[w+0]+=1),S<.2&&(o[w+2]+=1),K<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,v){let S=w*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function x(){let w=new L,v=new L,S=new L,K=new L,R=new It,z=new It,C=new It;for(let _t=0,_=0;_t<r.length;_t+=9,_+=6){w.set(r[_t+0],r[_t+1],r[_t+2]),v.set(r[_t+3],r[_t+4],r[_t+5]),S.set(r[_t+6],r[_t+7],r[_t+8]),R.set(o[_+0],o[_+1]),z.set(o[_+2],o[_+3]),C.set(o[_+4],o[_+5]),K.copy(w).add(v).add(S).divideScalar(3);let b=p(K);y(R,_+0,w,b),y(z,_+2,v,b),y(C,_+4,S,b)}}function y(w,v,S,K){K<0&&w.x===1&&(o[v]=w.x-1),S.x===0&&S.z===0&&(o[v]=K/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Zn=class extends wr{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new wr().fromJSON(s))}return this}},tx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=rx(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let x=e;x<s;x+=e)u=i[x],d=i[x+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Tr(r,o,e,a,c,f,0),o}};function Gu(i,t,e,n,s){let r,o;if(s===xx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=uu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=uu(r,i[r],i[r+1],o);return o&&ua(o,o.next)&&(Rr(o),o=o.next),o}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ua(e,e.next)||$e(e.prev,e,e.next)===0)){if(Rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Tr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ux(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?nx(i,n,s,r):ex(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Rr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ix(es(i),t,e),Tr(i,t,e,n,s,r,2)):o===2&&sx(i,t,e,n,s,r):Tr(es(i),t,e,n,s,r,1);break}}}function ex(i){let t=i.prev,e=i,n=i.next;if($e(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=f&&bs(s,a,r,c,o,l,x.x,x.y)&&$e(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function nx(i,t,e,n){let s=i.prev,r=i,o=i.next;if($e(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,x=h<u?h<d?h:d:u<d?u:d,y=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=yl(f,x,t,e,n),w=yl(y,p,t,e,n),v=i.prevZ,S=i.nextZ;for(;v&&v.z>=m&&S&&S.z<=w;){if(v.x>=f&&v.x<=y&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&bs(a,h,c,u,l,d,v.x,v.y)&&$e(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=f&&S.x<=y&&S.y>=x&&S.y<=p&&S!==s&&S!==o&&bs(a,h,c,u,l,d,S.x,S.y)&&$e(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=y&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&bs(a,h,c,u,l,d,v.x,v.y)&&$e(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=w;){if(S.x>=f&&S.x<=y&&S.y>=x&&S.y<=p&&S!==s&&S!==o&&bs(a,h,c,u,l,d,S.x,S.y)&&$e(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function ix(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ua(s,r)&&Vu(s,n,n.next,r)&&Ar(s,r)&&Ar(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Rr(n),Rr(n.next),n=i=r),n=n.next}while(n!==i);return es(n)}function sx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&px(o,a)){let c=Wu(o,a);o=es(o,o.next),c=es(c,c.next),Tr(o,t,e,n,s,r,0),Tr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function rx(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Gu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(fx(l));for(s.sort(ox),r=0;r<s.length;r++)e=ax(s[r],e);return e}function ox(i,t){return i.x-t.x}function ax(i,t){let e=lx(i,t);if(!e)return t;let n=Wu(e,i);return es(n,n.next),es(e,e.next)}function lx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&bs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ar(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&hx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function hx(i,t){return $e(i.prev,i,t.prev)<0&&$e(t.next,i,i.next)<0}function ux(i,t,e,n){let s=i;do s.z===0&&(s.z=yl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dx(s)}function dx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function yl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function px(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mx(i,t)&&(Ar(i,t)&&Ar(t,i)&&gx(i,t)&&($e(i.prev,i,t.prev)||$e(i,t.prev,t))||ua(i,t)&&$e(i.prev,i,i.next)>0&&$e(t.prev,t,t.next)>0)}function $e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ua(i,t){return i.x===t.x&&i.y===t.y}function Vu(i,t,e,n){let s=yo($e(i,t,e)),r=yo($e(i,t,n)),o=yo($e(e,n,i)),a=yo($e(e,n,t));return!!(s!==r&&o!==a||s===0&&_o(i,e,t)||r===0&&_o(i,n,t)||o===0&&_o(e,i,n)||a===0&&_o(e,t,n))}function _o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yo(i){return i>0?1:i<0?-1:0}function mx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ar(i,t){return $e(i.prev,i,i.next)<0?$e(i,t,i.next)>=0&&$e(i,i.prev,t)>=0:$e(i,t,i.prev)<0||$e(i,i.next,t)<0}function gx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wu(i,t){let e=new vl(i.i,i.x,i.y),n=new vl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function uu(i,t,e,n){let s=new vl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ii=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];du(t),fu(n,t);let o=t.length;e.forEach(du);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,fu(n,e[c]);let a=tx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function du(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Bs=class i extends ke{constructor(t=new Zn([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:_x,v,S=!1,K,R,z,C;m&&(v=m.getSpacedPoints(h),S=!0,d=!1,K=m.computeFrenetFrames(h,!1),R=new L,z=new L,C=new L),d||(p=0,f=0,x=0,y=0);let _t=a.extractPoints(l),_=_t.shape,b=_t.holes;if(!Ii.isClockWise(_)){_=_.reverse();for(let wt=0,F=b.length;wt<F;wt++){let Ot=b[wt];Ii.isClockWise(Ot)&&(b[wt]=Ot.reverse())}}let ft=Ii.triangulateShape(_,b),pt=_;for(let wt=0,F=b.length;wt<F;wt++){let Ot=b[wt];_=_.concat(Ot)}function St(wt,F,Ot){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),wt.clone().addScaledVector(F,Ot)}let ht=_.length,Pt=ft.length;function vt(wt,F,Ot){let Z,Rt,Nt,Kt=wt.x-F.x,Xt=wt.y-F.y,D=Ot.x-wt.x,M=Ot.y-wt.y,ot=Kt*Kt+Xt*Xt,tt=Kt*M-Xt*D;if(Math.abs(tt)>Number.EPSILON){let bt=Math.sqrt(ot),Mt=Math.sqrt(D*D+M*M),Jt=F.x-Xt/bt,zt=F.y+Kt/bt,Yt=Ot.x-M/Mt,_e=Ot.y+D/Mt,Lt=((Yt-Jt)*M-(_e-zt)*D)/(Kt*M-Xt*D);Z=Jt+Kt*Lt-wt.x,Rt=zt+Xt*Lt-wt.y;let Gt=Z*Z+Rt*Rt;if(Gt<=2)return new It(Z,Rt);Nt=Math.sqrt(Gt/2)}else{let bt=!1;Kt>Number.EPSILON?D>Number.EPSILON&&(bt=!0):Kt<-Number.EPSILON?D<-Number.EPSILON&&(bt=!0):Math.sign(Xt)===Math.sign(M)&&(bt=!0),bt?(Z=-Xt,Rt=Kt,Nt=Math.sqrt(ot)):(Z=Kt,Rt=Xt,Nt=Math.sqrt(ot/2))}return new It(Z/Nt,Rt/Nt)}let Vt=[];for(let wt=0,F=pt.length,Ot=F-1,Z=wt+1;wt<F;wt++,Ot++,Z++)Ot===F&&(Ot=0),Z===F&&(Z=0),Vt[wt]=vt(pt[wt],pt[Ot],pt[Z]);let kt=[],Bt,ge=Vt.concat();for(let wt=0,F=b.length;wt<F;wt++){let Ot=b[wt];Bt=[];for(let Z=0,Rt=Ot.length,Nt=Rt-1,Kt=Z+1;Z<Rt;Z++,Nt++,Kt++)Nt===Rt&&(Nt=0),Kt===Rt&&(Kt=0),Bt[Z]=vt(Ot[Z],Ot[Nt],Ot[Kt]);kt.push(Bt),ge=ge.concat(Bt)}for(let wt=0;wt<p;wt++){let F=wt/p,Ot=f*Math.cos(F*Math.PI/2),Z=x*Math.sin(F*Math.PI/2)+y;for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++){let Kt=St(pt[Rt],Vt[Rt],Z);Ht(Kt.x,Kt.y,-Ot)}for(let Rt=0,Nt=b.length;Rt<Nt;Rt++){let Kt=b[Rt];Bt=kt[Rt];for(let Xt=0,D=Kt.length;Xt<D;Xt++){let M=St(Kt[Xt],Bt[Xt],Z);Ht(M.x,M.y,-Ot)}}}let Se=x+y;for(let wt=0;wt<ht;wt++){let F=d?St(_[wt],ge[wt],Se):_[wt];S?(z.copy(K.normals[0]).multiplyScalar(F.x),R.copy(K.binormals[0]).multiplyScalar(F.y),C.copy(v[0]).add(z).add(R),Ht(C.x,C.y,C.z)):Ht(F.x,F.y,0)}for(let wt=1;wt<=h;wt++)for(let F=0;F<ht;F++){let Ot=d?St(_[F],ge[F],Se):_[F];S?(z.copy(K.normals[wt]).multiplyScalar(Ot.x),R.copy(K.binormals[wt]).multiplyScalar(Ot.y),C.copy(v[wt]).add(z).add(R),Ht(C.x,C.y,C.z)):Ht(Ot.x,Ot.y,u/h*wt)}for(let wt=p-1;wt>=0;wt--){let F=wt/p,Ot=f*Math.cos(F*Math.PI/2),Z=x*Math.sin(F*Math.PI/2)+y;for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++){let Kt=St(pt[Rt],Vt[Rt],Z);Ht(Kt.x,Kt.y,u+Ot)}for(let Rt=0,Nt=b.length;Rt<Nt;Rt++){let Kt=b[Rt];Bt=kt[Rt];for(let Xt=0,D=Kt.length;Xt<D;Xt++){let M=St(Kt[Xt],Bt[Xt],Z);S?Ht(M.x,M.y+v[h-1].y,v[h-1].x+Ot):Ht(M.x,M.y,u+Ot)}}}Et(),Dt();function Et(){let wt=s.length/3;if(d){let F=0,Ot=ht*F;for(let Z=0;Z<Pt;Z++){let Rt=ft[Z];ne(Rt[2]+Ot,Rt[1]+Ot,Rt[0]+Ot)}F=h+p*2,Ot=ht*F;for(let Z=0;Z<Pt;Z++){let Rt=ft[Z];ne(Rt[0]+Ot,Rt[1]+Ot,Rt[2]+Ot)}}else{for(let F=0;F<Pt;F++){let Ot=ft[F];ne(Ot[2],Ot[1],Ot[0])}for(let F=0;F<Pt;F++){let Ot=ft[F];ne(Ot[0]+ht*h,Ot[1]+ht*h,Ot[2]+ht*h)}}n.addGroup(wt,s.length/3-wt,0)}function Dt(){let wt=s.length/3,F=0;Zt(pt,F),F+=pt.length;for(let Ot=0,Z=b.length;Ot<Z;Ot++){let Rt=b[Ot];Zt(Rt,F),F+=Rt.length}n.addGroup(wt,s.length/3-wt,1)}function Zt(wt,F){let Ot=wt.length;for(;--Ot>=0;){let Z=Ot,Rt=Ot-1;Rt<0&&(Rt=wt.length-1);for(let Nt=0,Kt=h+p*2;Nt<Kt;Nt++){let Xt=ht*Nt,D=ht*(Nt+1),M=F+Z+Xt,ot=F+Rt+Xt,tt=F+Rt+D,bt=F+Z+D;ee(M,ot,tt,bt)}}}function Ht(wt,F,Ot){c.push(wt),c.push(F),c.push(Ot)}function ne(wt,F,Ot){re(wt),re(F),re(Ot);let Z=s.length/3,Rt=w.generateTopUV(n,s,Z-3,Z-2,Z-1);ue(Rt[0]),ue(Rt[1]),ue(Rt[2])}function ee(wt,F,Ot,Z){re(wt),re(F),re(Z),re(F),re(Ot),re(Z);let Rt=s.length/3,Nt=w.generateSideWallUV(n,s,Rt-6,Rt-3,Rt-2,Rt-1);ue(Nt[0]),ue(Nt[1]),ue(Nt[3]),ue(Nt[1]),ue(Nt[2]),ue(Nt[3])}function re(wt){s.push(c[wt*3+0]),s.push(c[wt*3+1]),s.push(c[wt*3+2])}function ue(wt){r.push(wt.x),r.push(wt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qo[s.type]().fromJSON(s)),new i(n,t.options)}},_x={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new It(r,o),new It(a,c),new It(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],x=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new It(o,1-c),new It(l,1-u),new It(d,1-x),new It(y,1-m)]:[new It(a,1-c),new It(h,1-u),new It(f,1-x),new It(p,1-m)]}};function yx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Cr=class i extends ta{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ea=class i extends ke{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new L,x=new It;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let y=0;y<s;y++){let p=y*(n+1);for(let m=0;m<n;m++){let w=m+p,v=w,S=w+n+1,K=w+n+2,R=w+1;a.push(v,S,R),a.push(S,K,R)}}this.setIndex(a),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},na=class i extends ke{constructor(t=new Zn([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(o,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,x=d.holes;Ii.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=x.length;p<m;p++){let w=x[p];Ii.isClockWise(w)===!0&&(x[p]=w.reverse())}let y=Ii.triangulateShape(f,x);for(let p=0,m=x.length;p<m;p++){let w=x[p];f=f.concat(w)}for(let p=0,m=f.length;p<m;p++){let w=f[p];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let p=0,m=y.length;p<m;p++){let w=y[p],v=w[0]+u,S=w[1]+u,K=w[2]+u;n.push(v,S,K),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return vx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function vx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ze=class i extends ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,d=new L,f=[],x=[],y=[],p=[];for(let m=0;m<=n;m++){let w=[],v=m/n,S=0;m===0&&o===0?S=.5/e:m===n&&c===Math.PI&&(S=-.5/e);for(let K=0;K<=e;K++){let R=K/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+v*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(R+S,1-v),w.push(l++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){let v=h[m][w+1],S=h[m][w],K=h[m+1][w],R=h[m+1][w+1];(m!==0||o>0)&&f.push(v,S,R),(m!==n-1||c<Math.PI)&&f.push(S,K,R)}this.setIndex(f),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ia=class i extends ta{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Cn=class i extends ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let y=x/s*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(y),u.y=(t+e*Math.cos(p))*Math.sin(y),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(x/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let y=(s+1)*f+x-1,p=(s+1)*(f-1)+x-1,m=(s+1)*(f-1)+x,w=(s+1)*f+x;o.push(y,p,w),o.push(p,m,w)}this.setIndex(o),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var sa=class i extends ke{constructor(t=new $o(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new It,h=new L,u=[],d=[],f=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function y(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),w(),m()}function p(v){h=t.getPointAt(v/e,h);let S=o.normals[v],K=o.binormals[v];for(let R=0;R<=s;R++){let z=R/s*Math.PI*2,C=Math.sin(z),_t=-Math.cos(z);c.x=_t*S.x+C*K.x,c.y=_t*S.y+C*K.y,c.z=_t*S.z+C*K.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let S=1;S<=s;S++){let K=(s+1)*(v-1)+(S-1),R=(s+1)*v+(S-1),z=(s+1)*v+S,C=(s+1)*(v-1)+S;x.push(K,R,C),x.push(R,z,C)}}function w(){for(let v=0;v<=e;v++)for(let S=0;S<=s;S++)l.x=v/e,l.y=S/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Qo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ve=class extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Nn=class extends ve{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function vo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ml=class extends Hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=t,a=2*e-n;break;case uh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hh:o=t,c=2*n-e;break;case uh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),y=x*x,p=y*x,m=-d*p+2*d*y-d*x,w=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*x+1,v=(-1-f)*p+(1.5+f)*y+.5*x,S=f*p-f*y;for(let K=0;K!==a;++K)r[K]=m*o[h+K]+w*o[l+K]+v*o[c+K]+S*o[u+K];return r}},El=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Sl=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vo(e,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vo(t.times,Array),values:vo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ml(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ao:e=this.InterpolantFactoryMethodDiscrete;break;case qc:e=this.InterpolantFactoryMethodLinear;break;case ba:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return qc;case this.InterpolantFactoryMethodSmooth:return ba}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Mx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ba,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){let y=e[u+x];if(y!==e[d+x]||y!==e[f+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=qc;var ns=class extends Jn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Ao;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends Jn{};wl.prototype.ValueTypeName="color";var bl=class extends Jn{};bl.prototype.ValueTypeName="number";var Tl=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ui.slerpFlat(r,0,o,l-a,o,l,c);return r}},ra=class extends Jn{InterpolantFactoryMethodLinear(t){return new Tl(this.times,this.values,this.getValueSize(),t)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Jn{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ao;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Jn{};Al.prototype.ValueTypeName="vector";var Rl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],x=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},Ex=new Rl,Cl=class{constructor(t){this.manager=t!==void 0?t:Ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pr=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Fn=class extends Pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},oc=new Pe,pu=new L,mu=new L,oa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var gu=new Pe,hr=new L,ac=new L,Pl=class extends oa{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(hr),ac.copy(n.position),ac.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ac),n.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu)}},Tn=class extends Pr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Pl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Il=class extends oa{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gn=class extends Pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Yl="\\[\\]\\.:\\/",Sx=new RegExp("["+Yl+"]","g"),Zl="[^"+Yl+"]",wx="[^"+Yl.replace("\\.","")+"]",bx=/((?:WC+[\/:])*)/.source.replace("WC",Zl),Tx=/(WCOD+)?/.source.replace("WCOD",wx),Ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Cx=new RegExp("^"+bx+Tx+Ax+Rx+"$"),Px=["material","materials","bones","map"],Dl=class{constructor(t,e,n){let s=n||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sx,"")}static parseTrackName(t){let e=Cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Px.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=Dl;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ox=new Float32Array(1);var xu=new Pe,aa=class{constructor(t,e,n=0,s=1/0){this.ray=new Ns(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(t,e=!0,n=[]){return Ll(t,this,n,e),n.sort(_u),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ll(t[s],this,n,e);return n.sort(_u),n}};function _u(i,t){return i.distance-t.distance}function Ll(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ll(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function Xu(i){let{R:t,prep:e,blit:n,ENV:s,model:r,instance:o,siren:a,figure:c,pose:l,flameMat:h,glowMat:u,SOFT:d,SMOKE:f,hi:x,skyTex:y,buildBuilding:p,CH:m,SM:w,tierOf3:v}=i,S=Math.PI*2,K=(J,nt,T)=>J<nt?nt:J>T?T:J,R=Math.random,z=J=>1-Math.pow(1-J,3),C=J=>1+(1.70158+1)*Math.pow(J-1,3)+1.70158*Math.pow(J-1,2),_t={off:!1,low:!1},_=1/60,b=0,dt=()=>x()&&!_t.low?Math.min(window.devicePixelRatio||1,1.5,window.R3&&R3.prCap||2):1;function ft(J){_=_*.95+J*.05,_>1/38?(b+=J,b>2.5&&!_t.low&&(_t.low=!0,console.log("[R3] ui3 low-res"))):b=0}function pt(J){if(!J)return;if(J.userData&&J.userData.keep){J.parent&&J.parent.remove(J);return}J.children.slice().forEach(pt),J.geometry&&J.geometry.dispose();let nt=J.material;nt&&(Array.isArray(nt)?nt:[nt]).forEach(T=>{for(let et in T){let O=T[et];O&&O.isTexture&&!(O.userData&&O.userData.keep)&&O.dispose()}T.dispose()})}function St(J){J&&(J.background&&J.background.isTexture&&J.background.dispose(),J.children.slice().forEach(pt),J.clear())}function ht(J,nt,T,et,O){let Q=O||dt(),Tt=Math.max(8,Math.round(nt*Q)),At=Math.max(8,Math.round(T*Q));e(Tt,At);let Qt=t.autoClear,ce=t.toneMapping,fe=t.toneMappingExposure;t.autoClear=!1,t.toneMapping=Nl,t.toneMappingExposure=1.12,et.forEach((te,Ae)=>{Ae&&t.clearDepth(),t.render(te[0],te[1])}),t.autoClear=Qt,t.toneMapping=ce,t.toneMappingExposure=fe,n(J,Tt,At,0,0,nt,T)}function Pt(J,nt,T,et){let O=document.createElement("canvas");O.width=J,O.height=nt,T(O.getContext("2d"),J,nt);let Q=new mn(O);return Q.colorSpace=Ve,et&&(Q.userData.keep=1),Q}let vt=Pt(512,512,J=>{J.translate(256,256);for(let nt=0;nt<28;nt++){J.rotate(S/28);let T=J.createLinearGradient(0,0,256,0);T.addColorStop(0,"rgba(255,255,255,.9)"),T.addColorStop(.6,"rgba(255,255,255,.25)"),T.addColorStop(1,"rgba(255,255,255,0)"),J.fillStyle=T,J.beginPath(),J.moveTo(0,0);let et=nt%2?.04:.085;J.lineTo(256,-256*et),J.lineTo(256,256*et),J.fill()}},1),Vt=Pt(128,128,J=>{let nt=J.createRadialGradient(64,64,0,64,64,64);nt.addColorStop(0,"rgba(0,0,0,.9)"),nt.addColorStop(.5,"rgba(0,0,0,.45)"),nt.addColorStop(1,"rgba(0,0,0,0)"),J.fillStyle=nt,J.fillRect(0,0,128,128)},1),kt=Pt(256,32,J=>{let nt=J.createLinearGradient(0,0,256,0);nt.addColorStop(0,"rgba(255,255,255,0)"),nt.addColorStop(.5,"rgba(255,255,255,1)"),nt.addColorStop(1,"rgba(255,255,255,0)"),J.fillStyle=nt,J.fillRect(0,0,256,32);let T=J.createLinearGradient(0,0,0,32);T.addColorStop(0,"rgba(0,0,0,1)"),T.addColorStop(.5,"rgba(0,0,0,0)"),T.addColorStop(1,"rgba(0,0,0,1)"),J.globalCompositeOperation="destination-out",J.fillStyle=T,J.fillRect(0,0,256,32)},1),Bt=(J,nt,T)=>new ii({map:J,color:nt,transparent:!0,opacity:T,blending:fn,depthWrite:!1,toneMapped:!1}),ge=J=>new ze({map:Vt,transparent:!0,opacity:J,depthWrite:!1});function Se(J,nt,T){let et=new ct(new Ne(1,1),ge(T));return et.rotation.x=-Math.PI/2,et.scale.set(J,nt,1),et.position.y=.02,et}let Et="varying float vY;varying vec3 vN,vV;void main(){vY=uv.y;vec4 mv=modelViewMatrix*vec4(position,1.);vV=normalize(-mv.xyz);vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*mv;}",Dt="uniform vec3 col;uniform float op;varying float vY;varying vec3 vN,vV;void main(){float f=abs(dot(normalize(vN),normalize(vV)));float a=pow(f,2.2)*op*pow(vY,1.6);gl_FragColor=vec4(col*a,a);}";function Zt(J,nt,T,et){let O=new De(T,et,1,28,1,!0);O.translate(0,.5,0);let Q=new ct(O,new wn({uniforms:{col:{value:new he(J)},op:{value:nt}},vertexShader:Et,fragmentShader:Dt,transparent:!0,depthWrite:!1,blending:fn,side:In}));return Q.renderOrder=5,Q}let Ht=new L,ne=new L,ee=new L(0,1,0);function re(J,nt,T){J.position.copy(nt),Ht.copy(T).sub(nt),J.scale.set(1,Ht.length(),1),J.quaternion.setFromUnitVectors(ee,Ht.normalize())}function ue(J,nt,T,et,O){J.aspect=nt/T;let Q=et*Math.PI/180;J.fov=K(2*Math.atan(Math.tan(Q/2)/J.aspect)*180/Math.PI,30,100),J.setViewOffset(nt,T,0,T/2-T*O,nt,T),J.updateProjectionMatrix()}function wt(J,nt,T,et){let O=new ke;O.setAttribute("position",new Ke(new Float32Array(J*3),3));let Q=new ts(O,new Ni({map:et||d,color:nt,size:T,transparent:!0,blending:fn,depthWrite:!1,toneMapped:!1}));return Q.frustumCulled=!1,Q}function F(J,nt){let T=new Zn;for(let et=0;et<10;et++){let O=et%2?J*nt:J,Q=Math.PI/2+et*Math.PI/5,Tt=Math.cos(Q)*O,At=Math.sin(Q)*O;et?T.lineTo(Tt,At):T.moveTo(Tt,At)}return T.closePath(),T}function Ot(J){let nt=new Zn;for(let T=0;T<6;T++){let et=Math.PI/2+T*S/6,O=Math.cos(et)*J,Q=Math.sin(et)*J;T?nt.lineTo(O,Q):nt.moveTo(O,Q)}return nt.closePath(),nt}function Z(J,nt,T){let et=new Zn;return et.moveTo(-J,0),et.lineTo(0,nt),et.lineTo(J,0),et.lineTo(J,-T),et.lineTo(0,nt-T),et.lineTo(-J,-T),et.closePath(),et}function Rt(J,nt,T,et){let O=new Bs(J,{depth:nt,bevelEnabled:!0,bevelThickness:T,bevelSize:T,bevelSegments:et||3,curveSegments:10});return O.translate(0,0,-nt/2),O.computeVertexNormals(),O}let Nt=(J,nt,T)=>new Nn(Object.assign({color:J,metalness:1,roughness:nt,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.4},T||{}));function Kt(J,nt,T){let et=[];for(let O=0;O<nt;O++){let Q=new cn(new ii({map:f,color:T,transparent:!0,depthWrite:!1,opacity:0}));Q.userData={life:1+R()*9,max:1},J.add(Q),et.push(Q)}return et}function Xt(J,nt,T,et){J.forEach(O=>{let Q=O.userData;if(Q.life+=T/Q.max,Q.life>=1){let At=nt[R()*nt.length|0];Q.life=0,Q.max=et.life*(.7+R()*.6),O.position.set(At.x+(R()-.5)*et.sp,At.y,At.z),Q.vx=et.wind+(R()-.5)*.6,Q.vy=et.rise*(.7+R()*.6),Q.s0=et.s0*(.7+R()*.6)}O.position.x+=Q.vx*T,O.position.y+=Q.vy*T;let Tt=Q.s0*(1+Q.life*et.grow);O.scale.set(Tt,Tt,1),O.material.opacity=et.op*Math.sin(Math.min(1,Q.life)*Math.PI),O.material.rotation+=T*.2})}function D(J,nt,T){let et=wt(J,nt,T);return et.userData.d=Array.from({length:J},()=>({life:1+R(),v:new L})),et}function M(J,nt,T,et){let O=J.geometry.attributes.position;J.userData.d.forEach((Q,Tt)=>{if(Q.life+=T/et.life,Q.life>=1){let At=nt[R()*nt.length|0];Q.life=R()*.2,O.setXYZ(Tt,At.x+(R()-.5)*et.sp,At.y,At.z),Q.v.set(et.wind+(R()-.5)*1.5,et.rise*(.6+R()*.8),(R()-.5)*.6)}O.setXYZ(Tt,O.getX(Tt)+(Q.v.x+Math.sin(Q.life*12+Tt)*.6)*T,O.getY(Tt)+Q.v.y*T,O.getZ(Tt)+Q.v.z*T)}),O.needsUpdate=!0}function ot(J,nt,T,et){let O=new ct(new Ne(1,1),h(et));O.geometry.translate(0,.5,0),O.position.copy(nt),O.scale.set(T*.8,T*1.35,1),O.userData.sc=T,J.add(O);let Q=new cn(u(16738842,.55));return Q.position.copy(nt).add(new L(0,T*.45,.3)),Q.scale.setScalar(T*2.8),J.add(Q),O.userData.gl=Q,O}function tt(J,nt,T){J.forEach((et,O)=>{et.material.uniforms.t.value=T+O,et.material.uniforms.amp.value=.92+.08*Math.sin(T*13+O),et.quaternion.copy(nt.quaternion);let Q=1+.07*Math.sin(T*7+O*2);et.scale.set(et.userData.sc*.8*Q,et.userData.sc*1.35*Q,1),et.userData.gl.material.opacity=.45+.15*Math.sin(T*9+O*3)})}function bt(){return Pt(64,128,(J,nt,T)=>{J.fillStyle="#0d0f15",J.fillRect(0,0,nt,T);for(let et=4;et<T-4;et+=12)for(let O=4;O<nt-4;O+=10){let Q=R();J.fillStyle=Q<.28?`rgba(255,${190+R()*50|0},${110+R()*60|0},${.6+R()*.4})`:Q<.36?"rgba(140,180,255,.35)":"rgba(20,24,34,1)",J.fillRect(O,et,6,8)}})}let Mt=null;function Jt(){let J=x()&&!_t.low,nt=new bn;nt.background=y("#02040a","#6a2410"),nt.environment=s,nt.environmentIntensity=.8,nt.fog=new ji(2757132,26,95),nt.add(new Fn(5267599,1312776,.75));let T=new gn(11058431,1.3);T.position.set(-8,14,12),nt.add(T);let et=new gn(16742960,2.2);et.position.set(5,7,-14),nt.add(et);let O=new Tn(16734744,90,90,1.05);O.position.set(-2,8,-22),nt.add(O);let Q=new ve({color:460811,roughness:.06,metalness:.9,transparent:!0,opacity:J?.86:.95,envMapIntensity:.9}),Tt=new ct(new Ne(300,300),Q);Tt.rotation.x=-Math.PI/2,Tt.renderOrder=1,nt.add(Tt);let At=new ze({color:12098112,transparent:!0,opacity:.5});for(let xt=-6;xt<=6;xt++){let Y=new ct(new Ne(2.4,.16),At);Y.rotation.x=-Math.PI/2,Y.position.set(xt*5,.012,5.5),Y.renderOrder=2,nt.add(Y)}let Qt=bt(),ce=[],fe=J?26:18;for(let xt=0;xt<fe;xt++){let Y=4+R()*6,at=(xt%7===3?26:8)+R()*22,Ct=6,Ft=Qt.clone();Ft.wrapS=Ft.wrapT=mr,Ft.repeat.set(Math.max(1,Math.round(Y/4)),Math.max(1,Math.round(at/6))),Ft.needsUpdate=!0;let le=new ct(new xe(Y,at,Ct),new ve({color:1711398,roughness:.8,emissive:16777215,emissiveMap:Ft,emissiveIntensity:.85,map:Ft})),Ge=-62+xt*(124/fe)+R()*2,me=-30-R()*22;if(le.position.set(Ge,at/2,me),nt.add(le),xt%5===2||xt%7===3){let qt=2+(R()*3|0);for(let Ie=0;Ie<qt;Ie++)ce.push(new L(Ge+(R()-.5)*Y*.7,at*(Ie?.45+R()*.5:1)-.2,me+Ct/2+.3))}}let te=new ct(new xe(9,16,7),new ve({color:1709078,roughness:.9,emissive:16777215,emissiveMap:Qt,emissiveIntensity:.5,map:Qt}));te.position.set(13,8,-17),nt.add(te);for(let xt=0;xt<(J?9:5);xt++)ce.push(new L(9.5+R()*7,6+R()*10.5,-13.2));ce.push(new L(12,16,-15),new L(15,16,-16));let Ae=ce.map((xt,Y)=>ot(nt,xt,(xt.x>8&&xt.z>-20?5:4)+R()*4,Y*1.37)),be=new Tn(16738848,45,40,1.3);be.position.set(12,9,-10),nt.add(be);let _n=new cn(Bt(d,16730640,.55));_n.position.set(-2,10,-45),_n.scale.set(110,40,1),nt.add(_n);let je=Kt(nt,J?40:18,2761762),Re=D(J?220:90,16752704,.32);nt.add(Re);let U=v("E"),P=o(r("E",U),[8.6,8.6]);P.userData.keep=1,P.rotation.y=-.62,nt.add(P),P.userData.glows.forEach(xt=>xt.scale.multiplyScalar(4.5));let A=null;J&&(A=o(r("E",U),[8.6,8.6]),A.userData.keep=1,A.rotation.y=-.62,A.scale.y=-.5,nt.add(A),A.userData.glows.forEach(xt=>xt.scale.multiplyScalar(1.6)));let X=Se(10,4.6,.85);X.rotation.z=.62,X.renderOrder=3,nt.add(X);let B=new Tn(16722458,0,22,1.3),$=new Tn(2775807,0,22,1.3);B.position.set(-1.6,3.6,1),$.position.set(1.6,3.6,-1),nt.add(B,$);let it=[16722458,3828991].map((xt,Y)=>{let at=new cn(Bt(d,xt,0));return at.position.set(Y?2.2:-2.2,.05,3.2),at.scale.set(1.4,6,1),nt.add(at),at}),st=new L(Math.cos(.62),0,Math.sin(.62)),lt=new L(-st.z,0,st.x),ut=[-1,1].map(xt=>new L().copy(st).multiplyScalar(4.25).addScaledVector(lt,xt*1.05).setY(1.05)).map(xt=>{let Y=Zt(16773584,J?.55:.4,.12,2.6);re(Y,new L().copy(xt).addScaledVector(st,11).setY(.1),xt),nt.add(Y);let at=new cn(Bt(d,16774364,.95));return at.position.copy(xt),at.scale.setScalar(1.3),nt.add(at),Y}),g=[],I=c({ff:1,coat:3813926,pants:3813926,helmet:16761370}),N=c({ff:1,coat:3813926,pants:3813926,helmet:14165532});I.position.set(4.3,0,1.6),I.rotation.y=.2,N.position.set(-3.6,0,4.2),N.rotation.y=.5,[I,N].forEach(xt=>{xt.scale.setScalar(1.02),nt.add(xt);let Y=Se(1.2,1.2,.7);Y.position.set(xt.position.x,.03,xt.position.z),nt.add(Y)});let q=J?900:380,k=new ke,V=new Float32Array(q*6);for(let xt=0;xt<q;xt++){let Y=(R()-.5)*40,at=R()*24,Ct=-8+R()*22;V.set([Y,at,Ct,Y+.06,at+.7,Ct],xt*6)}k.setAttribute("position",new Ke(V,3));let j=new qo(k,new Mr({color:11060456,transparent:!0,opacity:.38,depthWrite:!1}));j.frustumCulled=!1,nt.add(j);let gt=wt(J?60:24,13163775,.18);nt.add(gt),gt.userData.d=Array.from({length:gt.geometry.attributes.position.count},()=>({t:R()}));let mt=new qe(50,1,.3,260);return{s:nt,cam:mt,fl:Ae,F:ce,smoke:je,emb:Re,tr:P,mr:A,red:B,blu:$,streak:it,search:g,f1:I,f2:N,rain:j,splash:gt,t:0}}function zt(J,nt,T,et){Mt||(Mt=Jt());let O=Mt;et=Math.min(.05,et||.016),ft(et),O.t+=et;let Q=O.t,Tt=O.cam,At=.5+Math.sin(Q*.09)*.26,Qt=9.2-Math.sin(Q*.13)*.4;Tt.position.set(Math.sin(At)*Qt+1.2,1.35+Math.sin(Q*.21)*.12,Math.cos(At)*Qt+.4),Tt.lookAt(1.2,2.4,0);let ce=nt/T;ue(Tt,nt,T,ce<.6?66:56,(ce<.6,.5)),tt(O.fl,Tt,Q),Xt(O.smoke,O.F,et,{life:6,sp:3,wind:1.2,rise:2.4,s0:5,grow:2.2,op:.55}),M(O.emb,O.F,et,{life:3,sp:3,wind:.8,rise:4}),a(O.tr,!0,Q,0),O.mr&&a(O.mr,!0,Q,0);let fe=Math.sin(Q*14)>0;O.red.intensity=fe?60:4,O.blu.intensity=fe?4:70,O.streak[0].material.opacity=fe?.5:.05,O.streak[1].material.opacity=fe?.05:.55,O.tr.position.y=Math.sin(Q*1.7)*.012,O.search.forEach((P,A)=>{let X=Math.sin(Q*.25+A*2.1)*.45+(A?.35:-.35);re(P,new L(Math.sin(X)*40+(A?18:-22),40,-40),new L(A?20:-24,0,-26))}),l(O.f1,"idle",Q,0),O.f1.userData.torso.rotation.x=Math.sin(Q*1.6)*.02;let te=Q%9<2.4;l(O.f2,te?"wave":"idle",Q,1),te||(O.f2.userData.B.p.rotation.z=-.08);let Ae=O.rain.geometry.attributes.position,be=Ae.count/2,_n=24*et;for(let P=0;P<be;P++){let A=Ae.getY(P*2)-_n;A<0&&(A+=24),Ae.setY(P*2,A),Ae.setY(P*2+1,A+.7)}Ae.needsUpdate=!0;let je=O.splash.geometry.attributes.position;O.splash.userData.d.forEach((P,A)=>{P.t+=et*3,P.t>1&&(P.t=0,je.setXYZ(A,(R()-.5)*24,.05,-2+R()*12))}),je.needsUpdate=!0,O.splash.material.opacity=.7,ht(J,nt,T,[[O.s,Tt]]),J.save();let Re=J.createRadialGradient(nt/2,T*.55,Math.min(nt,T)*.3,nt/2,T*.55,Math.max(nt,T)*.75);Re.addColorStop(0,"rgba(0,0,0,0)"),Re.addColorStop(1,"rgba(0,0,0,.62)"),J.fillStyle=Re,J.fillRect(0,0,nt,T);let U=J.createLinearGradient(0,0,0,T*.32);U.addColorStop(0,"rgba(0,0,6,.55)"),U.addColorStop(1,"rgba(0,0,6,0)"),J.fillStyle=U,J.fillRect(0,0,nt,T*.32),J.restore()}function Yt(){Mt&&(St(Mt.s),Mt=null)}let _e=[[10134450,5989493],[14701370,9379088],[3837664,1195904],[16763955,10512896],[16770688,12880384]];function Lt(J){J=K(J|0,0,4);let nt=new jt,T=_e[J],et=new ct(Rt(Ot(1.13),.24,.07),Nt(J>=3?16766842:15001839,.18));nt.add(et);let O=new ct(Rt(Ot(.93),.3,.05),new Nn({color:T[0],metalness:.55,roughness:.28,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.2}));O.position.z=.05,nt.add(O);let Q=new ct(Rt(Ot(.8),.02,.01,1),new Nn({color:T[1],metalness:.4,roughness:.35,clearcoat:1}));Q.position.z=.24,nt.add(Q);let Tt=Nt(16185596,.1),At=J+1,Qt=.25,ce=-((At-1)*Qt)/2-.08;for(let fe=0;fe<At;fe++){let te=new ct(Rt(Z(.5,.24,.12),.08,.025,2),Tt);te.position.set(0,ce+fe*Qt,.32),nt.add(te)}if(J===4){let fe=new ct(Rt(F(.2,.45),.06,.02,2),Nt(16765503,.15));fe.position.set(0,.66,.32),nt.add(fe)}return nt}let Gt={};function oe(){if(Gt.s)return Gt;let J=new bn;J.environment=s,J.environmentIntensity=1,J.add(new Fn(16777215,4210768,1));let nt=new gn(16777215,2.4);return nt.position.set(2,3,5),J.add(nt),Gt.s=J,Gt.cam=new qe(30,1,.1,50),Gt.cam.position.set(0,0,5.2),Gt.cam.lookAt(0,0,0),Gt}function ae(J,nt,T,et){let O=oe();O.rk!==T&&(O.g&&(O.s.remove(O.g),pt(O.g)),O.g=Lt(T),O.rk=T,O.s.add(O.g)),O.g.rotation.set(-.12,et||-.32,0),J.clearRect(0,0,nt,nt),ht(J,nt,nt,[[O.s,O.cam]],1)}function $t(J){let nt=x()&&!_t.low,T=J.ch||1,et=new bn;et.background=y("#141c3a","#e88a50"),et.environment=s,et.environmentIntensity=.6,et.fog=new ji(4862016,22,80),et.add(new Fn(16767152,2105392,1.1));let O=new gn(16763024,2.2);O.position.set(-6,5,-10),et.add(O);let Q=new gn(12374271,1.3);Q.position.set(4,8,12),et.add(Q);let Tt=new ve({color:1316380,roughness:.14,metalness:.75,envMapIntensity:.8}),At=new ct(new Ne(200,200),Tt);At.rotation.x=-Math.PI/2,et.add(At);let Qt=[];try{let pe=m[T]||m[1],ie=p(pe.build);ie.g.position.set(0,0,-13),ie.g.scale.setScalar(.9),et.add(ie.g),Qt=ie.F.map(se=>new L(se[0]*.9,se[1]*.9,se[2]*.9-13))}catch{}Qt.length||(Qt=[new L(0,6,-12)]);let ce=Kt(et,nt?26:12,15265526),fe=(J.types&&J.types.length?J.types:[["E",0]]).slice(0,4),te=fe.length,Ae=fe.map(([pe,ie],se)=>{let Ce=o(r(pe,ie),[5.2,5.2]);Ce.userData.keep=1;let We=(se-(te-1)/2)*4.3;Ce.position.set(We,0,2+Math.abs(se-(te-1)/2)*-.8),Ce.rotation.y=-Math.PI/2+(se-(te-1)/2)*-.28+.12,et.add(Ce);let vi=Se(6.2,3.2,.8);return vi.position.set(We,.02,Ce.position.z),vi.rotation.z=Ce.rotation.y,et.add(vi),Ce.userData.x0=We,Ce}),be=[0,1,2,3].slice(0,nt?4:2).map(pe=>{let ie=c({ff:1,coat:3813926,pants:3813926,helmet:pe%2?16761370:14165532});return ie.position.set((pe-1.5)*2.6+(pe%2?.6:-.6),0,5.3),ie.userData.y0=0,ie.scale.setScalar(.9),et.add(ie),ie}),_n=[0,1,2].map(pe=>{let ie=Zt(16770744,nt?.36:.26,.2,4.2);return et.add(ie),ie}),je=new qe(45,1,.3,200),Re=new bn;Re.environment=s,Re.environmentIntensity=1.1,Re.add(new Fn(16777215,3813440,.9));let U=new gn(16773852,2.6);U.position.set(-.4,1,1.2),Re.add(U);let P=new Tn(16777215,0,0,0);Re.add(P);let A=new qe(30,1,1,6e3),X=new ct(new Ne(1,1),new ze({map:vt,color:16764784,transparent:!0,opacity:0,blending:fn,depthWrite:!1,toneMapped:!1}));X.position.z=-60,Re.add(X);let B=Nt(16761402,.2),$=new Nn({color:2304056,metalness:.4,roughness:.35,clearcoat:1,transparent:!0,opacity:.92}),it=Rt(F(1,.47),.34,.1,3),st=[0,1,2].map(pe=>{let ie=pe<J.stars,se=new jt,Ce=new ct(it,ie?B:$);if(se.add(Ce),ie){let We=new cn(Bt(d,16758832,0));We.position.z=-10,se.add(We),se.userData.gl=We}return se.userData.on=ie,se.visible=!ie,Re.add(se),se}),lt={3:[16763706,11760640],2:[14673648,8029848],1:[14256714,8011538]}[J.stars]||[16763706,11760640],rt=new jt,ut=new jt;rt.add(ut);let g=Nt(lt[0],.22),I=new ct(new De(1,1,.2,56),g);I.rotation.x=Math.PI/2,ut.add(I);let N=new ct(new Cn(.95,.08,14,56),Nt(lt[0],.12));N.position.z=.1,ut.add(N);let q=N.clone();q.position.z=-.1,ut.add(q);let k=new ct(new Cn(.74,.035,10,48),Nt(lt[1],.3));k.position.z=.11,ut.add(k);let V=new ct(Rt(F(.5,.46),.1,.04,2),Nt(lt[0],.12));V.position.z=.16,ut.add(V);let j=V.clone();j.position.z=-.16,j.rotation.y=Math.PI,ut.add(j);let gt=new ct(new Cn(.14,.04,8,20),Nt(lt[0],.2));gt.position.y=1.08,ut.add(gt);let mt=new jt;rt.add(mt),[[14163494,-1],[2056144,1]].forEach(([pe,ie])=>{let se=new ct(new xe(.62,2.5,.04),new Nn({color:pe,roughness:.45,sheen:1,sheenColor:new he(16777215),sheenRoughness:.4}));se.position.set(ie*.42,1.7,-.25),se.scale.y=.62,se.rotation.z=ie*.38,mt.add(se);let Ce=new ct(new xe(.14,2.5,.045),new ve({color:16777215,roughness:.5}));Ce.position.copy(se.position),Ce.position.z+=.005,Ce.rotation.z=se.rotation.z,Ce.scale.y=.62,mt.add(Ce)}),rt.visible=!1,Re.add(rt);let xt=new jt,Y=new jt;xt.add(Y),xt.visible=!1,Re.add(xt);let at=new ve({color:16184040,roughness:.75}),Ct=new ct(new xe(1,1.12,.05),at);Y.add(Ct);let Ft=new pn;Ft.colorSpace=Ve;let le=J.img&&J.img.im,Ge=()=>{if(!le||!le.naturalWidth)return!1;let pe=J.img.crop,ie=le.naturalWidth,se=le.naturalHeight,Ce=.88,We=.82,vi=Math.max(Ce/ie,We/se)*pe[2],tn=ie*vi,ss=se*vi,va=(tn-Ce)*pe[0],Ys=(ss-We)*pe[1];return Ft.image=le,Ft.repeat.set(Ce/tn,We/ss),Ft.offset.set(va/tn,1-(Ys+We)/ss),Ft.needsUpdate=!0,!0},me=Ge(),qt=new ct(new Ne(.88,.82),new ve({map:Ft,roughness:.35,color:me?16777215:3355443}));qt.position.set(0,.56-.06-.41,.03),Y.add(qt);let Ie=new ct(new Ne(.88,.82),new ze({map:kt,transparent:!0,opacity:.18,blending:fn,depthWrite:!1}));Ie.position.copy(qt.position),Ie.position.z+=.002,Ie.rotation.z=.7,Ie.scale.set(1.6,.5,1),Y.add(Ie);let Te=Pt(512,96,(pe,ie,se)=>{pe.fillStyle="#2a2d36",pe.font="800 52px GameFont,system-ui,sans-serif",pe.textAlign="center",pe.textBaseline="middle";let Ce=48;for(pe.font=`800 ${Ce}px GameFont,system-ui,sans-serif`;pe.measureText(J.label||"").width>ie-30&&Ce>20;)Ce-=2,pe.font=`800 ${Ce}px GameFont,system-ui,sans-serif`;pe.fillText(J.label||"",ie/2,se/2+2)}),Mn=new ct(new Ne(.9,.17),new ze({map:Te,transparent:!0}));Mn.position.set(0,-.43,.03),Y.add(Mn);let yi=new ve({color:14206090,roughness:.9,transparent:!0,opacity:.85}),ln=new ct(new Ne(.32,.1),yi);ln.position.set(0,.56,.035),ln.rotation.z=-.08,Y.add(ln);let Xs=new ve({color:9071168,roughness:.8});[-1,1].forEach(pe=>{let ie=new ct(new De(.008,.008,1,5),Xs);ie.userData.s=pe,Y.add(ie)});let Je=new ct(new Ze(.05,14,10),new Nn({color:14688304,roughness:.2,clearcoat:1}));Y.add(Je);let Bn=new ct(new Ne(1,1.12),ge(.75));Bn.scale.set(1.35,1.3,1),xt.add(Bn);let Hi=nt?150:60,En=new Ne(1,.5),Hn=new Vo(En,new ve({side:In,roughness:.4,metalness:.35}),Hi);Hn.frustumCulled=!1,Re.add(Hn);let Nr=[16765503,16730730,3854847,8050266,16777215,16751162,11766527].map(pe=>new he(pe)),qs=Array.from({length:Hi},(pe,ie)=>({live:!1,p:new L,v:new L,r:new Dn,w:new L(R()*8,R()*8,R()*8),s:6+R()*6}));for(let pe=0;pe<Hi;pe++)Hn.setColorAt(pe,Nr[pe%Nr.length]);let si=new nn,zn={bg:et,cam:je,fg:Re,fcam:A,veh:Ae,crew:be,spots:_n,steam:ce,F:Qt,stars:st,medal:rt,disc:ut,frame:xt,fb:Y,rays:X,conf:Hn,cd:qs,sweep:P,uvOK:me,setUV:Ge,photo:qt,t:0,burst:[0,0,0],ps:[],sGeo:it};zn.draw=function(pe,ie,se,Ce,We,vi){We=Math.min(.05,We||.016),ft(We);let tn=zn.t+=We;!zn.uvOK&&(zn.uvOK=Ge())&&qt.material.color.set(16777215);let ss=z(Math.min(1,Ce/6));je.position.set(Math.sin(tn*.12)*1.2,3.1-ss*.3,17.5-ss*3.2),je.lookAt(0,2.2,0);let va=Math.min(se*.6,(vi||se)-se*.02);ue(je,ie,se,Math.min(64,40+te*7),K((va-se*.07)/se,.35,.8)),Ae.forEach((de,Le)=>{a(de,!0,tn,Le*1.3)}),be.forEach((de,Le)=>l(de,"cheer",tn,Le*1.7)),_n.forEach((de,Le)=>{let Js=Math.sin(tn*.4+Le*2)*.5;re(de,new L((Le-1)*5+Math.sin(Js)*4,0,2+Math.cos(Js)*2),new L((Le-1)*9,22,-6)),de.material.uniforms.op.value=(.25+.1*Math.sin(tn*2+Le))*Math.min(1,Ce)}),Xt(ce,Qt,We,{life:5,sp:2,wind:.6,rise:2,s0:3.5,grow:2,op:.4}),A.aspect=ie/se,A.fov=30;let Ys=se/2/Math.tan(15*Math.PI/180);A.position.set(0,0,Ys),A.near=Ys*.3,A.far=Ys*3,A.updateProjectionMatrix();let Fr=(de,Le)=>[de-ie/2,se/2-Le],Or=Math.min(ie*.085,44),sh=se*.2,[sd,rd]=Fr(ie/2,sh);X.position.set(sd,rd,-80);let rh=Math.min(ie,se)*1.25;X.scale.set(rh,rh,1),X.rotation.z=tn*.15,X.material.opacity=Math.min(1,K((Ce-.5)/.6,0,1))*.42*(zn.stars,1),st.forEach((de,Le)=>{let Js=ie/2+(Le-1)*Or*2.5,$s=sh-(Le===1?Or*.35:0),[zr,Ks]=Fr(Js,$s);de.position.set(zr,Ks,0);let Qs=Or*(Le===1?1.18:1);if(de.userData.on){let Qn=.5+Le*.28,ri=K((Ce-Qn)/.45,0,1);de.visible=ri>0;let zi=Qs*Math.max(.01,C(ri));de.scale.set(zi,zi,zi),de.rotation.y=(1-z(ri))*S*1.25+Math.sin(tn*1.2+Le)*.32,de.rotation.x=Math.sin(tn*.9+Le)*.12,ri>0&&!zn.burst[Le]&&(zn.burst[Le]=1,id(zr,Ks,Or)),de.userData.gl.material.opacity=(.55+.25*Math.sin(tn*3+Le))*Math.min(1,ri*2),de.userData.gl.scale.setScalar(2.6+.2*Math.sin(tn*3+Le))}else de.visible=!0,de.scale.setScalar(Qs*.95),de.rotation.y=Math.sin(tn*.8+Le)*.15});let od=Math.min(ie*.1,46),Br=K((Ce-1.4)/.5,0,1);if(rt.visible=Br>0,Br>0){let[de,Le]=Fr(ie*.24,se*.36);rt.position.set(de,Le+(1-C(Br))*se*.22,10),rt.scale.setScalar(od*.82),rt.rotation.z=Math.sin(tn*1.3)*.05,ut.rotation.y=Math.sin(tn*1.05)*.85+(1-Br)*S}let Zs=Math.min(ie*.32,150),Ma=K((Ce-1.7)/.5,0,1);if(xt.visible=Ma>0,Ma>0){let[de,Le]=Fr(ie*.72+(1-z(Ma))*ie*.5,se*.37),$s=Zs*1.12*.5+Zs*.32;xt.position.set(de,Le+$s,6),xt.scale.setScalar(Zs);let zr=.07+Math.sin(tn*1.5)*.035;Y.position.set(0,-$s/Zs,0),xt.rotation.set(0,0,0),Y.rotation.set(.04,-.28+Math.sin(tn*.7)*.08,0),xt.rotation.z=zr,Y.children.forEach(Qn=>{if(Qn.userData.s){let ri=Qn.userData.s*.36,zi=.56,Ea=0,Sa=.56+.32;Qn.position.set((ri+Ea)/2,(zi+Sa)/2,.04),Qn.scale.y=Math.hypot(ri-Ea,zi-Sa),Qn.rotation.z=Math.atan2(-(Ea-ri),Sa-zi)}});let Ks=Y.children.find(Qn=>Qn.geometry&&Qn.geometry.type==="SphereGeometry");Ks&&Ks.position.set(0,.88,.05);let Qs=xt.children[1];Qs.position.set(.12,-$s/Zs-.1,-.25),Qs.rotation.z=0}P.position.set(Math.sin(tn*.8)*ie*.6,se*.2,400),P.intensity=0;let ad=Ce>.7&&Ce<9;qs.forEach((de,Le)=>{if(!de.live)if(ad&&R()<We*(nt?9:4))de.live=!0,de.p.set((R()-.5)*ie,se*.55+R()*40,(R()-.5)*200),de.v.set((R()-.5)*60,-(60+R()*80),0);else{si.position.set(0,-1e5,0),si.scale.setScalar(.001),si.updateMatrix(),Hn.setMatrixAt(Le,si.matrix);return}de.p.addScaledVector(de.v,We),de.v.x+=Math.sin(tn*2+Le)*30*We,de.r.x+=de.w.x*We,de.r.y+=de.w.y*We,de.r.z+=de.w.z*We*.3,de.p.y<-se*.6&&(de.live=!1),si.position.copy(de.p),si.rotation.copy(de.r),si.scale.setScalar(de.s),si.updateMatrix(),Hn.setMatrixAt(Le,si.matrix)}),Hn.instanceMatrix.needsUpdate=!0,zn.ps=zn.ps.filter(de=>(de.t+=We)<de.max),ht(pe,ie,se,[[et,je],[Re,A]]),pe.save();let Hr=pe.createLinearGradient(0,se*.45,0,se);Hr.addColorStop(0,"rgba(6,8,14,0)"),Hr.addColorStop(.5,"rgba(6,8,14,.55)"),Hr.addColorStop(1,"rgba(6,8,14,.9)"),pe.fillStyle=Hr,pe.fillRect(0,se*.45,ie,se*.55),pe.restore()};function id(pe,ie,se){U.intensity=5,setTimeout(()=>U.intensity=2.6,120)}return zn.dispose=function(){St(et),St(Re)},zn}function we(J){let nt=x()&&!_t.low,T=new bn;T.environment=s,T.environmentIntensity=1.2,T.add(new Fn(16774368,3153936,.9));let et=new gn(16777215,2.6);et.position.set(2,3,6),T.add(et);let O=new Tn(16769184,0,30,1);T.add(O);let Q=Lt(J);T.add(Q);let Tt=_e[K(J,0,4)][0],At=new ct(new Ne(1,1),new ze({map:vt,color:16765056,transparent:!0,opacity:0,blending:fn,depthWrite:!1,toneMapped:!1}));At.position.z=-2,At.scale.setScalar(13),T.add(At);let Qt=At.clone();Qt.material=At.material.clone(),Qt.material.color.set(Tt),Qt.position.z=-1.9,Qt.scale.setScalar(9),T.add(Qt);let ce=new cn(Bt(d,16762976,0));ce.position.z=-1.5,ce.scale.setScalar(5.5),T.add(ce);let fe=[0,1].map(U=>{let P=new cn(Bt(kt,U?10146047:16777215,0));return P.position.z=.6,T.add(P),P}),te=[];for(let U=0;U<(nt?8:5);U++){let P=Zt(U%2?16769184:16774880,nt?.4:.3,1.8,.05);P.userData.a=U/(nt?8:5)*S,T.add(P),te.push(P)}let Ae=wt(nt?160:70,16767120,.12);T.add(Ae);let be=Ae.geometry.attributes.position,_n=Array.from({length:be.count},()=>({life:R(),v:new L})),je=new qe(40,1,.1,100),Re={t:0};return Re.draw=function(U,P,A,X){X=Math.min(.05,X||.016),ft(X);let B=Re.t+=X,$=10-z(Math.min(1,B/2.4))*2.6;je.position.set(Math.sin(B*.3)*.25,Math.sin(B*.4)*.12,$),je.lookAt(0,0,0),ue(je,P,A,P/A<.7?34:30,.4);let it=Math.min(1,B/1.7);Q.rotation.y=(1-z(it))*S*2.5+(it>=1?Math.sin((B-1.7)*1.1)*.4:0),Q.rotation.x=-.08+Math.sin(B*.7)*.05,Q.scale.setScalar(Math.max(.01,C(Math.min(1,B*1.5))));let st=Math.min(1,B*1.2);At.rotation.z=B*.18,Qt.rotation.z=-B*.11,At.material.opacity=.5*st,Qt.material.opacity=.32*st,ce.material.opacity=(.6+.15*Math.sin(B*3))*st;let lt=it>=1?Math.max(0,1-(B-1.7)*1.4):0;fe[0].material.opacity=.9*lt+.25*st,fe[0].scale.set(7*(.7+lt),.45,1),fe[1].material.opacity=.4*lt+.1*st,fe[1].scale.set(4.5,.18,1),fe[1].material.rotation=0,O.position.set(Math.sin(B*1.4)*2.5,1.2,2.5),O.intensity=12,te.forEach((rt,ut)=>{let g=rt.userData.a+B*.12;re(rt,new L(Math.cos(g)*9,Math.sin(g)*9,-2.5),new L(0,0,-1)),rt.material.uniforms.op.value=(.22+.1*Math.sin(B*2+ut))*st}),_n.forEach((rt,ut)=>{if(rt.life+=X*.5,rt.life>=1){rt.life=0;let g=R()*S,I=1+R()*1.6;be.setXYZ(ut,Math.cos(g)*I,Math.sin(g)*I-.4,(R()-.5)*1.5),rt.v.set(Math.cos(g)*.5,.7+R()*.8,0)}be.setXYZ(ut,be.getX(ut)+rt.v.x*X,be.getY(ut)+rt.v.y*X,be.getZ(ut))}),be.needsUpdate=!0,Ae.material.opacity=st,ht(U,P,A,[[T,je]])},Re.dispose=function(){St(T)},Re}return{get off(){return _t.off},set off(J){_t.off=J},U:_t,title:zt,titleDispose:Yt,get tOn(){return!!Mt},badge:ae,res:$t,rank:we}}var da=class extends bn{constructor(){super();let t=new xe;t.deleteAttribute("uv");let e=new ve({side:dn}),n=new ve,s=new Tn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ct(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ct(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new ct(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new ct(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new ct(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new ct(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new ct(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new ct(t,ks(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new ct(t,ks(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let x=new ct(t,ks(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);let y=new ct(t,ks(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let p=new ct(t,ks(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new ct(t,ks(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ks(i){let t=new ze;return t.color.setScalar(i),t}function Yu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ke,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let x=0;x<f.count;++x)u.push(f.getX(x)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=qu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let x=qu(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function qu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ke(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let x=0;x<e;x++){let y=h.getComponent(d,x);a.setComponent(d+u,x,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Dr=new L;function On(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Dr.copy(t),Dr[n]=0,Dr.normalize();let l=.5*o/(o+a),h=1-Dr.angleTo(i)/c;return Math.sign(Dr[e])===1?h*l:a/(o+a)+l+l*(1-h)}var fa=class extends xe{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,c=new L,l=new L(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,x=new L,y=.5/s;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(a.fromArray(h,p),c.copy(a),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),h[p+0]=l.x*Math.sign(a.x)+c.x*r,h[p+1]=l.y*Math.sign(a.y)+c.y*r,h[p+2]=l.z*Math.sign(a.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/f)){case 0:x.set(1,0,0),d[m+0]=On(x,c,"z","y",r,n),d[m+1]=1-On(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[m+0]=1-On(x,c,"z","y",r,n),d[m+1]=1-On(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[m+0]=1-On(x,c,"x","z",r,t),d[m+1]=On(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[m+0]=1-On(x,c,"x","z",r,t),d[m+1]=1-On(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[m+0]=1-On(x,c,"x","y",r,t),d[m+1]=1-On(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[m+0]=On(x,c,"x","y",r,t),d[m+1]=1-On(x,c,"y","x",r,e);break}}};var Ix=!1,Qe=(i,t={})=>new ve(Object.assign({color:i,roughness:.45,metalness:.1},t)),xi=(i,t={})=>new Nn(Object.assign({color:i,roughness:.3,metalness:.08,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.15},t)),Gs=(i,t,e)=>{let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new mn(n);return s.colorSpace=Ve,s.anisotropy=4,s},Lr={grille:Gs(64,64,(i,t,e)=>{i.fillStyle="#1a1b1f",i.fillRect(0,0,t,e);for(let n=4;n<e;n+=9){let s=i.createLinearGradient(0,n,0,n+5);s.addColorStop(0,"#f4f6fa"),s.addColorStop(1,"#7b8090"),i.fillStyle=s,i.fillRect(3,n,t-6,5)}i.strokeStyle="#cfd3da",i.lineWidth=4,i.strokeRect(2,2,t-4,e-4)}),roll:Gs(64,128,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"#9aa0aa"),n.addColorStop(.5,"#eef0f4"),n.addColorStop(1,"#a3a9b3"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(40,44,52,.55)";for(let s=0;s<e;s+=8)i.fillRect(0,s,t,1.6);i.fillStyle="#3a3e46",i.fillRect(t*.38,e-14,t*.24,6),i.strokeStyle="#5b616c",i.lineWidth=3,i.strokeRect(1,1,t-2,e-2)}),tread:Gs(64,16,(i,t,e)=>{i.fillStyle="#17171a",i.fillRect(0,0,t,e),i.fillStyle="#0b0b0d";for(let n=0;n<t;n+=6)i.fillRect(n,0,3,e)}),gauge:Gs(128,64,(i,t,e)=>{i.fillStyle="#2b2f37",i.fillRect(0,0,t,e);for(let n=0;n<3;n++){let s=22+n*42;i.fillStyle="#d9dde3",i.beginPath(),i.arc(s,24,15,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(s,24,12,0,7),i.fill(),i.strokeStyle="#d01818",i.lineWidth=2,i.beginPath(),i.moveTo(s,24),i.lineTo(s+8*Math.cos(n-2.2),24+8*Math.sin(n-2.2)),i.stroke()}["#e83030","#3070e8","#f0c020","#30b050"].forEach((n,s)=>{i.fillStyle="#bfc4cc",i.beginPath(),i.arc(16+s*32,52,7,0,7),i.fill(),i.fillStyle=n,i.beginPath(),i.arc(16+s*32,52,4.5,0,7),i.fill()})}),plate:Gs(64,24,(i,t,e)=>{i.fillStyle="#f4f4ee",i.fillRect(0,0,t,e),i.strokeStyle="#333",i.lineWidth=2,i.strokeRect(1,1,t-2,e-2),i.fillStyle="#222",i.font="bold 15px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("FR 07",t/2,e/2+1)})};function $l(i,t,e,n,s,r,o){i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip();for(let a=-2;a<n/s*2+2;a++)i.fillStyle=a%2?r:o,i.beginPath(),i.moveTo(t+a*s*.6,e+s),i.lineTo(t+a*s*.6+s*.6,e+s),i.lineTo(t+a*s*.6+s*1.2,e),i.lineTo(t+a*s*.6+s*.6,e),i.fill();i.restore()}function Kl(i,t,e,n,s){i.save(),i.translate(t,e),i.fillStyle="#f3c63a",i.beginPath();for(let r=0;r<10;r++){let o=r*Math.PI/5-Math.PI/2,a=r%2?n*.55:n;i.lineTo(Math.cos(o)*a,Math.sin(o)*a)}i.closePath(),i.fill(),i.fillStyle=s,i.beginPath(),i.arc(0,0,n*.42,0,7),i.fill(),i.fillStyle="#ffd23f",i.beginPath(),i.moveTo(0,-n*.32),i.quadraticCurveTo(n*.28,0,0,n*.3),i.quadraticCurveTo(-n*.28,0,0,-n*.32),i.fill(),i.restore()}var pa={};function Dx(i){if(pa[i])return pa[i];let t=i==="door"?256:512,e=i==="door"?192:128,n=Gs(t,e,s=>{s.clearRect(0,0,t,e);let r=(o,a,c)=>{s.fillStyle="rgba(0,0,0,.35)",s.fillRect(o,a,2,c-a),s.fillStyle="rgba(255,255,255,.18)",s.fillRect(o+2,a,1,c-a)};if(i==="fire"&&(s.fillStyle="#f6f1d0",s.fillRect(0,86,t,14),s.fillStyle="#ffd23f",s.fillRect(0,100,t,4),$l(s,0,86,70,14,"#f6f1d0","#c8141a"),r(t-150,14,112),r(t-60,14,112),s.fillStyle="rgba(0,0,0,.4)",s.fillRect(t-145,58,16,4),Kl(s,t-104,48,26,"#9a0e14"),s.fillStyle="#fff",s.font="900 30px sans-serif",s.textAlign="center",s.fillText("7",t-104,122),s.font="900 26px sans-serif",s.fillStyle="rgba(255,255,255,.95)",s.textAlign="left",s.fillText("RESCUE \xB7 7",20,72)),i==="door"&&(Kl(s,128,78,62,"#9a0e14"),s.fillStyle="#fff",s.strokeStyle="rgba(60,0,0,.8)",s.lineWidth=6,s.font="900 46px sans-serif",s.textAlign="center",s.strokeText("7",128,176),s.fillText("7",128,176),s.fillStyle="rgba(0,0,0,.4)",s.fillRect(10,6,3,180),s.fillRect(232,100,22,6)),i==="amb"){s.fillStyle="#d4161c",s.fillRect(0,78,t,18),s.fillStyle="#ff8a1e",s.fillRect(0,98,t,6),s.fillStyle="#1d56c8",s.fillRect(0,40,t*.62,6);let o=t*.36,a=50;s.fillStyle="#d4161c",s.fillRect(o-9,a-28,18,56),s.fillRect(o-28,a-9,56,18),s.fillStyle="#fff",s.fillRect(o-5,a-24,10,48),s.fillRect(o-24,a-5,48,10),r(t-150,14,112),r(t*.72,14,112),s.fillStyle="#1d3f9a",s.font="800 22px sans-serif",s.textAlign="left",s.fillText("MEDIC 7",t*.47,70)}i==="police"&&(s.fillStyle="#1d3f9a",s.fillRect(0,64,t,30),s.fillStyle="#ffffff",s.fillRect(0,94,t,5),s.fillStyle="#fff",s.font="900 26px sans-serif",s.textAlign="center",s.fillText("PATROL",t/2,88),r(t*.5,8,120),r(t*.24,8,120)),i==="van"&&($l(s,0,80,t,16,"#1a1a1e","#ffd23f"),r(t*.62,10,118),s.fillStyle="#1a1a1e",s.font="800 22px sans-serif",s.textAlign="left",s.fillText("CITY WORKS",22,62)),i==="tow"&&($l(s,0,84,t,14,"#1a1a1e","#ffd23f"),r(t-130,10,118),s.fillStyle="#1a1a1e",s.font="900 24px sans-serif",s.textAlign="left",s.fillText("TOW 24/7",20,64)),i==="chief"&&(s.fillStyle="#f6f1d0",s.fillRect(0,78,t,10),s.fillStyle="#ffd23f",s.fillRect(0,90,t,4),r(t*.5,8,120),Kl(s,t*.36,48,22,"#9a0e14"),s.fillStyle="#fff",s.font="900 22px sans-serif",s.textAlign="left",s.fillText("CHIEF",t*.5+14,60)),i==="car"&&(r(t*.5,10,120),r(t*.26,10,120),s.fillStyle="rgba(0,0,0,.45)",s.fillRect(t*.55,60,18,4),s.fillRect(t*.31,60,18,4),s.fillStyle="rgba(255,255,255,.22)",s.fillRect(0,46,t,2))});return pa[i]=new ve({map:n,transparent:!0,roughness:.35,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),pa[i]}var yt={red:xi(13112346),redD:xi(9047312,{roughness:.45,clearcoat:.4}),white:xi(15987696,{roughness:.28}),chrome:Qe(15659252,{metalness:1,roughness:.08,envMapIntensity:1.6}),alu:Qe(12896464,{metalness:.9,roughness:.28}),black:Qe(1513499,{roughness:.7}),trim:Qe(987154,{roughness:.45,metalness:.2}),tire:Qe(1710621,{roughness:.88,map:Lr.tread}),rubber:Qe(1052690,{roughness:.95}),glass:new Nn({color:1056814,metalness:.1,roughness:.03,clearcoat:1,clearcoatRoughness:0,envMapIntensity:2.6,reflectivity:1}),head:Qe(16777215,{emissive:16773832,emissiveIntensity:2.6,roughness:.1}),tail:Qe(5898240,{emissive:16718352,emissiveIntensity:1.6,roughness:.15}),amber:Qe(6961664,{emissive:16751120,emissiveIntensity:1.3,roughness:.2}),lr:Qe(5570560,{emissive:16719904,emissiveIntensity:1.6,roughness:.15}),lb:Qe(2133,{emissive:2117887,emissiveIntensity:1.8,roughness:.15}),yel:xi(16760596),refl:Qe(16117960,{emissive:4209168,roughness:.3}),hose:Qe(15258746,{roughness:.75}),hoseR:Qe(13122090,{roughness:.7}),grey:Qe(6053992,{roughness:.55,metalness:.3}),orange:xi(16742930),blue:xi(1916826),navy:xi(1319229),cone:Qe(16734736,{roughness:.55}),grille:Qe(16777215,{map:Lr.grille,metalness:.6,roughness:.25}),roll:Qe(16777215,{map:Lr.roll,metalness:.55,roughness:.35}),gauge:Qe(16777215,{map:Lr.gauge,roughness:.4}),plate:Qe(16777215,{map:Lr.plate,roughness:.5}),seat:Qe(2763825,{roughness:.8})},Zu={red:[13112346,.3,.08],redD:[9047312,.45,.08],refl:[16117960,.3,.1],chrome:[15659252,.08,1],alu:[12896464,.28,.9],white:[15987696,.28,.08],hose:[15258746,.75,.1]};function xn(i,t,e,n,s){let r=yt[i];r.color.setHex(t),r.roughness=e,r.metalness=n,r.emissive.setHex(s||0),r.emissiveIntensity=s?.35:1}var ma=1;function Lx(i){for(let t in Zu)xn(t,...Zu[t]);ma=1,i===1&&(xn("red",14161436,.22,.12),xn("redD",15921904,.3,.1),xn("alu",15000804,.15,1)),i===2&&(xn("red",10357010,.16,.45),xn("redD",1710622,.4,.3),xn("refl",14725168,.25,.9,3811840),xn("alu",15790320,.1,1),ma=1.25,xn("white",16184298,.18,.35)),i===3&&(xn("red",1184535,.14,.6),xn("redD",14263594,.2,1),xn("refl",16764746,.2,1,4862464),xn("chrome",16765802,.1,1),xn("alu",13213760,.18,1),ma=1.35,xn("white",16447212,.15,.3),xn("hose",16765802,.3,.8))}function ga(i,t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t.receiveShadow=!0,i.add(t),t}function Ut(i,t,e,n,s,r,o,a,c=.02){let l=Math.min(c,t/2-1e-4,e/2-1e-4,n/2-1e-4);return ga(i,new ct(l>.001?new fa(t,e,n,3,l):new xe(t,e,n),s),r,o,a)}function Fe(i,t,e,n,s,r,o,a="z",c=24,l){let h=new ct(new De(t,l==null?t:l,e,c),n);return a==="z"?h.rotation.x=Math.PI/2:a==="x"&&(h.rotation.z=Math.PI/2),ga(i,h,s,r,o)}function Ju(i,t,e,n,s,r,o,a=0,c=0){let l=new ct(new Ne(t,e),n);return l.rotation.set(c,a,0),l.castShadow=!1,l.receiveShadow=!0,l.position.set(s,r,o),i.add(l),l}function th(i,t,e,n,s,r,o,a="z"){let c=new ct(new Cn(t,e,10,28),n);return a==="y"?c.rotation.x=Math.PI/2:a==="x"&&(c.rotation.y=Math.PI/2),ga(i,c,s,r,o)}function $u(i,t,e,n=.075,s=.06){let r=Math.sign(e)||1,o=s*.78;Fe(i,n*.96,o,yt.tire,t,n,e,"z",28),[-1,1].forEach(a=>th(i,n*.8,n*.17,yt.rubber,t,n,e+a*o/2,"z")),Fe(i,n*.6,.006,yt.trim,t,n,e+r*(s/2-.004),"z",24),Fe(i,n*.56,.008,yt.chrome,t,n,e+r*(s/2),"z",24);for(let a=0;a<6;a++){let c=Ut(i,n*.5,n*.11,.006,yt.alu,t,n,e+r*(s/2+.003),0);c.rotation.z=a*Math.PI/3,c.position.x=t+Math.cos(a*Math.PI/3)*n*.22,c.position.y=n+Math.sin(a*Math.PI/3)*n*.22}Fe(i,n*.17,.014,yt.chrome,t,n,e+r*(s/2+.004),"z",16)}function Oi(i,t,e,n){t.forEach(s=>{$u(i,s,e/2-.03,n),$u(i,s,-e/2+.03,n)}),t.forEach(s=>{[-1,1].forEach(r=>Fe(i,n*1.14,.012,yt.trim,s,n*1.02,r*(e/2-.004),"z",24))})}function Vs(i,t,e,n,s=.05){s*=ma*(Ix?.5:1),Ut(i,s*1.05,.012,n*1.02,yt.trim,t,e,0,.005),Ut(i,s*.85,.02,n*.46,yt.lr,t,e+.014,-n*.25,.009),Ut(i,s*.85,.02,n*.46,yt.lb,t,e+.014,n*.25,.009),Ut(i,s*.5,.016,n*.06,yt.chrome,t,e+.012,0,.004),i.userData.lb=[[t,e+.02,-n*.25],[t,e+.02,n*.25]]}function xa(i,t,e,n,s=.02){[-1,1].forEach(r=>{let o=r*(n/2-.055);Fe(i,s*1.25,.01,yt.chrome,t,e,o,"x",20),Fe(i,s,.012,yt.head,t+.002,e,o,"x",20),Ut(i,.008,s*.7,s*1.4,yt.amber,t,e-s*1.9,o,.003)})}function Bi(i,t,e,n){[-1,1].forEach(s=>{let r=s*(n/2-.035);Ut(i,.01,.034,.034,yt.tail,t,e,r,.006),Ut(i,.01,.018,.034,yt.amber,t,e-.032,r,.004)})}function _a(i,t,e,n){[-1,1].forEach(s=>{Ut(i,.01,.008,.05,yt.chrome,t,e,s*(n/2+.02),0),Ut(i,.014,.05,.024,yt.trim,t-.004,e,s*(n/2+.044),.006)})}function _i(i,t,e,n,s,r,o){let a=Dx(t),c=n-e,l=r-s;Ju(i,c,l,a,(e+n)/2,(s+r)/2,o/2+.0025,0),Ju(i,c,l,a,(e+n)/2,(s+r)/2,-o/2-.0025,Math.PI)}function Ur(i,t,e,n,s,r,o=!0){let a=e-t,c=(t+e)/2;Ut(i,a,s*.62,n,r,c,.07+s*.31,0,.04),Ut(i,a*.86,s*.4,n*.97,r,c-a*.05,.07+s*.62+s*.18-.01,0,.045);let l=Ut(i,.012,s*.32,n*.86,yt.glass,e-a*.09,.07+s*.74,0,.006);l.rotation.z=.18,[-1,1].forEach(h=>{Ut(i,a*.58,s*.27,.006,yt.glass,c-a*.08,.07+s*.76,h*(n*.485+.002),.003),Ut(i,.006,s*.26,.008,r,c+a*.1,.07+s*.76,h*(n*.485+.003),0),Ut(i,.04,.006,.003,yt.chrome,c-a*.2,.07+s*.5,h*(n/2+.002),0)}),Ut(i,.012,s*.24,n*.66,yt.grille,e+.002,.07+s*.3,0,.004),Ut(i,.035,.045,n*1.01,yt.chrome,e+.012,.08,0,.018),Ut(i,.01,.012,n*.3,yt.plate,e+.03,.08,0,0),xa(i,e+.004,.07+s*.32,n),_a(i,e-a*.15,.07+s*.66,n),[-1,1].forEach(h=>Ut(i,a*.3,.012,.03,yt.alu,c,.06,h*(n/2+.008),.004)),o&&Vs(i,c-a*.05,.07+s+.006,n*.82,a*.42)}function ya(i,t,e,n,s,r=yt.refl){Ut(i,e-t,.016,s+.004,r,(t+e)/2,n,0,.004)}function Ku(i,t,e,n,s,r,o){let a=(e-t)/o;for(let c=0;c<o;c++)[-1,1].forEach(l=>{Ut(i,a*.9,s-n,.006,yt.roll,t+a*(c+.5),(n+s)/2,l*(r/2+.002),.003),Ut(i,a*.92,.008,.01,yt.chrome,t+a*(c+.5),s+.004,l*(r/2+.004),.002)})}function Ql(i,t,e,n,s,r){for(let o=0;o<3;o++)th(i,s,s*.28,r,t,e+o*s*.55,n,"y")}function jl(i,t,e,n=0){[-1,1].forEach(r=>{Ut(i,t,.022,.018,yt.alu,t/2-.02,n,r*e/2,.006),Ut(i,t*.96,.008,.008,yt.chrome,t/2-.02,n+.018,r*e/2,0)});let s=Math.round(t/.05);for(let r=0;r<s;r++)Fe(i,.0055,e,yt.chrome,r*t/s,n,0,"z",8)}var $n={};$n.E=()=>{let i=new jt,t=.42,e=.27;Ur(i,.16,.44,t,e+.03,yt.red),Ut(i,.6,e-.04,t,yt.red,-.13,.07+(e-.04)/2,0,.035),Ku(i,-.4,-.02,.1,.25,t,3),[-1,1].forEach(s=>{Ut(i,.1,.13,.008,yt.gauge,.08,.19,s*(t/2+.002),.004),Ut(i,.1,.014,.012,yt.chrome,.08,.26,s*(t/2+.005),.003),Fe(i,.014,.03,yt.chrome,.06,.12,s*(t/2+.012),"z",12),Fe(i,.014,.03,yt.yel,.1,.12,s*(t/2+.012),"z",12)}),_i(i,"door",.2,.36,.1,.22,t*.97),ya(i,-.43,.45,.085,t),Ut(i,.5,.03,t*.86,yt.redD,-.14,e+.075,0,.01),Ql(i,-.25,e+.1,-.08,.045,yt.hose),Ql(i,-.25,e+.1,.08,.045,yt.hoseR),Ql(i,-.08,e+.1,0,.05,yt.hose),[-1,1].forEach(s=>Ut(i,.5,.014,.014,yt.chrome,-.14,e+.12,s*t*.44,.004));let n=new jt;return n.position.set(-.38,.08+e+.07,t*.3),i.add(n),jl(n,.42,.08,0),Fe(i,.05,.12,yt.chrome,-.43,.2,0,"z",20),Fe(i,.04,.13,yt.hoseR,-.43,.2,0,"z",20),Ut(i,.05,.02,t*.95,yt.alu,-.45,.07,0,.006),Bi(i,-.432,.2,t),Ut(i,.004,.02,.06,yt.plate,-.434,.11,0,0),Oi(i,[.31,-.22,-.34],t,.072),i};$n.K=()=>{let i=new jt,t=.42,e=.25;Ur(i,.24,.48,t,e+.05,yt.red),Ut(i,.7,e-.06,t,yt.red,-.12,.07+(e-.06)/2,0,.035),Ku(i,-.44,.2,.1,.22,t,4),_i(i,"door",.27,.42,.1,.215,t*.97),ya(i,-.47,.49,.085,t),[-1,1].forEach(r=>{Ut(i,.03,.05,.05,yt.alu,.18,.06,r*(t/2+.02),.008),Ut(i,.03,.05,.05,yt.alu,-.42,.06,r*(t/2+.02),.008)}),Fe(i,.085,.04,yt.alu,-.36,e+.035,0,"y",28),Fe(i,.06,.05,yt.redD,-.36,e+.07,0,"y",24);let n=new jt;n.position.set(-.36,e+.11,0),n.rotation.z=-.03,i.add(n),n.userData.ladder=1,jl(n,.86,.2,0);let s=new jt;return s.position.set(.08,.03,0),n.add(s),jl(s,.74,.15,0),Ut(n,.12,.06,.2,yt.redD,0,-.03,0,.012),Ut(n,.06,.04,.12,yt.yel,.84,.02,0,.006),Fe(n,.012,.5,yt.chrome,.4,-.015,0,"x",8),Bi(i,-.475,.16,t),Oi(i,[.37,-.25,-.37],t,.072),i};$n.T=()=>{let i=new jt,t=.42;Ur(i,.18,.44,t,.27+.03,yt.red),Ut(i,.62,.06,t*.92,yt.redD,-.12,.09,0,.012),Fe(i,.135,.5,yt.chrome,-.13,.25,0,"x",40),[-1,1].forEach(n=>{let s=new ct(new Ze(.135,32,16),yt.chrome);s.scale.set(.32,1,1),ga(i,s,-.13+n*.25,.25,0)}),[-.33,-.13,.07].forEach(n=>Fe(i,.141,.022,yt.red,n,.25,0,"x",40)),Ut(i,.36,.012,.07,yt.alu,-.13,.39,0,.003),[-1,1].forEach(n=>Ut(i,.36,.01,.006,yt.chrome,-.13,.42,n*.05,0));for(let n=0;n<4;n++)Fe(i,.004,.03,yt.chrome,-.29+n*.105,.405,0,"y",6);return Fe(i,.03,.02,yt.alu,-.05,.395,0,"y",16),[-1,1].forEach(n=>{Ut(i,.18,.05,.008,yt.roll,.06,.12,n*(t*.46+.002),.004),Fe(i,.016,.03,yt.yel,-.02,.12,n*(t*.46+.012),"z",12)}),Fe(i,.05,.1,yt.chrome,-.44,.2,0,"z",20),Fe(i,.04,.11,yt.hoseR,-.44,.2,0,"z",20),ya(i,-.43,.18,.085,t*.92),_i(i,"door",.21,.37,.1,.22,t*.97),Bi(i,-.432,.14,t*.92),Oi(i,[.31,-.23,-.35],t,.072),i};$n.A=()=>{let i=new jt,t=.4,e=.31;return Ur(i,.2,.43,t,e*.78,yt.white,!1),Ut(i,.6,e-.04,t,yt.white,-.1,.07+(e-.04)/2,0,.045),_i(i,"amb",-.4,.2,.07,.33,t),[-1,1].forEach(n=>Ut(i,.08,.06,.006,yt.glass,-.03,.25,n*(t/2+.002),.006)),Ut(i,.006,.1,.12,yt.glass,-.403,.24,0,.004),Ut(i,.006,.24,.004,yt.trim,-.403,.17,0,0),Vs(i,.31,e*.78+.07+.006,t*.8,.06),[-1,1].forEach(n=>{Ut(i,.03,.025,.03,n>0?yt.lb:yt.lr,-.38,e+.08,n*(t/2-.03),.008),Ut(i,.03,.025,.03,n>0?yt.lr:yt.lb,.18,e+.08,n*(t/2-.03),.008)}),Ut(i,.5,.012,.06,yt.alu,-.1,e+.075,0,.004),Ut(i,.05,.02,t*.95,yt.alu,-.405,.07,0,.006),Bi(i,-.405,.16,t),Oi(i,[.3,-.26],t,.066),i};$n.V=()=>{let i=new jt,t=.38,e=.28;Ut(i,.68,e-.06,t,yt.orange,0,.06+(e-.06)/2,0,.06);let n=Ut(i,.012,.1,t*.86,yt.glass,.3,.2,0,.004);n.rotation.z=.35,[-1,1].forEach(s=>Ut(i,.2,.08,.006,yt.glass,.18,.21,s*(t/2+.002),.003)),_i(i,"van",-.33,.33,.06,.2,t),Ut(i,.012,.05,t*.5,yt.grille,.342,.11,0,.004),xa(i,.342,.14,t,.016),Ut(i,.03,.04,t*1.01,yt.trim,.35,.07,0,.015),Vs(i,.18,e+.006,t*.8,.05),Bi(i,-.343,.15,t),[-1,1].forEach(s=>Ut(i,.36,.008,.008,yt.chrome,-.08,e+.025,s*t*.38,0));for(let s=0;s<5;s++)Ut(i,.008,.008,t*.76,yt.chrome,-.24+s*.08,e+.025,0,0);return _a(i,.24,.2,t),Oi(i,[.22,-.22],t,.062),i};$n.P=()=>{let i=new jt,t=.34;return Qu(i,t,yt.white,yt.navy),_i(i,"police",-.3,.3,.07,.17,t),Vs(i,-.03,.255,t*.82,.05),Ut(i,.02,.06,t*.7,yt.trim,.34,.09,0,.01),i};$n.C=()=>{let i=new jt,t=.36;Ut(i,.66,.13,t,yt.red,0,.12,0,.05);let e=Ut(i,.42,.11,t*.9,yt.red,-.05,.235,0,.04),n=Ut(i,.012,.09,t*.8,yt.glass,.17,.23,0,.004);return n.rotation.z=.4,Ut(i,.012,.08,t*.78,yt.glass,-.262,.23,0,.004),[-1,1].forEach(s=>{Ut(i,.36,.075,.006,yt.glass,-.05,.235,s*(t*.45+.002),.003),Ut(i,.006,.075,.008,yt.red,-.05,.235,s*(t*.45+.003),0)}),_i(i,"chief",-.32,.32,.06,.18,t),Ut(i,.012,.05,t*.5,yt.grille,.332,.12,0,.004),xa(i,.333,.14,t,.016),Ut(i,.03,.035,t*1.01,yt.chrome,.34,.075,0,.014),Vs(i,-.02,.295,t*.8,.045),Ut(i,.22,.01,t*.84,yt.trim,-.1,.293,0,.003),[-1,1].forEach(s=>Ut(i,.3,.008,.008,yt.chrome,-.06,.3,s*t*.38,0)),_a(i,.15,.2,t),Bi(i,-.333,.15,t),Oi(i,[.21,-.21],t,.065),i};$n.W=()=>{let i=new jt,t=.4,e=.26;Ur(i,-.08,.2,t,e,yt.yel),Ut(i,.1,.06,t*.6,yt.grey,.25,.09,0,.01),Ut(i,.32,.06,t*.9,yt.alu,-.24,.1,0,.02),_i(i,"tow",-.08,.2,.06,.14,t);let n=new jt;n.position.set(-.3,.13,0),n.rotation.z=.5,i.add(n),Ut(n,.3,.04,.06,yt.yel,.12,0,0,.01),Ut(n,.24,.03,.045,yt.alu,.2,.02,0,.008),Fe(i,.03,.08,yt.chrome,-.3,.14,0,"z",16);let s=Fe(i,.004,.12,yt.trim,-.04,.2,0,"y",6);return th(i,.015,.004,yt.chrome,-.04,.13,0,"z"),Ut(i,.06,.02,t*.8,yt.trim,-.41,.07,0,.006),ya(i,-.4,-.08,.1,t*.9,yt.grey),Bi(i,-.405,.13,t*.9),Vs(i,.06,e+.07+.006,t*.8,.05),Oi(i,[.13,-.27],t,.07),i};function Qu(i,t,e,n){Ut(i,.66,.1,t,e,0,.11,0,.045),Ut(i,.6,.03,t*.98,e,0,.165,0,.012);let s=Ut(i,.34,.085,t*.86,n||e,-.03,.215,0,.04),r=Ut(i,.012,.075,t*.76,yt.glass,.15,.21,0,.004);r.rotation.z=.55;let o=Ut(i,.012,.07,t*.76,yt.glass,-.21,.21,0,.004);o.rotation.z=-.5,[-1,1].forEach(a=>{Ut(i,.28,.058,.006,yt.glass,-.03,.215,a*(t*.43+.002),.003),Ut(i,.006,.058,.008,n||e,-.03,.215,a*(t*.43+.003),0),Ut(i,.03,.006,.003,yt.chrome,.02,.14,a*(t/2+.002),0),Ut(i,.03,.006,.003,yt.chrome,-.1,.14,a*(t/2+.002),0)}),Ut(i,.012,.04,t*.45,yt.grille,.332,.11,0,.004),xa(i,.331,.125,t,.015),Ut(i,.02,.03,t*1,yt.chrome,.336,.075,0,.012),Ut(i,.02,.03,t*1,yt.chrome,-.336,.075,0,.012),Ut(i,.004,.018,.06,yt.plate,.347,.08,0,0),Ut(i,.004,.018,.06,yt.plate,-.347,.09,0,0),Bi(i,-.332,.12,t),_a(i,.1,.17,t),Oi(i,[.21,-.21],t,.058)}function eh(i){let t=new jt,e=.34,n=xi(i,{roughness:.25,metalness:.25});return Qu(t,e,n),_i(t,"car",-.3,.3,.07,.17,e),t}function ju(){let i=new jt;Ut(i,.24,.02,.24,yt.black,0,.01,0,.02);let t=new ct(new Un(.09,.32,28),yt.cone);t.position.y=.18,t.castShadow=!0,i.add(t);let e=new ct(new De(.052,.068,.06,28,1,!0),Qe(16777215,{emissive:3355443}));return e.position.y=.17,i.add(e),i}function td(){let i=new jt;[-1,1].forEach(s=>{Ut(i,.04,.22,.04,yt.alu,0,.11,s*.32,.01),Ut(i,.2,.02,.05,yt.grey,0,.01,s*.32,.005)});let t=document.createElement("canvas");t.width=256,t.height=32;let e=t.getContext("2d");for(let s=0;s<8;s++)e.fillStyle=s%2?"#fff":"#e01818",e.beginPath(),e.moveTo(s*32,0),e.lineTo(s*32+32,0),e.lineTo(s*32+16,32),e.lineTo(s*32-16,32),e.fill();let n=new mn(t);return n.colorSpace=Ve,Ut(i,.04,.08,.76,new ve({map:n,roughness:.4}),0,.2,0,0),Ut(i,.012,.012,.012,yt.lr,0,.27,-.32,0),Ut(i,.012,.012,.012,yt.lr,0,.27,.32,0),i}function ed(){let i=new jt,t=xi(14161944,{roughness:.35});Fe(i,.065,.2,t,0,.12,0,"y"),Fe(i,.08,.03,t,0,.02,0,"y");let e=new ct(new Ze(.068,24,12,0,Math.PI*2,0,Math.PI/2),t);return e.position.y=.22,i.add(e),Fe(i,.02,.03,yt.chrome,0,.29,0,"y"),Fe(i,.03,.2,yt.chrome,0,.15,0,"x"),Fe(i,.035,.05,yt.chrome,0,.15,.07,"z"),i}function nh(i){Lx(i)}var nd=Math.PI*2,Ws=(i,t,e)=>Math.max(t,Math.min(e,i)),ih=(i,t,e)=>i+(t-i)*e,Nx=new URLSearchParams(location.search),Oe=window.R3={ok:!1,lost:!1,frames:0,ms:0};function Fx(){if(Nx.get("r")==="2d"||window.SAVE&&SAVE.r2d)return Kn("2D renderer forced");let i;try{i=new ko({antialias:!0,alpha:!0,powerPreference:"high-performance",premultipliedAlpha:!0,stencil:!1})}catch(U){return Kn("WebGL unavailable \u2192 2D",U&&U.message)}if(!i.getContext())return;i.setPixelRatio(1),i.outputColorSpace=Ve,i.toneMapping=Fl,i.toneMappingExposure=1,i.shadowMap.enabled=!0,i.shadowMap.type=Ul,i.autoClear=!1;let t=i.domElement;t.addEventListener("webglcontextlost",U=>{U.preventDefault(),Oe.lost=!0,Kn("context lost \u2192 2D fallback")}),t.addEventListener("webglcontextrestored",()=>{Oe.lost=!1,Kn("context restored")}),Oe.R=i,Oe.ok=!0;let n=new Os(i).fromScene(new da,.04).texture,s=()=>!(SAVE.gfx==="low"||SAVE.gfx==="auto"&&window.V2&&V2.lowAuto);function r(U,P){let A=new It;i.getSize(A),(A.x<U||A.y<P)&&i.setSize(Math.max(A.x,U,8),Math.max(A.y,P,8),!1)}function o(U,P){r(U,P),i.setViewport(0,0,U,P),i.setScissor(0,0,U,P),i.setScissorTest(!0),i.setClearColor(0,0),i.clear(!0,!0,!0)}function a(U,P,A,X,B,$,it){U.drawImage(t,0,t.height-A,P,A,X,B,$,it)}let c=()=>s()?Math.min(DPR,Oe.prCap||2):Math.min(DPR,1.1);function l(U,P=128){let A=document.createElement("canvas");A.width=A.height=P;let X=A.getContext("2d"),B=X.createRadialGradient(P/2,P/2,0,P/2,P/2,P/2);U.forEach(([it,st])=>B.addColorStop(it,st)),X.fillStyle=B,X.fillRect(0,0,P,P);let $=new mn(A);return $.colorSpace=Ve,$}let h=l([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,.55)"],[1,"rgba(255,255,255,0)"]]),u=l([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,.4)"],[1,"rgba(255,255,255,0)"]],64),d=(()=>{let P=document.createElement("canvas");P.width=P.height=128;let A=P.getContext("2d");for(let B=0;B<26;B++){let $=64+(Math.random()-.5)*128*.45,it=128/2+(Math.random()-.5)*128*.45,st=128*(.12+Math.random()*.2),lt=A.createRadialGradient($,it,0,$,it,st);lt.addColorStop(0,"rgba(255,255,255,.35)"),lt.addColorStop(1,"rgba(255,255,255,0)"),A.fillStyle=lt,A.fillRect(0,0,128,128)}let X=new mn(P);return X.colorSpace=Ve,X})(),f=(U,P=1)=>new ii({map:h,color:U,blending:fn,depthWrite:!1,transparent:!0,opacity:P,toneMapped:!1}),x=[null,1913976,1732148,14065688],y=new Map,p=new Map;function m(U){try{return/^[EKT]$/.test(U)&&SAVE.v3?SAVE.v3.skin|0:0}catch{return 0}}function w(U){U.updateMatrixWorld(!0);let P=new Pe().copy(U.matrixWorld).invert(),A=new Map;U.traverse(B=>{if(!B.isMesh)return;let $=B.geometry.index?B.geometry.toNonIndexed():B.geometry.clone();$.applyMatrix4(new Pe().multiplyMatrices(P,B.matrixWorld));for(let st of Object.keys($.attributes))["position","normal","uv"].includes(st)||$.deleteAttribute(st);$.attributes.uv||$.setAttribute("uv",new Ke(new Float32Array($.attributes.position.count*2),2));let it=B.material;A.has(it)||A.set(it,[]),A.get(it).push($)});let X=new jt;return A.forEach((B,$)=>{let it=new ct(Yu(B,!1),$);it.castShadow=!0,it.receiveShadow=!0,X.add(it),B.forEach(st=>st.dispose())}),X}function v(U,P,A,X){nh(A);let B=P();B.traverse(ut=>{if(!ut.isMesh)return;let g=ut.material,I=A+"|"+X+"|"+g.uuid,N=p.get(I);N||(N=g.clone(),N.envMap=null,X&&g===yt.red&&A<3&&N.color.setHex(x[X]),g===yt.lr&&(N.name="lr"),g===yt.lb&&(N.name="lb"),p.set(I,N)),ut.material=N});let $=B.userData.lb||[],it=null,st=null;B.traverse(ut=>{ut.userData&&ut.userData.ladder&&(it=ut)}),it&&(st={p:it.position.clone(),r:it.rotation.clone()},B.remove(it));let lt=w(B);if(it){it.position.set(0,0,0),it.rotation.set(0,0,0);let ut=w(it);ut.position.copy(st.p),ut.rotation.copy(st.r),ut.userData.ladder=1,lt.add(ut),lt.userData.lad=ut}let rt=new Yn().setFromObject(lt);return lt.userData={...lt.userData,lb:$,bb:rt,L:rt.max.x-rt.min.x,Wd:rt.max.z-rt.min.z,cx:(rt.max.x+rt.min.x)/2,cz:(rt.max.z+rt.min.z)/2},nh(0),lt}function S(U,P){let A="EKTA".includes(U),X=A?m(U):0,B=U+(A?P:"")+"|"+X,$=y.get(B);if($)return $;let it;return $n[U]?it=$n[U]:U.startsWith("car")?it=()=>eh(+U.slice(3)):it={cone:ju,bar:td,hyd:ed}[U],$=v(B,it,A?P:0,X),y.set(B,$),$}function K(U){let P="sed"+U,A=y.get(P);return A||(A=v(P,()=>eh(U),0,0),y.set(P,A)),A}function R(U,P){let A=new jt,X=new jt,B=U.clone();A.add(X),X.add(B);let $=U.userData;if(P){let rt=Math.min(P[0]/$.L,P[1]/$.Wd);B.scale.setScalar(rt),B.position.set(-$.cx*rt,0,-$.cz*rt),A.userData.f=rt}else A.userData.f=1;let it=[],st=[];B.traverse(rt=>{rt.isMesh&&(rt.material.name==="lr"||rt.material.name==="lb")&&(rt.material=rt.material.clone(),(rt.material.name==="lr"?it:st).push(rt.material))}),A.userData.lr=it,A.userData.lb=st,A.userData.yaw=X,A.userData.body=B;let lt=[];return($.lb||[]).forEach((rt,ut)=>{let g=new cn(f(ut?3828991:16722458,0));g.position.set(rt[0],rt[1]+.02,rt[2]),g.scale.setScalar(.34),g.visible=!1,B.add(g),lt.push(g)}),A.userData.glows=lt,$.lad&&(A.userData.lad=B.children.find(rt=>rt.userData.ladder)),A}function z(U,P,A,X=0){let B=Math.sin(A*14+X)>0;U.userData.lr.forEach($=>$.emissiveIntensity=P?B?5:.25:.5),U.userData.lb.forEach($=>$.emissiveIntensity=P?B?.25:6:.5),U.userData.glows.forEach(($,it)=>{$.visible=P,$.material.opacity=P?(it?!B:B)?1:.08:0})}let C={scene:new bn,cam:new qe(30,1,.5,80),objs:new Map,key:null,tex:null};{let U=C.scene;U.environment=n,U.environmentIntensity=.45,C.hemi=new Fn(13162239,2764342,.75),U.add(C.hemi);let P=C.key=new gn(16773340,2.4);P.position.set(-6,8,-2.5),P.castShadow=!0,P.shadow.mapSize.set(1024,1024),P.shadow.bias=-6e-4,P.shadow.normalBias=.02,P.shadow.radius=4,U.add(P),U.add(P.target),C.fireL=new gn(16742954,0),C.fireL.position.set(0,4,-8),U.add(C.fireL);let A=new ve({color:12105916,roughness:.38,metalness:.2,transparent:!0,envMapIntensity:.7});C.apron=new ct(new Ne(80,80),new ve({color:2764084,roughness:.9})),C.apron.rotation.x=-Math.PI/2,C.apron.position.y=-.02,C.apron.receiveShadow=!0,U.add(C.apron),C.ground=new ct(new Ne(1,1),A),C.ground.rotation.x=-Math.PI/2,C.ground.receiveShadow=!0,U.add(C.ground),C.ring=new ct(new ea(.42,.52,40),new ze({color:16769610,transparent:!0,toneMapped:!1,depthWrite:!1})),C.ring.rotation.x=-Math.PI/2,C.ring.position.y=.015,U.add(C.ring);let X=new Zn;X.moveTo(.08,0),X.lineTo(-.05,-.075),X.lineTo(-.05,.075),X.closePath(),C.arrowGeo=new na(X),C.arrowGeo.rotateX(-Math.PI/2),C.arrowMat=new ze({color:16777215,transparent:!0,opacity:.75,toneMapped:!1,depthWrite:!1}),C.hintMat=new ze({color:16765503,transparent:!0,opacity:1,toneMapped:!1,depthWrite:!1,depthTest:!1}),C.headTex=(()=>{let B=document.createElement("canvas");B.width=128,B.height=64;let $=B.getContext("2d"),it=$.createLinearGradient(0,0,128,0);it.addColorStop(0,"rgba(255,240,200,.55)"),it.addColorStop(1,"rgba(255,240,200,0)"),$.fillStyle=it,$.beginPath(),$.moveTo(0,26),$.lineTo(128,0),$.lineTo(128,64),$.lineTo(0,38),$.fill();let st=new mn(B);return st.colorSpace=Ve,st})(),C.headMat=new ze({map:C.headTex,transparent:!0,blending:fn,depthWrite:!1,toneMapped:!1}),C.poolMat=new ze({map:u,transparent:!0,blending:fn,depthWrite:!1,toneMapped:!1}),C.root=new jt,U.add(C.root)}function _t(){let U=new jt,P=new ve({color:3817030,metalness:.7,roughness:.35}),A=new ct(new De(.035,.05,1.1,10),P);A.position.y=.55,A.castShadow=!0,U.add(A);let X=new ct(new xe(.32,.04,.05),P);X.position.set(.14,1.08,0),U.add(X);let B=new ct(new Ze(.06,12,8),new ze({color:16773312,toneMapped:!1}));B.position.set(.28,1.04,0),U.add(B);let $=new cn(f(16767120,.55));$.scale.setScalar(.45),$.position.copy(B.position),U.add($);let it=new ct(new Ne(1.6,1.6),C.poolMat.clone());return it.material.color.setHex(9071152),it.rotation.x=-Math.PI/2,it.position.set(.28,.01,0),U.add(it),U}function _(){let U=G.L;C.key2=G,C.L=U,C.root.clear(),C.objs.clear();let P=BOARD;C.board=P,C.tex&&C.tex.dispose(),C.tex=new mn(P.c),C.tex.colorSpace=Ve,C.tex.anisotropy=4,C.ground.material.map=C.tex,C.ground.material.needsUpdate=!0;let A=G.cs,X=P.w/A,B=P.h/A;C.ground.scale.set(X,B,1),C.ground.position.set((P.ox+P.w/2-G.bx)/A-U.w/2,0,(P.oy+P.h/2-G.by)/A-U.h/2),C.reg={w:X,h:B,cx:C.ground.position.x,cz:C.ground.position.z};let $=C.key.shadow.camera,it=Math.max(U.w,U.h)/2+1.5;Object.assign($,{left:-it,right:it,top:it,bottom:-it,near:1,far:30}),$.updateProjectionMatrix();let st=U.w/2+.55,lt=U.h/2+.55;[[-st,-lt,0],[st,-lt,Math.PI],[-st,lt,0],[st,lt,Math.PI]].forEach(([rt,ut,g])=>{let I=_t();I.position.set(rt,0,ut),I.rotation.y=g+(ut<0?-.6:.6)*(g?-1:1),C.root.add(I)}),C.shadowDirty=3}let b=(U,P)=>[U+.5-C.L.w/2,P+.5-C.L.h/2];function dt(U,P){let A=C.objs.get(U);return A||(A=P(),A.userData.id=U,C.objs.set(U,A),C.root.add(A)),A.userData.seen=C.frame,A}let ft=[.9,.66];function pt(U){return dt("v"+U.v.id+"_"+St(U.v.type)+"_"+m(U.v.type),()=>{let P=R(S(U.v.type,St(U.v.type)),ft),A=new ct(new Ne(1.3,.7),C.headMat);A.rotation.x=-Math.PI/2,A.position.set(1.05,.012,0),A.visible=!1,P.userData.yaw.add(A),P.userData.hl=A;let X=new ct(C.arrowGeo,C.arrowMat);return X.position.y=.02,C.root.add(X),P.userData.arrow=X,P.userData.prevAng=U.ang,P.userData.roll=0,P})}function St(U){try{return"EKTA".includes(U)&&SAVE.v3.fleet[U]||0}catch{return 0}}function ht(U,P,A){return dt(U,()=>R(S(P,0),A))}function Pt(U){return dt(U,()=>{let P=new jt,A=new ve({color:4869978,metalness:.6,roughness:.4}),X=new ct(new xe(.14,.32,.14),A);X.position.set(-.38,.16,0),X.castShadow=!0,P.add(X);let B=new jt;B.position.set(-.38,.28,0),P.add(B);let $=document.createElement("canvas");$.width=128,$.height=16;let it=$.getContext("2d");for(let ut=0;ut<8;ut++)it.fillStyle=ut%2?"#fff":"#e01818",it.fillRect(ut*16,0,16,16);let st=new mn($);st.colorSpace=Ve;let lt=new ct(new xe(.86,.06,.06),new ve({map:st,roughness:.4}));lt.position.x=.43,lt.castShadow=!0,B.add(lt),P.userData.arm=B;let rt=new ct(new Ze(.035,8,6),new ze({color:16724e3,toneMapped:!1}));return rt.position.set(-.38,.34,0),P.add(rt),P})}function vt(U){return dt(U,()=>{let P=new jt,A=new ct(new De(.3,.34,.06,28),new ve({color:2764083,metalness:.5,roughness:.5}));A.position.y=.03,A.receiveShadow=!0,P.add(A);let X=new ct(new De(.2,.22,.08,28),new ve({color:16761370,emissive:6702080,roughness:.3}));X.position.y=.09,P.add(X),P.userData.btn=X;let B=new cn(f(16765503,0));return B.scale.setScalar(.9),B.position.y=.15,P.add(B),P.userData.gl=B,P})}let Vt=32*Math.PI/180,kt=new L,Bt=()=>G&&G.view||BOARD;function ge(U,P,A,X){let B=P.w/2+.12,$=P.h/2+.2,it=Math.max(B,$*1.15)*4+4;U.position.set(Math.sin(X)*Math.sin(A)*it,Math.cos(A)*it,Math.cos(X)*Math.sin(A)*it),U.up.set(0,1,0),U.lookAt(0,0,0),U.updateMatrixWorld();let st=1e9,lt=-1e9,rt=1e9,ut=-1e9,g=U.matrixWorldInverse;for(let I of[-1,1])for(let N of[-1,1])for(let q of[0,.42]){kt.set(I*B,q,N*$).applyMatrix4(g);let k=-kt.z,V=kt.x/k,j=kt.y/k;st=Math.min(st,V),lt=Math.max(lt,V),rt=Math.min(rt,j),ut=Math.max(ut,j)}return{x0:st,x1:lt,y0:rt,y1:ut,D:it}}let Se=new qe;window.R3boardRatio=function(U){let P=ge(Se,U,Vt,0);return(P.y1-P.y0)/(P.x1-P.x0)};function Et(){let U=C.L,P=C.cam,A=Bt(),X=A.w/A.h,B=Vt,$=0;if(G.state==="win"){let k=Ws(G.winT/1.6,0,1),V=k*k*(3-2*k);B=Vt+V*.1,$=G.winT*.1*V}let{x0:it,x1:st,y0:lt,y1:rt,D:ut}=ge(P,U,B,$),g=st-it,I=rt-lt;if(g/I<X){let k=I*X;it-=(k-g)/2,st=it+k}else{let k=g/X;lt=rt-k}let N=ut*.3,q=ut*3;P.near=N,P.far=q,P.aspect=X,P.projectionMatrix.makePerspective(it*N,st*N,rt*N,lt*N,N,q),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),C.camOK=!0}let Dt=[3108822,14721056,3842138,13123690,9067216,14708784,4894920];function Zt(U){return dt("pp"+U,()=>{let P=new jt,A=new ct(new jo(.09,.18,4,10),new ve({color:Dt[U%Dt.length],roughness:.7}));A.position.y=.2,A.castShadow=!0,P.add(A);let X=new ct(new Ze(.075,12,10),new ve({color:[1578e4,13144160,9067066][U%3],roughness:.6}));return X.position.y=.42,X.castShadow=!0,P.add(X),P})}function Ht(U){let P=C.L,A=Bt(),X=P.h/2,B=P.w/2,$=X+.45,it=0,st=Math.max(1.2,(P.w+2)/6);for(let lt=-B-.4;lt<=B+.4;lt+=st,it++){let rt=$+.2+it*37%3*.08;(it%3===0?ht("dh"+it,"hyd",[.5,.5]):ht("dc"+it,"cone",[.45,.45])).position.set(lt,0,rt)}for(let lt=0;lt<Math.max(6,P.w+3);lt++){let rt=Zt(lt),ut=-B+lt*.61803%1*P.w*1.05,g=$+.55+lt*7%3*.2;rt.position.set(ut,Math.abs(Math.sin(U*3+lt*1.7))*.05,g),rt.rotation.y=Math.PI+Math.sin(lt)*.4}}let ne=new aa,ee=new It,re=new Wn(new L(0,1,0),-.12),ue=new L;window.pickCell=function(U,P){if(!ce()||!C.camOK||!G||C.key2!==G)return null;let A=Bt();if(ee.set((U-A.ox)/A.w*2-1,-((P-A.oy)/A.h*2-1)),ne.setFromCamera(ee,C.cam),!ne.ray.intersectPlane(re,ue))return null;let X=ue.x+C.L.w/2-.5,B=ue.z+C.L.h/2-.5,$=Math.round(X),it=Math.round(B);if(G.st.occ[$+","+it])return[$,it];let st=null,lt=.75;for(let rt=-1;rt<=1;rt++)for(let ut=-1;ut<=1;ut++){let g=$+rt+","+(it+ut);if(!G.st.occ[g])continue;let I=Math.hypot(X-$-rt,B-it-ut);I<lt&&(lt=I,st=[$+rt,it+ut])}return st||[$,it]};let wt=window.cellXY;window.cellXY=function(U,P){if(!ce()||!C.camOK||!G||C.key2!==G)return wt(U,P);kt.set(U+.5-C.L.w/2,.15,P+.5-C.L.h/2).project(C.cam);let A=Bt();return[A.ox+(kt.x+1)/2*A.w,A.oy+(1-kt.y)/2*A.h]};function F(){let U=performance.now();(C.key2!==G||C.board!==BOARD)&&_(),C.frame=(C.frame||0)+1;let P=G.t,A=G.cs,X=s();C.key.castShadow=X;let B=C.shadowDirty>0;C.shadowDirty>0&&C.shadowDirty--;let $=G.state==="win"?0:Ws(G.fire/G.fireMax,0,1.3);C.fireL.intensity=$*(1.1+.25*Math.sin(P*9)+.1*Math.sin(P*23));for(let g of Object.values(G.vv)){if(g.done||g.scale<=0)continue;let I=pt(g),[N,q]=b(g.px,g.py),k=g.segs.length>0,V=I.userData,j=angDiff(V.prevAng,g.ang);V.prevAng=g.ang,V.roll=ih(V.roll,Ws(j*6,-.12,.12),.25),(k||Math.abs(j)>1e-4||g.scale<1||Math.abs(g.sq)>.01||(g.wob||0)>.01)&&(B=!0);let gt=E.back?E.back(Ws(g.scale,0,1)):g.scale;I.position.set(N,k?Math.abs(Math.sin(P*22+g.v.id))*.012:0,q),I.rotation.y=-g.ang,I.scale.set(gt*(1+g.sq*.5),gt*(1-g.sq),gt*(1+g.sq*.3)),V.yaw.rotation.x=V.roll+(g.wob?Math.sin(P*40)*g.wob*.3:0),V.yaw.rotation.z=k?-.025:0,z(I,!!g.siren,P,g.v.id),V.hl.visible=!!g.siren&&X;let mt=!!(G.hint&&G.hint.id===g.v.id&&!k),xt=!k&&g.scale>=1&&G.state==="play";if(V.arrow.visible=xt,V.arrow.material=mt?C.hintMat:C.arrowMat,V.arrow.renderOrder=mt?10:0,mt){let Y=.5+.5*Math.sin(G.hint.t*6);I.position.y=Math.abs(Math.sin(G.hint.t*5))*.07,B=!0;let[at,Ct]=FL.DIRS[g.v.d],Ft=.62+Y*.14;V.arrow.position.set(N+at*Ft,.03,q+Ct*Ft),V.arrow.rotation.y=-ANG[g.v.d],V.arrow.scale.setScalar(2.1+Y*.35)}else if(xt){V.arrow.scale.setScalar(1);let[Y,at]=FL.DIRS[g.v.d];V.arrow.position.set(N+Y*.5,.02,q+at*.5),V.arrow.rotation.y=-ANG[g.v.d],V.arrow.material.opacity=.55+.2*Math.sin(P*4)}V.arrow.userData.seen=C.frame}G.st.blk.forEach(g=>{let I=g.x+","+g.y,N=G.blkJ[I]||0;if(g.sub==="#"){let q=G.cars[I];if(!q||q.done)return;let k=parseInt((q.col&&q.col[1]||"#4a8fd6").slice(1),16),V=dt("c"+I+"_"+k,()=>R(K(k),ft)),[j,gt]=b(q.px,q.py);V.position.set(j+Math.sin(N*40)*.05*N,0,gt),V.rotation.y=-q.ang,(q.attached||N>0)&&(B=!0)}else if(!g.gone){let q=ht("b"+I,g.sub==="x"?"bar":"cone",g.sub==="x"?[.8,.8]:[.62,.62]),[k,V]=b(g.x,g.y);q.position.set(k+Math.sin(N*40)*.06*N,0,V),g.sub==="x"&&(q.rotation.y=Math.PI/2*((g.x+g.y)%2)),N>0&&(B=!0)}}),G.st.hyd.forEach((g,I)=>{if(G.hydVis[I].gone)return;let N=ht("h"+I,"hyd",[.55,.55]),[q,k]=b(g.x,g.y);N.position.set(q,0,k)}),G.st.sw.forEach((g,I)=>{let N=vt("s"+I),[q,k]=b(g.x,g.y);N.position.set(q,0,k);let V=G.gateA>0;N.userData.btn.position.y=V?.06:.09,N.userData.gl.material.opacity=V?.2:.35+.25*Math.sin(P*5)}),G.st.gates.forEach((g,I)=>{let N=Pt("g"+I),[q,k]=b(g.x,g.y);N.position.set(q,0,k),N.userData.arm.rotation.z=G.gateA*1.35,G.gateA>0&&G.gateA<1&&(B=!0)});let it=G.hint&&G.st.veh[G.hint.id];if(C.ring.visible=!!(it&&!it.gone),C.ring.visible){let[g,I]=b(it.x,it.y),N=.5+.5*Math.sin(G.hint.t*6);C.ring.position.set(g,.015,I),C.ring.scale.setScalar(1+N*.12),C.ring.material.opacity=.5+N*.5}Ht(P);for(let[g,I]of C.objs)I.userData.seen!==C.frame&&(C.root.remove(I),I.userData.arrow&&C.root.remove(I.userData.arrow),C.objs.delete(g),B=!0);G.state==="win"&&(B=!0),i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=X&&B,Et();let st=Bt(),lt=c(),rt=Math.round(st.w*lt),ut=Math.round(st.h*lt);o(rt,ut),i.render(C.scene,C.cam),a(cx,rt,ut,st.ox,st.oy,st.w,st.h),Oe.ms=ih(Oe.ms,performance.now()-U,.1)}let Ot={1:{sky:["#0b1430","#2a3f6e"],fog:1713216,amb:8425664,ambI:.9,key:10466559,keyI:1.2,keyP:[-6,10,8],build:"apt"},2:{sky:["#2a1438","#c8604a"],fog:4859968,amb:16756880,ambI:1,key:16752752,keyI:1.6,keyP:[-10,5,6],build:"market"},3:{sky:["#2a3038","#6a6058"],fog:3817544,amb:13160668,ambI:1.2,key:15265008,keyI:1.4,keyP:[6,10,6],build:"factory"},4:{sky:["#3a1a10","#ff9a40"],fog:6961696,amb:16760976,ambI:1,key:16756832,keyI:2,keyP:[-10,4,4],build:"cabin"},5:{sky:["#05070e","#1a2236"],fog:658968,amb:6320288,ambI:.8,key:8425664,keyI:.9,keyP:[5,10,8],build:"tower"}},Z={ch:0},Rt="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",Nt=`uniform float t,seed,amp;varying vec2 vUv;
 float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
 float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p*=2.03;a*=.5;}return v;}
 void main(){vec2 uv=vUv;float y=uv.y;float x=(uv.x-.5)*2.;
  float nz=fbm(vec2(uv.x*3.2+seed,y*2.6-t*2.4));float nz2=fbm(vec2(uv.x*6.+seed*2.,y*5.-t*4.));
  float w=mix(.95,.05,pow(y,.8));float d=abs(x+(nz-.5)*.9*y);
  float shape=1.-smoothstep(w*.45,w,d);float body=shape*smoothstep(1.02,.2,y+(nz2-.5)*.55)*smoothstep(0.,.1,y);
  float core=1.-smoothstep(0.,.55,d/w+y*.9);
  vec3 c=mix(vec3(1.,.55,.12),vec3(1.,.95,.7),core);c=mix(c,vec3(.75,.12,.02),smoothstep(.45,.95,y));
  float a=body*amp;gl_FragColor=vec4(c*a*1.5,a);}`;function Kt(U){return new wn({uniforms:{t:{value:0},seed:{value:U},amp:{value:1}},vertexShader:Rt,fragmentShader:Nt,transparent:!0,depthWrite:!1,blending:fn})}function Xt(U,P){let A=document.createElement("canvas");A.width=4,A.height=256;let X=A.getContext("2d"),B=X.createLinearGradient(0,0,0,256);B.addColorStop(0,U),B.addColorStop(1,P),X.fillStyle=B,X.fillRect(0,0,4,256);let $=new mn(A);return $.colorSpace=Ve,$}function D(U,P,A){let X=document.createElement("canvas"),B=64;X.width=Math.round(U*B/4)*4,X.height=Math.round(P*B/4)*4;let $=X.getContext("2d");if($.fillStyle=A.wall,$.fillRect(0,0,X.width,X.height),A.brick){$.globalAlpha=.18;for(let V=0;V<X.height;V+=6)for(let j=V/6%2*8;j<X.width;j+=16)$.fillStyle=Math.random()<.5?"#000":"#fff",$.fillRect(j,V,15,5);$.globalAlpha=1}if(A.logs)for(let V=0;V<X.height;V+=14){let j=$.createLinearGradient(0,V,0,V+14);j.addColorStop(0,"#8a5a32"),j.addColorStop(.5,"#6a4024"),j.addColorStop(1,"#3a2210"),$.fillStyle=j,$.fillRect(0,V,X.width,14)}if(A.panels){$.strokeStyle="rgba(0,0,0,.25)",$.lineWidth=2;for(let V=0;V<X.width;V+=12)$.beginPath(),$.moveTo(V,0),$.lineTo(V,X.height),$.stroke()}let it=A.cols,st=A.rows,lt=X.width/it,rt=X.height/st,ut=[];for(let V=0;V<st;V++)for(let j=0;j<it;j++){if(A.door&&V===st-1&&j===Math.floor(it/2))continue;let gt=j*lt+lt*A.mx,mt=V*rt+rt*A.my,xt=lt*(1-2*A.mx),Y=rt*(1-2*A.my);$.fillStyle=A.frame||"#d8d0c0",$.fillRect(gt-2,mt-2,xt+4,Y+4);let at=Math.random()<(A.lit||.35);$.fillStyle=at?"#ffcf7a":A.glass||"#1a2230",$.fillRect(gt,mt,xt,Y),at&&ut.push([gt,mt,xt,Y]),A.sill&&($.fillStyle="rgba(255,255,255,.35)",$.fillRect(gt-3,mt+Y+1,xt+6,3)),A.noMul||($.fillStyle="rgba(0,0,0,.35)",$.fillRect(gt+xt/2-1,mt,2,Y))}if(A.door){let V=Math.floor(it/2),j=st-1;$.fillStyle="#3a2416",$.fillRect(V*lt+lt*.25,j*rt+rt*.2,lt*.5,rt*.8),$.fillStyle="#ffcf7a",$.fillRect(V*lt+lt*.3,j*rt+rt*.25,lt*.4,rt*.15)}let g=new mn(X);g.colorSpace=Ve,g.anisotropy=4;let I=document.createElement("canvas");I.width=X.width,I.height=X.height;let N=I.getContext("2d");N.fillStyle="#000",N.fillRect(0,0,I.width,I.height),N.fillStyle="#ffb050",ut.forEach(([V,j,gt,mt])=>N.fillRect(V,j,gt,mt));let q=new mn(I);q.colorSpace=Ve;let k=[];for(let V=0;V<st;V++)for(let j=0;j<it;j++)k.push([(j+.5)/it*U-U/2,P-(V+A.my+.45*(1-2*A.my))/st*P]);return{mat:new ve({map:g,emissiveMap:q,emissive:16777215,emissiveIntensity:.55,roughness:.85}),anchors:k}}function M(U,P,A,X,B,$,it,st){let lt=new ct(new xe(P,A,X),B);return lt.position.set($,it+A/2,st),lt.castShadow=!0,lt.receiveShadow=!0,U.add(lt),lt}function ot(U,P,A,X){let B=new Zn;B.moveTo(-U/2,0),B.lineTo(U/2,0),B.lineTo(0,P),B.closePath();let $=new Bs(B,{depth:A,bevelEnabled:!1});$.translate(0,0,-A/2);let it=new ct($,X);return it.castShadow=!0,it}let tt=(U,P={})=>new ve(Object.assign({color:U,roughness:.8},P));function bt(U){let P=new jt,A=[],X=[],B=tt(3811876);if(U==="apt"){let $=D(12,13,{wall:"#7a3a2a",brick:1,cols:6,rows:5,mx:.22,my:.2,sill:1,door:1,lit:.25}),it=[B,B,tt(2759188),B,$.mat,B],st=new ct(new xe(12,13,5),it);st.position.y=6.5,st.castShadow=st.receiveShadow=!0,P.add(st),M(P,12.4,.5,5.4,tt(5909022),0,13,0);for(let lt=1;lt<5;lt++)M(P,1.8,.12,.8,tt(2763310,{metalness:.6}),-3.7,lt*2.6,2.9);A.push(...$.anchors.filter((lt,rt)=>[1,4,7,8,10,13,15,20,22].includes(rt)).map(lt=>[lt[0],lt[1]-.6,2.55]),[-2,13.6,1],[3,13.6,0]),X=[[-1,13.3,2.4],[4,13.3,2.4],[$.anchors[2][0],$.anchors[2][1]-1,2.6],[$.anchors[9][0],$.anchors[9][1]-1,2.6]]}else if(U==="market"){let $=[14200960,13146736,14731424],it=[14165532,1997528,2793546];for(let st=0;st<3;st++){let lt=(st-1)*4.6,rt=D(4.4,7,{wall:"#"+$[st].toString(16),cols:2,rows:2,mx:.18,my:.2,lit:.6,frame:"#6a4a2a"}),ut=new ct(new xe(4.4,7,4),[B,B,B,B,rt.mat,B]);ut.position.set(lt,3.5,0),ut.castShadow=ut.receiveShadow=!0,P.add(ut);let g=ot(4.8,2.2,4.4,tt(6957594));g.position.set(lt,7,0),P.add(g);let I=new ct(new xe(4.2,.08,1.6),tt(it[st]));I.position.set(lt,2.9,2.7),I.rotation.x=.35,I.castShadow=!0,P.add(I);for(let N=0;N<3;N++){let q=new ct(new Ze(.22,10,8),new ze({color:16732208,toneMapped:!1}));q.position.set(lt-1.4+N*1.4,2.5,3.4),P.add(q)}M(P,3.4,.9,1.2,tt(9071162),lt,0,3),A.push(...rt.anchors.map(N=>[lt+N[0],N[1]-.4,2.1]),[lt,8.6,0])}X=[[-4.6,4.6,2.2],[0,4.6,2.2],[4.6,4.6,2.2]]}else if(U==="factory"){let $=D(16,6,{wall:"#8a9098",panels:1,cols:8,rows:2,mx:.15,my:.28,lit:.25,glass:"#2a3440",frame:"#5a6068"}),it=new ct(new xe(16,6,7),[B,B,B,B,$.mat,B]);it.position.y=3,it.castShadow=it.receiveShadow=!0,P.add(it);for(let lt=0;lt<4;lt++){let rt=ot(4,1.8,7,tt(6975608,{metalness:.4,roughness:.5}));rt.position.set(-6+lt*4,6,0),rt.rotation.z=0,P.add(rt)}[[-5,1],[4.5,-1.2]].forEach(([lt,rt])=>{let ut=new ct(new De(.6,.75,11,16),tt(8014394));ut.position.set(lt,5.5,rt),ut.castShadow=!0,P.add(ut),M(P,1.6,.4,1.6,tt(2763306),lt,10.8,rt)});let st=new ct(new De(1.6,1.6,4,20),tt(11581632,{metalness:.7,roughness:.3}));st.position.set(9.6,2,1),st.castShadow=!0,P.add(st),A.push(...$.anchors.map(lt=>[lt[0],lt[1]-.3,3.55]),[-5,11.5,1],[4.5,11.6,-1.2],[-2,7.4,1],[2,7.4,1]),X=[[-6,6.5,3.2],[6,6.5,3.2]]}else if(U==="cabin"){let $=D(9,4.2,{logs:1,wall:"#6a4024",cols:3,rows:1,mx:.3,my:.25,lit:.7,frame:"#3a2010",door:0}),it=new ct(new xe(9,4.2,6),[tt(5913120),tt(5913120),B,B,$.mat,tt(5913120)]);it.position.y=2.1,it.castShadow=it.receiveShadow=!0,P.add(it);let st=ot(10.4,3.6,7,tt(3810328));st.position.y=4.2,P.add(st),M(P,9.6,.25,2.2,tt(8015920),0,0,3.9);for(let ut=-2;ut<=2;ut++)M(P,.2,1.9,.2,tt(5913120),ut*2.2,.25,4.8);M(P,1,3,1,tt(6974064),3,5.2,0);let lt=tt(1718818,{roughness:.9}),rt=tt(3810324);for(let ut=0;ut<16;ut++){let g=(ut<8?-1:1)*(7+Math.random()*9),I=-6+Math.random()*9,N=2+Math.random()*2.5,q=new jt,k=new ct(new Un(N*.55,N*2,8),lt);k.position.y=N*1.4,k.castShadow=!0,q.add(k);let V=new ct(new Un(N*.42,N*1.5,8),lt);V.position.y=N*2.3,q.add(V);let j=new ct(new De(.15,.2,N*.6,6),rt);j.position.y=N*.3,q.add(j),q.position.set(g,0,I),P.add(q),ut%3===0&&A.push([g,N*2,I+1])}A.push(...$.anchors.map(ut=>[ut[0],ut[1]-.3,3.05]),[-2,6,1.5],[2.4,6.4,1.2],[0,7.2,0],[-3.6,5.2,2.5]),X=[[0,1.2,4.6],[-2.2,1.2,4.6]]}else{let $=D(7,26,{wall:"#2a3442",cols:5,rows:12,mx:.08,my:.12,lit:.3,glass:"#1a2a3c",frame:"#8090a0",noMul:1}),it=new ct(new xe(7,26,6),[tt(2239030),tt(2239030),B,B,new ve({map:$.mat.map,emissiveMap:$.mat.emissiveMap,emissive:16777215,emissiveIntensity:.9,roughness:.25,metalness:.5}),tt(2239030)]);it.position.y=13,it.castShadow=it.receiveShadow=!0,P.add(it),M(P,4,2,4,tt(3818064),0,26,0);let st=new ct(new De(.08,.08,5),tt(10066329,{metalness:1}));st.position.set(0,30.5,0),P.add(st);let lt=new ct(new Ze(.2,8,6),new ze({color:16719904,toneMapped:!1}));lt.position.set(0,33,0),P.add(lt),[[-9,14,-4],[9,18,-3],[-15,10,-6],[15,22,-7]].forEach(([rt,ut,g])=>{let I=D(5,ut,{wall:"#1e2632",cols:3,rows:Math.round(ut/2.4),mx:.12,my:.15,lit:.25,glass:"#121a26",frame:"#4a5462",noMul:1}),N=new ct(new xe(5,ut,5),[tt(1712688),tt(1712688),B,B,I.mat,tt(1712688)]);N.position.set(rt,ut/2,g),P.add(N)}),A.push(...$.anchors.filter((rt,ut)=>[6,8,12,17,21,23,27,31,33,36,38,42].includes(ut)).map(rt=>[rt[0],rt[1]-.4,3.05])),X=[[$.anchors[7][0],$.anchors[7][1]-.8,3.1],[$.anchors[16][0],$.anchors[16][1]-.8,3.1],[0,27.2,1.5]]}return{g:P,F:A,P:X}}function Mt(U){let P=new jt,A=tt(U.coat,{roughness:.75}),X=tt(U.pants||2763310),B=tt(14725258,{roughness:.6}),$=tt(1118481),it=new ve({color:15261808,emissive:5919760,roughness:.3}),st=(mt,xt,Y,at)=>{let Ct=new ct(new De(mt,xt,Y,10),at);return Ct.castShadow=!0,Ct},lt=mt=>{let xt=new jt;xt.position.set(mt*.11,.92,0);let Y=st(.085,.075,.48,X);Y.position.y=-.24,xt.add(Y);let at=new jt;at.position.y=-.47,xt.add(at);let Ct=st(.075,.065,.42,X);Ct.position.y=-.21,at.add(Ct);let Ft=new ct(new xe(.13,.1,.24),$);if(Ft.position.set(0,-.43,.04),at.add(Ft),U.ff){let le=st(.078,.078,.04,it);le.position.y=-.3,at.add(le)}return P.add(xt),{p:xt,kn:at}},rt=lt(-1),ut=lt(1),g=new jt;g.position.y=.92,P.add(g);let I=new ct(new De(.19,.17,.62,12),A);if(I.position.y=.33,I.scale.z=.75,I.castShadow=!0,g.add(I),U.ff){let mt=st(.195,.195,.05,it);mt.position.y=.12,mt.scale.z=.76,g.add(mt);let xt=st(.195,.195,.05,it);xt.position.y=.42,xt.scale.z=.76,g.add(xt);let Y=st(.08,.08,.42,tt(14211288,{metalness:.8,roughness:.3}));Y.position.set(0,.4,-.17),g.add(Y)}let N=new jt;N.position.y=.74,g.add(N);let q=new ct(new Ze(.11,14,10),B);if(q.position.y=.07,N.add(q),U.ff){let mt=tt(U.helmet||14165532,{roughness:.3,metalness:.2}),xt=new ct(new Ze(.135,14,8,0,nd,0,Math.PI/2),mt);xt.position.y=.1,N.add(xt);let Y=new ct(new De(.2,.21,.03,16),mt);Y.position.set(0,.1,-.03),Y.scale.z=1.2,N.add(Y)}else{let mt=new ct(new Ze(.118,12,8,0,nd,0,Math.PI/2),tt(U.hair||2759184));mt.position.y=.09,N.add(mt)}let k=mt=>{let xt=new jt;xt.position.set(mt*.22,.58,0),g.add(xt);let Y=st(.06,.055,.32,A);Y.position.y=-.16,xt.add(Y);let at=new jt;at.position.y=-.31,xt.add(at);let Ct=st(.05,.045,.28,A);Ct.position.y=-.14,at.add(Ct);let Ft=new ct(new Ze(.05,8,6),U.ff?tt(2236962):B);return Ft.position.y=-.3,at.add(Ft),{p:xt,el:at}},V=k(-1),j=k(1),gt=null;if(U.ff){gt=new jt;let mt=st(.04,.03,.36,tt(12632256,{metalness:1,roughness:.2}));mt.rotation.x=Math.PI/2,mt.position.z=.18,gt.add(mt),gt.position.set(0,.5,.3),g.add(gt)}return P.userData={L:rt,R:ut,A:V,B:j,torso:g,head:N,noz:gt},P}function Jt(U,P,A,X){let B=U.userData,$=Math.sin(A*8+X);if(P==="walk")B.L.p.rotation.x=$*.6,B.R.p.rotation.x=-$*.6,B.L.kn.rotation.x=Math.max(0,-$)*.8,B.R.kn.rotation.x=Math.max(0,$)*.8,B.A.p.rotation.x=-$*.5,B.B.p.rotation.x=$*.5,B.torso.position.y=.92+Math.abs($)*.03;else if(P==="spray")B.L.p.rotation.x=.25,B.R.p.rotation.x=-.35,B.L.kn.rotation.x=.2,B.R.kn.rotation.x=.45,B.torso.rotation.x=.12+Math.sin(A*20+X)*.01,B.A.p.rotation.x=-1.25,B.B.p.rotation.x=-1.05,B.A.p.rotation.z=.25,B.B.p.rotation.z=-.35,B.A.el.rotation.x=-.3,B.B.el.rotation.x=-.5;else if(P==="wave")B.B.p.rotation.z=-2.6+Math.sin(A*9+X)*.35,B.A.p.rotation.z=.1;else if(P==="cheer"){let it=Math.abs(Math.sin(A*6+X));U.position.y=(U.userData.y0||0)+it*.35,B.A.p.rotation.z=2.7,B.B.p.rotation.z=-2.7}else B.L.p.rotation.x=B.R.p.rotation.x=0,B.L.kn.rotation.x=B.R.kn.rotation.x=0,B.A.p.rotation.set(0,0,.08),B.B.p.rotation.set(0,0,-.08)}function zt(U,P){let A=new jt,X=tt(U,{roughness:.9}),B=tt(P||U,{roughness:.9}),$=tt(16183526,{roughness:.9}),it=tt(16747176,{roughness:.6}),st=new ve({color:1118481,roughness:.15,metalness:.1}),lt=(V,j,gt,mt,xt,Y=1,at=1,Ct=1)=>{let Ft=new ct(new Ze(V,16,12),j);return Ft.position.set(gt,mt,xt),Ft.scale.set(Y,at,Ct),Ft.castShadow=!0,A.add(Ft),Ft};lt(.3,X,0,.3,-.05,1,1.05,1.25),lt(.2,$,0,.3,.18,1,1.1,.6),[-.15,.15].forEach(V=>{lt(.09,$,V,.07,.26,1,.7,1.3),lt(.1,X,V*1.4,.12,-.25,1,.8,1.4)});let rt=new jt;rt.position.set(0,.72,.08),A.add(rt);let ut=new ct(new Ze(.26,18,14),X);ut.scale.set(1.12,.95,1),ut.castShadow=!0,rt.add(ut);let g=new ct(new Ze(.12,14,10),$);g.position.set(0,-.07,.19),g.scale.set(1.3,.8,.8),rt.add(g);let I=new ct(new Ze(.035,8,6),it);I.position.set(0,-.02,.27),rt.add(I),[-1,1].forEach(V=>{let j=new ct(new Ze(.06,12,10),st);j.position.set(V*.1,.04,.22),j.scale.set(1,1.25,.6),rt.add(j);let gt=new ct(new Ze(.018,6,6),new ze({color:16777215}));gt.position.set(V*.1+.02,.07,.26),rt.add(gt);let mt=new ct(new Un(.1,.2,4),X);mt.position.set(V*.15,.22,0),mt.rotation.z=-V*.35,mt.castShadow=!0,rt.add(mt);let xt=new ct(new Un(.055,.12,4),it);xt.position.set(V*.15,.21,.035),xt.rotation.z=-V*.35,rt.add(xt);for(let Y=0;Y<2;Y++){let at=new ct(new De(.004,.004,.22,3),$);at.rotation.z=Math.PI/2+V*(Y?.2:-.1),at.position.set(V*.2,-.06+Y*.03,.2),rt.add(at)}}),P&&[0,1,2].forEach(V=>{let j=new ct(new Cn(.27,.025,6,20,Math.PI),B);j.rotation.set(Math.PI/2,0,0),j.position.set(0,.45-V*.13,-.08),j.scale.set(1,1.25,1),A.add(j)});let N=new Sr([new L(0,.12,-.38),new L(.18,.2,-.55),new L(.3,.5,-.5),new L(.26,.75,-.42)]),q=new ct(new sa(N,16,.05,8),X);q.castShadow=!0;let k=new jt;return k.add(q),A.add(k),A.userData={hd:rt,tg:k},A}function Yt(){let U=new jt,P=tt(12615744,{roughness:.9}),A=tt(5913120),X=($,it,st,lt,rt,ut=1,g=1,I=1)=>{let N=new ct(new Ze($,14,10),it);return N.position.set(st,lt,rt),N.scale.set(ut,g,I),N.castShadow=!0,U.add(N),N};X(.28,P,0,.42,0,1,.85,1.6),X(.2,P,0,.72,.42),X(.1,P,0,.66,.6,1,.8,1.3),X(.04,tt(1118481),0,.68,.72),[-1,1].forEach($=>{X(.09,A,$*.17,.82,.38,.6,1.4,.8),[-.25,.25].forEach(it=>{let st=new ct(new De(.06,.06,.32,8),P);st.position.set($*.13,.16,it),U.add(st)})});let B=new ct(new De(.03,.05,.35,6),P);return B.position.set(0,.6,-.48),B.rotation.x=-.7,U.add(B),U.userData.tail=B,U}function _e(U,P){P=P||{};let A=R(K(U),null);A.scale.setScalar(4.4);let X=new jt;X.add(A);let B=tt(1380879,{roughness:1}),$=new ve({color:12576511,roughness:.05,metalness:.3,transparent:!0,opacity:.7}),it=new ct(new Cr(.55,0),B);it.position.set(1.25,.55,0),it.scale.set(.8,.45,1.1),X.add(it);let st=new ct(new xe(.12,.18,1.5),tt(10133672,{metalness:.9,roughness:.3}));st.position.set(1.55,.3,.3),st.rotation.y=.5,st.rotation.z=.3,st.castShadow=!0,X.add(st);for(let lt=0;lt<14;lt++){let rt=new ct(new ia(.05+Math.random()*.06),$);rt.position.set(1.4+Math.random()*1.6,.03,(Math.random()-.5)*2.2),rt.rotation.set(Math.random()*3,Math.random()*3,0),X.add(rt)}if(P.tire){let lt=new ct(new Cn(.32,.13,8,18),tt(1118481,{roughness:.9}));lt.rotation.x=Math.PI/2,lt.position.set(2.6,.13,1.2),X.add(lt)}return X.userData.front=new L(1.2,.9,0),X}function Lt(U,P,A){let X=new ct(new Un(.22,.6,14),tt(16738832,{roughness:.5}));X.position.set(P,.3,A),X.castShadow=!0,U.add(X);let B=new ct(new De(.13,.15,.1,14),tt(16777215));B.position.set(P,.36,A),U.add(B)}function Gt(U,P,A,X){let B=new jt,$=tt(13685978,{metalness:.8,roughness:.3}),it=tt(15265266,{roughness:.6}),st=tt(16742938,{roughness:.5}),lt=new ct(new xe(2,.12,.65),it);lt.position.y=.8,lt.castShadow=!0,B.add(lt);let rt=new ct(new xe(.25,.13,.66),st);rt.position.set(.3,.81,0),B.add(rt);let ut=new ct(new xe(.4,.1,.5),tt(16777215));return ut.position.set(-.75,.9,0),B.add(ut),[[-.8,-.25],[-.8,.25],[.8,-.25],[.8,.25]].forEach(([g,I])=>{let N=new ct(new De(.03,.03,.75,6),$);N.position.set(g,.38,I),B.add(N);let q=new ct(new De(.07,.07,.05,10),tt(2236962));q.rotation.x=Math.PI/2,q.position.set(g,.07,I),B.add(q)}),B.position.set(P,0,A),B.rotation.y=X||0,U.add(B),B}function oe(U,P,A){let X=new ct(new xe(.6,.4,.3),tt(16053492,{roughness:.4}));X.position.set(P,.2,A),X.castShadow=!0,U.add(X);let B=tt(14688298);[[.32,.08],[.08,.32]].forEach(([$,it])=>{let st=new ct(new xe($,it,.02),B);st.position.set(P,.22,A+.16),U.add(st)})}function ae(U,P,A){let X=new ct(new Cn(.32,.05,4,3),new ve({color:16719904,emissive:6295568,roughness:.3}));X.position.set(P,.36,A),X.rotation.z=Math.PI/2,U.add(X)}function $t(U){let P=tt(5913122,{roughness:1}),A=[tt(3045940,{roughness:.9,flatShading:!0}),tt(3839040,{roughness:.9,flatShading:!0}),tt(2384426,{roughness:.9,flatShading:!0})],X=[],B=new ct(new De(.5,.95,7.5,12),P);B.position.y=3.75,B.castShadow=!0,U.add(B);let $=(lt,rt,ut,g,I)=>{let N=new ct(new De(.14,.3,g,8),P);N.geometry.translate(0,g/2,0),N.position.set(lt,rt,0),N.rotation.z=ut,N.rotation.x=I||0,N.castShadow=!0,U.add(N);let q=new L(0,g,0).applyEuler(N.rotation).add(N.position);X.push(q)};$(0,4.2,1.05,4.2,.15),$(0,5,-1,4,-.1),$(0,6,.55,3.4,.2),$(0,6.4,-.6,3.2,.15),$(0,7,.1,2.6,.25),$(0,3.4,-1.25,3.2,.3),[[0,9.6,-.5,3.2],[-3.6,8.2,-.4,2.6],[3.6,8,-.3,2.7],[-2,10.2,-.8,2.4],[2.2,10.3,-.8,2.3],[0,7.6,-1.6,2.8],[-4.4,6.4,-.6,2],[4.4,6.6,-.2,2],[0,11.3,-.6,1.9]].forEach(([lt,rt,ut,g],I)=>{let N=new ct(new Cr(g,1),A[I%3]);N.position.set(lt,rt,ut),N.castShadow=!0,N.receiveShadow=!0,U.add(N)});let st=new ct(new Un(1.6,.8,10),P);return st.position.y=.2,U.add(st),X}function we(U,P){let A=new jt,X=[],B=[],$=[],it=[3832789,14737632,2763310,8014552,14196768];if(U==="crash"){let st=_e(it[P%5],{tire:1});st.position.set(-2.6,0,1.2),st.rotation.y=.55,A.add(st);let lt=_e(it[(P+2)%5]);if(lt.position.set(1.8,0,.4),lt.rotation.y=Math.PI+.75,A.add(lt),P>=3){let g=_e(it[(P+3)%5]);g.position.set(6.4,1.05,-1.6),g.rotation.set(0,-.4,Math.PI/2*.98),A.add(g),X.push([6.2,2.4,-1])}[st,lt].forEach(g=>{g.updateMatrixWorld(!0);let I=g.userData.front.clone().applyMatrix4(g.matrixWorld);X.push([I.x,I.y,I.z+.3])});let rt=new ct(new br(1.6,24),new ve({color:328965,roughness:.05,metalness:.6}));rt.rotation.x=-Math.PI/2,rt.position.set(-.2,.02,2),rt.scale.x=1.6,A.add(rt);let ut=new ze({color:657930,transparent:!0,opacity:.6,depthWrite:!1});[[-7,2.2,.08],[-7,3,.12]].forEach(([g,I,N])=>{let q=new ct(new Ne(5,.25),ut);q.rotation.set(-Math.PI/2,0,N),q.position.set(g,.015,I),A.add(q)}),[-5.5,-4.6,4.6,5.5].forEach((g,I)=>Lt(A,g,3.4+I%2*.3)),ae(A,-6.6,3.6),B.push([-4.6,0,3.2],[-.6,0,3.4],[3.6,0,3],[1,0,3.6],[-3,0,3.8],[4.6,0,3.8]),$.push("sit","lie","sit","lie","sit","lie")}else if(U==="hurt"){let st=tt(12107462,{metalness:.8,roughness:.35}),lt=tt(11567168,{roughness:.9}),rt=(ut,g,I,N,q,k)=>{let V=new ct(new De(.07,.07,N,8),st);V.position.set(ut,g,I),V.rotation.set(q||0,0,k||0),V.castShadow=!0,A.add(V)};for(let ut=0;ut<4;ut++)rt(-6+ut*2.4,3,-1.2,6);rt(-2.4,6,-1.2,7.4,0,Math.PI/2),rt(-2.4,3,-1.2,7.4,0,Math.PI/2),rt(1.2,2.2,0,5,0,.9),rt(2.6,1.2,.6,4,.3,1.35),[[-2.4,6.1,-1.2,0,0],[-2.4,3.1,-1.2,0,0],[1.4,.3,1.4,.1,.15],[3.4,.6,.8,.2,-.5]].forEach(([ut,g,I,N,q])=>{let k=new ct(new xe(4,.12,.7),lt);k.position.set(ut,g,I),k.rotation.set(N,q,q*.4),k.castShadow=!0,A.add(k)});for(let ut=0;ut<5;ut++){let g=new ct(new xe(.6,.6,.6),tt(13148256));g.position.set(4+Math.random()*2,.3+(ut>2?.6:0),-.5+Math.random()),g.rotation.y=Math.random(),g.castShadow=!0,A.add(g)}Gt(A,-4.6,2.6,.2),Gt(A,5.4,3,-.25),oe(A,-1.6,3.6),oe(A,2.2,3.8),X.push([2,1,.8],[-1,1,.2],[4.6,1,0]),B.push([-2.8,0,2.6],[.6,0,2.8],[3.2,0,2.4],[-4.6,.85,2.6],[5.4,.85,3],[-.9,0,3.8]),$.push("lie","lie","sit","lie","lie","sit")}else{let st=$t(A);A.position.set(0,0,0),st.sort((g,I)=>I.y-g.y),st.forEach(g=>B.push([g.x*.9,g.y-.35,Math.max(g.z,0)+1.7])),$.push("cat");let lt=tt(15788760);for(let g=-10;g<=10;g++){let I=new ct(new xe(.18,1.3,.1),lt);I.position.set(g*.8,.65,-2.6),A.add(I)}let rt=new ct(new xe(17,.12,.08),lt);rt.position.set(0,1,-2.55),A.add(rt);let ut=new ct(new br(5,30),tt(3107370,{roughness:1}));ut.rotation.x=-Math.PI/2,ut.position.set(0,.03,.4),ut.receiveShadow=!0,A.add(ut)}return{g:A,F:X,P:B,mode:$}}function J(U,P,A,X){let B=U.userData;P==="lie"?(B.L.p.rotation.x=0,B.R.p.rotation.x=.15,B.A.p.rotation.set(0,0,.5),B.B.p.rotation.set(-.4+Math.sin(A*1.5+X)*.35,0,-.3),B.torso.scale.y=1+Math.sin(A*2+X)*.015):(B.L.p.rotation.x=-1.45,B.R.p.rotation.x=-1.35,B.L.kn.rotation.x=1.2,B.R.kn.rotation.x=.9,B.A.p.rotation.set(-2.5,0,.35),B.A.el.rotation.x=-1.4,B.B.p.rotation.set(-.5+Math.sin(A*3+X)*.25,0,-.2),B.head.rotation.z=Math.sin(A*1.2+X)*.12)}function nt(U){let P=Ot[U]||Ot[1],A=new bn;Z.scene=A,Z.ch=U,Z.G=G,A.background=Xt(P.sky[0],P.sky[1]),A.environment=n,A.environmentIntensity=.35,A.fog=new ji(P.fog,30,75),A.add(new Fn(P.amb,2105376,P.ambI));let X=new gn(P.key,P.keyI);X.position.set(...P.keyP).multiplyScalar(3),X.castShadow=!0,X.shadow.mapSize.set(1024,1024),Object.assign(X.shadow.camera,{left:-22,right:22,top:30,bottom:-6,near:1,far:120}),X.shadow.bias=-8e-4,A.add(X),Z.key=X;let B=new Tn(16742954,0,40,1.4);A.add(B),Z.fireL=B;let $=new ct(new Ne(140,40),new ve({color:2237739,roughness:.28,metalness:.4,envMapIntensity:.6}));$.rotation.x=-Math.PI/2,$.position.z=12,$.receiveShadow=!0,A.add($);let it=new ct(new xe(140,.25,5),tt(6974064));it.position.set(0,.12,4.5),it.receiveShadow=!0,A.add(it);let st=new ze({color:14205024,toneMapped:!1});for(let V=-8;V<=8;V++){let j=new ct(new Ne(2,.18),st);j.rotation.x=-Math.PI/2,j.position.set(V*5,.01,12),A.add(j)}let lt=new ct(new Ne(200,60),new ze({color:0,transparent:!0,opacity:0}));lt.position.z=-40,A.add(lt);let rt=tt(new he(P.fog).multiplyScalar(.6).getHex(),{roughness:1});for(let V=0;V<22;V++){let j=3+Math.random()*5,gt=U===4?0:4+Math.random()*(U===5?26:12);if(!gt)continue;let mt=new ct(new xe(j,gt,3),rt);mt.position.set(-55+V*5+Math.random()*2,gt/2,-18-Math.random()*8),A.add(mt)}if(U===4){let V=tt(1057818);for(let j=0;j<40;j++){let gt=3+Math.random()*4,mt=new ct(new Un(gt*.5,gt*2.2,7),V);mt.position.set(-50+j*2.6,gt*1.1,-14-Math.random()*10),A.add(mt)}}let ut=Z.scn=G&&G.scn||"fire";if(Z.flameK=1,Z.spray=!0,Z.pmode=null,Z.cats=null,ut==="fire"){let V=bt(P.build);V.g.position.z=-1,A.add(V.g),Z.F=V.F.map(j=>new L(j[0],j[1],j[2]-1)),Z.P=V.P.map(j=>new L(j[0],j[1],j[2]-1))}else{let V=bt(P.build);V.g.position.set(0,0,-14),V.g.scale.setScalar(.85),A.add(V.g);let j=we(ut,U);A.add(j.g),Z.F=j.F.map(mt=>new L(...mt)),Z.P=j.P.map(mt=>new L(...mt)),Z.pmode=j.mode,ut==="crash"?Z.flameK=.42:(Z.flameK=0,Z.spray=!1);let gt=new Tn(ut==="cat"?16773328:16777215,ut==="cat"?30:12,30,1.2);gt.position.set(0,8,8),A.add(gt)}Z.flames=Z.F.map((V,j)=>{let gt=new ct(new Ne(1,1),Kt(j*1.7+U));gt.geometry.translate(0,.5,0),gt.position.copy(V);let mt=(U===5?2.4:3.2)*(.8+j*37%10/25)*(Z.flameK||1);gt.scale.set(mt*.8,mt*1.35,1),gt.userData.sc=mt,A.add(gt);let xt=new cn(f(16738842,.6));return xt.position.copy(V).add(new L(0,mt*.4,.2)),xt.scale.setScalar(mt*2.6),A.add(xt),gt.userData.gl=xt,gt}),Z.smoke=[];for(let V=0;V<26;V++){let j=new cn(new ii({map:d,color:2762280,transparent:!0,depthWrite:!1,opacity:0}));j.userData={life:99},A.add(j),Z.smoke.push(j)}Z.steam=[];for(let V=0;V<16;V++){let j=new cn(new ii({map:d,color:15265524,transparent:!0,depthWrite:!1,opacity:0}));j.userData={life:99},A.add(j),Z.steam.push(j)}let g=90,I=new ke;I.setAttribute("position",new Ke(new Float32Array(g*3),3)),Z.emb=new ts(I,new Ni({map:u,color:16752704,size:.28,transparent:!0,blending:fn,depthWrite:!1,toneMapped:!1})),Z.emb.frustumCulled=!1,Z.embD=Array.from({length:g},()=>({life:9,v:new L})),A.add(Z.emb);let N=420,q=new ke;q.setAttribute("position",new Ke(new Float32Array(N*3),3)),Z.wat=new ts(q,new Ni({map:u,color:12116223,size:.32,transparent:!0,opacity:.85,blending:fn,depthWrite:!1,toneMapped:!1})),Z.wat.frustumCulled=!1,Z.watD=Array.from({length:N},()=>({life:9,v:new L,p:new L})),Z.wi=0,A.add(Z.wat),Z.ff=[0,1,2,3].map(V=>{let j=Mt({ff:1,coat:3813926,pants:3813926,helmet:V%2?16761370:14165532});return j.scale.setScalar(1.15),j.visible=!1,A.add(j),j});let k=[4892927,16743088,8050266,16756736,11766527,5953238];if(Z.ppl=Z.P.concat(Z.P).map((V,j)=>{let gt=Mt({coat:k[j%6],pants:2767450,hair:[2759184,6961690,1052688][j%3]});return gt.scale.setScalar(1.1),gt.position.copy(V),gt.position.x+=j>=Z.P.length?.7:0,gt.visible=!1,A.add(gt),gt}),Z.scn==="cat"){Z.ppl.forEach(j=>A.remove(j));let V=[[15764010,12607514],[10133672,6975608],[2763310,0],[15917768,14203024],[15764010,12607514],[10133672,0]];Z.ppl=Z.P.slice(0,6).map((j,gt)=>{let mt=zt(V[gt][0],V[gt][1]||0);return mt.scale.setScalar(gt===0?2:1.6),mt.position.copy(j),mt.rotation.y=gt%2?-.3:.3,mt.visible=!1,A.add(mt),mt}),Z.cats=V.map((j,gt)=>{let mt=zt(j[0],j[1]||0);return mt.scale.setScalar(1.3),mt.position.set(-6.5+gt*1.2,.25,5.6),mt.visible=!1,A.add(mt),mt}),Z.dog=Yt(),Z.dog.position.set(5.6,.25,5.2),Z.dog.rotation.y=-.6,A.add(Z.dog),Z.kid=Mt({coat:4892927,pants:2767450,hair:2759184}),Z.kid.scale.setScalar(.8),Z.kid.position.set(2.4,.03,2.4),Z.kid.rotation.y=-.3,A.add(Z.kid)}else Z.pmode&&Z.ppl.forEach((V,j)=>{let gt=Z.P[j%Z.P.length],mt=Z.pmode[j%Z.pmode.length];V.userData.mode=mt,V.position.copy(gt),j>=Z.P.length&&(V.position.x+=.9,V.position.z+=.5),mt==="lie"?(V.rotation.set(-Math.PI/2,0,j%2?.4:-.3),V.position.y+=.2):(V.position.y+=-.35+(gt.y>0?0:.25),V.rotation.y=j%2?.5:-.4)});Z.crowd=Array.from({length:6},(V,j)=>{let gt=Mt({coat:k[j],pants:2767450,hair:[2759184,6961690,1052688][j%3]});return gt.position.set(-7+j*2.8,.25,4.6),gt.userData.y0=.25,gt.rotation.y=Math.PI*0,gt.visible=!1,A.add(gt),gt}),Z.veh=new Map,Z.cam=new qe(42,1,.5,200),Z.t=0,Z.camCfg={4:{p:[0,3,18],l:[0,3.8,0]},5:{p:[0,3,24],l:[0,11,0]},3:{p:[0,3.4,21],l:[0,4.6,0]},2:{p:[0,3,17],l:[0,4.4,0]},1:{p:[0,3.5,19.5],l:[0,6.4,0]}}[U],Z.scn==="crash"||Z.scn==="hurt"?Z.camCfg={p:[0,4.2,15.5],l:[0,1.9,0]}:Z.scn==="cat"&&(Z.camCfg={p:[0,3.4,18.5],l:[0,6.2,0]})}let T=new L;function et(){let U=G.S;(Z.G!==G||Z.scn!==(G.scn||"fire"))&&nt(G.ch);let P=Z.scene,A=G.t,X=Math.min(.05,DT||.016);Z.t+=X;let B=s(),$=G.state==="win"?0:Ws(G.fire/G.fireMax+(G.flare||0)*.15,0,1.3),it=Z.camCfg,st=Z.cam;st.aspect=U.w/U.h;let lt=G.state==="win"?Math.min(1,G.winT/3):0;st.position.set(it.p[0]+Math.sin(A*.23)*.8,it.p[1]+Math.sin(A*.31)*.25,it.p[2]-lt*3+Math.sin(A*.17)*.4),st.lookAt(it.l[0]+Math.sin(A*.19)*.3,it.l[1]+lt*.8,it.l[2]),CAM.sh>0&&(st.position.x+=(Math.random()-.5)*CAM.sh*.6),st.updateProjectionMatrix(),st.updateMatrixWorld(),Z.key.castShadow=B,G.ch===5&&(Math.random()<.004&&(Z.flash=1),Z.flash=Math.max(0,(Z.flash||0)-X*3),Z.key.intensity=Ot[5].keyI+Z.flash*6);let rt=Z.flameK?Math.ceil(Z.flames.length*Math.min(1,$)):0,ut=[];Z.flames.forEach((Y,at)=>{let Ct=at<rt,Ft=Y.userData.a=ih(Y.userData.a||0,Ct?1:0,X*2.5);if(Y.visible=Ft>.02,Y.userData.gl.visible=Y.visible,!Y.visible)return;Y.material.uniforms.t.value=Z.t+at,Y.material.uniforms.amp.value=Ft*(.9+.1*Math.sin(Z.t*13+at)),Y.quaternion.copy(st.quaternion);let le=Y.userData.sc*(.85+.15*Ft)*(1+.06*Math.sin(Z.t*7+at*2));Y.scale.set(le*.8,le*1.35,1),Y.userData.gl.material.opacity=.45*Ft*(.85+.15*Math.sin(Z.t*11+at)),Ct&&ut.push(Y.position)}),Z.fireL.intensity=$*(B?110:80)*(.85+.15*Math.sin(Z.t*9)+.06*Math.sin(Z.t*23)),ut.length&&(T.set(0,0,0),ut.forEach(Y=>T.add(Y)),T.divideScalar(ut.length),Z.fireL.position.copy(T).add(new L(0,1,4))),G.flames=ut.map(Y=>(T.copy(Y).add(new L(0,.8,0)).project(st),[U.x+(T.x+1)/2*U.w,U.y+(1-T.y)/2*U.h])),Z.smoke.forEach((Y,at)=>{let Ct=Y.userData;if(Ct.life+=X,Ct.life>Ct.max){let le=ut.length?ut:Z.scn==="hurt"?Z.F:[];if(le.length&&Math.random()<.5*$+.05){let Ge=le[at%le.length];Ct.life=0,Ct.max=3+Math.random()*2.5,Y.position.copy(Ge).add(new L(Math.random()-.5,2,-.3)),Ct.vx=(Math.random()-.2)*.8,Ct.s0=2+Math.random()*2}else{Y.material.opacity=0;return}}let Ft=Ct.life/Ct.max;Y.position.y+=X*(2.2-Ft),Y.position.x+=Ct.vx*X,Y.scale.setScalar(Ct.s0*(1+Ft*2.6)),Y.material.opacity=Math.sin(Ft*Math.PI)*.55*Math.min(1,$+.2),Y.material.rotation+=X*.2});let g=Math.max(G.steam,G.state==="win"?1-Math.min(1,G.winT/3):0);Z.steam.forEach((Y,at)=>{let Ct=Y.userData;if(Ct.life+=X,Ct.life>Ct.max)if(g>.1&&Z.F.length&&Math.random()<g*.4){let le=Z.F[at*5%Z.F.length];Ct.life=0,Ct.max=2+Math.random(),Y.position.copy(le).add(new L(0,.5,.5)),Ct.s0=1.5+Math.random()}else{Y.material.opacity=0;return}let Ft=Ct.life/Ct.max;Y.position.y+=X*2.6,Y.scale.setScalar(Ct.s0*(1+Ft*3)),Y.material.opacity=Math.sin(Ft*Math.PI)*.5});{let Y=Z.emb.geometry.attributes.position;Z.embD.forEach((at,Ct)=>{if(at.life+=X,at.life>at.max)if(ut.length&&Math.random()<$*.25){let Ft=ut[Math.floor(Math.random()*ut.length)];at.life=0,at.max=1.5+Math.random()*2,Y.setXYZ(Ct,Ft.x+(Math.random()-.5),Ft.y+1,Ft.z+.3),at.v.set((Math.random()-.5)*1.5,2+Math.random()*2.5,(Math.random()-.5)*.5)}else{Y.setXYZ(Ct,0,-99,0);return}Y.setXYZ(Ct,Y.getX(Ct)+at.v.x*X+Math.sin(Z.t*3+Ct)*X*.6,Y.getY(Ct)+at.v.y*X,Y.getZ(Ct)+at.v.z*X)}),Y.needsUpdate=!0}let I=(()=>{let Y=st.position.z-9;return 2*Math.tan(st.fov*Math.PI/360)*Y*st.aspect})(),N=new Set,q=[];G.sv.forEach((Y,at)=>{let Ct=Y.id+"_"+Y.type;N.add(Ct);let Ft=Z.veh.get(Ct);Ft||(Ft=R(S(Y.type,St(Y.type)),null),Ft.scale.setScalar(4.4),P.add(Ft),Z.veh.set(Ct,Ft));let le=(Y.x/U.w-.5)*I*.92,Ge=8.6+at%2*1.6;Ft.position.set(le,0,Ge);let me=Y.state==="drive";Ft.rotation.y=Y.dir>0?0:Math.PI,Ft.userData.yaw.rotation.z=me?-.02:0,Ft.position.y=me?Math.abs(Math.sin(A*18+at))*.04:0,z(Ft,!0,A,at);let qt=Ft.userData.lad;if(qt){let Ie=Ws((Y.work||0)/1.6,0,1);qt.rotation.z=-.03+(Y.state==="work"?Ie*.75:0)}Y.state==="work"&&WATER[Y.type]&&G.state!=="win"&&Z.spray&&q.push({x:le,z:Ge,i:at})});for(let[Y,at]of Z.veh)N.has(Y)||(P.remove(at),Z.veh.delete(Y));let k=Z.watD,V=Z.wat.geometry.attributes.position;Z.ff.forEach((Y,at)=>{let Ct=q[at];if(Y.visible=!!Ct||G.state==="win"&&at<q.length+2&&G.sv.length>at,!Y.visible)return;let Ft=ut.length?ut[at%ut.length]:Z.F[at%Z.F.length],le=Ct?Ct.x+(at%2?2.4:-2.4):-3+at*3;if(Y.position.set(le,.25,5.2-at*.3),Ct&&Ft&&$>0){Y.lookAt(Ft.x,Y.position.y,Ft.z),Jt(Y,"spray",A,at),Y.userData.noz.getWorldPosition(T);let me=Ft.clone().add(new L(Math.sin(A*2+at)*.6,.6,0)),qt=.9;for(let Ie=0;Ie<(B?6:3);Ie++){let Te=k[Z.wi=(Z.wi+1)%k.length];Te.life=0,Te.max=qt*(.9+Math.random()*.25),Te.p.copy(T),Te.v.set((me.x-T.x)/qt+(Math.random()-.5)*.6,(me.y-T.y)/qt+4.9*qt+(Math.random()-.5)*.6,(me.z-T.z)/qt+(Math.random()-.5)*.4)}}else Jt(Y,G.state==="win"?"cheer":"idle",A,at)}),k.forEach((Y,at)=>{if(Y.life>Y.max){V.setXYZ(at,0,-99,0);return}Y.life+=X,Y.v.y-=9.8*X,Y.p.addScaledVector(Y.v,X),V.setXYZ(at,Y.p.x,Y.p.y,Y.p.z)}),V.needsUpdate=!0;let j=Math.max(0,G.people-G.rescued);if(Z.ppl.forEach((Y,at)=>{if(Y.visible=at<Math.min(j,Z.ppl.length)&&G.state!=="win",!!Y.visible)if(Z.scn==="cat"){let Ct=Y.userData;Ct.hd.rotation.z=Math.sin(A*2+at)*.18,Ct.hd.rotation.x=-.25+Math.sin(A*1.3+at)*.08,Ct.tg.rotation.y=Math.sin(A*3+at)*.4,Y.scale.y=Y.scale.x*(1+Math.sin(A*4+at)*.03)}else Y.userData.mode?J(Y,Y.userData.mode,A,at):Jt(Y,"wave",A,at)}),Z.cats){let Y=G.state==="win"?G.people:G.rescued;Z.cats.forEach((at,Ct)=>{at.visible=Ct<Y,at.visible&&(at.userData.tg.rotation.y=Math.sin(A*4+Ct)*.5,at.position.y=.25+(G.state==="win"?Math.abs(Math.sin(A*5+Ct))*.25:0))}),Z.dog.userData.tail.rotation.z=Math.sin(A*14)*.5,Z.dog.position.y=.25+(G.state==="win"?Math.abs(Math.sin(A*6))*.2:0),Jt(Z.kid,G.state==="win"?"cheer":"wave",A,0),G.state!=="win"&&(Z.kid.userData.B.p.rotation.z=-2.9)}Z.crowd.forEach((Y,at)=>{Y.visible=at<(G.state==="win"?G.people:G.rescued),Y.visible&&Jt(Y,G.state==="win"?"cheer":"wave",A,at*1.3)});let gt=c(),mt=Math.round(U.w*gt),xt=Math.round(U.h*gt);o(mt,xt),i.shadowMap.autoUpdate=!0,i.render(P,st),i.shadowMap.autoUpdate=!1,a(cx,mt,xt,U.x,U.y,U.w,U.h)}let O={scene:new bn,cam:new qe(26,1,.1,50),objs:new Map};{let U=O.scene;U.environment=n,U.environmentIntensity=1,U.add(new Fn(15265535,3158072,.9));let P=new gn(16774376,3);P.position.set(-2,4,3),P.castShadow=!0,P.shadow.mapSize.set(1024,1024),Object.assign(P.shadow.camera,{left:-1,right:1,top:1,bottom:-1,near:.5,far:12}),P.shadow.radius=5,U.add(P);let A=new gn(10469631,1.6);A.position.set(3,2,-3),U.add(A);let X=new ct(new De(.62,.66,.04,64),new ve({color:4869724,metalness:.85,roughness:.22}));X.position.y=-.02,X.receiveShadow=!0,U.add(X);let B=new ct(new Cn(.64,.008,8,96),new ze({color:16765562,toneMapped:!1}));B.rotation.x=Math.PI/2,B.position.y=.002,U.add(B),O.plat=X,O.ring=B}function Q(U,P,A,X,B,$,it,st){if(st=st||{},!Oe.ok||Oe.lost)return null;let lt=P+A+"|"+m(P),rt=O.objs.get(lt);rt||(rt=R(S(P,A),[1,1]),O.objs.set(lt,rt)),O.scene.children.forEach(mt=>{mt.userData&&mt.userData.f!==void 0&&mt!==rt&&(mt.visible=!1)}),rt.parent||O.scene.add(rt),rt.visible=!0,rt.rotation.y=-it-Math.PI/2,z(rt,!!st.siren,st.t||TT,0);let ut=st.plat!==!1&&$>90;O.plat.visible=O.ring.visible=ut,ut&&(O.plat.rotation.y=rt.rotation.y);let g=O.cam,I=2.45,N=.42;g.aspect=1.4,g.position.set(0,Math.sin(N)*I+.12,Math.cos(N)*I),g.lookAt(0,.16,0),g.updateProjectionMatrix();let q=Math.min(DPR,2)*(U.canvas&&U.canvas.width>U.canvas.clientWidth*1.2,1),k=$*1.75,V=k/1.4,j=Math.round(k*q),gt=Math.round(V*q);return o(j,gt),i.shadowMap.autoUpdate=!0,i.render(O.scene,g),i.shadowMap.autoUpdate=!1,U.save(),st.filter&&(U.filter=st.filter),a(U,j,gt,X-k/2,B-V*.66,k,V),U.restore(),!0}let Tt=window.renderBoard,At=window.renderScene,Qt=window.drawTT,ce=()=>Oe.ok&&!Oe.lost&&!Oe.off,fe=0,te=0,Ae=0;window.renderBoard=function(){if(!ce())return Tt();if(be.tOn&&be.titleDispose(),!je())try{F(),G.hint&&window.drawHint&&window.drawHint(),G.i===0&&!G.firstTap&&G.state==="play"&&drawHand(),drawImpacts(),Oe.frames++}catch(U){Kn("board3d error \u2192 2D",U&&U.stack),Oe.off=!0,Tt()}},window.renderScene=function(){if(!ce())return At();if(!je())try{et()}catch(U){Kn("scene3d error \u2192 2D",U&&U.stack),Oe.off=!0,At()}},Oe.tt=Q,[h,u,d,n].forEach(U=>{U&&U.userData&&(U.userData.keep=1)});let be=Xu({R:i,prep:o,blit:a,ENV:n,model:S,instance:R,siren:z,figure:Mt,pose:Jt,flameMat:Kt,glowMat:f,SOFT:u,SMOKE:d,hi:s,skyTex:Xt,buildBuilding:bt,CH:Ot,SM:tt,tierOf3:St});Oe.ui={ok:()=>ce()&&!be.off&&!/ui=2d/.test(location.search),fail(U){Kn("ui3 error \u2192 2D",U&&U.stack),be.off=!0},badge(U,P,A,X){try{return be.badge(U,P,A,X),!0}catch(B){return Oe.ui.fail(B),!1}},res(U){try{return be.res(U)}catch(P){return Oe.ui.fail(P),null}},rank(U){try{return be.rank(U)}catch(P){return Oe.ui.fail(P),null}},U:be.U,titleDispose:()=>be.titleDispose()};let _n=window.drawTitleScene;window.drawTitleScene=function(){if(MODE==="title"&&Oe.ui.ok())try{be.title(cx,W,H,DT);return}catch(U){Oe.ui.fail(U)}return be.tOn&&be.titleDispose(),_n()};let je=()=>{let U=document.getElementById("res");return U&&U.style.display==="block"};Oe.shot=function(U,P,A,X){et();let B=Z.cam,$=B.aspect,it=B.fov,st=new L;B.getWorldDirection(st),B.position.addScaledVector(st,-(A||0)),B.aspect=U/P,X&&(B.fov=X),B.updateProjectionMatrix(),B.updateMatrixWorld(),i.setSize(U,P,!1),i.setViewport(0,0,U,P),i.setScissorTest(!1),i.setClearColor(0,1),i.clear(!0,!0,!0),i.render(Z.scene,B);let lt=i.domElement.toDataURL("image/jpeg",.88);return B.aspect=$,B.fov=it,B.updateProjectionMatrix(),lt},window.drawTT=function(U,P,A,X,B,$,it,st){if(ce()&&"EKTA".includes(P))try{if(Q(U,P,A,X,B,$,it,st))return!0}catch(lt){Kn("tt3d error",lt&&lt.message)}return Qt(U,P,A,X,B,$,it,st)};let Re=window.update;window.update=function(U){if(Re(U),fe+=U,te++,fe>2){let P=te/fe;Oe.fps=P,fe=0,te=0,ce()&&MODE==="game"&&(P<45?(Ae++,Ae>=2&&(Oe.prCap||2)>1&&(Oe.prCap=Math.max(1,(Oe.prCap||2)-.5),Ae=0,Kn("adaptive pr",Oe.prCap))):Ae=0)}},Oe.flags={setup:()=>{}},Kn("3D renderer on",i.capabilities.isWebGL2?"webgl2":"webgl1")}function Kn(...i){try{console.log("[R3]",...i)}catch{}}try{Fx()}catch(i){Kn("init failed \u2192 2D",i&&i.stack),window.R3.ok=!1}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
