
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; 
// import get module for http


// principal function
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
    // return promise result from fetch an url
        const xhttp = new XMLHttpRequest();
        // start conection declare xhttp as var for manage
        xhttp.open('GET', url_api, true);
        // open as param of we are going to do of the next param url and will be a 
        // async work method
        xhttp.onreadystatechange = (() => {
            // validation of call
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))
                // conditional ternarium
                }
            });
        xhttp.send();
    });
}

module.exports = fetchData;