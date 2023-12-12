
// let a = 9
// console.log(a);
// console.log( a++ );// post increment
// console.log(a);

// console.log('*******');

// let b = 99
// console.log(b);
// console.log( ++b );//pre increment
// console.log(b);

// decrement operator

// let a = 9
// console.log(a);
// console.log( a-- );
// console.log(a);

// console.log('*******');

// let b = 99
// console.log(b);
// console.log( --b );
// console.log(b);

//Loops 

// for(st1;condition;st2){
//     codes
// }

//       7          false           4 5 6
// for( let air = 4; air < 7; air++ ) console.log(air);

//        6         true     5          4 5
// for( let air = 4; air < 10; air+=1 ) console.log(air);
//      5           true     3        1 3 5 7 ----
// for( let air = 1; air < 10; air+=2 ) console.log(air);


// for( let air = 0; air < 20; air+=2 ) console.log(air);

//CONTINUE

// for( let air = 0; air <= 10; air++ ) {
// // console.log(air);
// // if( air===5 ) continue //skip

// // if( air % 2 === 0 ) continue // skip even
// if( air % 2 !== 0 ) continue // skip odd 

// console.log(air);
// }


// for(let a =0; a<=20; a++){
//     if( a%2===0 ){
//         console.log(a);
//     }
// }

// for(let a =0; a<=20; a++){
//     if( a%2 !== 0 ){
//         console.log(a);
//     }
// }

//BREAK

// for( let a = 3 ; a<=12 ;a++){

//     if( a === 7 ) break
// // if(a===7) continue

//     console.log(a);
// }

// pre = before,++a   post = after ,a++ 
// var let

// var a ='CAR' 
// console.log(a);

// //       3        false             0 1 2 
// for( var a = 0;  a < 3;   a++  ) console.log(a);


// console.log('*****');

// console.log( a );


// let a ='CAR' 
// console.log(a);

// console.log('******');

//  for( let a = 0;  a < 3;   a++  ) {
//     console.log(a);
//  }

// console.log('*****');

// console.log( a );

// let b = true
// let b = 99
// console.log(b);


//do while

// let a = 10000//10001
// do{
//     console.log(a);// 10000
//     a++ 
// }while( a <= 102 ) /// false

// console.log('*******');

// for( let b = 10000; b<=102 ; b++ ){
//     console.log(b);
// }


// Nesting LOOP

//       1        true  0
// for (let a = 0; a < 2; a++) {
//     console.log('CYCLE STARTS');

//     console.log(`A ${a}`);

// //           6        false   
//     for (let b = 4; b <= 5; b++) {
//         console.log(` B ${b} `);// 4 5
//     }

//     console.log('CYCLE ENDS');

// }

//*******************************/

//Nadiya Nissar Shah
// //console.log("hello");

// let one = 99
// switch(one){
//       case 66: one='tree';
//       break;
//       case 77: one='trunk';
//       break;
//       case 88: one='tiger';
//       break;
//       case 99: one='nadiya';
//       break;
//       default: one='not found';
//       break;
// }
// console.log(one);      
                 //   LARGEST NO. AMONG TWO
      
            //      let a = 10;
            //      let b = 20;
            //      if(a>b){
            //       console.log("a is greater");
            //      }
            //      else{
            //       console.log("b is greater");
            //      }
          //conditional statement       
      //     let a = 3;
      //     let b = -7;
       //     let c = 2;
      //  product = a* b* c;   
      //  if(product>0){
      //       alert("number is positive");
      //  }
      //  else
      //  {
      //       alert("number is negative or 0");
      //  }

      //sort three nos.
//     


// largest among 5 numbers
// let a = -5;
// let b = -2;
// let c = -6;
// let d = 0;
// let e = -1;
// if (a>b && a>c && a>d && a>e)
// {
//     alert(`Greatest no. is ${a}`);
// }
// else if (b>a && b>c && b>d && b>e)
// {
//     alert(`Greatest no. is ${b}`);
// }
// else if (c>a && c>b && c>d && c>e)
// {
//     alert(`Greatest no. is ${c}`);
// }
// else if (d>a && d>c && d>b && d>e)
// {
//     alert(`Greatest no. is ${d}`);
// }
// else
// {
//     alert(`Greatest no. is ${e}`);
// }


//loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen
// let a = 15;
// for ( a=0; a<=15; a++) {
//       if (a % 2 === 0) {
//               console.log(`${a} number is even`);
//       }
//       else if (a === 0) {
//               console.log(`${a} number is even`);   
//       }
//       else {
//               console.log(`${a} number is odd`);
//       }
// }


//average-marks and grade

// let David = 80;
// let Vinoth = 77;
// let Divya = 88;
// let Ishitha = 95;
// let Thomas = 68;
// average_marks = (David + Vinoth + Divya + Ishitha + Thomas) / 5;
// alert(`Average Marks ${average_marks}`)

// if(average_marks<60)
// {
//     alert(" Grade F")
// }
// else if(average_marks<70)
// {
//     alert(" Grade D")
// }
// else if(average_marks<80)
// {
//     alert(" Grade C")
// }
// else if(average_marks<90)
// {
//     alert(" Grade B")
// }
// else if(average_marks<100)
// {
//   alert(" Grade A")
// }

// *************************************

// console.log( 10 % 2 === 0 );

// let a = 10
// if( a % 2 === 0 ){
//     console.log('EVEN');
// }else{
//     console.log('ODD');
// }

//     5        false
// for( let a = 2; a<=4 ;   a++ ) console.log( a );//2  3  4 


//Nesting Of Loops

//         2      true  1++ 
// for( let a = 1; a < 3; a++ ){

// console.log(a + ' Cycle Starts');// a= 1
// console.log(`   a says ${a}`);// a=1


// for(let b = 4; b < 6  ;  b++){
//     console.log(`      b says ${b} `);
// }

// // for(let c = 40; c < 42  ;  c++){
// //     console.log(`           c says ${c}`);
// // }

// console.log(a + ' Cycle Ends');// a= 1
// }


//1)

//       5    true  4++
// for(let a = 1;a<=4;a++){
//     document.write(`a${a};`) // a = 4

//     //        4     4<4=false  
//     for( let b = 1; b<a ; b++ ){
//        document.write(`b${b}`);// b = 1 2 3
//     }

//     document.write(`<br/>`)
// }

// for(let a = 1;a<=10;a++){
//     document.write(``) 

    
//     for( let b = 1; b<a ; b++ ){
//        document.write(`*`);
//     }

//     document.write(`<br/>`)
// }

//2

//    2         true   1++
// for( let a = 1; a<=5; a++ ){
//     document.write(`a${a};`)// a = 1

//     //      2       1<=5-2 / 1<=3 = true    1++
//     // for( let b = 1;         b<=5-a         ;b++ ){
//     //    document.write(`b${b}`);//b = 1
//     // }

// //            2     2<=1=false
//     for( let c = 1; c<=a; c++ ){
//         document.write(`c${c}`) // c =1
//     }

//     document.write('<br/>')
// }

// for( let a = 1; a<=10; a++ ){
//     // document.write(`&nbsp;&nbsp`)
//     for( let b = 1; b<=10-a ;b++ ){
//     //    document.write(`*`);
//     document.write(`&nbsp;&nbsp`)

//     }


//     for( let c = 1; c<=a; c++ ){
//         document.write(`<span>*</span>`)
//     }

//     document.write('<br/>')
// }
  
// for( let a = 3; a>=1;   a--   ){
//     document.write(`a${a};`)// a= 2

  
//     for( let b = 1;  b<a  ;b++ ){
//         document.write(`b${b};`)
//     }

    
//     for( let c = 1; c<=3-a; c++ ){
//         document.write(`c${c};`) 
//     }

//     document.write('<br/>')
// }
// for( let a = 8; a>=1;   a--   ){
//     document.write(``)

  
//     for( let b = 1;  b<a  ;b++ ){
//         document.write(`<span>*</span>`)
//     }

    
//     for( let c = 1; c<=8-a; c++ ){
//         document.write(`*`) 
//     }

//     document.write('<br/>')
// }

// sort 3 nums

// let a = 50
// let b = 60
// let c = 30

// //   f  &&  t    = f
// if( a>b && a>c ){

//     if(b>c){
//         console.log(`a=${a}> b=${b}> c=${c}`);
//     }else{
//         console.log(`a=${a}> c=${c}> b=${b}`);
//     }
//     //      t  && t  = t
// }else if( b>a && b>c ){
//     //   t
//     if( a>c ){
//         console.log(`b=${b}> a=${a}> c=${c}`);
//     }else{
//         console.log(`b=${b}> c=${c}> a=${a}`);
//     }
// }else{
//     if( b>a ){
//         console.log(`c=${c}> b=${b}> a=${a}`);
//     }else{
//         console.log(`c=${c}> a=${a}> c=${c}`);
//     }
// }

