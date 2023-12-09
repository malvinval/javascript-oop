# What is Super Method

Selain untuk mengakses prototype dari *parent class*, method `super()` juga bisa digunakan untuk mengakses method yang ada didalam *parent class*. Lihat contoh dibawah:

```js
class Shape {
    info() {
        console.log("I am shape.");
    }
}

class Circle extends Shape {
    info() {
        super.info();
        console.log("I am circle.");
    }
}

const shape1 = new Circle();

shape1.info();
```

Dari kode diatas, kita bisa paham bahwa method `info()` dalam class `Shape` akan diwariskan kepada class `Circle`. Tapi ternyata, class `Circle` juga punya nih method `info()`. Apakah jadi error? **Tidak**. Kenapa? alurnya begini: JavaScript akan cek dahulu, apakah ada method `info()` dalam class `Circle`. Jika ada, eksekusi. Jika tidak ada, maka akan dicari dari *parent class*, yaitu `Shape`.

Jadi gimana cara kita akses method `info()` yang ada di class `Shape`? Gunakan statement `super.info()`. Maka secara otomatis yang akan diakses adalah method `info()` milik `Shape`, bukan milik `Circle`.