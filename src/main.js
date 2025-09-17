import './css/style.css'
import './css/about.css'
import './css/projects.css'
import './css/contact.css'
import './css/footer.css'

const avail = document.querySelector(".point-available");
// ICON MENU
const iconMenu = document.querySelector(".icon-menu");
const iconClose = document.querySelector(".icon-close");
const navLinks = document.querySelector(".navlinks");
const netWorks = document.querySelector(".networks");


setInterval(() => {
    avail.classList.toggle("avail");
}, 450);

iconMenu.addEventListener("click", () =>{
    console.log("clicked");
    navLinks.style.display = "flex";
    iconMenu.style.display = "none";
    iconClose.style.display = "block";
    netWorks.style.display = "flex";
})
iconClose.addEventListener("click", () =>{
    navLinks.style.display = "none";
    iconMenu.style.display = "block";
    iconClose.style.display = "none";
    netWorks.style.display = "none";
})


