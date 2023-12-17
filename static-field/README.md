# What is Static Field

Ketika kita membuat instance dari sebuah class dan setiap field dalam class tersebut tidak static, maka semua fieldnya dapat diakses melalui instance, dan setiap method yang ada akan masuk kedalam prototype. Contoh:

```js
class Person {
    constructor() {
        this.name = "Default name";
    }

    getName() {
        return this.name;
    }
}

const person1 = new Person();

console.log(person1.name);
console.log(Person.prototype.getName);
```

Output dari kode diatas adalah:

```
Default name
[Function: getName]
```

Dengan begitu, kita bisa paham bahwa field `name` dapat diakses melalui instance dan method `getName` dimiliki oleh prototype.

Namun, dengan menggunakan keyword `static` maka semua hal itu tidak akan terjadi. Field dan method yang ada dalam class akan sepenuhnya milik class, bukan milik instance ataupun prototype. Lihat kode dibawah:

```js
class Project {
    static name = "Operation Bayonet";
    static version = 1.0;
    static author = "Malvin Valerian Gultom";
}

const project1 = new Project();

console.log(project1.name); // output: undefined
console.log(Project.name); // output: <value_of_name>
```

Dari kode diatas, kita pahami bahwa field name tidak bisa diakses melalui object `project1`. Field tersebut harus secara langsung diakses melalui classnya dengan kode `Project.name`.