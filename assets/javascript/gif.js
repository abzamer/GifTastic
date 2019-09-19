//initial array of animals
var animals = ["llama", "monkey", "penguin"];

//function for displaying animal data/buttons for initial array
function renderButtons(){
    $("#buttons-view").empty();
    for (var i=0; i < animals.length; i++) {
        var animal = animals[i];
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-animal", animal);
        a.text(animal);
        $("#buttons-view").append(a);
    }
};

//function for adding new buttons for animal searches
$("#add-animal").on("click", function(event){
    event.preventDefault();
    var animal1 = $("#animal-input").val().trim();
    animals.push(animal1);
    renderButtons();
    $("#animal-input").val("");
    console.log(animal1);
});

//what happens on click event listeners
$(document).on("click", "button", function () {
    var animal = $(this).attr("data-animal");
    // console.log(this);
    console.log(animal);
    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=hT1a4XL2GVninkgqI7yLPfGpuvdvP0Xu&limit=10";

    //this does an AJAX request with queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response){
            console.log(queryURL);
            console.log(response);
        })
})


    


renderButtons();