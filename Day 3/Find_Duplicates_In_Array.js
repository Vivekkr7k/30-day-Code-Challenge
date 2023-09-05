const A = [0, 1, 2, 3, 4, 5];

function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true; // Found a duplicate
      }
    }
  }
  return false; // No duplicates found
}

const hasDuplicatesInA = hasDuplicates(A);

if (hasDuplicatesInA) {
  console.log("Array A contains duplicates.");
} else {
  console.log("Array A does not contain duplicates.");
}


const B = [5, 4, 3, 2, 1, 0];

function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true; // Found a duplicate
      }
    }
  }
  return false; // No duplicates found
}

const hasDuplicatesInB = hasDuplicates(B);

if (hasDuplicatesInB) {
  console.log("Array B contains duplicates.");
} else {
  console.log("Array B does not contain duplicates.");
}
