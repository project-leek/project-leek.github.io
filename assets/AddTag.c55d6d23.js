import{d as e,e as a,r as t,q as l,f as n,a as s,c as r,h as o,i as c,u,o as p,M as d,_ as f,t as i,g,y as m,F as v,C as x}from"./index.980530d0.js";import{_ as T}from"./LabeledInput.4a09b050.js";import"./Loading.f03b0813.js";import{a as h,_ as w}from"./AddTagStepTrack.e7562b1b.js";import{_ as y,L as b}from"./Dropdown.ab309026.js";import{N as k}from"./nfc-tag.class.5688d583.js";var S=e({name:"AddTagStepInfo",components:{Textfield:a,Dropdown:y,LabeledInput:T},props:{nfcTag:{type:Object,required:!0}},emits:{"update:nfc-tag":e=>!0},setup(e,a){const n=t(e.nfcTag),s=t([]),r=t([]),o=t();return async function(){const e=await l.service("nfc-tags").find();e instanceof Array?e.map((e=>{e.group&&!s.value.includes(e.group)&&s.value.push(e.group)})):e.data.map((e=>{e.group&&!s.value.includes(e.group)&&s.value.push(e.group)})),s.value.map((e=>r.value.push(new b(e,e)))),o.value=r.value.find((e=>e.value===n.value.group))}().catch((()=>{throw Error("failed to load group names")})),{currentTag:n,groupListItems:r,selectedGroup:o,selectGroup:function(){var e;n.value.group=(null==(e=o.value)?void 0:e.value)||"",a.emit("update:nfc-tag",n.value)}}}});const D={class:"w-full p-4 h-full flex flex-col items-center"};S.render=function(e,a,t,l,u,p){const d=n("Textfield"),f=n("LabeledInput"),i=n("Dropdown");return s(),r("div",D,[o(f,{label:"Tag Name",class:"w-full"},{default:c((()=>[o(d,{modelValue:e.currentTag.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.currentTag.name=a),placeholder:"z. B. Mario Figur",class:"rounded-full",onUpdate:a[2]||(a[2]=a=>e.$emit("update:nfc-tag",e.currentTag))},null,8,["modelValue"])])),_:1}),o(f,{label:"Gruppe",class:"w-full mt-8"},{default:c((()=>[o(i,{modelValue:e.selectedGroup,"onUpdate:modelValue":[a[3]||(a[3]=a=>e.selectedGroup=a),a[5]||(a[5]=a=>e.selectGroup())],items:e.groupListItems,"onUpdate:items":a[4]||(a[4]=a=>e.groupListItems=a),removeable:!1,"placeholder-text":"Wähle eine Gruppe","enable-add-item":!0},null,8,["modelValue","items"])])),_:1})])};var j=e({name:"AddTagStepPlaceOnReader",props:{nfcTag:{type:Object,default:null}},emits:{proceed:()=>!0,"update:nfc-tag":e=>!0},setup(e,a){const n=t(),s=u(),r=e=>{(async()=>{if(!e.attachedTagData)return;(await l.service("nfc-tags").find({query:{nfcData:e.attachedTagData}})).total>0&&(alert("Der Tag wurde bereits angelegt!"),s.push({name:"home"})),n.value&&(n.value.nfcData=e.attachedTagData,a.emit("update:nfc-tag",n.value),a.emit("proceed"))})()};p((()=>{n.value=new k,a.emit("update:nfc-tag",n.value),l.service("nfc-readers").on("patched",r).on("updated",r)})),d((()=>{l.service("nfc-readers").off("patched",r).off("updated",r)}))}});const C={class:"add-tag-step-place-tag-on-reader p-6 flex h-full w-full my-auto"},I=o("img",{class:"object-contain",src:"/assets/attach-tag.59c277b1.gif"},null,-1);j.render=function(e,a,t,l,n,o){return s(),r("div",C,[I])};var L=e({name:"AddTag",components:{Button:f},setup(){const e=t(null),a=[j,S,h,w],n=t(0),s=u();return{activeStep:n,steps:a,nfcTag:e,updateTag:a=>{e.value=a},saveTag:async()=>{e.value&&(await l.service("nfc-tags").create(e.value),s.push({name:"home"}),alert("Neuen Tag erfolgreich erstellt."))},previousStep:()=>{n.value-=1},nextStep:()=>{n.value+=1}}}});const G={class:"add-tag w-full flex flex-col"},U={class:"p-8 flex flex-row"},V={class:"headlines ml-2 flex flex-col my-auto"},_=o("span",{class:"text-3xl"},"Neuen Tag anlegen",-1),A={key:0},N={class:"bg-gradient-to-b from-primary to-secondary w-full flex flex-col flex-grow overflow-y-auto"},F={class:"flex flex-col items-center"},q={class:"steps flex flex-row justify-center transform -translate-y-3 bg-white rounded-t-md px-2 py-1"},z={class:"actions flex flex-row w-full justify-center mb-4 px-4"},B={key:3,class:"text-center"};L.render=function(e,a,t,l,c,u){const p=n("Button");return s(),r("div",G,[o("header",U,[o(p,{back:"",round:"",icon:"fas fa-times",class:"h-10 w-10","icon-size":6}),o("div",V,[_,e.nfcTag&&e.nfcTag.nfcData?(s(),r("span",A,"Tag-ID: #"+i(e.nfcTag.nfcData),1)):g("",!0)])]),o("main",N,[(s(),r(m(e.steps[e.activeStep]),{"nfc-tag":e.nfcTag,"onUpdate:nfcTag":e.updateTag,onProceed:a[1]||(a[1]=a=>e.activeStep++)},null,8,["nfc-tag","onUpdate:nfcTag"]))]),o("footer",F,[o("ul",q,[(s(!0),r(v,null,x(e.steps.length,(a=>(s(),r("li",{key:a,class:"mx-2"},i(e.activeStep===a-1?"x":"o"),1)))),128))]),o("div",z,[0!==e.activeStep?(s(),r(p,{key:0,round:"","text-size":5,icon:"fas fa-chevron-left",class:"mr-4 px-4 py-2 text-center",onClick:e.previousStep},null,8,["onClick"])):g("",!0),e.activeStep===e.steps.length-1?(s(),r(p,{key:1,round:"",class:"flex-grow p-2",icon:"fas fa-download",text:"Tag erstellen",onClick:e.saveTag},null,8,["onClick"])):0!==e.activeStep?(s(),r(p,{key:2,class:"flex-grow p-2",icon:"fas fa-chevron-right",round:"",text:"Weiter",onClick:e.nextStep},null,8,["onClick"])):(s(),r("span",B,"Zum Fortfahren bitte NFC Tag an den Reader halten!"))])])])};export default L;
