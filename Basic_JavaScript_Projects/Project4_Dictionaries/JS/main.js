function my_Dictionary() { ///Creating KVP(Key Value Pairs) to create a Dictionary to be called by getElementByID
    var Birds = {
        Species: "Red Tailed Hawk",
        Color: "Brown and Red",
        Class: "Accipitiformes",
        Activity: "Diurnal",
        Mammalian: "Carnivora",
    };
    delete Birds.Mammalian; ///Using delete to remove called value and result in "undefined" output
    document.getElementById("Dictionary").innerHTML = Birds.Mammalian;
}
