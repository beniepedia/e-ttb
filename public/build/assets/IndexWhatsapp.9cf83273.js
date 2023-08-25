import{H as R}from"./Header.b6c7321e.js";import{p as q}from"./Helper.55d388d8.js";import{r as m,u as z,a as r,j as x,t as h,b as G,F as J,H as Q}from"./app.ff6d3df7.js";import{a as U}from"./index.f8d79339.js";import{l as C}from"./lodash.04b2687b.js";import{j as k,_ as X,M as Y}from"./Main.edf44f9b.js";import{a as Z,e as D,v as ee,b as H,g as ae,f as te,u as re,S as oe}from"./Select-54ac8379.esm.dda44350.js";import{B as ne}from"./Button.ea7c34fd.js";import{L as F}from"./Label.6ad59fdd.js";import{T as ie}from"./TextArea.3c0a62d9.js";import"./whatsapp.f443144b.js";import"./Modal.da3140b2.js";import"./index.4862930d.js";var se=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],B=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=String(e).toLowerCase(),n=String(o.getOptionValue(t)).toLowerCase(),u=String(o.getOptionLabel(t)).toLowerCase();return n===i||u===i},P={formatCreateLabel:function(e){return'Create "'.concat(e,'"')},isValidNewOption:function(e,t,o,i){return!(!e||t.some(function(n){return B(e,n,i)})||o.some(function(n){return B(e,n,i)}))},getNewOptionData:function(e,t){return{label:t,value:e,__isNew__:!0}}};function le(a){var e=a.allowCreateWhileLoading,t=e===void 0?!1:e,o=a.createOptionPosition,i=o===void 0?"last":o,n=a.formatCreateLabel,u=n===void 0?P.formatCreateLabel:n,f=a.isValidNewOption,s=f===void 0?P.isValidNewOption:f,y=a.getNewOptionData,v=y===void 0?P.getNewOptionData:y,N=a.onCreateOption,$=a.options,d=$===void 0?[]:$,b=a.onChange,l=Z(a,se),S=l.getOptionValue,M=S===void 0?ae:S,V=l.getOptionLabel,j=V===void 0?te:V,p=l.inputValue,_=l.isLoading,T=l.isMulti,O=l.value,W=l.name,c=m.exports.useMemo(function(){return s(p,D(O),d,{getOptionValue:M,getOptionLabel:j})?v(p,u(p)):void 0},[u,v,j,M,p,s,d,O]),E=m.exports.useMemo(function(){return(t||!_)&&c?i==="first"?[c].concat(k(d)):[].concat(k(d),[c]):d},[t,i,_,c,d]),K=m.exports.useCallback(function(g,L){if(L.action!=="select-option")return b(g,L);var A=Array.isArray(g)?g:[g];if(A[A.length-1]===c){if(N)N(p);else{var w=v(p,p),I={action:"create-option",name:W,option:w};b(ee(T,[].concat(k(D(O)),[w]),w),I)}return}b(g,L)},[v,p,T,W,c,N,b,O]);return H(H({},l),{},{options:E,onChange:K})}var pe=m.exports.forwardRef(function(a,e){var t=re(a),o=le(t);return m.exports.createElement(oe,X({ref:e},o))});function ue({customers:a}){const{data:e,setData:t,reset:o}=z({phone:"",text:""}),[i,n]=m.exports.useState(!1),u=s=>{t({...e,[s.target.name]:s.target.value})},f=()=>{if(C.exports.isEmpty(e.phone)){h.info("Masukkan no tujuan...");return}else if(C.exports.isEmpty(e.text)){h.info("Masukkan isi pesan");return}else if(!C.exports.isNumber(C.exports.toNumber(e.phone))){h.info("No. Tujuan tidak valid");return}n(!0),U.post(route("whatsapp.sendMessage"),{to:q(e.phone),text:e.text}).then(({data:s})=>{h.success("Pesan berhasil dikirim..."),o()}).catch(()=>{h.error("Pesan gagal dikirim. silahkan coba lagi.")}).finally(()=>{n(!1)})};return r("div",{className:"card bg-white dark:bg-slate-700 shadow-md rounded-lg border",children:x("div",{className:"card-body py-9 px-5",children:[r("div",{className:"card-title text-slate-600",children:"Kirim Whatsapp"}),x("div",{children:[r(F,{children:"No. Tujuan"}),r(pe,{isClearable:!0,options:a,noOptionsMessage:()=>"Tidak ada pilihan",placeholder:"Pilih Tujuan...",onChange:s=>t({...e,phone:s.value}),formatCreateLabel:s=>"[ Tambah Baru ...] "+s})]}),x("div",{className:"",children:[r(F,{children:"Pesan"}),r(ie,{name:"text",value:e.text,className:"textarea-bordered h-48",handleChange:u,placeHolder:"Masukkan pesan whatsapp yang akan dikirim"})]}),r("div",{className:"text-right mt-2",children:r(ne,{handleClick:f,type:"button",className:"btn-success",processing:i,children:"Kirim"})})]})})}const de=()=>{const{data:a}=G().props;return x(J,{children:[r(Q,{children:r("title",{children:"Kirim pesan whastapp"})}),r(R,{children:"WhatsApp"}),r("div",{className:"my-8 px-4",children:r(ue,{customers:a.customers})})]})};de.layout=a=>r(Y,{children:a});export{de as default};
