import { twoSum } from "../tasks/algorithms/solutions/two_sum_solution";

test("twoSum function exists", () => {
  expect(typeof twoSum).toEqual("function");
});

test("Two Sum test case", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
