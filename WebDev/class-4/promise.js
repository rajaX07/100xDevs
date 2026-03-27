// Promisified version of setTimeout

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback(){
//     console.log("hi there");
// }

// setTimeoutPromisified(3000).then(callback)
// // setTimeout(callback, 3000) without promisified


// UnPromisified versoin of fs.readFile
// const fs = require("fs");

// function callback(err ,data){
//     if(err){
//         console.log("error while reading the file");
//     }else {
//         console.log(data);
//     }
// }
// fs.ReadFile("a.txt", "utf-8", callback);


// Now Promisified of fs.readFile
const fs = require("fs");

// Defining the Promisified Function
function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

function callback(data) {
    console.log(data);
}

function callbackErr() {
    console.log("error while reading the file");
}

// Calling a Promisified function
fsReadFilePromisified("a.txt", "utf-8")
        .then(callback) // everythings goes well then call with right data
        .catch(callbackErr) // somethigs goes wrong it will be called

