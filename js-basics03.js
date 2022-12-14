//function

let x = 10+50
let y = 10+40

function addNumbers(x,y) {
    return x+y
 }

    function multiplyNumbers(x,y) {
        return x*y
     }

console.log(multiplyNumbers(2,45))
console.log(addNumbers(10,40))
console.log(x)
console.log(y)

function giveMeSquare(a) {
    return a * a
}
console.log(giveMeSquare(25))

function findBiggest(a,b) {
    if(a>b) return a
    else return b
}
console.log(findBiggest(100,200))

function areaOfTriangle(b,h) {
    return 0.5*b*h
}
console.log(areaOfTriangle(5,6))

function isOdd(a) {

    return a % 2 ==1
}
console.log(isOdd(9))

const countries = ['India' , 'USA','Mexico','UK' ,'France']
console.log(countries)
countries.push('Pakistan')
console.log(countries)

countries.unshift('Canada')
console.log(countries)

function findLengthOfArray(arr) 
{
    return arr.length
}
const arr = ['India','USA','Mexico','UK','France']

console.log(findLengthOfArray(arr))
 






