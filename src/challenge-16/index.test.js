import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { transformTree } from './index.js'

describe('Challenge #16 - ❌ Friday deployment', () => {
  it('Test #01 - Returns an Object', () => {
    const result = transformTree([1])
    assert.strictEqual(result.constructor.name, 'Object')
  })

  it('Test #02 - transformTree([])', () => {
    const result = transformTree([])
    assert.strictEqual(result, null)
  })

  it('Test #03 - transformTree([1])', () => {
    const result = transformTree([1])
    const expected = {
      value: 1,
      left: null,
      right: null
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - transformTree([1, 2, 3])', () => {
    const result = transformTree([1, 2, 3])
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - transformTree([1, 2, 3, 4, 5])', () => {
    const result = transformTree([1, 2, 3, 4, 5])
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - transformTree([1, 2, 3, 4, 5, 6, 7])', () => {
    const result = transformTree([1, 2, 3, 4, 5, 6, 7])
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: {
          value: 6,
          left: null,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      }
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #07 - transformTree([17, 0, null, null, 1])', () => {
    const result = transformTree([17, 0, null, null, 1])
    const expected = {
      value: 17,
      left: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null
        }
      },
      right: null
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #08 - transformTree([3, 1, 0, 8, 12, null, 1])', () => {
    const result = transformTree([3, 1, 0, 8, 12, null, 1])
    const expected = {
      value: 3,
      left: {
        value: 1,
        left: {
          value: 8,
          left: null,
          right: null
        },
        right: {
          value: 12,
          left: null,
          right: null
        }
      },
      right: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    }

    assert.deepStrictEqual(result, expected)
  })
})
