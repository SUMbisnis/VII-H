document.getElementById('navbarToggle').addEventListener('click', function() {
    document.getElementById('navbarMenu').classList.toggle('active');
});


// QUOTES

let currentSlide = 0;

document.querySelector('.next').addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

function updateSlider() {
    const slides = document.querySelector('.slider');
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
