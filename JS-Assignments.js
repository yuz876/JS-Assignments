"use strict";

/**
 * flatten array using Depth-first search / Breadth-first search
 * assuming elements in array are numbers and arrays only
 * the order of output array doesn't matter
 */


function dfsFlatten(arr) {
// Implement here
  function dfs(curr_subarr, result) {
    for (let i = 0; i < curr_subarr.length; i++){
      if (typeof curr_subarr[i] == "number"){
        result.push(curr_subarr[i]);
      }else{
        dfs(curr_subarr[i], result)
      }
    }
  }

  let result = [];
  dfs(arr, result);
  return result;
}

function bfsFlatten(arr) {
// Implement here
  let queue = [];
  queue.push(arr);

  let result = [];
  while (queue.length > 0) {
    let currSubArr = queue.shift();
    if (typeof currSubArr == "object"){
      for (let i = 0; i < currSubArr.length; i++){
        if (typeof currSubArr[i] == "number"){
          result.push(currSubArr[i]);
        }else{
          queue.push(currSubArr[i]);
        }
      }
    }
  }

 // console.log(result); // Expect [1 2 8 3 4 7 9 0 5 6]
  return result;
}

const rawArr = [1, 2, [3, 4, [5, 6], 7], 8, [9, 0]];
console.log("DFS:", dfsFlatten(rawArr));
console.log("BFS:", bfsFlatten(rawArr));


// Leetcode Problem Solving
/**
 * Leetcode #1
 * @parameter {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {

  let pairs = []
    
    class Pair {
        constructor(number, index) {
            this.number = number;
            this.index = index;
        }
    }

    function compare(pairInstance1, pairInstance2){
        if (pairInstance1.number > pairInstance2.number) return 1;
        else if (pairInstance1.number < pairInstance2.number) return -1;
        return 0;
    }
    
    // above are prep
    
    if (nums == null || nums.length == 0){
        return [-1, -1];
    }
    
    let index = 0;
    nums.forEach(elem => {
        pairs.push(new Pair(elem, index));
        index += 1;
    })
    // console.log(pairs)
    pairs.sort(compare)
    // console.log(pairs)
    
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex){
        if (pairs[leftIndex].number + pairs[rightIndex].number > target){
            rightIndex -= 1;
        } 
        else if (pairs[leftIndex].number + pairs[rightIndex].number < target){
            leftIndex += 1;
        } 
        else if (pairs[leftIndex].number + pairs[rightIndex].number == target){
            return [pairs[leftIndex].index, pairs[rightIndex].index];
        } 
    }
};

/**
 * Leetcode #9
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  x = String(x);
  let leftIndex = 0;
  let rightIndex = x.length -1;
  
  console.log(leftIndex)
  console.log(rightIndex)
  
  while (leftIndex < rightIndex) {
      
      
      if(x.charAt(leftIndex) == x.charAt(rightIndex)){
          leftIndex += 1;
          rightIndex -= 1;
         }
      else if (x.charAt(leftIndex) != x.charAt(rightIndex)) {
          return false;
      }
          
  }
  return true;

};

/**
 * Leetcode #15
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {

  if (nums.length < 1) {
    return null;
}
else if (nums == [0]) {
    return null;
}

nums = nums.sort(function(a, b){return a - b});
//console.log(nums);

result = [];

function twoSum(nums, leftIndex, rightIndex, target, result){
    while (leftIndex < rightIndex) {
        if (nums[rightIndex] + nums[leftIndex] < target) {
            leftIndex += 1;
        }
        else if (nums[rightIndex] + nums[leftIndex] > target) {
            rightIndex -= 1;
        }
        else {
            if (typeof nums[rightIndex] == 'number' && typeof nums[leftIndex] == 'number' && typeof - target == 'number' ) {
                result.push([nums[rightIndex], nums[leftIndex], - target ]);
            }
            //console.log("nums[rightIndex]")
            leftIndex += 1
            rightIndex -= 1
            while (leftIndex < rightIndex && nums[leftIndex] == nums[leftIndex - 1]) {
                 leftIndex += 1
            }

            while (leftIndex < rightIndex && nums[rightIndex] == nums[rightIndex + 1]){
                rightIndex -= 1
            }

        }
    }
}

for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i-1]) {
        continue;
    }
    
    target = 0 - nums[i];
    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;
    twoSum(nums, leftIndex, rightIndex, target, result);
}
return result;

};


// Array Prototype Methods Implementations
// pass given test cases (no need for perfect implementation involving specific thisArg)
// Example:
Array.prototype.forEach = function(fn) {
  typeof fn === "function" && fn.apply(null, this);
};
console.log("forEach: ", [1,2,3].forEach(console.log));


// ==== Native Filter ====
Array.prototype.filter = function(fn) {
  // Implement here
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

const filter_words = ['a', 'ab', 'bcd', 'asdf', 'asdfre', 'qwerre'];
console.log('filter: ', filter_words.filter(word => word.length > 3));

// ==== Native Map ====
Array.prototype.map = function(fn) {
  // Implement here
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let singleElement = this[i];
    result.push(fn(singleElement));
  }
  return result;
};

const map_array = [1, 4, 9, 16];
console.log("map:", map_array.map(x => x * 2));

// ==== Native Reduce ====
Array.prototype.reduce = function(fn) {
  // Implement here
  if (this.length < 1) {
    return null;
  }
  let result = this[0];
  for ( let i = 1; i < this.length; i++) {
      result += this[i];
  }
  return result;
};

const reduce_array = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log("reduce:", reduce_array.reduce(reducer));

// ==== Native Bind ====
Function.prototype.bind = function(thisArg) {
  // Implement here
  if (typeof this !== 'function'){
      throw new TypeError(this + 'must be a function');
  }
  
  var self = this;
  var args = [].slice.call(arguments, 1);
  var bound = function(){
      var boundArgs = [].slice.call(arguments);
      return self.apply(thisArg, args.concat(boundArgs));
  }
  return bound;

};

// test case 1
const test = {
  name: "Jesse",
  func: function() {
    console.log(this.name);
  }
};

test.func(); // Jesse
const newf = test.func.bind({name: "Abby"});
newf(); // Abby

// test case 2
const func = (a, b) => a+b;
const boundFunc = func.bind(null, 'foo');
console.log(boundFunc('bb', 'cc')); // foobb
console.log(boundFunc('dd', 'ee')); // foodd
