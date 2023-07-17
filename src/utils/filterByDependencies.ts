import {
  ItemDependency,
  ItemWithDependencies,
} from '../types/elements/ItemsWithDependecies'

export function filterItemsWithDependencies<T extends ItemWithDependencies>(
  items: T[],
  filterDependencies: ItemDependency[]
): T[] {
  return items.filter((item) => {
    let res = true
    for (const dep of filterDependencies) {
      const foundDep = item.dependencies?.find(({ key }) => key === dep.key)
      if (foundDep) {
        res = foundDep.id === dep.id
      } else {
        res = false
      }
    }
    return res
  })
}
