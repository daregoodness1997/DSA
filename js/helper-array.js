// 1. Slice -  returns a proportion of the array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

console.log(array.slice(1, 4));
console.log(array.slice(6, 7));

// slice is useful when copying arrays
let array2 = array;
let array3 = array2.slice();

array[0] = 'Odo';
console.log(array);

console.log(array2);
console.log(array3);
