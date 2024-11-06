/**
 * @param {string[]} store
 * @param {string[]} movements
 * @returns {string[]}
 */
export function autonomousDrive (store, movements) {
  let robotPosition = null

  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[0].length; j++) {
      if (store[i][j] === '!') {
        robotPosition = [i, j]
        break
      }
    }
  }

  const moveRobot = (direction, value) => {
    const [x, y] = robotPosition
    const newX = x + (direction === DIRECTION.VERTICAL ? value : 0)
    const newY = y + (direction === DIRECTION.HORIZONTAL ? value : 0)

    const isCellFree = (x, y) => store[x][y] !== '*'
    const isInBounds = (x, y) => x >= 0 && x < store.length && y >= 0 && y < store[x].length

    if (!isInBounds(newX, newY) || !isCellFree(newX, newY)) return

    const robotRow = store[x].split('')

    if (direction === DIRECTION.HORIZONTAL) {
      [robotRow[y], robotRow[newY]] = [robotRow[newY], robotRow[y]]
    } else {
      const targetRow = store[newX].split('');
      [robotRow[y], targetRow[y]] = [targetRow[y], robotRow[y]]
      store[newX] = targetRow.join('')
    }

    store[x] = robotRow.join('')
    robotPosition = [newX, newY]
  }

  const DIRECTION = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical'
  }

  const MOVE = {
    R: () => moveRobot(DIRECTION.HORIZONTAL, 1),
    L: () => moveRobot(DIRECTION.HORIZONTAL, -1),
    D: () => moveRobot(DIRECTION.VERTICAL, 1),
    U: () => moveRobot(DIRECTION.VERTICAL, -1)
  }

  for (const movement of movements) {
    MOVE[movement]()
  }

  return store
}
