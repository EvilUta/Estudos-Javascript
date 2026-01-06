import './Game.css'
import { useState } from 'react';

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses
}) => {

  const [inputLetter, setInputLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(inputLetter);
    setInputLetter("");
  };

  return (
    <div className="gameContainer">

      <h2>Categoria: <span>{pickedCategory}</span></h2>
      <p>Você tem <strong>{guesses}</strong> tentativas</p>

      {/* Letras estilo roda a roda */}
      <div className="wordContainer">
        {letters.map((letter, i) => (
          <span className="letterBox" key={i}>
            {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
          </span>
        ))}
      </div>

      {/* Formulário */}
      <form className="letterForm" onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength="1"
          value={inputLetter}
          onChange={(e) => setInputLetter(e.target.value)}
          required
        />
        <button>Chutar letra</button>
      </form>

      {/* Letras erradas */}
      {wrongLetters.length > 0 && (
        <p className="wrong">
          Letras erradas: {wrongLetters.join(", ").toUpperCase()}
        </p>
      )}

    </div>
  );
};

export default Game;
