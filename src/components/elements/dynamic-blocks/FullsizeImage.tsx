import React from 'react'
import { IContentBlock } from '../../../types/elements/ContentBlock'
import Image from 'next/image'

export interface IFullsizeImage extends IContentBlock {
  key: 'IFullsizeImage'
  src: string
  imageRatioDesktop?: 'large' | 'medium' | 'small'
  imageRatioMobile?: 'large' | 'medium' | 'small'
  description?: string
  mobileSrc?: string
}

const FullsizeImage: React.FC<IFullsizeImage> = ({
  src,
  mobileSrc,
  imageRatioMobile,
  imageRatioDesktop,
  description,
}) => {
  const mobileRatioStyles: Record<
    NonNullable<IFullsizeImage['imageRatioMobile']>,
    string
  > = {
    large: 'aspect-[320/460]',
    medium: 'aspect-[320/391]',
    small: 'aspect-[320/280]',
  }
  const desktopRatioStyles: Record<
    NonNullable<IFullsizeImage['imageRatioMobile']>,
    string
  > = {
    large: 'lg:aspect-[1276/738]',
    medium: 'lg:aspect-[1276/642]',
    small: 'lg:aspect-[1276/642]',
  }
  return (
    <div className="mb-[60px] mt-[30px] flex w-full flex-col items-center lg:mt-[90px]">
      <div className="w-full md:container">
        <div
          className={`relative w-full overflow-hidden ${
            imageRatioMobile
              ? mobileRatioStyles[imageRatioMobile]
              : 'aspect-[320/460]'
          } ${
            imageRatioDesktop
              ? desktopRatioStyles[imageRatioDesktop]
              : 'lg:aspect-[1276/738]'
          }`}
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
      {description && (
        <div className="container">
          <p
            className="text-regular mt-[15px] text-right !text-[12px] italic md:mt-[9px] md:!text-[14px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      )}
    </div>
  )
}

export default FullsizeImage
