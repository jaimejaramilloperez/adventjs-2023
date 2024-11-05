/**
 * @param {string[]} deliveries
 * @returns {string}
 */
export function calculateTime (deliveries) {
  const LIMIT_IN_SECONDS = 25200
  let totalSeconds = 0

  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(':')
    totalSeconds += Number(hours) * 3600
    totalSeconds += Number(minutes) * 60
    totalSeconds += Number(seconds)
  }

  const diffTime = LIMIT_IN_SECONDS - totalSeconds
  const sign = Math.sign(diffTime) === 1 ? '-' : ''
  const absDiffTime = Math.abs(diffTime)

  const hh = Math.floor(absDiffTime / 3600)
  const mm = Math.floor((absDiffTime / 60) - (hh * 60))
  const ss = Math.floor(absDiffTime - (hh * 3600) - (mm * 60))

  return sign + [
    hh.toString().padStart(2, '0'),
    mm.toString().padStart(2, '0'),
    ss.toString().padStart(2, '0')
  ].join(':')
}
