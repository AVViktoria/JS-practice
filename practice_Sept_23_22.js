// Реалізуйте функціонал отримання даних з API по кліку на кнопку "BUTTON" і виведення їх
// на сторінку при кожному кліку по кнопці. Кожен факт має мати свій порядковий номер.
// https://catfact.ninja/

//*                                               
// const refs = {
//   btn: document.querySelector('.submit-btn'),
//   list: document.querySelector('.list'),

// }
// let number  = 0;
// refs.btn.addEventListener('click', onSearch);

// async function onSearch() {
//   const url = 'https://catfact.ninja/fact/';
//   const fact = await fetch (`${url}`).then(response => response.json());
// makeParagraph(fact.fact)
//   // console.log(fact);
// };

// function makeParagraph(text){
//   console.log(text)
 
//   refs.list.insertAdjacentHTML("beforeend", `<li>${number += 1}${text}</li>`)
// };

//*                                               

// const btn = document.querySelector('.btn');
// const list = document.querySelector('.list');

// let number = 0;


// btn.addEventListener('click', onBtnClick);

// async function onBtnClick() {
//     const fact = await fetch("https://catfact.ninja/fact").then(response => response.json());
//     makePargrarh(fact.fact)
// };


// function makePargrarh(text) {
//     console.log(text);
//     list.insertAdjacentHTML('beforeend',
//         `<li>${number += 1} ${text}</li>`
//     )
// }

//*                                               

// Реалізуйте функціонал пошуку даних по юзеру з API при сабміті форми і виведення їх на сторінку
// https://agify.io/

// const refs = {
//   formEl: document.querySelector('.userForm'),
//   userInfoList: document.querySelector('.list'),
  
// }

// refs.formEl.addEventListener('submit', onFormSubmit);
// async function onFormSubmit(e){
//   e.preventDefault();
//   const userName  = e.target.elements.name.value;
//   console.log(userName);
//   fetchUser(userName);
// }

// async function fetchUser(userName){
//   const userInf = await fetch(`https://api.agify.io/?name=${userName}`).then(
//     (resp) => resp.json()
//   );
// // console.log(userInf);
//   renderUserInfo(userInf);

// }

// function renderUserInfo({name, age}){
// refs.userInfoList.insertAdjacentHTML('beforeend',`<li>Name: ${name} Age: ${age}</li>`) 
// }
//*                                               
// Реалізуйте функціонал створення зображень при клікові на кнопку BUTTON
// https://dog.ceo/dog-api/

// const refs = {
//   list: document.querySelector('.list'),
//   btn:document.querySelector('.btn'),
//   body:document.querySelector('body'),
// }

// refs.btn.addEventListener('click', onClickBtn);

// function onClickBtn(e) {
//   e.preventDefault();
//   const BASE_URL = `https://dog.ceo/api/breeds/image/random`;
//   fetch(`${BASE_URL}`)
//     .then(r => r.json())
//     .then((data)=>render(data.message));
//     }
    
//     function render(imageUrl) {
//       const markup = `<div><img src="${imageUrl}" alt="Dog"  height ="120px"></div>`;
      
//       // arr.map(item => cardTemplate(item)).join('');
//       refs.body.insertAdjacentHTML('beforeend', markup);
//     }

//*                                               
// Отримати дані з API і вивести їх на сторінку
// https://pokeapi.co/api/v2/pokemon
// 1. Вивести список покемонів (20шт) на сторінку
// 2. Створити розмітку картки покемона
// 3. При клікові по картці покемона - відкривати модалку з даними по покемону на якого ми клікнули
const rootEl = document.querySelector(".root");

//main
(async () => {
  const pokemons = (await getPokemons()).results;
  const pokemonInfo = await Promise.all(
    pokemons.map(({ url }) => getPokemon(url))
  );
  renderPokemons(pokemonInfo);
})();

async function getPokemons() {
  return await fetch("https://pokeapi.co/api/v2/pokemon").then((response) => {
    if (response.ok) return response.json();
  });
}

async function getPokemon(url) {
  return fetch(url).then((response) => {
    if (response.ok) return response.json();
  });
}

function renderPokemons(pokemons) {
  const liMarkup = pokemons.reduce((acc, pokemon) => {
    return (acc += `<li class="pokemon-card" data-pokemon=${pokemon.name}>
      <h2>${pokemon.name}</h2>
      <img src=${pokemon.sprites.other.dream_world.front_default}  />
      </li>`);
  }, "");

  rootEl.innerHTML = `<ul>${liMarkup}</ul>`;
}