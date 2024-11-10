export const factorial = (n) => {
  if (n < 0) return null;
  let result = 1;
  for (let i = 1; i <= n; i++) {
      result *= i;
  }
  return result;
};

factorial(5);
