// FOR IN LOOP => It is used to object & array also
const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(`indexes is ${key} and values is ${programming[key]}`);
}

// It is not iterable
const map2 = new Map()
map2.set('IN', "India")
map2.set('USA', "United States of America")
map2.set('Fr', "France")
map2.set('IN', "India")

for (const key in map2) {
    // console.log(key);
}