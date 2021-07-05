import imgBackground from './images/hero.svg';



export default function pageLoad(){
  const content=document.getElementById(`content`);  
const heading = document.createElement(`h1`);
const nav =document.createElement(`nav`);

const homeButton=document.createElement(`button`);
homeButton.textContent="Home";
homeButton.classList.add(`active-menu`);
const menuButton=document.createElement(`button`);
menuButton.textContent="Menu";
const aboutUsButton=document.createElement(`button`);
aboutUsButton.textContent="About Us";
heading.textContent="The Restaurant";

nav.appendChild(homeButton);
nav.appendChild(menuButton);
nav.appendChild(aboutUsButton);


const bground= new Image();
bground.src=imgBackground;
bground.setAttribute("id","img-background");
const paragraph =document.createElement(`p`);
paragraph.textContent="The best restaurant on Planet Earth!!!";



content.appendChild(heading);
content.appendChild(nav);
content.appendChild(bground);
content.appendChild(paragraph);

}

