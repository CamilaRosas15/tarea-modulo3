function calcularOperacion(operacion){
    let respuesta = 0;
    let delimitador = /[,-]+/;

    if (operacion.startsWith("//[;]")) {
        delimitador = ";"; 
        operacion = operacion.slice(5);
    }

    let array = operacion.split(delimitador);
    //let array = operacion.split(/[,-]+/)
    if(operacion != ''){
        for(let i = 0 ; i< array.length ; i++){
            respuesta += Number(array[i]);
        }
    }
    return respuesta;
}

export default calcularOperacion;
