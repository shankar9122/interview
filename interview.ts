// Level 1 · Question 1: Find the second-largest distinct number

// Problem statement

// Write a JavaScript function that returns the second-largest distinct number from an array of numbers.

// Example:

const numbers = [12, 35, 1, 10, 34, 35];

function secondLargest(data){
    if(data.length === 0) return null;
    let largest=data[0];
    let largest2nd= null;

    for(let i=0; i<data.length; i++){
        if(largest< data[i]){
            largest2nd=largest;
            largest=data[i];
        }else if(data[i] >largest2nd && data[i] !== largest){
            largest2nd = data[i]
        }
    }
    return largest2nd;
}

console.log(secondLargest(numbers));
// Expected output: 34

// secondLargest([2, 2, 1]);       // 1
// secondLargest([3, 1, 3, 2]);    // 2
// secondLargest([-10, -5, -2, -8]); // -5
// secondLargest([5, 5, 5]);       // null
// secondLargest([]);              // null



// Level 1 · Question 2: Group objects by a property
// Problem statement

// Write a function groupBy that groups an array of objects based on a specified property.

// Requirements

// The function accepts an array and a property name.

// Objects with the same property value belong in the same group.

// Each original object must be preserved.

// The solution should work with any property name, not just department.

// An empty input array should return {}.

// Aim for O(n) time complexity.

// Input
const employees = [
  { name: "Amit", department: "Engineering" },
  { name: "Priya", department: "HR" },
  { name: "Rahul", department: "Engineering" },
  { name: "Neha", department: "HR" },
  { name: "Vikram", department: "Design" }
];

function groupBy(items, key) {
  const groups = new Map();

  for (const item of items) {
    if (!Object.hasOwn(item, key)) continue;

    const groupKey = item[key];
    if (!groups.has(groupKey)) groups.set(groupKey, []);
    groups.get(groupKey).push(item);
  }

  return Object.fromEntries(groups);   // returns a plain object
}

console.log(groupBy(employees, "department"));


groupBy(employees, "department");

// Expected output
// {
//   Engineering: [
//     { name: "Amit", department: "Engineering" },
//     { name: "Rahul", department: "Engineering" }
//   ],
//   HR: [
//     { name: "Priya", department: "HR" },
//     { name: "Neha", department: "HR" }
//   ],
//   Design: [
//     { name: "Vikram", department: "Design" }
//   ]
// }


// Level 1 — Question 3: Flatten a nested array

// Write a function flattenArray(arr) that flattens a nested array of any depth without using Array.flat() or Array.flatMap().

// Requirements

// Support arbitrary nesting depth.

// Preserve the original element order.

// Do not mutate the input array.

// Handle an empty array ([]).

// Aim for O(n) time, where n is the total number of elements, including nested elements.

// Example
// ** Input:  [1, [2, [3, 4]], 5]
// ** Output: [1, 2, 3, 4, 5]

// Another example:
// Input:  [[1, 2], [], [3, [4]]]
// Output: [1, 2, 3, 4]

function flattenArray(data) {
  const result = [];

  function helper(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        helper(item);
      } else {
        result.push(item);
      }
    }
  }

  helper(data);
  return result;
}

console.log(flattenArray([1, [2, [3, 4, [7, 8]]], [], 5]));
// [1, 2, 3, 4, 7, 8, 5]



// Level 1 — Question 4: Remove duplicates


// Write a function uniqueArray(arr) that returns a new array containing only unique values, preserving their first-occurrence order.

// Requirements:

// Don't mutate the input.

// Preserve first-occurrence order.

// Aim for O(n) time.

// Consider how JavaScript handles equality, including NaN.

// Example:

// Input:  [1, 2, 2, 3, 1, 4, 3]
// Output: [1, 2, 3, 4]

function uniqueArray(data) {
    let hashData = new Set();
    let result = [];

    for (let i = 0; i < data.length; i++) {
        if (!hashData.has(data[i])) {
            hashData.add(data[i]);
            result.push(data[i]);
        }
    }

    return result;
}

// Additional examples:

uniqueArray(["a", "b", "a", "c"])
// ["a", "b", "c"]

uniqueArray([])
// []

uniqueArray([5, 5, 5])
// [5]


// Level 1 — Question 5: Count occurrences

// Write a function countOccurrences(arr) that returns an object containing the frequency of each value.

// Example:

