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
    sr.reveal('.QA_block',{
        duration: 500,
        origin: 'bottom',
        distance: '30px',
        scale: '1',
        opacity: 0,
        viewFactor: 0.5,
    },100);
    sr.reveal('.date',{
        duration: 1000,
        scale: '1',
        distance: '0px',
        opacity: 0,
        viewFactor: 0.5,
    });
    sr.reveal('.sche_cont',{
        duration: 1000,
        scale: '1',
        distance: '0px',
        opacity: 0,
        viewFactor: 0.5,
    });
    sr.reveal('.time_text',{
        duration: 1200,
        scale: '0.2',
        distance: '0px',
        opacity: 0,
        viewFactor: 0.5,
        easing: 'cubic-bezier(0.5, 0.00, .1, 1)',
    },100);
    sr.reveal('.event_text',{
        duration: 1200,
        scale: '0.2',
        distance: '0px',
        opacity: 0,
        viewFactor: 0.5,
        easing: 'cubic-bezier(0.5, 0.00, .1, 1)',
    },100);
})
