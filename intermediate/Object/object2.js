// new way to declare object
const tinderUser = new Object()
// const tinderUser ={}       =>same

tinderUser.id= "123abc"
tinderUser.name= "Sammy"
tinderUser.isLoggedIn= false
console.log(tinderUser);

// Nested Object
const regularUser={
    fullName:{
        UserFullName:{
            firstname:"Ankit",
            lastname:"Gupta"
        }
    }
}

// Accessing nested object
console.log(regularUser.fullName?.UserFullName.firstname);
// optional chaining ? 
// used in protection when fullname does not exist

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// console.log(obj3);
const obj4 =Object.assign({},obj1,obj2)
console.log(obj4);

const obj5 ={...obj1,...obj2} // more convenient
console.log(obj5);

/* When values come from databases it is generally in form of array of objects */
const user = [
    {
    id:1,
    email: "abc@gmail.com"
    },
    {
    id:1,
    email: "abc@gmail.com"
    },
    {
    id:1,
    email: "abc@gmail.com"
    }
]

// Accessing 
console.log(user[1].email);

// To get keys and values of object =>answer is in array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// output
/*      [ 'id', 'name', 'isLoggedIn' ]
[ '123abc', 'Sammy', false ]    */

console.log(Object.entries(tinderUser));
/*OUTPUT     [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]          */

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // boolean answer

// DESTRUCTURING
const course ={
    coursename : "javascript",
    price:999,
}

// one more way to access object
// const {coursename}=course
// console.log(coursename);  // answer => javascript

const {coursename: cn}=course   //=> we can access by cn also
console.log(cn);  // answer => javascript
// console.log(price); not working
