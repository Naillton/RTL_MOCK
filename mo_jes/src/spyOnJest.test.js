const math = require('./App');

test("#somar", async () => {
  await expect(math.somar(1, 2)).resolves.toBe(3);

  // criando mock e subistituindo adicao por subtracao
  const mockSum = jest
  .spyOn(math, "somar")
  .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSum).toHaveBeenCalledTimes(1);
  expect(mockSum(4, 4)).toBe(0);
  expect(mockSum).toHaveBeenCalledWith(4, 4);
  expect(mockSum).toBeCalled();

  // restaurando implementacao original
  math.somar.mockRestore();
  return expect(math.somar(4, 4)).resolves.toBe(8)
})