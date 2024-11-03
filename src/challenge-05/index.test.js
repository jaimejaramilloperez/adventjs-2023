import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { cyberReindeer } from './index.js'

describe('Challenge #05 - 🛷 Santa\'s CyberTruck', () => {
  it('Test #01 - Returns an Array', () => {
    const result = cyberReindeer('S..|...|..', 10)
    assert.strictEqual(result.constructor.name, 'Array')
  })

  it('Test #02 - cyberReindeer("S..|...|..", 10)', () => {
    const result = cyberReindeer('S..|...|..', 10)

    assert.deepStrictEqual(result, [
      'S..|...|..',
      '.S.|...|..',
      '..S|...|..',
      '..S|...|..',
      '..S|...|..',
      '...S...*..',
      '...*S..*..',
      '...*.S.*..',
      '...*..S*..',
      '...*...S..'
    ])
  })

  it('Test #03 - cyberReindeer("S.|.", 4)', () => {
    const result = cyberReindeer('S.|.', 4)

    assert.deepStrictEqual(result, [
      'S.|.',
      '.S|.',
      '.S|.',
      '.S|.'
    ])
  })

  it('Test #04 - cyberReindeer("S.|.|.", 7)', () => {
    const result = cyberReindeer('S.|.|.', 7)

    assert.deepStrictEqual(result, [
      'S.|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '..S.*.',
      '..*S*.'
    ])
  })

  it('Test #05 - cyberReindeer("S.|..", 6)', () => {
    const result = cyberReindeer('S.|..', 6)

    assert.deepStrictEqual(result, [
      'S.|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '..S..'
    ])
  })

  it('Test #06 - cyberReindeer("S.|.|.|......|.||.........", 8)', () => {
    const result = cyberReindeer('S.|.|.|......|.||.........', 8)

    assert.deepStrictEqual(result, [
      'S.|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '..S.*.*......*.**.........',
      '..*S*.*......*.**.........',
      '..*.S.*......*.**.........'
    ])
  })
})
