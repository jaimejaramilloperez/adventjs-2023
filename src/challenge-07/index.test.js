import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { drawGift } from './index.js'

describe('Challenge #07 - 📦 The 3D boxes', () => {
  it('Test #01 - Returns a String', () => {
    const result = drawGift(4, '+')
    assert.strictEqual(typeof result, 'string')
  })

  it('Test #02 - drawGift(4, "+")', () => {
    const result = drawGift(4, '+')
    const expected = `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`

    assert.strictEqual(result, expected)
  })

  it('Test #03 - drawGift(5, "*")', () => {
    const result = drawGift(5, '*')
    const expected = `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`

    assert.strictEqual(result, expected)
  })

  it('Test #04 - drawGift(1, "^")', () => {
    const result = drawGift(1, '^')
    const expected = '#\n'

    assert.strictEqual(result, expected)
  })

  it('Test #05 - drawGift(2, "&")', () => {
    const result = drawGift(2, '&')
    const expected = ` ##
###
##
`

    assert.strictEqual(result, expected)
  })
})
