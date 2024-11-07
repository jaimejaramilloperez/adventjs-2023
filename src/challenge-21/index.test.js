import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { findBalancedSegment } from './index.js'

describe('Challenge #21 - 🪐 Binary message', () => {
  it('Test #01 - Returns an Array', () => {
    const result = findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
    assert.strictEqual(result.constructor.name, 'Array')
  })

  it('Test #02 - findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])', () => {
    const result = findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
    assert.deepStrictEqual(result, [2, 5])
  })

  it('Test #03 - findBalancedSegment([1, 1, 0])', () => {
    const result = findBalancedSegment([1, 1, 0])
    assert.deepStrictEqual(result, [1, 2])
  })

  it('Test #04 - findBalancedSegment([1, 1, 1])', () => {
    const result = findBalancedSegment([1, 1, 1])
    assert.deepStrictEqual(result, [])
  })

  it('Test #05 - findBalancedSegment([1, 0, 1])', () => {
    const result = findBalancedSegment([1, 0, 1])
    assert.deepStrictEqual(result, [0, 1])
  })

  it('Test #06 - findBalancedSegment([1, 0, 1, 0])', () => {
    const result = findBalancedSegment([1, 0, 1, 0])
    assert.deepStrictEqual(result, [0, 3])
  })

  it('Test #07 - findBalancedSegment([1, 1, 0, 1, 0, 1])', () => {
    const result = findBalancedSegment([1, 1, 0, 1, 0, 1])
    assert.deepStrictEqual(result, [1, 4])
  })

  it('Test #08 - findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])', () => {
    const result = findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])
    assert.deepStrictEqual(result, [0, 7])
  })

  it('Test #09 - findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])', () => {
    const result = findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])
    assert.deepStrictEqual(result, [5, 10])
  })
})
