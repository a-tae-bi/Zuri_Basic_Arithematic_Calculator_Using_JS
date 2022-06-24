//Build a basic arithmetic calculator without a frontend
//The calculator should be able to perform basic operations like Addition, Subtraction, Multiplication, & Division

const choice = prompt("Enter the arithmatic operation to perform. Enter + for addition,or - for substraction, or / for division and * for multiplication ")

const number1 = parseFloat(prompt("Enter the first number: "));
const number2 = parseFloat(prompt("Enter the second number: "));

let result = 0;

if (isNaN(number1) || isNaN(number2)){
      alert("Incorrect numbers enterred. Refresh the page and start again.");
}
else {
      if (choice == "+"){
            result = number1 + number2; 
            window.alert("The sum of the two numbers (" + number1 + " , " + number2 + ") is: " + result); 
      } else if (choice == "-"){
            result = number1 - number2;
            window.alert("The results of substracting the two numbers (" + number1 + " , " + number2 + ") is: " + result);
      } else if (choice == "/"){
            let result = number1 / number2;
            window.alert("The results of dividing the two numbers (" + number1 + " , " + number2 + ") is: " + result);     
      } else if (choice == "*"){
            let result = number1 * number2;
            window.alert("The results of multiplying the two numbers (" + number1 + " , " + number2 + ") is: " + result);    
      } else {
            window.alert("You chose an invalid arithmetic operation. Start the program again");
      }
}
      