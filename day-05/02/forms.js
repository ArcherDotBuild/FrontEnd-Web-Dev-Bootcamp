document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('1. event: ', event)
    console.log('2. event.target: ', event.target)
    console.log('3. event.target.username: ', event.target.username)
    console.log('4. event.target.username.value: ', event.target.username.value)
    console.log('5. event.target.email.value: ', event.target.email.value)
    console.log('5. event.target.mobile.value: ', event.target.mobile.value)
    console.log('6. event.target.password.value: ', event.target.password.value)

    /*
      1. event: SubmitEvent {isTrusted: true, submitter: button, type: 'submit', target: form, currentTarget: form, …}
      2. event.target:  <form name=​"login" action method=​"post">​…​</form>​
      3. event.target.username:  <input type=​"text" name=​"username" id=​"username" autocomplete=​"off" required>​
      4. event.target.username.value:  elfgodd
      5. event.target.email.value:  elfgodd@gmail.com
      5. event.target.mobile.value:  3001439696
      6. event.target.password.value:  helloworld
      elfgodd
      elfgodd@gmail.com
      helloworld
      The mobile number is:  3001439696
    */

    console.log('\n')
    console.log('**********')
    const form = event.target
    console.log('1. form.username.value: ', form.username.value)
    console.log('2. form.email.value: ', form.email.value)
    console.log('3. form.password.value: ', form.password.value)
    const mobile = parseInt(form.mobile.value)
    if (mobile.toString() == NaN.toString()) {
      alert('you have entered invalid number')
    }
    console.log('4. form.mobile.value: ', mobile)
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
