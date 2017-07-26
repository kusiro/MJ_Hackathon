import styles from './qa.scss';
import Html from './qa_template.html';

$('article > h2 > strong').each((idx, elem) => {
    $(elem).text('Q' + (idx+1));
});


window.addEventListener("load",function(){
    
    $('.loading_gear').css({
        "top": "-50px",
        "opacity": "0",
    });

    $('.loading_cover').css({
        "opacity": "0",
    });

})
