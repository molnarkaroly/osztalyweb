// A modal ablak elemének lekérdezése
var modal = document.getElementById("myModal");

// A modal megnyitásáért felelős gomb lekérdezése
var btn = document.getElementById("openModalBtn");

// A modal bezárásáért felelős elem lekérdezése
var closeBtn = document.getElementsByClassName("close")[0];

// A modal megnyitásáért felelős gomb eseménykezelője
btn.onclick = function() {
  modal.style.display = "block";
}

// A modal bezárásáért felelős elem eseménykezelője
closeBtn.onclick = function() {
  modal.style.display = "none";
}
