document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const createAccountButton = document.querySelector('.choose button');
    
    createAccountButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        
        // Kiểm tra xem các trường có được điền đầy đủ hay không
        if (nameValue === '' || emailValue === '' || passwordValue === '') {
            alert('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        // Kiểm tra định dạng email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailValue)) {
            alert('Email không hợp lệ.');
            return;
        }

        // Kiểm tra độ dài mật khẩu
        if (passwordValue.length < 6) {
            alert('Mật khẩu phải có ít nhất 6 ký tự.');
            return;
        }

        // Lưu tài khoản và mật khẩu vào localStorage
        const userData = {
            name: nameValue,
            email: emailValue,
            password: passwordValue
        };

        // Kiểm tra xem email đã tồn tại hay chưa
        const existingUser = localStorage.getItem(emailValue);
        if (existingUser) {
            alert('Email này đã được đăng ký.');
            return;
        }

        localStorage.setItem(emailValue, JSON.stringify(userData));
        
        alert('Đăng ký thành công!');
        window.location.href = "./login.html";
    });
});
/* mode dark */
const body = document.body;
const switch_mode = document.querySelector('#switch-mode i');
//load mode
let mode = localStorage.getItem('darkmode');
if (mode=='true'){
    body.classList.add('dark');
    switch_mode.className = "bi bi-brightness-high-fill";
}
switch_mode.addEventListener('click', () => {
    body.classList.toggle('dark');
    switch_mode.classList.toggle('bi-moon-stars-fill');
    switch_mode.classList.toggle('bi-brightness-high-fill');
    
    // save mode
    localStorage.getItem('darkmode', mode);
})
