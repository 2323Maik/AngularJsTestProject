var student = {
  name: '',
  type: "student"
}

document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", keyup);
}
function keyup(event) {
  calculateNumericValue();
}
function calculateNumericValue() {
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue = student.name.charCodeAt(i);
  }
  var output = document.getElementById('output').innerText = totalNameValue;
  return "The value of each character of the name is: " + output;
}