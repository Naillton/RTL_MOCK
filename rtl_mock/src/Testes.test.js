let  numeroAleatorio = () => {
  return Math.floor(Math.random() * 100);
}
let  divisivelPorDois = () => (numeroAleatorio() % 2) === 0;

let somaDoisNumeros = () => {
  return numeroAleatorio() + numeroAleatorio();
}

describe('Aprendendo sobre mocks', () => {
  test('testa se o numero e par', () => {
    numeroAleatorio = jest.fn().mockReturnValue(4);
    
    expect(divisivelPorDois()).toBe(true);
  });

  test('testa se o numero e impar', () => {
    numeroAleatorio = jest
    .fn()
    .mockReturnValue(3);
    
    expect(divisivelPorDois()).toBe(false);
  });


  test('Testa se a funcao foi chamada', () => {
    divisivelPorDois = jest.fn();

    divisivelPorDois();
    expect(divisivelPorDois).toHaveBeenCalled();
  });

  test('Testa o resultado da função', () => {
    somaDoisNumeros = jest
    .fn()
    .mockReturnValue(8);

    expect(somaDoisNumeros()).toBe(8);
  });

  test('testa quantas vezes a funcao foi chamada', () => {
    somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    expect(somaDoisNumeros).toBeCalledTimes(1);
  });

})