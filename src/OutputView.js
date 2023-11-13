import { Console } from '@woowacourse/mission-utils';

import Order from './Order.js';

import CONSTANT from './constant.js';
import MENU from './Menu.js';

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
    this.printDiscounts(order);
    this.printTotalDiscountPrice(order);
    this.printExpectedPayment(order);
    this.printPromotionBadge(order);
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
    Console.print(
      `${this.convertNumberToKRLocale(order.totalDiscountPrice())}원\n`,
    );
  },
  /**
   * @param {Order} order
   */
  printPromotionGift(order) {
    Console.print('<증정 메뉴>');

    const gift = order.canGetGift() ? '샴페인 1개' : '없음';

    Console.print(`${gift}\n`);
  },
  /**
   * @param {Order} order
   */
  printDiscounts(order) {
    Console.print('<혜택 내역>');
    const discounts = order.getAllDiscounts();

    if (discounts.every(discount => discount === 0)) {
      Console.print('없음');
      return;
    }

    this.printDiscount(order.dDayDiscount(), '크리스마스 디데이 할인');
    this.printDiscount(order.weekdayDiscount(), '평일 할인');
    this.printDiscount(order.weekendDiscount(), '주말 할인');
    this.printDiscount(order.specialDiscount(), '특별 할인');
    this.printGift(order);
  },
  /**
   * @param {number} discount
   * @param {string} reason
   */
  printDiscount(discount, reason) {
    if (discount !== 0) {
      Console.print(`${reason}: -${this.convertNumberToKRLocale(discount)}원`);
    }
  },
  /**
   * @param {Order} order
   */
  printGift(order) {
    if (order.canGetGift()) {
      Console.print(
        `증정 이벤트: -${this.convertNumberToKRLocale(order.giftPrice())}원\n`,
      );
    }
  },
  /**
   * @param {Order} order
   */
  printTotalDiscountPrice(order) {
    Console.print('<총혜택 금액>');
    Console.print(
      `-${this.convertNumberToKRLocale(order.totalDiscountPrice())}원\n`,
    );
  },
  /**
   * @param {Order} order
   */
  printExpectedPayment(order) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(
      `${this.convertNumberToKRLocale(order.expectedPayment())}원\n`,
    );
  },
  /**
   * @param {Order} order
   */
  printPromotionBadge(order) {
    Console.print('<12월 이벤트 배지>');

    if (order.totalDiscountPrice() >= 20_000) {
      Console.print('산타');
    } else if (order.totalDiscountPrice() >= 10_000) {
      Console.print('트리');
    } else if (order.totalDiscountPrice() >= 5_000) {
      Console.print('별');
    } else {
      Console.print('없음');
    }
  },
  /**
   * @param {number} num
   */
  convertNumberToKRLocale(num) {
    return num.toLocaleString('ko-KR');
  },
};

export default OutputView;
