import React from 'react'
import {
  AvailableBlocks,
  IContentSection,
} from '../../../types/elements/ContentSection'
import BlockWithTwoTextColumns from './BlockWithTwoTextColumns'
import FullsizeImage from './FullsizeImage'
import BlockWithImageAndTexts from './BlockWithImageAndTexts'
import BlockWithTwoImages from './BlockWithTwoImages'
import BlockWithHalfscreenImage from './BlockWithHalfscreenImage'
import {ReactNode} from "../../../types/ReactNode";

const blocksLinkedToComponents: Record<AvailableBlocks['key'], ReactNode> = {
  IBlockWithTwoTextColumns: BlockWithTwoTextColumns,
  IFullsizeImage: FullsizeImage,
  IBlockWithImageAndTexts: BlockWithImageAndTexts,
  IBlockWithTwoImages: BlockWithTwoImages,
  IBlockWithHalfscreenImage: BlockWithHalfscreenImage,
}

const getBlock = (props: AvailableBlocks) => {
  const Block = blocksLinkedToComponents[props.key] as React.FC
  return <Block {...props} />
}
const ContentSection: React.FC<IContentSection> = ({
  name,
  title,
  blocks,
  color,
}) => {
  return (
    <div
      className={`flex w-full justify-center ${
        color === 'white' ? 'bg-white' : 'bg-secondary'
      }`}
    >
      <div
        className={`flex w-full flex-col items-center ${
          name ?? title ? 'pb-[60px] pt-[60px] lg:pb-[90px] lg:pt-[90px]' : ''
        }`}
      >
        {(name ?? title) && (
          <div className="container mb-[20px] md:mb-[23px]">
            {!!name && (
              <p className="text-section-title mb-[10px] md:mb-[20px]">
                {name ?? ''}
              </p>
            )}
            {!!title && (
              <h2
                className="flex items-center"
                dangerouslySetInnerHTML={{ __html: title ?? '' }}
              />
            )}
          </div>
        )}
        {blocks.map((block) => {
          return getBlock(block)
        })}
      </div>
    </div>
  )
}

export default ContentSection
