import CONSTANT from './constant.js';
import MENU from './Menu.js';

import VisitDate from './VisitDate.js';

class Order {
  #data;
  #visitDate;

  /**
   * @param {string} input
   * @param {VisitDate} visitDate
   */
  constructor(input, visitDate) {
    const parsed = this.#parse(input);
    this.#validate(parsed);

    this.#data = parsed;
    this.#visitDate = visitDate;
  }

  toString() {
    const orderData = Array.from(this.#data.entries());
    return orderData.map(([name, count]) => `${name} ${count}개`).join('\n');
  }

  getVisitDate() {
    return this.#visitDate.toString();
  }

  /**
   * @param {string} input
   */
  #parse(input) {
    const splitedByComma = this.#splitByComma(input);
    const splitedByDash = splitedByComma.map(item => item.split('-'));

    const objects = this.#objectify(splitedByDash);
    const parsed = this.#makeMap(objects);

    return parsed;
  }

  /**
   * @param {string} input
   */
  #splitByComma(input) {
    if (input.includes(' ')) {
      throw new Error(CONSTANT.ERROR.BLANK_INCLUDED);
    }

    if (input.includes('.')) {
      throw new Error(CONSTANT.ERROR.INVALID_ORDER);
    }

    const splitedByComma = input.split(',');
    const regExp = new RegExp('[가-힣]+-[0-9]+');

    if (splitedByComma.some(str => !regExp.test(str))) {
      throw new Error(CONSTANT.ERROR.INVALID_ORDER);
    }

    return splitedByComma;
  }

  /**
   * @param {Map<string, number>} parsed
   */
  #validate(parsed) {
    const names = Array.from(parsed.keys());
    const counts = Array.from(parsed.values());

    if (names.some(name => !MENU.getAllMenuNames().includes(name))) {
      throw new Error(CONSTANT.ERROR.INVALID_ORDER);
    }

    if (counts.some(count => count < 1)) {
      throw new Error(CONSTANT.ERROR.INVALID_ORDER);
    }

    this.#checkMenuDuplicated(names);
  }

  /**
   * @param {string[]} menuNames
   */
  #checkMenuDuplicated(menuNames) {
    const deduplicated = new Set(menuNames);

    if (deduplicated.size !== menuNames.length) {
      throw new Error(CONSTANT.ERROR.INVALID_ORDER);
    }
  }

  /**
   * @param {string[][]} data
   */
  #objectify(data) {
    if (data.some(item => item.length !== 2)) {
      throw new Error(CONSTANT.ERROR.INVALID_ORDER);
    }

    const objects = data.map(([name, count]) => {
      return { name, count: Number.parseInt(count, 10) };
    });

    if (objects.some(({ count }) => Number.isNaN(count))) {
      throw new Error(CONSTANT.ERROR.INVALID_ORDER);
    }

    return objects;
  }

  /**
   * @param {Object[]} objects
   * @param {string} objects.name
   * @param {number} objects.count
   * @returns {Map<string, number>}
   */
  #makeMap(objects) {
    const map = new Map();

    objects.forEach(({ name, count }) => {
      if (map.has(name)) {
        throw new Error(CONSTANT.ERROR.INVALID_ORDER);
      }

      map.set(name, count);
    });

    return map;
  }
}

export default Order;
