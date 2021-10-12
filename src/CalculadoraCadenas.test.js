import { sumarCadena } from "./CalculadoraCadenas";
const { enumDeclaration } = require("@babel/types");

//Como usuario de la calculadora
//Quiero poder obtner la suma de numeros separados por coma
//Para poder sumarlos sin tener que separarlos manualmente

//Criterios de confirmacion:
//- cuando tengo una cadena de un numero me deberia mostrar el mismo numero, ejm: "1" -> 1
//- Si envio "1,2,3" deberia mostrar el numero 5

describe("Calculadora Cadenas para un numero", () => {
  it("deberia devolver el numero 1 para una cadena que tiene solo la cadena 1", () => {
    expect(sumarCadena("1")).toEqual(1);
  });

  it("deberia devolver el numero 2 para una cadena que tiene solo la cadena 2", () => {
    expect(sumarCadena("2")).toEqual(2);
  });

  it("deberia devolver el numero 0 para una cadena vacia", () => {
    expect(sumarCadena("")).toEqual(0);
  });
});

describe("Calculadora de cadenas para numeros separados por guion", () => {
  it("deberia devolver la suma de dos numeros separados por coma", () => {
    expect(sumarCadena("4,5")).toEqual(9);
  });

  it("deberia sumar numeros separados por coma", () => {
    expect(sumarCadena("1,2,4,8")).toEqual(15);
  });
});

//Como usuario de la calculadora
//Quiero poder obtner la suma de numeros separados por guion
//Para no tener que separar manualmente tambien por guion

//Criterios de confirmación
//-
