import operate from '../components/logic/operate';

describe('Unit tests for operate.js', () => {
  test('It should do + and - operations correctly ', () => {
    const num1 = 2;
    const num2 = 2;
    const plusOperand = '+';
    const minusOperand = '-';
    const result = operate(num1, num2, plusOperand);

    const resultMinus = operate(num1, num2, minusOperand);

    expect(parseInt(result, 10)).toBe(num1 + num2);
    expect(parseInt(resultMinus, 10)).toBe(num1 - num2);
  });

  test('It should calculate x ÷ and %', () => {
    const num1 = 12;
    const num2 = 6;
    const times = 'x';
    const mod = '%';
    const divide = '÷';

    const resultTimes = operate(num1, num2, times);
    const resultMod = operate(num1, num2, mod);
    const resultDivide = operate(num1, num2, divide);

    expect(parseInt(resultTimes, 10)).toBe(num1 * num2);
    expect(parseInt(resultMod, 10)).toBe(num1 % num2);
    expect(parseInt(resultDivide, 10)).toBe(num1 / num2);
  });
});
