/* kuvagalleria testailua 
TODO:
    -kun kuvaa klikkaa se aukeaa lightboxiin? https://www.w3schools.com/howto/howto_js_lightbox.asp
        tai modaliin? https://www.w3schools.com/howto/howto_css_modal_images.asp

*/

/* Header greeter juttu */
var myDate = new Date(); //haetaan päivämäärä muuttujaan
var hrs = myDate.getHours(); //haetaan muuttujasta tunnit
var greet;
if (hrs < 12) greet = "Hyvää huomenta!";
else if (hrs >= 12 && hrs <= 17) greet = "Hyvää päivää";
else if (hrs >= 17 && hrs <= 24) greet = "Hyvää iltaa";

document.getElementById("greeter").innerHTML =
  greet + " tervetuloa kuvagalleriaan!";

/* greeter stuff end */

/* automaaginen slideshow
    https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
var slideIndex = 0;
showSlides();

function showSlides() {
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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
/* slideshow stuff end */
