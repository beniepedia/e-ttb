import{r as f,j as s,a as t,b as G,u as ae,d as C,F as j,H as re,L as ie}from"./app.886d159e.js";import{P as o,j as L,M as le,t as T}from"./Main.370a4399.js";import{C as ne,B as S,a as se,S as oe}from"./ButtonIsTaken.075be099.js";import{T as de}from"./TextArea.b571318e.js";import{B as M}from"./Button.53ef1b3a.js";import{L as U}from"./Label.b1943fb3.js";import{I as W}from"./Input.2b626d33.js";import{c as K}from"./Helper.78819a5b.js";import{l as ce}from"./lodash.9d013605.js";import{a as he}from"./index.fefb1b11.js";import{d as ue,g as Y,a as me,f as F}from"./index.dbcb883f.js";import{r as D,t as k,i as _}from"./index.7f05af33.js";import{P as pe}from"./pencil.6f691429.js";import"./axios.cd6af229.js";var fe=["color","size","title"];function ge(e,n){if(e==null)return{};var i=be(e,n),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(i[r]=e[r]))}return i}function be(e,n){if(e==null)return{};var i={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(n.indexOf(a)>=0)&&(i[a]=e[a]);return i}var $=f.exports.forwardRef(function(e,n){var i=e.color,r=e.size,a=e.title,l=ge(e,fe);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:i,...l,children:[a?t("title",{children:a}):null,t("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),t("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})]})});$.propTypes={color:o.string,size:o.oneOfType([o.string,o.number]),title:o.string};$.defaultProps={color:"currentColor",size:"1em",title:null};var ve=$,we=["color","size","title"];function ye(e,n){if(e==null)return{};var i=xe(e,n),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(i[r]=e[r]))}return i}function xe(e,n){if(e==null)return{};var i={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(n.indexOf(a)>=0)&&(i[a]=e[a]);return i}var I=f.exports.forwardRef(function(e,n){var i=e.color,r=e.size,a=e.title,l=ye(e,we);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:i,...l,children:[a?t("title",{children:a}):null,t("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})]})});I.propTypes={color:o.string,size:o.oneOfType([o.string,o.number]),title:o.string};I.defaultProps={color:"currentColor",size:"1em",title:null};var ke=I,Ne=["color","size","title"];function Oe(e,n){if(e==null)return{};var i=ze(e,n),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(i[r]=e[r]))}return i}function ze(e,n){if(e==null)return{};var i={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(n.indexOf(a)>=0)&&(i[a]=e[a]);return i}var R=f.exports.forwardRef(function(e,n){var i=e.color,r=e.size,a=e.title,l=Oe(e,Ne);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:i,...l,children:[a?t("title",{children:a}):null,t("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),t("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})]})});R.propTypes={color:o.string,size:o.oneOfType([o.string,o.number]),title:o.string};R.defaultProps={color:"currentColor",size:"1em",title:null};var Pe=R,je=["color","size","title"];function Le(e,n){if(e==null)return{};var i=Te(e,n),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(i[r]=e[r]))}return i}function Te(e,n){if(e==null)return{};var i={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(n.indexOf(a)>=0)&&(i[a]=e[a]);return i}var B=f.exports.forwardRef(function(e,n){var i=e.color,r=e.size,a=e.title,l=Le(e,je);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:i,...l,children:[a?t("title",{children:a}):null,t("path",{d:"M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"}),t("path",{d:"M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"})]})});B.propTypes={color:o.string,size:o.oneOfType([o.string,o.number]),title:o.string};B.defaultProps={color:"currentColor",size:"1em",title:null};var Se=B,Me=["color","size","title"];function _e(e,n){if(e==null)return{};var i=Ce(e,n),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(i[r]=e[r]))}return i}function Ce(e,n){if(e==null)return{};var i={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(n.indexOf(a)>=0)&&(i[a]=e[a]);return i}var E=f.exports.forwardRef(function(e,n){var i=e.color,r=e.size,a=e.title,l=_e(e,Me);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:i,...l,children:[a?t("title",{children:a}):null,t("path",{d:"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"})]})});E.propTypes={color:o.string,size:o.oneOfType([o.string,o.number]),title:o.string};E.defaultProps={color:"currentColor",size:"1em",title:null};var De=E,$e=["color","size","title"];function Ie(e,n){if(e==null)return{};var i=Re(e,n),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(i[r]=e[r]))}return i}function Re(e,n){if(e==null)return{};var i={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(n.indexOf(a)>=0)&&(i[a]=e[a]);return i}var A=f.exports.forwardRef(function(e,n){var i=e.color,r=e.size,a=e.title,l=Ie(e,$e);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:i,...l,children:[a?t("title",{children:a}):null,t("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})]})});A.propTypes={color:o.string,size:o.oneOfType([o.string,o.number]),title:o.string};A.defaultProps={color:"currentColor",size:"1em",title:null};var Be=A;function Ee(e,n){D(2,arguments);var i=k(e),r=k(n),a=i.getTime()-r.getTime();return a<0?-1:a>0?1:a}function J(e,n){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}function Ae(e){return J({},e)}var V=1e3*60,O=60*24,q=O*30,X=O*365;function He(e,n,i){var r,a,l;D(2,arguments);var x=me(),m=(r=(a=i==null?void 0:i.locale)!==null&&a!==void 0?a:x.locale)!==null&&r!==void 0?r:ue;if(!m.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var g=Ee(e,n);if(isNaN(g))throw new RangeError("Invalid time value");var u=J(Ae(i),{addSuffix:Boolean(i==null?void 0:i.addSuffix),comparison:g}),b,h;g>0?(b=k(n),h=k(e)):(b=k(e),h=k(n));var v=String((l=i==null?void 0:i.roundingMethod)!==null&&l!==void 0?l:"round"),p;if(v==="floor")p=Math.floor;else if(v==="ceil")p=Math.ceil;else if(v==="round")p=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var N=h.getTime()-b.getTime(),w=N/V,z=Y(h)-Y(b),y=(N-z)/V,c=i==null?void 0:i.unit,d;if(c?d=String(c):w<1?d="second":w<60?d="minute":w<O?d="hour":y<q?d="day":y<X?d="month":d="year",d==="second"){var P=p(N/1e3);return m.formatDistance("xSeconds",P,u)}else if(d==="minute"){var Q=p(w);return m.formatDistance("xMinutes",Q,u)}else if(d==="hour"){var Z=p(w/60);return m.formatDistance("xHours",Z,u)}else if(d==="day"){var ee=p(y/O);return m.formatDistance("xDays",ee,u)}else if(d==="month"){var H=p(y/q);return H===12&&c!=="month"?m.formatDistance("xYears",1,u):m.formatDistance("xMonths",H,u)}else if(d==="year"){var te=p(y/X);return m.formatDistance("xYears",te,u)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function Ue(e,n){return D(1,arguments),He(e,Date.now(),n)}function We({receipt:e}){const{auth:n}=G().props,[i,r]=f.exports.useState(!0);console.log(n);const{data:a,setData:l,patch:x,processing:m}=ae({id:e.id,repair:e.repair||"",cost:K(e.cost)||"",description:e.description||""}),g=()=>{C.Inertia.reload(),r(h=>!h)},u=h=>{l(h.target.name,h.target.name=="cost"?K(h.target.value.replace(/\D/g,"")):h.target.value)},b=()=>{x(route("receipts"),{preserveScroll:!0,onSuccess:()=>{r(!0)}})};return t("div",{children:t("div",{className:"card bg-base-100 rounded-md shadow-md mt-10 ",children:s("div",{className:"card-body p-4",children:[s("div",{children:[t(U,{children:"Perbaikan"}),t(W,{type:"text",name:"repair",value:a.repair,placeHolder:"Perbaikan atau penanganan",disabled:i,handleChange:u})]}),s("div",{children:[t(U,{children:"Biaya"}),t(W,{type:"text",name:"cost",value:a.cost,placeHolder:"Biaya perbaikan",disabled:i,handleChange:u})]}),t("h3",{className:"-mb-2 mt-3",children:"Keterangan"}),t("p",{className:"text-sm text-slate-400 italic mb-3",children:"Keterangan tidak bisa diubah jika barang sudah diambil."}),t(de,{disable:i,name:"description",value:a.description,handleChange:h=>u(h)}),!e.isTaken||n.user.user_type==="admin"?t("div",{className:"mt-3 flex justify-end",children:i?t(M,{className:"w-30 btn-sm",handleClick:g,children:"EDIT"}):s("div",{className:"flex gap-2",children:[t(M,{className:"w-30 btn-sm btn-error",handleClick:g,children:"batal"}),t(M,{className:"w-30 btn-sm btn-success",handleClick:b,processing:m,children:"SIMPAN"})]})}):""]})})})}const Ke=({text:e="Please Wait..."})=>t("div",{className:"top-0 left-0 bottom-0 fixed h-screen w-screen z-20  bg-slate-600/40 backdrop-blur-md flex justify-center items-center text-white font-bold",children:s("h3",{className:"text-lg flex",children:[t(ve,{className:"text-3xl animate-spin mr-2"}),e]})}),Ye=()=>{const{receipt:e,processing:n,auth:i,users:r}=G().props,a=f.exports.useRef(null),[l,x]=f.exports.useState(!1),[m,g]=f.exports.useState(!1),[u,b]=f.exports.useState(null),[h,v]=f.exports.useState(!1),p=c=>`${Ue(new Date(c),{locale:_})} yang lalu`,N=c=>{const d={handle_by:c.target.value,id:e.id};C.Inertia.patch(route("receipts.updatePatch"),d,{preserveScroll:!0,preserveState:!0,replace:!0,onFinish:()=>{v(!1)}})},w=async()=>{if(!e.customer.whatsapp){T.info("No. whatsapp customer tidak tersedia. Lengkapi data customer.");return}g(!0);const{status:c,data:d}=await he.post(route("receipts.send",e.id),{whatsapp:e.customer.whatsapp});g(!1),c===200?T.success("E-TTB Berhasil dikirim ke customer"):T.error("E-TTB gagal dikirim ke customer. Coba beberapa saat lagi")},z=()=>{a.current.click()},y=c=>{const d=c.target.files&&c.target.files[0];!d||C.Inertia.post(route("receipts.imageupload",e.id),{photo:d},{preserveState:!0,onBefore:()=>{x(!0)},onProgress:P=>{b(P.percentage)},onSuccess:()=>{b(null),x(!1)}})};return s(j,{children:[m&&t(Ke,{}),s("div",{className:"mt-10 mx-3 relative",children:[t(re,{title:`Detail TTB ${e.receipt_number}`}),s("div",{className:"absolute flex flex-col gap-2 right-0 -top-5 z-10",children:[t("button",{className:"btn btn-warning text-2xl btn-circle tooltip tooltip-left pl-[0.7rem] shadow-lg","data-tip":"Cetak Label",onClick:()=>window.open(route("printlabel",e.receipt_code)),children:t(Pe,{})}),t("button",{className:"btn btn-success text-2xl btn-circle tooltip tooltip-left pl-[0.7rem] shadow-lg",disabled:m,"data-tip":"Kirim E-TTB",onClick:w,children:t(Se,{})}),t("button",{className:"btn btn-error text-2xl btn-circle tooltip tooltip-left pl-[0.7rem] shadow-lg","data-tip":"Kirim link ke whatsapp",onClick:()=>{window.open("https://api.whatsapp.com/send?text="+window.location.href)},children:t(De,{})})]}),t("div",{className:"avatar flex justify-center",children:t("div",{className:"w-1/2 md:w-1/3 lg:w-1/5 rounded-full border-white border-4 shadow-lg",children:t("a",{href:"/"+e.image,target:"_blank",children:t("img",{src:"/"+e.image,alt:e.image})})})}),s("div",{className:"flex justify-center mt-3",children:[t("input",{type:"file",className:"hidden",ref:a,accept:"image/*",onChange:y}),s("button",{className:`btn btn-outline btn-dark shadow-md btn-sm ${l&&"loading"}`,disabled:l,onClick:z,children:[u&&u+"%"," Upload",t(ne,{className:"ml-3 text-xl"})]})]}),e.status==="Pending"&&s("div",{className:"alert shadow-md mt-5 flex flex-col",children:[t("h2",{className:"block",children:"Tanda Terima ini belum ditangani"}),t(S,{variant:"primary",data:{id:e.id,status:"proses",handle_by:i.user.user_type=="kasir"?e.handle_by:i.user.name},disable:n,children:"PROSES Sekarang"})]}),!e.isTaken&&e.status!="Pending"&&e.status!="Proses"?s("div",{className:"alert shadow-md mt-5 flex flex-col",children:[t("h2",{className:"block",children:"Ubah status ttb menjadi sudah diambil ?"}),t(se,{id:e.id})]}):"",e.status==="Proses"&&s("div",{className:"mt-5 flex justify-between items-center alert shadow-md ",children:[t("div",{children:t("h2",{children:"Status Pengerjaan :"})}),s("div",{className:"",children:[t("a",{href:"#modal-gagal",className:"btn btn-sm btn-error shadow-md",children:"gagal"}),t("a",{href:e.cost=="0"||ce.exports.isEmpty(e.repair)?"#confirmation":"#modal-sukses",className:"btn btn-sm btn-success shadow-md",children:"Berhasil"}),s(L,{id:"modal-gagal",title:"Perhatian!",message:"Yakin ingin merubah status pengerjaan Batal / Gagal ?",children:[t("a",{href:"#",className:"btn btn-sm",children:"tidak"}),t(S,{className:"block shadow-md",children:"Yakin",data:{id:e.id,status:"gagal"}})]}),t(L,{id:"confirmation",title:"Perhatian!",message:"Keterangan perbaikan atau biaya perbaikan belum diisi...",children:t("a",{href:"#",className:"btn btn-ghost",children:"TUTUP"})}),s(L,{id:"modal-sukses",title:"Perhatian!",message:"Yakin ingin merubah status pengerjaan Sukses / Berhasil ?",children:[t("a",{href:"#",className:"btn btn-sm",children:"tidak"}),t(S,{className:"block shadow-md",children:"Yakin",data:{id:e.id,status:"berhasil"}})]})]})]}),s("div",{className:"mt-8",children:[t("div",{className:"overflow-x-scroll",children:t("table",{className:"table text-left table-zebra table-compact  w-full rounded-lg shadow-md",children:s("tbody",{className:"",children:[s("tr",{children:[t("td",{children:"No Kartu "}),t("td",{children:":"}),s("td",{className:"font-semibold",children:[e.receipt_number," -"," ",s("a",{href:`/images/ttb/ttb_${e.receipt_code}.png`,target:"_blank",className:"tooltip tooltip-bottom text-sky-600","data-tip":"Kartu Tanda Terima Barang",children:["( ",e.receipt_code," )"]})]})]}),s("tr",{children:[t("td",{children:"Tanggal Masuk"}),t("td",{children:":"}),s("td",{children:[F(new Date(e.delivery_date),"dd LLLL yyyy",{locale:_})," ",t("br",{})," ",s("span",{className:"italic text-slate-500",children:["( ",p(e.delivery_date)," ",")"]})]})]}),e.isTaken&&s("tr",{children:[t("td",{children:"Tanggal Ambil"}),t("td",{children:":"}),s("td",{children:[F(new Date(e.pickup_date),"dd LLLL yyyy",{locale:_}),t("br",{}),s("span",{className:"italic text-slate-500",children:["("," ",p(e.pickup_date)," ",")"]})]})]}),s("tr",{children:[t("td",{children:"Customer"}),t("td",{children:":"}),t("td",{className:"hover:bg-blue-300",children:s(ie,{href:route("customer.show",e.customer.id),className:"flex items-center gap-2 tooltip tooltip-bottom","data-tip":"Detail Customer",children:[e.customer.name,t(ke,{})]})})]}),s("tr",{children:[t("td",{children:"Penerima"}),t("td",{children:":"}),t("td",{className:"capitalize",children:e.user.name})]}),e.handle_by!=""&&s("tr",{children:[t("td",{children:"Teknisi"}),t("td",{children:":"}),t("td",{className:"flex gap-3 items-center",children:h?s(j,{children:[s("select",{name:"",id:"",className:"select select-sm focus:outline-none",onChange:c=>N(c),children:[t("option",{value:"",disabled:!0,selected:!0,children:"Pilih teknisi"}),r.map((c,d)=>t("option",{value:c.name,children:c.name}))]}),t("button",{onClick:()=>v(!1),children:t(Be,{})})]}):s(j,{children:[e.handle_by,i.user.user_type=="kasir"||i.user.user_type=="admin"&&t("button",{onClick:()=>v(!0),children:t(pe,{})})]})})]}),s("tr",{children:[t("td",{children:"Barang"}),t("td",{children:":"}),t("td",{children:s("p",{className:"capitalize",children:[e.category," -"," ",e.barang]})})]}),s("tr",{children:[t("td",{children:"Kelengkapan"}),t("td",{children:":"}),t("td",{children:e.kelengkapan?e.kelengkapan.join(" | "):"Tidak ada"})]}),s("tr",{children:[t("td",{children:"Kerusakan"}),t("td",{children:":"}),t("td",{children:e.kerusakan})]}),s("tr",{children:[t("td",{children:"Status "}),t("td",{children:":"}),t("td",{children:s("div",{className:"flex gap-2",children:[t(oe,{status:e.status,className:"rounded-full px-3 py-1 dark:text-slate-700"}),e.isTaken&&t("div",{className:"rounded-full px-3 py-1 bg-success dark:text-slate-700",children:"Sudah Diambil"})]})})]})]})})}),t(We,{receipt:e})]})]})]})};Ye.layout=e=>t(le,{auth:e.props.auth,children:e,menu:!1,href:route("receipts")});export{Ye as default};
