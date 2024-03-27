import { useState } from 'react'
import "./globals.css";
import { Chart } from './Chart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-500 w-screen h-screen p-20">
      <Chart/>
    </div>
  )
}

export default App
