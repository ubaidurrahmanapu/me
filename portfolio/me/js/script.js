$(document).ready(function(){
    $(".menu").hide();
    $(".ion-android-close").hide();
    $(".icon").click(function(){
        $(".menu").toggle(700);
    });
    $(".ion-android-menu").click(function(){
        $(".ion-android-close").show();
        $(".ion-android-menu").hide();
    });
    $(".ion-android-close").click(function(){
        $(".ion-android-menu").show();
        $(".ion-android-close").hide();
    });


    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
});