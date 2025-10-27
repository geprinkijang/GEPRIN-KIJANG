let currentSlide = 0;
let autoPlayInterval;
let isAutoPlaying = true;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 10000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function toggleAutoPlay() {
    const btn = document.getElementById('autoPlayBtn');
    if (isAutoPlaying) {
        stopAutoPlay();
        btn.textContent = '▶️ Play Auto Play';
        btn.classList.add('paused');
        isAutoPlaying = false;
    } else {
        startAutoPlay();
        btn.textContent = '⏸️ Pause Auto Play';
        btn.classList.remove('paused');
        isAutoPlaying = true;
    }
}

// Start auto play when page loads
startAutoPlay();