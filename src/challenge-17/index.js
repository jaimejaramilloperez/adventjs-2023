/**
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
export function optimizeIntervals (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const mergedIntervals = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i]
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1]

    if (lastMergedInterval[1] >= currentInterval[0]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1])
    } else {
      mergedIntervals.push(currentInterval)
    }
  }

  return mergedIntervals
}
