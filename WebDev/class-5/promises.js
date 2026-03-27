const fs = require("fs");

// create a promisified version of fs.readFile
// create a promisified version of setTimeout
// create a promisified version of fs.writeFile

// on top of fs.readFile
function fsReadFilePromise(fileName, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, encoding, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })

    });
}

// calling a promisie
fsReadFilePromise("a.txt", "utf-8") // Whenever, fsReadFilePromise gets resolve then call .then()
    .then(function (data) {
        console.log(data);
    })
    .catch(function (e) {
        console.log("Error while reading file")
    })

    
// setTimeout promisified
function setTimeoutPromisified(delay) {
    return new Promise(function(resolve, reject) {
        // after delay second call resolve
        setTimeout(function() {
            resolve() 
        },delay)
    })
}

setTimeoutPromisified(1000) // whenever, it get resolve then call .then()
    .then(function () {
        console.log("1 second has passed")
    })


