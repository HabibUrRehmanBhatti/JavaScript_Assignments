// ===================== Task # 1  =====================

// var today = new Date();
// alert(today)

// ===================== Task # 2  =====================


// var d = new Date().getMonth();
// var month = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
// var n = month[d];
// alert(n)


// ===================== Task # 3  =====================


// var today = new Date().getDay();
// var todayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var todayStr = todayArr[today];
// alert(todayStr)


// ===================== Task # 4  =====================


// var today = new Date().getDay();
// var todayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var todayStr = todayArr[todayArr];
// alert(todayStr)
// if(todayStr == "Sunday" || todayStr == "Saturday"){
//     alert("Today is a funday")
// }


// ===================== Task # 5  =====================


// var today = new Date().getDate();
// if(today < 15){
//     alert("First Fifteen Days Of The Month")
// }else{
//     alert("Last Fifteen Days Of the month")
// }

// ===================== Task # 6  =====================


// var today = new Date();
// document.write("Current Date is " + " " + today + "<br>");
// var milliSec = today.getTime();
// document.write("Elased MilliSecond Since Jan 1 , 1970 is :  " + " " + milliSec + "<br>");
// var minute = new Date("1-1-1970").getMinutes();
// document.write("Elased Minute Since Jan 1 , 1970 is :  " + " " + minute);


// ===================== Task # 7  =====================

// var timeToCheck = new Date().getHours();
// if(timeToCheck < 12){
//     alert(timeToCheck + " " + "And its " + " " + "AM" )
// }else if(timeToCheck > 12){
//     alert(timeToCheck + "And its " + "PM" )
// }


// ===================== Task # 8  =====================


// var a = new Date();
// var b = a.setFullYear(2023);
// var c = a.setMonth(11);
// var d = a.setDate(31);
// var e = a.setHours(0);
// var f = a.setMinutes(0);
// var e = a.setSeconds(0);
// document.write('<h1>' +  'Later Time' + '</h1>' +  ' ' + ' ' +   a  + '<br>')
   

// ===================== Task # 9  =====================


// var pastRamdan = new Date("June 18, 2015").getTime();
// var today = new Date().getTime();
// var diff = today - pastRamdan;
// var ceilDiff = Math.ceil(diff / (60 * 60 * 24 * 365));
// alert(ceilDiff + " " + "Days Has Been Passed!")


// ===================== Task # 10  =====================

// var a = new Date();
// var b = a.setFullYear(2015);
// var c = a.setMonth(11);
// var d = a.setDate(5);
// var e = a.setHours(22);
// var f = a.setMinutes(50);
// var g = a.setSeconds(16);
// var i = new Date;
// var j = i.setFullYear(2015);
// document.write( j + ' ' + ' ' + 'Second has passed away since the begning of 2015')


// ===================== Task # 11  =====================


// var today = new Date();
// var time = today.getHours()+1 + ":" + today.getMinutes() + ":" + today.getSeconds();
// alert(time)


// ===================== Task # 12  =====================



// var today = new Date();
// var centuryBack = new Date()
// var setback = centuryBack.setFullYear(1922)
// console.log(today + "<br>")
// console.log(centuryBack + "<br>")


// ===================== Task # 13  =====================


// var dobPick = prompt("Enter Your Date Of Birth")
// var dob = new Date(dobPick).getTime(); 
// var today = new Date().getTime();
// var diff = today - dob;
// var diffceil = Math.ceil(diff / (1000*60*60*24*365));
// document.write("<h1>" + " You Age is : " + diffceil);
// document.write("<h1>" + "Your DOB is : " + dobPick);


// ===================== Task # 14  =====================

// var a = 'K- Electric';
// document.write('<h1>' + '<u>' + a + '</u>' +'</h1>')
// var str = prompt('Enter your name');
// var res = str.toUpperCase();
// document.write('<h1>' + 'Costumer Name:' + ' ' + ' ' +  str +'</h1>')
// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
//  document.write('<h1>' +  'Month  :' + ' ' + n  + '</h1>')
//  var e = +prompt('Number Of Units')
//  var f = e.toFixed(2)
//  document.write('<h2>'  + 'Number Of Units :' + ' ' + f + '</h1>')
//  document.write('<h2>'  + 'Charge Per Units :' + ' ' + '16' + '</h1>')
//  document.write('<br>');
//  document.write('<br>');
//  var g = f * 16;
//  document.write( '<h2>' + 'Net Amount Payable (within Due Date) :'  + ' ' + g + '</h1>')
//  document.write('<h2>' + ' Late Payment Surcharge :' + '350' + '</h1>')
// document.write('<h2>' + ' Gross Amount Payable (after Due Date) :' + (g + 350)  + '</h1>')