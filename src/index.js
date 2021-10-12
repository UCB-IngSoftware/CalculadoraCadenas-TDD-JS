import { sumarCadena } from "./CalculadoraCadenas";

const cadenaIngreso = document.querySelector("#cadena-ingreso");
const form = document.querySelector("#calculadora-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cadenaInput = cadenaIngreso.value;
  div.innerHTML = "<p>" + sumarCadena(cadenaInput) + "</p>";
});
