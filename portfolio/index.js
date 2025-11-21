const btn = document.getElementById('menu-button');
const projectsLink = document.getElementById('projects-link');
const contactLink = document.getElementById('contact-link');
const menu = document.getElementById('nav-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('open');
});

projectsLink.addEventListener('click', () => {
    menu.classList.toggle('open');
});

contactLink.addEventListener('click', () => {
    menu.classList.toggle('open');
});