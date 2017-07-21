$(document).ready(function(){
 

    // All navbar button share one lock
    let lock = false;

    const scroll_to = (target_selector_id) => {

        // Query target id position
        const target_offset_top = $(target_selector_id).offset().top;

        // Scroll to that position
        $('html,body').animate({scrollTop: target_offset_top},
            {
                duration: 800,
                complete: () => {lock = false;},
            }
        );
    };

    // Bind click event for each .selction elements
    $('.selection').each((ith, elem) => {

        // Get target element id store in `data-target`
        const target_selector_id = '#' + $(elem).data('target');

        // Bind click event for this elements
        $(elem).click(() => {
            if( lock )
                return;
            lock = true;
            scroll_to(target_selector_id);
        });
    });


});
