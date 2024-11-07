/**
 * @param {number[][]} weights
 * @returns {number[][]}
 */
export function distributeGifts (weights) {
  const rows = weights.length
  const columns = weights[0].length
  const balancedWeights = Array.from({ length: rows }, () => new Array(columns).fill(null))

  const isAValidCell = (x, y) =>
    x >= 0 && x < rows && y >= 0 && y < columns &&
    weights[x][y] !== null

  const DIRECTIONS = [
    [-1, 0], [1, 0], // top, bottom
    [0, -1], [0, 1] // left, rigth
  ]

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cellValue = weights[i][j]
      let sum = cellValue ?? 0
      let count = cellValue !== null ? 1 : 0

      for (const [x, y] of DIRECTIONS) {
        const newX = i + x
        const newY = j + y

        if (isAValidCell(newX, newY)) {
          sum += weights[newX][newY]
          count++
        }
      }

      balancedWeights[i][j] = Math.round(sum / count)
    }
  }

  return balancedWeights
}
