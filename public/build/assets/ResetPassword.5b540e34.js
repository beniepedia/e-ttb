import{u as f,r as w,j as s,a,H as h}from"./app.7c053a8b.js";import{B as v}from"./Button.2c4f51ee.js";import{G as C}from"./Guest.9d07d077.js";import{I as t}from"./Input.1a3afc1c.js";import{L as m}from"./Label.48693700.js";import{V as b}from"./ValidationErrors.5ca5c84e.js";function y({token:n,email:l}){const{data:o,setData:i,post:d,processing:p,errors:u,reset:c}=f({token:n,email:l,password:"",password_confirmation:""});w.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const r=e=>{i(e.target.name,e.target.value)};return s(C,{children:[a(h,{title:"Reset Password"}),a(b,{errors:u}),s("form",{onSubmit:e=>{e.preventDefault(),d(route("password.update"))},children:[s("div",{children:[a(m,{forInput:"email",value:"Email"}),a(t,{type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:r})]}),s("div",{className:"mt-4",children:[a(m,{forInput:"password",value:"Password"}),a(t,{type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:r})]}),s("div",{className:"mt-4",children:[a(m,{forInput:"password_confirmation",value:"Confirm Password"}),a(t,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:r})]}),a("div",{className:"flex items-center justify-end mt-4",children:a(v,{className:"ml-4",processing:p,children:"Reset Password"})})]})]})}export{y as default};