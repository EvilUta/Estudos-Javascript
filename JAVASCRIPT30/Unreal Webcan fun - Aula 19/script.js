const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const photos = document.querySelector('.photos');
const effectSelect = document.getElementById('effect');
const captureBtn = document.getElementById('capture');

async function getVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  video.srcObject = stream;
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.globalAlpha = 1; // Sempre resetar 
    ctx.drawImage(video, 0, 0, width, height);

    let pixels = ctx.getImageData(0, 0, width, height);
    const effect = effectSelect.value;

    // Caso especial: pixelate (não usa manipulação pixel-by-pixel)
    if (effect === "pixelate") {
      pixelateEffect(pixels);
      return;
    }

    // Aplicar efeitos normais
    if (effectFunctions[effect]) {
      pixels = effectFunctions[effect](pixels);
    }

    ctx.putImageData(pixels, 0, 0);

  }, 16);
}

// -------- EFEITOS CORRIGIDOS ---------

const effectFunctions = {
  none: (p) => p,

  redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i] += 180;
      pixels.data[i + 1] -= 40;
      pixels.data[i + 2] *= 0.5;
    }
    return pixels;
  },

  rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i - 150] = pixels.data[i];
      pixels.data[i + 500] = pixels.data[i + 1];
      pixels.data[i - 550] = pixels.data[i + 2];
    }
    return pixels;
  },

  ghost(pixels) {
    ctx.globalAlpha = 0.6;
    return pixels;
  },

  blueIce(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i] *= 0.4;
      pixels.data[i + 1] *= 0.7;
      pixels.data[i + 2] += 100;
    }
    return pixels;
  },

  invert(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i] = 255 - pixels.data[i];
      pixels.data[i + 1] = 255 - pixels.data[i + 1];
      pixels.data[i + 2] = 255 - pixels.data[i + 2];
    }
    return pixels;
  },

  // ----- CHROMA KEY 100% FUNCIONANDO -----
  greenScreen(pixels) {
    const levels = {
      rmin: 0,   rmax: 140,
      gmin: 120, gmax: 255,
      bmin: 0,   bmax: 140
    };

    for (let i = 0; i < pixels.data.length; i += 4) {
      const r = pixels.data[i];
      const g = pixels.data[i + 1];
      const b = pixels.data[i + 2];

      if (
        r >= levels.rmin && r <= levels.rmax &&
        g >= levels.gmin && g <= levels.gmax &&
        b >= levels.bmin && b <= levels.bmax
      ) {
        pixels.data[i + 3] = 0; // transparente
      }
    }
    return pixels;
  }
};


// ------- PIXELATE (feito separado corretamente) -------
function pixelateEffect(pixels) {
  const scale = 10;
  for (let y = 0; y < canvas.height; y += scale) {
    for (let x = 0; x < canvas.width; x += scale) {

      const pos = (y * canvas.width + x) * 4;

      const r = pixels.data[pos];
      const g = pixels.data[pos + 1];
      const b = pixels.data[pos + 2];

      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(x, y, scale, scale);
    }
  }
}


// ------- CAPTURAR FOTO -------
function takePhoto() {
  const data = canvas.toDataURL("image/jpeg");
  const img = document.createElement("img");
  img.src = data;
  photos.prepend(img);
}

// Eventos
video.addEventListener("canplay", paintToCanvas);
captureBtn.addEventListener("click", takePhoto);

getVideo();
