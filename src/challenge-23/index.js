/**
 * @param {string[][]} dishes
 * @returns {string[][]}
 */
export function organizeChristmasDinner (dishes) {
  const ingredientsMap = new Map()
  const organizedDishes = []

  for (let i = 0; i < dishes.length; i++) {
    const [dish, ...ingredients] = dishes[i]

    for (const ingredient of ingredients) {
      const dishes = ingredientsMap.get(ingredient) ?? []
      dishes.push(dish)
      ingredientsMap.set(ingredient, dishes)
    }
  }

  for (const [ingredient, dishes] of ingredientsMap) {
    if (dishes.length >= 2) {
      organizedDishes.push([ingredient, ...dishes.sort()])
    }
  }

  return organizedDishes.sort((a, b) => a[0].localeCompare(b[0]))
}
