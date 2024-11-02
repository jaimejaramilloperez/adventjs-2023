import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { findFirstRepeated } from './index.js'

describe('Challenge #01 - 🎁 First gift repeated!', () => {
  it('Test #01 - Returns a Number', () => {
    const result = findFirstRepeated([2, 1, 3, 5, 3, 2])
    assert.strictEqual(typeof result, 'number')
  })

  it('Test #02 - findFirstRepeated([2, 1, 3, 5, 3, 2])', () => {
    const result = findFirstRepeated([2, 1, 3, 5, 3, 2])
    assert.strictEqual(result, 3)
  })

  it('Test #03 - findFirstRepeated([1, 2, 3, 4])', () => {
    const result = findFirstRepeated([1, 2, 3, 4])
    assert.strictEqual(result, -1)
  })

  it('Test #04 - findFirstRepeated([5, 1, 5, 1])', () => {
    const result = findFirstRepeated([5, 1, 5, 1])
    assert.strictEqual(result, 5)
  })

  it('Test #05 - findFirstRepeated([2, 2])', () => {
    const result = findFirstRepeated([2, 2])
    assert.strictEqual(result, 2)
  })

  it('Test #06 - findFirstRepeated([2, 4, 3, 5, 1])', () => {
    const result = findFirstRepeated([2, 4, 3, 5, 1])
    assert.strictEqual(result, -1)
  })

  it('Test #07 - findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])', () => {
    const result = findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])
    assert.strictEqual(result, 1)
  })

  it('Test #08 - findFirstRepeated([])', () => {
    const result = findFirstRepeated([])
    assert.strictEqual(result, -1)
  })

  it('Test #09 - findFirstRepeated([10, 20, 30])', () => {
    const result = findFirstRepeated([10, 20, 30])
    assert.strictEqual(result, -1)
  })

  it('Test #10 - findFirstRepeated([5, 1, 2, 3, 2, 5, 1])', () => {
    const result = findFirstRepeated([5, 1, 2, 3, 2, 5, 1])
    assert.strictEqual(result, 2)
  })

  it('Test #11 - findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])', () => {
    const result = findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])
    assert.strictEqual(result, 10)
  })
})
