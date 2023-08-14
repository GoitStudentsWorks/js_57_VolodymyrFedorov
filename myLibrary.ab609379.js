let e;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var l=i("bTcpz");const s={ulEl:document.querySelector(".trends__list"),btnLoad:document.querySelector(".js-load"),myLibContainer:document.querySelector(".js-mylib-container"),searchEl:document.querySelector("#genre-search")};let r=[];const o=(0,l.loadLs)(l.KEY)||[];function d(t){let n=[...t];if(n.length<9){u(n),s.btnLoad.classList.add("visually-hidden");return}let a=n.slice(0,9);n.splice(0,9),e=[...n],u(a),s.btnLoad.classList.remove("visually-hidden"),s.btnLoad.addEventListener("click",c)}function c(){if(e.length<9){u(e),s.btnLoad.classList.add("visually-hidden");return}let t=e.slice(0,9);u(t),e.splice(0,9)}function u(e){let t=function(e){let t=e.map(({id:e,genres:t,poster_path:n,release_date:a,title:i,vote_average:l})=>{var s;return`<li class="library-list trends-box" id=${e}>
              <img
                src="https://image.tmdb.org/t/p/original/${n}"
                alt="${i}"
                class="trends__photo"
              />
              <div class="trends__description">
                <div class="trends__info">
                  <h3 class="trends__name">${i}</h3>
                  <p class="trends__ganre">${t[0].name}|${a.split("-")[0]}</p>
                </div>
                <div class="raiting__body">
                  <div class="rating__active" style="width: ${10*l}px">
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
            </li>`}).join(" ");return t}(e);s.ulEl.insertAdjacentHTML("beforeend",t)}d(o),o&&o.length?(o.map(e=>e.genres).map(e=>e.map(e=>r.push(e.name))),function(e){e.map(e=>{let t=`<option class='mylib-options'>${e}</option>`;s.searchEl.insertAdjacentHTML("beforeend",t)})}(r=r.filter((e,t,n)=>t===n.indexOf(e))),s.searchEl.addEventListener("change",function(e){s.ulEl.innerHTML=" ";let t=e.target.value;if("All Genres"===t){d(o);return}let n=o.filter(e=>e.genres.some(e=>e.name.includes(t)));d(n)})):s.myLibContainer.innerHTML=`<div class="not-found-film-library">
    <p class="not-found-film-library-text-item">OOPS...</p>
    <p class="not-found-film-library-text-item">We are very sorry!</p>
    <p class="not-found-film-library-text-item">
      You don’t have any movies at your library.
    </p>
    
    <a class="not-found-film-link" href="./catalog.html"> Search movie </a>
  </div>
  <ul class="trends__list visually-hidden"></ul>
  <button type="button" class="load-more js-load visually-hidden">Load more</button>`,i("epHO8"),i("bUb57"),i("eLjGg"),i("bTcpz"),i("2uOa8");
//# sourceMappingURL=myLibrary.ab609379.js.map
