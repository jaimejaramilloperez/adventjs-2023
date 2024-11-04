/**
 * @param {string[]} lights
 * @returns {number}
 */
export function adjustLights (lights) {
  let changesForPattern1 = 0
  let changesForPattern2 = 0

  for (let i = 0; i < lights.length; i++) {
    if (i % 2 === 0) {
      lights[i] === '🟢' ? changesForPattern1++ : changesForPattern2++
    } else {
      lights[i] === '🟢' ? changesForPattern2++ : changesForPattern1++
    }
  }

  return Math.min(changesForPattern1, changesForPattern2)
}
