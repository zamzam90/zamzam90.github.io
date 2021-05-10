console.log("Hello stranger..");

/* alustetaan muuttujia ja haetaan niihin tietoa */
var infoArea = document.getElementById("infoArea");
var listaaBtn = document.getElementById("listaaBtn");

/* 
  TODO:
  -printToHTML += vaihtaa htmlDOM menetelmiin...
  -??
  -testailla
  -fixailla/hifistellä..
*/

/* Funktio joka tulostaa tiedot htmlään */
function listaa() {
  /* alustetaan muuttujia ja haetaan niihin tietoa */
  var printKey,
    printValue,
    arrayFromLocalStorageObject = [],
    printToHTML = "<table align='center'>";

  console.log("tulostetaan...");
  for (x = 0; x < localStorage.length; x++) {
    // hae avain localStoragesta
    printKey = localStorage.key(x);
    console.log(printKey);
    printToHTML += "<tr><th colspan='2'>";
    printToHTML += printKey;
    printToHTML += "</th></tr>";
    // hae avaimella arvo(olio) localStoragesta
    printValue = JSON.parse(localStorage.getItem(printKey));
    console.log(printValue);
    // muutetaan olio listaksi https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
    arrayFromLocalStorageObject = Object.entries(printValue);
    // tehdään table avaimesta ja arvosta(objektin listasta)
    for (a = 0; a < arrayFromLocalStorageObject.length; a++) {
      printToHTML += "<tr>";
      for (b = 0; b < arrayFromLocalStorageObject[a].length; b++) {
        printToHTML += "<td>" + arrayFromLocalStorageObject[a][b] + "</td>";
      }
      printToHTML += "</tr>";
    }
  }
  printToHTML += "</table>";
  document.getElementById("infoArea").innerHTML = printToHTML;
}

/* Funktio joka näyttää localStoragen tiedot konsolissa*/
function listLSitems() {
  console.log(localStorage);
}

/* Funktio joka tyhjentää localStoragen, KOKONAAN */
function tyhjääLocalStorage() {
  if (confirm("Haluatko varmasti tyhjentää kaiken localStoragesta!")) {
    localStorage.clear();
    alert("localStorage KOKONAAN tyhjennetty!");
  } else {
    alert("localStoragesta ei poistettu mitään.");
  }
}