// Input:  ["apple", "banana", "apple", "orange", "banana", "apple"]

// Output: {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }

// Requirements:

// Aim for O(n) average time complexity.

// Don't mutate the input.

// Handle an empty array by returning {}.

// Consider special object keys such as "constructor" and "toString".

function countOccurrences(data) {
    let result = new Map();

    for (const item of data) {
        if (result.has(item)) {
            result.set(item, result.get(item) + 1);
        } else {
            result.set(item, 1);
        }
    }

    return Object.fromEntries(result);
}



// Level 1 — Question 6: Find the first non-repeating character

// Write a function firstUniqueChar(str) that returns the first character that occurs exactly once. Return null if no such character exists.

// Examples:

function firstUniqueChar(str) {
  const counts = new Map();

  for (const char of str) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  for (const [char, count] of counts) {
    if (count === 1) return char;
  }

  return null;
}

console.log(firstUniqueChar("aabbcdd"));  // "c"
console.log(firstUniqueChar("aabb"));     // null
console.log(firstUniqueChar(""));         // null
// Requirements:

// Aim for O(n) time.

// Preserve the original character order.

// Consider case sensitivity: "A" and "a" are different characters.

// For this question, treat the string as a sequence of UTF-16 code units, as JavaScript string indexing does.



// Level 1 — Question 7: Two Sum

// Ek function twoSum(nums, target) likho jo do distinct indices return kare jinke elements ka sum target ke equal ho.

// Requirements:

// O(n) average time complexity aim karo.

// Same array element ko do baar use nahi karna.

// Assume karo exactly one valid answer exists.

// Original array modify nahi karna.

function twoSum(nums, target) {
  const seen = new Map();   // value -> index

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (seen.has(diff)) {
      return [seen.get(diff), i];
    }

    seen.set(nums[i], i);
  }

  return [];   // no pair found
}

console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]
console.log(twoSum([1, 2], 10));         // []


// Level 1 — Question 8: Move Zeros to the End

// Ek function moveZeros(arr) likho jo saare zeros ko array ke end mein move kare, while preserving the relative order of non-zero elements.

// solution-1
function moveZeros(arr){

    let i=0;
    let write=0;

    while(i< arr.length){
        if(arr[i] !==0){
            let temp= arr[write];
            arr[write] = arr[i];
            arr[i] = temp;
            write++
        }
        i++;
    }
    
    return arr;
}
// solution-2
function moveZeros(arr) {
  let write = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      if (i !== write) {
        [arr[write], arr[i]] = [arr[i], arr[write]];
      }
      write++;
    }
  }

  return arr;
}

// Examples:

moveZeros([0, 1, 0, 3, 12]);
// [1, 3, 12, 0, 0]

moveZeros([0, 0, 1]);
// [1, 0, 0]

moveZeros([1, 2, 3]);
// [1, 2, 3]

// Requirements:

// Original non-zero elements ka order preserve hona chahiye.

// Aim for O(n) time.

// Try to use O(1) auxiliary space if you choose an in-place solution.

// Decide whether your implementation modifies the original array or returns a new array, and be consistent.


// Level 1 — Question 9: Find the missing number

// An array contains distinct numbers from 0 to n, with exactly one number missing. Find the missing number.

function missingNumber(arr) {
  const n = arr.length;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (const num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

// Examples:

missingNumber([3, 0, 1]);    // 2
missingNumber([0, 1]);       // 2
missingNumber([9,6,4,2,3,5,7,0,1]); // 8
missingNumber([0]);          // 1

// Requirements:

// The array contains distinct integers.

// Values range from 0 to n, inclusive, with one missing.

// Aim for O(n) time and O(1) auxiliary space.

// Don't sort the array.



// Level 1 — Question 10: Valid Anagram

// Bhai, ab strings aur frequency counting combine karte hain.

// Write a function isAnagram(s, t) that returns true if both strings contain the same characters with the same frequencies; otherwise, return false.

// Examples:

isAnagram("listen", "silent"); // true
isAnagram("hello", "bello");   // false
isAnagram("anagram", "nagaram"); // true
isAnagram("rat", "car");       // false
isAnagram("", "");             // true

// Requirements:

// Assume inputs contain lowercase English letters (a–z).

// Character order doesn't matter.

// Character frequency must match exactly.

// Aim for O(n) time.

// Try to achieve O(1) auxiliary space using the fixed character set of 26 letters.