// let a = 50
// let b = 60
// let c = 70

// //    f && f = f
// if( a>b && a>c ){

//     if(b>c){
//         console.log(`a=${a}> b=${b}> c=${c}`);
//     }else{
//         console.log(`a=${a}> c=${c}> b=${b}`);
//     }
//     //     t   && f  = f 
// }else if( b>a && b>c ){
    
//     if( a>c ){
//         console.log(`b=${b}> a=${a}> c=${c}`);
//     }else{
//         console.log(`b=${b}> c=${c}> a=${a}`);
//     }

// }else{
//     //   t
//     if( b>a ){
//         console.log(`c=${c}> b=${b}> a=${a}`);
//     }else{
//         console.log(`c=${c}> a=${a}> c=${c}`);
//     }
// }

// loop ques

//4
//          2     t     1++
// for( let a = 1; a<=5 ; a++ ){
// // document.write(`<span class="a">a${a}</span>`)//a=1
// document.write(`<span class="a">*</span>`)
// //         5       5<=5-1 = f
//     for( let b =1; b<=5-a;  b++ ){   
// // document.write(`<span class="b">b${b}</span>`)//b=1234
// document.write(`<span class="b">*</span>`)
//     }

//     for(let c=1;c<=a;c++){
//         // document.write(`<span class="c">c${c}</span>`)
//         document.write(`<span class="c">*</span>`)
//     }

// for( let d=1; d<a; d++ ){
//     // document.write(`<span class="d">d${d}</span>`)
//     document.write(`<span class="d">*</span>`)
// }

//     document.write('<br/>')
// }

//5

// //         4    5>=1;  5--
// for(let a = 5; a>=1 ; a--){
//     document.write(`<span class="a">a${a}</span>`)//a=5

// //  
// for( b=1; b<=5-a; b++ ){
//     document.write(`<span class="b">b${b}</span>`)// 
// }
// //        6    5<=5    5++
// for( let c =1; c<=a;  c++ ){
//     document.write(`<span class="c">c${c}</span>`)// c= 12345
// }

// for( let d=1;  d<=a-1;d++ ){
//     document.write(`<span class="d">d${d}</span>`)
// }

//     document.write('<br/>')
// }

//         4    5>=1;  5--
// for(let a = 5; a>=1 ; a--){
//     document.write(`<span class="a">*</span>`)//a=5

// //  
// for( b=1; b<=5-a; b++ ){
//     document.write(`<span class="b">*</span>`)// 
// }
// //        6    5<=5    5++
// for( let c =1; c<=a;  c++ ){
//     document.write(`<span class="c">*</span>`)// c= 12345
// }

// for( let d=1;  d<=a-1;d++ ){
//     document.write(`<span class="d">*</span>`)
// }

//     document.write('<br/>')

// }

// **************************************

///functions

// function air(a){

// console.log('In '+ a);

// let sq = a**2
// console.log(sq);

// let sum = sq + a
// console.log(sum);

// let result = sum - sq
// console.log(result);

// }

// air(4) // invoke or call  
// console.log('******');
// air(5)
// console.log('******');
// air(10)

// console.log('*******');
// let a = true
// console.log('Out '+a);

///function decleration

// function funcName(parameter){
//     /// return code
// }
// funcName( argument ) //call

// -----------------


// function one(a){
  
//     let sq = a**2
//     console.log(sq);
    
//     let sum = sq + a
//     console.log(sum);
    
//     let result = sum - sq
// // console.log(result+' Returned');

//     return result+' Returned'// final output of function call

//     // return ' Camel Returned'// funct is dissolved so its not found


// }

// console.log( one( 3 ) );
// console.log('*******');
// console.log( one( 4 ) );
// console.log('*******');
// console.log( one(5) );

//--------------------



// console.log('****');

// function one(a,w){
  
//     console.log(w);
//  return a + w

//     return sum+' Returned'// final output of function call

// }

// console.log( one( 3,4,6 ) );
// console.log('*******');
// console.log( one( 4 ) );
// console.log('*******');

//-----------------------

// function one(a,b){

// if(a > b) return 'A is Greater' 
// else return 'B is Greater'

// }
// console.log( one(10,15) );



// console.log('*******');




// function two(a,w){
//  return a + w
//  return 'LION'//wont work  
// }

// console.log( two( 3,4 ) );
// console.log('*******');


// function expression

// let a = function(para){
// //return code
// }
// a()// invoke func  

// let one = function(para1,para2){
//     let add = para1+para2
//     let sq = para1**2
//     return add - sq
// }
// console.log( one(2,3) );


// let one = function(para1,para2){

//     if(para1 > para2) return 'A is Greater' 
//     else return 'B is Greater'


// }
// console.log( one(2,3) );


//-----------------

// var a = 56
// let b =true
// const c = 'POEM'

// var one = function(){
//     return 'ONE'
// }
// one()

// let two = function(){
//     return 'TWo'
// }
// two()



///Arrow Function

// let funcName = (parameter) => {
//     // return code
// }
// funcName()// call or ivoke

// let one = (a,b,c) => {
//     let sum = a+b
//     let subs = sum-c
//     return subs
// }
// console.log( one(20,30,44) );

///-----------------


// function one a return a

// console.log(one(55))



// console.log('******');

// // let two = function a  a
// // console.log(two(555))



// console.log('******');

// let three = (a,b) => a+b
// console.log(three(5555,5))


// console.log('******');


// var four = x => x+10
// console.log( four( 100 ) );

// function declaration

// function funcName(parameter){
//     // return Codes
// }

// funcName(arguments)// invoking or calling a function

// function apple(a,b){
//     let sum = a+b
//     return `The sum of ${a} and ${b} is ${sum}`
// }

// console.log( apple(10,20) );


//1


// function one(num){

//     if( num%2 === 0 ){
//         return 'EVEN'
//     }else{
//         return 'ODD'
//     }

// }

// console.log( one(8) );

// console.log('*********');

// function two(){
//     return 'TWO'
//     return 'Two Again'
// }


// console.log( two( ) );


// function apple(a,b){
//     let sum = a+b
//     return `The sum of ${a} and ${b} is ${sum}`
// }

// let arg1 = +prompt('Enter a Number')
// let arg2 = +prompt('Enter b Number')

// console.log( apple(arg1,arg2) );

//2

//function expression

// let bus = function( a ){

//     if( typeof a === typeof 2 ){
//        return 'Number'
//     }else{
//         return 'Not a Number'
//     }

// }

// console.log( bus('umbra') );

//3 

// Arrow Function

// let kite = (parameter) => {
//     // return codes
// } 
// kite()//invoke or call

// let kilo = (a,b) => {

// let ans = ( a>b ) ? a+' is Greater' : b+" is greater"
// return ans 

// }

// console.log( kilo( 34,67 ) );

// 4

// const one = (a,b,c) => {

//     if( a>b && a>c ){
//          return `${a} is greater`
//     }else if( b>a && b>c ){
//          return `${b} is greater`
//     }else{
//          return `${c} is greater`
//     }

// }

// console.log( one( 10,12,13 ) );

//5

// let run = ( 100 % 30 === 0 ) ? 'Divisible' : 'Not Divisible' 
// console.log(run);

// function one(a,b,c){

//     //    f        f        f       = f
//     if( a===b && b===c && a===c ){
//         return 'Equilateral'
//     //         f        f          f     
//     }else if( a===b || b===c || a===c ){
//         return 'isoceles'
//     }else{
//         return 'Scalene'
//     }
    

// }
// console.log( one(10,11,12) );

//6 

// let air = (a) => {
//     //             f  &&   t
//     const ans = ( a>=50 && a<=100 ) ? 'in range' : "Not In Range"
//     return ans

// }

// console.log( air( 64 ) );

// console.log( air( 6 ) );

// 7

// function one( a,b,c ){

//     console.log(b);
//     console.log(c);

// let sum = a + b + c
// return sum

// }

// console.log( one( 23 ) );

// function one( a,b ){

//  const ans = ( a >= 50 && a<=100 && b>=50 && b<=100 ) ? 'In Range':'Not In Range'
//  return ans

// }
// console.log( one( 70,80 ) );

// console.log( one( 7,80 ) );

// console.log( one( 7,8 ) );

// 7 

// let one = function(num1){

//     if( num1%3===0 && num1%7===0 ){
//         return `${num1} is multiple of both 3 and 7`
//     }else{
//        return `${num1} is not multiple of both 3 and 7`
//     }
    

// }

// console.log( one( 56 ) );
// console.log( one( 21 ) );
// console.log( one( 63 ) );

// 8 

// let one = (marks) => {

// //       t            f
// if( marks >= 40 && marks <= 70 ){
//    console.log('Grade C');
//    //            t          f  
// }else if( marks >=40 && marks <=80 ){
//    console.log('Grade B');
//          //      t           f  
// }else if( marks >= 40 && marks <= 90 ){
//    console.log('Grade A');
//    //          t            t 
// }else if( marks>=40 && marks <= 100 ){
//    console.log('Grade A++');
// }else{
//    console.log('Grade F');
// }

