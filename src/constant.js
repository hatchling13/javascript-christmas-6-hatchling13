const NUMBER = {
  MENU_COUNT_MAX: 20,
  MIMIMUM_PAYMENT_FOR_GIFT: 120_000,
};
Object.freeze(NUMBER);

const MESSAGE = {
  GREETING: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  INPUT_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  INPUT_ORDER:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};
Object.freeze(MESSAGE);

const NAMES = {
  APPETIZER: ['양송이수프', '타파스', '시저샐러드'],
  MAIN: ['티본스테이크', '바비큐립', '해산물파스타', '크리스마스파스타'],
  DESSERT: ['초코케이크', '아이스크림'],
  DRINK: ['제로콜라', '레드와인', '샴페인'],
};
Object.freeze(NAMES);

const PRICES = {
  APPETIZER: [6_000, 5_500, 8_000],
  MAIN: [55_000, 54_000, 35_000, 25_000],
  DESSERT: [15_000, 5_000],
  DRINK: [3_000, 60_000, 25_000],
};
Object.freeze(PRICES);

const MENU = { NAMES, PRICES };
Object.freeze(MENU);

const VISIT_DATE = {
  INVALID_DAY: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
};
Object.freeze(VISIT_DATE);

const ERROR = {
  BLANK_INCLUDED: '[ERROR] 입력에 공백이 존재합니다. 다시 입력해 주세요.',
  INVALID_ORDER: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  VISIT_DATE,
};
Object.freeze(ERROR);

const CONSTANT = {
  ERROR,
  MENU,
  MESSAGE,
  NUMBER,
};
Object.freeze(CONSTANT);

export default CONSTANT;
