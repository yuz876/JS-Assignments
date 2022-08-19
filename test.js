// "use strict";
// let a=1;
// console.log(a);


// function bfsFlatten(arr) {
// // Implement here
//     let queue = [];
//     queue.push(arr);
    
//     let result = []
//     while (queue.length > 0) {
//         let currSubArr = queue.shift();
//         if (typeof currSubArr == "object"){
//             for (let i = 0; i < currSubArr.length; i++){
//                 if (typeof currSubArr[i] == "number"){
//                     result.push(currSubArr[i]);
//                 }else{
//                     queue.push(currSubArr[i]);
//                 }
//             }
//         }
//     }

//     console.log(result); // Expect [1 2 8 3 4 7 9 0 5 6]
// }


// function dfsFlatten(arr) {
//     // Implement here
//     function dfs(curr_subarr, result) {
//         for (let i = 0; i < curr_subarr.length; i++){
//             if (typeof curr_subarr[i] == "number"){
//                 result.push(curr_subarr[i]);
//             }else{
//                 dfs(curr_subarr[i], result)
//             }
//         }
//     }

//     let result = [];
//     dfs(arr, result);
//     return result;
// }

// const rawArr = [1, 2, [3, 4, [5, 6], 7], 8, [9, 0]];

// console.log("BFS:", bfsFlatten(rawArr));
// const b = [1, 2, 8, 3, 4, 7, 9, 0, 5, 6, 9, 9, 9];
// console.log(b);

// console.log("DFS:", dfsFlatten(rawArr));

// console.log({} === {})
// function clo(){
//     let n = 1;
//     return function() {

//         ++n;
//         return n;
//     }
// }
// console.log(clo()())
// console.log(clo()())
// console.log(clo()())


// // Shallow Copy
// // for array
// const arr = [4,5,6];
// const pointerArr = arr; 
// const newArr = [...arr]; // [4,5,6]
// arr[0] = 9;
// console.log(pointerArr); //【9，5，6】//soft COPY
// console.log(arr); //[9,5,6]
// console.log(newArr); //  [4,5,6] // DEEP COPY


// // FOR OBJECT
// const obj = {x:{y:1}}
// const newObj = {...obj}
// const dcObj = JSON.parse( JSON.stringify(obj) );
// obj.x.y = 2
// console.log('newObj: ', newObj) // 2 // SOFT COPY
// console.log("obj: ", obj)
// console.log("dc: ", dcObj); // 1 // DEEP COPY


//setTimeout(() => console.log(2),0)
//console.log(1)

// const one = false|| console.log(1)||console.log(2);
// console.log(one)







const obj = {
    name: "Michael"
};

function f() {
    console.log(this.name);
}
console.log(1);
f();
console.log(2);


Function.prototype.bind = function(context, ...args) {
    const thisFunc = this;

    const returnFunc = function() {
        thisFunc.apply(context, args);
        console.log('args:', args);
    }
    
    return returnFunc;
}
console.log(3);
f.apply(obj);// run function f immediately
console.log(4);
console.log(5);
const bindedF = f.bind(obj, "abc"); // bind doesn't run the function f
console.log(6);
bindedF();// here run the binded function f
console.log(7);
//no difference than -> f.apply(obj, [])

    
    
const func = (a, b, c) => a+b+c;
const boundFunc = func.bind(null, 'foo');
console.log(boundFunc('bb', 'cc', "dd", "ee")); // foobb