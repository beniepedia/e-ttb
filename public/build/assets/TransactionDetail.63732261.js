import{r as N,j as t,a,F as n,b as u,t as y}from"./app.b635f412.js";import{P as h}from"./index.173378b6.js";import{W as g}from"./whatsapp.23ed22f3.js";import{c as p}from"./Helper.519f33e1.js";var v=["color","size","title"];function w(r,e){if(r==null)return{};var s=_(r,e),d,l;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(l=0;l<i.length;l++)d=i[l],!(e.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,d)||(s[d]=r[d]))}return s}function _(r,e){if(r==null)return{};var s={},d=Object.keys(r),l,i;for(i=0;i<d.length;i++)l=d[i],!(e.indexOf(l)>=0)&&(s[l]=r[l]);return s}var x=N.exports.forwardRef(function(r,e){var s=r.color,d=r.size,l=r.title,i=w(r,v);return t("svg",{ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:d,height:d,fill:s,...i,children:[l?a("title",{children:l}):null,a("path",{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"})]})});x.propTypes={color:h.string,size:h.oneOfType([h.string,h.number]),title:h.string};x.defaultProps={color:"currentColor",size:"1em",title:null};var P=x;const c=({children:r,className:e})=>a("div",{className:`divider font-semibold ${e}`,children:r}),O=()=>t(n,{children:[a("div",{className:"divider font-semibold mt-7",children:"Hubungi Kami"}),t("div",{className:"flex gap-5 justify-center my-7",children:[a("div",{className:"w-14 h-14 rounded-full bg-stone-500 flex justify-center items-center shadow",children:a("a",{href:"tel:08116407788",children:a(P,{className:"  text-white text-2xl cursor-pointer "})})}),a("div",{className:"w-14 h-14 rounded-full bg-green-600 flex justify-center items-center shadow",children:a("a",{href:"https://wa.me/628116407788",target:"_blank",children:a(g,{className:"  text-white  text-2xl  cursor-pointer"})})})]})]}),k=()=>{var l,i,o,m;const{receipt:r}=u().props,e=r==null?void 0:r.transaction,s=((l=e==null?void 0:e.payload)==null?void 0:l.qr_url)||null,d=()=>{var f;const b=(f=e==null?void 0:e.payload)==null?void 0:f.pay_code;navigator.clipboard.writeText(b).then(function(){y.info("Kode Virtual berhasil disalin.")},function(I){})};return t("div",{className:"border-2 border-yellow-600 alert-warning rounded-lg shadow mb-6 py-3",children:[t("div",{className:"flex justify-between px-4",children:[t("div",{children:[a("p",{className:"text-sm ",children:"Status Pembayaran "}),t("p",{className:"font-semibold text-[.90rem]",children:["( ",e.status," )"]})]}),t("div",{className:"flex items-end flex-col",children:[a("p",{className:"text-sm ",children:"Batas Bayar"}),a("p",{className:"text-[.90rem]",children:e.expired_time})]})]}),a(c,{className:"-mb-3 mt-2"}),t("p",{className:"mt-3 px-4 text-center text-[0.90rem]",children:["Segera lakukan pembayaran sebesar"," ",t("span",{className:"font-semibold",children:["Rp. ",p((i=e==null?void 0:e.payload)==null?void 0:i.amount),",-"]})," ","melalui"," ",a("span",{className:"font-semibold",children:(o=e==null?void 0:e.payload)==null?void 0:o.payment_name}),"."]}),t("p",{className:"flex flex-col mt-5 text-center",children:[s&&t("div",{className:"flex flex-col px-10 items-center gap-2 mb-5",children:[a("p",{className:"font-semibold",children:"SCAN DISINI"}),a("img",{src:s,alt:"qr code",className:"w-72 bg-white p-4 rounded-xl shadow border-4 border-amber-600"})]}),!s&&t(n,{children:[a("span",{className:"text-sm",children:"Kode Bayar :"}),t("span",{className:"px-4 text-lg font-semibold",onDoubleClick:()=>d(),children:[(m=e==null?void 0:e.payload)==null?void 0:m.pay_code," "]})]})]})]})},S=()=>{var s;const{receipt:r}=u().props,e=r.transaction;return t("div",{className:"border-2 border-green-500 bg-green-400 dark:bg-emerald-700 dark:text-emerald-100 rounded-lg shadow mb-6 py-3",children:[t("div",{className:"flex justify-between px-4",children:[a("p",{children:"Status Pembayaran "}),t("p",{className:"font-semibold ",children:["( ",e.status," )"]})]}),a(c,{className:"-mb-3 mt-2"}),t("p",{className:"mt-3 px-4 text-center text-[0.90rem]",children:["Tagihan sebesar"," ",t("span",{className:"font-semibold",children:["Rp. ",p((s=e==null?void 0:e.payload)==null?void 0:s.amount),",-"]})," ","sudah dibayar pada tanggal"," ",a("span",{className:"font-semibold",children:e==null?void 0:e.paid_at}),"."]})]})},j=({instructions:r})=>t(n,{children:[a(c,{children:"CARA PEMBAYARAN"}),a("div",{className:"mt-3 space-y-2",children:r.map((e,s)=>t("div",{tabIndex:0,className:"collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow text-sm",children:[a("div",{className:"collapse-title font-medium",children:e.title}),a("div",{className:"collapse-content",children:e.steps.map((d,l)=>a("p",{dangerouslySetInnerHTML:{__html:`<b>${l+1} )</b>. ${d}`}},l))})]},s))})]}),T=()=>{const{receipt:r}=u().props,e=r.transaction;return t("div",{className:"border-2 border-rose-500 bg-rose-300   rounded-lg shadow mb-6 py-3 text-red-900",children:[t("div",{className:"flex justify-between px-4",children:[t("div",{children:[a("p",{className:"text-sm",children:"Status Pembayaran :"}),t("p",{className:"font-semibold text-[.90rem]",children:[" ",e.status]})]}),t("div",{className:"flex items-end flex-col",children:[a("p",{className:"text-sm ",children:"Batas Bayar"}),a("p",{className:"text-[.90rem]",children:e.expired_time})]})]}),a(c,{className:"-mb-3 mt-1"}),a("p",{className:"mt-3 px-4 text-center text-[0.90rem]",children:"Waktu pembayaran sudah habis. Silahkan buat transaksi baru."})]})},B=()=>{const{receipt:r}=u().props,e=r.transaction;return t("div",{className:"border-2 border-rose-500 bg-rose-300  rounded-lg shadow mb-6 py-3 text-red-900",children:[t("div",{className:"flex justify-between px-4",children:[t("div",{children:[a("p",{className:"text-sm",children:"Status Pembayaran :"}),t("p",{className:"font-semibold",children:[" ",e.status]})]}),a("div",{className:"flex items-end flex-col",children:e.paid_at?t(n,{children:[a("p",{className:"text-sm ",children:"Tgl Bayar"}),a("p",{className:"text-[.90rem]",children:e.paid_at})]}):t(n,{children:[a("p",{className:"text-sm ",children:"Batas Bayar"}),a("p",{className:"text-[.90rem]",children:e.expired_time})]})})]}),a(c,{className:"-mb-3 mt-1"}),a("p",{className:"mt-3 px-4 text-center text-[0.90rem]",children:"Proses pembayaran gagal, silahkan coba lagi atau hubungi kami jika anda sudah melakukan transfer dana."})]})},E=()=>{var d,l,i,o,m,b;const{receipt:r}=u().props,e=r==null?void 0:r.transaction,s=(d=e==null?void 0:e.payload)==null?void 0:d.instructions;return t(n,{children:[e.transaction_status=="UNPAID"&&a(k,{}),e.transaction_status=="PAID"&&a(S,{}),e.transaction_status=="EXPIRED"&&a(T,{}),e.transaction_status=="FAILED"&&a(B,{}),a(c,{children:"DETAIL TRANSAKSI"}),a("div",{className:"overflow-x-auto mb-6",children:a("table",{className:"table w-full table-compact rounded shadow mb-3",children:t("tbody",{children:[t("tr",{children:[a("th",{children:"No. Invoice"}),a("th",{children:":"}),a("td",{children:e==null?void 0:e.invoice_number})]}),t("tr",{children:[a("th",{children:"Customer"}),a("th",{children:":"}),a("td",{children:(l=e==null?void 0:e.payload)==null?void 0:l.customer_name})]}),t("tr",{children:[a("th",{children:"Email"}),a("th",{children:":"}),a("td",{children:(i=e==null?void 0:e.payload)==null?void 0:i.customer_email})]}),t("tr",{children:[a("th",{children:"Rincian"}),a("th",{children:":"}),a("td",{children:(m=(o=e==null?void 0:e.payload)==null?void 0:o.order_items)==null?void 0:m[0].name})]}),t("tr",{children:[a("th",{children:"Tagihan"}),a("th",{children:":"}),t("td",{children:["Rp. ",p(e==null?void 0:e.amount)]})]}),t("tr",{children:[a("th",{children:"Diskon"}),a("th",{children:":"}),t("td",{children:["Rp. ",p(e==null?void 0:e.discount)]})]}),t("tr",{children:[a("th",{children:"Total"}),a("th",{children:":"}),t("td",{children:["Rp. ",p(e==null?void 0:e.amount_total)]})]}),t("tr",{children:[a("th",{children:"Status Bayar"}),a("th",{children:":"}),a("td",{children:e==null?void 0:e.status})]}),(e==null?void 0:e.paid_at)&&t("tr",{children:[a("th",{children:"Dibayar Pada"}),a("th",{children:":"}),a("td",{children:e==null?void 0:e.paid_at})]}),t("tr",{children:[a("th",{children:"Metode Bayar"}),a("th",{children:":"}),a("td",{children:(b=e==null?void 0:e.payload)==null?void 0:b.payment_name})]})]})})}),(e==null?void 0:e.transaction_status)=="UNPAID"&&a(j,{instructions:s})]})};export{O as B,c as D,E as T};