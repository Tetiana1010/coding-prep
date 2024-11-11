export const wordCount = (sentence) => {
  const words = sentence.toLowerCase().split(/\W+/);
  const count = {};
  for (const word of words) {
      if (word) {
          count[word] = (count[word] || 0) + 1;
      }
  }
  return count;
};

const sentence = "Hello world! Hello everyone. Welcome to the world of programming.";
wordCount(sentence);
