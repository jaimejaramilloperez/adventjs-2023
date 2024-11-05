/**
 * @param {string} word
 * @returns {number[] | null}
 */
export function getIndexsForPalindrome (word) {
  const len = word.length
  word = word.toLowerCase()

  const isPalindrome = (string) => {
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (string[i] !== string[len - 1 - i]) return false
    }

    return true
  }

  if (isPalindrome(word)) return []

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (word[i] === word[j]) continue

      const string = word.split('');
      [string[i], string[j]] = [string[j], string[i]]

      if (isPalindrome(string)) return [i, j]
    }
  }

  return null
}
