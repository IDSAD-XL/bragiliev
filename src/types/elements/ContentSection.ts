import { IBlockWithTwoTextColumns } from '../../components/elements/dynamic-blocks/BlockWithTwoTextColumns'
import { IFullsizeImage } from '../../components/elements/dynamic-blocks/FullsizeImage'
import { IBlockWithImageAndTexts } from '../../components/elements/dynamic-blocks/BlockWithImageAndTexts'
import { IBlockWithTwoImages } from '../../components/elements/dynamic-blocks/BlockWithTwoImages'
import { IBlockWithHalfscreenImage } from '../../components/elements/dynamic-blocks/BlockWithHalfscreenImage'

export type AvailableBlocks =
  | IBlockWithTwoTextColumns
  | IFullsizeImage
  | IBlockWithImageAndTexts
  | IBlockWithTwoImages
  | IBlockWithHalfscreenImage

export interface IContentSection {
  name?: string
  title?: string
  color: 'white' | 'gray'
  blocks: AvailableBlocks[]
}
