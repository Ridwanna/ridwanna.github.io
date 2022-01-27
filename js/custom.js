
// to use wow animation library
document.addEventListener("DOMContentLoaded", (e) => {
    "use strict";
    // for animation/ initialize wow
    new WOW().init();
})

// to auto hide navbar on mobile after click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// highlight menu on scroll
$(document).ready(function(){
    'use strict'; 

    $(window).scroll(function(){
        'use strict';

        $("section").each(function(){
            'use strict';

            let idAttri = $(this).attr('id');
            let height = $(this).outerHeight();
            let greaterTop = $(this).offset().top - 150;
            let newId = $(".navbar-nav li a[href='#" + idAttri +"']");

            if ($(window).scrollTop() > greaterTop && $(window).scrollTop() < greaterTop + height){
                newId.parent().addClass("active");
                
            } else {
                newId.parent().removeClass("active")
            }
        
        })
    })
})