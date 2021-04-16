//====1====
// var i = 0
// function inc() {
//   i++
//   inc()
// }
// inc() // stack overflow option #1

// function sumTo(n) {
//   return n + sumTo(n - 1)
// }

// sumTo(100) // stack overflow option #2...

//====2====
var elements = []

function deleteButton() {
  var button = document.getElementById('button')
  elements.push(button)
  document.body.removeChild(button)
}
