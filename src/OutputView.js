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
    this.printTotalPriceBeforeDiscount(order);
    this.printPromotionGift(order);
  },
  /**
   * @param {Order} order
   */
  printMenu(order) {
    Console.print('<주문 메뉴>');
    Console.print(`${order.toString()}\n`);
  },
  /**
   * @param {Order} order
   */
  printTotalPriceBeforeDiscount(order) {
    Console.print('<할인 전 총주문 금액>');

    const priceText = order.totalPriceBeforeDiscount().toLocaleString('ko-KR');

    Console.print(`${priceText}원\n`);
  },
  /**
   * @param {Order} order
   */
  printPromotionGift(order) {
    Console.print('<증정 메뉴>');

    const gift = order.canGetGift() ? '샴페인 1개' : '없음';

    Console.print(`${gift}\n`);
  },
};

export default OutputView;
