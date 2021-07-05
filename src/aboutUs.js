import mainImage from './images/benu.jpg'

export default function aboutUs(){



    const content=document.getElementById(`content`);
    
while(content.firstChild){
    content.removeChild(content.firstChild);
}



    const mainImg=new Image();
    mainImg.src=mainImage;
mainImg.classList.add(`about-image`);

    const contentTitle= document.createElement(`h2`);
    contentTitle.textContent="About The Restaurant";

    const aboutParagraph=document.createElement(`div`);
    aboutParagraph.textContent="For over 40 years we, here at The Restaurant, have been at the heart of your community. Whether you want to dine in, and eat the food, or grab a snack, and eat it on the go, The Restaurant is here to serve you."
    aboutParagraph.style.setProperty("width","400px");
    content.appendChild(mainImg);
    content.appendChild(contentTitle);
    content.appendChild(aboutParagraph);

return 2;

}