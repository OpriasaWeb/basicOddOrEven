// June 24, 2023
// CodeWars: Odd or Even? (7 kyu challenge)
// Description: Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).


function oddOrEven(array) {
  //enter code here
 var sumArray = 0;
 for(let i = 0; i < array.length; i++){
   sumArray += array[i];
   
   
 }
 
 if(sumArray === 0){
   return "even";
 }
 else if(sumArray % 2 == 0){
   return "even";
 } 
 else{
   return "odd";
 }

}

console.log(oddOrEven([0, -1, -5]))


// ----- Best Practices ----- //
// function oddOrEven(arr) {
//   return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
// }
// ----- Best Practices ----- //