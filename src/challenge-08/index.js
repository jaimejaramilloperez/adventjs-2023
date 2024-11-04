/**
 * @param {string} gifts
 * @returns {string}
 */
export function organizeGifts (gifts) {
  const organizedGifts = []
  const regex = /(?<count>\d+)(?<type>[a-z])/g

  for (const element of gifts.matchAll(regex)) {
    const { count, type } = element.groups

    const numBoxes = Math.floor(count / 10)
    const numPallets = Math.floor(numBoxes / 5)
    const remainingGifts = count % 10

    organizedGifts.push(`[${type}]`.repeat(numPallets))
    organizedGifts.push(`{${type}}`.repeat(numBoxes % 5))

    if (remainingGifts) {
      organizedGifts.push(`(${type.repeat(remainingGifts)})`)
    }
  }

  return organizedGifts.join('')
}
