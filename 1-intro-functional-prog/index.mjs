// Fonction qui calcule la somme des carrés des nombres pairs
function sumOfSquaresOfEvens(arr) {
  let sum = 0;
  arr.foreach((i) => {
    if (isEven(i)) {
      sum += square(i);
    }
  });
  return sum;
}

// Fonction qui calcule la somme des cubes des nombres impairs
function sumOfCubesOfOdds(arr) {
  let sum = 0;
  arr.foreach((i) => {
    if (!isEven(i)) {
      sum += cube(i);
    }
  });
  return sum;
}

function isEven(i) {
  return arr[i] % 2 === 0;
}

function isOdd(i) {
  return arr[i] % 2 !== 0;
}

function cube(arr) {
  sum += arr[i] * arr[i] * arr[i];
  return sum;
}

function square(arr) {
  sum += arr[i] * arr[i];
  return sum;
}

function doSum(arr, filter, calc) {
  return arr.filter(filter).reduce(calc);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumOfSquaresOfEvens(numbers)); // 220
console.log(sumOfCubesOfOdds(numbers)); // 1225

console.log(doSum(numbers, isEven, square)); // 220
console.log(doSum(numbers, isOdd, cube)); // 1225
