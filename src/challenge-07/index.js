/**
 * @param {number} size
 * @param {string} symbol
 * @returns {string}
 */
export function drawGift (size, symbol) {
  if (size === 1) return '#\n'

  const hash = '#'
  const response = [' '.repeat(size - 1) + hash.repeat(size)]

  for (let i = 1; i < size - 1; i++) {
    response.push(
      ' '.repeat(size - 1 - i) + hash +
      symbol.repeat(size - 2) + hash +
      symbol.repeat(i - 1) + hash
    )
  }

  response.push(hash.repeat(size) + symbol.repeat(size - 2) + hash)

  for (let i = 0; i < size - 2; i++) {
    response.push(
      hash + symbol.repeat(size - 2) + hash +
      symbol.repeat(size - i - 3) + hash
    )
  }

  response.push(hash.repeat(size) + '\n')

  return response.join('\n')
}
