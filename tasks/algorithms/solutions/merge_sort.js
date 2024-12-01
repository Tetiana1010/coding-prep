function mergeSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArray = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
          sortedArray.push(left[i]);
          i++;
      } else {
          sortedArray.push(right[j]);
          j++;
      }
  }

  return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);

console.log("Unsorted:", unsortedArray);
console.log("Sorted:", sortedArray);
