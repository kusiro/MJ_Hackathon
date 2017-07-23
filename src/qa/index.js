import styles from './qa.scss';
import Html from './qa_template.html';

$('article > h2 > strong').each((idx, elem) => {
    $(elem).text('Q' + (idx+1));
});
