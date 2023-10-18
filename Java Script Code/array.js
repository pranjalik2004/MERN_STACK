//creating a array......
//by using squre brackets
let arr1=[10,20,30,"abc",true]
//by using new keyword
let arr2=new Array(10,20,30,"xyz",false)

//accessing array element.......
//by using squre brackets[]
console.log(arr1[0])
console.log(arr1[1])
//by using At function
console.log(arr1.at(0))
console.log(arr1.at(1))
console.log(arr1.at(-1))
//by using for loop
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}
//by using for of loop
for (const i of arr1) {
    console.log(i)
}
//by using for each loop
arr1.forEach((n)=>console.log(n)) 



