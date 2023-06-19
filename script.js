//Basic Swiper functions
var swiper = new Swiper(".mySwiper", {
    hashNavigation: {
        watchState: true,
    },
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    rewind: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Text and image fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)        
        //Single fade-in
        /*if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }*/

        //Repetitive fade-in
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});
document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

//Typing effect
let count = 0;
const observer2 = new IntersectionObserver((events) => {
    events.forEach((event) => {
        if (count < 2) {
            event.target.innerHTML = "";
            setTimeout(function () {
                let i = 0;
                const timer = setInterval(() => {
                    event.target.innerHTML += event.target.dataset.value.charAt(i);
                    i++;
                }, 50);
            }, event.target.dataset.delay);
            count++;
        }
    });
});
document.querySelectorAll(".hack").forEach((elem) => observer2.observe(elem));

//Flying blob moving after the pointer
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (window.screen.width > 780 && !isMobile()){
    const blob = document.getElementById("blob");

    window.onpointermove = event => {
        const { clientX, clientY } = event;
    
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
    }
}

    


function showMail() {
    document.getElementById("mail").textContent = "dpilich16@gmail.com";
  }