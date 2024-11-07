import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { distributeGifts } from './index.js'

describe('Challenge #20 - 🏋️‍♂️ Distribute the weight', () => {
  it('Test #01 - Returns an Array', () => {
    const result = distributeGifts([
      [4, 5, 1],
      [6, null, 3],
      [8, null, 4]
    ])

    assert.strictEqual(result.constructor.name, 'Array')
  })

  it(`Test #02 - distributeGifts([
      [4, 5, 1],
      [6, null, 3],
      [8, null, 4]
    ])`, () => {
    const result = distributeGifts([
      [4, 5, 1],
      [6, null, 3],
      [8, null, 4]
    ])

    const expected = [
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #03 - distributeGifts([
      [2, null],
      [null, 3]
    ])`, () => {
    const result = distributeGifts([
      [2, null],
      [null, 3]
    ])

    const expected = [
      [2, 3],
      [3, 3]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #04 - distributeGifts([
      [2, 1, 1],
      [3, 4, null]
    ])`, () => {
    const result = distributeGifts([
      [2, 1, 1],
      [3, 4, null]
    ])

    const expected = [
      [2, 2, 1],
      [3, 3, 3]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #05 - distributeGifts([
      [null, 5],
      [3, null]
    ])`, () => {
    const result = distributeGifts([
      [null, 5],
      [3, null]
    ])

    const expected = [
      [4, 5],
      [3, 4]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #06 - distributeGifts([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])`, () => {
    const result = distributeGifts([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])

    const expected = [
      [2, 3, 4],
      [4, 5, 6],
      [6, 7, 8]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #07 - distributeGifts([
      [null, 1, null, 1, null],
      [1, null, 1, null, 1],
    ])`, () => {
    const result = distributeGifts([
      [null, 1, null, 1, null],
      [1, null, 1, null, 1]
    ])

    const expected = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ]

    assert.deepStrictEqual(result, expected)
  })
})
