// FOR OF LOOP  => used to iterate arrays and maps
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const k of map) {
    // console.log(k);
}// print full map

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
/*
                myObject is not iterable
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
*/