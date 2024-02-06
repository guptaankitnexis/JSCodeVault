// THIS keyboard
const course ={
    coursename : "javascript",
    price:999,
    welMessage:function(){
        console.log(`${this.coursename} , welcoming you `);
        console.log(this);// it talks about context
    }
}
// course.welMessage()
// course.coursename="java"
// course.welMessage()

function one(){
    let username ="NNN"
    console.log(this);          // => gives refrence
    console.log(this.username); //=>undefined
}
// one()
/*  Another Method
const fruit= function(){
    let fruit1="Apple"
    console.log(this);          // => gives refrence
    console.log(this.fruit1);   //=>undefined
}
fruit()
*/

console.log(this)       //=> {}
// ARROW FUNCTION(in arrow function, this keyboard gives empty string reference)
const fruit=()=>{
    let fruit1="Apple"
    console.log(this);          // => {}  just like console.log(this)
    console.log(this.fruit1);   //=>undefined
}
// fruit()

// EXPLICET RETURN (return keyboard is used)
const add = (num1,num2)=>{
    return num1+num2
}

// OR

// IMPLICET RETURN (return keyboard is not used)
const add0 = (num1,num2)=> num1+num2 // both are same
const add3 = (num1,num2)=> (num1+num2)

console.log(add3(1,3))

// to return object we have to wrap it in parenthesis()
const add4 = (num1,num2)=> ({username:"Ankit"})
console.log(add4(1,3))