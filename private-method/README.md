# What is Private Method

Selain membuat private field, kita juga bisa bikin private method. Artinya, method tersebut tidak akan bisa diakses dari luar class.

```js
class Car {
    #brand;
    #name;

    constructor(__brand, __name) {
        this.#brand = __brand;
        this.#name = __name;
    }

    getInfo(type) {
        if (type === "brand") {
            return this.#getBrand;
        } else if ("name") {
            return this.#getName;
        } else {
            console.log("Invalid type of getInfo()")
        }
    }

    get #getBrand() {
        return this.#brand;
    }

    get #getName() {
        return this.#name;
    }
}

const car1 = new Car("Toyota", "Avanza Veloz");

console.log(`Brand: ${car1.getInfo("brand")}\nName: ${car1.getInfo("name")}`);

// EXPERIMENT: console.log(car1.#getBrand);
```

Dari kode diatas, kita bisa pahami bahwa kita tidak bisa mengakses method `#getName` dan `#getBrand` melalui object, seperti kode dibawah ini:

```js
const car1 = new Car("Toyota", "Avanza Veloz");
console.log(car1.#getBrand);
```

Kode diatas akan mengakibatkan error karena kita mencoba mengakses method yang private. Sebagai solusinya, kita memanggil kedua private method tersebut dengan bantuan method `getInfo()`.