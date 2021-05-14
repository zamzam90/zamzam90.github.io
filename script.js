/* Header greeter */
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
document.getElementById("greeter").innerHTML = greet;

/* greeter stuff end */
