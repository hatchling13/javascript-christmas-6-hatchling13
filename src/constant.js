const MESSAGE = {
  GREETING: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  INPUT_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  INPUT_ORDER:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};
Object.freeze(MESSAGE);

const VISIT_DATE = {
  INVALID_DAY: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
};
Object.freeze(VISIT_DATE);

const ERROR = {
  BLANK_INCLUDED: '[ERROR] 입력에 공백이 존재합니다. 다시 입력해 주세요.',
  VISIT_DATE,
};
Object.freeze(ERROR);

const CONSTANT = {
  ERROR,
  MESSAGE,
};
Object.freeze(CONSTANT);

export default CONSTANT;
