function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " is a great food!";
    switch (Foods) {
        case "Salmon":
            Food_Output = "Salmon" + Food_String;
            break;
        case "Steak":
            Food_Output = "Steak" + Food_String;
            break;
        case "Pizza":
            Food_Output = "Pizza" + Food_String;
            break;
        case "Hamburger":
            Food_Output = "Hamburger" + Food_String;
            break;
        case "Salad":
            Food_Output = "Salad" + Food_String;
            break;
        case "Burrito":
            Food_Output = "Burrito" + Food_String;
            break;
        default:
            Food_Output = "Please enter a food exactly as written on above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

///Draw a cirlce within Canvas using <canvas> container///
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
