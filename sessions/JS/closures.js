function count1(){
    let a = 1;
    function count2(){
        let b = a +1;
         function count3(){
            let c = b+ 1 + a;
            console.log(c);
         }
         count3();
    }
    count2();
}
count1();