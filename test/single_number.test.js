import { singleNumber } from "../tasks/algorithms/solutions/single_number";

test("singleNumber function exists", () => {
  expect(typeof singleNumber).toEqual("function");
});

test("Single number test case", () => {
  expect(singleNumber([2,2,1])).toEqual(1);
});