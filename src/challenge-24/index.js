/**
 * @param {number} steps
 * @param {number} maxJump
 * @returns {number[][]}
 */
export function getStaircasePaths (steps, maxJump) {
  const result = []

  const generatePaths = (currentSteps, path) => {
    if (currentSteps === 0) {
      result.push(path)
      return
    }

    for (let jump = 1; jump <= maxJump; jump++) {
      if (currentSteps >= jump) {
        generatePaths(currentSteps - jump, [...path, jump])
      }
    }
  }

  generatePaths(steps, [])
  return result
}
