// Function to calculate the remaining time until the wedding
function updateCountdown() {
    const weddingDate = new Date("February 7, 2025 00:00:00").getTime(); // Wedding date
    const currentDate = new Date().getTime(); // Current date and time
    const timeLeft = weddingDate - currentDate; // Time difference

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the wedding date has passed, display a message
    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "The big day is here!";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
