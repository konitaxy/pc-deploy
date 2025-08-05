/*! 
 Build based on melong-console 
 Time : 1754399315000 */
const r=(r,e,t)=>{e?/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)?t():t(new Error("请输入正确的邮箱地址")):t(new Error("请输入邮箱地址"))},e=(r,e,t)=>{e?e.length<8?t(new Error("密码长度不能少于8位")):/(?=.*[a-z])/.test(e)?/(?=.*[A-Z])/.test(e)?t():t(new Error("密码必须包含大写字母")):t(new Error("密码必须包含小写字母")):t(new Error("请输入密码"))};export{e as a,r as v};
