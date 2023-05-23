const obj = {
  name: "test",
  age: 25,
  etc: {
    uk: "test",
    countries: [
      "test",
      "test",
      "test",
      {
        key: "alaki",
      },
    ],
  },
};
function clone(entrance) {
  if (entrance !== "object") {
    return entrance;
  }
  let newObj = {};
  for (index in entrance) {
    const value = entrance[index];
    newObj[index] = clone(value);
  }
  return newObj;
}
console.log(clone(obj));
