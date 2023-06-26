import React from 'react'
import { type ReactNode } from '../../types/ReactNode'
import Image from 'next/image'

export interface IInfoBlockWithImage {
  name?: string
  title?: string
  subtitle?: string
  image?: string
  children?: ReactNode
}

const InfoBlockWithImage: React.FC<IInfoBlockWithImage> = ({
  name,
  title,
  subtitle,
  image = '',
  children,
}) => {
  return (
    <div className="relative flex min-h-[530px] w-full justify-center pt-[83px] md:h-[1468px] md:items-center md:pb-[90px] md:pt-[90px] dsk:mt-[114px] dsk:min-h-min dsk:pb-[114px]">
      <Image
        className="-z-10 object-cover object-center"
        src={image}
        alt=""
        fill={true}
      />
      <div className="container flex h-full items-start gap-[20px]">
        <div className="hidden flex-[50%] flex-shrink-0 flex-grow-0 dsk:flex"></div>
        <div className="flex h-full flex-[50%] flex-col justify-start text-white dsk:justify-center">
          {!!name && (
            <p className="text-section-title mb-[10px] md:mb-[23px] dsk:mb-[35px]">
              {name ?? ''}
            </p>
          )}
          {!!title && (
            <h2
              className="text-[48px] leading-[80px] md:text-[56px]"
              dangerouslySetInnerHTML={{ __html: title ?? '' }}
            />
          )}
          {!!subtitle && (
            <h5 className="mb-[5px] text-white md:mb-[15px] md:text-[#A3A3A3] dsk:text-white">
              {subtitle ?? ''}
            </h5>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

export default InfoBlockWithImage
