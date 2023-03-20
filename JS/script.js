let navbar = document.querySelector('div.nav-list');
let button = document.querySelector('button.navbar-toggler');

function toggler() {
    navbar.classList.toggle('ifhidden');
};

button.addEventListener("click", toggler);
