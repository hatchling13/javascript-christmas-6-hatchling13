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

  /**
   * @param {string} input
   */
  #parse(input) {
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
