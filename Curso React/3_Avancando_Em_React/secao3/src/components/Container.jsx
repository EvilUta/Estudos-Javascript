
const Container = ({children, myValue}) => { {/* Desestrutura e chama o children */}
  return (
    <div>
      <h2>Este e o titulo do Container</h2>
      {children}
      <p>O valor é {myValue}</p> {/* da para chamar uma props dentro da children */}
    </div>
  )
}

export default Container