// }
// console.log( one( 78 ) );
// console.log( one( 98 ) );
// console.log( one( 23 ) );


//9

// function one( operation,num1,num2 ){

//     //     f
//     if( operation === 'add' ){
//          return `The sum of ${num1} and ${num2} is ${num1 + num2}`
//          //    f
//     }else if( operation ==='substract' ){
//         return  `The difference of ${num1} and ${num2} is ${num1 - num2}`
//         //      t
//     }else if( operation === 'product' ){
//          return `The product of ${num1} and ${num2} is ${num1 * num2}`
//     }else{
//         return  `The division of ${num1} and ${num2} is ${num1 / num2}`
//     }

// }

// console.log( one( 'product',45,10 ) );

//

// function a(para)
// {
//   return para**2
// }

// let num1 = a(5)
// console.log(num1);

// let sum = num1*100
// console.log(sum);


//Arrow funct

// const one =(a,b,c) =>  'Tree '+ (a+b+c)

// console.log( one(11,12,13) );

// const two = a =>  'Free '+ (a)+'%'

// console.log( two(11) );

//---------------

// const one =(a,b,c) =>  'Tree '+ (a+b+c)
// const two = a =>  'Free '+ (a)+'%'

// console.log( two(11) );
// console.log( one(11,12,13) );

// Execution Context

// var a = 11

// function one(num){

// var result = num**2
// // console.log(result);
// return result

// }

// var sq1 = one(a)
// // var sq2 = one(5)

// console.log(sq1);

// var a = 99
// console.log(a);

// function one(num){
//     let ans = num**2
//     return ans
// }

// var sq1 = one(a)
// console.log(sq1);

// var sq2 = one(10)
// console.log(sq2);

//Hoisting and TDZ

//Hoisting = it refers to js giving higher precedence to the decleration of variables  funct and classes during program execution

// console.log(a);

// var a = 'ORANGE'

// console.log(a);


//----------------------

//TDZ = it is the area of block where a bariable is inaccesible until the moment the computer completely initializes it with a value

// {
// // TDZ does exist
// // TDZ does exist
// // TDZ does exist
//     // console.log(b);// TDZ does exist
//     // TDZ does exist
//     // TDZ does exist
//     // TDZ does exist
//     // TDZ does exist
//     let b = 'Poem' // TDZ does not exist
//     // TDZ does not exist
//     // TDZ does not exist
//     // TDZ does not exist
//     // TDZ does not exist
//     console.log(b);// TDZ does not exist
//    // TDZ does not exist
//    // TDZ does not exist
// }


// {
//     // TDZ does exist
//     // TDZ does exist
//     // TDZ does exist
//         // console.log(b);// TDZ does exist
//         // TDZ does exist
//         // TDZ does exist
//         // TDZ does exist
//         // TDZ does exist
//         const b = 'Poem' // TDZ does not exist
//         // TDZ does not exist
//         // TDZ does not exist
//         // TDZ does not exist
//         // TDZ does not exist
//         console.log(b);// TDZ does not exist
//        // TDZ does not exist
//        // TDZ does not exist
//     }


// console.log(a);
// console.log(b);
// console.log(c);

// var a= 89
// let b = true
// const c = false

//-----------------------------

// var a = 'India'

// // console.log( one() );

// function one(){
//     return 'DECLaRATION FUNC'
// }

// console.log( one() );

// // ----------------------------------

// // console.log( umbrella() );


// let umbrella = function(){
//     return 'Umbrella'
// }


// console.log( umbrella()  );

// // ----------------

// let arr = ()=> 'RainBow'
// console.log( arr() );

//high order func and call back func
//call back func = func returned or passed as para,etr or argument

// here one is high order func

// a= 2
// function one(a){
//     // b= 3
//      return function two(b){
//          // c = 4
//          return function three(c){
//             return `${a+b+c} Returned by Three Function`
//          }
//      } 
 
//  }
 
//  let first = one(2)
//  console.log(first);
 
//  let second = first(3)
//  console.log(second);
 
//  let three = second(4)
//  console.log(three);
 
//  console.log('***********');
 
//  // Currying
 
//  console.log( one(2)(3)(4) );
 
 
 // Scope and Scope Chain
 
 // Scope = area , space or region
 
 //Global Scope = means global space or a public space
 
 //Local Scope  = means a local space/region/area or is restricted region

 //High order and call back functions

// call back = funct returned / passed in argument/ func in parameters

// function one(x){

//     return function two(y){
//         return function three(z){
//             return 'three says '+(x+y+z)
//         }
//     }
// }
// // console.log(one());

// let a = one( 3 )
// console.log(a);

// let b = a(4)
// console.log(b);

// let c = b(5)
// console.log(c);

//-------------------------

// let one = function( para ){
// return para
// }

// let a = one( ()=> 'What Am I ?'  )
// console.log( a );

// let b = a()
// console.log(b);

//-------------------

// let one = function( para ){
//     return para
//     }

//     let a = one( function(){ return  'What Am I ?'}  )
//     console.log( a );

//     let b = a()
//     console.log(b);

//----------------------------

// let one = ( a = ()=> 'James Bond' ) => {
// return a
// }

// let x = one( )
// console.log(x);

// let y = x()
// console.log(y);

///----------------------------

// let a = 567

// function one(){
//    return function two(){
//               return 'Second'
//                         }

// }

// let b = one()
// console.log( b );
// // let c = two()
// let c = b()
// console.log(c);

//Currying

// function one(x){

//     return function two(y){
//         return function three(z){
//             return 'three says '+(x+y+z)
//         }
//     }
// }

// console.log( one(2)(3)(4)  );

//Infinite Currying

// function sum( a ){
// return function(b){
//     return function(){
//         return a+b
//     }
// }
// }

// // console.log(  sum(5)(10)()  );

// ///---------------------------------

// //       x1=10  x2=15  x3=18  x4 = 22
// function car( x ){
//     return function( y ){ // y1=5 y2=3 y3=4  y4=?
// // y1= t  y2=t  y3=t  y4=f
//         if( y ) return car( x+y )//car(15)  // car( 18 ) //car(22)
//         else return x
//     }
// }

// console.log(  car( 10 )( 5 )(3)( 4 )() );

//Scope and Scope Chain

//Scope = an area/ region/space
//Local Scope = local region / restricted region
//Global Scope = global space/ public space
//Lexical Environment = with refrence to surrounding state

// function two(){

//     console.log(a)

// }
// var a = 22

// two()

// console.log('********');

// function one(){

//     var b = 22

// }

// console.log(b)
// one()

///Ques

// console.log( one() );

// function one(){
//     return 'Lion'
// }


// function one(){

//     var b = 22

// }

// console.log(b)
// one()

//------------------------------------

// function one() {
//     console.log(b);
   
//      function two() {
//        console.log(a);
//      }
//      two();
//    }
   
//    var a = 55;
//    var b= 99
//    console.log( one() );

// function one(){

// return function two(){

// return a
// }

// }

// var a = 67

// let three = one()
// console.log(three);
// let four = three();
// console.log(four);

//------------------------------

// function one(){

//     return function two(){

//     return a
//     }

//     }

//     let three = one()
//     console.log(three);
//     let four = three();
//     console.log(four);

//    const a = 67

//------------------------------

// function one(){

//     return function two(){
//         var a = 67
//     }
//     }

//     console.log(a);

//     let three = one()
//     console.log(three);
//     let four = three();
//     console.log(four);

//Block Scope

//Compound Statement = block

// if( true ) {
//     var a= 10
//     console.log(a);
// }

// if( true ) console.log('Piano');

//------------------

// let b = "B global";
// const c = "C global";

// {
//   var a = "A block";
//   let b = "B block";
//   const c = "C block";
//   console.log(a + " in Block");
//   console.log(b + " in Block");
//   console.log(c + " in Block");
// }

// console.log(a + " in Global");
// console.log(b + " in Global");
// console.log(c + " in Global");

//------ Shadowing -----------

// var a = 'A Global';
// console.log(a + " from Global");

// {
//   var a = "A changed in block";
//   let b = "B block";
//   const c = "C block";
//   console.log(a + " from Block");
//   console.log(b + " in Block");
//   console.log(c + " in Block");
// }

// console.log(a + " from Global");

// let b = 'B Global';
// console.log(b + " from Global");

// {
//   var a = "A changed in block";
//   let b = "B block";
//   const c = "C block";
//   console.log(a + " from Block");
//   console.log(b + " in Block");
//   console.log(c + " in Block");
// }

// console.log(b + " from Global");


//-----------------------------

