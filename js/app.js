
// menu trigger
$(document).ready(function () {
    $("#portfolio").click(function () {
        $("#portfolio_content").addClass("show");
    });
    $("#about").click(function () {
        $("#about_content").addClass("show");
    });
    $("#contact").click(function () {
        $("#contact_content").addClass("show");
    });
    $(".cancel").click(function () {
        $(".menu_content").removeClass("show");
    });
});

// my_project Carousel
$('.my_project').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: ["<span class='ion-ios-arrow-left'></span>", "<span class='ion-ios-arrow-right'></span>"],
    center: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 800,
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

// live_project Carousel
$('.live_project').owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    dots: false,
    nav: true,
    navText: ["<span class='ion-ios-arrow-left'></span>", "<span class='ion-ios-arrow-right'></span>"],
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 800,
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



// background canvas 
const canvas = document.getElementById('canvas');

let canvasWidth;
let canvasHeight;

const resizeCanvas = () => {
    canvasWidth = window.innerWidth
    canvasHeight = window.innerHeight
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}

resizeCanvas();

addEventListener('resize', () => {
    resizeCanvas();
    init();
});

const getRandomArbitrary = (min, max, roundN = 0) => {
    roundN = Number(`1e${roundN}`);
    return Math.floor((Math.random() * (max - min) + min) * roundN) / roundN;
}

const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const randDirection = (min, max, f, roundN = 0) => {
    let result = 0;
    while (result === 0) {
        result = f(min, max, roundN);
    }
    return result;
}


const ctx = canvas.getContext('2d');
const SHADOW_BLUR = 20;
const COUNT_STARS = 400;
const PI2 = Math.PI * 2;
const dirStars = randDirection(-1, 1, getRandomInt);

class Star {
    constructor({ x, y, radius, speed, opacity, color }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.opacity = opacity;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.save();
        ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
        ctx.fillStyle = ctx.shadowColor = this.color;
        ctx.shadowBlur = SHADOW_BLUR;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.restore();
        ctx.closePath();
    }

    update() {
        this.x += this.speed;

        if (this.x < -this.radius) {
            this.x = canvasWidth + this.radius;
            this.y = getRandomArbitrary(0, canvasHeight, 2);
        }

        if (this.x > canvasWidth + this.radius) {
            this.x = -this.radius;
            this.y = getRandomArbitrary(0, canvasHeight, 2);
        }

        this.draw();
    }

    static createNewStar() {
        let options = Object.create(null);
        options.x = getRandomArbitrary(0, canvasWidth, 2);
        options.y = getRandomArbitrary(0, canvasHeight, 2);
        options.radius = getRandomArbitrary(.5, 1.5, 2);
        options.speed = dirStars * getRandomArbitrary(0, .5, 2);
        options.opacity = getRandomArbitrary(.5, 1, 2);
        options.color = 'rgb(255, 255, 255)';
        return new this(options);
    }
}

let stars = new Set();

let req;


const init = () => {
    stars.clear();
    cancelAnimationFrame(req);

    for (let i = 0; i < COUNT_STARS; i++) {
        let star = Star.createNewStar();
        stars.add(star);
        star.draw();
    }


    const animate = () => {
        ctx.fillStyle = '#121212';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        for (let star of stars) {
            star.update();
        }

        req = requestAnimationFrame(animate);
    }

    req = requestAnimationFrame(animate);
}

init();