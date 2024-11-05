function concat_Method() {
    var part_A = "There was a young woman named Bright,";
    var part_B = " whose speed was much faster than light,";
    var part_C = " she set out one day, in a relative way,";
    var part_D = " and returned the prvious night.";
    var whole_sentence = part_A.concat(part_B, part_C, part_D);
    document.getElementById("Rhyme").innerHTML = whole_sentence;
}
///This is using Concatenate Method to attach multiple string elements to get a cohesive rhyme

function slice_Method() {
    var Sentence = "Hello, my name is Inigo Montoya. You killed my father. Prepare to die.";
    var Section = Sentence.slice(47, 53);
    document.getElementById("slice").innerHTML = Section;
}
///This is using Slice Method to "slice" out the word "father" in #(47-53) of string

let str = "That's a spicy meatball!<br>";
let string = str.toUpperCase();
document.write(string);
///This is using "str.toUpperCase" to capitalize on lower case letters

function string_Method() {
    var B = 7548;
    document.getElementById("string").innerHTML = B.toString();
}
///This is using String Method to call variable "B" to string

function precision_Method() {
    var Z = 3.1437859930348857664537
    document.getElementById("Precision").innerHTML = Z.toPrecision(17);
}
///This is using Precision Method to include up to 17 spaces in code from "." decimal point

let num = 789.65435;
let formattedNum = num.toFixed(2);
document.write(formattedNum);
///This is using "num.toFixed" to include up to 2 spaces in code from "." decimal point

