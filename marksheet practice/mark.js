
var name = prompt("enter your name");
var roll = prompt("Enter your roll number");
var standard = prompt("Enter your standard number");
var hindi = prompt("Enter your hindi marks");
var english = prompt("Enter your english marks");
var physics = prompt("Enter your physics marks");
var chemistry = prompt("Enter your chemistry marks");
var urdu = prompt("Enter your urdu marks");
var obtained_marks = parseFloat(hindi) + parseFloat(english) + parseFloat(physics)
                    + parseFloat(chemistry) + parseFloat(urdu);
var parseFloat = obtained_marks*100/500;

document.write("Your Name is: " + name + " <br/>");
document.write("Your Roll number is: " + roll + " <br/>");
document.write("Your Standard is: " + standard + " <br/>");
document.write("Your Total marks is: " + obtained_marks + " <br/>");
document.write("Your ParseFloat is: " + parseFloat + " <br/>");


if(parseFloat>=80){
    document.write("Your Grade is: A+ <br/>")
}
else if(parseFloat>=70){
    document.write("Your Grade is: A <br/>");
}
else if (parseFloat>=60){
    document.write("Your Grade is: B+ <br/>")
}
else if(parseFloat>=50){
    document.write("Your Grade is: B <br/>");
}
else if(parseFloat>=40){
    document.write("Your Grade is: C <br/>");
}
else if(parseFloat>=33){
    document.write("Your Grade is: E <br/>")
}
else{
    document.write("YOU ARE FAIL BABY!! <br/>")
}

// this if else if is for remarks:


if(parseFloat>=80){
    document.write("Remarks: Excellent <br/>");
}
else if(parseFloat>=70){
    document.write("Remarks: Very Good <br/>");
}
else if (parseFloat>=60){
    document.write("Remarks: Good <br/>");
}
else if(parseFloat>=50){
    document.write("Remarks: Fair <br/>");
}
else if(parseFloat>=40){
    document.write("Remarks: Poor <br/>");
}
else if(parseFloat>=33){
    document.write("Remarks: Need Improvment <br/>");
}
else{
    document.write("Remarks: Disqualified <br/>");
}

// this code is about for result

if(parseFloat>=40){
    document.write("Result: Pass <br/>");
}
else if(parseFloat<=40){
    document.write("Result: Fail <br/>");
}