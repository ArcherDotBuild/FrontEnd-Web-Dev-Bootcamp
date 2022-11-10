document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#currency-converter')
    .addEventListener('submit', (event) => {
      event.preventDefault() // prevents refresh for not happening

      const {
        target: { from, to, amount },
      } = event

      let headers = new Headers()
      headers.append('apiKey', 'zbMqVuDkBkDfPfnzhJszmPMd07ytnxU7')

      const requestOptions = {
        method: 'GET',
        headers,
      }

      fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`,
        requestOptions
      )
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then((data) => {
          // console.log(data)
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
          let {
            info,
            date,
            query: { to },
            result,
          } = data
          document.querySelector(
            '.result'
          ).textContent = `As per the exchage rate:${info.rate} for ${date} => converted value in ${to} is ${result}`
        })
        .catch((error) => console.log(error))
      console.log('end of function')
    })
})
