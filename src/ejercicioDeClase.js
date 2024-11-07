function calcularOperacion(operacion){
    let respuesta = 0;
    if(operacion != ''){
        respuesta += Number(operacion);
    }
    return respuesta;
}

export default calcularOperacion;
