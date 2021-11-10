"use strict";
class PointClass {
    constructor(a, b) {
        this.a = a !== null && a !== void 0 ? a : 0;
        this.b = b !== null && b !== void 0 ? b : 1;
    }
    draw() {
        console.log(this.a, this.b);
    }
}
const point = new PointClass();
point.b;
