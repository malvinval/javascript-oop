class Student {
    #name; // default value undefined
    #age; // default value undefined

    set name(name) {
        this.#name = name
    }

    set age(age) {
        this.#age = age
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }
}

const student1 = new Student();

student1.name = "Malvin Valerian Gultom";
student1.age = 23;

console.log(`${student1.name} is ${student1.age} years old.`);