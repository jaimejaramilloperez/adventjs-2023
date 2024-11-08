import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { drawClock } from './index.js'

describe('Challenge #18 - 🛷 Optimizing the rental', () => {
  it('Test #01 - Returns an Array', () => {
    const result = drawClock('01:30')
    assert.strictEqual(result.constructor.name, 'Array')
  })

  it('Test #02 - drawClock("01:30")', () => {
    const result = drawClock('01:30')
    const expected = [
      ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
      ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
      ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
      ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
      ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
      ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
      ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - drawClock("23:45")', () => {
    const result = drawClock('23:45')
    const expected = [
      ['*', '*', '*', ' ', '*', '*', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', '*', '*'],
      [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', ' '],
      [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', ' '],
      ['*', '*', '*', ' ', '*', '*', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
      ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'],
      ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'],
      ['*', '*', '*', ' ', '*', '*', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', '*', '*']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - drawClock("16:48")', () => {
    const result = drawClock('16:48')
    const expected = [
      [' ', ' ', '*', ' ', '*', '*', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', '*', '*'],
      [' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
      [' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
      [' ', ' ', '*', ' ', '*', '*', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
      [' ', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
      [' ', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
      [' ', ' ', '*', ' ', '*', '*', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', '*', '*']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - drawClock("17:39")', () => {
    const result = drawClock('17:39')
    const expected = [
      [' ', ' ', '*', ' ', '*', '*', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
      [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
      [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
      [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
      [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'],
      [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'],
      [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - drawClock("00:21")', () => {
    const result = drawClock('00:21')
    const expected = [
      ['*', '*', '*', ' ', '*', '*', '*', ' ', ' ', ' ', '*', '*', '*', ' ', ' ', ' ', '*'],
      ['*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'],
      ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'],
      ['*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', ' ', ' ', '*'],
      ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*'],
      ['*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*'],
      ['*', '*', '*', ' ', '*', '*', '*', ' ', ' ', ' ', '*', '*', '*', ' ', ' ', ' ', '*']
    ]

    assert.deepStrictEqual(result, expected)
  })
})
