// var add = function(number1, number2) {
//     return number1 + number2
//     };
//     var number1 = parseInt(prompt("Enter a number :"));
//     var number2 = parseInt(prompt("Enter another number :"));
//     alert("The answer is" + " " + add(number1, number2));

// BUSINESS (OR BACK-END) LOGIC ; 
var add = function(number1, number2) {
    return number1 + number2;
  };
  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  var multiply = function(number1, number2) {
    return number1 * number2;
  };
  var divide = function(number1, number2) {
    return number1 / number2;
  };

// USER INTERFACE/ (front-end logic);

$(document).ready(function() {
    $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    alert(add(number1, number2));
    });
});