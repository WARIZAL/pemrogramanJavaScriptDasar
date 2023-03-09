 //Logikal Oprator
/* 
(&& = AND)
(|| = OR)
(!  = NOT)

*/


 let a = 10;
 let b = 12;

 /*AND Oprator */
 console.log( a < 15 && b > 10); //(True && True ) true
 console.log( a > 15 && b > 10); //(false && true ) false

 /*OR oprator */
 console.log( a < 15 || b > 10); //(true || true ) true
 console.log( a > 15 || b > 10); //(false || true) true

 /*NOT Oprator */
 console.log(!(a > 15)); // (false) true
 console.log(!(a < 15 && b > 10)); //(true && true ) false

