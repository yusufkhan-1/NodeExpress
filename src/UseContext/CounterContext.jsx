// CounterContext.js
import { createContext, useState } from "react"

export const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const IncrementCount = () => setCount(prev => prev + 1)
  const DecrementCount = () => setCount(prev => prev - 1)
  const ResetCount = () => setCount(0)

  return (
    <CounterContext.Provider value={{ count, IncrementCount, DecrementCount, ResetCount }}>
      {children}
    </CounterContext.Provider>
  )
}
