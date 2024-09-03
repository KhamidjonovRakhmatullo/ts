"use strict";
//// Typescript => functions, signature, functions, functions overloads
////declaration function
// function pow(x, y){
//     return x ** y
// }
function pow(x, y) {
    return x ** y;
}
function powString(x, y) {
    return `${x} ** ${y} = ${x ** y}`;
}
console.log(powString(2, 3));
////arrow function
// const add = (x, y) => x + y
const add = (x, y) => x + y;
////void function
function log(x) {
    console.log(x);
}
////never function
function someFunc(str) {
    throw new Error(str);
}
////signature function
let c;
// c = function(a: number, b: number): number{
//     return a + b
// }  x
c = function (a, b) {
    return `${b} : ${a}`;
};
function overloadFunc(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} -- ${y}`;
    }
}
console.log(overloadFunc("Javob", 3));
//# sourceMappingURL=index.js.map