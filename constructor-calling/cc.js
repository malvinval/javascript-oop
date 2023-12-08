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