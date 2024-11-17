// Sử dụng JS để làm hiệu ứng hoặc hiển thị thêm thông tin (tùy chỉnh nếu cần)

// Ví dụ: Thay đổi tiêu đề khi nhấn vào gallery-item
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        alert('Bạn đã chọn ảnh: ' + item.querySelector('p').textContent);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 8; // Số thẻ hiển thị trên mỗi trang
    const cards = document.querySelectorAll(".gallery-item");
    const pagination = document.getElementById("pagination");

    let currentPage = 1;
    const totalPages = Math.ceil(cards.length / itemsPerPage);

    // Hiển thị các thẻ dựa trên trang hiện tại
    function displayPage(page) {
        cards.forEach((card, index) => {
            card.style.display =
                index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
                    ? "block"
                    : "none";
        });

        updatePagination(page);
    }

    // Tạo các nút phân trang
    function updatePagination(page) {
        pagination.innerHTML = "";

        // Nút "Previous"
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.classList.toggle("disabled", page === 1);
        prevButton.disabled = page === 1;
        prevButton.addEventListener("click", () => displayPage(page - 1));
        pagination.appendChild(prevButton);

        // Các nút trang
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.classList.toggle("active", page === i);
            pageButton.addEventListener("click", () => displayPage(i));
            pagination.appendChild(pageButton);
        }

        // Nút "Next"
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.classList.toggle("disabled", page === totalPages);
        nextButton.disabled = page === totalPages;
        nextButton.addEventListener("click", () => displayPage(page + 1));
        pagination.appendChild(nextButton);
    }

    // Khởi tạo trang đầu tiên
    displayPage(currentPage);
});
