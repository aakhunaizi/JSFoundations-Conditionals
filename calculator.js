// Define the numbers and the operation here

const firstNumber = 5;
const secondNumber = 8;
const operation = "+";

// Write if-statements here

if (operation === "+") {
  const result = firstNumber + secondNumber;
  console.log(result);
} else if (operation === "-") {
  const result = firstNumber - secondNumber;
  console.log(result);
} else if (operation === "*") {
  const result = firstNumber * secondNumber;
  console.log(result);
} else if (operation === "/") {
  const result = firstNumber / secondNumber;
  console.log(result);
} else {
  console.log("You have entered an invalid operator.");
}
