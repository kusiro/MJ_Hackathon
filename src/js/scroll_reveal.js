import ScrollReveal from 'scrollreveal';

var my_width = $(window).width();
var mobileonly = 390;
var phablet = 430;
var tablet = 768;
var laptop = 1024;

window.sr = ScrollReveal();

$(document).ready(function(){
    if( my_width <= tablet ){
        sr.reveal('.partical_block',{
            duration: 500,
            origin: 'bottom',
            opacity: 0,
            distance: '10px',
            viewFactor: 0.2,
        });
        sr.reveal('.container',{
            duration: 500,
            distance: '0px',
            opacity: 0,
            viewFactor: 0.3,
        });
    } else {
        sr.reveal('.partical_block',{
            duration: 500,
            origin: 'bottom',
            opacity: 0,
            distance: '10px',
            viewFactor: 0.5,
        });
        sr.reveal('.container',{
            duration: 500,
            distance: '0px',
            opacity: 0,
            viewFactor: 0.5,
        });
    }

    sr.reveal('.schedule_contain',{
        duration: 700,
        rotate: {x: 100,y: 0,z: 0},
        scale: '1',
        distance: '0px',
        opacity: 0,
        viewFactor: 0.3,
    },100);
    sr.reveal('.schedule_contain_2',{
        duration: 700,
        rotate: {x: 100,y: 0,z: 0},
        scale: '1',
        distance: '0px',
        opacity: 0,
        viewFactor: 0.3,
    },100);
    sr.reveal('.sponsor_reveal',{
        duration: 700,
        scale: '.8',
        distance: '0px',
        opacity: 0,
        viewFactor: 0.3,
    },100);
})
