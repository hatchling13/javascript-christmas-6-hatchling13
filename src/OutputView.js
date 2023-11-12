import { Console } from '@woowacourse/mission-utils';

import Order from './Order.js';

import CONSTANT from './constant.js';

const OutputView = {
  printGreeting() {
    Console.print(CONSTANT.MESSAGE.GREETING);
  },
  /**
   * @param {Order} order
   */
  printBenefits(order) {
    Console.print(
      `${order.getVisitDate()}에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
    );

    this.printMenu(order);
  },
  /**
   * @param {Order} order
   */
  printMenu(order) {
    Console.print('<주문 메뉴>');
    Console.print(order.toString());
    Console.print('');
  },
};

export default OutputView;
