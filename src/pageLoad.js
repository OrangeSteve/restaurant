import imgBackground from './images/hero.svg';



export default function pageLoad(){
  const content=document.getElementById(`content`);  
const heading = document.createElement(`h1`);
heading.textContent="The Restaurant";
const bground= new Image();
bground.src=imgBackground;
bground.setAttribute("id","img-background");
const paragraph =document.createElement(`p`);
paragraph.textContent="The best restaurant on Planet Earth!!!";

content.appendChild(heading);
content.appendChild(bground);
content.appendChild(paragraph);

}

