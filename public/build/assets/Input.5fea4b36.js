import{r,a as o}from"./app.b635f412.js";function x({type:s="text",name:t,value:n,className:u,autoComplete:a,placeHolder:c="",required:f,isFocused:l,handleChange:d,disabled:i}){const e=r.exports.useRef();return r.exports.useEffect(()=>{l&&e.current.focus()},[]),o("div",{className:"flex flex-col items-start",children:o("input",{type:s,name:t,value:n,min:"0",className:"input shadow rounded focus:outline-none focus:border-green-600 dark:focus:border-emerald-600 border-2 w-full "+u,ref:e,autoComplete:a,placeholder:c,required:f,onChange:p=>d(p),disabled:i})})}export{x as I};
