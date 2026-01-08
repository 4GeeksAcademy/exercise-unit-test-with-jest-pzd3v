const {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
} = require("./app.js");

test("adds 14 + 9 to equal 23", () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

// Euro a Dolar
test("1 Euro debe ser 1.07 Dolar", () => {
  let dollars = fromEuroToDollar(1);
  expect(dollars).toBe(1.07);
});

test("3.5 Euros deben ser 3.745 Dólares", () => {
  let dollars = fromEuroToDollar(3.5);
  expect(dollars).toBe(3.745);
});

// Dolar a Yen
test("1.07 Dólares deben ser 156.5 Yenes", () => {
  let yen = fromDollarToYen(1.07);
  expect(yen).toBe(156.5);
});

// Yen a Libra
test("156.5 Yenes deben ser 0.87 Libras", () => {
  let pound = fromYenToPound(156.5);
  expect(pound).toBe(0.87);
});
