import{d as e,_ as t,e as a,r as n,b as o,l as s,f as i,a as l,c as d,w as r,g as c,h as u}from"./index.3da84c45.js";import{_ as m}from"./LabeledInput.f4b141a0.js";import{_ as f}from"./Loading.bf0970cc.js";var b=e({name:"Setup",components:{Button:t,Textfield:a,LabeledInput:m,Loading:f},setup(){const e=n(""),t=n(!1);return o((async()=>{await s()})),{saveBackend:async()=>{t.value=!0,await s(e.value||"localhost:3000")},boxId:e,isTestingConnection:t}}});const p={class:"flex w-full bg-gradient-to-b from-primary to-secondary p-4 items-center content-center"},x=c("p",{class:"font-heading font-light text-white text-center text-3xl mb-8"}," Verbinde dich mit deiner Leek Box ",-1);b.render=function(e,t,a,n,o,s){const m=i("Loading"),f=i("Textfield"),b=i("LabeledInput"),g=i("Button");return l(),d("div",p,[e.isTestingConnection?(l(),d(m,{key:0,class:"m-auto"})):(l(),d("form",{key:1,class:"flex flex-col form m-auto",onSubmit:t[2]||(t[2]=r(((...t)=>e.saveBackend&&e.saveBackend(...t)),["prevent"]))},[x,c(b,{label:"Bitte trage die ID deiner Box ein"},{default:u((()=>[c(f,{modelValue:e.boxId,"onUpdate:modelValue":t[1]||(t[1]=t=>e.boxId=t),placeholder:"192.168.0.123"},null,8,["modelValue"])])),_:1}),c(g,{class:"mt-8 p-2 ring-button ring-2",type:"submit",text:"Verbinden"})],32))])};export default b;
