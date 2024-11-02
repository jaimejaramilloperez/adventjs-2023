/**
 * @param {string} original
 * @param {string} modified
 * @returns {string}
 */
export function findNaughtyStep (original, modified) {
  const [longerStr, shorterStr] = original.length >= modified.length
    ? [original, modified]
    : [modified, original]

  return longerStr
    .split('')
    .find((char, index) => char !== shorterStr[index]) ?? ''
}
