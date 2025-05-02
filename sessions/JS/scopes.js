// scopes 
// 1. Global Scope
// 2. Local Scope
// 3. Block Scope
// 4. Function Scope
// 5. Lexical Environment -----> Scope Chainging


let d = 330; // Global Scope

function test() {
    //function Scope
    let b = 20; // Local Scope
    let a = 33;
    console.log(b); // 20
    {
        // Block Scope
        let c = 30; // Local Scope
        console.log(c); // 30
        console.log(b); // 20
        console.log(a); // 10
        console.log(d); // 330  ----> Lexical Environment
    }
}

test();