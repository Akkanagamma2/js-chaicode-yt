const arr = [1,2,3,4,5,6];
// console.log(arr);
// console.log(arr[0]);

// console.log(arr.push(7));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

//slice vs splice **********
// console.log(arr.slice(1,4)); //it will remove until 3rd index but do not effect to roiginal array
// console.log(arr);
// console.log(arr.splice(1,4)); //it will remove upto 4th index and original array is effected.
// console.log(arr); 

const arr1 = new Array(2,4,6,8,10,12,14,16);
// console.log(arr1.concat(20,22,24));
// console.log(arr1);

// console.log(arr1.copyWithin(0,3,7)); //(target,start,end) it will copy same elements value to targeted index until the end.
// console.log(arr1);

const entriesiterator = arr1.entries();
// console.log(entriesiterator.next().value);
// console.log(entriesiterator.next().value);

// console.log(arr1.fill(2,3,7)); //fill(value,start,end) --from index start to index end
// console.log(arr1);
// console.log(arr1.fill(3,2)); //fill(value,start) -- from index start
// console.log(arr1.fill(8)); //fill(value) -- for whole array

// console.log(arr1.filter((element) => element >= 10)); //filter the values which is greater than 10
// console.log(arr1);

// console.log(arr1.find((element) => element > 12)); //it will return the value based on function
// console.log(arr1.find((element) => element > 20)); //it will return the undefined if its not valid

// console.log(arr1.findIndex((element) => element > 12)); //it will return the index based on function
// console.log(arr1.findIndex((element) => element > 20)); //it will return the -1 if its not valid

// arr1.forEach((element) => console.log(element)); //iterate all elements no need length of array

console.log(arr1.includes(12));
console.log(arr1.indexOf(14));
console.log(arr1.join('*'));
console.log(typeof arr1.join('*'));
console.log(arr1.join());
