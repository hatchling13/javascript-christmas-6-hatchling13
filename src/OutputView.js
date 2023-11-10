import { Console } from '@woowacourse/mission-utils';

import CONSTANT from './constant';

const OutputView = {
  printGreeting() {
    Console.print(CONSTANT.MESSAGE.GREETING);
  },
  /**
   * @param {string} date
   */
  printBenefits(date) {
    Console.print(`${date}에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },
  printMenu() {
    Console.print('<주문 메뉴>');
  },
};

export default OutputView;
