function calcularOperacion(operacion){
    let respuesta = 0;
    let delimitador = /[,-]+/;

    if (operacion.startsWith("//[;]")) {
        delimitador = ";"; 
        operacion = operacion.slice(5);
    }

    let array = operacion.split(delimitador);
    if(operacion != ''){
        for(let i = 0 ; i< array.length ; i++){
            if (Number(array[i]) <= 1000) { // Solo suma si el número es <= 1000
                respuesta += Number(array[i]);    
            }
        }
    }
    return respuesta;
}

export default calcularOperacion;
