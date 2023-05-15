import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./module";

test("capitalize", () => {
  expect(capitalize("")).toBe("");
  expect(capitalize("a")).toBe("A");
  expect(capitalize("a a")).toBe("A a");
  expect(capitalize("123")).toBe("123");
  expect(capitalize("Leeroy")).toBe("Leeroy");
});
test("reverse String", () => {
  expect(reverseString("")).toBe("");
  expect(reverseString("a")).toBe("a");
  expect(reverseString("a b")).toBe("b a");
  expect(reverseString("123 a b")).toBe("b a 321");
  expect(reverseString("Leeroy")).toBe("yoreeL");
});
test("calculator", () => {
  let cal = Calculator();
  expect(cal.sum(3, 4)).toBe(7);
  expect(cal.subtract(3, 4)).toBe(-1);
  expect(cal.multiply(3, 4)).toBe(12);
  expect(cal.divide(3, 4)).toBe(0.75);
});
test("Caesar Cipher", () => {
  expect(caesarCipher("abcdefg", 20)).toBe("uvwxyza");
  expect(caesarCipher("123abc-()!@#", 20)).toBe("123uvw-()!@#");
});
test("analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
