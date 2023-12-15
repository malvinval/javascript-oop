# What is Private Class Field

Field yang memiliki visibility private tidak akan bisa diakses dari luar classnya. Untuk membuat private field, kita bisa gunakan tanda `#` sebelum nama field. Contoh:

```js
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
```

Dari kode diatas kita bisa pahami bahwa kita membutuhkan setter dan getter functions untuk melakukan read atau write data field. Mengapa? karena data-data private field tersebut tidak dapat diakses dari luar class `Student`. Ga percaya? cobain aja.