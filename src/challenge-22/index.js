/* eslint-disable no-return-assign */
/**
 * @param {string} code
 * @returns {number}
 */
export function compile (code) {
  let count = 0
  let returnPoint = null
  let hasActiveCondition = false
  let countConditionSnapshot = 0

  const action = (callback) => {
    if (!hasActiveCondition || countConditionSnapshot > 0) {
      callback()
    }
  }

  for (let i = 0; i < code.length; i++) {
    if (code[i] === '+') action(() => count++)
    else if (code[i] === '-') action(() => count--)
    else if (code[i] === '*') action(() => count *= 2)
    else if (code[i] === '%') action(() => returnPoint = i)
    else if (code[i] === '<') {
      action(() => {
        if (returnPoint) i = returnPoint
        returnPoint = null
      })
    } else if (code[i] === '?') {
      hasActiveCondition = false
    } else if (code[i] === '¿') {
      hasActiveCondition = true
      countConditionSnapshot = count
    }
  }

  return count
}
