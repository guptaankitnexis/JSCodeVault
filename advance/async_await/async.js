
/*      Async functions always return
a promise.
If the function returns a value,
the promise will be resolved
with that value
If the function throws an
exception, the promise will be
rejected        */


// returns promise automatically 
// async function hello(){
// }

const sing = async () => {
    throw  Error("uh oh")
    // throw "oh no  problem"
    return 'LA LA LA LA'
}

sing()
    .then(data => {
        console.log("Promise resolved with", data);
    })
    .catch(err => {
        console.log("Oh no, Promise rejected ");
        console.log(err);
    })


const login= async (username,password)=>{
    if(!username || !password) throw 'Missing Credentials'
    if(password === "hiankit") return 'Welcome!'
    throw 'Invalid Password'
}

login('heypeople' , 'hiankit  ')
.then(msg =>{
    console.log("Logged In");
    console.log(msg);
})
.catch(err =>{
    console.log("ERROR!!");
    console.log(err);
})