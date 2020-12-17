/**
 * @example range(1, 3) // => [1, 2, 3]
 */
export function range(from: number, to: number) {
  const arr = []
  for (let i = from; i <= to; i++) arr.push(i)
  return arr
}

export function getEndOfMonthDate(
  year: number,
  month: number
): 28 | 29 | 30 | 31 {
  if (month === 2) return isLeap(year) ? 29 : 28 // 2月
  if ([4, 6, 9, 11].includes(month)) return 30
  return 31
}

function isLeap(year: number) {
  if (year % 400 === 0) return true
  if (year % 100 === 0) return false
  if (year % 4 === 0) return true
  return false
}
