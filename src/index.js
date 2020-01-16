import $ from 'jquery';
import api from './api';
import 'normalize.css';
import './index.css';
import store from './store';

import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

  api.getItems()
  .then(res => res.json())
  .then(res => console.log(res));

console.log(api.BASE_URL);
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
