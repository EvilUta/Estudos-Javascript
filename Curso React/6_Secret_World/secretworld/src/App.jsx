// Importa o CSS global
import "./App.css";

// React
import { useEffect, useState } from "react";

// Lista de palavras
import { wordsList } from "./data/word";

// Telas
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import End from "./components/End";

// Fases do jogo
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

// Tabela de pontos por tentativas restantes
const calculateScore = (remaining) => {
  if (remaining >= 4) return 100;
  if (remaining === 3) return 80;
  if (remaining === 2) return 60;
  if (remaining === 1) return 40;
  return 0;
};

function App() {
  // Tela atual
  const [gameStage, setGameStage] = useState(stages[0].name);

  // Lista de palavras
  const [words] = useState(wordsList);

  // Palavra sorteada
  const [pickedWord, setPickedWord] = useState("");

  // Categoria sorteada
  const [pickedCategory, setPickedCategory] = useState("");

  // Letras da palavra
  const [letters, setLetters] = useState([]);

  // Letras acertadas
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Letras erradas
  const [wrongLetters, setWrongLetters] = useState([]);

  // Tentativas (4)
  const [guesses, setGuesses] = useState(4);

  // Resultado do jogo (win | lose)
  const [gameResult, setGameResult] = useState(null);

  // Pontuacao final
  const [score, setScore] = useState(0);

  // Sorteia palavra e categoria
  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // Iniciar o jogo
  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    const wordLetters = word.toLowerCase().split("");

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(4);
    setScore(0);
    setGameResult(null);

    setGameStage(stages[1].name);
  };

  // Verificar letra digitada
  const verifyLetter = (letter) => {
    const normalized = letter.toLowerCase();

    // Se ja foi tentada, ignore
    if (guessedLetters.includes(normalized) || wrongLetters.includes(normalized)) {
      return;
    }

    // Se acertou a letra
    if (letters.includes(normalized)) {
      setGuessedLetters((prev) => [...prev, normalized]);
      return;
    }

    // Se errou a letra
    const newGuesses = guesses - 1;
    setWrongLetters((prev) => [...prev, normalized]);
    setGuesses(newGuesses);

    if (newGuesses === 0) {
      setScore(0);
      setGameResult("lose");
      setGameStage(stages[2].name);
    }
  };

  // Detectar vitoria
  useEffect(() => {
    if (gameStage !== "game") return;

    const uniqueLetters = [...new Set(letters)];

    if (uniqueLetters.length > 0 && uniqueLetters.every((letter) => guessedLetters.includes(letter))) {
      setScore(calculateScore(guesses));
      setGameResult("win");
      setGameStage(stages[2].name);
    }
  }, [guessedLetters, letters, gameStage, guesses]);

  // Resetar o jogo
  const retry = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(4);
    setScore(0);
    setGameResult(null);
    setGameStage(stages[0].name);
  };

  // Renderizar telas
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}

      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
        />
      )}

      {gameStage === "end" && (
        <End
          retry={retry}
          score={score}
          result={gameResult}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
        />
      )}
    </div>
  );
}

export default App;
