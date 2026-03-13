import { reverseString } from "./reverseString";

test("Single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("Hello", () => {
  expect(reverseString("Hello")).toBe("olleH");
});
