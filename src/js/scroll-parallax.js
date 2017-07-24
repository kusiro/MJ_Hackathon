import parallaxer from 'parallaxer';


var my_width = $(window).width();
var mobileonly = 390;
var phablet = 430;
var tablet = 768;
var laptop = 1024;

if( my_width >= phablet ){
    parallaxer([{
            element: $(".block_1_img")[0],
            distance: 6,
            offset: 100,
        },{
            element: $(".block_2_img")[0],
            distance: 4,
            offset: 500,
        },
    ]);
}
