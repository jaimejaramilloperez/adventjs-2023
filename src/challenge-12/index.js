/**
 * @param {string} original
 * @param {string} copy
 * @returns {boolean}
 */
export function checkIsValidCopy (original, copy) {
  if (original.length !== copy.length) return false

  const DEGRADATION_LEVEL = { '#': 1, '+': 2, ':': 3, '.': 4, ' ': 5 }

  return original.split('').every((originalChar, i) => {
    const copyChar = copy[i]

    if (/[a-z]/i.test(originalChar)) {
      if (/[a-z]/.test(originalChar) && /[A-Z]/.test(copyChar)) return false
      if (/[a-z]/i.test(copyChar) && originalChar.toLowerCase() !== copyChar.toLowerCase()) return false
    } else if (DEGRADATION_LEVEL[originalChar] > DEGRADATION_LEVEL[copyChar]) {
      return false
    }

    return true
  })
}
