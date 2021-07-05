

export default function aboutUs(content) {

    const contentTitle = document.createElement(`h2`);
    contentTitle.textContent = "Contact";

    const telephoneContact=document.createElement(`div`);
    telephoneContact.textContent="0101-101010";
    const emailContact=document.createElement(`div`);
    emailContact.textContent="igetmail@thismailbox.com";
    const openTimesHeading=document.createElement(`h3`);
    openTimesHeading.textContent="Opening Times";
    const monFri=document.createElement(`div`);
    monFri.textContent="Mon-Fri: 10:00-23:30";
    const satSun=document.createElement(`div`);
    satSun.textContent="Sat-Sun:  9:00-22:30";

    content.appendChild(contentTitle);
    content.appendChild(telephoneContact);
    content.appendChild(emailContact);
    content.appendChild(openTimesHeading);
    content.appendChild(monFri);
    content.appendChild(satSun);

    return 2;

}