# What is Constructor Calling?

Constructor Calling adalah sebuah cara untuk menggunakan atribut dan method dari sebuah constructor function ke constructor function lainnya. Apa? mirip konsep *inheritance*? Iya si, bener. Ini mirip dengan konsep *inheritance*. Tapi ga sepenuhnya tepat kalo konsep ini disebut *inheritance*.

# Contoh

Kita akan menggunakan atribut dari constructor function `Attributes` di dalam constructor function `Motorcycle`.

```js
function Attributes(__brand, __name, __price) {
    this.brand =  __brand
    this.name =  __name
    this.price =  __price
}

function Motorcycle(__brand, __name, __price) {
    // use attributes and methods from Car constructor function
    Attributes.call(this, __brand, __name, __price);

    this.startEngine = function() {
        console.log(`Starting ${this.brand} ${this.name} engine...`);
        console.log(`${this.brand} ${this.name} engine started.`);
    }
}

const aerox = new Motorcycle("Yamaha", "Aerox", 23000000);

aerox.startEngine();
```

Dari kode diatas, kita bisa paham bahwa dengan menggunakan method `call()` dalam kode `Attributes.call(this, __brand, __name, __price)`, maka artinya kita dapat menggunakan seluruh atribut dari constructor function `Attributes` ke dalam constructor function `Motorcycle`. Sehingga atribut `brand`, `name`, dan `price` dapat kita gunakan dalam scope (lingkup) `Motorcycle`.