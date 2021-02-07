import{d as e,_ as s,r as a,y as l,o as t,z as o,A as n,B as r,L as c,f as i,a as f,c as m,g as p,t as u,q as d,h as x}from"./index.2a492896.js";import{_ as b}from"./LabeledInput.50622981.js";import{_ as w}from"./Dropdown.551de6b8.js";var y=e({name:"Settings",components:{Button:s,Dropdown:w,LabeledInput:b},setup(){const e=a(),s=a([]),i=l((()=>s.value.map((e=>new c(e._id,e.name)))));return t((async()=>{await(async()=>{const e=await r.service("spotify-speakers").find();e&&(s.value=e)})()})),{selectedSpeaker:e,speakerList:i,user:o,logout:n}}});const g={class:"w-full flex flex-col"},k={class:"p-8 flex flex-row items-center"},h=p("span",{class:"ml-2 text-3xl"},"Einstellungen",-1),v={class:"bg-secondary max-h-full overflow-y-auto flex-grow p-6 bg-gradient-to-b from-primary to-secondary"},L={key:0,class:"flex flex-col justify-center items-center text-white"},S=p("span",{class:"flex text-xl font-heading"},[p("span",{class:"my-auto fab fa-spotify"}),p("span",{class:"ml-2"},"Nutzer:")],-1),_={class:"text-2xl font-semibold"},j={class:"flex text-gray-800 py-5"},z={class:"flex w-full"};y.render=function(e,s,a,l,t,o){const n=i("Button"),r=i("Dropdown"),c=i("LabeledInput");return f(),m("div",g,[p("header",k,[p(n,{back:"",icon:"fas fa-times",size:"md"}),h]),p("main",v,[e.user?(f(),m("div",L,[S,p("span",_,u(e.user.email),1)])):d("",!0),p(c,{class:"mb-5 h-20 mt-10",label:"Lautsprecher"},{default:x((()=>[p(r,{modelValue:e.selectedSpeaker,"onUpdate:modelValue":s[1]||(s[1]=s=>e.selectedSpeaker=s),items:e.speakerList,removeable:!1},null,8,["modelValue","items"])])),_:1})]),p("footer",j,[p("span",z,[p(n,{text:"Speichern",class:"ml-4 flex-grow"}),p(n,{text:"Abmelden",class:"mx-4 flex-grow",onClick:e.logout},null,8,["onClick"])])])])};export default y;
