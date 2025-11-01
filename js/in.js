// script.js

// รอให้หน้าเว็บโหลดเสร็จก่อน
document.addEventListener("DOMContentLoaded", function() {
    
    // ดึง element ที่เราต้องใช้
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    // เพิ่ม Event Listener เมื่อมีการกดปุ่ม submit
    loginForm.addEventListener("submit", function(event) {
        // ป้องกันไม่ให้ฟอร์มส่งข้อมูลและรีเฟรชหน้าเว็บ
        event.preventDefault();

        // ดึงค่าจากช่อง input
        const username = usernameInput.value;
        const password = passwordInput.value;

        // ตรวจสอบเงื่อนไข
        if (username === "user1" && password === "1234") {
            // ถ้าถูกต้อง: ไปยังหน้า home.html
            errorMessage.textContent = ""; // ล้างข้อความ error (ถ้ามี)
            window.location.href = "home.html";
        } else {
            // ถ้าไม่ถูกต้อง: แสดงข้อความแจ้งเตือน
            errorMessage.textContent = "บัญชีหรือรหัสผ่านไม่ถูกต้อง";
        }
    });
});