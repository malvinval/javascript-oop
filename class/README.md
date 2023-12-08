# What is Class?

Class itu adalah sebuah *blueprint* dari object. Idealnya, object itu dihasilkan dari sebuah class. Analoginya sederhananya gini, kalo kita mau bikin sebuah kue berbentuk bintang maka kita beli cetakan kue yang berbentuk bintang. Cetakan kue itu sebuah *blueprint* (class), dan objectnya adalah kue yang dibentuk dari cetakannya.

# Contoh

Setiap mobil pasti punya brand dan warna. Artinya, kita bisa membuat class `Mobil` agar nantinya kita bisa bikin object menggunakan class tersebut. Lihat kode dibawah:

```js
class Mobil {
    constructor(__brand, __color) {
        this.brand = __brand;
        this.color =  __color;
    }

    getBrandInfo() {
        return this.brand;
    }

    getColorInfo() {
        return this.color;
    }
}

const myCar = new Mobil("Avanza Veloz", "Hitam");

console.log(myCar.getBrandInfo());
console.log(myCar.getColorInfo());
```

Dari kode diatas, kita bisa paham bahwa `Mobil` adalah sebuah class yang kita gunakan untuk membuat object baru dalam variable `myCar` dengan menggunakan keyword `new`.

Apa itu `constructor`? Constructor adalah method default dari sebuah class yang otomatis dijalankan ketika kita membuat instance baru dari class tersebut menggunakan keyword `new`.

Gimana kalo kita mau bikin object baru misalnya `Kijang Innova`? Ya gampang aja tinggal gunakan keyword `new`, beserta parameter yang dibutuhkan oleh class yang terkait. Contoh:

```js
const myCar = new Mobil("Kijang Innova", "Hitam");
```