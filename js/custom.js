

document.addEventListener("DOMContentLoaded", (e) => {
    "use strict";
    // for animation/ initialize wow
    new WOW().init();

    // let links = document.querySelectorAll(".nav-link");
    // let navCollapse = document.querySelector(".navbar-collapse");

    // function collapse (items) {
    //     items.forEach(link => {
    //         link.addEventListener('click', (e) => {
    //             navCollapse.toggleAttribute(e);
    //         })
    //     });
    // }
    // console.log (collapse(links));
    
})

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});