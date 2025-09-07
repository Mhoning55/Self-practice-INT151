const studentScores = [
    {name:'Alice',score:85},
    {name:'Bob',score:92},
    {name:'Charile',score:68},
    {name:'David',score:55},
    {name:'Eve',score:78}
]
 
const passingName = studentScores.filter((stu) => stu.score >= 70);
console.log(passingName)
 
function getPassingName(stu) {
  return stu.map((stu) => stu.name.toUpperCase())
}
console.log(getPassingName(passingName))
 
 
console.log(Array.isArray([]))
console.log(Array.isArray(["a",12,false]))
console.log(Array.isArray("[]"))
console.log(Array.isArray(123));
console.log(Array.isArray(new Array(2))) // true
/*
true
true
false
false
*/
 
const num1 = [1,2,3]
const num2 = [3,5,7]
console.log([...num1,...num2])  //spread
console.log(num1.concat(num2))  //concat
 
console.log(num1.toString())
console.log(num2.toString());
console.log(num1.join("!"))
console.log(num1.join(","))
console.log(num1.join(":"))
console.log(num1.join(" "))
 
console.log("mangoteen".includes("go"))
console.log(["maggoteen"].includes("go"))
console.log(["maggoteen","mango"].includes("go"))
console.log(["maggoteen","mango"].includes("mango"))
console.log(["maggoteen","mango"].includes("maggoteen"))
 
console.log(num1.reverse())
console.log(num1.join("-"))
 
 
// เพื่อนหญิงพลังหญิง
//078
const array14 = [1,30,4,21,100000]
array14.sort((a, b) => b - a)
console.log(array14) //[ 100000, 30, 21, 4, 1 ]
array14.sort((a,b) => a- b)
console.log(array14); //[ 1, 4, 21, 30, 100000 ]
 
 
const students = [
    {id: 66500102, name: "Suda", gpa: 2.5},
    {id: 66500555, name: "ada", gpa: 2.8},
    {id: 66500589, name: "pornchai", gpa: 3.25},
    {id: 66500102, name: "Pornsak", gpa: 3.8},
]
students.sort((a,b) => a.name.localeCompare(b.name))
console.log(students)
 
/* [
  { id: 66500555, name: 'ada', gpa: 2.8 },
  { id: 66500589, name: 'pornchai', gpa: 3.25 },
  { id: 66500102, name: 'Pornsak', gpa: 3.8 },
  { id: 66500102, name: 'Suda', gpa: 2.5 }
]*/
 
const array6 = []
 