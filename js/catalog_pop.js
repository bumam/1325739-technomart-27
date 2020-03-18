var link = document.querySelectorAll(".buy_popup");
   var popup = document.querySelector(".modul_catalog");
   var close = popup.querySelector(".modul_close");
   
   for (let lin of link)  {
   lin.addEventListener("click", function (event) {
       event.preventDefault();
       popup.classList.add("modul_close_show");
   });

   close.addEventListener("click", function (event) {
       event.preventDefault();
       popup.classList.remove("modul_close_show");
   });}
   window.addEventListener("keydown", function (event) {
       if (event.keyCode === 27) {
           if (popup.classList.contains("modul_close_show")) {
               popup.classList.remove("modul_close_show");}
       }
   });