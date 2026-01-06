import { useState } from 'react'


const HookUseState = () => {
    // 1 - useState
    let userName = 'Joao'

    const [name , setName] = useState('Renan')

    const changesNames = () => {
        userName = 'Joao Souza'

        setName('Renan Gustavo')

        console.log(name)

    }

    // 2 - useState e Input
    const [ age , setAge] = useState(18)

    const handleSubmit = (e) => {
      e.preventDefault()

      // envio a uma API
      console.log(age)
    }


  return (
    <div>
        {/* 1 - useState */}
      <h1>HookUseState</h1>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changesNames}>Mudar Nomes!</button>
        {/* 2 - useState Input */}
        <p>Digite sua idade!</p>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          value={age} 
          onChange={(e) => setAge(e.target.value)}/>
          <input type="submit" value='Enviar'/>
        </form>
        <p>Voce tem {age} anos!</p>
      <hr />
    </div>
  )
}

export default HookUseState
