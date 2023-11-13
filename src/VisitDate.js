import CONSTANT from './constant.js';

class VisitDate {
  #day;

  /**
   * @param {string} input
   */
  constructor(input) {
    const parsed = this.#parse(input);
    this.#validate(parsed);

    this.#day = parsed;
  }

  toString() {
    return `12월 ${this.#day}일`;
  }

  isWeekend2023() {
    const remainder = this.#day % 7;

    if (remainder === 1 || remainder === 2) {
      return true;
    }

    return false;
  }

  /**
   * @param {string} input
   */
  #parse(input) {
    if (input.includes(' ')) {
      throw new Error(CONSTANT.ERROR.BLANK_INCLUDED);
    }

    if (input.includes('.')) {
      throw new Error(CONSTANT.ERROR.VISIT_DATE.INVALID_DAY);
    }

    return Number.parseInt(input, 10);
  }

  /**
   * @param {number} parsed
   */
  #validate(parsed) {
    if (parsed < 1 || parsed > 31) {
      throw new Error(CONSTANT.ERROR.VISIT_DATE.INVALID_DAY);
    }

    if (!Number.isInteger(parsed)) {
      throw new Error(CONSTANT.ERROR.VISIT_DATE.INVALID_DAY);
    }
  }
}

export default VisitDate;
