/**
 * @param {number[]} message
 * @returns {number[]}
 */
export function findBalancedSegment (message) {
  const map = new Map([[0, -1]])
  let sum = 0
  let maxLength = 0
  let start = 0

  for (let i = 0; i < message.length; i++) {
    sum += message[i] === 1 ? 1 : -1

    if (map.has(sum)) {
      const prevIndex = map.get(sum)
      const length = i - prevIndex

      if (length > maxLength) {
        maxLength = length
        start = prevIndex + 1
      }
    } else {
      map.set(sum, i)
    }
  }

  return maxLength > 0
    ? [start, start + maxLength - 1]
    : []
}
