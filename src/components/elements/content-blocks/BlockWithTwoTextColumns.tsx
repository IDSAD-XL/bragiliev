import React from 'react'
import { IContentBlock } from '../../../types/elements/ContentBlock'

export interface IBlockWithTwoTextColumns extends IContentBlock {
  key: 'IBlockWithTwoTextColumns'
  textsLeft?: string[]
  textsRight?: string[]
}

const BlockWithTwoTextColumns: React.FC<IBlockWithTwoTextColumns> = ({
  textsRight,
  textsLeft,
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className="container flex flex-wrap gap-x-[20px] gap-y-[30px] lg:flex-nowrap">
        <div className="text-large flex-shrink lg:flex-[50%] lg:flex-grow-0">
          {textsLeft &&
            textsLeft.map((text) => {
              return <p dangerouslySetInnerHTML={{ __html: text }} />
            })}
        </div>
        <div className="text-regular flex flex-shrink flex-col gap-y-[30px] lg:flex-[50%] lg:flex-grow-0 lg:pl-[108px]">
          {textsRight &&
            textsRight.map((text) => {
              return <p dangerouslySetInnerHTML={{ __html: text }} />
            })}
        </div>
      </div>
    </div>
  )
}

export default BlockWithTwoTextColumns
