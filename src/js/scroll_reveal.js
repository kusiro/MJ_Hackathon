import ScrollReveal from 'scrollreveal';




window.sr = ScrollReveal();

$(document).ready(function(){
    sr.reveal('.partical_block',{
        duration: 500,
        origin: 'bottom',
        opacity: 0,
        distance: '10px',
        viewFactor: 0.8,
    });
    sr.reveal('.container',{
        duration: 500,
        distance: '0px',
        opacity: 0,
        viewFactor: 0.5,
    });
    sr.reveal('.date',{
        duration: 1000,
        scale: '1',
        distance: '0px',
        opacity: 0,
        viewFactor: 0.5,
    });
})
