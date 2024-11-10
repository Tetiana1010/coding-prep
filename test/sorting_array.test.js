import { babbleSort } from "../tasks/algorithms/solutions/sorting_array";

test("babbleSort function exists", () => {
  expect(typeof babbleSort).toEqual("function");
});

test("Babble sort test case", () => {
  expect(babbleSort([4, 7, 1, 15], 9)).toEqual([1, 4, 7, 15]);
});