// let b = 'B Global';
// console.log(b + " from Global");
// {
//   var a = "A changed in block";
//   let b = "B block";
//   const c = "C block";
//   console.log(a + " from Block");
//   console.log(b + " in Block");
//   console.log(c + " in Block");
// }

// console.log(b + " from Global");

//-----------------------------

// // // console.log( a );

// // // var a = 'Kitten'

// // // console.log(a);

// // // console.log('*****');

// // // // console.log(b);

// // // let b = 999

// // // console.log(b);

// // // console.log('*****');

// // // console.log( c );

// // // const c = true

// // // console.log(c);

// // /// Hoisting = it refers to js giving higher precedence to the declaration of variables , function and class during execution

// // // Temporal Dead Zone = it is an area whre a variable is in-accessible until the moment the comp , meets its initialization point.


// // {
// //     console.log( a );

// // var a = 'Kitten'

// // console.log(a);
// // }

// // console.log('*****');

// // {
// //     // TDZ exists
// //      // TDZ exists
// //       // TDZ exists
// //        // TDZ exists
// //     // console.log(b); // TDZ exists
// //  // TDZ exists
// //   // TDZ exists
// //    // TDZ exists
// // let b = 999// // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // console.log(b);}

// // console.log('*****');
// // {

// //      // TDZ exists
// //      // TDZ exists
// //       // TDZ exists
// //        // TDZ exists
// // console.log( c );// TDZ exists
// //  // TDZ exists
// //      // TDZ exists
// //       // TDZ exists
// //        // TDZ exists

// // const c = true// TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // console.log(c);

// // }


// // hoisting in functions

// // console.log( air() );

// // function air(){
// //     return 'One'
// // }

// // console.log('*****');

// // console.log( two );
// // // console.log( two() );

// // var two = function(){
// //     return 'Two'
// // }

// // console.log( two() );

// // console.log('*****');

// // console.log(three());

// // let three = function(){
// //     return 'Three'
// // }

// // console.log(three());

// // console.log('*****');

// // // console.log( four() );

// // const four = function(){
// //     return 'Four'
// // }
// // console.log( four() );



// // block scope

// // Block = compound statement

// // if( 10%2===0 ) console.log('Papaya');

// // if( 10%2===0 ) {
// //     console.log('Papaya');
// // }

// // var a = 'Old Value'
// // console.log( a+' Func Scope');

// // {
// //     console.log( a+' Block Scope');
// //     var a = 'Current value'
// //     console.log( a+' Block Scope');
// // }

// // console.log( a+' Func Scope');

// // var a = 'New Value'
// // console.log( a+' Func Scope');

// // console.log('*****');

// // console.log(a);
// // let a = 'Old Value'
// // console.log( a);

// // {
// //     // console.log( a+' Block Scope');
// //     let b = 'Current value'
// //     console.log( b+' Block Scope');
// // }

// // console.log( a);
// // console.log(b);

// // let a = 'New Value'
// // console.log( a+' Func Scope');

// // console.log('*******');

// // const a = 111
// // {
// //     const a = 222
// //     // const a = 222.5
// //     {
// //         const a = 333
// //     console.log(a)
// //     }
    
 
// // }


// // CLOSURES = function + its Lexical Scope

// function one(){
//     var x = 5

//    return function two(){
//     var y = 10
//             return function three(){
//                 return (x+y)
//             }       
//     }
    
// }

// var e = one()
// console.log(e);
// var f = e()
// console.log(f);

// // console.log('____________');


// // console.log( air() );

// // function air(){
// //     return 'One'
// // }

// // console.log('*****');

// // console.log( two );
// // // console.log( two() );

// // var two = function(){
// //     return 'Two'
// // }

// // console.log( two() );

// // console.log('*****');

// // // console.log(three());

// // let three = function(){
// //     return 'Three'
// // }

// // console.log(three());

// // console.log('*****');

// // // console.log( four() );

// // const four = function(){
// //     return 'Four'
// // }
// // console.log( four() );

// // console.log('____________');

// var g = f()
// console.log(g);


// console.log('******');

// function a(){
//     var x = 11

//     function b(){
//         var y = 22

//         function c(){
//             console.log(x+y);
//         }
//         c()
//     }
//     b()
// }

// a()

 
// (
//     function (){
//         console.log('one');
//     }

// )()

//

//scope chain in block scope

// var a = 99
// console.log(a,' in Func Scope');

// {
//     console.log(a,' in Block Scope');
//     var a = 88
//     console.log(a,' in Block Scope');
// }

// console.log(a,' in Func Scope');

// let a = 99
// console.log(a,);

// {
//    let a = 88
//     console.log(a,' in Block Scope');
// }

// console.log(a,);

// const x =108
// {
//     // const x = 1008
//     {
//         // const x = 10008
//         console.log(x)
//     }
// }

//closures = function + lexical environment

// function x(){
//     var a = 999
//       function y(){
//         var b = 1000
//         function c(){
//             console.log(a+b);
//         }
//         c()
//       }
//       y()
// }
// x()

//---------------------------------------

// var b = 1000;
    // return function c() {
    //   console.log(a + b);
    // };

// function x() {
//   var a = 99;
//   return function y() {
//     return a*100
//   };
// }



// var e = x()
// console.log(e);

// console.log('-______________');

// let a = 99
// console.log(a,);

// {
//    let a = 88
//     console.log(a,' in Block Scope');
// }

// console.log(a,);

// const h =108
// {
//     // const x = 1008
//     {
//         // const x = 10008
//         console.log(x)
//     }
// }

// console.log('______________________');


// var f = e()
// console.log(f);



//setimeout closures

// setTimeout(function(){
//     console.log('hello');
// },2000)

//---------------------------

// var a = 99
// console.log(a,' First');

// console.log('________');

// //        3       f 
// for(var a = 0; a < 3; a++){
// console.log(a); // 0 1 2  
// }

// console.log('________');

// console.log( a,' Second' );



// var a = 99 ---> 4


//----------------------------

// let a = 99
// console.log(a,' First');

// console.log('________');

// //      
// for(let a = 0; a < 3; a++){
// console.log(a); 
// }

// console.log('________');

// console.log( a,' Second' );

//setimeout + closures

//var
// 0 1 2 

//     var a= 3  f   loop stop
// for(var a = 0; a < 3; a++){
//     console.log(a,' before setimeout'); // 0 1 2  

// setTimeout( function(){
//     document.write(a)
//     document.write('<br/>')
// },a*1000)

//     }

    // 0 0s
    // 1  1000ms
    // 2  2000ms


    // for(let a = 0; a < 3; a++){
    //     console.log(a,' before setimeout'); // 0 1 2  
    
    // setTimeout( function(){
    //     document.write(a)
    //     document.write('<br/>')
    // },a*1000)
    //     }

//closure 1
        // block{
//                  a =  0
        // }

        // function(){
            // document.write(a)
            // document.write('<br/>')
        // }

        //closure 2
        // block{
//                  a =  1
        // }

        // function(){
            // document.write(a)
            // document.write('<br/>')
        // }

    ///

//     for(var a = 0; a < 3; a++){
//         console.log(a,' before setimeout'); // 0 1 2  
    
//    function b(para){
//     setTimeout( function(){
//         document.write(para)
//         document.write('<br/>')
//     },para*1000)
//    }
// b(a)


//         }



// function a(x){
//     return function b(y){
//         return x+y
//     }
// }

// console.log( a(10)(20) );

//Primitive vs refrence value

// let a = 30
// let b = a
// a = 31

// console.log(a, ' A Says');
// console.log(b, ' b Says');


// console.log('-------------------------');

// const c = {
//     name:"Asu",
//     age:44
// }

// console.log('C says ',c);

// const d = c
// d.age = 33

// console.log('D says ',d);

// console.log('-------------------------');
// console.log('C says ',c);

// strings

// var a = ' PinE-Apple '
// console.log(a);
// console.log( typeof a );

// console.log( a.length );

// console.log( a[0] );
// console.log( a[1] );
// console.log( a[2] );
// console.log( a[3] );
// console.log( a[4] );
// console.log( a[11] );

//------------------------

//indexOf
// console.log( a.indexOf('P') );
// console.log( a.indexOf('i') );
// console.log( a.indexOf('n') );
// console.log( a.indexOf('e') );
// console.log( a.indexOf('E') );
// console.log( a.indexOf('N') );
// console.log( a.indexOf('p') );

//includes
// console.log( a.includes('P') );
// console.log( a.includes('I') );
// console.log( a.includes('n') );
// console.log( a.includes('%') );

//uppercase lowercase replace

// var a = ' PinE-Apple '
// console.log(a);
// console.log( a.toUpperCase() );
// console.log( a.toLowerCase() );
// console.log( a.replace('PinE','Deer') );

///eX1

// function checkIn(para){

// let x = para.toLowerCase()

// if( x.includes('gun') || x.includes('uranium') || x.includes('knife')|| x.includes('1000 kg gold') ) {
//     return ' Access Denied'
// }else return 'Allowed to Fly'

