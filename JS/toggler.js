/////////  Header menu //////////////
const navbar = document.querySelector('div.nav-list');

function togglerNav(navbar) {
    navbar.classList.toggle('optional-menu');
};


///////// Optional sections ////////
const mobileCard = document.querySelector('div.mobile-cards');
const ourWorksMore = document.querySelector('div.our-works-more');
const projectsMore = document.querySelector('div.projects-more');

function toggler(element) {
    element.classList.toggle('see-more-view');
};
