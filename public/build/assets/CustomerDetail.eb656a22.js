import{r as m,j as t,a as e,b as p,L as c}from"./app.ff6d3df7.js";import{A as f,M as u}from"./Main.edf44f9b.js";import{_ as w}from"./lodash.04b2687b.js";import{f as b,i as y}from"./index.2b454c40.js";import{P as s,W as g}from"./whatsapp.f443144b.js";import{P as x}from"./pencil.83e6857a.js";import{I as v}from"./info-circle-fill.9f5f82be.js";import"./Modal.da3140b2.js";import"./Helper.55d388d8.js";var N=["color","size","title"];function z(r,n){if(r==null)return{};var i=k(r,n),l,a;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);for(a=0;a<d.length;a++)l=d[a],!(n.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,l)||(i[l]=r[l]))}return i}function k(r,n){if(r==null)return{};var i={},l=Object.keys(r),a,d;for(d=0;d<l.length;d++)a=l[d],!(n.indexOf(a)>=0)&&(i[a]=r[a]);return i}var o=m.exports.forwardRef(function(r,n){var i=r.color,l=r.size,a=r.title,d=z(r,N);return t("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:i,...d,children:[a?e("title",{children:a}):null,e("path",{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"})]})});o.propTypes={color:s.string,size:s.oneOfType([s.string,s.number]),title:s.string};o.defaultProps={color:"currentColor",size:"1em",title:null};var L=o;const P=()=>{const{customer:r}=p().props;return e("div",{className:"rounded-lg overflow-hidden my-4 shadow border-base-content border-2",children:e("iframe",{src:`https://www.google.com/maps/embed/v1/place?key=AIzaSyCt0AH-XJxxderpAyYPo3iyRplz8Kwm46M&q=${r.location.lat},${r.location.lon}&zoom=15`,width:"100%",height:"450",style:{border:0},allowFullscreen:"true",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})})};function h({href:r,target:n="_blank",children:i,className:l}){return e("a",{href:r,target:n,className:l,children:i})}const j=()=>{var i;const{customer:r}=p().props,[n]=m.exports.useState(w.orderBy(r.receipts,["created_at"],["desc"]));return t("div",{className:"px-4 py-6 w-full md:max-w-2xl",children:[e("div",{className:"avatar flex justify-center",children:e("div",{className:" rounded-full border-white border-4 shadow-lg",children:e(f,{name:r.name})})}),e("h2",{className:"text-center my-5 text-2xl",children:r.name}),e("div",{className:"overflow-x-auto py-2",children:e("table",{className:"table w-full table-zebra bg-base-100 shadow z-0",children:t("tbody",{children:[t("tr",{children:[e("th",{children:"Nama"}),t("td",{children:[" : ",r.name]})]}),t("tr",{children:[e("th",{children:"Handphone"}),t("td",{children:[" : ",r.phone]})]}),t("tr",{children:[e("th",{children:"Whatsapp"}),t("td",{children:[" : ",r.whatsapp]})]}),t("tr",{children:[e("th",{children:"Alamat 1"}),t("td",{children:[" : ",r.address]})]}),t("tr",{children:[e("th",{children:"Alamat 2"}),t("td",{children:[" : ",(i=r==null?void 0:r.location)==null?void 0:i.display_name]})]})]})})}),e("div",{className:"mt-3 ",children:t("div",{className:"btn-group w-full",children:[t(h,{href:"tel:"+r.phone,className:"btn w-1/3 ",children:[e(L,{className:"text-2xl text-slate-600 mr-3"}),e("span",{className:"hidden md:block",children:"Telpon"})]}),r.whatsapp&&t(h,{href:"https://wa.me/"+r.whatsapp,className:"btn w-1/3 btn-success",children:[e(g,{className:"text-2xl  mr-3"}),e("span",{className:"hidden md:block",children:"WhatsApp"})]}),t(c,{href:route("customer.edit",r.id),className:"btn w-1/3 btn-warning",children:[e(x,{className:"text-2xl  mr-3"}),e("span",{className:"hidden md:block",children:"Edit"})]})]})}),t("h2",{className:"mt-7 bg-red-300 p-3 rounded-lg shadow-md text-red-900",children:["Riwayat : ",n.length]}),e("div",{className:"divider my-1"}),e("div",{className:"overflow-x-auto",children:t("table",{className:"table  w-full z-0  bg-base-100",children:[e("thead",{className:"",children:t("tr",{className:"",children:[e("th",{children:"NO"}),e("th",{children:"TGL MASUK"}),e("th",{children:"STATUS"}),e("th",{children:"#"})]})}),e("tbody",{children:n.length?n.map((l,a)=>t("tr",{children:[e("td",{children:a+1}),e("td",{children:b(new Date(l.delivery_date),"dd LLLL yyyy",{locale:y})}),e("td",{children:e("div",{className:"badge badge-info",children:l.status})}),e("td",{children:e(c,{href:route("receipt.show",l.receipt_code),children:e(v,{className:"text-2xl text-sky-700"})})})]},a)):e("tr",{children:e("td",{colSpan:4,className:"text-center",children:"Data masih kosong"})})})]})}),r.location&&e(P,{})]})};j.layout=r=>e(u,{children:r,href:route("customers"),menu:!1});export{j as default};
