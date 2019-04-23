$(document).ready(function() {
var topics = ["Goku", "Vegeta", "Gohan", "Trunks", "Piccolo", "Krillin", "Bulma", "Android 18"];
renderTabs();
//var numberOfCharacters = characters.length
$(document).on("click", ".list-Characters", displayCharacters);
$(document).on("click", ".gif", animateCharacters);

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
            var dbzImage = $("<img>").addClass("gif");

            var rating = results[x].rating.toUpperCase();

            var newParagraph = $("<p>").html("<h5>" + "Rated: " + rating + " </h5>")

            dbzImage.attr({src: results[x].images.downsized_still.url, 

                stillData: results[x].images.downsized_still.url, 

                animateData: results[x].images.downsized.url,

                dataState: "still"});

         //   dbzImage.attr("src", results[x].images.fixed_height.url);
                    
            gifDiv.append(newParagraph).append(dbzImage);

            $("#gifs").prepend(gifDiv);

        }

})

}

function animateCharacters(){
    var state = $(this).attr("dataState");

    if (state === "still"){
        $(this).attr("src", $(this).attr("animateData"));
        $(this).attr("dataState", "animate")

    }else{
        $(this).attr("src", $(this).attr("stillData"))
        $(this).attr("dataState", "still")
    }


}


function renderTabs(){
    $("#li-view").empty();
    var numberOfCharacters = topics.length
   
for(var i = 0; i < numberOfCharacters; i++){
    

    console.log(topics[i]);

    var liTopic = $("<li>");

    liTopic.addClass("list-Characters").attr('data', topics[i]).text(topics[i]);

    $("#li-view").append(liTopic);

    $(".list-Characters").css({"cursor":"pointer", "line-height":"20px"})

/* $("#li-view").append("<li>" + topics[i] + "</li>").addClass("list-Characters").attr("data",topics[i])
$(".list-Characters").css({"cursor":"pointer", "line-height":"20px"})*/
}

}

$("#add-character").on("click", function(event) {
   event.preventDefault();
   console.log($("#character-input").val());
   
   topics.push($("#character-input").val().trim());
   renderTabs();  
   $("#dbz-form").trigger("reset") 
});

});
