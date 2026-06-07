// W3Schools - JavaScript Functions
// https://www.w3schools.com/js/js_functions.asp
function doEffect(knop, effect) {
  // https://www.w3schools.com/jsref/prop_html_style.asp
  knop.style.display = "none";
  effect();
}

// W3Schools - JavaScript Functions
// https://www.w3schools.com/js/js_functions.asp
function decoy(knop) {
  knop.style.display = "none";
  // https://www.w3schools.com/jsref/prop_node_textcontent.asp
  document.getElementById("bericht").textContent = "Nothing happened... or did it? 👀";
}

// W3Schools - JavaScript HTML DOM Style
// https://www.w3schools.com/jsref/prop_html_style.asp
function draaiOm() {
  document.getElementById("bericht").textContent = "WHAT IS HAPPENING?!";
  document.body.style.transform = "rotate(180deg)";
  // https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(function() { document.body.style.transform = "rotate(0deg)"; }, 2000);
}


var discoInterval = null;
var discoAan = false;

// W3Schools - JavaScript setInterval
// https://www.w3schools.com/jsref/met_win_setinterval.asp
function disco() {
  document.getElementById("bericht").textContent = "DISCO TIME! 🕺";
  if (!discoAan) {
    discoAan = true;
    var i = 0;
    discoInterval = setInterval(function() {
      document.getElementById("gameArea").style.backgroundColor = i % 2 === 0 ? "#ff0000" : "#0000ff";
      i++;
    }, 300);
  }
}

// W3Schools - JavaScript HTML DOM Style + setTimeout
// https://www.w3schools.com/jsref/prop_html_style.asp
function spiegel() {
  document.getElementById("bericht").textContent = "MIRROR MIRROR... 🪞";
  document.body.style.transform = "scaleX(-1)";
  setTimeout(function() { document.body.style.transform = "scaleX(1)"; }, 2000);
}

// W3Schools - JavaScript HTML DOM Style + setTimeout
// https://www.w3schools.com/jsref/prop_html_style.asp
function zoom() {
  document.getElementById("bericht").textContent = "EVERYTHING IS GROWING! 📏";
  document.body.style.transform = "scale(1.5)";
  setTimeout(function() { document.body.style.transform = "scale(1)"; }, 2000);
}

// W3Schools - JavaScript HTML DOM Style + CSS Animations
// https://www.w3schools.com/jsref/prop_html_style.asp
function trilling() {
  document.getElementById("bericht").textContent = "THE ROOM IS SHAKING! 📳";
  document.body.style.animation = "shake 0.5s";
  setTimeout(function() { document.body.style.animation = ""; }, 500);
}

// W3Schools - JavaScript Window Location
// https://www.w3schools.com/jsref/prop_win_location.asp
function escapeRoom() {
  window.location.href = "secret.html";
}