# What is Object?

Dalam konteks OOP, object itu adalah sebuah entitas data yang didalamnya terdapat atribut/properti, dan atau method. Contoh:

```js
const iniObject = {
    nama: "Malvin Valerian",

    getNama: function() {
        return this.nama;
    }
}

const nama = iniObject.getNama();

console.log(nama);
```

`iniObject` merupakan sebuah data object.

`nama` merupakan sebuah atribut (atau bisa juga disebut properti).

`getNama` merupakan sebuah method.

Apa itu keyword `this`? Sederhananya, dalam konteks ini keyword `this` mengacu ke object `iniObject`. Masih bingung? Gapapa, pegangan aja dulu. Nanti kita bahas lebih lanjut.

**Note**: Jangan lupa untuk memisahkan tiap atribut/method dengan tanda koma (,)