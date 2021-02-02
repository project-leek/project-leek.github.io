import{d as e,_ as s,r as a,x as l,o as t,q as n,J as o,K as r,L as c,f as i,a as x,c as p,h as u,t as f,i as m}from"./index.3b695ee1.js";import{_ as d}from"./LabeledInput.b10bbc36.js";import{_ as b,L as w}from"./Dropdown.3c0604de.js";var v=e({name:"Settings",components:{Button:s,Dropdown:b,LabeledInput:d},setup(){const e=a(""),s=a(),i=a([]),x=l((()=>i.value.map((e=>new w(e._id,e.name)))));return t((async()=>{await(async()=>{const e=await n.service("spotify-speakers").find();e&&(i.value=e)})(),o&&null!==r.value&&(e.value=r.value.email)})),{selectedSpeaker:s,speakerList:x,userEmail:e,logoutUser:()=>{c()}}}});const y={class:"w-full flex flex-col"},g={class:"p-8 flex flex-row items-center"},h=u("span",{class:"ml-2 text-3xl"},"Einstellungen",-1),k={class:"bg-secondary max-h-full overflow-y-auto flex-grow p-6"},L={class:"flex flex-col justify-center items-center text-white"},S=u("span",{class:"flex text-xl font-heading"},[u("span",{class:"my-auto fab fa-spotify"}),u("span",{class:"ml-2"},"Nutzer:")],-1),_={class:"text-2xl font-semibold"},j={class:"flex text-gray-800 py-5"},D={class:"flex w-full text-xl"};v.render=function(e,s,a,l,t,n){const o=i("Button"),r=i("Dropdown"),c=i("LabeledInput");return x(),p("div",y,[u("header",g,[u(o,{back:"",round:"",icon:"fas fa-times",class:"h-10 w-10","icon-size":6}),h]),u("main",k,[u("div",L,[S,u("span",_,f(e.userEmail),1)]),u(c,{class:"mb-5 h-20 mt-10",label:"Lautsprecher"},{default:m((()=>[u(r,{modelValue:e.selectedSpeaker,"onUpdate:modelValue":s[1]||(s[1]=s=>e.selectedSpeaker=s),items:e.speakerList,removeable:!1},null,8,["modelValue","items"])])),_:1})]),u("footer",j,[u("span",D,[u(o,{text:"Speichern","center-text":"",class:"mx-2 px-3 py-2 text-2xl flex-grow"}),u(o,{text:"Abmelden","center-text":"",class:"mx-2 px-3 text-2xl flex-grow",onClick:e.logoutUser},null,8,["onClick"])])])])};export default v;
