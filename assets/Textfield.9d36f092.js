import{d as e,a as l,c as a,t,g as o,e as r}from"./index.97464308.js";var n=e({props:{placeholder:{type:String,default:""},modelValue:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""}},emits:["update:modelValue"]});const s={class:"max-w-max flex flex-col"},u={key:0,class:"font-bold pl-4"},d={class:"flex flex-row border-2 bg-white border-yellow-400 px-4 py-1 rounded-full focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-25 shadow-lg"};n.render=function(e,n,p,c,i,f){return l(),a("div",s,[e.label?(l(),a("p",u,t(e.label),1)):o("",!0),r("div",d,[e.icon?(l(),a("span",{key:0,class:["mr-4 text-xl my-auto",["fas",`fa-${e.icon}`]]},null,2)):o("",!0),r("input",{class:"focus: outline-none bg-transparent placeholder-opacity-50 text-2xl",placeholder:e.placeholder,type:"text",value:e.modelValue,onInput:n[1]||(n[1]=l=>e.$emit("update:modelValue",l.target.value))},null,40,["placeholder","value"])])])};export{n as _};
