import{r as t,a as r}from"./app.886d159e.js";function d({type:s="text",name:n,value:a,className:o,autoComplete:u,placeHolder:c="",required:f,isFocused:i,handleChange:l,disabled:p}){const e=t.exports.useRef();return t.exports.useEffect(()=>{i&&e.current.focus()},[]),r("div",{className:"flex flex-col items-start",children:r("input",{type:s,name:n,value:a,min:"0",className:"input input-bordered w-full "+o,ref:e,autoComplete:u,placeholder:c,required:f,onChange:x=>l(x),disabled:p})})}export{d as I};
