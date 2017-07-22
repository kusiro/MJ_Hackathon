import fastdom from 'fastdom';


/**** Detect page position for navbar ****/
$(window).scroll(function(){

    let active_btn = null;

    fastdom.measure(() => {
        let page_offset_top = $(window).scrollTop();
        $('.selection').each((ith, elem) => {
            const target_selector_id = '#' + $(elem).data('target');
            const target_offset_top = $(target_selector_id).offset().top;
            if( target_offset_top - 300 < page_offset_top )
                active_btn = elem;
        });
    });

    fastdom.mutate(() => {
        $('.selection').removeClass('active');
        if( active_btn )
            $(active_btn).addClass('active');
    });

});
/*****************************************/
