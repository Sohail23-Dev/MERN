let arr = [1,2,16,64,64,45,5,3,432,46,4];

// arr.filter((Element)=>{
//     return Element %2 == 0;
// }).map((Element)=>{
//     return Element * 2;
// })
console.log(arr.filter((Element)=>{
    return Element %2 == 0;
}).map((Element)=>{
    return Element * Element;
}))