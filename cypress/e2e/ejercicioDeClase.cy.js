//HISTORIAS DE USUARIO + CRITERIOS DE CONFIRMACION 
//*CREAR UNA CALCULADORA DE CADENA
//COMO: Estudiande escolar 
//QUERO: Poder calcular la suma de una cadena 
//PARA: Poner ejercicios y verificar si la suma de esa cadena es correcta
//------------------------------------------------------------------------
//CRITERIOS DE CONFIRMACION 
//Cuando el usuario ingrese una cadena que sea separada
/*
-Cuando la calculadora recibe una cadena de números separadas por coma o - debe retornar la suma de los mismos. 
- El usuario puede especificar el delimitador de cualuier longitud. Por ejemplo el delimitador ‘;’ se especifica así:  “//[;] 6;7;4” 
- Si los números son mayores a 1000 deberían ser ignorados.
- Se puede especificar múltiples delimitadores usando el formato “//[delim1][delim2]”. Por ejemplo: “//[*][%] 1*2%3,7-9” que debería retornar 22 */

describe("Calculadora de cadena ", () => {
    it("cuando el usuario ingrese una cadena vacia debe mostrar 0" , () => {
        cy.visit("/");
        cy.get("#cadena-sumador").clear();
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '0');
    });
    it("cuando el usuario ingrese una cadena debe mostrar la cadena" , () => {
        cy.visit("/");
        cy.get("#cadena-sumador").type("1");
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should('contain', '1');
    });
});