// }
// console.log( checkIn('I have a laptop and a 1000 kg gold') );
// console.log( checkIn('I have a lays and gun') );
// console.log( checkIn('I have my pet') );



//Ex2

// let db = 'rajnish12@gmail.com'

// function a(para){

// let x = para.toLowerCase();
// console.log(x);

// if(db.includes(x)) return ' LOGGED IN'
// else return 'LOGGED OUT'

// }
// console.log( a('raJNIsh12@GMAil.com') );
// console.log( a('rajnish@gmail.COM') );
// console.log(a('raju12@gMAIL.COM'));

//ex3   8 = exit door     >8 = boarding door

// let timeNow = 9;
// let a = "All passengers come to BOARDING DOOR 23!";

// function one(para, tm) {
//   if (tm < 8) {
//     return para;
//   } else {
//     return para.replace("BOARDING DOOR", "EXIT DOOR");
//   }
// }
// console.log(one(a, timeNow));


// pad start and pad end

// let a = 'Peach'
// console.log(a);
// console.log(a.length);

// console.log( a.padStart(8,'*') );
// // console.log( a.padStart(3,'*') );
// console.log( a.padEnd(8,'@') );
// console.log(a.padEnd(9,'^'));

// trim

// let a = '    Pe  ach      '
// console.log(a);

// console.log(a.trimStart());
// console.log(a.trimEnd());
// console.log(a.trim());

// concat

// let a = 'Peach'
// let b = 'tree'
// console.log( a.concat(b) );

// //charAt
// let a = 'Peach'
// console.log(a);

// console.log( a.charAt( 0 ) );
// console.log( a.charAt( 4 ) );

//substring

// let a = 'PeachTREE'
// console.log(a);
// console.log( 'Character is ', a.charAt(6) );
// console.log('---------------------------');
// // console.log( a.substring(4) );
// // console.log( a.substring(6) );
// // console.log( a.substring(3) );

// // console.log( a.substring(1,5) );// start , end -1
// // console.log( a.substring(2,7) ) // 2,6
// console.log( a.substring(1,5) )

// console.log(a);

//substr

// let a = 'PeachTREE'
// console.log(a);
// console.log( a.charAt( 2 ) );

// // console.log( a.substr(6) );
// // console.log( a.substr(3) );
// console.log( a.substr(1,4) );// start index Num, length
// console.log( a.substr(2,7) )

//slice
// let a = 'PeachTREE'
// console.log(a);
// console.log(a.length);

// console.log( a.charAt( 3 ) );

// console.log( a.slice(1) );
// console.log(a.slice(5));

// console.log( a.slice( 2, 6 ) );// start, end-1
// console.log( a.slice( 4, 8 ) );
// console.log( a.slice(7,4) );//Not Possible

// console.log( a.slice(-4) );

//               start = 3  end = 7-1 =6   
// console.log( a.slice(-6,7) );// start, end -1
// console.log( a.slice(3,7) );

//ex4

// const sendSMS = para =>{

//     console.log(para);
// let a = para.slice(-4)
// console.log(a);

// return a.padStart(para.length,'*')

// }
// console.log( sendSMS('9231817684') );

//charat
// console.log( a.charAt(7) );

//lowrcase uppercase replace
// console.log( a.toLowerCase() );
// console.log( a.toUpperCase() );
// console.log(a.replace('PEA',85));

//paddstart padend

// let a = 'onion'
// console.log(a);
// console.log( a.length );

// console.log( a.padStart(7,'S') );
// console.log( a.padEnd(7,'S') );

//trim trimstart trimend

// let a = '   onion   '
// console.log(a);
// console.log( a.length );
// console.log('*********');
// let b = a.trim()
// console.log(b);
// console.log(b.length);
// console.log('*********');
// let c = a.trimStart()
// console.log(c);
// console.log(c.length);
// console.log('*********');
// let d = a.trimEnd()
// console.log(d);
// console.log(d.length);

// console.log('***********');

//indexOf
// let b = 'St raw'
// console.log(b);
// console.log( b.length );

// console.log( b.indexOf('S') );
// console.log( b.indexOf('t') );
// console.log( b.indexOf(' ') );
// console.log( b.indexOf('r') );

//includes

// let b = 'Berries are not eaten with Straw'
// console.log(b);
// console.log( b.length );

// console.log( b.includes('Berries')  );
// console.log( b.includes('Berry')  );
// console.log( b.includes('eat')  );

// Methods for creating Sub String
// slice

// let a = 'StrawBerry'
// console.log(a);
// console.log('******');
// console.log(a.charAt(3));
// console.log('******');

// console.log( a.slice(3) );
// console.log( a.slice(5) );
// console.log( a.slice(3,7) );// start 3 end 7-1
// console.log( a.slice(1,4) );//

// console.log( a.slice(-5) );


//split JoIN

// let a = 'RivernileinEgypt'
// console.log(a);
// console.log('******');
// console.log(a.charAt(0));
// console.log('******');

// let b = a.split('')
// console.log(b);

// let c = b.join('3')
// console.log(c);

//exercise

//ex1

// function one(para){

// console.log(para);
// let a = para.toLowerCase();
// console.log(a);

// if( a.includes('burger') || a.includes('soft-drink') || a.includes('desert') ){
//     return 'Food is not Allowed Here'
// }else  {
//     return 'Enjoy your Movie'
// }

// }
// console.log( one('I AM EAting a BurGER') );
// console.log('********');
// console.log( one('I am FEELING cold here') );

//2

// let userdata = 'appu12@yahoo.com'

// function one(para){

// console.log(para);
// let emailLower = para.toLowerCase()
// console.log(emailLower);
// if( userdata.includes(emailLower) ) return 'LOGGED IN'
// else return 'Access ✋🚫 Denied'

// }
// console.log( one('APPU12@yahoo.Com') );
// console.log('********');
// console.log( one('APPU@12yahoo.Com') );

//ParseInt = parses a string

// let a = '1932' 
// console.log(a);
// console.log(typeof a);
// console.log('********');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('********');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = '19 32' 
// console.log(a);
// console.log(typeof a);
// console.log('********');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('********');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = ' 19 32' 
// console.log(a);
// console.log(typeof a);
// console.log('********');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('********');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = 'Tr19 32' 
// console.log(a);
// console.log(typeof a);
// console.log('********');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('********');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = '1932 hours' 
// console.log(a);
// console.log(typeof a);
// console.log('********');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('********');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = 'hours' 
// console.log(a);
// console.log(typeof a);
// console.log('********');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('********');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = ' 1 932hours' 
// console.log(a);
// console.log(typeof a);
// console.log('********');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('********');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

//ex3 

// let timeNow = '2100 hours'
// let msg = 'Boarding Gates are OPEN'

// function one(timeNowPara,displayMSG){

//     let a = parseInt(timeNowPara)
//     console.log(a);
//     if( a<2000) return displayMSG+' ✈️'
//     else return displayMSG.replace('OPEN','🚫 CLOSED')

// }
// console.log( one( timeNow,msg ) );
// console.log('********');
// console.log( one( '2000 hours',msg ) );
// console.log('********');
// console.log( one( '1900 hours',msg ) );

// //ex4 9876543210   =   ****3210 

// // function one(para){

// // console.log(para);
// // let a = para.slice(-4)
// // console.log(a);
// // let b = a.padStart('10','*')
// // return b

// // }
// // console.log(one('9876543210'));

// //ex5     kITe = Kite 

// // function one(para){
// //     console.log(para);

// // let a = para.toLowerCase();
// // console.log(a);
// // let  b = a[0].toUpperCase();
// // console.log(b);
// // let c = a.slice(1)
// // console.log(c);
// // return b+c
// // }

// // console.log( one('kITe') );
// // console.log('********');
// // console.log( one('onION') );

// //ex6  car rac    rat  tar

// // function one(para){
// // console.log(para);

// // let a = para.split('')
// // console.log(a);
// // let b = a.reverse()
// // console.log(b);

// // return b.join('')

// // }
// // console.log( one('Well') );
// // console.log('********');
// // console.log( one('onION') );

// // function one(para){
// //     console.log(para);
    
// //     let a = para.split('')
// //     console.log(a);
// //     // console.log(a.length,' A"s length');
   
// // let b = []

// //     for(let i=a.length-1; i>=0;i--){
// //         // console.log(i);
// //         // console.log( a[i] );
// //         b.push(a[i])
// //     }
// //     console.log(b);
// //     return b.join('')
    
// //     }
//     // console.log( one('Well') );
//     // console.log('********');
//     // console.log( one('onION') );

// //7 lion => niol   one = eno      in

// // function one(para){

// // console.log(para);
// // if(para.length>=3){
// // let a = para[0]
// // console.log(a);
// // let b = para.slice(-1)
// // console.log(b);
// // let c = para.slice(1,para.length-1)// lion. slice( 1,3 ) = 1,2
// // console.log(c);
// // return b+c+a
// // }
// // else return 'Min number of characters should be 3'

