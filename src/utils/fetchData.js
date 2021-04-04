let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData =(url_api) => {
    return new Promise((resolve,reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {   //Si el cambio sucede de arriba ejecuto la funcion
            if(xhttp.readyState === 4){ //Si ha sido completado
                (xhttp.status === 200)
                 ? resolve(JSON.parse(xhttp.responseText))
                 : reject(new Error('Error ', url_api))             
                
            }
            
        })
        xhttp.send()
    })
    
};

module.exports = fetchData;