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
        console.log('response: ', response)
        const data = await response.json()
        console.log('data: ', data)
        let {
          info,
          date,
          query: { to: convertedTo },
          result,
        } = data

        document.querySelector(
          '.result'
        ).textContent = `As per the exchage rate:${info.rate} for ${date} => converted value in ${convertedTo} is ${result}`
      } catch (error) {
        console.log(error)
      } finally {
        console.log('finally block')
      }
      console.log('end of function')
    })

  document
    .querySelector('#currency-converter')
    .addEventListener('submit', (event) => {
      console.log('a regular synchronous function')
    })
})
/*
Order of print statement's
1. async function called first
2. a regular synchronous function
3. RESPONSE
4. DATA
5. finally block
6. end of function
*/

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
