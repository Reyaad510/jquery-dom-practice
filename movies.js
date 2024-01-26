$(document).ready(function () {
  // Get the link element and attach a click event listener
  $("#redirectLink").on("click", function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Change the page's URL
    window.location.href = "index.html";
  });
});
