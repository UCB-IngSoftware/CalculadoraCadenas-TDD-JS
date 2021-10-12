const { enumDeclaration } = require("@babel/types");

describe("Calculadora Cadenas", () => {
  it("deberia devolver el numero 1 para una cadena que tiene solo la cadena 1", () => {
    expect(sumarCadena("1")).toEqual(1);
  });

  it("deberia devolver el numero 2 para una cadena que tiene solo la cadena 2", () => {
    expect(sumarCadena("2")).toEqual(2);
  });

  it("deberia devolver el numero 0 para una cadena vacia", () => {
    expect(sumarCadena("")).toEqual(0);
  });

  it("deberia devolver la suma de dos numeros separados por coma", () => {
    expect(sumarCadena("4,5")).toEqual(9);
  });

  it("deberia sumar numeros separados por coma", () => {
    expect(sumarCadena("1,2,4,8")).toEqual(15);
  });
});

function sumarCadena(cadena) {
  const numeros = cadena.split(",");
  let total = 0;
  numeros.forEach((numeroCadena) => {
    total = total + Number(numeroCadena);
  });
  return total;
}
