/**
 * @param {number[]} houses
 * @returns {number}
 */
export function maxGifts (houses) {
  if (houses.length === 0) return 0
  if (houses.length === 1) return houses[0]

  const length = houses.length
  const maxUntilPosition = new Array(length)

  maxUntilPosition[0] = houses[0]
  maxUntilPosition[1] = Math.max(houses[0], houses[1])

  for (let i = 2; i < length; i++) {
    maxUntilPosition[i] = Math.max(
      maxUntilPosition[i - 1],
      maxUntilPosition[i - 2] + houses[i]
    )
  }

  return maxUntilPosition.at(-1)
}
