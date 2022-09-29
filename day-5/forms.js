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
  })
  document.addEventListener('click', function () {
    console.log(document.getElementById('outside').value)
  })
})
