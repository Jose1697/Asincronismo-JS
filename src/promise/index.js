const somethingWillHappen = () => {
    return new Promise((resolve,reject) => {
        if (true){
            resolve('Hey!')
        }else{
            reject('whoo')
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(() => {
                resolve('Trueeeeeeeeeeee')
            },2000)
        }else{
            const error = new Error('Whoooops!')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response );
    })
    .catch(err => {
        console.error(err);
    })