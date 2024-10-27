var strStr = function(haystack, needle) {
  const arr = [];
  const needleLength = needle.length;
  const haystackLength = haystack.length;

  if (needleLength === 0) return 0;

  for (let j = 0; j <= haystackLength - needleLength; j++) {
      let match = true;
      for (let i = 0; i < needleLength; i++) {
          if (haystack[j + i] !== needle[i]) { 
              match = false;
              break;
          }
      }
      if (match) {
          arr.push(j); 
      }
  }

  return arr;
};

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("mississippi", "issip"));
