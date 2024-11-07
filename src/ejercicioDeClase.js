function calcularOperacion(operacion){
    let respuesta = 0;
    let delimitador = /[,-]+/;
    
    const delimitadorPersonal = operacion.match(/^\/\/\[(.+?)\]\s*/);
    if (delimitadorPersonal) {
        
        const escapedDelimiter = delimitadorPersonal[1].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        delimitador = new RegExp(`(${escapedDelimiter})+`); 
        operacion = operacion.slice(delimitadorPersonal[0].length); 
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







//function calcularOperacion(operacion){
//    let respuesta = 0;
//    let delimitador = /[,-]+/;

//    if (operacion.startsWith("//[;]")) {
//        delimitador = ";"; 
//        operacion = operacion.slice(5);
//    }

    //const customDelimiterMatch = operacion.match(/^\/\/\[(.+?)\]\s*/);
    //if (customDelimiterMatch) {
    //    delimitador = new RegExp(`[${customDelimiterMatch[1]}]+`);
    //    operacion = operacion.slice(customDelimiterMatch[0].length); 
    //}

    //let array = operacion.split(delimitador);
    //if(operacion != ''){
        //for(let i = 0 ; i< array.length ; i++){
            //if (Number(array[i]) <= 1000) { // Solo suma si el número es <= 1000
                //respuesta += Number(array[i]);    
            //}
        //}
    //}
    //return respuesta;
//}