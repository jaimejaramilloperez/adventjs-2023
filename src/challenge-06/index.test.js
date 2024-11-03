import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { maxDistance } from './index.js'

describe('Challenge #05 - 🦌 The reindeer on trial', () => {
  it('Test #01 - Returns a Number', () => {
    const result = maxDistance('>>*<')
    assert.strictEqual(typeof result, 'number')
  })

  it('Test #02 - maxDistance(">>*<")', () => {
    const result = maxDistance('>>*<')
    assert.strictEqual(result, 2)
  })

  it('Test #03 - maxDistance("<<<<<")', () => {
    const result = maxDistance('<<<<<')
    assert.strictEqual(result, 5)
  })

  it('Test #04 - maxDistance(">***>")', () => {
    const result = maxDistance('>***>')
    assert.strictEqual(result, 5)
  })

  it('Test #05 - maxDistance("**********")', () => {
    const result = maxDistance('**********')
    assert.strictEqual(result, 10)
  })

  it('Test #06 - maxDistance("<<**>>")', () => {
    const result = maxDistance('<<**>>')
    assert.strictEqual(result, 2)
  })
})
