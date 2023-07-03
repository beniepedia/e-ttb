import{r as c,j as l,a,F as T,L as q,e as Z,u as ee,t as f,b as te,H as ae}from"./app.b635f412.js";import{B as G}from"./Button.5b4779fb.js";import{f as re,i as ie}from"./index.19391a32.js";import{I as ne}from"./info-circle-fill.8c4e6ce5.js";import{W as oe}from"./whatsapp.23ed22f3.js";import{L as F}from"./Label.2246f585.js";import{T as le}from"./TextArea.da6bf4ce.js";import{p as se}from"./Helper.519f33e1.js";import{l as O}from"./lodash.b4159a9f.js";import{_ as P,a as ce,S as de,b as he,M as pe}from"./Main.d4dadb9e.js";import{_ as ue,c as J,v as me,a as K,g as ge,b as ve,u as fe,S as be}from"./useStateManager-68425271.esm.c67e4bb3.js";import{a as xe}from"./index.4a432e17.js";import{P as s}from"./index.173378b6.js";import"./Modal.7361ca83.js";var we=["color","size","title"];function ye(e,i){if(e==null)return{};var o=Oe(e,i),r,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(o[r]=e[r]))}return o}function Oe(e,i){if(e==null)return{};var o={},r=Object.keys(e),t,n;for(n=0;n<r.length;n++)t=r[n],!(i.indexOf(t)>=0)&&(o[t]=e[t]);return o}var j=c.exports.forwardRef(function(e,i){var o=e.color,r=e.size,t=e.title,n=ye(e,we);return l("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:o,...n,children:[t?a("title",{children:t}):null,a("path",{d:"M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"}),a("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),a("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]})});j.propTypes={color:s.string,size:s.oneOfType([s.string,s.number]),title:s.string};j.defaultProps={color:"currentColor",size:"1em",title:null};var Ne=j,ke=["color","size","title"];function Ce(e,i){if(e==null)return{};var o=ze(e,i),r,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(o[r]=e[r]))}return o}function ze(e,i){if(e==null)return{};var o={},r=Object.keys(e),t,n;for(n=0;n<r.length;n++)t=r[n],!(i.indexOf(t)>=0)&&(o[t]=e[t]);return o}var $=c.exports.forwardRef(function(e,i){var o=e.color,r=e.size,t=e.title,n=Ce(e,ke);return l("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:o,...n,children:[t?a("title",{children:t}):null,a("path",{fillRule:"evenodd",d:"M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),a("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),a("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]})});$.propTypes={color:s.string,size:s.oneOfType([s.string,s.number]),title:s.string};$.defaultProps={color:"currentColor",size:"1em",title:null};var Pe=$,Le=["color","size","title"];function Te(e,i){if(e==null)return{};var o=je(e,i),r,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(o[r]=e[r]))}return o}function je(e,i){if(e==null)return{};var o={},r=Object.keys(e),t,n;for(n=0;n<r.length;n++)t=r[n],!(i.indexOf(t)>=0)&&(o[t]=e[t]);return o}var H=c.exports.forwardRef(function(e,i){var o=e.color,r=e.size,t=e.title,n=Te(e,Le);return l("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:o,...n,children:[t?a("title",{children:t}):null,a("path",{d:"M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"}),a("path",{d:"M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"})]})});H.propTypes={color:s.string,size:s.oneOfType([s.string,s.number]),title:s.string};H.defaultProps={color:"currentColor",size:"1em",title:null};var $e=H,He=["color","size","title"];function Se(e,i){if(e==null)return{};var o=Ve(e,i),r,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(o[r]=e[r]))}return o}function Ve(e,i){if(e==null)return{};var o={},r=Object.keys(e),t,n;for(n=0;n<r.length;n++)t=r[n],!(i.indexOf(t)>=0)&&(o[t]=e[t]);return o}var S=c.exports.forwardRef(function(e,i){var o=e.color,r=e.size,t=e.title,n=Se(e,He);return l("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:o,...n,children:[t?a("title",{children:t}):null,a("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})]})});S.propTypes={color:s.string,size:s.oneOfType([s.string,s.number]),title:s.string};S.defaultProps={color:"currentColor",size:"1em",title:null};var Me=S;function N({title:e,subtitle:i,children:o,className:r="bg-white"}){return l("div",{className:"card drop-shadow-lg relative mx-2 my-3 w-72 md:w-96 dark:bg-gradient-to-br dark:from-slate-300 dark:to-slate-600 "+r,children:[l("div",{className:"card-body text-gray-500 ",children:[a("div",{className:"card-title font-bold text-4xl ",children:e}),a("div",{className:"z-10",children:i})]}),a("div",{className:"absolute bottom-5 right-2",children:o})]})}const _e=({...e})=>{const[i,o]=c.exports.useState(!1),r=t=>{o(!0),Z.Inertia.post(route("receipts.confirmation",t),{},{onFinish:n=>{o(!1)},onError:n=>{console.log(n)},replace:!0})};return a(T,{children:e.receipt_status.length?l(T,{children:[a("div",{className:"p-3 dark:bg-teal-700 bg-teal-500 rounded-t-lg text-white font-semibold",children:"List TTB Selesai"}),a("div",{className:"overflow-x-auto  ",children:e.receipt_status.map(t=>l("div",{tabIndex:0,className:"collapse  collapse-arrow ",children:[a("input",{type:"checkbox",className:"peer"}),l("div",{className:"collapse-title dark:bg-slate-700 bg-white text-black-content peer-checked:dark:bg-slate-800 peer-checked:bg-amber-200 peer-checked:text-amber-200-content font-semibold",children:["Customer - ",t.customer.name," ",a("span",{className:`badge badge-${t.status=="Berhasil"?"success":"error"}`,children:t.status})]}),l("div",{className:"collapse-content dark:bg-slate-600 bg-white text-white-content peer-checked:dark:bg-slate-600 peer-checked:bg-amber-100 peer-checked:text-sky-300-content",children:[a("table",{className:"my-5 w-full table-center table-compact",children:l("tbody",{children:[l("tr",{children:[a("td",{children:"No. Register"}),a("td",{children:":"}),a("td",{children:t.receipt_code})]}),l("tr",{children:[a("td",{children:"No. TTB"}),a("td",{children:":"}),a("td",{children:t.receipt_number})]}),l("tr",{children:[a("td",{children:"Tgl Masuk"}),a("td",{children:":"}),a("td",{children:re(new Date(t.delivery_date),"dd LLLL yyyy",{locale:ie})})]}),l("tr",{children:[a("td",{children:"Customer"}),a("td",{children:":"}),l("td",{children:[t.customer.name," "]})]}),l("tr",{children:[a("td",{children:"Teknisi"}),a("td",{children:":"}),a("td",{children:t.user.name})]}),l("tr",{children:[a("td",{children:"Status"}),a("td",{children:":"}),a("td",{children:a("div",{className:`badge badge-${t.status=="Berhasil"?"success":"error"}`,children:t.status})})]})]})}),l("div",{className:"text-right",children:[a(q,{href:route("receipt.show",t.receipt_code),className:"btn btn-ghost btn-circle mr-3",children:a(ne,{className:"text-xl text-sky-600"})}),t.customer.whatsapp&&l(G,{className:"btn-success btn-sm",processing:i,handleClick:()=>r(t.id),children:[!i&&a(oe,{className:"text-xl text-green-700"}),"\xA0\xA0Konfirmasi"]})]})]})]},t.id))})]}):""})};var Be=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],U=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,t=String(i).toLowerCase(),n=String(r.getOptionValue(o)).toLowerCase(),u=String(r.getOptionLabel(o)).toLowerCase();return n===t||u===t},L={formatCreateLabel:function(i){return'Create "'.concat(i,'"')},isValidNewOption:function(i,o,r,t){return!(!i||o.some(function(n){return U(i,n,t)})||r.some(function(n){return U(i,n,t)}))},getNewOptionData:function(i,o){return{label:o,value:i,__isNew__:!0}}};function We(e){var i=e.allowCreateWhileLoading,o=i===void 0?!1:i,r=e.createOptionPosition,t=r===void 0?"last":r,n=e.formatCreateLabel,u=n===void 0?L.formatCreateLabel:n,b=e.isValidNewOption,d=b===void 0?L.isValidNewOption:b,V=e.getNewOptionData,x=V===void 0?L.getNewOptionData:V,k=e.onCreateOption,M=e.options,m=M===void 0?[]:M,w=e.onChange,h=ue(e,Be),_=h.getOptionValue,B=_===void 0?ge:_,W=h.getOptionLabel,A=W===void 0?ve:W,p=h.inputValue,D=h.isLoading,I=h.isMulti,y=h.value,R=h.name,g=c.exports.useMemo(function(){return d(p,J(y),m,{getOptionValue:B,getOptionLabel:A})?x(p,u(p)):void 0},[u,x,A,B,p,d,m,y]),Q=c.exports.useMemo(function(){return(o||!D)&&g?t==="first"?[g].concat(P(m)):[].concat(P(m),[g]):m},[o,t,D,g,m]),X=c.exports.useCallback(function(v,C){if(C.action!=="select-option")return w(v,C);var E=Array.isArray(v)?v:[v];if(E[E.length-1]===g){if(k)k(p);else{var z=x(p,p),Y={action:"create-option",name:R,option:z};w(me(I,[].concat(P(J(y)),[z]),z),Y)}return}w(v,C)},[x,p,I,R,g,k,w,y]);return K(K({},h),{},{options:Q,onChange:X})}var Ae=c.exports.forwardRef(function(e,i){var o=fe(e),r=We(o);return c.exports.createElement(be,ce({ref:i},r))});function De({customers:e}){const{data:i,setData:o,reset:r}=ee({phone:"",text:""}),[t,n]=c.exports.useState(!1),u=d=>{o({...i,[d.target.name]:d.target.value})},b=()=>{if(O.exports.isEmpty(i.phone)){f.info("Masukkan no tujuan...");return}else if(O.exports.isEmpty(i.text)){f.info("Masukkan isi pesan");return}else if(!O.exports.isNumber(O.exports.toNumber(i.phone))){f.info("No. Tujuan tidak valid");return}n(!0),xe.post(route("whatsapp.sendMessage"),{to:se(i.phone),text:i.text}).then(({data:d})=>{f.success("Pesan berhasil dikirim..."),r()}).catch(()=>{f.error("Pesan gagal dikirim. silahkan coba lagi.")}).finally(()=>{n(!1)})};return a("div",{className:"card bg-white dark:bg-slate-900 shadow-md",children:l("div",{className:"card-body py-9 px-5",children:[a("div",{className:"card-title text-slate-600",children:"Kirim Whatsapp"}),l("div",{children:[a(F,{children:"No. Tujuan"}),a(Ae,{isClearable:!0,options:e,noOptionsMessage:()=>"Tidak ada pilihan",placeholder:"Pilih Tujuan...",onChange:d=>o({...i,phone:d.value}),formatCreateLabel:d=>"[ Tambah Baru ...] "+d})]}),l("div",{className:"",children:[a(F,{children:"Pesan"}),a(le,{name:"text",value:i.text,className:"textarea-bordered h-48",handleChange:u,placeHolder:"Masukkan pesan whatsapp yang akan dikirim"})]}),a("div",{className:"text-right mt-2",children:a(G,{handleClick:b,type:"button",className:"btn-success",processing:t,children:"Kirim"})})]})})}const Ie=()=>{const{data:e,auth:i}=te().props;return l(T,{children:[a(ae,{children:a("title",{children:"Dashboard"})}),l("div",{className:"py-5 px-3",children:[l("div",{className:"bg-gradient-to-br from-teal-50 via-teal-100 to-teal-300 shadow py-4 px-6 h-32 rounded-2xl text-gray-500",children:[a("h3",{children:"Selamat Datang,"}),l("div",{className:"flex items-center justify-between mt-3",children:[l("div",{className:"flex items-center space-x-3",children:[a(Me,{className:"text-5xl"}),l("h2",{className:"text-xl",children:[i.user.name,l("span",{className:"block text-sm",children:["Anda login sebagai,"," ",a("span",{className:"capitalize",children:i.user.user_type})]})]})]}),l(q,{href:route("receipts.create"),className:"w-11 h-11 flex items-center tooltip tooltip-bottom","data-tip":"Buat TTB baru",children:[a("span",{className:"bg-teal-600 w-9 h-9 absolute rounded-xl animate-ping opacity-100 duration-[2000]"}),a(de,{className:" relative text-4xl text-teal-700"})]})]})]}),l("div",{className:"carousel carousel-center space-x-4 mt-5",children:[a("div",{className:"carousel-item ",children:a(N,{title:e.receipt_today,subtitle:"TTB BARU",className:" bg-gradient-to-br from-white via-green-100 to-green-300",children:a(Pe,{className:"text-7xl text-green-500 dark:text-slate-700"})})}),a("div",{className:"carousel-item ",children:a(N,{title:e.receipt_active,subtitle:"TTB AKTIF",className:"bg-gradient-to-br from-white via-sky-100 to-sky-300 ",children:a(Ne,{className:"text-7xl text-sky-500 dark:text-slate-700"})})}),a("div",{className:"carousel-item ",children:a(N,{title:e.receipt_total,subtitle:"TOTAL TTB",className:"bg-gradient-to-br from-white via-violet-100 to-violet-300",children:a($e,{className:"text-7xl text-violet-500 dark:text-slate-700"})})}),a("div",{className:"carousel-item ",children:a(N,{title:e.customer_total,subtitle:"CUSTOMER",className:"bg-gradient-to-br from-white via-amber-100 to-amber-300",children:a(he,{className:"text-7xl text-amber-500 dark:text-slate-700"})})})]}),a("div",{className:"my-8 shadow",children:a(_e,{...e})}),a("div",{className:"mt-8",children:a(De,{customers:e.customers})})]})]})};Ie.layout=e=>a(pe,{errors:e.props.errors,children:e});export{Ie as default};
