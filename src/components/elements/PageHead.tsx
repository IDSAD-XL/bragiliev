import React from 'react'
import { type ReactNode } from '../../types/ReactNode'
import Image from 'next/image'

interface IInfoBlock {
  name?: string
  title?: string
  image?: string
  children: ReactNode
}

const PageHead: React.FC<IInfoBlock> = ({
  name,
  title,
  image = '',
  children,
}) => {
  return (
    <div className="flex h-screen w-full justify-center">
      <Image
        className="-z-10 object-cover object-center"
        src={image}
        alt=""
        fill={true}
      />
      <div className="container flex gap-[108px]">
        <div className="flex-[50%] flex-shrink-0 flex-grow-0"></div>
        <div className="flex flex-[50%] flex-col justify-center text-white">
          {!!name && (
            <p className="text-section-title mb-[35px]">{name ?? ''}</p>
          )}
          {!!title && <h1 dangerouslySetInnerHTML={{ __html: title ?? '' }} />}
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageHead
