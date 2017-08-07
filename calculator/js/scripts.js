var add = function(number1, number2) {
return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
//var result = add(number1, number2);
//alert(result);

var sub = function(number1, number2) {
  return number1 - number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
//var result = sub(number1, number2);
//alert(result);

var mult = function(number1, number2) {
  return number1 * number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
//var result = mult(number1, number2);
//alert(result);

var div = function(number1, number2) {
  return number1 / number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);

alert(result);


//T(°F) = T(°C) × 1.8 + 32

var fahrenheit = function(number1) {
  return (number1 * 1.8) + 32;
};
var number1 =parseInt(prompt("Enter Celsius"));

alert(number1)
