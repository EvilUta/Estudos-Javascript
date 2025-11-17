const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const totalSeconds = timeNodes
  .map(node => node.dataset.time)  // "4:12"
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs; // converte tudo pra segundos
  })
  .reduce((total, seconds) => total + seconds); // soma tudo

// Converte para h:m:s
let secondsLeft = totalSeconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

document.querySelector("#total").textContent =
  `Total: ${hours}h ${mins}m ${secondsLeft}s`;
