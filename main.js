
const glideOptions = {
    type: 'carousel',
    autoplay: 10000,
    hoverpause: true
};

const glide = new Glide('.glide', glideOptions);
glide.mount();

const productName = "Auralis";
document.querySelectorAll(".title").forEach(el => {
    el.textContent = productName;
});

document.addEventListener("DOMContentLoaded", function () {
    const faqDivs = document.querySelectorAll(".faq > .faq__item");

    faqDivs.forEach(faq => {
        const down = faq.querySelector(".fa-angle-down");
        const up = faq.querySelector(".fa-angle-up");
        const answer = faq.querySelector(".faq__answer");

        answer.style.display = "none";
        up.style.display = "none";

        down.addEventListener("click", function () {
            faqDivs.forEach(otherFaq => {
                if (otherFaq !== faq) {
                    otherFaq.querySelector(".faq__answer").style.display = "none";
                    otherFaq.querySelector(".fa-angle-down").style.display = "";
                    otherFaq.querySelector(".fa-angle-up").style.display = "none";
                }
            });
            answer.style.display = "";
            down.style.display = "none";
            up.style.display = "";
        });

        up.addEventListener("click", function () {
            answer.style.display = "none";
            up.style.display = "none";
            down.style.display = "";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".fa-bars");
    const navUl = document.querySelector(".site-header__nav-list");
    const header = document.querySelector(".site-header");

    menuIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        navUl.classList.toggle("active");
        header.classList.toggle("active");
    });

    navUl.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    document.addEventListener("click", function () {
        if (navUl.classList.contains("active")) {
            navUl.classList.remove("active");
            header?.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cartBtn = document.querySelector(".btn.btn_black");
    const modal = document.querySelector(".modal");
    const closeButtons = modal.querySelectorAll(".close-modal");

    cartBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "none";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".btn.btn_red");
    const target = document.querySelector("#product-carousel");

    button.addEventListener("click", function () {
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});