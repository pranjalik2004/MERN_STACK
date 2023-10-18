//push operation(adding items to array)
let arr1=[10,20,30,40]
console.log(arr1)
arr1.push(50)
console.log(arr1)

//pop operation (removing items from array)
console.log(arr1)
arr1.pop()
console.log(arr1)

//shift and unshift (remove and add item at the beginning of array)
console.log(arr1)
arr1.unshift(60)
arr1.unshift(70)
console.log(arr1)
arr1.shift()
console.log(arr1)

//slice 
console.log(arr1)
arr2=arr1.slice(0,4)
console.log(arr2)

//concat
console.log(arr1)
arr3=arr2.concat(arr1)
console.log(arr3)

//find function
let arr=[{id:20,name:"abc"},
    {id:25,name:"xyz"},
    {id:20,name:"pqr"},
    {id:20,name:"efg"}]

let obj=arr.find((item)=>item.id==20)
console.log(obj)












