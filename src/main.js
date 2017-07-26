import styles from './css/_bits.scss';
import Html from './template.html';
import ClickEvent from "./js/click_event.js";
import ScrollEvent from './js/scroll_event.js';
import ScrollReveal from "./js/scroll_reveal.js";
import scrollSpeed from "./js/scroll-parallax.js";
import particles from "./js/perfect_particles.js";

window.addEventListener("load",function(){

    $('.loading_gear').css({
        "top": "-50px",
        "opacity": "0",
    });
    
    $('.loading_cover').css({
        "opacity": "0",
    });

})
