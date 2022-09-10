// // 'use strict'
// // const obj = {
// //     ugu: () => {
// //     console.log(this);
// //   },
// //   bum() {
// //         (() => {
// //     console.log(this);
// //     })()
// //   }
// // }

// // obj.ugu();
// // obj.bum();

// // 'use strict'
// // const obj = {
// //    myThis : this,
// //     ugu: () => {
// //     console.log(this);
// //   },
// //   bum() {
// //         (() => {
// //     console.log(this);
// //     })()
// //   }
// // }

// // obj.ugu();
// // obj.bum();
// // this ссылается на Window

// const instruments = [
//   {
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
//     name: 'Молоток',
//     price: 150,
//   },
//   {
//     id: 4,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
//     name: 'Молоток',
//     price: 175,
//   },
//   {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
//     name: 'Перфоратор',
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
//     name: 'Рівень',
//     price: 2000,
//   },
// ];

// const refs = {
//   basketBtn: document.querySelector('.basket-button'),
//   favouriteBtn: document.querySelector('.favourite-button'),
//   list: document.querySelector('.products'),
//   container: document.querySelector('.container'),
//   // data-id = 'id'
// };

// const markup = instruments.reduce((acc, element) => {
//   return (
//     acc +
//     `<li data-id="${element.id}" class="item">
//     <img src="${element.img}" alt="${element.name}" width="200">
//     <h2 class="products__title">${element.name}</h2>
//     <p class="products__desc">${element.price}</p>
//     <button class="js-add">Basket</button><button class="js-favourite">Favourite</button>
// </li>`
//   );
// }, '');

// const BASKET_KEY = 'basket-key';
// const FAVORITE_KEY = 'favorite-key';
// let basket = JSON.parse(localStorage.getItem('basket-key')) ?? [];
// let favorite = JSON.parse(localStorage.getItem('favorite-key')) ?? [];

// refs.list.insertAdjacentHTML('beforeend', markup);
// refs.list.addEventListener('click', onclick);

// function onClick(e) {
//   if (e.target.classList.contains('js-add')) {
//     console.log(e.target);
//     const currentProductId = e.target.closest('li').dataset.id;
//     const obj = instruments.find(element => element.id === Number(currentProductId));
//     basket.push(obj);
//     localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
//     console.log(basket);
//   }

//   if (e.target.classList.contains('js-favorite')) {
//     console.log(e.target);
//     const currentProductId = e.target.closest('li').dataset.id;
//     const obj = instruments.find(element => element.id === Number(currentProductId));
//     favorite.push(obj);
//     localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite));
//     console.log(favorite);
//   }
// }

// refs.basketBtn.addEventListener('click', onClickBasket);
// function onClickBasket() {
//   if (!basket.length) {
//     refs.container.innerHTML = `<li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxdGLlzbEYut8PuInk6XpQqEkFqzrCD4_keNaNTzNqMu5-dDtkPtAjQTGP96qp4cwyGY&usqp=CAU" alt=""></li>`;
//   } else {
//     refs.container.innerHTML = basket.map(({ name }) => `<li><h2>${name}</h2></li>`);
//   }
// }

// *            Time

const refs = {
  dayWeek: document.querySelector(".date-day"),
  dayMonth: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  time: document.querySelector(".digital-clock"),
  arrowSeconds: document.querySelector(".clock-seconds__arrow"),
  arrowMinutes: document.querySelector(".clock-minutes__arrow"),
  arrowHours: document.querySelector(".clock-hours__arrow"),
};
const namesOfDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

(() => {
  const intervalId = setInterval(updateInterface, 1000);
})();

function updateInterface() {
  const date = new Date();

  updateDate(date);
  updateClocks(date);
}

function addLeadingZero(number) {
  return String(number).padStart(2, "0");
}

function updateDate(date) {
  refs.dayWeek.textContent = namesOfDay[date.getDay()];
  refs.dayMonth.textContent = date.getDate();
  refs.month.textContent = namesOfMonth[date.getMonth()];
  refs.year.textContent = date.getFullYear();

  refs.time.textContent = `${addLeadingZero(date.getHours())} год.,
   ${addLeadingZero(date.getMinutes())} хв.,
   ${addLeadingZero(date.getSeconds())} сек.`;
}

function updateClocks(date) {
  refs.arrowSeconds.style.transform = `rotate(${
    (date.getSeconds() * 360) / 60
  }deg)`;
  refs.arrowMinutes.style.transform = `rotate(${
    (date.getMinutes() * 360) / 60
  }deg)`;
  refs.arrowHours.style.transform = `rotate(${
    (date.getHours() * 360) / (24 / 2) + date.getMinutes() * 0.33
  }deg)`;
}




