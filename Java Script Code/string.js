//declaring string
let s1="this is string in double queto"
let s2='this is string in single queto'
let s3=`this is string in backticks`

console.log(s1)
console.log(s2)
console.log(s3)

//string interpolation 
let fname='pk'
let age=20
let msg1="hello ${fname} and yours age is ${age}"
let msg2='hello ${fname} and youe age is ${age}'
console.log(msg1)
console.log(msg2)

//to calculate length of function
let str1="hello world"
let x=str1.length
console.log(x)

//accessing string charecters
//by indexing
console.log(str1[0])
console.log(str1[1])
console.log(str1[x-1])
//by using AT function
console.log(str1.at(0))
console.log(str1.at(1))
console.log(str1.at(x-1)) 
//difference between indexing and at function
console.log(str1[-1])
console.log(str1.at(-1))
//for in loop 
for (const i in str1) {       //we can also use let 
    console.log(i)
}
//for off loop
for (const i of str1) {      //we can also use let 
    console.log(i)
}