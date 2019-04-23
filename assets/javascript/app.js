//$(document).ready(function() {
var characters = ["Goku", "Vegeta", "Gohan", "Trunks", "Piccolo", "Krillin", "Bulma", "Android 18"]

//var numberOfCharacters = characters.length
$(document).on("click", ".list-Characters", displayCharacters);
function displayCharacters(){
    var dbzCharacter = $(this).attr("data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dbzCharacter + "&api_key=Nn3LVacnO3vBV7BmH75PRyMNw4rZb0Lq&limit=10";
    
$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response) {
        var results = response.data

        console.log(results);

        // Looping through each result item and creating information divs to put the results in the html

        for (var x = 0; x < results.length; x++) {

            var gifDiv = $("<div>");
            var dbzImage = $("<img>");

            var rating = results[x].rating.toUpperCase();

            var newParagraph = $("<p>").html("<h5>" + "Rating: " + rating + " </h5>")

            dbzImage.attr("src", results[x].images.fixed_height.url);
                    
            gifDiv.append(newParagraph);

            gifDiv.append(dbzImage);

            $("#gifs").prepend(gifDiv);

        }

})

}
function renderTabs(){
    var numberOfCharacters = characters.length
    $("#li-view").empty();
for(var i = 0; i < numberOfCharacters; i++){
$("#li-view").append("<li>" + characters[i] + "</li>").addClass("list-Characters").attr("data",characters[i])
$(".list-Characters").css({"cursor":"pointer", "line-height":"20px"})
}

}

$("#add-character").on("click", function(event) {
    event.preventDefault();
    console.log($("#character-input").val());
    
    characters.push($("#character-input").val().trim())
    renderTabs();  
    $("#dbz-form").trigger("reset")
});

//});
renderTabs();