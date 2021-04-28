//Das Laskin..
/* 
TODO: 
  -estää ","" käyttö useammin kuin kerran(nyt ei saa peräkkäin mutta esim '6,66,' onnistuu..
  -estää operaattorin syöttäminen _ensimmäisenä_?
  -% operaattori
*/
console.log("Erittäin erittäin simppeli laskin..\nMade by: Sami Siltanen");
//alustetaan muuttujia:
var tulos = "",
  luku = "",
  tyhjätty = "0",
  deleteBtn = document.getElementById("delete"),
  divideBtn = document.getElementById("divide"),
  multiplyBtn = document.getElementById("multiply"),
  minusBtn = document.getElementById("minus"),
  sevenBtn = document.getElementById("seven"),
  eightBtn = document.getElementById("eight"),
  nineBtn = document.getElementById("nine"),
  plusBtn = document.getElementById("plus"),
  fourBtn = document.getElementById("four"),
  fiveBtn = document.getElementById("five"),
  sixBtn = document.getElementById("six"),
  oneBtn = document.getElementById("one"),
  twoBtn = document.getElementById("two"),
  threeBtn = document.getElementById("three"),
  equalsBtn = document.getElementById("equals"),
  zeroBtn = document.getElementById("zero"),
  dotBtn = document.getElementById("dot");
//Lisäys-funktio, lisää luvun/operaattorin tulosmuuttujaan
function lisää(luku) {
  /* estetään peräkkäisten pilkkujen lisääminen */
  if (luku == "." && tulos[tulos.length - 1] == ".") {
    return false;
  } else {
    tulos += luku;
    //console.log("Luku/Operaattori " + luku + " lisätty laskuun."); //for debugging..
    //console.log(tulos);
    document.getElementById("näyttö").innerHTML = tulos;
  }
}
//Lasku-funktio, lasketaan tulos-muuttujaan lisätyt luvut eval funktion avulla)
function kalkuloi() {
  /* Estetään undefined jos painetaan ensimmäisenä = nappia */
  if (tulos == "") {
    //console.log("hello");//for debugging..
    return false;
  } else {
    tulos = eval(tulos); /*lasketaan eval funktiolla*/
    tulos = tulos.toString(); /*muutetaan tulos takaisin stringiksi*/
    //console.log("tulos: " + tulos); //for debugging..
    document.getElementById("näyttö").innerHTML = tulos;
  }
}
//Poisto-funktio (poistaa viimeksi lisätyn luvun & operaattorin) */
function poista() {
  var patt, lastOperatorIndex;
  patt = /[-+/*]/g; /* https://stackoverflow.com/questions/4009817/include-the-minus-sign-into-this-regular-expression-how ensin ei  - toiminut..*/
  /* jos tuloste on tyhjä, ei tyhjennetä näyttöä */
  if (tulos == "") {
    //console.log("hello0");
    return false;
  }
  /* https://stackoverflow.com/questions/2295657/return-positions-of-a-regex-match-in-javascript saadaan viimeisimmän matchin indexi*/
  while ((match = patt.exec(tulos)) != null) {
    //console.log("hello1");
    lastOperatorIndex = match.index;
  }
  //console.log(lastOperatorIndex);//for debugging
  /* https://www.tutorialspoint.com/how-to-remove-text-from-a-string-in-javascript */
  tulos = tulos.substr(0, lastOperatorIndex);
  //console.log("hello2");

  //jos ei operaattoria poistetaan viimeinen luku
  if (lastOperatorIndex == undefined) {
    //console.log("hello undefined");
    tulos = tulos.substring(0, tulos.length - 1);
    //console.log(tulos + " " + tulos.length);
  }
  if (tulos == "" && tulos.length == 0) {
    //console.log("hello3");
    return alusta();
  }
  //console.log(tulos); //for debugging..
  //console.log("hello4");
  document.getElementById("näyttö").innerHTML = tulos;
}
//Alustus-funktio (tyhjentää "näytön")
function alusta() {
  //console.log("Näyttö tyhjennetty."); //for debugging..
  tulos = "";
  document.getElementById("näyttö").innerHTML = tyhjätty;
}
/* laskin toimii numpadista,
eventlistenerit.. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code */
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }
  switch (event.code) {
    case "Backspace":
      poista();
      break;
    case "NumpadDivide":
      lisää(divideBtn.value);
      break;
    case "NumpadMultiply":
      lisää(multiplyBtn.value);
      break;
    case "NumpadSubtract":
      lisää(minusBtn.value);
      break;
    case "Numpad7":
      lisää(sevenBtn.value);
      break;
    case "Numpad8":
      lisää(eightBtn.value);
      break;
    case "Numpad9":
      lisää(nineBtn.value);
      break;
    case "NumpadAdd":
      lisää(plusBtn.value);
      break;
    case "Numpad4":
      lisää(fourBtn.value);
      break;
    case "Numpad5":
      lisää(fiveBtn.value);
      break;
    case "Numpad6":
      lisää(sixBtn.value);
      break;
    case "Numpad1":
      lisää(oneBtn.value);
      break;
    case "Numpad2":
      lisää(twoBtn.value);
      break;
    case "Numpad3":
      lisää(threeBtn.value);
      break;
    case "NumpadEnter":
      kalkuloi();
      break;
    case "Numpad0":
      lisää(zeroBtn.value);
      break;
    case "NumpadDecimal":
      lisää(dotBtn.value);
      break;
  }
});
