import imgBackground from './images/hero.svg';



export default function pageLoad(content){

const bground= new Image();
bground.src=imgBackground;
bground.setAttribute("id","img-background");

const aboutParagraph=document.createElement(`div`);
aboutParagraph.textContent="For over 40 years we, here at The Restaurant, have been at the heart of your community. Whether you want to dine in, and eat the food, or grab a snack, and eat it on the go, The Restaurant is here to serve you."
aboutParagraph.style.setProperty("width","400px");

content.appendChild(bground);
content.appendChild(aboutParagraph);
return 0;
}

