import{r as d,j as s,a as i,u as ee,b as te,F as ae,H as re,L as F}from"./app.3662f9a8.js";import{P as l,_ as C,a as ie,t as m,S as ne,W as oe,M as le}from"./Main.dc6d9200.js";import{p as se,g as ce}from"./Helper.d9e24006.js";import{B as q}from"./Button.cafc5933.js";import{L as K}from"./Label.e4b3df94.js";import{T as de}from"./TextArea.746bf17e.js";import{l as y}from"./lodash.abca01da.js";import{_ as pe,c as J,v as he,a as U,g as ue,b as me,u as ge,S as fe}from"./useStateManager-68425271.esm.a076074c.js";import{a as Q}from"./index.5220e4e6.js";import{f as ve}from"./index.dbcb883f.js";import{i as be}from"./index.7f05af33.js";import{I as xe}from"./info-circle-fill.18fc348b.js";import"./axios.40b98a77.js";var we=["color","size","title"];function Oe(e,n){if(e==null)return{};var o=ye(e,n),a,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(o[a]=e[a]))}return o}function ye(e,n){if(e==null)return{};var o={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}var T=d.exports.forwardRef(function(e,n){var o=e.color,a=e.size,t=e.title,r=Oe(e,we);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:o,...r,children:[t?i("title",{children:t}):null,i("path",{d:"M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"}),i("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),i("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]})});T.propTypes={color:l.string,size:l.oneOfType([l.string,l.number]),title:l.string};T.defaultProps={color:"currentColor",size:"1em",title:null};var Ne=T,Pe=["color","size","title"];function ze(e,n){if(e==null)return{};var o=ke(e,n),a,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(o[a]=e[a]))}return o}function ke(e,n){if(e==null)return{};var o={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}var L=d.exports.forwardRef(function(e,n){var o=e.color,a=e.size,t=e.title,r=ze(e,Pe);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:o,...r,children:[t?i("title",{children:t}):null,i("path",{fillRule:"evenodd",d:"M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),i("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),i("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]})});L.propTypes={color:l.string,size:l.oneOfType([l.string,l.number]),title:l.string};L.defaultProps={color:"currentColor",size:"1em",title:null};var Ce=L,je=["color","size","title"];function Te(e,n){if(e==null)return{};var o=Le(e,n),a,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(o[a]=e[a]))}return o}function Le(e,n){if(e==null)return{};var o={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}var $=d.exports.forwardRef(function(e,n){var o=e.color,a=e.size,t=e.title,r=Te(e,je);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:o,...r,children:[t?i("title",{children:t}):null,i("path",{d:"M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"}),i("path",{d:"M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"})]})});$.propTypes={color:l.string,size:l.oneOfType([l.string,l.number]),title:l.string};$.defaultProps={color:"currentColor",size:"1em",title:null};var $e=$,Se=["color","size","title"];function He(e,n){if(e==null)return{};var o=Me(e,n),a,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(o[a]=e[a]))}return o}function Me(e,n){if(e==null)return{};var o={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}var S=d.exports.forwardRef(function(e,n){var o=e.color,a=e.size,t=e.title,r=He(e,Se);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:o,...r,children:[t?i("title",{children:t}):null,i("path",{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"})]})});S.propTypes={color:l.string,size:l.oneOfType([l.string,l.number]),title:l.string};S.defaultProps={color:"currentColor",size:"1em",title:null};var Ve=S,_e=["color","size","title"];function Be(e,n){if(e==null)return{};var o=We(e,n),a,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(o[a]=e[a]))}return o}function We(e,n){if(e==null)return{};var o={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}var H=d.exports.forwardRef(function(e,n){var o=e.color,a=e.size,t=e.title,r=Be(e,_e);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:o,...r,children:[t?i("title",{children:t}):null,i("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})]})});H.propTypes={color:l.string,size:l.oneOfType([l.string,l.number]),title:l.string};H.defaultProps={color:"currentColor",size:"1em",title:null};var Ae=H;function N({title:e,subtitle:n,children:o,className:a="bg-white"}){return s("div",{className:"card drop-shadow-lg relative w-72 md:w-96 dark:bg-gradient-to-br dark:from-slate-300 dark:to-slate-600 "+a,children:[s("div",{className:"card-body text-gray-500",children:[i("div",{className:"card-title font-bold text-4xl ",children:e}),i("div",{className:"z-10",children:n})]}),i("div",{className:"absolute bottom-5 right-2",children:o})]})}var Ee=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],G=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,t=String(n).toLowerCase(),r=String(a.getOptionValue(o)).toLowerCase(),p=String(a.getOptionLabel(o)).toLowerCase();return r===t||p===t},j={formatCreateLabel:function(n){return'Create "'.concat(n,'"')},isValidNewOption:function(n,o,a,t){return!(!n||o.some(function(r){return G(n,r,t)})||a.some(function(r){return G(n,r,t)}))},getNewOptionData:function(n,o){return{label:o,value:n,__isNew__:!0}}};function Ie(e){var n=e.allowCreateWhileLoading,o=n===void 0?!1:n,a=e.createOptionPosition,t=a===void 0?"last":a,r=e.formatCreateLabel,p=r===void 0?j.formatCreateLabel:r,g=e.isValidNewOption,c=g===void 0?j.isValidNewOption:g,M=e.getNewOptionData,x=M===void 0?j.getNewOptionData:M,P=e.onCreateOption,V=e.options,f=V===void 0?[]:V,w=e.onChange,h=pe(e,Ee),_=h.getOptionValue,B=_===void 0?ue:_,W=h.getOptionLabel,A=W===void 0?me:W,u=h.inputValue,E=h.isLoading,I=h.isMulti,O=h.value,D=h.name,v=d.exports.useMemo(function(){return c(u,J(O),f,{getOptionValue:B,getOptionLabel:A})?x(u,p(u)):void 0},[p,x,A,B,u,c,f,O]),X=d.exports.useMemo(function(){return(o||!E)&&v?t==="first"?[v].concat(C(f)):[].concat(C(f),[v]):f},[o,t,E,v,f]),Y=d.exports.useCallback(function(b,z){if(z.action!=="select-option")return w(b,z);var R=Array.isArray(b)?b:[b];if(R[R.length-1]===v){if(P)P(u);else{var k=x(u,u),Z={action:"create-option",name:D,option:k};w(he(I,[].concat(C(J(O)),[k]),k),Z)}return}w(b,z)},[x,u,I,D,v,P,w,O]);return U(U({},h),{},{options:X,onChange:Y})}var De=d.exports.forwardRef(function(e,n){var o=ge(e),a=Ie(o);return d.exports.createElement(fe,ie({ref:n},a))});function Re({customers:e}){const{data:n,setData:o,reset:a}=ee({phone:"",text:""}),[t,r]=d.exports.useState(!1),p=c=>{o({...n,[c.target.name]:c.target.value})},g=()=>{if(y.exports.isEmpty(n.phone)){m.info("Masukkan no tujuan...");return}else if(y.exports.isEmpty(n.text)){m.info("Masukkan isi pesan");return}else if(!y.exports.isNumber(y.exports.toNumber(n.phone))){m.info("No. Tujuan tidak valid");return}r(!0),Q.post(route("whatsapp.sendMessage"),{id:se(n.phone),message:{text:n.text}}).then(({data:c})=>{c.success?(m.success("Pesan berhasil dikirim..."),a()):m.error("Pesan gagal dikirim..."),r(!1)})};return i("div",{className:"card bg-white dark:bg-slate-900 shadow-md",children:s("div",{className:"card-body p-3",children:[i("div",{className:"card-title text-slate-600",children:"Kirim Whatsapp"}),s("div",{children:[i(K,{children:"No. Tujuan"}),i(De,{isClearable:!0,options:e,noOptionsMessage:()=>"Tidak ada pilihan",placeholder:"Pilih Tujuan...",onChange:c=>o({...n,phone:c.value}),formatCreateLabel:c=>"[ Tambah Baru ...] "+c})]}),s("div",{className:"",children:[i(K,{children:"Pesan"}),i(de,{name:"text",value:n.text,handleChange:p,placeHolder:""})]}),i("div",{className:"text-right mt-2",children:i(q,{handleClick:g,type:"button",processing:t,children:"Kirim"})})]})})}const Fe=()=>{const{data:e,auth:n}=te().props,[o,a]=d.exports.useState(!1),t=r=>{a(!0);let g=`Selamat ${ce()}, Kami informasikan bahwa tanda terima atas *${r.customer.name}* sudah selesai.`;Q.post(route("whatsapp.sendMessage"),{id:r.customer.whatsapp,message:{text:g}}).then(({data:c})=>{c.success?m.success("Pesan berhasil dikirim..."):m.error("Pesan gagal dikirim..."),a(!1)})};return s(ae,{children:[i(re,{title:"Dashboard"}),s("div",{className:"py-5 px-3",children:[s("div",{className:"bg-gradient-to-br from-teal-50 via-teal-100 to-teal-300 shadow-md py-4 px-6 h-32 rounded-2xl text-gray-500",children:[i("h3",{children:"Selamat Datang,"}),s("div",{className:"flex items-center justify-between mt-3",children:[s("div",{className:"flex items-center space-x-3",children:[i(Ae,{className:"text-2xl"}),i("h2",{className:"text-xl",children:n.user.name})]}),s(F,{href:route("receipts.create"),className:"w-11 h-11 flex items-center tooltip tooltip-bottom","data-tip":"Buat TTB baru",children:[i("span",{className:"bg-teal-600 w-9 h-9 absolute rounded-xl animate-ping opacity-100 duration-[2000]"}),i(ne,{className:" relative text-4xl text-teal-700"})]})]})]}),s("div",{className:"carousel carousel-center space-x-4 mt-5",children:[i("div",{className:"carousel-item ",children:i(N,{title:e.receipt_today,subtitle:"TTB BARU",className:" bg-gradient-to-br from-white via-green-100 to-green-300",children:i(Ce,{className:"text-7xl text-green-500 dark:text-slate-700"})})}),i("div",{className:"carousel-item ",children:i(N,{title:e.receipt_active,subtitle:"TTB AKTIF",className:"bg-gradient-to-br from-white via-sky-100 to-sky-300 ",children:i(Ne,{className:"text-7xl text-sky-500 dark:text-slate-700"})})}),i("div",{className:"carousel-item ",children:i(N,{title:e.receipt_total,subtitle:"TOTAL TTB",className:"bg-gradient-to-br from-white via-violet-100 to-violet-300",children:i($e,{className:"text-7xl text-violet-500 dark:text-slate-700"})})}),i("div",{className:"carousel-item ",children:i(N,{title:e.customer_total,subtitle:"CUSTOMER",className:"bg-gradient-to-br from-white via-amber-100 to-amber-300",children:i(Ve,{className:"text-7xl text-amber-500 dark:text-slate-700"})})})]}),s("div",{className:"my-8",children:[i("h2",{className:"text-md my-3",children:"TTB SELESAI"}),i("div",{className:"overflow-auto",children:s("table",{className:"table w-full",children:[i("thead",{children:s("tr",{children:[i("td",{children:"KODE TTB"}),i("td",{children:"TGL MASUK"}),i("td",{children:"CUSTOMER"}),i("td",{children:"TEKNISI"}),i("td",{children:"STATUS"}),i("td",{className:"text-center",children:"AKSI"})]})}),i("tbody",{children:e.receipt_status.length?e.receipt_status.map((r,p)=>s("tr",{children:[i("td",{children:r.receipt_code}),i("td",{children:ve(new Date(r.delivery_date),"dd LLLL yyyy",{locale:be})}),i("td",{children:r.customer.name}),i("td",{children:r.handle_by}),i("td",{children:r.status}),s("td",{className:"flex justify-center",children:[i(F,{href:route("receipt.show",r.receipt_code),className:"btn btn-ghost btn-circle",children:i(xe,{className:"text-xl text-sky-600"})}),r.customer.whatsapp&&i(q,{className:"btn-ghost btn-md btn-circle",processing:o,handleClick:()=>t(r),children:!o&&i(oe,{className:"text-xl text-green-700"})})]})]},p)):i("tr",{children:i("td",{colSpan:6,align:"center",children:"Tidak ada data"})})})]})})]}),i("div",{className:"mt-10",children:i(Re,{customers:e.customers})})]})]})};Fe.layout=e=>i(le,{auth:e.props.auth,errors:e.props.errors,children:e});export{Fe as default};
