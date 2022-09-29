document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
    // console.log(event)
    // console.log(event.target)
    // // console.log(event.target.username)
    // console.log(event.target.username.value)
    // console.log(event.target.email.value)
    // console.log(event.target.password.value)

    const form = event.target
    console.log(form.username.value)
    console.log(form.email.value)
    console.log(form.password.value)
    const mobile = parseInt(form.mobile.value)
    if (mobile.toString() == NaN.toString()) {
      alert('you have entered invalid number')
    }
    console.log('The mobile number is: ', mobile)
  })
  document.getElementById('email').addEventListener('input', function (event) {
    const emailElement = event.target
    if (emailElement.validity.typeMismatch) {
      emailElement.setCustomValidity('Please enter an email address')
      emailElement.reportValidity()
    } else {
      emailElement.setCustomValidity('')
    }
  })
  document.addEventListener('click', function () {
    console.log(document.getElementById('outside').value)
  })
})
