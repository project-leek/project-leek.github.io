import{d as t,_ as s,r,a as e,c as o,e as a}from"./index.8c5b8204.js";var l=t({name:"Welcome",components:{Button:s}});const n={class:"overflow-hidden bg-gradient-to-b from-primary to-secondary grid grid-cols-1 grid-rows-30 h-full w-full"},c=a("div",{class:"z-10 col-start-1 col-end-1 row-start-1 row-end-10 md:row-end-6 grid grid-cols-2"},[a("img",{class:"col-start-1 col-end-1 max-h-full transform -translate-x-24 rotate-12",src:"/assets/cube.65397b09.png"})],-1),i=a("div",{class:"z-20 row-start-7 row-end-20 col-start-1 col-end-1 flex flex-col items-center"},[a("div",null,[a("p",{class:"font-heading font-light text-white text-5xl"},"Smart Music Box"),a("p",{class:"font-default text-xl"},"Play your favorite tracks with tags.")])],-1),d={class:"z-20 col-start-1 col-end-1 row-start-20 row-end-25 flex justify-center w-full"},f=a("div",{class:"z-10 col-start-1 col-end-1 row-start-25 row-end-31 grid grid-cols-2"},[a("img",{class:"justify-self-end col-start-2 col-end-2 max-h-full transform translate-x-24 rotate-45",src:"/assets/cube.65397b09.png"})],-1);l.render=function(t,s,l,w,g,m){const u=r("Button");return e(),o("div",n,[c,i,a("div",d,[a(u,{class:"h-14 w-2/3 min-w-min center ring-4 ring-white ring-opacity-75 px-4 whitespace-nowrap",text:"Login with Spotify",to:{name:"oauth-start",params:{oauthProvider:"spotify"}},icon:"fab fa-spotify","text-size":6,"icon-size":8,"center-text":!0})]),f])};export default l;
