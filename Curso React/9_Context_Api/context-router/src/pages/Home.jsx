import "./Page.css"
import { useCounterContext } from "../context/useCounterContext"
import "./Home.css"

const Home = () => {
  const { counter, setCounter } = useCounterContext()

  return (
    <div className="page">

      <p>Contador: {counter}</p>

      <button onClick={() => setCounter(counter + 1)}>
        Incrementar
      </button>
    </div>
  )
}

export default Home
