// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Select all input elements (radio buttons) and loop through each of them
  document.querySelectorAll('input').forEach((radioInput) =>
    // Add an event listener to each radio button to listen for changes
    radioInput.addEventListener('change', function (e) {
      // When a radio button is selected, update the CSS variable for the grid column size
      document
        .querySelector('.container') // Select the grid container
        .style.setProperty('--col-track-size', e.target.value) // Update the CSS variable with the selected radio button's value
    })
  )
})
