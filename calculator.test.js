import { calculator } from "./calculator";

test("add", () => {
  expect(calculator.add(5, 2)).toBe(7);
});

test("subtract", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("multiply", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("divide", () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});
