import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { adjustLights } from './index.js'

describe('Challenge #09 - 🚦 Switch the lights', () => {
  it('Test #01 - Returns a Number', () => {
    const result = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
    assert.strictEqual(typeof result, 'number')
  })

  it('Test #02 - adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])', () => {
    const result = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
    assert.strictEqual(result, 1)
  })

  it('Test #03 - adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])', () => {
    const result = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
    assert.strictEqual(result, 2)
  })

  it('Test #04 - adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])', () => {
    const result = adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
    assert.strictEqual(result, 1)
  })

  it('Test #05 - adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])', () => {
    const result = adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
    assert.strictEqual(result, 0)
  })

  it('Test #06 - adjustLights(["🔴", "🔴", "🔴"])', () => {
    const result = adjustLights(['🔴', '🔴', '🔴'])
    assert.strictEqual(result, 1)
  })
})
