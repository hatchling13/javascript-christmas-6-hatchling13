import VisitDate from './VisitDate.js';

import CONSTANT from './constant.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(CONSTANT.MESSAGE.GREETING);

    return new VisitDate(input);
  },
  // ...
};

export default InputView;
