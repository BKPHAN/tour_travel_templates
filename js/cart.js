document.getElementById('tourForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});

document.querySelectorAll('input[name="payment"]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
        console.log(`Phương thức thanh toán được chọn: ${e.target.value}`);
    });
});



