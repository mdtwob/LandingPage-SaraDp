let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const newTransformValue = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}

