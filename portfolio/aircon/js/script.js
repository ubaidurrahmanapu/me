// fixed nav bar in jquery
$(window).scroll(function() {
    if($(this).scrollTop() > 2) {
        $('.contact-nav').addClass('active');
    } else {
        $('.contact-nav').removeClass('active');
    };
});

$(window).scroll(function() {
    if($(this).scrollTop() > 100) {
        $('.nav_custom').addClass('nav_active');
    } else {
        $('.nav_custom').removeClass('nav_active');
    };
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


// client slider
$('.owl-carousel_client').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    animateOut: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


// faq slider
$('.owl-carousel_faq').owlCarousel({
    loop: true,
    dots: false,
    margin: 30,
    autoplay: true,
    smartSpeed: 1000,
    animateOut: false,
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



// service slider
$('.owl-carousel_service').owlCarousel({
    loop: true,
    dots: false,
    margin: 30,
    autoplay: true,
    smartSpeed: 1000,
    animateOut: false,
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



// header slider
$("#header_slider").vegas({
    delay: 10000,
    slides: [
        { src: "./images/slider/1.jpg" },
        { src: "./images/slider/2.jpg" },
        { src: "./images/slider/3.jpg" }
    ],
    animation: ['kenburnsUp']
    
});