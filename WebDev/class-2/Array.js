// It is a collection of simialr types of data in a contingous memory location.

// const users = ["vaayu", "raman", "raja"];

// for(let i = 0; i< users.length; i++){ //Iterating array
//    console.log(users[i])
// }

// console.log(users[0])
// console.log(users[1])
// console.log(users[2])

// Array of Object
var user = [
  {
    name: "raja",
    age: 33,
    password: "545gsgar",
  },
  {
    name: "raj",
    age: 23,
    password: "54jtTgj",
  },
];

// Printing
console.log(user[0].name);

//Taking user as an input
function isLegal(user) {
  if (user.age >= 18) {
    console.log(user.name + " is allowed to vote");
  } else {
    console.log(user.name + "is not allowed to vote");
  }
}

var user = [
  {
    name: "raja",
    age: 33,
    password: "545gsgar",
  },
  {
    name: "raj",
    age: 23,
    password: "14jtTgj",
  },
  {
    name: "arjun",
    age: 5,
    password: "384jFEgj",
  },
];

for (var i = 0; i < 3; i++) {
  isLegal(user[i]);
}

//Create a function that takes an array of objects as input and returns the users whose age>18 and are male

function isLegal(users) {
  let legalUsers = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      legalUsers.push(users[i]);
    }
  }
  return legalUsers;
}
const users = [
  {
    name: "Joya",
    age: 17,
  },
  {
    name: "Rani",
    age: 19,
  },
  {
    name: "Vaayu",
    age: 66,
  },
];

let legalAllowedUsers = isLegal(users);
console.log(legalAllowedUsers);
