import pageLoad from './pageLoad';
import './styles.css';


const page = (() => {

    const content = document.createElement('div');
    content.setAttribute("id", "content");
    function applyHolder() {
        document.body.appendChild(content);

    }

    function applyContent(newContent) {
        content.appendChild(newContent);
    }


    return { applyHolder, applyContent }

})();

page.applyHolder();
pageLoad();
