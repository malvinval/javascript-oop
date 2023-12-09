# What is Class Inheritance

Dalam konteks OOP, sebuah class dapat melakukan pewarisan ke class lain dengan menggunakan kata kunci `extends`. Dengan melakukan pewarisan, maka *child class* akan diwariskan properti dan method yang ada didalam *parent class* (pewaris). Lihat contoh dibawah ini:

1. Kita akan membuat sebuah class `Employee` yang akan menjadi "pewaris" (*parent class*) bagi class `Manager`, `Supervisor`, dan `Programmer`.
2. Class `Programmer` akan menjadi *parent class* (pewaris) untuk anaknya yaitu class `WebDeveloper`.

Singkatnya, class `WebDeveloper` adalah cucu dari class `Employee` wkwkwk.

```js
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
```

Lihat dan pahami kode diatas. Setiap class yang ingin diwariskan harus menggunakan keyword `extends`. Apa gunanya keyword `super()`? Keyword `super()` tersebut berguna bagi *child class* untuk mengakses *parent class* (pewaris).

Bagaimana dengan method `getField()` milik class `Programmer`? Apakah method tersebut bisa diakses oleh class `Manager` dan `Supervisor`? Jawabannya **tidak**. Karena class `Manager` dan `Supervisor` bukan anak (keturunan) dari class `Programmer` sehingga class `Programmer` tidak mewariskan apapun kepada mereka.

Apakah class `WebDeveloper` bisa mengakses method `whoAmI()` yang ada di class `Employee`? Ya, **bisa**. Karena class `WebDeveloper` merupakan anak dari class `Programmer`, dan class `Programmer` adalah anak dari class `Employee`. Sehingga class `Employee` mewariskan apa yang dimilikinya kepada class `Programmer`, dan class `Programmer` mewariskan apa yang dimilikinya kepada class `WebDeveloper`.

Simple as that.