// // }
// // console.log( one('lion') );
// // console.log('********');
// // console.log( one('Well') );
// // console.log('********');
// // console.log( one('onION') );

// //8       Star= tar    tree=tree

// // function one(para){

// // console.log(para);
// // let a = para.toLowerCase();
// // console.log(a);
// // if( a[0]==='s'  ){
// // let b = a.slice(1)
// // return b
// // }else return para

// // }

// // console.log( one('Snake') );
// // console.log('********');
// // console.log( one('onION') );
// // console.log('********');
// // console.log(one('surf'));

// //9

// // console.log( 'ANT'.includes('ANTWERP')  );

// // function one(para){
// // console.log(para);
// // let a = para.toLowerCase();
// // console.log(a);
// // if( a.includes(para) ) return para.toUpperCase()
// // else return para.toLowerCase()
// // }
// // console.log( one('piano') );
// // console.log('********');
// // console.log(one('SURF'));

// // 10   TiGEr  = tIgeR

// //11 top of the world === Top Of The World

// function one(para){
// console.log(para);

// let a = para.split(' ')
// // console.log(a);
// let b = ''
// for(let i=0;i<a.length;i++){
//     // console.log(i);
//     // console.log( a[i][0].toUpperCase()+a[i].slice(1)  );
// b+= a[i][0].toUpperCase()+a[i].slice(1)+' ' 
// }
// // console.log(b.trim());
// return b.trim()
// }
// console.log( one('top of the world') );

// // function one(para){
// //     console.log(para);
    
// //     let a = para.split(' ')
// //     console.log(a);
// //    let b = a.join('')
 
// //     // console.log(b.trim());
// //     return b
// //     }
// //     console.log( one('top of the world') );


// console.log( 'pen'.length );
// methods
// console.log( 'pen'.toUpperCase()  );
// console.log( 'pen'.slice() );

//Array

// let a  = 'Jam'
// let b = 66
// let c = true

// let e = new Array('Jam',66,true)
// console.log(e);

// let d = ['Jam', 66 , true]
// console.log(d);
// console.log(d.length);

// // console.log( d[0] );
// // console.log( d[1] );
// // console.log( d[2] );

// for(let i = 0; i < d.length; i++){
//     console.log( `${d[i]} has index value = ${i}` );
// }

//----------------------------

// const a = 'Lemon'
// const a = 45
// a = 'FALSE'

// const arr = [44,55,66]
// console.log(arr);

// arr[3]= 'FISH'
// arr[0] = 'well'
// delete arr[3]

// console.log(arr);


// const arr = [44,55,66]
// console.log('Arr says ',arr);

// const b = arr
// b[0]='TIGER'

// console.log('B says ',b);
// console.log('Arr says ',arr);

//----------------------
// const arr = new Array(44,55,66)
// // const arr = [44,55,66]
// console.log('Arr says ',arr);
// console.log(typeof arr);

// console.log(arr.length);

// // console.log('***********');
// // let b = arr.toString() 
// // console.log(b);
// // console.log( typeof b );
// // console.log('***********');

// // // to check an array
// console.log( Array.isArray(arr) );
// console.log( arr instanceof Array );

// LOOPS in arrays

//for loop
// let a = [11,22,33,'Kite',true]
// console.log(a);
// console.log('Length of a ',a.length);

// //
// for (let i = 0; i < a.length; i++) {
//     console.log( a[i] );
// }

// console.log('***********');

// //for of
// for(const result  of a) {
//     console.log(result);
// }

// console.log('***********');

// //for in 
// for(const result  in a) {
//     console.log(result);
// }
// console.log('***********');
// //foreach = looping arrays , it never return , if so it shows undefined
// // x= element    y = index of element   z = origin OF each element
// let b =  a.forEach( (x,y,z)=>{
// // console.log(x);
// // console.log(y);
// // console.log(z);
// // return x 
// } )
// console.log(b);


// ex 

// function one(para){
// console.log(para);

// let a = para.split(' ')
// console.log(a);
// let b = []

// for(let result of a){
// //    console.log( result  );
//  b.push(result[0].toUpperCase() + result.slice(1)) 

// }
// console.log(b);
// return b.join(' ')

// }
// console.log( one( 'sky is heaven' ) );

//basic array methods

// let a = [11,22,33,'Kite',true]
// console.log(a);
// console.log('A"s length is '+a.length);

// console.log( a.push('YETI')  );
// console.log( a.pop()  );
// console.log( a.unshift('YETI')  );
// console.log( a.shift()  );

// console.log(a);
// console.log('A"s length is '+a.length);

// function one(para){
//     console.log(para);
    
//     let a = para.split(' ')
//     console.log(a);
//     let b = []
    
//     for(let result of a){
//     //    console.log( result  );
//      b.unshift( result[0].toUpperCase() + result.slice(1) ) 
    
//     }
//     console.log(b);
//     return b.join(' ')
    
//     }
//     console.log( one( 'sky is heaven' ) );

// let a = [11,22,33]
// console.log(a);
// let b = ['A','B','C']
// console.log(b);
// let c = ['cat','rain','ice']
// console.log(c);

// console.log('************');

// let d = a+b+c
// console.log(d);
// console.log(typeof d);

// console.log('************');

// let e = [ a,b,c ]// [ [],[],[] ]
// console.log(e);

// console.log('************');

// let f = a.concat(c,b)
// console.log(f);

// console.log('************');
// // spread operator = ... (on RHS)

// let g = ['PEn',...a,987654321,...b,'ORANGE',...c]
// console.log(g);

//ARRAY DESTRUCTURING

// let a = [11,22,33,'Kite',true]
// console.log(a);

// let a1 = a[0] 
// console.log(a1 * 10 );

// let a2 = a[1] 
// console.log(a2 * 10 );

// let a3 = a[2] 
// console.log(a3 * 10 );

// let [a1,a2,a3,a4,a5] = a
// console.log(a1,a2,a3,a4,a5);

//REST OPERATOR ...(LHS), it binds the element into an array

// let [a1,a2,...a3] =  a
// console.log(a1, a2, a3);

// //SPREAD = acts as a liberator
// let b = [ ...a ]
// console.log(b);

//indexOF

// let a = [11,22,33,'Kite',true]
// console.log(a);
// console.log( a.indexOf(true) );
// console.log( a.indexOf('TRUE') );

//includes

// let a = [11,22,33,'Kite',true]
// console.log(a);

// console.log( a.includes(33) );

//foreach  pop push shift unshift

//find

// let a = [11,49,22,45,76,51,89]
// console.log(a);
// let b = a.find((ele)=>{
// //    return ele===49
// return ele > 50
// })
// console.log(b);

//filter = returns filtered array
// let a = [11,49,22,45,76,51,89]
// console.log(a);
// let b = a.filter((ele)=>{
// //    return ele===49
// return ele > 50
// })
// console.log(b);

//map = return new array 
// let a = [11,49,22,45,76,51,89]
// console.log(a);
// let b = a.map((ele,index)=>{
//    return ele * index
// // return ele+' '+'JIMMY 🚫 SHERGILL'
// // return ele > 50
// })
// console.log(b);


// // console.log( 76 > 50 );

// console.log('************');

// let c = a.filter((ele,index)=>{
//     //    return ele * index
//     // return ele+' '+'JIMMY 🚫 SHERGILL'
//     return ele > 50
//     })
//     console.log(c);

// console.log('************');

// //foreach never returns
// a.forEach(ele=>console.log(ele))

//flat
// let a = [1,[2,[3,[4,[5,6]]]]]
// console.log(a);
// console.log( a.flat( 1 ) );
// console.log( a.flat( 2 ) );
// console.log( a.flat( 3 ) );
// console.log( a.flat( 4 ) );

// console.log(a.flat(Infinity));


//reduce
// let a = [1,2,3,4]
// console.log(a);
//w = accumulator
//x = element
//y = index
//z= elem's origin

// let b = a.reduce((w,x,y,z)=>{
//     // return w
// return w + x
// })
// console.log(b);

// w  x   return
// 0  1    1
// 1  2    3
// 3  3    6
// 6  4    10


//CHAIN METHOD
// let a =  [1,[2,3,[4,[5,[6,7]]]]]
// console.log(a);

// // let b = a.filter(ele=> ele >40 )
// // console.log(b);

// let b = a
// .flat(Infinity)
// .filter(ele=>ele>3)
// .map(ele=>ele*10)
// .reduce((a,b)=>a+b)


// console.log(b);

//sort
//sorted on basis of thier Encoded Byte (UTF8)
// let a = ['r','S','y','W','a','R','C']
// console.log(a);
// console.log( a.sort() );

// let a = [45,34,84,93,10]
// console.log(a);

