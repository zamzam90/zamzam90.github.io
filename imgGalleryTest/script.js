/* kuvagalleria testailua 
TODO:
    -modallissa next & prev napit joilla vaihtaa kuvaa?
*/

/* Header greeter juttu */
var myDate = new Date(); //haetaan päivämäärä muuttujaan
var hrs = myDate.getHours(); //haetaan muuttujasta tunnit
var greet;
if (hrs < 12) {
  greet = "Hyvää huomenta!";
} else if (hrs >= 12 && hrs <= 16) {
  greet = "Hyvää päivää!";
} else if (hrs >= 17 && hrs <= 24) {
  greet = "Hyvää iltaa!";
}
document.getElementById("greeter").innerHTML =
  greet + " tervetuloa kuvagalleriaan.";

/* greeter stuff end */

/* automaaginen slideshow
    https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
var slideIndex = 0;
slideShow();

function slideShow() {
  var i;
  var slides = document.getElementsByClassName("slide"); // haetaan kaikki slide luokan omaavat elementit
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // laitetaan jokaisen elementin style noneksi=piilotetaan
  }
  slideIndex++; // kasvatetaan slide indexiä
  if (slideIndex > slides.length) {
    //jos slide index yli kuvien määrän, asetetaan se ykköseksi
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block"; // vaihdetaan slide elementin style blockiksi = näytetään kuva
  setTimeout(slideShow, 2000); // Change image every 2 seconds
}
/* slideshow stuff end */

/* Modal stuff..
https://www.w3schools.com/howto/howto_css_modal_images.asp
*/

/* haetaan gridin kuvat htmlstä
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll */
var imageGrid = document.querySelector(".image-grid");
var gridImages = imageGrid.querySelectorAll("div.grid-image > img");
// lisätään for loopilla jokaiseen kuvaan eventlistener
for (x = 0; x < gridImages.length; x++) {
  gridImages[x].addEventListener("click", openModal);
}
/* Tämä funktio avaa popupin kun kuvaa klikataan */
function openModal() {
  // Get the modal
  var modal = document.getElementById("modal");

  /* // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg"); */
  var modalImg = document.getElementById("modal-image");
  //var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = this.alt;

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal-close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
}
