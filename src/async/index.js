const doSomethingAsync =() => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Do something async'), 3000)
    : reject(new Error('Test error'))
  });
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something)
}

console.log('Before')
doSomething()
console.log('After')

// la siguente promeras es la recomendada para hacer el catch de los errores
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something)
  }catch(error) {
    console.error(error)
  }
}

console.log('Before1')
anotherFunction()
console.log('After1')