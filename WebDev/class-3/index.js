//Normal Function
// function sum(a,b){
//     return a + b;
// }
// let answer = sum(2, 3);
// console.log(answer);


//Find sum from 1 to n number using loop
// function sum(n){
//     let ans = 0;
//     for (let i = 1; i<=n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }
// const ans = sum(100);
// console.log(ans);


//Synchronous code
//It is executed line by line, in the order it's written.
//Each operation waits for the previous one to complete before moving on to the next one.

function sum(n){
    let ans = 0;
    for (let i = 1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}
const ans = sum(100);
console.log(ans);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);


