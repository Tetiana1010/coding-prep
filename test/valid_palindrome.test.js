import { isPalindrome } from "../tasks/algorithms/solutions/valid_palindrome";

test("isPalindrome function exists", () => {
  expect(typeof isPalindrome).toEqual("function");
});

test("Two Sum test case", () => {
  expect(isPalindrome("dddd")).toEqual(true);
});
