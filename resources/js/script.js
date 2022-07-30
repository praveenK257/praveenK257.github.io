//theme changes
const themeButton = document.getElementById("theme-switch-button");
const buttonText = document.getElementById("button-text");
const lightIcon = document.getElementById("light-mode-icon");
const darkIcon = document.getElementById("dark-mode-icon");

themeButton.addEventListener('click', function(){
    
    var oldlink = document.getElementsByTagName("link").item(0);
    var newlink = document.createElement("link");
    
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");

    if(lightIcon.style.visibility == "visible"){
        lightIcon.style.visibility = "hidden";
        darkIcon.style.visibility = "visible";
        buttonText.innerHTML = "Night theme";
        newlink.setAttribute("href", "resources/css/nightModeStyle.css");
    }
    else{
        lightIcon.style.visibility = "visible";
        darkIcon.style.visibility = "hidden";
        buttonText.innerHTML = "Light theme";
        newlink.setAttribute("href", "resources/css/lightModeStyle.css"); 
    }

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
});

//menu
const menuBar = document.querySelector('.menu-bar');
const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');

openBtn.addEventListener('click',show());
closeBtn.addEventListener('click',hide());

function show(){
    menuBar.style.display = 'flex';
    menuBar.style.top = '0';
}

function hide(){
    menuBar.style.top = '-100%';
}