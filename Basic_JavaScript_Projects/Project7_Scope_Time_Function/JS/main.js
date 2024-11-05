function Get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you doing today?";
    }
}
///Conditional statement that includes "if" to show message based on what time of day you click 

function Senior_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 55) {
        Discount = "You are eligible for our Senior Discount!!";
    }
    else {
        Discount = "Sorry, unfortunately you are not eligible for our Senior Discount.";
    }
    document.getElementById("Please_enter_your_age").innerHTML = Discount;
}
///Conditional statement that includes "if / else" branch statements that will result in showing eligibility for "Senior Discount"

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}
///Conditional statement that includes "if / else if / else" branch statements that will result in different Time of Day based on Time function


var R = 45;
function Add_Numbers_A() {
    document.write(55 + R + "<br>"); ///Var "R" represents "Global Variable" as it is written above both Functions
}

function Add_Numbers_B() {
    document.write(R + 255);
}

Add_Numbers_A();
Add_Numbers_B();



function Add_Numbers_1() {
    var Q = 45;
    document.write(55 + Q); ///Var "Q" represents "Local Variable" as it is "nested" below Function #1
}

function Add_Numbers_2() {
    document.write(Q + 255);
}

Add_Numbers_1();
Add_Numbers_2();


function Add_Numbers_1() {
    var Q = 45;
    console.log(55 + Q);
}

function Add_Numbers_2() {
    console.log(Q + 255); ///Var "Q" is "not defined" due to being excluded from "Local Variable" therefore will show as "Q is undefined" in Console Log

    Add_Numbers_1();
    Add_Numbers_2();
}
