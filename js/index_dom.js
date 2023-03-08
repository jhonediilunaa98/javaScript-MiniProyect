import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburgues.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma", "#desactivar-alarma" ),
    countdown(  
    "countdown",
    "June 09, 2023 00:00:00",
    "Feliz Cumpleaños Jhon Luna Santos");

    scrollTopButton(".scroll-top-btn")
});



d.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e,".ball", ".stage");
})