// // console.log(a.sort());

// // let a = [10045,34,284,193,90]
// // console.log(a);

// // console.log(a.sort());

// //---------------------------------

// // x-y  -ve   return x then y 
// //x-y   +ve   return y then x
// //x-y    0    return  no change

// let c = a.sort((x,y)=>{
// // return x-y  //ascending
// return y-x // descending
// })
// console.log(c);

//ascending
// x   y   x-y   return
// 45  34   +     34,45
// 34  84   -     34,84
// 84  93   -     84,93
//

//ascending
// x   y   y-x   return
// 45  34   -     45,34  
//  34  84   +    84,34  
//

//FLATMAP

// let a = [2,3,4,5]
// console.log(a);

// let b = a.map((ele)=>{
//    return    [ele*10]
// })
// console.log(b);// [ [20],[30],[40],[50]  ]

// let c = b.flat(Infinity)
// console.log(c)

// console.log('*********');;

// let e = a.map((ele)=>[ele*10]).flat(Infinity)
// console.log(e);

// console.log('*********');;

// let d = a.flatMap(ele => [ele*10])
// console.log(d);

//some and every

// let a = [1,2,3,4,5]
// console.log(a);

// let b = a.some((ele)=>{
//     return ele > 4
// })
// console.log(b);

// console.log('*********');

// let c = a.every((ele)=>{
//     return ele > 4
// })
// console.log(c);

//fill =  arr.fill(value,start,end)

// let a = ['air','rice','toy','ICE']
// console.log(a);

// let b = a.fill('nest')
// console.log(b);

// let c = a.fill('Fish',0,2)
// console.log(c);

// to Locale String = arr.LocaleString(locales,options)

// let a  = [22,33,44,55]
// console.log(a);

// console.log('*********');

// let b = a.toString()
// console.log(b);
// console.log( typeof b );

// console.log('*********');

// let c = a.toLocaleString()
// console.log(c);
// console.log(typeof c);

// console.log('*********');

// let d = a.toLocaleString('en-US',{style:'currency',currency:'USD'})
// console.log(d);

// console.log('*********');

// let e = a.toLocaleString('ja-JP-u-ca-japanese',{style:'currency',currency:'YEN'})
// console.log(e);


// Sub Arrays

//slice = does not mutates

// let a = [1,2,3,4,5,6,7,8,9,10]
// console.log(a);

// // console.log(a.slice(5));
// console.log( a.slice(3,7) );// start  end-1

// console.log(a);

// console.log('*********');

// //splice

// // console.log( a.splice(5) );

// // console.log( a.splice( 4,3 ) );// start  length
// // console.log( a.splice(1,4,'SEVEN') );
// // console.log( a.splice(1,4,[45,67,89]) );

// let f = a.splice(2,4,'PIGEON')
// console.log(f.map(ele=>ele*100)  );

// console.log(a);

//reduce  = arr.reduce(cb(accumulator,currentvalue),initialvalue)

//accumulator = accumulates return value
//currentvalue = element being passed from array
//initialvalue(optional) = 
//if entered, it is passed into the callback
//if not then the first elemnet of currentvalue acts like an accumulator for the first time.

// let a = [1,2,3,4]
// console.log(a);
// let b = a.reduce( (acc,cv)=>{
//     return acc
// } )
// console.log(b);

// console.log('************');

// let c = [1,2,3,4]
// console.log(c);
// let d = a.reduce(  (acc,cv)=> {
//     return acc
//  },999)
// console.log(d);
 
// console.log('************');

// let a = [1,2,3,4]
// console.log(a);

// let b = a.reduce(  (acc,cv)=> {
//     return acc+cv
// },999)
// console.log( b );

// // acc  cv  return
// // 999  1    1000
// // 1000  2    1002
// // 1002  3    1005
// // 1005  4    1009

// let a = [1,2,3,4]
// console.log(a);

// let b = a.reduce(  (acc,cv)=> {
//     return acc+cv
// })
// console.log( b );

// acc  cv  return
// 1     

// console.log('************');

// let a = [199,445,'GRASS','Leo']
// console.log( a );
// console.log( a.indexOf( 'Leo' ) );
// console.log( a.indexOf( 'messi' ) );

// let b = ['GRASS','Leo',199,'LEO',445,'GRASS','Leo']

//  [ 45,67 ].push(['GRASS','Leo',199,'LEO',445,'GRASS','Leo'])

//if indexof is -1 for all element then push if not then dont

// console.log([45,67,'LEO'].indexOf('LEO'))

// let a = ['GRASS','Leo',199,'LEO',445,'GRASS','Leo']

// let b = a.reduce((acc,cv)=>{
// if(acc.indexOf(cv)=== -1){
//     acc.push(cv)
// }
// return acc
// },[])
// console.log(b);

// acc                         cv      return
// []                         GRASS       [GRASS]
// [GRASS]                     Leo        [GRASS,Leo]
//[GRASS,Leo]                  199        [GRASS,Leo,199]
// [GRASS,Leo,199]             LEO          [GRASS,Leo,199,LEO]
//[GRASS,Leo,199,LEO]         445       [GRASS,Leo,199,LEO,445]
//[GRASS,Leo,199,LEO,445]    GRASS         0 
//[GRASS,Leo,199,LEO,445]     Leo          1
//[GRASS,Leo,199,LEO,445]

// let a  = {
//     name:'Jimmy',
//     age:56
// }
// console.log(a);
// console.log( typeof a);

// console.log('*********');

// let b = {
//     name:'Jimmy',
//     age:56
// }
// console.log(b);

// let c = b
// c.name = 'Jenny'

// console.log(c);

// console.log(b);

//--------------------------------------

// let z = 'INIDA'
// console.log( z );
// console.log( z.length );

// {} = object literal

// let a  = {
// //  key: value                 key:value pair == property
//     name:'Jimmy',
//     age:56
// }

// console.log(a);
// console.log( typeof a);

// //DOT MEthod
// console.log( a.name );
// console.log( a.age );


// //Bracket Method
// console.log( a["name"] );
// console.log( a["age"] );

// //-------------------
// let b = Object.keys(a)
// console.log(b);

// let c = Object.values(a)
// console.log(c);

// let d = Object.entries(a)
// console.log(d);// [ [k:v],[K;v]  ]
// console.log( d.flat() );


// let foodCenter ={
//     name:'Sharda Soda Center',
//     location:'13/1 Camac Street, Kolkata',
//     capacity:1000,
//     menu:['Soft Drinks','Deserts','Vegetation'],
//     parkingSpaceAvailability:true,
//     timings:{
//         breakfast:{ from:8,to:11 },
//         lunch:{ from:13,to:17 },
//         dinner:{ from:18,to:22 }
//     }   
// }

// console.log(foodCenter);

// console.log( foodCenter.name );
// console.log( foodCenter.location );
// console.log( foodCenter.menu );
// console.log( foodCenter["parkingSpaceAvailability"] );

// console.log('******');
// console.log( foodCenter.timings.breakfast.to );
// console.log( foodCenter.timings.dinner.to );
// console.log( foodCenter["timings"]["lunch"]['from'] );


//-----------------------------------


//Method = func inside an object

// this in object method, refers to object itself
//in function it refers to global object



// let a = {
// name:'Henry',
// age:18,
// greet:function(){
//     return `Hello ${this.name}`
// }
// }

// console.log(a);
// console.log( a.greet() );

// \-------------------------

// let arr = [56,78,90]
// console.log(arr);
// console.log( arr.length );
// console.log( arr.reverse() );

// console.log('*********');

// const name = 'Laxman'

// let a = {
//     name:'Henry',
//     age:18,
//     // greet:function(){
//     //     return `Hello ${this.name}`
//     // }
//     greet(){ return `Hello ${this.name}`}
//     // greet:()=>{
//     //     return `Hello ${this.name}`
//     // }

//     }
    
//     console.log(a);
//     console.log( a.greet() );

//Ex1
// let a = {
//     name:'Rahul',
//     birthYear:2000,
//     age(){
//         return 2023 -this.birthYear
//     }
// }

// let b = {
//     name:'Silvester',
//     birthYear:2010,
//     age(){
//         return 2023 -this.birthYear
//     }
// }

// console.log( 'Rahul age ',a.age() );          
// console.log( 'Sylv age ',b.age() );      

// let c  = ( a.age() > b.age()  ) ? 'Rahul is Elder' : 'Sylvester is Elder'
// console.log(c);

//------------------------------
 //call  and apply 

//  let a = {
//     name:'Rahul',
//     birthYear:2000,
// }

// let b = {
//     name:'Silvester',
//     birthYear:2010,
// }

// let age = function(){
//     return `The age of ${this.name} is ${2023 -this.birthYear}`
// }

// let intro = function(para1,para2){
//     return ` My name is ${this.name} and i love ${para1} and ${para2}`
// }

// let d = age.call(a)
// console.log(d);

