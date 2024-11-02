/**
 * @param {number[]} gifts
 * @returns {number}
 */
export function findFirstRepeated (gifts) {
  if (gifts.length === 0) return -1

  const giftIds = new Set()

  for (const gift of gifts) {
    if (giftIds.has(gift)) return gift
    giftIds.add(gift)
  }

  return -1
}
