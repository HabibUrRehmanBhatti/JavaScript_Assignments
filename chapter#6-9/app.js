
   
// -------- Chapter # 6-9 ----------- 

// Task 1
let a = 10;
document.write("Result: <br>");
document.write("Value of a is: " + a + "<br><br>")
a = ++a;
document.write("Value of ++a is: " + a + "<br>")
document.write("Now the value of a is: " + a + "<br><br>")
a = a++;
document.write("Value of a++ is: " + a + "<br>")
a++;
document.write("Now the value of a is: " + a + "<br><br>")
a = --a;
document.write("The value of --a is: " + a + "<br>")
document.write("Now the value of a is: " + a + "<br><br>")
a = a--;
document.write("Value of a-- is: " + a + "<br>")
a--;
document.write("Now the value of a is: " + a + "<br><br>")

// Task 2
let a1 = 2, b = 1;
document.write("a1 is: " + a1 + "<br>")
document.write("b is: " + b + "<br>")
let result = --a1 - --b + ++b + b--;
document.write("result is: " + result + "<br><br>");

// --a1;  (here first a will be decremented and the value of a becomes 1)
--a - --b; (1 - 0)
--a - --b + ++b; (1 - 0 + 1)
--a - --b + ++b + b--; (1 - 0 + 1 + 1)

// Task 4 (Skiped in assignment file)

// Task 3
let name = prompt("Enter your name");
alert("Welcome " + name);

// Task 5
let num = prompt("Enter any num");
let ans;
for (let i = 1; i <= 10; i++) {
    if (num === "") {
        let num = 5;
        let ans;
        for (let i = 1; i <= 10; i++) {
            ans = num * i;
            document.write(num + "x" + i + "=" + ans + "<br>");
        }
    } else {
        ans = num * i;
        document.write(num + "x" + i + "=" + ans + "<br>");
    }
}

// Task 6
let sub1 = prompt("Enter name of your subject");
let sub2 = prompt("Enter name of your subject");
let sub3 = prompt("Enter name of your subject");
let totalMarks = 100;
let marksSub1 = prompt("Enter your Marks in English");
let marksSub2 = prompt("Enter your Marks in Math");
let marksSub3 = prompt("Enter your Marks in Urdu");
let totalObtMarks = +marksSub1+ +marksSub2+ +marksSub3;
let perSub1 = (marksSub1 / totalMarks) * 100;
let perSub2 = (marksSub2/totalMarks)*100;
let perSub3 = (marksSub3/totalMarks)*100;

document.write("<br><br><br><b>Subject Total Marks Obtained Marks Percentge</b> <br>");
document.write(sub1 + " &nbsp;&nbsp;&nbsp;" + totalMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSub1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perSub1 + "%" + "<br>")
document.write(sub2 + " &nbsp;&nbsp;&nbsp;" + totalMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSub2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perSub2 + "%" + "<br>")
document.write(sub3 + " &nbsp;&nbsp;&nbsp;" + totalMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSub3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perSub3 + "%" + "<br>")
document.write("<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "300" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + totalObtMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perSub1 + "%" + "</b><br>")
