


//   console.log(fetchData)


// promises methods 
// const promise1 = Promise.resolve("First"); 
// const promise2 = new Promise(resolve => setTimeout(() => {
//     resolve("second");
// }, 1000))
// const promise3 = Promise.reject("Third"); 

// Promise.all([promise1,promise2,promise3]).then((values)=>{
//     console.log(values);
// }).catch((err)=>{
//     console.log(err)
// })

// const promise1 = new Promise(resolve => setTimeout(()=>{
//     resolve("first")
// },3000))

// const promise2 = new Promise(resolve => setTimeout(()=>{
//     resolve("Second")
// },2000))
// Promise.race([promise1,promise2]).then((values)=>{
//     console.log(values);
// }).catch((err)=>{
//     console.log(err)
// })

// const promise1 = new Promise(resolve => setTimeout(()=>{
//     resolve("first")
// },3000))

// const promise2 = new Promise(resolve => setTimeout(()=>{
//     resolve("Second")
// },2000))
// Promise.allSettled([promise1,promise2]).then((values)=>{
//     console.log(values);
// }).catch((err)=>{
//     console.log(err)
// }

// const fetchData = new Promise((resolve, reject) => {
  
//   return  setTimeout(() => {
//     resolve("Sohail Shaikh, Age: 21, isMarried: false");
//   }, 2000);
// });


// fetchData
//   .then((res) => {
//     setTimeout(() => {
//       console.log("Data is being Fetched");
//     }, 0);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Data is Received");
//     }, 2000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Data is being Processed");
//     }, 3000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log(`Data is this `);
//     }, 4000);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("task Completed");
//   });
const automailer = new Promise((resolve, reject)=>{
    return  setTimeout(() => {
        resolve("The mail has been sent");
      }, 1000);
});

automailer.then(()=>{
    prompt("Enter your mail id")
   console.log("Sender mail asked");
}).then(()=>{
    prompt("Enter the sender mail")
    console.log("Receiver mail id asked");
}).then(()=>{
    prompt("Enter the Subject of your mail")
    console.log("Subject of your mail Asked");
}).then(()=>{
    prompt("Enter your Mail Content")
    console.log("Mail Content asked");
}).catch((err)=>{
    console.log(err);
}).finally(()=>{

    console.log("Return mail that mail is sent or not");
})