import{u,r as p,j as i,a as e,H as h}from"./app.7c053a8b.js";import{B as f}from"./Button.2c4f51ee.js";import{M as v}from"./Main.aaff387b.js";import{I as l}from"./Input.1a3afc1c.js";import{L as n}from"./Label.48693700.js";const N=()=>{const{data:s,setData:d,post:o,processing:m,errors:a,reset:c}=u({name:"",email:"",user_type:"",password:"",password_confirmation:""});p.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const t=r=>{d(r.target.name,r.target.type==="checkbox"?r.target.checked:r.target.value)};return i("div",{className:"",children:[e(h,{title:"Register"}),e("div",{className:"bg-slate-300 p-4",children:e("h2",{className:"font-semibold text-slate-600",children:"TAMBAH PENGGUNA"})}),e("div",{className:"p-4 lg:mx-64",children:i("form",{onSubmit:r=>{r.preventDefault(),o(route("register"))},noValidate:!0,children:[i("div",{children:[e(n,{children:"Nama"}),e(l,{type:"text",name:"name",value:s.name,autoComplete:"name",isFocused:!0,handleChange:t,className:a.name&&"input-error"}),e("div",{className:"invalid-feedback",children:a.name})]}),i("div",{className:"mt-2",children:[e(n,{children:"Email"}),e(l,{type:"email",name:"email",value:s.email,className:a.email&&"input-error",autoComplete:"username",handleChange:t,required:!0}),e("div",{className:"invalid-feedback",children:a.email})]}),i("div",{className:"mt-2",children:[e(n,{children:"Jabatan"}),i("select",{className:`select w-full ${a.user_type&&"select-error"} `,value:s.user_type,name:"user_type",onChange:r=>t(r),children:[e("option",{value:"",disabled:!0,children:"Pilih"}),e("option",{value:"admin",children:"Admin"}),e("option",{value:"teknisi",children:"Teknisi"}),e("option",{value:"kasir",children:"Kasir"})]}),e("div",{className:"invalid-feedback",children:a.user_type})]}),i("div",{className:"mt-2",children:[e(n,{children:"Password"}),e(l,{type:"password",name:"password",value:s.password,className:a.password&&"input-error",autoComplete:"new-password",handleChange:t,required:!0}),e("div",{className:"invalid-feedback",children:a.password})]}),i("div",{className:"mt-2",children:[e(n,{children:"Konfirmasi password"}),e(l,{type:"password",name:"password_confirmation",value:s.password_confirmation,className:a.password_confirmation&&"input-error",handleChange:t,required:!0}),e("div",{className:"invalid-feedback",children:a.password_confirmation})]}),e("div",{className:"flex items-center justify-end mt-8",children:e(f,{className:"w-full",processing:m,children:"Register"})})]})})]})};N.layout=s=>e(v,{auth:s.props.auth,children:s,href:route("dashboard"),menu:!1});export{N as default};