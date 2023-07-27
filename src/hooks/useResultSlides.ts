import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  ISelectContent,
  ISelectVariant,
} from '../components/elements/stateless-components/Select'
import { filterItemsWithDependencies } from '../utils/filterByDependencies'
import {
  ItemDependency,
  ItemWithDependencies,
} from '../types/elements/ItemsWithDependecies'

export function useResultSlides<T extends ItemWithDependencies>(
  selects: ISelectContent[],
  results: T[]
) {
  const [activePart, setActivePart] = useState<ISelectVariant | null>(null)
  const [activeOperation, setActiveOperation] = useState<ISelectVariant | null>(
    null
  )
  const [filteredOperations, setFilteredOperations] = useState<
    ISelectVariant[]
  >(selects[1].variants)

  const filteredResults: T[] = useMemo(() => {
    if (!activePart && !activeOperation) return results
    if (activePart && !activeOperation) {
      return filterItemsWithDependencies(results, [
        { id: activePart.id, key: 'part' } as ItemDependency,
      ])
    } else if (activePart && activeOperation) {
      return filterItemsWithDependencies(results, [
        { id: activePart.id, key: 'part' } as ItemDependency,
        { id: activeOperation.id, key: 'operation' } as ItemDependency,
      ])
    }
    return results
  }, [activePart, activeOperation, results])

  const changePart = (val: ISelectVariant) => {
    setActivePart(val)
    setActiveOperation(null)
  }

  const changeOperation = useCallback(
    (val: ISelectVariant) => {
      const findDep = val?.dependencies?.find(({ key }) => key === 'part')
      if (findDep) {
        if (activePart?.id !== findDep.id) {
          const findValue = selects[0].variants.find(
            ({ id }) => id === findDep.id
          )
          if (findValue) setActivePart(findValue)
        }
      }
      setActiveOperation(val)
    },
    [activePart, selects]
  )

  useEffect(() => {
    let filteredOperations
    if (activePart === null) {
      filteredOperations = selects[1].variants
    } else {
      filteredOperations = filterItemsWithDependencies(selects[1].variants, [
        { id: activePart.id, key: 'part' },
      ])
    }

    setFilteredOperations(filteredOperations)
  }, [activePart, activeOperation, selects])

  return {
    activePart,
    activeOperation,
    filteredOperations,
    filteredResults,
    changePart,
    changeOperation,
  }
}
