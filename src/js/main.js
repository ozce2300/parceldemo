"use strict"

setInterval(tiden, 100);

function tiden() {
  let date = new Date();
document.getElementById("klockan").innerHTML = date.toLocaleTimeString();
}


