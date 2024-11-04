/**
 * @param {string} ornaments
 * @param {number} height
 * @returns {string}
 */
export function createChristmasTree (ornaments, height) {
  const tree = []
  let charPosition = 0

  for (let i = 0; i < height; i++) {
    const line = [' '.repeat(height - i - 1)]

    for (let j = 0; j < i + 1; j++) {
      line.push(ornaments[charPosition] + ' ')

      if (charPosition + 1 >= ornaments.length) {
        charPosition = 0
      } else {
        charPosition++
      }
    }

    tree.push(line.join('').trimEnd())
  }

  tree.push(' '.repeat(height - 1) + '|\n')
  return tree.join('\n')
}
