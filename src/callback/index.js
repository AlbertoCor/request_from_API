
function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(6,2, sum));
// with callback reserved at parameter in function will 
// be called, and for run it will be con printed 
// 


function date(callback){
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);

// 1st function date in params recive callback that is declared in setTimeout
// showed then 3sec, when we run function date recive armuent of another function 
// that return a print of itself but in funcion date will recive the callback value
