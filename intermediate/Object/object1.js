// singleton
// object literals
// Object.create  
// => constructor method

const mySym = Symbol("key1")

const JsUser = {
    name : "Ankit",// by default name is processed as "string"
    "fullName" : "Ankit Gupta",
    [mySym]: "mykey1", // mySym: "mykey1", => this syntax not work as symbol
    age : 18, //integer
    location:"Faridabad",
    email:"ankitgupta@gmail.com",
    isLoggedIn : false, //boolean
    lastLoginDays:["Monday","Saturday"] //Array
}

// Accessing the object
console.log(JsUser.email);
console.log(JsUser["email"]); // email should be string but not in dot case

// to access fullname it can be only accessed by this method
console.log(JsUser["fullName"]);// => console.log(JsUser.fullName);


// this print mykey1 but it is not used as Symbol but as string unless Symbol is used as Square Bracket
console.log(JsUser.mySym); // mykey1
console.log(typeof JsUser.mySym); // => String

console.log(JsUser[mySym]); // mykey1
console.log(typeof JsUser.mySym);// => undefined

// we can change update values also
JsUser.email ="ag@gmail.com"
console.log(JsUser.email);

/* But if we want not to change values we can use freeze */
// Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting); // it give reference of function like this [Function (anonymous)]
console.log(JsUser.greeting()); // it executes the function

// this keyboard uses to reference properties of an object
JsUser.greeting2 = function(){
    console.log(`Hello Js User ${this.fullName}`);
}
console.log(JsUser.greeting2());