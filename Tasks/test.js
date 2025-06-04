// const obj1 = {
//     name: "Sohail"
// }
// const obj2 = obj1;
// obj2.name = "Kuch bhi"
// console.log(obj1.name)
// obj2.age= 24
// console.log(obj2)
// console.log(a);
// var a =10;
// let str = "hello world"
// console.log(str.substring(-3))
// console.log(typeof undefined === typeof null)
// let a = 10;
// (function(){
//     console.log(a);
//     let a = 20;
// })();
// function outer(){
//     let x=5;
//     function inner(){
//         console.log(x);
//         let x = 10;
//         console.log(x);
//     }
//     inner();
// }
// outer();
// let x = 5;
// {
//     let x =10;
//     console.log(x);
// }
// console.log(x)

// shreekar 45
// sohail 35
// raushan 30
// mayank 30
// rishab 25
//manish 20
// const calc = (a,b)=>{
//     if(a > 0 && b > 0){
//         return a*b;
//     }else{
//         return "inv"
//     }
// }
// console.log(calc(5,7))
// console.log(calc(0,10))
// console.log(calc(-3,4))
// console.log(calc("2",6))
// let sdv ;
// let str = "Hello World"
// console.log(str.slice(-5));
// console.log(str.substring(-5));
// console.log(str.substr(-5));
// let name = "Ram"
// function gr (){
//    console.log("Hello," + name + "!");
//    let name = "shyaam"
// }
// gr();
// console.log(gr("geek"))
// console.log(gr())
// console.log(1 + "2"+ "2")
// console.log(1 + + "2"+ "2")
// console.log(1 + -"1"+ "2")
// console.log(+"1" + "1"+ "2")
// console.log("A" - "B"+ "2")
// console.log("A" - "B"+ 2)
// const str = "123456789"
// let  i = 0;
// const ls1 = [];
// const ls2 = [];

// for(i=0;i<str.length /2;i++)
//     ls1.push(str[i])
// for(i= i-1;i<str.length /2;i++)
//         ls2.push(str[i]);
// while(ls1.length)
//             ls2.push(ls1.pop());

// while(ls2.length)
//             console.log(ls2.pop())

// console.log(2 + "2" - 1)
// var str = parseInt("666abc");
// console.log(str)
// if(true){
//     let myVar = 2;
// }
// console.log(myVar)
// const arr = [10,20,30,40,50,60,70,80,90,100,110,120];
// const altarr = arr.filter(num => num%2===0).reduce((acc,cur)=>acc+cur,0);
// console.log(altarr)

// var x =5;
// console.log(x);
// setTimeout(()=>{
//     x++;
//     console.log(x);
// }, 5000)
// setTimeout(()=>{
//     x=0
// }, 5000)
// console.log(x)
// var sum = 0;
// const fun = ()=>{
//     console.log(sum);
//     var summ = 100;
// }
// fun()
// var arr = [2,4,6,8,10]
// var val = Math.max.apply(null,arr);
// document.writeln(val)
// var a =1;
// function b(){
//     a =10; return;
//     function a(){}
// }
// b()
// console.log(a)
// const num = [1,2,3,4,5]
// const res = num.filter(num => num %2===0).map(num=>num*2).reduce((acc,curr)=> acc+curr,0);
// console.log(res)
// async function name1() {
//     return await Promise.resolve("I made it");

// }

// const data = name1();
// console.log(data)
// const dtr = document.getElementById("hghg");
// class Solution {
//     reverseString(s) {
//         return s.split('').reverse().join('');
//     }
// }

// // Example Usage:
// let solution = new Solution();
// console.log(solution.reverseString("Hello")); // Output: "olleH"
// console.log(solution.reverseString("GeeksForGeeks")); // Output: "skeeGroFskeeG"

const alpha = "abcdefghijklmnopqrstuvwxyz";
let start = alpha.indexOf(c1);
let newArr = [];
for (let i = start; i <= alpha.indexOf(c2); i++) {
  newArr.push(alpha[i]);
}
const data = newArr.toString().replace(/,/g, "").split("").join(" ");
return data;

// const check = ()=>{
//     console.log(x);
//     if(true){
//         var x = 20;
//     }
// }
// check();
