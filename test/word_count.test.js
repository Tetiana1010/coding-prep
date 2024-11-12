import { wordCount } from "../tasks/algorithms/solutions/word_count";

test("wordCount function exists", () => {
  expect(typeof wordCount).toEqual("function");
});

const sentence = "Hello world! Hello everyone. Welcome to the world of programming.";
test("Word count test case", () => {
  expect(wordCount(sentence)).toEqual({ hello: 2, world: 2, everyone: 1, welcome: 1, to: 1, the: 1, of: 1, programming: 1 });
});