const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');

const startTime = new Date('December 24, 2024 02:00:00 PST').getTime();
const endTime = new Date('December 25, 2024 02:00:00 PST').getTime();
const finalMessageTime = new Date('January 1, 2025 00:00:00 PST').getTime();

function padZero(num) {
  return num < 10 ? '0' + num : num;
} //

function updateTimer() {
  const now = new Date().getTime();

  if (now < startTime) {
    const timeUntilStart = startTime - now;

    const days = Math.floor(timeUntilStart / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntilStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilStart % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntilStart % (1000 * 60)) / 1000);

    if (days > 0 || (days === 0 && hours >= 24)) {
      timerElement.textContent = `${padZero(days)}:${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    } else {
      timerElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }

    messageElement.textContent = "";
  } else if (now >= startTime && now < endTime) {
    const elapsedTime = now - startTime;

    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    timerElement.textContent = `${padZero(hours)}h ${padZero(minutes)}m ${padZero(seconds)}s`;
    messageElement.textContent = "";
  } else if (now >= endTime && now < finalMessageTime) {
    timerElement.textContent = "";
    messageElement.textContent = "Santa Claus has completed his journey";
  } else if (now >= finalMessageTime) {
    const timeUntilNextStart = startTime - now;

    const days = Math.floor(timeUntilNextStart / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntilNextStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilNextStart % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntilNextStart % (1000 * 60)) / 1000);

    if (days > 0 || (days === 0 && hours >= 24)) {
      timerElement.textContent = `${padZero(days)}:${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    } else {
      timerElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }

    messageElement.textContent = "";
  }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
