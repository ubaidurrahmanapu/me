$('.navbar').coreNavigation({
    menuPosition: "right",
    container: true,
    mode: 'sticky',
    dropdownEvent: 'hover',
    onOpenDropdown: function () {
        console.log('open');
    },
    onCloseDropdown: function () {
        console.log('close');
    },
    onOpenMegaMenu: function () {
        console.log('Open Megamenu');
    },
    onCloseMegaMenu: function () {
        console.log('Close Megamenu');
    }
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



// price range slider

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});





// slick slider
$(document).ready(function () {
    $('.slider_view').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider_nav'
    });
    $('.slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider_view',
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    });

    // product quantity counter

    var quantity = $(".quantity").val();
    $(".quantity").keyup(function (event) {
        quantity = $(".quantity").val();
    });

    $('#up').click(function () {
        quantity++;
        $(".quantity").val(quantity);
    });

    $("#down").click(function () {
        quantity--;
        if (quantity > 0) {
            $(".quantity").val(quantity);
        }
        else {
            quantity = 0;
            $(".quantity").val(quantity);
        }

    });
});



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
$('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})


// YouTubePopUp
jQuery("a.bla-1").YouTubePopUp();