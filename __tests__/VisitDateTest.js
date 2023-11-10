import VisitDate from '../src/VisitDate.js';

describe('방문 날짜 클래스 테스트', () => {
  test('정상 생성', () => {
    const date = new VisitDate('25');

    expect(date.toString()).toBe('12월 25일');
  });

  test.each([['-1'], ['0'], ['32']])(
    '1 이상 31 이하가 아닌 경우 예외가 발생한다.',
    input => {
      expect(() => {
        new VisitDate(input);
      }).toThrow('[ERROR]');
    },
  );

  test.each([['invalid'], ['1.3'], [' 25'], ['2 5'], ['25 ']])(
    '입력에 공백이 존재하거나 정수가 아닌 경우 예외가 발생한다.',
    input => {
      expect(() => {
        new VisitDate(input);
      }).toThrow('[ERROR]');
    },
  );
});
