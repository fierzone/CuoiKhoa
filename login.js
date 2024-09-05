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

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('form_login');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorEmail = document.getElementById('error_email');
    const errorPassword = document.getElementById('error_password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Đặt lại thông báo lỗi
        errorEmail.textContent = '';
        errorPassword.textContent = '';

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (emailValue === '' || passwordValue === '') {
            if (emailValue === '') {
                errorEmail.textContent = 'Vui lòng nhập email hoặc số điện thoại của bạn.';
            }
            if (passwordValue === '') {
                errorPassword.textContent = 'Vui lòng nhập mật khẩu của bạn.';
            }
            return;
        }

        const savedUser = localStorage.getItem(emailValue);

        if (!savedUser) {
            errorEmail.textContent = 'Tài khoản không tồn tại.';
            return;
        }

        const userData = JSON.parse(savedUser);

        if (userData.password !== passwordValue) {
            errorPassword.textContent = 'Mật khẩu không chính xác.';
            return;
        }

        alert('Đăng nhập thành công!');
        window.location.href = "./homepage.html";
    });
});