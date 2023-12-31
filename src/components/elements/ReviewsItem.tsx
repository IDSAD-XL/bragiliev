import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export interface IReviewsItem {
  id: number
  date: string
  name: string
  content: string
  link: string
  image?: string
}

const ReviewsItem: React.FC<IReviewsItem> = ({
  date,
  content,
  link,
  name,
  image,
}) => {
  return (
    <div className="group flex aspect-[300/385] w-[365px] max-w-[412px] flex-col border-1 border-light-gray bg-light-gray pb-[60px] pl-[30px] pr-[31px] pt-[40px] transition-[background] hover:border-[#D6D6D6] hover:bg-white md:aspect-[365/482] md:pt-[60px] dsk:aspect-[412/590] dsk:w-full dsk:pb-[154px] dsk:pl-[40px] dsk:pt-[160px]">
      <p className="font-[Inter] text-[12px] leading-[18px] md:text-[18px] dsk:text-[12px]">
        {date}
      </p>
      <p className="title-logo mt-[18px] !font-[500]">{name}</p>
      <p
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-regular mt-[27px]"
      />
      <div className="mt-[30px] flex gap-[10px]">
        <span className="text-regular flex h-[40px] flex-[142px] cursor-pointer items-center justify-center whitespace-nowrap bg-white pl-[15px] pr-[15px] transition-all group-hover:bg-hover-blue group-hover:text-white">
          + ЧИТАТЬ ДАЛЕЕ
        </span>
        <Link
          href={link ?? '#'}
          className="relative box-border h-[40px] flex-[142px] border-1 border-white bg-white transition-all group-hover:border-[#cdcdcd]"
        >
          <Image
            src={image ?? ''}
            fill={true}
            alt=""
            className="object-cover object-center"
          />
        </Link>
      </div>
    </div>
  )
}

export default ReviewsItem
