import { Console } from '@woowacourse/mission-utils';

import VisitDate from './VisitDate.js';
import Order from './Order.js';

import CONSTANT from './constant.js';

const InputView = {
  async readDate() {
    while (true) {
      try {
        const input = await Console.readLineAsync(CONSTANT.MESSAGE.INPUT_DATE);

        return new VisitDate(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  },
  /**
   * @param {VisitDate} visitDate
   */
  async readOrder(visitDate) {
    while (true) {
      try {
        const input = await Console.readLineAsync(CONSTANT.MESSAGE.INPUT_ORDER);

        return new Order(input, visitDate);
      } catch (error) {
        Console.print(error.message);
      }
    }
  },
};

export default InputView;
