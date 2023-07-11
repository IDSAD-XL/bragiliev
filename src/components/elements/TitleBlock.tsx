import React from 'react'

export interface ITitleBlock {
  name?: string
  title?: string
}

const TitleBlock: React.FC<ITitleBlock> = ({ name, title }) => {
  return (
    <div className="bg-primary  flex w-full justify-center  dsk:justify-center">
      <div className="container mb-[5px]  mt-[120px] flex flex-col md:mt-[160px] dsk:mb-[20px]">
        {!!name && (
          <p className="text-section-title mb-[10px] md:mb-[20px]">
            {name ?? ''}
          </p>
        )}
        {!!title && (
          <h2
            className="flex h-[79px] items-center"
            dangerouslySetInnerHTML={{ __html: title ?? '' }}
          />
        )}
      </div>
    </div>
  )
}

export default TitleBlock
