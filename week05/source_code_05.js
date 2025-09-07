// 1. addProperty
function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(addProperty({ name: 'John' }, 'age', 25));
console.log(addProperty({}, 'city', 'New York'));

// 2. mergeObject
function mergeObject(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }));
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }));

// 3. getFreqOfWords
function getFreqOfWords(sentence) {
  if (!sentence) return undefined;
  let words = sentence.toLowerCase().split(/\s+/);
  let freq = {};
  for (let word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  return freq;
}
console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords('Do you best just do it'));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));

// 4. extractAndRename
function extractAndRename(obj) {
  let { name: fullName, age: yearsOld } = obj;
  return { fullName, yearsOld };
}
console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }));
console.log(extractAndRename({ name: 'Jane', age: 30 }));

// 5. mergeAndDestructure
function mergeAndDestructure(obj1, obj2) {
  let merged = { ...obj1, ...obj2 };
  let { name, age } = merged;
  return { name, age };
}
console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }));
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }));

// 6. removeDuplicateWords
function removeDuplicateWords(sentence) {
  if (!sentence) return "";
  let seen = new Set();
  return sentence.split(/\s+/).filter(word => {
    let lower = word.toLowerCase();
    if (seen.has(lower)) return false;
    seen.add(lower);
    return true;
  }).join(" ");
}
console.log(removeDuplicateWords("This is a test This test is easy."));
console.log(removeDuplicateWords("Hello hello HELLO world!"));
console.log(removeDuplicateWords("One two two three three three"));
console.log(removeDuplicateWords(""));
console.log(removeDuplicateWords(null));

// 7. findValue
function findValue(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b, 0);
  let avg = sum / arr.length;
  return { min, max, sum, avg };
}
console.log(findValue([1, 2, 3, 4, 5]));

// 8. convertToUppercase
function convertToUppercase(arr) {
  return arr.map(str => str.toUpperCase());
}
console.log(convertToUppercase(['hello', 'world']));
console.log(convertToUppercase(['javascript', 'is', 'fun']));

// 9. findMax
function findMax(arr) {
  return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}
console.log(findMax([1, 2, 3, 4]));
console.log(findMax([10, 5, 8, 7]));

// 10. removeFalsyValues
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3]));
console.log(removeFalsyValues(['a', '', 'b', null, 'c']));
console.log(removeFalsyValues([null, undefined, 'A']));

// 11. doubleAndFilterEvenNumbers
function doubleAndFilterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0).map(num => num * 2);
}
console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4]));
console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8]));

// 12. filterEvenNumbers
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4]));
console.log(filterEvenNumbers([5, 6, 7, 8]));

// 13. populateArray
function populateArray(length, value) {
  return Array(length).fill(value);
}
console.log(populateArray(3, 'a'));
console.log(populateArray(5, 0));

// 14. squareNumbers
function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log(squareNumbers([1, 2, 3, 4]));
console.log(squareNumbers([5, 6]));

// 15. processNumbers
function processNumbers(arr) {
  return arr.map(n => n * n)
            .filter(n => n % 2 !== 0)
            .reduce((a, b) => a + b, 0);
}
console.log(processNumbers([1, 2, 3, 4]));
console.log(processNumbers([5, 6, 7, 8]));
