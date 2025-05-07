// function greet(name,callback){
//     console.log(`Hello ${name}`);
//     callback();
// }
// function sayHi(){
//     console.log(`Good Morning`);
// }
//  greet("Sohail", sayHi);

function step1(bread, cb) {
  console.log("Bread Baked");
  cb();
}
function step2(bread, cb) {
  setTimeout(() => {
    console.log("Stuffing done");
    cb();
  }, 2000);
}
function step3(bread, cb) {
  setTimeout(() => {
    console.log("Grilled done");
    cb();
  }, 2000);
}
function step4(bread, cb) {
  setTimeout(() => {
    console.log("Serving");
    cb();
  }, 2000);
}

step1("Bread", () => {
  step2("bread", () => {
    step3("bread", () => {
      step4("bread", () => {
        console.log("Ready, Dig in");
      });
    });
  });
});
