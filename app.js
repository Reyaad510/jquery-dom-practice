// 1
console.log("Let's get ready to party with jQuery!");

// 2 -> Add class called "image-center"
$("article img").addClass("image-center");

// 3 -> Remove last paragraph in article
$("article p:last").remove();

// 4
let randonNum = Math.floor(Math.random() * 100 + 1);
$("#title").css("font-size", `${randonNum}px`);

//5
$("ol").append("<li>I like Bob's Burger!</li>");

//6
$("aside")
  .empty()
  .append(
    "<p>I am so sorry for that list. It was not the best I must admit...</p>"
  );

//7
function updateBackgroundColor() {
  let redColor = $("input").eq(0).val();
  let greenColor = $("input").eq(1).val();
  let blueColor = $("input").eq(2).val();

  $("body").css(
    "background-color",
    `rgb(${redColor},${greenColor}, ${blueColor} )`
  );
}

$("input").on("input", updateBackgroundColor);

// 8
$("img").on("click", function () {
  $(this).remove();
});

$(document).ready(function () {
  // Get the link element and attach a click event listener
  $("#redirectLink").on("click", function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Change the page's URL
    window.location.href = "movies.html";
  });
});
