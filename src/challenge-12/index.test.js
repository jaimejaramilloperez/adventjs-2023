import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { checkIsValidCopy } from './index.js'

describe('Challenge #12 - 📸 Is it a valid copy?', () => {
  it('Test #01 - Returns a Boolean', () => {
    const result = checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')
    assert.strictEqual(typeof result, 'boolean')
  })

  it('Test #02 - checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#")', () => {
    const result = checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')
    assert.strictEqual(result, true)
  })

  it('Test #03 - checkIsValidCopy("Santa Claus is coming", "p#nt: cla#s #s c+min#")', () => {
    const result = checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')
    assert.strictEqual(result, false)
  })

  it('Test #04 - checkIsValidCopy("Santa Claus", " Santa Claus ")', () => {
    const result = checkIsValidCopy('Santa Claus', ' Santa Claus ')
    assert.strictEqual(result, false)
  })

  it('Test #05 - checkIsValidCopy("Santa Claus", "###:. c:+##")', () => {
    const result = checkIsValidCopy('Santa Claus', '###:. c:+##')
    assert.strictEqual(result, true)
  })

  it('Test #06 - checkIsValidCopy("Santa Claus", "sant##claus+")', () => {
    const result = checkIsValidCopy('Santa Claus', 'sant##claus+')
    assert.strictEqual(result, false)
  })

  it('Test #07 - checkIsValidCopy("S#n:a Claus", "S#+:. c:. s")', () => {
    const result = checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')
    assert.strictEqual(result, true)
  })

  it('Test #08 - checkIsValidCopy("Santa Claus", "s#+:.#c:. s")', () => {
    const result = checkIsValidCopy('Santa Claus', 's#+:.#c:. s')
    assert.strictEqual(result, false)
  })

  it('Test #09 - checkIsValidCopy("s+#:.#c:. s", "s#+:.#c:. s")', () => {
    const result = checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')
    assert.strictEqual(result, false)
  })

  it('Test #10 - checkIsValidCopy("S#nta Claus", "S#ntA ClauS")', () => {
    const result = checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')
    assert.strictEqual(result, false)
  })

  it('Test #11 - checkIsValidCopy("3 #egalos", "3 .+:# #:")', () => {
    const result = checkIsValidCopy('3 #egalos', '3 .+:# #:')
    assert.strictEqual(result, true)
  })

  it('Test #12 - checkIsValidCopy("3 regalos", "3        ")', () => {
    const result = checkIsValidCopy('3 regalos', '3        ')
    assert.strictEqual(result, true)
  })

  it('Test #13 - checkIsValidCopy("3 regalos 3", "3 .+:# #: 3")', () => {
    const result = checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')
    assert.strictEqual(result, true)
  })

  it('Test #14 - checkIsValidCopy("Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños", "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño")', () => {
    const result = checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')
    assert.strictEqual(result, false)
  })
})
