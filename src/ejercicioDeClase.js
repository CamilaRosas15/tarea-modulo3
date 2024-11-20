function sumarNumerosEnCadena(cadena){
    let resultadoSuma = 0;
    let delimitador = /[,-]+/;

    const delimitadorPersonal = cadena.match(/^\/\/\[(.+?)\]\s*/);
    if (delimitadorPersonal) {
        delimitador = crearExpresionRegularDelimitador(delimitadorPersonal[1]);
        cadena = cadena.slice(delimitadorPersonal[0].length); 
    }

    let array = cadena.split(delimitador);
    if(cadena != ''){
        for(let i = 0 ; i< array.length ; i++){
            if (Number(array[i]) <= 1000) { 
                resultadoSuma += Number(array[i]);    
            }
        }
    }
    return resultadoSuma;
}

function crearExpresionRegularDelimitador(delimitador) {
    const delimitadorEscapado = delimitador.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    return new RegExp(`[,-]+|(${delimitadorEscapado})+`);
}

export default sumarNumerosEnCadena;
