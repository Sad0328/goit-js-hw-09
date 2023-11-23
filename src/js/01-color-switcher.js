
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

 let colorInterval;


function startChangingColor() {
startBtn.disabled = true; 
colorInterval = setInterval(() => {
document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
}

function stopChangingColor() {
startBtn.disabled = false; 
clearInterval(colorInterval);
}

startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);




