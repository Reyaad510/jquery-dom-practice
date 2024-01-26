$(document).ready(function () {
  // Get the link element and attach a click event listener
  $("#redirectLink").on("click", function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Change the page's URL
    window.location.href = "index.html";
  });
});

function addMovie() {
  let movieNameInput = $("#movies");
  let ratingInput = $("#rating");

  let movieName = movieNameInput.val();
  let rating = ratingInput.val();

  if (!movieName || !rating) {
    alert("Must input movie name and rating!");
    return;
  }
  if (movieName.length <= 2) {
    alert("Movie name must be longer than two characters!");
    return;
  }

  if (rating < 0 || rating > 10) {
    alert("Can only give a rating between 0 and 10!");
    return;
  }

  createMovieCard(movieName, rating);

  // Reset input boxes
  movieNameInput.val("");
  ratingInput.val("");
}

function createMovieCard(movieName, rating) {
  let newDiv = $("<div>");
  let removeButton = $("<button>");
  newDiv.addClass("movie-card");
  newDiv.append(`<p>Movie Title: ${movieName}<p>`);
  newDiv.append(`<p>Rating: ${rating}<p>`);
  removeButton.addClass("remove-button");
  removeButton.text("Delete");
  newDiv.append(removeButton);

  $("#movie-container").append(newDiv);

  removeButton.on("click", deleteMovie);
  // Find the closest ancestor element with the class .movie-card and remove it
}

function deleteMovie() {
  $(this).closest(".movie-card").remove();
}

$("#submit").on("click", function (e) {
  e.preventDefault();
  addMovie();
});
