import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { revealSabotage } from './index.js'

describe('Challenge #19 - 💣 Face the sabotage', () => {
  it('Test #01 - Returns an Array', () => {
    const result = revealSabotage([
      ['*', ' ', ' ', ' '],
      [' ', ' ', '*', ' '],
      [' ', ' ', ' ', ' '],
      ['*', ' ', ' ', ' ']
    ])

    assert.strictEqual(result.constructor.name, 'Array')
  })

  it(`Test #02 - revealSabotage([
      ["*", " ", " ", " "],
      [" ", " ", "*", " "],
      [" ", " ", " ", " "],
      ["*", " ", " ", " "]
    ])`, () => {
    const result = revealSabotage([
      ['*', ' ', ' ', ' '],
      [' ', ' ', '*', ' '],
      [' ', ' ', ' ', ' '],
      ['*', ' ', ' ', ' ']
    ])

    const expected = [
      ['*', '2', '1', '1'],
      ['1', '2', '*', '1'],
      ['1', '2', '1', '1'],
      ['*', '1', ' ', ' ']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #03 - revealSabotage([
      [" ", " ", " "],
      [" ", "*", " "],
      [" ", " ", " "]
    ])`, () => {
    const result = revealSabotage([
      [' ', ' ', ' '],
      [' ', '*', ' '],
      [' ', ' ', ' ']
    ])

    const expected = [
      ['1', '1', '1'],
      ['1', '*', '1'],
      ['1', '1', '1']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #04 - revealSabotage([
      ["*", " ", " "],
      [" ", "*", " "],
      [" ", " ", "*"]
    ])`, () => {
    const result = revealSabotage([
      ['*', ' ', ' '],
      [' ', '*', ' '],
      [' ', ' ', '*']
    ])

    const expected = [
      ['*', '2', '1'],
      ['2', '*', '2'],
      ['1', '2', '*']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #05 - revealSabotage([
      ["*", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "]
    ])`, () => {
    const result = revealSabotage([
      ['*', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ])

    const expected = [
      ['*', '1', ' '],
      ['1', '1', ' '],
      [' ', ' ', ' ']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #06 - revealSabotage([
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"]
    ])`, () => {
    const result = revealSabotage([
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*']
    ])

    const expected = [
      ['*', '*', '*'],
      ['*', '8', '*'],
      ['*', '*', '*']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #07 - revealSabotage([["*", " ", "*"]])', () => {
    const result = revealSabotage([['*', ' ', '*']])
    const expected = [['*', '2', '*']]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #08 - revealSabotage([
      ["*", " ", " "],
      [" ", " ", " "],
      [" ", " ", "*"]
    ])`, () => {
    const result = revealSabotage([
      ['*', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', '*']
    ])

    const expected = [
      ['*', '1', ' '],
      ['1', '2', '1'],
      [' ', '1', '*']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it(`Test #09 - revealSabotage([
      ["*", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", "*", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", "*"]
    ])`, () => {
    const result = revealSabotage([
      ['*', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', '*', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', '*']
    ])

    const expected = [
      ['*', '1', ' ', ' ', ' '],
      ['1', '2', '1', '1', ' '],
      [' ', '1', '*', '1', ' '],
      [' ', '1', '1', '2', '1'],
      [' ', ' ', ' ', '1', '*']
    ]

    assert.deepStrictEqual(result, expected)
  })
})
