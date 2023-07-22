import React from 'react'
import {
  AvailableBlocks,
  IContentSection,
} from '../../../types/elements/ContentSection'
import BlockWithTwoTextColumns from './BlockWithTwoTextColumns'
import FullsizeImage from './FullsizeImage'

const blocksLinkedToComponents: Record<AvailableBlocks['key'], React.FC> = {
  IBlockWithTwoTextColumns: BlockWithTwoTextColumns,
  IFullsizeImage: FullsizeImage,
}

const getBlock = (props: AvailableBlocks) => {
  const Block = blocksLinkedToComponents[props.key]
  return <Block {...props} />
}
const ContentSection: React.FC<IContentSection> = ({ name, title, blocks }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="container pt-[90px]">
        {!!name && (
          <p className="text-section-title mb-[10px] md:mb-[20px]">
            {name ?? ''}
          </p>
        )}
        {!!title && (
          <h2
            className="flex h-[79px] items-center"
            dangerouslySetInnerHTML={{ __html: title ?? '' }}
          />
        )}
        {blocks.map((block) => {
          return getBlock(block)
        })}
      </div>
    </div>
  )
}

export default ContentSection
