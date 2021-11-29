const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


// TINY ARRAY
perf.start();                     
doublerAppend(tinyArray);
let tinyResultsAppend = perf.stop();

perf.start();
doublerInsert(tinyArray);
let tinyResultsInsert = perf.stop();


// SMALL ARRAY
perf.start();                     
doublerAppend(smallArray);
let smallResultsAppend = perf.stop();

perf.start();
doublerInsert(smallArray);
let smallResultsInsert = perf.stop();


// MEDIUM ARRAY
perf.start();                     
doublerAppend(mediumArray);
let mediumResultsAppend = perf.stop();

perf.start();
doublerInsert(mediumArray);
let mediumResultsInsert = perf.stop();


// LARGE ARRAY
perf.start();                     
doublerAppend(largeArray);
let largeResultsAppend = perf.stop();

perf.start();
doublerInsert(largeArray);
let largeResultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

console.log('Results for the tinyArray');
console.log("insert", tinyResultsAppend.preciseWords);
console.log("append", tinyResultsAppend.preciseWords);

console.log('Results for the smallArray');
console.log("insert", smallResultsInsert.preciseWords);
console.log("append", smallResultsAppend.preciseWords);

console.log('Results for the mediumArray');
console.log("insert", mediumResultsInsert.preciseWords);
console.log("append", mediumResultsAppend.preciseWords);

console.log('Results for the largeArray');
console.log("insert", largeResultsInsert.preciseWords);
console.log("append", largeResultsAppend.preciseWords);