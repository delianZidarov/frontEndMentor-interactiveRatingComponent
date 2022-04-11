document.querySelector("button").addEventListener("click", onRatingsSubmit);
function onRatingsSubmit(event) {
  event.preventDefault();
  console.log(getRating());
  document.getElementsByClassName("rating")[0].style.display = "none";
  document.getElementsByClassName("thank-you")[0].style.display = "initial";
  const ratingDisplay = document.querySelector(".rating-display span");
  ratingDisplay.prepend(getRating());
}
function getRating() {
  const ratings = document.getElementsByName("rating");
  let value;
  ratings.forEach((rating) => {
    if (rating.checked) {
      value = rating.value;
    }
  });
  return value;
}
