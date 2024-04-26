

// testimonial_slider
$('.testimonial_slider').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 450,
    center: true,
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


// price_table_slider
$('.price_table_slider').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
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


// service_slider_bottom
$('.service_slider_bottom').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    navText: ['<span class="ion-ios-arrow-up"></span>', '<span class="ion-ios-arrow-down"></span>'],
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})


// service_slider
$('.service_slider').owlCarousel({
    loop: true,
    center: true,
    margin: 10,
    dots: false,
    nav: false,
    navText: ['<span class="ion-ios-arrow-up"></span>', '<span class="ion-ios-arrow-down"></span>'],
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 450,
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
    nav: false,
    navText: ['<span class="ion-ios-arrow-up"></span>', '<span class="ion-ios-arrow-down"></span>'],
    autoplay: true,
    autoplayTimeout: 15000,
    smartSpeed: 450,
    animateOut: 'slideOutLeft',
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