class Shape {
    info() {
        console.log("I am shape.");
    }
}

class Circle extends Shape {
    info() {
        super.info();
        console.log("I am circle.");
    }
}

const shape1 = new Circle();

shape1.info();