import calcularOperacion from "./ejercicioDeClase";

describe("CALCULAR OPERACION", () => {
    it("Si el usuario ingresa la cadena vacia debe retornar 0", () => {
        let operacion = "";
        expect(calcularOperacion(operacion)).toEqual(0);
    });
    it("Si el usuario ingresa la cadena debe retornar el numero", () => {
        let operacion = '1';
        expect(calcularOperacion(operacion)).toEqual(1);
    });
    it("Si el usuario ingresa la cadena con coma debe retornar la suma de la cadena", () => {
        let operacion = '1,4';
        expect(calcularOperacion(operacion)).toEqual(5);
    });
    it("Si el usuario ingresa la cadena con coma o - debe retornar la suma de la cadena", () => {
        let operacion = '1,4-3';
        expect(calcularOperacion(operacion)).toEqual(8);
    });
    it("Si el usuario ingresa la cadena con delimitador personalizado debe retornar la suma de la cadena", () => {
        let operacion = '//[;]6;7;4';
        expect(calcularOperacion(operacion)).toEqual(17);
    });
    it("Si el usuario ingresa la cadena con un numero mayor a 1000 se ignora y debe retornar la suma de la cadena sin ese valor", () => {
        let operacion = '2,1001';
        expect(calcularOperacion(operacion)).toEqual(2);
    });
    it("Si el usuario especifica un delimitador de mas de un carácter debe retornar la suma de la cadena", () => {
        let operacion = '//[***]1***2***3';
        expect(calcularOperacion(operacion)).toEqual(6); // 1 + 2 + 3 = 6
    });
    it("Si el usuario ingresa la cadena con delimitador personalizado debe retornar la suma de la cadena", () => {
        let operacion = '//[$]6$7,1';
        expect(calcularOperacion(operacion)).toEqual(14);
    });
});