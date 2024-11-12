import { fibonacci } from "../tasks/algorithms/solutions/fibonacci";

test("fibonacci function exists", () => {
  expect(typeof fibonacci).toEqual("function");
});

test("Fibonacci test case", () => {
  expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});