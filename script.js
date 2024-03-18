
let element = document.getElementsByClassName('rating');

for (let i = 0; i < element.length; i++) {
  element[i].addEventListener('click', () => {
    if (element[0].classList.contains("select") || element[1].classList.contains("select") || element[2].classList.contains("select") || element[3].classList.contains("select") || element[4].classList.contains("select")) {
      element[i].classList.remove("select");
    } else {
      element[i].classList.toggle("select");
    }
  })
}

function rating(stars) {
  document.getElementById('card-id').innerHTML = `<div class="thank-you-state-image-div">
  <img src="images/illustration-thank-you.svg" alt="thank-you-image">
</div>
<div class="rating_container">
  <div class="thank-you-state-rating">
    You selected ${stars} out of 5
  </div>
</div>
<h2 class="thank-you-state-heading">Thank you!</h2>
<p class="thank-you-state-para"> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p> `;
}

document.getElementById('butt-id').addEventListener("click", () => {
  if (element[0].classList.contains("select")) {
    rating(1);
  }
  else if (element[1].classList.contains("select")) {
    rating(2);
  }
  else if (element[2].classList.contains("select")) {
    rating(3);
  }
  else if (element[3].classList.contains("select")) {
    rating(4);
  }
  else if (element[4].classList.contains("select")) {
    rating(5);
  }
})