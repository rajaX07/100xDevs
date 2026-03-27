// Inheritance of Classes

// Parent class
class Shape {
    constructor(color){
        this.color
    }
    paint(){
        console.log("painting with color" + this.color);
    }
    area(){
        throw new Error('The area method must be implemented in the subclass');
    }
}

class Rectangle extends Shape{
    constructor(width, height, color){
        super(color); //  using super method to call parent's constructor
        this.width = width;
        this.height = height;

    }
    area(){
        return this.width * this.height;
    }
    
    perimeter(){
        return 2 * (this.width + this.height);
    }

}

class Circle extends Shape{
  constructor(radius, color) {
    super(color)
    this.radius = radius;
    
  }

  area() {
    return 3.14 * this.radius * this.radius;
  }

  perimeter() {
    return 2 * 3.14 * this.radius;
  }

}

class Square extends Shape{
    constructor(side, color){
        super(color)
        this.side = side;
        
    }
    area(){
        return this.side*this.side
    }
    perimeter(){
        return 4 * this.side
    }

}

// We have common paint method in all three above
// DRY- Don't repeat yourself
// All these class is a shape, that's why create a shape parent class 
// you have to call the parent's class constructor to child or base class


const r1 = new Rectangle(10, 20, "red");
const c1 = new Circle(20, "Yellow");
const s1 = new Square(300, "red");
console.log(r1.area());