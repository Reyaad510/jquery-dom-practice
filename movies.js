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
}

function deleteMovie() {
  // Find the closest ancestor element with the class .movie-card and remove it
  $(this).closest(".movie-card").remove();
}

// Function to sort movie cards by title
function sortMoviesByTitle() {
  // Get all movie card elements and store them in an array
  let movieCards = $(".movie-card").get();

  // Sort the array of movie cards based on the movie titles
  movieCards.sort(function (movieCardA, movieCardB) {
    // Extract the movie titles from the first <p> element within each movie card
    let movieTitleA = $(movieCardA).find("p:first").text().toUpperCase();
    let movieTitleB = $(movieCardB).find("p:first").text().toUpperCase();

    // Compare the movie titles and determine the sort order
    if (movieTitleA < movieTitleB) {
      return -1; // Movie A should appear before Movie B
    } else if (movieTitleA > movieTitleB) {
      return 1; // Movie A should appear after Movie B
    } else {
      return 0; // Movie titles are equal
    }
  });

  // Empty the movie container and append the sorted movie cards
  $("#movie-container").empty().append(movieCards);
}

$("#submit").on("click", function (e) {
  e.preventDefault();
  addMovie();
});

// Event listener for delete button using event delegation
// Listens specifically for clicks on elements with the class "remove-button" that are descendants of #movie-container
$("#movie-container").on("click", ".remove-button", deleteMovie);

// Event listener for sorting by title
$("#sortByTitle").on("click", function () {
  sortMoviesByTitle();
});
