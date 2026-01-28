import { curry } from "./method.js";

let person = [{name: 'kevin'}, {name: 'daisy'}]
let prop = curry(function (key, obj) {
    return obj[key]
});
let name = person.map(prop('name'))
console.log('name',name); //[ 'kevin', 'daisy' ]


let fn = curry(function(a, b, c) {
    return [a, b, c];
});

console.log(fn("a", "b", "c")) // ["a", "b", "c"]
console.log(fn("a", "b")("c")) // ["a", "b", "c"]
console.log(fn("a")("b")("c")) // ["a", "b", "c"]
console.log(fn("a")("b", "c")) // ["a", "b", "c"]