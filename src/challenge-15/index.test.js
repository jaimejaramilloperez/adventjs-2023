import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { autonomousDrive } from './index.js'

describe('Challenge #15 - 🤖 Autonomous robot', () => {
  it('Test #01 - Returns an Array', () => {
    const result = autonomousDrive(['..!....'], ['R', 'L'])
    assert.strictEqual(result.constructor.name, 'Array')
  })

  it('Test #02 - autonomousDrive(["..!...."], ["R", "L"])', () => {
    const result = autonomousDrive(['..!....'], ['R', 'L'])
    assert.deepStrictEqual(result, ['..!....'])
  })

  it('Test #03 - autonomousDrive(["!..", "***"], ["R", "L"])', () => {
    const result = autonomousDrive(['!..', '***'], ['R', 'L'])
    assert.deepStrictEqual(result, ['!..', '***'])
  })

  it('Test #04 - autonomousDrive(["..!....", "......*"], ["R", "D", "L"])', () => {
    const result = autonomousDrive(['..!....', '......*'], ['R', 'D', 'L'])
    assert.deepStrictEqual(result, ['.......', '..!...*'])
  })

  it('Test #05 - autonomousDrive(["*..!..*", "*.....*"], ["R", "R", "D", "D"])', () => {
    const result = autonomousDrive(['*..!..*', '*.....*'], ['R', 'R', 'D', 'D'])
    assert.deepStrictEqual(result, ['*.....*', '*....!*'])
  })

  it('Test #06 - autonomousDrive(["***", ".!.", "***"], ["D", "U", "R", "R", "R"])', () => {
    const result = autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])
    assert.deepStrictEqual(result, ['***', '..!', '***'])
  })

  it('Test #07 - autonomousDrive(["***", "*!*", "***"], ["D", "U", "R", "L"])', () => {
    const result = autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])
    assert.deepStrictEqual(result, ['***', '*!*', '***'])
  })

  it('Test #08 - autonomousDrive([".**.*.*.", ".***....", "..!....."], ["D", "U", "R", "R", "R"])', () => {
    const result = autonomousDrive(['.**.*.*.', '.***....', '..!.....'], ['D', 'U', 'R', 'R', 'R'])
    assert.deepStrictEqual(result, ['.**.*.*.', '.***....', '.....!..'])
  })
})
