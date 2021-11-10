class PointClass {
  private a: number; //not accessible outside
  b: number;

  constructor(a?: number, b?: number) {
    this.a = a ?? 0;
    this.b = b ?? 1;
  }

  draw() {
    console.log(this.a, this.b);
  }
}

const point = new PointClass();
point.b;
