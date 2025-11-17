const speedValue = document.getElementById("speedValue");
const arrow = document.getElementById("arrow");
const statusEl = document.getElementById("status");

if (!("geolocation" in navigator)) {
  statusEl.textContent = "Geolocation não é suportado neste navegador.";
} else {
  statusEl.textContent = "Obtendo sua posição...";

  navigator.geolocation.watchPosition(
    (position) => {
      statusEl.textContent = "Movimente-se para ver mudanças na velocidade e direção.";

      // velocidade em m/s -> converte para km/h
      const speedMs = position.coords.speed; // pode vir null
      let speedKmh = 0;

      if (typeof speedMs === "number" && !Number.isNaN(speedMs)) {
        speedKmh = speedMs * 3.6;
      }

      speedValue.textContent = Math.round(speedKmh);

      // heading: direção em graus (0 = norte)
      const heading = position.coords.heading;

      if (typeof heading === "number" && !Number.isNaN(heading)) {
        // CSS usa graus, 0deg é "para cima" no nosso triângulo
        arrow.style.transform = `rotate(${heading}deg)`;
      } else {
        // sem heading (parado / sensor não disponível)
        arrow.style.transform = "rotate(0deg)";
      }
    },
    (err) => {
      console.error(err);
      statusEl.textContent = "Erro ao obter geolocalização: " + err.message;
    },
    {
      enableHighAccuracy: true,
      maximumAge: 1000,
      timeout: 10000,
    }
  );
}
