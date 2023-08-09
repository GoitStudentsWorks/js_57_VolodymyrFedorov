import  axios from 'axios';
const refs =  {
    ulEl : document.querySelector(".trends__list"),
    backdrop : document.querySelector(".js-backdrop"),
    btnCls : document.querySelector(".js-btn-cls"),
    //card : document.querySelector(".trends__item"),
    modalBox : document.querySelector(".js-box"),
    body : document.body,

}
const BASE_URL='https://api.themoviedb.org/3/movie/'
refs.ulEl.addEventListener("click", openModal)
let toLs = [];
export const KEY = "Library";
async function findCard(id){
    const response = await axios.get(`${BASE_URL}${id}`,{
    headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTBiMjA0M2E3YmRlZmRmMTI5ZGViYjc4NGJiZTFmNyIsInN1YiI6IjY0ZDA5ZWY5ODUwOTBmMDBjODdkY2FjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AoWYcFyuoQyP_ePohi3LRcw4Fp8RAJIbZs-uo4526oA'
          },   
    params : {
        language: 'en-US'
    }
    })
    return data = response.data;
  }

async function openModal(event) {
    const liElem = event.target.closest('li');
    const cardId = liElem.getAttribute("id");                      //id для запроса

    refs.body.style.overflow =  "hidden";
    refs.modalBox.innerHTML = " "


if (!liElem.classList.contains(".trends__item")) {                 //открыл модадлку
refs.backdrop.classList.remove("visually-hidden");
}
refs.backdrop.addEventListener("click", onBackdropClick);  
refs.btnCls.addEventListener("click", clsModal);
document.addEventListener('keydown', keyBoardPress);

try {
    const data = await findCard(cardId)
    const cardFilm = cardMarkup(data)
    renderCard(cardFilm);

    const btnLs = document.querySelector(".js-btn-to-ls");
    const arr =  loadLs(KEY);
      
    if(arr){                                                //проверил на пустой LS, забрал данные в массив 
    toLs = [...arr];

    if (toLs.some(el=>el.id === (+cardId))){                //проверил есть ли фильм в LS
    btnLs.textContent = "Remove from my library"
    }}

    btnLs.addEventListener("click", ()=>{                    //обрабатываю клик
        try {
        if (!toLs.some(el=>el.id === (+cardId))){            //добавляю в LS
            toLs.push(data);
            saveLs(KEY, toLs)                              
            btnLs.textContent = "Remove from my library"
            return
        }   
        const ind =  toLs.findIndex(el => el.id ===(+cardId)) //удаляю с LS
        toLs.splice(ind, 1);
        localStorage.removeItem(KEY);
        saveLs(KEY, toLs)                                     //добавляю в LS
        btnLs.textContent = "Add to my library"

           
        } catch (error) {
            console.error("Set state error: ", error.message);
        }
    })
} catch (error) {
    console.log(error.code)
    clsModal()
 }}
 function loadLs(key) {
    const arrJs = localStorage.getItem(key);                       
    return arr = JSON.parse(arrJs);
 }
export function saveLs (key, value) {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState); 
}
export function renderCard(markup) {
return refs.modalBox.insertAdjacentHTML("afterbegin", markup)  
}
function cardMarkup({poster_path, original_title, vote_average, vote_count, popularity, genres, overview}) {
  const genresList = genres.map(el=>el.name).join(" ");
  return markup =` <img class="modal-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}">
    <div class="modal-film-info">
      <h2 class="modal-film-title">${original_title}</h2>
      <div class="modal-film-info-box">
          <ul class="modal-film-info-items-name">
              <li class="modal-film-text">Vote/Votes</li>
              <li class="modal-film-text">Popularity</li>
              <li class="modal-film-text">Genre</li>
          </ul>
          <ul class="modal-film-info-items-values">
              <li class="modal-iten-block">
                  <span class="modal-film-rating">${vote_average.toFixed(1)}</span> 
                  <span class="modal-film-devider"> &nbsp / &nbsp </span>
                  <span class="modal-film-votes">${vote_count}</span>
              </li>
              <li class="modal-film-population">${popularity.toFixed(1)}</li>
              <li class="modal-film-genre">${genresList}</li>
          </ul>
      </div>
      <h3  class="modal-film-info-title">About</h3>
      <p class="modal-film-text-about">${overview}</p>
      <button  type="button" class="modal-btn js-btn-to-ls" >Add to my library</button> `
     

}
function removeEvent() {                             //снимаю слушателей
    refs.btnCls.removeEventListener("click", clsModal);
    document.removeEventListener('keydown', keyBoardPress);
    refs.backdrop.removeEventListener("click", onBackdropClick);
    refs.body.style.overflow = "auto";

}
function clsModal(event) {                           //закрытие по крестику
    refs.backdrop.classList.add("visually-hidden");
    removeEvent();
}
function keyBoardPress(event) {                     //закрытие по 'Escape'
    if (event.key === 'Escape'){
    refs.backdrop.classList.add("visually-hidden");  
    removeEvent();
 }
}
function onBackdropClick(event) {                   //закрываю по backdrop
    if(event.target === event.currentTarget ){  
    refs.backdrop.classList.add("visually-hidden");
    removeEvent();
}
}

