//      High-Order Function

// What is High-Order Function?
// A function which takes another function as an argument or return a function from it. In this case y is high-order function.


//Callback function, you passed a function as an argument to another function is callback function. In this case, x is a callback function.

function x() {
    console.log("Hi");
}

function y(x) {
    x();
}

