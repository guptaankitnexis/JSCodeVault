let a =11
if(true){
    let a =2
}
console.log(a);  // 10

// HOSTING
console.log(add1(9)); //=> can be called before definition of function
function add1(num){
    return num+1;
}

//=> but not in this case 
// console.log(add2(5));
const add2= function(num){
    return num+2;
}

// Function in function
function sayHi(call){
    const name = call;
    function say(){
        console.log(`Hii ${name}`)
    }
    say()
}
sayHi("Ankit")
