let obj1 = {
    fname: 'sohail',
    lname: 'shaikh'
};
let obj2 = {
    fname : 'Nick',
    lname : 'frank'
}
function printName(city, scity){
    console.log(this.fname + " "+ this.lname + " from " + city , scity)
}

//call methods
printName.call(obj1, "mummbai", "Noida")

//apply methods
printName.apply(obj2, ["onepiece", "egghead"]);

//bind methods
let binding = printName.bind(obj1, "mumbai", "noida")
binding();
