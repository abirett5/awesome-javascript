// Javascript Spread Operator


// Creating Print Function
let print = console.log.bind(document);



//-> 1. Array Concatenation
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concat = [...array1, ...array2];

print(concat);


//-> 2. Array Copy
const original = [1, 2, 3];
const copy = [...original];

print(copy);


//-> 3. Object Copy
const originalObject = {name: "John", age: 25};
const copyObject = {...originalObject};

print(copyObject);


//-> 4. Object Merging
const obj1 = {a: 1};
const obj2 = {b: 2};
const merged = {...obj1, ...obj2};

print(merged);