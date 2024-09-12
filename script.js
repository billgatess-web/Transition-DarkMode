let hero = document.getElementsByClassName("hero")[0];
let icon = document.getElementsByClassName("icon")[0];
let body = document.getElementsByTagName("body")[0];

function EnableDarkTheme(){
    body.classList.toggle("dark-theme");
    if(body.classList.contains("dark-theme")){
        icon.src = "Images/sun.png";
    } else{
        icon.src = "Images/moon.png";
    }
}