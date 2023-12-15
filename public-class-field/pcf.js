class Student {
    constructor() {
        console.log("Student class instantiated!");
    }

    // public field declaration
    name; // default value: undefined
    age; // default value: undefined
    isMarried = false;

    getInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nMarried: ${this.isMarried}`);
    }
}

const student1 = new Student();

student1.name = "Malvin Valerian Gultom";
student1.age = 29;

student1.getInfo();