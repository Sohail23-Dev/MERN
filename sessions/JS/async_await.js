// const obj1 = {
//   fname: "Sohail",
//   city: "Mumbai",
//   age: 22,
// };

// const step1 = (cb) => {
//   setTimeout(() => {
//     console.log(`Hello ${obj1.fname}`);
//     cb();
//   }, 2000);
// };
// const step2 = (cb) => {
//   setTimeout(() => {
//     console.log(`Are you from ${obj1.city}`);
//     cb();
//   },1000);
// };
// const step3 = (cb) => {
//   setTimeout(() => {
//     console.log(`and your age is ${obj1.age}`);
//     cb();
//   },500);
// };
// const step4 = (cb) => {
//   setTimeout(() => {
//     console.log("This is Step Four...");
//     cb();
//   },2000);
// };

// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(()=>{
//         console.log("Done")
//       });
//     });
//   });
// });

// async function fetchData() {
//     try {
//         const response = await fetch("https://dummyjson.com/products");

//         if(!response.ok){
//             throw new Error("404 Link Not Found");
//         }

//         const data = await response.json();
//         console.log(data);
//        // return data;
//     } catch (error) {
//         console.log(error);
//     }
// }
// console.log(fetchData());
// fetchData();

async function beeceptor() {
  try {
    const response = await fetch("https://fake-json-api.mock.beeceptor.com/users");
    if (!response.ok) {
      throw new Error("Response not received");
    }

    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}
beeceptor();
