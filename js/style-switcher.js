const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", function(){
    document.querySelector(".style-switcher").classList.toggle("open");
});

//hide style-switcher
window.addEventListener("scroll", function(){
   if(document.querySelector(".style-switcher").classList.contains("open"))
   {
       document.querySelector(".style-switcher").classList.remove("open");
   }
});

const alternateStyles = document.querySelectorAll(".alternate-style");


// Theme-Colors
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled")
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}
