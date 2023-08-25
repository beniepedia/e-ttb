import{B as H}from"./Button.ea7c34fd.js";import{H as K}from"./Header.b6c7321e.js";import{I as m}from"./Input.ab6e4d63.js";import{L as n}from"./Label.6ad59fdd.js";import{S as d,I as B}from"./ImageUpload.8f3aa039.js";import{T as L}from"./TextArea.3c0a62d9.js";import{M}from"./Main.edf44f9b.js";import{u as I,r as p,j as l,a as e,H as O,L as U}from"./app.ff6d3df7.js";import"./Select-54ac8379.esm.dda44350.js";import"./index.4862930d.js";import"./whatsapp.f443144b.js";import"./Modal.da3140b2.js";import"./Helper.55d388d8.js";const j=({customers:o,auth:h,user:b,auto_number:g})=>{const v=[{label:"Printer",value:"Printer"},{label:"Cartrigde",value:"Cartridge"},{label:"Toner",value:"Toner"},{label:"Laptop",value:"Laptop"}],{data:t,setData:i,post:k,errors:a,processing:f}=I({receipt_number:g,customer_id:"",kelengkapan:"",kerusakan:"",description:"",category:"printer",barang:"",handle_by:"",photo:null}),[N,w]=p.exports.useState([{label:"Kabel USB",value:"Kabel_usb"},{label:"Kabel Listrik",value:"kabel_listrik"},{label:"Kotak",value:"kotak"},{label:"Charger Laptop",value:"charger"}]),[_,u]=p.exports.useState({image_src:"",image_data:""}),c=r=>{i(r.target.name,r.target.type==="checkbox"?r.target.checked:r.target.value)},y=r=>{let s=r.target.files[0];u({image_src:URL.createObjectURL(s),image_data:s}),i("photo",s)};function C(){u({image_src:"",image_data:""})}function x(r){let s=[];r.map(T=>{s.push(T.label)}),i("kelengkapan",s)}function S(r){r.preventDefault(),k(route("receipts"),{preserveScroll:!0,replace:!0})}return l("div",{children:[e(O,{title:"Tambah TTB Baru"}),e(K,{children:"Buat Tanda Terima Baru"}),e("form",{onSubmit:S,children:l("div",{className:"m-4",children:[l("div",{className:"flex gap-4",children:[l("div",{className:"flex-none w-1/3",children:[e(n,{children:"Nomor Kartu"}),e(m,{type:"text",name:"receipt_number",disabled:!0,className:a.receipt_number&&"input-error",handleChange:c,value:t.receipt_number}),a.receipt_number&&e("div",{className:"invalid-feedback",children:a.receipt_number})]}),l("div",{className:"flex-1",children:[l(n,{children:["Customer -"," ",e(U,{href:route("customers.create"),className:"font-semibold text-blue-700 italic",only:["customers"],data:{history:"receipts"},children:"Tambah"})]}),e(d,{closeMenuOnSelect:!0,option:o,onHandleChange:r=>i({...t,customer_id:r.value})}),a.customer_id&&e("div",{className:"invalid-feedback -mb-3",children:a.customer_id})]})]}),l("div",{className:"flex gap-3 my-2",children:[l("div",{className:"w-1/3",children:[e(n,{children:"Kategori"}),e(d,{closeMenuOnSelect:!0,option:v,onHandleChange:r=>i({...t,category:r.value})}),a.category&&e("div",{className:"invalid-feedback -mb-3",children:a.category})]}),l("div",{className:"flex-1",children:[e(n,{children:"Nama / Tipe Barang"}),e(m,{value:t.barang,name:"barang",handleChange:c,placeHolder:"Masukkan nama / tipe barang ",className:a.barang&&"input-error"}),a.barang&&e("div",{className:"invalid-feedback",children:a.barang})]})]}),h.user.user_type=="kasir"&&l("div",{children:[e(n,{children:"Teknisi"}),e(d,{closeMenuOnSelect:!0,option:b,onHandleChange:r=>i({...t,handle_by:r.value})}),a.handleBy&&e("div",{className:"invalid-feedback",children:a.handleBy})]}),l("div",{className:"my-2",children:[e(n,{children:"Kelengkapan"}),e(d,{option:N,isMulti:!0,onHandleChange:x})]}),l("div",{className:"my-2",children:[e(n,{children:"Kerusakan"}),e(m,{name:"kerusakan",value:t.kerusakan,handleChange:c,className:a.kerusakan&&"input-error"}),a.kerusakan&&e("div",{className:"invalid-feedback",children:a.kerusakan})]}),l("div",{children:[e(n,{children:"Keterangan"}),e(L,{handleChange:c,name:"description",value:t.description})]}),l("div",{className:"relative mt-5",children:[e(B,{handleChange:y,src:_.image_src,onclick:C}),a.photo&&e("div",{className:"invalid-feedback absolute -bottom-4",children:a.photo})]}),e("div",{className:"mt-10",children:e(H,{type:"submit",className:"btn-success btn-block shadow hover:bg-green-300",processing:f,children:"SIMPAN"})})]})})]})};j.layout=o=>e(M,{children:o,href:route("receipts"),menu:!1});export{j as default};
