import{a,j as n,b as v,u as w,t as d,r as x,F as T,H as C}from"./app.fb88118a.js";import{B as y}from"./Button.55fc6553.js";import{I as u}from"./Input.9e5f9a63.js";import{L as b}from"./Label.0dffee9b.js";import{a as N}from"./index.59c7c3ba.js";import{M as S}from"./Main.2785bfb0.js";import"./Helper.78f15df2.js";import"./whatsapp.68a949c4.js";import"./Modal.188a0d5e.js";const k=({className:e,name:i,onHandleChange:l,checked:c=!1,disabled:p=!1})=>a("input",{disabled:p,type:"checkbox",className:`toggle ${e}`,onChange:r=>l(r),checked:c,name:i}),g=({title:e,children:i})=>n("div",{children:[e,a("span",{className:"text-[0.80rem] block text-slate-500",children:i})]}),P=()=>{const{app_setting:e}=v().props,i=!(e!=null&&e.tripay_private_key)||!(e!=null&&e.tripay_api_key)||!(e!=null&&e.tripay_merchant_code),l=!(e!=null&&e.whatsapp_session_name)||!(e!=null&&e.whatsapp_server),c=!(e!=null&&e.telegram_admin_chat_id)||!(e!=null&&e.telegram_bot_token),{post:p,data:r,setData:h,processing:o}=w({app_debug:(e==null?void 0:e.app_debug)||!1,is_develop:(e==null?void 0:e.is_develop)=="local",pay_online:(e==null?void 0:e.pay_online)||!1,whatsapp_gateway:(e==null?void 0:e.whatsapp_gateway)||!1,telegram_gateway:(e==null?void 0:e.telegram_gateway)||!1,password_reset:(e==null?void 0:e.password_reset)||!1}),t=m=>{h(m.target.name,m.target.checked)},f=m=>{m.key==="Enter"&&_(m)},_=m=>{m.preventDefault(),m.stopPropagation(),p(route("admin.setting.store"),{onSuccess:()=>{d.success("Pengaturan berhasil disimpan!")}})};return n("form",{className:"my-6 space-y-5 ",onSubmit:_,onKeyDown:f,children:[n("div",{className:"flex gap-3 justify-between items-center",children:[a(g,{title:"App Debug",children:"Jika diaktifkan semua error akan ditampilkan pada browser."}),a(k,{onHandleChange:t,name:"app_debug",checked:r.app_debug})]}),n("div",{className:"flex gap-3 justify-between items-center",children:[a(g,{title:"Mode Pengembang",children:"Aktifkan opsi ini jika aplikasi masih tahap pengembangan."}),a(k,{onHandleChange:t,name:"is_develop",checked:r.is_develop})]}),n("div",{className:"flex gap-3 justify-between items-center",children:[a(g,{title:"Notifikasi Whatsapp",children:"Aktifkan notifikasi menggunakan whatsapp. Sebelum mengaktifkan fitur ini lengkapi pengaturan Whatsapp."}),a(k,{disabled:l,onHandleChange:t,name:"whatsapp_gateway",checked:r.whatsapp_gateway})]}),n("div",{className:"flex gap-3 justify-between items-center",children:[a(g,{title:"Notifikasi Telegram",children:"Aktifkan notifikasi / bot menggunakan telegram. Sebelum mengaktifkan fitur ini lengkapi pengaturan Telegram."}),a(k,{disabled:c,onHandleChange:t,name:"telegram_gateway",checked:r.telegram_gateway})]}),n("div",{className:"flex gap-3 justify-between items-center",children:[a(g,{title:"Pembayaran online",children:"Aktifkan jika ingin menerima pembayaran dari online, Misal Transfer Bank / QRIS. Sebelum mengaktifkan fitur ini lengkapi pengaturan Pembayaran."}),a(k,{disabled:i,onHandleChange:t,name:"pay_online",checked:r.pay_online})]}),n("div",{className:"flex gap-3 justify-between items-center",children:[a(g,{title:"Reset Kata Sandi",children:"Aktifkan fitur reset kata sandi. Fitur ini dapat berjalan jika fitur kirim email sudah aktif."}),a(k,{onHandleChange:t,name:"password_reset",checked:r.password_reset})]}),a("div",{className:"pt-5 md:float-right",children:a(y,{type:"submit",className:"btn-block md:btn-md btn-success",processing:o,children:"Simpan"})})]})},D=()=>{const{app_setting:e}=v().props,{data:i,setData:l,post:c,processing:p}=w({tripay_merchant_code:(e==null?void 0:e.tripay_merchant_code)||"",tripay_api_key:(e==null?void 0:e.tripay_api_key)||"",tripay_private_key:(e==null?void 0:e.tripay_private_key)||""}),r=t=>{l(t.target.name,t.target.value)},h=t=>{t.key==="Enter"&&o(t)},o=t=>{t.preventDefault(),t.stopPropagation(),c(route("admin.setting.store"),{onSuccess:()=>{d.success("Pengaturan berhasil disimpan!")}})};return a("form",{className:"my-6",onSubmit:o,onKeyDown:h,children:n("div",{className:"space-y-4",children:[n("div",{children:[a(b,{children:"Tripay Merchant Code"}),a(u,{name:"tripay_merchant_code",value:i.tripay_merchant_code,className:"text-sm",handleChange:r,required:!0,placeHolder:"Masukkan kode merchant tripay"})]}),n("div",{children:[a(b,{children:"Tripay Api Key"}),a(u,{required:!0,name:"tripay_api_key",value:i.tripay_api_key,handleChange:r,className:"text-sm",placeHolder:"Masukkan Kunci Api Tripay"})]}),n("div",{children:[a(b,{children:"Tripay Private Key"}),a(u,{required:!0,name:"tripay_private_key",value:i.tripay_private_key,handleChange:r,className:"text-sm",placeHolder:"Masukkan Kunci private Tripay"})]}),a("div",{className:"pt-5 md:float-right",children:a(y,{type:"submit",className:"btn-block md:btn-md btn-success",processing:p,children:"Simpan"})})]})})},j=()=>{const{app_setting:e}=v().props,{data:i,setData:l,post:c,processing:p}=w({telegram_bot_token:(e==null?void 0:e.telegram_bot_token)||"",telegram_admin_chat_id:(e==null?void 0:e.telegram_admin_chat_id)||""}),r=t=>{l(t.target.name,t.target.value)},h=t=>{t.key==="Enter"&&o(t)},o=t=>{t.preventDefault(),t.stopPropagation(),c(route("admin.setting.store"),{onSuccess:()=>{d.success("Pengaturan berhasil disimpan!")}})};return a("form",{className:"my-6",onSubmit:o,onKeyDown:h,children:n("div",{className:"space-y-4",children:[n("div",{children:[a(b,{children:"Telegram Token"}),a(u,{name:"telegram_bot_token",value:i.telegram_bot_token,className:"text-sm",handleChange:r,required:!0,placeHolder:"Masukkan token bot telegram"})]}),n("div",{children:[a(b,{children:"Telegram Admin Chat ID"}),a(u,{required:!0,name:"telegram_admin_chat_id",value:i.telegram_admin_chat_id,handleChange:r,className:"text-sm",placeHolder:"Masukkan chat id admin"})]}),a("div",{className:"pt-5 md:float-right",children:a(y,{type:"submit",className:"btn-block md:btn-md btn-success",processing:p,children:"Simpan"})})]})})},K=()=>{const{app_setting:e}=v().props,[i,l]=x.exports.useState(!1),{data:c,setData:p,post:r,processing:h}=w({whatsapp_session_name:(e==null?void 0:e.whatsapp_session_name)||"",whatsapp_server:(e==null?void 0:e.whatsapp_server)||""}),o=s=>{p(s.target.name,s.target.value)},t=s=>{s.key==="Enter"&&f(s)},f=s=>{s.preventDefault(),s.stopPropagation(),r(route("admin.setting.store"),{onSuccess:()=>{d.success("Pengaturan berhasil disimpan!")}})},_=()=>{l(!0),N.post(route("whatsapp.sendMessage"),{text:"PING https://tandaterima.online/images/ttb/ttb_2006202328-117.png",to:"628217441607"}).then(({data:s})=>{(s==null?void 0:s.status_code)==404?d.error("Session tidak ditemukan!"):(s==null?void 0:s.status_code)==500?d.error("Gagal mengirim pesan, Terjadi kesalahan pada server!"):d.success("Pesan berhasil dikirim!")}).finally(()=>{l(!1)})},m=async()=>{l(!0),N.post(route("whatsapp.sendMedia"),{media:"https://tandaterima.online/images/ttb/ttb_2006202328-117.png",to:"6282174416077",text:"tes"}).then(({data:s})=>{(s==null?void 0:s.status_code)==404?d.error("Session tidak ditemukan!"):(s==null?void 0:s.status_code)==500?d.error("Gagal mengirim pesan, Terjadi kesalahan pada server!"):d.success("Pesan berhasil dikirim!")}).finally(()=>{l(!1)})};return a("form",{className:"my-6",onSubmit:f,onKeyDown:t,children:n("div",{className:"space-y-4",children:[n("div",{children:[a(b,{children:"Whatsapp Session Name"}),a(u,{name:"whatsapp_session_name",value:c.whatsapp_session_name,className:"text-sm",handleChange:o,required:!0,placeHolder:"Masukkan nama session whatsapp"})]}),n("div",{children:[a(b,{children:"Whastapp Server"}),a(u,{required:!0,name:"whatsapp_server",value:c.whatsapp_server,handleChange:o,className:"text-sm",placeHolder:"Masukkan alamat server whatsapp"})]}),a("div",{className:"pt-5 ",children:n("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[a(y,{processing:i,className:"btn-accent btn-block",handleClick:m,type:"button",children:"Tes Kirim Gambar"}),a(y,{processing:i,className:"btn-warning btn-block",handleClick:_,type:"button",children:"Tes Kirim Pesan"}),a(y,{type:"submit",className:"btn-block btn-success",processing:h,children:"Simpan"})]})})]})})},M=()=>{const[e,i]=x.exports.useState("general");return n(T,{children:[a(C,{title:"Pengaturan"}),a("div",{className:"shadow p-4",children:a("h2",{className:"font-semibold text-slate-600",children:"PENGATURAN"})}),n("div",{className:"tabs mt-3 ",children:[a("a",{onClick:()=>i("general"),className:`tab tab-lifted ${e==="general"?"tab-active":""}`,children:"Umum"}),a("a",{onClick:()=>i("payment"),className:`tab tab-lifted ${e==="payment"?"tab-active":""}`,children:"Pembayaran"}),a("a",{onClick:()=>i("whatsapp"),className:`tab tab-lifted ${e==="whatsapp"?"tab-active":""}`,children:"Whatsapp"}),a("a",{onClick:()=>i("telegram"),className:`tab tab-lifted ${e==="telegram"?"tab-active":""}`,children:"Telegram"})]}),n("div",{className:"px-6 ",children:[e==="general"&&a(P,{}),e==="payment"&&a(D,{}),e==="whatsapp"&&a(K,{}),e==="telegram"&&a(j,{})]})]})};M.layout=e=>a(S,{children:e});export{M as default};
