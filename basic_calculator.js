//Build a basic arithmetic calculator without a frontend
//The calculator should be able to perform basic operations like Addition, Subtraction, Multiplication, & Division

var number1 = prompt("Enter the first number: ");
var number2 = prompt("Enter the second number: ");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

console.log("The sum of the two numbers is: ", number1 + number2);

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
console.log("Welcome to Programiz!");

var number1 = prompt("Enter the first number: ");
var number2 = prompt("Enter the second number: ");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

let result

var choice = prompt("Enter the arithmatic operation to perform. Enter + for addition,or - for substraction, or / for division and * for multiplication ")

if (choice == "+"){
      result = document.write("The sum of the two numbers is: ", number1 + number2);
      } else if (choice == "-"){
       result = document.write("The results of substraction of the two numbers is: ", number1 - number2);
      }else if (choice == "/"){
       result = document.write("The results of division of the two numbers is: ", number1 / number2);
      }else if (choice == "*"){
      result = document.write("The results of mulplication of the two numbers is: ", number1 * number2);
      } else {
      result = document.write("You chose an invalid operation. Start the program again");}
      
      alert(result);