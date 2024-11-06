import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { maxGifts } from './index.js'

describe('Challenge #14 - 🚨 Avoid the alarm', () => {
  it('Test #01 - Returns a Number', () => {
    const result = maxGifts([1, 2, 3, 1])
    assert.strictEqual(typeof result, 'number')
  })

  it('Test #02 - maxGifts([1, 2, 3, 1])', () => {
    const result = maxGifts([1, 2, 3, 1])
    assert.strictEqual(result, 4)
  })

  it('Test #03 - maxGifts([2, 7, 9, 3, 1])', () => {
    const result = maxGifts([2, 7, 9, 3, 1])
    assert.strictEqual(result, 12)
  })

  it('Test #04 - maxGifts([0, 0, 0, 0, 1])', () => {
    const result = maxGifts([0, 0, 0, 0, 1])
    assert.strictEqual(result, 1)
  })

  it('Test #05 - maxGifts([100])', () => {
    const result = maxGifts([100])
    assert.strictEqual(result, 100)
  })

  it('Test #06 - maxGifts([1, 1, 1, 1])', () => {
    const result = maxGifts([1, 1, 1, 1])
    assert.strictEqual(result, 2)
  })

  it('Test #07 - maxGifts([1, 1, 1])', () => {
    const result = maxGifts([1, 1, 1])
    assert.strictEqual(result, 2)
  })

  it('Test #08 - maxGifts([3, 4, 5])', () => {
    const result = maxGifts([3, 4, 5])
    assert.strictEqual(result, 8)
  })

  it('Test #09 - maxGifts([99])', () => {
    const result = maxGifts([99])
    assert.strictEqual(result, 99)
  })
})
