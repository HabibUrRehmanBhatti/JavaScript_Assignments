let html = prompt("do you know html")
let css = prompt("do you know css")
let javascript = prompt("do you know javascript")


if((html === "yes"|| css==="yes") && javascript === "yes"){
    let age = +prompt("what is your age")
    if ( age >= 18){
        let city = prompt("enter your city")
        if(city= "karachi"){
            alert("u can join")
            
        }else {
            alert ("move to karachi")}
        }else {
            prompt ("u are under age")
        }
    }else{
        alert ( "get some experince")
    }
