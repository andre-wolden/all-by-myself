"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.size = width * height;
    }

    printSize(){
        console.warn("Size = " + this.size);
    }
}

const r = new Rectangle(2, 3);

console.log("---------------------------")
console.log("From transpiled magic file:");

r.printSize();
console.log("---------------------------")
