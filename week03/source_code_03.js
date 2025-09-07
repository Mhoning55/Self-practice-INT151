const words = ["apple", "Mango", "orange", "Banana"]
//words.reverse()
//concole.log(words)
//how to write callback  function syntax
// 1. annonymous arrow function
const startAWords= words.filter((words) => words.startsWith("a"))
console.log(startAWords)

// 2. annonymous function declaration
const startAWords1 = words.filter(function(word){
    return word.startsWith("a")
})
console.log(startAWords1)
// 3. name arrow function
const checkStartA = (word) => word.startsWith("a")
const startAWords2 = words.filter(checkStartA)
console.log(startAWords2)
// 4. name function declaration
function checkStartA2(word) {
    return word.startsWith("a")
}
const startAWords3 = words.filter(checkStartA2)
console.log(startAWords3)

const employees = [
  {
    id: "e1001",
    firstname: "Somchai",
    lastname: "Jaidee",
  },
  {
    id: "e1002",
    firstname: "Pornchai",
    lastname: "Deejai",
  },
  {
    id: "e1005",
    firstname: "Suda",
    lastname: "Rakdee",
  },
];
// เพื่อนหญิงพลังหญิง 
//078
const fullname = employees.map((employee) => employee.firstname.toUpperCase()+' '+employee.lastname.toUpperCase())
console.log(fullname.filter(name => name.includes("JAI")))

const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]
//net price = total price * VAT 7%
const totalPrice = carts.reduce((acc, carts) => {
  return acc + carts.price * carts.amount;
}, 0);
const netPrice = totalPrice * 1.07;
console.log(netPrice);
 
const nums = [2, 4, 6]
// nums[nums.length] = 8
console.log(nums.push(8)) //append in the end of array, return new length
console.log(nums)
nums.unshift(10) //add in the beginning of array
console.log(nums)
nums.pop() //remove in the end of array
console.log(nums)
nums.shift() //remove in the beginning of array
console.log(nums)

const words1 = ["apple", "orange", "banana", "mango", "cherry"]

console.log(words1.slice(1)) // ["orange", "banana", "mango", "cherry"]
console.log(words1.slice(0, 3)) //["apple", "orange", "banana"]
console.log(words1.slice(2, 5)) // ["banana", "mango", "cherry"]
console.log(words1.slice(2)) // ["banana", "mango", "cherry"]
console.log(words1.slice(-3)) // ["banana", "mango", "cherry"]
 

// เพื่อนหญิงพลังหญิง
//078