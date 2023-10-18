let arr=[5,2,1,-10,8]

function check(a,b)
{
    if (a==b) return 0
    if (a>b) return 1
    if (a<b) return -1
}
let c=arr.sort(check).reverse()
    console.log(c)


