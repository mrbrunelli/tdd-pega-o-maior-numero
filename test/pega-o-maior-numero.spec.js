const assert = require("assert");

const pegaOMaiorNumero = (numeros) => {
  if (!Array.isArray(numeros)) return new Error();
  const maior = Math.max(...numeros);
  if (isNaN(maior)) return new Error();
  return maior;
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

  it("Deve retornar uma exceção caso a lista fornecida não seja de números", () => {
    const maiorNumero = pegaOMaiorNumero(["1", "a", "invalid", "10"]);
    assert.deepEqual(maiorNumero, new Error());
  });
});
