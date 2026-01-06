import { useEffect, useState } from "react"

const HooksUseEffect = () => {
  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number + 1)
  }

  // 1 - Executa em TODA renderização
  useEffect(() => {
    console.log('Executa em toda renderização')
  })

  // 2 - Executa APENAS uma vez (montagem)
  useEffect(() => {
    console.log('Executa apenas uma vez')
  }, [])

  // 3 - Executa quando o number mudar
  useEffect(() => {
    console.log('Number mudou:', number)
  }, [number])

  // 4 - item no array de deps
  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {

    console.log('Sou executado apenas quando o anotherNumber Muda!')

  }, [anotherNumber])


  return (
    <div>
      <hr />
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber!</button>
      <hr />
    </div>
  )
}

export default HooksUseEffect
