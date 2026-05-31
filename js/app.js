// W3Schools - JavaScript Functions
function doEffect(knop, effect) {
  // W3Schools - JavaScript HTML DOM Style
  knop.style.display = "none";
  effect();
}

// W3Schools - JavaScript Functions
function decoy(knop) {
  knop.style.display = "none";
  // W3Schools - JavaScript innerHTML/textContent
  document.getElementById("bericht").textContent = "Nothing happened... or did it? 👀";
}

// W3Schools - JavaScript HTML DOM Style
function draaiOm() {
  document.getElementById("bericht").textContent = "WHAT IS HAPPENING?!";
  document.body.style.transform = "rotate(180deg)";
  // W3Schools - JavaScript setTimeout
  setTimeout(function() { document.body.style.transform = "rotate(0deg)"; }, 2000);
}

// W3Schools - JavaScript setInterval
function disco() {
  document.getElementById("bericht").textContent = "DISCO TIME! 🕺";
  var i = 0;
  var interval = setInterval(function() {
    // W3Schools - JavaScript If Else
    document.getElementById("gameArea").style.backgroundColor = i % 2 === 0 ? "#ff0000" : "#0000ff";
    i++;
    if (i > 6) {
      // W3Schools - JavaScript clearInterval
      clearInterval(interval);
      document.getElementById("gameArea").style.backgroundColor = "transparent";
    }
  }, 300);
}

// W3Schools - JavaScript HTML DOM Style + setTimeout
function spiegel() {
  document.getElementById("bericht").textContent = "MIRROR MIRROR... 🪞";
  document.body.style.transform = "scaleX(-1)";
  setTimeout(function() { document.body.style.transform = "scaleX(1)"; }, 2000);
}

// W3Schools - JavaScript HTML DOM Style + CSS Animations
function trilling() {
  document.getElementById("bericht").textContent = "THE ROOM IS SHAKING! 📳";
  document.body.style.animation = "shake 0.5s";
  setTimeout(function() { document.body.style.animation = ""; }, 500);
}

// W3Schools - JavaScript Window Location
function escapeRoom() {
  window.location.href = "secret.html";
}