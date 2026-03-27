// Object
let user = {
    name: "Raja",
    age: 21,
    cities: ["Delhi", "Chandigarh", "Mumbai"]

}
console.log(user.cities[0]);

// Classes 
// Classes are a way to define blueprints for creating objects(not the above object, it is a different one.)

// Class → blueprint
// Object → actual thing created from blueprint

// You declare a class using the class keyword.
class Rectangle {
   constructor(width, height, color) { 
    // Define a constructor function, whenever we define class along with it(in most cases). 

	    this.width = width;
        // "this" refers to the current object being created
        // Assign width value to the object's width property
	    this.height = height;
	    this.color = color; 
   }
   // Method to calculate
   area() {
	   const area = this.width * this.height;
		 return area;
   }
   
   paint() {
		console.log(`Painting with color ${this.color}`);
   }
   
}

// Create a new rectangle object
const rect1 = new Rectangle(2, 4, "red");

// Call the area method to calculate area
const area = rect.area();
console.log(area)

// constructor() → runs when object is created
// this → refers to the current object , 
// when area() method runs this.width means rect1.width
// area() and paint() → methods available to every rectangle object



// Static Method : We can call static method directly on class not on internal object
// console.log(Rectangle.whoami());

// Non-static Method: That are called on object
// console.log(r1.area());

class Rectangle {
   constructor(width, height, color) {
	    this.width = width;
	    this.height = height;
	    this.color = color; 
   }
   // Static method
   static whoami(){
    return "i am a rectangle"
   }
   area() {
	   const area = this.width * this.height;
		 return area;
   }
   
   perimeter(){
    const perimeter = 2 * (this.width + this.height);
    return perimeter;
   };
   
   
}
let r1 = new Rectangle(1,2, "red")
console.log(r1.area());

console.log(Rectangle.whoami());




