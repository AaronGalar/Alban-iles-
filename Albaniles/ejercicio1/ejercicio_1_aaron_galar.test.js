const { isLeapYear} = require('./ejercicio_1_aaron_galar.js');

describe('Pruebas para compobar el primer if  year', () => {
  test('year = 2000', () => {
    expect(isLeapYear(2000)).toBeTruthy();
  });

  test('year menor que 1900', () => {
    expect(isLeapYear("1800")).toBeFalsy();
  });

  test('year mayor que 100000', () => {
    expect(isLeapYear("100001")).toBeFalsy();
  });

  test('year = "2000" (string)', () => {
    expect(isLeapYear("2000")).toBeTruthy();
  });
});
