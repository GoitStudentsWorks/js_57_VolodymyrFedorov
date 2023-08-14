var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("epHO8"),a("bUb57"),a("eLjGg"),a("eEHR3"),a("bTcpz");var i=a("2shzp");const o="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTBiMjA0M2E3YmRlZmRmMTI5ZGViYjc4NGJiZTFmNyIsInN1YiI6IjY0ZDA5ZWY5ODUwOTBmMDBjODdkY2FjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AoWYcFyuoQyP_ePohi3LRcw4Fp8RAJIbZs-uo4526oA",l="https://api.themoviedb.org/3/",r=document.querySelector(".external-button"),s=document.getElementById("searchInput"),c=document.getElementById("trendingContainer"),d=document.querySelector(".pagination-num-btn"),u=document.getElementById("prevPage"),p=document.getElementById("nextPage"),g=document.getElementById("clearButton");let m=1,y=1;async function v(e){let t=await Promise.all(e.map(async({id:e,genre_ids:t,poster_path:n,release_date:a,title:i,vote_average:o})=>{var l;let r=await f(t),s=a.split("-")[0];return`<li class="trends__item trends-box" id=${e}>
        <img
          src="https://image.tmdb.org/t/p/original/${n}"
          alt="${i}"
          class="trends__photo"
          loading="lazy"
        />
        <div class="trends__description">
          <div class="trends__info">
            <h3 class="trends__name">${i}</h3>
            <p class="trends__ganre">${r}|${s}</p>
          </div>
          <div class="raiting__body">
            <div class="rating__active" style="width: ${10*o}px">
              <div class="rating__active__wrapper">
                <span class="rating__active__color">★</span>
                <span class="rating__active__color">★</span>
                <span class="rating__active__color">★</span>
                <span class="rating__active__color">★</span>
                <span class="rating__active__color">★</span>
              </div>
            </div>
          </div>
        </div>
      </li>`}));return t.join("")}async function _(){let e=await (0,i.default).get(`${l}genre/movie/list`,{headers:{accept:"application/json",Authorization:o},params:{language:"en"}}),t=e.data,n=t.genres;return n}async function f(e){if(0===e.length)return"Nice film";try{let t=await _(),n=t.filter(t=>t.id===e[0]).map(e=>e.name).join(" ");return n}catch(e){console.log(e.code)}}async function h(e){try{let t=await (0,i.default).get(`${l}trending/movie/day`,{headers:{accept:"application/json",Authorization:o},params:{language:"en",page:e}}),n=t.data.results,a=await v(n),r=document.getElementById("trendingContainer");r.innerHTML=a,y=t.data.total_pages,b(m,y)}catch(e){console.log(e)}}async function E(e){e.preventDefault();let t=document.getElementById("searchInput"),n=t.value.trim();if(""!==n)try{let e=await (0,i.default).get(`${l}search/movie`,{headers:{accept:"application/json",Authorization:o},params:{language:"en",query:n,page:1}}),t=e.data.results;if(0===t.length){let e=`
            <div class="no-results">
              <p class="text-no-results">OOPS...</p>
              <p class="text-no-results">We are very sorry!</p>
              <p class="text-no-results">
                We don’t have any results matching your search.
              </p>
            </div>`;c.innerHTML=e;return}let a=await v(t);c.innerHTML=`<div class="results">${a}</div>`,y=e.data.total_pages,b(m,y)}catch(e){console.log(e.code)}}async function I(){try{let e=await _(),t=document.getElementById("sortByYear"),n=document.getElementById("sortByGenre"),a=new Date().getFullYear(),i=document.createElement("option");i.value="",i.textContent="Year",t.appendChild(i);for(let e=a;e>=1900;e--){let n=document.createElement("option");n.value=e,n.textContent=e,t.appendChild(n)}let o=document.createElement("option");for(let t of(o.value="",o.textContent="All",n.appendChild(o),e)){let e=document.createElement("option");e.value=t.id,e.textContent=t.name,n.appendChild(e)}}catch(e){console.log(e.code)}}async function B(e){let t=document.getElementById("sortByYear"),n=document.getElementById("sortByGenre"),a=t.value,r=n.value;try{let t=await (0,i.default).get(`${l}discover/movie`,{headers:{accept:"application/json",Authorization:o},params:{language:"en",sort_by:"popularity.desc",with_genres:r,primary_release_year:a,page:e}}),n=t.data.results,s=await v(n);c.innerHTML=s,y=t.data.total_pages,b(m,y)}catch(e){console.log(e.code)}}function w(e){if(e<1||e>y)return;m=e;let t=document.getElementById("sortByYear"),n=document.getElementById("sortByGenre");(t.value||n.value)&&""!==t.value&&""!==n.value?B(m):""!==s.value.trim()?E():h(m),window.scrollTo({top:c.offsetTop,behavior:"smooth"})}function b(e,t){if(d.innerHTML="",e>1&&L(d,e-1,"back"),L(d,e,"current"),e<t&&L(d,e+1,"next"),e<t-1&&L(d,e+2),e<t-2){let e=document.createElement("button");e.classList.add("pagination-btn"),e.textContent="...",d.appendChild(e)}L(d,e+23)}function L(e,t,n=""){let a=document.createElement("button");a.classList.add("pagination-cycle-btn"),a.textContent=t<10?`0${t}`:`${t}`,"current"===n&&a.classList.add("current-page-btn"),a.addEventListener("click",()=>w(t)),e.appendChild(a)}u.addEventListener("click",()=>w(m-1)),p.addEventListener("click",()=>w(m+1)),document.getElementById("sortByYear").addEventListener("change",B),document.getElementById("sortByGenre").addEventListener("change",B),r.addEventListener("click",E),s.addEventListener("keydown",e=>{"Enter"===e.key&&(e.preventDefault(),E(e))}),s.addEventListener("input",function(){""!==s.value.trim()?g.style.display="inline":g.style.display="none"}),g.addEventListener("click",function(){s.value="",g.style.display="none"}),async function(){await I(),w(m)}(),a("2uOa8");
//# sourceMappingURL=catalog.2b9774c4.js.map
