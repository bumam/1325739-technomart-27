var link = document.querySelector(".btn_popup");
var popup = document.querySelector(".modul");
var close = popup.querySelector(".modul_close");
var yourname = popup.querySelector("[name=yourname]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modul_close_show");
  yourname.focus();
});
close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modul_close_show");
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modul_close_show")) {
      popup.classList.remove("modul_close_show")
    }
  }
});

var mapOpen = document.querySelector(".js_open_map");
var mapPopup = document.querySelector(".modul_map");
var mapClose = mapPopup.querySelector(".modul_close");

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("modul_close_show");
});
mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("modul_close_show");
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modul_close_show")) {
      mapPopup.classList.remove("modul_close_show")
    }
  }
});
