// Popup logic
document.getElementById('openPopupBtn').onclick = function() {
    document.getElementById('popupOverlay').classList.add('active');
};
document.getElementById('openPopupBtn2').onclick = function() {
    document.getElementById('popupOverlay').classList.add('active');
};
document.getElementById('closePopupBtn').onclick = function() {
    document.getElementById('popupOverlay').classList.remove('active');
};
document.getElementById('popupContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('popupFormMessage').textContent = "Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ sớm nhất.";
    this.reset();
});

// Form ở dưới trang vẫn hoạt động như cũ
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ sớm nhất.";
    this.reset();
});
