function Cat() {
    this.stomach = [];
}

Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse);
}

model.export = Cat;
