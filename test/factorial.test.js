import { factorial } from "../tasks/algorithms/solutions/factorial";

test("factorial function exists", () => {
  expect(typeof factorial).toEqual("function");
});

test("Single number test case", () => {
  expect(factorial(5)).toEqual(120);
});