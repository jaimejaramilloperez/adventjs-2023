import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { calculateTime } from './index.js'

describe('Challenge #13 - ⌚️ Calculating the time', () => {
  it('Test #01 - Returns a String', () => {
    const result = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
    assert.strictEqual(typeof result, 'string')
  })

  it('Test #02 - calculateTime(["00:10:00", "01:00:00", "03:30:00"])', () => {
    const result = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
    assert.strictEqual(result, '-02:20:00')
  })

  it('Test #03 - calculateTime(["01:00:00", "05:00:00", "00:30:00"])', () => {
    const result = calculateTime(['01:00:00', '05:00:00', '00:30:00'])
    assert.strictEqual(result, '-00:30:00')
  })

  it('Test #04 - calculateTime(["02:00:00", "05:00:00", "00:30:00"])', () => {
    const result = calculateTime(['02:00:00', '05:00:00', '00:30:00'])
    assert.strictEqual(result, '00:30:00')
  })

  it('Test #05 - calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"])', () => {
    const result = calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])
    assert.strictEqual(result, '-05:29:00')
  })

  it('Test #06 - calculateTime(["02:00:00", "03:00:00", "02:00:00"])', () => {
    const result = calculateTime(['02:00:00', '03:00:00', '02:00:00'])
    assert.strictEqual(result, '00:00:00')
  })

  it('Test #07 - calculateTime(["01:01:01", "09:59:59", "01:01:01"])', () => {
    const result = calculateTime(['01:01:01', '09:59:59', '01:01:01'])
    assert.strictEqual(result, '05:02:01')
  })

  it('Test #08 - calculateTime(["01:01:01", "03:59:59", "01:01:01", "00:57:58"])', () => {
    const result = calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])
    assert.strictEqual(result, '-00:00:01')
  })
})
