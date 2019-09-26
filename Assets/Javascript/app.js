var giphy = ["Cow", "Chicken", "Lion", "Panda"];

function displayGiphyInfo() {

    var animal = $(this).attr("data-name");
    var queryUrl = "api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=kJaS17Eda10rpHTFlH3oIGvInPsttnMx"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        var gifDiv = $("<div class='movie'>");

        var rating = response.Rated;

        var pTag = $("<p>").text("Rating: " + rating);

        gifDiv.append(pTag);

        var imgURL = response.image;

        var image = $("<img>").attr("src", imgURL);

        gifDiv.append(image);

        $("#movies-view").prepend(gifDiv);
    });

}

function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < giphy.length; i++) {

        var a = $("<button>");
        a.addClass("giphy-btn");
        a.attr("data-name", giphy[i]);
        a.text(giphy[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-giphy").on("click", function (event) {
    event.preventDefault();
    var animal = $("#giphy-input").val().trim();

    animal.push(animal);

    renderButtons();
});

$(document).on("click", ".giphy-btn", displayGiphyInfo);

renderButtons();
