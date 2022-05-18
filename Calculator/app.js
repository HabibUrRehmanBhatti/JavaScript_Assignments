let num1 = +prompt("Please enter num 1")
let num2 = +prompt("Please enter num 2")
let opt = prompt("Please enter opt(+-*/)")
let result;
if(opt === "+"){
    result= num1 + num2
}
if(opt === "-"){
    result= num1 - num2
}
if(opt === "*"){
    result= num1 * num2
}
if(opt === "/"){
    result= num1 / num2
}

document.write(result)