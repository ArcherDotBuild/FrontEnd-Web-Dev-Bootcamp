//** ******************** */
//** #################### */
//** Promises */

// Example 1
let promiseOne = new Promise((resolve, reject) => {
  // res and rej both are functions itself
  setTimeout(() => {
    // resolve(10_000) // kept my promise
    reject(new Error("I lied, you're not getting your money"))
  }, 2000) // represents the delay
})

// Promise object has => function called it known as .then
promiseOne
  .then((money) => {
    if (money === 10_000) {
      console.log('Yay!, i got my money back')
    }
  }) // suppose you dont get your money back, the promise has been rejected
  .catch((error) => {
    console.error('😢', error.message)
  })

console.log('\n')
console.log('####################')
// example 2
//

// let moneyLended = 10_000
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10_000) // kept my promise
//     // reject(new Error("I lied, you're not getting your money"))
//   }, 2000) // represent two days
// })

// promise
//   .then((money) => {
//     if (money === 10_000) {
//       console.log('Yay!, i got my money back')
//     }
//     return money
//   })
//   .then((moneyReceived) => {
//     console.log('amount received', moneyReceived)
//   })
//   .catch((error) => {
//     console.error('😢', error.message)
//   })

// Fullfilled state - successful outcome
// Rejected state - error
// Pending state - neither fullfilled nor rejected
// settled state - it represents - fullfilled state / rejected state

console.log('\n')
// Example 3
// let moneyLended = 10_000
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10_000) // kept my promise
//     // reject(new Error("I lied, you're not getting your money"))
//   }, 2000) // represent two days
// })

// promise
//   .then((money) => {
//     console.log('Yay!, i got my money back')
//     return money
//   })
//   .then(moneyReceived)
//   .then((extramoney) => {
//     if (extramoney) {
//       console.log(
//         'Wow my friend is generous ❤️, now i can buy something with the extra amount'
//       )
//     }
//     console.log('Deposit the lended amount back to the bank')
//   })
//   .catch((error) => {
//     console.error('😢', error.message)
//   })

// function moneyReceived(amountReceived) {
//   return new Promise((resolve, reject) => {
//     if (amountReceived > moneyLended) {
//       resolve(amountReceived - moneyLended)
//     } else if (amountReceived < moneyLended) {
//       reject(new Error('Oh wait, i have not received the entire amount'))
//     } else {
//       resolve(0)
//     }
//   })
// }

console.log('\n')
// Example 4
// let moneyLended = 10_000
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(10_000) // kept my promise
//     reject(new Error("I lied, you're not getting your money"))
//   }, 2000) // represent two days
// })

// promise.then(
//   (money) => {
//     console.log('Yay!, i got my money back')
//     return money
//   },
//   (error) => {
//     console.error('😢', error.message)
//   }
// )

// function moneyReceived(amountReceived) {
//   return new Promise((resolve, reject) => {
//     if (amountReceived > moneyLended) {
//       resolve(amountReceived - moneyLended)
//     } else if (amountReceived < moneyLended) {
//       reject(new Error('Oh wait, i have not received the entire amount'))
//     } else {
//       resolve(0)
//     }
//   })
// }

console.log('\n')
// Example 5
let moneyLended = 10_000
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10_000) // kept my promise
    // reject(new Error("I lied, you're not getting your money"))
  }, 2000) // represent two days
})

promise
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

// convertAmount(from, to = 5) => response
// response => structured data {
//   info: {
//     rate: 81
//   },
//   result: 5 * 81
// }

// Response in structured formats
// JSON: JavaScript Object Notation (most used)
// XML
// Text

let object1 = {
  info: {
    rate: 81,
  },
  result: 5 * 81,
}
JSON.stringify(object1)
// '{"info":{"rate":81},"result":405}'
JSON.parse('{"info":{"rate":81},"result":405}')
// {info: {…}, result: 405}
// info
// :
// {rate: 81}
// result
// :
// 405
// [[Prototype]]
// :
// Object

// Promise API example theory
/**
call api => request => promise
response => json || error
- calling an API
- Requesting for some information
- In the mean time the API time is taking to get that information we get a Promise
- Once the result is available we will get a response
- Once the response is available the promise will be settled
- We will either get the JSON
- Or well get some error
 */
