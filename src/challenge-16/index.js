/**
 * @param {string[]} tree
 * @returns {object | null}
 */
export function transformTree (tree) {
  if (tree.length === 0) return null

  const createNode = (index) => {
    if (index >= tree.length || tree[index] === null) return null

    const node = {
      value: tree[index],
      left: createNode(2 * index + 1),
      right: createNode(2 * index + 2)
    }

    return node
  }

  return createNode(0)
}
