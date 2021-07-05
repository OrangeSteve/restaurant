import Soda from './images/soda-menu.jpg';
import Burger from './images/burger-menu.jpg';
import Pizza from './images/pizza-menu.jpg'



export default function menu(content) {

    const menuHolder = document.createElement(`div`);
    
    const pizzaDiv = document.createElement(`div`);
    const pizzaImg = new Image();
    pizzaImg.src=Pizza;
    pizzaImg.classList.add(`menu-image`);
    const pizzaNameDescDiv = document.createElement(`div`);
    pizzaNameDescDiv.classList.add(`name-desc`);
    const pizzaNameText = document.createElement(`div`);
    pizzaNameText.textContent = "Pizza";
    const pizzaInfoText = document.createElement(`div`);
    pizzaInfoText.textContent = "Delicious freshly made pizza";
    const pizzaPriceText = document.createElement(`div`);
    pizzaPriceText.textContent = "£17.95";

    pizzaNameDescDiv.appendChild(pizzaNameText);
    pizzaNameDescDiv.appendChild(pizzaInfoText);

    pizzaDiv.appendChild(pizzaImg);
    pizzaDiv.appendChild(pizzaNameDescDiv);
    pizzaDiv.appendChild(pizzaPriceText);

    const burgerDiv = document.createElement(`div`);
    const burgerImg = new Image();
    burgerImg.src=Burger;
    burgerImg.classList.add(`menu-image`);
    const burgerNameDescDiv = document.createElement(`div`);
    burgerNameDescDiv.classList.add(`name-desc`);
    const burgerNameText = document.createElement(`div`);
    burgerNameText.textContent = "Burger";
    const burgerInfoText = document.createElement(`div`);
    burgerInfoText.textContent = "Delicious freshly made burger";
    const burgerPriceText = document.createElement(`div`);
    burgerPriceText.textContent = "£13.95";
    
    burgerNameDescDiv.appendChild(burgerNameText);
    burgerNameDescDiv.appendChild(burgerInfoText);

    burgerDiv.appendChild(burgerImg);
    burgerDiv.appendChild(burgerNameDescDiv);
    burgerDiv.appendChild(burgerPriceText);

    const sodaDiv = document.createElement(`div`);
    const sodaImg = new Image();
    sodaImg.src=Soda;
    sodaImg.classList.add(`menu-image`);
    const sodaNameDescDiv = document.createElement(`div`);
    sodaNameDescDiv.classList.add(`name-desc`);
    const sodaNameText = document.createElement(`div`);
    sodaNameText.textContent = "Soda";
    const sodaInfoText = document.createElement(`div`);
    sodaInfoText.textContent = "Delicious freshly poured soda";
    const sodaPriceText = document.createElement(`div`);
    sodaPriceText.textContent = "£1.95";

    sodaNameDescDiv.appendChild(sodaNameText);
    sodaNameDescDiv.appendChild(sodaInfoText);

    sodaDiv.appendChild(sodaImg);
    sodaDiv.appendChild(sodaNameDescDiv);
    sodaDiv.appendChild(sodaPriceText);

    menuHolder.append(pizzaDiv);
    menuHolder.append(burgerDiv);
    menuHolder.appendChild(sodaDiv);

    pizzaDiv.classList.add(`menu-item`);
    burgerDiv.classList.add(`menu-item`);
    sodaDiv.classList.add(`menu-item`);

    content.appendChild(menuHolder);
    return 1;
}