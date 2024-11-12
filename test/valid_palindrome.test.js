import { isPalindrome } from "../tasks/algorithms/solutions/valid_palindrome";

test("isPalindrome function exists", () => {
  expect(typeof isPalindrome).toEqual("function");
});

test("isPalindrome test case", () => {
  expect(isPalindrome("dddd")).toEqual(true);
});
