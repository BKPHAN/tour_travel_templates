// Xử lý sự kiện khi nhấn nút đặt tour
const bookingForm = document.querySelector('.booking-form');

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Cảm ơn bạn đã đặt tour! Chúng tôi sẽ liên hệ sớm.');
});


let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Tự động chuyển slide sau mỗi 5 giây
setInterval(() => changeSlide(1), 5000);


// Lấy phần tử button và thêm sự kiện click
document.getElementById("btnBook").addEventListener("click", function () {
    // Chuyển hướng sang trang "cart.html"
    window.location.href = "./cart.html";
});