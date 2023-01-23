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
// using the iterator method for (Variables; Condition; Modification)

for (let i = 0; (len = array.length), i < len; i++) {
    console.log(array[i])
}

console.log(array);
