var x = 1789,
    y = 789;
document.write(x * y); ///Using "var" to define variables and multiplication operator for output equation

let t = 900,
    r = 450;
document.write(t / r); ///Using "let" to define variables and division operator for output of equation

document.write("The answer is..." + 42); ///Expression of a string "The answer is.." combined with a number "42"

document.write(78 == 78); ///Using "==" to determine whether Value1/Value2 are "equal" to determine Boolean "true/false" statement

document.write(718 == 78); ///Using "==" to determine whether Value1/Value2 are "equal" to determine Boolean "true/false" statement

document.write(10 / 20 / 1986 === 10 / 20 / 1986); ///Using "===" to determine whether VALUE and TYPE are equal to determine Boolean "true/false" statement

document.write(10 / 20 / 1986 === "10 / 20 / 1986"); ///Using "===" to determine whether VALUE and TYPE are equal to determine Boolean "true/false" statement

document.write(8901 > 8900); ///Using "> <" "greater than/less than" operators to determine Boolean "true/false" statement

document.write(8901 < 8900); ///Using "> <" "greater than/less than" operators to determine Boolean "true/false" statement

document.write(65 > 78) && (78 < 45); ///Using "&&" "and" operators to determine Boolean "true/false" statement

document.write(46 > 148) && (148 > 68); ///Using "&&" "and" operators to determine Boolean "true/false" statement

document.write(46 > 148) || (148 > 68); ///Using "||" "or" operators to determine Boolean "true/false" statement

document.write(76 > 760) || (76 > 68); ///Using "||" "or" operators to determine Boolean "true/false" statement

function not_Function() {
    document.getElementById("Not").innerHTML = !(3.14 < 3.15); ///Using "!" "not" operator to determine Boolean "true/false" statement
}