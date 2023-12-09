class Student {
    constructor(__studentId, __name) {
        this._studentId = __studentId;
        this._name = __name;
    }

    get studentId() {
        return this._studentId;
    }

    get name() {
        return this._name;
    }

    set studentId(__studentId) {
        this._studentId = __studentId;
    }

    set name(__name) {
        this._name = __name;
    }
}

const student1 = new Student(123, "Malvin Valerian");

console.log(`ID: ${student1.studentId} - Fullname: ${student1.name}`);

student1.studentId = 234;
student1.name = "Brendan Eich";

console.log(`ID: ${student1.studentId} - Fullname: ${student1.name}`);
