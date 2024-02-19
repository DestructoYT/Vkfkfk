let state = false;
function hello() {
  if (state === false) {
    document.getElementById("x").innerHTML =
      "PLAY THE GAME AND BE A GOOD PERSON!!! ";
    let state= true;
  } else if (state===true) {
    document.getElementById("x").innerHTML =
      "Retros: Tower of Doom";
    let state= false;
  }
}
function hi() {
  document.getElementById("bigbutton").innerHTML =
    "ITS RIGHT BELOW THIS BUTTON YOU SMART PERSON ";
}
