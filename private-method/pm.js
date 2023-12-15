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