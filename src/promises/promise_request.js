
const fetchData = require('../utils/fetchData');
// calling an exteernar js file
const API = "https://rickandmortyapi.com/api/character/";
// API direction

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[1].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data =>{
        console.log(data.dimension)
    })
    .catch(err => console.error(err));


