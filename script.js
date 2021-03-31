let sliderImages = document.querySelectorAll('.slide');
let arrowPrev = document.querySelector('.prev');
let arrowNext = document.querySelector('.next');
let bars = document.querySelectorAll('.bar');
current = 0;

// clear all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
    for(i = 0; i < bars.length; i++){
        bars[i].className = bars[i].className.replace(' active', '');
    }
}

// init Slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
    bars[0].className += ' active';
}

//Show prev
function slideLeft() {
    reset();
    bars.className = 'bar';
    sliderImages[current - 1].style.display = 'block';
    bars[current-1].className += ' active';
    current--;
}

//show next 
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    bars[current+1].className += ' active';
    current++;
};


// left Arrow Click
arrowPrev.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});



// Show right click
arrowNext.addEventListener('click', function(){
    if(current === sliderImages.length -1){
        current = -1;
    }
    slideRight();


})


startSlide();


