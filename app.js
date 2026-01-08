/* console.log("Hello World")
 */
const sum = (a, b) => {
  return a + b;
};

console.log(sum(7, 3));

let oneEuroIs = {
  JPY: 156.5,
  USD: 1.07,
  GBP: 0.87,
};

const fromEuroToDollar = (euro) => {
  return euro * oneEuroIs.USD;
};

const fromDollarToYen = (dollar) => {
  return (dollar / oneEuroIs.USD) * oneEuroIs.JPY;
};

const fromYenToPound = (yen) => {
  return (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
};

module.exports = {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
};
