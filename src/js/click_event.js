$(document).ready(function(){
    var lock = false;
    $('.selection').click(function(){
        var location = $(window).scrollTop();
        if( lock == false && location > 975 ){
            lock = true;
            $('html,body').animate({scrollTop: $("#intro").offset().top},{
                duration: 800,
                complete: function(){
                    return lock = false
                    },
                }
            );
        } else if ( lock == false && location < 975) {
            lock = true;
            $('html,body').animate({scrollTop: $("#intro").offset().top},{
                duration: 800,
                complete: function(){
                    return lock = false
                    },
                }
            );
        } else {

        }
    })
});
