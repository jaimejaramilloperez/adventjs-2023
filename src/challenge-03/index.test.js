import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { findNaughtyStep } from './index.js'

describe('Challenge #03 - 😏 The naughty elf', () => {
  it('Test #01 - Returns a String', () => {
    const result = findNaughtyStep('abc', 'abc')
    assert.strictEqual(typeof result, 'string')
  })

  it('Test #02 - findNaughtyStep("abcd", "abcde")', () => {
    const result = findNaughtyStep('abcd', 'abcde')
    assert.strictEqual(result, 'e')
  })

  it('Test #03 - findNaughtyStep("abcde", "abcd")', () => {
    const result = findNaughtyStep('abcde', 'abcd')
    assert.strictEqual(result, 'e')
  })

  it('Test #04 - findNaughtyStep("abcde", "abcde")', () => {
    const result = findNaughtyStep('abcde', 'abcde')
    assert.strictEqual(result, '')
  })

  it('Test #05 - findNaughtyStep("xxxx", "xxoxx")', () => {
    const result = findNaughtyStep('xxxx', 'xxoxx')
    assert.strictEqual(result, 'o')
  })

  it('Test #06 - findNaughtyStep("stepfor", "stepor")', () => {
    const result = findNaughtyStep('stepfor', 'stepor')
    assert.strictEqual(result, 'f')
  })

  it('Test #07 - findNaughtyStep("iiiii", "iiiii")', () => {
    const result = findNaughtyStep('iiiii', 'iiiii')
    assert.strictEqual(result, '')
  })
})
