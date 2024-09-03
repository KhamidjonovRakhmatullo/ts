//// Typescript => functions, signature, functions, functions overloads


////declaration function

// function pow(x, y){
//     return x ** y
// }
function pow(x : number, y: number) :number{
    return x ** y
}
function powString(x : number, y: number) :string{
    return `${x} ** ${y} = ${x**y}`
}
console.log(powString(2, 3));



////arrow function

// const add = (x, y) => x + y
const add = (x : number, y: number): number => x + y  

////void function
function log( x: number): void {
    console.log(x)
}

////never function
function someFunc(str: string): never{
    throw new Error(str)
}

////signature function
let c: (x: number, y: string)=> string

// c = function(a: number, b: number): number{
//     return a + b
// }  x

c = function(a: number, b: string): string{
    return `${b} : ${a}`
}
// console.log(c(2, `Jabob`))

////overload function

function overloadFunc(x: number, y: number): number
function overloadFunc(x: string, y: number): string
function overloadFunc(x: any, y: any): any{
    if(typeof x === "number" && typeof y === "number"){
        return x + y
    }else{
        return `${x} -- ${y}`
    }
}
console.log(overloadFunc("Javob", 3))


