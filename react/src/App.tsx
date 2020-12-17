import React, { useCallback, useState } from "react"
import { DatePicker } from "./components/DatePicker"

function App() {
  const [name, setName] = useState("")
  const [year, setYear] = useState<number | undefined>()
  const [month, setMonth] = useState<number | undefined>()
  const [date, setDate] = useState<number | undefined>()

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      alert(`Hello, ${name}. ${year}/${month}/${date}`)
    },
    [name, year, month, date]
  )

  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <DatePicker {...{ year, month, date, setYear, setMonth, setDate }} />
      <button>送信</button>
    </form>
  )
}
export default App
