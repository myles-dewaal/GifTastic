var animals = [];

$("#add-buttons").on("click", "button", function () {

    var input = $(this).attr("data-input");

    var queryUrl = "api.giphy.com/v1/gifs/search?q=" + input + "&api_key=kJaS17Eda10rpHTFlH3oIGvInPsttnMx=10";

    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);

            console.log(response);

            var results = response.data;


            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");


                var pElement = $("<p>").text("Rating: " + results[i].rating);

                var gifImage = $("<img>");
                gifImage.addClass("image");


                gifImage.attr({"src": results[i].images.fixed_height_still.url,
                "data-state": 'still', 'data-still': results[i].images.fixed_height_still.url,
                'data-animate': results[i].images.fixed_height.url});


                gifDiv.append(pElement);
                gifDiv.append(gifImage);

                $("#gifs-view").prepend(gifDiv);

            }
            $(".image").on("click", function () {
                var state = $(this).attr("data-state");
               
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });

        });
});

function showButtons() {
    $("#add-buttons").empty();

    for (var i = 0; i < animals.length; i++) {
        var b = $("<button>");
        b.addClass("animals");
        b.attr("data-input", animals[i]);
        b.text(animals[i]);


        $("#add-buttons").append(b); 
    }                                 
}


$("#add-animal").on("click", function (event) {

    event.preventDefault();
    var input = $("#animal-input").val().trim();
    animals.push(input);
    showButtons();
});
