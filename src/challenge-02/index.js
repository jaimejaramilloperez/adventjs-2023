/**
 * @param {string[]} gifts
 * @param {string} materials
 * @returns {string[]}
 */
export function manufacture (gifts, materials) {
  if (gifts.length === 0 || materials === '') return []

  const availableMaterials = new Set(materials)
  return gifts.filter((gift) => gift.split('').every((char) => availableMaterials.has(char)))
}
