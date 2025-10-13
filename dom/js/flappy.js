document.addEventListener("DOMContentLoaded", () => {
    const flappyArea = document.querySelector("[wm-flappy]");

    // Criar elementos principais
    const tela = document.createElement("div");
    tela.classList.add("tela");
    flappyArea.appendChild(tela);

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = `
        <h2>Flappy Bird</h2>
        <button id="iniciar">Iniciar</button>
    `;
    tela.appendChild(menu);

    const gameOver = document.createElement("div");
    gameOver.classList.add("game-over");
    gameOver.innerHTML = `
        <h2>Game Over</h2>
        <button id="reiniciar">Jogar Novamente</button>
    `;
    gameOver.style.display = "none";
    tela.appendChild(gameOver);

    const pontuacaoEl = document.createElement("div");
    pontuacaoEl.classList.add("pontuacao");
    pontuacaoEl.textContent = "0";
    tela.appendChild(pontuacaoEl);

    let passaro, gravidade, velocidade, posY, pulo, canos, pontos, jogoAtivo, tempoProximoCano;

    // ==========================
    // 🚀 Iniciar o jogo
    // ==========================
    function iniciarJogo() {
        menu.style.display = "none";
        gameOver.style.display = "none";
        tela.querySelectorAll(".cano, .passaro").forEach(e => e.remove());
        pontuacaoEl.textContent = "0";

        passaro = document.createElement("img");
        passaro.src = "./imgs/passaro.png";
        passaro.classList.add("passaro");
        tela.appendChild(passaro);

        // ⚙️ Física ajustada
        gravidade = 0.12   
        velocidade = 0;
        posY = 200;
        pulo = -3.8;        
        pontos = 0;
        jogoAtivo = true;
        canos = [];
        tempoProximoCano = 0;

        requestAnimationFrame(atualizar);
    }

    // ==========================
    // 🔁 Loop principal
    // ==========================
    function atualizar(timestamp) {
        if (!jogoAtivo) return;

        // Movimento do pássaro
        velocidade += gravidade;
        posY += velocidade;
        passaro.style.top = posY + "px";

        // Verifica limites
        if (posY >= 460 || posY <= 0) fimJogo();

        moverCanos();
        verificarColisao();

        // 🕐 Gera canos a cada intervalo variável
        if (!tempoProximoCano || timestamp > tempoProximoCano) {
            gerarCanos();
            tempoProximoCano = timestamp + Math.floor(Math.random() * 1000) + 2300;
        }

        requestAnimationFrame(atualizar);
    }

    // ==========================
    // 🏗️ Geração de canos
    // ==========================
    function gerarCanos() {
        if (!jogoAtivo) return;

        const alturaTela = 500;
        const larguraCano = 60;
        const espacoVertical = 150; // espaço entre o cano de cima e o de baixo
        const margem = 70;          // margem de segurança

        // número aleatório de pares de canos (1 a 3)
        const quantidade = Math.floor(Math.random() * 3) + 1;

        // posição base (primeiro cano)
        let posX = 420;

        for (let i = 0; i < quantidade; i++) {
            const alturaCima = Math.floor(
                Math.random() * (alturaTela - espacoVertical - 2 * margem) + margem
            );
            const alturaBaixo = alturaTela - espacoVertical - alturaCima;

            // Cria o cano superior
            const canoCima = document.createElement("div");
            canoCima.classList.add("cano", "cima");
            canoCima.style.height = alturaCima + "px";
            canoCima.style.left = posX + "px";

            // Cria o cano inferior
            const canoBaixo = document.createElement("div");
            canoBaixo.classList.add("cano", "baixo");
            canoBaixo.style.height = alturaBaixo + "px";
            canoBaixo.style.left = posX + "px";

            tela.appendChild(canoCima);
            tela.appendChild(canoBaixo);
            canos.push({ cima: canoCima, baixo: canoBaixo, passou: false });

            // 🔄 Próximo cano vem com espaçamento horizontal aleatório (mín 180px, máx 260px)
            posX += Math.floor(Math.random() * 80) + 180;
        }
    }

    // ==========================
    // 🧱 Movimento dos canos
    // ==========================
    function moverCanos() {
        canos.forEach((c) => {
            let pos = parseInt(c.cima.style.left);
            pos -= 2.2; // velocidade constante dos canos
            c.cima.style.left = pos + "px";
            c.baixo.style.left = pos + "px";

            // Remove canos fora da tela
            if (pos < -60) {
                c.cima.remove();
                c.baixo.remove();
                canos.shift();
            }

            // Conta ponto quando o pássaro passa
            if (!c.passou && pos + 60 < 80) {
                c.passou = true;
                pontos++;
                pontuacaoEl.textContent = pontos;
            }
        });
    }

    // ==========================
    // 💥 Verifica colisão
    // ==========================
    function verificarColisao() {
        const passaroRect = passaro.getBoundingClientRect();

        canos.forEach((c) => {
            const cimaRect = c.cima.getBoundingClientRect();
            const baixoRect = c.baixo.getBoundingClientRect();

            if (
                passaroRect.left < cimaRect.right &&
                passaroRect.right > cimaRect.left &&
                (passaroRect.top < cimaRect.bottom ||
                    passaroRect.bottom > baixoRect.top)
            ) {
                fimJogo();
            }
        });
    }

    // ==========================
    // ❌ Fim de jogo
    // ==========================
    function fimJogo() {
        jogoAtivo = false;
        gameOver.style.display = "flex";
    }

    // ==========================
    // ⌨️ Controles
    // ==========================
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space" && jogoAtivo) {
            velocidade = pulo;
        }
    });

    // ==========================
    // 🟢 Botões
    // ==========================
    menu.querySelector("#iniciar").addEventListener("click", iniciarJogo);
    gameOver.querySelector("#reiniciar").addEventListener("click", iniciarJogo);
});
