const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // Remove classe ativa de todas
    panels.forEach(p => p.classList.remove('active'));

    // Adiciona na clicada
    panel.classList.add('active');

    // Atualiza o texto da frase maior
    const bigText = panel.querySelector('.big-text');
    bigText.textContent = panel.getAttribute('data-text');
  });
});
