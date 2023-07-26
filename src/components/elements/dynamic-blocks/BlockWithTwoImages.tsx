import React from 'react'
import { IContentBlock } from '../../../types/elements/ContentBlock'
import Image from 'next/image'

export interface IBlockWithTwoImages extends IContentBlock {
  key: 'IBlockWithTwoImages'
  imageLeftSrc: string
  imageLeftSrcMobile?: string
  imageLeftDescription?: string
  imageRightSrc: string
  imageRightSrcMobile?: string
  imageRightDescription?: string
}

const BlockWithTwoImages: React.FC<IBlockWithTwoImages> = ({
  imageLeftSrc,
  imageLeftSrcMobile,
  imageLeftDescription,
  imageRightSrc,
  imageRightSrcMobile,
  imageRightDescription,
}) => {
  return (
    <div className="mb-[60px] mt-[20px] flex w-full justify-center md:mt-[23px]">
      <div className="container flex flex-wrap gap-x-[20px] gap-y-[30px] lg:flex-nowrap">
        <div className="flex-[100%] flex-shrink lg:flex-[50%] lg:flex-grow-0">
          <div className="relative ml-[-10px] mr-[-10px] aspect-[628/486] overflow-hidden md:ml-0 md:mr-0">
            <Image
              className={`object-cover object-top ${
                imageLeftSrcMobile ? 'hidden md:block' : ''
              }`}
              src={imageLeftSrc}
              alt={''}
              fill={true}
            />
            {imageLeftSrcMobile && (
              <Image
                className={`object-cover object-top ${
                  imageLeftSrcMobile ? 'md:hidden' : ''
                }`}
                src={imageLeftSrcMobile}
                alt={''}
                fill={true}
              />
            )}
          </div>
          {imageLeftDescription && (
            <p
              className="text-regular mt-[15px] text-right !text-[12px] italic md:mt-[9px] md:!text-[14px]"
              dangerouslySetInnerHTML={{ __html: imageLeftDescription }}
            />
          )}
        </div>
        <div className="flex-[100%] flex-shrink lg:flex-[50%] lg:flex-grow-0">
          <div className="relative ml-[-10px] mr-[-10px] aspect-[628/486] overflow-hidden md:ml-0 md:mr-0">
            <Image
              className={`object-cover object-top ${
                imageRightSrcMobile ? 'hidden md:block' : ''
              }`}
              src={imageRightSrc}
              alt={''}
              fill={true}
            />
            {imageRightSrcMobile && (
              <Image
                className={`object-cover object-top ${
                  imageRightSrcMobile ? 'md:hidden' : ''
                }`}
                src={imageRightSrcMobile}
                alt={''}
                fill={true}
              />
            )}
          </div>
          {imageRightDescription && (
            <p
              className="text-regular mt-[15px] text-right !text-[12px] italic md:mt-[9px] md:!text-[14px]"
              dangerouslySetInnerHTML={{ __html: imageRightDescription }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default BlockWithTwoImages
