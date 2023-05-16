import{r as v,j as c,a,u as S,H as L,L as B}from"./app.886d159e.js";import{P as d,M}from"./Main.370a4399.js";import{I as g}from"./Input.2b626d33.js";import{B as I}from"./Button.53ef1b3a.js";import{S as N,a as A,I as K}from"./ImageUpload.3e18220c.js";import{L as p}from"./Label.b1943fb3.js";import{T as R}from"./TextArea.b571318e.js";import"./useStateManager-68425271.esm.8336b7ac.js";var $=["color","size","title"];function U(e,i){if(e==null)return{};var n=W(e,i),t,r;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function W(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,l;for(l=0;l<t.length;l++)r=t[l],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var f=v.exports.forwardRef(function(e,i){var n=e.color,t=e.size,r=e.title,l=U(e,$);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:n,...l,children:[r?a("title",{children:r}):null,a("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"})]})});f.propTypes={color:d.string,size:d.oneOfType([d.string,d.number]),title:d.string};f.defaultProps={color:"currentColor",size:"1em",title:null};var D=f,F=["color","size","title"];function H(e,i){if(e==null)return{};var n=E(e,i),t,r;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function E(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,l;for(l=0;l<t.length;l++)r=t[l],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var b=v.exports.forwardRef(function(e,i){var n=e.color,t=e.size,r=e.title,l=H(e,F);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:n,...l,children:[r?a("title",{children:r}):null,a("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"})]})});b.propTypes={color:d.string,size:d.oneOfType([d.string,d.number]),title:d.string};b.defaultProps={color:"currentColor",size:"1em",title:null};var q=b,Z=["color","size","title"];function G(e,i){if(e==null)return{};var n=J(e,i),t,r;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function J(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,l;for(l=0;l<t.length;l++)r=t[l],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var y=v.exports.forwardRef(function(e,i){var n=e.color,t=e.size,r=e.title,l=G(e,Z);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:n,...l,children:[r?a("title",{children:r}):null,a("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})]})});y.propTypes={color:d.string,size:d.oneOfType([d.string,d.number]),title:d.string};y.defaultProps={color:"currentColor",size:"1em",title:null};var Q=y;const V=({customers:e})=>{const i=[{label:"Printer",value:"Printer"},{label:"Cartrigde",value:"Cartridge"},{label:"Toner",value:"Toner"}],n=[{label:"Kabel USB",value:"Kabel_usb"},{label:"Kabel Listrik",value:"kabel_listrik"},{label:"Kotak",value:"kotak"}],{data:t,setData:r,post:l,errors:u,processing:w}=S({receipt_number:"",customer_id:"",kelengkapan:"",kerusakan:"",description:"",details:[{type:"",category:"printer"}],photo:null}),[k,O]=v.exports.useState({image_src:"",image_name:"",image_data:""});function P(){r({...t,details:[...t.details,{type:"",category:"printer"}]})}const m=o=>{r(o.target.name,o.target.type==="checkbox"?o.target.checked:o.target.value)},x=(o,s)=>{let h=t.details;h[s][o.target.name]=o.target.value,r({...t,details:h})},j=o=>{let s=o.target.files[0];O({image_src:URL.createObjectURL(s),image_name:s.name,image_data:s}),r("photo",s)};function C(o){let s=[];o.map(h=>{s.push(h.label)}),r("kelengkapan",s)}function _(){const o=t.details;o.splice(o,1),r({...t,details:o})}function z(o){o.preventDefault(),l(route("receipts"),{preserveScroll:!0})}return c("div",{children:[a(L,{title:"Tambah TTB Baru"}),a("div",{className:"bg-slate-300 p-4",children:a("h2",{className:"font-semibold text-slate-600",children:"BUAT TTB BARU"})}),a("div",{className:"p-4",children:c("form",{onSubmit:z,children:[c("div",{className:"flex gap-3",children:[c("div",{className:"",children:[a(p,{children:"Nomor Kartu"}),a(g,{type:"number",name:"receipt_number",className:u.receipt_number&&"input-error",handleChange:m,value:t.receipt_number}),u.receipt_number&&a("div",{className:"invalid-feedback",children:u.receipt_number})]}),c("div",{className:"form-control w-full pr-14",children:[a(p,{children:"Pelanggan"}),c("div",{className:"input-group",children:[c(N,{name:"customer_id",className:u.customer_id&&"select-error",handleChange:m,children:[a("option",{value:"",children:"Pilih"}),e.map((o,s)=>a("option",{value:o.id,children:o.name},s))]}),a(B,{href:route("customers.create"),className:"btn",children:a(Q,{className:"text-xl"})})]}),u.customer_id&&a("div",{className:"invalid-feedback",children:u.customer_id})]})]}),c("div",{className:"",children:[a(p,{children:"Kelengkapan"}),a(A,{option:n,isMulti:!0,onHandleChange:C})]}),c("div",{className:"mb-4",children:[a(p,{children:"Kerusakan"}),a(g,{name:"kerusakan",value:t.kerusakan,handleChange:m,className:u.kerusakan&&"input-error"}),u.kerusakan&&a("div",{className:"invalid-feedback",children:u.kerusakan})]}),a("hr",{className:"my-4 border-slate-400"}),t.details.map((o,s)=>c("div",{className:"flex gap-3 mb-2",children:[a("div",{children:a(N,{name:"category",handleChange:h=>{x(h,s)},children:i.map((h,T)=>a("option",{value:h.value,children:h.label},T))})}),a("div",{className:"flex-1",children:a(g,{value:o.type,name:"type",handleChange:h=>{x(h,s)},required:!0,placeHolder:"Masukkan tipe barang "})}),a("div",{children:s>0?a("button",{type:"button",className:"flex justify-center items-center hover:btn-error transition-all btn-circle",onClick:_,children:a(D,{className:"text-xl text-red-700"})}):a("button",{type:"button",className:"flex justify-center items-center text-green-700 btn-circle hover:btn-success transition-all",onClick:P,children:a(q,{className:"text-xl"})})})]},s)),a("hr",{className:"mt-4 border-slate-400"}),c("div",{children:[a(p,{children:"Keterangan"}),a(R,{handleChange:m,name:"description",value:t.description})]}),c("div",{className:"relative",children:[a(K,{handleChange:j,src:k.image_src,name:k.image_name}),u.photo&&a("div",{className:"invalid-feedback absolute -bottom-4",children:u.photo})]}),a("div",{className:"mt-10",children:a(I,{className:"btn-success btn-block shadow hover:bg-green-300",processing:w,children:"SIMPAN"})})]})})]})};V.layout=e=>a(M,{auth:e.props.auth,children:e,href:route("receipts"),menu:!1});export{V as default};
