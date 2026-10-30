import{a as p,S as u,i}from"./assets/vendor-D0e21yAs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=n=>p.get("https://pixabay.com/api/",{params:{key:"58317784-79f584b65abafed05bd7b4b94",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data),l=document.querySelector(".gallery"),d=document.querySelector(".loader"),f=new u(".gallery a"),y=n=>{n.forEach(t=>{const s=document.createElement("li"),o=document.createElement("a"),e=document.createElement("img"),r=document.createElement("div");o.href=t.largeImageURL,e.src=t.webformatURL,e.alt=t.tags,r.innerHTML=`
  <div>
    <p>Likes</p>
    <p>${t.likes}</p>
  </div>
  <div>
    <p>Views</p>
    <p>${t.views}</p>
  </div>
  <div>
    <p>Comments</p>
    <p>${t.comments}</p>
  </div>
  <div>
    <p>Downloads</p>
    <p>${t.downloads}</p>
  </div>
`,s.append(o),o.append(e),s.append(r),l.append(s)}),f.refresh()},h=()=>{l.innerHTML=""},g=()=>{d.classList.add("is-visible")},v=()=>{d.classList.remove("is-visible")},c=document.querySelector(".form");c.addEventListener("submit",n=>{n.preventDefault();const s=new FormData(c).get("search-text").trim();if(s===""){i.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(),h(),m(s).then(o=>{if(o.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(o.hits)}).catch(o=>{console.error(o)}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
