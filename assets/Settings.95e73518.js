import{d as e,_ as a,h as s,j as t,o as l,i as n,E as o,G as r,H as c,r as x,a as f,c as i,e as u,t as p,w as m}from"./index.db3a5346.js";import{_ as d,a as w,L as b}from"./LabeledInput.9c5ef598.js";var v=e({name:"Settings",components:{Button:a,Dropdown:d,LabeledInput:w},setup(){const e=s(""),a=s(),x=s([]),f=t((()=>x.value.map((e=>new b(e._id,e.name)))));return l((async()=>{var a;await(async()=>{const e=await n.service("spotify-speakers").find();e&&(x.value=e)})(),o&&(e.value=null==(a=r.value)?void 0:a.email)})),{selectedSpeaker:a,speakerList:f,userEmail:e,logoutUser:()=>{c()}}}});const y={class:"w-full flex flex-col"},g={class:"p-8 flex flex-row items-center"},h=u("span",{class:"ml-2 text-3xl"},"Einstellungen",-1),k={class:"bg-secondary max-h-full overflow-y-auto flex-grow p-6"},L={class:"flex flex-col justify-center items-center text-white"},S=u("span",{class:"flex text-xl font-heading"},[u("span",{class:"my-auto fab fa-spotify"}),u("span",{class:"ml-2"},"Nutzer:")],-1),j={class:"text-2xl font-semibold"},E={class:"flex text-gray-800 py-5"},_={class:"flex w-full text-xl"};v.render=function(e,a,s,t,l,n){const o=x("Button"),r=x("Dropdown"),c=x("LabeledInput");return f(),i("div",y,[u("header",g,[u(o,{back:"",round:"",icon:"fas fa-times",class:"h-7 w-7"}),h]),u("main",k,[u("div",L,[S,u("span",j,p(e.userEmail),1)]),u(c,{class:"mb-5 h-20 mt-10",label:"Lautsprecher"},{default:m((()=>[u(r,{modelValue:e.selectedSpeaker,"onUpdate:modelValue":a[1]||(a[1]=a=>e.selectedSpeaker=a),items:e.speakerList,removeable:!1},null,8,["modelValue","items"])])),_:1})]),u("footer",E,[u("span",_,[u(o,{round:"",icon:"fas fa-caret-left",class:"ml-4 my-auto h-12 w-12"}),u(o,{text:"Speichern","center-text":"",class:"mx-2 px-3 py-2 text-2xl flex-grow"}),u(o,{text:"Abmelden","center-text":"",class:"mx-2 px-3 text-2xl flex-grow",onClick:a[2]||(a[2]=a=>e.logoutUser())})])])])};export default v;
