import{r as d,j as l,a as r,u as te,F as T,L as G,b as ae,H as re}from"./app.6627afe2.js";import{P as s,_ as C,a as ie,t as m,W as ne,S as oe,M as le}from"./Main.d854e902.js";import{p as se,g as ce}from"./Helper.d9e24006.js";import{L as K}from"./Label.295f6220.js";import{T as de}from"./TextArea.c277a17d.js";import{B as Q}from"./Button.fc799e3f.js";import{l as O}from"./lodash.2a5b5e4a.js";import{_ as he,c as J,v as pe,a as U,g as ue,b as me,u as ge,S as ve}from"./useStateManager-68425271.esm.961eab5e.js";import{a as X}from"./index.5220e4e6.js";import{f as fe}from"./index.dbcb883f.js";import{i as be}from"./index.7f05af33.js";import{I as xe}from"./info-circle-fill.1b374aa3.js";import"./axios.40b98a77.js";var we=["color","size","title"];function ye(e,i){if(e==null)return{};var o=Oe(e,i),t,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(o[t]=e[t]))}return o}function Oe(e,i){if(e==null)return{};var o={},t=Object.keys(e),a,n;for(n=0;n<t.length;n++)a=t[n],!(i.indexOf(a)>=0)&&(o[a]=e[a]);return o}var L=d.exports.forwardRef(function(e,i){var o=e.color,t=e.size,a=e.title,n=ye(e,we);return l("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:o,...n,children:[a?r("title",{children:a}):null,r("path",{d:"M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"}),r("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),r("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]})});L.propTypes={color:s.string,size:s.oneOfType([s.string,s.number]),title:s.string};L.defaultProps={color:"currentColor",size:"1em",title:null};var Ne=L,ke=["color","size","title"];function Pe(e,i){if(e==null)return{};var o=ze(e,i),t,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(o[t]=e[t]))}return o}function ze(e,i){if(e==null)return{};var o={},t=Object.keys(e),a,n;for(n=0;n<t.length;n++)a=t[n],!(i.indexOf(a)>=0)&&(o[a]=e[a]);return o}var $=d.exports.forwardRef(function(e,i){var o=e.color,t=e.size,a=e.title,n=Pe(e,ke);return l("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:o,...n,children:[a?r("title",{children:a}):null,r("path",{fillRule:"evenodd",d:"M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),r("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),r("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]})});$.propTypes={color:s.string,size:s.oneOfType([s.string,s.number]),title:s.string};$.defaultProps={color:"currentColor",size:"1em",title:null};var Ce=$,je=["color","size","title"];function Te(e,i){if(e==null)return{};var o=Le(e,i),t,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(o[t]=e[t]))}return o}function Le(e,i){if(e==null)return{};var o={},t=Object.keys(e),a,n;for(n=0;n<t.length;n++)a=t[n],!(i.indexOf(a)>=0)&&(o[a]=e[a]);return o}var H=d.exports.forwardRef(function(e,i){var o=e.color,t=e.size,a=e.title,n=Te(e,je);return l("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:o,...n,children:[a?r("title",{children:a}):null,r("path",{d:"M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"}),r("path",{d:"M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"})]})});H.propTypes={color:s.string,size:s.oneOfType([s.string,s.number]),title:s.string};H.defaultProps={color:"currentColor",size:"1em",title:null};var $e=H,He=["color","size","title"];function Se(e,i){if(e==null)return{};var o=Ve(e,i),t,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(o[t]=e[t]))}return o}function Ve(e,i){if(e==null)return{};var o={},t=Object.keys(e),a,n;for(n=0;n<t.length;n++)a=t[n],!(i.indexOf(a)>=0)&&(o[a]=e[a]);return o}var S=d.exports.forwardRef(function(e,i){var o=e.color,t=e.size,a=e.title,n=Se(e,He);return l("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:o,...n,children:[a?r("title",{children:a}):null,r("path",{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"})]})});S.propTypes={color:s.string,size:s.oneOfType([s.string,s.number]),title:s.string};S.defaultProps={color:"currentColor",size:"1em",title:null};var Me=S,_e=["color","size","title"];function Be(e,i){if(e==null)return{};var o=We(e,i),t,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(o[t]=e[t]))}return o}function We(e,i){if(e==null)return{};var o={},t=Object.keys(e),a,n;for(n=0;n<t.length;n++)a=t[n],!(i.indexOf(a)>=0)&&(o[a]=e[a]);return o}var V=d.exports.forwardRef(function(e,i){var o=e.color,t=e.size,a=e.title,n=Be(e,_e);return l("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:o,...n,children:[a?r("title",{children:a}):null,r("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})]})});V.propTypes={color:s.string,size:s.oneOfType([s.string,s.number]),title:s.string};V.defaultProps={color:"currentColor",size:"1em",title:null};var Fe=V;function N({title:e,subtitle:i,children:o,className:t="bg-white"}){return l("div",{className:"card drop-shadow-lg relative mx-2 my-3 w-72 md:w-96 dark:bg-gradient-to-br dark:from-slate-300 dark:to-slate-600 "+t,children:[l("div",{className:"card-body text-gray-500 ",children:[r("div",{className:"card-title font-bold text-4xl ",children:e}),r("div",{className:"z-10",children:i})]}),r("div",{className:"absolute bottom-5 right-2",children:o})]})}var Ae=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],q=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,a=String(i).toLowerCase(),n=String(t.getOptionValue(o)).toLowerCase(),g=String(t.getOptionLabel(o)).toLowerCase();return n===a||g===a},j={formatCreateLabel:function(i){return'Create "'.concat(i,'"')},isValidNewOption:function(i,o,t,a){return!(!i||o.some(function(n){return q(i,n,a)})||t.some(function(n){return q(i,n,a)}))},getNewOptionData:function(i,o){return{label:o,value:i,__isNew__:!0}}};function Ie(e){var i=e.allowCreateWhileLoading,o=i===void 0?!1:i,t=e.createOptionPosition,a=t===void 0?"last":t,n=e.formatCreateLabel,g=n===void 0?j.formatCreateLabel:n,h=e.isValidNewOption,c=h===void 0?j.isValidNewOption:h,M=e.getNewOptionData,x=M===void 0?j.getNewOptionData:M,k=e.onCreateOption,_=e.options,v=_===void 0?[]:_,w=e.onChange,p=he(e,Ae),B=p.getOptionValue,W=B===void 0?ue:B,F=p.getOptionLabel,A=F===void 0?me:F,u=p.inputValue,I=p.isLoading,R=p.isMulti,y=p.value,D=p.name,f=d.exports.useMemo(function(){return c(u,J(y),v,{getOptionValue:W,getOptionLabel:A})?x(u,g(u)):void 0},[g,x,A,W,u,c,v,y]),Y=d.exports.useMemo(function(){return(o||!I)&&f?a==="first"?[f].concat(C(v)):[].concat(C(v),[f]):v},[o,a,I,f,v]),Z=d.exports.useCallback(function(b,P){if(P.action!=="select-option")return w(b,P);var E=Array.isArray(b)?b:[b];if(E[E.length-1]===f){if(k)k(u);else{var z=x(u,u),ee={action:"create-option",name:D,option:z};w(pe(R,[].concat(C(J(y)),[z]),z),ee)}return}w(b,P)},[x,u,R,D,f,k,w,y]);return U(U({},p),{},{options:Y,onChange:Z})}var Re=d.exports.forwardRef(function(e,i){var o=ge(e),t=Ie(o);return d.exports.createElement(ve,ie({ref:i},t))});function De({customers:e}){const{data:i,setData:o,reset:t}=te({phone:"",text:""}),[a,n]=d.exports.useState(!1),g=c=>{o({...i,[c.target.name]:c.target.value})},h=()=>{if(O.exports.isEmpty(i.phone)){m.info("Masukkan no tujuan...");return}else if(O.exports.isEmpty(i.text)){m.info("Masukkan isi pesan");return}else if(!O.exports.isNumber(O.exports.toNumber(i.phone))){m.info("No. Tujuan tidak valid");return}n(!0),X.post(route("whatsapp.sendMessage"),{id:se(i.phone),message:{text:i.text}}).then(({data:c})=>{c.success?(m.success("Pesan berhasil dikirim..."),t()):m.error("Pesan gagal dikirim..."),n(!1)})};return r("div",{className:"card bg-white dark:bg-slate-900 shadow-md",children:l("div",{className:"card-body p-3",children:[r("div",{className:"card-title text-slate-600",children:"Kirim Whatsapp"}),l("div",{children:[r(K,{children:"No. Tujuan"}),r(Re,{isClearable:!0,options:e,noOptionsMessage:()=>"Tidak ada pilihan",placeholder:"Pilih Tujuan...",onChange:c=>o({...i,phone:c.value}),formatCreateLabel:c=>"[ Tambah Baru ...] "+c})]}),l("div",{className:"",children:[r(K,{children:"Pesan"}),r(de,{name:"text",value:i.text,handleChange:g,placeHolder:""})]}),r("div",{className:"text-right mt-2",children:r(Q,{handleClick:h,type:"button",processing:a,children:"Kirim"})})]})})}const Ee=({data:e,processing:i,handleClick:o})=>r(T,{children:e.receipt_status.length?l(T,{children:[r("div",{className:"p-3 bg-teal-500 rounded-t-lg text-white font-semibold",children:"List TTB Selesai"}),r("div",{className:"overflow-scroll  rounded-b-lg",children:e.receipt_status.map(t=>l("div",{tabIndex:0,className:"collapse  collapse-arrow",children:[r("input",{type:"checkbox",className:"peer"}),l("div",{className:"collapse-title bg-white text-black-content peer-checked:bg-amber-200 peer-checked:text-amber-200-content",children:["No. Register : ",t.receipt_code]}),l("div",{className:"collapse-content bg-white text-white-content peer-checked:bg-amber-100 peer-checked:text-sky-300-content",children:[r("table",{className:"my-5 text-center w-full table-compact",children:l("tbody",{children:[l("tr",{children:[r("td",{children:"No. TTB"}),r("td",{children:":"}),r("td",{children:t.receipt_number})]}),l("tr",{children:[r("td",{children:"Tgl Masuk"}),r("td",{children:":"}),r("td",{children:fe(new Date(t.delivery_date),"dd LLLL yyyy",{locale:be})})]}),l("tr",{children:[r("td",{children:"Customer"}),r("td",{children:":"}),l("td",{children:[t.customer.name," "]})]}),l("tr",{children:[r("td",{children:"Teknisi"}),r("td",{children:":"}),r("td",{children:t.user.name})]}),l("tr",{children:[r("td",{children:"Status"}),r("td",{children:":"}),r("td",{children:r("div",{className:`badge badge-${t.status=="Berhasil"?"success":"error"}`,children:t.status})})]})]})}),l("div",{className:"text-right",children:[r(G,{href:route("receipt.show",t.receipt_code),className:"btn btn-ghost btn-circle mr-3",children:r(xe,{className:"text-xl text-sky-600"})}),t.customer.whatsapp&&l(Q,{className:"btn-success btn-sm",processing:i,handleClick:()=>o(t),children:[!i&&r(ne,{className:"text-xl text-green-700"}),"\xA0\xA0Kirim Pesan"]})]})]})]},t.id))})]}):""}),Ke=()=>{const{data:e,auth:i}=ae().props,[o,t]=d.exports.useState(!1),a=n=>{t(!0);let h=`Selamat ${ce()}, Kami informasikan
`;h+=`Tanda Terima atas nama ( *${n.customer.name}* )
`,h+=`No. Register Kartu ( *${n.receipt_code}* )
`,h+=`sudah selesai dan bisa diambil. Status pengerjaan *${n.status}*. Terima Kasih...\u{1F64F}\u{1F64F}\u{1F64F}

`,h+=`Info Lanjut Hub:
`,h+="\u{1F4F1} HP/WA: 08116407788",X.post(route("whatsapp.sendMessage"),{id:n.customer.whatsapp,message:{text:h}}).then(({data:c})=>{c.success?m.success("Pesan berhasil dikirim..."):m.error("Pesan gagal dikirim...")}).catch(c=>{m.error("Server whastapp down...")}).finally(()=>{t(!1)})};return l(T,{children:[r(re,{title:"Dashboard"}),l("div",{className:"py-5 px-3 lg:mx-64",children:[l("div",{className:"bg-gradient-to-br from-teal-50 via-teal-100 to-teal-300 shadow-md py-4 px-6 h-32 rounded-2xl text-gray-500",children:[r("h3",{children:"Selamat Datang,"}),l("div",{className:"flex items-center justify-between mt-3",children:[l("div",{className:"flex items-center space-x-3",children:[r(Fe,{className:"text-5xl"}),l("h2",{className:"text-xl",children:[i.user.name,l("span",{className:"block text-sm",children:["Anda login sebagai, ",i.user.user_type]})]})]}),l(G,{href:route("receipts.create"),className:"w-11 h-11 flex items-center tooltip tooltip-bottom","data-tip":"Buat TTB baru",children:[r("span",{className:"bg-teal-600 w-9 h-9 absolute rounded-xl animate-ping opacity-100 duration-[2000]"}),r(oe,{className:" relative text-4xl text-teal-700"})]})]})]}),l("div",{className:"carousel carousel-center space-x-4 mt-5",children:[r("div",{className:"carousel-item ",children:r(N,{title:e.receipt_today,subtitle:"TTB BARU",className:" bg-gradient-to-br from-white via-green-100 to-green-300",children:r(Ce,{className:"text-7xl text-green-500 dark:text-slate-700"})})}),r("div",{className:"carousel-item ",children:r(N,{title:e.receipt_active,subtitle:"TTB AKTIF",className:"bg-gradient-to-br from-white via-sky-100 to-sky-300 ",children:r(Ne,{className:"text-7xl text-sky-500 dark:text-slate-700"})})}),r("div",{className:"carousel-item ",children:r(N,{title:e.receipt_total,subtitle:"TOTAL TTB",className:"bg-gradient-to-br from-white via-violet-100 to-violet-300",children:r($e,{className:"text-7xl text-violet-500 dark:text-slate-700"})})}),r("div",{className:"carousel-item ",children:r(N,{title:e.customer_total,subtitle:"CUSTOMER",className:"bg-gradient-to-br from-white via-amber-100 to-amber-300",children:r(Me,{className:"text-7xl text-amber-500 dark:text-slate-700"})})})]}),r("div",{className:"my-8 shadow-md",children:r(Ee,{data:e,processing:o,handleClick:a})}),r("div",{className:"mt-8",children:r(De,{customers:e.customers})})]})]})};Ke.layout=e=>r(le,{auth:e.props.auth,errors:e.props.errors,children:e});export{Ke as default};
