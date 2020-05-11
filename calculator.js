function multiply() {
  const number1 = document.getElementById("num1").value;
  const number2 = document.getElementById("num2").value;
  console.log('multiply', number1, number2)
  const answer = number1 * number2;
  document.getElementById("output").innerHTML = answer;
}