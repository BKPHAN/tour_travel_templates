// Lấy tham chiếu tới nút
const backToTopBtn = document.getElementById('backToTopBtn');

// Kiểm tra cuộn trang
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.classList.add('show'); // Hiển thị nút
    } else {
        backToTopBtn.classList.remove('show'); // Ẩn nút
    }
};

// Xử lý sự kiện click để cuộn lên đầu trang
backToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hiệu ứng cuộn mượt
    });
};