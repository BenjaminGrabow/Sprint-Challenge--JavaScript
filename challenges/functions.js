// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
const consume = (par1, par2, cb) => cb(par1, par2);


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const greeting = (first, last) => `Hello ${first} ${last}, nice to meet you!`;
/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: When you create a nested function you create a nested scope. The nested scope/ nestedFunction
// has access to the variable `internal` because it is inside the local scope/ function scope.
// The nestedFunction/ nested scope has access to its own scope (variables defined between it's curly brackets),
// it has access to the outer function’s (in that case myFunction) variables
// and it has access to the global variables(in that case the variable `external`).
const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();