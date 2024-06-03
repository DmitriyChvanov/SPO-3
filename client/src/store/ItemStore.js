import { makeAutoObservable } from "mobx";
import zatychka from "./../assets/img/zatychka.png"

const STORAGE_BASKET_KEY = "Basket";

export default class ItemStore {
  constructor() {
    this._types = [
      { id: 0, name: "face care" },
      { id: 1, name: "body care" },
      { id: 2, name: "new arrive" },
      { id: 3, name: "best sell" },
      { id: 4, name: "flash" },
    ];
    this._items = []
    this._basket = JSON.parse(localStorage.getItem(STORAGE_BASKET_KEY) || "[]");
    this._clothes = [];
    this._selectedType = {};
    this._selectedItems = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  
  setBasket(basket) {
    this._basket = basket;
    localStorage.setItem(STORAGE_BASKET_KEY, JSON.stringify(this._basket));
  }
  setItems(items) {
    this._items = items;
  }
  setSelectedType(type) {
    this.selectedType = type;
  }
  setSelectedItems(items) {
    this._selectedItems = items;
  }

  get types() {
    return this._types;
  }
  get basket() {
    return this._basket;
  }
  get items() {
    return this._items;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedItems() {
    return this._selectedItems;
  }

  // actions
  addBasketItem(Item) {
    const newItem = { ...Item, count: 1 };
    const basket = [...this.basket];
    const currentItem = basket.find(
      (BasketItem) => BasketItem.id === newItem.id
    );
    if (currentItem) {
      currentItem.count = currentItem.count ? currentItem.count + 1 : 1;
    } else {
      basket.push(newItem);
    }
    this.setBasket(basket);
  }
}