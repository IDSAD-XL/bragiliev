import React from 'react'
import { type ReactNode } from '../../../types/ReactNode'
import Image from 'next/image'

export interface IAboutClinicBlock {
  name?: string
  title?: string
  subTitle?: string
  image?: string
  imageMobile?: string
  imageSmall?: string
  children?: ReactNode
  additionally?: {
    text: string
    subtext: string
  }
  noPadBottom?: boolean
  variant: 'white' | 'gray'
}

interface aboutClinicBlockSettings {
  background: string
}

const aboutClinicBlockStyles: Record<
  IAboutClinicBlock['variant'],
  aboutClinicBlockSettings
> = {
  white: {
    background: 'bg-[#ffffff]',
  },
  gray: {
    background: 'bg-[#f9f9f9]',
  },
}

const AboutClinicBlock: React.FC<IAboutClinicBlock> = ({
  name,
  title,
  subTitle,
  image = '',
  imageMobile,
  imageSmall,
  children,
  additionally,
  noPadBottom,
  variant = 'gray',
}) => {
  const styles = aboutClinicBlockStyles[variant]

  return (
    <div
      className={`${styles.background} ${
        noPadBottom ? 'pb-[0px]' : 'pb-[30px]'
      } pb-[30px] pt-[36px] dsk:pt-[53px]`}
    >
      <div className="container mx-auto">
        {!!name && (
          <p className="text-section-title mb-[19px] md:mb-[27px]">
            {name ?? ''}
          </p>
        )}
        {!!title && (
          <h4
            className="title2 font-[600]"
            dangerouslySetInnerHTML={{ __html: title ?? '' }}
          />
        )}
        {children}
      </div>
      {imageSmall ? (
        <div className="container mx-auto ">
          <div className="lg:flex lg:justify-start lg:gap-[29px] lg:border-t-[1px] lg:pt-[41px]">
            <div className="min-w-[118px]">
              <Image
                className={`object-cover object-center ${
                  imageMobile ? 'hidden md:block' : ''
                }`}
                width="118"
                height="118"
                src={imageSmall}
                alt=""
              />
            </div>
            <div className="hidden lg:block">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M6.15303 10.488C8.49137 7.95297 12.0297 6.66797 16.668 6.66797H18.3347V11.3663L16.9947 11.6346C14.7114 12.0913 13.123 12.9896 12.273 14.308C11.8295 15.0182 11.578 15.8314 11.543 16.668H16.668C17.1101 16.668 17.534 16.8436 17.8465 17.1561C18.1591 17.4687 18.3347 17.8926 18.3347 18.3346V30.0013C18.3347 31.8396 16.8397 33.3346 15.0014 33.3346H5.00137C4.55934 33.3346 4.13541 33.159 3.82285 32.8465C3.51029 32.5339 3.3347 32.11 3.3347 31.668V23.3346L3.3397 18.4696C3.3247 18.2846 3.00803 13.9013 6.15303 10.488ZM33.3347 33.3346H23.3347C22.8927 33.3346 22.4687 33.159 22.1562 32.8465C21.8436 32.5339 21.668 32.11 21.668 31.668V23.3346L21.673 18.4696C21.658 18.2846 21.3414 13.9013 24.4864 10.488C26.8247 7.95297 30.363 6.66797 35.0014 6.66797H36.668V11.3663L35.328 11.6346C33.0447 12.0913 31.4564 12.9896 30.6064 14.308C30.1629 15.0182 29.9113 15.8314 29.8764 16.668H35.0014C35.4434 16.668 35.8673 16.8436 36.1799 17.1561C36.4924 17.4687 36.668 17.8926 36.668 18.3346V30.0013C36.668 31.8396 35.173 33.3346 33.3347 33.3346Z"
                  fill="black"
                />
              </svg>
            </div>
            <div>
              <div className="text-regular mb-[30px] mt-[30px] lg:mt-[0] dsk:mb-[38px]">
                {subTitle}
              </div>
              <div className="italic">Вадим Брагилев</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <Image
            className={`w-full object-cover object-center ${
              imageMobile ? 'hidden md:block' : ''
            }`}
            width="100"
            height="100"
            src={image}
            alt=""
          />
          {imageMobile && (
            <Image
              className={`w-full  object-center ${
                imageMobile ? 'block md:hidden' : ''
              }`}
              width="100"
              height="100"
              src={imageMobile}
              alt=""
            />
          )}
        </div>
      )}
      {!!additionally && (
        <div className="container mx-auto flex flex-[50%] flex-col gap-[30px] dsk:mb-[93px] dsk:mt-[30px] dsk:mt-[90px] dsk:flex-row dsk:items-center dsk:justify-between">
          <h5 className="mt-[30px] text-[18px] leading-[28px] dsk:mt-[0] dsk:w-[666px] dsk:min-w-[666px] dsk:text-[30px] dsk:leading-[135%] dsk:tracking-[1px]">
            {additionally.text}
          </h5>
          <p className="text-[14px] font-[500] leading-[22px] dsk:w-[461px] dsk:min-w-[461px]">
            {additionally.subtext}
          </p>
        </div>
      )}
    </div>
  )
}
export default AboutClinicBlock
