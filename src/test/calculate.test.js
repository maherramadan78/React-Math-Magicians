import calculate from '../components/logic/calculate';

describe('Unit tests for calculate.js', () => {
  test('It should reset the result when the button is AC', () => {
    const obj = { total: 200, next: null, operation: null };
    const button = 'AC';
    const result = calculate(obj, button);

    expect(result.total).toBe(null);
  });

  test('When a number is pressed the next should be updated', () => {
    const obj = { total: null, next: 100, operation: null };
    const button = '5';
    const result = calculate(obj, button);

    expect(parseInt(result.next, 10)).toBe(1005);
  });

  test('When the operation is = the total should be calculated', () => {
    const operation = '+';
    const obj = { total: 100, next: 200, operation };
    const button = '=';
    const result = calculate(obj, button);
    expect(parseInt(result.total, 10)).toBe(obj.total + obj.next);
  });
});
