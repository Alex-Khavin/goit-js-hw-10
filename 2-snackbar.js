import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";let s="fulfilled";const l=document.querySelector(".form"),m=document.querySelector("[name='delay']"),n=document.querySelectorAll("[name='state']");l.addEventListener("submit",e=>{e.preventDefault();const t=Number(m.value);a(t,s).then(o=>i.show({message:`✅ Fulfilled promise in ${o} ms`,messageColor:"white",position:"topRight",color:"#59a10d"})).catch(o=>i.show({message:`❌ Rejected promise in ${o} ms`,messageColor:"white",position:"topRight",color:"#ef4040"}))});n.forEach(e=>{e.addEventListener("click",t=>{s=t.target.value})});function a(e,t){return new Promise((o,r)=>{setTimeout(()=>{t==="fulfilled"?o(e):r(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
