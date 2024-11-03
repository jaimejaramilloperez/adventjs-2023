/**
 * @param {string} movements
 * @returns {number}
 */
export function maxDistance (movements) {
  const right = movements.match(/>/g)?.length ?? 0
  const left = movements.match(/</g)?.length ?? 0
  const extra = movements.length - (right + left)

  return Math.abs(right - left) + extra
}
