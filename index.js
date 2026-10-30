import{a as m,S as p,i}from"./assets/vendor-D0e21yAs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=s=>m.get("https://pixabay.com/api/",{params:{key:"58317784-79f584b65abafed05bd7b4b94",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(n=>n.data),l=document.querySelector(".gallery"),d=document.querySelector(".loader"),f=new p(".gallery a"),y=s=>{const n=document.createDocumentFragment();s.forEach(r=>{const o=document.createElement("li"),e=document.createElement("a"),t=document.createElement("img"),a=document.createElement("div");e.href=r.largeImageURL,t.src=r.webformatURL,t.alt=r.tags,a.innerHTML=`
      <div>
        <p>Likes</p>
        <p>${r.likes}</p>
      </div>
      <div>
        <p>Views</p>
        <p>${r.views}</p>
      </div>
      <div>
        <p>Comments</p>
        <p>${r.comments}</p>
      </div>
      <div>
        <p>Downloads</p>
        <p>${r.downloads}</p>
      </div>
    `,o.append(e),e.append(t),o.append(a),n.append(o)}),l.append(n),f.refresh()},h=()=>{l.innerHTML=""},g=()=>{d.classList.add("is-visible")},v=()=>{d.classList.remove("is-visible")},c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const r=new FormData(c).get("search-text").trim();if(r===""){i.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(),h(),u(r).then(o=>{if(o.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(o.hits)}).catch(o=>{console.error(o)}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
