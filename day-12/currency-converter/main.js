//** ******************** */
//** #################### */
//** Cuyrrency Converter */


document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#currency-converter')
    .addEventListener('submit', async (event) => {
      event.preventDefault() // prevents refresh on click submit
      console.log('async function called first')
      // destructuring event
      console.log(event)
      const {
        target: { from, to, amount },
      } = event

      let headers = new Headers()
      headers.append('apiKey', 'zbMqVuDkBkDfPfnzhJszmPMd07ytnxU7')

      const requestOptions = {
        method: 'GET',
        headers,
      }
      try {
        let response = await fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`,
          requestOptions
        )
        console.log('2. response: ', response)
        const data = await response.json()
        console.log('data: ', data)
        let {
          info,
          date,
          query: { to: convertedTo },
          result,
        } = data
        // {
        //     "success": true,
        //     "query": {
        //         "from": "EUR",
        //         "to": "INR",
        //         "amount": 100
        //     },
        //     "info": {
        //         "timestamp": 1667973004,
        //         "rate": 82.100901
        //     },
        //     "date": "2022-11-09",
        //     "result": 8210.0901
        // }
        document.querySelector(
          '.result'
        ).textContent = `As per the exchage rate:${info.rate} for ${date} => converted value in ${convertedTo} is ${result}`
      } catch (error) {
        console.log('5. Error: ', error)
      } finally {
        console.log('3. finally block')
      }
      console.log('4. End of function')
    })

  document
    .querySelector('#currency-converter')
    .addEventListener('submit', (event) => {
      console.log('1. SUBMIT! a regular synchronous function')
    })
})


// document.addEventListener('DOMContentLoaded', () => {
//   document
//     .querySelector('#currency-converter')
//     .addEventListener('submit', async (event) => {
//       event.preventDefault()
//       console.log('async function called first')

//       console.log(event)
//       let from = event.target.from
//       let to = event.target.to
//       let amount = event.target.amount

//       let headers = new Headers()
//       headers.append('apiKey', 'zbMqVuDkBkDfPfnzhJszmPMd07ytnxU7')

//       const requestOptions = {
//         method: 'GET',
//         headers,
//       }

//       let response = fetch(
//         `https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`,
//         requestOptions
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data)
//         })
//         .catch((error) => {
//           console.log(error.message)
//         })
//     })
// })


/*
Order of print statement's
1. async function called first
2. a regular synchronous function
3. RESPONSE
4. DATA
5. finally block
6. end of function
*/
