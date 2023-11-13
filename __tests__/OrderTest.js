import Order from '../src/Order.js';
import VisitDate from '../src/VisitDate.js';

describe('주문 클래스 테스트', () => {
  const date = new VisitDate('25');

  test('정상 생성', () => {
    const order = new Order('해산물파스타-2,레드와인-1,초코케이크-1', date);

    const expected = '해산물파스타 2개\n레드와인 1개\n초코케이크 1개';

    expect(order.toString()).toBe(expected);
  });

  test.each([
    ['떡볶이-1'],
    ['redwine-1'],
    ['해산물파스타-0'],
    ['레드와인:1,초코케이크-1'],
    ['해산물파스타-1,해산물파스타-2'],
  ])('유효하지 않은 주문을 입력한 경우 예외가 발생한다.', () => {
    expect(() => {
      new Order('', date);
    }).toThrow('[ERROR]');
  });

  test('메뉴 개수의 합계가 20개보다 많을 경우 예외가 발생한다.', () => {
    expect(() => {
      new Order('해산물파스타-20,레드와인-1', date);
    }).toThrow('[ERROR]');
  });

  test('음료만 주문할 경우 예외가 발생한다.', () => {
    expect(() => {
      new Order('제로콜라-1', date);
    }).toThrow('[ERROR]');
  });

  test('할인 전 총주문 금액 계산 함수 테스트', () => {
    const order = new Order('해산물파스타-2,레드와인-1,초코케이크-1', date);

    expect(order.totalPriceBeforeDiscount()).toBe(145_000);
  });

  test('증정 이벤트 해당 여부 확인 함수 테스트', () => {
    const order = new Order('티본스테이크-3', date);

    expect(order.canGetGift()).toBe(true);
  });

  test('크리스마스 디데이 할인 금액 계산 함수 테스트', () => {
    const order = new Order('해산물파스타-2,레드와인-1,초코케이크-1', date);

    expect(order.dDayDiscount()).toBe(3_400);
  });

  test('평일 할인 금액 계산 함수 테스트', () => {
    const order = new Order('해산물파스타-2,레드와인-1,초코케이크-1', date);

    expect(order.weekdayDiscount()).toBe(2_023);
  });

  test('주말 할인 금액 계산 함수 테스트', () => {
    const weekend = new VisitDate('1');
    const order = new Order('해산물파스타-2,레드와인-1,초코케이크-1', weekend);

    expect(order.weekendDiscount()).toBe(4_046);
  });

  test('특별 할인 금액 계산 함수 테스트', () => {
    const order = new Order('해산물파스타-2,레드와인-1,초코케이크-1', date);

    expect(order.specialDiscount()).toBe(1_000);
  });

  test('총혜택 금액 계산 함수 테스트', () => {
    const order = new Order('티본스테이크-3,레드와인-1,초코케이크-2', date);

    expect(order.totalDiscountPrice()).toBe(33_446);
  });

  test('할인 후 예상 결제 금액 계산 함수 테스트', () => {
    const order = new Order('티본스테이크-3,레드와인-1,초코케이크-2', date);

    expect(order.expectedPayment()).toBe(246_554);
  });
});
