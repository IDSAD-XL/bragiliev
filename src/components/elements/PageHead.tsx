import React from 'react'
import { type ReactNode } from '../../types/ReactNode'
import Image from 'next/image'

interface IPageHead {
  name?: string
  title?: string
  image?: string
  children?: ReactNode
}

const PageHead: React.FC<IPageHead> = ({
  name,
  title,
  image = '',
  children,
}) => {
  return (
    <div className="flex h-screen w-full justify-start dsk:justify-center">
      <Image
        className="-z-10 object-cover object-center"
        src={image}
        alt=""
        fill={true}
      />
      <div className="flex-cols-2 container">
        <div className="hidden flex-[50%] flex-shrink-0 flex-grow-0 dsk:flex"></div>
        <div className="flex flex-[50%] flex-col justify-end pb-[56px] text-white md:pb-[93px] dsk:justify-center dsk:pb-0">
          {!!name && (
            <p className="text-section-title mb-[10px] md:mb-[23px] dsk:mb-[35px]">
              {name ?? ''}
            </p>
          )}
          {!!title && (
            <h1
              className="uppercase md:normal-case dsk:uppercase"
              dangerouslySetInnerHTML={{ __html: title ?? '' }}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageHead
