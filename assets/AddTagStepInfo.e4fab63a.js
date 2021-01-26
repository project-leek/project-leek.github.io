import{d as e,a,c as l,h as t,e as u,f as o,l as r,r as n,w as s}from"./index.cb861a17.js";import{_ as p,a as d,L as c}from"./LabeledInput.26802033.js";class i extends class{}{}var f=e({name:"Textfield",props:{placeholder:{type:String,default:""},modelValue:{type:String,default:""},icon:{type:String,default:""}},emits:{"update:modelValue":e=>!0}});const m={class:"textfield flex flex-row border-2 bg-white border-yellow-400 px-4 py-1 rounded-full focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-25 shadow-lg"};f.render=function(e,o,r,n,s,p){return a(),l("div",m,[e.icon?(a(),l("span",{key:0,class:["icon mr-4 text-xl my-auto",["fas",`fa-${e.icon}`]]},null,2)):t("",!0),u("input",{class:"input w-full outline-none bg-transparent placeholder-opacity-50 text-xl",placeholder:e.placeholder,type:"text",value:e.modelValue,onInput:o[1]||(o[1]=a=>e.$emit("update:modelValue",a.target.value))},null,40,["placeholder","value"])])};var g=e({name:"AddTagStepInfo",components:{Textfield:f,Dropdown:p,LabeledInput:d},props:{nfcTag:{type:Object,required:!0}},emits:{"update:nfc-tag":e=>!0},setup(e,a){const l=o(e.nfcTag),t=o([]),u=o([]),n=o();return async function(){const e=await r.service("nfc-tags").find();e instanceof Array?e.map((e=>{e.group&&!t.value.includes(e.group)&&t.value.push(e.group)})):e.data.map((e=>{e.group&&!t.value.includes(e.group)&&t.value.push(e.group)})),t.value.map((e=>u.value.push(new c(e,e)))),n.value=u.value.find((e=>e.value===l.value.group))}().catch((()=>{throw Error("failed to load group names")})),{currentTag:l,groupListItems:u,selectedGroup:n,selectGroup:function(){var e;l.value.group=(null==(e=n.value)?void 0:e.value)||"",a.emit("update:nfc-tag",l.value)}}}});const v={class:"w-full p-4 h-full flex flex-col items-center"};g.render=function(e,t,o,r,p,d){const c=n("Textfield"),i=n("LabeledInput"),f=n("Dropdown");return a(),l("div",v,[u(i,{label:"Tag Name",class:"w-full"},{default:s((()=>[u(c,{modelValue:e.currentTag.name,"onUpdate:modelValue":t[1]||(t[1]=a=>e.currentTag.name=a),placeholder:"z. B. Mario Figur",class:"rounded-full",onUpdate:t[2]||(t[2]=a=>e.$emit("update:nfc-tag",e.currentTag))},null,8,["modelValue"])])),_:1}),u(i,{label:"Gruppe",class:"w-full mt-8"},{default:s((()=>[u(f,{modelValue:e.selectedGroup,"onUpdate:modelValue":[t[3]||(t[3]=a=>e.selectedGroup=a),t[5]||(t[5]=a=>e.selectGroup())],items:e.groupListItems,"onUpdate:items":t[4]||(t[4]=a=>e.groupListItems=a),removeable:!1,"placeholder-text":"Wähle eine Gruppe","enable-add-item":!0},null,8,["modelValue","items"])])),_:1})])};export{i as N,f as _,g as a};
