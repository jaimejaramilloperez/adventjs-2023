/**
 * @param {string[][]} store
 * @returns {string[][]}
 */
export function revealSabotage (store) {
  const rows = store.length
  const columns = store[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (store[i][j] === '*') continue

      const hasASabotagedToy = (x, y) =>
        x >= 0 && x < rows && y >= 0 && y < columns &&
        store[x][y] === '*'

      const DIRECTIONS = [
        [-1, 0], [1, 0], // top, bottom
        [0, -1], [0, 1], // left, rigth
        [-1, -1], [-1, 1], // top left, top rigth
        [1, -1], [1, 1] // bottom left, bottom rigth
      ]

      let count = 0

      for (const [x, y] of DIRECTIONS) {
        if (hasASabotagedToy(i + x, j + y)) count++
      }

      store[i][j] = count === 0 ? ' ' : count.toString()
    }
  }

  return store
}
