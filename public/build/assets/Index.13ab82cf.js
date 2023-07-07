import{E as x,u as b,p as d,I as v,B as N}from"./usePrevious.3568af77.js";import{a as e,F as h,j as o,L as y,b as k,r as n,e as w,H as j}from"./app.a66e2839.js";import{A as I,P as M,M as L}from"./Main.4d841119.js";import{I as P}from"./Input.8658de30.js";import{a as S}from"./index.af53f782.js";import"./index.173378b6.js";import"./_baseAssignValue.32679163.js";import"./Modal.e8ef0440.js";import"./Helper.6afe5d05.js";function z({customers:s}){return e(h,{children:s.length?s.map((r,t)=>o("div",{className:"flex items-center justify-between py-2 border-t border-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 px-5",children:[o("div",{className:"flex items-center",children:[e(I,{name:r.name,size:"50",className:"rounded-full"}),o("div",{className:"ml-4 pb-1",children:[e("h2",{className:"text-lg",children:r.name}),e("p",{className:"text-xs",children:r.phone})]})]}),e("div",{className:"flex-none",children:e(y,{href:route("customer.show",r.id),className:"btn btn-circle btn-ghost",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-5 h-5 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})})})})]},t)):e(x,{})})}const B=()=>{const{customers:s,filters:r}=k().props;console.log(s);const[t,u]=n.exports.useState({search:r.search||""}),p=b(t),[l,c]=n.exports.useState(""),[i,m]=n.exports.useState([]);n.exports.useEffect(()=>{m(s.data),c(s.links.next)},[s]),n.exports.useEffect(()=>{if(p){const a=Object.keys(d(t)).length?d(t):"";w.Inertia.get(route(route().current()),a,{preserveState:!0,replace:!0})}},[t]);function f(a){u({[a.target.name]:a.target.value})}async function g(){if(l){const{data:a}=await S.get(l);m([...i,...a.data]),c(a.links.next)}}return o(h,{children:[e(j,{title:"Customers"}),e("div",{className:"px-4 py-4 mb-4 ",children:e(P,{type:"search",name:"search",value:t.search,handleChange:f,placeHolder:"Cari....",className:""})}),e(v,{dataLength:i.length,next:g,hasMore:!!l,loader:e("div",{className:"flex justify-center",children:e("img",{src:"/images/assets/loading.svg",width:"80"})}),children:e(z,{customers:i})}),e(N,{href:route("customers.create"),className:"dark:bg-blue-800 border-none shadow-xl bg-blue-600 hover:bg-blue-800",icon:e(M,{className:"text-xl"})})]})};B.layout=s=>e(L,{errors:s.props.errors,children:s});export{B as default};