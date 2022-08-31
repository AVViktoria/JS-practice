'use strict'

const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
    name: 'Молоток',
    price: 150,
  },
  {
    id: 4,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
    name: 'Молоток',
    price: 175,
  },
  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
    name: 'Перфоратор',
    price: 3000,
  },
  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
    name: 'Рівень',
    price: 2000,
  },
];

const refs = {
  list: document.querySelector('.products'),
  buttonAdd: document.querySelector('.basket'),
  buttonFavorite: document.querySelector('.favorite'),
  container: document.querySelector('.container'),
  // image, name price, buttons
  // add to bask.entries()add to favorite
  // data-id= "id"
};
let basket = [];
let favorite = [];

const markup = instruments.reduce((acc, item) => {
  return (
    acc +
    `<li class = "item" data-id= "${item.id}"><img src = "${item.img}" alt ="${item.name}"  width = "200" ><h2>${item.name}</h2><p>${item.price}</p><button class = "js-add">BasketAdd</button><button class = "js-favorite">FavoriteAdd</button></li> `
  );
}, '');

refs.list.insertAdjacentHTML('beforeend', markup);
refs.list.addEventListener('click', onclick);

function onclick(event) {
  if (event.target.classList.contains('js-favorite')) {
    const currentCart = event.target.closest('.item');
    const currentId = currentCart.dataset.id;
    const obj = instruments.find(elt => {
      return elt.id === Number(currentId);
    });

    const addedItem = basket.find(elt => {
      return elt.id === Number(currentId);
    });

    if (addedItem) {
      addedItem.qty += 1;
      return;
    } else {
      const productToOrder = { date: new Date(), qty: 1, ...obj };
      basket.push(productToOrder);
      return;
    }
  }

  if (event.target.classList.contains('js-favorite')) {
    const currentCart = event.target.closest('.item');
    const currentId = currentCart.dataset.id;

    const obj = instruments.find(elt => {
      return elt.id === Number(currentId);
    });

    const addedItem = basket.find(elt => {
      return elt.id === Number(currentId);
    });

    if (!addedItem) {
      favorite.push(obj);
      event.target.setAttribute('disabled', true);
    }
    console.log(favorite);
  }
}

refs.buttonAdd.addEventListener('click', onBasketButtonClick);


    function createMarkupForBasket(){
      const basketMarkup = basket.reduce((acc, element) => {
        return acc + `<li data-id="${element.id}" class="item">
    <img src="${element.img}" alt="${element.name}" width="200">
    <h2 class="products__title">${element.name}</h2>
    <p class="products__desc">${element.price}</p>
    <p class="">${element.date.getDate()
    }</p>
    <p class="">Кількість: ${element.qty}</p>
    <button class="js-remove">Remove</button>    
    </li>`
    },'')
    refs.container.innerHTML = basketMarkup;
    };
    
    function onBasketButtonClick(evt) {
      console.log(basket);
      createMarkupForBasket();
      refs.container.addEventListener('click', handlerRemoveProduct);
        }

    function  handlerRemoveProduct(evt){
      if(evt.target.contains('js-remove')){
        const itemRemove = evt.target.closest('.item').dataset.id;
      
      const indexOfItem  = basket.findIndex(elem => elem.id === Number(itemRemove));
      basket.splice(indexOfItem, 1);
      createMarkupForBasket();
    }
      
    }

