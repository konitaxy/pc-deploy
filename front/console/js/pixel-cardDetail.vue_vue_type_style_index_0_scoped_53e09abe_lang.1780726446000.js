/*! 
 Build based on melong-console 
 Time : 1780726446000 */
import{g as e}from"./pixel-finance.1780726446000.js";function l(e){var l,t,n,o,r,i,a,s,u,c;if(!e)return null;const m="HK"===e.region||"HKG"===e.countryCode;return{region:m?"HKG":"USA",countryCode:e.countryCode||(m?"HKG":"USA"),firstName:null!=(l=e.firstName)?l:"",lastName:null!=(t=e.lastName)?t:"",email:null!=(n=e.email)?n:"",mobilePrefix:null!=(o=e.mobilePrefix)?o:m?"+852":"+1",mobile:null!=(r=e.mobile)?r:"",birthDate:null!=(i=e.birthDate)?i:"",state:null!=(a=e.state)?a:"",city:null!=(s=e.city)?s:"",postcode:null!=(u=e.postcode)?u:"",address:null!=(c=e.address)?c:""}}async function t(t=""){const n=await e({regionCode:t});if(0!==n.code)throw new Error(n.msg||"failed");return l(n.data)}export{t as l,l as m};
