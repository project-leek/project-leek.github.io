import{d as e,_ as l,b as t,r as d,o,c as a,t as n,e as s,a as r,F as u,f as i,w as m,v as c,g as p,h as w}from"./index.d6015aaf.js";class f{constructor(e,l){this.id=e,this.value=l}}var x=e({name:"Dropdown",components:{Button:l},props:{modelValue:{type:Object,required:!1,default:null},placeholderText:{type:String,required:!1,default:"Please select an item"},enableAddItem:{type:Boolean,required:!1,default:!1},removeable:{type:Boolean,default:!0},addItemText:{type:String,required:!1,default:"Please add an element"},label:{type:String,required:!1,default:""},items:{type:Array,default:()=>[]}},emits:["update:model-value","add-item","remove-item"],setup(e,l){const d=t(!1),o=t("");return{selectItem:function(t){e.modelValue&&e.modelValue.id===t.id?l.emit("update:model-value",null):l.emit("update:model-value",t),d.value=!1},addItem:function(){""!==o.value&&(l.emit("add-item",o.value),o.value="",l.emit("update:model-value",null))},removeItem:function(t){e.modelValue&&t.id===e.modelValue.id&&l.emit("update:model-value",null),l.emit("remove-item",t)},dropdownExtended:d,newItemValue:o}}});const v={class:"relative h-10 min-w-min"},h={key:0,class:"ml-6 text-base text-white font-heading"},y={class:"label"},b={key:0,class:"divide-y divide-yellow-50 static z-50"},I=r("hr",{class:"w-full border-dotted border-secondary border-1 my-2"},null,-1),V={class:"px-2"},g={key:0,class:"add-item"},k=r("hr",{class:"w-full border-solid border-secondary border-1 my-2"},null,-1),D={class:"add-item-section flex w-full items-center pt-0.5"};x.render=function(e,l,t,w,f,x){const T=d("Button");return o(),a("div",v,[e.label?(o(),a("span",h,n(e.label),1)):s("",!0),r("div",{class:["bg-white p-1 pr-3 rounded-3xl w-full flex flex-col text-lg border-button shadow-lg border-2 outline-none",{"z-50":e.dropdownExtended}]},[r("div",{class:"flex items-center pl-2 cursor-pointer",onClick:l[1]||(l[1]=l=>e.dropdownExtended=!e.dropdownExtended)},[r("span",y,n(e.modelValue&&e.modelValue.value||e.placeholderText),1),e.dropdownExtended?(o(),a(T,{key:0,class:"ml-auto w-8 h-8",icon:"fas fa-chevron-down","icon-size":3,round:""})):(o(),a(T,{key:1,class:"ml-auto w-8 h-8",icon:"fas fa-chevron-right","icon-size":3,round:""}))]),e.dropdownExtended?(o(),a("div",b,[(o(!0),a(u,null,i(e.items,(l=>(o(),a("div",{key:l.id},[I,r("div",{class:[{"bg-yellow-400":e.modelValue&&e.modelValue.id===l.id},"item flex w-full cursor-pointer hover:bg-yellow-200 rounded-2xl"],onClick:t=>e.selectItem(l)},[r("span",V,n(l.value),1),e.removeable?(o(),a(T,{key:0,class:"w-8 h-8 ml-auto",icon:"far fa-trash-alt","icon-size":3,round:"",onClick:t=>e.removeItem(l)},null,8,["onClick"])):s("",!0)],10,["onClick"])])))),128)),e.enableAddItem?(o(),a("div",g,[k,r("div",D,[m(r("input",{"onUpdate:modelValue":l[2]||(l[2]=l=>e.newItemValue=l),placeholder:e.addItemText,class:"flex-grow p-2 rounded-2xl focus:outline-none",onKeyup:l[3]||(l[3]=p(((...l)=>e.addItem&&e.addItem(...l)),["enter"]))},null,40,["placeholder"]),[[c,e.newItemValue]]),r(T,{class:"w-8 h-8",icon:"fas fa-plus","icon-size":3,round:"",onClick:e.addItem},null,8,["onClick"])])])):s("",!0)])):s("",!0)],2)])};var T=e({name:"SandBox",components:{Button:l,Dropdown:x,Textfield:w},setup(){const e=t([new f(Date.now()+1,"Horst"),new f(Date.now()+2,"Ilse"),new f(Date.now()+3,"Anne")]),l=t(e.value[0]),d=t("");return{dropdownItems:e,dropdownValue:l,addDropdownItem:l=>{const t=new f(Date.now(),l);e.value.push(t)},removeDropdownItem:l=>{e.value=e.value.filter((e=>e.id!==l.id))},textValue:d}}});const B={class:"w-full h-full bg-red-500"},C=r("h1",{class:"text-3xl text-center bg-primary py-2"},"Sandbox",-1),z={class:"p-2"},A=r("h1",{class:"text-2xl text-center bg-secondary py-1"},"Dropdown",-1),E=r("h1",{class:"text-2xl text-center bg-secondary py-1"},"Buttons",-1),q=r("h1",{class:"text-2xl text-center bg-secondary py-1"},"Textfield",-1);T.render=function(e,l,t,n,s,u){const i=d("Dropdown"),m=d("Button"),c=d("Textfield");return o(),a("div",B,[C,r("div",z,[A,r(i,{modelValue:e.dropdownValue,"onUpdate:modelValue":l[1]||(l[1]=l=>e.dropdownValue=l),class:"mb-5 h-20",label:"NFC-Tag","enable-add-item":"",items:e.dropdownItems,onAddItem:e.addDropdownItem,onRemoveItem:e.removeDropdownItem},null,8,["modelValue","items","onAddItem","onRemoveItem"]),E,r(m,{class:"w-full h-15 my-5",text:"Drück mich!"}),r(m,{class:"w-full h-20 my-5","icon-size":4,icon:"fas fa-sun",text:"Drück mich!"}),r(m,{class:"w-full h-15 my-5",icon:"fas fa-sun"}),r(m,{class:"h-20 w-20 my-5",icon:"fas fa-sun",round:""}),q,r(c,{modelValue:e.textValue,"onUpdate:modelValue":l[2]||(l[2]=l=>e.textValue=l),placeholder:"Type here!",class:"w-full h-15 my-5"},null,8,["modelValue"])])])};export default T;
