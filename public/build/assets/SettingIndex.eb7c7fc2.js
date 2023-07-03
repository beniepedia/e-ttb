import{a,j as s,b as k,u as y,t as g,r as v,F as _,H as w}from"./app.e1bbd4ff.js";import{B as f}from"./Button.0dab4b1b.js";import{L as c}from"./Label.2df1a80f.js";import{I as d}from"./Input.bb0ea29d.js";import{M as N}from"./Main.91fe0c1a.js";import"./index.173378b6.js";import"./Modal.5d6a1c8c.js";import"./Helper.6ea62d54.js";const h=({className:e,name:n,onHandleChange:r,checked:l=!1,disabled:m=!1})=>a("input",{disabled:m,type:"checkbox",className:`toggle ${e}`,onChange:i=>r(i),checked:l,name:n}),p=({title:e,children:n})=>s("div",{children:[e,a("span",{className:"text-[0.80rem] block text-slate-500",children:n})]}),x=()=>{const{app_setting:e}=k().props,n=!(e!=null&&e.tripay_server_key)||!(e!=null&&e.tripay_api_key)||!(e!=null&&e.tripay_merchant_code),r=!(e!=null&&e.whatsapp_session_name)||!(e!=null&&e.whatsapp_server),l=!(e!=null&&e.telegram_admin_chat_id)||!(e!=null&&e.telegram_bot_token),{post:m,data:i,setData:u,processing:b}=y({app_debug:(e==null?void 0:e.app_debug)||!1,is_develop:(e==null?void 0:e.is_develop)||!1,pay_online:(e==null?void 0:e.pay_online)||!1,whatsapp_gateway:(e==null?void 0:e.whatsapp_gateway)||!1,telegram_gateway:(e==null?void 0:e.telegram_gateway)||!1,password_reset:(e==null?void 0:e.password_reset)||!1}),t=o=>{u(o.target.name,o.target.checked)};return s("form",{className:"my-6 space-y-5 ",onSubmit:o=>{o.preventDefault(),m(route("admin.setting.store"),{onSuccess:()=>{g.success("Pengaturan berhasil disimpan!")}})},onKeyDown:o=>{o.key==="Enter"&&(void 0).submit()},children:[s("div",{className:"flex gap-3 justify-between items-center",children:[a(p,{title:"App Debug",children:"Jika diaktifkan semua error akan ditampilkan pada browser."}),a(h,{onHandleChange:t,name:"app_debug",checked:i.app_debug})]}),s("div",{className:"flex gap-3 justify-between items-center",children:[a(p,{title:"Mode Pengembang",children:"Aktifkan opsi ini jika aplikasi masih tahap pengembangan."}),a(h,{onHandleChange:t,name:"is_develop",checked:i.is_develop})]}),s("div",{className:"flex gap-3 justify-between items-center",children:[a(p,{title:"Notifikasi Whatsapp",children:"Aktifkan notifikasi menggunakan whatsapp. Sebelum mengaktifkan fitur ini lengkapi pengaturan Whatsapp."}),a(h,{disabled:r,onHandleChange:t,name:"whatsapp_gateway",checked:i.whatsapp_gateway})]}),s("div",{className:"flex gap-3 justify-between items-center",children:[a(p,{title:"Notifikasi Telegram",children:"Aktifkan notifikasi / bot menggunakan telegram. Sebelum mengaktifkan fitur ini lengkapi pengaturan Telegram."}),a(h,{disabled:l,onHandleChange:t,name:"telegram_gateway",checked:i.telegram_gateway})]}),s("div",{className:"flex gap-3 justify-between items-center",children:[a(p,{title:"Pembayaran online",children:"Aktifkan jika ingin menerima pembayaran dari online, Misal Transfer Bank / QRIS. Sebelum mengaktifkan fitur ini lengkapi pengaturan Pembayaran."}),a(h,{disabled:n,onHandleChange:t,name:"pay_online",checked:i.pay_online})]}),s("div",{className:"flex gap-3 justify-between items-center",children:[a(p,{title:"Reset Kata Sandi",children:"Aktifkan fitur reset kata sandi. Fitur ini dapat berjalan jika fitur kirim email sudah aktif."}),a(h,{onHandleChange:t,name:"password_reset",checked:i.password_reset})]}),a("div",{className:"pt-5 md:float-right",children:a(f,{type:"submit",className:"btn-block md:btn-md",processing:b,children:"Simpan"})})]})},D=()=>{const{app_setting:e}=k().props,{data:n,setData:r,post:l,processing:m}=y({tripay_merchant_code:(e==null?void 0:e.tripay_merchant_code)||"",tripay_api_key:(e==null?void 0:e.tripay_api_key)||"",tripay_pivate_key:(e==null?void 0:e.tripay_pivate_key)||""}),i=t=>{r(t.target.name,t.target.value)};return a("form",{className:"my-6",onSubmit:t=>{t.preventDefault(),l(route("admin.setting.store"),{onSuccess:()=>{g.success("Pengaturan berhasil disimpan!")}})},onKeyDown:t=>{t.key==="Enter"&&(void 0).submit()},children:s("div",{className:"space-y-4",children:[s("div",{children:[a(c,{children:"Tripay Merchant Code"}),a(d,{name:"tripay_merchant_code",value:n.tripay_merchant_code,className:"text-sm",handleChange:i,required:!0,placeHolder:"Masukkan kode merchant tripay"})]}),s("div",{children:[a(c,{children:"Tripay Api Key"}),a(d,{required:!0,name:"tripay_api_key",value:n.tripay_api_key,handleChange:i,className:"text-sm",placeHolder:"Masukkan Kunci Api Tripay"})]}),s("div",{children:[a(c,{children:"Tripay Private Key"}),a(d,{required:!0,name:"tripay_pivate_key",value:n.tripay_pivate_key,handleChange:i,className:"text-sm",placeHolder:"Masukkan Kunci private Tripay"})]}),a("div",{className:"pt-5 md:float-right",children:a(f,{type:"submit",className:"btn-block md:btn-md",processing:m,children:"Simpan"})})]})})},C=()=>{const{app_setting:e}=k().props,{data:n,setData:r,post:l,processing:m}=y({telegram_bot_token:(e==null?void 0:e.telegram_bot_token)||"",telegram_admin_chat_id:(e==null?void 0:e.telegram_admin_chat_id)||""}),i=t=>{r(t.target.name,t.target.value)};return a("form",{className:"my-6",onSubmit:t=>{t.preventDefault(),l(route("admin.setting.store"),{onSuccess:()=>{g.success("Pengaturan berhasil disimpan!")}})},onKeyDown:t=>{t.key==="Enter"&&(void 0).submit()},children:s("div",{className:"space-y-4",children:[s("div",{children:[a(c,{children:"Telegram Token"}),a(d,{name:"telegram_bot_token",value:n.telegram_bot_token,className:"text-sm",handleChange:i,required:!0,placeHolder:"Masukkan token bot telegram"})]}),s("div",{children:[a(c,{children:"Telegram Admin Chat ID"}),a(d,{required:!0,name:"telegram_admin_chat_id",value:n.telegram_admin_chat_id,handleChange:i,className:"text-sm",placeHolder:"Masukkan chat id admin"})]}),a("div",{className:"pt-5 md:float-right",children:a(f,{type:"submit",className:"btn-block md:btn-md",processing:m,children:"Simpan"})})]})})},S=()=>{const{app_setting:e}=k().props,{data:n,setData:r,post:l,processing:m}=y({whatsapp_session_name:(e==null?void 0:e.whatsapp_session_name)||"",whatsapp_server:(e==null?void 0:e.whatsapp_server)||""}),i=t=>{r(t.target.name,t.target.value)};return a("form",{className:"my-6",onSubmit:t=>{t.preventDefault(),l(route("admin.setting.store"),{onSuccess:()=>{g.success("Pengaturan berhasil disimpan!")}})},onKeyDown:t=>{t.key==="Enter"&&(void 0).submit()},children:s("div",{className:"space-y-4",children:[s("div",{children:[a(c,{children:"Whatsapp Session Name"}),a(d,{name:"whatsapp_session_name",value:n.whatsapp_session_name,className:"text-sm",handleChange:i,required:!0,placeHolder:"Masukkan nama session whatsapp"}),n.whatsapp_server&&s("p",{className:"text-sm mt-1 text-slate-400",children:["Buat nama session baru."," ",a("a",{href:`${n.whatsapp_server}/start-session?session=${n.whatsapp_session_name}&scan=true`,className:"font-semibold",target:"_blank",children:"Klik Disini"})]})]}),s("div",{children:[a(c,{children:"Whastapp Server"}),a(d,{required:!0,name:"whatsapp_server",value:n.whatsapp_server,handleChange:i,className:"text-sm",placeHolder:"Masukkan alamat server whatsapp"})]}),a("div",{className:"pt-5 md:float-right",children:a(f,{type:"submit",className:"btn-block md:btn-md",processing:m,children:"Simpan"})})]})})},T=()=>{const[e,n]=v.exports.useState("general");return s(_,{children:[a(w,{title:"Pengaturan"}),a("div",{className:"shadow p-4",children:a("h2",{className:"font-semibold text-slate-600",children:"PENGATURAN"})}),s("div",{className:"tabs mt-3 ",children:[a("a",{onClick:()=>n("general"),className:`tab tab-lifted ${e==="general"?"tab-active":""}`,children:"Umum"}),a("a",{onClick:()=>n("payment"),className:`tab tab-lifted ${e==="payment"?"tab-active":""}`,children:"Pembayaran"}),a("a",{onClick:()=>n("whatsapp"),className:`tab tab-lifted ${e==="whatsapp"?"tab-active":""}`,children:"Whatsapp"}),a("a",{onClick:()=>n("telegram"),className:`tab tab-lifted ${e==="telegram"?"tab-active":""}`,children:"Telegram"})]}),s("div",{className:"px-6 ",children:[e==="general"&&a(x,{}),e==="payment"&&a(D,{}),e==="whatsapp"&&a(S,{}),e==="telegram"&&a(C,{})]})]})};T.layout=e=>a(N,{children:e});export{T as default};
