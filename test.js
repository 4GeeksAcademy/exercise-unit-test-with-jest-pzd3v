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

test("1 Euro debe ser 1.07 Dolar", () => {
  let changeEuroToDollar = fromEuroToDollar(1);

  expect(changeEuroToDollar).toBe(1.07);
});

test("3.5 Euros debe ser 3.745 Dolar", () => {
  let changeEuroToDollar = fromEuroToDollar(1);

  expect(changeEuroToDollar).toBe(1.07);
});
