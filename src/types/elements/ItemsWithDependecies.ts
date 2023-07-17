export interface ItemDependency {
  id: string
  key: string
}

export interface ItemWithDependencies {
  id: string
  dependencies?: ItemDependency[]
}
