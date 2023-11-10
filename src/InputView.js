import { Console } from '@woowacourse/mission-utils';

import VisitDate from './VisitDate.js';

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
  // ...
};

export default InputView;
