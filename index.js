// Exercises 1 - ECMAScript6

// Exercise 1
// We have a simple object:

// JAVASCRIPT
let user = {
  name: "John",
  years: 30,
};
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

let { name, years: age, isAdmin = false } = user;
console.log(name);
console.log(age);
console.log(isAdmin);

// Exercise 2
// Give the right name:

// Create the variable with the name of our planet. How would you name such a variable?
// Create the variable to store the name of the current visitor. How would you name that variable?

const ourPlanet = "Earth";
let currentVisitor = "user";

console.log(ourPlanet);
console.log(currentVisitor);

// Exercise 3
// Look at the code. What will be result of the call at the last line and why?

// JAVASCRIPT
// let phrase = "Hello";

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();

// Answer: Result is allert "Hello, John" because of if statement will be executed each time and our function sayHi in its block scope has acsess to the global variable phrase and her parent block scope variable user;

// Exercise 4
// Write the code, one line for each action:

// Create an empty object user1.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

const user1 = {};
user1.name = "John";
user1.surname = "Smith";
console.log(user1);

user1.name = "Pete";
console.log(user1);

delete user1.name;
console.log(user1);

// Exercise 5
// Is it possible to change an object declared with const, how do you think and why?

// JAVASCRIPT
const user3 = {
  name: "John",
};

// does it work?
user.name = "Pete";

// Answer: Yes, it does. The property of a const object can be changed but it cannot be changed to a reference to the new object.
// The values inside the const array can be changed, it can add new items to const arrays but it cannot reference a new array.
// Re-declaring of a const variable inside different block scopes is allowed.

// Exercise 6
// We have an object storing salaries of our team:

// JAVASCRIPT
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130,
};
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.
let sum = Object.values(salaries).reduce((total, salary) => {
  return total + (salary === "" ? 0 : salary);
}, 0);
console.log(sum);

// Exercise 7
// Rewrite this if using the ternary operator '?':

// JAVASCRIPT
// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }

let a = 2;
let b = 4;

let result = a + b < 4 ? "Below" : "Over";
console.log(result);

// Exercise 8
// Rewrite if..else using multiple ternary operators '?'.

// JAVASCRIPT
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = "Director";

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

console.log(message);
