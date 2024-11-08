import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { travelDistance } from './index.js'

describe('Challenge #25 - 🗺️ Calculating distances', () => {
  it('Test #01 - Returns a Number', () => {
    const result = travelDistance(`.....1....
..S.......
..........
....3.....
......2...`
    )

    assert.strictEqual(typeof result, 'number')
  })

  it(`Test #02 - travelDistance(
      ".....1....
      ..S.......
      ..........
      ....3.....
      ......2..."
    )`, () => {
    const result = travelDistance(`.....1....
..S.......
..........
....3.....
......2...`
    )

    assert.strictEqual(result, 12)
  })

  it('Test #03 - travelDistance("..S.1...")', () => {
    const result = travelDistance('..S.1...')
    assert.strictEqual(result, 2)
  })

  it(`Test #04 - travelDistance(
      ".....2....
      ..S.......
      ..........
      ....1.....
      ......3..."
    )`, () => {
    const result = travelDistance(`.....2....
..S.......
..........
....1.....
......3...`
    )

    assert.strictEqual(result, 13)
  })

  it(`Test #05 - travelDistance(
      "3....1....
      ..S.......
      .........2
      ..........
      ......4..."
    )`, () => {
    const result = travelDistance(`3....1....
..S.......
.........2
..........
......4...`
    )

    assert.strictEqual(result, 31)
  })

  it('Test #06 - travelDistance("S1")', () => {
    const result = travelDistance('S1')
    assert.strictEqual(result, 1)
  })

  it('Test #07 - travelDistance("1....S")', () => {
    const result = travelDistance('1....S')
    assert.strictEqual(result, 5)
  })

  it('Test #08 - travelDistance("S12....3")', () => {
    const result = travelDistance('S12....3')
    assert.strictEqual(result, 7)
  })
})
