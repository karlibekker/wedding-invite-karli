const countdown = document.getElementById("countdown");
const weddingDate = new Date("2025-12-20T00:00:00");

function updateCountdown() {
    const now = new Date();
    const timeLeft = weddingDate - now;

    if (timeLeft <= 0) {
        countdown.innerHTML = "It's our wedding day! 💍";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    countdown.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds to go`;
}

updateCountdown();
setInterval(updateCountdown, 1000); // update every second