const assert = require("assert");

const pegaOMaiorNumero = (numeros) => {
  if (!Array.isArray(numeros)) return new Error();
  return Math.max(...numeros);
};

describe("pegaOMaiorNumero", () => {
  it("Deve retornar o maior número de uma lista", () => {
    const maiorNumero = pegaOMaiorNumero([1, 9, 7, 21, 15, 13]);
    assert.equal(maiorNumero, 21);
  });

  it("Deve retornar uma exceção caso o parâmetro fornecido não seja uma lista", () => {
    const maiorNumero = pegaOMaiorNumero("invalid_parameter");
    assert.deepEqual(maiorNumero, new Error());
  });
});
