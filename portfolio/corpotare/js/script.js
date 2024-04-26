// fixed nav bar in jquery
$(window).scroll(function() {
    if($(this).scrollTop() > 100) {
        $('.nav_custom').addClass('nav_active');
    } else {
        $('.nav_custom').removeClass('nav_active');
    };
});



$(document).ready(function () {
    // navigation click function
    $('nav a').on('click', function () {
        var $el = $(this)
        id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - 60
        }, 700);

        $('.navbar-collapse').collapse('hide');
        return false;
    });
});



// back to top
// When the user scrolls down from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





// service slider
$('#owl-carousel_service').owlCarousel({
    margin: 30,
    loop: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    animateOut: false,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})



// testimonial slider
$('#owl-carousel_testimonial').owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    animateOut: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


// header slider
$("#header_slider").vegas({
    delay: 5000,
    slides: [
        { src: "./images/slider/1.jpg" },
        { src: "./images/slider/2.jpg" },
        { src: "./images/slider/3.jpg" }
    ],
    // animation: ['kenburnsRight'],
    transition: 'slideRight'
    
});