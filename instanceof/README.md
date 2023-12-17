# What is `instanceof`

Ketika kita membuat sebuah object dari sebuah class, maka objectnya dapat kita sebut sebagai `instance`. Contoh:

```js
class Person {}

class Car {};

const person1 = new Person();

console.log(person1 instanceof Person);
console.log(person1 instanceof Car);
```

Dari kode diatas, kita dapat pahami bahwa `person1` merupakan instance dari class `Person` karena `person1` merupakan sebuah object yang dihasilkan dari class `Person`.

Selain, itu `instanceof` juga berlaku pada konsep class inheritance. Lihat kode dibawah!

```js
class Person {}

class Student extends Person {}

const person1 = new Person();

console.log(person1 instanceof Person);

const student1 = new Student();

console.log(student1 instanceof Person)
```

Walaupun object `student1` dihasilkan dari class `Student`, dia tetap disebut instance dari class `Person`. Kenapa? karena class `Student` merupakan *child* (anak) dari class `Person`.

Apakah object `person1` merupakan instance dari class `Student`? Jawabannya **tidak**. Karena object `person1` dibuat langsung dari class `Person` (*parent*).