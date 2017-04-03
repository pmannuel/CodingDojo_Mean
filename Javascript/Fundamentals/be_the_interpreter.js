var hello;
function example() {
  hello = "hi!";
  console.log(hello);
}
var hello = "interesting";
example();
console.log(hello);

console.log("*"*50);
//Problem 1
var first_variable = "Yipee I was first!";
console.log(first_variable);
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);

console.log("*"*50);
//Problem 2
var food;
function eat() {
  food = "half-chicken";
  console.log(food);
  food = "gone";       // CAREFUL!
  console.log(food);
}
food = "Chicken";
eat();
console.log(food);

console.log("*"*50);
//Problem 3
var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!";
console.log(new_word);
