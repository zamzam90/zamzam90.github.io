/* Header greeter juttu */
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12) greet = "Hyvää huomenta!";
else if (hrs >= 12 && hrs <= 17) greet = "Hyvää päivää";
else if (hrs >= 17 && hrs <= 24) greet = "Hyvää iltaa";

document.getElementById("greeter").innerHTML =
  greet + " tervetuloa kuvagalleriaan!";

/* automaaginen slideshow
    https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
