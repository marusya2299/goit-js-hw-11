import{S as p,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const f="43475453-62a6130baf5d53b90b99f069a",m="https://pixabay.com/api/";function y(o=""){const s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"hotizontal",safesearch:!0});return fetch(`${m}?${s.toString()}`).then(t=>{if(!t.ok)throw new Error("Failed to fetch images");return t.json()})}function g(o,s){return o.forEach(t=>{const r=document.createElement("li");r.classList.add("gallery-item"),r.innerHTML=`
        <a href="${t.largeImageURL}" class="gallery-link">
            <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image">
            <div class="description">
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
                </div>
            </div>
        </a>
        
        
    `,s.appendChild(r),r.addEventListener("click",function(e){e.preventDefault()})}),s}const u=document.querySelector(".form"),c=document.querySelector(".input"),d=document.querySelector(".gallery"),h=new p(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),n=document.querySelector(".loader");function v(o){if(o.preventDefault(),n.style.display="flex",n.style.alignitems="center",c.value.trim()===""){l.warning({message:"The name is incorrect. Please try again"});return}d.innerHTML="",y(c.value.trim()).then(s=>{if(s.totalHits===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"rgba(250, 250, 251, 1)",icon:"myIcon",iconColor:"rgba(250, 250, 251, 1)",color:"rgba(239, 64, 64, 1)",position:"topRight",progressBarColor:"rgba(181, 27, 27, 1)"}),n.style.display="none";return}g(s.hits,d),h.refresh()}).catch(()=>l.show({message:"Sorry, there are no images matching your search query. Please try again!"})).finally(()=>{u.reset(),n.style.display="none"})}u.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
