//rest parameter
// function abc(a,b,...c){
//     console.log(...c);
// }
// abc(1,2,3,4,5)
// function sum(...args){
//     let total =0;
//     for(let i of args){
//         total+=i;
//     }
//     return total
// }
// console.log(sum(1,2))
// function subtract(...args){
//     let flag=1;
//     for(let j of args){
//         flag-=j;
//     }
//     return flag
// }
// console.log(subtract(2,-1,8))
// function abc(a,b,...c){
//     console.log("the value of a is:",a);
//     console.log("the value of b is:",b);
//     console.log("the values of c are:",c)
//     console.log(c[0])
// }
// abc(1,"hello",true,false,undefined,null,[],{},/regex/,new Date())
//spread operator
// let a=[1,2,3]
// let b=[...a,4,5,6];
// console.log(b);
let obj = { name: 'John', loc: 'New York', center: 'Times Square' };

// Object destructuring
let { name, loc, center } = obj;

// Logging values
console.log(name);    // Output: John
console.log(loc);     // Output: New York
console.log(center);  // Output: Times Square

// let a = [1,2,3]
// let b =[...a,25,26,27]
// console.log(b);