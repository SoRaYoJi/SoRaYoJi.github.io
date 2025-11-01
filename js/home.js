// Anniversary Home — script.js
// Configure names and anniversary date here (YYYY-MM-DD)
const CONFIG = {
  you: 'Mark',
  partner: 'Ploy',
  anniversaryDate: '2025-11-13',
};

// Branding + footer names
document.getElementById('brandYou').textContent = CONFIG.you;
document.getElementById('brandPartner').textContent = CONFIG.partner;
document.getElementById('signYou').textContent = CONFIG.you;
document.getElementById('signPartner').textContent = CONFIG.partner;
document.getElementById('footYou').textContent = CONFIG.you;
document.getElementById('footPartner').textContent = CONFIG.partner;
document.getElementById('footYou2').textContent = CONFIG.you;
document.getElementById('footPartner2').textContent = CONFIG.partner;

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Countdown
function updateCountdown(){
  const target = new Date(CONFIG.anniversaryDate + 'T00:00:00').getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const pad = n => String(n).padStart(2,'0');
  const text = `${pad(days)}d : ${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;
  document.getElementById('countdownText').textContent = text;
}
updateCountdown();
setInterval(updateCountdown, 1000);
