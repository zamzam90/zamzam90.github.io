console.log("Hello stranger..");

/* 
TODO:
  -lisätä kenttien tarkistus, onko syötetty mitään jne..
  -??
  -testailla
  -fixailla/hifistellä..
*/

/* alustetaan muuttujia ja haetaan niihin tietoa */
let lsForm = document.getElementById("localStorageForm");
let henkilöTiedot = {};
var id, avain, avaimenArvo;
id = localStorage.length;
avain = "henkilötiedot " + id;
avaimenArvo = "";

/* Funktio joka hakee tiedot lomakkeesta ja lisää ne olioon */
function formTiedotOlioon() {
  //for loopilla lisätään formin nimi ja arvo olioon.. -2 koska ei haluta nappeja olioon
  for (x = 0; x < lsForm.length - 2; x++) {
    console.log(lsForm[x].name + " " + lsForm[x].value); //tulostetaan "nimi" ja sen arvo
    /* lisää tiedot taulukosta olioon: */
    henkilöTiedot[lsForm[x].name] = lsForm[x].value;
  }
}
/* ---------------------------------------------------------------- */

/* Funktio joka muuttaa olion string muotoon */
function olioStringiksi() {
  avaimenArvo = JSON.stringify(henkilöTiedot); //muutetaan olio stringiksi
  console.log("olio stringiföity..");
}

/* Funktio joka lisää avaimen("henkilötiedot: ") ja arvon(=olion) localstorageen */
function lisääLocalStorageen() {
  päivitäAvain(); //päivitetään avain ennenkuin tallennetaan
  /* tässä lisätään avain ja arvo(=olio) localstorageen */
  localStorage.setItem(avain, avaimenArvo);
}

/* Funktio joka päivittää avaimen tallentamisen jälkeen */
function päivitäAvain() {
  id = localStorage.length; //päivittää id:n localstoragen lengthin perusteella
  avain = "henkilötiedot " + id; //päivitetään avain uudella id:llä
}

/* Funktio joka ohjaa details.html sivulle (jos ohjataan tallentamisen jälkeen details sivulle) */
function reDirect() {
  console.log("redirecting to details.html...");
  setTimeout(function () {
    window.location.href = "./details.html";
  }, 500);
}

/* "pääfunktio" */
function tallennaTiedot() {
  console.log("Olio:");
  formTiedotOlioon(); //lisätään lomakkeen tiedot olioon
  olioStringiksi(); //muutetaan olio stringiksi
  console.log("avain: " + avain); //for testing..
  console.log("arvo: " + avaimenArvo); //for testing..
  lisääLocalStorageen(); //lisätään avain ja arvo(=olio) localstorageen
  päivitäAvain(); //päivitetään avain consolelogia varten
  console.log("seuraava avain: " + avain); //for testing
  document.getElementById("localStorageForm").reset(); //tyhjätään lomake tallentamisen jälkeen
  // reDirect(); //ehkä ohjataan suoraan katsele tietoja sivulle?
}

/* Kun klikataan tallenna, estetään lähettämästä lomake dataa serverille
https://www.w3schools.com/jsref/event_preventdefault.asp */
document
  .getElementById("localStorageForm")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
/* ------------------------------------------------------------------ */
