import{u as l,r as c,j as a,a as s,H as u}from"./app.6627afe2.js";import{B as p}from"./Button.fc799e3f.js";import{G as f}from"./Guest.9451efd0.js";import{I as w}from"./Input.e56004de.js";import{L as h}from"./Label.295f6220.js";import{V as b}from"./ValidationErrors.da75d15d.js";function P(){const{data:e,setData:t,post:o,processing:i,errors:n,reset:m}=l({password:""});c.exports.useEffect(()=>()=>{m("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(f,{children:[s(u,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s(b,{errors:n}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(w,{type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(p,{className:"ml-4",processing:i,children:"Confirm"})})]})]})}export{P as default};