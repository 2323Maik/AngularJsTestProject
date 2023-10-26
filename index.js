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
    totalNameValue += parseInt(student.name.charCodeAt(i));
  }
  var output = "The numeric values of the person's name is: " + totalNameValue;

  document.getElementById('output').innerText = output;

}