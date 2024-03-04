let state = false;
let confirmbutton = false;

function hello() {
  if (state === false) {
    state = true;
    document.getElementById("x").innerHTML = "PLAY THE GAME AND BE A GOOD PERSON!!!";
    console.log(state);
  } else {
    state = false;
    document.getElementById("x").innerHTML = "Retros: Tower of Doom"; 
    console.log(state);
  }
}

function hi() {
  document.getElementById("bigbutton").innerHTML = "ITS RIGHT BELOW THIS BUTTON YOU SMART PERSON";
}
function agelessthanthirteen() {
  confirm = true;
  console.log(confirm);
}
function confirmb() {
  let confirmbutton = true;
  let text = document.getElementById("text").value
  console.log(confirmbutton);
  if (text === "13+") {
    location.replace("")
  }
};
