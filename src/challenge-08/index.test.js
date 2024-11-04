import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { organizeGifts } from './index.js'

describe('Challenge #08 - 🏬 Sorting the warehouse', () => {
  it('Test #01 - Returns a String', () => {
    const result = organizeGifts('76a11b')
    assert.strictEqual(typeof result, 'string')
  })

  it('Test #02 - organizeGifts("76a11b")', () => {
    const result = organizeGifts('76a11b')
    assert.strictEqual(result, '[a]{a}{a}(aaaaaa){b}(b)')
  })

  it('Test #03 - organizeGifts("20a")', () => {
    const result = organizeGifts('20a')
    assert.strictEqual(result, '{a}{a}')
  })

  it('Test #04 - organizeGifts("70b120a4c")', () => {
    const result = organizeGifts('70b120a4c')
    assert.strictEqual(result, '[b]{b}{b}[a][a]{a}{a}(cccc)')
  })

  it('Test #05 - organizeGifts("9c")', () => {
    const result = organizeGifts('9c')
    assert.strictEqual(result, '(ccccccccc)')
  })

  it('Test #06 - organizeGifts("19d51e")', () => {
    const result = organizeGifts('19d51e')
    assert.strictEqual(result, '{d}(ddddddddd)[e](e)')
  })
})
