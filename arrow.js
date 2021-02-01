// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// eta hocce uporer gular shorter version arrow dia kora hoi tai arrow function bole
const doubleIt = num => num * 2;
// jodi eka dik parameter thakle
const add = (x, y) => x + y;
// jodi kono parameter na thake
const give5 = () => 5;
// jodi multiline arrow function hoi
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(50, 70);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);