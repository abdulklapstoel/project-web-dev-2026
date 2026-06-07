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

var buttonEffects = {
  btn1: draaiOm,
  btn2: disco,
  btn3: null,
  btn4: spiegel,
  btn5: trilling,
  btn6: null,
  btn7: null,
  btn8: zoom,
  btn9: null,
  btn10: null
};

function triggerEffect(buttonId) {
  var knop = document.getElementById(buttonId);
  var effect = buttonEffects[buttonId];
  if (knop && effect) {
    doEffect(knop, effect);
  } else if (knop) {
    decoy(knop);
  }
}

// W3Schools - JavaScript setInterval
// https://www.w3schools.com/jsref/met_win_setinterval.asp
function disco() {
  document.getElementById("bericht").textContent = "DISCO TIME! 🕺";
  if (!discoAan) {
    discoAan = true;
    var i = 0;
    discoInterval = setInterval(function() {
      document.getElementById("gameArea").style.background = i % 2 === 0 ? "#ff0000" : "#0000ff";
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
  if (discoAan) {
    clearInterval(discoInterval);
    discoAan = false;
  }
  window.location.href = "secret.html";
}

// Add event listeners after the page has loaded so HTML stays clean and no inline JS is needed
document.addEventListener("DOMContentLoaded", function() {
  var gameButtons = document.querySelectorAll(".gameBtn");
  gameButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      triggerEffect(this.id);
    });
  });

  var escapeButton = document.getElementById("escapeBtn");
  if (escapeButton) {
    escapeButton.addEventListener("click", escapeRoom);
  }
});