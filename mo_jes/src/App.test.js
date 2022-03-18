const math = require('./App');

test("#somar", async () => {
 await expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e subistituindo a implementação
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toBeCalled();
  expect(math.somar).toHaveBeenCalledTimes(2);

  // resetando o mocl
  math.somar.mockReset();
  // depois de usar o mock reset os valores da funcao sao resetados
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
})