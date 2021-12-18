const assert = require("assert");

const pegaOMaiorNumero = (numeros) => Math.max(...numeros);

describe("pegaOMaiorNumero", () => {
  it("Deve retornar o maior número de uma lista", () => {
    const maiorNumero = pegaOMaiorNumero([1, 9, 7, 21, 15, 13]);
    assert.equal(maiorNumero, 21);
  });
});
