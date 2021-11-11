"use strict";
class PointClass {
    //   private a: number; //not accessible outside
    //   b: number;
    constructor(_a, _b) {
        this._a = _a;
        this._b = _b;
        // this.a = a ?? 0;
        // this.b = b ?? 1;
    }
    draw() {
        console.log(this._a, this._b);
    }
    get a() {
        var _c;
        console.log("🚀 --- PointClass --- geta --- get");
        return (_c = this._a) !== null && _c !== void 0 ? _c : 0;
    }
    set a(val) {
        if (val < 0) {
            throw new Error("Value should be greater than 0");
        }
        this._a = val;
        console.log("🚀 --- PointClass --- seta --- _a", this._a);
    }
}
const point = new PointClass(1, 2);
point.a = 10;
console.log("🚀 --- point", point);
