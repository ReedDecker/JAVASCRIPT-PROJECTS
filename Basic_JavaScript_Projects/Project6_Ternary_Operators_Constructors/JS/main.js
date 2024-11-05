function Rental_Function() { ///Ternary operators "made up of 3 parts" of "rent, car" and value of "25" to determine age for Boolean >< outcome
    var rent, Can_rent;
    rent = document.getElementById("Rent").value;
    Can_rent = (rent < 25) ? "You are not able to legally " : "You are able to legally";
    document.getElementById("Car").innerHTML = Can_rent + " rent a car.";
}


function Apple(Name, State, Profile, Grade) {  ///Apple function is new object constructor
    this.Apple_Name = Name;
    this.Apple_State = State;
    this.Apple_Profile = Profile;
    this.Apple_Grade = Grade;
}

///"this" acts as a placeholder of the undetermined value until the new object is created from the object constructor
///"this" is the value of the object, when used with a function becomes the object that possesses the function

var Vons = new Apple("Gala", "Oregon", "Tart", "Extra Fancy"); ///Keywords cannot replace variables or functions
var Safeway = new Apple("Honeycrisp", "Washington", "Sweet", "US No.1");
var Kroger = new Apple("Pippen", "California", "Sour", "US Fancy"); ///"new" is used to create objects of the Apple function(Vons, Safeway, Kroger)
function My_Function() {
    document.getElementById("Eat_Apple").innerHTML =
        "Vons has a " + Vons.Apple_Name + " apple for sale that is " + Vons.Apple_Profile +
        " coming from  " + Vons.Apple_State + " with a grade of " + Vons.Apple_Grade;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() { ///Functions have access to functions that are above them in the code
        var Starting_point = 78;
        function Plus_ten() {  ///Plus_ten function is the nested function 
            Starting_point += 10;
        }
        Plus_ten();
        return Starting_point;
    }
}
