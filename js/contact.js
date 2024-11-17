document.getElementById("refreshCaptcha").addEventListener("click", function() {
    const captcha = document.getElementById("captcha");
    captcha.textContent = Math.random().toString(36).substring(2, 7).toUpperCase();
});
