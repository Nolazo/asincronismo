const somethingWillHappen = ()=>{
  return new Promise((resolve, reject)=>{
    if (true) {
      resolve('Hey!')
    }else{
      reject('Ups!')
    }
  });
}

somethingWillHappen()
  .then(response=> console.log(response))
  .catch(error=> console.log(error))

somethingWillHappen2 = ()=>{
  return new Promise((resolve, reject)=>{
    if (true) {
      setTimeout(()=>{
        resolve('Hey!')
      }, 3000)
    } else {
      const error = new Error('Ups!')
      reject(error)
    }
  })
}
somethingWillHappen2()
  .then(response=> console.log(response))
  .catch(error=> console.log(error))

  Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response=> {
    console.log('Array of results', response)
  })
  .catch(err=> {
    console.error(err)
  })