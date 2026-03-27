//   Async

// const fs = require("fs"); 

// function fileReadCallback(err, contents){
//     console.log(contents);
    
// }

// fs.readFile("a.txt", "utf-8", fileReadCallback);
// // While the file is being read, i am doing CPU bound task.
// // whenever file is read, OS please  called third funciton(functional argument or callback).
// // err variable tells what went went wrong like file does not exit, file is too big to read, if everything goes well err will become null.
  
// // CPU bound tasks
// let s = 0
// for(let i = 0; i<10000; i++){
//     s+=1
// }

// console.log(s);

// First s will get printed, if the CPU tasks is busy no async callback will interupted it.
// Second contents get printed.


// // Another async
// const a = 1;
// const b = 2;

// console.log(a);
// console.log(b);
// function callback(){
//     console.log(a + b);
// }
// // Wait for 1 second
// setTimeout(callback, 1000)
// console.log(a + b);


// setInterval
let ctr = 0;
function callback(){
    console.log(ctr);
    ctr = ctr + 1;

}
//Node js thread is free for 1 sec
setInterval(callback, 1000);

// While the timer is running, we start a CPU-bound task.
// JavaScript runs on a single thread, so this blocks the event loop.

// Even if 1 second passes, the callback cannot execute
// because the call stack is busy with this loop.

// Once the loop finishes, the event loop will process
// the pending timer callback.
let x = 0;
for(let i = 0; i<40000000000; i++) {
    x = x + 1
}
console.log(x); 

// let's see this in action in 
// jsArchitecture.js


