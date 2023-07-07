import React from 'react'
import { type ReactNode } from '../../types/ReactNode'
import Link from 'next/link'

export interface IInfoBlock {
  name?: string
  title?: string
  subtitle?: string
  link?: string
  children?: ReactNode
}

const InfoBlock: React.FC<IInfoBlock> = ({
  name,
  title,
  subtitle,
  link,
  children,
}) => {
  return (
    <div className="flex w-full justify-center bg-secondary dsk:justify-center">
      <div className="container mb-[60px] mt-[60px] flex flex-col md:mb-[90px] md:mt-[90px]">
        {!!name && (
          <p className="text-section-title mb-[10px] md:mb-[20px]">
            {name ?? ''}
          </p>
        )}
        {!!title && (
          <h2
            className="flex h-[85px] items-center md:mb-[15px]"
            dangerouslySetInnerHTML={{ __html: title ?? '' }}
          />
        )}
        {!!subtitle && (
          <div className="lex-cols-2">
            <div className="flex-grow-1 flex-[100%] dsk:flex-[50%]">
              <p
                className="title5"
                dangerouslySetInnerHTML={{ __html: subtitle ?? '' }}
              />
            </div>
            <div className="flex flex-[50%] flex-grow-0 gap-[95px]">
              {children}
            </div>
          </div>
        )}
        {!!link && (
          <div className="mt-[30px] md:mt-[55px]">
            <Link href={link} className="link-plus">
              УЗНАТЬ БОЛЬШЕ
            </Link>
          </div>
        )}
        
      </div>
    </div>
  )
}

export default InfoBlock
