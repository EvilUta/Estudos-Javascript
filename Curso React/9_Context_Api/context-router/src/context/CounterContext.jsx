// import { createContext, useState } from "react"

// // 1 - criar o contexto
// export const CounterContext = createContext()

// // 2 - criar o provider
// export const CounterContextProvider = ({ children }) => {
//   const [counter, setCounter] = useState(0)

//   return (
//     <CounterContext.Provider value={{ counter, setCounter }}>
//       {children}
//     </CounterContext.Provider>
//   )
// }



// import { createContext, useState } from "react"

// export const CounterContext = createContext()

// export const CounterContextProvider = ({ children }) => {
//   const [counter, setCounter] = useState(0)
//   const [user, setUser] = useState("Renan")

//   const increment = () => setCounter(prev => prev + 1)
//   const decrement = () => setCounter(prev => prev - 1)
//   const reset = () => setCounter(0)

//   return (
//     <CounterContext.Provider
//       value={{
//         counter,
//         user,
//         setUser,
//         increment,
//         decrement,
//         reset
//       }}
//     >
//       {children}
//     </CounterContext.Provider>
//   )
// }

import { createContext, useState } from "react"

export const CounterContext = createContext()

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )
}
