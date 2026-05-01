import{a as u,S as f,i as n}from"./assets/vendor-DVVTzMB1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(r){const o="55631968-7584b9a203dbb647b76045b43",s="https://pixabay.com/api/",i={key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(s,{params:i}).then(e=>e.data)}const d=new f(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery");function g(){c.innerHTML=""}function p({webformatURL:r,largeImageURL:o,tags:s,likes:i,views:e,comments:t,downloads:a}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${r}" alt="${s}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b>${i}</p>
        <p class="info-item"><b>Views</b>${e}</p>
        <p class="info-item"><b>Comments</b>${t}</p>
        <p class="info-item"><b>Downloads</b>${a}</p>
      </div>
    </li>`}function y(r){const o=r.map(s=>p(s)).join("");c.insertAdjacentHTML("beforeend",o),d.refresh()}function h(){const r=document.querySelector(".loader");r&&r.classList.add("is-visible")}function b(){const r=document.querySelector(".loader");r&&r.classList.remove("is-visible")}const l=document.querySelector(".form");l.addEventListener("submit",r=>{r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(o===""){n.warning({title:"Caution",message:"Please enter a search term"});return}g(),h(),m(o).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",iconColor:"#fff",progressBarColor:"#b51b1b"});return}y(s.hits)}).catch(s=>{console.log(s),n.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{b(),l.reset()})});
//# sourceMappingURL=index.js.map
