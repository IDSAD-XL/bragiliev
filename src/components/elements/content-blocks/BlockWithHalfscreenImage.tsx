import React from 'react'
import { IContentBlock } from '../../../types/elements/ContentBlock'
import Image from 'next/image'

export interface IBlockWithHalfscreenImage extends IContentBlock {
  key: 'IBlockWithHalfscreenImage'
  src: string
  mobileSrc?: string
  imagePosition: 'left' | 'right'
  content?: string
}

const BlockWithHalfscreenImage: React.FC<IBlockWithHalfscreenImage> = ({
  src,
  mobileSrc,
  imagePosition,
}) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full">
        {imagePosition === 'right' && (
          <div className="hidden flex-grow-0 md:block md:flex-[50%]" />
        )}
        <div
          className={`relative aspect-[795/902] w-full flex-[100%] !flex-grow-0 overflow-hidden md:flex-[50%]`}
        >
          <Image
            className={`object-cover object-top ${
              mobileSrc ? 'hidden md:block' : ''
            }`}
            src={src}
            alt={''}
            fill={true}
          />
          {mobileSrc && (
            <Image
              className={`object-cover object-top ${
                mobileSrc ? 'md:hidden' : ''
              }`}
              src={mobileSrc}
              alt={''}
              fill={true}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default BlockWithHalfscreenImage
