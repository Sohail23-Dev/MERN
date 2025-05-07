// const arr3 = ['apple','cherry','banana', 'date', 'elderberry'];
// const [first, second, ...others]= arr3;
// console.log(first);
// console.log(others);


// const {
//   data2: {
//     name: { first, last },
//   },
// } = response2;
// console.log(first, last);


// const newarr = {...arr};
// newarr.name = 'sohail shaikh';
// // newarr.add.city = 'pune';
// const res = JSON.stringify(arr.add);
// // res.add.city = 'pune';
// const res2 = JSON.parse(res);
// console.log(newarr);
// console.log(res);
// console.log(res2);
// const arr = {
//     name: 'sohail',
//     age: 21,
//     add: {
//         city: 'mumbai',
//         state: 'maharashtra',
//         country: 'india'
//     }
// }

// // let res = structuredClone(arr);
// let res = JSON.parse(JSON.stringify(arr))
// res.name = "sohail shaikh";
// res.add.city = "pune";
// console.log(res);
// console.log(arr);

let response2 = {
  status: 200,
  header: "vikas",
  ip: "127.0.0.1",
  token: 1223455,
  data: {
    name: "vikas",
    age: 24,
    isMarried: false,
    salary: 2123344,
  },
  data2: {
    name: {
      first: "vikas",
      last: "thakur",
    },
    age: 24,
    isMarried: false,
    salary: 2123344,
  },
};

let arr = structuredClone(response2);
arr.data2.name.first = "Whoknows"
console.log(arr);
console.log(response2);

