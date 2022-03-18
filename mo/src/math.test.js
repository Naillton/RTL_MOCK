const math = require('./math');
jest.mock('./math');

test("#somar", () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);
  
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toBeCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test("#subtrair", () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(10, 5);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair(10, 5)).toBe(5);
});

test("#dividir", () => {
  math.dividir.mockImplementation((a, b) => a / b);
  math.dividir(10, 5);

  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir(10, 5)).toBe(2);
});

test("#multiplicar", () => {
    math.multiplicar.mockImplementation((a, b) => a * b);
    math.multiplicar(10, 5);
  
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar(10, 5)).toBe(50);
});