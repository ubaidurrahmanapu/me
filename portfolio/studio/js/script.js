// fixed nav bar in jquery
$(window).scroll(function() {
    if($(this).scrollTop() > 2) {
        $('.nav_custom').addClass('nav_active');
    } else {
        $('.nav_custom').removeClass('nav_active');
    };
});

// filter
$(document).ready(function () {
    $("#filterToggle").click(function () {
        $("#filter-box").toggle();
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



// YouTubePopUp
jQuery("a.bla-1").YouTubePopUp();




// client slider
$('.owl-carousel_client').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
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



// testimonial slider
$('#owl-carousel_testimonial').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
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
            items: 2
        }
    }
})





