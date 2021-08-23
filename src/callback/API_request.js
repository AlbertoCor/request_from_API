
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; 
// import get module for http
let API = "https://rickandmortyapi.com/api/character/";
// API direction


// principal function
function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
// start conection declare xhttp as var for manage
    xhttp.open('GET', url_api, true);
    // open as param of we are going to do of the next param url and will be a 
    // async work method
    xhttp.onreadystatechange = function (event) {
        // validation of call
        if(xhttp.readyState === 4){
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
                // Excecute callback with response as good conection 200
            } else {
                const error = new Error('Error ' + url_api);
                // declare error in the location url
                return callback(error, null)
                // show formated tex of error 
            }
        }
    }
    xhttp.send();
    // send 
}

        // Respuestas informativas (100–199),
        // Respuestas satisfactorias (200–299),
        // Redirecciones (300–399),
        // Errores de los clientes (400–499),
        // y errores de los servidores (500–599).

fetchData(API, function(error1, data1){
// this functions call adress and search in 1st level vs if there is or not some data
    if (error1) return console.error(error1);
    // if statement to report an error
    fetchData(API + data1.results[0].id, function (error2, data2) {
        // function call adress and append result of place 0 with tag id
        // and check lvl 2 to show if error
        if (error2) return console.error(error2);
        // if statement to report an error
        fetchData(data2.origin.url, function(error3, data3) {
            // function fetch tag origin and then fetch url tag, and check to for validate data with error validation
            if (error3) return console.error(error3);
            // if statement to report an error
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
            // print data of API based on their tag
        })
    })
})

