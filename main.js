// Change Navbar styles on scroll
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

//show/hide FAQs answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
});

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

const closeNav = () => {
    menu.style.display = "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
}

closeBtn.addEventListener('click', closeNav);