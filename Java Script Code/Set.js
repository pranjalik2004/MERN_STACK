let s1=new Set([10,20,30,40,10,20])
console.log(s1)

//Add item
s1.add(50)
console.log(s1)

//delete
s1.delete(50)
s1.delete(30)
console.log(s1)

//has
console.log(s1.has(90))
console.log(s1.has(20))

//size
console.log(s1.size)

//clear
s1.clear()
console.log(s1)
