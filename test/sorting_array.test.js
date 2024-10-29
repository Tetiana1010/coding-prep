import { babbleSort } from "../tasks/algorithms/solutions/sorting-array";

test("babbleSort function exists", () => {
  expect(typeof babbleSort).toEqual("function");
});

test("Two Sum test case", () => {
  expect(babbleSort([4, 7, 1, 15], 9)).toEqual([1, 4, 7, 15]);
});
