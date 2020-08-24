export const NavScroll = () => window.onscroll = () => {
    const x = window.matchMedia("(min-width: 600px)")
    let currentScrollPosition = window.pageYOffset;
    const nav = document.querySelector("nav");
    const menu = document.querySelector('.menu');
        if (currentScrollPosition < "100") {
            nav.style.backgroundColor = "transparent";
            if (x.matches) {
                menu.classList.remove('menu-turn');
            }
        } else {
            nav.style.backgroundColor = "#f1ece8";
            if (x.matches) {
                menu.classList.add('menu-turn');
            }
        }
};
