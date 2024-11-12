// JavaScript สำหรับสไลด์ภาพ
let currentIndex = 0;
const images = document.querySelectorAll(".image-slider img");

function showNextImage() {
    images[currentIndex].classList.add("inactive");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.remove("inactive");
}

setInterval(showNextImage, 3000); // เปลี่ยนภาพทุกๆ 3 วินาที
