const bodyHeight = $(document.body).height();

$(window).scroll(function(){
    $('.gear').css({ transform: 'rotate('  + ($(document.body).scrollTop() / bodyHeight * 360 * 8) +'deg)' });
});
