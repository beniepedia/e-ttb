import{b as s,r as c,j as t,a as e,L as i}from"./app.9963eaa9.js";import{M as h}from"./Main.4009c7c4.js";import{_ as n}from"./lodash.c7320667.js";import{f as o}from"./index.dbcb883f.js";import{i as m}from"./index.7f05af33.js";import{I as p}from"./info-circle-fill.5e85150d.js";const f=()=>{const{customer:r}=s().props,[a]=c.exports.useState(n.orderBy(r.receipts,["created_at"],["desc"]));return t("div",{className:"px-4 py-6",children:[e("div",{className:"avatar flex justify-center",children:e("div",{className:"w-1/2 md:w-1/3 lg:w-1/5 rounded-full border-white border-4 shadow-lg",children:e("img",{src:"/images/assets/profile_default.png",alt:"profile image"})})}),e("h2",{className:"text-center my-5 text-2xl",children:r.name}),e("table",{className:"table text-left table-zebra table-compact  w-full rounded-lg shadow-md z-0",children:t("tbody",{children:[t("tr",{children:[e("th",{children:"Nama"}),t("td",{children:[": ",r.name]})]}),t("tr",{children:[e("th",{children:"Handphone"}),t("td",{children:[": ",r.phone]})]}),t("tr",{children:[e("th",{children:"Whatsapp"}),t("td",{children:[": ",r.whatsapp]})]}),t("tr",{children:[e("th",{children:"Alamat"}),t("td",{children:[": ",r.address]})]})]})}),t("h2",{className:"mt-7 bg-red-300 p-3 rounded-lg shadow-md text-red-900",children:["Riwayat : ",a.length]}),e("div",{className:"divider my-1"}),e("div",{className:"overflow-auto",children:t("table",{className:"table table-compact w-full z-0 shadow-md",children:[e("thead",{children:t("tr",{children:[e("th",{children:"NO"}),e("th",{children:"TGL MASUK"}),e("th",{children:"STATUS"}),e("th",{children:"#"})]})}),e("tbody",{className:"text-sm",children:a.length?a.map((d,l)=>t("tr",{children:[e("td",{children:l+1}),e("td",{children:o(new Date(d.delivery_date),"dd LLLL yyyy",{locale:m})}),e("td",{children:e("div",{className:"badge badge-info",children:d.status})}),e("td",{children:e(i,{href:route("receipt.show",d.receipt_code),children:e(p,{className:"text-2xl text-sky-700"})})})]},l)):e("tr",{children:e("td",{colSpan:4,className:"text-center",children:"Data masih kosong"})})})]})})]})};f.layout=r=>e(h,{auth:r.props.auth,children:r,href:route("customers"),menu:!1});export{f as default};
