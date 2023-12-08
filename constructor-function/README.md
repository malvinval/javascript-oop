# What is Constructor Function

Constructor function yang umum digunakan sebelum adanya ES6 untuk membuat sebuah class dengan function. Sebelumnya, kita membuat class dengan menggunakan keyword `class`. Lihat kode dibawah:

```js
class Mobil {

}
```

Kode diatas valid, dan lebih direkomendasikan sejak ES6. Tapi, kita juga bisa bikin sebuah class menggunakan constructor function. Contoh:

```js
function Person(__name, __age) {
    this.name = __name
    this.age = __age

    this.getName = function() {
        return this.name
    }
}

const person1 = new Person("Malvin Valerian", 27);
console.log(person1.getName());
```

Dari kode diatas, kita bisa paham bahwa kita telah membuat constructor function yang atribut dan methodnya diawali dengan keyword `this`. Dalam konteks ini, `this` mengacu ke constructor function `Person`. Lalu kita membuat sebuah object `person1` dengan menggunakan keyword `new`.

Lalu, apa perbedaan constructor function dan keyword `class`? **Class di JavaScript bisa diinherit, sedangkan constructor function tidak**. Gue pribadi pasti akan lebih suka pake cara baru yaitu keyword `class`.