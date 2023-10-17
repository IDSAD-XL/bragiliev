import React, {
  type MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'
import { type ReactNode } from '../../../types/ReactNode'
import Link from 'next/link'
import { CSSProperties } from 'react'
import ImageWithDomain from './ImageWithDomain'

export interface IAccordionContent {
  name?: string
  number?: string
  text?: string | ReactNode
  image?: string
  link?: string
}

interface IAccordion extends IAccordionContent {
  open: boolean
  onClick: MouseEventHandler
}

interface contentCssProps extends CSSProperties {
  '--scroll-h': string
}

const Accordion: React.FC<IAccordion> = ({
  name,
  text,
  link,
  number,
  image,
  open = false,
  onClick,
}) => {
  const [scrollHeight, setScrollHeight] = useState<number>(0)

  const contentRef = useRef<HTMLDivElement | null>(null)

  const checkScrollHeight = () => {
    if (contentRef.current) {
      setScrollHeight(contentRef.current.scrollHeight + 20)
    }
  }

  useEffect(() => {
    checkScrollHeight()

    window.addEventListener('resize', checkScrollHeight)
    return () => {
      window.removeEventListener('resize', checkScrollHeight)
    }
  }, [])

  return (
    <div
      className={`group/accordion w-full border-b-1 border-half-gray  ${
        open ? 'pb-[20px]' : ''
      }`}
    >
      <div
        className={`flex min-h-[72px] w-full cursor-pointer items-center justify-between text-left`}
        onClick={onClick}
      >
        <div className="transition-colors group-hover/accordion:text-hover-blue">
          <span className="title5">{name}</span>
          {!!number && <span className="text-light"> {number}</span>}
        </div>
        <div className="relative flex h-[43px] w-[43px] items-center justify-center">
          <span
            className={`absolute h-[2px] w-[22px] ${
              open ? 'bg-[--color-hover-blue]' : 'bg-dark'
            }`}
          ></span>
          <span
            className={`absolute h-[2px] w-[22px] transition-transform ${
              open
                ? 'rotate-0 bg-[--color-hover-blue]'
                : 'rotate-[90deg] bg-dark'
            }`}
          ></span>
        </div>
      </div>
      <div
        ref={contentRef}
        style={
          {
            '--scroll-h': `${scrollHeight}px`,
          } as contentCssProps
        }
        className={`relative overflow-hidden text-left transition-[max-height] ${
          open ? 'max-h-[--scroll-h]' : 'max-h-0'
        }`}
      >
        <div dangerouslySetInnerHTML={{ __html: text ?? '' }} />
        {!!link && (
          <Link href={link} className="link-plus mt-[40px]">
            Подробнее
          </Link>
        )}
        {!!image && (
          <div className="relative mt-[36px] aspect-square w-full dsk:hidden">
            <ImageWithDomain
              src={image}
              fill={true}
              alt=""
              className="object-cover object-center"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion
