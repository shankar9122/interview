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

