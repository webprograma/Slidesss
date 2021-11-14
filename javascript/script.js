const slider = $('.slider'),
    inner = $('.slider__inner'),
    slides = inner.children(),
    prev = $('.prev'),
    next = $('.next');
countSlides = slides.length
let slideshow = 1,
    slideMove = 1,
    move = 0, activeSlide = 0;


//  set height to slides
let slidesHeight = slider.height() / slideshow
let slidesMove = slideMove * slidesHeight

slides.each((index, domElement) => {
    $(domElement).css({
        minHeight: slidesHeight
    })
})
prev.click(() => leftOrRight(prev))
next.click(() => leftOrRight(next))

setInterval(() => {
    leftOrRight(next)
}, 5000);

$(window).keydown((e) => {
    switch (e.key) {
        case 'ArrowDown': leftOrRight(next); break;
        case 'ArrowUp': leftOrRight(prev); break;

    }
    console.log(e.key);
});

function leftOrRight(side) {
    if (side === next) {


        let toLeft = countSlides - (Math.abs(move) + slideshow * slidesHeight) / slidesHeight
        move -= toLeft >= slideshow ? slidesMove : toLeft * slidesHeight
        if (activeSlide == inner.children().length) {
            move = 0;
            activeSlide = 0;
        }
        inner.css({
            transform: `translateY(${move}px)`

        })
        activeSlide++;



    } else if (side === prev) {


        let toRight = (Math.abs(move) / slidesHeight)
        move += toRight >= slideshow ? slidesMove : toRight * slidesHeight


        inner.css({
            transform: `translateY(${move}px)`
        })

        if (activeSlide != 0) {
            activeSlide--;
        }

    }
}