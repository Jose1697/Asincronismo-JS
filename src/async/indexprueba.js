const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
      (true)
        ? setTimeout(() => {
          resolve('Do Something Async')
        }, 3000)
        : reject(new Error('Test Error'))
    })
  }
  
  const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something + " 1");
  }
  
  (async () => {
    console.log('Before 1');
    await doSomething();
    console.log('After 1');
  })()
  
  const anotherFunction = async () => {
    try {
      const something = await doSomethingAsync();
      console.log(something+"  2");
    } catch (error) {
      console.error(error);
    }
  }
  
  (async () => {
    console.log('Before 2');
    await anotherFunction();
    console.log('After 2');
  })()