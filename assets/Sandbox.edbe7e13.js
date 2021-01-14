import{d as e,_ as l,f as t,r as o,a,c as d,t as n,g as s,e as r,F as u,h as i,w as c,v as m,i as p}from"./index.f2cbbdd8.js";class f{constructor(e,l){this.id=e,this.value=l}}var w=e({name:"Dropdown",components:{Button:l},props:{modelValue:{type:Object,required:!1,default:null},placeholderText:{type:String,required:!1,default:"Please select an item"},enableAddItem:{type:Boolean,required:!1,default:!1},removeable:{type:Boolean,default:!0},addItemText:{type:String,required:!1,default:"Please add an element"},label:{type:String,required:!1,default:""},items:{type:Array,default:()=>[]}},emits:["update:model-value","add-item","remove-item"],setup(e,l){const o=t(!1),a=t("");return{selectItem:function(t){e.modelValue&&e.modelValue.id===t.id?l.emit("update:model-value",null):l.emit("update:model-value",t),o.value=!1},addItem:function(){""!==a.value&&(l.emit("add-item",a.value),a.value="",l.emit("update:model-value",null))},removeItem:function(t){e.modelValue&&t.id===e.modelValue.id&&l.emit("update:model-value",null),l.emit("remove-item",t)},dropdownExtended:o,newItemValue:a}}});const x={class:"relative h-10 min-w-min"},v={key:0,class:"ml-6 text-base text-white font-heading"},y={class:"label"},h={key:0,class:"divide-y divide-yellow-50 static z-50"},b=r("hr",{class:"w-full border-dotted border-secondary border-1 my-2"},null,-1),V={class:"px-2"},g={key:0,class:"add-item"},I=r("hr",{class:"w-full border-solid border-secondary border-1 my-2"},null,-1),k={class:"add-item-section flex w-full items-center pt-0.5"};w.render=function(e,l,t,f,w,D){const S=o("Button");return a(),d("div",x,[e.label?(a(),d("span",v,n(e.label),1)):s("",!0),r("div",{class:["bg-white p-1 pr-3 rounded-3xl w-full flex flex-col text-lg border-button shadow-lg border-2 outline-none",{"z-50":e.dropdownExtended}]},[r("div",{class:"flex items-center pl-2 cursor-pointer",onClick:l[1]||(l[1]=l=>e.dropdownExtended=!e.dropdownExtended)},[r("span",y,n(e.modelValue&&e.modelValue.value||e.placeholderText),1),e.dropdownExtended?(a(),d(S,{key:0,class:"ml-auto w-8 h-8",icon:"fas fa-chevron-down","icon-size":3,round:""})):(a(),d(S,{key:1,class:"ml-auto w-8 h-8",icon:"fas fa-chevron-right","icon-size":3,round:""}))]),e.dropdownExtended?(a(),d("div",h,[(a(!0),d(u,null,i(e.items,(l=>(a(),d("div",{key:l.id},[b,r("div",{class:[{"bg-yellow-400":e.modelValue&&e.modelValue.id===l.id},"item flex w-full cursor-pointer hover:bg-yellow-200 rounded-2xl"],onClick:t=>e.selectItem(l)},[r("span",V,n(l.value),1),e.removeable?(a(),d(S,{key:0,class:"w-8 h-8 ml-auto",icon:"far fa-trash-alt","icon-size":3,round:"",onClick:t=>e.removeItem(l)},null,8,["onClick"])):s("",!0)],10,["onClick"])])))),128)),e.enableAddItem?(a(),d("div",g,[I,r("div",k,[c(r("input",{"onUpdate:modelValue":l[2]||(l[2]=l=>e.newItemValue=l),placeholder:e.addItemText,class:"flex-grow p-2 rounded-2xl focus:outline-none",onKeyup:l[3]||(l[3]=p(((...l)=>e.addItem&&e.addItem(...l)),["enter"]))},null,40,["placeholder"]),[[m,e.newItemValue]]),r(S,{class:"w-8 h-8",icon:"fas fa-plus","icon-size":3,round:"",onClick:e.addItem},null,8,["onClick"])])])):s("",!0)])):s("",!0)],2)])};var D=e({props:{placeholder:{type:String,default:""},modelValue:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""}},emits:["update:modelValue"]});const S={class:"max-w-max flex flex-col"},T={key:0,class:"font-bold pl-4"},B={class:"flex flex-row border-2 border-yellow-400 px-4 py-1 rounded-full focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-25 shadow-lg"};D.render=function(e,l,t,o,u,i){return a(),d("div",S,[e.label?(a(),d("p",T,n(e.label),1)):s("",!0),r("div",B,[e.icon?(a(),d("span",{key:0,class:["mr-4 text-xl my-auto",["fas",`fa-${e.icon}`]]},null,2)):s("",!0),r("input",{class:"focus: outline-none bg-transparent placeholder-opacity-50 text-2xl",placeholder:e.placeholder,type:"text",value:e.modelValue,onInput:l[1]||(l[1]=l=>e.$emit("update:modelValue",l.target.value))},null,40,["placeholder","value"])])])};var C=e({name:"SandBox",components:{Button:l,Dropdown:w,Textfield:D},setup(){const e=t([new f(Date.now()+1,"Horst"),new f(Date.now()+2,"Ilse"),new f(Date.now()+3,"Anne")]),l=t(e.value[0]),o=t("");return{dropdownItems:e,dropdownValue:l,addDropdownItem:l=>{const t=new f(Date.now(),l);e.value.push(t)},removeDropdownItem:l=>{e.value=e.value.filter((e=>e.id!==l.id))},textValue:o}}});const z={class:"w-full h-full bg-red-500"},A=r("h1",{class:"text-3xl text-center bg-primary py-2"},"Sandbox",-1),E={class:"p-2"},q=r("h1",{class:"text-2xl text-center bg-secondary py-1"},"Dropdown",-1),U=r("h1",{class:"text-2xl text-center bg-secondary py-1"},"Buttons",-1),j=r("h1",{class:"text-2xl text-center bg-secondary py-1"},"Textfield",-1);C.render=function(e,l,t,n,s,u){const i=o("Dropdown"),c=o("Button"),m=o("Textfield");return a(),d("div",z,[A,r("div",E,[q,r(i,{modelValue:e.dropdownValue,"onUpdate:modelValue":l[1]||(l[1]=l=>e.dropdownValue=l),class:"mb-5 h-20",label:"NFC-Tag","enable-add-item":"",items:e.dropdownItems,onAddItem:e.addDropdownItem,onRemoveItem:e.removeDropdownItem},null,8,["modelValue","items","onAddItem","onRemoveItem"]),U,r(c,{class:"w-full h-15 my-5",text:"Drück mich!"}),r(c,{class:"w-full h-20 my-5","icon-size":4,icon:"fas fa-sun",text:"Drück mich!"}),r(c,{class:"w-full h-15 my-5",icon:"fas fa-sun"}),r(c,{class:"h-20 w-20 my-5",icon:"fas fa-sun",round:""}),j,r(m,{modelValue:e.textValue,"onUpdate:modelValue":l[2]||(l[2]=l=>e.textValue=l),placeholder:"Type here!",class:"w-full h-15 my-5"},null,8,["modelValue"])])])};export default C;
