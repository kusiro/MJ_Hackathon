$(document).ready(function(){
    var lock = false;
    $('.selection').click(function(){
        if( lock == false){
            lock = true;
            $('html,body').animate({scrollTop: $("#intro").offset().top},1500);
            lock = false;
        }
    })
});
