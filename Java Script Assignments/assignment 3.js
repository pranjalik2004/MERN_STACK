let str1="abc,xyz"


let arr=str1.split(',')

console.log(arr[1].substring(0,2)+arr[0].at(-1)+arr[0].substring(0,2)+arr[1].at(-1))

