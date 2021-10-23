function point(x, y, r) {
  z = Math.sqrt(x * x + y * y);
  return z > r ? "Точка лежит вне круга" : "Точка лежит в круге";
}
console.log(point(4, 9, 10));
