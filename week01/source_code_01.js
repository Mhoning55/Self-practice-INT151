
var s = "hello"; //มันเป็น string primitive
var w = s;
var t = new String("hello"); //อันนี้เป็น  object
var r = new String("hello");  //ไม่ควรใช้ new string
var u = 'hello';
var v = `hello`; //backtick


console.log(t == r);
console.log(t === r);

console.log(u == v);
console.log(u === v);

s = 'hi';

console.log(s == t);
console.log(s == u);
console.log(u == v);
console.log('hello'.length);  // h e l l o มี 5 ตัว


// s.concat(t) เอา string มาต่อ กัน 
//ex.1 ss + tt
var s = 'hello'
var t = 'hello'

console.log(s.concat(t));



// s.toUpperCase() ตัวใหญ่ทั้งหมด
// s.toLowerCase() ตัวเล็กทั้งหมด

console.log(s.toUpperCase());
console.log(s.toLowerCase());

// s.[i] มอง string เป็น arry ว่าเราจะเอาตัวไหน (ไ ม่ อ อ ก ข้ อ ส อ บ)
// s.charAt(i)
// s.at(i)

var s = 'ABCDEFG'

console.log('index:', s[2]);
console.log('index:',s[5]);
console.log('charAt:',s.charAt(2));
console.log('charAt:',s.charAt(4));
console.log('at:',s.at(2));
console.log('at:',s.at(10));


// s.substring(i,j)
// s.slice(i,j) 

console.log('substring:', s.substring(3))
console.log('substring:', s.substring(5,3))

// s.startsWith(t)
// s.endsWith(t) 
// s.includes(t) 

console.log('startsWith:', s.startsWith('ABC'));
console.log('endsWith:', s.endsWith('EFG'));
console.log('includes:', s.includes('CDE'));

// s.indexOf(t)
// s.lastIndextOf(t)

//s.trim

// array คือกลุ่มของข้อมูลหลายตัว เป็น objectให้มองเป็น primitive ที่จัดเก็บอยู่ในตัวแปรเดียวกัน ข้อมูลแต่ละตัวเรียกว่า element ทุก element ต้องมีประเภทข้อมูลเดียวกัน 
numbers = [10, 20, 30, 40]  // array ของตัวเลข
fruits = ["apple", "banana", "cherry"]  // array ของ string

console.log(numbers);
console.log(fruits);


let telephone = [1,2,3,4,5,6]
console.log("indexOf:", telephone.indexOf(4)); //3
console.log("indexOf:", telephone.indexOf(9)); //-1 ไม่มีติดลบ -1
console.log("lastindexOf:", telephone.lastindexOf); // undefinde

console.log("includes:", telephone.includes(3));  // 👉 true
console.log("includes:", telephone.includes(9));  // 👉 false

// array e in a 
// a.reverse()
// a.sort()
// a.splice เราอยากตัวตัว array ออกแล้วเปลี่ยนตัวด้านใน (ตัวไหนที่อยากเอาออก, ลบกี่ตัว , ตัวไหนที่จะเพิ่มเข้าไป) 
// เกิดมาก่อนตัวด้านล่าง
// แล้วก็มี toreverse toSort toSpliced แบบเพรียว function


//1. extract a string from a given string <s>
//   starting from character at position <i> and getting <n> characters.
var s = 'this is a string'
i = 7;
n = 3;
console.log(s.substring(i,n));
 
//2.1 get the position of the frist occurrence of a given string <t> in a given string <s>.
var t = 'is'
console.log(s.indexOf(t));
 
//2.2 get the position of the last occurrence of a given string <t> in a given string <s>.
 console.log(s.lastIndexOf(t));
 
//3. convert a given string <s> into another string so that all characters
//   from position <i> (inclusive) to position <j> (exclusive) of string <s>
//   become uppercase characters. ต้องแปลงเป็น touppercase 
//'this IS a string'
var s = 'this is a very very long string'
var i =5;
var j = 7;
console.log(s.slice(0, i) + s.slice(i, j).toUpperCase() + s.slice(j))

//4. given an array <a>, remove all elements from position <i> (inclusive)
//   to position <j> (exclusive).
var a = [10, 20, 30, 40,100,2000];
var i = 2;
var j = 4;
a.splice(i,j-i);
console.log(a);
 
//5. given an array <a>, insert elements: <x>,<y>, and <z> at position <i>
//   so that all elements from position <i> move away for 3 positions.

var a = [10, 20, 30, 40,100,2000];
var i = 3;
var x = 50;
var y = 60;
var z =100;
a.splice(i,0,x,y,z);
console.log(a)


// ที่ออกสอบน่าจะมีการใส่วงเล็บ fuction ที่ใช้กับ string and array โดยเฉพาะ 
// ทำความเข้าใจกับ splice and slice