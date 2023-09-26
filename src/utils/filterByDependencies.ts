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
      const foundDeps = item.dependencies?.filter(({ key }) => key === dep.key)
      res = !!(foundDeps?.some(depItem => depItem.id === dep.id));
    }
    return res
  })
}
