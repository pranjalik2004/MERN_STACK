//

let arr=[5,3,8,1]

function filterRangeinplace(arr,a,b)
{
    for(let i=0;i<=arr.length;i++){
    let val=arr[i]
     if(val<=a||val>=b)
arr.splice(i,1)

        // a>=arr[i]
       //  b<=arr[i]
       // a==arr[i]
        //b==arr[i]
    

         
    }
   
    //return filtered
}


filterRangeinplace(arr,1,4)
console.log(arr)
