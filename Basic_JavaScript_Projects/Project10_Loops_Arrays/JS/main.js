///WHILE LOOP///
function Count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X; ///While Loop loops through the block of code as long as specified condition is True///
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}

///STRING LENGTH PROPERTY///
function Earthlings() {

    let text = "Goodbye Earthlings!"; { ///String Length Property measures the # of characters within the String///
        let length = text.length;
    }
    document.getElementById("Aliens").innerHTML = text.length;
}

///FOR LOOP///
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function For_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { ///For Loop repeats section of code numerous times and used when # of iterations are known///
        Content += Instruments[Y] + "<br>";   ///For Loop repeatedly executes instructions as long as particular condition is True///
    }
    document.getElementById("Instruments").innerHTML = Content;
}

///ARRAY///
function Cat_Pics() { ///Arrays are Objects so they are included in Object Data Types///
    var Cat_Picture = [];///Objects can have Properties(characteristics) and Methods(Actions)///
    Cat_Picture[0] = "Sleeping";
    Cat_Picture[1] = "Playing";
    Cat_Picture[2] = "Eating";
    Cat_Picture[3] = "Purring";
    document.getElementById("Cat").innerHTML = "In this picture, the Cat is... " + Cat_Picture[2] + ".";
}

///CONSTANT FUNCTION///
function Constant_Function() {///Constant(const) unlike a Variable(var) cannot be changed by a program once they are defined///
    const Sneakers = { Type: "Hi-Top", Brand: "Converse", Color: "Red" };
    Sneakers.Color = "Gray";
    Sneakers.Price = "$60";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Sneakers.Type + " " + Sneakers.Brand + " were " + Sneakers.Price;
}

///LET STATEMENT///
let Z = 45; ///Here Z is 45///
{
    let Z = 80; ///Here Z is 80///
}
document.getElementById("Zed").innerHTML = Z;
///Redeclaring the Variable using "let" will not change the Variable outside of the block///
