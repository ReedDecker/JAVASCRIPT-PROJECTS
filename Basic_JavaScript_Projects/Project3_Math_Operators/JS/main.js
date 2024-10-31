function add_Function() {
    var addition = 45 + 45;
    document.getElementById("Math Add").innerHTML = " 45 + 45 = " + addition;
}
///Creating function using var addition operator .getElementById to call HTML "id"


function sub_Function() {
    var subtraction = 1200 - 1450;
    document.getElementById("Math Sub").innerHTML = " 1200 - 1450 = " + subtraction;
}
///Creating function using var subtraction operator .getElementById to call HTML "id"

function mul_Function() {
    var multiplication = 45 * 45;
    document.getElementById("Math Mul").innerHTML = " 45 * 45 = " + multiplication;
}
///Creating function using var multiplication operator .getElementById to call HTML "id"

function div_Function() {
    var division = 45 / 45;
    document.getElementById("Math Div").innerHTML = " 45 / 45 = " + division;
}
///Creating function using var division operator .getElementById to call HTML "id"

function mod_Function() {
    var simple_Math = 25 % 6;
    document.getElementById("Math Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
///Creating function using var simple_Math operator modulus .getElementById to call HTML "id"

function neg_Function() {
    var X = 275;
    document.getElementById("Math Neg").innerHTML = -X;
}
///Creating function using var "Variable X" with "Neg" operator .getElementById to call HTML "id"

function inc_Function() {
    var Y = 105;
    Y++;
    document.getElementById("Math Inc").innerHTML = Y;
}
///Creating function using var "Variable Y" with "++" operator .getElementById to call HTML "id"

function dec_Function() {
    var Z = 777.8;
    Z--;
    document.getElementById("Math Dec").innerHTML = Z;
}
///Creating function using var "Variable Z" with "--" operator .getElementById to call HTML "id"

window.alert("Check out some JavaScript math operations")
///Creating alert pop-up window with window.alert

document.write(Math.random() * 100);
///Creating random math outputs with Math.random with document.write

