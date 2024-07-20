const ext = {
  foo: 42,
  bar: "hello",
  baz: [1, 2, 3]
};

// Destructuring the object 'ext'
const { foo, bar, baz } = ext;

console.log(foo); // 42
console.log(bar); // hello
console.log(baz); // [1, 2, 3]
