let object = {
  string: "string",
  number: 1,
  boolean: true,
  array: ["Array"],
  objectInterno: { objectInterno: "object interno" },
};
// console.log(object.objectInterno)

// var string = object.string
// console.log(string)

// var array = object.array
// console.log(array)

var {string, array, boolean} = object;
console.log(string, array, boolean)