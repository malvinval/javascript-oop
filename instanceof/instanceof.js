class Person {}

class Car {};

class Student extends Person {}

const person1 = new Person();

console.log(person1 instanceof Person);
console.log(person1 instanceof Car);

const student1 = new Student();

console.log(student1 instanceof Person);

console.log(person1 instanceof Student);