
//เพื่อนหญิงพลังหญิง
//078
 
function getFreqOfWords(sentence) {
    if (sentence == null ){
        return undefined
    }
    sentence = sentence.toLowerCase();
 
  let words = sentence.split(" ");
  let freq = {};
 
  for (let word of words) {
    if (freq[word]) {
      freq[word]++;  
    } else {
      freq[word] = 1;
    }
  }
 
  return freq;
}
 
console.log(getFreqOfWords('Today is present and present is your gif'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))
 
 
function getScore(x,y){
    return x + y
}
 
 
console.log(getScore(40,10));
console.log(getScore(-2,10));
 
 
//1. function declaration
function sum(a, b) {
  return a + b
}
// sum(1, 2)
const x = sum
console.log(x(1, 2))
//2. function expression (arrow syntax)
const sum2 = () => {
  return a + b
}
//3. function expression (annonymous function declaration )
const sum3 = function () {
  return a + b
}
 
 
function f1(team,driver) {
    if (f1 = 'ferrari'){
        return 'ferrari carlos 55'
    }
}
 
console.log(f1('ferrari'))
 
 
function Test(x) {
    return x
}
function Test2(x){
    return x + 50
}
 
console.log(Test(Test2)(10))
 
 
 
function doSomeThing(a,b,c){
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(a,b,c)
}
 
 
 
//เพื่อนหญิงพลังหญิง
//078
 
function sum() {
    let score = 0;
    for (let i = 0; i < arguments.length;i++){
        score += arguments[i]
    }
    return score
}
console.log(sum())
console.log(sum(1))
 
 
 
function doSomeThing(greet='Hi', someone='Gest',firstSent) {
    return `${greet},${someome},${firstSent}`
}
 
console.log();
console.log("abc");
console.log("xyz",'aaa');
 