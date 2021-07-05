import pageLoad from './pageLoad';
import aboutUs from './aboutUs';
import menu from './menu';
import './styles.css';



const page = (() => {
const mainContent=document.createElement(`div`);
mainContent.setAttribute("id","main");

const footer=document.createElement(`footer`);
footer.textContent="The greatest restaurant on Planet Earth!!!";

const header=document.createElement(`header`);


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
            document.querySelector(`.active-menu`).classList.remove(`active-menu`);
            homeButton.classList.add(`active-menu`);
            
        }

    });
    const menuButton = document.createElement(`button`);
    menuButton.textContent = "Menu";
   menuButton.addEventListener(`click`, () => {
        if (_nBarIndex != 1) {
            _selectContent(1);
            document.querySelector(`.active-menu`).classList.remove(`active-menu`);
            menuButton.classList.add(`active-menu`);
        }

    });
    const aboutUsButton = document.createElement(`button`);
    aboutUsButton.textContent = "Contact";
    aboutUsButton.addEventListener(`click`, () => {
        if (_nBarIndex != 2) {
            _selectContent(2);
            document.querySelector(`.active-menu`).classList.remove(`active-menu`);
            aboutUsButton.classList.add(`active-menu`);
        }

    });

document.body.appendChild(header);

    header.appendChild(heading);
    nBar.appendChild(homeButton);
    nBar.appendChild(menuButton);
    nBar.appendChild(aboutUsButton);
    header.appendChild(nBar);



    document.body.appendChild(mainContent);
    const content = document.createElement('div');
    content.setAttribute("id", "content");
    mainContent.appendChild(content);

    _selectContent(0);
    document.body.appendChild(footer);

    function _selectContent(index) {

        _clearContent();
        switch (index) {

            case 0: _nBarIndex=pageLoad(content); break;
            case 1: _nBarIndex=menu(content);break;
            case 2: _nBarIndex=aboutUs(content); break;
        }

    }


    function _clearContent(){

        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    return {}

})();



