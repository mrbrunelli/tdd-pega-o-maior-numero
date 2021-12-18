const assert = require("assert");

const pegaOMaiorNumero = (numeros) => {
  let maior = 0;

  for (const numero of numeros) {
    if (numero > maior) {
      maior = numero;
    }
  }

  return maior;
};

describe("pegaOMaiorNumero", () => {
  it("Deve retornar o maior número de uma lista", () => {
    const maiorNumero = pegaOMaiorNumero([1, 9, 7, 21, 15, 13]);
    assert.equal(maiorNumero, 21);
  });
});
