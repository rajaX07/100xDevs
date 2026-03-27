//         async await

// const fs = require("fs");

// function fsReadFilePromisified(fileName, encoding) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(fileName, encoding, function (err, data) {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })

//     });
// }

// async function main() {
//     let file1Contents = await fsReadFilePromisified("a.txt", "utf-8");
//     let file2Contents = await fsReadFilePromisified("b.txt", "utf-8");
//     let file3Contents = await fsReadFilePromisified("c.txt", "utf-8");

//     console.log(file1Contents);
//     console.log(file2Contents);
//     console.log(file3Contents);

// }
// main();
// console.log("hi");
// console.log("hello");

// Questions
// Write a function of a file 
// 1. Reads the contents of a file
// 2. Trims the extra space from the left and right
// 3. Writes it back to the file

const fs = require("fs");

function cleanFile(filePath, afterdone) {
    fs.readFile(filePath, "utf-8", function (err, contents) {
        const trimmedContents = contents.trim();
        fs.writeFile("d.txt", trimmedContents, function () {
            afterdone();
        });
    });

}

cleanFile("d.txt", function () {
    console.log("done cleaning d.txt")
})


// Promisified version

function cleanFile(filePath, afterdone) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, "utf-8", function (err, contents) {
            if (err) {
                reject();
            } else {
                const trimmedContents = contents.trim();
                fs.writeFile("d.txt", trimmedContents, function () {
                    if (err) {
                        reject()
                    } else {
                        resolve();
                    }

                });
            }
        });

    });

}

cleanFile("d.txt")
    .then(function () {
        console.log("file has been cleaned")
    })
    .catch(function () {
        console.log("error while cleaning file")
    })


//  Async Await version
function cleanFile(filePath, afterdone) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, "utf-8", function (err, contents) {
            if (err) {
                reject();
            } else {
                const trimmedContents = contents.trim();
                fs.writeFile("d.txt", trimmedContents, function () {
                    if (err) {
                        reject()
                    } else {
                        resolve();
                    }

                });
            }
        });

    });

}

async function main(){
    try {
        await cleanFile("d.txt");
        console.log("done cleaning the file");
    } catch(err) {
        console.log("error while cleaning the file");
    }
}
main();