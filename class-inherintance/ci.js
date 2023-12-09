class Employee {
    constructor(__name, __role) {
        this.name = __name;
        this.role = __role;
    }

    whoAmI() {
        console.log(`I am ${this.name}, my role is ${this.role}.`);
    }
}

class Manager extends Employee {
    constructor(__name, __role) {
        super(__name, __role);
    }
}

class Supervisor extends Employee {
    constructor(__name, __role) {
        super(__name, __role);
    }
}

class Programmer extends Employee {
    constructor(__name, __role, __field) {
        super(__name, __role);
        this.field = __field;
    }

    getField() {
        console.log(`${this.name} work in ${this.field} field.`);
    }
}

class WebDeveloper extends Programmer {
    constructor(__name, __role, __field) {
        super(__name, __role, __field);
    }
}

const employee1 = new Manager("Malvin Valerian", "Manager");
const employee2 = new Supervisor("Taylor Otwell", "Supervisor");

const webDeveloper1 = new WebDeveloper("Brendan Eich", "Programmer", "Android Developer");

employee1.whoAmI();
employee2.whoAmI();

webDeveloper1.whoAmI();
webDeveloper1.getField();