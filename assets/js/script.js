console.log("Portfolio Loaded Successfully");

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const themeButton = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️";

}

themeButton.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeButton.textContent="☀️";

    }

    else{

        localStorage.setItem("theme","light");

        themeButton.textContent="🌙";

    }

});

AOS.init({
    duration:1000,
    once:true
});


const roles = [
    "Front-End Developer",
    "ASP.NET Core Developer",
    "SQA Engineer"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;

function typeText(){

    if(charIndex < roles[roleIndex].length){

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }

    else{

        setTimeout(deleteText,1500);

    }

}

function deleteText(){

    if(charIndex > 0){

        typingElement.textContent =
        roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteText,50);

    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;

        }

        setTimeout(typeText,500);

    }

}

typeText();




emailjs.init("euyRYjeEAK1T-4P_v");

const contactForm = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    sendBtn.disabled = true;

    sendBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Sending...';

    emailjs.sendForm(

        "service_tz4yi8j",
        "template_xgz5j6c",
        this

    ).then(() => {

        sendBtn.innerHTML =
        '<i class="fas fa-check"></i> Message Sent!';

        contactForm.reset();

        setTimeout(() => {

            sendBtn.disabled = false;

            sendBtn.innerHTML =
            '<i class="fas fa-paper-plane"></i> Send Message';

        },2000);

    }).catch((error)=>{

        console.log(error);

        sendBtn.disabled = false;

        sendBtn.innerHTML =
        '<i class="fas fa-times"></i> Failed! Try Again';

        setTimeout(() => {

            sendBtn.innerHTML =
            '<i class="fas fa-paper-plane"></i> Send Message';

        },2000);

    });

});


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});




const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

    });

});



const topBtn = document.getElementById("top-btn");

console.log(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        progressBars.forEach(bar => {
            bar.classList.add("animate");
        });

    }

});

skillObserver.observe(skillSection);
*/


const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            skillBars.forEach(bar=>{

                bar.style.width =
                bar.dataset.progress + "%";

            });

        }
        else{

            skillBars.forEach(bar=>{

                bar.style.width="0";

            });

        }

    });

});

skillObserver.observe(document.querySelector("#skills"));









const counters = document.querySelectorAll(".counter");
const aboutSection = document.querySelector("#about");

const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {

        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            let count = 0;

            const interval = setInterval(() => {
                count++;
                counter.innerText = count;

                if (count >= target) {
                    counter.innerText = target + "+";
                    clearInterval(interval);
                }
            }, 150);
        });

        counterObserver.unobserve(aboutSection);
    }
});

counterObserver.observe(aboutSection);






window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.classList.add("hide");

});




document.querySelectorAll(".description").forEach(card => {

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    });

});







document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });

});






const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        tabButtons.forEach(btn => btn.classList.remove("active"));

        tabContents.forEach(tab => tab.classList.remove("active"));

        button.classList.add("active");

        document
            .getElementById(button.dataset.tab)
            .classList.add("active");

    });

});