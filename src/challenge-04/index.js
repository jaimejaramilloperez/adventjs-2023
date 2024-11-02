/**
 * @param {string} message
 * @returns {string}
 */
export function decode (message) {
  const regex = /\(([^()]+)\)/g
  const replacer = (_, group) => group.split('').reverse().join('')

  return message
    .replace(regex, replacer)
    .replace(regex, replacer)
}
