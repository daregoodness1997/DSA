let array = [1, 2, 3, 4, 5];

// Insertions in the array

array.push(5);
array.push(6);
array.push(7);

// Pop  - Implementing deletion in the

array.pop(); // Deletes the last element in the array

// Access
console.log('Access the first element in the array', array[0]);
console.log('Access the second element in the array', array[1]);

// Iteration through the array, O(n) complexity
//1. Using the iterator method for (Variables; Condition; Modification)

for (let i = 0; (len = array.length), i < len; i++) {
  console.log(array[i]);
}

// 2. Using the while loop
let counter = 0;
while (counter < array.length) {
  console.log(array[counter]);
  counter++;
}

// 3. Using the for in loop
let characters = ['all', 'cows', 'are', 'big'];
for (index in characters) {
  console.log('Print the index of the arrray', index);
}

for (let index in characters) {
  console.log('Print the content of the arrray', characters[index]);
}

// 4. Using the for of loop
for (let character of characters) {
  console.log('Print the content of the characters', character);
}

// 5. Using the  forEach method - diff being that yoou cannoot break out of the
characters.forEach(function (element, index) {
  console.log(element, index);
});

// Using arrow functtion
characters.forEach((element, index) => {
  console.log(element, '=>', index);
});

console.log(array);
