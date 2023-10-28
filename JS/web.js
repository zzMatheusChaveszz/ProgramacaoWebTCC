const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
//Menu Responsivo

window.sr = ScrollReveal({ reset: true});
ScrollReveal().reveal('.area-1', { duration: 1200 });
ScrollReveal().reveal('.area-2', { duration: 1200 });

ScrollReveal().reveal('.home-img', { duration: 1200 });
ScrollReveal().reveal('.page-img', { duration: 1200 });
//Animação h2 (Sobre, Menu, contato)