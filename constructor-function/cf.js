function Person(__name, __age) {
    this.name = __name
    this.age = __age

    this.getName = function() {
        return this.name
    }
}

const person1 = new Person("Malvin Valerian", 27);
console.log(person1.getName());