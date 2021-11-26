var Dog = require('./dog');
var Mouse = require('./mouse');

var dog = new Dog('Tom');
var mouse = new Mouse();

dog.eat(mouse);
console.log(dog);
dog.sayHi();