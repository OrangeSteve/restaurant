import pageLoad from './pageLoad';
import aboutUs from './aboutUs';
import './styles.css';



const page = (() => {
    const heading =document.createElement(`h1`);
    heading.textContent="The Restaurant";
    const nBar = document.createElement(`nav`);
    let _nBarIndex = 0;
    const homeButton = document.createElement(`button`);
    homeButton.textContent = "Home";
    homeButton.classList.add(`active-menu`);
    homeButton.addEventListener(`click`, () => {
        if (_nBarIndex != 0) {
            _selectContent(0);
        }

    });
    const menuButton = document.createElement(`button`);
    menuButton.textContent = "Menu";
    const aboutUsButton = document.createElement(`button`);
    aboutUsButton.textContent = "About Us";
    aboutUsButton.addEventListener(`click`, () => {
        if (_nBarIndex != 2) {
            _selectContent(2);
        }

    });
    document.body.appendChild(heading);
    nBar.appendChild(homeButton);
    nBar.appendChild(menuButton);
    nBar.appendChild(aboutUsButton);
    document.body.appendChild(nBar);

    const content = document.createElement('div');
    content.setAttribute("id", "content");
    document.body.appendChild(content);

    _selectContent(0);

    function _selectContent(index) {

        switch (index) {

            case 0: _nBarIndex=pageLoad(); break;
            case 1: break;
            case 2: _nBarIndex=aboutUs(); break;
        }

    }

    return {}

})();



