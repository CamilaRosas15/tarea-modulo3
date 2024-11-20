function sumarNumerosEnCadena(operacion){
    let respuesta = 0;
    let delimitador = /[,-]+/;

    const delimitadorPersonal = operacion.match(/^\/\/\[(.+?)\]\s*/);
    if (delimitadorPersonal) {
        delimitador = crearExpresionRegularDelimitador(delimitadorPersonal[1]);
        operacion = operacion.slice(delimitadorPersonal[0].length); 
    }

    let array = operacion.split(delimitador);
    if(operacion != ''){
        for(let i = 0 ; i< array.length ; i++){
            if (Number(array[i]) <= 1000) { 
                respuesta += Number(array[i]);    
            }
        }
    }
    return respuesta;
}

function crearExpresionRegularDelimitador(delimitador) {
    const delimitadorEscapado = delimitador.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    return new RegExp(`[,-]+|(${delimitadorEscapado})+`);
}

export default sumarNumerosEnCadena;
