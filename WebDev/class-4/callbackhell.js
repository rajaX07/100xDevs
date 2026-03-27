// Callback hell
setTimeout(function (){
    console.log("hi there");
    setTimeout(function(){
        console.log("hello")
    },3000);
}, 1000);

//Callback Hell happens when multiple asynchronous callbacks are nested inside each other.
// And it gets queued to the right commnly known as callback Hell.



// Solution of callback hell is  chained promises

//Below syntax is one below other, not as queued to right it is cleaner to read 

function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

setTimeoutPromisified(1000)
    .then(function( ) {
        console.log("hi");
        return setTimeoutPromisified(3000)
    }).then(function() {
        console.log("hello");
        return setTimeoutPromisified(5000)
    }).then(function() {
        console.log("hello");
    })

// How it works???