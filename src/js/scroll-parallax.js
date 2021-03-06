import parallaxer from 'parallaxer';


var my_width = $(window).width();
var mobileonly = 390;
var phablet = 430;
var tablet = 768;
var laptop = 1024;

if( my_width >= laptop ){
    parallaxer([{
            element: $(".block_1_img")[0],
            distance: 6,
            offset: 100,
        },
    ]);
}

const sticky_bar = $("#Bar").offset().top;

$(window).scroll(function(){
    let window_top = $(window).scrollTop();
    if( window_top >= sticky_bar ){
        $('#selectionBar').css({
            "position": "fixed",
            "top": "0",
        });
    } else {
        $('#selectionBar').css({
            "position": "relative",
        });
    }
})
