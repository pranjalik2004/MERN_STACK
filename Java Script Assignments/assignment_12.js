
function truncate(str,maxlength){
    if (str.length>maxlength) 
    {
        console.log(str.slice(0,maxlength)+".....")
    
    }
    else
    console.log(str)
}
truncate("what i'd like to tell on this topic",20)

