export const isPalindrome = function(s) {
  let cleanedStr = "";
  let reversedStr = "";

  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z0-9]/.test(s[i])) {
      cleanedStr += s[i].toLowerCase();
    }
  }

  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr += cleanedStr[i];
  }

  return cleanedStr === reversedStr;
};

isPalindrome("A man, a plan, a canal: Panama");

