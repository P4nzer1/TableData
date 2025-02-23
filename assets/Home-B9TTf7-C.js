import{r as Se,g as Yn,j as T,R as Vn}from"./index-CDyupzP5.js";function Gn(e,t){return function(){return e.apply(t,arguments)}}const{toString:aa}=Object.prototype,{getPrototypeOf:Nt}=Object,je=(e=>t=>{const n=aa.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),D=e=>(e=e.toLowerCase(),t=>je(t)===e),De=e=>t=>typeof t===e,{isArray:ce}=Array,ge=De("undefined");function sa(e){return e!==null&&!ge(e)&&e.constructor!==null&&!ge(e.constructor)&&F(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Xn=D("ArrayBuffer");function oa(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Xn(e.buffer),t}const ia=De("string"),F=De("function"),Jn=De("number"),Me=e=>e!==null&&typeof e=="object",la=e=>e===!0||e===!1,Te=e=>{if(je(e)!=="object")return!1;const t=Nt(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ca=D("Date"),fa=D("File"),ua=D("Blob"),da=D("FileList"),ma=e=>Me(e)&&F(e.pipe),pa=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||F(e.append)&&((t=je(e))==="formdata"||t==="object"&&F(e.toString)&&e.toString()==="[object FormData]"))},ha=D("URLSearchParams"),[ga,ya,ba,wa]=["ReadableStream","Request","Response","Headers"].map(D),xa=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function we(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),ce(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let i;for(r=0;r<o;r++)i=s[r],t.call(null,e[i],i,e)}}function Kn(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,a;for(;r-- >0;)if(a=n[r],t===a.toLowerCase())return a;return null}const K=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Qn=e=>!ge(e)&&e!==K;function it(){const{caseless:e}=Qn(this)&&this||{},t={},n=(r,a)=>{const s=e&&Kn(t,a)||a;Te(t[s])&&Te(r)?t[s]=it(t[s],r):Te(r)?t[s]=it({},r):ce(r)?t[s]=r.slice():t[s]=r};for(let r=0,a=arguments.length;r<a;r++)arguments[r]&&we(arguments[r],n);return t}const va=(e,t,n,{allOwnKeys:r}={})=>(we(t,(a,s)=>{n&&F(a)?e[s]=Gn(a,n):e[s]=a},{allOwnKeys:r}),e),Ea=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Sa=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Aa=(e,t,n,r)=>{let a,s,o;const i={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),s=a.length;s-- >0;)o=a[s],(!r||r(o,e,t))&&!i[o]&&(t[o]=e[o],i[o]=!0);e=n!==!1&&Nt(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Oa=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ta=e=>{if(!e)return null;if(ce(e))return e;let t=e.length;if(!Jn(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},_a=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Nt(Uint8Array)),Pa=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=r.next())&&!a.done;){const s=a.value;t.call(e,s[0],s[1])}},Ra=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ka=D("HTMLFormElement"),Ca=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,a){return r.toUpperCase()+a}),Xt=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Na=D("RegExp"),Zn=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};we(n,(a,s)=>{let o;(o=t(a,s,e))!==!1&&(r[s]=o||a)}),Object.defineProperties(e,r)},Fa=e=>{Zn(e,(t,n)=>{if(F(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(F(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ia=(e,t)=>{const n={},r=a=>{a.forEach(s=>{n[s]=!0})};return ce(e)?r(e):r(String(e).split(t)),n},La=()=>{},ja=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Ve="abcdefghijklmnopqrstuvwxyz",Jt="0123456789",er={DIGIT:Jt,ALPHA:Ve,ALPHA_DIGIT:Ve+Ve.toUpperCase()+Jt},Da=(e=16,t=er.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ma(e){return!!(e&&F(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ua=e=>{const t=new Array(10),n=(r,a)=>{if(Me(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[a]=r;const s=ce(r)?[]:{};return we(r,(o,i)=>{const u=n(o,a+1);!ge(u)&&(s[i]=u)}),t[a]=void 0,s}}return r};return n(e,0)},za=D("AsyncFunction"),Ba=e=>e&&(Me(e)||F(e))&&F(e.then)&&F(e.catch),tr=((e,t)=>e?setImmediate:t?((n,r)=>(K.addEventListener("message",({source:a,data:s})=>{a===K&&s===n&&r.length&&r.shift()()},!1),a=>{r.push(a),K.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",F(K.postMessage)),Ha=typeof queueMicrotask<"u"?queueMicrotask.bind(K):typeof process<"u"&&process.nextTick||tr,c={isArray:ce,isArrayBuffer:Xn,isBuffer:sa,isFormData:pa,isArrayBufferView:oa,isString:ia,isNumber:Jn,isBoolean:la,isObject:Me,isPlainObject:Te,isReadableStream:ga,isRequest:ya,isResponse:ba,isHeaders:wa,isUndefined:ge,isDate:ca,isFile:fa,isBlob:ua,isRegExp:Na,isFunction:F,isStream:ma,isURLSearchParams:ha,isTypedArray:_a,isFileList:da,forEach:we,merge:it,extend:va,trim:xa,stripBOM:Ea,inherits:Sa,toFlatObject:Aa,kindOf:je,kindOfTest:D,endsWith:Oa,toArray:Ta,forEachEntry:Pa,matchAll:Ra,isHTMLForm:ka,hasOwnProperty:Xt,hasOwnProp:Xt,reduceDescriptors:Zn,freezeMethods:Fa,toObjectSet:Ia,toCamelCase:Ca,noop:La,toFiniteNumber:ja,findKey:Kn,global:K,isContextDefined:Qn,ALPHABET:er,generateString:Da,isSpecCompliantForm:Ma,toJSONObject:Ua,isAsyncFn:za,isThenable:Ba,setImmediate:tr,asap:Ha};function w(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a,this.status=a.status?a.status:null)}c.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.status}}});const nr=w.prototype,rr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rr[e]={value:e}});Object.defineProperties(w,rr);Object.defineProperty(nr,"isAxiosError",{value:!0});w.from=(e,t,n,r,a,s)=>{const o=Object.create(nr);return c.toFlatObject(e,o,function(u){return u!==Error.prototype},i=>i!=="isAxiosError"),w.call(o,e.message,t,n,r,a),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const qa=null;function lt(e){return c.isPlainObject(e)||c.isArray(e)}function ar(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function Kt(e,t,n){return e?e.concat(t).map(function(a,s){return a=ar(a),!n&&s?"["+a+"]":a}).join(n?".":""):t}function Wa(e){return c.isArray(e)&&!e.some(lt)}const $a=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function Ue(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,p){return!c.isUndefined(p[b])});const r=n.metaTokens,a=n.visitor||f,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(a))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(c.isDate(h))return h.toISOString();if(!u&&c.isBlob(h))throw new w("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(h)||c.isTypedArray(h)?u&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function f(h,b,p){let x=h;if(h&&!p&&typeof h=="object"){if(c.endsWith(b,"{}"))b=r?b:b.slice(0,-2),h=JSON.stringify(h);else if(c.isArray(h)&&Wa(h)||(c.isFileList(h)||c.endsWith(b,"[]"))&&(x=c.toArray(h)))return b=ar(b),x.forEach(function(A,R){!(c.isUndefined(A)||A===null)&&t.append(o===!0?Kt([b],R,s):o===null?b:b+"[]",l(A))}),!1}return lt(h)?!0:(t.append(Kt(p,b,s),l(h)),!1)}const m=[],g=Object.assign($a,{defaultVisitor:f,convertValue:l,isVisitable:lt});function v(h,b){if(!c.isUndefined(h)){if(m.indexOf(h)!==-1)throw Error("Circular reference detected in "+b.join("."));m.push(h),c.forEach(h,function(x,E){(!(c.isUndefined(x)||x===null)&&a.call(t,x,c.isString(E)?E.trim():E,b,g))===!0&&v(x,b?b.concat(E):[E])}),m.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Qt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ft(e,t){this._pairs=[],e&&Ue(e,this,t)}const sr=Ft.prototype;sr.append=function(t,n){this._pairs.push([t,n])};sr.toString=function(t){const n=t?function(r){return t.call(this,r,Qt)}:Qt;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function Ya(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function or(e,t,n){if(!t)return e;const r=n&&n.encode||Ya;c.isFunction(n)&&(n={serialize:n});const a=n&&n.serialize;let s;if(a?s=a(t,n):s=c.isURLSearchParams(t)?t.toString():new Ft(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Zt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ir={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Va=typeof URLSearchParams<"u"?URLSearchParams:Ft,Ga=typeof FormData<"u"?FormData:null,Xa=typeof Blob<"u"?Blob:null,Ja={isBrowser:!0,classes:{URLSearchParams:Va,FormData:Ga,Blob:Xa},protocols:["http","https","file","blob","url","data"]},It=typeof window<"u"&&typeof document<"u",ct=typeof navigator=="object"&&navigator||void 0,Ka=It&&(!ct||["ReactNative","NativeScript","NS"].indexOf(ct.product)<0),Qa=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Za=It&&window.location.href||"http://localhost",es=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:It,hasStandardBrowserEnv:Ka,hasStandardBrowserWebWorkerEnv:Qa,navigator:ct,origin:Za},Symbol.toStringTag,{value:"Module"})),k={...es,...Ja};function ts(e,t){return Ue(e,new k.classes.URLSearchParams,Object.assign({visitor:function(n,r,a,s){return k.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function ns(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rs(e){const t={},n=Object.keys(e);let r;const a=n.length;let s;for(r=0;r<a;r++)s=n[r],t[s]=e[s];return t}function lr(e){function t(n,r,a,s){let o=n[s++];if(o==="__proto__")return!0;const i=Number.isFinite(+o),u=s>=n.length;return o=!o&&c.isArray(a)?a.length:o,u?(c.hasOwnProp(a,o)?a[o]=[a[o],r]:a[o]=r,!i):((!a[o]||!c.isObject(a[o]))&&(a[o]=[]),t(n,r,a[o],s)&&c.isArray(a[o])&&(a[o]=rs(a[o])),!i)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,a)=>{t(ns(r),a,n,0)}),n}return null}function as(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const xe={transitional:ir,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",a=r.indexOf("application/json")>-1,s=c.isObject(t);if(s&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return a?JSON.stringify(lr(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t)||c.isReadableStream(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let i;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ts(t,this.formSerializer).toString();if((i=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Ue(i?{"files[]":t}:t,u&&new u,this.formSerializer)}}return s||a?(n.setContentType("application/json",!1),as(t)):t}],transformResponse:[function(t){const n=this.transitional||xe.transitional,r=n&&n.forcedJSONParsing,a=this.responseType==="json";if(c.isResponse(t)||c.isReadableStream(t))return t;if(t&&c.isString(t)&&(r&&!this.responseType||a)){const o=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t)}catch(i){if(o)throw i.name==="SyntaxError"?w.from(i,w.ERR_BAD_RESPONSE,this,null,this.response):i}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:k.classes.FormData,Blob:k.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch"],e=>{xe.headers[e]={}});const ss=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),os=e=>{const t={};let n,r,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),n=o.substring(0,a).trim().toLowerCase(),r=o.substring(a+1).trim(),!(!n||t[n]&&ss[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},en=Symbol("internals");function de(e){return e&&String(e).trim().toLowerCase()}function _e(e){return e===!1||e==null?e:c.isArray(e)?e.map(_e):String(e)}function is(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ls=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ge(e,t,n,r,a){if(c.isFunction(r))return r.call(this,t,n);if(a&&(t=n),!!c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function cs(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fs(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(a,s,o){return this[r].call(this,t,a,s,o)},configurable:!0})})}let N=class{constructor(t){t&&this.set(t)}set(t,n,r){const a=this;function s(i,u,l){const f=de(u);if(!f)throw new Error("header name must be a non-empty string");const m=c.findKey(a,f);(!m||a[m]===void 0||l===!0||l===void 0&&a[m]!==!1)&&(a[m||u]=_e(i))}const o=(i,u)=>c.forEach(i,(l,f)=>s(l,f,u));if(c.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(c.isString(t)&&(t=t.trim())&&!ls(t))o(os(t),n);else if(c.isHeaders(t))for(const[i,u]of t.entries())s(u,i,r);else t!=null&&s(n,t,r);return this}get(t,n){if(t=de(t),t){const r=c.findKey(this,t);if(r){const a=this[r];if(!n)return a;if(n===!0)return is(a);if(c.isFunction(n))return n.call(this,a,r);if(c.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=de(t),t){const r=c.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ge(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let a=!1;function s(o){if(o=de(o),o){const i=c.findKey(r,o);i&&(!n||Ge(r,r[i],i,n))&&(delete r[i],a=!0)}}return c.isArray(t)?t.forEach(s):s(t),a}clear(t){const n=Object.keys(this);let r=n.length,a=!1;for(;r--;){const s=n[r];(!t||Ge(this,this[s],s,t,!0))&&(delete this[s],a=!0)}return a}normalize(t){const n=this,r={};return c.forEach(this,(a,s)=>{const o=c.findKey(r,s);if(o){n[o]=_e(a),delete n[s];return}const i=t?cs(s):String(s).trim();i!==s&&delete n[s],n[i]=_e(a),r[i]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return c.forEach(this,(r,a)=>{r!=null&&r!==!1&&(n[a]=t&&c.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(a=>r.set(a)),r}static accessor(t){const r=(this[en]=this[en]={accessors:{}}).accessors,a=this.prototype;function s(o){const i=de(o);r[i]||(fs(a,o),r[i]=!0)}return c.isArray(t)?t.forEach(s):s(t),this}};N.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(N.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});c.freezeMethods(N);function Xe(e,t){const n=this||xe,r=t||n,a=N.from(r.headers);let s=r.data;return c.forEach(e,function(i){s=i.call(n,s,a.normalize(),t?t.status:void 0)}),a.normalize(),s}function cr(e){return!!(e&&e.__CANCEL__)}function fe(e,t,n){w.call(this,e??"canceled",w.ERR_CANCELED,t,n),this.name="CanceledError"}c.inherits(fe,w,{__CANCEL__:!0});function fr(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new w("Request failed with status code "+n.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function us(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ds(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a=0,s=0,o;return t=t!==void 0?t:1e3,function(u){const l=Date.now(),f=r[s];o||(o=l),n[a]=u,r[a]=l;let m=s,g=0;for(;m!==a;)g+=n[m++],m=m%e;if(a=(a+1)%e,a===s&&(s=(s+1)%e),l-o<t)return;const v=f&&l-f;return v?Math.round(g*1e3/v):void 0}}function ms(e,t){let n=0,r=1e3/t,a,s;const o=(l,f=Date.now())=>{n=f,a=null,s&&(clearTimeout(s),s=null),e.apply(null,l)};return[(...l)=>{const f=Date.now(),m=f-n;m>=r?o(l,f):(a=l,s||(s=setTimeout(()=>{s=null,o(a)},r-m)))},()=>a&&o(a)]}const Ce=(e,t,n=3)=>{let r=0;const a=ds(50,250);return ms(s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-r,l=a(u),f=o<=i;r=o;const m={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:l||void 0,estimated:l&&i&&f?(i-o)/l:void 0,event:s,lengthComputable:i!=null,[t?"download":"upload"]:!0};e(m)},n)},tn=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},nn=e=>(...t)=>c.asap(()=>e(...t)),ps=k.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,k.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(k.origin),k.navigator&&/(msie|trident)/i.test(k.navigator.userAgent)):()=>!0,hs=k.hasStandardBrowserEnv?{write(e,t,n,r,a,s){const o=[e+"="+encodeURIComponent(t)];c.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),c.isString(r)&&o.push("path="+r),c.isString(a)&&o.push("domain="+a),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function gs(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ys(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ur(e,t){return e&&!gs(t)?ys(e,t):t}const rn=e=>e instanceof N?{...e}:e;function ee(e,t){t=t||{};const n={};function r(l,f,m,g){return c.isPlainObject(l)&&c.isPlainObject(f)?c.merge.call({caseless:g},l,f):c.isPlainObject(f)?c.merge({},f):c.isArray(f)?f.slice():f}function a(l,f,m,g){if(c.isUndefined(f)){if(!c.isUndefined(l))return r(void 0,l,m,g)}else return r(l,f,m,g)}function s(l,f){if(!c.isUndefined(f))return r(void 0,f)}function o(l,f){if(c.isUndefined(f)){if(!c.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function i(l,f,m){if(m in t)return r(l,f);if(m in e)return r(void 0,l)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:i,headers:(l,f,m)=>a(rn(l),rn(f),m,!0)};return c.forEach(Object.keys(Object.assign({},e,t)),function(f){const m=u[f]||a,g=m(e[f],t[f],f);c.isUndefined(g)&&m!==i||(n[f]=g)}),n}const dr=e=>{const t=ee({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:a,xsrfCookieName:s,headers:o,auth:i}=t;t.headers=o=N.from(o),t.url=or(ur(t.baseURL,t.url),e.params,e.paramsSerializer),i&&o.set("Authorization","Basic "+btoa((i.username||"")+":"+(i.password?unescape(encodeURIComponent(i.password)):"")));let u;if(c.isFormData(n)){if(k.hasStandardBrowserEnv||k.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((u=o.getContentType())!==!1){const[l,...f]=u?u.split(";").map(m=>m.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...f].join("; "))}}if(k.hasStandardBrowserEnv&&(r&&c.isFunction(r)&&(r=r(t)),r||r!==!1&&ps(t.url))){const l=a&&s&&hs.read(s);l&&o.set(a,l)}return t},bs=typeof XMLHttpRequest<"u",ws=bs&&function(e){return new Promise(function(n,r){const a=dr(e);let s=a.data;const o=N.from(a.headers).normalize();let{responseType:i,onUploadProgress:u,onDownloadProgress:l}=a,f,m,g,v,h;function b(){v&&v(),h&&h(),a.cancelToken&&a.cancelToken.unsubscribe(f),a.signal&&a.signal.removeEventListener("abort",f)}let p=new XMLHttpRequest;p.open(a.method.toUpperCase(),a.url,!0),p.timeout=a.timeout;function x(){if(!p)return;const A=N.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),O={data:!i||i==="text"||i==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:A,config:e,request:p};fr(function(j){n(j),b()},function(j){r(j),b()},O),p=null}"onloadend"in p?p.onloadend=x:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(x)},p.onabort=function(){p&&(r(new w("Request aborted",w.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new w("Network Error",w.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let R=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const O=a.transitional||ir;a.timeoutErrorMessage&&(R=a.timeoutErrorMessage),r(new w(R,O.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,p)),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&c.forEach(o.toJSON(),function(R,O){p.setRequestHeader(O,R)}),c.isUndefined(a.withCredentials)||(p.withCredentials=!!a.withCredentials),i&&i!=="json"&&(p.responseType=a.responseType),l&&([g,h]=Ce(l,!0),p.addEventListener("progress",g)),u&&p.upload&&([m,v]=Ce(u),p.upload.addEventListener("progress",m),p.upload.addEventListener("loadend",v)),(a.cancelToken||a.signal)&&(f=A=>{p&&(r(!A||A.type?new fe(null,e,p):A),p.abort(),p=null)},a.cancelToken&&a.cancelToken.subscribe(f),a.signal&&(a.signal.aborted?f():a.signal.addEventListener("abort",f)));const E=us(a.url);if(E&&k.protocols.indexOf(E)===-1){r(new w("Unsupported protocol "+E+":",w.ERR_BAD_REQUEST,e));return}p.send(s||null)})},xs=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,a;const s=function(l){if(!a){a=!0,i();const f=l instanceof Error?l:this.reason;r.abort(f instanceof w?f:new fe(f instanceof Error?f.message:f))}};let o=t&&setTimeout(()=>{o=null,s(new w(`timeout ${t} of ms exceeded`,w.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),e=null)};e.forEach(l=>l.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=()=>c.asap(i),u}},vs=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,a;for(;r<n;)a=r+t,yield e.slice(r,a),r=a},Es=async function*(e,t){for await(const n of Ss(e))yield*vs(n,t)},Ss=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},an=(e,t,n,r)=>{const a=Es(e,t);let s=0,o,i=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:l,value:f}=await a.next();if(l){i(),u.close();return}let m=f.byteLength;if(n){let g=s+=m;n(g)}u.enqueue(new Uint8Array(f))}catch(l){throw i(l),l}},cancel(u){return i(u),a.return()}},{highWaterMark:2})},ze=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",mr=ze&&typeof ReadableStream=="function",As=ze&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),pr=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Os=mr&&pr(()=>{let e=!1;const t=new Request(k.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),sn=64*1024,ft=mr&&pr(()=>c.isReadableStream(new Response("").body)),Ne={stream:ft&&(e=>e.body)};ze&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ne[t]&&(Ne[t]=c.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new w(`Response type '${t}' is not supported`,w.ERR_NOT_SUPPORT,r)})})})(new Response);const Ts=async e=>{if(e==null)return 0;if(c.isBlob(e))return e.size;if(c.isSpecCompliantForm(e))return(await new Request(k.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(c.isArrayBufferView(e)||c.isArrayBuffer(e))return e.byteLength;if(c.isURLSearchParams(e)&&(e=e+""),c.isString(e))return(await As(e)).byteLength},_s=async(e,t)=>{const n=c.toFiniteNumber(e.getContentLength());return n??Ts(t)},Ps=ze&&(async e=>{let{url:t,method:n,data:r,signal:a,cancelToken:s,timeout:o,onDownloadProgress:i,onUploadProgress:u,responseType:l,headers:f,withCredentials:m="same-origin",fetchOptions:g}=dr(e);l=l?(l+"").toLowerCase():"text";let v=xs([a,s&&s.toAbortSignal()],o),h;const b=v&&v.unsubscribe&&(()=>{v.unsubscribe()});let p;try{if(u&&Os&&n!=="get"&&n!=="head"&&(p=await _s(f,r))!==0){let O=new Request(t,{method:"POST",body:r,duplex:"half"}),M;if(c.isFormData(r)&&(M=O.headers.get("content-type"))&&f.setContentType(M),O.body){const[j,re]=tn(p,Ce(nn(u)));r=an(O.body,sn,j,re)}}c.isString(m)||(m=m?"include":"omit");const x="credentials"in Request.prototype;h=new Request(t,{...g,signal:v,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:x?m:void 0});let E=await fetch(h);const A=ft&&(l==="stream"||l==="response");if(ft&&(i||A&&b)){const O={};["status","statusText","headers"].forEach(Gt=>{O[Gt]=E[Gt]});const M=c.toFiniteNumber(E.headers.get("content-length")),[j,re]=i&&tn(M,Ce(nn(i),!0))||[];E=new Response(an(E.body,sn,j,()=>{re&&re(),b&&b()}),O)}l=l||"text";let R=await Ne[c.findKey(Ne,l)||"text"](E,e);return!A&&b&&b(),await new Promise((O,M)=>{fr(O,M,{data:R,headers:N.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:h})})}catch(x){throw b&&b(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new w("Network Error",w.ERR_NETWORK,e,h),{cause:x.cause||x}):w.from(x,x&&x.code,e,h)}}),ut={http:qa,xhr:ws,fetch:Ps};c.forEach(ut,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const on=e=>`- ${e}`,Rs=e=>c.isFunction(e)||e===null||e===!1,hr={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let n,r;const a={};for(let s=0;s<t;s++){n=e[s];let o;if(r=n,!Rs(n)&&(r=ut[(o=String(n)).toLowerCase()],r===void 0))throw new w(`Unknown adapter '${o}'`);if(r)break;a[o||"#"+s]=r}if(!r){const s=Object.entries(a).map(([i,u])=>`adapter ${i} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=t?s.length>1?`since :
`+s.map(on).join(`
`):" "+on(s[0]):"as no adapter specified";throw new w("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ut};function Je(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new fe(null,e)}function ln(e){return Je(e),e.headers=N.from(e.headers),e.data=Xe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),hr.getAdapter(e.adapter||xe.adapter)(e).then(function(r){return Je(e),r.data=Xe.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return cr(r)||(Je(e),r&&r.response&&(r.response.data=Xe.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const gr="1.7.9",Be={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Be[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const cn={};Be.transitional=function(t,n,r){function a(s,o){return"[Axios v"+gr+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,i)=>{if(t===!1)throw new w(a(o," has been removed"+(n?" in "+n:"")),w.ERR_DEPRECATED);return n&&!cn[o]&&(cn[o]=!0,console.warn(a(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,i):!0}};Be.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function ks(e,t,n){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const s=r[a],o=t[s];if(o){const i=e[s],u=i===void 0||o(i,s,e);if(u!==!0)throw new w("option "+s+" must be "+u,w.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new w("Unknown option "+s,w.ERR_BAD_OPTION)}}const Pe={assertOptions:ks,validators:Be},U=Pe.validators;let Z=class{constructor(t){this.defaults=t,this.interceptors={request:new Zt,response:new Zt}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const s=a.stack?a.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ee(this.defaults,n);const{transitional:r,paramsSerializer:a,headers:s}=n;r!==void 0&&Pe.assertOptions(r,{silentJSONParsing:U.transitional(U.boolean),forcedJSONParsing:U.transitional(U.boolean),clarifyTimeoutError:U.transitional(U.boolean)},!1),a!=null&&(c.isFunction(a)?n.paramsSerializer={serialize:a}:Pe.assertOptions(a,{encode:U.function,serialize:U.function},!0)),Pe.assertOptions(n,{baseUrl:U.spelling("baseURL"),withXsrfToken:U.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&c.merge(s.common,s[n.method]);s&&c.forEach(["delete","get","head","post","put","patch","common"],h=>{delete s[h]}),n.headers=N.concat(o,s);const i=[];let u=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(u=u&&b.synchronous,i.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let f,m=0,g;if(!u){const h=[ln.bind(this),void 0];for(h.unshift.apply(h,i),h.push.apply(h,l),g=h.length,f=Promise.resolve(n);m<g;)f=f.then(h[m++],h[m++]);return f}g=i.length;let v=n;for(m=0;m<g;){const h=i[m++],b=i[m++];try{v=h(v)}catch(p){b.call(this,p);break}}try{f=ln.call(this,v)}catch(h){return Promise.reject(h)}for(m=0,g=l.length;m<g;)f=f.then(l[m++],l[m++]);return f}getUri(t){t=ee(this.defaults,t);const n=ur(t.baseURL,t.url);return or(n,t.params,t.paramsSerializer)}};c.forEach(["delete","get","head","options"],function(t){Z.prototype[t]=function(n,r){return this.request(ee(r||{},{method:t,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,i){return this.request(ee(i||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Z.prototype[t]=n(),Z.prototype[t+"Form"]=n(!0)});let Cs=class yr{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(a=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](a);r._listeners=null}),this.promise.then=a=>{let s;const o=new Promise(i=>{r.subscribe(i),s=i}).then(a);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,i){r.reason||(r.reason=new fe(s,o,i),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new yr(function(a){t=a}),cancel:t}}};function Ns(e){return function(n){return e.apply(null,n)}}function Fs(e){return c.isObject(e)&&e.isAxiosError===!0}const dt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(dt).forEach(([e,t])=>{dt[t]=e});function br(e){const t=new Z(e),n=Gn(Z.prototype.request,t);return c.extend(n,Z.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(a){return br(ee(e,a))},n}const P=br(xe);P.Axios=Z;P.CanceledError=fe;P.CancelToken=Cs;P.isCancel=cr;P.VERSION=gr;P.toFormData=Ue;P.AxiosError=w;P.Cancel=P.CanceledError;P.all=function(t){return Promise.all(t)};P.spread=Ns;P.isAxiosError=Fs;P.mergeConfig=ee;P.AxiosHeaders=N;P.formToJSON=e=>lr(c.isHTMLForm(e)?new FormData(e):e);P.getAdapter=hr.getAdapter;P.HttpStatusCode=dt;P.default=P;const{Axios:$l,AxiosError:Yl,CanceledError:Vl,isCancel:Gl,CancelToken:Xl,VERSION:Jl,all:Kl,Cancel:Ql,isAxiosError:Zl,spread:ec,toFormData:tc,AxiosHeaders:nc,HttpStatusCode:rc,formToJSON:ac,getAdapter:sc,mergeConfig:oc}=P,wr=(e,t)=>t?`${e}/${t}`:e,Lt="https://jsonplaceholder.typicode.com/",Is=wr(Lt,"todos"),Ls=wr(Lt,"users"),xr=P.create({baseURL:Lt,headers:{"Content-Type":"application/json"}}),js=async()=>{try{return(await xr.get(Is)).data}catch(e){throw vr(e)}},Ds=async()=>{try{return(await xr.get(Ls)).data}catch(e){throw vr(e)}},vr=e=>{const t=e;if(t.response){const{message:n}=t.response.data,r=t.response.status;switch(r){case 400:return new Error(n||"Некорректный запрос (400)");case 401:return new Error(n||"Неавторизован (401)");case 403:return new Error(n||"Доступ запрещён (403)");case 404:return new Error(n||"Ресурс не найден (404)");case 500:return new Error(n||"Ошибка сервера (500)");default:return new Error(n||`Ошибка с кодом ${r}`)}}return t.request?new Error("Нет ответа от сервера. Проверьте подключение к сети."):new Error(t.message||"Произошла непредвиденная ошибка.")},Ms=async()=>{try{const e=await Ds(),t=await js();return e.map(n=>{const r=t.reduce((a,s)=>s.userId===n.id?a+1:a,0);return{...n,tasks:r}})}catch{throw new Error("Ошибка загрузки данных")}},Us=()=>{const[e,t]=Se.useState([]),[n,r]=Se.useState(!0),[a,s]=Se.useState("");return Se.useEffect(()=>{(async()=>{try{const i=await Ms();t(i)}catch{s("Ошибка загрузки данных")}finally{r(!1)}})()},[]),{tasks:e,loading:n,error:a}};var Ke={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var fn;function zs(){return fn||(fn=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var i=arguments[o];i&&(s=a(s,r(i)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var i in s)t.call(s,i)&&s[i]&&(o=a(o,i));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Ke)),Ke.exports}var Bs=zs();const Hs=Yn(Bs),qs="Text-module__white__IQzGl",Ws="Text-module__black__ndQC-",$s="Text-module__grey__H89yg",Ys="Text-module__center__4-cDa",Vs="Text-module__right__rNayN",Gs="Text-module__left__5bg-1",Xs="Text-module__xs__TFYC3",Js="Text-module__s__XA89a",Ks="Text-module__m__P9j6a",Qs="Text-module__l__BlyhM",Zs="Text-module__xl__5eNWM",eo="Text-module__weight300__8OGJs",to="Text-module__weight400__OvaZC",no="Text-module__weight500__JT-Po",ro="Text-module__weight700__M5nkG",L={white:qs,black:Ws,grey:$s,center:Ys,right:Vs,left:Gs,xs:Xs,s:Js,m:Ks,l:Qs,xl:Zs,weight300:eo,weight400:to,weight500:no,weight700:ro},ao={xs:L.xs,s:L.s,m:L.m,l:L.l,xl:L.xl},so={300:L.weight300,400:L.weight400,500:L.weight500,700:L.weight700},B=e=>{const{children:t,className:n,color:r="white",align:a="left",size:s="s",weigh:o="400",as:i="p"}=e,u=[ao[s],so[o],L[r],L[a],n];return T.jsx(i,{className:Hs(L.text,u),children:t})},oo="TableHeaders-module__headers__nqQvW",io={headers:oo},lo=()=>T.jsx("thead",{className:io.headers,children:T.jsxs("tr",{children:[T.jsx(B,{as:"th",size:"l",children:"№"}),T.jsx(B,{as:"th",size:"l",children:"Пользователь"}),T.jsx(B,{as:"th",size:"l",children:"Задачи"})]})});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function co(e,t,n){return(t=uo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function un(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?un(Object(n),!0).forEach(function(r){co(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):un(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fo(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function uo(e){var t=fo(e,"string");return typeof t=="symbol"?t:t+""}const dn=()=>{};let jt={},Er={},Sr=null,Ar={mark:dn,measure:dn};try{typeof window<"u"&&(jt=window),typeof document<"u"&&(Er=document),typeof MutationObserver<"u"&&(Sr=MutationObserver),typeof performance<"u"&&(Ar=performance)}catch{}const{userAgent:mn=""}=jt.navigator||{},G=jt,_=Er,pn=Sr,Ae=Ar;G.document;const Y=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",Or=~mn.indexOf("MSIE")||~mn.indexOf("Trident/");var mo=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,po=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Tr={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ho={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},_r=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",He="duotone",go="sharp",yo="sharp-duotone",Pr=[C,He,go,yo],bo={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},wo={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},xo=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),vo={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Eo=["fak","fa-kit","fakd","fa-kit-duotone"],hn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},So=["kit"],Ao={kit:{"fa-kit":"fak"}},Oo=["fak","fakd"],To={kit:{fak:"fa-kit"}},gn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_o=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Po=["fak","fa-kit","fakd","fa-kit-duotone"],Ro={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ko={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Co={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},mt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},No=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],pt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",..._o,...No],Fo=["solid","regular","light","thin","duotone","brands"],Rr=[1,2,3,4,5,6,7,8,9,10],Io=Rr.concat([11,12,13,14,15,16,17,18,19,20]),Lo=[...Object.keys(Co),...Fo,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Oe.GROUP,Oe.SWAP_OPACITY,Oe.PRIMARY,Oe.SECONDARY].concat(Rr.map(e=>"".concat(e,"x"))).concat(Io.map(e=>"w-".concat(e))),jo={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const W="___FONT_AWESOME___",ht=16,kr="fa",Cr="svg-inline--fa",te="data-fa-i2svg",gt="data-fa-pseudo-element",Do="data-fa-pseudo-element-pending",Dt="data-prefix",Mt="data-icon",yn="fontawesome-i2svg",Mo="async",Uo=["HTML","HEAD","STYLE","SCRIPT"],Nr=(()=>{try{return!0}catch{return!1}})();function ve(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[C]}})}const Fr=d({},Tr);Fr[C]=d(d(d(d({},{"fa-duotone":"duotone"}),Tr[C]),hn.kit),hn["kit-duotone"]);const zo=ve(Fr),yt=d({},vo);yt[C]=d(d(d(d({},{duotone:"fad"}),yt[C]),gn.kit),gn["kit-duotone"]);const bn=ve(yt),bt=d({},mt);bt[C]=d(d({},bt[C]),To.kit);const Ut=ve(bt),wt=d({},ko);wt[C]=d(d({},wt[C]),Ao.kit);ve(wt);const Bo=mo,Ir="fa-layers-text",Ho=po,qo=d({},bo);ve(qo);const Wo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qe=ho,$o=[...So,...Lo],pe=G.FontAwesomeConfig||{};function Yo(e){var t=_.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Vo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}_&&typeof _.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=Vo(Yo(n));a!=null&&(pe[r]=a)});const Lr={styleDefault:"solid",familyDefault:C,cssPrefix:kr,replacementClass:Cr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pe.familyPrefix&&(pe.cssPrefix=pe.familyPrefix);const le=d(d({},Lr),pe);le.autoReplaceSvg||(le.observeMutations=!1);const y={};Object.keys(Lr).forEach(e=>{Object.defineProperty(y,e,{enumerable:!0,set:function(t){le[e]=t,he.forEach(n=>n(y))},get:function(){return le[e]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(e){le.cssPrefix=e,he.forEach(t=>t(y))},get:function(){return le.cssPrefix}});G.FontAwesomeConfig=y;const he=[];function Go(e){return he.push(e),()=>{he.splice(he.indexOf(e),1)}}const V=ht,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xo(e){if(!e||!Y)return;const t=_.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=_.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const s=n[a],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return _.head.insertBefore(t,r),e}const Jo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ye(){let e=12,t="";for(;e-- >0;)t+=Jo[Math.random()*62|0];return t}function ue(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function zt(e){return e.classList?ue(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function jr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ko(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(jr(e[n]),'" '),"").trim()}function qe(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Bt(e){return e.size!==H.size||e.x!==H.x||e.y!==H.y||e.rotate!==H.rotate||e.flipX||e.flipY}function Qo(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(i)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:l}}function Zo(e){let{transform:t,width:n=ht,height:r=ht,startCentered:a=!1}=e,s="";return a&&Or?s+="translate(".concat(t.x/V-n/2,"em, ").concat(t.y/V-r/2,"em) "):a?s+="translate(calc(-50% + ".concat(t.x/V,"em), calc(-50% + ").concat(t.y/V,"em)) "):s+="translate(".concat(t.x/V,"em, ").concat(t.y/V,"em) "),s+="scale(".concat(t.size/V*(t.flipX?-1:1),", ").concat(t.size/V*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var ei=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Dr(){const e=kr,t=Cr,n=y.cssPrefix,r=y.replacementClass;let a=ei;if(n!==e||r!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");a=a.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(i,".".concat(r))}return a}let wn=!1;function Ze(){y.autoAddCss&&!wn&&(Xo(Dr()),wn=!0)}var ti={mixout(){return{dom:{css:Dr,insertCss:Ze}}},hooks(){return{beforeDOMElementCreation(){Ze()},beforeI2svg(){Ze()}}}};const $=G||{};$[W]||($[W]={});$[W].styles||($[W].styles={});$[W].hooks||($[W].hooks={});$[W].shims||($[W].shims=[]);var q=$[W];const Mr=[],Ur=function(){_.removeEventListener("DOMContentLoaded",Ur),Fe=1,Mr.map(e=>e())};let Fe=!1;Y&&(Fe=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),Fe||_.addEventListener("DOMContentLoaded",Ur));function ni(e){Y&&(Fe?setTimeout(e,0):Mr.push(e))}function Ee(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?jr(e):"<".concat(t," ").concat(Ko(n),">").concat(r.map(Ee).join(""),"</").concat(t,">")}function xn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var et=function(t,n,r,a){var s=Object.keys(t),o=s.length,i=n,u,l,f;for(r===void 0?(u=1,f=t[s[0]]):(u=0,f=r);u<o;u++)l=s[u],f=i(f,t[l],l,t);return f};function ri(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((a&1023)<<10)+(s&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function xt(e){const t=ri(e);return t.length===1?t[0].toString(16):null}function ai(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vn(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function vt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=vn(t);typeof q.hooks.addPack=="function"&&!r?q.hooks.addPack(e,vn(t)):q.styles[e]=d(d({},q.styles[e]||{}),a),e==="fas"&&vt("fa",t)}const{styles:be,shims:si}=q,zr=Object.keys(Ut),oi=zr.reduce((e,t)=>(e[t]=Object.keys(Ut[t]),e),{});let Ht=null,Br={},Hr={},qr={},Wr={},$r={};function ii(e){return~$o.indexOf(e)}function li(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ii(a)?a:null}const Yr=()=>{const e=r=>et(be,(a,s,o)=>(a[o]=et(s,r,{}),a),{});Br=e((r,a,s)=>(a[3]&&(r[a[3]]=s),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{r[i.toString(16)]=s}),r)),Hr=e((r,a,s)=>(r[s]=s,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{r[i]=s}),r)),$r=e((r,a,s)=>{const o=a[2];return r[s]=s,o.forEach(i=>{r[i]=s}),r});const t="far"in be||y.autoFetchSvg,n=et(si,(r,a)=>{const s=a[0];let o=a[1];const i=a[2];return o==="far"&&!t&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:i}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:i}),r},{names:{},unicodes:{}});qr=n.names,Wr=n.unicodes,Ht=We(y.styleDefault,{family:y.familyDefault})};Go(e=>{Ht=We(e.styleDefault,{family:y.familyDefault})});Yr();function qt(e,t){return(Br[e]||{})[t]}function ci(e,t){return(Hr[e]||{})[t]}function Q(e,t){return($r[e]||{})[t]}function Vr(e){return qr[e]||{prefix:null,iconName:null}}function fi(e){const t=Wr[e],n=qt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return Ht}const Gr=()=>({prefix:null,iconName:null,rest:[]});function ui(e){let t=C;const n=zr.reduce((r,a)=>(r[a]="".concat(y.cssPrefix,"-").concat(a),r),{});return Pr.forEach(r=>{(e.includes(n[r])||e.some(a=>oi[r].includes(a)))&&(t=r)}),t}function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=C}=t,r=zo[n][e];if(n===He&&!e)return"fad";const a=bn[n][e]||bn[n][r],s=e in q.styles?e:null;return a||s||null}function di(e){let t=[],n=null;return e.forEach(r=>{const a=li(y.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function En(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=pt.concat(Po),s=En(e.filter(m=>a.includes(m))),o=En(e.filter(m=>!pt.includes(m))),i=s.filter(m=>(r=m,!_r.includes(m))),[u=null]=i,l=ui(s),f=d(d({},di(o)),{},{prefix:We(u,{family:l})});return d(d(d({},f),gi({values:e,family:l,styles:be,config:y,canonical:f,givenPrefix:r})),mi(n,r,f))}function mi(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const s=t==="fa"?Vr(a):{},o=Q(r,a);return a=s.iconName||o||a,r=s.prefix||r,r==="far"&&!be.far&&be.fas&&!y.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const pi=Pr.filter(e=>e!==C||e!==He),hi=Object.keys(mt).filter(e=>e!==C).map(e=>Object.keys(mt[e])).flat();function gi(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:s={},config:o={}}=e,i=n===He,u=t.includes("fa-duotone")||t.includes("fad"),l=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!i&&(u||l||f)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&pi.includes(n)&&(Object.keys(s).find(g=>hi.includes(g))||o.autoFetchSvg)){const g=xo.get(n).defaultShortPrefixId;r.prefix=g,r.iconName=Q(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=X()||"fas"),r}class yi{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(s=>{this.definitions[s]=d(d({},this.definitions[s]||{}),a[s]),vt(s,a[s]);const o=Ut[C][s];o&&vt(o,a[s]),Yr()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:s,iconName:o,icon:i}=r[a],u=i[2];t[s]||(t[s]={}),u.length>0&&u.forEach(l=>{typeof l=="string"&&(t[s][l]=i)}),t[s][o]=i}),t}}let Sn=[],se={};const ie={},bi=Object.keys(ie);function wi(e,t){let{mixoutsTo:n}=t;return Sn=e,se={},Object.keys(ie).forEach(r=>{bi.indexOf(r)===-1&&delete ie[r]}),Sn.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(s=>{typeof a[s]=="function"&&(n[s]=a[s]),typeof a[s]=="object"&&Object.keys(a[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{se[o]||(se[o]=[]),se[o].push(s[o])})}r.provides&&r.provides(ie)}),n}function Et(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(se[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function ne(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(se[e]||[]).forEach(s=>{s.apply(null,n)})}function J(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ie[e]?ie[e].apply(null,t):void 0}function St(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||X();if(t)return t=Q(n,t)||t,xn(Xr.definitions,n,t)||xn(q.styles,n,t)}const Xr=new yi,xi=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,ne("noAuto")},vi={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(ne("beforeI2svg",e),J("pseudoElements2svg",e),J("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,ni(()=>{Si({autoReplaceSvgRoot:t}),ne("watch",e)})}},Ei={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=We(e[0]);return{prefix:n,iconName:Q(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(y.cssPrefix,"-"))>-1||e.match(Bo))){const t=$e(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||X(),iconName:Q(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=X();return{prefix:t,iconName:Q(t,e)||e}}}},I={noAuto:xi,config:y,dom:vi,parse:Ei,library:Xr,findIconDefinition:St,toHtml:Ee},Si=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=_}=e;(Object.keys(q.styles).length>0||y.autoFetchSvg)&&Y&&y.autoReplaceSvg&&I.dom.i2svg({node:t})};function Ye(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Ee(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Y)return;const n=_.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Ai(e){let{children:t,main:n,mask:r,attributes:a,styles:s,transform:o}=e;if(Bt(o)&&n.found&&!r.found){const{width:i,height:u}=n,l={x:i/u/2,y:.5};a.style=qe(d(d({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Oi(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:s}=e;const o=s===!0?"".concat(t,"-").concat(y.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},a),{},{id:o}),children:r}]}]}function Wt(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:s,symbol:o,title:i,maskId:u,titleId:l,extra:f,watchable:m=!1}=e,{width:g,height:v}=n.found?n:t,h=Oo.includes(r),b=[y.replacementClass,a?"".concat(y.cssPrefix,"-").concat(a):""].filter(O=>f.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(f.classes).join(" ");let p={children:[],attributes:d(d({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:b,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})};const x=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};m&&(p.attributes[te]=""),i&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(l||ye())},children:[i]}),delete p.attributes.title);const E=d(d({},p),{},{prefix:r,iconName:a,main:t,mask:n,maskId:u,transform:s,symbol:o,styles:d(d({},x),f.styles)}),{children:A,attributes:R}=n.found&&t.found?J("generateAbstractMask",E)||{children:[],attributes:{}}:J("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=A,E.attributes=R,o?Oi(E):Ai(E)}function An(e){const{content:t,width:n,height:r,transform:a,title:s,extra:o,watchable:i=!1}=e,u=d(d(d({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});i&&(u[te]="");const l=d({},o.styles);Bt(a)&&(l.transform=Zo({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const f=qe(l);f.length>0&&(u.style=f);const m=[];return m.push({tag:"span",attributes:u,children:[t]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function Ti(e){const{content:t,title:n,extra:r}=e,a=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=qe(r.styles);s.length>0&&(a.style=s);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:tt}=q;function At(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(Qe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Qe.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Qe.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const _i={found:!1,width:512,height:512};function Pi(e,t){!Nr&&!y.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ot(e,t){let n=t;return t==="fa"&&y.styleDefault!==null&&(t=X()),new Promise((r,a)=>{if(n==="fa"){const s=Vr(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&tt[t]&&tt[t][e]){const s=tt[t][e];return r(At(s))}Pi(e,t),r(d(d({},_i),{},{icon:y.showMissingIcons&&e?J("missingIconAbstract")||{}:{}}))})}const On=()=>{},Tt=y.measurePerformance&&Ae&&Ae.mark&&Ae.measure?Ae:{mark:On,measure:On},me='FA "6.7.2"',Ri=e=>(Tt.mark("".concat(me," ").concat(e," begins")),()=>Jr(e)),Jr=e=>{Tt.mark("".concat(me," ").concat(e," ends")),Tt.measure("".concat(me," ").concat(e),"".concat(me," ").concat(e," begins"),"".concat(me," ").concat(e," ends"))};var $t={begin:Ri,end:Jr};const Re=()=>{};function Tn(e){return typeof(e.getAttribute?e.getAttribute(te):null)=="string"}function ki(e){const t=e.getAttribute?e.getAttribute(Dt):null,n=e.getAttribute?e.getAttribute(Mt):null;return t&&n}function Ci(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(y.replacementClass)}function Ni(){return y.autoReplaceSvg===!0?ke.replace:ke[y.autoReplaceSvg]||ke.replace}function Fi(e){return _.createElementNS("http://www.w3.org/2000/svg",e)}function Ii(e){return _.createElement(e)}function Kr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Fi:Ii}=t;if(typeof e=="string")return _.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){r.appendChild(Kr(s,{ceFn:n}))}),r}function Li(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ke={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Kr(n),t)}),t.getAttribute(te)===null&&y.keepOriginalSource){let n=_.createComment(Li(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~zt(t).indexOf(y.replacementClass))return ke.replace(e);const r=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,i)=>(i===y.replacementClass||i.match(r)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const a=n.map(s=>Ee(s)).join(`
`);t.setAttribute(te,""),t.innerHTML=a}};function _n(e){e()}function Qr(e,t){const n=typeof t=="function"?t:Re;if(e.length===0)n();else{let r=_n;y.mutateApproach===Mo&&(r=G.requestAnimationFrame||_n),r(()=>{const a=Ni(),s=$t.begin("mutate");e.map(a),s(),n()})}}let Yt=!1;function Zr(){Yt=!0}function _t(){Yt=!1}let Ie=null;function Pn(e){if(!pn||!y.observeMutations)return;const{treeCallback:t=Re,nodeCallback:n=Re,pseudoElementsCallback:r=Re,observeMutationsRoot:a=_}=e;Ie=new pn(s=>{if(Yt)return;const o=X();ue(s).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Tn(i.addedNodes[0])&&(y.searchPseudoElements&&r(i.target),t(i.target)),i.type==="attributes"&&i.target.parentNode&&y.searchPseudoElements&&r(i.target.parentNode),i.type==="attributes"&&Tn(i.target)&&~Wo.indexOf(i.attributeName))if(i.attributeName==="class"&&ki(i.target)){const{prefix:u,iconName:l}=$e(zt(i.target));i.target.setAttribute(Dt,u||o),l&&i.target.setAttribute(Mt,l)}else Ci(i.target)&&n(i.target)})}),Y&&Ie.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ji(){Ie&&Ie.disconnect()}function Di(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const s=a.split(":"),o=s[0],i=s.slice(1);return o&&i.length>0&&(r[o]=i.join(":").trim()),r},{})),n}function Mi(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=$e(zt(e));return a.prefix||(a.prefix=X()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ci(a.prefix,e.innerText)||qt(a.prefix,xt(e.innerText))),!a.iconName&&y.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ui(e){const t=ue(e.attributes).reduce((a,s)=>(a.name!=="class"&&a.name!=="style"&&(a[s.name]=s.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return y.autoA11y&&(n?t["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(r||ye()):(t["aria-hidden"]="true",t.focusable="false")),t}function zi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Mi(e),s=Ui(e),o=Et("parseNodeAttributes",{},e);let i=t.styleParser?Di(e):[];return d({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:s}},o)}const{styles:Bi}=q;function ea(e){const t=y.autoReplaceSvg==="nest"?Rn(e,{styleParser:!1}):Rn(e);return~t.extra.classes.indexOf(Ir)?J("generateLayersText",e,t):J("generateSvgReplacementMutation",e,t)}function Hi(){return[...Eo,...pt]}function kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();const n=_.documentElement.classList,r=f=>n.add("".concat(yn,"-").concat(f)),a=f=>n.remove("".concat(yn,"-").concat(f)),s=y.autoFetchSvg?Hi():_r.concat(Object.keys(Bi));s.includes("fa")||s.push("fa");const o=[".".concat(Ir,":not([").concat(te,"])")].concat(s.map(f=>".".concat(f,":not([").concat(te,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=ue(e.querySelectorAll(o))}catch{}if(i.length>0)r("pending"),a("complete");else return Promise.resolve();const u=$t.begin("onTree"),l=i.reduce((f,m)=>{try{const g=ea(m);g&&f.push(g)}catch(g){Nr||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise((f,m)=>{Promise.all(l).then(g=>{Qr(g,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),u(),f()})}).catch(g=>{u(),m(g)})})}function qi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ea(e).then(n=>{n&&Qr([n],t)})}function Wi(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:St(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:St(a||{})),e(r,d(d({},n),{},{mask:a}))}}const $i=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=H,symbol:r=!1,mask:a=null,maskId:s=null,title:o=null,titleId:i=null,classes:u=[],attributes:l={},styles:f={}}=t;if(!e)return;const{prefix:m,iconName:g,icon:v}=e;return Ye(d({type:"icon"},e),()=>(ne("beforeDOMElementCreation",{iconDefinition:e,params:t}),y.autoA11y&&(o?l["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(i||ye()):(l["aria-hidden"]="true",l.focusable="false")),Wt({icons:{main:At(v),mask:a?At(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:g,transform:d(d({},H),n),symbol:r,title:o,maskId:s,titleId:i,extra:{attributes:l,styles:f,classes:u}})))};var Yi={mixout(){return{icon:Wi($i)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=kn,e.nodeCallback=qi,e}}},provides(e){e.i2svg=function(t){const{node:n=_,callback:r=()=>{}}=t;return kn(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:s,prefix:o,transform:i,symbol:u,mask:l,maskId:f,extra:m}=n;return new Promise((g,v)=>{Promise.all([Ot(r,o),l.iconName?Ot(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(h=>{let[b,p]=h;g([t,Wt({icons:{main:b,mask:p},prefix:o,iconName:r,transform:i,symbol:u,maskId:f,title:a,titleId:s,extra:m,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:s,styles:o}=t;const i=qe(o);i.length>0&&(r.style=i);let u;return Bt(s)&&(u=J("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:r}}}},Vi={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ye({type:"layer"},()=>{ne("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(s=>{r=r.concat(s.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Gi={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:s={}}=t;return Ye({type:"counter",content:e},()=>(ne("beforeDOMElementCreation",{content:e,params:t}),Ti({content:e.toString(),title:n,extra:{attributes:a,styles:s,classes:["".concat(y.cssPrefix,"-layers-counter"),...r]}})))}}}},Xi={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=H,title:r=null,classes:a=[],attributes:s={},styles:o={}}=t;return Ye({type:"text",content:e},()=>(ne("beforeDOMElementCreation",{content:e,params:t}),An({content:e,transform:d(d({},H),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(y.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:s}=n;let o=null,i=null;if(Or){const u=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/u,i=l.height/u}return y.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,An({content:t.innerHTML,width:o,height:i,transform:a,title:r,extra:s,watchable:!0})])}}};const Ji=new RegExp('"',"ug"),Cn=[1105920,1112319],Nn=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),wo),jo),Ro),Pt=Object.keys(Nn).reduce((e,t)=>(e[t.toLowerCase()]=Nn[t],e),{}),Ki=Object.keys(Pt).reduce((e,t)=>{const n=Pt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Qi(e){const t=e.replace(Ji,""),n=ai(t,0),r=n>=Cn[0]&&n<=Cn[1],a=t.length===2?t[0]===t[1]:!1;return{value:xt(a?t[0]:t),isSecondary:r||a}}function Zi(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Pt[n]||{})[a]||Ki[n]}function Fn(e,t){const n="".concat(Do).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=ue(e.children).filter(g=>g.getAttribute(gt)===t)[0],i=G.getComputedStyle(e,t),u=i.getPropertyValue("font-family"),l=u.match(Ho),f=i.getPropertyValue("font-weight"),m=i.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&m!=="none"&&m!==""){const g=i.getPropertyValue("content");let v=Zi(u,f);const{value:h,isSecondary:b}=Qi(g),p=l[0].startsWith("FontAwesome");let x=qt(v,h),E=x;if(p){const A=fi(h);A.iconName&&A.prefix&&(x=A.iconName,v=A.prefix)}if(x&&!b&&(!o||o.getAttribute(Dt)!==v||o.getAttribute(Mt)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);const A=zi(),{extra:R}=A;R.attributes[gt]=t,Ot(x,v).then(O=>{const M=Wt(d(d({},A),{},{icons:{main:O,mask:Gr()},prefix:v,iconName:E,extra:R,watchable:!0})),j=_.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=M.map(re=>Ee(re)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function el(e){return Promise.all([Fn(e,"::before"),Fn(e,"::after")])}function tl(e){return e.parentNode!==document.head&&!~Uo.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(gt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function In(e){if(Y)return new Promise((t,n)=>{const r=ue(e.querySelectorAll("*")).filter(tl).map(el),a=$t.begin("searchPseudoElements");Zr(),Promise.all(r).then(()=>{a(),_t(),t()}).catch(()=>{a(),_t(),n()})})}var nl={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=In,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=_}=t;y.searchPseudoElements&&In(n)}}};let Ln=!1;var rl={mixout(){return{dom:{unwatch(){Zr(),Ln=!0}}}},hooks(){return{bootstrap(){Pn(Et("mutationObserverCallbacks",{}))},noAuto(){ji()},watch(e){const{observeMutationsRoot:t}=e;Ln?_t():Pn(Et("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const jn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),s=a[0];let o=a.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var al={mixout(){return{parse:{transform:e=>jn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=jn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:s}=t;const o={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(i," ").concat(u," ").concat(l)},m={transform:"translate(".concat(s/2*-1," -256)")},g={outer:o,inner:f,path:m};return{tag:"g",attributes:d({},g.outer),children:[{tag:"g",attributes:d({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),g.path)}]}]}}}};const nt={x:0,y:0,width:"100%",height:"100%"};function Dn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function sl(e){return e.tag==="g"?e.children:[e]}var ol={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?$e(n.split(" ").map(a=>a.trim())):Gr();return r.prefix||(r.prefix=X()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:s,maskId:o,transform:i}=t;const{width:u,icon:l}=a,{width:f,icon:m}=s,g=Qo({transform:i,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:d(d({},nt),{},{fill:"white"})},h=l.children?{children:l.children.map(Dn)}:{},b={tag:"g",attributes:d({},g.inner),children:[Dn(d({tag:l.tag,attributes:d(d({},l.attributes),g.path)},h))]},p={tag:"g",attributes:d({},g.outer),children:[b]},x="mask-".concat(o||ye()),E="clip-".concat(o||ye()),A={tag:"mask",attributes:d(d({},nt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:sl(m)},A]};return n.push(R,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(x,")")},nt)}),{children:n,attributes:r}}}},il={provides(e){let t=!1;G.matchMedia&&(t=G.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=d(d({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:d(d({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:d(d({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ll={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},cl=[ti,Yi,Vi,Gi,Xi,nl,rl,al,ol,il,ll];wi(cl,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;const Rt=I.parse;I.findIconDefinition;I.toHtml;const fl=I.icon;I.layer;I.text;I.counter;var rt={exports:{}},at,Mn;function ul(){if(Mn)return at;Mn=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return at=e,at}var st,Un;function dl(){if(Un)return st;Un=1;var e=ul();function t(){}function n(){}return n.resetWarningCache=t,st=function(){function r(o,i,u,l,f,m){if(m!==e){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}r.isRequired=r;function a(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return s.PropTypes=s,s},st}var zn;function ml(){return zn||(zn=1,rt.exports=dl()()),rt.exports}var pl=ml();const S=Yn(pl);function Bn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bn(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Le(e){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le(e)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hl(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function gl(e,t){if(e==null)return{};var n=hl(e,t),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kt(e){return yl(e)||bl(e)||wl(e)||xl()}function yl(e){if(Array.isArray(e))return Ct(e)}function bl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wl(e,t){if(e){if(typeof e=="string")return Ct(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ct(e,t)}}function Ct(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vl(e){var t,n=e.beat,r=e.fade,a=e.beatFade,s=e.bounce,o=e.shake,i=e.flash,u=e.spin,l=e.spinPulse,f=e.spinReverse,m=e.pulse,g=e.fixedWidth,v=e.inverse,h=e.border,b=e.listItem,p=e.flip,x=e.size,E=e.rotation,A=e.pull,R=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":s,"fa-shake":o,"fa-flash":i,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":g,"fa-inverse":v,"fa-border":h,"fa-li":b,"fa-flip":p===!0,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},oe(t,"fa-".concat(x),typeof x<"u"&&x!==null),oe(t,"fa-rotate-".concat(E),typeof E<"u"&&E!==null&&E!==0),oe(t,"fa-pull-".concat(A),typeof A<"u"&&A!==null),oe(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(R).map(function(O){return R[O]?O:null}).filter(function(O){return O})}function El(e){return e=e-0,e===e}function ta(e){return El(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Sl=["style"];function Al(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ol(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ta(n.slice(0,r)),s=n.slice(r+1).trim();return a.startsWith("webkit")?t[Al(a)]=s:t[a]=s,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return na(e,u)}),a=Object.keys(t.attributes||{}).reduce(function(u,l){var f=t.attributes[l];switch(l){case"class":u.attrs.className=f,delete t.attributes.class;break;case"style":u.attrs.style=Ol(f);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?u.attrs[l.toLowerCase()]=f:u.attrs[ta(l)]=f}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,i=gl(n,Sl);return a.attrs.style=z(z({},a.attrs.style),o),e.apply(void 0,[t.tag,z(z({},a.attrs),i)].concat(kt(r)))}var ra=!1;try{ra=!0}catch{}function Tl(){if(!ra&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Hn(e){if(e&&Le(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Rt.icon)return Rt.icon(e);if(e===null)return null;if(e&&Le(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ot(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?oe({},e,t):{}}var qn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Vt=Vn.forwardRef(function(e,t){var n=z(z({},qn),e),r=n.icon,a=n.mask,s=n.symbol,o=n.className,i=n.title,u=n.titleId,l=n.maskId,f=Hn(r),m=ot("classes",[].concat(kt(vl(n)),kt((o||"").split(" ")))),g=ot("transform",typeof n.transform=="string"?Rt.transform(n.transform):n.transform),v=ot("mask",Hn(a)),h=fl(f,z(z(z(z({},m),g),v),{},{symbol:s,title:i,titleId:u,maskId:l}));if(!h)return Tl("Could not find icon",f),null;var b=h.abstract,p={ref:t};return Object.keys(n).forEach(function(x){qn.hasOwnProperty(x)||(p[x]=n[x])}),_l(b[0],p)});Vt.displayName="FontAwesomeIcon";Vt.propTypes={beat:S.bool,border:S.bool,beatFade:S.bool,bounce:S.bool,className:S.string,fade:S.bool,flash:S.bool,mask:S.oneOfType([S.object,S.array,S.string]),maskId:S.string,fixedWidth:S.bool,inverse:S.bool,flip:S.oneOf([!0,!1,"horizontal","vertical","both"]),icon:S.oneOfType([S.object,S.array,S.string]),listItem:S.bool,pull:S.oneOf(["right","left"]),pulse:S.bool,rotation:S.oneOf([0,90,180,270]),shake:S.bool,size:S.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:S.bool,spinPulse:S.bool,spinReverse:S.bool,symbol:S.oneOfType([S.bool,S.string]),title:S.string,titleId:S.string,transform:S.oneOfType([S.string,S.object]),swapOpacity:S.bool};var _l=na.bind(null,Vn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Pl={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},Rl="UserRow-module__usernum__vChzB",kl="UserRow-module__userinfo__1U5v6",Cl="UserRow-module__usericon__q1Yiv",Nl="UserRow-module__userdetails__8ftBt",Fl="UserRow-module__usertasks__2q3Ar",Il="UserRow-module__email__ZSIgf",ae={usernum:Rl,userinfo:kl,usericon:Cl,userdetails:Nl,usertasks:Fl,email:Il},Ll=({user:e,index:t})=>T.jsxs("tr",{children:[T.jsx(B,{as:"td",size:"m",className:ae.usernum,weigh:"700",children:t+1}),T.jsxs(B,{as:"td",className:ae.userinfo,children:[T.jsx(Vt,{icon:Pl,className:ae.usericon}),T.jsxs("div",{className:ae.userdetails,children:[T.jsx(B,{size:"m",children:e.name}),T.jsx(B,{color:"grey",className:ae.email,children:e.email})]})]}),T.jsx(B,{as:"td",size:"m",className:ae.usertasks,weigh:"500",children:e.tasks})]},e.id),jl=({usersWithTasks:e})=>T.jsx("tbody",{children:e.map((t,n)=>T.jsx(Ll,{user:t,index:n}))}),Dl="TableData-module__conteiner__gaL9Z",Ml="TableData-module__table__9875N",Wn={conteiner:Dl,table:Ml},Ul=()=>{const{tasks:e,loading:t,error:n}=Us();return n||t||T.jsx("div",{className:Wn.conteiner,children:T.jsxs("table",{className:Wn.table,children:[T.jsx(lo,{}),T.jsx(jl,{usersWithTasks:e})]})})},zl="Home-module__h1__TjFM2",Bl="Home-module__p__4jvSD",$n={h1:zl,p:Bl},ic=()=>T.jsxs(T.Fragment,{children:[T.jsx(B,{className:$n.h1,as:"h1",size:"xl",children:"Таблица пользователей"}),T.jsx(B,{className:$n.p,color:"grey",size:"m",children:"User Task table for effective planning"}),T.jsx(Ul,{})]});export{ic as Home,ic as default};
