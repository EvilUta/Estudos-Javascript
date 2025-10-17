document.querySelector('#botao').addEventListener('click', () => {
  const pergunta = document.querySelector('#pergunta').value
  const respostaDiv = document.querySelector('#resposta')
  const imagem = document.querySelector('#imagem')

  if (!pergunta.trim()) {
    respostaDiv.textContent = 'Digite uma pergunta primeiro!'
    imagem.style.display = 'none'
    return
  }

  fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(data => {
      const resposta = data.answer.toUpperCase()
      respostaDiv.textContent = `Resposta: ${resposta}`

      // limpa classes antigas
      respostaDiv.classList.remove('sim', 'nao')

      // aplica a cor conforme o retorno
      if (resposta === 'YES') respostaDiv.classList.add('sim')
      else if (resposta === 'NO') respostaDiv.classList.add('nao')

      imagem.src = data.image
      imagem.style.display = 'block'
    })
    .catch(error => {
      respostaDiv.textContent = 'Erro ao consultar a API!'
      imagem.style.display = 'none'
      console.error(error)
    })
})

