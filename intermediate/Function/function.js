function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}
sayMyName()

// rest operator
function calCartPrice(v1,v2, ...num){
    return num
}
console.log(calCartPrice(200,500,644,556,915,245));

//Passing object in function
const course ={
    coursename : "javascript",
    price:999,
}
function handleObject(obj){
    console.log(`${obj.coursename} at only ${obj.price}`);
}
handleObject(course);
/*  handleObject({
    coursename : "javascript",
    price:999,
})               can be directly placed object in function*/

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
/*  It is used to prevent Pollution done by global scope*/

// Named IIFE
(function database(){
    console.log("DB Connected One");
})(); // semicolon important


// Un-named  IIFE
((name)=>{
    console.log(`DB Connected Two ${name}`);
})("Ankit"); 