const marvel_heros =["Thor","Ironman","Spiderman"]
const dc_heros =["Superman","Batman","WonderWoman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


/*
output
[
    'Thor',
    'Ironman',
    'Spiderman',
    [ 'Superman', 'Batman', 'WonderWoman' ]
  ]
*/

// console.log(marvel_heros[3][1]);


const allHeros =marvel_heros.concat(dc_heros)
console.log(allHeros);
// output
// [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'WonderWoman' ]

// Spread Operator => it is convinent way to do same
const all_new_heros = [...marvel_heros,...dc_heros]

const arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const Arr=arr.flat(Infinity)
console.log(Arr);

console.log(Array.isArray("Ankit"));
console.log(Array.from("Ankit"));
console.log(Array.from({name:"Ankit"}));// Interesting case

let score1=100
let score2=200
let score3=300
let a = [score1,score2,score3] //=> not possible
console.log(a);
console.log(Array.of(score1,score2,score3));