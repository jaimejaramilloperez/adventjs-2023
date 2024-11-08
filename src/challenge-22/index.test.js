import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { compile } from './index.js'

describe('Challenge #22 - 🚂 Programming language', () => {
  it('Test #01 - Returns an Array', () => {
    const result = compile('++*-')
    assert.strictEqual(typeof result, 'number')
  })

  it('Test #02 - compile("++*-")', () => {
    const result = compile('++*-')
    assert.strictEqual(result, 3)
  })

  it('Test #03 - compile("++¿+?")', () => {
    const result = compile('++¿+?')
    assert.strictEqual(result, 3)
  })

  it('Test #04 - compile("-+¿+?")', () => {
    const result = compile('-+¿+?')
    assert.strictEqual(result, 0)
  })

  it('Test #05 - compile("++*¿-?")', () => {
    const result = compile('++*¿-?')
    assert.strictEqual(result, 3)
  })

  it('Test #06 - compile("++%++<")', () => {
    const result = compile('++%++<')
    assert.strictEqual(result, 6)
  })

  it('Test #07 - compile("++%++<++¿*?")', () => {
    const result = compile('++%++<++¿*?')
    assert.strictEqual(result, 16)
  })

  it('Test #08 - compile("++¿+?¿+?¿+?")', () => {
    const result = compile('++¿+?¿+?¿+?')
    assert.strictEqual(result, 5)
  })

  it('Test #09 - compile("--¿+++?")', () => {
    const result = compile('--¿+++?')
    assert.strictEqual(result, -2)
  })

  it('Test #10 - compile("--¿+++?+++¿--?")', () => {
    const result = compile('--¿+++?+++¿--?')
    assert.strictEqual(result, -1)
  })

  it('Test #11 - compile("<%+¿++%++<?")', () => {
    const result = compile('<%+¿++%++<?')
    assert.strictEqual(result, 7)
  })

  it('Test #12 - compile("<<<<<<+<<<<<+%")', () => {
    const result = compile('<<<<<<+<<<<<+%')
    assert.strictEqual(result, 2)
  })
})
