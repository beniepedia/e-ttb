import{u as B,r as h,j as l,a as e,H as K,L}from"./app.b635f412.js";import{M as H}from"./Main.d4dadb9e.js";import{I as m}from"./Input.5fea4b36.js";import{B as M}from"./Button.5b4779fb.js";import{L as n}from"./Label.2246f585.js";import{T as I}from"./TextArea.da6bf4ce.js";import{S as d,I as U}from"./ImageUpload.6710b8c1.js";import"./index.173378b6.js";import"./Modal.7361ca83.js";import"./Helper.519f33e1.js";import"./useStateManager-68425271.esm.c67e4bb3.js";const A=({customers:o,auth:p,user:b,auto_number:g})=>{const v=[{label:"Printer",value:"Printer"},{label:"Cartrigde",value:"Cartridge"},{label:"Toner",value:"Toner"},{label:"Laptop",value:"Laptop"}],{data:t,setData:i,post:k,errors:a,processing:f}=B({receipt_number:g,customer_id:"",kelengkapan:"",kerusakan:"",description:"",category:"printer",barang:"",handle_by:"",photo:null}),[N,O]=h.exports.useState([{label:"Kabel USB",value:"Kabel_usb"},{label:"Kabel Listrik",value:"kabel_listrik"},{label:"Kotak",value:"kotak"},{label:"Charger Laptop",value:"charger"}]),[_,u]=h.exports.useState({image_src:"",image_data:""}),c=r=>{i(r.target.name,r.target.type==="checkbox"?r.target.checked:r.target.value)},y=r=>{let s=r.target.files[0];u({image_src:URL.createObjectURL(s),image_data:s}),i("photo",s)};function x(){u({image_src:"",image_data:""})}function C(r){let s=[];r.map(T=>{s.push(T.label)}),i("kelengkapan",s)}function S(r){r.preventDefault(),k(route("receipts"),{preserveScroll:!0,replace:!0})}return l("div",{children:[e(K,{title:"Tambah TTB Baru"}),e("div",{className:"shadow p-4",children:e("h2",{className:"font-semibold text-slate-600",children:"BUAT TTB BARU"})}),e("form",{onSubmit:S,children:l("div",{className:"m-4",children:[l("div",{className:"flex gap-4",children:[l("div",{className:"flex-none w-1/3",children:[e(n,{children:"Nomor Kartu"}),e(m,{type:"text",name:"receipt_number",disabled:!0,className:a.receipt_number&&"input-error",handleChange:c,value:t.receipt_number}),a.receipt_number&&e("div",{className:"invalid-feedback",children:a.receipt_number})]}),l("div",{className:"flex-1",children:[l(n,{children:["Customer -"," ",e(L,{href:route("customers.create"),className:"font-semibold text-blue-700 italic",only:["customers"],data:{history:"receipts"},children:"Tambah"})]}),e(d,{closeMenuOnSelect:!0,option:o,onHandleChange:r=>i({...t,customer_id:r.value})}),a.customer_id&&e("div",{className:"invalid-feedback -mb-3",children:a.customer_id})]})]}),l("div",{className:"flex gap-3 my-2",children:[l("div",{className:"w-1/3",children:[e(n,{children:"Kategori"}),e(d,{closeMenuOnSelect:!0,option:v,onHandleChange:r=>i({...t,category:r.value})}),a.category&&e("div",{className:"invalid-feedback -mb-3",children:a.category})]}),l("div",{className:"flex-1",children:[e(n,{children:"Nama / Tipe Barang"}),e(m,{value:t.barang,name:"barang",handleChange:c,placeHolder:"Masukkan nama / tipe barang ",className:a.barang&&"input-error"}),a.barang&&e("div",{className:"invalid-feedback",children:a.barang})]})]}),p.user.user_type=="kasir"&&l("div",{children:[e(n,{children:"Teknisi"}),e(d,{closeMenuOnSelect:!0,option:b,onHandleChange:r=>i({...t,handle_by:r.value})}),a.handleBy&&e("div",{className:"invalid-feedback",children:a.handleBy})]}),l("div",{className:"my-2",children:[e(n,{children:"Kelengkapan"}),e(d,{option:N,isMulti:!0,onHandleChange:C})]}),l("div",{className:"my-2",children:[e(n,{children:"Kerusakan"}),e(m,{name:"kerusakan",value:t.kerusakan,handleChange:c,className:a.kerusakan&&"input-error"}),a.kerusakan&&e("div",{className:"invalid-feedback",children:a.kerusakan})]}),l("div",{children:[e(n,{children:"Keterangan"}),e(I,{handleChange:c,name:"description",value:t.description})]}),l("div",{className:"relative mt-5",children:[e(U,{handleChange:y,src:_.image_src,onclick:x}),a.photo&&e("div",{className:"invalid-feedback absolute -bottom-4",children:a.photo})]}),e("div",{className:"mt-10",children:e(M,{type:"submit",className:"btn-success btn-block shadow hover:bg-green-300",processing:f,children:"SIMPAN"})})]})})]})};A.layout=o=>e(H,{children:o,href:route("receipts"),menu:!1});export{A as default};
