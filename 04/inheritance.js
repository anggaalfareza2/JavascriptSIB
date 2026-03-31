/*
class vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
}

class car extends vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year);
        this.doors = doors;
    }
    getCarInfo(){
        return `${this.getInfo()}, pintu : ${this.doors}`;
    }
}

class motorcycle extends vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type;
    }
    getMotorInfo(){
        return `${this.getInfo()}, type : ${this.type}`;
    }
}

let MyCar = new car("Toyota", "GT86", 2020, 2);
let MyMotorcycle = new motorcycle("HONDA", "CBR600R", 2010, "SPORT");
console.log(MyCar.getCarInfo());
console.log(MyMotorcycle.getMotorInfo());


class animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
    getInfo(){
        return `Name: ${this.name}, Species: ${this.species}, Age ${this.age}`;
    }
}

class cat extends animal {
    constructor(name, species, age, color) {
        super(name, species, age);
        this.color = color;
    }
    getCatInfo () {
        return `${this.getInfo()} Type : ${this.color}`;
    }
}
let MyAnimal = new animal("Leo", "Lion", 5);
let MyCat = new cat("kitty", "Domestik", 1, "Black")
console.log(MyAnimal.getInfo());
console.log(MyCat.getCatInfo());

*/

class Gadget {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    getInfo(){
        return `Brand : ${this.brand}, Price : ${this.price}`
    }
}
class Smartphone extends Gadget {
    constructor(brand,price,property) {
        super(brand,price);
        this.property = property;
    }
    getSmartphoneInfo (){
        return `${this.getInfo()}, Property = ${this.property}`
    }
}

class Laptop extends Smartphone {
    constructor(brand,price,property,ram) {
        super(brand,price,property);
        this.ram = ram;
    }
    getLaptopInfo (){
        return`${this.getSmartphoneInfo()}, Ram : ${this.ram}`
    }
}

let MyGadget = new Gadget("Samsung", 5000000)
let MySmartphone = new Smartphone("Redmi", 3000000, "Dual Camera")
let MyLaptop = new Laptop("Toshiba", 10000000,"Dual Monitor", 16)


console.log(MyGadget.getInfo());
console.log(MySmartphone.getSmartphoneInfo());
console.log(MyLaptop.getLaptopInfo());
