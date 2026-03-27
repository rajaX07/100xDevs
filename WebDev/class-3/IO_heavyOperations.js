//   I/O Heavy Operations

//     Synchronously

const fs = require("fs"); 

const contents = fs.readFileSync("a.txt", "utf-8"); 
// Here, we called fs.read file synchronously.
console.log(contents)


// const fs = require("fs");
// function fileReadCallback(err, content){
//     console.log(contents);
// }


//        Async

const content = fs.readFile("a.txt", "utf-8");
let s = 0
for(let i = 0; i<10000; i++){
    s=+1
}

console.log(s);

// Callback
function sum(a, b){
    return a+b;

}
function sub(a,b){
    return a-b;
}

// function doArithmetic(a, b,whatToDO){
//     if(whatToDO =="sum"){
//         let s = sum(a,b)
//         return s;
//     }
//     if(whatToDO == "sub"){
//         let s = sub(a, b)
//         return s;
//     }

// }

function doArithmetic(a, b, fn){
    return fn(a, b)
}
// passing function as input(third arguments) i.e. Functional Argument(callback)
const ans1 = doArithmetic(1, 2, "sum")
const ans2 = doArithmetic(1, 2, "sub")