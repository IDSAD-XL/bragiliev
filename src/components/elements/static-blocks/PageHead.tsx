import React from 'react'
import { type ReactNode } from '../../../types/ReactNode'
import Image from 'next/image'
import Link from 'next/link'

export interface IPageHead {
  name?: string
  title?: string
  image?: string
  imageMobile?: string
  children?: ReactNode
  topLinkText?: string
  topLinkUrl?: string
  variant: 'main' | 'simple'
}

interface pageHeadSettings {
  title: string
}

const pageHeadStyles: Record<IPageHead['variant'], pageHeadSettings> = {
  main: {
    title: 'uppercase md:normal-case dsk:uppercase',
  },
  simple: {
    title: 'font-[600] title2',
  },
}

const PageHead: React.FC<IPageHead> = ({
  name,
  title,
  image = '',
  imageMobile,
  children,
  topLinkText,
  topLinkUrl,
  variant = 'simple',
}) => {
  const styles = pageHeadStyles[variant]

  return (
    <div className="relative flex h-screen w-full justify-start md:justify-center">
      <Image
        className={`-z-10 object-cover object-center ${
          imageMobile ? 'hidden lg:block' : ''
        }`}
        src={image}
        alt=""
        fill={true}
      />
      {imageMobile && (
        <Image
          className={`-z-10 object-cover object-center ${
            imageMobile ? 'block lg:hidden' : ''
          }`}
          src={imageMobile}
          alt=""
          fill={true}
        />
      )}
      <div className="flex-cols-2 container">
        {variant === 'main' && (
          <div className="hidden flex-[50%] flex-shrink-0 flex-grow-0 dsk:flex"></div>
        )}
        <div className="flex flex-[50%] flex-col justify-end pb-[56px] text-white md:pb-[93px] lg:flex-grow-0 dsk:justify-center dsk:pb-0">
          {variant === 'simple' && topLinkText && topLinkUrl && (
            <div className="absolute top-[160px]">
              <Link
                href={topLinkUrl}
                className="link-hover-effect font-[Inter] uppercase"
              >
                {topLinkText}
              </Link>
            </div>
          )}
          {!!name && (
            <p className="text-section-title mb-[10px] md:mb-[23px] dsk:mb-[35px]">
              {name ?? ''}
            </p>
          )}
          {!!title && (
            <h1
              className={`${styles.title}`}
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
