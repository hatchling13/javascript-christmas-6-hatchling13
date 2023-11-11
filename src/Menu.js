import CONSTANT from './constant.js';

class Menu {
  /**
   * @type {Map<string, Map<string, number>>}
   */
  #categories;

  constructor() {
    this.#categories = new Map();

    const menuNames = CONSTANT.MENU.NAMES;
    const menuPrices = CONSTANT.MENU.PRICES;

    this.#addMenu('애피타이저', menuNames.APPETIZER, menuPrices.APPETIZER);
    this.#addMenu('메인', menuNames.MAIN, menuPrices.MAIN);
    this.#addMenu('디저트', menuNames.DESSERT, menuPrices.DESSERT);
    this.#addMenu('음료', menuNames.DRINK, menuPrices.DRINK);
  }

  getAllMenuNames() {
    return Array.from(this.#categories.values()).flatMap(menu =>
      Array.from(menu.keys()),
    );
  }

  /**
   * @param {'애피타이저' | '메인' | '디저트' | '음료'} categoryName
   * @param {string[]} names
   * @param {number[]} prices
   */
  #addMenu(categoryName, names, prices) {
    const menu = new Map();

    for (let i = 0; i < names.length; i++) {
      menu.set(names[i], prices[i]);
    }

    this.#categories.set(categoryName, menu);
  }
}

const MENU = new Menu();

export default MENU;
