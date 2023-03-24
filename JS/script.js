/////////  Header menu //////////////
{
    let navbar = document.querySelector('div.nav-list');
    let buttonHeader = document.querySelector('button.navbar-toggler');

    function toggler() {
        navbar.classList.toggle('optional-menu');
    };

    buttonHeader.addEventListener("click", toggler);
}
///////// Mobile-app //////////////////
{
    let mobileCard = document.querySelector('div.mobile-cards');
    let buttonMobile = document.querySelector('button.mobile-button');

    function toggler() {
        mobileCard.classList.toggle('see-more-view');
    };

    buttonMobile.addEventListener('click', toggler);
};



///// Our-Works/////
{
    // let buttonWorks = document.querySelector('#buttonWorks');

    // function ourWorks() {
    //     let card = document.createElement('div');
    //     let gallery = document.querySelector('.works-gallery');
    //     card.classList = 'col-12 pb-5 col-md-8 d-flex flex-column align-items-center text-center col-xl-4 pb-xl-5 align-items-xl-start text-xl-left';
    //     card.innerHTML = `
    //     <div class="our-works-card">
    //         <img class="our-works-img" src="./img/Rectangle.jpg"
    //             alt="настоящие специалисты своего дела творят it шедевры">
    //     </div>
    //     <h3 class="title title-small mb-4 color-contrast">
    //         <span class="color-blue">01. </span>Исследование и упаковка
    //     </h3>
    //     <p class="text mb-4 color-contrast">
    //         Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
    //         стандартной "рыбой" для текстов на латинице с начала XVI века.
    //     </p>
    //     <a class="color-contrast link" href="#">
    //         Подробнее
    //     </a>
    //     </div>`;
    //     gallery.append(card);
    // };

    // buttonWorks.addEventListener('click', ourWorks);
};
{
    let ourWorksMore = document.querySelector('div.our-works-more');
    let buttonOurWorks = document.querySelector('button.our-works-button');

    function toggler() {
        ourWorksMore.classList.toggle('see-more-view');
    };

    buttonOurWorks.addEventListener('click', toggler);
};


/////// Our-Projects /////////
{
    let projectsMore = document.querySelector('div.projects-more');
    let buttonProjects = document.querySelector('button.projects-button');

    function toggler() {
        projectsMore.classList.toggle('see-more-view');
    };

    buttonProjects.addEventListener('click', toggler);
};
