/*! 
 Build based on melong-console 
 Time : 1755276296000 */
import{f as e}from"./pixel-date.1755276296000.js";import"../assets/pixel-entry-index.1755276296000.js";const t=t=>{if(null!==t&&""!==t){var n=new Date(t);return e(n,"yyyy-MM-dd hh:mm:ss")}return""},n=t=>{let n=new Date(t);return n.setFullYear(n.getFullYear()+1),e(n,"yyyy-MM-dd")},r=e=>{const t=e+"=",n=document.cookie.split(";");for(let r=0;r<n.length;r++){let e=n[r];for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(t))return decodeURIComponent(e.substring(t.length,e.length))}return null},s=(e,t,n)=>{let r="";{const e=new Date;e.setTime(e.getTime()+24*n*60*60*1e3),r="; expires="+e.toUTCString()}document.cookie=e+"="+encodeURIComponent(t)+r+"; path=/"};export{n as a,t as f,r as g,s};
