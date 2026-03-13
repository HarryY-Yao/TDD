import { capitalize } from "./capitalize";

test("capitalize one letter", () => {
  expect(capitalize("h")).toBe("H");
});

test("capitalize hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Empty String", () => {
  expect(capitalize("")).toBe("");
});
