// Importa o CSS específico da tela inicial
import './StartScreen.css'

// Componente que recebe a função startGame por props
const StartScreen = ({ startGame }) => {
  return (
    <div className="start">

      {/* Título do jogo */}
      <h1>Secret Word</h1>

      {/* Texto explicativo */}
      <p>Clique no botão abaixo para jogar</p>

      {/* Botão que inicia o jogo */}
      <button onClick={startGame}>
        Começar o jogo
      </button>

    </div>
  )
}

// Exporta o componente
export default StartScreen
