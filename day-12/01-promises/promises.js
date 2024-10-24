//** ******************** */
//** #################### */
//** Promises */

// ! Promise has these states
// ? Fullfilled state - successful outcome
// ? Rejected state - error
// ? Pending state - initial state, neither fullfilled nor rejected
// ? settled state - it represents the outcome - fullfilled state / rejected state

// TODO: Example 1

let promiseOne = new Promise((resolve, reject) => {
  // res and rej both are functions itself
  setTimeout(() => {
    resolve(10_000) // kept my promise
    // reject(new Error("1. I lied, you're not getting your money"))
  }, 2000) // represents the delay
})

// Promise object has function called it .then
// .then is called the moment resolve statement is executed
// resolve will pass the value (10_000)
promiseOne
  .then((money) => {
    if (money === 10_000) {
      console.log('1. Yay!, i got my money back')
    }
  }) // suppose you dont get your money back, the promise has been rejected
  .catch((error) => {
    // What ever is pass in the reject error is available as property called message on error object
    console.error('😢', error.message)
  })

console.log('----- END -----')

console.log('\n')
console.log('####################')
// TODO: example 2

let moneyLended = 10_000
// let moneyLended = 10_500
let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(moneyLended)
    // reject(new Error("2. I lied, you're not getting your money"))
  }, 2000)
})

promiseTwo
  // first response
  .then((money) => {
    if (money === moneyLended) {
      console.log('2. Yay!, i got my money back')
    }
    return money
  })
  // providing the result of the first .then
  .then((moneyReceived) => {
    console.log('2. amount received: ', moneyReceived)
  })
  .catch((error) => {
    console.error('😢', error.message)
  })

console.log('----- END -----')

console.log('\n')
console.log('####################')
// TODO: example 3

let promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(10_500)
    resolve(10_000)
    // resolve(8000)
    // reject(new Error("I lied, you're not getting your money"))
  }, 2000)
})

promiseThree
  .then((money) => {
    console.log('3. Yay!, i got my money back')
    return money
  })
  .then(moneyReceived)
  .then((extramoney) => {
    if (extramoney) {
      console.log(
        '3. Wow my friend is generous ❤️, now i can buy something with the extra amount: ',
        extramoney
      )
    }
    console.log('3. Deposit the lended amount back to the bank')
  })
  .catch((error) => {
    console.error('😢', error.message)
  })

function moneyReceived(amountReceived) {
  return new Promise((resolve, reject) => {
    if (amountReceived > moneyLended) {
      resolve(amountReceived - moneyLended)
    } else if (amountReceived < moneyLended) {
      reject(new Error('Oh wait, i have not received the entire amount'))
    } else {
      resolve(0)
    }
  })
}

console.log('----- END -----')

console.log('\n')
console.log('####################')
// TODO: example 4

// Successful and rejected scenario
moneyLended = 10_000
let promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(moneyLended)
    // reject(new Error("4. I lied, you're not getting your money"))
  }, 2000)
})

promiseFour.then(
  (money) => {
    console.log('4. Yay!, i got my money back')
    return money
  },
  (error) => {
    console.error('😢', error.message)
  }
)

function moneyReceived(amountReceived) {
  return new Promise((resolve, reject) => {
    if (amountReceived > moneyLended) {
      resolve(amountReceived - moneyLended)
    } else if (amountReceived < moneyLended) {
      reject(new Error('Oh wait, i have not received the entire amount'))
    } else {
      resolve(0)
    }
  })
}

console.log('----- END -----')

console.log('\n')
console.log('####################')
// TODO: example 5
// finally function, it will be called irrespective of the outcome
// finally is widely used for API requests

moneyLended = 10_000
let promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10_000)
    // reject(new Error("I lied, you're not getting your money"))
  }, 2000)
})

promiseFive
  .then((money) => {
    console.log('Yay!, i got my money back')
    return money
  })
  .then(moneyReceived)
  .then((extramoney) => {
    if (extramoney) {
      console.log(
        'Wow my friend is generous ❤️, now i can buy something with the extra amount'
      )
    }
    console.log('Deposit the lended amount back to the bank')
  })
  .catch((error) => {
    console.error('😢', error.message)
  })
  .finally(() => {
    console.log('it will be called irrespective of the outcome')
  })

function moneyReceived(amountReceived) {
  return new Promise((resolve, reject) => {
    if (amountReceived > moneyLended) {
      resolve(amountReceived - moneyLended)
    } else if (amountReceived < moneyLended) {
      reject(new Error('Oh wait, i have not received the entire amount'))
    } else {
      resolve(0)
    }
  })
}

console.log('----- END -----')

// ! convertAmount(from, to = 5) => response
// ! response => structured data {
// !   info: {
// !     rate: 81
// !   },
// !  result: 5 * 81
// ! }

// TODO Response in structured formats
// ? JSON: JavaScript Object Notation (most used)
// ? XML
// ? Text

let object = {
  info: {
    rate: 81,
  },
  result: 5 * 81,
}
JSON.stringify(object)

console.log('1. JSON.stringify(object):')
console.log(JSON.stringify(object))

console.log('2. JSON.parse(JSON.stringify(object)):')
console.log(JSON.parse(JSON.stringify(object)))

console.log('3. JSON.parse({"info":{"rate":81},"result":405}):')
console.log(JSON.parse('{"info":{"rate":81},"result":405}'))

// TODO Promise API example theory

// ? call api => request => promise
// ? response => json || error

//* 1. calling an API
//* 2. Requesting for some information
//* 3. In the mean time the API time is taking to get that information we get a Promise
//* 4. Once the result is available we will get a response
//* 5. Once the response is available the promise will be settled
//* 6. We will either get the JSON
//* 7. Or well get some error
