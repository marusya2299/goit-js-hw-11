import{S as u,i}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f="43475453-62a6130baf5d53b90b99f069a",m="https://pixabay.com/api/";function g(n=""){const r=new URLSearchParams({key:f,q:n,image_type:"photo",orientation:"hotizontal",safesearch:!0});return fetch(`${m}?${r.toString()}`).then(t=>{if(!t.ok)throw new Error("Failed to fetch images");return t.json()})}function h(n,r){return n.forEach(t=>{const a=document.createElement("li");a.classList.add("gallery-item"),a.innerHTML=`
        <a href="${t.largeImageURL}" class="gallery-link">
            <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image">
            <div class="field">
                <span class="label">Likes</span>
                <span class="value" data-likes>${t.likes}</span>
            </div>
            <div class="field">
                <span class="label">Views</span>
                <span class="value" data-views>${t.views}</span>
            </div>
            <div class="field">
                <span class="label">Comments</span>
                <span class="value" data-comments>${t.comments}</span>
            </div>
            <div class="field">
                <span class="label">Downloads</span>
                <span class="value" data-downloads>${t.downloads}</span>
        </a>
    `,r.appendChild(a),a.addEventListener("click",function(e){e.preventDefault()})}),r}const p=document.querySelector(".form"),c=document.querySelector(".input"),d=document.querySelector(".gallery"),b=new u(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),l=document.querySelector(".loader");function y(n){if(n.preventDefault(),l.style.display="block",c.value.trim()===""){i.warning({message:"The name is incorrect. Please try again"});return}d.innerHTML="",g(c.value.trim()).then(r=>{if(r.totalHits===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none";return}h(r.hits,d),b.refresh()}).catch(()=>i.error({message:"Error"})).finally(()=>{p.reset(),l.style.display="none"})}p.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
