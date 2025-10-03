const { createMultiples } = require('./ejercicio_0_aaron_galar.js');

describe(' el tamaño es 1 y el número elegido 2. Por tanto la respuesta debería ser 2  ', () => {
  test('length=1, number=2', () => {
    expect(createMultiples(1, 2)).toEqual([2]);
  });

test(' multiplos con un numero negativo (-3) y un tamaño de 4 . Resultado -3,-6,-9,-12', () => {
    expect(createMultiples(4, -3)).toEqual([-3, -6, -9, -12]);
  });
});
