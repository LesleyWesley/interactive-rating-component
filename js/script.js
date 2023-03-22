//UI Variables

const radioButtons = document.querySelectorAll("input");
const button = document.querySelector("button");
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const errorMessage = document.querySelector(".error-div");
const submittedRatingSpan = document.querySelector('.submitted-rating-span');

let rating = 0;

//==================================

//Reveals thank you state when button is pressed after rating has been selected

const revealThanks = function() {
  ratingState.classList.add("hide");
  thankYouState.classList.remove("hide");
  submittedRatingSpan.innerText = `${rating}`

};

button.addEventListener("click", function() {
  getRating();
});

//================================================

//Gets Rating from radio buttons and validates that rating has a value

const getRating = function () {
  for (let radioButton of radioButtons) {
    if (radioButton.checked) {
      rating = radioButton.value;
      console.log(rating);
      break;
    }
  }

  if (rating == 0) {
    errorMessage.classList.remove('hide');
  } else {
    revealThanks();
  }
}

//Gets Rating from key presses and submits when "Enter" is pushed

document.addEventListener("keydown", function (e) {
  if (e.key === "1") {
    rating = 1;
  } else if (e.key === "2") {
    rating = 2;
  } else if (e.key === "3") {
    rating = 3;
  } else if (e.key === "4") {
    rating = 4;
  } else if (e.key === "5") {
    rating = 5;
  } else if (e.key === "Enter") {
    revealThanks();
  }
})
