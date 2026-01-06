
const ExecuteFunction = ({myFunction}) => { {/* Nao esquecer de desestruturar na funcao */}
  return (
    <div>
      <button onClick={myFunction}>Clique aqui para executar a funcao!</button>
    </div>
  )
}

export default ExecuteFunction
