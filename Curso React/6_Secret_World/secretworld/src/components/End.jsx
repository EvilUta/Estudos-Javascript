import "./End.css";

const End = ({ retry, score = 0, result, pickedWord, pickedCategory }) => {
  const won = result === "win";
  const wordLabel = pickedWord ? pickedWord.toUpperCase() : "";

  return (
    <div className="end">
      <h1>{won ? "Voce venceu!" : "Voce perdeu!"}</h1>

      {pickedWord && (
        <p className="word">
          {won ? "Voce acertou a palavra:" : "A palavra era:"} <strong>{wordLabel}</strong>
        </p>
      )}

      {pickedCategory && <p className="category">Categoria: {pickedCategory}</p>}

      <p className="score">{score} pontos</p>

      <button onClick={retry}>Jogar novamente</button>
    </div>
  );
};

export default End;
