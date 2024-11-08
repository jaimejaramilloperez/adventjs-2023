import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { getStaircasePaths } from './index.js'

describe('Challenge #24 - 🪜 Jump on the stairs', () => {
  it('Test #01 - Returns an Array', () => {
    const result = getStaircasePaths(4, 2)
    assert.strictEqual(result.constructor.name, 'Array')
  })

  it('Test #02 - getStaircasePaths(4, 2)', () => {
    const result = getStaircasePaths(4, 2)

    const expected = [
      [1, 1, 1, 1],
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
      [2, 2]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - getStaircasePaths(0, 0)', () => {
    const result = getStaircasePaths(0, 0)
    const expected = [[]]
    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - getStaircasePaths(1,1)', () => {
    const result = getStaircasePaths(1, 1)
    const expected = [[1]]
    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - getStaircasePaths(7,3)', () => {
    const result = getStaircasePaths(7, 3)

    const expected = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2],
      [1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 2, 1, 1],
      [1, 1, 1, 2, 2],
      [1, 1, 1, 3, 1],
      [1, 1, 2, 1, 1, 1],
      [1, 1, 2, 1, 2],
      [1, 1, 2, 2, 1],
      [1, 1, 2, 3],
      [1, 1, 3, 1, 1],
      [1, 1, 3, 2],
      [1, 2, 1, 1, 1, 1],
      [1, 2, 1, 1, 2],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 3],
      [1, 2, 2, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 1],
      [1, 3, 1, 1, 1],
      [1, 3, 1, 2],
      [1, 3, 2, 1],
      [1, 3, 3],
      [2, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 2],
      [2, 1, 1, 2, 1],
      [2, 1, 1, 3],
      [2, 1, 2, 1, 1],
      [2, 1, 2, 2],
      [2, 1, 3, 1],
      [2, 2, 1, 1, 1],
      [2, 2, 1, 2],
      [2, 2, 2, 1],
      [2, 2, 3],
      [2, 3, 1, 1],
      [2, 3, 2],
      [3, 1, 1, 1, 1],
      [3, 1, 1, 2],
      [3, 1, 2, 1],
      [3, 1, 3],
      [3, 2, 1, 1],
      [3, 2, 2],
      [3, 3, 1]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - getStaircasePaths(3,3 )', () => {
    const result = getStaircasePaths(3, 3)

    const expected = [
      [1, 1, 1],
      [1, 2],
      [2, 1],
      [3]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #07 - getStaircasePaths(2, 1)', () => {
    const result = getStaircasePaths(2, 1)
    const expected = [[1, 1]]
    assert.deepStrictEqual(result, expected)
  })

  it('Test #08 - getStaircasePaths(5,2)', () => {
    const result = getStaircasePaths(5, 2)

    const expected = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 2, 1],
      [1, 2, 1, 1],
      [1, 2, 2],
      [2, 1, 1, 1],
      [2, 1, 2],
      [2, 2, 1]
    ]

    assert.deepStrictEqual(result, expected)
  })
})
