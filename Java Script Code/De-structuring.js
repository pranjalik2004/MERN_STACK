/* De-structuring assignment is a special syntax 
that allow us to unpack array or object into bunch of variables  */


//normal
let arr=[100,'abc']
let id=arr[0]
let fname=arr[1]
console.log(id)
console.log(fname)

//de-structuring 
let arr1=[200,'xyz']
let [id1,name1]=arr1
console.log(id)
console.log(name1)

let arr2=[100,'pqr','address']
let [id2,name2]=arr2
console.log(id)
console.log(name2)


//de-structuring in function
function show([id,namee,adr])
{
    console.log(id)
    console.log(namee)
    console.log(adr)
} 

let arrr=[50,"pranjali","adress"]
show(arrr)


//De-structuring of a object
/* to de-structure object we use curley brackets....
while destrucuring object we must use same name as key name*/

function show({id5,name,address}){
console.log(id5)
console.log(name)
console.log(address)
}

let obj={id5:10,name:"xyz",address:"pqr"}
show(obj)


//REST operator with DE-STRUCTURING
//array
let ar=[100,"abc","pqr",1234]
const[a,b,...c]=ar
console.log(a)
console.log(b)
console.log(c)

