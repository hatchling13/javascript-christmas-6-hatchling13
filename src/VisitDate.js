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
      throw new Error('[ERROR]');
    }

    if (!Number.isInteger(parsed)) {
      throw new Error('[ERROR]');
    }
  }
}

export default VisitDate;
