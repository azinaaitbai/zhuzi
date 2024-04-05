const array = ["apple", "banana", "grapes", "kiwi", "watermelon"];
const array2 = [];

for (let i = 0; i < array.length; i++) {
  if (array[i].length > 5) {
    array2.push(array[i]);
  }
}
console.log(array2);
