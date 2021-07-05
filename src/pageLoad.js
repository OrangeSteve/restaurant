import imgBackground from './images/hero.svg';



export default function pageLoad(){
  const content=document.getElementById(`content`);  

  while(content.firstChild){
    content.removeChild(content.firstChild);
}


const bground= new Image();
bground.src=imgBackground;
bground.setAttribute("id","img-background");
const paragraph =document.createElement(`p`);
paragraph.textContent="The best restaurant on Planet Earth!!!";




content.appendChild(bground);
content.appendChild(paragraph);

return 0;
}

