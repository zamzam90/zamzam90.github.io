/* https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code */
// alustetaan muuttujia ja haetaan niihin arvot htmlstä
var key, code;
key = document.getElementById("key");
code = document.getElementById("code");

/* kun painetaan näppäintä, kirjoitetaan näppäin & koodi inputteihin
https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown */
document.addEventListener("keydown", function (event) {
  //
  key.value = event.key;
  code.value = event.code;
});

/* kun painallus lopetetaan, tyhjennetään inputit
https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event */
document.addEventListener("keyup", clear);

//inputtien tyhjennys funktio
function clear() {
  key.value = "";
  code.value = "";
}
