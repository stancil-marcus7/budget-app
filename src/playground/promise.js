const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Andrew',
        //     age: 26
        // });
        // resolve('This is my resolved data');
        reject('Sometihng went wrong!')
    }, 1500)
});

console.log('before')

promise.then((data) => {
    console.log(data)
}).catch(error => {
    console.log('error: ', error);
})

console.log('after');