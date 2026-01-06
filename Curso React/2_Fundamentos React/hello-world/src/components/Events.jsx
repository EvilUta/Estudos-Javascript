const Events = () => {

  const handleMyEvent = (e) => {  // parametro E de evento
    console.log("Ativou o evento");
    console.log(e);
  };

  const renderSomething = (x) => {  // em react da para usar html dentro de um funcao
    if(x){
      return <h1>Renderizando Isso!</h1>
    } else{
      return <h1>tambem posso renderizar isso</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div style={{ padding: "20px" , display: "flex" , gap:"12px" , justifyContent:"center"}}>
        <button onClick={() => console.log("Clicou")}>Clique aqui tambem!</button>
        <button onClick={() => console.log("Paia '-'")}>Aqui nao!</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;

// da para criar uma funcao -> arrow function em um evento, o react entende e executa dps
// da para executar template dentro de uma funcao
