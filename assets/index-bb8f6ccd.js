(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const r=document.getElementById("image-track"),d=e=>r.dataset.mouseDownAt=e.clientX,u=()=>{r.dataset.mouseDownAt="0",r.dataset.prevPercentage=r.dataset.percentage},m=e=>{if(r.dataset.mouseDownAt==="0")return;const n=parseFloat(r.dataset.mouseDownAt)-e.clientX,s=window.innerWidth/1.2,c=n/s*-100,t=parseFloat(r.dataset.prevPercentage)+c,o=Math.max(Math.min(t,0),-100);r.dataset.percentage=o,r.animate({transform:`translate(${o}%, -50%)`},{duration:1300,fill:"forwards",easing:"ease"});for(const a of r.getElementsByClassName("image"))a.animate({objectPosition:`${100+o}% center`},{duration:1300,fill:"forwards"})};window.onload=async e=>{await(s=>new Promise(c=>{setTimeout(()=>{c()},s*1e3)}))(1),r.animate({transform:"translate(-91%, -50%)"},{duration:7500,fill:"forwards",easing:"ease"});for(const s of r.getElementsByClassName("image"))s.animate({objectPosition:"0% center"},{duration:7500,fill:"forwards"});r.dataset.prevPercentage=-90};window.onmousedown=e=>d(e);window.ontouchstart=e=>d(e.touches[0]);window.onmouseup=e=>u();window.ontouchend=e=>u(e.touches[0]);window.onmousemove=e=>m(e);window.ontouchmove=e=>m(e.touches[0]);let i=document.querySelectorAll(".trigs");var l;for(let e=0;e<i.length;e++)(l=i[e])==null||l.addEventListener("click",n=>{document.querySelectorAll("#leg");let s=document.querySelectorAll(".secs"),c=n.target.dataset.pics;document.querySelector("#mainly").setAttribute("src",`src/assets/sss/${c}.jpeg`);for(let t of s)t.setAttribute("src",`src/assets/sss/${c}.jpeg`),c++;document.querySelector("#leg").classList.remove("hidden"),document.querySelector("#leg").classList.add("flex")});let f=document.querySelectorAll(".secs");for(let e of f)e.addEventListener("click",n=>{document.querySelector("#mainly").setAttribute("src",n.target.src)});document.querySelector("#canc").addEventListener("click",()=>{document.querySelector("#leg").classList.remove("flex"),document.querySelector("#leg").classList.add("hidden")});const g=document.querySelectorAll(".scroll-to");for(const e of g)e.addEventListener("click",function(n){n.preventDefault();const s=this.getAttribute("href");document.querySelector(s).scrollIntoView({behavior:"smooth"})});
