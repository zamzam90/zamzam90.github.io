/* 
TODO:
-vaihtaa containerin taustaväriä:
    -colorpikkeristä väri
-mobiili kikkailu?
*/

const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FF7F00",
  "#FF007F",
  "#7FFF00",
  "#7F00FF",
  "#00FF7F",
  "#007FFF",
];
console.log("värit: " + colors);

//vaihdetaan taustaväriksi joku satunnainen väri colors arraystä
function randomColor() {
  var howManyColors = colors.length;
  var randomNumberForColor = Math.floor(Math.random() * howManyColors);
  console.log(
    "random väri: " +
      randomNumberForColor +
      " = " +
      colors[randomNumberForColor]
  );
  document.getElementById("tausta").style.backgroundColor =
    colors[randomNumberForColor];
}

const manualColor = document.getElementById("manuaalinenVari");

//resetoidaan tausta takaisin alkuperäiselle värille
function bgColorReset() {
  document.getElementById("tausta").style.backgroundColor = "#2c3e50";
  console.log("taustaväri resetoitu..");
}
