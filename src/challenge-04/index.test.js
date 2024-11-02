import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { decode } from './index.js'

describe('Challenge #04 - 😵‍💫 Turn the parentheses around', () => {
  it('Test #01 - Returns a String', () => {
    const result = decode('hola (odnum)')
    assert.strictEqual(typeof result, 'string')
  })

  it('Test #02 - decode("hola (odnum)")', () => {
    const result = decode('hola (odnum)')
    assert.strictEqual(result, 'hola mundo')
  })

  it('Test #03 - decode("(olleh) (dlrow)!")', () => {
    const result = decode('(olleh) (dlrow)!')
    assert.strictEqual(result, 'hello world!')
  })

  it('Test #04 - decode("sa(u(cla)atn)s")', () => {
    const result = decode('sa(u(cla)atn)s')
    assert.strictEqual(result, 'santaclaus')
  })

  it('Test #05 - decode("((nta)(sa))")', () => {
    const result = decode('((nta)(sa))')
    assert.strictEqual(result, 'santa')
  })
})
