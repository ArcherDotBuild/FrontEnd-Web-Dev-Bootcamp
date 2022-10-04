document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('input').forEach((radioInput) =>
    radioInput.addEventListener('change', function (e) {
      document
        .querySelector('.container')
        .style.setProperty('--col-track-size', e.target.value)
    })
  )
})
