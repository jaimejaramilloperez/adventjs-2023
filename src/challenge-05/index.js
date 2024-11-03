/**
 * @param {string} road
 * @param {number} time
 * @returns {string[]}
 */
export function cyberReindeer (road, time) {
  const moves = [road]
  let santaPosition = 0
  let char = '.'

  for (let i = 1; i < time; i++) {
    if (i === 5) road = road.replaceAll('|', '*')
    const newRoad = road.replace(/S[.*]/, `${char}S`)

    if (newRoad !== road) {
      santaPosition++
      char = road[santaPosition]
    }

    road = newRoad
    moves.push(road)
  }

  return moves
}
