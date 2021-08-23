
const somethingWillHappen = () => {
    return new Promise((resolve, reject) =>{
        if (true){
            resolve('Its okay :D');
        } else {
            reject('ff**** ');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 =  () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve ('True')
            }, 2000)
        } else {
            const error = new Error('f*****');
            reject (error);
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.then(() => console.log('Helloo!! '))
.catch(err => console.log(err))


// multirun promises - method promise.all

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })