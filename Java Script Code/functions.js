//function defination
function sayhello() {
console.log("hello world")
console.log("this is my first function")
}
//function calling
sayhello()


//function with arguments.......

//function defination
function show(fname){
console.log("hellow" +fname)
}
function add(a,b){
    let z=a+b
    console.log("additon is:"+z)
}
show("pranjali")
add(10,25)
 

//returning value from the function....

//function defination
 function getmsg(fname){
    let msg="hello"+fname
    return msg
 }

 function area(r){
    let a=3.14*r*r
    return a
 }

 //returning values
 let s1=getmsg("pranjali")
 console.log(s1)
 let x=area(1.8)
console.log("area is" +x)


//function Expression 
 function desp(){
    console.log("Hello world")
 }
 let add1=function(x,y){
let z=x+y
return z
 }
 desp()
 let a=add1(100,200)
 console.log("Addition is",a)