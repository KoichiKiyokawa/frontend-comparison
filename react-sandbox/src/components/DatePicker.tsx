import { useMemo } from "react"

const thisYear = new Date().getFullYear()

function range(from: number, to: number): number[] {
  const arr = []
  for (let i = from; i <= to; i++) arr.push(i)
  return arr
}

function isLeap(year: number) {
  if (year % 400 === 0) return true
  if (year % 100 === 0) return false
  if (year % 4 === 0) return true
  return false
}

function getEndOfMonthDate(year: number, month: number): 28 | 29 | 30 | 31 {
  switch (month) {
    case 2:
      return isLeap(year) ? 29 : 28
    case 4:
    case 6:
    case 9:
    case 11:
      return 30
    default:
      return 31
  }
}

type Props = {
  year?: number
  month?: number
  date?: number
  setYear: (year: number) => void
  setMonth: (month: number) => void
  setDate: (date: number) => void
}

export const DatePicker: React.FC<Props> = ({
  year,
  month,
  date,
  setYear,
  setMonth,
  setDate,
}) => {
  const endOfMonthDate = useMemo(
    () => getEndOfMonthDate(year ?? 2000, month ?? 1),
    [year, month]
  )
  return (
    <label>
      生年月日
      <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
        <option value="">年</option>
        {range(thisYear - 100, thisYear).map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
      <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
        <option value="">月</option>
        {range(1, 12).map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
      <select value={date} onChange={(e) => setDate(Number(e.target.value))}>
        <option value="">日</option>
        {range(1, endOfMonthDate).map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
    </label>
  )
}
