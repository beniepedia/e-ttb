import{r as h,j as o,a as i,e as c}from"./app.b635f412.js";import{P as l}from"./index.173378b6.js";import{M as p}from"./Modal.7361ca83.js";var b=["color","size","title"];function m(t,a){if(t==null)return{};var n=f(t,a),e,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)e=s[r],!(a.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,e)||(n[e]=t[e]))}return n}function f(t,a){if(t==null)return{};var n={},e=Object.keys(t),r,s;for(s=0;s<e.length;s++)r=e[s],!(a.indexOf(r)>=0)&&(n[r]=t[r]);return n}var u=h.exports.forwardRef(function(t,a){var n=t.color,e=t.size,r=t.title,s=m(t,b);return o("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:e,height:e,fill:n,...s,children:[r?i("title",{children:r}):null,i("path",{d:"M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"}),i("path",{d:"M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"})]})});u.propTypes={color:l.string,size:l.oneOfType([l.string,l.number]),title:l.string};u.defaultProps={color:"currentColor",size:"1em",title:null};var x=u;function y({type:t="button",variant:a="success",children:n,disable:e=!1,className:r="btn-outline w-full",data:s}){const d=()=>{c.Inertia.patch(route("receipts.updatePatch"),s,{preserveScroll:!0,preserveState:!0,replace:!0})};return i("button",{type:t,className:`btn btn-sm btn-${a} `+r,onClick:d,disabled:e,children:n})}function z({status:t,className:a="absolute top-0 px-4 left-0 rounded-br-xl "}){return i("div",{className:a+" "+{Pending:"bg-amber-400 shadow-md",Proses:"bg-teal-400 shadow-md",Gagal:"bg-red-400 shadow-md text-white",Berhasil:"bg-green-400 shadow-md"}[t],children:t})}function A({title:t="sudah diambil ?",id:a}){const n=e=>{c.Inertia.put(route("receipts.taken"),{id:e},{preserveScroll:!0,preserveState:!0,replace:!0})};return o("div",{children:[i("a",{href:"#modal",className:"btn btn-sm btn-outline w-full",children:t}),o(p,{title:"Update!",message:"Yakin ingin mengubah status ttb sudah diambil ?",id:"modal",children:[i("a",{href:"#",className:"btn btn-sm btn-error text-white shadow-lg",children:"BATAL"}),i("a",{href:"#",className:"btn btn-sm md:btn-sm btn-success shadow-lg text-white",onClickCapture:()=>n(a),children:"IYA, UBAH SEKARANG!"})]})]})}export{y as B,x as C,z as S,A as a};