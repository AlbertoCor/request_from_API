
const doSomethingAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('do Something async'), 3000)
            : reject(new Error('test error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('before');
doSomething();
console.log('after');

const anotherFunction = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('before_01');
anotherFunction();
console.log('after_01');