const A = [0, 1, 2, 3, 4, 5];
const keyA = 1;

function countOccurrences(arr, key) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      count++;
    }
  }

  return count;
}

const occurrencesInA = countOccurrences(A, keyA);

console.log(`Key ${keyA} occurs ${occurrencesInA} times in Array A.`);

const B = [5, 4, 3, 2, 1, 0];
const keyB = 1;

function countOccurrences(arr, key) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      count++;
    }
  }

  return count;
}

const occurrencesInB = countOccurrences(B, keyB);

console.log(`Key ${keyB} occurs ${occurrencesInB} times in Array B.`);
