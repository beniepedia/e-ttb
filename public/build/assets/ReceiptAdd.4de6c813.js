import{u as B,r as h,j as l,a as e,H as K,L}from"./app.886d159e.js";import{M as H}from"./Main.370a4399.js";import{I as o}from"./Input.2b626d33.js";import{B as M}from"./Button.53ef1b3a.js";import{a as m,S as I,I as U}from"./ImageUpload.3e18220c.js";import{L as t}from"./Label.b1943fb3.js";import{T as A}from"./TextArea.b571318e.js";import"./useStateManager-68425271.esm.8336b7ac.js";const j=({customers:d,auth:p,user:b,auto_number:g})=>{const v=[{label:"Printer",value:"Printer"},{label:"Cartrigde",value:"Cartridge"},{label:"Toner",value:"Toner"},{label:"Laptop",value:"Laptop"}],{data:i,setData:s,post:k,errors:r,processing:f}=B({receipt_number:g,customer_id:"",kelengkapan:"",kerusakan:"",description:"",category:"printer",barang:"",handle_by:"",photo:null}),[N,O]=h.exports.useState([{label:"Kabel USB",value:"Kabel_usb"},{label:"Kabel Listrik",value:"kabel_listrik"},{label:"Kotak",value:"kotak"},{label:"Charger Laptop",value:"charger"}]),[_,u]=h.exports.useState({image_src:"",image_data:""}),c=a=>{s(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},y=a=>{let n=a.target.files[0];u({image_src:URL.createObjectURL(n),image_data:n}),s("photo",n)};function x(){u({image_src:"",image_data:""})}function C(a){let n=[];a.map(T=>{n.push(T.label)}),s("kelengkapan",n)}function S(a){a.preventDefault(),k(route("receipts"),{preserveScroll:!0,replace:!0})}return l("div",{children:[e(K,{title:"Tambah TTB Baru"}),e("div",{className:"bg-slate-300 p-4",children:e("h2",{className:"font-semibold text-slate-600",children:"BUAT TTB BARU"})}),e("form",{onSubmit:S,children:l("div",{className:"m-4",children:[l("div",{className:"flex gap-4",children:[l("div",{className:"flex-none w-1/3",children:[e(t,{children:"Nomor Kartu"}),e(o,{type:"text",name:"receipt_number",disabled:!0,className:r.receipt_number&&"input-error",handleChange:c,value:i.receipt_number}),r.receipt_number&&e("div",{className:"invalid-feedback",children:r.receipt_number})]}),l("div",{className:"flex-1",children:[l(t,{children:["Customer -"," ",e(L,{href:route("customers.create"),className:"font-semibold text-blue-700 italic",only:["customers"],data:{history:"receipts"},children:"Tambah"})]}),e(m,{closeMenuOnSelect:!0,option:d,onHandleChange:a=>s({...i,customer_id:a.value})}),r.customer_id&&e("div",{className:"invalid-feedback -mb-3",children:r.customer_id})]})]}),l("div",{className:"flex gap-3 my-2",children:[l("div",{className:"w-1/3",children:[e(t,{children:"Kategori"}),e(I,{name:"category",handleChange:c,children:v.map((a,n)=>e("option",{value:a.value,children:a.label},n))})]}),l("div",{className:"flex-1",children:[e(t,{children:"Nama / Tipe Barang"}),e(o,{value:i.barang,name:"barang",handleChange:c,placeHolder:"Masukkan nama / tipe barang ",className:r.barang&&"input-error"}),r.barang&&e("div",{className:"invalid-feedback",children:r.barang})]})]}),p.user.user_type=="kasir"&&l("div",{children:[e(t,{children:"Teknisi"}),e(m,{closeMenuOnSelect:!0,option:b,onHandleChange:a=>s({...i,handle_by:a.value})}),r.handleBy&&e("div",{className:"invalid-feedback",children:r.handleBy})]}),l("div",{className:"my-2",children:[e(t,{children:"Kelengkapan"}),e(m,{option:N,isMulti:!0,onHandleChange:C})]}),l("div",{className:"my-2",children:[e(t,{children:"Kerusakan"}),e(o,{name:"kerusakan",value:i.kerusakan,handleChange:c,className:r.kerusakan&&"input-error"}),r.kerusakan&&e("div",{className:"invalid-feedback",children:r.kerusakan})]}),l("div",{children:[e(t,{children:"Keterangan"}),e(A,{handleChange:c,name:"description",value:i.description})]}),l("div",{className:"relative mt-5",children:[e(U,{handleChange:y,src:_.image_src,onclick:x}),r.photo&&e("div",{className:"invalid-feedback absolute -bottom-4",children:r.photo})]}),e("div",{className:"mt-10",children:e(M,{type:"submit",className:"btn-success btn-block shadow hover:bg-green-300",processing:f,children:"SIMPAN"})})]})})]})};j.layout=d=>e(H,{auth:d.props.auth,children:d,href:route("receipts"),menu:!1});export{j as default};
