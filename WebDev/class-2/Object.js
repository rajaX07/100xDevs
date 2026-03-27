// An object is collection of key-value pairs, where each key is a string and each value can be any valid JS data types, including another object.

let user = {
    name: "Raja",
    age: 21,
    address: {
        city: "Saharsa"
    },
    metadata: {
        likes: "girls"
    }

}
console.log("Raja's age is: " + user.age);
// key's including another object
console.log("Another Object is: "+ user.address.city);


function isLegal(user){
    if (user.age >= 18){
        console.log(user.name + " is allowed to vote");
    }else {
        console.log(user.name + "is not allowed to vote");
    }
}
const user1 = {
    name: "Raja",
    age:  "21",
    password: "duoihgh"
}

const user2 = {
    name: "raman",
    age: "18",
    password: "hiudhgoh"
}
isLegal(user1)
isLegal(user2)