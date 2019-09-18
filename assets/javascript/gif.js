//initial array of animals
var animals = ["llama", "monkey", "penguin"];

//function for displaying animal data
function renderButtons(){
    $("buttons-view").empty();
    for (var i=0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons-view").append(a);
    }
};

renderButtons();