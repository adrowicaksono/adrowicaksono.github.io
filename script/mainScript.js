var body = document.body;


var header = document.createElement('header');
    body.appendChild(header);

var nav = document.createElement('nav');
    header.appendChild(nav);

var navContent = ['Home', 'About Me', 'My Blog'];
var navHRef = ['#', '#content', 'blog/index.html'];
    
    for(var a=0; a<3; a++){
        var aNav = document.createElement('a');
            aNav.setAttribute('id', 'nav');
            aNav.setAttribute('href', navHRef[a]);
            aNav.innerHTML = navContent[a];
            nav.appendChild(aNav);
    }

var navChilds = nav.children;

var section = document.createElement('section');
    section.setAttribute('id', 'main-content');
    body.appendChild(section);


    

var sectionBackground = document.createElement('div');
    sectionBackground.setAttribute('id', 'background');
    section.appendChild(sectionBackground);

var sectionWelcome = document.createElement('div');
    sectionWelcome.setAttribute('id', 'welcome');
    sectionBackground.appendChild(sectionWelcome);

var sectionContent = document.createElement('div');
    sectionContent.setAttribute('id', 'content');
    section.appendChild(sectionContent);

var h1Welcome = document.createElement('h1');
    h1Welcome.innerHTML = "hi, I\'m Amsal Bodro Wicaksono"
    sectionWelcome.appendChild(h1Welcome);

var h2Welcome = document.createElement('h2');
    h2Welcome.innerHTML = "Full Stack Developer"
    sectionWelcome.appendChild(h2Welcome);

var divResume = document.createElement('div');
    divResume.setAttribute('id', 'resume');
    sectionWelcome.appendChild(divResume);

var aDivResume = document.createElement('a');
    aDivResume.innerHTML = 'download resume'
    aDivResume.setAttribute('href', 'https://drive.google.com/open?id=1CIbF46nw3qh7zBg0eyorWZXCX1rjzrSj');
    divResume.appendChild(aDivResume);

var h2Content = document.createElement('h2');
    h2Content.innerHTML = "Here\'s what i\'m doing";
    sectionContent.appendChild(h2Content);

var sectionFooter = document.createElement('footer');
    body.appendChild(sectionFooter);

var contactFooter = document.createElement('p');
    contactFooter.innerHTML = '+6282281007720';
    sectionFooter.appendChild(contactFooter);

var socmed = ['https://www.facebook.com/amsal.wicaksono', 'https://www.instagram.com/adrowicaksono/', 'https://www.linkedin.com/in/amsal-wicaksono-b123a262/']
var picSocMEd = ['img/facebook.png', 'img/instagram.png', 'img/linkedin.png'];
var altPicSocmed = ['','','']

for(var b=0; b<socmed.length; b++){
    var aSocmed = document.createElement('a');
        aSocmed.setAttribute('href', socmed[b]);
        aSocmed.setAttribute('target', '_blank');
        sectionFooter.appendChild(aSocmed);

    var iconSocmed = document.createElement('img');
        iconSocmed.setAttribute('src', picSocMEd[b]);
        iconSocmed.setAttribute('alt', altPicSocmed);
        aSocmed.appendChild(iconSocmed);
    
}

 

