

let a="abc,xyz"

let arr=a.split(',')
console.log(arr)
let l=a.length
console.log(l)
console.log(arr[1].substring(0,2)+arr[0].at(-1)+arr[0].substring(0,2)+arr[1].at(-1))