// let e = age.call(b)
// console.log(e);

// let f = intro.call(a,'Cooking','Dancing')
// console.log(f);

// let g = intro.call(b,'Reading Novels','Swimming')
// console.log(g);

// console.log('*********');

// //apply

// let h = intro.apply(a,['Cooking','Dancing'])
// console.log(h);

//----------------------

// function one(){
//     return 'ONE FUNC'
// }

// let a = one
// console.log( a() );

//bind

// let a = {
//     registratioNumber:'TR345b',
//     brand:'Mahindra',
//     carDetails(){
//         return `${this.brand} ${this.registratioNumber}`
//     }
// }


// let b = a.carDetails
// console.log('From b '+ b);

// let c  = a.carDetails.bind(a)
// console.log(c);
// console.log(c());

// var x =900

// function a(){
//     let x = 55
// return this.x
// }
// console.log( a() );

// var age = 55

// let b = {
//     name:'Darny',age:34,
//     calcAge(){ return this.age*1000 }
// }
// console.log( b.calcAge() );


//object destructuring

// let foodCenter ={
//     name:'Sharda Soda Center',
//     locatdAt:'13/1 Camac Street, Kolkata',
//     capacity:1000,
//     menu:['Soft Drinks','Deserts','Vegetation'],
//     parkingSpaceAvailability:true,
//     timings:{
//         breakfast:{ from:8,to:11 },
//         lunch:{ from:13,to:17 },
//         dinner:{ from:18,to:22 }
//     }   
// }

// console.log(foodCenter);
// console.log( foodCenter.capacity );
// console.log( foodCenter.menu );
// console.log( foodCenter.parkingSpaceAvailability );

// console.log( capacity );// N.Def
// console.log('************');

// let {name,locatdAt,menu,timings} = foodCenter
// console.log( name );
// console.log( locatdAt );
// console.log(menu);
// console.log(timings);

// console.log('************');

// let {name:w,locatdAt:x,menu:y,timings:z} = foodCenter
// // console.log(name);
// // console.log(locatdAt);
// // console.log(menu);

// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);

// console.log('************');

// // console.log( foodCenter.timings.lunch.from );

// // let { timings:{dinner:{from}} } = foodCenter

// // // console.log(timings);
// // // console.log(dinner);
// // console.log(from);


// let { timings:{breakfast:{to}} } = foodCenter
// // console.log(timings); // N.D
// // console.log( breakfast ); // N.D
// console.log(to);

// optional chaining

// let foodCenter = {
//     name:'Sharda Soda Center',
//     locatdAt:'13/1 Camac Street, Kolkata',
//     capacity:1000,
//     menu:[ {flavour:'spicy'} ,'Deserts','Vegetation'],
//     parkingSpaceAvailability:true,
//     timings:{
//         breakfast:{ from:8,to:11 },
//         lunch:{ from:13,to:17 },
//         dinner:{ from:18,to:22 }
//     },
//     greet(){
//         return `Welcome to ${this.name} we are ready to serve you at ${foodCenter.locatdAt}`
//     }   
// }

// console.log(foodCenter);

// console.log( foodCenter.storename );
// // console.log( foodCenter.storemenu[0].flavour );
// // console.log( foodCenter.storetimings.lunch );


// console.log( foodCenter.storename );
// console.log( foodCenter.stormenu[2] );
// console.log( foodCenter.storemenu?.[0].flavour );
// console.log( foodCenter.menu?.[0].flavour );


// console.log( foodCenter.storetimings );
// console.log( foodCenter.storetimings.lunch );
// console.log( foodCenter.storetimings?.lunch );
// console.log( foodCenter.timings?.lunch );

// console.log( foodCenter.greet());
// console.log(foodCenter.greetus?.());
// console.log(foodCenter.greet?.());

// /Nullish operator ??

// console.log( foodCenter.storemenu?.[0].flavour  ?? 'Data not Accessible' );
// console.log( foodCenter.menu?.[0].flavour  ?? 'Data not Accessible' );

// console.log( foodCenter.storetimings?.lunch ?? 'Access denied');
// console.log( foodCenter.timings?.lunch ?? 'Access denied');

// console.log(foodCenter.greetus?.() ?? 'Methods not Found');
// console.log(foodCenter.greet?.() ?? 'Methods not Found');

// N . B

//ARRAY of Object

// Array of Obbjects

// const account1 = {
//     owner: 'Jonas Schmedtmann',
//     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2, // %
//     pin: 1111,
//   };
  
//   const account2 = {
//     owner: 'Jessica Davis',
//     movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//     interestRate: 1.5,
//     pin: 4444,
//   };
  
//   const account3 = {
//     owner: 'Steven Thomas Williams',
//     movements: [200, -200, 340, -300, -20, 50, 400, -460],
//     interestRate: 0.7,
//     pin: 3333,
//   };
  
//   const account4 = {
//     owner: 'Sarah Smith',
//     movements: [430, 1000, 700, 50, 90],
//     interestRate: 1,
//     pin: 4444,
//   };

//   const accounts = [account1, account2, account3, account4];// array of objects
//   console.log(accounts);

// let arr = [ 34,56,78,90]
  //map = returns a new array
// let a = arr.map((ele)=>{
// return ele*100
// })
// console.log(a);

// let a = accounts.map((ele)=>{
//     return ele.owner
// })
// console.log(a);

// let b = accounts
// .map((ele)=>ele.pin)
// .reduce((acc,cv)=>{
// if(acc.indexOf(cv)=== -1){
//     acc.push(cv)
// }
// return acc
// },[])
// console.log(b);

// let c = accounts
// .map(ele=>ele.movements)
// .flat(Infinity)
// .filter(ele=>ele>0)
// .reduce((acc,cv)=>acc+cv)

// console.log(c);

// // let a = [66,33,66,8,33,55,44]
// // console.log(a);

// // let b = [...new Set(a)]
// // console.log(b);

// // console.log('**********');

// // array of objects
// //object =
// // let c = { age:56 }
// // console.log(c);

// // JSON = text = {}
// // let d = {"age":"56"}

// // let z = [89,67,34]
// // console.log(z);
// // console.log( [...z] );

// // let [x, ...y ] = z
// // console.log( x, y );

// // let c = [ {id:'a'},{id:'b'},{id:'c'},{id:'b'},{id:'a'} ]
// // console.log(c);
// // // JSON.parse = json-->js object
// // //json stringify = js object ---> JSON

// // //object to json
// // let d = c.map(JSON.stringify)
// // console.log(d);

// // // json set to json  array
// // let e = [...new Set(d)]
// // console.log(e);

// // //json to object
// // let f = e.map(JSON.parse)
// // console.log(f);

// console.log("****************");

// // let b = {{age:56}:'Shyam'}
// // console.log(b);

// // let a = new Map();
// // console.log(a);

// // a.set('name','Manushi Chillar Boutique')
// // a.set(1,'67/1 Ralphson Street' )
// // a.set(2,'New Delhi,India')
// // a.set('categories',['Lehenga'])

// // a
// // .set('open',10)
// // .set('close',22)
// // .set(true,'parkingSpace Available For You')
// // .set(false,'Shop is Closed Thanks For Visiting')
// // // a.delete(2)
// // // a.clear()

// // console.log(a);

// // console.log( a.has('opened') );

// // console.log(a.size);
// // console.log( a.get('name') );
// // console.log( a.get(1) );
// // console.log( a.get(2) );
// // console.log( a.get('open') );

// // let visitingAt = 23
// // //           a.get(             true           &&      true                                                    )
// // console.log( a.get( visitingAt > a.get('open') && visitingAt < a.get('close')  ) );

// //exercise
// // let o = {
// //     question:'Best Programming language ?',
// //     1:'C',
// //     2:'C++',
// //     3:"Java",
// //     4:"JS",
// //     true:"Correct Answer",
// //     false:"Try Again"
// // }
// // console.log(o);
// // console.log(Object.keys(o));
// // console.log(Object.values(o));
// // console.log(Object.entries(o));

// // let om =new Map(Object.entries(o))
// // console.log(om);

// console.log("*************");

// let o =  new Map([
//     ["question", "Best Programming language ?"],
//     [1, "C"],
//     [2, "C++"],
//     [3, "Java"],
//     [4, "JS"],
//     ['correct',4],
//     [true, "Correct Answer"],
//     [false, "Try Again"],
// ]);
// console.log(o);

// // console.log( o.get('question') );

// for(let [key,value] of o ){
//     // console.log(`Answer ${key}: ${value}`);
//     if(typeof key === 'number'){
//         console.log(`Answer ${key}: ${value}`);
//     }
// }

// let myAnswer = +prompt('Enter Your Answer')
// console.log(myAnswer);
// console.log( typeof myAnswer );

// //          o.get(         4        === 3         )
// console.log( o.get( o.get('correct')===myAnswer  ) );