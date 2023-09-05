// Testcase 1:
const A1 = [1, 2, 5, 4, 0];
const B1 = [1, 2, 5, 4, 0];

// Testcase 2:
const A2 = [1, 2, 3, 4, 5];
const B2 = [11, 22, 33, 44];

function arraysAreEqual(arr1, arr2) {
  // Check if arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Compare elements one by one
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Testcase 1
if (arraysAreEqual(A1, B1)) {
  console.log("Arrays A1 and B1 are equal.");
} else {
  console.log("Arrays A1 and B1 are not equal.");
}

// Testcase 2
if (arraysAreEqual(A2, B2)) {
  console.log("Arrays A2 and B2 are equal.");
} else {
  console.log("Arrays A2 and B2 are not equal.");
}
