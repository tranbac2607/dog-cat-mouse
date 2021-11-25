function Dog() {
    this.stomach = [];
}   

Dog.prototype.eat = function (mouse) {
    this.stomach.push(mouse);
}