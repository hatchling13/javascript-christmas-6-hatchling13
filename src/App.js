import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    OutputView.printGreeting();

    const date = await InputView.readDate();
    const order = await InputView.readOrder(date);

    OutputView.printBenefits(order);
  }
}

export default App;
