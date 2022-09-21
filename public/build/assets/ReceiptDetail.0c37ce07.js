import{r as C,j as t,a,u as W,d as G,b as J,H as Q,L as V}from"./app.6627afe2.js";import{P as b,j as T,M as X}from"./Main.d854e902.js";import{B as D,a as Z,S as ee}from"./ButtonIsTaken.25297fa8.js";import{T as ae}from"./TextArea.c277a17d.js";import{B as S}from"./Button.fc799e3f.js";import{L as j}from"./Label.295f6220.js";import{I}from"./Input.e56004de.js";import{c as L}from"./Helper.d9e24006.js";import{l as te}from"./lodash.2a5b5e4a.js";import{d as re,g as E,a as ie,f as z}from"./index.dbcb883f.js";import{r as P,t as f,i as M}from"./index.7f05af33.js";import"./axios.40b98a77.js";var ne=["color","size","title"];function le(e,i){if(e==null)return{};var r=se(e,i),n,l;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],!(i.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function se(e,i){if(e==null)return{};var r={},n=Object.keys(e),l,s;for(s=0;s<n.length;s++)l=n[s],!(i.indexOf(l)>=0)&&(r[l]=e[l]);return r}var _=C.exports.forwardRef(function(e,i){var r=e.color,n=e.size,l=e.title,s=le(e,ne);return t("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:r,...s,children:[l?a("title",{children:l}):null,a("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})]})});_.propTypes={color:b.string,size:b.oneOfType([b.string,b.number]),title:b.string};_.defaultProps={color:"currentColor",size:"1em",title:null};var de=_;function ce(e,i){P(2,arguments);var r=f(e),n=f(i),l=r.getTime()-n.getTime();return l<0?-1:l>0?1:l}function U(e,i){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);return e}function oe(e){return U({},e)}var B=1e3*60,N=60*24,R=N*30,A=N*365;function me(e,i,r){var n,l,s;P(2,arguments);var w=ie(),o=(n=(l=r==null?void 0:r.locale)!==null&&l!==void 0?l:w.locale)!==null&&n!==void 0?n:re;if(!o.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var u=ce(e,i);if(isNaN(u))throw new RangeError("Invalid time value");var m=U(oe(r),{addSuffix:Boolean(r==null?void 0:r.addSuffix),comparison:u}),d,v;u>0?(d=f(i),v=f(e)):(d=f(e),v=f(i));var k=String((s=r==null?void 0:r.roundingMethod)!==null&&s!==void 0?s:"round"),h;if(k==="floor")h=Math.floor;else if(k==="ceil")h=Math.ceil;else if(k==="round")h=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var y=v.getTime()-d.getTime(),g=y/B,Y=E(v)-E(d),p=(y-Y)/B,x=r==null?void 0:r.unit,c;if(x?c=String(x):g<1?c="second":g<60?c="minute":g<N?c="hour":p<R?c="day":p<A?c="month":c="year",c==="second"){var H=h(y/1e3);return o.formatDistance("xSeconds",H,m)}else if(c==="minute"){var K=h(g);return o.formatDistance("xMinutes",K,m)}else if(c==="hour"){var $=h(g/60);return o.formatDistance("xHours",$,m)}else if(c==="day"){var q=h(p/N);return o.formatDistance("xDays",q,m)}else if(c==="month"){var O=h(p/R);return O===12&&x!=="month"?o.formatDistance("xYears",1,m):o.formatDistance("xMonths",O,m)}else if(c==="year"){var F=h(p/A);return o.formatDistance("xYears",F,m)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function he(e,i){return P(1,arguments),me(e,Date.now(),i)}function ue({receipt:e}){const[i,r]=C.exports.useState(!0),{data:n,setData:l,patch:s,processing:w}=W({id:e.id,repair:e.repair||"",cost:L(e.cost)||"",description:e.description||""}),o=()=>{G.Inertia.reload(),r(d=>!d)},u=d=>{l(d.target.name,d.target.name=="cost"?L(d.target.value.replace(/\D/g,"")):d.target.value)},m=()=>{s(route("receipts"),{preserveScroll:!0,onSuccess:()=>{r(!0)}})};return a("div",{children:a("div",{className:"card bg-base-100 rounded-md shadow-md mt-10 ",children:t("div",{className:"card-body p-4",children:[t("div",{children:[a(j,{children:"Perbaikan"}),a(I,{type:"text",name:"repair",value:n.repair,placeHolder:"Perbaikan atau penanganan",disabled:i,handleChange:u})]}),t("div",{children:[a(j,{children:"Biaya"}),a(I,{type:"text",name:"cost",value:n.cost,placeHolder:"Biaya perbaikan",disabled:i,handleChange:u})]}),a("h3",{className:"-mb-2 mt-3",children:"Keterangan"}),a("p",{className:"text-sm text-slate-400 italic mb-3",children:"Keterangan tidak bisa diubah jika barang sudah diambil."}),a(ae,{disable:i,name:"description",value:n.description,handleChange:d=>u(d)}),!e.isTaken&&a("div",{className:"mt-3 flex justify-end",children:i?a(S,{className:"w-30 btn-sm",handleClick:o,children:"EDIT"}):t("div",{className:"flex gap-2",children:[a(S,{className:"w-30 btn-sm btn-error",handleClick:o,children:"batal"}),a(S,{className:"w-30 btn-sm btn-success",handleClick:m,processing:w,children:"SIMPAN"})]})})]})})})}const fe=()=>{const{receipt:e,processing:i,auth:r}=J().props,n=l=>`${he(new Date(l),{locale:M})} yang lalu`;return t("div",{className:"mt-10 mx-3",children:[a(Q,{title:"TTB Detail"}),a("div",{className:"avatar flex justify-center",children:a("div",{className:"w-1/2 md:w-1/3 lg:w-1/5 rounded-full border-white border-4 shadow-lg",children:a("a",{href:"/"+e.image,target:"_blank",children:a("img",{src:"/"+e.image,alt:e.image})})})}),e.status==="Pending"&&t("div",{className:"alert shadow-md mt-10 flex flex-col",children:[a("h2",{className:"block",children:"Tanda Terima ini belum ditangani"}),a(D,{variant:"primary",data:{id:e.id,status:"proses",handle_by:r.user.name},disable:i,children:"PROSES Sekarang"})]}),!e.isTaken&&e.status!="Pending"&&e.status!="Proses"?t("div",{className:"alert shadow-md mt-10 flex flex-col",children:[a("h2",{className:"block",children:"Ubah status ttb menjadi sudah diambil ?"}),a(Z,{id:e.id})]}):"",e.status==="Proses"&&t("div",{className:"mt-10 flex justify-between items-center alert shadow-md ",children:[a("div",{children:a("h2",{children:"Status Pengerjaan :"})}),t("div",{className:"",children:[a("a",{href:"#modal-gagal",className:"btn btn-sm btn-error shadow-md",children:"gagal"}),a("a",{href:e.cost=="0"||te.exports.isEmpty(e.repair)?"#confirmation":"#modal-sukses",className:"btn btn-sm btn-success shadow-md",children:"Berhasil"}),t(T,{id:"modal-gagal",title:"Perhatian!",message:"Yakin ingin merubah status pengerjaan Batal / Gagal ?",children:[a("a",{href:"#",className:"btn btn-sm",children:"tidak"}),a(D,{className:"block shadow-md",children:"Yakin",data:{id:e.id,status:"gagal"}})]}),a(T,{id:"confirmation",title:"Perhatian!",message:"Keterangan perbaikan atau biaya perbaikan belum diisi...",children:a("a",{href:"#",className:"btn btn-ghost",children:"TUTUP"})}),t(T,{id:"modal-sukses",title:"Perhatian!",message:"Yakin ingin merubah status pengerjaan Sukses / Berhasil ?",children:[a("a",{href:"#",className:"btn btn-sm",children:"tidak"}),a(D,{className:"block shadow-md",children:"Yakin",data:{id:e.id,status:"berhasil"}})]})]})]}),t("div",{className:"mt-8",children:[a("div",{className:"overflow-x-scroll",children:a("table",{className:"table text-left table-zebra table-compact  w-full rounded-lg shadow-md",children:t("tbody",{className:"",children:[t("tr",{children:[a("td",{children:"No Kartu "}),a("td",{children:":"}),t("td",{className:"font-semibold",children:[e.receipt_number," - ",t("a",{href:`/images/ttb/ttb_${e.receipt_code}.png`,target:"_blank",className:"tooltip tooltip-bottom text-sky-600","data-tip":"Kartu Tanda Terima Barang",children:["( ",e.receipt_code," )"]})]})]}),t("tr",{children:[a("td",{children:"Tanggal Masuk"}),a("td",{children:":"}),t("td",{children:[z(new Date(e.delivery_date),"dd LLLL yyyy",{locale:M})," ",a("br",{})," ",t("span",{className:"italic text-slate-500",children:["( ",n(e.delivery_date)," )"]})]})]}),e.isTaken&&t("tr",{children:[a("td",{children:"Tanggal Ambil"}),a("td",{children:":"}),t("td",{children:[z(new Date(e.pickup_date),"dd LLLL yyyy",{locale:M}),a("br",{}),t("span",{className:"italic text-slate-500",children:["( ",n(e.pickup_date)," )"]})]})]}),t("tr",{children:[a("td",{children:"Customer"}),a("td",{children:":"}),a("td",{className:"hover:bg-blue-300",children:t(V,{href:route("customer.show",e.customer.id),className:"flex items-center gap-2 tooltip tooltip-bottom","data-tip":"Detail Customer",children:[e.customer.name,a(de,{})]})})]}),t("tr",{children:[a("td",{children:"Penerima"}),a("td",{children:":"}),a("td",{className:"capitalize",children:e.user.name})]}),e.status!="Pending"||e.handle_by!=""&&t("tr",{children:[a("td",{children:"Teknisi"}),a("td",{children:":"}),a("td",{children:e.handle_by})]}),t("tr",{children:[a("td",{children:"Barang"}),a("td",{children:":"}),a("td",{children:t("p",{className:"capitalize",children:[e.category," - ",e.barang]})})]}),t("tr",{children:[a("td",{children:"Kelengkapan"}),a("td",{children:":"}),a("td",{children:e.kelengkapan?e.kelengkapan.join(" | "):"Tidak ada"})]}),t("tr",{children:[a("td",{children:"Kerusakan"}),a("td",{children:":"}),a("td",{children:e.kerusakan})]}),t("tr",{children:[a("td",{children:"Status "}),a("td",{children:":"}),a("td",{children:t("div",{className:"flex gap-2",children:[a(ee,{status:e.status,className:"rounded-full px-3 py-1"}),e.isTaken&&a("div",{className:"rounded-full px-3 py-1 bg-success",children:"Sudah Diambil"})]})})]})]})})}),a(ue,{receipt:e})]})]})};fe.layout=e=>a(X,{auth:e.props.auth,children:e,menu:!1,href:route("receipts")});export{fe as default};