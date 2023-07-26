import React from 'react'
import { IContentBlock } from '../../../types/elements/ContentBlock'
import Image from 'next/image'

export interface IBlockWithImageAndTexts extends IContentBlock {
  key: 'IBlockWithImageAndTexts'
  imageSrc: string
  imageSrcMobile?: string
  textRightToBottom?: boolean
  imageDescription?: string
  titleRight?: string
  textsRight?: string[]
}

const BlockWithTwoTextColumns: React.FC<IBlockWithImageAndTexts> = ({
  imageSrc,
  imageSrcMobile,
  imageDescription,
  textRightToBottom,
  titleRight,
  textsRight,
}) => {
  return (
    <div className="mb-[60px] mt-[20px] flex w-full justify-center md:mt-[23px]">
      <div className="container flex flex-wrap gap-x-[20px] gap-y-[30px] lg:flex-nowrap">
        <div className="flex-[100%] flex-shrink lg:flex-[50%] lg:flex-grow-0">
          <div className="relative ml-[-10px] mr-[-10px] aspect-[320/460] overflow-hidden md:ml-0 md:mr-0 lg:aspect-[1276/738]">
            <Image
              className={`object-cover object-top ${
                imageSrcMobile ? 'hidden md:block' : ''
              }`}
              src={imageSrc}
              alt={''}
              fill={true}
            />
            {imageSrcMobile && (
              <Image
                className={`object-cover object-top ${
                  imageSrcMobile ? 'md:hidden' : ''
                }`}
                src={imageSrcMobile}
                alt={''}
                fill={true}
              />
            )}
          </div>
          {imageDescription && (
            <p
              className="text-regular mt-[15px] text-right !text-[12px] italic md:mt-[9px] md:!text-[14px]"
              dangerouslySetInnerHTML={{ __html: imageDescription }}
            />
          )}
        </div>
        <div
          className={`text-regular flex flex-shrink flex-col gap-y-[30px] lg:flex-[50%] lg:flex-grow-0 lg:pl-[108px] ${
            textRightToBottom ? 'justify-end' : ''
          }`}
        >
          {titleRight && (
            <p
              className="text-large"
              dangerouslySetInnerHTML={{ __html: titleRight }}
            />
          )}
          {textsRight?.map((text, index) => {
            return <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          })}
        </div>
      </div>
    </div>
  )
}

export default BlockWithTwoTextColumns
