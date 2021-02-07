import{d as e,_ as l,r as d,L as t,f as o,a,c as n,g as r,t as u,F as s,n as i,q as m,s as c,v as p,x as f}from"./index.28282cd4.js";var x=e({name:"Dropdown",components:{Button:l},props:{modelValue:{type:Object,required:!1,default:null},placeholderText:{type:String,required:!1,default:"Bitte wähle ein Element..."},enableAddItem:{type:Boolean,required:!1,default:!1},removeable:{type:Boolean,default:!0},addItemText:{type:String,required:!1,default:"neues Element"},items:{type:Array,default:()=>[]},required:{type:Boolean,default:!1}},emits:{"update:model-value":e=>!0,"update:items":e=>!0,"remove-item":e=>!0},setup(e,l){const o=d(!1),a=d("");return{selectItem:function(d){e.modelValue&&e.modelValue.id===d.id?l.emit("update:model-value",null):l.emit("update:model-value",d),o.value=!1},addItem:function(){if(""===a.value)return;const d=new t(a.value,a.value);l.emit("update:items",e.items.concat(d)),l.emit("update:model-value",d),a.value="",o.value=!1},removeItem:function(d){e.modelValue&&d.id===e.modelValue.id&&l.emit("update:model-value",null),l.emit("remove-item",d)},dropdownExtended:o,newItemValue:a}}});const v={class:"w-full flex flex-col text-lg relative"},y={key:0,class:"value text-xl"},w={key:1,class:"placeholder text-gray-400"},b={key:0,class:"absolute px-0.5 bg-white rounded-b-3xl w-full top-full -mt-0.5 z-50 border-2 border-button"},g={class:"px-2 text-xl"},k={key:0,class:"add-item px-4 py-2 border-solid border-secondary border-t flex w-full"};x.render=function(e,l,d,t,x,I){const V=o("Button");return a(),n("div",v,[r("div",{class:["bg-white py-1 px-4 rounded-3xl flex items-center cursor-pointer border-button shadow-lg border-2 outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-25",{"rounded-b-none":e.dropdownExtended,"ring-red-600 ring-2 ring-inset":e.required&&!e.modelValue}],onClick:l[1]||(l[1]=l=>e.dropdownExtended=!e.dropdownExtended)},[e.modelValue&&e.modelValue.value?(a(),n("span",y,u(e.modelValue.value),1)):(a(),n("span",w,u(e.placeholderText),1)),e.dropdownExtended?(a(),n(V,{key:2,class:"ml-auto",icon:"fas fa-chevron-down",size:"xs"})):(a(),n(V,{key:3,class:"ml-auto",icon:"fas fa-chevron-right",size:"xs"}))],2),e.dropdownExtended?(a(),n("div",b,[(a(!0),n(s,null,i(e.items,(l=>(a(),n("div",{key:l.id,class:"py-2 px-1.5 w-full border-dotted border-secondary border-b outline-none"},[r("div",{class:[{"bg-yellow-400":e.modelValue&&e.modelValue.id===l.id},"item flex w-full cursor-pointer hover:bg-yellow-200 rounded-2xl"],onClick:d=>e.selectItem(l)},[r("span",g,u(l.value),1),e.removeable?(a(),n(V,{key:0,class:"ml-auto mr-3",icon:"far fa-trash-alt",size:"xs",onClick:d=>e.removeItem(l)},null,8,["onClick"])):m("",!0)],10,["onClick"])])))),128)),e.enableAddItem?(a(),n("div",k,[c(r("input",{"onUpdate:modelValue":l[2]||(l[2]=l=>e.newItemValue=l),placeholder:e.addItemText,class:"rounded-2xl focus:outline-none min-w-0 flex-grow",onKeyup:l[3]||(l[3]=f(((...l)=>e.addItem&&e.addItem(...l)),["enter"]))},null,40,["placeholder"]),[[p,e.newItemValue]]),r(V,{icon:"fas fa-plus",size:"xs",onClick:e.addItem},null,8,["onClick"])])):m("",!0)])):m("",!0)])};export{x as _};
