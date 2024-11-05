import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { getIndexsForPalindrome } from './index.js'

describe('Challenge #11 - 📖 The studious elves', () => {
  it('Test #01 - Returns an Array', () => {
    const result = getIndexsForPalindrome('anna')
    assert.strictEqual(result.constructor.name, 'Array')
  })

  it('Test #02 - getIndexsForPalindrome("anna")', () => {
    const result = getIndexsForPalindrome('anna')
    assert.deepStrictEqual(result, [])
  })

  it('Test #03 - getIndexsForPalindrome("abab")', () => {
    const result = getIndexsForPalindrome('abab')
    assert.deepStrictEqual(result, [0, 1])
  })

  it('Test #04 - getIndexsForPalindrome("abac")', () => {
    const result = getIndexsForPalindrome('abac')
    assert.strictEqual(result, null)
  })

  it('Test #05 - getIndexsForPalindrome("aaaaaaaa")', () => {
    const result = getIndexsForPalindrome('aaaaaaaa')
    assert.deepStrictEqual(result, [])
  })

  it('Test #06 - getIndexsForPalindrome("aaababa")', () => {
    const result = getIndexsForPalindrome('aaababa')
    assert.deepStrictEqual(result, [1, 3])
  })

  it('Test #07 - getIndexsForPalindrome("caababa")', () => {
    const result = getIndexsForPalindrome('caababa')
    assert.strictEqual(result, null)
  })

  it('Test #08 - getIndexsForPalindrome("rotavator")', () => {
    const result = getIndexsForPalindrome('rotavator')
    assert.deepStrictEqual(result, [])
  })

  it('Test #09 - getIndexsForPalindrome("rotaratov")', () => {
    const result = getIndexsForPalindrome('rotaratov')
    assert.deepStrictEqual(result, [4, 8])
  })

  it('Test #10 - getIndexsForPalindrome("saippuakivikauppias")', () => {
    const result = getIndexsForPalindrome('saippuakivikauppias')
    assert.deepStrictEqual(result, [])
  })
})
