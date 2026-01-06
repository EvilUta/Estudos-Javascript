import { useState } from "react"

const CondicionalRender = () => {

    const [x] = useState(true)

    const [name] = useState(`Joao`)

  return (
    <div>
    <h1>Isso sera exibido</h1>
    {x && <p>Se x for true, sim</p>} 
    {!x && <p>Se x for false, nao</p>}
    { name === "Joao" ? (
      <div>
        <p>O nome e joao</p>
      </div>
    ) : (
      <div>
        <p>Nome nao encontrado</p>
      </div>
    ) }

   </div>
  )
}

export default CondicionalRender
