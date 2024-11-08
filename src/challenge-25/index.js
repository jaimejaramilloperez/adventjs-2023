/**
 * @param {string} map
 * @returns {number}
 */
export function travelDistance (map) {
  const mapGrid = map.split('\n')
  const rows = mapGrid.length
  const columns = mapGrid[0].length

  const childrenPositions = new Map()

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (mapGrid[i][j] === 'S') {
        childrenPositions.set(0, [i, j])
      } else if (mapGrid[i][j] >= '1' || mapGrid[i][j] <= 9) {
        childrenPositions.set(+mapGrid[i][j], [i, j])
      }
    }
  }

  let distance = 0

  for (let i = 1; i <= 9; i++) {
    const currentChild = childrenPositions.get(i)

    if (currentChild) {
      const prevChild = childrenPositions.get(i - 1)
      distance += Math.abs(prevChild[0] - currentChild[0])
      distance += Math.abs(prevChild[1] - currentChild[1])
    }
  }

  return distance
}
