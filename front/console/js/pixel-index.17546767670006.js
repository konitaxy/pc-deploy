/*! 
 Build based on melong-console 
 Time : 1754676767000 */
import{s as e}from"./pixel-screenfull.1754676767000.js";import{_ as s,o as a,P as l,r as n,d as t,j as c}from"../assets/pixel-entry-index.1754676767000.js";const r={key:0,class:"gvaIcon gvaIcon-fullscreen-expand"},i={key:1,class:"gvaIcon gvaIcon-fullscreen-shrink"},o={name:"Screenfull"},d=s(Object.assign(o,{props:{width:{type:Number,default:22},height:{type:Number,default:22},fill:{type:String,default:"#48576a"}},setup(s){a((()=>{e.isEnabled&&e.on("change",u)})),l((()=>{e.off("change")}));const o=()=>{e.isEnabled&&e.toggle()},d=n(!0),u=()=>{d.value=!e.isFullscreen};return(e,s)=>(c(),t("div",{onClick:o},[d.value?(c(),t("div",r)):(c(),t("div",i))]))}}),[["__scopeId","data-v-cdd0729b"]]);export{d as default};
