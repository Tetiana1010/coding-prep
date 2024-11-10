import { sumOfEvens } from "../tasks/algorithms/solutions/sum_of_evens";

test("sumOfEvens function exists", () => {
  expect(typeof sumOfEvens).toEqual("function");
});

test("SumOfEvens test case", () => {
  expect(sumOfEvens([3, 6, 7, 2, 10])).toEqual(18);
});
