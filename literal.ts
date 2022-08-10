function combine(
  a: number | string,
  b: number | string,
  type: "as-string" | "as-number"
) {
  if (type === "as-number") {
    return +a + +b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(combine(15, 8, "as-number"));
