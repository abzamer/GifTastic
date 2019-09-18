//initial array of animals
var animals = ["llama", "monkey", "penguin"];

//function for displaying animal data
function renderButtons(){
    $("#buttons-view").empty();
    for (var i=0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons-view").append(a);
    }
};

//function for adding new animal searches
$("#add-animal").on("click", function(event){
    event.preventDefault();
    var animal = $("#animal-input").val().trim();
    animals.push(animal);
    renderButtons();
    // console.log(animal);
});

renderButtons();