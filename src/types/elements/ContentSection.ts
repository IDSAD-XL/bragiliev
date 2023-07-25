import { IBlockWithTwoTextColumns } from '../../components/elements/content-blocks/BlockWithTwoTextColumns'
import { IFullsizeImage } from '../../components/elements/content-blocks/FullsizeImage'
import { IBlockWithImageAndTexts } from '../../components/elements/content-blocks/BlockWithImageAndTexts'
import { IBlockWithTwoImages } from '../../components/elements/content-blocks/BlockWithTwoImages'
import { IBlockWithHalfscreenImage } from '../../components/elements/content-blocks/BlockWithHalfscreenImage'

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
