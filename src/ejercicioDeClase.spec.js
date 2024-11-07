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
});