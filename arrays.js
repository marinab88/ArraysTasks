/*******  Arrays    *******/
console.log("-----Arrays -----");
// ------ Task 1:
console.log("-----Task 1:");
// Is array copied?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// // what's in fruits?
console.log( fruits.length ); // 4

// -----Task 2:
console.log("-----Task 2:");
// Array operations
/* Let’s try 5 array operations.
1. Create an array styles with items “Jazz” and “Blues”.
2. Append “Rock-n-Roll” to the end.
3. Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
4. Strip off the first value of the array and show it.
5. Prepend Rap and Reggae to the array.
*/

let arr = ['Jazz', 'Blues'];
console.log(arr);
arr.push('Roch-n-Roll');
console.log(arr);
// arr[1] = 'Classics';
for (let i=0; i <= arr.length; i++) {
  let mid =  Math.floor((arr.length - 1) / 2);
    if ( i === mid) {
    arr[i] = 'Classics';
    }
}
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('Rap', 'Reggae');
console.log(arr);

// -----Task 3:
console.log("-----Task 3:");
// Calling in an array context
// What is the result? Why?

let arr1 = ["a", "b"];

arr1.push(function() {
  console.log( this );
});

arr1[2](); // a,b,f(){alert(this)}
//we have a call of the function arr[2] as an object method.

// -----Task 4:
console.log("-----Task 4:");
// Sum input numbers

const sumInput = () => {
  let arr = [];
 
  while (true) {
    let value = prompt('Enter a number:', 0);
        
    if (value === null || value === '' || !isFinite(value)) break;
    arr.push(+value);
  }
  
  let sum = 0;
  for (let nr of arr) {
    sum += nr; 
  }

  return console.log(sum);
}

sumInput();


//  -----Task 5:
console.log("-----Task 5:");
// A maximal subarray

const getMaxSubSum = (arr) => {
  let maxSum = 0;
  for (let i=0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      maxSum = Math.max(maxSum, sum);

    }
    
  }
  return maxSum;
}  // This is a slow solution

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100

// This is a fast solution
function getMaxSubSum1(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}


//***************************************/
//**********  Array methods **********/
console.log("-----Array methods------");
// -----Task 1:
console.log("-----Task 1:");
// Translate border-left-width to borderLeftWidth

const camelize = (str) => {

  let arr = str.split('-');
    // console.log(arr);
  let arr1 = arr.map((item, index) => 
                        index == 0 ? 
                          item : 
                          item[0].toUpperCase() + item.slice(1));
    // console.log(arr1);
  let result = arr1.join('');
    console.log(result);
}

camelize("border-left-width");

// -----Task 2:
console.log("-----Task 2:");
// Filter range

const filterRange = (arr, a, b) => {
  return arr.filter(item => ( a <= item && item <= b));
} 

let arr6 = [5, 3, 8, 1];

let filtered = filterRange(arr6, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr6 ); // 5,3,8,1 (not modified)


// -----Task 3:
console.log("-----Task 3:");
// Filter range "in place"

const filterRangeInPlace = (arr, a, b) => {
    let resultArr = [];
      for (let i=0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <=b) {
          resultArr.push(arr[i]);
        }
      }

  console.log(resultArr);
}

filterRangeInPlace([5, 3, 8, 1], 1, 4);


// -----Task 4:
console.log("-----Task 4:");
// Sort in decreasing order

const decreasingOrder = (arr) => {

  arr.sort((a, b) => b - a);

  console.log(arr);
}
decreasingOrder([5, 2, 1, -10, 8]);


// -----Task 5:
console.log("-----Task 5:");
// Copy and sort array

let arr3 = ["HTML", "JavaScript", "CSS"];
const copySorted = (arr3) => {

  return arr3.slice().sort(); 

}

let sorted = copySorted(arr3);
console.log(sorted);
console.log(arr3);


// -----Task 6:
console.log("-----Task 6:");
// Create an extendable calculator

class Calculator {
  constructor() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  }

  calculate(str) {
    let nr = str.split(" "),
      a = +nr[0],
      op = nr[1],
      b = +nr[2];

      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }

      return this.methods[op](a, b);
   };

  addMethod(name, func) {
    this.methods[name] = func;
  };

}

let calc = new Calculator;
console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

// -----Task 7:
console.log("-----Task 7:");
// Map to names

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map((user) => user.name);

console.log( names ); // John, Pete, Mary


// -----Task 8:
console.log("-----Task 8:");
// Map to objects

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john1, pete1, mary1 ];

let usersMapped = users1.map(user => ({ fullName: `${user.name} ${user.surname}`,
id: user.id}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[1].fullName ) // John Smith

// -----Task 9:
console.log("-----Task 9:");
// Sort users by age

const sortByAge = (arr2) => {

  arr2.sort((a, b) => a.age - b.age);

}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr2 = [ pete2, john2, mary2 ];

sortByAge(arr2);

// now: [john, mary, pete]
console.log(arr2[0].name); // John
console.log(arr2[1].name); // Mary
console.log(arr2[2].name); // Pete

// -----Task 10:
console.log("-----Task 10:");
// Shuffle an array (randomly reorders)

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5 );
  
}
let arr4 = [1, 2, 3];
shuffle(arr4);
console.log(arr4);
// arr = [3, 2, 1]

shuffle(arr4);
console.log(arr4);
// arr = [2, 1, 3]

shuffle(arr4);
console.log(arr4);
// arr = [3, 1, 2]

// -----Task 11:
console.log("-----Task 11:");
// Get averange age

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arr5 = [ john3, pete3, mary3 ];

const getAverageAge = (users) => {
  let ages = users.map(user => user.age); 

  let sumAge = 0;
  for (let i=0; i < ages.length; i++) {
    sumAge += ages[i];
  }

  let averangeAge = sumAge / ages.length;
  return averangeAge;
}

console.log( getAverageAge(arr5) ); // (25 + 30 + 29) / 3 = 28


// -----Task 12:
console.log("-----Task 12:");
// Filter unique array members

const unique = (arr) => {
  let result = [];

  for (let i=0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

// -----Task 13:
console.log("-----Task 13:");
// Create keyed object from array

let users2 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

const groupById = (arr) => {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

let usersById = groupById(users2);
console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
