let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api,callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event){   //Si el cambio sucede de arriba ejecuto la funcion
        if(xhttp.readyState === 4){ //Si ha sido completado
            if(xhttp.status === 200) {//validar el status con el que se completo
                callback(null, JSON.parse(xhttp.responseText))  //el primer valor es el error y el segundo es el resultado de la llamada a la api
            
            }else{
                const error = new Error('Error ' + url_api)
                return callback(error, null)
            }
        
        
        }
    
    }
}