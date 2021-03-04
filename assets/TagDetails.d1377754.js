import{d as a,f as e,_ as t,B as l,u as s,T as n,C as i,r,U as o,o as c,H as f,K as d,Q as g,M as u,L as m,h as p,a as x,c as T,j as v,t as y,i as k,k as w}from"./index.b14460f5.js";import{a as h,_ as b,g as I}from"./TagStepTrack.d06f3800.js";import{_ as U}from"./Dropdown.931d1608.js";import{_ as N}from"./LabeledInput.b49b45b7.js";import"./Loading.2b52e5e2.js";var _=a({name:"TagDetails",components:{Textfield:e,Dropdown:U,LabeledInput:N,Button:t,TagStepImage:h,TagStepTrack:b,TagEntry:l},props:{tagId:{type:String,required:!0}},setup(a){const e=s(),t=n(),l=i((()=>t.name)),p=r(),x=r(),T=o(p),v=i({get:()=>p.value&&new m(p.value.group),set:a=>{p.value&&(p.value.group=(null==a?void 0:a.value)||"")}});c((async()=>{try{p.value=await f.service("nfc-tags").get(a.tagId)}catch(t){e.push({name:"tag-not-found"})}await d()})),g((()=>{var a;return null==(a=p.value)?void 0:a.trackUri}),(async a=>{p.value&&(x.value&&a===x.value.uri||(x.value=await I(p.value)),p.value.imageUrl)}));return{nfcTag:p,nfcTagTrack:x,nfcTagGroup:v,isNfcTagValid:T,saveNfcTag:async()=>{p.value&&(await f.service("nfc-tags").patch(p.value._id,p.value),alert("Tag erfolgreich gespeichert."),await e.push({name:"home"}))},routeName:l,tagGroupListItems:u,cut:(a,e)=>a.length<e?a:`${a.substr(0,e)} ...`}}});const j={class:"mx-auto h-full w-full flex flex-col overflow-hidden"},G={class:"p-4 flex flex-row items-center space-x-5"},L={class:"ml-2 flex flex-col"},V=v("span",{class:"font-heading font-extralight text-2xl"},"Tag Editieren",-1),S={key:0,class:"text-m opacity-40"},z={key:0,class:"overflow-x-hidden overflow-y-auto bg-gradient-to-b from-primary to-secondary flex flex-col items-start justify-start text-2xl text-gray-800 flex-grow"},B={key:0,class:"tag-edit flex flex-col w-full p-4"},D={class:"flex flex-row items-center"},M={class:"flex relative bg-gray-100 rounded-2xl p-4 w-44 h-44 overflow-hidden"},C=v("img",{class:"absolute w-80/100 top-10/100 left-10/100 opacity-5",src:"/assets/spotify.72c4f97f.png"},null,-1),E={key:0,class:"w-full text-center my-auto overflow-hidden"},q={class:"flex flex-row items-center"},A={class:"py-5 flex-grow-0 flex items-center justify-evenly text-2xl text-gray-800"};_.render=function(a,e,t,l,s,n){const i=p("Button"),r=p("Textfield"),o=p("LabeledInput"),c=p("Dropdown"),f=p("TagEntry"),d=p("TagStepImage"),g=p("TagStepTrack");return x(),T("div",j,[v("header",G,[v(i,{back:"",icon:"fas fa-times",size:"md"}),v("div",L,[V,a.nfcTag?(x(),T("span",S,"Tag-ID: #"+y(a.nfcTag.nfcData),1)):k("",!0)])]),a.nfcTag?(x(),T("main",z,["tag-details"===a.routeName?(x(),T("div",B,[v(o,{label:"Name"},{default:w((()=>[v(r,{modelValue:a.nfcTag.name,"onUpdate:modelValue":e[1]||(e[1]=e=>a.nfcTag.name=e),placeholder:"z. B. Mario Figur",class:"rounded-full"},null,8,["modelValue"])])),_:1}),v(o,{label:"Gruppe",class:"mt-8"},{default:w((()=>[v(c,{modelValue:a.nfcTagGroup,"onUpdate:modelValue":e[2]||(e[2]=e=>a.nfcTagGroup=e),items:a.tagGroupListItems,"onUpdate:items":e[3]||(e[3]=e=>a.tagGroupListItems=e),removeable:!1,"placeholder-text":"Wähle eine Gruppe","enable-add-item":!0},null,8,["modelValue","items"])])),_:1}),v(o,{label:"Musik",class:"mt-8"},{default:w((()=>[v("div",D,[v("div",M,[C,a.nfcTagTrack?(x(),T("span",E,y(a.cut(a.nfcTagTrack.title,42)),1)):k("",!0)]),v(i,{icon:"far fa-edit",text:"Musik ändern",class:"hidden md:flex ml-auto",size:"lg",to:{name:"tag-edit-track"}}),v(i,{icon:"far fa-edit",class:"md:hidden ml-auto",size:"lg",to:{name:"tag-edit-track"}})])])),_:1}),v(o,{label:"Bild",class:"mt-8"},{default:w((()=>[v("div",q,["spotify"===a.nfcTag.imageUrl&&a.nfcTagTrack?(x(),T(f,{key:0,class:"w-44",img:a.nfcTagTrack.imageUri},null,8,["img"])):(x(),T(f,{key:1,class:"w-44",img:a.nfcTag.imageUrl},null,8,["img"])),v(i,{icon:"far fa-edit",class:"md:hidden ml-auto",size:"lg",to:{name:"tag-edit-image"}}),v(i,{icon:"far fa-edit",text:"Bild ändern",class:"hidden md:flex ml-auto",size:"lg",to:{name:"tag-edit-image"}})])])),_:1})])):"tag-edit-image"===a.routeName?(x(),T(d,{key:1,"nfc-tag":a.nfcTag,"onUpdate:nfc-tag":e[4]||(e[4]=e=>a.nfcTag=e)},null,8,["nfc-tag"])):"tag-edit-track"===a.routeName?(x(),T(g,{key:2,"nfc-tag":a.nfcTag,"onUpdate:nfc-tag":e[5]||(e[5]=e=>a.nfcTag=e)},null,8,["nfc-tag"])):k("",!0)])):k("",!0),v("footer",A,["tag-details"!==a.routeName?(x(),T(i,{key:0,text:"Auswählen",class:"mx-4 flex-grow",back:""})):(x(),T(i,{key:1,text:"Speichern",class:"mx-4 flex-grow",disabled:!a.isNfcTagValid,onClick:a.saveNfcTag},null,8,["disabled","onClick"]))])])};export default _;
