import{r as p,j as c,a}from"./app.28a4a1c6.js";import{P as o}from"./index.173378b6.js";var f=["color","size","title"];function u(t,n){if(t==null)return{};var i=d(t,n),r,e;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)r=l[e],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(i[r]=t[r]))}return i}function d(t,n){if(t==null)return{};var i={},r=Object.keys(t),e,l;for(l=0;l<r.length;l++)e=r[l],!(n.indexOf(e)>=0)&&(i[e]=t[e]);return i}var s=p.exports.forwardRef(function(t,n){var i=t.color,r=t.size,e=t.title,l=u(t,f);return c("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:i,...l,children:[e?a("title",{children:e}):null,a("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"})]})});s.propTypes={color:o.string,size:o.oneOfType([o.string,o.number]),title:o.string};s.defaultProps={color:"currentColor",size:"1em",title:null};var h=s;function m(){return a("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2",children:c("div",{className:"flex flex-col items-center gap-5 text-slate-500",children:[a(h,{className:"text-5xl"}),a("h1",{children:"Tidak ada data"})]})})}export{m as E};
