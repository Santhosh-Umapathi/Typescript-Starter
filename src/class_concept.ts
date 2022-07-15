export class PointClass {
  //   private a: number; //not accessible outside
  //   b: number;

  constructor(private _a?: number, private _b?: number) {
    // this.a = a ?? 0;
    // this.b = b ?? 1;
  }

  draw() {
    console.log(this._a, this._b);
  }

  get a() {
    console.log("🚀 --- PointClass --- geta --- get");
    return this._a ?? 0;
  }

  set a(val: number) {
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
