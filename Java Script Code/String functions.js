//to upper case
let s1="hellow world"
let s2="HELLOW WORLD"

console.log(s1.toUpperCase())
console.log(s2.toLowerCase()) 

//Index Of And Last Index Of function
let x=s1.indexOf("e")
console.log(x)
x=s1.lastIndexOf("l")

//start with
console.log(s1.startsWith("h"))
console.log(s1.startsWith("hel"))
console.log(s1.startsWith("ello"))

//end with
console.log(s1.endsWith("d"))
console.log(s1.endsWith("ld"))
console.log(s1.endsWith("ello"))

//include
x=s1.includes("llo")
console.log(x)
x=s1.includes("hlo")

//slice
let a=s1.slice(2,8)
console.log(a)

//substring
a=s1.substring(2,8)
console.log(a)

//difference between slice and substring
a=s1.slice(-8,-3)
console.log(a)
a=s1.substring(-8,-3)
console.log(a)

//from code point and code point At functions
console.log(s1.codePointAt(0))
console.log(s1.codePointAt(1))
console.log(String.fromCodePoint(67))

