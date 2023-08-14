!function(){let e;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a);var l=a("5xtVg");let s={ulEl:document.querySelector(".trends__list"),btnLoad:document.querySelector(".js-load"),myLibContainer:document.querySelector(".js-mylib-container"),searchEl:document.querySelector("#genre-search")},r=[],o=(0,l.loadLs)(l.KEY)||[];function d(t){let n=[...t];if(n.length<9){u(n),s.btnLoad.classList.add("visually-hidden");return}let i=n.slice(0,9);n.splice(0,9),e=[...n],u(i),s.btnLoad.classList.remove("visually-hidden"),s.btnLoad.addEventListener("click",c)}function c(){if(e.length<9){u(e),s.btnLoad.classList.add("visually-hidden");return}let t=e.slice(0,9);u(t),e.splice(0,9)}function u(e){let t=function(e){let t=e.map(({id:e,genres:t,poster_path:n,release_date:i,title:a,vote_average:l})=>{var s;return`<li class="library-list trends-box" id=${e}>
              <img
                src="https://image.tmdb.org/t/p/original/${n}"
                alt="${a}"
                class="trends__photo"
              />
              <div class="trends__description">
                <div class="trends__info">
                  <h3 class="trends__name">${a}</h3>
                  <p class="trends__ganre">${t[0].name}|${i.split("-")[0]}</p>
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
  <button type="button" class="load-more js-load visually-hidden">Load more</button>`,a("7hKzD"),a("i8Q71"),a("9XI3k"),a("5xtVg"),a("bBqzh")}();
//# sourceMappingURL=myLibrary.e3725405.js.map
