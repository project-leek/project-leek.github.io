import{d as t,_ as s,f as a,a as o,c as r,g as e}from"./index.826a8f32.js";var l=t({name:"Welcome",components:{Button:s}});const n={class:"overflow-hidden lg:rounded-3xl bg-gradient-to-b from-primary to-secondary grid grid-cols-1 grid-rows-30 h-full w-full relative"},c=e("div",{class:"z-10 col-start-1 col-end-1 row-start-1 row-end-10 md:row-end-6 grid grid-cols-2"},[e("img",{class:"col-start-1 col-end-1 max-h-full transform -translate-x-24 rotate-12",src:"/assets/cube.65397b09.png"})],-1),i=e("div",{class:"z-20 row-start-7 row-end-20 col-start-1 col-end-1 flex flex-col items-center"},[e("div",null,[e("p",{class:"font-heading font-light text-white text-5xl"},"Smart Music Box"),e("p",{class:"font-default text-xl"},"Play your favorite tracks with tags.")])],-1),d=e("div",{class:"z-10 col-start-1 col-end-1 row-start-25 row-end-31 grid grid-cols-2"},[e("img",{class:"justify-self-end col-start-2 col-end-2 max-h-full transform translate-x-24 rotate-45",src:"/assets/cube.65397b09.png"})],-1);l.render=function(t,s,l,f,g,u){const m=a("Button");return o(),r("div",n,[c,i,e(m,{text:"Login with Spotify",to:{name:"oauth-start",params:{oauthProvider:"spotify"}},class:"row-start-20 mx-auto py-10 w-2/3",icon:"fab fa-spotify",size:"lg"}),d])};export default l;
