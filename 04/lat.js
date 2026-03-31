function person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
person.prototype.toString = function() {
    return this.name;
}
var Person1 = new person("Alice", 30, "New York");
var Person2 = new person("Bob", 25, "Los Angeles");
console.log(Person1); // Output: Alice
console.log(Person2); // Output: Los Angeles
