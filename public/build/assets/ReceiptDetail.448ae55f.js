import{r as $,u as q,a as e,j as r,d as F,b as G,H as J}from"./app.b2998d8c.js";import{j as x,M as Q}from"./Main.28ec2247.js";import{B as T,a as V,S as W}from"./ButtonIsTaken.029837e8.js";import{T as X}from"./TextArea.81c693a2.js";import{B as D}from"./Button.fdcfdbf5.js";import{L as I}from"./Label.1c18be1c.js";import{I as P}from"./Input.0791d47f.js";import{c as L}from"./Helper.d9e24006.js";import{l as Z}from"./lodash.dd2206ee.js";import{d as ee,g as E,a as ae,f as j}from"./index.dbcb883f.js";import{r as _,t as f,i as S}from"./index.7f05af33.js";import"./axios.40b98a77.js";function re(a,i){_(2,arguments);var t=f(a),s=f(i),d=t.getTime()-s.getTime();return d<0?-1:d>0?1:d}function U(a,i){if(a==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(a[t]=i[t]);return a}function te(a){return U({},a)}var B=1e3*60,v=60*24,O=v*30,R=v*365;function ie(a,i,t){var s,d,u;_(2,arguments);var N=ae(),c=(s=(d=t==null?void 0:t.locale)!==null&&d!==void 0?d:N.locale)!==null&&s!==void 0?s:ee;if(!c.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var h=re(a,i);if(isNaN(h))throw new RangeError("Invalid time value");var o=U(te(t),{addSuffix:Boolean(t==null?void 0:t.addSuffix),comparison:h}),n,p;h>0?(n=f(i),p=f(a)):(n=f(a),p=f(i));var k=String((u=t==null?void 0:t.roundingMethod)!==null&&u!==void 0?u:"round"),m;if(k==="floor")m=Math.floor;else if(k==="ceil")m=Math.ceil;else if(k==="round")m=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var w=p.getTime()-n.getTime(),g=w/B,z=E(p)-E(n),b=(w-z)/B,y=t==null?void 0:t.unit,l;if(y?l=String(y):g<1?l="second":g<60?l="minute":g<v?l="hour":b<O?l="day":b<R?l="month":l="year",l==="second"){var Y=m(w/1e3);return c.formatDistance("xSeconds",Y,o)}else if(l==="minute"){var A=m(g);return c.formatDistance("xMinutes",A,o)}else if(l==="hour"){var C=m(g/60);return c.formatDistance("xHours",C,o)}else if(l==="day"){var K=m(b/v);return c.formatDistance("xDays",K,o)}else if(l==="month"){var M=m(b/O);return M===12&&y!=="month"?c.formatDistance("xYears",1,o):c.formatDistance("xMonths",M,o)}else if(l==="year"){var H=m(b/R);return c.formatDistance("xYears",H,o)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function ne(a,i){return _(1,arguments),ie(a,Date.now(),i)}function le({receipt:a}){const[i,t]=$.exports.useState(!0),{data:s,setData:d,patch:u,processing:N}=q({id:a.id,repair:a.repair||"",cost:L(a.cost)||"",description:a.description||""}),c=()=>{F.Inertia.reload(),t(n=>!n)},h=n=>{d(n.target.name,n.target.name=="cost"?L(n.target.value.replace(/\D/g,"")):n.target.value)},o=()=>{u(route("receipts"),{preserveScroll:!0,onSuccess:()=>{t(!0)}})};return e("div",{children:e("div",{className:"card bg-base-100 rounded-md shadow-md mt-10 ",children:r("div",{className:"card-body p-4",children:[r("div",{children:[e(I,{children:"Perbaikan"}),e(P,{type:"text",name:"repair",value:s.repair,placeHolder:"Perbaikan atau penanganan",disabled:i,handleChange:h})]}),r("div",{children:[e(I,{children:"Biaya"}),e(P,{type:"text",name:"cost",value:s.cost,placeHolder:"Biaya perbaikan",disabled:i,handleChange:h})]}),e("h3",{className:"-mb-2 mt-3",children:"Keterangan"}),e("p",{className:"text-sm text-slate-400 italic mb-3",children:"Keterangan tidak bisa diubah jika barang sudah diambil."}),e(X,{disable:i,name:"description",value:s.description,handleChange:n=>h(n)}),!a.isTaken&&e("div",{className:"mt-3 flex justify-end",children:i?e(D,{className:"w-30 btn-sm",handleClick:c,children:"EDIT"}):r("div",{className:"flex gap-2",children:[e(D,{className:"w-30 btn-sm btn-error",handleClick:c,children:"batal"}),e(D,{className:"w-30 btn-sm btn-success",handleClick:o,processing:N,children:"SIMPAN"})]})})]})})})}const se=()=>{const{receipt:a,processing:i,auth:t}=G().props,s=d=>`${ne(new Date(d),{locale:S})} yang lalu`;return r("div",{className:"mt-10 mx-3",children:[e(J,{title:"TTB Detail"}),e("div",{className:"avatar flex justify-center",children:e("div",{className:"w-1/2 md:w-1/3 lg:w-1/5 rounded-full border-white border-4 shadow-lg",children:e("a",{href:"/"+a.image,target:"_blank",children:e("img",{src:"/"+a.image,alt:a.image})})})}),a.status==="Pending"&&r("div",{className:"alert shadow-md mt-10 flex flex-col",children:[e("h2",{className:"block",children:"Tanda Terima ini belum ditangani"}),e(T,{variant:"primary",data:{id:a.id,status:"proses",handle_by:t.user.name},disable:i,children:"PROSES Sekarang"})]}),!a.isTaken&&a.status!="Pending"&&a.status!="Proses"?r("div",{className:"alert shadow-md mt-10 flex flex-col",children:[e("h2",{className:"block",children:"Ubah status ttb menjadi sudah diambil ?"}),e(V,{id:a.id})]}):"",a.status==="Proses"&&r("div",{className:"mt-10 flex justify-between items-center alert shadow-md ",children:[e("div",{children:e("h2",{children:"Status Pengerjaan :"})}),r("div",{className:"",children:[e("a",{href:"#modal-gagal",className:"btn btn-sm btn-error shadow-md",children:"gagal"}),e("a",{href:a.cost=="0"||Z.exports.isEmpty(a.repair)?"#confirmation":"#modal-sukses",className:"btn btn-sm btn-success shadow-md",children:"Berhasil"}),r(x,{id:"modal-gagal",title:"Perhatian!",message:"Yakin ingin merubah status pengerjaan Batal / Gagal ?",children:[e("a",{href:"#",className:"btn btn-sm",children:"tidak"}),e(T,{className:"block shadow-md",children:"Yakin",data:{id:a.id,status:"gagal"}})]}),e(x,{id:"confirmation",title:"Perhatian!",message:"Keterangan perbaikan atau biaya perbaikan belum diisi...",children:e("a",{href:"#",className:"btn btn-ghost",children:"TUTUP"})}),r(x,{id:"modal-sukses",title:"Perhatian!",message:"Yakin ingin merubah status pengerjaan Sukses / Berhasil ?",children:[e("a",{href:"#",className:"btn btn-sm",children:"tidak"}),e(T,{className:"block shadow-md",children:"Yakin",data:{id:a.id,status:"berhasil"}})]})]})]}),r("div",{className:"mt-8",children:[e("div",{className:"overflow-x-scroll",children:e("table",{className:"table text-left table-zebra table-compact  w-full rounded-lg shadow-md",children:r("tbody",{className:"",children:[r("tr",{children:[e("td",{children:"No Kartu "}),e("td",{children:":"}),r("td",{className:"font-semibold",children:[a.receipt_number," - ",r("a",{href:`/images/ttb/ttb_${a.receipt_code}.png`,target:"_blank",className:"tooltip tooltip-bottom text-sky-600","data-tip":"Kartu Tanda Terima Barang",children:["( ",a.receipt_code," )"]})]})]}),r("tr",{children:[e("td",{children:"Tanggal Masuk"}),e("td",{children:":"}),r("td",{children:[j(new Date(a.delivery_date),"dd LLLL yyyy",{locale:S})," ",e("br",{})," ",r("span",{className:"italic text-slate-500",children:["( ",s(a.delivery_date)," )"]})]})]}),a.isTaken&&r("tr",{children:[e("td",{children:"Tanggal Ambil"}),e("td",{children:":"}),r("td",{children:[j(new Date(a.pickup_date),"dd LLLL yyyy",{locale:S}),e("br",{}),r("span",{className:"italic text-slate-500",children:["( ",s(a.pickup_date)," )"]})]})]}),r("tr",{children:[e("td",{children:"Customer"}),e("td",{children:":"}),e("td",{className:"hover:bg-blue-100",children:e("a",{href:"",children:a.customer.name})})]}),r("tr",{children:[e("td",{children:"Penerima"}),e("td",{children:":"}),e("td",{className:"capitalize",children:a.user.name})]}),a.status!="Pending"||a.handle_by!=""&&r("tr",{children:[e("td",{children:"Teknisi"}),e("td",{children:":"}),e("td",{children:a.handle_by})]}),r("tr",{children:[e("td",{children:"Barang"}),e("td",{children:":"}),e("td",{children:r("p",{className:"capitalize",children:[a.category," - ",a.barang]})})]}),r("tr",{children:[e("td",{children:"Kelengkapan"}),e("td",{children:":"}),e("td",{children:a.kelengkapan?a.kelengkapan.join(" | "):"Tidak ada"})]}),r("tr",{children:[e("td",{children:"Kerusakan"}),e("td",{children:":"}),e("td",{children:a.kerusakan})]}),r("tr",{children:[e("td",{children:"Status "}),e("td",{children:":"}),e("td",{children:r("div",{className:"flex gap-2",children:[e(W,{status:a.status,className:"rounded-full px-3 py-1"}),a.isTaken&&e("div",{className:"rounded-full px-3 py-1 bg-success",children:"Sudah Diambil"})]})})]})]})})}),e(le,{receipt:a})]})]})};se.layout=a=>e(Q,{auth:a.props.auth,children:a,menu:!1,href:route("receipts")});export{se as default};
