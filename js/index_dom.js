import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburgues.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma", "#desactivar-alarma" ),
    countdown(  
    "countdown",
    "June 09, 2023 00:00:00",
    "Feliz Cumpleaños Jhon Luna Santos");    

    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=Tc4HaV1FkV4" target="_blank"rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/Tc4HaV1FkV4?start=14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)

    responsiveMedia("gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/BXxbmqQUQa9g8Dxx7" target="_blank"rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1799.8730525569615!2d-76.56844137998914!3d3.4351379162661866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a430db9b37c3%3A0x382e3539b65be38f!2sMonumento%20Cristo%20Rey!5e0!3m2!1ses!2sco!4v1678822410322!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
        responsiveTester("responsive-tester");
});



d.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e,".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");