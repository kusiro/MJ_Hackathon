import fancybox from "./jquery.fancybox.pack.js";

$(document).ready(function(){
    $(".read_more_1").click(function(){
        $(".fancybox_1").fancybox({
            maxWidth	: 800,
            maxHeight	: 600,
            fitToView	: false,
            width		: '70%',
            height		: '70%',
            autoSize	: false,
            closeClick	: false,
            openEffect	: 'none',
            closeEffect	: 'none'
        })
    })
})
