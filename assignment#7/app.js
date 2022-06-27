// =============== TASK # 1 ===============

// var name = prompt("Enter Your Name");
// var lastName = prompt("Enter Your Last Name");
// var full_name = alert("Welcome! " + name + " " + lastName)

// =============== TASK # 2 ===============

// var mobile_model_name = prompt("Enter Your Mobile Model Name");
// var cal_length = alert(mobile_model_name.length)

// =============== TASK # 3 ===============

// var inp_1 = "Pakistani";
// var operation = inp_1.indexOf("n");
// alert(operation)

// =============== TASK # 4 ===============

// var a = "Hello World";
// var b = a.lastIndexOf("l")
// alert(b)

// =============== TASK # 5 ===============

// var a = "Pakistani";
// var b = a.charAt(3);
// alert(b)


// =============== TASK # 6 ===============

// var a = prompt("Enter Your First Name");
// var b = prompt("Enter Your last Name");
// var c = "Hello ".concat(a).concat(" ").concat(b);
// alert(c)

// =============== TASK # 7 ===============

// var a = ["Hyderabad"];
// document.write("City Name: " + a + "<br />");
// a.splice(0 , 1 , "Islamabad");
// document.write("After Changes: " + a)

// =============== TASK # 8 ===============

// var message = "Ali and Sami are best friends. They play cricket and football together";
// console.log(message)
// var replace = message.replaceAll("and" , "&");
// console.log(replace)

//  We can also do it with the following syntax ;
// a.replace(/and/g <--- This g is indicating the global )


// =============== TASK # 9 ===============


// var a = prompt("Enter any Number");
// document.write("Value : " + " " + a + "<br>")
// var b = typeof(a)
// document.write("Type : " +  " " + b + "<br>")
// var c = Number(a);
// document.write("Value : " + " " + c + "<br>")
// var d = typeof(c);
// document.write("Type : " +  " " + d + "<br>")


// =============== TASK # 10 ===============
 

// var a = prompt("Enter any word that you want to capitalize.");
// var b = a.toLocaleUpperCase();
// console.log(b);


// =============== TASK # 11 ===============

// var a = prompt("Enter any word that you want to Small.");
// var b = a.toLocaleLowerCase();
// console.log(b);
 

// =============== TASK # 12 ===============

// var a = prompt("Enter Any Number");
// document.write("Value You Entered As A Number : " + " " + a + "<br>")
// var b = a.toString().replace("." ,"");
// document.write("Value Converted in a string    : " + " " + b + "<br>")



// =============== TASK # 13 ===============


// var name = prompt('Enter a user name')
// if( name ===  '!'){
//     alert("enter a valid user name")
// }

// else if(name === ''){
//     alert('Please Fill Out this portion')
// }
// else if ( name === ','){
//     alert("enter a valid user name")
// }
// else if ( name === '@'){
//     alert("enter a valid user name")
// }
// else if ( name === '#'){
//     alert("enter a valid user name")
// }else{
//     alert("UserName Is valid")
// }


// =============== TASK # 14 ===============

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome To ABC Bakery What Do You order Sir?");
// var case_check = input.toLocaleLowerCase();
// var msg = true;
// for(i = 0;i <= arr.length;i++){
//     if(case_check === arr[i]){
//         msg = false
//         alert("Yeah ! This Item " + case_check + " is available  at this  " + i + " INDEX Number")
//     }


// }
// if(msg === true){
//     alert("This Item Is Not Available")
// }




// =============== TASK # 15 ===============

// var name = prompt('Enter a user name')
// if( name ===  '!'){
//     alert("enter a valid user name")
// }

// else if(name === ''){
//     alert('Please Fill Out this portion')
// }
// else if ( name === ','){
//     alert("enter a valid user name")
// }
// else if ( name === '@'){
//     alert("enter a valid user name")
// }
// else if ( name === '#'){
//     alert("enter a valid user name")
// }


// =============== TASK # 16 ===============

// var str = "University Of Karachi";
// for(i = 0 ; i <= str.length-1 ; i++){
//     document.write(str[i]+ "<br>")
    
    // }


// =============== TASK # 17 ===============


// var inp = prompt("Enter Any thing");
// var res = inp.charAt(inp.length-1)
// alert(res)


// =============== TASK # 18 ===============

// var con = "“The quick brown fox jumps over the lazy dog";
// var num = "";
// for(i = 0 ; i <= con.length ; i++){
//     if("the" === con.length){
//         num += 1;
//     }
//     console.log(num)
// }