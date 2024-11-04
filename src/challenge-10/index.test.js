import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { createChristmasTree } from './index.js'

describe('Challenge #10 - 🎄 Create your own Christmas tree', () => {
  it('Test #01 - Returns a String', () => {
    const result = createChristmasTree('x', 3)
    assert.strictEqual(typeof result, 'string')
  })

  it('Test #02 - createChristmasTree("x", 3)', () => {
    const result = createChristmasTree('x', 3)
    const expected = `  x
 x x
x x x
  |
`

    assert.strictEqual(result, expected)
  })

  it('Test #03 - createChristmasTree("xo", 4)', () => {
    const result = createChristmasTree('xo', 4)
    const expected = `   x
  o x
 o x o
x o x o
   |
`

    assert.strictEqual(result, expected)
  })

  it('Test #04 - createChristmasTree("123", 5)', () => {
    const result = createChristmasTree('123', 5)
    const expected = `    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
`

    assert.strictEqual(result, expected)
  })

  it('Test #05 - createChristmasTree("*@o", 3)', () => {
    const result = createChristmasTree('*@o', 3)
    const expected = `  *
 @ o
* @ o
  |
`

    assert.strictEqual(result, expected)
  })
})
