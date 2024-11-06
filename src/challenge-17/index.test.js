import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { optimizeIntervals } from './index.js'

describe('Challenge #17 - 🛷 Optimizing the rental', () => {
  it('Test #01 - Returns an Array', () => {
    const result = optimizeIntervals([[2, 7], [3, 4], [5, 8]])
    assert.strictEqual(result.constructor.name, 'Array')
  })

  it('Test #02 - optimizeIntervals([[2, 7], [3, 4], [5, 8]])', () => {
    const result = optimizeIntervals([[2, 7], [3, 4], [5, 8]])
    assert.deepStrictEqual(result, [[2, 8]])
  })

  it('Test #03 - optimizeIntervals([[3, 4], [5, 8], [2, 7]])', () => {
    const result = optimizeIntervals([[3, 4], [5, 8], [2, 7]])
    assert.deepStrictEqual(result, [[2, 8]])
  })

  it('Test #04 - optimizeIntervals([[1, 3], [2, 6], [8, 10]])', () => {
    const result = optimizeIntervals([[1, 3], [2, 6], [8, 10]])
    assert.deepStrictEqual(result, [[1, 6], [8, 10]])
  })

  it('Test #05 - optimizeIntervals([[1, 2], [3, 4], [5, 6]])', () => {
    const result = optimizeIntervals([[1, 2], [3, 4], [5, 6]])
    assert.deepStrictEqual(result, [[1, 2], [3, 4], [5, 6]])
  })

  it('Test #06 - optimizeIntervals([[5, 7], [6, 8]])', () => {
    const result = optimizeIntervals([[5, 7], [6, 8]])
    assert.deepStrictEqual(result, [[5, 8]])
  })

  it('Test #07 - optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])', () => {
    const result = optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])
    assert.deepStrictEqual(result, [[1, 5], [6, 10], [11, 15], [16, 20]
    ])
  })

  it('Test #08 - optimizeIntervals([[1, 15], [8, 12], [4, 7]])', () => {
    const result = optimizeIntervals([[1, 15], [8, 12], [4, 7]])
    assert.deepStrictEqual(result, [[1, 15]])
  })
})
