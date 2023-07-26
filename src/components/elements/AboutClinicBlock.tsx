import React from 'react'
import { type ReactNode } from '../../types/ReactNode'
import Image from 'next/image'

export interface IAboutClinicBlock {
  name?: string
  title?: string
  subTitle?: string
  image?: string
  imageMobile?: string
  imageSmall?: string
  children?: ReactNode
  variant: 'first' | 'second'
}

interface aboutClinicBlockSettings {
  background: string
}

const aboutClinicBlockStyles: Record<
  IAboutClinicBlock['variant'],
  aboutClinicBlockSettings
> = {
  first: {
    background: 'white',
  },
  second: {
    background: 'gray',
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
  variant = 'first',
}) => {
  const styles = aboutClinicBlockStyles[variant]
  console.log(children)

  return (
    <div className="pt-[36px] dsk:pt-[53px]">
      <div className="container mx-auto">
        {!!name && (
          <p className="text-section-title mb-[19px] md:mb-[27px]">
            {name ?? ''}
          </p>
        )}
        {!!title && (
          <h4
            className="title2 mb-[30px] font-[600]"
            dangerouslySetInnerHTML={{ __html: title ?? '' }}
          />
        )}
        {!!children && (
          <div className="mb-[30px] flex flex-[50%] flex-col gap-[30px] dsk:mb-[93px] dsk:flex-row dsk:gap-[193px]">
            {children}
          </div>
        )}
      </div>
      <div className="w-full">
        <Image
          className={`w-full object-cover object-center ${
            imageMobile ? 'hidden lg:block' : ''
          }`}
          width="100"
          height="100"
          src={image}
          alt=""
        />
        {imageMobile && (
          <Image
            className={`w-full  object-center ${
              imageMobile ? 'block lg:hidden' : ''
            }`}
            width="100"
            height="100"
            src={imageMobile}
            alt=""
          />
        )}
      </div>
    </div>
  )
}
export default AboutClinicBlock
