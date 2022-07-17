// =========== Task # 1 =============

// function getTime(){
//     var time = new Date();
//     document.write(time)
// }
// getTime()

// =========== Task # 2 =============


// function greetUser() {
//     var fname = prompt("Enter Your First Name");
//     var lname = prompt("Enter Your Last Name");
//     document.write("Hello " + fname + " " + lname)
// }
// greetUser();


// =========== Task # 3 =============


// function sum(){
//     var num_1 = +prompt("Enter First Number");
//     var num_2 = +prompt("Enter Second Number");
//     var sum = num_1 + num_2;
//     alert("The SUM of these two numbers are : " + " " + sum)
// }
// sum();



// =========== Task # 4 =============



// function cal(){
//   var num_1 = +prompt("Enter Your 1st Number");
//   var num_2 = +prompt("Enter Your 2nd Number");
//   var sign = prompt("Enter Operator 'i-e : + , - , * , /'");
//   if(sign === "+"){
//     var sum = num_1 + num_2;
//     alert("After Additon The Result Is " + sum)
//   }
//   else if(sign === "-"){
//     var sub = num_1 - num_2;
//     alert("After Subtraction The Result Is " + sub)
//   }
//   else if(sign === "*"){
//     var mul = num_1 * num_2;
//     alert("After Multiplication The Result Is " + mul)
//   }
//   else if(sign === "/"){
//     var div = num_1 / num_2;
//     alert("After Division The Result Is " + div)
//   }
// }
// cal()


// =========== Task # 5 =============


// function sqr(){
// var arg_1 = +prompt("Enter Your Number");
// var square = arg_1 * arg_1;
// alert("Square of Your Number is " + " " + square)
// }
// sqr();


// =========== Task # 6 =============


// var num_1 = +prompt('Enter Your Number');
// function fac(num_1){
//     var c = (num_1 / num_1);
//     return c;
// }
// var g = fac(num_1);
// alert(g)


// =========== Task # 7 =============


// function count(){
//     var fnum = +prompt("Enter 1st Number");
//     var lnum = +prompt("Enter 2nd Number");
//     for(var i = fnum ; i <= lnum ; i++){
//         document.write(i + "<br>")
//     }
//     if(fnum > lnum){
//         alert("Enter Number That are in Accending Order!")
//     }
// }
// count();


// =========== Task # 8 =============



// function hypo(){
//     var base = +prompt("Enter Base");
//     var perpendicular = +prompt("Enter Perpendicular");
//     var hypotenous;
//     function square() {
//      hypotenous = (base*base)  + (perpendicular*perpendicular)
//     }
//     hypotenous = hypotenous*hypotenous;
//     document.write(hypotenous)
//     square()
// }
// hypo()


//  OR

// var a = prompt('enter 1');
// function fac(a){
//     var c = (a / a);
//     return c;
// }
// var g = fac(a);
// alert(g)


// =========== Task # 9 =============

// var width = prompt("Enter a whole number for the width of your rectangle.");
// var height = prompt("Enter a whole number for the heigth of your rectangle.");
// function area(width, height) {
//     var res = width * height
//     document.write(res);
// }
// area(width,height)

// =========== Task # 10 =============

// function palindrome(){
//     var str = prompt("Enter Your Word");
//     var strReverse = str.split("").reverse().join("");

//     if (str === strReverse) {
//       alert("The string is a palindrome");
//     } else {
//       alert("NOT a palindrome");
//     }
// }
// palindrome();


// =========== Task # 11 =============


// function uppercase(str) {
//     var arr = str.split(' ');
//     var newarr = [];

//     for (var i = 0; i < arr.length; i++) {
//         newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//     }
//     return newarr.join(' ');
// }
// document.write(uppercase(prompt("Enter Any thing.")));



// =========== Task # 12 =============


// N/A

// =========== Task # 13 =============


// function letter_count(str, letter){
//  var count = 0;
//  for (var i = 0; i <= str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       count += 1;
//       }
//   }
//   return count;
// }

// document.write("The Accourance of Letter is " + " " + letter_count(prompt("Enter any string"), prompt("Enter the letter you want to count?")));


// =========== Task # 14 =============

// document.write("<h1>"+"The Geometrizer " + "</h1>")

//     function calcCircumference(){
//         var radii = +prompt("Enter Radius Of The Circle To Find Its Circumference?");
//         var circum = 2 * Math.PI * radii;
//         document.write("The circumference is " + parseFloat(circum.toFixed(3)) + "<br>");
//     }
//     calcCircumference()

//     function calcArea(){
//         var radii = +prompt("Enter Radius Of The Circle To Find Its Area?");
//         var radiSqr = radii * radii
//         var area = Math.PI * radiSqr;
//         document.write("The area of the circle is " + parseFloat(area).toFixed(3) + "<br>");
//     }
//     calcArea()