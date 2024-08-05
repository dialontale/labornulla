let map = {}; // Initialize an empty object

let mname = 'key1'; // Assume mname is 'key1'

m = map[mname] = []; // Assign an empty array to map['key1'] and assign it to m

console.log(map); // Output: { key1: [] }
console.log(m);   // Output: []
