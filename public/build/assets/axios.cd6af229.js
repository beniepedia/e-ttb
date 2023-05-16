var ae={exports:{}},se=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}},we=se,w=Object.prototype.toString;function I(r){return Array.isArray(r)}function F(r){return typeof r=="undefined"}function Ee(r){return r!==null&&!F(r)&&r.constructor!==null&&!F(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function ie(r){return w.call(r)==="[object ArrayBuffer]"}function Se(r){return w.call(r)==="[object FormData]"}function Ce(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&ie(r.buffer),e}function Oe(r){return typeof r=="string"}function Re(r){return typeof r=="number"}function oe(r){return r!==null&&typeof r=="object"}function $(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function xe(r){return w.call(r)==="[object Date]"}function Ae(r){return w.call(r)==="[object File]"}function Ne(r){return w.call(r)==="[object Blob]"}function ue(r){return w.call(r)==="[object Function]"}function $e(r){return oe(r)&&ue(r.pipe)}function Te(r){return w.call(r)==="[object URLSearchParams]"}function Pe(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function ge(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function M(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),I(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function H(){var r={};function e(n,i){$(r[i])&&$(n)?r[i]=H(r[i],n):$(n)?r[i]=H({},n):I(n)?r[i]=n.slice():r[i]=n}for(var t=0,a=arguments.length;t<a;t++)M(arguments[t],e);return r}function Ue(r,e,t){return M(e,function(n,i){t&&typeof n=="function"?r[i]=we(n,t):r[i]=n}),r}function Be(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:I,isArrayBuffer:ie,isBuffer:Ee,isFormData:Se,isArrayBufferView:Ce,isString:Oe,isNumber:Re,isObject:oe,isPlainObject:$,isUndefined:F,isDate:xe,isFile:Ae,isBlob:Ne,isFunction:ue,isStream:$e,isURLSearchParams:Te,isStandardBrowserEnv:ge,forEach:M,merge:H,extend:Ue,trim:Pe,stripBOM:Be},C=h;function X(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var fe=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(C.isURLSearchParams(t))n=t.toString();else{var i=[];C.forEach(t,function(f,m){f===null||typeof f=="undefined"||(C.isArray(f)?m=m+"[]":f=[f],C.forEach(f,function(l){C.isDate(l)?l=l.toISOString():C.isObject(l)&&(l=JSON.stringify(l)),i.push(X(m)+"="+X(l))}))}),n=i.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Le=h;function P(){this.handlers=[]}P.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};P.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};P.prototype.forEach=function(e){Le.forEach(this.handlers,function(a){a!==null&&e(a)})};var je=P,De=h,qe=function(e,t){De.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})},le=function(e,t,a,n,i){return e.config=t,a&&(e.code=a),e.request=n,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},_e=le,ce=function(e,t,a,n,i){var o=new Error(e);return _e(o,t,a,n,i)},ke=ce,Fe=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(ke("Request failed with status code "+a.status,a.config,null,a.request,a))},A=h,He=A.isStandardBrowserEnv()?function(){return{write:function(t,a,n,i,o,u){var f=[];f.push(t+"="+encodeURIComponent(a)),A.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),A.isString(i)&&f.push("path="+i),A.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ie=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Me=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Je=Ie,ze=Me,Ve=function(e,t){return e&&!Je(t)?ze(e,t):t},D=h,We=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Xe=function(e){var t={},a,n,i;return e&&D.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),a=D.trim(u.substr(0,i)).toLowerCase(),n=D.trim(u.substr(i+1)),a){if(t[a]&&We.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},K=h,Ke=K.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(i){var o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=K.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function J(r){this.message=r}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var g=J,N=h,Ge=Fe,Ye=He,Qe=fe,Ze=Ve,er=Xe,rr=Ke,q=ce,tr=B,nr=g,G=function(e){return new Promise(function(a,n){var i=e.data,o=e.headers,u=e.responseType,f;function m(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}N.isFormData(i)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(l+":"+y)}var d=Ze(e.baseURL,e.url);s.open(e.method.toUpperCase(),Qe(d,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function V(){if(!!s){var v="getAllResponseHeaders"in s?er(s.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?s.responseText:s.response,E={data:S,status:s.status,statusText:s.statusText,headers:v,config:e,request:s};Ge(function(j){a(j),m()},function(j){n(j),m()},E),s=null}}if("onloadend"in s?s.onloadend=V:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(V)},s.onabort=function(){!s||(n(q("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){n(q("Network Error",e,null,s)),s=null},s.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",E=e.transitional||tr.transitional;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(q(S,e,E.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},N.isStandardBrowserEnv()){var W=(e.withCredentials||rr(d))&&e.xsrfCookieName?Ye.read(e.xsrfCookieName):void 0;W&&(o[e.xsrfHeaderName]=W)}"setRequestHeader"in s&&N.forEach(o,function(S,E){typeof i=="undefined"&&E.toLowerCase()==="content-type"?delete o[E]:s.setRequestHeader(E,S)}),N.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(v){!s||(n(!v||v&&v.type?new nr("canceled"):v),s.abort(),s=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),i||(i=null),s.send(i)})},c=h,Y=qe,ar=le,sr={"Content-Type":"application/x-www-form-urlencoded"};function Q(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function ir(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=G),r}function or(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var U={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:ir(),transformRequest:[function(e,t){return Y(t,"Accept"),Y(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(Q(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(Q(t,"application/json"),or(e)):e}],transformResponse:[function(e){var t=this.transitional||U.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?ar(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){U.headers[e]={}});c.forEach(["post","put","patch"],function(e){U.headers[e]=c.merge(sr)});var B=U,ur=h,fr=B,lr=function(e,t,a){var n=this||fr;return ur.forEach(a,function(o){e=o.call(n,e,t)}),e},de=function(e){return!!(e&&e.__CANCEL__)},Z=h,_=lr,cr=de,dr=B,hr=g;function k(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new hr("canceled")}var pr=function(e){k(e),e.headers=e.headers||{},e.data=_.call(e,e.data,e.headers,e.transformRequest),e.headers=Z.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Z.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||dr.adapter;return t(e).then(function(n){return k(e),n.data=_.call(e,n.data,n.headers,e.transformResponse),n},function(n){return cr(n)||(k(e),n&&n.response&&(n.response.data=_.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,he=function(e,t){t=t||{};var a={};function n(s,l){return p.isPlainObject(s)&&p.isPlainObject(l)?p.merge(s,l):p.isPlainObject(l)?p.merge({},l):p.isArray(l)?l.slice():l}function i(s){if(p.isUndefined(t[s])){if(!p.isUndefined(e[s]))return n(void 0,e[s])}else return n(e[s],t[s])}function o(s){if(!p.isUndefined(t[s]))return n(void 0,t[s])}function u(s){if(p.isUndefined(t[s])){if(!p.isUndefined(e[s]))return n(void 0,e[s])}else return n(void 0,t[s])}function f(s){if(s in t)return n(e[s],t[s]);if(s in e)return n(void 0,e[s])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var y=m[l]||i,d=y(l);p.isUndefined(d)&&y!==f||(a[l]=d)}),a},pe={version:"0.25.0"},mr=pe.version,z={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){z[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var ee={};z.transitional=function(e,t,a){function n(i,o){return"[Axios v"+mr+"] Transitional option '"+i+"'"+o+(a?". "+a:"")}return function(i,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!ee[o]&&(ee[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,u):!0}};function vr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),n=a.length;n-- >0;){var i=a[n],o=e[i];if(o){var u=r[i],f=u===void 0||o(u,i,r);if(f!==!0)throw new TypeError("option "+i+" must be "+f);continue}if(t!==!0)throw Error("Unknown option "+i)}}var yr={assertOptions:vr,validators:z},me=h,br=fe,re=je,te=pr,L=he,ve=yr,O=ve.validators;function x(r){this.defaults=r,this.interceptors={request:new re,response:new re}}x.prototype.request=function(e,t){if(typeof e=="string"?(t=t||{},t.url=e):t=e||{},!t.url)throw new Error("Provided config url is not valid");t=L(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&ve.assertOptions(a,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(i=i&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!i){var f=[te,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var m=t;n.length;){var s=n.shift(),l=n.shift();try{m=s(m)}catch(y){l(y);break}}try{u=te(m)}catch(y){return Promise.reject(y)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};x.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=L(this.defaults,e),br(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};me.forEach(["delete","get","head","options"],function(e){x.prototype[e]=function(t,a){return this.request(L(a||{},{method:e,url:t,data:(a||{}).data}))}});me.forEach(["post","put","patch"],function(e){x.prototype[e]=function(t,a,n){return this.request(L(n||{},{method:e,url:t,data:a}))}});var wr=x,Er=g;function R(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,i=t._listeners.length;for(n=0;n<i;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,i=new Promise(function(o){t.subscribe(o),n=o}).then(a);return i.cancel=function(){t.unsubscribe(n)},i},r(function(n){t.reason||(t.reason=new Er(n),e(t.reason))})}R.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};R.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};R.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};R.source=function(){var e,t=new R(function(n){e=n});return{token:t,cancel:e}};var Sr=R,Cr=function(e){return function(a){return e.apply(null,a)}},Or=h,Rr=function(e){return Or.isObject(e)&&e.isAxiosError===!0},ne=h,xr=se,T=wr,Ar=he,Nr=B;function ye(r){var e=new T(r),t=xr(T.prototype.request,e);return ne.extend(t,T.prototype,e),ne.extend(t,e),t.create=function(n){return ye(Ar(r,n))},t}var b=ye(Nr);b.Axios=T;b.Cancel=g;b.CancelToken=Sr;b.isCancel=de;b.VERSION=pe.version;b.all=function(e){return Promise.all(e)};b.spread=Cr;b.isAxiosError=Rr;ae.exports=b;ae.exports.default=b;export{ae as a};
