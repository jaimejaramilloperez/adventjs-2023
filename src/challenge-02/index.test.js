import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { manufacture } from './index.js'

describe('Challenge #02 - 🏭 We start the factory', () => {
  it('Test #01 - Returns an Array', () => {
    const result = manufacture(['tren', 'oso', 'pelota'], 'tronesa')
    assert.strictEqual(result.constructor.name, 'Array')
  })

  it('Test #02 - manufacture(["tren", "oso", "pelota"], "tronesa")', () => {
    const result = manufacture(['tren', 'oso', 'pelota'], 'tronesa')
    assert.deepStrictEqual(result, ['tren', 'oso'])
  })

  it('Test #03 - manufacture(["juego", "puzzle"], "jlepuz")', () => {
    const result = manufacture(['juego', 'puzzle'], 'jlepuz')
    assert.deepStrictEqual(result, ['puzzle'])
  })

  it('Test #04 - manufacture(["coche", "muñeca", "balon"], "ocmuñalb")', () => {
    const result = manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')
    assert.deepStrictEqual(result, [])
  })

  it('Test #05 - manufacture(["patineta", "robot", "libro"], "nopor")', () => {
    const result = manufacture(['patineta', 'robot', 'libro'], 'nopor')
    assert.deepStrictEqual(result, [])
  })

  it('Test #06 - manufacture([], "letras")', () => {
    const result = manufacture([], 'letras')
    assert.deepStrictEqual(result, [])
  })
})
