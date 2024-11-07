/**
 * @param {string} time
 * @returns {string[][]}
 */
export function drawClock (time) {
  const [hour, minute] = time.split(':')
  const clock = Array.from({ length: 7 }, () => new Array(17).fill(' '))

  clock[2][8] = '*'
  clock[4][8] = '*'

  const DIGIT_PATTERN = {
    0: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2], [3, 0], [3, 2], [4, 0], [4, 2], [5, 0], [5, 2], [6, 0], [6, 1], [6, 2]],
    1: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2]],
    2: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [3, 0], [3, 1], [3, 2], [4, 0], [5, 0], [6, 0], [6, 0], [6, 1], [6, 2]],
    3: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [3, 0], [3, 1], [3, 2], [4, 2], [5, 2], [6, 0], [6, 1], [6, 2]],
    4: [[0, 0], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2], [3, 0], [3, 1], [3, 2], [4, 2], [5, 2], [6, 2]],
    5: [[0, 0], [0, 1], [0, 2], [1, 0], [2, 0], [3, 0], [3, 1], [3, 2], [4, 2], [5, 2], [6, 0], [6, 1], [6, 2]],
    6: [[0, 0], [0, 1], [0, 2], [1, 0], [2, 0], [3, 0], [3, 1], [3, 2], [4, 0], [4, 2], [5, 0], [5, 2], [6, 0], [6, 1], [6, 2]],
    7: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2]],
    8: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2], [3, 0], [3, 1], [3, 2], [4, 0], [4, 2], [5, 0], [5, 2], [6, 0], [6, 1], [6, 2]],
    9: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2], [3, 0], [3, 1], [3, 2], [4, 2], [5, 2], [6, 0], [6, 1], [6, 2]]
  }

  const [hourFirstDigit, hourSecondDigit] = hour.toString()
  const [minuteFirstDigit, minuteSecondDigit] = minute.toString()

  for (const [i, j] of DIGIT_PATTERN[hourFirstDigit]) {
    clock[i][j] = '*'
  }

  for (const [i, j] of DIGIT_PATTERN[hourSecondDigit]) {
    clock[i][j + 4] = '*'
  }

  for (const [i, j] of DIGIT_PATTERN[minuteFirstDigit]) {
    clock[i][j + 10] = '*'
  }

  for (const [i, j] of DIGIT_PATTERN[minuteSecondDigit]) {
    clock[i][j + 14] = '*'
  }

  return clock
}
