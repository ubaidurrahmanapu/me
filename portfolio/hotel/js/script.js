// fixed nav bar in jquery
$(window).scroll(function() {
    if($(this).scrollTop() > 2) {
        $('.contact-nav').addClass('active');
    } else {
        $('.contact-nav').removeClass('active');
    };
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    autoplay:true,
    animateOut:'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



