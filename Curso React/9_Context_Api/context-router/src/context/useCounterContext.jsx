import { useContext } from "react"
import { CounterContext } from "./CounterContext"

export const useCounterContext = () => {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error("useCounterContext deve ser usado dentro do CounterContextProvider")
  }

  return context
}
