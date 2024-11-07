//import sumar from "./sumador";
import calcularOperacion from "./ejercicioDeClase";

const cadena = document.querySelector("#cadena-sumador");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const cadenaValue = cadena.value;
  
  div.innerHTML = "<p>" + calcularOperacion(cadenaValue) +"</p>";
});
