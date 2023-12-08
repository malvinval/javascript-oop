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