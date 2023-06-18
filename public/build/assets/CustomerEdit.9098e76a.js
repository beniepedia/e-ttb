import{u as x,r as c,j as t,F as y,a as e,H as k,L as I}from"./app.886d159e.js";import{M as S}from"./Main.370a4399.js";import{I as h}from"./Input.2b626d33.js";import{L as m}from"./Label.b1943fb3.js";import{T as E}from"./TextArea.b571318e.js";import{B as F}from"./Button.53ef1b3a.js";import{C as H}from"./Checkbox.bd770e30.js";import{p as i}from"./Helper.78819a5b.js";import"./axios.cd6af229.js";import"./index.7f05af33.js";const T=o=>{const{customer:r}=o,{data:n,setData:p,post:u,processing:f,errors:s,reset:N,clearErrors:v}=x({name:r.name,phone:r.phone,whatsapp:r.whatsapp,address:r.address}),[d,b]=c.exports.useState(!1),l=a=>{p(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},w=a=>{a.preventDefault(),u(route("customer.edit",r.id),{onSuccess:()=>{g()}})},g=()=>{v(),N()};c.exports.useEffect(()=>{if(d){let a=n.phone;a=i(a),p("whatsapp",a)}else p("whatsapp",r.whatsapp)},[n.phone,d]);function C(a){return!a}return t(y,{children:[e(k,{title:"Tambah Customer"}),e("div",{className:"bg-slate-300 p-4",children:e("h2",{className:"font-semibold text-slate-600",children:"EDIT CUSTOMER"})}),e("div",{className:"my-5 ",children:e("form",{onSubmit:w,noValidate:!0,children:t("div",{className:"px-4",children:[t("div",{children:[e(m,{value:"Nama Customer",forInput:"name"}),e(h,{type:"text",name:"name",value:n.name,autoComplete:"name",isFocused:!0,handleChange:l,className:s.name&&"input-error"}),s.name&&e("div",{className:"invalid-feedback",children:s.name})]}),t("div",{className:"mt-2",children:[e(m,{value:"No Handphone",forInput:"phone"}),e(h,{type:"number",name:"phone",value:n.phone,autoComplete:"phone",handleChange:l,className:s.phone&&"input-error"}),s.phone&&e("div",{className:"invalid-feedback",children:s.phone})]}),e("div",{className:"mt-4",children:t("label",{className:"flex items-center",children:[e(H,{name:"waCheck",handleChange:()=>b(C)}),e("span",{className:"ml-3",children:"No Handphone sama dengan Whatsapp ?"})]})}),t("div",{className:"mt-2",children:[e(m,{value:"No WhatsApp",forInput:"whatsapp"}),e(h,{type:"number",name:"whatsapp",value:i(n.whatsapp),autoComplete:"whatsapp",disabled:!!d,handleChange:l,className:s.whatsapp&&"input-error"}),s.whatsapp&&e("div",{className:"invalid-feedback",children:s.whatsapp})]}),t("div",{className:"mt-2",children:[e(m,{value:"Alamat",forInput:"address"}),e(E,{name:"address",value:n.address,handleChange:l})]}),t("div",{className:"mt-5 grid grid-flow-col gap-3",children:[e(I,{href:route("customers"),className:"btn w-full shadow-md",children:"Cancel"}),e(F,{type:"submit",processing:f,className:"btn-success w-full mb-3 shadow-md",children:"Update"})]})]})})})]})};T.layout=o=>e(S,{auth:o.props.auth,errors:o.props.errors,children:o,href:route(route().params.history?route().params.history+".edit":"customers"),menu:!1});export{T as default};