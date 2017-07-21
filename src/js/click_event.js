$(document).ready(function(){
    var lock = false;

    const scroll_to = (target_selector_id) => {
        const target_offset_top = $(target_selector_id).offset().top;
        $('html,body').animate({scrollTop: target_offset_top},
            {
                duration: 800,
                complete: () => {lock = false;},
            }
        );
    };

    $('.selection').each((ith, elem) => {
        const target_selector_id = '#' + $(elem).data('target');
        console.log(elem)
        $(elem).click(() => {
            if( lock )
                return;
            lock = true;
            scroll_to(target_selector_id);
        });
    });

});
