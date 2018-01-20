const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const = document.querySelector('body')
  var i = 0
  input.addEventListener('keydown', function(e) {
    if (e.which === code[i]) {
      i++
      if (i == code.length) {
        alert('Congratulations on finding the hidden secret!')
        i = 0
      }
    } else {
      i = 0
    }
  })

}
