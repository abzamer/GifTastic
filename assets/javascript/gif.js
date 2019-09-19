//initial array of animals
var animals = ["llama", "monkey", "penguin"];

//function for displaying animal data/buttons for initial array
function renderButtons(){
    $("#buttons-view").empty();
    for (var i=0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons-view").append(a);
        $("button").on("click", function(){
        var a = $(this).attr("data");
        console.log(this);
        });
    }
};

function query(){
    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=hT1a4XL2GVninkgqI7yLPfGpuvdvP0Xu&limit=10";

    //this does an AJAX request with queryURL
    $.ajax({
    url: queryURL,
    method: "GET"
})
};

//here is what happens after we send a request
.then(function(response) {
    console.log(queryURL);
var searchAnimals = response.data;
for(var i= 0; i < searchAnimals.length; i++);
})


//function for adding new buttons for animal searches
$("#add-animal").on("click", function(event){
    event.preventDefault();
    var animal1 = $("#animal-input").val().trim();
    animals.push(animal1);
    $("#animal-input").val("");
    renderButtons();
    
    console.log(animal1);    
});

renderButtons();