import { IBlockWithTwoTextColumns } from '../../components/elements/content-blocks/BlockWithTwoTextColumns'
import { IFullsizeImage } from '../../components/elements/content-blocks/FullsizeImage'

export type AvailableBlocks = IBlockWithTwoTextColumns | IFullsizeImage

export interface IContentSection {
  name: string
  title: string
  color: 'white' | 'gray'
  blocks: AvailableBlocks[]
}
