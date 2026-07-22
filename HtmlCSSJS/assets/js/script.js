// Dark Mode

const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

});

// Hamburger Menu

const menuButton = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});






// Scroll Animation

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((element)=>{

    observer.observe(element);

});




const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }
    else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});