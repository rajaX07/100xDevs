console.log("Hi There");

// Varibles 
let name = "Raja"; // variable that can be reassigned
const age = "21"; // Constant variable that cannot be reassigned
var isStudent = true; // Older way to declare variable


// DRY --> Don't repeat yourself

// Function
function greet(nameOfPerson){
    console.log("hello " + nameOfPerson);
    console.log("namaste " + nameOfPerson);
    console.log("vaayu as raja " + nameOfPerson);

}
let firstName = "Raja";
let firstName1 = "rahul";
let firstName2 = "karan";

greet(firstName)
greet(firstName1)
greet(firstName2)

// If/else
function isLegal(age){
    if (age >= 18){
        console.log("You can vote");
    }else{
        console.log("You are not allowed to vote");
    }

}
isLegal(55)
isLegal(8)

// Loop
for(let i = 0; i <= 5; i++){
    console.log(i)
}

function isLegal(age){
    if (age >= 18){
        console.log("You can vote");
    }else{
        console.log("You are not allowed to vote");
    }

}
for(let i = 0; i <= 90; i++){
    isLegal(i)
}