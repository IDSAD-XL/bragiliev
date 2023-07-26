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
  content,
}) => {
  return (
    <div
      className={`relative flex min-h-[460px] w-full flex-col-reverse items-center overflow-hidden lg:flex-col dsk:min-h-[902px]`}
    >
      <div className="flex h-full w-full lg:absolute">
        {imagePosition === 'right' && (
          <div className="hidden flex-grow-0 md:flex-[50%] lg:block" />
        )}
        <div
          className={`relative aspect-[795/902] w-full flex-[100%] !flex-grow-0 overflow-hidden lg:flex-[50%]`}
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
      <div className="container flex h-full items-center">
        {imagePosition === 'left' && (
          <div className="hidden flex-shrink-0 flex-grow-0 md:block lg:flex-[50%]" />
        )}
        <div
          className={`flex-[100%] !flex-grow-0 items-center pb-[30px] pt-[30px] lg:flex-[50%] ${
            imagePosition === 'right' ? 'lg:pr-[73px]' : 'lg:pl-[73px]'
          }`}
          dangerouslySetInnerHTML={{ __html: content ?? '' }}
        />
      </div>
    </div>
  )
}

export default BlockWithHalfscreenImage
