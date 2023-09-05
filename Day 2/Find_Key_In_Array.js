// Array A
const A = [1, 2, 5, 4, 0];
const keyA = 4;

// Array B
const B = [11, 22, 33, 44];
const keyB = 33;

const indexA = A.indexOf(keyA);
const indexB = B.indexOf(keyB);

if (indexA !== -1) {
  console.log(`Key ${keyA} found in Array A at index ${indexA}`);
} else {
  console.log(`Key ${keyA} not found in Array A`);
}

if (indexB !== -1) {
  console.log(`Key ${keyB} found in Array B at index ${indexB}`);
} else {
  console.log(`Key ${keyB} not found in Array B`);
}
