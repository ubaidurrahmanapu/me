$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});


// cart menu
$(document).ready(function () {
    // menu function start
    var wrapper = $(".product-menu");
    // menu toggle programm start
    function menuToggle() {
        if (wrapper.hasClass('product-menu-active')) {
            wrapper.removeClass("product-menu-active");
        } else {
            wrapper.addClass("product-menu-active");
        }
    }
    $("#product-menu").on("click", function (event) {
        menuToggle();
        event.preventDefault();
    });
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
        arrows: false
    });

});

// Instantiate EasyZoom instances
var $easyzoom = $('.easyzoom').easyZoom();

// quantity 
$('.add').click(function () {
    if ($(this).prev().val() < 5) {
        $(this).prev().val(+$(this).prev().val() + 1);
    }
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) {
        if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
});


// related_product_slider
$('.related_product_slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
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
            items: 4
        }
    }
})



// all_product_slider
$('.all_product_slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
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
            items: 4
        }
    }
})



// product_slider_bestsell
$('.product_slider_bestsell').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
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
            items: 4
        }
    }
})


// product_slider_trend
$('.product_slider_trend').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
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
            items: 4
        }
    }
})


// product_slider_hotsell
$('.product_slider_hotsell').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
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
            items: 4
        }
    }
})


// product_slider_onsell
$('.product_slider_onsell').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
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
            items: 4
        }
    }
})


// header slider
$('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    nav:true,
    navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
    autoplay: true,
    animateOut: 'lightSpeedOut',
    // animateIn: 'fadeInLeft',
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
